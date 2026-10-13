import test from 'node:test';
import assert from 'node:assert/strict';
import { shouldFollowScroll } from '../src/useAIChatScroll.ts';

test('AI 阅读向上滚动立即暂停跟随，只有回到底部才能继续',()=>{
 assert.equal(shouldFollowScroll(900,900,1200,300),true);
 assert.equal(shouldFollowScroll(900,880,1200,300),false,'即使离底部很近，向上阅读也不抢回位置');
 assert.equal(shouldFollowScroll(880,880,1800,300),false,'新内容增长时，旧阅读位置不会触发跟随');
 assert.equal(shouldFollowScroll(880,1000,1800,300),false,'向下阅读到中间仍保持暂停');
 assert.equal(shouldFollowScroll(1000,1500,1800,300),true,'回到底部恢复跟随');
});
