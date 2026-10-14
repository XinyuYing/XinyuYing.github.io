import {sitePath,siteLocalPath} from './site-paths.ts';
import {useEffect,useLayoutEffect,useRef,useState,type MouseEvent} from 'react';
import {ArrowUpRight,ArrowDown,ChevronDown,Check} from 'lucide-react';
import LaunchFilm from './LaunchFilm';
import VideoScene from './VideoScene';
import PricingSection from './PricingSection';
import {scenes,scenePath} from './scene-content';
import {readRoute,routeTitle,type SiteRoute} from './site-routes';
import type {PackageId} from './pricing-model';

export default function App(){
 const [route,setRoute]=useState<SiteRoute>(()=>readRoute(window.location));
 const [menu,setMenu]=useState(false);
 const menuRoot=useRef<HTMLDivElement>(null),menuButton=useRef<HTMLButtonElement>(null),main=useRef<HTMLElement>(null);
 const lastRoute=useRef(window.location.pathname);
 useEffect(()=>{
  const update=()=>{setMenu(false);setRoute(readRoute(window.location));};
  const close=(event:PointerEvent)=>{if(!menuRoot.current?.contains(event.target as Node))setMenu(false);};
  const escape=(event:KeyboardEvent)=>{if(event.key==='Escape'&&menuButton.current?.getAttribute('aria-expanded')==='true'){setMenu(false);menuButton.current.focus();}};
  window.addEventListener('popstate',update);window.addEventListener('hashchange',update);
  document.addEventListener('pointerdown',close);document.addEventListener('keydown',escape);
  return()=>{window.removeEventListener('popstate',update);window.removeEventListener('hashchange',update);document.removeEventListener('pointerdown',close);document.removeEventListener('keydown',escape);};
 },[]);
 useLayoutEffect(()=>{
  document.title=routeTitle(route);
  // Existing shared scene links still open the matching independent page.
  if(route.kind==='scene'&&siteLocalPath(window.location.pathname)==='/'&&window.location.hash){window.history.replaceState(null,'',scenePath(route.scene));}
  if(route.kind==='pricing'&&siteLocalPath(window.location.pathname)==='/'&&window.location.hash==='#configure'){window.history.replaceState(null,'',sitePath('/pricing/'));}
  const current=window.location.pathname;
  if(current!==lastRoute.current){window.scrollTo({top:0,behavior:'instant'});main.current?.focus({preventScroll:true});lastRoute.current=current;}
 },[route]);
 const go=(href:string)=>{setMenu(false);window.history.pushState(null,'',href);setRoute(readRoute(window.location));};
 const follow=(event:MouseEvent<HTMLAnchorElement>)=>{
  if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
  const target=new URL(event.currentTarget.href);
  if(target.origin!==window.location.origin)return;
  if(target.pathname===window.location.pathname&&target.search===window.location.search&&target.hash){setMenu(false);return;}
  event.preventDefault();go(target.pathname+target.search+target.hash);window.scrollTo({top:0,behavior:'instant'});
 };
 const choose=(id:PackageId)=>go(sitePath('/pricing/?plan='+id));
 return <div className="site-v9">
  <a className="skip-link" href="#main">跳到正文</a>
  <header className="site-header sample-header">
   <a className="brand" href={sitePath('/')} onClick={follow} aria-label="FutureTech 首页"><span className="brand-mark">f<span>t</span></span><span>FutureTech</span></a>
   <span className="brand-divider"/><a className="product-name" href={sitePath('/')} onClick={follow}>SmartHome Max</a>
   <nav className="sample-navigation" aria-label="产品导航">
    <div ref={menuRoot} className="scene-menu">
     <button ref={menuButton} className={'scene-menu-trigger'+(route.kind==='scene'?' is-current':'')} aria-expanded={menu} aria-controls="scene-dropdown" onClick={()=>setMenu(!menu)}>生活场景<ChevronDown size={16} className={menu?'rotated':''}/></button>
     {menu&&<div id="scene-dropdown" className="scene-dropdown"><p>探索未来家的每一幕</p>{scenes.map(scene=><a href={scenePath(scene.id)} key={scene.id} onClick={follow} aria-current={route.kind==='scene'&&route.scene===scene.id?'page':undefined}><span>{scene.name}</span>{route.kind==='scene'&&route.scene===scene.id?<Check size={16}/>:<ArrowUpRight size={15}/>}</a>)}</div>}
    </div>
    <a className={'nav-cta'+(route.kind==='pricing'?' is-current':'')} href={sitePath('/pricing/')} onClick={follow} aria-current={route.kind==='pricing'?'page':undefined}>配置与价格<ArrowUpRight size={15}/></a>
   </nav>
  </header>
  <main id="main" ref={main} tabIndex={-1}>
   {route.kind==='home'&&<>
    <section id="overview" className="hero hero-v5" aria-labelledby="hero-title">
     <picture><source media="(max-width:600px)" srcSet={sitePath('/media/home-v5-mobile.jpg')}/><img src={sitePath('/media/home-v5.jpg')} alt="窗外山林映入暖色的未来家，客厅、厨房与露台相连" fetchPriority="high" width="1672" height="941"/></picture>
     <div className="hero-shade"/><div className="hero-copy"><p className="hero-eyebrow">FutureTech 未来家</p><h1 id="hero-title">SmartHome Max</h1><p className="hero-statement">给你一个<br/>未来的家。</p><div className="hero-actions"><a className="button white" href="#film">观看完整影片<ArrowDown size={17}/></a><a className="text-link light" href={sitePath('/pricing/')} onClick={follow}>选择你的配置<ArrowUpRight size={16}/></a></div></div>
     <div className="hero-bottom"><span>同一个家，随你的生活改变。</span><span className="hero-fine">向下，遇见未来 ↓</span></div>
    </section>
    <LaunchFilm/>
    <PricingSection onSelect={choose}/>
   </>}
   {route.kind==='scene'&&<VideoScene key={route.scene} scene={route.scene} onNavigate={follow}/>}
   {route.kind==='pricing'&&<PricingSection standalone selected={route.selected} onSelect={choose}/>}
  </main>
  <footer className="site-footer sample-footer"><div><a className="footer-brand" href={sitePath('/')} onClick={follow}>FutureTech</a><span>SmartHome Max</span></div><div className="footer-links"><a href={sitePath('/')} onClick={follow}>首页</a><a href={sitePath('/pricing/')} onClick={follow}>配置与价格<ArrowUpRight size={14}/></a></div><p>FutureTech 概念案例。影像展示理想设备环境，功能需相应设备与空间支持。</p></footer>
 </div>;
}
