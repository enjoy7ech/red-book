import type { Knowledge, Question, Source } from './data.ts';
export type Attempt = { questionId: string; selected: number[]; correct: boolean; time: string };
export type StudyState = { learned: string[]; saved: string[]; attempts: Attempt[]; checkins: string[]; targetDate: string; dailyGoal: number; imported: { knowledge: Knowledge[]; questions: Question[]; sources: Source[] } };
export const defaultState: StudyState = { learned: [], saved: [], attempts: [], checkins: [], targetDate: '2026-10-31', dailyGoal: 10, imported: { knowledge: [], questions: [], sources: [] } };
export function sameAnswers(a: number[], b: number[]) { return a.length === b.length && [...a].sort().every((v,i) => v === [...b].sort()[i]); }
export function localDate(date = new Date()) { return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`; }
export function latestMistakes(attempts: Attempt[]) { const latest = new Map<string, Attempt>(); attempts.forEach(a => latest.set(a.questionId,a)); return [...latest.values()].filter(a => !a.correct).map(a => a.questionId); }
export function validateImport(value: unknown, existing: { knowledge: Knowledge[]; questions: Question[]; sources: Source[] }) {
 if (!value || typeof value !== 'object') throw new Error('请输入有效的 JSON 资料包。');
 const data = value as Record<string, unknown>;
 const notes = data.knowledge ?? [], qs = data.questions ?? [], refs = data.sources ?? [];
 if (![notes,qs,refs].every(Array.isArray)) throw new Error('knowledge、questions、sources 必须是数组。');
 const text = (v: unknown) => typeof v === 'string' && v.trim().length > 0;
 const subjects = ['zy1','zy2','zh','fg'];
 const allIds = new Set([...existing.knowledge,...existing.questions,...existing.sources].map(x=>x.id));
 const checkId = (v: Record<string,unknown>) => {if (!text(v.id) || allIds.has(v.id as string)) throw new Error('资料 ID 缺失或重复，请为导入资料使用唯一 ID。'); allIds.add(v.id as string);};
 for (const s of refs as Record<string,unknown>[]) { if (!s || typeof s !== 'object') throw new Error('来源格式错误。'); checkId(s); if (![s.title,s.publisher,s.url,s.kind,s.note].every(text) || !/^https?:\/\//i.test(s.url as string)) throw new Error('来源需包含标题、发布者、http(s) 链接、类型和说明。'); }
 const sourceIds = new Set([...existing.sources,...refs as Source[]].map(s=>s.id));
 for (const k of notes as Record<string,unknown>[]) { if (!k || typeof k !== 'object') throw new Error('知识格式错误。'); checkId(k); if (!subjects.includes(k.subject as string) || ![k.title,k.chapter,k.summary,k.tip].every(text) || !Array.isArray(k.points) || !k.points.length || !k.points.every(text) || !Array.isArray(k.tags) || !k.tags.every(text) || !Number.isFinite(k.minutes) || Number(k.minutes)<=0 || !sourceIds.has(k.sourceId as string)) throw new Error('知识字段不完整，或科目、来源、学习时长无效。'); }
 const allNotes = [...existing.knowledge,...notes as Knowledge[]];
 for (const q of qs as Record<string,unknown>[]) { if (!q || typeof q !== 'object') throw new Error('题目格式错误。'); checkId(q); const note = allNotes.find(k=>k.id===q.knowledgeId); if (!text(q.title) || !text(q.explanation) || !text(q.origin) || !Array.isArray(q.options) || q.options.length<2 || q.options.length>6 || !q.options.every(text) || !Array.isArray(q.answer) || q.answer.length<1 || new Set(q.answer).size!==q.answer.length || !q.answer.every(i=>Number.isInteger(i)&&i>=0&&i<(q.options as unknown[]).length) || !['single','multiple'].includes(q.type as string) || (q.type==='single'&&q.answer.length!==1) || (q.type==='multiple'&&q.answer.length<2) || !note || note.subject!==q.subject || !sourceIds.has(q.sourceId as string)) throw new Error('题目字段、答案索引、关联知识或来源无效。'); }
 if (!(notes as unknown[]).length && !(qs as unknown[]).length && !(refs as unknown[]).length) throw new Error('资料包为空。');
 return {knowledge:notes as Knowledge[],questions:qs as Question[],sources:refs as Source[]};
}
