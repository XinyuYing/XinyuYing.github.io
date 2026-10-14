import {sitePath} from './site-paths.ts';
import {ArrowLeft,ArrowRight} from 'lucide-react';
import type {MouseEvent} from 'react';
import StoryMedia from './StoryMedia';
import {scenes,scenePath,type SceneId} from './scene-content';
export default function VideoScene({scene,onNavigate}:{scene:SceneId;onNavigate:(event:MouseEvent<HTMLAnchorElement>)=>void}){
 const index=scenes.findIndex(item=>item.id===scene),item=scenes[index],next=scenes[(index+1)%scenes.length];
 return <section className={'scene-page scene-page-'+scene} aria-labelledby="scene-title">
  <div className="scene-page-heading"><a href={sitePath('/')} onClick={onNavigate}><ArrowLeft size={15}/>首页</a><p>{item.name}</p></div>
  <div className="scene-cinema">
   <StoryMedia id={item.clip} suspended={false}><picture className="chapter-photograph"><img src={sitePath('/media/scene-'+item.clip+'.jpg')} alt={item.posterAlt} width="854" height="480" fetchPriority="high"/></picture></StoryMedia>
   <div className="scene-film-shade"/><div className="scene-film-copy"><h1 id="scene-title">{item.title[0]}<br/>{item.title[1]}</h1></div>
  </div>
  <div className="scene-page-bottom"><p>{item.description}</p><a href={scenePath(next.id)} onClick={onNavigate}>下一幕 · {next.name}<ArrowRight size={16}/></a></div>
 </section>;
}
