// Metadata verified using Bilibili's public video API on 2026-10-12.
import type { SubjectId } from './data';
export interface VideoLesson {page:number;title:string;chapter:string;duration:number;knowledgeIds:string[]}
export interface VideoCourse {id:string;bvid:string;title:string;shortTitle:string;subject:SubjectId;year:number;teacher:string;kind:string;publisher:string;publisherUrl:string;publishedAt:string;checkedAt:string;note:string;lessons:VideoLesson[]}
export const videoCourses:VideoCourse[]=[
  {
    "id": "BV12ueRzeE7b",
    "bvid": "BV12ueRzeE7b",
    "title": "2025年执业药师中药一押题密决-车驰老师",
    "shortTitle": "中药一公开串讲",
    "subject": "zy1",
    "year": 2025,
    "teacher": "车驰",
    "kind": "考点串讲",
    "publisher": "润德教育",
    "publisherUrl": "https://space.bilibili.com/28564586",
    "publishedAt": "2025-08-25",
    "checkedAt": "2026-10-12",
    "note": "2025 年公开串讲，不是红宝书完整课程；按视频原有选集观看。",
    "lessons": [
      {
        "page": 1,
        "title": "中药一公开串讲",
        "chapter": "全科考点串讲",
        "duration": 5676,
        "knowledgeIds": []
      }
    ]
  },
  {
    "id": "BV1mueRzeEu8",
    "bvid": "BV1mueRzeEu8",
    "title": "2025年执业药师中药二押题秘诀-大琦老师",
    "shortTitle": "中药二公开串讲",
    "subject": "zy2",
    "year": 2025,
    "teacher": "大琦",
    "kind": "考点串讲",
    "publisher": "润德教育",
    "publisherUrl": "https://space.bilibili.com/28564586",
    "publishedAt": "2025-08-25",
    "checkedAt": "2026-10-12",
    "note": "2025 年公开串讲，不是红宝书完整课程；按视频原有选集观看。",
    "lessons": [
      {
        "page": 1,
        "title": "中药二公开串讲",
        "chapter": "全科考点串讲",
        "duration": 6498,
        "knowledgeIds": []
      }
    ]
  },
  {
    "id": "BV1TueRzvEHk",
    "bvid": "BV1TueRzvEHk",
    "title": "2025年执业药师中药综合押题密决-家民老师",
    "shortTitle": "中药综合公开串讲",
    "subject": "zh",
    "year": 2025,
    "teacher": "家民",
    "kind": "考点串讲",
    "publisher": "润德教育",
    "publisherUrl": "https://space.bilibili.com/28564586",
    "publishedAt": "2025-08-25",
    "checkedAt": "2026-10-12",
    "note": "2025 年公开串讲，不是红宝书完整课程；按视频原有选集观看。",
    "lessons": [
      {
        "page": 1,
        "title": "中药综合公开串讲",
        "chapter": "全科考点串讲",
        "duration": 5130,
        "knowledgeIds": []
      }
    ]
  },
  {
    "id": "BV1y5eRzcEVS",
    "bvid": "BV1y5eRzcEVS",
    "title": "2025年执业药师法规押题密决-郑国老师",
    "shortTitle": "法规公开串讲",
    "subject": "fg",
    "year": 2025,
    "teacher": "郑国",
    "kind": "考点串讲",
    "publisher": "润德教育",
    "publisherUrl": "https://space.bilibili.com/28564586",
    "publishedAt": "2025-08-25",
    "checkedAt": "2026-10-12",
    "note": "2025 年公开串讲；2026 法规变动请对照当年指南，视频中的押题表述不代表考试承诺。",
    "lessons": [
      {
        "page": 1,
        "title": "法规公开串讲",
        "chapter": "全科考点串讲",
        "duration": 5685,
        "knowledgeIds": []
      }
    ]
  },
  {
    "id": "BV1364y197NU",
    "bvid": "BV1364y197NU",
    "title": "【执业药师】2022年执业中药师《中药学专业知识一》精讲课程完整版",
    "shortTitle": "中药一基础公开选集",
    "subject": "zy1",
    "year": 2022,
    "teacher": "希赛讲师",
    "kind": "基础讲解",
    "publisher": "希赛执业药师",
    "publisherUrl": "https://space.bilibili.com/431652063",
    "publishedAt": "2021-06-28",
    "checkedAt": "2026-10-12",
    "note": "旧版基础参考，课程标注 2022 年；目录和考点范围不等同于 2026 大纲。",
    "lessons": [
      {
        "page": 1,
        "title": "四气",
        "chapter": "药性理论",
        "duration": 801,
        "knowledgeIds": [
          "k01"
        ]
      },
      {
        "page": 2,
        "title": "五味",
        "chapter": "药性理论",
        "duration": 1511,
        "knowledgeIds": [
          "k02"
        ]
      },
      {
        "page": 3,
        "title": "升降浮沉与归经",
        "chapter": "药性理论",
        "duration": 1226,
        "knowledgeIds": [
          "k03"
        ]
      },
      {
        "page": 4,
        "title": "有毒无毒与功效分类",
        "chapter": "药性理论",
        "duration": 877,
        "knowledgeIds": []
      },
      {
        "page": 5,
        "title": "基原鉴定与性状鉴别",
        "chapter": "质量标准与鉴别",
        "duration": 2210,
        "knowledgeIds": []
      },
      {
        "page": 6,
        "title": "显微鉴别",
        "chapter": "质量标准与鉴别",
        "duration": 641,
        "knowledgeIds": []
      },
      {
        "page": 7,
        "title": "理化鉴别与其他鉴定方法",
        "chapter": "质量标准与鉴别",
        "duration": 650,
        "knowledgeIds": []
      },
      {
        "page": 8,
        "title": "蒸、煮、燀法（一）",
        "chapter": "中药炮制",
        "duration": 1683,
        "knowledgeIds": [
          "k05"
        ]
      },
      {
        "page": 9,
        "title": "蒸、煮、燀法（二）",
        "chapter": "中药炮制",
        "duration": 869,
        "knowledgeIds": [
          "k05"
        ]
      },
      {
        "page": 10,
        "title": "蒸、煮、燀法（三）",
        "chapter": "中药炮制",
        "duration": 481,
        "knowledgeIds": [
          "k05"
        ]
      },
      {
        "page": 11,
        "title": "黄酮类化合物（一）",
        "chapter": "中药化学成分",
        "duration": 663,
        "knowledgeIds": []
      },
      {
        "page": 12,
        "title": "黄酮类化合物（二）",
        "chapter": "中药化学成分",
        "duration": 978,
        "knowledgeIds": []
      },
      {
        "page": 13,
        "title": "黄酮类化合物（三）",
        "chapter": "中药化学成分",
        "duration": 1060,
        "knowledgeIds": []
      },
      {
        "page": 14,
        "title": "叶类中药",
        "chapter": "常用中药鉴别",
        "duration": 1330,
        "knowledgeIds": []
      },
      {
        "page": 15,
        "title": "藻、菌、地衣类中药",
        "chapter": "常用中药鉴别",
        "duration": 961,
        "knowledgeIds": []
      },
      {
        "page": 16,
        "title": "树脂类中药",
        "chapter": "常用中药鉴别",
        "duration": 626,
        "knowledgeIds": []
      },
      {
        "page": 17,
        "title": "其他类中药",
        "chapter": "常用中药鉴别",
        "duration": 688,
        "knowledgeIds": []
      },
      {
        "page": 18,
        "title": "液体制剂：含义与附加剂",
        "chapter": "中药制剂与剂型",
        "duration": 923,
        "knowledgeIds": []
      },
      {
        "page": 19,
        "title": "液体制剂：表面活性剂",
        "chapter": "中药制剂与剂型",
        "duration": 1212,
        "knowledgeIds": []
      },
      {
        "page": 20,
        "title": "溶液剂",
        "chapter": "中药制剂与剂型",
        "duration": 626,
        "knowledgeIds": []
      },
      {
        "page": 21,
        "title": "乳剂",
        "chapter": "中药制剂与剂型",
        "duration": 1001,
        "knowledgeIds": []
      },
      {
        "page": 22,
        "title": "混悬剂",
        "chapter": "中药制剂与剂型",
        "duration": 968,
        "knowledgeIds": []
      },
      {
        "page": 23,
        "title": "中药与方剂复习",
        "chapter": "综合复习",
        "duration": 1989,
        "knowledgeIds": []
      },
      {
        "page": 24,
        "title": "中药材生产与品质复习",
        "chapter": "综合复习",
        "duration": 1503,
        "knowledgeIds": []
      },
      {
        "page": 25,
        "title": "质量标准与鉴定复习",
        "chapter": "综合复习",
        "duration": 721,
        "knowledgeIds": []
      },
      {
        "page": 26,
        "title": "中药药理与毒理复习",
        "chapter": "综合复习",
        "duration": 2979,
        "knowledgeIds": []
      },
      {
        "page": 27,
        "title": "制剂与剂型复习（一）",
        "chapter": "综合复习",
        "duration": 7224,
        "knowledgeIds": []
      },
      {
        "page": 28,
        "title": "制剂与剂型复习（二）",
        "chapter": "综合复习",
        "duration": 7326,
        "knowledgeIds": []
      }
    ]
  },
  {
    "id": "BV1Ee4y127JP",
    "bvid": "BV1Ee4y127JP",
    "title": "2022年润德教育速效救命班体验课--中药二",
    "shortTitle": "中药二体验课",
    "subject": "zy2",
    "year": 2022,
    "teacher": "润德讲师",
    "kind": "体验课程",
    "publisher": "润德教育",
    "publisherUrl": "https://space.bilibili.com/28564586",
    "publishedAt": "2022-10-31",
    "checkedAt": "2026-10-12",
    "note": "旧版基础参考，课程标注 2022 年；目录和考点范围不等同于 2026 大纲。",
    "lessons": [
      {
        "page": 1,
        "title": "体验课 A",
        "chapter": "综合体验",
        "duration": 1512,
        "knowledgeIds": []
      },
      {
        "page": 2,
        "title": "体验课 B",
        "chapter": "综合体验",
        "duration": 1499,
        "knowledgeIds": []
      },
      {
        "page": 3,
        "title": "体验课 C",
        "chapter": "综合体验",
        "duration": 942,
        "knowledgeIds": []
      }
    ]
  }
];
export function videoUrl(bvid:string,page=1){return 'https://www.bilibili.com/video/'+bvid+'/?p='+page;}
export function playerUrl(bvid:string,page=1){return 'https://player.bilibili.com/player.html?bvid='+bvid+'&page='+page+'&p='+page+'&autoplay=0&danmaku=0';}
export function durationText(seconds:number){const minutes=Math.floor(seconds/60);return minutes>=60?Math.floor(minutes/60)+'小时'+minutes%60+'分':minutes+'分'+String(seconds%60).padStart(2,'0')+'秒';}
