import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { Readable } from 'node:stream';
import { pathToFileURL } from 'node:url';

export function videoNameFromId(id) {
  if (!id || id.length > 4096 || !/^[\w-]+$/.test(id)) throw new Error('Invalid video');
  const name = Buffer.from(id, 'base64url').toString('utf8');
  if (Buffer.from(name).toString('base64url') !== id || /[/\\\x00-\x1f]/.test(name) || !/\.(mp4|webm)$/i.test(name)) throw new Error('Invalid video');
  return name;
}
export function proxyVideoUrl(source, root, name, sign) {
  return `${source}/p${`${root}/${name}`.split('/').map(encodeURIComponent).join('/')}?${new URLSearchParams({ sign })}`;
}
export async function startCloudVideoServer(runtimeDir) {
  const config = JSON.parse(await readFile(path.join(runtimeDir, 'site-video-config.json'), 'utf8'));
  const source = 'http://127.0.0.1:5244';
  if (config.source !== source || !config.root.startsWith('/quark-video/') || config.root.includes('/../')) throw new Error('Invalid local video configuration');
  const root = config.root.replace(/\/$/, '');
  async function api(endpoint, body) {
    const auth = JSON.parse(await readFile(path.join(runtimeDir, 'local-auth.json'), 'utf8'));
    const response = await fetch(`${source}${endpoint}`, { method: 'POST', redirect: 'error', headers: { 'Content-Type': 'application/json', Authorization: auth.token }, body: JSON.stringify(body), signal: AbortSignal.timeout(20000) });
    const result = await response.json();
    if (!response.ok || result.code !== 200) throw new Error('Cloud storage unavailable');
    return result.data;
  }
  let cachedCatalog, cachedAt = 0;
  async function catalog() {
    if (cachedCatalog && Date.now() - cachedAt < 60000) return cachedCatalog;
    const files = [];
    for (let page = 1; page <= 20; page++) {
      const data = await api('/api/fs/list', { path: root, password: '', page, per_page: 200, refresh: false });
      files.push(...(data.content || []));
      if (!data.content?.length || files.length >= data.total) break;
    }
    const lessons = files.filter(f => !f.is_dir && /\.(mp4|webm)$/i.test(f.name) && !/[/\\\x00-\x1f]/.test(f.name)).map(f => ({ id: Buffer.from(f.name).toString('base64url'), name: f.name, size: f.size })).sort((a, b) => a.name.localeCompare(b.name, 'zh-CN', { numeric: true }));
    cachedCatalog = { title: '中药学专业知识（一） · 2025 基础学习', lessons }; cachedAt = Date.now();
    return cachedCatalog;
  }
  const server = http.createServer(async (req, res) => {
    const json = (status, value) => { res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }); res.end(JSON.stringify(value)); };
    const origins = new Set(['http://127.0.0.1:5173', 'http://localhost:5173', 'http://127.0.0.1:5245']);
    if (!['127.0.0.1:5245', 'localhost:5245'].includes(req.headers.host) || (req.headers.origin && !origins.has(req.headers.origin))) return json(403, { error: 'Forbidden' });
    const url = new URL(req.url, 'http://127.0.0.1:5245');
    if (req.method !== 'GET') return json(405, { error: 'Method not allowed' });
    try {
      if (url.pathname === '/api/cloud-video/catalog') return json(200, await catalog());
      if (url.pathname !== '/api/cloud-video/stream') return json(404, { error: 'Not found' });
      let name;
      try { name = videoNameFromId(url.searchParams.get('id')); } catch { return json(400, { error: 'Invalid video' }); }
      if (!(await catalog()).lessons.some(l => l.name === name)) return json(404, { error: 'Video not found' });
      if (req.headers.range && !/^bytes=\d*-\d*$/.test(req.headers.range)) return json(416, { error: 'Invalid range' });
      const file = await api('/api/fs/get', { path: `${root}/${name}`, password: '' });
      const abort = new AbortController(); res.once('close', () => abort.abort());
      const headers = req.headers.range ? { Range: req.headers.range } : {};
      const upstream = await fetch(proxyVideoUrl(source, root, name, file.sign), { headers, redirect: 'error', signal: abort.signal });
      if (![200, 206, 416].includes(upstream.status)) throw new Error('Video unavailable');
      const outgoing = { 'Cache-Control': 'no-store' };
      for (const key of ['content-type', 'content-length', 'content-range', 'accept-ranges']) if (upstream.headers.has(key)) outgoing[key] = upstream.headers.get(key);
      res.writeHead(upstream.status, outgoing);
      if (!upstream.body) return res.end();
      const stream = Readable.fromWeb(upstream.body); stream.on('error', () => res.destroy()); stream.pipe(res);
    } catch { if (!res.headersSent && !res.destroyed) json(502, { error: '课程网盘暂时无法读取，请检查本机 OpenList 的登录状态。' }); else res.destroy(); }
  });
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(5245, '127.0.0.1', resolve); });
  console.log('Course video gateway: http://127.0.0.1:5245 (local only)'); return server;
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const runtimeDir = process.env.RED_BOOK_VIDEO_RUNTIME || path.join(process.env.LOCALAPPDATA || '', 'red-book-services', 'openlist');
  startCloudVideoServer(runtimeDir).catch(() => { console.error('Cannot start course gateway. Check the local OpenList configuration.'); process.exitCode = 1; });
}
