import { spawn, spawnSync } from 'node:child_process';
import { access } from 'node:fs/promises';
import net from 'node:net';

const children = [];
const prepared = spawnSync(process.execPath, ['scripts/prepare-pdf-assets.mjs'], { stdio: 'inherit' });
if (prepared.status !== 0) process.exit(prepared.status || 1);
const gatewayRunning = await new Promise(resolve => {
 const socket = net.connect({ host: '127.0.0.1', port: 5246 });
 socket.setTimeout(800);
 socket.once('connect', () => { socket.destroy(); resolve(true); });
 socket.once('error', () => resolve(false));
 socket.once('timeout', () => { socket.destroy(); resolve(false); });
});
const configured = await access('.openai/local/ai-config.json').then(() => true).catch(() => false);
let stopping = false;
function stop() { if (stopping) return; stopping = true; for (const child of children) child.kill(); }
function start(args) {
 const child = spawn(process.execPath, args, { stdio: 'inherit' });
 children.push(child);
 child.on('error', error => { console.error(error.message); stop(); process.exitCode = 1; });
 child.on('exit', code => { if (!stopping) { stop(); process.exitCode = code || 0; } });
}
if (configured && !gatewayRunning) start(['scripts/ai-local-server.mjs']);
if (!configured && !gatewayRunning) console.log('Local AI configuration is missing. Textbook reading remains available.');
start(['node_modules/vite/bin/vite.js', '--host', '127.0.0.1']);
process.on('SIGINT', stop);
process.on('SIGTERM', stop);
