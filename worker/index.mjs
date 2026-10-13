import { handleAI } from './ai.mjs';
export default {
 async fetch(request,env){
  const response=await handleAI(request,env);if(response)return response;
  return env.ASSETS.fetch(request);
 }
};
