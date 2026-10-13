import bankData from './textbookPractice.json' with { type: 'json' };
import catalog from './textbookCatalog.json' with { type: 'json' };
import type { Knowledge, Question, Source, SubjectId } from './data';

type GeneratedQuestion = Omit<Question,'knowledgeId'|'sourceId'|'origin'> & {chapterId:string;sectionId:string;evidence:{blockIndex:number;quote:string}[];pastQuestionIds:string[];focus:string};
type BankChapter = {chapterId:string;title:string;subject:SubjectId;sourceHash:string;version:string;review:string;questions:GeneratedQuestion[]};
export const practiceBank = bankData as {version:number;generatedAt:string;chapters:BankChapter[]};
const site='https://zhongyao-redbook-study.wittyyak.chatgpt.site/';
const chapterSource=(id:string)=>'lecture-source-'+id;
const sectionSource=(id:string)=>'lecture-source-'+id;
export const textbookPracticeSources:Source[]=practiceBank.chapters.flatMap(group=>{
 const chapter=catalog.chapters.find(c=>c.id===group.chapterId)!;
 const base={publisher:chapter.teacher,title:chapter.title,kind:'个人讲义 · 原创题依据',chapterId:chapter.id};
 return [{...base,id:chapterSource(chapter.id),url:site+'#/textbooks?chapter='+chapter.id,note:chapter.fileName+'；保留讲义版本表述。'},
  ...[...new Set(group.questions.map(q=>q.sectionId))].map(id=>({...base,id:sectionSource(id),sectionId:id,title:chapter.title+' · '+chapter.sections.find(s=>s.id===id)?.title,url:site+'#/textbooks?chapter='+chapter.id+'&section='+id,note:chapter.fileName+'；练习为独立原创，答案按提供讲义核对。'}))];
});
export const textbookPracticeKnowledge:Knowledge[]=practiceBank.chapters.map(group=>({id:'lecture-knowledge-'+group.chapterId,subject:group.subject,chapter:group.title,title:group.title+' · 自测考点',summary:'本章原创练习涵盖：'+[...new Set(group.questions.map(q=>q.focus))].slice(0,5).join('、'),points:[...new Set(group.questions.flatMap(q=>q.evidence.map(e=>e.quote)))].slice(0,6),tip:'先独立作答，再对照解析与原文依据复习；讲义版本中的法规和标准按该版本理解。',tags:['讲义原创','章节自测'],sourceId:chapterSource(group.chapterId),minutes:6}));
export const textbookPracticeQuestions:Question[]=practiceBank.chapters.flatMap(group=>group.questions.map(q=>({...q,options:q.options.map(text=>text.replace(/^[A-EＡ-Ｅ][.．、:：)）]\s*/,'').trim()),knowledgeId:'lecture-knowledge-'+group.chapterId,sourceId:sectionSource(q.sectionId),practiceKind:'textbook' as const,origin:q.pastQuestionIds.length?'讲义原创 · 历年考点风格':'讲义原创练习',sourceRef:group.title+' · '+catalog.chapters.find(c=>c.id===group.chapterId)?.sections.find(s=>s.id===q.sectionId)?.title})));
