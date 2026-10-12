import { Button, Empty, Input, Modal, Select, Tag } from 'antd';
import type { Annotation, AnnotationColor, TextAnchor } from './annotations';

export type PendingAnnotation = { quote:string; ranges:TextAnchor[] };
export function AnnotationEditor({open,quote,note,color,onNote,onColor,onSave,onCancel,onDelete}:{open:boolean;quote:string;note:string;color:AnnotationColor;onNote:(value:string)=>void;onColor:(value:AnnotationColor)=>void;onSave:()=>void;onCancel:()=>void;onDelete?:()=>void}) {
 return <Modal title="划线与笔记" open={open} onCancel={onCancel} onOk={onSave} okText="保存" cancelText="取消" destroyOnHidden><blockquote className="annotation-quote">{quote}</blockquote><label className="annotation-label">划线颜色<Select aria-label="划线颜色" value={color} onChange={onColor} options={[{value:'yellow',label:'黄色'},{value:'green',label:'绿色'},{value:'blue',label:'蓝色'}]}/></label><label className="annotation-label">我的笔记<Input.TextArea aria-label="我的笔记" value={note} onChange={e=>onNote(e.target.value)} placeholder="写下理解、辨析或需要复习的内容…" rows={5} maxLength={10000} showCount/></label>{onDelete&&<Button danger onClick={onDelete}>删除这条标注</Button>}</Modal>;
}
export function AnnotationList({items,sectionTitle,onLocate,onEdit,onDelete}:{items:Annotation[];sectionTitle:(id:string)=>string;onLocate:(a:Annotation)=>void;onEdit:(a:Annotation)=>void;onDelete:(a:Annotation)=>void}) {
 if(!items.length)return <Empty description="还没有划线或笔记。在讲义正文中选中文字即可添加。"/>;
 return <div className="annotation-list">{items.map(a=><article key={a.id}><div className="annotation-meta"><Tag>{a.note?'笔记':'划线'}</Tag><span>{sectionTitle(a.sectionId)}</span></div><blockquote className={`annotation-quote annotation-${a.color}`}>{a.quote}</blockquote>{a.note&&<p className="annotation-note">{a.note}</p>}<div className="annotation-item-actions"><Button size="small" onClick={()=>onLocate(a)}>回到原文</Button><Button size="small" onClick={()=>onEdit(a)}>编辑</Button><Button size="small" type="text" danger onClick={()=>onDelete(a)}>删除</Button></div></article>)}</div>;
}
