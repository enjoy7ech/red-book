import { useEffect, useRef, useState } from 'react';
import { Alert, Button, Drawer, Empty, Input, Modal, Select, Switch, Tooltip, message } from 'antd';
import { AudioOutlined, RobotOutlined, SendOutlined, SoundOutlined, StopOutlined } from '@ant-design/icons';
import { buildAIContext } from './aiContext';
import type { AISource } from './aiContext';
import { textbookChapters } from './curriculum';
import { blobDataURL, encodeWav, splitSpeech } from './aiAudio';
import './ai.css';
import AIMarkdown from './AIMarkdown';
import useAIChatScroll from './useAIChatScroll';

type ChatMessage={id:string;role:'user'|'assistant';content:string;sources?:AISource[];error?:boolean};
const CHAT_STORE='bencao-ai-chat-v1';
function readChat():ChatMessage[]{try{const data=JSON.parse(localStorage.getItem(CHAT_STORE)||'[]');return Array.isArray(data)?data.filter(m=>m&&typeof m.id==='string'&&['user','assistant'].includes(m.role)&&typeof m.content==='string').slice(-40):[];}catch{return [];}}
type Recorder={kind:'mic'|'video';title:string;videoStart:number;context:AudioContext;stream:MediaStream;node:AudioWorkletNode;chunks:Float32Array[];started:number;voiceAt:number;hasVoice:boolean;timer:ReturnType<typeof setInterval>};
export default function AIAssistant({onSource}:{onSource:(source:AISource)=>void}){
 const [open,setOpen]=useState(false);
 const [messages,setMessages]=useState<ChatMessage[]>(readChat);
 const [input,setInput]=useState('');
 const [scope,setScope]=useState('page');
 const [busy,setBusy]=useState(false);
 const [recording,setRecording]=useState(false);
 const [recordSeconds,setRecordSeconds]=useState(0);
 const [transcribing,setTranscribing]=useState(false);
 const [speaking,setSpeaking]=useState(false);
 const [fallbackAudio,setFallbackAudio]=useState('');
 const fallbackURL=useRef('');
 const [autoSpeak,setAutoSpeak]=useState(false);
 const [voiceLoop,setVoiceLoop]=useState(false);
 const [voice,setVoice]=useState('mimo_default');
 const [service,setService]=useState<boolean|null>(null);
 const [selectionLabel,setSelectionLabel]=useState('');
 const [contextLabel,setContextLabel]=useState('当前页面');
 const [storageError,setStorageError]=useState(false);
 const selectedText=useRef('');
 const requestController=useRef<AbortController|null>(null);
 const speechController=useRef<AbortController|null>(null);
 const player=useRef<{audio:HTMLAudioElement;url:string;finish:()=>void}|null>(null);
 const recorder=useRef<Recorder|null>(null);
 const videoTranscript=useRef<{text:string;title:string}|null>(null);
 const [recordingKind,setRecordingKind]=useState<'mic'|'video'>('mic');
 const busyRef=useRef(false);
 const asrBusy=useRef(false);
 const micStarting=useRef(false);
 const recordEpoch=useRef(0);
 const loop=useRef(false);
 const visible=useRef(false);
 const chatScroll=useAIChatScroll(open,messages,busy);
 const touchY=useRef(0);
 const lastRequest=useRef('');
 const liveMessages=useRef(messages);liveMessages.current=messages;
 const liveScope=useRef(scope);liveScope.current=scope;
 const liveVoice=useRef(voice);liveVoice.current=voice;
 const liveAutoSpeak=useRef(autoSpeak);liveAutoSpeak.current=autoSpeak;
 const [toast,toastHolder]=message.useMessage();

 useEffect(()=>{try{localStorage.setItem(CHAT_STORE,JSON.stringify(messages.slice(-40)));setStorageError(false);}catch{setStorageError(true);}},[messages]);
 useEffect(()=>{
  const selected=()=>{const selection=window.getSelection();if(selection?.toString().trim()&&!selection.anchorNode?.parentElement?.closest('.ai-panel')){selectedText.current=selection.toString().slice(0,50000);setSelectionLabel(`${selectedText.current.length} 字`);}};
  document.addEventListener('selectionchange',selected);
  return ()=>document.removeEventListener('selectionchange',selected);
 },[]);
 useEffect(()=>{const listener=(event:Event)=>{const detail=(event as CustomEvent).detail;if(typeof detail?.selection!=='string')return;selectedText.current=detail.selection.slice(0,50000);setSelectionLabel(`${selectedText.current.length} 字`);setScope('selection');show();setInput(typeof detail.prompt==='string'?detail.prompt:'请讲解这段内容。');};window.addEventListener('study-ai-request',listener);return ()=>window.removeEventListener('study-ai-request',listener);},[]);
 useEffect(()=>()=>{requestController.current?.abort();stopPlayback();void stopRecording(false);},[]);

 function show(){visible.current=true;setOpen(true);fetch('/api/ai/status').then(r=>{if(!r.ok)throw new Error();return r.json();}).then(data=>setService(data.configured===true)).catch(()=>setService(false));}
 function close(){visible.current=false;loop.current=false;setVoiceLoop(false);requestController.current?.abort();stopPlayback();void stopRecording(false);setOpen(false);}
 function stopPlayback(){speechController.current?.abort();if(fallbackURL.current){URL.revokeObjectURL(fallbackURL.current);fallbackURL.current='';setFallbackAudio('');}if(player.current){player.current.audio.pause();player.current.finish();URL.revokeObjectURL(player.current.url);player.current=null;}setSpeaking(false);}
 async function speak(text:string){
  stopPlayback();const controller=new AbortController();speechController.current=controller;setSpeaking(true);
  try{
   for(const part of splitSpeech(text)){
    if(controller.signal.aborted)break;
    const r=await fetch('/api/ai/tts',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text:part,voice:liveVoice.current}),signal:controller.signal});
    if(!r.ok)throw new Error((await r.json()).error||'朗读失败');
    const url=URL.createObjectURL(await r.blob());const audio=new Audio(url);
    try{await new Promise<void>((resolve,reject)=>{player.current={audio,url,finish:resolve};audio.onended=()=>resolve();audio.onerror=()=>reject(new Error('音频播放失败'));audio.play().catch(()=>{fallbackURL.current=url;setFallbackAudio(url);reject(new Error('浏览器阻止了自动播放，请点击下方音频播放器的播放按钮。'));});});}finally{audio.pause();if(fallbackURL.current!==url)URL.revokeObjectURL(url);if(player.current?.audio===audio)player.current=null;}
   }
  }catch(error){if(!controller.signal.aborted){loop.current=false;setVoiceLoop(false);toast.error(error instanceof Error?error.message:'朗读失败');}}
  finally{if(speechController.current===controller)setSpeaking(false);}
 }
 function pageContext(question:string,chosenScope:string){
  if(chosenScope==='video'){if(!videoTranscript.current)throw new Error('请先播放课程并转写一个视频片段。');return {text:`[资料1] ${videoTranscript.current.title}\n${videoTranscript.current.text}`,sources:[{id:'video-transcript',title:videoTranscript.current.title}],label:'视频片段转写'};}

  const root=Array.from(document.querySelectorAll<HTMLElement>('.textbook-reader')).find(el=>el.getBoundingClientRect().width>0);
  const drawers=Array.from(document.querySelectorAll<HTMLElement>('.knowledge-detail,.annotation-list,.study-dialog .question-panel,.study-dialog .lecture-main,.study-dialog .cloud-video-library')).filter(el=>!el.closest('.ai-panel')&&el.getBoundingClientRect().width>0);
  const main=document.querySelector<HTMLElement>('main');
  const text=drawers.at(-1)?.innerText||main?.innerText||'';
  return buildAIContext(chosenScope,question,text,selectedText.current,root?.dataset.textbookId,root?.dataset.sectionId);
 }
 async function ask(question=input,chosenScope=scope){
  if(!question.trim()||busyRef.current||asrBusy.current)return;
  let context;try{context=pageContext(question,chosenScope);}catch(error){toast.info(error instanceof Error?error.message:'无法读取当前内容');return;}
  stopPlayback();chatScroll.jumpToLatest();lastRequest.current=question;setContextLabel(context.label);setInput('');busyRef.current=true;setBusy(true);
  const controller=new AbortController();requestController.current=controller;const id=crypto.randomUUID();let answer='';
  setMessages(rows=>[...rows,{id:crypto.randomUUID(),role:'user',content:question},{id,role:'assistant',content:'',sources:context.sources}]);
  try{
   const images:string[]=[];
   if(['page','section','images'].includes(chosenScope)){
    const visibleImages=Array.from(document.querySelectorAll<HTMLImageElement>('.lecture-content img')).filter(img=>{const rect=img.getBoundingClientRect();return rect.bottom>0&&rect.top<window.innerHeight;}).slice(0,4);
    for(const img of visibleImages){if(new URL(img.src).origin!==location.origin)continue;try{await img.decode();if(controller.signal.aborted)throw new Error('已停止');const canvas=document.createElement('canvas');const scale=Math.min(1,2000/Math.max(img.naturalWidth,img.naturalHeight));canvas.width=Math.round(img.naturalWidth*scale);canvas.height=Math.round(img.naturalHeight*scale);const painter=canvas.getContext('2d');if(!painter)continue;painter.fillStyle='#fff';painter.fillRect(0,0,canvas.width,canvas.height);painter.drawImage(img,0,0,canvas.width,canvas.height);let data=canvas.toDataURL('image/png');if(data.length>2000000)data=canvas.toDataURL('image/jpeg',0.9);if(data.length<=2000000&&images.reduce((n,image)=>n+image.length,0)+data.length<=5000000){images.push(data);context.sources.push({id:'image-'+images.length,title:'当前讲义插图 '+images.length,chapterId:document.querySelector<HTMLElement>('.textbook-reader')?.dataset.textbookId});context.text+=`\n[资料${context.sources.length}] 附图 ${images.length} 为当前讲义原图。`;}}catch{if(controller.signal.aborted)throw new Error('已停止');}}
    if(chosenScope==='images'&&!images.length)throw new Error('请在讲义中滚动到要解读的图片，再使用插图解读。');
   }
   setMessages(rows=>rows.map(m=>m.id===id?{...m,sources:[...context.sources]}:m));
   const r=await fetch('/api/ai/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question,context:context.text,images,history:liveMessages.current.filter(m=>!m.error&&m.content).slice(-12).map(m=>({role:m.role,content:m.content}))}),signal:controller.signal});
   if(!r.ok)throw new Error((await r.json()).error||'请求失败');
   if(!r.body)throw new Error('接口没有返回回答');
   const reader=r.body.getReader();const decoder=new TextDecoder();let pending='';
   function receive(line:string){if(!line.startsWith('data:'))return;const payload=line.slice(5).trim();if(!payload||payload==='[DONE]')return;let data;try{data=JSON.parse(payload);}catch{return;}if(data.error)throw new Error('小米接口中断了回复，请重试。');const delta=data.choices?.[0]?.delta?.content;if(typeof delta==='string'){answer+=delta;setMessages(rows=>rows.map(m=>m.id===id?{...m,content:answer}:m));}}
   while(true){const {done,value}=await reader.read();if(done){pending+=decoder.decode();if(pending)receive(pending);break;}pending+=decoder.decode(value,{stream:true});const lines=pending.split('\n');pending=lines.pop()||'';for(const line of lines)receive(line);}
   if(!answer.trim())throw new Error('接口未返回文本，请重新提问。');
   if(requestController.current===controller){busyRef.current=false;setBusy(false);}
   if(liveAutoSpeak.current||loop.current)await speak(answer);
   if(loop.current&&visible.current&&!controller.signal.aborted&&requestController.current===controller)void startRecording();
  }catch(error){
   if(controller.signal.aborted)setMessages(rows=>rows.map(m=>m.id===id?{...m,content:answer?answer+'\n（已停止生成）':'已停止生成',error:!answer}:m));
   else {loop.current=false;setVoiceLoop(false);setMessages(rows=>rows.map(m=>m.id===id?{...m,content:error instanceof Error?error.message:'请求失败，请重试。',error:true}:m));}
  }finally{if(requestController.current===controller){busyRef.current=false;setBusy(false);}}
 }
 async function startRecording(kind:'mic'|'video'='mic'){
  if(recorder.current||micStarting.current||asrBusy.current||busyRef.current)return;stopPlayback();
  if(kind==='mic'&&!navigator.mediaDevices?.getUserMedia){toast.info('此浏览器不支持录音，请使用 HTTPS 页面或文字输入。');return;}
  micStarting.current=true;const epoch=++recordEpoch.current;let stream:MediaStream|undefined;let context:AudioContext|undefined;
  try{
   context=new AudioContext();await context.resume();let videoStart=0;let title='我的语音';
   if(kind==='video'){
    const video=document.querySelector<HTMLVideoElement>('video');const capture=(video as (HTMLVideoElement&{captureStream?:()=>MediaStream})|null)?.captureStream;
    if(!video||video.paused||!capture)throw new Error('请先播放视频；当前浏览器也须支持视频音轨捕获。');
    stream=capture.call(video);if(!stream.getAudioTracks().length){stream.getTracks().forEach(t=>t.stop());throw new Error('此视频无法捕获音轨，请使用讲义或录音输入。');}
    loop.current=false;setVoiceLoop(false);videoStart=video.currentTime;title=document.querySelector<HTMLElement>('.cloud-video-library h2')?.innerText||'当前课程视频';
   }else stream=await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:true,noiseSuppression:true,autoGainControl:true}});
   if(!visible.current||epoch!==recordEpoch.current){stream.getTracks().forEach(t=>t.stop());void context.close();return;}
   await context.audioWorklet.addModule('/audio-capture.js');if(!visible.current||epoch!==recordEpoch.current){stream.getTracks().forEach(t=>t.stop());void context.close();return;}
   const node=new AudioWorkletNode(context,'study-recorder');const gain=context.createGain();gain.gain.value=0;context.createMediaStreamSource(stream).connect(node);node.connect(gain);gain.connect(context.destination);
   const state:Recorder={kind,title,videoStart,context,stream,node,chunks:[],started:Date.now(),voiceAt:Date.now(),hasVoice:false,timer:setInterval(()=>{},1000)};
   clearInterval(state.timer);state.timer=setInterval(()=>{setRecordSeconds(Math.floor((Date.now()-state.started)/1000));if(Date.now()-state.started>90000)void stopRecording(true);else if(loop.current&&state.hasVoice&&Date.now()-state.voiceAt>1800)void stopRecording(true);},200);
   node.port.onmessage=event=>{if(recorder.current!==state)return;state.chunks.push(event.data.samples);if(event.data.rms>0.014){state.hasVoice=true;state.voiceAt=Date.now();}};
   recorder.current=state;setRecordSeconds(0);setRecordingKind(kind);setRecording(true);
  }catch(error){stream?.getTracks().forEach(t=>t.stop());void context?.close();loop.current=false;setVoiceLoop(false);toast.info(kind==='video'&&error instanceof Error?error.message:'无法访问麦克风。请在浏览器中允许录音，或使用文字输入。');}finally{micStarting.current=false;}
 }
 async function stopRecording(recognize:boolean){
  recordEpoch.current++;const state=recorder.current;if(!state)return;recorder.current=null;clearInterval(state.timer);state.node.disconnect();state.stream.getTracks().forEach(t=>t.stop());void state.context.close();setRecording(false);
  if(!recognize)return;
  if(!state.chunks.length||(state.kind==='mic'&&!state.hasVoice)){loop.current=false;setVoiceLoop(false);toast.info('没有检测到说话，请重新录音。');return;}
  asrBusy.current=true;setTranscribing(true);const controller=new AbortController();requestController.current=controller;
  try{
   const audio=await blobDataURL(encodeWav(state.chunks,state.context.sampleRate));
   const r=await fetch('/api/ai/asr',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({audio}),signal:controller.signal});if(!r.ok)throw new Error((await r.json()).error||'语音识别失败');const {text}=await r.json();if(!text?.trim())throw new Error('未识别到内容，请重试');setInput(text);asrBusy.current=false;setTranscribing(false);
   if(state.kind==='video'&&visible.current){videoTranscript.current={text,title:`${state.title} · ${Math.floor(state.videoStart)}s 起的视频片段（ASR 转写）`};setScope('video');setInput('请总结刚转写的视频片段，列出知识点和易混淆内容。');await ask('请总结刚转写的视频片段，列出知识点和易混淆内容。','video');}else if(loop.current&&visible.current){await ask(text,liveScope.current);}
  }catch(error){if(!controller.signal.aborted)toast.error(error instanceof Error?error.message:'语音识别失败');loop.current=false;setVoiceLoop(false);}
  finally{asrBusy.current=false;setTranscribing(false);}
 }
 function goSource(source:AISource){onSource(source);if(source.chapterId||source.knowledgeId)close();}

 const status=recording?`${recordingKind==='video'?'正在转写视频':'正在听'} · ${recordSeconds}s`:transcribing?'小米正在识别语音':busy?'小米正在回答':speaking?'小米正在朗读':voiceLoop?'连续语音已开启':'可输入问题或开始录音';
 return <>{toastHolder}<Tooltip title="AI 总结、问答与语音交流"><button className="ai-launcher" onClick={show} aria-label="打开 AI 学习助手"><RobotOutlined/><span>AI 助手</span></button></Tooltip><Drawer rootClassName="ai-panel" title={<div className="ai-title"><RobotOutlined/><div><strong>AI 学习助手</strong><small>小米 MiMo · 文字 / ASR / TTS</small></div></div>} open={open} onClose={close} width={Math.min(540,window.innerWidth)} mask={false} zIndex={1600} styles={{body:{padding:0,display:'flex',flexDirection:'column'}}}>
  <div className="ai-context-tools"><Select aria-label="AI 内容范围" value={scope} onChange={setScope} options={[{value:'page',label:'当前页面'},{value:'selection',label:`选中文字${selectionLabel?' · '+selectionLabel:''}`},{value:'section',label:'当前授课分段'},{value:'chapter',label:'当前整章讲义'},{value:'site',label:'全站教材检索'},{value:'images',label:'当前可见讲义插图'},{value:'video',label:'最近转写的视频片段'},...textbookChapters.map(c=>({value:'book:'+c.id,label:c.title}))]} showSearch optionFilterProp="label"/><div className="ai-quick-actions"><Button size="small" disabled={busy} onClick={()=>ask('请总结所选范围的重点，列出核心概念、易混淆点和复习建议。')}>总结内容</Button><Button size="small" disabled={busy} onClick={()=>ask('请用通俗易懂的语言讲解所选内容，配合例子帮助理解。')}>通俗讲解</Button><Button size="small" disabled={busy} onClick={()=>ask('请根据所选内容出 3 道复习题。先给题目，在末尾单独给答案和解析。')}>出题自测</Button><Button size="small" disabled={busy} onClick={()=>{setScope('images');void ask('请解读当前可见讲义插图，结合正文总结图示的知识点。','images');}}>解读插图</Button><Button size="small" disabled={busy||recording||transcribing} onClick={()=>void startRecording('video')}>转写视频片段</Button><Button size="small" disabled={busy} onClick={()=>Modal.confirm({title:'清空此设备的对话记录？',okText:'清空',cancelText:'取消',zIndex:1700,onOk:()=>{setMessages([]);stopPlayback();}})}>清空对话</Button></div></div>
  {service===false&&<Alert className="ai-service-alert" type="warning" showIcon message="AI 服务暂未连接" description="请确认网站服务已更新，或本地 AI 服务已启动。"/>}{storageError&&<Alert type="warning" message="聊天记录未能保存，请复制重要内容。"/>}
  <div className="ai-messages" ref={chatScroll.container} role="log" aria-label="AI 对话消息" tabIndex={0} aria-live="polite" onScroll={chatScroll.onScroll} onPointerDown={e=>{if(e.target===e.currentTarget)chatScroll.pause();}} onWheel={e=>{if(e.deltaY<0)chatScroll.pause();}} onTouchStart={e=>{touchY.current=e.touches[0]?.clientY||0;}} onTouchMove={e=>{const y=e.touches[0]?.clientY||0;if(y>touchY.current+2)chatScroll.pause();touchY.current=y;}} onKeyDown={e=>{if(['ArrowUp','PageUp','Home'].includes(e.key))chatScroll.pause();}}>{!messages.length&&<div className="ai-empty"><RobotOutlined/><h3>边学习，边问清楚。</h3><p>总结眼前这一页，解释刚选中的一句话，<br/>或跨章节查找知识。也可以直接聊聊。</p><small>可解读讲义插图，也可转写正在播放的视频片段（最长 90 秒，需浏览器支持音轨捕获）。</small></div>}{messages.map(m=><article key={m.id} className={`ai-message ${m.role} ${m.error?'ai-error':''}`}><div className="ai-message-author">{m.role==='user'?'我':'小米 MiMo'}</div><div className="ai-message-content">{m.content?(m.role==='assistant'&&!m.error?<AIMarkdown content={m.content} sources={m.sources} onSource={goSource}/>:m.content):'正在整理回答…'}</div>{m.role==='assistant'&&m.content&&!m.error&&<div className="ai-reply-actions"><Button size="small" type="text" icon={<SoundOutlined/>} disabled={recording||busy||speaking} onClick={()=>void speak(m.content)}>朗读</Button><Button size="small" type="text" onClick={()=>{navigator.clipboard.writeText(m.content).then(()=>toast.success('已复制')).catch(()=>toast.info('请选中回答复制。'));}}>复制</Button></div>}{m.role==='assistant'&&m.sources&&m.content&&!m.error&&<details className="ai-source-links"><summary>参考资料 · {m.sources.length} 项</summary>{m.sources.slice(0,10).map((source,i)=><button key={source.id+'-'+i} onClick={()=>goSource(source)}>[资料{i+1}] {source.title}</button>)}</details>}{m.error&&<Button size="small" onClick={()=>ask(lastRequest.current)}>重试</Button>}</article>)}</div>{chatScroll.away&&<div className="ai-latest-bar"><Button size="small" onClick={chatScroll.jumpToLatest}>回到最新回复 ↓</Button></div>}
  <div className="ai-compose"><div className="ai-voice-options"><label><Switch size="small" checked={autoSpeak} onChange={setAutoSpeak}/> 自动朗读</label><label><Switch size="small" checked={voiceLoop} onChange={v=>{loop.current=v;setVoiceLoop(v);if(!v)void stopRecording(false);}}/> 连续语音</label><Select aria-label="朗读音色" size="small" value={voice} onChange={setVoice} options={[{value:'mimo_default',label:'默认音色'},{value:'冰糖',label:'冰糖'},{value:'茉莉',label:'茉莉'}]}/></div><div className="ai-status">{status} · 范围：{contextLabel}</div>{fallbackAudio&&<audio className="ai-audio-fallback" controls src={fallbackAudio} aria-label="手动播放小米语音回复"/>}<Input.TextArea aria-label="向 AI 提问" value={input} onChange={e=>setInput(e.target.value)} autoSize={{minRows:2,maxRows:5}} placeholder="输入问题；Enter 发送，Shift+Enter 换行" maxLength={6000} onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.nativeEvent.isComposing){e.preventDefault();void ask();}}}/><div className="ai-compose-actions"><Button icon={recording?<StopOutlined/>:<AudioOutlined/>} danger={recording} disabled={busy||transcribing} onClick={()=>recording?void stopRecording(true):void startRecording()}>{recording?'结束并识别':'开始录音'}</Button>{(recording||busy||transcribing||speaking)&&<Button icon={<StopOutlined/>} onClick={()=>{loop.current=false;setVoiceLoop(false);requestController.current?.abort();if(recording)void stopRecording(false);stopPlayback();}}>停止</Button>}<Button type="primary" icon={<SendOutlined/>} disabled={!input.trim()||busy||recording||transcribing} onClick={()=>void ask()}>发送</Button></div><p className="ai-data-note">选取的内容与问题发送至小米 MiMo；录音仅在结束录音后提交识别。连续语音会自动提交并朗读回复，关闭助手即停止。聊天记录保存在本机。</p></div>
 </Drawer></>;
}
