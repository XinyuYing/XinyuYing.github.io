import test from 'node:test';
import assert from 'node:assert/strict';
import {readRoute,routeTitle} from '../src/site-routes.ts';
test('scene URLs select independent pages with or without a trailing slash',()=>{
 for(const scene of ['arrival','training','dance','kitchen','dining','terrace'] as const){
  for(const suffix of ['','/'])assert.deepEqual(readRoute({pathname:'/scenes/'+scene+suffix,search:'',hash:''}),{kind:'scene',scene});
 }
});
test('pricing links preserve a valid plan and reject unknown plan IDs',()=>{
 assert.deepEqual(readRoute({pathname:'/pricing/',search:'?plan=space',hash:''}),{kind:'pricing',selected:'space'});
 assert.deepEqual(readRoute({pathname:'/pricing/',search:'?plan=invalid',hash:''}),{kind:'pricing',selected:null});
});
test('existing scene links remain usable and homepage anchors stay on the homepage',()=>{
 assert.deepEqual(readRoute({pathname:'/',search:'',hash:'#party'}),{kind:'scene',scene:'kitchen'});
 assert.deepEqual(readRoute({pathname:'/',search:'',hash:'#dance'}),{kind:'scene',scene:'dance'});
 assert.deepEqual(readRoute({pathname:'/',search:'',hash:'#film'}),{kind:'home'});
 assert.deepEqual(readRoute({pathname:'/',search:'',hash:'#configure'}),{kind:'pricing',selected:null});
 assert.match(routeTitle({kind:'scene',scene:'dining'}),/^人数转换/);
});
