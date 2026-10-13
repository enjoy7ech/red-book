import test from 'node:test';
import assert from 'node:assert/strict';
import { pages, parseRoute, routeURL } from '../src/routing.ts';

test('每个主页面都有可刷新和分享的独立地址，未知路由回到教材',()=>{
 for(const page of pages)assert.equal(parseRoute(routeURL(page)).page,page);
 assert.equal(parseRoute('#/missing').page,'textbooks');
 assert.equal(parseRoute('').page,'textbooks');
 const route=parseRoute(routeURL('textbooks',{subject:'zy1',chapter:'zy1-03',section:'第01讲'}));
 assert.deepEqual(route,{page:'textbooks',subject:'zy1',chapter:'zy1-03',section:'第01讲'});
});
