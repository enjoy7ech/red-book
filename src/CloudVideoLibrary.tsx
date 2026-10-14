import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';
import { createPortal } from 'react-dom';
import { Alert, Button, Empty, Input, Select, Spin } from 'antd';
import { CheckOutlined, ReloadOutlined, CloseOutlined, MinusOutlined, UpOutlined, PlayCircleOutlined, PauseOutlined, DragOutlined } from '@ant-design/icons';
import { subjects } from './data';
import type { SubjectId } from './data';
import { cloudVideoProgressKey } from './cloudVideoProgress';
import { clampVideoPosition } from './floatingVideoPosition';
import type { VideoPosition } from './floatingVideoPosition';

type Lesson = { id: string; name: string; size: number };
type Catalog = { subject: SubjectId; title: string; lessons: Lesson[]; courses: { id: SubjectId; title: string; count: number }[] };
type Progress = Record<string, { seconds: number; done: boolean }>;
type Props = { initialSubject?: SubjectId | 'all'; visible: boolean; requestedSubject?: SubjectId | null; onRequestHandled: () => void };
const STORE = 'bencao-cloud-video-v1';
function readProgress(): Progress {
  try {
    const raw = JSON.parse(localStorage.getItem(STORE) || '{}');
    return Object.fromEntries(Object.entries(raw).filter(([, v]) => v && typeof v === 'object' && Number.isFinite((v as {seconds:number}).seconds) && (v as {seconds:number}).seconds >= 0 && typeof (v as {done:boolean}).done === 'boolean')) as Progress;
  } catch { return {}; }
}
export default function CloudVideoLibrary({initialSubject='all', visible, requestedSubject, onRequestHandled}: Props) {
  const [subject, setSubject] = useState<SubjectId>(initialSubject === 'all' ? 'zy1' : initialSubject);
  const [catalog, setCatalog] = useState<Catalog>();
  const [active, setActive] = useState<Lesson>();
  const [progress, setProgress] = useState<Progress>(readProgress);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [playError, setPlayError] = useState('');
  const [search, setSearch] = useState('');
  const [retry, setRetry] = useState(0);
  const [storageError, setStorageError] = useState(false);
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [playlistOpen, setPlaylistOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState<VideoPosition>();
  const [playerWidth,setPlayerWidth] = useState(()=>window.innerWidth<=760 ? 230 : 320);
  const [sizeOpen,setSizeOpen] = useState(false);
  const [rate,setRate] = useState(1);
  const resizeDrag=useRef<{pointer:number; x:number; width:number}|undefined>(undefined);
  const panelRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const drag = useRef<{pointer:number; origin:VideoPosition; start:VideoPosition} | undefined>(undefined);
  const playRequested = useRef(false);
  const lastSave = useRef(0);
  const enabled = visible || open;
  const openRef = useRef(open); openRef.current = open;
  const progressFor = (id:string) => progress[cloudVideoProgressKey(subject,id)];

  function save(video:HTMLVideoElement, done=false) {
    if (!active || !Number.isFinite(video.currentTime)) return;
    const id = cloudVideoProgressKey(subject,active.id);
    setProgress(old=>({...old,[id]:{seconds:video.currentTime,done:done || !!old[id]?.done}}));
  }
  function chooseSubject(id:SubjectId) {
    if (id === subject) return;
    if (videoRef.current) { save(videoRef.current); videoRef.current.pause(); }
    playRequested.current=false; setSubject(id); setCatalog(undefined); setActive(undefined); setSearch(''); setPlayError(''); setPlaying(false); lastSave.current=0;
  }
  useEffect(()=>{
    if (!requestedSubject) return;
    chooseSubject(requestedSubject);
    setOpen(true); setCollapsed(false); setPlaylistOpen(true);
    if (requestedSubject === subject && catalog) setActive(old=>old || catalog.lessons[0]);
    onRequestHandled();
  },[requestedSubject,onRequestHandled]);
  useEffect(()=>{
    if (!enabled) return;
    const abort=new AbortController(); setBusy(true); setError('');
    fetch(`/api/cloud-video/catalog?subject=${subject}`,{signal:abort.signal}).then(async r=>{
      if (!r.ok) throw new Error();
      const data:Catalog=await r.json(); if (!Array.isArray(data.lessons) || data.subject!==subject) throw new Error();
      if (!abort.signal.aborted) {
        setCatalog(data);
        setActive(old=>old ? data.lessons.find(l=>l.id===old.id) : openRef.current ? data.lessons[0] : undefined);
      }
    }).catch(()=>{if(!abort.signal.aborted)setError('课程网盘尚未连接。请启动本机的 OpenList 和课程视频服务，再重试。');}).finally(()=>{if(!abort.signal.aborted)setBusy(false);});
    return ()=>abort.abort();
  },[enabled,retry,subject]);
  useEffect(()=>{try{localStorage.setItem(STORE,JSON.stringify(progress));setStorageError(false);}catch{setStorageError(true);}},[progress]);

  function resizeWidth(width:number) { setPlayerWidth(Math.max(200,Math.min(width,640,window.innerWidth-24))); }
  function startResize(e:ReactPointerEvent<HTMLButtonElement>) {
    if(e.button!==0)return;
    const rect=panelRef.current?.getBoundingClientRect(); if(!rect)return;
    // Anchor the opposite corner before resizing a window positioned by right/bottom.
    setPosition({x:rect.left,y:rect.top});
    resizeDrag.current={pointer:e.pointerId,x:e.clientX,width:rect.width};e.currentTarget.setPointerCapture(e.pointerId);
  }
  function moveResize(e:ReactPointerEvent<HTMLButtonElement>) {
    const d=resizeDrag.current;if(d?.pointer===e.pointerId)resizeWidth(d.width+e.clientX-d.x);
  }
  function clamp(pos:VideoPosition) {
    const rect=panelRef.current?.getBoundingClientRect();
    return clampVideoPosition(pos,{width:window.innerWidth,height:window.innerHeight},{width:rect?.width || 360,height:rect?.height || 260});
  }
  useLayoutEffect(()=>{
    setPosition(old=>old ? clamp(old) : old);
  },[collapsed,playlistOpen,open,playerWidth,sizeOpen]);
  useEffect(()=>{
    const resize=()=>{setPlayerWidth(old=>Math.min(old,window.innerWidth-24));setPosition(old=>old ? clamp(old) : old);};
    window.addEventListener('resize',resize); window.visualViewport?.addEventListener('resize',resize);
    return ()=>{window.removeEventListener('resize',resize);window.visualViewport?.removeEventListener('resize',resize);};
  },[]);
  function startDrag(event:ReactPointerEvent<HTMLDivElement>) {
    if (event.button!==0 || (event.target as HTMLElement).closest('button')) return;
    const rect=panelRef.current?.getBoundingClientRect(); if(!rect)return;
    drag.current={pointer:event.pointerId,origin:{x:rect.left,y:rect.top},start:{x:event.clientX,y:event.clientY}};
    event.currentTarget.setPointerCapture(event.pointerId);
  }
  function moveDrag(event:ReactPointerEvent<HTMLDivElement>) {
    const d=drag.current;if(!d || d.pointer!==event.pointerId)return;
    setPosition(clamp({x:d.origin.x+event.clientX-d.start.x,y:d.origin.y+event.clientY-d.start.y}));
  }
  function stopDrag(event:ReactPointerEvent<HTMLDivElement>) {
    if(drag.current?.pointer===event.pointerId)drag.current=undefined;
  }
  function chooseLesson(lesson:Lesson) {
    if (videoRef.current) save(videoRef.current);
    playRequested.current=true; setActive(lesson); setOpen(true); setCollapsed(false); setPlaylistOpen(false); setPlayError(''); lastSave.current=0;
    if (active?.id===lesson.id && videoRef.current) videoRef.current.play().catch(()=>setPlayError('请点击播放器的播放按钮继续。'));
  }
  function togglePlayback() {
    const v=videoRef.current;if(!v)return;
    if(v.paused)v.play().catch(()=>setPlayError('请点击播放器的播放按钮继续。'));else v.pause();
  }
  function close() {
    if(videoRef.current){save(videoRef.current);videoRef.current.pause();}
    playRequested.current=false;setOpen(false);setPlaylistOpen(false);
  }
  const list = (mini=false) => <div className={mini?'floating-video-playlist':'cloud-course-list'}><Input aria-label={mini?'搜索小窗课程':'搜索网盘课程'} placeholder="搜索章节或讲次" value={search} onChange={e=>setSearch(e.target.value)} allowClear/><div>{catalog?.lessons.filter(l=>l.name.includes(search.trim())).map(l=><button key={l.id} className={active?.id===l.id?'selected':''} onClick={()=>chooseLesson(l)}><PlayCircleOutlined/><span><strong>{l.name.replace(/\.(mp4|webm)$/i,'')}</strong><small>{Math.round(l.size/1048576)} MB{progressFor(l.id)?.seconds ? ` · 已看到 ${Math.floor(progressFor(l.id)!.seconds/60)}:${String(Math.floor(progressFor(l.id)!.seconds%60)).padStart(2,'0')}`:''}{progressFor(l.id)?.done?' · 已看完':''}</small></span></button>)}</div></div>;

  const floating = <aside ref={panelRef} hidden={!open} className={`floating-video ${collapsed?'is-collapsed':''}`} aria-label="悬浮课程视频" style={{width:`min(${playerWidth}px, calc(100vw - 24px))`,...(position?{left:position.x,top:position.y,right:'auto',bottom:'auto'}:{})}}>
    <div className="floating-video-header">
      <div className="floating-video-drag" role="button" tabIndex={0} aria-label="移动视频小窗" onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={stopDrag} onPointerCancel={stopDrag} onKeyDown={e=>{const delta:Record<string,VideoPosition>={ArrowLeft:{x:-24,y:0},ArrowRight:{x:24,y:0},ArrowUp:{x:0,y:-24},ArrowDown:{x:0,y:24}};if(!delta[e.key])return;e.preventDefault();const r=panelRef.current?.getBoundingClientRect();if(r)setPosition(clamp({x:r.left+delta[e.key].x,y:r.top+delta[e.key].y}));}}><DragOutlined/><span title={active?.name}>{active?.name.replace(/\.(mp4|webm)$/i,'') || '选择课程视频'}</span></div>
      <button aria-label={playing?'暂停课程视频':'播放课程视频'} disabled={!active} onClick={togglePlayback}>{playing?<PauseOutlined/>:<PlayCircleOutlined/>}</button>
      <button aria-label={collapsed?'展开视频小窗':'收起视频小窗'} onClick={()=>setCollapsed(v=>!v)}>{collapsed?<UpOutlined/>:<MinusOutlined/>}</button>
      <button aria-label="关闭视频小窗" onClick={close}><CloseOutlined/></button>
    </div>
    <div className="floating-video-body">
      <div className="video-frame">{active?<video key={`${subject}:${active.id}`} ref={videoRef} aria-label="夸克课程播放器" controls playsInline preload="metadata" src={`/api/cloud-video/stream?subject=${subject}&id=${encodeURIComponent(active.id)}`} onLoadedMetadata={e=>{const v=e.currentTarget;v.playbackRate=rate;const seconds=progressFor(active.id)?.seconds||0;if(seconds>0&&Number.isFinite(v.duration)&&seconds<v.duration-2)v.currentTime=seconds;if(playRequested.current){playRequested.current=false;v.play().catch(()=>setPlayError('请点击播放器的播放按钮继续。'));}}} onPlay={()=>setPlaying(true)} onTimeUpdate={e=>{if(Date.now()-lastSave.current>5000){lastSave.current=Date.now();save(e.currentTarget);}}} onPause={e=>{setPlaying(false);save(e.currentTarget);}} onEnded={e=>save(e.currentTarget,true)} onError={()=>setPlayError('视频暂时无法播放，请刷新课程后重试。')}/>:<div className="floating-video-empty">{busy?<Spin/>:'请选择一节课程'}</div>}</div>
      <div className="floating-video-toolbar"><Select dropdownStyle={{zIndex:1550}} aria-label="小窗视频科目" value={subject} onChange={chooseSubject} options={subjects.map(s=>({value:s.id,label:s.short}))}/><Button aria-expanded={playlistOpen} onClick={()=>setPlaylistOpen(v=>!v)}>选集</Button><Button aria-label="调整视频小窗大小和倍速" aria-expanded={sizeOpen} onClick={()=>setSizeOpen(v=>!v)}>大小</Button></div>
      {sizeOpen&&<div className="floating-video-settings"><label>小窗大小<input aria-label="视频小窗大小" type="range" min={200} max={Math.min(640,window.innerWidth-24)} step={10} value={playerWidth} onChange={e=>resizeWidth(Number(e.target.value))}/></label><label>播放速度<select aria-label="课程播放速度" value={rate} onChange={e=>{const speed=Number(e.target.value);setRate(speed);if(videoRef.current)videoRef.current.playbackRate=speed;}}>{[0.75,1,1.25,1.5,1.75,2].map(speed=><option key={speed} value={speed}>{speed}×</option>)}</select></label></div>}
      {playlistOpen&&active&&<Button className="floating-video-done" icon={<CheckOutlined/>} type={progressFor(active.id)?.done?'primary':'default'} onClick={()=>setProgress(old=>{const id=cloudVideoProgressKey(subject,active.id);return {...old,[id]:{seconds:old[id]?.seconds||0,done:!old[id]?.done}};})}>{progressFor(active.id)?.done?'已看完本节':'标记本节看完'}</Button>}
      {(error||playError)&&<Alert type="info" message={error||playError}/>} {playlistOpen&&list(true)}
    </div>
    {!collapsed&&<button className="floating-video-resize" aria-label="拖动缩放视频小窗" title="拖动缩放，也可使用方向键" onPointerDown={startResize} onPointerMove={moveResize} onPointerUp={()=>{resizeDrag.current=undefined;}} onPointerCancel={()=>{resizeDrag.current=undefined;}} onKeyDown={e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();resizeWidth(playerWidth+(e.key==='ArrowRight'?20:-20));}}}>◢</button>}
  </aside>;
  return <>
    <section hidden={!visible} className="cloud-video-library">
      <div className="page-heading"><div><div className="overline">我的课程网盘</div><h1>{catalog?.title||`${subjects.find(s=>s.id===subject)?.title} · 视频课堂`}</h1><p>{catalog?`${catalog.lessons.length} 节课程 · ${catalog.lessons.filter(l=>progressFor(l.id)?.done).length} 节已看完`:'选择课程，在小窗中边看边学'}</p></div><Button icon={<ReloadOutlined/>} loading={busy} onClick={()=>setRetry(v=>v+1)}>刷新课程</Button></div>
      <div className="video-subject-filter" aria-label="按四本教材选择课程">{subjects.map(s=><button key={s.id} aria-pressed={subject===s.id} className={subject===s.id?'active':''} onClick={()=>chooseSubject(s.id)}>{s.short}{catalog?.courses.find(c=>c.id===s.id)&&` · ${catalog.courses.find(c=>c.id===s.id)!.count} 节`}</button>)}</div>
      <p className="video-player-help">点击课程后用悬浮小窗播放，切换讲义可继续观看。小窗可拖动、缩放、收起；2025 年课程请结合当年教材核对考点。</p>
      {storageError&&<Alert type="warning" message="观看位置未能保存，请检查浏览器存储空间。"/>}
      {busy?<Spin/>:error?<Alert type="info" message={error}/>:!catalog?.lessons.length?<Empty description="课程目录中还没有可播放的视频"/>:list()}
    </section>
    {createPortal(floating,document.body)}
  </>;
}
