// Public university herb facts, independently summarized; not a Red Book extraction.
import type { Source, Knowledge, Question } from './data';
export const herbSources:Source[]=[
  {
    "id": "university-herb-001",
    "title": "中药馆 · 薄荷",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/jby/b__h.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-002",
    "title": "中药馆 · 菊花",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/jby/j__h.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-003",
    "title": "中药馆 · 葛根",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/jby/g__g.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-004",
    "title": "中药馆 · 柴胡",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/jby/c__h.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-005",
    "title": "中药馆 · 石膏",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/qry/s____g.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-006",
    "title": "中药馆 · 知母",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/qry/z____m.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-007",
    "title": "中药馆 · 栀子",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/qry/z____z.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-008",
    "title": "中药馆 · 连翘",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/qry/l____q.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-009",
    "title": "中药馆 · 板蓝根",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/qry/b_l_g.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-010",
    "title": "中药馆 · 鱼腥草",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/qry/y_x_c.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-011",
    "title": "中药馆 · 牡丹皮",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/qry/m_d_p.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-012",
    "title": "中药馆 · 青蒿",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/qry/q____h.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-013",
    "title": "中药馆 · 干姜",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/wly/g__j.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-014",
    "title": "中药馆 · 肉桂",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/wly/r__g.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-015",
    "title": "中药馆 · 小茴香",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/wly/xhx.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-016",
    "title": "中药馆 · 川芎",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/hxhyy/c__x.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-017",
    "title": "中药馆 · 延胡索",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/hxhyy/yhs.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-018",
    "title": "中药馆 · 丹参",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/hxhyy/d__c.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-019",
    "title": "中药馆 · 桃仁",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/hxhyy/t__r.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-020",
    "title": "中药馆 · 红花",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/hxhyy/h__h.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-021",
    "title": "中药馆 · 益母草",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/hxhyy/ymc.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-022",
    "title": "中药馆 · 石决明",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/pygyy/sjm.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-023",
    "title": "中药馆 · 牡蛎",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/pygyy/m__l.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-024",
    "title": "中药馆 · 钩藤",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/pgxfy/g__t.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-025",
    "title": "中药馆 · 地龙",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/pgxfy/d__l.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-026",
    "title": "中药馆 · 天麻",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/pgxfy/t__m.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-027",
    "title": "中药馆 · 青皮",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/lqy/qp.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-028",
    "title": "中药馆 · 枳实",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/lqy/zs.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-029",
    "title": "中药馆 · 香附",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/lqy/xf.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-030",
    "title": "中药馆 · 桔梗",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/htzkpcy/j__g.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-031",
    "title": "中药馆 · 川贝母",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/htzkpcy/cbm.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-032",
    "title": "中药馆 · 浙贝母",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/htzkpcy/zbm.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-033",
    "title": "中药馆 · 苦杏仁",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/htzkpcy/kxr.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-034",
    "title": "中药馆 · 猪苓",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/lsssy/z__l.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-035",
    "title": "中药馆 · 泽泻",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/lsssy/z__x.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-036",
    "title": "中药馆 · 车前子",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/lsssy/cqz.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-037",
    "title": "中药馆 · 茵陈蒿",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/lsssy/ych.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-038",
    "title": "中药馆 · 金钱草",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/lsssy/jqc.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-039",
    "title": "中药馆 · 独活",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/qfsy/d______h.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-040",
    "title": "中药馆 · 威灵仙",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/qfsy/w__l__x.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-041",
    "title": "中药馆 · 木瓜",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/qfsy/m______g.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-042",
    "title": "中药馆 · 苍术",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/hsy/c__s.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-043",
    "title": "中药馆 · 厚朴",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/hsy/h__p.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-044",
    "title": "中药馆 · 广藿香",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/hsy/ghx.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-045",
    "title": "中药馆 · 砂仁",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/hsy/s__r.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-046",
    "title": "中药馆 · 大黄",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/xxy/d__h.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-047",
    "title": "中药馆 · 芒硝",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/xxy/m__x.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-048",
    "title": "中药馆 · 党参",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/bxy/d____c.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-049",
    "title": "中药馆 · 山药",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/bxy/s___y.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-050",
    "title": "中药馆 · 西洋参",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/bxy/x_y_c.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-051",
    "title": "中药馆 · 黄芪",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/bxy/h____q.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-052",
    "title": "中药馆 · 杜仲",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/bxy/d__z.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-053",
    "title": "中药馆 · 熟地黄",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/bxy/s_d_h.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-054",
    "title": "中药馆 · 麦冬",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/bxy/m____d.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-055",
    "title": "中药馆 · 枸杞子",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/bxy/g_q_z.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-056",
    "title": "中药馆 · 酸枣仁",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/asy/szr.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-057",
    "title": "中药馆 · 远志",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/asy/y__z.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-058",
    "title": "中药馆 · 山茱萸",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/ssy/szy.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-059",
    "title": "中药馆 · 三七",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/zxy/s__q.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-060",
    "title": "中药馆 · 艾叶",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/zxy/a__y.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-061",
    "title": "中药馆 · 山楂",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/xsy/s__z.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-062",
    "title": "中药馆 · 麦芽",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/xsy/m__y.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-063",
    "title": "中药馆 · 莱菔子",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/xsy/lfz.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  },
  {
    "id": "university-herb-064",
    "title": "中药馆 · 鸡内金",
    "publisher": "河南中医药大学中药学实验教学中心",
    "url": "https://zyxsyjxzx.hactcm.edu.cn/zyg/zycfl/xsy/jnj.htm",
    "kind": "高校药材资料",
    "note": "公开教学资料的药材基础事实。不是润德红宝书原文；旧资料的基原范围、术语和药典条目需按当年教材核对。"
  }
];
export const herbKnowledge:Knowledge[]=[
  {
    "id": "herb-001",
    "subject": "zy2",
    "chapter": "解表药",
    "title": "薄荷：来源、功效与证候辨析",
    "summary": "疏散风热 · 清利头目 · 利咽透疹",
    "points": [
      "药用部位：干燥地上部分。",
      "功效主线：疏散风热；清利头目；利咽透疹。",
      "证候线索：风热表证，兼头痛、咽痛或疹出不畅。",
      "辨析重点：与温散风寒药分开记，不能见感冒就选薄荷。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "薄荷",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-001",
    "minutes": 6
  },
  {
    "id": "herb-002",
    "subject": "zy2",
    "chapter": "解表药",
    "title": "菊花：来源、功效与证候辨析",
    "summary": "散风清热 · 平肝明目",
    "points": [
      "药用部位：干燥头状花序。",
      "功效主线：散风清热；平肝明目。",
      "证候线索：风热头痛、目赤，或肝阳上亢的眩晕。",
      "辨析重点：同属解表药，还须记住平肝与明目的特点。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "菊花",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-002",
    "minutes": 6
  },
  {
    "id": "herb-003",
    "subject": "zy2",
    "chapter": "解表药",
    "title": "葛根：来源、功效与证候辨析",
    "summary": "解肌退热 · 生津 · 透疹 · 升阳止泻",
    "points": [
      "药用部位：根。",
      "功效主线：解肌退热；生津；透疹；升阳止泻。",
      "证候线索：外感项背强痛、津伤口渴，或相关泄泻证。",
      "辨析重点：项背强痛是识别线索；升阳止泻与泻下通便方向不同。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "葛根",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-003",
    "minutes": 6
  },
  {
    "id": "herb-004",
    "subject": "zy2",
    "chapter": "解表药",
    "title": "柴胡：来源、功效与证候辨析",
    "summary": "疏散退热 · 疏肝解郁 · 升举阳气",
    "points": [
      "药用部位：干燥根。",
      "功效主线：疏散退热；疏肝解郁；升举阳气。",
      "证候线索：寒热往来、肝郁胁痛，或中气下陷。",
      "辨析重点：退热、疏肝、升阳分别对应不同证候，不能只记退热。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "柴胡",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-004",
    "minutes": 6
  },
  {
    "id": "herb-005",
    "subject": "zy2",
    "chapter": "清热药",
    "title": "石膏：来源、功效与证候辨析",
    "summary": "生用清热泻火 · 除烦止渴",
    "points": [
      "药用部位：含水硫酸钙矿物。",
      "功效主线：生用清热泻火；除烦止渴。",
      "证候线索：高热烦渴、肺热喘咳及胃火牙痛。",
      "辨析重点：生石膏与煅石膏用途不同；煅品侧重外用收湿敛疮。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "石膏",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-005",
    "minutes": 6
  },
  {
    "id": "herb-006",
    "subject": "zy2",
    "chapter": "清热药",
    "title": "知母：来源、功效与证候辨析",
    "summary": "清热泻火 · 生津润燥",
    "points": [
      "药用部位：干燥根茎。",
      "功效主线：清热泻火；生津润燥。",
      "证候线索：热病烦渴、肺热燥咳及内热津伤。",
      "辨析重点：同为清热药，知母还要联想到润燥生津。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "知母",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-006",
    "minutes": 6
  },
  {
    "id": "herb-007",
    "subject": "zy2",
    "chapter": "清热药",
    "title": "栀子：来源、功效与证候辨析",
    "summary": "泻火除烦 · 清热利湿 · 凉血解毒",
    "points": [
      "药用部位：干燥成熟果实。",
      "功效主线：泻火除烦；清热利湿；凉血解毒。",
      "证候线索：热病心烦、湿热黄疸及血热出血。",
      "辨析重点：心烦、黄疸、血热是不同作用线索；焦制品另记止血侧重。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "栀子",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-007",
    "minutes": 6
  },
  {
    "id": "herb-008",
    "subject": "zy2",
    "chapter": "清热药",
    "title": "连翘：来源、功效与证候辨析",
    "summary": "清热解毒 · 消肿散结",
    "points": [
      "药用部位：干燥果实。",
      "功效主线：清热解毒；消肿散结。",
      "证候线索：热毒疮肿，或外感风热、温病初起。",
      "辨析重点：散结作用不同于补虚药的扶正作用。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "连翘",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-008",
    "minutes": 6
  },
  {
    "id": "herb-009",
    "subject": "zy2",
    "chapter": "清热药",
    "title": "板蓝根：来源、功效与证候辨析",
    "summary": "清热解毒 · 凉血利咽",
    "points": [
      "药用部位：干燥根。",
      "功效主线：清热解毒；凉血利咽。",
      "证候线索：热毒所致咽喉肿痛、温毒发斑等。",
      "辨析重点：根入药；不要与同源叶类药材的部位混记。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "板蓝根",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-009",
    "minutes": 6
  },
  {
    "id": "herb-010",
    "subject": "zy2",
    "chapter": "清热药",
    "title": "鱼腥草：来源、功效与证候辨析",
    "summary": "清热解毒 · 消痈排脓 · 利尿通淋",
    "points": [
      "药用部位：地上部分。",
      "功效主线：清热解毒；消痈排脓；利尿通淋。",
      "证候线索：肺痈吐脓、痰热咳嗽，或热淋。",
      "辨析重点：排脓、通淋并列；不能只记清热。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "鱼腥草",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-010",
    "minutes": 6
  },
  {
    "id": "herb-011",
    "subject": "zy2",
    "chapter": "清热药",
    "title": "牡丹皮：来源、功效与证候辨析",
    "summary": "清热凉血 · 活血化瘀",
    "points": [
      "药用部位：干燥根皮。",
      "功效主线：清热凉血；活血化瘀。",
      "证候线索：血热出血、无汗骨蒸，或瘀血疼痛。",
      "辨析重点：根皮不是根茎；既清血分热又能活血。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "牡丹皮",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-011",
    "minutes": 6
  },
  {
    "id": "herb-012",
    "subject": "zy2",
    "chapter": "清热药",
    "title": "青蒿：来源、功效与证候辨析",
    "summary": "清热解暑 · 除蒸 · 截疟",
    "points": [
      "药用部位：干燥地上部分。",
      "功效主线：清热解暑；除蒸；截疟。",
      "证候线索：暑热、骨蒸潮热、夜热早凉及疟疾寒热。",
      "辨析重点：虚热线索不同于单纯实热高热；不要等同于青蒿素制剂。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "青蒿",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-012",
    "minutes": 6
  },
  {
    "id": "herb-013",
    "subject": "zy2",
    "chapter": "温里药",
    "title": "干姜：来源、功效与证候辨析",
    "summary": "温中散寒 · 回阳通脉 · 温肺化饮",
    "points": [
      "药用部位：干燥根茎。",
      "功效主线：温中散寒；回阳通脉；温肺化饮。",
      "证候线索：脘腹冷痛、虚寒吐泻及寒饮喘咳。",
      "辨析重点：与炮姜温经止血的作用侧重分开；与生姜解表止呕分开。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "干姜",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-013",
    "minutes": 6
  },
  {
    "id": "herb-014",
    "subject": "zy2",
    "chapter": "温里药",
    "title": "肉桂：来源、功效与证候辨析",
    "summary": "补火助阳 · 引火归元",
    "points": [
      "药用部位：干燥树皮。",
      "功效主线：补火助阳；引火归元。",
      "证候线索：肾阳不足，或寒凝导致的心腹冷痛。",
      "辨析重点：同源桂枝用嫩枝，肉桂用树皮，作用侧重不同。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "肉桂",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-014",
    "minutes": 6
  },
  {
    "id": "herb-015",
    "subject": "zy2",
    "chapter": "温里药",
    "title": "小茴香：来源、功效与证候辨析",
    "summary": "散寒止痛 · 理气和胃",
    "points": [
      "药用部位：干燥成熟果实。",
      "功效主线：散寒止痛；理气和胃。",
      "证候线索：寒疝腹痛、少腹冷痛及胃寒胀痛。",
      "辨析重点：寒证是辨析前提，不能将所有腹痛都归入本药。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "小茴香",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-015",
    "minutes": 6
  },
  {
    "id": "herb-016",
    "subject": "zy2",
    "chapter": "活血化瘀药",
    "title": "川芎：来源、功效与证候辨析",
    "summary": "活血行气 · 祛风止痛",
    "points": [
      "药用部位：根茎。",
      "功效主线：活血行气；祛风止痛。",
      "证候线索：瘀血或气滞疼痛、头痛及风湿痹痛。",
      "辨析重点：行气与活血相结合，不是单纯补血药。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "川芎",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-016",
    "minutes": 6
  },
  {
    "id": "herb-017",
    "subject": "zy2",
    "chapter": "活血化瘀药",
    "title": "延胡索：来源、功效与证候辨析",
    "summary": "活血 · 行气 · 止痛",
    "points": [
      "药用部位：干燥块茎。",
      "功效主线：活血；行气；止痛。",
      "证候线索：气滞血瘀的胸胁、脘腹疼痛或痛经。",
      "辨析重点：块茎与川芎的根茎分开记；活血行气是止痛的基础。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "延胡索",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-017",
    "minutes": 6
  },
  {
    "id": "herb-018",
    "subject": "zy2",
    "chapter": "活血化瘀药",
    "title": "丹参：来源、功效与证候辨析",
    "summary": "活血通经 · 祛瘀止痛 · 清心除烦",
    "points": [
      "药用部位：根。",
      "功效主线：活血通经；祛瘀止痛；清心除烦。",
      "证候线索：血瘀经闭、胸腹刺痛，或热扰心神。",
      "辨析重点：除烦不是温阳功效；不能仅凭现代疾病名称选药。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "丹参",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-018",
    "minutes": 6
  },
  {
    "id": "herb-019",
    "subject": "zy2",
    "chapter": "活血化瘀药",
    "title": "桃仁：来源、功效与证候辨析",
    "summary": "活血化瘀 · 润肠通便",
    "points": [
      "药用部位：成熟种子。",
      "功效主线：活血化瘀；润肠通便。",
      "证候线索：瘀血经闭、跌打损伤及肠燥便秘。",
      "辨析重点：种子入药；既活血又润肠，不等于峻下逐水。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "桃仁",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-019",
    "minutes": 6
  },
  {
    "id": "herb-020",
    "subject": "zy2",
    "chapter": "活血化瘀药",
    "title": "红花：来源、功效与证候辨析",
    "summary": "活血通经 · 散瘀止痛",
    "points": [
      "药用部位：干燥花。",
      "功效主线：活血通经；散瘀止痛。",
      "证候线索：瘀血经闭、痛经及跌扑损伤。",
      "辨析重点：红花用花，与桃仁用种子区分；孕期用药需审查。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "红花",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-020",
    "minutes": 6
  },
  {
    "id": "herb-021",
    "subject": "zy2",
    "chapter": "活血化瘀药",
    "title": "益母草：来源、功效与证候辨析",
    "summary": "活血调经 · 利尿消肿",
    "points": [
      "药用部位：干燥地上部分。",
      "功效主线：活血调经；利尿消肿。",
      "证候线索：月经不调、产后瘀阻及水肿尿少。",
      "辨析重点：利尿消肿是与多数调经活血药区分的线索；孕妇禁用。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "益母草",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-021",
    "minutes": 6
  },
  {
    "id": "herb-022",
    "subject": "zy2",
    "chapter": "平肝息风药",
    "title": "石决明：来源、功效与证候辨析",
    "summary": "平肝潜阳 · 清肝明目",
    "points": [
      "药用部位：鲍的贝壳。",
      "功效主线：平肝潜阳；清肝明目。",
      "证候线索：肝阳上亢头晕及目赤、视物昏花。",
      "辨析重点：动物贝壳入药，不能按植物根茎记来源。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "石决明",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-022",
    "minutes": 6
  },
  {
    "id": "herb-023",
    "subject": "zy2",
    "chapter": "平肝息风药",
    "title": "牡蛎：来源、功效与证候辨析",
    "summary": "平肝潜阳 · 软坚 · 固涩 · 制酸",
    "points": [
      "药用部位：牡蛎的贝壳。",
      "功效主线：平肝潜阳；软坚；固涩；制酸。",
      "证候线索：学习时分别联系肝阳、痰核及滑脱等证候。",
      "辨析重点：潜阳与固涩不同；生品与煅品的作用侧重须另行核对。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "牡蛎",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-023",
    "minutes": 6
  },
  {
    "id": "herb-024",
    "subject": "zy2",
    "chapter": "平肝息风药",
    "title": "钩藤：来源、功效与证候辨析",
    "summary": "清热平肝 · 息风定惊",
    "points": [
      "药用部位：干燥带钩茎枝。",
      "功效主线：清热平肝；息风定惊。",
      "证候线索：肝热风动、惊痫抽搐或头痛眩晕。",
      "辨析重点：带钩茎枝是特征性部位；清热与息风须同时记。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "钩藤",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-024",
    "minutes": 6
  },
  {
    "id": "herb-025",
    "subject": "zy2",
    "chapter": "平肝息风药",
    "title": "地龙：来源、功效与证候辨析",
    "summary": "清热定惊 · 通络 · 平喘 · 利尿",
    "points": [
      "药用部位：蚯蚓的干燥体。",
      "功效主线：清热定惊；通络；平喘；利尿。",
      "证候线索：高热惊厥、经络不通，或肺热喘咳。",
      "辨析重点：动物全体入药；平喘利尿也是其辨析特点。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "地龙",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-025",
    "minutes": 6
  },
  {
    "id": "herb-026",
    "subject": "zy2",
    "chapter": "平肝息风药",
    "title": "天麻：来源、功效与证候辨析",
    "summary": "平肝息风 · 止痉",
    "points": [
      "药用部位：块茎。",
      "功效主线：平肝息风；止痉。",
      "证候线索：头晕头痛、肢体麻木及惊痫抽搐等。",
      "辨析重点：息风止痉与发汗解表不同；块茎不是贝壳。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "天麻",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-026",
    "minutes": 6
  },
  {
    "id": "herb-027",
    "subject": "zy2",
    "chapter": "理气药",
    "title": "青皮：来源、功效与证候辨析",
    "summary": "疏肝破气 · 消积化滞",
    "points": [
      "药用部位：干燥幼果或未成熟果皮。",
      "功效主线：疏肝破气；消积化滞。",
      "证候线索：肝郁气滞的胁痛、疝气及食积腹痛。",
      "辨析重点：青皮与陈皮的成熟程度及理气作用侧重不同。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "青皮",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-027",
    "minutes": 6
  },
  {
    "id": "herb-028",
    "subject": "zy2",
    "chapter": "理气药",
    "title": "枳实：来源、功效与证候辨析",
    "summary": "破气消积 · 化痰散痞",
    "points": [
      "药用部位：干燥幼果。",
      "功效主线：破气消积；化痰散痞。",
      "证候线索：积滞痞满、食积腹痛及痰气互结。",
      "辨析重点：破气消积不能与补气固表混记。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "枳实",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-028",
    "minutes": 6
  },
  {
    "id": "herb-029",
    "subject": "zy2",
    "chapter": "理气药",
    "title": "香附：来源、功效与证候辨析",
    "summary": "行气解郁 · 调经止痛",
    "points": [
      "药用部位：干燥根茎。",
      "功效主线：行气解郁；调经止痛。",
      "证候线索：肝郁气滞的胸胁胀痛、乳房胀痛或痛经。",
      "辨析重点：调经的作用基础偏行气解郁，不等同于当归补血调经。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "香附",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-029",
    "minutes": 6
  },
  {
    "id": "herb-030",
    "subject": "zy2",
    "chapter": "化痰止咳平喘药",
    "title": "桔梗：来源、功效与证候辨析",
    "summary": "宣肺 · 利咽 · 祛痰 · 排脓",
    "points": [
      "药用部位：根。",
      "功效主线：宣肺；利咽；祛痰；排脓。",
      "证候线索：咳嗽痰多、咽喉肿痛及肺痈。",
      "辨析重点：宣肺与苦杏仁降气分别记，二者作用方向不同。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "桔梗",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-030",
    "minutes": 6
  },
  {
    "id": "herb-031",
    "subject": "zy2",
    "chapter": "化痰止咳平喘药",
    "title": "川贝母：来源、功效与证候辨析",
    "summary": "清热润肺 · 化痰止咳",
    "points": [
      "药用部位：鳞茎。",
      "功效主线：清热润肺；化痰止咳。",
      "证候线索：肺热燥咳、干咳少痰及阴虚久咳。",
      "辨析重点：与浙贝母比较时，突出润肺、燥咳的辨析线索。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "川贝母",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-031",
    "minutes": 6
  },
  {
    "id": "herb-032",
    "subject": "zy2",
    "chapter": "化痰止咳平喘药",
    "title": "浙贝母：来源、功效与证候辨析",
    "summary": "清热化痰 · 散结",
    "points": [
      "药用部位：干燥鳞茎。",
      "功效主线：清热化痰；散结。",
      "证候线索：痰热咳嗽、肺痈及瘰疬、乳痈等。",
      "辨析重点：与川贝母同为鳞茎；侧重清热散结，不宜与乌头类同用。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "浙贝母",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-032",
    "minutes": 6
  },
  {
    "id": "herb-033",
    "subject": "zy2",
    "chapter": "化痰止咳平喘药",
    "title": "苦杏仁：来源、功效与证候辨析",
    "summary": "降气止咳平喘 · 润肠通便",
    "points": [
      "药用部位：干燥成熟种子。",
      "功效主线：降气止咳平喘；润肠通便。",
      "证候线索：咳嗽气喘及肠燥便秘。",
      "辨析重点：既作用于肺气又能润肠；有毒性，不能作为普通坚果随意食用。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "苦杏仁",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-033",
    "minutes": 6
  },
  {
    "id": "herb-034",
    "subject": "zy2",
    "chapter": "利水渗湿药",
    "title": "猪苓：来源、功效与证候辨析",
    "summary": "利水渗湿",
    "points": [
      "药用部位：干燥菌核。",
      "功效主线：利水渗湿。",
      "证候线索：水湿停留的小便不利、水肿等。",
      "辨析重点：与茯苓同为菌核；不要把茯苓健脾宁心的全部功效搬给猪苓。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "猪苓",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-034",
    "minutes": 6
  },
  {
    "id": "herb-035",
    "subject": "zy2",
    "chapter": "利水渗湿药",
    "title": "泽泻：来源、功效与证候辨析",
    "summary": "利水 · 清热",
    "points": [
      "药用部位：块茎。",
      "功效主线：利水；清热。",
      "证候线索：小便不利、水肿及湿热淋证。",
      "辨析重点：块茎与猪苓菌核区分；水湿、湿热是辨析方向。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "泽泻",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-035",
    "minutes": 6
  },
  {
    "id": "herb-036",
    "subject": "zy2",
    "chapter": "利水渗湿药",
    "title": "车前子：来源、功效与证候辨析",
    "summary": "清热利尿 · 渗湿通淋 · 明目 · 祛痰",
    "points": [
      "药用部位：干燥成熟种子。",
      "功效主线：清热利尿；渗湿通淋；明目；祛痰。",
      "证候线索：热淋、水肿、目赤及痰热咳嗽。",
      "辨析重点：种子入药；明目和祛痰是利水药中值得单记的特点。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "车前子",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-036",
    "minutes": 6
  },
  {
    "id": "herb-037",
    "subject": "zy2",
    "chapter": "利水渗湿药",
    "title": "茵陈蒿：来源、功效与证候辨析",
    "summary": "清利湿热 · 退黄",
    "points": [
      "药用部位：干燥幼苗（本参考资料所列部位）。",
      "功效主线：清利湿热；退黄。",
      "证候线索：湿热黄疸及湿疮瘙痒。",
      "辨析重点：退黄为核心辨析线索；现行药典茵陈采收部位须另行核对。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "茵陈蒿",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-037",
    "minutes": 6
  },
  {
    "id": "herb-038",
    "subject": "zy2",
    "chapter": "利水渗湿药",
    "title": "金钱草：来源、功效与证候辨析",
    "summary": "清热利湿 · 通淋 · 消肿",
    "points": [
      "药用部位：全草。",
      "功效主线：清热利湿；通淋；消肿。",
      "证候线索：热淋、砂淋及湿热黄疸等。",
      "辨析重点：不同地区同名药材需辨来源，本条对应过路黄。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "金钱草",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-038",
    "minutes": 6
  },
  {
    "id": "herb-039",
    "subject": "zy2",
    "chapter": "祛风湿药",
    "title": "独活：来源、功效与证候辨析",
    "summary": "祛风湿 · 通痹止痛",
    "points": [
      "药用部位：根。",
      "功效主线：祛风湿；通痹止痛。",
      "证候线索：风寒湿痹、腰膝疼痛。",
      "辨析重点：风寒湿与湿热证分开，不能只根据关节疼痛选药。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "独活",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-039",
    "minutes": 6
  },
  {
    "id": "herb-040",
    "subject": "zy2",
    "chapter": "祛风湿药",
    "title": "威灵仙：来源、功效与证候辨析",
    "summary": "祛风除湿 · 通络止痛",
    "points": [
      "药用部位：干燥根及根茎。",
      "功效主线：祛风除湿；通络止痛。",
      "证候线索：风湿痹痛、肢体麻木及筋脉拘挛。",
      "辨析重点：来源含根及根茎；不能将传统主治当作异物卡喉的自行处理办法。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "威灵仙",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-040",
    "minutes": 6
  },
  {
    "id": "herb-041",
    "subject": "zy2",
    "chapter": "祛风湿药",
    "title": "木瓜：来源、功效与证候辨析",
    "summary": "舒筋 · 和胃化湿",
    "points": [
      "药用部位：干燥近成熟果实。",
      "功效主线：舒筋；和胃化湿。",
      "证候线索：湿痹拘挛及吐泻转筋。",
      "辨析重点：药材来自贴梗海棠，不能与日常食用番木瓜混同。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "木瓜",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-041",
    "minutes": 6
  },
  {
    "id": "herb-042",
    "subject": "zy2",
    "chapter": "化湿药",
    "title": "苍术：来源、功效与证候辨析",
    "summary": "燥湿健脾 · 祛风散寒 · 明目",
    "points": [
      "药用部位：干燥根茎。",
      "功效主线：燥湿健脾；祛风散寒；明目。",
      "证候线索：湿阻中焦、风湿痹痛及风寒表证。",
      "辨析重点：燥湿与茯苓渗湿用语不同；不要将苍术、白术视为同一药。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "苍术",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-042",
    "minutes": 6
  },
  {
    "id": "herb-043",
    "subject": "zy2",
    "chapter": "化湿药",
    "title": "厚朴：来源、功效与证候辨析",
    "summary": "燥湿消痰 · 下气除满",
    "points": [
      "药用部位：干皮、根皮及枝皮。",
      "功效主线：燥湿消痰；下气除满。",
      "证候线索：湿滞、食积气滞的脘腹胀满及痰饮喘咳。",
      "辨析重点：除满与下气是核心线索；入药部位不限于干皮。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "厚朴",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-043",
    "minutes": 6
  },
  {
    "id": "herb-044",
    "subject": "zy2",
    "chapter": "化湿药",
    "title": "广藿香：来源、功效与证候辨析",
    "summary": "芳香化湿 · 止呕 · 发表解暑",
    "points": [
      "药用部位：干燥地上部分。",
      "功效主线：芳香化湿；止呕；发表解暑。",
      "证候线索：湿浊中阻的脘痞呕吐或暑湿不适。",
      "辨析重点：化湿止呕不同于苦寒清热；本条对应广藿香来源。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "广藿香",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-044",
    "minutes": 6
  },
  {
    "id": "herb-045",
    "subject": "zy2",
    "chapter": "化湿药",
    "title": "砂仁：来源、功效与证候辨析",
    "summary": "化湿开胃 · 温脾止泻 · 理气安胎",
    "points": [
      "药用部位：干燥成熟果实。",
      "功效主线：化湿开胃；温脾止泻；理气安胎。",
      "证候线索：湿阻中焦、脾胃虚寒泄泻及相关胎动不安。",
      "辨析重点：安胎需辨证，砂仁偏温，黄芩偏寒，不能互换。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "砂仁",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-045",
    "minutes": 6
  },
  {
    "id": "herb-046",
    "subject": "zy2",
    "chapter": "泻下药",
    "title": "大黄：来源、功效与证候辨析",
    "summary": "攻下积滞 · 泻火解毒 · 凉血止血 · 活血祛瘀",
    "points": [
      "药用部位：根及根茎。",
      "功效主线：攻下积滞；泻火解毒；凉血止血；活血祛瘀。",
      "证候线索：积滞便秘、实热及相关血热或血瘀证。",
      "辨析重点：攻下不等于润肠；功效多，应按证候分组记忆。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "大黄",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-046",
    "minutes": 6
  },
  {
    "id": "herb-047",
    "subject": "zy2",
    "chapter": "泻下药",
    "title": "芒硝：来源、功效与证候辨析",
    "summary": "软坚泻下 · 清热泻火",
    "points": [
      "药用部位：硫酸钠矿精制结晶。",
      "功效主线：软坚泻下；清热泻火。",
      "证候线索：热结便秘时联系软坚、泻下的作用。",
      "辨析重点：矿物药；与植物根及根茎入药的大黄区别。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "芒硝",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-047",
    "minutes": 6
  },
  {
    "id": "herb-048",
    "subject": "zy2",
    "chapter": "补虚药",
    "title": "党参：来源、功效与证候辨析",
    "summary": "补中益气 · 健脾益肺",
    "points": [
      "药用部位：干燥根。",
      "功效主线：补中益气；健脾益肺。",
      "证候线索：脾肺气虚、食少便溏及气短。",
      "辨析重点：不能因同带参字就等同于人参的大补元气作用。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "党参",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-048",
    "minutes": 6
  },
  {
    "id": "herb-049",
    "subject": "zy2",
    "chapter": "补虚药",
    "title": "山药：来源、功效与证候辨析",
    "summary": "补脾养胃 · 生津益肺 · 补肾涩精",
    "points": [
      "药用部位：干燥根茎。",
      "功效主线：补脾养胃；生津益肺；补肾涩精。",
      "证候线索：脾虚久泻、肺虚喘咳及肾虚遗精等。",
      "辨析重点：脾、肺、肾三组作用串联，不是单纯消食药。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "山药",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-049",
    "minutes": 6
  },
  {
    "id": "herb-050",
    "subject": "zy2",
    "chapter": "补虚药",
    "title": "西洋参：来源、功效与证候辨析",
    "summary": "养阴 · 清火 · 生津",
    "points": [
      "药用部位：干燥根。",
      "功效主线：养阴；清火；生津。",
      "证候线索：肺胃津亏、烦渴及虚热相关表现。",
      "辨析重点：公开资料突出养阴清火；不要与温散风寒药混记。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "西洋参",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-050",
    "minutes": 6
  },
  {
    "id": "herb-051",
    "subject": "zy2",
    "chapter": "补虚药",
    "title": "黄芪：来源、功效与证候辨析",
    "summary": "补气固表 · 利水 · 托毒排脓 · 生肌",
    "points": [
      "药用部位：干燥根。",
      "功效主线：补气固表；利水；托毒排脓；生肌。",
      "证候线索：气虚自汗、气虚水肿及久溃不敛。",
      "辨析重点：固表与麻黄发汗方向不同；利水不等同于寒凉通淋。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "黄芪",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-051",
    "minutes": 6
  },
  {
    "id": "herb-052",
    "subject": "zy2",
    "chapter": "补虚药",
    "title": "杜仲：来源、功效与证候辨析",
    "summary": "补肝肾 · 强筋骨 · 安胎",
    "points": [
      "药用部位：树皮。",
      "功效主线：补肝肾；强筋骨；安胎。",
      "证候线索：肝肾不足的腰膝酸软或相关胎动不安。",
      "辨析重点：树皮入药；安胎对应虚证，不能覆盖所有孕期情况。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "杜仲",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-052",
    "minutes": 6
  },
  {
    "id": "herb-053",
    "subject": "zy2",
    "chapter": "补虚药",
    "title": "熟地黄：来源、功效与证候辨析",
    "summary": "滋阴补血 · 益精填髓",
    "points": [
      "药用部位：地黄块根的加工品。",
      "功效主线：滋阴补血；益精填髓。",
      "证候线索：肝肾阴虚、精血不足及血虚萎黄。",
      "辨析重点：熟地偏滋补，与生地清热凉血的侧重点分开。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "熟地黄",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-053",
    "minutes": 6
  },
  {
    "id": "herb-054",
    "subject": "zy2",
    "chapter": "补虚药",
    "title": "麦冬：来源、功效与证候辨析",
    "summary": "养阴生津 · 润肺清火",
    "points": [
      "药用部位：块根。",
      "功效主线：养阴生津；润肺清火。",
      "证候线索：肺燥干咳、津伤口渴及心烦失眠。",
      "辨析重点：块根不是根茎；阴虚燥咳不同于寒痰湿痰。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "麦冬",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-054",
    "minutes": 6
  },
  {
    "id": "herb-055",
    "subject": "zy2",
    "chapter": "补虚药",
    "title": "枸杞子：来源、功效与证候辨析",
    "summary": "滋补肝肾 · 益精明目",
    "points": [
      "药用部位：干燥成熟果实。",
      "功效主线：滋补肝肾；益精明目。",
      "证候线索：肝肾精血不足、腰膝酸软及目昏。",
      "辨析重点：补益明目与菊花散风清热明目的作用基础不同。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "枸杞子",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-055",
    "minutes": 6
  },
  {
    "id": "herb-056",
    "subject": "zy2",
    "chapter": "安神药",
    "title": "酸枣仁：来源、功效与证候辨析",
    "summary": "宁心 · 敛汗 · 生津",
    "points": [
      "药用部位：干燥种子。",
      "功效主线：宁心；敛汗；生津。",
      "证候线索：虚烦不眠、惊悸多梦及体虚多汗。",
      "辨析重点：宁心安神与敛汗联系虚证，不能套用所有失眠证型。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "酸枣仁",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-056",
    "minutes": 6
  },
  {
    "id": "herb-057",
    "subject": "zy2",
    "chapter": "安神药",
    "title": "远志：来源、功效与证候辨析",
    "summary": "安神益智 · 祛痰 · 消肿",
    "points": [
      "药用部位：干燥根。",
      "功效主线：安神益智；祛痰；消肿。",
      "证候线索：心肾不交的失眠健忘或咳痰不爽等。",
      "辨析重点：安神药也可能有祛痰作用，不要只按一个功效记忆。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "远志",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-057",
    "minutes": 6
  },
  {
    "id": "herb-058",
    "subject": "zy2",
    "chapter": "收涩药",
    "title": "山茱萸：来源、功效与证候辨析",
    "summary": "补益肝肾 · 涩精固脱",
    "points": [
      "药用部位：干燥成熟果肉。",
      "功效主线：补益肝肾；涩精固脱。",
      "证候线索：肝肾不足及遗精、滑脱相关表现。",
      "辨析重点：果肉入药，不是种子；补益与收涩兼具。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "山茱萸",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-058",
    "minutes": 6
  },
  {
    "id": "herb-059",
    "subject": "zy2",
    "chapter": "止血药",
    "title": "三七：来源、功效与证候辨析",
    "summary": "散瘀止血 · 消肿定痛",
    "points": [
      "药用部位：干燥根（本参考资料所列部位）。",
      "功效主线：散瘀止血；消肿定痛。",
      "证候线索：瘀血相关出血及跌扑肿痛。",
      "辨析重点：止血兼散瘀，不等于当归补血；孕期慎用。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "三七",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-059",
    "minutes": 6
  },
  {
    "id": "herb-060",
    "subject": "zy2",
    "chapter": "止血药",
    "title": "艾叶：来源、功效与证候辨析",
    "summary": "散寒止痛 · 温经止血",
    "points": [
      "药用部位：干燥叶。",
      "功效主线：散寒止痛；温经止血。",
      "证候线索：虚寒性出血及少腹冷痛。",
      "辨析重点：温经止血与凉血止血相区别；叶入药，炭品另记侧重。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "艾叶",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-060",
    "minutes": 6
  },
  {
    "id": "herb-061",
    "subject": "zy2",
    "chapter": "消食药",
    "title": "山楂：来源、功效与证候辨析",
    "summary": "消食健胃 · 行气散瘀",
    "points": [
      "药用部位：干燥成熟果实。",
      "功效主线：消食健胃；行气散瘀。",
      "证候线索：肉食积滞、胃脘胀满及相关瘀血证。",
      "辨析重点：消食与散瘀兼有；焦制品侧重消食导滞。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "山楂",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-061",
    "minutes": 6
  },
  {
    "id": "herb-062",
    "subject": "zy2",
    "chapter": "消食药",
    "title": "麦芽：来源、功效与证候辨析",
    "summary": "行气消食 · 健脾开胃 · 退乳消胀",
    "points": [
      "药用部位：大麦成熟果实发芽后的干燥品。",
      "功效主线：行气消食；健脾开胃；退乳消胀。",
      "证候线索：食积、脾虚食少及乳房胀痛相关情况。",
      "辨析重点：生、炒、焦品作用侧重不同；回乳作用需特别区分。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "麦芽",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-062",
    "minutes": 6
  },
  {
    "id": "herb-063",
    "subject": "zy2",
    "chapter": "消食药",
    "title": "莱菔子：来源、功效与证候辨析",
    "summary": "消食除胀 · 降气化痰",
    "points": [
      "药用部位：干燥成熟种子。",
      "功效主线：消食除胀；降气化痰。",
      "证候线索：饮食积滞、腹胀及痰壅喘咳。",
      "辨析重点：消食和降气化痰串联；不能当作补气药记。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "莱菔子",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-063",
    "minutes": 6
  },
  {
    "id": "herb-064",
    "subject": "zy2",
    "chapter": "消食药",
    "title": "鸡内金：来源、功效与证候辨析",
    "summary": "健脾消食 · 涩精止遗",
    "points": [
      "药用部位：家鸡的干燥沙囊内壁。",
      "功效主线：健脾消食；涩精止遗。",
      "证候线索：食积不消、小儿疳积及遗尿遗精。",
      "辨析重点：属于动物药，入药为沙囊内壁，不是鸡蛋壳。"
    ],
    "tip": "本条为公开药材资料的学习整理，不含剂量或临床用药方案；未与 2025/2026 润德红宝书逐页对照。",
    "tags": [
      "鸡内金",
      "来源鉴别",
      "功效辨析",
      "公开资料"
    ],
    "sourceId": "university-herb-064",
    "minutes": 6
  }
];
export const herbQuestions:Question[]=[
  {
    "id": "herb-001-function",
    "subject": "zy2",
    "knowledgeId": "herb-001",
    "type": "single",
    "title": "复习薄荷时，哪组功效与本条学习资料对应？",
    "options": [
      "疏散风热；清利头目；利咽透疹",
      "生用清热泻火；除烦止渴",
      "清热泻火；生津润燥",
      "泻火除烦；清热利湿；凉血解毒"
    ],
    "answer": [
      0
    ],
    "explanation": "薄荷的本条功效主线为疏散风热；清利头目；利咽透疹。辨证线索：风热表证，兼头痛、咽痛或疹出不畅。辨析：与温散风寒药分开记，不能见感冒就选薄荷。",
    "sourceId": "university-herb-001",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-001-part",
    "subject": "zy2",
    "knowledgeId": "herb-001",
    "type": "single",
    "title": "根据本条公开教学资料，薄荷的药用部位是？",
    "options": [
      "干燥根及根茎",
      "干燥成熟果实",
      "干燥地上部分",
      "干燥树皮"
    ],
    "answer": [
      2
    ],
    "explanation": "本条资料对应的药用部位是干燥地上部分。与温散风寒药分开记，不能见感冒就选薄荷。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-001",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-002-function",
    "subject": "zy2",
    "knowledgeId": "herb-002",
    "type": "single",
    "title": "复习菊花时，哪组功效与本条学习资料对应？",
    "options": [
      "清热泻火；生津润燥",
      "散风清热；平肝明目",
      "泻火除烦；清热利湿；凉血解毒",
      "清热解毒；消肿散结"
    ],
    "answer": [
      1
    ],
    "explanation": "菊花的本条功效主线为散风清热；平肝明目。辨证线索：风热头痛、目赤，或肝阳上亢的眩晕。辨析：同属解表药，还须记住平肝与明目的特点。",
    "sourceId": "university-herb-002",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-002-part",
    "subject": "zy2",
    "knowledgeId": "herb-002",
    "type": "single",
    "title": "根据本条公开教学资料，菊花的药用部位是？",
    "options": [
      "干燥成熟果实",
      "干燥树皮",
      "干燥菌核",
      "干燥头状花序"
    ],
    "answer": [
      3
    ],
    "explanation": "本条资料对应的药用部位是干燥头状花序。同属解表药，还须记住平肝与明目的特点。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-002",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-003-function",
    "subject": "zy2",
    "knowledgeId": "herb-003",
    "type": "single",
    "title": "复习葛根时，哪组功效与本条学习资料对应？",
    "options": [
      "泻火除烦；清热利湿；凉血解毒",
      "清热解毒；消肿散结",
      "解肌退热；生津；透疹；升阳止泻",
      "清热解毒；凉血利咽"
    ],
    "answer": [
      2
    ],
    "explanation": "葛根的本条功效主线为解肌退热；生津；透疹；升阳止泻。辨证线索：外感项背强痛、津伤口渴，或相关泄泻证。辨析：项背强痛是识别线索；升阳止泻与泻下通便方向不同。",
    "sourceId": "university-herb-003",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-003-part",
    "subject": "zy2",
    "knowledgeId": "herb-003",
    "type": "single",
    "title": "根据本条公开教学资料，葛根的药用部位是？",
    "options": [
      "根",
      "干燥树皮",
      "干燥菌核",
      "动物贝壳"
    ],
    "answer": [
      0
    ],
    "explanation": "本条资料对应的药用部位是根。项背强痛是识别线索；升阳止泻与泻下通便方向不同。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-003",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-004-function",
    "subject": "zy2",
    "knowledgeId": "herb-004",
    "type": "single",
    "title": "复习柴胡时，哪组功效与本条学习资料对应？",
    "options": [
      "清热解毒；消肿散结",
      "清热解毒；凉血利咽",
      "清热解毒；消痈排脓；利尿通淋",
      "疏散退热；疏肝解郁；升举阳气"
    ],
    "answer": [
      3
    ],
    "explanation": "柴胡的本条功效主线为疏散退热；疏肝解郁；升举阳气。辨证线索：寒热往来、肝郁胁痛，或中气下陷。辨析：退热、疏肝、升阳分别对应不同证候，不能只记退热。",
    "sourceId": "university-herb-004",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-004-part",
    "subject": "zy2",
    "knowledgeId": "herb-004",
    "type": "single",
    "title": "根据本条公开教学资料，柴胡的药用部位是？",
    "options": [
      "干燥菌核",
      "干燥根",
      "动物贝壳",
      "矿物结晶"
    ],
    "answer": [
      1
    ],
    "explanation": "本条资料对应的药用部位是干燥根。退热、疏肝、升阳分别对应不同证候，不能只记退热。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-004",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-005-function",
    "subject": "zy2",
    "knowledgeId": "herb-005",
    "type": "single",
    "title": "复习石膏时，哪组功效与本条学习资料对应？",
    "options": [
      "生用清热泻火；除烦止渴",
      "温中散寒；回阳通脉；温肺化饮",
      "补火助阳；引火归元",
      "散寒止痛；理气和胃"
    ],
    "answer": [
      0
    ],
    "explanation": "石膏的本条功效主线为生用清热泻火；除烦止渴。辨证线索：高热烦渴、肺热喘咳及胃火牙痛。辨析：生石膏与煅石膏用途不同；煅品侧重外用收湿敛疮。",
    "sourceId": "university-herb-005",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-005-part",
    "subject": "zy2",
    "knowledgeId": "herb-005",
    "type": "single",
    "title": "根据本条公开教学资料，石膏的药用部位是？",
    "options": [
      "干燥菌核",
      "动物贝壳",
      "含水硫酸钙矿物",
      "动物沙囊内壁"
    ],
    "answer": [
      2
    ],
    "explanation": "本条资料对应的药用部位是含水硫酸钙矿物。生石膏与煅石膏用途不同；煅品侧重外用收湿敛疮。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-005",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-006-function",
    "subject": "zy2",
    "knowledgeId": "herb-006",
    "type": "single",
    "title": "复习知母时，哪组功效与本条学习资料对应？",
    "options": [
      "疏散风热；清利头目；利咽透疹",
      "清热泻火；生津润燥",
      "散风清热；平肝明目",
      "疏散退热；疏肝解郁；升举阳气"
    ],
    "answer": [
      1
    ],
    "explanation": "知母的本条功效主线为清热泻火；生津润燥。辨证线索：热病烦渴、肺热燥咳及内热津伤。辨析：同为清热药，知母还要联想到润燥生津。",
    "sourceId": "university-herb-006",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-006-part",
    "subject": "zy2",
    "knowledgeId": "herb-006",
    "type": "single",
    "title": "根据本条公开教学资料，知母的药用部位是？",
    "options": [
      "矿物结晶",
      "动物沙囊内壁",
      "干燥成熟果实",
      "干燥根茎"
    ],
    "answer": [
      3
    ],
    "explanation": "本条资料对应的药用部位是干燥根茎。同为清热药，知母还要联想到润燥生津。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-006",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-007-function",
    "subject": "zy2",
    "knowledgeId": "herb-007",
    "type": "single",
    "title": "复习栀子时，哪组功效与本条学习资料对应？",
    "options": [
      "散风清热；平肝明目",
      "解肌退热；生津；透疹；升阳止泻",
      "泻火除烦；清热利湿；凉血解毒",
      "疏散退热；疏肝解郁；升举阳气"
    ],
    "answer": [
      2
    ],
    "explanation": "栀子的本条功效主线为泻火除烦；清热利湿；凉血解毒。辨证线索：热病心烦、湿热黄疸及血热出血。辨析：心烦、黄疸、血热是不同作用线索；焦制品另记止血侧重。",
    "sourceId": "university-herb-007",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-007-part",
    "subject": "zy2",
    "knowledgeId": "herb-007",
    "type": "single",
    "title": "根据本条公开教学资料，栀子的药用部位是？",
    "options": [
      "干燥成熟果实",
      "动物沙囊内壁",
      "干燥根及根茎",
      "干燥叶"
    ],
    "answer": [
      0
    ],
    "explanation": "本条资料对应的药用部位是干燥成熟果实。心烦、黄疸、血热是不同作用线索；焦制品另记止血侧重。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-007",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-008-function",
    "subject": "zy2",
    "knowledgeId": "herb-008",
    "type": "single",
    "title": "复习连翘时，哪组功效与本条学习资料对应？",
    "options": [
      "解肌退热；生津；透疹；升阳止泻",
      "疏散退热；疏肝解郁；升举阳气",
      "温中散寒；回阳通脉；温肺化饮",
      "清热解毒；消肿散结"
    ],
    "answer": [
      3
    ],
    "explanation": "连翘的本条功效主线为清热解毒；消肿散结。辨证线索：热毒疮肿，或外感风热、温病初起。辨析：散结作用不同于补虚药的扶正作用。",
    "sourceId": "university-herb-008",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-008-part",
    "subject": "zy2",
    "knowledgeId": "herb-008",
    "type": "single",
    "title": "根据本条公开教学资料，连翘的药用部位是？",
    "options": [
      "干燥根及根茎",
      "干燥果实",
      "干燥叶",
      "干燥树皮"
    ],
    "answer": [
      1
    ],
    "explanation": "本条资料对应的药用部位是干燥果实。散结作用不同于补虚药的扶正作用。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-008",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-009-function",
    "subject": "zy2",
    "knowledgeId": "herb-009",
    "type": "single",
    "title": "复习板蓝根时，哪组功效与本条学习资料对应？",
    "options": [
      "清热解毒；凉血利咽",
      "疏散退热；疏肝解郁；升举阳气",
      "温中散寒；回阳通脉；温肺化饮",
      "补火助阳；引火归元"
    ],
    "answer": [
      0
    ],
    "explanation": "板蓝根的本条功效主线为清热解毒；凉血利咽。辨证线索：热毒所致咽喉肿痛、温毒发斑等。辨析：根入药；不要与同源叶类药材的部位混记。",
    "sourceId": "university-herb-009",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-009-part",
    "subject": "zy2",
    "knowledgeId": "herb-009",
    "type": "single",
    "title": "根据本条公开教学资料，板蓝根的药用部位是？",
    "options": [
      "干燥叶",
      "干燥树皮",
      "干燥根",
      "干燥菌核"
    ],
    "answer": [
      2
    ],
    "explanation": "本条资料对应的药用部位是干燥根。根入药；不要与同源叶类药材的部位混记。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-009",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-010-function",
    "subject": "zy2",
    "knowledgeId": "herb-010",
    "type": "single",
    "title": "复习鱼腥草时，哪组功效与本条学习资料对应？",
    "options": [
      "温中散寒；回阳通脉；温肺化饮",
      "清热解毒；消痈排脓；利尿通淋",
      "补火助阳；引火归元",
      "散寒止痛；理气和胃"
    ],
    "answer": [
      1
    ],
    "explanation": "鱼腥草的本条功效主线为清热解毒；消痈排脓；利尿通淋。辨证线索：肺痈吐脓、痰热咳嗽，或热淋。辨析：排脓、通淋并列；不能只记清热。",
    "sourceId": "university-herb-010",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-010-part",
    "subject": "zy2",
    "knowledgeId": "herb-010",
    "type": "single",
    "title": "根据本条公开教学资料，鱼腥草的药用部位是？",
    "options": [
      "干燥树皮",
      "干燥菌核",
      "动物贝壳",
      "地上部分"
    ],
    "answer": [
      3
    ],
    "explanation": "本条资料对应的药用部位是地上部分。排脓、通淋并列；不能只记清热。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-010",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-011-function",
    "subject": "zy2",
    "knowledgeId": "herb-011",
    "type": "single",
    "title": "复习牡丹皮时，哪组功效与本条学习资料对应？",
    "options": [
      "疏散风热；清利头目；利咽透疹",
      "散风清热；平肝明目",
      "清热凉血；活血化瘀",
      "解肌退热；生津；透疹；升阳止泻"
    ],
    "answer": [
      2
    ],
    "explanation": "牡丹皮的本条功效主线为清热凉血；活血化瘀。辨证线索：血热出血、无汗骨蒸，或瘀血疼痛。辨析：根皮不是根茎；既清血分热又能活血。",
    "sourceId": "university-herb-011",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-011-part",
    "subject": "zy2",
    "knowledgeId": "herb-011",
    "type": "single",
    "title": "根据本条公开教学资料，牡丹皮的药用部位是？",
    "options": [
      "干燥根皮",
      "干燥菌核",
      "动物贝壳",
      "矿物结晶"
    ],
    "answer": [
      0
    ],
    "explanation": "本条资料对应的药用部位是干燥根皮。根皮不是根茎；既清血分热又能活血。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-011",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-012-function",
    "subject": "zy2",
    "knowledgeId": "herb-012",
    "type": "single",
    "title": "复习青蒿时，哪组功效与本条学习资料对应？",
    "options": [
      "散风清热；平肝明目",
      "解肌退热；生津；透疹；升阳止泻",
      "疏散退热；疏肝解郁；升举阳气",
      "清热解暑；除蒸；截疟"
    ],
    "answer": [
      3
    ],
    "explanation": "青蒿的本条功效主线为清热解暑；除蒸；截疟。辨证线索：暑热、骨蒸潮热、夜热早凉及疟疾寒热。辨析：虚热线索不同于单纯实热高热；不要等同于青蒿素制剂。",
    "sourceId": "university-herb-012",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-012-part",
    "subject": "zy2",
    "knowledgeId": "herb-012",
    "type": "single",
    "title": "根据本条公开教学资料，青蒿的药用部位是？",
    "options": [
      "动物贝壳",
      "干燥地上部分",
      "矿物结晶",
      "动物沙囊内壁"
    ],
    "answer": [
      1
    ],
    "explanation": "本条资料对应的药用部位是干燥地上部分。虚热线索不同于单纯实热高热；不要等同于青蒿素制剂。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-012",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-013-function",
    "subject": "zy2",
    "knowledgeId": "herb-013",
    "type": "single",
    "title": "复习干姜时，哪组功效与本条学习资料对应？",
    "options": [
      "温中散寒；回阳通脉；温肺化饮",
      "解肌退热；生津；透疹；升阳止泻",
      "疏散退热；疏肝解郁；升举阳气",
      "生用清热泻火；除烦止渴"
    ],
    "answer": [
      0
    ],
    "explanation": "干姜的本条功效主线为温中散寒；回阳通脉；温肺化饮。辨证线索：脘腹冷痛、虚寒吐泻及寒饮喘咳。辨析：与炮姜温经止血的作用侧重分开；与生姜解表止呕分开。",
    "sourceId": "university-herb-013",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-013-part",
    "subject": "zy2",
    "knowledgeId": "herb-013",
    "type": "single",
    "title": "根据本条公开教学资料，干姜的药用部位是？",
    "options": [
      "矿物结晶",
      "动物沙囊内壁",
      "干燥根茎",
      "干燥成熟果实"
    ],
    "answer": [
      2
    ],
    "explanation": "本条资料对应的药用部位是干燥根茎。与炮姜温经止血的作用侧重分开；与生姜解表止呕分开。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-013",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-014-function",
    "subject": "zy2",
    "knowledgeId": "herb-014",
    "type": "single",
    "title": "复习肉桂时，哪组功效与本条学习资料对应？",
    "options": [
      "疏散退热；疏肝解郁；升举阳气",
      "补火助阳；引火归元",
      "生用清热泻火；除烦止渴",
      "清热泻火；生津润燥"
    ],
    "answer": [
      1
    ],
    "explanation": "肉桂的本条功效主线为补火助阳；引火归元。辨证线索：肾阳不足，或寒凝导致的心腹冷痛。辨析：同源桂枝用嫩枝，肉桂用树皮，作用侧重不同。",
    "sourceId": "university-herb-014",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-014-part",
    "subject": "zy2",
    "knowledgeId": "herb-014",
    "type": "single",
    "title": "根据本条公开教学资料，肉桂的药用部位是？",
    "options": [
      "动物沙囊内壁",
      "干燥根及根茎",
      "干燥成熟果实",
      "干燥树皮"
    ],
    "answer": [
      3
    ],
    "explanation": "本条资料对应的药用部位是干燥树皮。同源桂枝用嫩枝，肉桂用树皮，作用侧重不同。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-014",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-015-function",
    "subject": "zy2",
    "knowledgeId": "herb-015",
    "type": "single",
    "title": "复习小茴香时，哪组功效与本条学习资料对应？",
    "options": [
      "生用清热泻火；除烦止渴",
      "清热泻火；生津润燥",
      "散寒止痛；理气和胃",
      "泻火除烦；清热利湿；凉血解毒"
    ],
    "answer": [
      2
    ],
    "explanation": "小茴香的本条功效主线为散寒止痛；理气和胃。辨证线索：寒疝腹痛、少腹冷痛及胃寒胀痛。辨析：寒证是辨析前提，不能将所有腹痛都归入本药。",
    "sourceId": "university-herb-015",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-015-part",
    "subject": "zy2",
    "knowledgeId": "herb-015",
    "type": "single",
    "title": "根据本条公开教学资料，小茴香的药用部位是？",
    "options": [
      "干燥成熟果实",
      "干燥根及根茎",
      "干燥叶",
      "干燥树皮"
    ],
    "answer": [
      0
    ],
    "explanation": "本条资料对应的药用部位是干燥成熟果实。寒证是辨析前提，不能将所有腹痛都归入本药。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-015",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-016-function",
    "subject": "zy2",
    "knowledgeId": "herb-016",
    "type": "single",
    "title": "复习川芎时，哪组功效与本条学习资料对应？",
    "options": [
      "疏散风热；清利头目；利咽透疹",
      "散风清热；平肝明目",
      "解肌退热；生津；透疹；升阳止泻",
      "活血行气；祛风止痛"
    ],
    "answer": [
      3
    ],
    "explanation": "川芎的本条功效主线为活血行气；祛风止痛。辨证线索：瘀血或气滞疼痛、头痛及风湿痹痛。辨析：行气与活血相结合，不是单纯补血药。",
    "sourceId": "university-herb-016",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-016-part",
    "subject": "zy2",
    "knowledgeId": "herb-016",
    "type": "single",
    "title": "根据本条公开教学资料，川芎的药用部位是？",
    "options": [
      "干燥叶",
      "根茎",
      "干燥树皮",
      "干燥菌核"
    ],
    "answer": [
      1
    ],
    "explanation": "本条资料对应的药用部位是根茎。行气与活血相结合，不是单纯补血药。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-016",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-017-function",
    "subject": "zy2",
    "knowledgeId": "herb-017",
    "type": "single",
    "title": "复习延胡索时，哪组功效与本条学习资料对应？",
    "options": [
      "活血；行气；止痛",
      "散风清热；平肝明目",
      "解肌退热；生津；透疹；升阳止泻",
      "疏散退热；疏肝解郁；升举阳气"
    ],
    "answer": [
      0
    ],
    "explanation": "延胡索的本条功效主线为活血；行气；止痛。辨证线索：气滞血瘀的胸胁、脘腹疼痛或痛经。辨析：块茎与川芎的根茎分开记；活血行气是止痛的基础。",
    "sourceId": "university-herb-017",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-017-part",
    "subject": "zy2",
    "knowledgeId": "herb-017",
    "type": "single",
    "title": "根据本条公开教学资料，延胡索的药用部位是？",
    "options": [
      "干燥树皮",
      "干燥菌核",
      "干燥块茎",
      "动物贝壳"
    ],
    "answer": [
      2
    ],
    "explanation": "本条资料对应的药用部位是干燥块茎。块茎与川芎的根茎分开记；活血行气是止痛的基础。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-017",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-018-function",
    "subject": "zy2",
    "knowledgeId": "herb-018",
    "type": "single",
    "title": "复习丹参时，哪组功效与本条学习资料对应？",
    "options": [
      "解肌退热；生津；透疹；升阳止泻",
      "活血通经；祛瘀止痛；清心除烦",
      "疏散退热；疏肝解郁；升举阳气",
      "生用清热泻火；除烦止渴"
    ],
    "answer": [
      1
    ],
    "explanation": "丹参的本条功效主线为活血通经；祛瘀止痛；清心除烦。辨证线索：血瘀经闭、胸腹刺痛，或热扰心神。辨析：除烦不是温阳功效；不能仅凭现代疾病名称选药。",
    "sourceId": "university-herb-018",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-018-part",
    "subject": "zy2",
    "knowledgeId": "herb-018",
    "type": "single",
    "title": "根据本条公开教学资料，丹参的药用部位是？",
    "options": [
      "干燥菌核",
      "动物贝壳",
      "矿物结晶",
      "根"
    ],
    "answer": [
      3
    ],
    "explanation": "本条资料对应的药用部位是根。除烦不是温阳功效；不能仅凭现代疾病名称选药。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-018",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-019-function",
    "subject": "zy2",
    "knowledgeId": "herb-019",
    "type": "single",
    "title": "复习桃仁时，哪组功效与本条学习资料对应？",
    "options": [
      "疏散退热；疏肝解郁；升举阳气",
      "生用清热泻火；除烦止渴",
      "活血化瘀；润肠通便",
      "清热泻火；生津润燥"
    ],
    "answer": [
      2
    ],
    "explanation": "桃仁的本条功效主线为活血化瘀；润肠通便。辨证线索：瘀血经闭、跌打损伤及肠燥便秘。辨析：种子入药；既活血又润肠，不等于峻下逐水。",
    "sourceId": "university-herb-019",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-019-part",
    "subject": "zy2",
    "knowledgeId": "herb-019",
    "type": "single",
    "title": "根据本条公开教学资料，桃仁的药用部位是？",
    "options": [
      "成熟种子",
      "动物贝壳",
      "矿物结晶",
      "动物沙囊内壁"
    ],
    "answer": [
      0
    ],
    "explanation": "本条资料对应的药用部位是成熟种子。种子入药；既活血又润肠，不等于峻下逐水。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-019",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-020-function",
    "subject": "zy2",
    "knowledgeId": "herb-020",
    "type": "single",
    "title": "复习红花时，哪组功效与本条学习资料对应？",
    "options": [
      "生用清热泻火；除烦止渴",
      "清热泻火；生津润燥",
      "泻火除烦；清热利湿；凉血解毒",
      "活血通经；散瘀止痛"
    ],
    "answer": [
      3
    ],
    "explanation": "红花的本条功效主线为活血通经；散瘀止痛。辨证线索：瘀血经闭、痛经及跌扑损伤。辨析：红花用花，与桃仁用种子区分；孕期用药需审查。",
    "sourceId": "university-herb-020",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-020-part",
    "subject": "zy2",
    "knowledgeId": "herb-020",
    "type": "single",
    "title": "根据本条公开教学资料，红花的药用部位是？",
    "options": [
      "矿物结晶",
      "干燥花",
      "动物沙囊内壁",
      "干燥根及根茎"
    ],
    "answer": [
      1
    ],
    "explanation": "本条资料对应的药用部位是干燥花。红花用花，与桃仁用种子区分；孕期用药需审查。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-020",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-021-function",
    "subject": "zy2",
    "knowledgeId": "herb-021",
    "type": "single",
    "title": "复习益母草时，哪组功效与本条学习资料对应？",
    "options": [
      "活血调经；利尿消肿",
      "疏散风热；清利头目；利咽透疹",
      "散风清热；平肝明目",
      "解肌退热；生津；透疹；升阳止泻"
    ],
    "answer": [
      0
    ],
    "explanation": "益母草的本条功效主线为活血调经；利尿消肿。辨证线索：月经不调、产后瘀阻及水肿尿少。辨析：利尿消肿是与多数调经活血药区分的线索；孕妇禁用。",
    "sourceId": "university-herb-021",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-021-part",
    "subject": "zy2",
    "knowledgeId": "herb-021",
    "type": "single",
    "title": "根据本条公开教学资料，益母草的药用部位是？",
    "options": [
      "动物沙囊内壁",
      "干燥根及根茎",
      "干燥地上部分",
      "干燥成熟果实"
    ],
    "answer": [
      2
    ],
    "explanation": "本条资料对应的药用部位是干燥地上部分。利尿消肿是与多数调经活血药区分的线索；孕妇禁用。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-021",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-022-function",
    "subject": "zy2",
    "knowledgeId": "herb-022",
    "type": "single",
    "title": "复习石决明时，哪组功效与本条学习资料对应？",
    "options": [
      "散风清热；平肝明目",
      "平肝潜阳；清肝明目",
      "解肌退热；生津；透疹；升阳止泻",
      "疏散退热；疏肝解郁；升举阳气"
    ],
    "answer": [
      1
    ],
    "explanation": "石决明的本条功效主线为平肝潜阳；清肝明目。辨证线索：肝阳上亢头晕及目赤、视物昏花。辨析：动物贝壳入药，不能按植物根茎记来源。",
    "sourceId": "university-herb-022",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-022-part",
    "subject": "zy2",
    "knowledgeId": "herb-022",
    "type": "single",
    "title": "根据本条公开教学资料，石决明的药用部位是？",
    "options": [
      "干燥根及根茎",
      "干燥成熟果实",
      "干燥叶",
      "鲍的贝壳"
    ],
    "answer": [
      3
    ],
    "explanation": "本条资料对应的药用部位是鲍的贝壳。动物贝壳入药，不能按植物根茎记来源。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-022",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-023-function",
    "subject": "zy2",
    "knowledgeId": "herb-023",
    "type": "single",
    "title": "复习牡蛎时，哪组功效与本条学习资料对应？",
    "options": [
      "解肌退热；生津；透疹；升阳止泻",
      "疏散退热；疏肝解郁；升举阳气",
      "平肝潜阳；软坚；固涩；制酸",
      "生用清热泻火；除烦止渴"
    ],
    "answer": [
      2
    ],
    "explanation": "牡蛎的本条功效主线为平肝潜阳；软坚；固涩；制酸。辨证线索：学习时分别联系肝阳、痰核及滑脱等证候。辨析：潜阳与固涩不同；生品与煅品的作用侧重须另行核对。",
    "sourceId": "university-herb-023",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-023-part",
    "subject": "zy2",
    "knowledgeId": "herb-023",
    "type": "single",
    "title": "根据本条公开教学资料，牡蛎的药用部位是？",
    "options": [
      "牡蛎的贝壳",
      "干燥成熟果实",
      "干燥叶",
      "干燥树皮"
    ],
    "answer": [
      0
    ],
    "explanation": "本条资料对应的药用部位是牡蛎的贝壳。潜阳与固涩不同；生品与煅品的作用侧重须另行核对。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-023",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-024-function",
    "subject": "zy2",
    "knowledgeId": "herb-024",
    "type": "single",
    "title": "复习钩藤时，哪组功效与本条学习资料对应？",
    "options": [
      "疏散退热；疏肝解郁；升举阳气",
      "生用清热泻火；除烦止渴",
      "清热泻火；生津润燥",
      "清热平肝；息风定惊"
    ],
    "answer": [
      3
    ],
    "explanation": "钩藤的本条功效主线为清热平肝；息风定惊。辨证线索：肝热风动、惊痫抽搐或头痛眩晕。辨析：带钩茎枝是特征性部位；清热与息风须同时记。",
    "sourceId": "university-herb-024",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-024-part",
    "subject": "zy2",
    "knowledgeId": "herb-024",
    "type": "single",
    "title": "根据本条公开教学资料，钩藤的药用部位是？",
    "options": [
      "干燥树皮",
      "干燥带钩茎枝",
      "干燥菌核",
      "动物贝壳"
    ],
    "answer": [
      1
    ],
    "explanation": "本条资料对应的药用部位是干燥带钩茎枝。带钩茎枝是特征性部位；清热与息风须同时记。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-024",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-025-function",
    "subject": "zy2",
    "knowledgeId": "herb-025",
    "type": "single",
    "title": "复习地龙时，哪组功效与本条学习资料对应？",
    "options": [
      "清热定惊；通络；平喘；利尿",
      "生用清热泻火；除烦止渴",
      "清热泻火；生津润燥",
      "泻火除烦；清热利湿；凉血解毒"
    ],
    "answer": [
      0
    ],
    "explanation": "地龙的本条功效主线为清热定惊；通络；平喘；利尿。辨证线索：高热惊厥、经络不通，或肺热喘咳。辨析：动物全体入药；平喘利尿也是其辨析特点。",
    "sourceId": "university-herb-025",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-025-part",
    "subject": "zy2",
    "knowledgeId": "herb-025",
    "type": "single",
    "title": "根据本条公开教学资料，地龙的药用部位是？",
    "options": [
      "干燥树皮",
      "干燥菌核",
      "蚯蚓的干燥体",
      "动物贝壳"
    ],
    "answer": [
      2
    ],
    "explanation": "本条资料对应的药用部位是蚯蚓的干燥体。动物全体入药；平喘利尿也是其辨析特点。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-025",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-026-function",
    "subject": "zy2",
    "knowledgeId": "herb-026",
    "type": "single",
    "title": "复习天麻时，哪组功效与本条学习资料对应？",
    "options": [
      "疏散风热；清利头目；利咽透疹",
      "平肝息风；止痉",
      "散风清热；平肝明目",
      "解肌退热；生津；透疹；升阳止泻"
    ],
    "answer": [
      1
    ],
    "explanation": "天麻的本条功效主线为平肝息风；止痉。辨证线索：头晕头痛、肢体麻木及惊痫抽搐等。辨析：息风止痉与发汗解表不同；块茎不是贝壳。",
    "sourceId": "university-herb-026",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-026-part",
    "subject": "zy2",
    "knowledgeId": "herb-026",
    "type": "single",
    "title": "根据本条公开教学资料，天麻的药用部位是？",
    "options": [
      "动物贝壳",
      "矿物结晶",
      "动物沙囊内壁",
      "块茎"
    ],
    "answer": [
      3
    ],
    "explanation": "本条资料对应的药用部位是块茎。息风止痉与发汗解表不同；块茎不是贝壳。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-026",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-027-function",
    "subject": "zy2",
    "knowledgeId": "herb-027",
    "type": "single",
    "title": "复习青皮时，哪组功效与本条学习资料对应？",
    "options": [
      "散风清热；平肝明目",
      "解肌退热；生津；透疹；升阳止泻",
      "疏肝破气；消积化滞",
      "疏散退热；疏肝解郁；升举阳气"
    ],
    "answer": [
      2
    ],
    "explanation": "青皮的本条功效主线为疏肝破气；消积化滞。辨证线索：肝郁气滞的胁痛、疝气及食积腹痛。辨析：青皮与陈皮的成熟程度及理气作用侧重不同。",
    "sourceId": "university-herb-027",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-027-part",
    "subject": "zy2",
    "knowledgeId": "herb-027",
    "type": "single",
    "title": "根据本条公开教学资料，青皮的药用部位是？",
    "options": [
      "干燥幼果或未成熟果皮",
      "矿物结晶",
      "动物沙囊内壁",
      "干燥根及根茎"
    ],
    "answer": [
      0
    ],
    "explanation": "本条资料对应的药用部位是干燥幼果或未成熟果皮。青皮与陈皮的成熟程度及理气作用侧重不同。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-027",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-028-function",
    "subject": "zy2",
    "knowledgeId": "herb-028",
    "type": "single",
    "title": "复习枳实时，哪组功效与本条学习资料对应？",
    "options": [
      "解肌退热；生津；透疹；升阳止泻",
      "疏散退热；疏肝解郁；升举阳气",
      "生用清热泻火；除烦止渴",
      "破气消积；化痰散痞"
    ],
    "answer": [
      3
    ],
    "explanation": "枳实的本条功效主线为破气消积；化痰散痞。辨证线索：积滞痞满、食积腹痛及痰气互结。辨析：破气消积不能与补气固表混记。",
    "sourceId": "university-herb-028",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-028-part",
    "subject": "zy2",
    "knowledgeId": "herb-028",
    "type": "single",
    "title": "根据本条公开教学资料，枳实的药用部位是？",
    "options": [
      "动物沙囊内壁",
      "干燥幼果",
      "干燥根及根茎",
      "干燥叶"
    ],
    "answer": [
      1
    ],
    "explanation": "本条资料对应的药用部位是干燥幼果。破气消积不能与补气固表混记。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-028",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-029-function",
    "subject": "zy2",
    "knowledgeId": "herb-029",
    "type": "single",
    "title": "复习香附时，哪组功效与本条学习资料对应？",
    "options": [
      "行气解郁；调经止痛",
      "疏散退热；疏肝解郁；升举阳气",
      "生用清热泻火；除烦止渴",
      "清热泻火；生津润燥"
    ],
    "answer": [
      0
    ],
    "explanation": "香附的本条功效主线为行气解郁；调经止痛。辨证线索：肝郁气滞的胸胁胀痛、乳房胀痛或痛经。辨析：调经的作用基础偏行气解郁，不等同于当归补血调经。",
    "sourceId": "university-herb-029",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-029-part",
    "subject": "zy2",
    "knowledgeId": "herb-029",
    "type": "single",
    "title": "根据本条公开教学资料，香附的药用部位是？",
    "options": [
      "干燥成熟果实",
      "干燥叶",
      "干燥根茎",
      "干燥树皮"
    ],
    "answer": [
      2
    ],
    "explanation": "本条资料对应的药用部位是干燥根茎。调经的作用基础偏行气解郁，不等同于当归补血调经。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-029",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-030-function",
    "subject": "zy2",
    "knowledgeId": "herb-030",
    "type": "single",
    "title": "复习桔梗时，哪组功效与本条学习资料对应？",
    "options": [
      "生用清热泻火；除烦止渴",
      "宣肺；利咽；祛痰；排脓",
      "清热泻火；生津润燥",
      "泻火除烦；清热利湿；凉血解毒"
    ],
    "answer": [
      1
    ],
    "explanation": "桔梗的本条功效主线为宣肺；利咽；祛痰；排脓。辨证线索：咳嗽痰多、咽喉肿痛及肺痈。辨析：宣肺与苦杏仁降气分别记，二者作用方向不同。",
    "sourceId": "university-herb-030",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-030-part",
    "subject": "zy2",
    "knowledgeId": "herb-030",
    "type": "single",
    "title": "根据本条公开教学资料，桔梗的药用部位是？",
    "options": [
      "干燥叶",
      "干燥树皮",
      "干燥菌核",
      "根"
    ],
    "answer": [
      3
    ],
    "explanation": "本条资料对应的药用部位是根。宣肺与苦杏仁降气分别记，二者作用方向不同。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-030",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-031-function",
    "subject": "zy2",
    "knowledgeId": "herb-031",
    "type": "single",
    "title": "复习川贝母时，哪组功效与本条学习资料对应？",
    "options": [
      "疏散风热；清利头目；利咽透疹",
      "散风清热；平肝明目",
      "清热润肺；化痰止咳",
      "解肌退热；生津；透疹；升阳止泻"
    ],
    "answer": [
      2
    ],
    "explanation": "川贝母的本条功效主线为清热润肺；化痰止咳。辨证线索：肺热燥咳、干咳少痰及阴虚久咳。辨析：与浙贝母比较时，突出润肺、燥咳的辨析线索。",
    "sourceId": "university-herb-031",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-031-part",
    "subject": "zy2",
    "knowledgeId": "herb-031",
    "type": "single",
    "title": "根据本条公开教学资料，川贝母的药用部位是？",
    "options": [
      "鳞茎",
      "干燥树皮",
      "干燥菌核",
      "动物贝壳"
    ],
    "answer": [
      0
    ],
    "explanation": "本条资料对应的药用部位是鳞茎。与浙贝母比较时，突出润肺、燥咳的辨析线索。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-031",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-032-function",
    "subject": "zy2",
    "knowledgeId": "herb-032",
    "type": "single",
    "title": "复习浙贝母时，哪组功效与本条学习资料对应？",
    "options": [
      "散风清热；平肝明目",
      "解肌退热；生津；透疹；升阳止泻",
      "疏散退热；疏肝解郁；升举阳气",
      "清热化痰；散结"
    ],
    "answer": [
      3
    ],
    "explanation": "浙贝母的本条功效主线为清热化痰；散结。辨证线索：痰热咳嗽、肺痈及瘰疬、乳痈等。辨析：与川贝母同为鳞茎；侧重清热散结，不宜与乌头类同用。",
    "sourceId": "university-herb-032",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-032-part",
    "subject": "zy2",
    "knowledgeId": "herb-032",
    "type": "single",
    "title": "根据本条公开教学资料，浙贝母的药用部位是？",
    "options": [
      "干燥菌核",
      "干燥鳞茎",
      "动物贝壳",
      "矿物结晶"
    ],
    "answer": [
      1
    ],
    "explanation": "本条资料对应的药用部位是干燥鳞茎。与川贝母同为鳞茎；侧重清热散结，不宜与乌头类同用。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-032",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-033-function",
    "subject": "zy2",
    "knowledgeId": "herb-033",
    "type": "single",
    "title": "复习苦杏仁时，哪组功效与本条学习资料对应？",
    "options": [
      "降气止咳平喘；润肠通便",
      "解肌退热；生津；透疹；升阳止泻",
      "疏散退热；疏肝解郁；升举阳气",
      "生用清热泻火；除烦止渴"
    ],
    "answer": [
      0
    ],
    "explanation": "苦杏仁的本条功效主线为降气止咳平喘；润肠通便。辨证线索：咳嗽气喘及肠燥便秘。辨析：既作用于肺气又能润肠；有毒性，不能作为普通坚果随意食用。",
    "sourceId": "university-herb-033",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-033-part",
    "subject": "zy2",
    "knowledgeId": "herb-033",
    "type": "single",
    "title": "根据本条公开教学资料，苦杏仁的药用部位是？",
    "options": [
      "动物贝壳",
      "矿物结晶",
      "干燥成熟种子",
      "动物沙囊内壁"
    ],
    "answer": [
      2
    ],
    "explanation": "本条资料对应的药用部位是干燥成熟种子。既作用于肺气又能润肠；有毒性，不能作为普通坚果随意食用。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-033",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-034-function",
    "subject": "zy2",
    "knowledgeId": "herb-034",
    "type": "single",
    "title": "复习猪苓时，哪组功效与本条学习资料对应？",
    "options": [
      "疏散退热；疏肝解郁；升举阳气",
      "利水渗湿",
      "生用清热泻火；除烦止渴",
      "清热泻火；生津润燥"
    ],
    "answer": [
      1
    ],
    "explanation": "猪苓的本条功效主线为利水渗湿。辨证线索：水湿停留的小便不利、水肿等。辨析：与茯苓同为菌核；不要把茯苓健脾宁心的全部功效搬给猪苓。",
    "sourceId": "university-herb-034",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-034-part",
    "subject": "zy2",
    "knowledgeId": "herb-034",
    "type": "single",
    "title": "根据本条公开教学资料，猪苓的药用部位是？",
    "options": [
      "矿物结晶",
      "动物沙囊内壁",
      "干燥根及根茎",
      "干燥菌核"
    ],
    "answer": [
      3
    ],
    "explanation": "本条资料对应的药用部位是干燥菌核。与茯苓同为菌核；不要把茯苓健脾宁心的全部功效搬给猪苓。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-034",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-035-function",
    "subject": "zy2",
    "knowledgeId": "herb-035",
    "type": "single",
    "title": "复习泽泻时，哪组功效与本条学习资料对应？",
    "options": [
      "生用清热泻火；除烦止渴",
      "清热泻火；生津润燥",
      "利水；清热",
      "泻火除烦；清热利湿；凉血解毒"
    ],
    "answer": [
      2
    ],
    "explanation": "泽泻的本条功效主线为利水；清热。辨证线索：小便不利、水肿及湿热淋证。辨析：块茎与猪苓菌核区分；水湿、湿热是辨析方向。",
    "sourceId": "university-herb-035",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-035-part",
    "subject": "zy2",
    "knowledgeId": "herb-035",
    "type": "single",
    "title": "根据本条公开教学资料，泽泻的药用部位是？",
    "options": [
      "块茎",
      "动物沙囊内壁",
      "干燥成熟果实",
      "干燥叶"
    ],
    "answer": [
      0
    ],
    "explanation": "本条资料对应的药用部位是块茎。块茎与猪苓菌核区分；水湿、湿热是辨析方向。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-035",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-036-function",
    "subject": "zy2",
    "knowledgeId": "herb-036",
    "type": "single",
    "title": "复习车前子时，哪组功效与本条学习资料对应？",
    "options": [
      "疏散风热；清利头目；利咽透疹",
      "散风清热；平肝明目",
      "解肌退热；生津；透疹；升阳止泻",
      "清热利尿；渗湿通淋；明目；祛痰"
    ],
    "answer": [
      3
    ],
    "explanation": "车前子的本条功效主线为清热利尿；渗湿通淋；明目；祛痰。辨证线索：热淋、水肿、目赤及痰热咳嗽。辨析：种子入药；明目和祛痰是利水药中值得单记的特点。",
    "sourceId": "university-herb-036",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-036-part",
    "subject": "zy2",
    "knowledgeId": "herb-036",
    "type": "single",
    "title": "根据本条公开教学资料，车前子的药用部位是？",
    "options": [
      "干燥根及根茎",
      "干燥成熟种子",
      "干燥叶",
      "干燥树皮"
    ],
    "answer": [
      1
    ],
    "explanation": "本条资料对应的药用部位是干燥成熟种子。种子入药；明目和祛痰是利水药中值得单记的特点。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-036",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-037-function",
    "subject": "zy2",
    "knowledgeId": "herb-037",
    "type": "single",
    "title": "复习茵陈蒿时，哪组功效与本条学习资料对应？",
    "options": [
      "清利湿热；退黄",
      "散风清热；平肝明目",
      "解肌退热；生津；透疹；升阳止泻",
      "疏散退热；疏肝解郁；升举阳气"
    ],
    "answer": [
      0
    ],
    "explanation": "茵陈蒿的本条功效主线为清利湿热；退黄。辨证线索：湿热黄疸及湿疮瘙痒。辨析：退黄为核心辨析线索；现行药典茵陈采收部位须另行核对。",
    "sourceId": "university-herb-037",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-037-part",
    "subject": "zy2",
    "knowledgeId": "herb-037",
    "type": "single",
    "title": "根据本条公开教学资料，茵陈蒿的药用部位是？",
    "options": [
      "干燥成熟果实",
      "干燥树皮",
      "干燥幼苗（本参考资料所列部位）",
      "干燥菌核"
    ],
    "answer": [
      2
    ],
    "explanation": "本条资料对应的药用部位是干燥幼苗（本参考资料所列部位）。退黄为核心辨析线索；现行药典茵陈采收部位须另行核对。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-037",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-038-function",
    "subject": "zy2",
    "knowledgeId": "herb-038",
    "type": "single",
    "title": "复习金钱草时，哪组功效与本条学习资料对应？",
    "options": [
      "解肌退热；生津；透疹；升阳止泻",
      "清热利湿；通淋；消肿",
      "疏散退热；疏肝解郁；升举阳气",
      "生用清热泻火；除烦止渴"
    ],
    "answer": [
      1
    ],
    "explanation": "金钱草的本条功效主线为清热利湿；通淋；消肿。辨证线索：热淋、砂淋及湿热黄疸等。辨析：不同地区同名药材需辨来源，本条对应过路黄。",
    "sourceId": "university-herb-038",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-038-part",
    "subject": "zy2",
    "knowledgeId": "herb-038",
    "type": "single",
    "title": "根据本条公开教学资料，金钱草的药用部位是？",
    "options": [
      "干燥树皮",
      "干燥菌核",
      "动物贝壳",
      "全草"
    ],
    "answer": [
      3
    ],
    "explanation": "本条资料对应的药用部位是全草。不同地区同名药材需辨来源，本条对应过路黄。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-038",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-039-function",
    "subject": "zy2",
    "knowledgeId": "herb-039",
    "type": "single",
    "title": "复习独活时，哪组功效与本条学习资料对应？",
    "options": [
      "疏散退热；疏肝解郁；升举阳气",
      "生用清热泻火；除烦止渴",
      "祛风湿；通痹止痛",
      "清热泻火；生津润燥"
    ],
    "answer": [
      2
    ],
    "explanation": "独活的本条功效主线为祛风湿；通痹止痛。辨证线索：风寒湿痹、腰膝疼痛。辨析：风寒湿与湿热证分开，不能只根据关节疼痛选药。",
    "sourceId": "university-herb-039",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-039-part",
    "subject": "zy2",
    "knowledgeId": "herb-039",
    "type": "single",
    "title": "根据本条公开教学资料，独活的药用部位是？",
    "options": [
      "根",
      "干燥菌核",
      "动物贝壳",
      "矿物结晶"
    ],
    "answer": [
      0
    ],
    "explanation": "本条资料对应的药用部位是根。风寒湿与湿热证分开，不能只根据关节疼痛选药。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-039",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-040-function",
    "subject": "zy2",
    "knowledgeId": "herb-040",
    "type": "single",
    "title": "复习威灵仙时，哪组功效与本条学习资料对应？",
    "options": [
      "生用清热泻火；除烦止渴",
      "清热泻火；生津润燥",
      "泻火除烦；清热利湿；凉血解毒",
      "祛风除湿；通络止痛"
    ],
    "answer": [
      3
    ],
    "explanation": "威灵仙的本条功效主线为祛风除湿；通络止痛。辨证线索：风湿痹痛、肢体麻木及筋脉拘挛。辨析：来源含根及根茎；不能将传统主治当作异物卡喉的自行处理办法。",
    "sourceId": "university-herb-040",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-040-part",
    "subject": "zy2",
    "knowledgeId": "herb-040",
    "type": "single",
    "title": "根据本条公开教学资料，威灵仙的药用部位是？",
    "options": [
      "动物贝壳",
      "干燥根及根茎",
      "矿物结晶",
      "动物沙囊内壁"
    ],
    "answer": [
      1
    ],
    "explanation": "本条资料对应的药用部位是干燥根及根茎。来源含根及根茎；不能将传统主治当作异物卡喉的自行处理办法。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-040",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-041-function",
    "subject": "zy2",
    "knowledgeId": "herb-041",
    "type": "single",
    "title": "复习木瓜时，哪组功效与本条学习资料对应？",
    "options": [
      "舒筋；和胃化湿",
      "疏散风热；清利头目；利咽透疹",
      "散风清热；平肝明目",
      "解肌退热；生津；透疹；升阳止泻"
    ],
    "answer": [
      0
    ],
    "explanation": "木瓜的本条功效主线为舒筋；和胃化湿。辨证线索：湿痹拘挛及吐泻转筋。辨析：药材来自贴梗海棠，不能与日常食用番木瓜混同。",
    "sourceId": "university-herb-041",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-041-part",
    "subject": "zy2",
    "knowledgeId": "herb-041",
    "type": "single",
    "title": "根据本条公开教学资料，木瓜的药用部位是？",
    "options": [
      "矿物结晶",
      "动物沙囊内壁",
      "干燥近成熟果实",
      "干燥根及根茎"
    ],
    "answer": [
      2
    ],
    "explanation": "本条资料对应的药用部位是干燥近成熟果实。药材来自贴梗海棠，不能与日常食用番木瓜混同。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-041",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-042-function",
    "subject": "zy2",
    "knowledgeId": "herb-042",
    "type": "single",
    "title": "复习苍术时，哪组功效与本条学习资料对应？",
    "options": [
      "散风清热；平肝明目",
      "燥湿健脾；祛风散寒；明目",
      "解肌退热；生津；透疹；升阳止泻",
      "疏散退热；疏肝解郁；升举阳气"
    ],
    "answer": [
      1
    ],
    "explanation": "苍术的本条功效主线为燥湿健脾；祛风散寒；明目。辨证线索：湿阻中焦、风湿痹痛及风寒表证。辨析：燥湿与茯苓渗湿用语不同；不要将苍术、白术视为同一药。",
    "sourceId": "university-herb-042",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-042-part",
    "subject": "zy2",
    "knowledgeId": "herb-042",
    "type": "single",
    "title": "根据本条公开教学资料，苍术的药用部位是？",
    "options": [
      "动物沙囊内壁",
      "干燥成熟果实",
      "干燥叶",
      "干燥根茎"
    ],
    "answer": [
      3
    ],
    "explanation": "本条资料对应的药用部位是干燥根茎。燥湿与茯苓渗湿用语不同；不要将苍术、白术视为同一药。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-042",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-043-function",
    "subject": "zy2",
    "knowledgeId": "herb-043",
    "type": "single",
    "title": "复习厚朴时，哪组功效与本条学习资料对应？",
    "options": [
      "解肌退热；生津；透疹；升阳止泻",
      "疏散退热；疏肝解郁；升举阳气",
      "燥湿消痰；下气除满",
      "生用清热泻火；除烦止渴"
    ],
    "answer": [
      2
    ],
    "explanation": "厚朴的本条功效主线为燥湿消痰；下气除满。辨证线索：湿滞、食积气滞的脘腹胀满及痰饮喘咳。辨析：除满与下气是核心线索；入药部位不限于干皮。",
    "sourceId": "university-herb-043",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-043-part",
    "subject": "zy2",
    "knowledgeId": "herb-043",
    "type": "single",
    "title": "根据本条公开教学资料，厚朴的药用部位是？",
    "options": [
      "干皮、根皮及枝皮",
      "干燥成熟果实",
      "干燥叶",
      "干燥树皮"
    ],
    "answer": [
      0
    ],
    "explanation": "本条资料对应的药用部位是干皮、根皮及枝皮。除满与下气是核心线索；入药部位不限于干皮。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-043",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-044-function",
    "subject": "zy2",
    "knowledgeId": "herb-044",
    "type": "single",
    "title": "复习广藿香时，哪组功效与本条学习资料对应？",
    "options": [
      "疏散退热；疏肝解郁；升举阳气",
      "生用清热泻火；除烦止渴",
      "清热泻火；生津润燥",
      "芳香化湿；止呕；发表解暑"
    ],
    "answer": [
      3
    ],
    "explanation": "广藿香的本条功效主线为芳香化湿；止呕；发表解暑。辨证线索：湿浊中阻的脘痞呕吐或暑湿不适。辨析：化湿止呕不同于苦寒清热；本条对应广藿香来源。",
    "sourceId": "university-herb-044",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-044-part",
    "subject": "zy2",
    "knowledgeId": "herb-044",
    "type": "single",
    "title": "根据本条公开教学资料，广藿香的药用部位是？",
    "options": [
      "干燥成熟果实",
      "干燥地上部分",
      "干燥树皮",
      "干燥菌核"
    ],
    "answer": [
      1
    ],
    "explanation": "本条资料对应的药用部位是干燥地上部分。化湿止呕不同于苦寒清热；本条对应广藿香来源。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-044",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-045-function",
    "subject": "zy2",
    "knowledgeId": "herb-045",
    "type": "single",
    "title": "复习砂仁时，哪组功效与本条学习资料对应？",
    "options": [
      "化湿开胃；温脾止泻；理气安胎",
      "生用清热泻火；除烦止渴",
      "清热泻火；生津润燥",
      "泻火除烦；清热利湿；凉血解毒"
    ],
    "answer": [
      0
    ],
    "explanation": "砂仁的本条功效主线为化湿开胃；温脾止泻；理气安胎。辨证线索：湿阻中焦、脾胃虚寒泄泻及相关胎动不安。辨析：安胎需辨证，砂仁偏温，黄芩偏寒，不能互换。",
    "sourceId": "university-herb-045",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-045-part",
    "subject": "zy2",
    "knowledgeId": "herb-045",
    "type": "single",
    "title": "根据本条公开教学资料，砂仁的药用部位是？",
    "options": [
      "干燥树皮",
      "干燥菌核",
      "干燥成熟果实",
      "动物贝壳"
    ],
    "answer": [
      2
    ],
    "explanation": "本条资料对应的药用部位是干燥成熟果实。安胎需辨证，砂仁偏温，黄芩偏寒，不能互换。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-045",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-046-function",
    "subject": "zy2",
    "knowledgeId": "herb-046",
    "type": "single",
    "title": "复习大黄时，哪组功效与本条学习资料对应？",
    "options": [
      "疏散风热；清利头目；利咽透疹",
      "攻下积滞；泻火解毒；凉血止血；活血祛瘀",
      "散风清热；平肝明目",
      "解肌退热；生津；透疹；升阳止泻"
    ],
    "answer": [
      1
    ],
    "explanation": "大黄的本条功效主线为攻下积滞；泻火解毒；凉血止血；活血祛瘀。辨证线索：积滞便秘、实热及相关血热或血瘀证。辨析：攻下不等于润肠；功效多，应按证候分组记忆。",
    "sourceId": "university-herb-046",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-046-part",
    "subject": "zy2",
    "knowledgeId": "herb-046",
    "type": "single",
    "title": "根据本条公开教学资料，大黄的药用部位是？",
    "options": [
      "干燥菌核",
      "动物贝壳",
      "矿物结晶",
      "根及根茎"
    ],
    "answer": [
      3
    ],
    "explanation": "本条资料对应的药用部位是根及根茎。攻下不等于润肠；功效多，应按证候分组记忆。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-046",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-047-function",
    "subject": "zy2",
    "knowledgeId": "herb-047",
    "type": "single",
    "title": "复习芒硝时，哪组功效与本条学习资料对应？",
    "options": [
      "散风清热；平肝明目",
      "解肌退热；生津；透疹；升阳止泻",
      "软坚泻下；清热泻火",
      "疏散退热；疏肝解郁；升举阳气"
    ],
    "answer": [
      2
    ],
    "explanation": "芒硝的本条功效主线为软坚泻下；清热泻火。辨证线索：热结便秘时联系软坚、泻下的作用。辨析：矿物药；与植物根及根茎入药的大黄区别。",
    "sourceId": "university-herb-047",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-047-part",
    "subject": "zy2",
    "knowledgeId": "herb-047",
    "type": "single",
    "title": "根据本条公开教学资料，芒硝的药用部位是？",
    "options": [
      "硫酸钠矿精制结晶",
      "干燥菌核",
      "动物贝壳",
      "动物沙囊内壁"
    ],
    "answer": [
      0
    ],
    "explanation": "本条资料对应的药用部位是硫酸钠矿精制结晶。矿物药；与植物根及根茎入药的大黄区别。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-047",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-048-function",
    "subject": "zy2",
    "knowledgeId": "herb-048",
    "type": "single",
    "title": "复习党参时，哪组功效与本条学习资料对应？",
    "options": [
      "解肌退热；生津；透疹；升阳止泻",
      "疏散退热；疏肝解郁；升举阳气",
      "生用清热泻火；除烦止渴",
      "补中益气；健脾益肺"
    ],
    "answer": [
      3
    ],
    "explanation": "党参的本条功效主线为补中益气；健脾益肺。辨证线索：脾肺气虚、食少便溏及气短。辨析：不能因同带参字就等同于人参的大补元气作用。",
    "sourceId": "university-herb-048",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-048-part",
    "subject": "zy2",
    "knowledgeId": "herb-048",
    "type": "single",
    "title": "根据本条公开教学资料，党参的药用部位是？",
    "options": [
      "矿物结晶",
      "干燥根",
      "动物沙囊内壁",
      "干燥成熟果实"
    ],
    "answer": [
      1
    ],
    "explanation": "本条资料对应的药用部位是干燥根。不能因同带参字就等同于人参的大补元气作用。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-048",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-049-function",
    "subject": "zy2",
    "knowledgeId": "herb-049",
    "type": "single",
    "title": "复习山药时，哪组功效与本条学习资料对应？",
    "options": [
      "补脾养胃；生津益肺；补肾涩精",
      "生用清热泻火；除烦止渴",
      "清热泻火；生津润燥",
      "泻火除烦；清热利湿；凉血解毒"
    ],
    "answer": [
      0
    ],
    "explanation": "山药的本条功效主线为补脾养胃；生津益肺；补肾涩精。辨证线索：脾虚久泻、肺虚喘咳及肾虚遗精等。辨析：脾、肺、肾三组作用串联，不是单纯消食药。",
    "sourceId": "university-herb-049",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-049-part",
    "subject": "zy2",
    "knowledgeId": "herb-049",
    "type": "single",
    "title": "根据本条公开教学资料，山药的药用部位是？",
    "options": [
      "动物沙囊内壁",
      "干燥成熟果实",
      "干燥根茎",
      "干燥叶"
    ],
    "answer": [
      2
    ],
    "explanation": "本条资料对应的药用部位是干燥根茎。脾、肺、肾三组作用串联，不是单纯消食药。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-049",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-050-function",
    "subject": "zy2",
    "knowledgeId": "herb-050",
    "type": "single",
    "title": "复习西洋参时，哪组功效与本条学习资料对应？",
    "options": [
      "清热泻火；生津润燥",
      "养阴；清火；生津",
      "泻火除烦；清热利湿；凉血解毒",
      "清热解毒；消肿散结"
    ],
    "answer": [
      1
    ],
    "explanation": "西洋参的本条功效主线为养阴；清火；生津。辨证线索：肺胃津亏、烦渴及虚热相关表现。辨析：公开资料突出养阴清火；不要与温散风寒药混记。",
    "sourceId": "university-herb-050",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-050-part",
    "subject": "zy2",
    "knowledgeId": "herb-050",
    "type": "single",
    "title": "根据本条公开教学资料，西洋参的药用部位是？",
    "options": [
      "干燥成熟果实",
      "干燥叶",
      "干燥树皮",
      "干燥根"
    ],
    "answer": [
      3
    ],
    "explanation": "本条资料对应的药用部位是干燥根。公开资料突出养阴清火；不要与温散风寒药混记。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-050",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-051-function",
    "subject": "zy2",
    "knowledgeId": "herb-051",
    "type": "single",
    "title": "复习黄芪时，哪组功效与本条学习资料对应？",
    "options": [
      "疏散风热；清利头目；利咽透疹",
      "散风清热；平肝明目",
      "补气固表；利水；托毒排脓；生肌",
      "解肌退热；生津；透疹；升阳止泻"
    ],
    "answer": [
      2
    ],
    "explanation": "黄芪的本条功效主线为补气固表；利水；托毒排脓；生肌。辨证线索：气虚自汗、气虚水肿及久溃不敛。辨析：固表与麻黄发汗方向不同；利水不等同于寒凉通淋。",
    "sourceId": "university-herb-051",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-051-part",
    "subject": "zy2",
    "knowledgeId": "herb-051",
    "type": "single",
    "title": "根据本条公开教学资料，黄芪的药用部位是？",
    "options": [
      "干燥根",
      "干燥叶",
      "干燥树皮",
      "干燥菌核"
    ],
    "answer": [
      0
    ],
    "explanation": "本条资料对应的药用部位是干燥根。固表与麻黄发汗方向不同；利水不等同于寒凉通淋。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-051",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-052-function",
    "subject": "zy2",
    "knowledgeId": "herb-052",
    "type": "single",
    "title": "复习杜仲时，哪组功效与本条学习资料对应？",
    "options": [
      "散风清热；平肝明目",
      "解肌退热；生津；透疹；升阳止泻",
      "疏散退热；疏肝解郁；升举阳气",
      "补肝肾；强筋骨；安胎"
    ],
    "answer": [
      3
    ],
    "explanation": "杜仲的本条功效主线为补肝肾；强筋骨；安胎。辨证线索：肝肾不足的腰膝酸软或相关胎动不安。辨析：树皮入药；安胎对应虚证，不能覆盖所有孕期情况。",
    "sourceId": "university-herb-052",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-052-part",
    "subject": "zy2",
    "knowledgeId": "herb-052",
    "type": "single",
    "title": "根据本条公开教学资料，杜仲的药用部位是？",
    "options": [
      "干燥叶",
      "树皮",
      "干燥菌核",
      "动物贝壳"
    ],
    "answer": [
      1
    ],
    "explanation": "本条资料对应的药用部位是树皮。树皮入药；安胎对应虚证，不能覆盖所有孕期情况。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-052",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-053-function",
    "subject": "zy2",
    "knowledgeId": "herb-053",
    "type": "single",
    "title": "复习熟地黄时，哪组功效与本条学习资料对应？",
    "options": [
      "滋阴补血；益精填髓",
      "解肌退热；生津；透疹；升阳止泻",
      "疏散退热；疏肝解郁；升举阳气",
      "生用清热泻火；除烦止渴"
    ],
    "answer": [
      0
    ],
    "explanation": "熟地黄的本条功效主线为滋阴补血；益精填髓。辨证线索：肝肾阴虚、精血不足及血虚萎黄。辨析：熟地偏滋补，与生地清热凉血的侧重点分开。",
    "sourceId": "university-herb-053",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-053-part",
    "subject": "zy2",
    "knowledgeId": "herb-053",
    "type": "single",
    "title": "根据本条公开教学资料，熟地黄的药用部位是？",
    "options": [
      "干燥菌核",
      "动物贝壳",
      "地黄块根的加工品",
      "矿物结晶"
    ],
    "answer": [
      2
    ],
    "explanation": "本条资料对应的药用部位是地黄块根的加工品。熟地偏滋补，与生地清热凉血的侧重点分开。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-053",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-054-function",
    "subject": "zy2",
    "knowledgeId": "herb-054",
    "type": "single",
    "title": "复习麦冬时，哪组功效与本条学习资料对应？",
    "options": [
      "生用清热泻火；除烦止渴",
      "养阴生津；润肺清火",
      "清热泻火；生津润燥",
      "泻火除烦；清热利湿；凉血解毒"
    ],
    "answer": [
      1
    ],
    "explanation": "麦冬的本条功效主线为养阴生津；润肺清火。辨证线索：肺燥干咳、津伤口渴及心烦失眠。辨析：块根不是根茎；阴虚燥咳不同于寒痰湿痰。",
    "sourceId": "university-herb-054",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-054-part",
    "subject": "zy2",
    "knowledgeId": "herb-054",
    "type": "single",
    "title": "根据本条公开教学资料，麦冬的药用部位是？",
    "options": [
      "动物贝壳",
      "矿物结晶",
      "动物沙囊内壁",
      "块根"
    ],
    "answer": [
      3
    ],
    "explanation": "本条资料对应的药用部位是块根。块根不是根茎；阴虚燥咳不同于寒痰湿痰。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-054",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-055-function",
    "subject": "zy2",
    "knowledgeId": "herb-055",
    "type": "single",
    "title": "复习枸杞子时，哪组功效与本条学习资料对应？",
    "options": [
      "生用清热泻火；除烦止渴",
      "清热泻火；生津润燥",
      "滋补肝肾；益精明目",
      "泻火除烦；清热利湿；凉血解毒"
    ],
    "answer": [
      2
    ],
    "explanation": "枸杞子的本条功效主线为滋补肝肾；益精明目。辨证线索：肝肾精血不足、腰膝酸软及目昏。辨析：补益明目与菊花散风清热明目的作用基础不同。",
    "sourceId": "university-herb-055",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-055-part",
    "subject": "zy2",
    "knowledgeId": "herb-055",
    "type": "single",
    "title": "根据本条公开教学资料，枸杞子的药用部位是？",
    "options": [
      "干燥成熟果实",
      "矿物结晶",
      "动物沙囊内壁",
      "干燥根及根茎"
    ],
    "answer": [
      0
    ],
    "explanation": "本条资料对应的药用部位是干燥成熟果实。补益明目与菊花散风清热明目的作用基础不同。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-055",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-056-function",
    "subject": "zy2",
    "knowledgeId": "herb-056",
    "type": "single",
    "title": "复习酸枣仁时，哪组功效与本条学习资料对应？",
    "options": [
      "疏散风热；清利头目；利咽透疹",
      "散风清热；平肝明目",
      "疏散退热；疏肝解郁；升举阳气",
      "宁心；敛汗；生津"
    ],
    "answer": [
      3
    ],
    "explanation": "酸枣仁的本条功效主线为宁心；敛汗；生津。辨证线索：虚烦不眠、惊悸多梦及体虚多汗。辨析：宁心安神与敛汗联系虚证，不能套用所有失眠证型。",
    "sourceId": "university-herb-056",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-056-part",
    "subject": "zy2",
    "knowledgeId": "herb-056",
    "type": "single",
    "title": "根据本条公开教学资料，酸枣仁的药用部位是？",
    "options": [
      "动物沙囊内壁",
      "干燥种子",
      "干燥根及根茎",
      "干燥叶"
    ],
    "answer": [
      1
    ],
    "explanation": "本条资料对应的药用部位是干燥种子。宁心安神与敛汗联系虚证，不能套用所有失眠证型。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-056",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-057-function",
    "subject": "zy2",
    "knowledgeId": "herb-057",
    "type": "single",
    "title": "复习远志时，哪组功效与本条学习资料对应？",
    "options": [
      "安神益智；祛痰；消肿",
      "散风清热；平肝明目",
      "解肌退热；生津；透疹；升阳止泻",
      "疏散退热；疏肝解郁；升举阳气"
    ],
    "answer": [
      0
    ],
    "explanation": "远志的本条功效主线为安神益智；祛痰；消肿。辨证线索：心肾不交的失眠健忘或咳痰不爽等。辨析：安神药也可能有祛痰作用，不要只按一个功效记忆。",
    "sourceId": "university-herb-057",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-057-part",
    "subject": "zy2",
    "knowledgeId": "herb-057",
    "type": "single",
    "title": "根据本条公开教学资料，远志的药用部位是？",
    "options": [
      "干燥成熟果实",
      "干燥叶",
      "干燥根",
      "干燥树皮"
    ],
    "answer": [
      2
    ],
    "explanation": "本条资料对应的药用部位是干燥根。安神药也可能有祛痰作用，不要只按一个功效记忆。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-057",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-058-function",
    "subject": "zy2",
    "knowledgeId": "herb-058",
    "type": "single",
    "title": "复习山茱萸时，哪组功效与本条学习资料对应？",
    "options": [
      "解肌退热；生津；透疹；升阳止泻",
      "补益肝肾；涩精固脱",
      "疏散退热；疏肝解郁；升举阳气",
      "生用清热泻火；除烦止渴"
    ],
    "answer": [
      1
    ],
    "explanation": "山茱萸的本条功效主线为补益肝肾；涩精固脱。辨证线索：肝肾不足及遗精、滑脱相关表现。辨析：果肉入药，不是种子；补益与收涩兼具。",
    "sourceId": "university-herb-058",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-058-part",
    "subject": "zy2",
    "knowledgeId": "herb-058",
    "type": "single",
    "title": "根据本条公开教学资料，山茱萸的药用部位是？",
    "options": [
      "干燥叶",
      "干燥树皮",
      "干燥菌核",
      "干燥成熟果肉"
    ],
    "answer": [
      3
    ],
    "explanation": "本条资料对应的药用部位是干燥成熟果肉。果肉入药，不是种子；补益与收涩兼具。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-058",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-059-function",
    "subject": "zy2",
    "knowledgeId": "herb-059",
    "type": "single",
    "title": "复习三七时，哪组功效与本条学习资料对应？",
    "options": [
      "疏散退热；疏肝解郁；升举阳气",
      "生用清热泻火；除烦止渴",
      "散瘀止血；消肿定痛",
      "清热泻火；生津润燥"
    ],
    "answer": [
      2
    ],
    "explanation": "三七的本条功效主线为散瘀止血；消肿定痛。辨证线索：瘀血相关出血及跌扑肿痛。辨析：止血兼散瘀，不等于当归补血；孕期慎用。",
    "sourceId": "university-herb-059",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-059-part",
    "subject": "zy2",
    "knowledgeId": "herb-059",
    "type": "single",
    "title": "根据本条公开教学资料，三七的药用部位是？",
    "options": [
      "干燥根（本参考资料所列部位）",
      "干燥树皮",
      "干燥菌核",
      "动物贝壳"
    ],
    "answer": [
      0
    ],
    "explanation": "本条资料对应的药用部位是干燥根（本参考资料所列部位）。止血兼散瘀，不等于当归补血；孕期慎用。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-059",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-060-function",
    "subject": "zy2",
    "knowledgeId": "herb-060",
    "type": "single",
    "title": "复习艾叶时，哪组功效与本条学习资料对应？",
    "options": [
      "生用清热泻火；除烦止渴",
      "清热泻火；生津润燥",
      "泻火除烦；清热利湿；凉血解毒",
      "散寒止痛；温经止血"
    ],
    "answer": [
      3
    ],
    "explanation": "艾叶的本条功效主线为散寒止痛；温经止血。辨证线索：虚寒性出血及少腹冷痛。辨析：温经止血与凉血止血相区别；叶入药，炭品另记侧重。",
    "sourceId": "university-herb-060",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-060-part",
    "subject": "zy2",
    "knowledgeId": "herb-060",
    "type": "single",
    "title": "根据本条公开教学资料，艾叶的药用部位是？",
    "options": [
      "干燥菌核",
      "干燥叶",
      "动物贝壳",
      "矿物结晶"
    ],
    "answer": [
      1
    ],
    "explanation": "本条资料对应的药用部位是干燥叶。温经止血与凉血止血相区别；叶入药，炭品另记侧重。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-060",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-061-function",
    "subject": "zy2",
    "knowledgeId": "herb-061",
    "type": "single",
    "title": "复习山楂时，哪组功效与本条学习资料对应？",
    "options": [
      "消食健胃；行气散瘀",
      "疏散风热；清利头目；利咽透疹",
      "散风清热；平肝明目",
      "解肌退热；生津；透疹；升阳止泻"
    ],
    "answer": [
      0
    ],
    "explanation": "山楂的本条功效主线为消食健胃；行气散瘀。辨证线索：肉食积滞、胃脘胀满及相关瘀血证。辨析：消食与散瘀兼有；焦制品侧重消食导滞。",
    "sourceId": "university-herb-061",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-061-part",
    "subject": "zy2",
    "knowledgeId": "herb-061",
    "type": "single",
    "title": "根据本条公开教学资料，山楂的药用部位是？",
    "options": [
      "动物贝壳",
      "矿物结晶",
      "干燥成熟果实",
      "动物沙囊内壁"
    ],
    "answer": [
      2
    ],
    "explanation": "本条资料对应的药用部位是干燥成熟果实。消食与散瘀兼有；焦制品侧重消食导滞。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-061",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-062-function",
    "subject": "zy2",
    "knowledgeId": "herb-062",
    "type": "single",
    "title": "复习麦芽时，哪组功效与本条学习资料对应？",
    "options": [
      "散风清热；平肝明目",
      "行气消食；健脾开胃；退乳消胀",
      "解肌退热；生津；透疹；升阳止泻",
      "疏散退热；疏肝解郁；升举阳气"
    ],
    "answer": [
      1
    ],
    "explanation": "麦芽的本条功效主线为行气消食；健脾开胃；退乳消胀。辨证线索：食积、脾虚食少及乳房胀痛相关情况。辨析：生、炒、焦品作用侧重不同；回乳作用需特别区分。",
    "sourceId": "university-herb-062",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-062-part",
    "subject": "zy2",
    "knowledgeId": "herb-062",
    "type": "single",
    "title": "根据本条公开教学资料，麦芽的药用部位是？",
    "options": [
      "矿物结晶",
      "动物沙囊内壁",
      "干燥根及根茎",
      "大麦成熟果实发芽后的干燥品"
    ],
    "answer": [
      3
    ],
    "explanation": "本条资料对应的药用部位是大麦成熟果实发芽后的干燥品。生、炒、焦品作用侧重不同；回乳作用需特别区分。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-062",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-063-function",
    "subject": "zy2",
    "knowledgeId": "herb-063",
    "type": "single",
    "title": "复习莱菔子时，哪组功效与本条学习资料对应？",
    "options": [
      "解肌退热；生津；透疹；升阳止泻",
      "疏散退热；疏肝解郁；升举阳气",
      "消食除胀；降气化痰",
      "生用清热泻火；除烦止渴"
    ],
    "answer": [
      2
    ],
    "explanation": "莱菔子的本条功效主线为消食除胀；降气化痰。辨证线索：饮食积滞、腹胀及痰壅喘咳。辨析：消食和降气化痰串联；不能当作补气药记。",
    "sourceId": "university-herb-063",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-063-part",
    "subject": "zy2",
    "knowledgeId": "herb-063",
    "type": "single",
    "title": "根据本条公开教学资料，莱菔子的药用部位是？",
    "options": [
      "干燥成熟种子",
      "动物沙囊内壁",
      "干燥根及根茎",
      "干燥叶"
    ],
    "answer": [
      0
    ],
    "explanation": "本条资料对应的药用部位是干燥成熟种子。消食和降气化痰串联；不能当作补气药记。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-063",
    "origin": "原创来源辨析 · 非历年真题"
  },
  {
    "id": "herb-064-function",
    "subject": "zy2",
    "knowledgeId": "herb-064",
    "type": "single",
    "title": "复习鸡内金时，哪组功效与本条学习资料对应？",
    "options": [
      "疏散退热；疏肝解郁；升举阳气",
      "生用清热泻火；除烦止渴",
      "清热泻火；生津润燥",
      "健脾消食；涩精止遗"
    ],
    "answer": [
      3
    ],
    "explanation": "鸡内金的本条功效主线为健脾消食；涩精止遗。辨证线索：食积不消、小儿疳积及遗尿遗精。辨析：属于动物药，入药为沙囊内壁，不是鸡蛋壳。",
    "sourceId": "university-herb-064",
    "origin": "原创基础练习 · 非历年真题"
  },
  {
    "id": "herb-064-part",
    "subject": "zy2",
    "knowledgeId": "herb-064",
    "type": "single",
    "title": "根据本条公开教学资料，鸡内金的药用部位是？",
    "options": [
      "干燥根及根茎",
      "家鸡的干燥沙囊内壁",
      "干燥成熟果实",
      "干燥叶"
    ],
    "answer": [
      1
    ],
    "explanation": "本条资料对应的药用部位是家鸡的干燥沙囊内壁。属于动物药，入药为沙囊内壁，不是鸡蛋壳。基原及现行药典规范以当年考试教材为准。",
    "sourceId": "university-herb-064",
    "origin": "原创来源辨析 · 非历年真题"
  }
];
