// Rebuild the case demo with: node tools/build-futuretech-demo.mjs
// Source stays in _demo_src; only cases/FutureTech/demo is served by Jekyll.
import {cpSync,existsSync,mkdirSync,mkdtempSync,readdirSync,rmSync,readFileSync} from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';

const repo=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const source=path.join(repo,'_demo_src','smarthome-max');
const output=path.join(repo,'cases','FutureTech','demo');
const work=mkdtempSync(path.join(os.tmpdir(),'futuretech-yrtan-'));
console.log('Build workspace: '+work);
cpSync(source,work,{recursive:true,filter:p=>!['node_modules','dist','.git'].includes(path.basename(p))});
for(const args of [['ci','--no-audit','--no-fund'],['run','test'],['run','build']]){
 const result=spawnSync('npm',args,{cwd:work,stdio:'inherit',shell:process.platform==='win32'});
 if(result.error||result.status!==0){
  console.error('Build failed; source and diagnostic workspace retained: '+work);
  process.exit(result.status||1);
 }
}
const dist=path.join(work,'dist');
for(const route of ['','pricing','scenes/arrival','scenes/training','scenes/dance','scenes/kitchen','scenes/dining','scenes/terrace']){
 const html=readFileSync(path.join(dist,route,'index.html'),'utf8');
 if(!html.includes('/cases/FutureTech/demo/assets/'))throw new Error('Missing case base path in '+route);
}
mkdirSync(path.dirname(output),{recursive:true});
if(existsSync(output))rmSync(output,{recursive:true});
cpSync(dist,output,{recursive:true});
rmSync(work,{recursive:true,force:true});
console.log('Published files prepared: '+output);
console.log('Local build complete; commit and deploy through the existing website workflow.');
