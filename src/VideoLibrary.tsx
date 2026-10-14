import CloudVideoLibrary from './CloudVideoLibrary';
import type { SubjectId } from './data';
import './videos.css';

export default function VideoLibrary(props: {initialSubject?: SubjectId | 'all'; visible: boolean; requestedSubject?: SubjectId | null; onRequestHandled: () => void}) {
  return <CloudVideoLibrary {...props} />;
}
