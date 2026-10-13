import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { startCloudVideoServer } from '../scripts/cloud-video-server.mjs';

test('服务器中转使用完整课程路径并保留视频 Range，同时拒绝非课程文件与外站请求', async t => {
  const name = '第01讲.mp4';
  const root = '/quark-video/课程';
  const calls = [];
  const upstream = http.createServer(async (req, res) => {
    let body = '';
    for await (const chunk of req) body += chunk;
    const payload = body ? JSON.parse(body) : null;
    calls.push({ url: req.url, payload, headers: req.headers });
    if (req.url.startsWith('/p/')) {
      res.writeHead(206, { 'Content-Type': 'video/mp4', 'Content-Range': 'bytes 0-3/10', 'Accept-Ranges': 'bytes', 'Content-Length': '4' });
      return res.end('test');
    }
    res.setHeader('Content-Type', 'application/json');
    const data = req.url === '/api/auth/login' ? { token: 'test-token' }
      : req.url === '/api/fs/list' ? { content: [{name, size: 10, is_dir: false}], total: 1 }
      : { sign: 'test-signature' };
    res.end(JSON.stringify({ code: 200, data }));
  });
  await new Promise(resolve => upstream.listen(0, '127.0.0.1', resolve));
  const directory = await mkdtemp(path.join(os.tmpdir(), 'red-book-video-test-'));
  const previousSource = process.env.OPENLIST_URL;
  const previousUsername = process.env.OPENLIST_USERNAME;
  const previousPassword = process.env.OPENLIST_PASSWORD;
  process.env.OPENLIST_URL = `http://127.0.0.1:${upstream.address().port}`;
  process.env.OPENLIST_USERNAME = 'reader';
  process.env.OPENLIST_PASSWORD = 'test-password';
  t.after(() => { if (previousSource === undefined) delete process.env.OPENLIST_URL; else process.env.OPENLIST_URL = previousSource; });
  t.after(() => {
    if (previousUsername === undefined) delete process.env.OPENLIST_USERNAME; else process.env.OPENLIST_USERNAME = previousUsername;
    if (previousPassword === undefined) delete process.env.OPENLIST_PASSWORD; else process.env.OPENLIST_PASSWORD = previousPassword;
  });
  t.after(async () => { upstream.closeAllConnections(); await new Promise(resolve => upstream.close(resolve)); await rm(directory, {recursive:true, force:true}); });
  await writeFile(path.join(directory, 'site-video-config.json'), JSON.stringify({
    server: true, source: 'http://host.docker.internal:5244', root,
    allowedOrigins: ['https://lovehuanhuan.dongzx.site'],
    courses: [{id:'zy1', title:'中药一', path:'/基础学习', count:1}]
  }));
  const gateway = await startCloudVideoServer(directory, {port:0});
  t.after(async () => { gateway.closeAllConnections(); await new Promise(resolve => gateway.close(resolve)); });
  const url = `http://127.0.0.1:${gateway.address().port}`;
  // Send the proxy's Host header explicitly; fetch can replace Host with the URL's port.
  const fetch = (address, options) => new Promise((resolve, reject) => {
    const request = http.get(address, options, async response => {
      const chunks = [];
      for await (const chunk of response) chunks.push(chunk);
      resolve(new Response(Buffer.concat(chunks), {status:response.statusCode, headers:response.headers}));
    });
    request.on('error', reject);
  });
  const headers = {Host:'127.0.0.1:5245', Origin:'https://lovehuanhuan.dongzx.site'};
  const response = await fetch(`${url}/api/cloud-video/catalog?subject=zy1`, {headers});
  assert.equal(response.status,200);
  const catalog = await response.json();
  assert.equal(catalog.lessons[0].name,name);
  assert.deepEqual(calls.find(call=>call.url==='/api/auth/login').payload,{username:'reader',password:'test-password'});
  assert.equal(calls.find(call=>call.url==='/api/fs/list').payload.path,`${root}/基础学习`);
  const stream = await fetch(`${url}/api/cloud-video/stream?subject=zy1&id=${catalog.lessons[0].id}`, {headers:{...headers,Range:'bytes=0-3'}});
  assert.equal(stream.status,206);
  assert.equal(stream.headers.get('content-range'),'bytes 0-3/10');
  assert.equal(await stream.text(),'test');
  assert.equal(calls.find(call=>call.url==='/api/fs/get').payload.path,`${root}/基础学习/${name}`);
  assert.equal(calls.find(call=>call.url.startsWith('/p/')).headers.range,'bytes=0-3');
  assert.equal((await fetch(`${url}/api/cloud-video/catalog?subject=zy1`,{headers:{...headers,Origin:'https://other.example'}})).status,403);
  const unknown = Buffer.from('private.mp4').toString('base64url');
  assert.equal((await fetch(`${url}/api/cloud-video/stream?subject=zy1&id=${unknown}`,{headers})).status,404);
  assert.equal((await fetch(`${url}/api/cloud-video/catalog?subject=../private`,{headers})).status,400);
});
