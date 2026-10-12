import catalog from './textbookCatalog.json' with { type: 'json' };
import type { Knowledge, SubjectId } from './data';

export interface TextbookSection { id: string; title: string; start: number; end: number }
export interface TextbookChapter { id: string; subject: SubjectId; order: number; title: string; teacher: string; fileName: string; sourcePath: string; contentUrl: string; sections: TextbookSection[]; characters: number; searchText: string }
export const textbookChapters = catalog.chapters as TextbookChapter[];
export const textbookOutlines = catalog.outlines;
const aliases: Record<string, string> = {
 'zy1:药性理论': 'zy1-06', 'zy1:中药炮制': 'zy1-04',
 'zh:处方调剂': 'zh-12', 'zh:配伍禁忌': 'zh-13', 'zh:合理用药': 'zh-13',
 'fg:药品分类管理': 'fg-04', 'fg:中药生产管理': 'fg-06', 'fg:药品经营管理': 'fg-04',
};
export function chapterForKnowledge(note: Knowledge) {
 const exact = textbookChapters.find(c => c.subject === note.subject && c.title === note.chapter);
 if (exact) return exact;
 const alias = aliases[`${note.subject}:${note.chapter}`];
 if (alias) return textbookChapters.find(c => c.id === alias);
 const name = note.chapter.replace(/息/g, '熄');
 return textbookChapters.find(c => c.subject === note.subject && c.title.replace(/息/g, '熄').endsWith(name));
}
export function organizeKnowledge(notes: Knowledge[]) {
 return notes.map(note => ({ ...note, chapter: chapterForKnowledge(note)?.title ?? (note.chapter === '历年考点复盘' ? '跨章复盘 · 历年考点' : `补充资料 · ${note.chapter}`) }))
  .sort((a,b) => {
   const ai = textbookChapters.findIndex(c => c.subject === a.subject && c.title === a.chapter);
   const bi = textbookChapters.findIndex(c => c.subject === b.subject && c.title === b.chapter);
   return (ai < 0 ? 999 : ai) - (bi < 0 ? 999 : bi);
  });
}
