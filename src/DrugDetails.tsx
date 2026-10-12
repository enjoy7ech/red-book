import { Table, Tag } from 'antd';
import { LinkOutlined, ExportOutlined } from '@ant-design/icons';
import { drugProfiles } from './drugs';
import type { Source } from './data';

export default function DrugDetails({knowledgeId,sources}:{knowledgeId:string;sources:Source[]}) {
 const drug=drugProfiles.find(d=>d.knowledgeId===knowledgeId);
 if(!drug)return null;
 return <section className="drug-details"><div className="detail-status"><Tag>药材详细整理</Tag><span>公开来源核对 · 尚未与润德原书逐页对应</span></div><dl className="drug-facts"><div><dt>功效分类</dt><dd>{drug.category}</dd></div><div><dt>性味</dt><dd>{drug.nature}</dd></div><div><dt>归经</dt><dd>{drug.channels}</dd></div><div><dt>来源 / 部位</dt><dd>{drug.part}</dd></div></dl><h3>功效与证候逐项对应</h3><Table size="small" pagination={false} rowKey="action" dataSource={drug.indications} columns={[{title:'功效',dataIndex:'action',width:105},{title:'证候与辨析线索',dataIndex:'condition'}]}/><h3>配伍为什么这样用</h3><div className="pair-list">{drug.pairs.map(p=><article key={p.name}><strong>{p.name}</strong><p>{p.meaning}</p></article>)}</div><h3>炮制 / 部位差异</h3><ul>{drug.processing.map(p=><li key={p}>{p}</li>)}</ul><h3>使用注意与禁忌</h3><ul>{drug.caution.map(p=><li key={p}>{p}</li>)}</ul><h3>容易混淆的地方</h3><ul>{drug.distinctions.map(p=><li key={p}>{p}</li>)}</ul><h3>详细资料依据</h3>{drug.sourceIds.map(id=>{const s=sources.find(s=>s.id===id);return s?<a className="source-link" key={id} href={s.url} target="_blank" rel="noreferrer"><LinkOutlined/>{s.title}<ExportOutlined/></a>:null;})}<p className="drug-provenance">这些是独立整理的学习资料，不是润德红宝书原文。原书版本、页码和考试表述待接入教材后核对。</p></section>;
}
