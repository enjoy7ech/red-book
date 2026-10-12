// Selected historical exam topics, independently adapted and attributed.
import type {Knowledge,Question,Source,SubjectId} from './data';
export interface PastPaper {id:string;subject:SubjectId;year:number;title:string;url:string;publisher:string;checkedAt:string;catalogUrl:string;nature:string;selectedCount:number}
export const pastPapers:PastPaper[]=[
  {
    "id": "past-2025-zy1",
    "subject": "zy1",
    "year": 2025,
    "url": "https://www.hqwx.com/zyys-kaoshi/ziliaolm/1268818.html",
    "title": "2025年执业药师【中药一】考试真题及答案（完整版）.pdf",
    "publisher": "环球网校",
    "checkedAt": "2026-10-12",
    "catalogUrl": "https://www.hqwx.com/zyys-kaoshi/ziliaolm/5602/",
    "nature": "机构整理 / 回忆资料",
    "selectedCount": 3
  },
  {
    "id": "past-2025-zy2",
    "subject": "zy2",
    "year": 2025,
    "url": "https://www.hqwx.com/zyys-kaoshi/ziliaolm/1268827.html",
    "title": "2025年执业药师【中药二】考试真题及答案（完整版）.pdf",
    "publisher": "环球网校",
    "checkedAt": "2026-10-12",
    "catalogUrl": "https://www.hqwx.com/zyys-kaoshi/ziliaolm/5603/",
    "nature": "机构整理 / 回忆资料",
    "selectedCount": 3
  },
  {
    "id": "past-2025-zh",
    "subject": "zh",
    "year": 2025,
    "url": "https://www.hqwx.com/zyys-kaoshi/ziliaolm/1268974.html",
    "title": "2025年执业药师【中药综合】考试真题及答案（完整版）.pdf",
    "publisher": "环球网校",
    "checkedAt": "2026-10-12",
    "catalogUrl": "https://www.hqwx.com/zyys-kaoshi/ziliaolm/5604/",
    "nature": "机构整理 / 回忆资料",
    "selectedCount": 3
  },
  {
    "id": "past-2025-fg",
    "subject": "fg",
    "year": 2025,
    "url": "https://www.hqwx.com/zyys-kaoshi/ziliaolm/1268979.html",
    "title": "2025年执业药师【中药法规】考试真题及答案(完整版).pdf",
    "publisher": "环球网校",
    "checkedAt": "2026-10-12",
    "catalogUrl": "https://www.hqwx.com/zyys-kaoshi/ziliaolm/5601/",
    "nature": "机构整理 / 回忆资料",
    "selectedCount": 3
  },
  {
    "id": "past-2024-zy1",
    "subject": "zy1",
    "year": 2024,
    "url": "https://www.hqwx.com/zyys-kaoshi/ziliaolm/1053045.html",
    "title": "2024年执业药师真题及答案《中药学专业知识一》（完整版）.pdf",
    "publisher": "环球网校",
    "checkedAt": "2026-10-12",
    "catalogUrl": "https://www.hqwx.com/zyys-kaoshi/ziliaolm/5602/",
    "nature": "机构整理 / 回忆资料",
    "selectedCount": 3
  },
  {
    "id": "past-2024-zy2",
    "subject": "zy2",
    "year": 2024,
    "url": "https://www.hqwx.com/zyys-kaoshi/ziliaolm/1053068.html",
    "title": "2024年执业药师真题及答案《中药学专业知识二》（完整版）.pdf",
    "publisher": "环球网校",
    "checkedAt": "2026-10-12",
    "catalogUrl": "https://www.hqwx.com/zyys-kaoshi/ziliaolm/5603/",
    "nature": "机构整理 / 回忆资料",
    "selectedCount": 3
  },
  {
    "id": "past-2024-zh",
    "subject": "zh",
    "year": 2024,
    "url": "https://www.hqwx.com/zyys-kaoshi/ziliaolm/1052992.html",
    "title": "2024年执业药师真题答案《中药学综合知识与技能》（完整版）.pdf",
    "publisher": "环球网校",
    "checkedAt": "2026-10-12",
    "catalogUrl": "https://www.hqwx.com/zyys-kaoshi/ziliaolm/5604/",
    "nature": "机构整理 / 回忆资料",
    "selectedCount": 2
  },
  {
    "id": "past-2024-fg",
    "subject": "fg",
    "year": 2024,
    "url": "https://www.hqwx.com/zyys-kaoshi/ziliaolm/1052884.html",
    "title": "2024年执业药师真题及答案《药事管理与法规》（完整版）.pdf",
    "publisher": "环球网校",
    "checkedAt": "2026-10-12",
    "catalogUrl": "https://www.hqwx.com/zyys-kaoshi/ziliaolm/5601/",
    "nature": "机构整理 / 回忆资料",
    "selectedCount": 3
  },
  {
    "id": "past-2023-zy1",
    "subject": "zy1",
    "year": 2023,
    "title": "2023年中药一试题及答案（网友回忆版）",
    "url": "https://m.hqwx.com/zyys-kaoshi/ziliaolm/924418.html",
    "publisher": "环球网校",
    "checkedAt": "2026-10-12",
    "catalogUrl": "https://m.hqwx.com/zyys-kaoshi/ziliaolm/5602/17780/",
    "nature": "机构整理 / 回忆资料",
    "selectedCount": 3
  },
  {
    "id": "past-2023-zy2",
    "subject": "zy2",
    "year": 2023,
    "url": "https://www.hqwx.com/zyys-kaoshi/ziliaolm/924471.html",
    "title": "2023年执业药师《中药学专业知识二》真题及答案（120题完整版）.pdf",
    "publisher": "环球网校",
    "checkedAt": "2026-10-12",
    "catalogUrl": "https://www.hqwx.com/zyys-kaoshi/ziliaolm/5603/",
    "nature": "机构整理 / 回忆资料",
    "selectedCount": 3
  },
  {
    "id": "past-2023-zh",
    "subject": "zh",
    "year": 2023,
    "url": "https://www.hqwx.com/zyys-kaoshi/ziliaolm/924495.html",
    "title": "2023年执业药师《中药学综合知识与技能》真题及答案（120题完整版）.pdf",
    "publisher": "环球网校",
    "checkedAt": "2026-10-12",
    "catalogUrl": "https://www.hqwx.com/zyys-kaoshi/ziliaolm/5604/",
    "nature": "机构整理 / 回忆资料",
    "selectedCount": 2
  },
  {
    "id": "past-2023-fg",
    "subject": "fg",
    "year": 2023,
    "url": "https://www.hqwx.com/zyys-kaoshi/ziliaolm/924502.html",
    "title": "2023年执业药师《药事管理与法规》真题及答案（120题完整版）.pdf",
    "publisher": "环球网校",
    "checkedAt": "2026-10-12",
    "catalogUrl": "https://www.hqwx.com/zyys-kaoshi/ziliaolm/5601/",
    "nature": "机构整理 / 回忆资料",
    "selectedCount": 3
  }
];
export const pastSources:Source[]=[
  {
    "id": "source-past-2025-zy1",
    "title": "2025 中药一 · 机构整理试题",
    "publisher": "环球网校",
    "url": "https://www.hqwx.com/zyys-kaoshi/news/17607582744821.html",
    "kind": "历年试题来源",
    "note": "公开机构整理或考生回忆资料，非考试部门公布的标准试卷。本站精选考点并改写题干、选项或题型，保留原题定位；答案为来源参考答案，解析为独立简述。"
  },
  {
    "id": "source-past-2025-zy2",
    "title": "2025 中药二 · 机构整理试题",
    "publisher": "环球网校",
    "url": "https://m.hqwx.com/zyys-kaoshi/news/17610935076528.html",
    "kind": "历年试题来源",
    "note": "公开机构整理或考生回忆资料，非考试部门公布的标准试卷。本站精选考点并改写题干、选项或题型，保留原题定位；答案为来源参考答案，解析为独立简述。"
  },
  {
    "id": "source-past-2025-zh",
    "title": "2025 中药综合 · 机构整理试题",
    "publisher": "环球网校",
    "url": "https://m.hqwx.com/zyys-kaoshi/news/17608416671793.html",
    "kind": "历年试题来源",
    "note": "公开机构整理或考生回忆资料，非考试部门公布的标准试卷。本站精选考点并改写题干、选项或题型，保留原题定位；答案为来源参考答案，解析为独立简述。"
  },
  {
    "id": "source-past-2025-fg",
    "title": "2025 药事法规 · 机构整理试题",
    "publisher": "易小考",
    "url": "https://www.qingkaoguo.cn/article_ziliaoxiazai_1035/4406.html",
    "kind": "历年试题来源",
    "note": "公开机构整理或考生回忆资料，非考试部门公布的标准试卷。本站精选考点并改写题干、选项或题型，保留原题定位；答案为来源参考答案，解析为独立简述。"
  },
  {
    "id": "source-past-2024-zy1",
    "title": "2024 中药一 · 机构整理试题",
    "publisher": "环球网校",
    "url": "https://www.hqwx.com/zyys-kaoshi/news/17294038455140.html",
    "kind": "历年试题来源",
    "note": "公开机构整理或考生回忆资料，非考试部门公布的标准试卷。本站精选考点并改写题干、选项或题型，保留原题定位；答案为来源参考答案，解析为独立简述。"
  },
  {
    "id": "source-past-2024-zy2",
    "title": "2024 中药二 · 机构整理试题",
    "publisher": "环球网校",
    "url": "https://www.hqwx.com/zyys-kaoshi/news/17294175927717.html",
    "kind": "历年试题来源",
    "note": "公开机构整理或考生回忆资料，非考试部门公布的标准试卷。本站精选考点并改写题干、选项或题型，保留原题定位；答案为来源参考答案，解析为独立简述。"
  },
  {
    "id": "source-past-2024-zh",
    "title": "2024 中药综合 · 机构整理试题",
    "publisher": "环球网校",
    "url": "https://www.hqwx.com/zyys-kaoshi/news/17293312325985.html",
    "kind": "历年试题来源",
    "note": "公开机构整理或考生回忆资料，非考试部门公布的标准试卷。本站精选考点并改写题干、选项或题型，保留原题定位；答案为来源参考答案，解析为独立简述。"
  },
  {
    "id": "source-past-2024-fg",
    "title": "2024 药事法规 · 机构整理试题",
    "publisher": "环球网校",
    "url": "https://www.hqwx.com/zyys-kaoshi/news/17294071887984.html",
    "kind": "历年试题来源",
    "note": "公开机构整理或考生回忆资料，非考试部门公布的标准试卷。本站精选考点并改写题干、选项或题型，保留原题定位；答案为来源参考答案，解析为独立简述。"
  },
  {
    "id": "source-past-2023-zy1",
    "title": "2023 中药一 · 机构整理试题",
    "publisher": "环球网校",
    "url": "https://www.hqwx.com/zyys-kaoshi/news/16980262209690.html",
    "kind": "历年试题来源",
    "note": "公开机构整理或考生回忆资料，非考试部门公布的标准试卷。本站精选考点并改写题干、选项或题型，保留原题定位；答案为来源参考答案，解析为独立简述。"
  },
  {
    "id": "source-past-2023-zy2",
    "title": "2023 中药二 · 机构整理试题",
    "publisher": "环球网校",
    "url": "https://www.hqwx.com/zyys-kaoshi/news/16980283902602.html",
    "kind": "历年试题来源",
    "note": "公开机构整理或考生回忆资料，非考试部门公布的标准试卷。本站精选考点并改写题干、选项或题型，保留原题定位；答案为来源参考答案，解析为独立简述。"
  },
  {
    "id": "source-past-2023-zh",
    "title": "2023 中药综合 · 机构整理试题",
    "publisher": "环球网校",
    "url": "https://www.hqwx.com/zyys-kaoshi/news/16980319326115.html",
    "kind": "历年试题来源",
    "note": "公开机构整理或考生回忆资料，非考试部门公布的标准试卷。本站精选考点并改写题干、选项或题型，保留原题定位；答案为来源参考答案，解析为独立简述。"
  },
  {
    "id": "source-past-2023-fg",
    "title": "2023 药事法规 · 机构整理试题",
    "publisher": "环球网校",
    "url": "https://www.hqwx.com/zyys-kaoshi/news/16980322145540.html",
    "kind": "历年试题来源",
    "note": "公开机构整理或考生回忆资料，非考试部门公布的标准试卷。本站精选考点并改写题干、选项或题型，保留原题定位；答案为来源参考答案，解析为独立简述。"
  }
];
export const pastKnowledge:Knowledge[]=[
  {
    "id": "knowledge-past-2025-zy1",
    "subject": "zy1",
    "chapter": "历年考点复盘",
    "title": "2025 中药一：精选历年考点复盘",
    "summary": "3 个来源可定位的考点，配套站内选练。",
    "points": [
      "苦杏仁苷属于氰苷；此题复习其水解特征。",
      "润湿剂帮助固体颗粒被分散介质润湿。",
      "Bornträger 反应为羟基蒽醌的碱液显色反应。"
    ],
    "tip": "回忆资料可能不完整；本条考点简述和关联练习不是原卷全文。",
    "tags": [
      "2025",
      "历年回忆考点",
      "改写选练"
    ],
    "sourceId": "source-past-2025-zy1",
    "minutes": 8
  },
  {
    "id": "knowledge-past-2025-zy2",
    "subject": "zy2",
    "chapter": "历年考点复盘",
    "title": "2025 中药二：精选历年考点复盘",
    "summary": "3 个来源可定位的考点，配套站内选练。",
    "points": [
      "独活祛风湿、止痹痛，辨析线索为下半身风湿痹痛。",
      "陈皮的核心功效为理气健脾、燥湿化痰。",
      "山楂长于消肉食积滞，兼行气散瘀。"
    ],
    "tip": "回忆资料可能不完整；本条考点简述和关联练习不是原卷全文。",
    "tags": [
      "2025",
      "历年回忆考点",
      "改写选练"
    ],
    "sourceId": "source-past-2025-zy2",
    "minutes": 8
  },
  {
    "id": "knowledge-past-2025-zh",
    "subject": "zh",
    "chapter": "历年考点复盘",
    "title": "2025 中药综合：精选历年考点复盘",
    "summary": "3 个来源可定位的考点，配套站内选练。",
    "points": [
      "健脾丸兼顾脾虚和积滞；保和丸偏消食。",
      "相畏、相杀从不同一方描述同一减毒关系；本题改编为多选。",
      "该来源以白暗寒象为线索，参考答案为脾肾阳虚。"
    ],
    "tip": "回忆资料可能不完整；本条考点简述和关联练习不是原卷全文。",
    "tags": [
      "2025",
      "历年回忆考点",
      "改写选练"
    ],
    "sourceId": "source-past-2025-zh",
    "minutes": 8
  },
  {
    "id": "knowledge-past-2025-fg",
    "subject": "fg",
    "chapter": "历年考点复盘",
    "title": "2025 药事法规：精选历年考点复盘",
    "summary": "3 个来源可定位的考点，配套站内选练。",
    "points": [
      "来源采用限制使用级、普通使用级两级分类。",
      "该法由全国人大常委会制定，属于法律。",
      "来源参考答案为 5 年；注册与资格证书有效期不可混记。"
    ],
    "tip": "历史题按当年参考答案复盘。2026 法规变动须另核当年指南与现行原文。",
    "tags": [
      "2025",
      "历年回忆考点",
      "改写选练"
    ],
    "sourceId": "source-past-2025-fg",
    "minutes": 8
  },
  {
    "id": "knowledge-past-2024-zy1",
    "subject": "zy1",
    "chapter": "历年考点复盘",
    "title": "2024 中药一：精选历年考点复盘",
    "summary": "3 个来源可定位的考点，配套站内选练。",
    "points": [
      "银柴胡用根，泽泻用块茎；此题由原配伍题改编为多选。",
      "泽泻用块茎；不要与茯苓的菌核混记。",
      "党参根头部的学习线索为狮子头。"
    ],
    "tip": "回忆资料可能不完整；本条考点简述和关联练习不是原卷全文。",
    "tags": [
      "2024",
      "历年回忆考点",
      "改写选练"
    ],
    "sourceId": "source-past-2024-zy1",
    "minutes": 8
  },
  {
    "id": "knowledge-past-2024-zy2",
    "subject": "zy2",
    "chapter": "历年考点复盘",
    "title": "2024 中药二：精选历年考点复盘",
    "summary": "3 个来源可定位的考点，配套站内选练。",
    "points": [
      "千金子泻水逐饮，兼破血消癥。",
      "来源对应消肿利咽、化腐止痛。",
      "牛蒡子在这组备选药中符合宣肺祛痰、利咽等特点。"
    ],
    "tip": "回忆资料可能不完整；本条考点简述和关联练习不是原卷全文。",
    "tags": [
      "2024",
      "历年回忆考点",
      "改写选练"
    ],
    "sourceId": "source-past-2024-zy2",
    "minutes": 8
  },
  {
    "id": "knowledge-past-2024-zh",
    "subject": "zh",
    "chapter": "历年考点复盘",
    "title": "2024 中药综合：精选历年考点复盘",
    "summary": "2 个来源可定位的考点，配套站内选练。",
    "points": [
      "鸡血藤不等于红藤；其余为该题列出的对应关系。",
      "来源选择芍药甘草汤与解痉药；此处用于历史题辨析。"
    ],
    "tip": "回忆资料可能不完整；本条考点简述和关联练习不是原卷全文。",
    "tags": [
      "2024",
      "历年回忆考点",
      "改写选练"
    ],
    "sourceId": "source-past-2024-zh",
    "minutes": 8
  },
  {
    "id": "knowledge-past-2024-fg",
    "subject": "fg",
    "chapter": "历年考点复盘",
    "title": "2024 药事法规：精选历年考点复盘",
    "summary": "3 个来源可定位的考点，配套站内选练。",
    "points": [
      "来源答案为共建共享、全民健康。",
      "来源对应市级备案；历史题不替代现行经营规定。",
      "该题参考答案为 3 日常用量。"
    ],
    "tip": "历史题按当年参考答案复盘。2026 法规变动须另核当年指南与现行原文。",
    "tags": [
      "2024",
      "历年回忆考点",
      "改写选练"
    ],
    "sourceId": "source-past-2024-fg",
    "minutes": 8
  },
  {
    "id": "knowledge-past-2023-zy1",
    "subject": "zy1",
    "chapter": "历年考点复盘",
    "title": "2023 中药一：精选历年考点复盘",
    "summary": "3 个来源可定位的考点，配套站内选练。",
    "points": [
      "来源把东莨菪碱作为洋金花的含量测定指标线索。",
      "该题选荆芥，联系升浮、解表散寒。",
      "该来源以酒的活血通络、矫味矫臭作用作辨析。"
    ],
    "tip": "回忆资料可能不完整；本条考点简述和关联练习不是原卷全文。",
    "tags": [
      "2023",
      "历年回忆考点",
      "改写选练"
    ],
    "sourceId": "source-past-2023-zy1",
    "minutes": 8
  },
  {
    "id": "knowledge-past-2023-zy2",
    "subject": "zy2",
    "chapter": "历年考点复盘",
    "title": "2023 中药二：精选历年考点复盘",
    "summary": "3 个来源可定位的考点，配套站内选练。",
    "points": [
      "薄荷与柴胡均有疏肝相关作用，符合该题两条线索。",
      "射干清热解毒，祛痰利咽；保留该题核心证候线索。",
      "制大黄攻下趋缓、活血作用较好；勿与大黄炭混记。"
    ],
    "tip": "回忆资料可能不完整；本条考点简述和关联练习不是原卷全文。",
    "tags": [
      "2023",
      "历年回忆考点",
      "改写选练"
    ],
    "sourceId": "source-past-2023-zy2",
    "minutes": 8
  },
  {
    "id": "knowledge-past-2023-zh",
    "subject": "zh",
    "chapter": "历年考点复盘",
    "title": "2023 中药综合：精选历年考点复盘",
    "summary": "2 个来源可定位的考点，配套站内选练。",
    "points": [
      "辨证确定证候，论治以证候为依据。",
      "肾主纳气，与保持呼吸深度相联系。"
    ],
    "tip": "回忆资料可能不完整；本条考点简述和关联练习不是原卷全文。",
    "tags": [
      "2023",
      "历年回忆考点",
      "改写选练"
    ],
    "sourceId": "source-past-2023-zh",
    "minutes": 8
  },
  {
    "id": "knowledge-past-2023-fg",
    "subject": "fg",
    "chapter": "历年考点复盘",
    "title": "2023 药事法规：精选历年考点复盘",
    "summary": "3 个来源可定位的考点，配套站内选练。",
    "points": [
      "来源把名方制剂研发列入中医药高质量发展基础相关任务。",
      "来源列明含国家濒危野生动植物药材的药品不纳入。",
      "该题区分药品研制与注册执业范围三类。"
    ],
    "tip": "历史题按当年参考答案复盘。2026 法规变动须另核当年指南与现行原文。",
    "tags": [
      "2023",
      "历年回忆考点",
      "改写选练"
    ],
    "sourceId": "source-past-2023-fg",
    "minutes": 8
  }
];
export const pastQuestions:Question[]=[
  {
    "id": "past-2025-zy1-q1",
    "subject": "zy1",
    "knowledgeId": "knowledge-past-2025-zy1",
    "type": "single",
    "title": "哪种苷类成分经水解可释放氢氰酸？",
    "options": [
      "苦杏仁苷",
      "黄芩苷",
      "芦丁",
      "甘草苷",
      "番泻苷"
    ],
    "answer": [
      0
    ],
    "explanation": "苦杏仁苷属于氰苷；此题复习其水解特征。",
    "sourceId": "source-past-2025-zy1",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2025,
    "paperId": "past-2025-zy1",
    "sourceRef": "最佳选择题 1"
  },
  {
    "id": "past-2025-zy1-q2",
    "subject": "zy1",
    "knowledgeId": "knowledge-past-2025-zy1",
    "type": "single",
    "title": "制备混悬剂时，聚山梨酯 80 可承担哪种作用？",
    "options": [
      "防腐",
      "润湿",
      "着色",
      "矫味",
      "抗氧化"
    ],
    "answer": [
      1
    ],
    "explanation": "润湿剂帮助固体颗粒被分散介质润湿。",
    "sourceId": "source-past-2025-zy1",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2025,
    "paperId": "past-2025-zy1",
    "sourceRef": "最佳选择题 3"
  },
  {
    "id": "past-2025-zy1-q3",
    "subject": "zy1",
    "knowledgeId": "knowledge-past-2025-zy1",
    "type": "single",
    "title": "羟基蒽醌的鉴别可采用哪项显色反应？",
    "options": [
      "盐酸-镁粉反应",
      "Molish 反应",
      "Bornträger 反应",
      "异羟肟酸铁反应",
      "碘化铋钾反应"
    ],
    "answer": [
      2
    ],
    "explanation": "Bornträger 反应为羟基蒽醌的碱液显色反应。",
    "sourceId": "source-past-2025-zy1",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2025,
    "paperId": "past-2025-zy1",
    "sourceRef": "最佳选择题 4"
  },
  {
    "id": "past-2025-zy2-q1",
    "subject": "zy2",
    "knowledgeId": "knowledge-past-2025-zy2",
    "type": "single",
    "title": "风寒湿痹偏在腰膝、下肢时，哪味药最符合此题辨析特点？",
    "options": [
      "独活",
      "伸筋草",
      "鹿衔草",
      "青风藤",
      "徐长卿"
    ],
    "answer": [
      0
    ],
    "explanation": "独活祛风湿、止痹痛，辨析线索为下半身风湿痹痛。",
    "sourceId": "source-past-2025-zy2",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2025,
    "paperId": "past-2025-zy2",
    "sourceRef": "最佳选择题 1"
  },
  {
    "id": "past-2025-zy2-q2",
    "subject": "zy2",
    "knowledgeId": "knowledge-past-2025-zy2",
    "type": "single",
    "title": "把理气健脾与燥湿化痰两项功效联系起来，应记哪味药？",
    "options": [
      "青皮",
      "薤白",
      "陈皮",
      "甘松",
      "小茴香"
    ],
    "answer": [
      2
    ],
    "explanation": "陈皮的核心功效为理气健脾、燥湿化痰。",
    "sourceId": "source-past-2025-zy2",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2025,
    "paperId": "past-2025-zy2",
    "sourceRef": "最佳选择题 8"
  },
  {
    "id": "past-2025-zy2-q3",
    "subject": "zy2",
    "knowledgeId": "knowledge-past-2025-zy2",
    "type": "single",
    "title": "复习油腻肉食积滞的消食用药，首要辨析对象是哪味？",
    "options": [
      "稻芽",
      "麦芽",
      "六神曲",
      "山楂",
      "榧子"
    ],
    "answer": [
      3
    ],
    "explanation": "山楂长于消肉食积滞，兼行气散瘀。",
    "sourceId": "source-past-2025-zy2",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2025,
    "paperId": "past-2025-zy2",
    "sourceRef": "最佳选择题 10"
  },
  {
    "id": "past-2025-zh-q1",
    "subject": "zh",
    "knowledgeId": "knowledge-past-2025-zh",
    "type": "single",
    "title": "此题讨论小儿脾虚兼食积，健脾和消积并用的基础方剂是哪项？",
    "options": [
      "保和丸",
      "健脾丸",
      "异功散",
      "养胃增液汤",
      "不换金正气散"
    ],
    "answer": [
      1
    ],
    "explanation": "健脾丸兼顾脾虚和积滞；保和丸偏消食。",
    "sourceId": "source-past-2025-zh",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2025,
    "paperId": "past-2025-zh",
    "sourceRef": "最佳选择题 1"
  },
  {
    "id": "past-2025-zh-q2",
    "subject": "zh",
    "knowledgeId": "knowledge-past-2025-zh",
    "type": "multiple",
    "title": "按半夏、生姜的减毒配伍关系，哪些表述正确？",
    "options": [
      "半夏畏生姜",
      "生姜杀半夏",
      "半夏反生姜",
      "生姜恶半夏",
      "半夏与生姜为单行"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "相畏、相杀从不同一方描述同一减毒关系；本题改编为多选。",
    "sourceId": "source-past-2025-zh",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2025,
    "paperId": "past-2025-zh",
    "sourceRef": "最佳选择题 2 的配伍考点（改编多选）"
  },
  {
    "id": "past-2025-zh-q3",
    "subject": "zh",
    "knowledgeId": "knowledge-past-2025-zh",
    "type": "single",
    "title": "虚证口疮反复、疮面偏白暗，此回忆题的参考证型是？",
    "options": [
      "肝肾阴虚",
      "肺肾气虚",
      "心脾两虚",
      "脾肾阳虚",
      "脾胃气虚"
    ],
    "answer": [
      3
    ],
    "explanation": "该来源以白暗寒象为线索，参考答案为脾肾阳虚。",
    "sourceId": "source-past-2025-zh",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2025,
    "paperId": "past-2025-zh",
    "sourceRef": "最佳选择题 3"
  },
  {
    "id": "past-2025-fg-q1",
    "subject": "fg",
    "knowledgeId": "knowledge-past-2025-fg",
    "type": "single",
    "title": "按这份 2025 回忆资料，抗肿瘤药除限制使用级外，另一管理级别是？",
    "options": [
      "普通使用级",
      "特殊使用级",
      "非特殊使用级",
      "非限制使用级"
    ],
    "answer": [
      0
    ],
    "explanation": "来源采用限制使用级、普通使用级两级分类。",
    "sourceId": "source-past-2025-fg",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2025,
    "paperId": "past-2025-fg",
    "sourceRef": "回忆版（一）第 2 题"
  },
  {
    "id": "past-2025-fg-q2",
    "subject": "fg",
    "knowledgeId": "knowledge-past-2025-fg",
    "type": "single",
    "title": "《药品管理法》在该题考查的法律层级中属于哪项？",
    "options": [
      "部门规章",
      "行政法规",
      "基本法律以外的其他法律",
      "地方性法规"
    ],
    "answer": [
      2
    ],
    "explanation": "该法由全国人大常委会制定，属于法律。",
    "sourceId": "source-past-2025-fg",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2025,
    "paperId": "past-2025-fg",
    "sourceRef": "回忆版（一）第 4 题"
  },
  {
    "id": "past-2025-fg-q3",
    "subject": "fg",
    "knowledgeId": "knowledge-past-2025-fg",
    "type": "single",
    "title": "这份 2025 回忆题中的执业药师注册有效期答案为多少年？",
    "options": [
      "2 年",
      "3 年",
      "4 年",
      "5 年"
    ],
    "answer": [
      3
    ],
    "explanation": "来源参考答案为 5 年；注册与资格证书有效期不可混记。",
    "sourceId": "source-past-2025-fg",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2025,
    "paperId": "past-2025-fg",
    "sourceRef": "回忆版（一）第 5 题"
  },
  {
    "id": "past-2024-zy1-q1",
    "subject": "zy1",
    "knowledgeId": "knowledge-past-2024-zy1",
    "type": "multiple",
    "title": "从银柴胡、泽泻的原配伍考点改编，下列哪些部位对应正确？",
    "options": [
      "银柴胡—根",
      "泽泻—块茎",
      "银柴胡—鳞茎",
      "泽泻—树皮",
      "泽泻—菌核"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "银柴胡用根，泽泻用块茎；此题由原配伍题改编为多选。",
    "sourceId": "source-past-2024-zy1",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2024,
    "paperId": "past-2024-zy1",
    "sourceRef": "公开配伍题：银柴胡与泽泻（改编多选）"
  },
  {
    "id": "past-2024-zy1-q2",
    "subject": "zy1",
    "knowledgeId": "knowledge-past-2024-zy1",
    "type": "single",
    "title": "泽泻的药用部位应与哪项对应？",
    "options": [
      "鳞茎",
      "块茎",
      "树皮",
      "成熟果实",
      "菌核"
    ],
    "answer": [
      1
    ],
    "explanation": "泽泻用块茎；不要与茯苓的菌核混记。",
    "sourceId": "source-past-2024-zy1",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2024,
    "paperId": "past-2024-zy1",
    "sourceRef": "公开配伍题：泽泻药用部位"
  },
  {
    "id": "past-2024-zy1-q3",
    "subject": "zy1",
    "knowledgeId": "knowledge-past-2024-zy1",
    "type": "single",
    "title": "鉴别党参根头部，哪种传统术语最贴合该题？",
    "options": [
      "朱砂点",
      "云锦纹",
      "狮子头",
      "蚯蚓头",
      "菊花心"
    ],
    "answer": [
      2
    ],
    "explanation": "党参根头部的学习线索为狮子头。",
    "sourceId": "source-past-2024-zy1",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2024,
    "paperId": "past-2024-zy1",
    "sourceRef": "公开配伍题：党参性状术语"
  },
  {
    "id": "past-2024-zy2-q1",
    "subject": "zy2",
    "knowledgeId": "knowledge-past-2024-zy2",
    "type": "single",
    "title": "哪味药兼具逐水与破血消癥两项功效？",
    "options": [
      "千金子",
      "牵牛子",
      "芫花",
      "红大戟",
      "巴豆"
    ],
    "answer": [
      0
    ],
    "explanation": "千金子泻水逐饮，兼破血消癥。",
    "sourceId": "source-past-2024-zy2",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2024,
    "paperId": "past-2024-zy2",
    "sourceRef": "公开样题：千金子功效"
  },
  {
    "id": "past-2024-zy2-q2",
    "subject": "zy2",
    "knowledgeId": "knowledge-past-2024-zy2",
    "type": "single",
    "title": "六神丸清热解毒之外，此题还考查哪组功能？",
    "options": [
      "活血通经",
      "消肿利咽、化腐止痛",
      "益气养阴",
      "温阳化饮",
      "润肠通便"
    ],
    "answer": [
      1
    ],
    "explanation": "来源对应消肿利咽、化腐止痛。",
    "sourceId": "source-past-2024-zy2",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2024,
    "paperId": "past-2024-zy2",
    "sourceRef": "公开样题：六神丸功能"
  },
  {
    "id": "past-2024-zy2-q3",
    "subject": "zy2",
    "knowledgeId": "knowledge-past-2024-zy2",
    "type": "single",
    "title": "兼有疏散风热、透疹、利咽、宣肺祛痰特点的是哪味药？",
    "options": [
      "葛根",
      "浮萍",
      "牛蒡子",
      "香薷",
      "薄荷"
    ],
    "answer": [
      2
    ],
    "explanation": "牛蒡子在这组备选药中符合宣肺祛痰、利咽等特点。",
    "sourceId": "source-past-2024-zy2",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2024,
    "paperId": "past-2024-zy2",
    "sourceRef": "公开样题：牛蒡子辨析"
  },
  {
    "id": "past-2024-zh-q1",
    "subject": "zh",
    "knowledgeId": "knowledge-past-2024-zh",
    "type": "single",
    "title": "复习正别名时，哪项配对应予纠正？",
    "options": [
      "海螵蛸—乌贼骨",
      "鸡血藤—红藤",
      "补骨脂—破故纸",
      "重楼—蚤休",
      "牵牛子—黑丑"
    ],
    "answer": [
      1
    ],
    "explanation": "鸡血藤不等于红藤；其余为该题列出的对应关系。",
    "sourceId": "source-past-2024-zh",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2024,
    "paperId": "past-2024-zh",
    "sourceRef": "公开样题：正别名"
  },
  {
    "id": "past-2024-zh-q2",
    "subject": "zh",
    "knowledgeId": "knowledge-past-2024-zh",
    "type": "single",
    "title": "该历史题中，被列作协同作用的组合是哪项？",
    "options": [
      "槐角丸与磺胺类药",
      "维 C 银翘片与解热镇痛药",
      "芍药甘草汤与解痉药",
      "人参鹿茸丸与磺酰脲类药",
      "桂枝汤与糖皮质激素"
    ],
    "answer": [
      2
    ],
    "explanation": "来源选择芍药甘草汤与解痉药；此处用于历史题辨析。",
    "sourceId": "source-past-2024-zh",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2024,
    "paperId": "past-2024-zh",
    "sourceRef": "公开样题：中西药协同"
  },
  {
    "id": "past-2024-fg-q1",
    "subject": "fg",
    "knowledgeId": "knowledge-past-2024-fg",
    "type": "single",
    "title": "这道历史题考查的健康中国战略主题是哪项？",
    "options": [
      "共建共享、全民健康",
      "健康优先、改革创新",
      "科学发展、公平公正",
      "所有药品纳入医保"
    ],
    "answer": [
      0
    ],
    "explanation": "来源答案为共建共享、全民健康。",
    "sourceId": "source-past-2024-fg",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2024,
    "paperId": "past-2024-fg",
    "sourceRef": "单项选择题 2"
  },
  {
    "id": "past-2024-fg-q2",
    "subject": "fg",
    "knowledgeId": "knowledge-past-2024-fg",
    "type": "single",
    "title": "按来源的 2024 参考答案，第二类医疗器械经营通常实行哪项管理？",
    "options": [
      "县级许可",
      "设区的市级备案",
      "县级备案",
      "设区的市级许可"
    ],
    "answer": [
      1
    ],
    "explanation": "来源对应市级备案；历史题不替代现行经营规定。",
    "sourceId": "source-past-2024-fg",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2024,
    "paperId": "past-2024-fg",
    "sourceRef": "单项选择题 4"
  },
  {
    "id": "past-2024-fg-q3",
    "subject": "fg",
    "knowledgeId": "knowledge-past-2024-fg",
    "type": "single",
    "title": "原站急诊处方题的通常用量上限参考答案是哪项？",
    "options": [
      "1 日",
      "7 日",
      "3 日",
      "5 日"
    ],
    "answer": [
      2
    ],
    "explanation": "该题参考答案为 3 日常用量。",
    "sourceId": "source-past-2024-fg",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2024,
    "paperId": "past-2024-fg",
    "sourceRef": "配伍选择题 43"
  },
  {
    "id": "past-2023-zy1-q1",
    "subject": "zy1",
    "knowledgeId": "knowledge-past-2023-zy1",
    "type": "single",
    "title": "该药典指标成分题将东莨菪碱与哪味药联系起来？",
    "options": [
      "洋金花",
      "防己",
      "麻黄",
      "黄连",
      "川乌"
    ],
    "answer": [
      0
    ],
    "explanation": "来源把东莨菪碱作为洋金花的含量测定指标线索。",
    "sourceId": "source-past-2023-zy1",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2023,
    "paperId": "past-2023-zy1",
    "sourceRef": "图片样题第 1 页第 1 题"
  },
  {
    "id": "past-2023-zy1-q2",
    "subject": "zy1",
    "knowledgeId": "knowledge-past-2023-zy1",
    "type": "single",
    "title": "按该题药性与病位的思路，风寒表证的备选解表药是哪味？",
    "options": [
      "蝉蜕",
      "荆芥",
      "薄荷",
      "大黄",
      "黄柏"
    ],
    "answer": [
      1
    ],
    "explanation": "该题选荆芥，联系升浮、解表散寒。",
    "sourceId": "source-past-2023-zy1",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2023,
    "paperId": "past-2023-zy1",
    "sourceRef": "图片样题第 1 页第 2 题"
  },
  {
    "id": "past-2023-zy1-q3",
    "subject": "zy1",
    "knowledgeId": "knowledge-past-2023-zy1",
    "type": "single",
    "title": "炮制辅料中，活血通络并可矫味矫臭的学习对象是哪项？",
    "options": [
      "盐水",
      "蜂蜜",
      "酒",
      "姜汁",
      "醋"
    ],
    "answer": [
      2
    ],
    "explanation": "该来源以酒的活血通络、矫味矫臭作用作辨析。",
    "sourceId": "source-past-2023-zy1",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2023,
    "paperId": "past-2023-zy1",
    "sourceRef": "图片样题第 1 页第 3 题"
  },
  {
    "id": "past-2023-zy2-q1",
    "subject": "zy2",
    "knowledgeId": "knowledge-past-2023-zy2",
    "type": "single",
    "title": "哪组药既能联系外感，又能联系肝气郁滞？",
    "options": [
      "薄荷、柴胡",
      "桑叶、菊花",
      "金银花、连翘",
      "柴胡、蝉蜕",
      "大青叶、薄荷"
    ],
    "answer": [
      0
    ],
    "explanation": "薄荷与柴胡均有疏肝相关作用，符合该题两条线索。",
    "sourceId": "source-past-2023-zy2",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2023,
    "paperId": "past-2023-zy2",
    "sourceRef": "图片样题第 1 页第 1 题"
  },
  {
    "id": "past-2023-zy2-q2",
    "subject": "zy2",
    "knowledgeId": "knowledge-past-2023-zy2",
    "type": "single",
    "title": "热痰郁结的咽痛兼喘咳，此历史题选择的清热利咽药是？",
    "options": [
      "石膏",
      "射干",
      "白头翁",
      "青黛",
      "鱼腥草"
    ],
    "answer": [
      1
    ],
    "explanation": "射干清热解毒，祛痰利咽；保留该题核心证候线索。",
    "sourceId": "source-past-2023-zy2",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2023,
    "paperId": "past-2023-zy2",
    "sourceRef": "图片样题第 1 页第 2 题"
  },
  {
    "id": "past-2023-zy2-q3",
    "subject": "zy2",
    "knowledgeId": "knowledge-past-2023-zy2",
    "type": "single",
    "title": "复习大黄炮制品时，制大黄相对突出的作用侧重是哪项？",
    "options": [
      "峻下力增强",
      "凉血止血专用",
      "活血化瘀",
      "发汗散寒",
      "滋阴润肺"
    ],
    "answer": [
      2
    ],
    "explanation": "制大黄攻下趋缓、活血作用较好；勿与大黄炭混记。",
    "sourceId": "source-past-2023-zy2",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2023,
    "paperId": "past-2023-zy2",
    "sourceRef": "图片样题第 1 页第 3 题"
  },
  {
    "id": "past-2023-zh-q1",
    "subject": "zh",
    "knowledgeId": "knowledge-past-2023-zh",
    "type": "single",
    "title": "辨证论治中，选定治法首先依据哪个要素？",
    "options": [
      "证候",
      "单个症状",
      "仅看病名",
      "仅看病位",
      "仅看年龄"
    ],
    "answer": [
      0
    ],
    "explanation": "辨证确定证候，论治以证候为依据。",
    "sourceId": "source-past-2023-zh",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2023,
    "paperId": "past-2023-zh",
    "sourceRef": "图片样题第 1 页第 1 题"
  },
  {
    "id": "past-2023-zh-q2",
    "subject": "zh",
    "knowledgeId": "knowledge-past-2023-zh",
    "type": "single",
    "title": "五脏功能中，纳气、保持吸气深度与哪一脏联系？",
    "options": [
      "脾",
      "肾",
      "心",
      "肝",
      "肺"
    ],
    "answer": [
      1
    ],
    "explanation": "肾主纳气，与保持呼吸深度相联系。",
    "sourceId": "source-past-2023-zh",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2023,
    "paperId": "past-2023-zh",
    "sourceRef": "图片样题第 1 页第 2 题"
  },
  {
    "id": "past-2023-fg-q1",
    "subject": "fg",
    "knowledgeId": "knowledge-past-2023-fg",
    "type": "single",
    "title": "2023 年该规划题将经典名方制剂研发归入哪类重点任务？",
    "options": [
      "保障药品质量安全",
      "夯实中医药高质量发展基础",
      "药品广告审查",
      "零售药店分级"
    ],
    "answer": [
      1
    ],
    "explanation": "来源把名方制剂研发列入中医药高质量发展基础相关任务。",
    "sourceId": "source-past-2023-fg",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2023,
    "paperId": "past-2023-fg",
    "sourceRef": "图片样题第 1 页第 1 题"
  },
  {
    "id": "past-2023-fg-q2",
    "subject": "fg",
    "knowledgeId": "knowledge-past-2023-fg",
    "type": "single",
    "title": "该历史题中，不纳入基本药物目录遴选范围的药品含有什么？",
    "options": [
      "国家濒危野生动植物药材",
      "常用辅料",
      "常规化学成分",
      "多家企业生产的成分"
    ],
    "answer": [
      0
    ],
    "explanation": "来源列明含国家濒危野生动植物药材的药品不纳入。",
    "sourceId": "source-past-2023-fg",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2023,
    "paperId": "past-2023-fg",
    "sourceRef": "图片样题第 1 页第 2 题"
  },
  {
    "id": "past-2023-fg-q3",
    "subject": "fg",
    "knowledgeId": "knowledge-past-2023-fg",
    "type": "single",
    "title": "注册执业范围题中，哪项不在生产、经营、使用三类范围内？",
    "options": [
      "药品使用",
      "药品经营",
      "药品研制",
      "药品生产"
    ],
    "answer": [
      2
    ],
    "explanation": "该题区分药品研制与注册执业范围三类。",
    "sourceId": "source-past-2023-fg",
    "origin": "回忆考点改写 · 非原题逐字稿",
    "year": 2023,
    "paperId": "past-2023-fg",
    "sourceRef": "图片样题第 1 页第 3 题"
  }
];
