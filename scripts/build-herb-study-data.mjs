import { readFile, writeFile } from 'node:fs/promises';
const rows=JSON.parse(await readFile('research/herb-study-notes.json','utf8'));
const evidence=JSON.parse(await readFile('research/herb-source-evidence.json','utf8'));
const herbSources=[],herbKnowledge=[],herbQuestions=[];
function partGroup(part){
 if(/果|种子/.test(part))return 'fruit';
 if(/根|块茎|鳞茎/.test(part))return 'underground';
 if(/矿|硫酸|结晶/.test(part))return 'mineral';
 if(/菌核/.test(part))return 'fungus';
 if(/树皮|干皮/.test(part))return 'bark';
 if(/贝壳/.test(part))return 'shell';
 if(/干燥体|沙囊/.test(part))return 'animal';
 return 'shoot';
}
for(const [i,row] of rows.entries()){
 const [name,part,actions,condition,distinction]=row;
 const ref=evidence.find(e=>e.name===name);if(!ref)throw new Error(`Missing verified source: ${name}`);
 const id=`herb-${String(i+1).padStart(3,'0')}`,sourceId=`university-${id}`;
 const chapter=['平抑肝阳药','平肝息风药'].includes(ref.chapter)?'平肝息风药':ref.chapter;
 herbSources.push({id:sourceId,title:`中药馆 · ${name}`,publisher:'河南中医药大学中药学实验教学中心',url:ref.url,kind:'高校药材资料',note:'公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。'});
 herbKnowledge.push({id,subject:'zy2',chapter,title:`${name}：来源、功效与证候辨析`,summary:actions.replaceAll('；',' · '),points:[`药用部位：${part}。`,`功效主线：${actions}。`,`证候线索：${condition}`,`辨析重点：${distinction}`],tip:'本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。',tags:[name,'来源鉴别','功效辨析','公开资料'],sourceId,minutes:6});
 const candidates=rows.filter(r=>r[0]!==name&&evidence.find(e=>e.name===r[0])?.chapter!==ref.chapter);
 // Pick distinct, non-overlapping function groups from other categories.
 const alternatives=[...new Set(candidates.map(r=>r[2]))].filter(x=>!x.split('；').some(a=>actions.includes(a))).slice(i%5,i%5+3);
 if(alternatives.length!==3)throw new Error(`Too few alternatives: ${name}`);
 const correct=i%4,options=[...alternatives];options.splice(correct,0,actions);
 herbQuestions.push({id:`${id}-function`,subject:'zy2',knowledgeId:id,type:'single',title:`复习${name}时，哪组功效与本条学习资料对应？`,options,answer:[correct],explanation:`${name}的本条功效主线为${actions}。辨证线索：${condition}辨析：${distinction}`,sourceId,origin:'原创基础练习 · 非历年真题'});
 // Exclude related part names too: root vs dried root, fruit vs fruit flesh,
 // and root vs rhizome must not become ambiguous distractors.
 const partPool=['干燥根及根茎','干燥成熟果实','干燥叶','干燥树皮','干燥菌核','动物贝壳','矿物结晶','动物沙囊内壁'].filter(p=>partGroup(p)!==partGroup(part));
 const offset=i%partPool.length;
 const parts=[0,1,2].map(n=>partPool[(offset+n)%partPool.length]);
 const partCorrect=(i+2)%4;parts.splice(partCorrect,0,part);
 herbQuestions.push({id:`${id}-part`,subject:'zy2',knowledgeId:id,type:'single',title:`根据本条公开教学资料，${name}的药用部位是？`,options:parts,answer:[partCorrect],explanation:`本条资料对应的药用部位是${part}。${distinction}基原及现行药典规范以当年考试教材为准。`,sourceId,origin:'原创来源辨析 · 非历年真题'});
}
await writeFile('src/expandedHerbs.ts',`// Public university herb facts, independently summarized; not a Red Book extraction.\nimport type { Source, Knowledge, Question } from './data';\nexport const herbSources:Source[]=${JSON.stringify(herbSources,null,2)};\nexport const herbKnowledge:Knowledge[]=${JSON.stringify(herbKnowledge,null,2)};\nexport const herbQuestions:Question[]=${JSON.stringify(herbQuestions,null,2)};\n`);
console.log(JSON.stringify({herbs:rows.length,chapters:new Set(herbKnowledge.map(k=>k.chapter)).size,questions:herbQuestions.length}));
