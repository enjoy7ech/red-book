import { useEffect, useRef, useState } from 'react';
import { Alert, Button, Drawer, Empty, Input, Modal, Progress, Select, Spin, Tabs, Tag, message } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined, CheckOutlined, SearchOutlined } from '@ant-design/icons';
import { subjects } from './data';
import type { Knowledge, Question, SubjectId } from './data';
import { chapterForKnowledge, textbookChapters, textbookOutlines } from './curriculum';
import type { TextbookChapter } from './curriculum';
import './textbooks.css';
import { ANNOTATION_STORE, annotationSegments, readAnnotations } from './annotations';
import type { Annotation, AnnotationColor } from './annotations';
import { AnnotationEditor, AnnotationList } from './AnnotationPanel';
import type { PendingAnnotation } from './AnnotationPanel';

type Block = { type: 'paragraph'; text: string; images: string[] } | { type: 'table'; rows: { span: number; blocks: Block[] }[][] };
type Reading = { chapterId?: string; sectionId?: string; completed: string[] };
type Props = { notes: Knowledge[]; questions: Question[]; learned: string[]; onLearn: (id:string)=>void; onNote: (note:Knowledge)=>void; onPractice: (questions:Question[])=>void; onVideo: (subject:SubjectId)=>void; initialSubject: SubjectId|'all'; initialChapter?: string; query: string };
export default function TextbookLibrary({notes, questions, learned, onLearn, onNote, onPractice, onVideo, initialSubject, initialChapter, query}:Props) {
 const [subject,setSubject] = useState<SubjectId|'all'>(initialSubject==='all'?'zy1':initialSubject);
 const [search,setSearch] = useState(query);
 const [reading,setReading] = useState<Reading>(()=>{try { const value=JSON.parse(localStorage.getItem('bencao-textbooks-v1')||'null'); return {chapterId:value?.chapterId,sectionId:value?.sectionId,completed:Array.isArray(value?.completed)?[...new Set<string>(value.completed.filter((id:unknown)=>typeof id==='string'&&textbookChapters.some(c=>c.sections.some(s=>s.id===id))))]:[]}; } catch {return {completed:[]};}});
 const [active,setActive] = useState<TextbookChapter|undefined>(()=>textbookChapters.find(c=>c.id===initialChapter));
 const [sectionId,setSectionId] = useState(()=>active?.sections.find(s=>!s.id.endsWith('-intro'))?.id||active?.sections[0]?.id||'');
 const [blocks,setBlocks] = useState<Block[]>([]);
 const [loading,setLoading] = useState(false);
 const [error,setError] = useState('');
 const [tab,setTab] = useState('lecture');
 const top=useRef<HTMLDivElement>(null);
 const [annotations,setAnnotations]=useState<Annotation[]>(readAnnotations);
 const [selection,setSelection]=useState<PendingAnnotation|null>(null);
 const [editing,setEditing]=useState<Annotation|null>(null);
 const [editorOpen,setEditorOpen]=useState(false);
 const [noteText,setNoteText]=useState('');
 const [color,setColor]=useState<AnnotationColor>('yellow');
 const [notebookOpen,setNotebookOpen]=useState(false);
 const [locate,setLocate]=useState<Annotation|null>(null);
 const [toast,toastHolder]=message.useMessage();
 useEffect(()=>{const sync=(e:StorageEvent)=>{if(e.key===ANNOTATION_STORE)setAnnotations(readAnnotations());};window.addEventListener('storage',sync);return ()=>window.removeEventListener('storage',sync);},[]);
 useEffect(()=>{if(!locate||loading||!blocks.length||tab!=='lecture')return;const timer=setTimeout(()=>{const element=document.getElementById(`annotation-${locate.ranges[0].anchor}`);if(element)element.scrollIntoView({behavior:'smooth',block:'center'});else toast.info('原文位置已变化，引用和笔记仍保留。');setLocate(null);},0);return ()=>clearTimeout(timer);},[locate,loading,blocks,tab,sectionId,toast]);
 function persistAnnotations(next:Annotation[]){try{localStorage.setItem(ANNOTATION_STORE,JSON.stringify(next));setAnnotations(next);return true;}catch{toast.error('标注未能保存，浏览器存储空间不足，请先导出备份。');return false;}}
 function captureSelection(){
  const selected=window.getSelection();if(!selected||selected.isCollapsed||!selected.rangeCount){if(!editorOpen)setSelection(null);return;}
  const range=selected.getRangeAt(0);const container=top.current?.querySelector('.lecture-content');
  if(!container||!container.contains(range.startContainer)||!container.contains(range.endContainer))return;
  const ranges:PendingAnnotation['ranges']=[];
  container.querySelectorAll<HTMLElement>('[data-annotation-anchor]').forEach(element=>{
   if(!range.intersectsNode(element))return;const part=document.createRange();part.selectNodeContents(element);
   if(element.contains(range.startContainer))part.setStart(range.startContainer,range.startOffset);
   if(element.contains(range.endContainer))part.setEnd(range.endContainer,range.endOffset);
   const text=part.toString();if(!text.trim())return;
   const before=document.createRange();before.selectNodeContents(element);before.setEnd(part.startContainer,part.startOffset);
   const start=before.toString().length;ranges.push({anchor:element.dataset.annotationAnchor!,start,end:start+text.length,text});
  });
  if(ranges.length)setSelection({quote:ranges.map(r=>r.text).join('\n'),ranges});
 }
 useEffect(()=>{let timer:ReturnType<typeof setTimeout>;const changed=()=>{clearTimeout(timer);timer=setTimeout(captureSelection,120);};document.addEventListener('selectionchange',changed);return ()=>{clearTimeout(timer);document.removeEventListener('selectionchange',changed);};},[editorOpen,active?.id,sectionId]);
 function editAnnotation(a:Annotation){setEditing(a);setSelection({quote:a.quote,ranges:a.ranges});setNoteText(a.note);setColor(a.color);setEditorOpen(true);}
 function newAnnotation(){setEditing(null);setNoteText('');setEditorOpen(true);}
 function saveAnnotation(withNote:boolean){
  if(!selection||(!active&&!editing))return;
  const existing=editing||annotations.find(a=>a.chapterId===active?.id&&a.sectionId===sectionId&&JSON.stringify(a.ranges)===JSON.stringify(selection.ranges));
  const record:Annotation={id:existing?.id||crypto.randomUUID(),chapterId:existing?.chapterId||active!.id,sectionId:existing?.sectionId||sectionId,quote:selection.quote,ranges:selection.ranges,note:withNote?noteText:existing?.note||'',color,createdAt:existing?.createdAt||new Date().toISOString()};
  if(persistAnnotations([...annotations.filter(a=>a.id!==record.id),record])){setEditorOpen(false);setEditing(null);setSelection(null);window.getSelection()?.removeAllRanges();toast.success(withNote&&noteText.trim()?'笔记已保存':'划线已保存');}
 }
 function deleteAnnotation(a:Annotation){Modal.confirm({title:'删除这条划线与笔记？',content:'删除后可通过此前导出的学习备份恢复。',okText:'删除',okButtonProps:{danger:true},cancelText:'取消',onOk:()=>{if(persistAnnotations(annotations.filter(item=>item.id!==a.id))){setEditorOpen(false);setEditing(null);setSelection(null);}}});}
 function locateAnnotation(a:Annotation){const c=textbookChapters.find(c=>c.id===a.chapterId);if(!c||!c.sections.some(s=>s.id===a.sectionId)){toast.info('教材目录已变化，引用和笔记仍保留。');return;}setNotebookOpen(false);open(c,a.sectionId);setLocate(a);}
 const annotationEditor=<AnnotationEditor open={editorOpen} quote={selection?.quote||''} note={noteText} color={color} onNote={setNoteText} onColor={setColor} onSave={()=>saveAnnotation(true)} onCancel={()=>{setEditorOpen(false);setEditing(null);setSelection(null);}} onDelete={editing?()=>deleteAnnotation(editing):undefined}/>;
 const notebook=<Drawer title={`我的划线与笔记 · ${annotations.length}`} open={notebookOpen} onClose={()=>setNotebookOpen(false)} width={Math.min(560,window.innerWidth)}><AnnotationList items={[...annotations].reverse()} sectionTitle={id=>{const c=textbookChapters.find(c=>c.sections.some(s=>s.id===id));return c?`${c.title} · ${c.sections.find(s=>s.id===id)?.title}`:'原分段已调整';}} onLocate={locateAnnotation} onEdit={editAnnotation} onDelete={deleteAnnotation}/></Drawer>;
 function markedText(text:string,anchor:string){return annotationSegments(text,anchor,annotations.filter(a=>a.chapterId===active?.id&&a.sectionId===sectionId)).map(segment=>{const a=segment.annotations.at(-1);const labelLength=text.match(/^(【[^】]+】)/)?.[0].length||0;const cut=Math.max(0,Math.min(segment.text.length,labelLength-segment.start));const content=cut?<><strong>{segment.text.slice(0,cut)}</strong>{segment.text.slice(cut)}</>:segment.text;return a?<mark key={segment.start} className={`lecture-mark annotation-${a.color}`} role="button" tabIndex={0} aria-label="编辑划线或笔记" onClick={()=>{const item=annotations.find(item=>item.id===a.id);if(item)editAnnotation(item);}} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();const item=annotations.find(item=>item.id===a.id);if(item)editAnnotation(item);}}}>{content}</mark>:<span key={segment.start}>{content}</span>;});}

 useEffect(()=>{setSearch(query);if(query){setActive(undefined);setSubject('all');}},[query]);
 useEffect(()=>{try {localStorage.setItem('bencao-textbooks-v1',JSON.stringify(reading));} catch {setError('阅读进度未能保存，请检查浏览器存储空间。');}},[reading]);
 useEffect(()=>{
  if(!active)return;
  const controller=new AbortController();setLoading(true);setError('');setBlocks([]);
  fetch(active.contentUrl,{signal:controller.signal}).then(r=>{if(!r.ok)throw new Error('讲义加载失败，请重试。');return r.json();}).then(data=>setBlocks(data.blocks)).catch(e=>{if(e.name!=='AbortError')setError(e.message);}).finally(()=>{if(!controller.signal.aborted)setLoading(false);});
  return ()=>controller.abort();
 },[active]);
 const chapters=textbookChapters.filter(c=>(subject==='all'||c.subject===subject)&&`${c.title}${c.searchText}`.toLowerCase().includes(search.toLowerCase()));
 function open(c:TextbookChapter,id?:string){setSelection(null);setActive(c);const sec=c.sections.find(s=>s.id===id)||c.sections.find(s=>!s.id.endsWith('-intro'))||c.sections[0];setSectionId(sec.id);setTab('lecture');setReading(r=>({...r,chapterId:c.id,sectionId:sec.id}));window.scrollTo({top:0});}
 function selectSection(id:string){setSelection(null);setSectionId(id);setReading(r=>({...r,chapterId:active?.id,sectionId:id}));top.current?.scrollIntoView({block:'start'});}
 function renderBlock(b:Block,key:string):React.ReactNode {
  if(b.type==='table')return <div className="lecture-table" key={key}><table><tbody>{b.rows.map((row,i)=><tr key={i}>{row.map((cell,j)=><td colSpan={cell.span} key={j}>{cell.blocks.map((child,k)=>renderBlock(child,`${key}-${i}-${j}-${k}`))}</td>)}</tr>)}</tbody></table></div>;
  const selectedTitle=(active?.sections.find(s=>s.id===sectionId)||active?.sections[0])?.title;
  return <div className="lecture-block" key={key}>{b.text.split('\n').filter(t=>t.trim()&&t.trim()!==selectedTitle?.trim()).map((line,i)=>{
   const text=line.trim();const field=text.match(/^(【[^】]+】)(.*)$/);const anchor=`${key}-line${i}`;const attrs={'data-annotation-anchor':anchor,id:`annotation-${anchor}`};
   if(field)return <p className="lecture-field" key={i} {...attrs}>{markedText(text,anchor)}</p>;
   const heading=(/^(第.{1,12}[章节讲]|[一二三四五六七八九十]+[、．])/.test(text)&&text.length<85)||(/^[\u4e00-\u9fff]{2,9}$/.test(text));
   return heading?<h3 key={i} {...attrs}>{markedText(text,anchor)}</h3>:<p key={i} {...attrs}>{markedText(text,anchor)}</p>;
  })}{b.images.map(url=><a key={url} href={url} target="_blank" rel="noreferrer" aria-label="查看讲义插图原图"><img src={url} alt="讲义插图" loading="lazy"/></a>)}</div>;
 }
 if(active){
  const section=active.sections.find(s=>s.id===sectionId)||active.sections[0];
  const sectionIndex=active.sections.indexOf(section);
  const related=notes.filter(k=>chapterForKnowledge(k)?.id===active.id);
  const relatedQs=questions.filter(q=>related.some(k=>k.id===q.knowledgeId));
  return <>{toastHolder}{annotationEditor}{notebook}<div className="page-heading"><div><div className="overline">{subjects.find(s=>s.id===active.subject)?.title} / 我的教材</div><h1>{active.title}</h1><p>{active.teacher} · {active.sections.length} 个授课分段 · {(active.characters/10000).toFixed(1)} 万字</p></div><Button icon={<ArrowLeftOutlined/>} onClick={()=>setActive(undefined)}>返回教材目录</Button></div><div className="textbook-reader"><aside className="lecture-toc"><strong>本章授课目录</strong>{active.sections.map(s=><button key={s.id} className={section.id===s.id?'active':''} onClick={()=>selectSection(s.id)}>{reading.completed.includes(s.id)&&<CheckOutlined/>}{s.title}</button>)}<p>来源：{active.fileName}</p></aside><div className="lecture-main" ref={top}><Select className="lecture-section-select" aria-label="选择授课分段" value={section.id} onChange={selectSection} options={active.sections.map(s=>({value:s.id,label:s.title}))}/><Tabs activeKey={tab} onChange={setTab} items={[{key:'lecture',label:'讲义正文'},{key:'annotations',label:`我的笔记 ${annotations.filter(a=>a.chapterId===active.id).length}`},{key:'notes',label:`关联笔记 ${related.length}`},{key:'practice',label:`章节练习 ${relatedQs.length}`},{key:'videos',label:'视频与大纲'}]}/>{tab==='lecture'&&<><Alert type="info" showIcon message="按你提供的讲义学习" description="正文、原有例题与答案均来自讲义，保留其版本表述。插图可点击查看原图；网页排版不对应 Word 页码。"/><h2>{section.title}</h2><div className="annotation-reader-tools"><span>选中文字后划线或写笔记，点击划线可编辑。</span><Button size="small" onClick={()=>setNotebookOpen(true)}>全部划线与笔记</Button></div><div className="lecture-content" onMouseUp={captureSelection} onTouchEnd={()=>setTimeout(captureSelection,30)}>{loading?<Spin/>:error?<Alert type="error" message={error}/>:blocks.slice(section.start,section.end).map((b,i)=>renderBlock(b,`${section.id}-${i}`))}</div>{selection&&!editorOpen&&<div className="annotation-selection" role="region" aria-label="选中文字标注"><span>{selection.quote}</span><Button onClick={()=>saveAnnotation(false)}>划线</Button><Button type="primary" onClick={newAnnotation}>写笔记</Button><Button type="text" onClick={()=>{setSelection(null);window.getSelection()?.removeAllRanges();}}>取消</Button></div>}<div className="lecture-actions"><Button disabled={sectionIndex===0} onClick={()=>selectSection(active.sections[sectionIndex-1].id)}>上一讲</Button><Button type="primary" icon={<CheckOutlined/>} onClick={()=>{setReading(r=>({...r,completed:r.completed.includes(section.id)?r.completed:[...r.completed,section.id]}));}}>{reading.completed.includes(section.id)?'本讲已学':'标记本讲已学'}</Button><Button disabled={sectionIndex===active.sections.length-1} onClick={()=>selectSection(active.sections[sectionIndex+1].id)}>下一讲 <ArrowRightOutlined/></Button></div></>}{tab==='annotations'&&<AnnotationList items={annotations.filter(a=>a.chapterId===active.id).slice().reverse()} sectionTitle={id=>active.sections.find(s=>s.id===id)?.title||'原分段已调整'} onLocate={locateAnnotation} onEdit={editAnnotation} onDelete={deleteAnnotation}/>} {tab==='notes'&&<>{related.length?related.map(k=><article className="textbook-note" key={k.id}><Tag>补充笔记 · 独立来源</Tag><h3>{k.title}</h3><p>{k.summary}</p><Button onClick={()=>onNote(k)}>阅读笔记</Button> <Button disabled={learned.includes(k.id)} onClick={()=>onLearn(k.id)}>{learned.includes(k.id)?'已学':'标记已学'}</Button></article>):<Empty description="本章可直接学习讲义正文，暂未添加补充笔记"/>}</>}{tab==='practice'&&<><p>讲义中的例题与答案在正文中保留；以下为网站已有的独立练习。</p><Button type="primary" disabled={!relatedQs.length} onClick={()=>onPractice(relatedQs)}>练本章 {relatedQs.length} 道题</Button>{!relatedQs.length&&<Empty description="本章暂未整理成交互题库，可在正文复习原有例题"/>}</>}{tab==='videos'&&<><h3>我的课程视频</h3><p>视频课堂已接入你的夸克中药一 2025 基础学习课程，课程与讲义不自动逐讲对应。</p><Button onClick={()=>onVideo(active.subject)}>进入视频课堂</Button><h3>考试大纲</h3>{textbookOutlines.filter(o=>o.subject===active.subject).map(o=><p key={o.url}><a href={o.url} target="_blank" rel="noreferrer">{o.title}</a></p>)}{!textbookOutlines.some(o=>o.subject===active.subject)&&<p>data 中未提供本科大纲。</p>}</>}</div></div></>;
 }
 const last=textbookChapters.find(c=>c.id===reading.chapterId);
 return <>{toastHolder}{annotationEditor}{notebook}<div className="page-heading"><div><div className="overline">以自己的教材为主线</div><h1>教材学习</h1><p>四科 · {textbookChapters.length} 份讲义 · 按原有模块与章节顺序学习</p></div><div className="textbook-header-actions"><Button onClick={()=>setNotebookOpen(true)}>我的划线与笔记 · {annotations.length}</Button>{last&&<Button type="primary" onClick={()=>open(last,reading.sectionId)}>继续上次学习</Button>}</div></div><div className="textbook-summary"><div><strong>{textbookChapters.reduce((n,c)=>n+c.sections.length,0)}</strong><span>授课分段</span></div><div><strong>{reading.completed.length}</strong><span>已学分段</span></div><div><strong>{notes.length}</strong><span>补充笔记</span></div><div><strong>{questions.length}</strong><span>交互练习</span></div></div><div className="subject-filter"><button className={subject==='all'?'active':''} onClick={()=>setSubject('all')}>全部科目</button>{subjects.map(s=><button className={subject===s.id?'active':''} key={s.id} onClick={()=>setSubject(s.id)}>{s.short}</button>)}</div><Input className="textbook-search" prefix={<SearchOutlined/>} placeholder="搜索教材全文，例如：麻黄、药品经营、阴阳" value={search} onChange={e=>setSearch(e.target.value)} allowClear/>{subjects.filter(s=>subject==='all'||s.id===subject).map(s=>{const list=chapters.filter(c=>c.subject===s.id);if(!list.length)return null;return <section className="textbook-subject" key={s.id}><div className="section-heading"><h2>{s.title}</h2><span>{list.length} 份讲义</span></div><div className="textbook-chapters">{list.map(c=>{const done=c.sections.filter(sec=>reading.completed.includes(sec.id)).length;const related=notes.filter(k=>chapterForKnowledge(k)?.id===c.id);const count=questions.filter(q=>related.some(k=>k.id===q.knowledgeId)).length;const pos=c.searchText.toLowerCase().indexOf(search.toLowerCase());return <button key={c.id} onClick={()=>open(c)} className="textbook-chapter"><span className="textbook-order">{String(c.order).padStart(2,'0')}</span><div><h3>{c.title}</h3><p>{c.sections.length} 段 · {related.length} 条补充笔记 · {count} 道练习</p>{search&&pos>=0&&<p className="textbook-match">…{c.searchText.slice(Math.max(0,pos-25),pos+85)}…</p>}<Progress percent={Math.round(done/c.sections.length*100)} size="small" strokeColor={s.color}/></div><ArrowRightOutlined/></button>;})}</div></section>;})}{!chapters.length&&<Empty description="教材全文中没有找到这个关键词"/>}<section className="textbook-supplement"><h3>跨章复盘与补充资料</h3><p>原有笔记保留来源，按教材章节归档；历年复盘与未匹配资料在下方单独列出。原有收藏、错题和学习进度继续保留。</p><div className="textbook-review">{notes.filter(k=>!chapterForKnowledge(k)&&(subject==='all'||subject===k.subject)).map(k=><button key={k.id} onClick={()=>onNote(k)}>{k.title} <ArrowRightOutlined/></button>)}</div><Select aria-label="阅读提供的考试大纲" placeholder="查看 2025 版考试大纲" style={{width:'100%',maxWidth:500}} options={textbookOutlines.map(o=>({value:o.url,label:o.title}))} onChange={url=>window.open(url,'_blank','noopener,noreferrer')}/></section></>;
}
