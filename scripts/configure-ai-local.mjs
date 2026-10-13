import { mkdir, writeFile } from 'node:fs/promises';
console.log('Ready for local AI configuration on stdin (input is hidden).');
if(process.stdin.isTTY)process.stdin.setRawMode(true);process.stdin.resume();let input='';
process.stdin.on('data',async chunk=>{input+=chunk;if(!/[\r\n]/.test(input))return;process.stdin.pause();if(process.stdin.isTTY)process.stdin.setRawMode(false);const data=JSON.parse(input);if(typeof data.MIMO_API_KEY!=='string'||!data.MIMO_API_KEY)throw new Error('Missing key');await mkdir('.openai/local',{recursive:true});await writeFile('.openai/local/ai-config.json',JSON.stringify(data),{mode:0o600});console.log('Local AI configuration saved outside Git.');process.exit();});
