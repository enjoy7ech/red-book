import { spawn } from 'node:child_process';
import { copyFile, rm } from 'node:fs/promises';
const localSecrets='dist/server/.dev.vars';
await copyFile('.dev.vars',localSecrets).catch(()=>{});
const child=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1',...process.argv.slice(2)],{stdio:'inherit',env:{...process.env,SITES_WORKER_BUILD:'1',WRANGLER_SEND_METRICS:'false',WRANGLER_WRITE_LOGS:'false',CLOUDFLARE_CF_FETCH_ENABLED:'false'}});
child.on('exit',async code=>{await rm(localSecrets,{force:true});process.exit(code||0);});
