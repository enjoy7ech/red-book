import { textbookChapters } from './curriculum.ts';
import { knowledge, questions, subjects } from './data.ts';
export type AISource={id:string;title:string;chapterId?:string;knowledgeId?:string};
export type AIContext={text:string;sources:AISource[];label:string};
export function queryTerms(query:string){
 const words=query.toLowerCase().match(/[a-z0-9]{2,}|[\u4e00-\u9fff]{2,}/g)||[];
 const excluded=new Set(['总结','网站','教材','内容','请问','介绍','解释','一下','当前','这个','如何','什么','学习','讲义']);
 return [...new Set(words.flatMap(w=>/^[a-z0-9]+$/.test(w)?[w]:Array.from({length:w.length-1},(_,i)=>w.slice(i,i+2))).filter(w=>!excluded.has(w)))].slice(0,24);
}
export function retrievePassages(query:string){
 const terms=queryTerms(query);if(!terms.length)return [];
 return textbookChapters.map(c=>{
  const found=terms.filter(t=>c.searchText.toLowerCase().includes(t));
  const score=found.reduce((n,t)=>n+(c.title.includes(t)?12:1),0);
  let best=0,bestScore=0;
  for(const term of found){let pos=c.searchText.toLowerCase().indexOf(term);for(let i=0;pos>=0&&i<12;i++,pos=c.searchText.toLowerCase().indexOf(term,pos+term.length)){const start=Math.max(0,pos-400);const part=c.searchText.slice(start,start+2600);const coverage=terms.filter(t=>part.toLowerCase().includes(t)).length;if(coverage>bestScore){bestScore=coverage;best=start;}}}
  return {chapter:c,score:score+bestScore,text:c.searchText.slice(best,best+2600)};
 }).filter(c=>c.score>0).sort((a,b)=>b.score-a.score).slice(0,10);
}
export function buildAIContext(scope:string,query:string,pageText:string,selection:string,activeChapter?:string,activeSection?:string):AIContext {
 const sources:AISource[]=[];const pieces:string[]=[];
 const add=(source:AISource,text:string)=>{sources.push(source);pieces.push(`[资料${sources.length}] ${source.title}\n${text}`);};
 const chapter=textbookChapters.find(c=>c.id===(scope.startsWith('book:')?scope.slice(5):activeChapter));
 if(scope==='selection'){
  if(!selection.trim())throw new Error('请先在网站正文中选取文字。');
  add({id:'selection',title:chapter?`${chapter.title} · 选中文字`:'当前选中文字',chapterId:chapter?.id},selection.slice(0,50000));
 }else if(scope==='chapter'||scope.startsWith('book:')){
  if(!chapter)throw new Error('请先打开一章讲义，或在范围中指定章节。');
  add({id:chapter.id,title:chapter.title,chapterId:chapter.id},chapter.searchText);
 }else if(scope==='section'){
  if(!chapter||!activeSection)throw new Error('请先打开讲义授课分段。');
  const section=chapter.sections.find(s=>s.id===activeSection);
  add({id:activeSection,title:`${chapter.title} · ${section?.title||'当前授课'}`,chapterId:chapter.id},pageText.slice(0,110000));
 }else if(scope==='site'){
  pieces.push(`全站包括 ${textbookChapters.length} 份四科讲义、${knowledge.length} 条补充知识、${questions.length} 道练习。以下是目录与各章节选，全站概括不能声称逐字覆盖全部正文。\n${subjects.map(s=>s.title+'：'+textbookChapters.filter(c=>c.subject===s.id).map(c=>c.title).join('；')).join('\n')}`);
  const matches=retrievePassages(query);
  if(matches.length)for(const match of matches)add({id:match.chapter.id,title:match.chapter.title,chapterId:match.chapter.id},match.text);
  else for(const c of textbookChapters)add({id:c.id,title:c.title,chapterId:c.id},c.searchText.slice(0,1800));
  for(const k of knowledge.filter(k=>queryTerms(query).some(t=>`${k.title}${k.points.join('')}`.includes(t))).slice(0,8))add({id:k.id,title:k.title,knowledgeId:k.id},k.points.join('\n'));
 }else{
  add({id:'page',title:chapter?`${chapter.title} · 当前页面`:'当前页面',chapterId:chapter?.id},pageText.slice(0,110000)||'当前页面尚无正文。');
  for(const match of retrievePassages(query).slice(0,4))add({id:match.chapter.id,title:match.chapter.title,chapterId:match.chapter.id},match.text);
 }
 const text=pieces.join('\n\n');if(text.length>490000)throw new Error('本次内容超过单次容量，请选择当前分段总结。');
 return {text,sources,label:scope==='selection'?'选中文字':scope==='images'?'当前可见讲义插图':scope==='site'?'全站教材检索':scope==='chapter'||scope.startsWith('book:')?chapter!.title:scope==='section'?'当前授课分段':'当前页面'};
}
