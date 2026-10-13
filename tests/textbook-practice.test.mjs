import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { practiceBank, textbookPracticeQuestions } from '../src/textbookPractice.ts';
import { textbookChapters } from '../src/curriculum.ts';
import { pastQuestions } from '../src/pastData.ts';

const normalize=text=>text.replace(/\s+/g,'');
const textOf=b=>b.type==='table'?b.rows.flatMap(r=>r.flatMap(c=>c.blocks.map(textOf))).join('\n'):b.text;
test('正文各章均有原创练习，题型、证据、分段及历年参考可追溯',()=>{
 const eligible=textbookChapters.filter(c=>!['前言','导 学','备考导航'].includes(c.title));
 assert.equal(practiceBank.chapters.length,eligible.length);
 assert.equal(new Set(textbookPracticeQuestions.map(q=>q.id)).size,textbookPracticeQuestions.length);
 assert.equal(new Set(textbookPracticeQuestions.map(q=>normalize(q.title))).size,textbookPracticeQuestions.length);
 assert.ok(textbookPracticeQuestions.some(q=>q.type==='single'));
 assert.ok(textbookPracticeQuestions.some(q=>q.type==='multiple'));
 for(const group of practiceBank.chapters){
  const chapter=eligible.find(c=>c.id===group.chapterId);assert.ok(chapter);
  const raw=readFileSync('public'+chapter.contentUrl,'utf8');const blocks=JSON.parse(raw).blocks;
  assert.equal(group.sourceHash,createHash('sha256').update(raw).digest('hex'));
  assert.ok(group.questions.length>=3);
  assert.ok(group.questions.some(q=>q.type==='single'));
  for(const q of group.questions){
   assert.equal(q.subject,chapter.subject);assert.equal(q.options.length,5);
   assert.ok(q.answer.length>0&&q.answer.length<5);
   assert.equal(q.type==='single'?q.answer.length:Math.min(2,q.answer.length),q.type==='single'?1:2);
   const section=chapter.sections.find(s=>s.id===q.sectionId);assert.ok(section);
   assert.ok(q.evidence[0].blockIndex>=section.start&&q.evidence[0].blockIndex<section.end);
   for(const e of q.evidence)assert.ok(normalize(textOf(blocks[e.blockIndex])).includes(normalize(e.quote)));
   for(const id of q.pastQuestionIds)assert.ok(pastQuestions.some(p=>p.id===id&&p.subject===q.subject));
   assert.ok(!q.year&&!q.paperId,'原创题不混入历年真题');
   if(q.subject==='fg')assert.ok(q.title.startsWith('依据所提供讲义'));
  }
 }
});
