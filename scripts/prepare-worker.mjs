import { mkdir, copyFile, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
// Wrangler copies local development secrets into its output. Never package them.
const output=path.resolve('dist');
async function stripLocalSecrets(directory){for(const entry of await readdir(directory,{withFileTypes:true})){const file=path.join(directory,entry.name);if(entry.isSymbolicLink())throw new Error('Unexpected build symlink');if(entry.isDirectory())await stripLocalSecrets(file);else if(entry.name.startsWith('.dev.vars')||entry.name.startsWith('.env'))await rm(file);}}
await stripLocalSecrets(output);
await mkdir('dist/.openai',{recursive:true});
await copyFile('.openai/hosting.json','dist/.openai/hosting.json');
