import {sitePath} from './site-paths.ts';
export type StoryClipId='arrival'|'training'|'dance'|'party'|'party-cooking'|'terrace';
export const storyClips:Record<StoryClipId,{src:string;seconds:number;label:string}>={
 arrival:{src:sitePath('/media/scene-arrival.mp4'),seconds:3.75,label:'机器人迎接并接过外套'},
 training:{src:sitePath('/media/scene-training.mp4'),seconds:6.5,label:'客厅腾出训练空间'},
 dance:{src:sitePath('/media/scene-dance.mp4'),seconds:5.95,label:'人与机器人共舞'},
 party:{src:sitePath('/media/scene-party.mp4'),seconds:4.5,label:'餐桌展开成为多人用餐空间'},
 'party-cooking':{src:sitePath('/media/scene-party-cooking.mp4'),seconds:8.46,label:'机器人在厨房备餐'},
 terrace:{src:sitePath('/media/scene-terrace.mp4'),seconds:5.5,label:'露台遮阳顶与灯光展开'},
};
