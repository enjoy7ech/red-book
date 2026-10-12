import { readFile, writeFile } from 'node:fs/promises';
const metadata=JSON.parse(await readFile('research/bilibili-video-metadata.json','utf8'));
const base=[
 ['zy1',2025,'车驰','考点串讲','中药一公开串讲'],
 ['zy2',2025,'大琦','考点串讲','中药二公开串讲'],
 ['zh',2025,'家民','考点串讲','中药综合公开串讲'],
 ['fg',2025,'郑国','考点串讲','法规公开串讲'],
 ['zy1',2022,'希赛讲师','基础讲解','中药一基础公开选集'],
 ['zy2',2022,'润德讲师','体验课程','中药二体验课'],
];
const lessons=[
 ['四气','药性理论',['k01']],['五味','药性理论',['k02']],['升降浮沉与归经','药性理论',['k03']],['有毒无毒与功效分类','药性理论',[]],
 ['基原鉴定与性状鉴别','质量标准与鉴别',[]],['显微鉴别','质量标准与鉴别',[]],['理化鉴别与其他鉴定方法','质量标准与鉴别',[]],
 ['蒸、煮、燀法（一）','中药炮制',['k05']],['蒸、煮、燀法（二）','中药炮制',['k05']],['蒸、煮、燀法（三）','中药炮制',['k05']],
 ['黄酮类化合物（一）','中药化学成分',[]],['黄酮类化合物（二）','中药化学成分',[]],['黄酮类化合物（三）','中药化学成分',[]],
 ['叶类中药','常用中药鉴别',[]],['藻、菌、地衣类中药','常用中药鉴别',[]],['树脂类中药','常用中药鉴别',[]],['其他类中药','常用中药鉴别',[]],
 ['液体制剂：含义与附加剂','中药制剂与剂型',[]],['液体制剂：表面活性剂','中药制剂与剂型',[]],['溶液剂','中药制剂与剂型',[]],['乳剂','中药制剂与剂型',[]],['混悬剂','中药制剂与剂型',[]],
 ['中药与方剂复习','综合复习',[]],['中药材生产与品质复习','综合复习',[]],['质量标准与鉴定复习','综合复习',[]],['中药药理与毒理复习','综合复习',[]],['制剂与剂型复习（一）','综合复习',[]],['制剂与剂型复习（二）','综合复习',[]],
];
const courses=metadata.map((m,i)=>{const [subject,year,teacher,kind,shortTitle]=base[i];return {id:m.bvid,bvid:m.bvid,title:m.title,shortTitle,subject,year,teacher,kind,publisher:m.owner,publisherUrl:`https://space.bilibili.com/${m.ownerMid}`,publishedAt:m.publishedAt,checkedAt:m.checkedAt,note:year===2025?(subject==='fg'?'2025 年公开串讲；2026 法规变动请对照当年指南，视频中的押题表述不代表考试承诺。':'2025 年公开串讲，不是红宝书完整课程；按视频原有选集观看。'):'旧版基础参考，课程标注 2022 年；目录和考点范围不等同于 2026 大纲。',lessons:m.pages.map((p,n)=>({page:p.page,title:i===4?lessons[n][0]:i===5?`体验课 ${['A','B','C'][n]}`:shortTitle,chapter:i===4?lessons[n][1]:i===5?'综合体验':'全科考点串讲',duration:p.duration,knowledgeIds:i===4?lessons[n][2]:[]}))};});
await writeFile('src/videoData.ts',`// Metadata verified using Bilibili's public video API on 2026-10-12.\nimport type { SubjectId } from './data';\nexport interface VideoLesson {page:number;title:string;chapter:string;duration:number;knowledgeIds:string[]}\nexport interface VideoCourse {id:string;bvid:string;title:string;shortTitle:string;subject:SubjectId;year:number;teacher:string;kind:string;publisher:string;publisherUrl:string;publishedAt:string;checkedAt:string;note:string;lessons:VideoLesson[]}\nexport const videoCourses:VideoCourse[]=${JSON.stringify(courses,null,2)};\nexport function videoUrl(bvid:string,page=1){return 'https://www.bilibili.com/video/'+bvid+'/?p='+page;}\nexport function playerUrl(bvid:string,page=1){return 'https://player.bilibili.com/player.html?bvid='+bvid+'&page='+page+'&p='+page+'&autoplay=0&danmaku=0';}\nexport function durationText(seconds:number){const minutes=Math.floor(seconds/60);return minutes>=60?Math.floor(minutes/60)+'小时'+minutes%60+'分':minutes+'分'+String(seconds%60).padStart(2,'0')+'秒';}\n`);
console.log(`${courses.length} courses, ${courses.reduce((n,c)=>n+c.lessons.length,0)} lessons.`);
