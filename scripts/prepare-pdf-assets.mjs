import { cpSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
for(const name of ['cmaps','standard_fonts']){
 const target=resolve('public/pdf-assets',name);
 mkdirSync(target,{recursive:true});
 cpSync(resolve('node_modules/pdfjs-dist',name),target,{recursive:true});
}
