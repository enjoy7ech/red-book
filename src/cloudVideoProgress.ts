import type { SubjectId } from './data';

// Keep existing 中药一 progress keys while isolating other subjects' repeated filenames.
export function cloudVideoProgressKey(subject: SubjectId, videoId: string) {
  return subject === 'zy1' ? videoId : `${subject}:${videoId}`;
}
