import test from 'node:test';
import assert from 'node:assert/strict';
import { videoNameFromId, proxyVideoUrl, courseForSubject } from '../scripts/cloud-video-server.mjs';
import { cloudVideoProgressKey } from '../src/cloudVideoProgress.ts';
test('网盘视频入口拒绝越过课程目录及非视频文件', () => {
  for (const name of ['../private.mp4', 'folder/private.mp4', '..\\private.mp4', 'credentials.json', 'bad\u0000.mp4']) assert.throws(() => videoNameFromId(Buffer.from(name).toString('base64url')));
  assert.throws(() => videoNameFromId('%%%'));
  const name = '[0001]前言 第01讲前言.mp4'; assert.equal(videoNameFromId(Buffer.from(name).toString('base64url')), name);
});
test('中转链接编码中文和查询字符，文件名无法注入查询参数', () => {
  const url = new URL(proxyVideoUrl('http://127.0.0.1:5244', '/quark-video/课程', '前言?#.mp4', 'temporary:signature'));
  assert.equal(decodeURIComponent(url.pathname), '/p/quark-video/课程/前言?#.mp4'); assert.equal(url.searchParams.get('sign'), 'temporary:signature'); assert.equal(url.searchParams.size, 1); assert.equal(url.hash, '');
});
test('四科使用各自目录，不能通过科目参数访问任意目录', () => {
  const config = { courses: [{ id: 'zy1', path: '/中药一/基础学习' }, { id: 'zy2', path: '/中药二/基础学习' }] };
  assert.equal(courseForSubject(config, 'zy2').path, '/中药二/基础学习');
  assert.throws(() => courseForSubject(config, '../private'));
  assert.throws(() => courseForSubject({ courses: [{ id: 'fg', path: '/../private' }] }, 'fg'));
});
test('同名视频的四科进度互不覆盖，原中药一进度继续可用', () => {
  const id = Buffer.from('[0001]前言 第01讲前言.mp4').toString('base64url');
  assert.equal(cloudVideoProgressKey('zy1', id), id);
  assert.equal(new Set(['zy1', 'zy2', 'zh', 'fg'].map(s => cloudVideoProgressKey(s, id))).size, 4);
});
