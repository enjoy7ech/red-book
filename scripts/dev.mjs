import { spawn, spawnSync } from 'node:child_process';
const prepared=spawnSync(process.execPath,['scripts/prepare-pdf-assets.mjs'],{stdio:'inherit'});
if(prepared.status!==0)process.exit(prepared.status||1);
const child=spawn(process.execPath,['node_modules/vite/bin/vite.js','--host','127.0.0.1'],{stdio:'inherit'});
child.on('exit',code=>process.exit(code||0));
process.on('SIGINT',()=>child.kill());process.on('SIGTERM',()=>child.kill());
