import { useState } from 'react';
import { Button, Input, Modal, message } from 'antd';
import { CopyOutlined, ExportOutlined, WechatOutlined } from '@ant-design/icons';
import './mobile-exam.css';

export const EXAM_MINIPROGRAM = '#小程序://环球网校/ZJjcrez1cPpyAME';

export default function MobileExamLink({ href, label }: { href: string; label: string }) {
 const [open,setOpen]=useState(false);
 const [copied,setCopied]=useState(false);
 const [toast,holder]=message.useMessage();
 async function copy() {
  try { await navigator.clipboard.writeText(EXAM_MINIPROGRAM);setCopied(true);toast.success('已复制，请在微信中粘贴并打开'); }
  catch { toast.info('请长按下方口令，选择复制，再到微信粘贴打开。'); }
 }
 return <>{holder}<a className="exam-desktop-link" href={href} target="_blank" rel="noreferrer">{label} <ExportOutlined/></a><button type="button" className="exam-mobile-link" onClick={()=>{setCopied(false);setOpen(true);}}><WechatOutlined/> 环球网校小程序</button>
  <Modal title="在微信打开环球网校" open={open} onCancel={()=>setOpen(false)} footer={null} zIndex={1400} width={460}>
   <div className="exam-miniprogram"><WechatOutlined/><p>复制小程序口令，在微信聊天中粘贴并点击，即可进入你指定的考试入口。</p><Input.TextArea aria-label="环球网校小程序口令" readOnly value={EXAM_MINIPROGRAM} autoSize={{minRows:2,maxRows:3}} onFocus={e=>e.target.select()}/><Button type="primary" block icon={<CopyOutlined/>} onClick={()=>void copy()}>{copied?'已复制 · 再复制一次':'复制小程序口令'}</Button><small>这是微信分享口令，普通网页无法直接将它作为网址跳转。</small></div>
  </Modal></>;
}
