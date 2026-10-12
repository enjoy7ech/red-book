import CloudVideoLibrary from './CloudVideoLibrary';
import type { SubjectId } from './data';
import './videos.css';

export default function VideoLibrary({ initialSubject = 'all' }: { initialSubject?: SubjectId | 'all' }) {
  return <CloudVideoLibrary initialSubject={initialSubject} />;
}
