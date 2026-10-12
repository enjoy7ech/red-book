import test from 'node:test';
import assert from 'node:assert/strict';
import { annotationSegments, validateAnnotations } from '../src/annotations.ts';
const record={id:'note-1',chapterId:'zy1-04',sectionId:'zy1-04-s1',quote:'药炮制',ranges:[{anchor:'p1',start:1,end:4,text:'药炮制'}],note:'减毒增效',color:'yellow',createdAt:'2026-10-12T10:00:00Z'};
test('划线按段落及文字偏移定位，同词不同段落不会一并划线',()=>{
 assert.equal(annotationSegments('中药炮制','p1',[record]).filter(s=>s.annotations.length).map(s=>s.text).join(''),'药炮制');
 assert.ok(annotationSegments('中药炮制','p2',[record]).every(s=>!s.annotations.length));
 assert.ok(annotationSegments('中药制剂','p1',[record]).every(s=>!s.annotations.length));
});
test('重叠划线保留两条笔记，分段显示不丢失正文',()=>{
 const second={...record,id:'note-2',ranges:[{anchor:'p1',start:2,end:4,text:'炮制'}],color:'blue'};
 const segments=annotationSegments('中药炮制','p1',[record,second]);
 assert.equal(segments.map(s=>s.text).join(''),'中药炮制');
 assert.deepEqual(segments.find(s=>s.text==='炮制').annotations.map(a=>a.id),['note-1','note-2']);
});
test('学习备份中的笔记可往返，拒绝错位范围、重复 ID 与非法颜色',()=>{
 assert.deepEqual(validateAnnotations(JSON.parse(JSON.stringify([record]))),[record]);
 assert.deepEqual(validateAnnotations([]),[]);
 assert.throws(()=>validateAnnotations([record,record]),/无效/);
 assert.throws(()=>validateAnnotations([{...record,color:'red'}]),/无效/);
 assert.throws(()=>validateAnnotations([{...record,ranges:[{...record.ranges[0],end:99}]}]),/定位/);
 assert.throws(()=>validateAnnotations([{...record,ranges:[{...record.ranges[0],start:-1}]}]),/定位/);
});
