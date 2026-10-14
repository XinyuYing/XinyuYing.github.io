import {mkdir,readFile,writeFile} from 'node:fs/promises';
import path from 'node:path';
// Publish real static entry points so shared URLs and refreshes work without a server rewrite.
const routes=['pricing','scenes/arrival','scenes/training','scenes/dance','scenes/kitchen','scenes/dining','scenes/terrace'];
const html=await readFile('dist/index.html','utf8');
for(const route of routes){
 const directory=path.join('dist',route);
 await mkdir(directory,{recursive:true});
 await writeFile(path.join(directory,'index.html'),html);
}
console.log('Exported '+routes.length+' independent page entry points.');
