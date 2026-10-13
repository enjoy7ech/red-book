process.stdout.write('Ready for API credential on stdin (input is hidden).\n');
if(process.stdin.isTTY)process.stdin.setRawMode(true);
process.stdin.resume();
let input='';
process.stdin.on('data',async chunk=>{input+=chunk;if(!/[\r\n]/.test(input))return;process.stdin.pause();if(process.stdin.isTTY)process.stdin.setRawMode(false);
 const {key}=JSON.parse(input);const base='https://token-plan-cn.xiaomimimo.com/v1';
 const models=await fetch(base+'/models',{headers:{'api-key':key},signal:AbortSignal.timeout(30000)});const data=await models.json();console.log(JSON.stringify({status:models.status,models:data.data?.map(m=>m.id),error:data.error?.code}));
 for(const [name,body] of [['chat',{model:'mimo-v2.6-flash',messages:[{role:'user',content:'请只回复：接口正常。'}],max_completion_tokens:64,thinking:{type:'disabled'}}],['tts',{model:'mimo-v2.5-tts',messages:[{role:'assistant',content:'你好，开始学习。'}],audio:{format:'wav',voice:'mimo_default'}}]]){
  const r=await fetch(base+'/chat/completions',{method:'POST',headers:{'api-key':key,'Content-Type':'application/json'},body:JSON.stringify(body),signal:AbortSignal.timeout(60000)});const result=await r.json();console.log(JSON.stringify({name,status:r.status,text:result.choices?.[0]?.message?.content,audioBytes:result.choices?.[0]?.message?.audio?.data?.length,error:result.error?.code,message:result.error?.message}));
  if(name==='tts'&&r.ok){const audio=result.choices[0].message.audio.data;const asr=await fetch(base+'/chat/completions',{method:'POST',headers:{'api-key':key,'Content-Type':'application/json'},body:JSON.stringify({model:'mimo-v2.5-asr',messages:[{role:'user',content:[{type:'input_audio',input_audio:{data:'data:audio/wav;base64,'+audio,format:'wav'}}]}],asr_options:{language:'zh'}}),signal:AbortSignal.timeout(60000)});const transcript=await asr.json();console.log(JSON.stringify({name:'asr',status:asr.status,text:transcript.choices?.[0]?.message?.content,error:transcript.error?.code}));}
 }
 process.exit();
});
