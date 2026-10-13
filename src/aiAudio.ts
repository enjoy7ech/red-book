export function encodeWav(chunks:Float32Array[],sampleRate:number){
 const inputLength=chunks.reduce((n,c)=>n+c.length,0);const input=new Float32Array(inputLength);let offset=0;for(const chunk of chunks){input.set(chunk,offset);offset+=chunk.length;}
 const rate=16000;const length=Math.floor(input.length*rate/sampleRate);const buffer=new ArrayBuffer(44+length*2);const view=new DataView(buffer);
 const write=(at:number,text:string)=>[...text].forEach((c,i)=>view.setUint8(at+i,c.charCodeAt(0)));
 write(0,'RIFF');view.setUint32(4,36+length*2,true);write(8,'WAVE');write(12,'fmt ');view.setUint32(16,16,true);view.setUint16(20,1,true);view.setUint16(22,1,true);view.setUint32(24,rate,true);view.setUint32(28,rate*2,true);view.setUint16(32,2,true);view.setUint16(34,16,true);write(36,'data');view.setUint32(40,length*2,true);
 for(let i=0;i<length;i++){const start=Math.floor(i*sampleRate/rate),end=Math.max(start+1,Math.floor((i+1)*sampleRate/rate));let sum=0;for(let j=start;j<end&&j<input.length;j++)sum+=input[j];const sample=Math.max(-1,Math.min(1,sum/(end-start)));view.setInt16(44+i*2,sample<0?sample*32768:sample*32767,true);}
 return new Blob([buffer],{type:'audio/wav'});
}
export function splitSpeech(text:string){
 const clean=text.replace(/\[资料\d+\]/g,'').replace(/[#*`|]/g,'');const sentences=clean.match(/[^。！？\n]+[。！？\n]?/g)||[clean];const result:string[]=[];let part='';
 for(const sentence of sentences){if(part.length+sentence.length>1400&&part){result.push(part);part='';}for(let i=0;i<sentence.length;i+=1400){const piece=sentence.slice(i,i+1400);if(part.length+piece.length>1400){result.push(part);part='';}part+=piece;}}if(part.trim())result.push(part);return result;
}
export async function blobDataURL(blob:Blob):Promise<string>{return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onerror=()=>reject(new Error('录音读取失败'));reader.onload=()=>resolve(String(reader.result));reader.readAsDataURL(blob);});}
