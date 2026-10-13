import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export function shouldFollowScroll(previousTop:number,top:number,height:number,viewport:number) {
 // Any upward movement is a reading gesture, even within the bottom threshold.
 return top >= previousTop - 1 && height - viewport - top <= 48;
}

export default function useAIChatScroll(open:boolean,content:unknown,busy:boolean) {
 const container=useRef<HTMLDivElement>(null);
 const following=useRef(true);
 const readingTop=useRef(0);
 const writing=useRef(false);
 const releaseFrame=useRef(0);
 const [away,setAway]=useState(false);
 function setTop(node:HTMLDivElement,target:number) {
  const top=Math.max(0,Math.min(target,node.scrollHeight-node.clientHeight));
  if(Math.abs(node.scrollTop-top)<=1){readingTop.current=node.scrollTop;return;}
  writing.current=true;cancelAnimationFrame(releaseFrame.current);
  node.scrollTop=top;readingTop.current=node.scrollTop;
  releaseFrame.current=requestAnimationFrame(()=>{releaseFrame.current=requestAnimationFrame(()=>{writing.current=false;});});
 }
 function position() {
  const node=container.current;if(!node||!open)return;
  setTop(node,following.current?node.scrollHeight:readingTop.current);
 }
 useEffect(()=>()=>cancelAnimationFrame(releaseFrame.current),[]);
 useLayoutEffect(position,[open,content,busy]);
 useLayoutEffect(()=>{
  const node=container.current;if(!node||!open)return;
  const observer=new ResizeObserver(position);observer.observe(node);
  return ()=>observer.disconnect();
 },[open]);
 function onScroll() {
  const node=container.current;if(!node||!open||!node.clientHeight)return;
  if(writing.current){readingTop.current=node.scrollTop;return;}
  following.current=shouldFollowScroll(readingTop.current,node.scrollTop,node.scrollHeight,node.clientHeight);
  readingTop.current=node.scrollTop;setAway(!following.current);
 }
 function pause() {
  const node=container.current;if(!node||node.scrollHeight<=node.clientHeight)return;
  writing.current=false;cancelAnimationFrame(releaseFrame.current);
  following.current=false;readingTop.current=node.scrollTop;setAway(true);
 }
 function jumpToLatest() {
  following.current=true;setAway(false);
  const node=container.current;if(node)setTop(node,node.scrollHeight);
 }
 return {container,away,onScroll,pause,jumpToLatest};
}
