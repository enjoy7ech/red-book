import {readFile,writeFile} from 'node:fs/promises';
const selections=JSON.parse(await readFile('research/past-question-selections.json','utf8'));
const catalog=JSON.parse(await readFile('research/past-paper-catalog.json','utf8'));
const names={zy1:'中药一',zy2:'中药二',zh:'中药综合',fg:'药事法规'};
const pastSources=[],pastKnowledge=[],pastQuestions=[];
for(const set of selections){
 const paperId=`past-${set.year}-${set.subject}`,sourceId=`source-${paperId}`,knowledgeId=`knowledge-${paperId}`;
 if(!catalog.some(p=>p.id===paperId))throw new Error(`Paper missing: ${paperId}`);
 pastSources.push({id:sourceId,title:`${set.year} ${names[set.subject]} · 机构整理试题`,publisher:set.publisher,url:set.url,kind:'历年试题来源',note:'公开机构整理或考生回忆资料，非考试部门公布的标准试卷。本站精选考点并改写题干、选项或题型，保留原题定位；答案为来源参考答案，解析为独立简述。'});
 pastKnowledge.push({id:knowledgeId,subject:set.subject,chapter:'历年考点复盘',title:`${set.year} ${names[set.subject]}：精选历年考点复盘`,summary:`${set.questions.length} 个来源可定位的考点，配套站内选练。`,points:set.questions.map(q=>q[4]),tip:set.subject==='fg'?'历史题按当年参考答案复盘。2026 法规变动须另核当年指南与现行原文。':'回忆资料可能不完整；本条考点简述和关联练习不是原卷全文。',tags:[String(set.year),'历年回忆考点','改写选练'],sourceId,minutes:8});
 for(const [i,q] of set.questions.entries())pastQuestions.push({id:`${paperId}-q${i+1}`,subject:set.subject,knowledgeId,type:q[3].length>1?'multiple':'single',title:q[1],options:q[2],answer:q[3],explanation:q[4],sourceId,origin:'回忆考点改写 · 非原题逐字稿',year:set.year,paperId,sourceRef:q[0]});
}
const papers=catalog.map(p=>({...p,nature:'机构整理 / 回忆资料',selectedCount:pastQuestions.filter(q=>q.paperId===p.id).length})).sort((a,b)=>b.year-a.year||Object.keys(names).indexOf(a.subject)-Object.keys(names).indexOf(b.subject));
await writeFile('src/pastData.ts',`// Selected historical exam topics, independently adapted and attributed.\nimport type {Knowledge,Question,Source,SubjectId} from './data';\nexport interface PastPaper {id:string;subject:SubjectId;year:number;title:string;url:string;publisher:string;checkedAt:string;catalogUrl:string;nature:string;selectedCount:number}\nexport const pastPapers:PastPaper[]=${JSON.stringify(papers,null,2)};\nexport const pastSources:Source[]=${JSON.stringify(pastSources,null,2)};\nexport const pastKnowledge:Knowledge[]=${JSON.stringify(pastKnowledge,null,2)};\nexport const pastQuestions:Question[]=${JSON.stringify(pastQuestions,null,2)};\n`);
console.log(JSON.stringify({papers:papers.length,selectedQuestions:pastQuestions.length,years:[...new Set(papers.map(p=>p.year))]}));
