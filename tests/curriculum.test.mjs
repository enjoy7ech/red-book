import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { textbookChapters, textbookOutlines, chapterForKnowledge, organizeKnowledge } from '../src/curriculum.ts';
import { knowledge, questions } from '../src/data.ts';

test('四科全部讲义有正文、连续授课目录和可用插图',()=>{
 assert.equal(textbookChapters.length,58);
 assert.deepEqual(['zy1','zy2','zh','fg'].map(s=>textbookChapters.filter(c=>c.subject===s).length),[6,28,14,10]);
 const seen=new Set();
 function inspect(blocks){for(const b of blocks){if(b.type==='paragraph'){for(const url of b.images)assert.ok(fs.existsSync(`public${url}`),url);}else for(const row of b.rows)for(const cell of row)inspect(cell.blocks);}}
 for(const c of textbookChapters){
  const {blocks}=JSON.parse(fs.readFileSync(`public${c.contentUrl}`,'utf8'));
  assert.ok(blocks.length&&c.searchText.length);
  assert.equal(c.sections[0].start,0);
  let end=0;
  for(const s of c.sections){assert.equal(s.start,end);assert.ok(s.end>s.start);assert.ok(!seen.has(s.id));seen.add(s.id);end=s.end;}
  assert.equal(end,blocks.length);inspect(blocks);
 }
 const identification=textbookChapters.find(c=>c.id==='zy1-02');
 assert.ok(identification.sections.some(s=>s.title.startsWith('第21讲')));
 for(const o of textbookOutlines)assert.ok(fs.existsSync(`public${o.url}`));
 assert.equal(textbookOutlines.length,4);
 assert.equal(new Set(textbookOutlines.map(o=>o.subject)).size,4);
 assert.equal(new Set(textbookOutlines.map(o=>o.url)).size,4);
});
test('现有笔记按教材归档，同时保持题目、收藏与进度 ID',()=>{
 const organized=organizeKnowledge(knowledge);
 assert.deepEqual(organized.map(k=>k.id).sort(),knowledge.map(k=>k.id).sort());
 for(const k of knowledge.filter(k=>!k.id.startsWith('knowledge-past-'))){assert.ok(chapterForKnowledge(k),k.title);}
 for(const q of questions)assert.ok(organized.some(k=>k.id===q.knowledgeId&&k.subject===q.subject));
 assert.equal(chapterForKnowledge(knowledge.find(k=>k.id==='k01')).id,'zy1-06');
 assert.equal(chapterForKnowledge(knowledge.find(k=>k.id==='k12')).id,'zh-12');
 assert.ok(organized.filter(k=>k.id.startsWith('knowledge-past-')).every(k=>k.chapter==='跨章复盘 · 历年考点'));
});
