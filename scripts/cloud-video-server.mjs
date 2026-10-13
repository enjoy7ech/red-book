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
export function courseForSubject(config, subject) {
  const course = config.courses?.find(c => c.id === subject);
  if (!course || !['zy1', 'zy2', 'zh', 'fg'].includes(subject) || !course.path.startsWith('/') || course.path.split('/').some(p => p === '..' || p === '.') || course.path.includes('\\')) throw new Error('Invalid subject');
  return course;
}
export async function startCloudVideoServer(runtimeDir, { port = 5245 } = {}) {
  const config = JSON.parse(await readFile(path.join(runtimeDir, 'site-video-config.json'), 'utf8'));
  const source = config.server ? (process.env.OPENLIST_URL || config.source) : config.source;
  const sourceUrl = new URL(source);
  if ((!config.server && source !== 'http://127.0.0.1:5244') || !['http:', 'https:'].includes(sourceUrl.protocol) || sourceUrl.username || sourceUrl.password || sourceUrl.search || sourceUrl.hash || sourceUrl.pathname !== '/' || !config.root.startsWith('/quark-video/') || config.root.split('/').some(p => p === '..' || p === '.')) throw new Error('Invalid video configuration');
  const root = config.root.replace(/\/$/, '');
  const apiPath = course => config.server ? `${root}${course.path}` : course.path;
  let token;
  async function api(endpoint, body, retried = false) {
    if (!token) {
      const account = config.server && process.env.OPENLIST_USERNAME
        ? { username: process.env.OPENLIST_USERNAME, password: process.env.OPENLIST_PASSWORD }
        : JSON.parse(await readFile(path.join(runtimeDir, 'webdav-account.json'), 'utf8'));
      if (!account.username || !account.password) throw new Error('OpenList credentials missing');
      const login = await fetch(`${source}/api/auth/login`, { method: 'POST', redirect: 'error', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: account.username, password: account.password }), signal: AbortSignal.timeout(10000) });
      const result = await login.json();
      if (result.code !== 200) throw new Error('Local course login unavailable');
      token = result.data.token;
    }
    const response = await fetch(`${source}${endpoint}`, { method: 'POST', redirect: 'error', headers: { 'Content-Type': 'application/json', Authorization: token }, body: JSON.stringify(body), signal: AbortSignal.timeout(20000) });
    const result = await response.json();
    if ((response.status === 401 || result.code === 401) && !retried) { token = undefined; return api(endpoint, body, true); }
    if (!response.ok || result.code !== 200) throw new Error('Cloud storage unavailable');
    return result.data;
  }
  const cachedCatalogs = new Map();
  async function catalog(subject) {
    const course = courseForSubject(config, subject);
    const cached = cachedCatalogs.get(subject);
    if (cached && Date.now() - cached.time < 60000) return cached.data;
    const files = [];
    for (let page = 1; page <= 20; page++) {
      const data = await api('/api/fs/list', { path: apiPath(course), password: '', page, per_page: 200, refresh: false });
      files.push(...(data.content || []));
      if (!data.content?.length || files.length >= data.total) break;
    }
    const lessons = files.filter(f => !f.is_dir && /\.(mp4|webm)$/i.test(f.name) && !/[/\\\x00-\x1f]/.test(f.name)).map(f => ({ id: Buffer.from(f.name).toString('base64url'), name: f.name, size: f.size })).sort((a, b) => a.name.localeCompare(b.name, 'zh-CN', { numeric: true }));
    const data = { subject, title: `${course.title} · 2025 基础学习`, lessons, courses: config.courses.map(c => ({ id: c.id, title: c.title, count: c.id === subject ? lessons.length : cachedCatalogs.get(c.id)?.data.lessons.length ?? c.count })) };
    cachedCatalogs.set(subject, { time: Date.now(), data });
    return data;
  }
  const server = http.createServer(async (req, res) => {
    const json = (status, value) => { res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }); res.end(JSON.stringify(value)); };
    const origins = new Set(['http://127.0.0.1:5173', 'http://localhost:5173', 'http://127.0.0.1:5245', ...(config.allowedOrigins || [])]);
    if (!['127.0.0.1:5245', 'localhost:5245'].includes(req.headers.host) || (req.headers.origin && !origins.has(req.headers.origin))) return json(403, { error: 'Forbidden' });
    const url = new URL(req.url, 'http://127.0.0.1:5245');
    if (req.method !== 'GET') return json(405, { error: 'Method not allowed' });
    const subject = url.searchParams.get('subject') || 'zy1';
    let course;
    try { course = courseForSubject(config, subject); } catch { return json(400, { error: 'Invalid subject' }); }
    try {
      if (url.pathname === '/api/cloud-video/catalog') return json(200, await catalog(subject));
      if (url.pathname !== '/api/cloud-video/stream') return json(404, { error: 'Not found' });
      let name;
      try { name = videoNameFromId(url.searchParams.get('id')); } catch { return json(400, { error: 'Invalid video' }); }
      if (!(await catalog(subject)).lessons.some(l => l.name === name)) return json(404, { error: 'Video not found' });
      if (req.headers.range && !/^bytes=\d*-\d*$/.test(req.headers.range)) return json(416, { error: 'Invalid range' });
      const file = await api('/api/fs/get', { path: `${apiPath(course)}/${name}`, password: '' });
      const abort = new AbortController(); res.once('close', () => abort.abort());
      const headers = req.headers.range ? { Range: req.headers.range } : {};
      const upstream = await fetch(proxyVideoUrl(source, `${root}${course.path}`, name, file.sign), { headers, redirect: 'error', signal: abort.signal });
      if (![200, 206, 416].includes(upstream.status)) throw new Error('Video unavailable');
      const outgoing = { 'Cache-Control': 'no-store' };
      for (const key of ['content-type', 'content-length', 'content-range', 'accept-ranges']) if (upstream.headers.has(key)) outgoing[key] = upstream.headers.get(key);
      res.writeHead(upstream.status, outgoing);
      if (!upstream.body) return res.end();
      const stream = Readable.fromWeb(upstream.body); stream.on('error', () => res.destroy()); stream.pipe(res);
    } catch { if (!res.headersSent && !res.destroyed) json(502, { error: '课程网盘暂时无法读取，请检查本机 OpenList 的登录状态。' }); else res.destroy(); }
  });
  const bind = config.server ? '0.0.0.0' : '127.0.0.1';
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(port, bind, resolve); });
  console.log(`Course video gateway: ${bind}:${server.address().port}`); return server;
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const runtimeDir = process.env.RED_BOOK_VIDEO_RUNTIME || path.join(process.env.LOCALAPPDATA || '', 'red-book-services', 'openlist');
  startCloudVideoServer(runtimeDir).catch(() => { console.error('Cannot start course gateway. Check the local OpenList configuration.'); process.exitCode = 1; });
}
