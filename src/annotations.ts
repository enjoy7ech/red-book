export const ANNOTATION_STORE = 'bencao-annotations-v1';
export const annotationColors = ['yellow', 'green', 'blue'] as const;
export type AnnotationColor = typeof annotationColors[number];
export type TextAnchor = { anchor: string; start: number; end: number; text: string };
export type Annotation = { id: string; chapterId: string; sectionId: string; quote: string; ranges: TextAnchor[]; note: string; color: AnnotationColor; createdAt: string };

export function validateAnnotations(value: unknown): Annotation[] {
 if (!Array.isArray(value)) throw new Error('划线与笔记备份格式无效');
 const ids=new Set<string>();
 for(const entry of value){
  const a=entry as Annotation;
  if(!a||typeof a!=='object'||![a.id,a.chapterId,a.sectionId,a.quote,a.createdAt].every(s=>typeof s==='string'&&s.length>0)||typeof a.note!=='string'||!annotationColors.includes(a.color)||!Array.isArray(a.ranges)||!a.ranges.length||ids.has(a.id))throw new Error('划线与笔记记录无效');
  for(const r of a.ranges)if(!r||typeof r.anchor!=='string'||!r.anchor||typeof r.text!=='string'||!r.text||!Number.isInteger(r.start)||!Number.isInteger(r.end)||r.start<0||r.end<=r.start||r.end-r.start!==r.text.length)throw new Error('划线文字定位无效');
  ids.add(a.id);
 }
 return value as Annotation[];
}
export function readAnnotations(): Annotation[] {
 try{return validateAnnotations(JSON.parse(localStorage.getItem(ANNOTATION_STORE)||'[]'));}catch{return [];}
}
export function annotationSegments(text:string,anchor:string,annotations:Annotation[]) {
 const ranges=annotations.flatMap(a=>a.ranges.filter(r=>r.anchor===anchor&&text.slice(r.start,r.end)===r.text&&r.end<=text.length).map(r=>({...r,id:a.id,color:a.color})));
 const boundaries=[...new Set([0,text.length,...ranges.flatMap(r=>[r.start,r.end])])].sort((a,b)=>a-b);
 return boundaries.slice(0,-1).map((start,i)=>({text:text.slice(start,boundaries[i+1]),start,annotations:ranges.filter(r=>r.start<=start&&r.end>=boundaries[i+1])}));
}
