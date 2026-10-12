import { useEffect, useRef, useState } from 'react';
import { Alert, Button, Empty, Input, Spin, Tag } from 'antd';
import { CheckOutlined, ReloadOutlined } from '@ant-design/icons';
import { subjects } from './data';
import type { SubjectId } from './data';
import { cloudVideoProgressKey } from './cloudVideoProgress';
type Lesson = { id: string; name: string; size: number };
type Catalog = { subject: SubjectId; title: string; lessons: Lesson[]; courses: { id: SubjectId; title: string; count: number }[] };
type Progress = Record<string, { seconds: number; done: boolean }>;
const STORE = 'bencao-cloud-video-v1';
function readProgress(): Progress {
  try {
    const raw = JSON.parse(localStorage.getItem(STORE) || '{}');
    return Object.fromEntries(Object.entries(raw).filter(([, value]) => value && typeof value === 'object' && Number.isFinite((value as { seconds: number }).seconds) && (value as { seconds: number }).seconds >= 0 && typeof (value as { done: boolean }).done === 'boolean')) as Progress;
  } catch { return {}; }
}
export default function CloudVideoLibrary({ initialSubject = 'all' }: { initialSubject?: SubjectId | 'all' }) {
  const [subject, setSubject] = useState<SubjectId>(initialSubject === 'all' ? 'zy1' : initialSubject);
  const [catalog, setCatalog] = useState<Catalog>();
  const [active, setActive] = useState<Lesson>();
  const [progress, setProgress] = useState<Progress>(readProgress);
  const [busy, setBusy] = useState(true);
  const [error, setError] = useState('');
  const [playError, setPlayError] = useState('');
  const [search, setSearch] = useState('');
  const [retry, setRetry] = useState(0);
  const [storageError, setStorageError] = useState(false);
  const lastSave = useRef(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressFor = (id: string) => progress[cloudVideoProgressKey(subject, id)];
  useEffect(() => {
    const abort = new AbortController(); setBusy(true); setError('');
    fetch(`/api/cloud-video/catalog?subject=${subject}`, { signal: abort.signal }).then(async response => {
      if (!response.ok) throw new Error();
      const data: Catalog = await response.json(); if (!Array.isArray(data.lessons)) throw new Error();
      if (!abort.signal.aborted) { setCatalog(data); setActive(previous => data.lessons.find(l => l.id === previous?.id) || data.lessons[0]); }
    }).catch(() => { if (!abort.signal.aborted) setError('课程网盘尚未连接。请启动本机的 OpenList 和课程视频服务，再重试。'); }).finally(() => { if (!abort.signal.aborted) setBusy(false); });
    return () => abort.abort();
  }, [retry, subject]);
  useEffect(() => { try { localStorage.setItem(STORE, JSON.stringify(progress)); setStorageError(false); } catch { setStorageError(true); } }, [progress]);
  function save(video: HTMLVideoElement, done = false) {
    if (!active || !Number.isFinite(video.currentTime)) return;
    const id = cloudVideoProgressKey(subject, active.id);
    setProgress(previous => ({ ...previous, [id]: { seconds: video.currentTime, done: done || !!previous[id]?.done } }));
  }
  function chooseSubject(id: SubjectId) {
    if (id === subject) return;
    if (videoRef.current) save(videoRef.current);
    setSubject(id); setCatalog(undefined); setActive(undefined); setBusy(true); setSearch(''); setPlayError(''); lastSave.current = 0;
  }
  return <section className="cloud-video-library">
    <div className="page-heading"><div><div className="overline">我的课程网盘</div><h1>{catalog?.title || `${subjects.find(s => s.id === subject)?.title} · 视频课堂`}</h1><p>{catalog ? `${catalog.lessons.length} 节课程 · ${catalog.lessons.filter(l => progressFor(l.id)?.done).length} 节已看完` : '连接自己的课程，按章节学习'}</p></div><Button icon={<ReloadOutlined />} loading={busy} onClick={() => setRetry(value => value + 1)}>刷新课程</Button></div>
    <div className="video-subject-filter" aria-label="按四本教材选择课程">{subjects.map(s => <button key={s.id} aria-pressed={subject === s.id} className={subject === s.id ? 'active' : ''} onClick={() => chooseSubject(s.id)}>{s.short}{catalog?.courses.find(c => c.id === s.id) && ` · ${catalog.courses.find(c => c.id === s.id)!.count} 节`}</button>)}</div>
    <p className="video-player-help">2025 年基础学习课程。观看位置保存在当前浏览器；请结合当年教材核对考点。</p>
    {storageError && <Alert type="warning" showIcon message="观看位置未能保存，请检查浏览器存储空间。" />}
    {busy ? <Spin /> : error ? <Alert type="info" showIcon message={error} /> : !catalog?.lessons.length ? <Empty description="课程目录中还没有可播放的视频" /> : active && <section className="video-study">
      <div className="video-now"><Tag color="green">课程网盘</Tag><h2>{active.name.replace(/\.mp4$/i, '')}</h2></div>
      <div className="video-watch-grid"><div className="video-main"><div className="video-frame"><video key={`${subject}:${active.id}`} ref={videoRef} aria-label="夸克课程播放器" controls playsInline preload="metadata" src={`/api/cloud-video/stream?subject=${subject}&id=${encodeURIComponent(active.id)}`} onLoadedMetadata={event => { const video = event.currentTarget; const seconds = progressFor(active.id)?.seconds || 0; if (seconds > 0 && Number.isFinite(video.duration) && seconds < video.duration - 2) video.currentTime = seconds; }} onTimeUpdate={event => { if (Date.now() - lastSave.current > 5000) { lastSave.current = Date.now(); save(event.currentTarget); } }} onPause={event => save(event.currentTarget)} onEnded={event => save(event.currentTarget, true)} onError={() => setPlayError('视频暂时无法播放，请刷新课程后重试，或检查网盘登录状态。')} /></div>
        {playError && <Alert type="warning" showIcon message={playError} />}
        <div className="video-play-actions"><Button icon={<CheckOutlined />} onClick={() => setProgress(previous => ({ ...previous, [cloudVideoProgressKey(subject, active.id)]: { seconds: previous[cloudVideoProgressKey(subject, active.id)]?.seconds || 0, done: !previous[cloudVideoProgressKey(subject, active.id)]?.done } }))}>{progressFor(active.id)?.done ? '已看完，取消标记' : '标记本节看完'}</Button></div>
      </div><aside className="video-playlist"><h3>课程选集 <span>{catalog.lessons.length} 节</span></h3><Input aria-label="搜索网盘课程" placeholder="搜索章节或讲次" value={search} onChange={event => setSearch(event.target.value)} allowClear /><div>{catalog.lessons.filter(l => l.name.includes(search.trim())).map(l => <button key={l.id} className={l.id === active.id ? 'selected' : ''} onClick={() => { setActive(l); setPlayError(''); lastSave.current = 0; }}><span className="video-lesson-number">{progressFor(l.id)?.done ? <CheckOutlined /> : '▶'}</span><span><strong>{l.name.replace(/\.mp4$/i, '')}</strong><small>{Math.round(l.size / 1048576)} MB{progressFor(l.id)?.seconds ? ` · 已看到 ${Math.floor(progressFor(l.id)!.seconds / 60)}:${String(Math.floor(progressFor(l.id)!.seconds % 60)).padStart(2, '0')}` : ''}</small></span></button>)}</div></aside></div>
    </section>}
  </section>;
}
