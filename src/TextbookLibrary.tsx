import { useEffect, useRef, useState } from 'react';
import { Alert, Button, Empty, Input, Progress, Select, Spin, Tabs, Tag } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined, CheckOutlined, SearchOutlined } from '@ant-design/icons';
import { subjects } from './data';
import type { Knowledge, Question, SubjectId } from './data';
import { chapterForKnowledge, textbookChapters, textbookOutlines } from './curriculum';
import type { TextbookChapter } from './curriculum';
import { videoCourses } from './videoData';
import './textbooks.css';

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
 useEffect(()=>{setSearch(query);if(query){setActive(undefined);setSubject('all');}},[query]);
 useEffect(()=>{try {localStorage.setItem('bencao-textbooks-v1',JSON.stringify(reading));} catch {setError('阅读进度未能保存，请检查浏览器存储空间。');}},[reading]);
 useEffect(()=>{
  if(!active)return;
  const controller=new AbortController();setLoading(true);setError('');setBlocks([]);
  fetch(active.contentUrl,{signal:controller.signal}).then(r=>{if(!r.ok)throw new Error('讲义加载失败，请重试。');return r.json();}).then(data=>setBlocks(data.blocks)).catch(e=>{if(e.name!=='AbortError')setError(e.message);}).finally(()=>{if(!controller.signal.aborted)setLoading(false);});
  return ()=>controller.abort();
 },[active]);
 const chapters=textbookChapters.filter(c=>(subject==='all'||c.subject===subject)&&`${c.title}${c.searchText}`.toLowerCase().includes(search.toLowerCase()));
 function open(c:TextbookChapter,id?:string){setActive(c);const sec=c.sections.find(s=>s.id===id)||c.sections.find(s=>!s.id.endsWith('-intro'))||c.sections[0];setSectionId(sec.id);setTab('lecture');setReading(r=>({...r,chapterId:c.id,sectionId:sec.id}));window.scrollTo({top:0});}
 function selectSection(id:string){setSectionId(id);setReading(r=>({...r,chapterId:active?.id,sectionId:id}));top.current?.scrollIntoView({block:'start'});}
 function renderBlock(b:Block,key:string):React.ReactNode {
  if(b.type==='table')return <div className="lecture-table" key={key}><table><tbody>{b.rows.map((row,i)=><tr key={i}>{row.map((cell,j)=><td colSpan={cell.span} key={j}>{cell.blocks.map((child,k)=>renderBlock(child,`${key}-${i}-${j}-${k}`))}</td>)}</tr>)}</tbody></table></div>;
  const selectedTitle=(active?.sections.find(s=>s.id===sectionId)||active?.sections[0])?.title;
  return <div className="lecture-block" key={key}>{b.text.split('\n').filter(t=>t.trim()&&t.trim()!==selectedTitle?.trim()).map((line,i)=>{
   const text=line.trim();const field=text.match(/^(【[^】]+】)(.*)$/);
   if(field)return <p className="lecture-field" key={i}><strong>{field[1]}</strong>{field[2]}</p>;
   const heading=(/^(第.{1,12}[章节讲]|[一二三四五六七八九十]+[、．])/.test(text)&&text.length<85)||(/^[\u4e00-\u9fff]{2,9}$/.test(text));
   return heading?<h3 key={i}>{text}</h3>:<p key={i}>{text}</p>;
  })}{b.images.map(url=><a key={url} href={url} target="_blank" rel="noreferrer" aria-label="查看讲义插图原图"><img src={url} alt="讲义插图" loading="lazy"/></a>)}</div>;
 }
 if(active){
  const section=active.sections.find(s=>s.id===sectionId)||active.sections[0];
  const sectionIndex=active.sections.indexOf(section);
  const related=notes.filter(k=>chapterForKnowledge(k)?.id===active.id);
  const relatedQs=questions.filter(q=>related.some(k=>k.id===q.knowledgeId));
  return <><div className="page-heading"><div><div className="overline">{subjects.find(s=>s.id===active.subject)?.title} / 我的教材</div><h1>{active.title}</h1><p>{active.teacher} · {active.sections.length} 个授课分段 · {(active.characters/10000).toFixed(1)} 万字</p></div><Button icon={<ArrowLeftOutlined/>} onClick={()=>setActive(undefined)}>返回教材目录</Button></div><div className="textbook-reader"><aside className="lecture-toc"><strong>本章授课目录</strong>{active.sections.map(s=><button key={s.id} className={section.id===s.id?'active':''} onClick={()=>selectSection(s.id)}>{reading.completed.includes(s.id)&&<CheckOutlined/>}{s.title}</button>)}<p>来源：{active.fileName}</p></aside><div className="lecture-main" ref={top}><Select className="lecture-section-select" aria-label="选择授课分段" value={section.id} onChange={selectSection} options={active.sections.map(s=>({value:s.id,label:s.title}))}/><Tabs activeKey={tab} onChange={setTab} items={[{key:'lecture',label:'讲义正文'},{key:'notes',label:`关联笔记 ${related.length}`},{key:'practice',label:`章节练习 ${relatedQs.length}`},{key:'videos',label:'视频与大纲'}]}/>{tab==='lecture'&&<><Alert type="info" showIcon message="按你提供的讲义学习" description="正文、原有例题与答案均来自讲义，保留其版本表述。插图可点击查看原图；网页排版不对应 Word 页码。"/><h2>{section.title}</h2>{loading?<Spin/>:error?<Alert type="error" message={error}/>:blocks.slice(section.start,section.end).map((b,i)=>renderBlock(b,`${section.id}-${i}`))}<div className="lecture-actions"><Button disabled={sectionIndex===0} onClick={()=>selectSection(active.sections[sectionIndex-1].id)}>上一讲</Button><Button type="primary" icon={<CheckOutlined/>} onClick={()=>{setReading(r=>({...r,completed:r.completed.includes(section.id)?r.completed:[...r.completed,section.id]}));}}>{reading.completed.includes(section.id)?'本讲已学':'标记本讲已学'}</Button><Button disabled={sectionIndex===active.sections.length-1} onClick={()=>selectSection(active.sections[sectionIndex+1].id)}>下一讲 <ArrowRightOutlined/></Button></div></>}{tab==='notes'&&<>{related.length?related.map(k=><article className="textbook-note" key={k.id}><Tag>补充笔记 · 独立来源</Tag><h3>{k.title}</h3><p>{k.summary}</p><Button onClick={()=>onNote(k)}>阅读笔记</Button> <Button disabled={learned.includes(k.id)} onClick={()=>onLearn(k.id)}>{learned.includes(k.id)?'已学':'标记已学'}</Button></article>):<Empty description="本章可直接学习讲义正文，暂未添加补充笔记"/>}</>}{tab==='practice'&&<><p>讲义中的例题与答案在正文中保留；以下为网站已有的独立练习。</p><Button type="primary" disabled={!relatedQs.length} onClick={()=>onPractice(relatedQs)}>练本章 {relatedQs.length} 道题</Button>{!relatedQs.length&&<Empty description="本章暂未整理成交互题库，可在正文复习原有例题"/>}</>}{tab==='videos'&&<><h3>同科视频</h3>{videoCourses.filter(c=>c.subject===active.subject).map(c=><p key={c.id}>{c.shortTitle} · {c.year} · {c.teacher}</p>)}<Button onClick={()=>onVideo(active.subject)}>进入同科视频课堂</Button><h3>考试大纲</h3>{textbookOutlines.filter(o=>o.subject===active.subject).map(o=><p key={o.url}><a href={o.url} target="_blank" rel="noreferrer">{o.title}</a></p>)}{!textbookOutlines.some(o=>o.subject===active.subject)&&<p>data 中未提供本科大纲。</p>}</>}</div></div></>;
 }
 const last=textbookChapters.find(c=>c.id===reading.chapterId);
 return <><div className="page-heading"><div><div className="overline">以自己的教材为主线</div><h1>教材学习</h1><p>四科 · {textbookChapters.length} 份讲义 · 按原有模块与章节顺序学习</p></div>{last&&<Button type="primary" onClick={()=>open(last,reading.sectionId)}>继续上次学习</Button>}</div><div className="textbook-summary"><div><strong>{textbookChapters.reduce((n,c)=>n+c.sections.length,0)}</strong><span>授课分段</span></div><div><strong>{reading.completed.length}</strong><span>已学分段</span></div><div><strong>{notes.length}</strong><span>补充笔记</span></div><div><strong>{questions.length}</strong><span>交互练习</span></div></div><div className="subject-filter"><button className={subject==='all'?'active':''} onClick={()=>setSubject('all')}>全部科目</button>{subjects.map(s=><button className={subject===s.id?'active':''} key={s.id} onClick={()=>setSubject(s.id)}>{s.short}</button>)}</div><Input className="textbook-search" prefix={<SearchOutlined/>} placeholder="搜索教材全文，例如：麻黄、药品经营、阴阳" value={search} onChange={e=>setSearch(e.target.value)} allowClear/>{subjects.filter(s=>subject==='all'||s.id===subject).map(s=>{const list=chapters.filter(c=>c.subject===s.id);if(!list.length)return null;return <section className="textbook-subject" key={s.id}><div className="section-heading"><h2>{s.title}</h2><span>{list.length} 份讲义</span></div><div className="textbook-chapters">{list.map(c=>{const done=c.sections.filter(sec=>reading.completed.includes(sec.id)).length;const related=notes.filter(k=>chapterForKnowledge(k)?.id===c.id);const count=questions.filter(q=>related.some(k=>k.id===q.knowledgeId)).length;const pos=c.searchText.toLowerCase().indexOf(search.toLowerCase());return <button key={c.id} onClick={()=>open(c)} className="textbook-chapter"><span className="textbook-order">{String(c.order).padStart(2,'0')}</span><div><h3>{c.title}</h3><p>{c.sections.length} 段 · {related.length} 条补充笔记 · {count} 道练习</p>{search&&pos>=0&&<p className="textbook-match">…{c.searchText.slice(Math.max(0,pos-25),pos+85)}…</p>}<Progress percent={Math.round(done/c.sections.length*100)} size="small" strokeColor={s.color}/></div><ArrowRightOutlined/></button>;})}</div></section>;})}{!chapters.length&&<Empty description="教材全文中没有找到这个关键词"/>}<section className="textbook-supplement"><h3>跨章复盘与补充资料</h3><p>原有笔记保留来源，按教材章节归档；历年复盘与未匹配资料在知识库中单独标注。原有收藏、错题和学习进度继续保留。</p><div className="textbook-review">{notes.filter(k=>!chapterForKnowledge(k)&&(subject==='all'||subject===k.subject)).map(k=><button key={k.id} onClick={()=>onNote(k)}>{k.title} <ArrowRightOutlined/></button>)}</div><Select aria-label="阅读提供的考试大纲" placeholder="查看 2025 版考试大纲" style={{width:'100%',maxWidth:500}} options={textbookOutlines.map(o=>({value:o.url,label:o.title}))} onChange={url=>window.open(url,'_blank','noopener,noreferrer')}/></section></>;
}
