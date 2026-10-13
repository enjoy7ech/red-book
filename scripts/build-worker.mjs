import { spawnSync } from 'node:child_process';
import { rm, lstat } from 'node:fs/promises';
import path from 'node:path';
const project=path.resolve(process.cwd());const output=path.resolve(project,'dist');
if(path.dirname(output)!==project||(await lstat(output).catch(()=>null))?.isSymbolicLink())throw new Error('Build output must be the project dist directory.');
await rm(output,{recursive:true,force:true});
const result=spawnSync(process.execPath,['node_modules/vite/bin/vite.js','build'],{stdio:'inherit',env:{...process.env,SITES_WORKER_BUILD:'1',WRANGLER_SEND_METRICS:'false',WRANGLER_WRITE_LOGS:'false',CLOUDFLARE_CF_FETCH_ENABLED:'false'}});
if(result.status!==0)process.exit(result.status||1);
await import('./prepare-worker.mjs');
