import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { handleAI } from '../worker/ai.mjs';
const env=JSON.parse(await readFile('.openai/local/ai-config.json','utf8'));
http.createServer(async(req,res)=>{
 try{
  const incomingOrigin=req.headers.origin;
  if(incomingOrigin&&!['localhost','127.0.0.1','[::1]'].includes(new URL(incomingOrigin).hostname)){res.writeHead(403);res.end();return;}
  const controller=new AbortController();res.on('close',()=>controller.abort());
  const chunks=[];let size=0;for await(const chunk of req){size+=chunk.length;if(size>8500000){res.writeHead(413);res.end();return;}chunks.push(chunk);}
  const url=`http://${req.headers.host}${req.url}`;const headers=new Headers();for(const [key,value]of Object.entries(req.headers))if(value)headers.set(key,Array.isArray(value)?value.join(','):value);
  // Vite is the loopback-only gateway; preserve its origin for same-origin checks.
  const origin=headers.get('origin');const request=new Request(origin?new URL(req.url,origin):url,{method:req.method,headers,signal:controller.signal,...(req.method!=='GET'&&req.method!=='HEAD'?{body:Buffer.concat(chunks)}:{})});
  const response=await handleAI(request,env);if(!response){res.writeHead(404);res.end();return;}res.writeHead(response.status,Object.fromEntries(response.headers));if(response.body){for await(const chunk of response.body){if(res.destroyed)break;res.write(chunk);}}res.end();
 }catch{res.writeHead(500);res.end(JSON.stringify({error:'本地 AI 服务发生错误。'}));}
}).listen(5246,'127.0.0.1',()=>console.log('AI gateway ready at http://127.0.0.1:5246'));
