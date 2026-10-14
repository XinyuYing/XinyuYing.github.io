import {SITE_BASE,siteLocalPath} from './site-paths.ts';
import {scenes,type SceneId} from './scene-content.ts';
import {packages,type PackageId} from './pricing-model.ts';
export type SiteRoute={kind:'home'}|{kind:'scene';scene:SceneId}|{kind:'pricing';selected:PackageId|null};
type LocationParts={pathname:string;search:string;hash:string};
const legacyScenes:Record<string,SceneId>={'#story':'arrival','#training':'training','#dance':'dance','#party':'kitchen','#dining':'dining','#terrace':'terrace'};
export function readRoute(location:LocationParts,base=SITE_BASE):SiteRoute{
 const path=siteLocalPath(location.pathname,base).replace(/\/+$/,'')||'/';
 if(path==='/pricing'||(path==='/'&&location.hash==='#configure')){
  const plan=new URLSearchParams(location.search).get('plan');
  return {kind:'pricing',selected:packages.find(item=>item.id===plan)?.id??null};
 }
 if(path.startsWith('/scenes/')){
  const scene=scenes.find(item=>path==='/scenes/'+item.id);
  if(scene)return {kind:'scene',scene:scene.id};
 }
 if(path==='/'&&legacyScenes[location.hash])return {kind:'scene',scene:legacyScenes[location.hash]};
 return {kind:'home'};
}
export function routeTitle(route:SiteRoute):string{
 if(route.kind==='pricing')return '配置与价格 · SmartHome Max · FutureTech';
 if(route.kind==='scene')return scenes.find(scene=>scene.id===route.scene)!.name+' · SmartHome Max · FutureTech';
 return 'SmartHome Max — FutureTech 智能生活系统';
}
