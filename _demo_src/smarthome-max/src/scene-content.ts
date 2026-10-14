import {sitePath} from './site-paths.ts';
import type {StoryClipId} from './story-clips';
export type SceneId='arrival'|'training'|'dance'|'kitchen'|'dining'|'terrace';
export type Scene={id:SceneId;name:string;clip:StoryClipId;title:[string,string];description:string;posterAlt:string};
export const scenes:Scene[]=[
 {id:'arrival',name:'回家迎接',clip:'arrival',title:['推开门，','机器人已在等你。'],description:'迎接、接衣，把回家的琐事自然接过去。',posterAlt:'机器人迎接住户并接过外套'},
 {id:'training',name:'空间转换',clip:'training',title:['收起茶几，','留出运动空间。'],description:'茶几下降，地面合拢，客厅腾出一片运动空间。',posterAlt:'茶几收起后，客厅中央形成完整运动区域'},
 {id:'dance',name:'人机共舞',clip:'dance',title:['音乐响起，','一起跳支舞。'],description:'人与机器人在同一个空间里，一起跟随音乐舞动。',posterAlt:'人与机器人在同一空间里跳舞'},
 {id:'kitchen',name:'厨房备餐',clip:'party-cooking',title:['今晚吃点好的，','厨房先忙起来。'],description:'机械臂与机器人接续准备菜肴，让晚餐慢慢就位。',posterAlt:'机器人与机械臂在厨房准备菜肴'},
 {id:'dining',name:'人数转换',clip:'party',title:['餐桌展开，','多几位也坐得下。'],description:'用餐空间展开，桌面与座位随相聚的需要调整。',posterAlt:'餐桌与座位展开，形成多人用餐空间'},
 {id:'terrace',name:'场景转换',clip:'terrace',title:['从室内到露台，','晚餐换个风景。'],description:'遮阳顶与灯光就位，把相聚带到山林与晚风之间。',posterAlt:'露台遮阳顶与灯光展开，户外餐桌进入用餐状态'},
];
export const scenePath=(id:SceneId)=>sitePath('/scenes/'+id+'/');
