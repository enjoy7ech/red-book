import test from 'node:test';
import assert from 'node:assert/strict';
import { clampVideoPosition } from '../src/floatingVideoPosition.ts';

test('拖动到屏幕外时，小窗和操作按钮保持在桌面可见范围', () => {
  assert.deepEqual(clampVideoPosition({x:2000,y:900},{width:1280,height:800},{width:384,height:300}), {x:884,y:488});
  assert.deepEqual(clampVideoPosition({x:-100,y:-100},{width:1280,height:800},{width:384,height:300}), {x:12,y:12});
});
test('手机旋转及展开小窗后，重新限制位置以保留完整播放器', () => {
  assert.deepEqual(clampVideoPosition({x:884,y:488},{width:390,height:844},{width:320,height:510}), {x:58,y:322});
  assert.deepEqual(clampVideoPosition({x:58,y:322},{width:844,height:390},{width:320,height:366}), {x:58,y:12});
});
test('可用空间小于小窗时位置不为负数', () => {
  assert.deepEqual(clampVideoPosition({x:100,y:100},{width:200,height:150},{width:320,height:300}), {x:12,y:12});
});
