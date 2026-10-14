import {sitePath} from './site-paths.ts';
import {useEffect,useRef,useState} from 'react';
import {Play,RotateCcw} from 'lucide-react';
export default function LaunchFilm(){
 const video=useRef<HTMLVideoElement>(null);
 const [started,setStarted]=useState(false),[ended,setEnded]=useState(false),[failed,setFailed]=useState(false);
 const [message,setMessage]=useState('');
 useEffect(()=>{
  const element=video.current;if(!element)return;
  const observer=new IntersectionObserver(([entry])=>{if(!entry.isIntersecting)element.pause();});
  const hide=()=>{if(document.hidden)element.pause();};
  observer.observe(element);document.addEventListener('visibilitychange',hide);
  return()=>{observer.disconnect();document.removeEventListener('visibilitychange',hide);element.pause();};
 },[]);
 const play=()=>{
  const element=video.current;if(!element)return;
  if(failed){setFailed(false);element.load();}
  if(ended)element.currentTime=0;
  element.muted=false;setEnded(false);setStarted(true);setMessage('');
  element.parentElement?.scrollIntoView({block:'center',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
  void element.play().catch(()=>setMessage('点击视频的播放按钮继续观看。'));
 };
 return <section id="film" className="launch-film-section" aria-labelledby="film-title">
  <div className="film-heading"><p className="eyebrow">SmartHome Max · 产品影片</p><h2 id="film-title">走进 FutureTech 未来家。</h2></div>
  <div className="launch-film-player">
   <video ref={video} src={sitePath('/media/smarthome-max-full.mp4?v=smile-brand-20261010')} poster={sitePath('/media/film-cover.jpg')} width="854" height="480" preload="none" playsInline controls={started&&!failed} aria-label="SmartHome Max 完整产品影片（约40秒）" onPlaying={()=>{setStarted(true);setEnded(false);}} onEnded={()=>setEnded(true)} onError={()=>{setFailed(true);setMessage('影片暂时未能加载，请重试。');}}/>
   {(!started||ended||failed)&&<button className="launch-film-play" onClick={play}>{ended?<RotateCcw size={23}/>:<Play size={23} fill="currentColor"/>}<span>{failed?'重新加载影片':ended?'再次观看':'播放完整影片'}<small>约 40 秒 · 原声</small></span></button>}
  </div>
  {message&&<p className="film-message" role="status">{message}</p>}
 </section>;
}
