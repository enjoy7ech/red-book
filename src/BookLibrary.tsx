import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Button, Input, Modal, Select, Spin, Tag, message } from 'antd';
import { BookOutlined, UploadOutlined, LeftOutlined, ExportOutlined } from '@ant-design/icons';
import { subjects } from './data';
import type { SubjectId } from './data';
import { getBooks, saveBook } from './bookStorage';
import type { BookRecord } from './bookStorage';
const PdfReader=lazy(()=>import('./PdfReader'));

export default function BookLibrary(){
 const [books,setBooks]=useState<BookRecord[]>([]);
 const [active,setActive]=useState<SubjectId|null>(null);
 const [uploadSlot,setUploadSlot]=useState<SubjectId>('zy2');
 const [version,setVersion]=useState('2026');
 const [title,setTitle]=useState('润德红宝书 · 中药学专业知识（二）');
 const [uploadOpen,setUploadOpen]=useState(false);
 const [pendingFile,setPendingFile]=useState<File|null>(null);
 const [busy,setBusy]=useState(false);
 const [storageError,setStorageError]=useState('');
 const [toast,holder]=message.useMessage();
 const input=useRef<HTMLInputElement>(null);
 useEffect(()=>{getBooks().then(setBooks).catch(e=>setStorageError(e.message));},[]);
 const activeBook=books.find(b=>b.id===active);
 function chooseFile(id:SubjectId){setUploadSlot(id);setTitle(`润德红宝书 · ${subjects.find(s=>s.id===id)!.title}`);input.current?.click();}
 async function confirmUpload(){if(!pendingFile||!title.trim()||!version.trim())return;setBusy(true);try{const header=new TextDecoder().decode(await pendingFile.slice(0,1024).arrayBuffer());if(!header.includes('%PDF-'))throw new Error('文件内容不是有效 PDF，请检查文件格式。');const book:BookRecord={id:uploadSlot,title:title.trim(),version:version.trim(),fileName:pendingFile.name,file:pendingFile,addedAt:new Date().toISOString(),page:1,bookmarks:[]};await saveBook(book);setBooks(list=>[...list.filter(b=>b.id!==uploadSlot),book]);setActive(uploadSlot);setUploadOpen(false);setPendingFile(null);toast.success('原书已保存到本机浏览器，可以开始阅读。');}catch(e){toast.error(e instanceof Error?e.message:'原书保存失败');}finally{setBusy(false);}}
 async function updateBook(record:BookRecord){try{await saveBook(record);setBooks(list=>list.map(b=>b.id===record.id?record:b));}catch(e){toast.error(e instanceof Error?e.message:'阅读位置保存失败');}}
 return <>{holder}<div className="page-heading"><div><div className="overline">原书先核对，考点再细学</div><h1>{activeBook?activeBook.title:'原书阅读 · 润德红宝书'}</h1><p>{activeBook?`${activeBook.version} · ${activeBook.fileName}`:'2026 年备考 · 四科原书资料位 · 当前未取得完整原书'}</p></div>{activeBook&&<Button icon={<LeftOutlined/>} onClick={()=>setActive(null)}>返回书库</Button>}</div>{storageError&&<div className="book-storage-error">{storageError}</div>}{activeBook?<Suspense fallback={<div className="empty-panel"><Spin/></div>}><PdfReader record={activeBook} onSave={updateBook}/></Suspense>:<><section className="original-status"><BookOutlined/><div><h3>本站尚未内置润德红宝书全文</h3><p>已查询润德公开官网，尚未找到可接入的 2026 完整电子教材。知识库中的内容是公开资料整理，没有标作红宝书原文或伪造页码。</p><a href="https://www.rundejy.com/learning-products" target="_blank" rel="noreferrer">润德学习产品官方入口 <ExportOutlined/></a></div></section><div className="original-book-grid">{subjects.map(s=>{const b=books.find(b=>b.id===s.id);return <article className="original-book-card" key={s.id}><div className="book-slot-cover"><span>{b?'个人 PDF':'润德红宝书'}</span><strong>{s.short}</strong><small>{b?.version||'2026 备考资料位'}</small><div>原书阅读</div></div><div className="book-slot-info"><Tag color={b?'green':'default'}>{b?'已接入个人 PDF':'原书未接入'}</Tag><h3>{b?.title||s.title}</h3><p>{b?`${b.fileName} · 上次读到第 ${b.page} 页`:'待添加可阅读的原书 PDF；这里不会展示模拟书页。'}</p>{b&&<Button type="primary" onClick={()=>setActive(s.id)}>继续阅读 <BookOutlined/></Button>}<Button icon={<UploadOutlined/>} onClick={()=>chooseFile(s.id)}>{b?'替换 PDF':'添加我的 PDF'}</Button></div></article>;})}</div><div className="book-library-help"><h3>原书、笔记与考题怎么对应</h3><p>原书接入后，可按页阅读、跳转目录、缩放、保存页码与考点书签。知识库中的详细药材表仍保留独立来源，待拿到书后逐项对照。</p><p>个人 PDF 保存在此浏览器，不上传到网站服务器。JSON 进度备份不含 PDF，请保留原文件；跨设备需各自添加文件。扫描版可以阅读，暂不自动 OCR。</p></div></>}
 <input hidden type="file" accept="application/pdf,.pdf" ref={input} onChange={e=>{const f=e.target.files?.[0];if(f){if(f.size>150*1024*1024){toast.error('请选择 150MB 以内的 PDF');}else{setPendingFile(f);setUploadOpen(true);}}e.target.value='';}}/>
 <Modal title={books.some(b=>b.id===uploadSlot)?'替换该科目原书 PDF':'添加原书 PDF'} open={uploadOpen} onCancel={()=>{setUploadOpen(false);setPendingFile(null);}} onOk={confirmUpload} okText="保存并阅读" cancelText="取消" confirmLoading={busy}><div className="settings-fields"><label>科目<Select value={uploadSlot} onChange={v=>{setUploadSlot(v);setTitle(`润德红宝书 · ${subjects.find(s=>s.id===v)!.title}`);}} options={subjects.map(s=>({value:s.id,label:s.title}))}/></label><label>书名<Input value={title} onChange={e=>setTitle(e.target.value)}/></label><label>封面标注的版本 / 年份<Input value={version} onChange={e=>setVersion(e.target.value)}/></label><p>文件：{pendingFile?.name}</p>{books.some(b=>b.id===uploadSlot)&&<p>此科目已有文件。替换会重置该文件的阅读位置和书签，请保留原文件。</p>}</div></Modal></>;
}
