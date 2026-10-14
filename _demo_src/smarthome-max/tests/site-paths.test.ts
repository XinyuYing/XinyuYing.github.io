import test from 'node:test';
import assert from 'node:assert/strict';
import {sitePath,siteLocalPath} from '../src/site-paths.ts';
import {readRoute} from '../src/site-routes.ts';

const base='/cases/FutureTech/demo/';
test('demo links and media stay under the case URL, including query strings',()=>{
 assert.equal(sitePath('/',base),base);
 assert.equal(sitePath('/pricing/?plan=space',base),base+'pricing/?plan=space');
 assert.equal(sitePath('/media/smarthome-max-full.mp4?v=smile-brand',base),base+'media/smarthome-max-full.mp4?v=smile-brand');
 assert.equal(sitePath(base+'scenes/arrival/',base),base+'scenes/arrival/');
});
test('mount prefix removal respects directory boundaries and the bare demo URL',()=>{
 assert.equal(siteLocalPath(base.slice(0,-1),base),'/');
 assert.equal(siteLocalPath(base,base),'/');
 assert.equal(siteLocalPath(base+'pricing/',base),'/pricing/');
 assert.equal(siteLocalPath('/cases/FutureTech/demo-old/',base),'/cases/FutureTech/demo-old/');
});
test('all six independently refreshed scene URLs resolve at the case mount',()=>{
 for(const scene of ['arrival','training','dance','kitchen','dining','terrace'] as const){
  assert.deepEqual(readRoute({pathname:base+'scenes/'+scene+'/',hash:'',search:''},base),{kind:'scene',scene});
 }
});
test('pricing selection and legacy scene hashes work at the case mount',()=>{
 assert.deepEqual(readRoute({pathname:base+'pricing/',search:'?plan=complete',hash:''},base),{kind:'pricing',selected:'complete'});
 assert.deepEqual(readRoute({pathname:base,search:'',hash:'#dance'},base),{kind:'scene',scene:'dance'});
 assert.deepEqual(readRoute({pathname:base,search:'',hash:'#film'},base),{kind:'home'});
});
