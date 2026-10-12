// Collect only short, attributed factual excerpts from a university's public herb gallery.
// This does not obtain or reproduce a Red Book textbook.
import { mkdir, writeFile } from 'node:fs/promises';
const base='https://zyxsyjxzx.hactcm.edu.cn';
const indexUrl=base+'/zyg/zycfl/zxy/s__q.htm';
const wanted=new Set('紫苏 生姜 白芷 防风 薄荷 菊花 葛根 柴胡 石膏 知母 栀子 黄连 黄柏 金银花 连翘 板蓝根 鱼腥草 生地黄 牡丹皮 青蒿 干姜 肉桂 小茴香 川芎 延胡索 丹参 桃仁 牛膝 红花 益母草 石决明 牡蛎 钩藤 地龙 天麻 青皮 枳实 木香 香附 桔梗 川贝母 浙贝母 瓜蒌 苦杏仁 猪苓 泽泻 车前子 茵陈蒿 金钱草 独活 威灵仙 木瓜 苍术 厚朴 广藿香 砂仁 大黄 芒硝 人参 党参 山药 西洋参 黄芪 杜仲 熟地黄 麦冬 枸杞子 酸枣仁 远志 五味子 山茱萸 三七 艾叶 山楂 麦芽 莱菔子 鸡内金'.split(' '));
function plain(s){return s.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<style[\s\S]*?<\/style>/gi,'').replace(/<[^>]+>/g,' ').replace(/&nbsp;|&#160;/g,' ').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();}
async function get(url){const r=await fetch(url,{signal:AbortSignal.timeout(25000)});if(!r.ok)throw new Error(`${r.status} ${url}`);return r.text();}
const html=await get(indexUrl);
let chapter='';const links=[];
const categories=new Set('解表药 清热药 温里药 活血化瘀药 平抑肝阳药 平肝息风药 理气药 开窍药 化痰止咳平喘药 利水渗湿药 祛风湿药 化湿药 泻下药 补虚药 安神药 收涩药 止血药 消食药'.split(' '));
for(const m of html.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)){
 const name=plain(m[2]).replace(/\s/g,'');if(categories.has(name))chapter=name;
 if(wanted.has(name))links.push({name,chapter,url:new URL(m[1],indexUrl).href});
}
const evidence=[];
for(let i=0;i<links.length;i+=5){await Promise.all(links.slice(i,i+5).map(async entry=>{
 try {const text=plain(await get(entry.url)).replace(/【\s*([^】]+?)\s*】/g,(_,s)=>`【${s.replace(/\s/g,'')}】`);const start=text.indexOf('【来源】');if(start<0)throw new Error('No source section');const article=text.slice(start,text.indexOf('河南中医药大学',start));
 const section=label=>{const m=article.match(new RegExp(`【${label}】\\s*([\\s\\S]*?)(?=【|$)`));return m?.[1]?.trim()??'';};
 const source=section('来源');const actions=section('功能主治');const appearance=section('药材性状');const caution=section('附注');
 if(!source||!actions||actions.length>320)throw new Error('Missing or excessive factual section');
 evidence.push({...entry,source,actions,appearance:appearance.slice(0,130),caution:caution.slice(0,100),checkedAt:'2026-10-12'});
 }catch(e){console.error(entry.name,e.message);}
}));}
evidence.sort((a,b)=>links.findIndex(x=>x.name===a.name)-links.findIndex(x=>x.name===b.name));
await mkdir('research',{recursive:true});await writeFile('research/herb-source-evidence.json',JSON.stringify(evidence.map(({name,chapter,url,checkedAt})=>({name,chapter,url,checkedAt})),null,2));
console.log(`Collected ${evidence.length} verified public herb entries, ${new Set(evidence.map(e=>e.chapter)).size} categories.`);
