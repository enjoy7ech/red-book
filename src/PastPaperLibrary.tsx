import {useState} from 'react';
import {Button,Empty,Select,Tag} from 'antd';
import {EditOutlined,ExportOutlined,FileTextOutlined} from '@ant-design/icons';
import {subjects} from './data';
import type {Question} from './data';
import type {Attempt} from './domain';
import {pastPapers} from './pastData';
import './past.css';

export default function PastPaperLibrary({questions,attempts,onPractice}:{questions:Question[];attempts:Attempt[];onPractice:(questions:Question[])=>void}){
 const [year,setYear]=useState('all');
 const [subject,setSubject]=useState('all');
 const filtered=pastPapers.filter(p=>(year==='all'||String(p.year)===year)&&(subject==='all'||subject===p.subject));
 const latest=new Map(attempts.map(a=>[a.questionId,a]));
 const selected=questions.filter(q=>filtered.some(p=>p.id===q.paperId));
 return <><div className="page-heading"><div><div className="overline">从往年考点，看清复习重点</div><h1>历年试题 · 2023—2025</h1><p>{pastPapers.length} 份四科试卷资料入口 · {questions.filter(q=>q.paperId&&pastPapers.some(p=>p.id===q.paperId)).length} 道站内精选考点练习</p></div><Button type="primary" icon={<EditOutlined/>} disabled={!selected.length} onClick={()=>onPractice(selected)}>练当前筛选 · {selected.length} 题</Button></div><section className="past-intro"><FileTextOutlined/><div><h3>原站试卷资料 + 站内历年考点选练</h3><p>试题来源为机构整理或考生回忆资料。本站精选部分考点，改写题干、选项或题型，保留年份与原题定位；不是原卷全文，也不是官方标准答案。原站试卷可通过各卡片打开。</p><p>历史法规、药典和大纲内容按当年背景复盘，备考 2026 时须核对变动。</p></div></section><div className="past-filters"><Select aria-label="筛选试题年份" value={year} onChange={setYear} options={[{value:'all',label:'全部年份'},...[2025,2024,2023].map(y=>({value:String(y),label:`${y} 年`}))]}/><div>{[{id:'all',short:'全部科目'},...subjects].map(s=><button key={s.id} className={subject===s.id?'active':''} onClick={()=>setSubject(s.id)}>{s.short}</button>)}</div></div><div className="past-paper-grid">{filtered.map(p=>{const qs=questions.filter(q=>q.paperId===p.id);const answered=qs.filter(q=>latest.has(q.id)).length;const correct=qs.filter(q=>latest.get(q.id)?.correct).length;const sub=subjects.find(s=>s.id===p.subject)!;return <article className="past-paper-card" key={p.id}><div className="past-paper-top" style={{borderLeftColor:sub.color}}><span>{p.year}</span><div><h3>{sub.title}</h3><small>机构整理 / 回忆资料</small></div></div><div className="past-paper-body"><Tag>{p.publisher}</Tag><Tag>本站 {qs.length} 道考点改写题</Tag><p className="past-paper-title">原站资料：{p.title.replace(/\.pdf$/,'')}</p><p>已练 {answered}/{qs.length} · 最近作答正确 {correct}/{qs.length}</p><div><Button type="primary" icon={<EditOutlined/>} disabled={!qs.length} onClick={()=>onPractice(qs)}>练本站精选 · {qs.length} 题</Button><a href={p.url} target="_blank" rel="noreferrer">原站试卷资料 <ExportOutlined/></a></div><small>核对日期 {p.checkedAt} · 全卷阅读和下载按原站访问规则进行</small></div></article>;})}</div>{!filtered.length&&<Empty description="当前年份与科目没有资料"/>}</>;
}
