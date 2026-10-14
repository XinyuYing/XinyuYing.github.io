import {useEffect,useRef,useState,type ReactNode} from 'react';
import {Pause,Play,Volume2,VolumeX} from 'lucide-react';
import {storyClips,type StoryClipId} from './story-clips';

const soundEvent='smarthome-scene-sound';

export default function StoryMedia({id,suspended,children}:{id:StoryClipId;suspended:boolean;children:ReactNode}){
 const {src,label}=storyClips[id];
 const host=useRef<HTMLDivElement>(null),video=useRef<HTMLVideoElement>(null);
 const [near,setNear]=useState(false),[visible,setVisible]=useState(false);
 const [pageVisible,setPageVisible]=useState(!document.hidden);
 const [reduced,setReduced]=useState(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
 const [requested,setRequested]=useState(false),[userPaused,setUserPaused]=useState(false);
 const [playing,setPlaying]=useState(false),[failed,setFailed]=useState(false);
 const [ready,setReady]=useState(false),[soundOn,setSoundOn]=useState(false);

 useEffect(()=>{
  setRequested(false);setUserPaused(false);setFailed(false);
  setReady(false);setPlaying(false);setSoundOn(false);
 },[src]);

 useEffect(()=>{
  if(!src||!host.current)return;
  const observer=new IntersectionObserver(([entry])=>setVisible(entry.isIntersecting&&entry.intersectionRatio>=.35),{threshold:[0,.35]});
  const preload=new IntersectionObserver(([entry])=>{if(entry.isIntersecting)setNear(true);},{rootMargin:'300px'});
  observer.observe(host.current);preload.observe(host.current);
  const element=video.current;
  return()=>{observer.disconnect();preload.disconnect();if(element){element.pause();element.muted=true;}};
 },[src]);

 useEffect(()=>{
  const query=window.matchMedia('(prefers-reduced-motion: reduce)');
  const updateMotion=()=>setReduced(query.matches);
  const updatePage=()=>setPageVisible(!document.hidden);
  query.addEventListener('change',updateMotion);
  document.addEventListener('visibilitychange',updatePage);
  return()=>{query.removeEventListener('change',updateMotion);document.removeEventListener('visibilitychange',updatePage);};
 },[]);

 useEffect(()=>{
  const muteWhenAnotherSceneStarts=(event:Event)=>{
   if((event as CustomEvent<StoryClipId>).detail===id)return;
   if(video.current)video.current.muted=true;
   setSoundOn(false);
  };
  window.addEventListener(soundEvent,muteWhenAnotherSceneStarts);
  return()=>window.removeEventListener(soundEvent,muteWhenAnotherSceneStarts);
 },[id]);

 useEffect(()=>{
  if(visible&&pageVisible&&!suspended)return;
  if(video.current)video.current.muted=true;
  setSoundOn(false);
 },[visible,pageVisible,suspended]);

 useEffect(()=>{
  const element=video.current;
  if(!element||!src)return;
  if((near||visible)&&!element.getAttribute('src'))element.src=src;
  element.muted=!soundOn;
  const shouldPlay=visible&&pageVisible&&!suspended&&!userPaused&&!failed&&(!reduced||requested);
  if(shouldPlay)void element.play().catch(()=>setPlaying(false));
  else element.pause();
 },[src,near,visible,pageVisible,suspended,userPaused,failed,reduced,requested,soundOn]);

 const togglePlayback=()=>{
  const element=video.current;
  if(!element)return;
  if(playing){setUserPaused(true);element.pause();return;}
  if(!element.getAttribute('src'))element.src=src;
  setRequested(true);setUserPaused(false);
  element.muted=!soundOn;
  void element.play().catch(()=>setPlaying(false));
 };

 const toggleSound=()=>{
  const element=video.current;
  if(!element)return;
  if(soundOn){element.muted=true;setSoundOn(false);return;}
  window.dispatchEvent(new CustomEvent<StoryClipId>(soundEvent,{detail:id}));
  if(!element.getAttribute('src'))element.src=src;
  if(element.readyState>0)element.currentTime=0;
  element.muted=false;
  setSoundOn(true);setRequested(true);setUserPaused(false);
  void element.play().catch(()=>{element.muted=true;setSoundOn(false);setPlaying(false);});
 };

 const loopWhileVisible=()=>{
  const element=video.current;
  setPlaying(false);
  if(!element||!visible||!pageVisible||suspended||userPaused||(reduced&&!requested))return;
  if(soundOn){element.muted=true;setSoundOn(false);}
  element.currentTime=0;
  void element.play().catch(()=>setPlaying(false));
 };

 return <div ref={host} className="story-media" data-clip={id}>
  {children}
  {src&&!failed&&<>
   <video ref={video} key={src} className={ready&&!suspended&&(!reduced||requested)?'story-film ready':'story-film'} muted={!soundOn} playsInline preload="none" aria-label={`${label}短片`}
    onCanPlay={()=>setReady(true)} onPlaying={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onEnded={loopWhileVisible} onError={()=>{setFailed(true);setPlaying(false);setSoundOn(false);}}/>
   <button className="film-control" onClick={togglePlayback} aria-label={`${playing?'暂停':'播放'}${label}短片`}>
    {playing?<Pause size={16}/>:<Play size={16}/>}<span>{playing?'暂停':'播放'}</span>
   </button>
   <button className="sound-control" onClick={toggleSound} aria-pressed={soundOn} aria-label={soundOn?'静音'+label:'听这一幕：'+label} title="原声播放一遍，画面持续循环">
    {soundOn?<Volume2 size={16}/>:<VolumeX size={16}/>}<span>{soundOn?'静音':'听这一幕'}</span>
   </button>
  </>}
 </div>;
}
