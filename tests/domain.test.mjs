import test from 'node:test';
import assert from 'node:assert/strict';
import { sameAnswers, latestMistakes, validateImport, localDate } from '../src/domain.ts';
import { knowledge, questions, sources } from '../src/data.ts';
const existing={knowledge,questions,sources};
test('多选必须完整且正确，不受选项顺序影响',()=>{
 assert.equal(sameAnswers([2,0,1],[0,1,2]),true);
 assert.equal(sameAnswers([0,1],[0,1,2]),false);
 assert.equal(sameAnswers([0,1,2,3],[0,1,2]),false);
 assert.equal(sameAnswers([1],[0]),false);
});
test('最近一次答对移出错题本，再次答错重新进入',()=>{
 const attempts=[{questionId:'q01',correct:false},{questionId:'q02',correct:false},{questionId:'q01',correct:true}];
 assert.deepEqual(latestMistakes(attempts),['q02']);
 assert.deepEqual(latestMistakes([...attempts,{questionId:'q01',correct:false}]).sort(),['q01','q02']);
});
test('所有内置资料的关联、来源与答案有效',()=>{
 assert.equal(validateImport(existing,{knowledge:[],questions:[],sources:[]}).questions.length,44);
 assert.equal(new Set(knowledge.map(k=>k.subject)).size,4);
 for(const k of knowledge) assert.ok(questions.some(q=>q.knowledgeId===k.id));
});
test('导入拒绝重复 ID、缺失来源、错误答案与跨科目关联',()=>{
 const q={...questions[0],id:'new-question'};
 assert.equal(validateImport({questions:[q]},existing).questions.length,1);
 assert.throws(()=>validateImport({questions:[questions[0]]},existing),/重复/);
 assert.throws(()=>validateImport({questions:[{...q,answer:[99]}]},existing),/答案/);
 assert.throws(()=>validateImport({questions:[{...q,answer:[1,1],type:'multiple'}]},existing),/答案/);
 assert.throws(()=>validateImport({questions:[{...q,sourceId:'unknown'}]},existing),/来源/);
 assert.throws(()=>validateImport({questions:[{...q,subject:'fg'}]},existing),/关联/);
 assert.throws(()=>validateImport({knowledge:[{...knowledge[0],id:'new-note',sourceId:'unknown'}]},existing),/来源/);
 assert.throws(()=>validateImport({sources:[{...sources[0],id:'new-source',url:'javascript:alert(1)'}]},existing),/http/);
 assert.throws(()=>validateImport({},existing),/空/);
});
test('同一个资料包支持新来源、知识与题目之间的关联',()=>{
 const bundle={sources:[{...sources[0],id:'book-source'}],knowledge:[{...knowledge[0],id:'book-note',sourceId:'book-source'}],questions:[{...questions[0],id:'book-question',knowledgeId:'book-note',sourceId:'book-source'}]};
 assert.deepEqual(validateImport(bundle,existing),bundle);
});
test('本地学习日期保留用户所在时区的日历日期',()=>{
 assert.equal(localDate(new Date(2026,9,12,0,1)),'2026-10-12');
});
