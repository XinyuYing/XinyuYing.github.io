export type Chapter='arrival'|'training'|'party';
export type Point={x:number;z:number};
export type MotionStatus='idle'|'running'|'paused'|'complete'|'cancelled';
export const kitchen:Point={x:4.7,z:-2.5},junction:Point={x:5.1,z:2.25},indoor:Point={x:3.85,z:2.25},terrace:Point={x:8.2,z:2.25};
export type Pose={curtain:number;light:number;sofa:number;tableDrop:number;hatch:number;recess:number;forest:number;dining:number;plating:number;robot:number;canopy:number;terraceLight:number;cart:Point;heading:number;loaded:boolean};
export type MotionState={chapter:Chapter;status:MotionStatus;time:number;reduced:boolean;target:'indoor'|'terrace';route:Point[];distance:number;terraceTime:number;transfer:boolean;headingFrom:number|null;turnTime:number;restore:boolean;restoreTime:number;restoreFrom:Pose|null;message:string};
export type MotionAction={type:'START'|'PAUSE'|'RESUME'|'CANCEL'|'RESTORE'|'TERRACE'|'STEP'}|{type:'TICK';dt:number}|{type:'REDUCED';value:boolean}|{type:'RESET';chapter?:Chapter};
export const clamp=(v:number)=>Math.max(0,Math.min(1,v));
const ease=(v:number)=>{v=clamp(v);return v*v*(3-2*v);};
const stage=(t:number,start:number,length:number)=>ease((t-start)/length);
export function routeLength(points:Point[]){return points.slice(1).reduce((n,p,i)=>n+Math.hypot(p.x-points[i].x,p.z-points[i].z),0);}
export function routePose(points:Point[],distance:number):{cart:Point;heading:number}{
 let left=Math.max(0,distance);for(let i=1;i<points.length;i++){const a=points[i-1],b=points[i],len=Math.hypot(b.x-a.x,b.z-a.z);if(left<=len||i===points.length-1){const f=len?clamp(left/len):1;return {cart:{x:a.x+(b.x-a.x)*f,z:a.z+(b.z-a.z)*f},heading:Math.atan2(b.x-a.x,b.z-a.z)};}left-=len;}return {cart:{...points[0]},heading:0};
}

export function roundedRoute(points:Point[]):Point[]{
 const out:Point[]=[{...points[0]}];for(let i=1;i<points.length-1;i++){const a=points[i-1],b=points[i],c=points[i+1];const ab=Math.hypot(b.x-a.x,b.z-a.z),bc=Math.hypot(c.x-b.x,c.z-b.z);if(ab<.001||bc<.001)continue;const r=Math.min(.38,ab*.35,bc*.35),before={x:b.x+(a.x-b.x)*r/ab,z:b.z+(a.z-b.z)*r/ab},after={x:b.x+(c.x-b.x)*r/bc,z:b.z+(c.z-b.z)*r/bc};out.push(before);for(let j=1;j<=8;j++){const t=j/8,u=1-t;out.push({x:u*u*before.x+2*u*t*b.x+t*t*after.x,z:u*u*before.z+2*u*t*b.z+t*t*after.z});}}out.push({...points[points.length-1]});return out;
}
export function initialMotion(chapter:Chapter,reduced=false):MotionState{return {chapter,status:'idle',time:0,reduced,target:'indoor',route:roundedRoute([{...kitchen},{...junction},{...indoor}]),distance:0,terraceTime:0,transfer:false,headingFrom:null,turnTime:0,restore:false,restoreTime:0,restoreFrom:null,message:'等待你的指令'};}
export function scenePose(s:MotionState):Pose{
 const t=s.time;const a=s.chapter==='arrival',tr=s.chapter==='training',p=s.chapter==='party';
 const routeView=routePose(s.route,s.distance);if(s.headingFrom!==null&&s.turnTime<.7){const change=Math.atan2(Math.sin(routeView.heading-s.headingFrom),Math.cos(routeView.heading-s.headingFrom));routeView.heading=s.headingFrom+change*ease(s.turnTime/.7);}
 const v:Pose={curtain:a?stage(t,1,3):1,light:a?stage(t,0,4):1,sofa:tr?stage(t,0,4):0,tableDrop:tr?stage(t,3,3):0,hatch:tr?stage(t,6,1):0,recess:tr?stage(t,2,1)*(1-stage(t,6,1)):0,forest:tr?stage(t,7.5,1.5):0,dining:p?stage(t,1,4):0,plating:p?stage(t,0,5):0,robot:p?clamp((t-5)/9):0,canopy:p?stage(s.terraceTime,0,3):0,terraceLight:p?stage(s.terraceTime,2,2):0,...routeView,loaded:p&&t>=5};
 if(s.restore&&s.restoreFrom){const f=stage(s.restoreTime,.7,6),r=s.restoreFrom;return {...r,forest:r.forest*(1-stage(s.restoreTime,0,.7)),sofa:r.sofa*(1-f),tableDrop:r.tableDrop*(1-f),hatch:0,recess:(r.recess+(1-r.recess)*stage(s.restoreTime,0,.7))*(1-stage(s.restoreTime,6.7,.8))};}return v;
}
export function motionStage(s:MotionState):string{
 if(s.status==='cancelled')return '已取消 · 当前位置已保留';
 if(s.restore)return s.status==='complete'?'已恢复日常布局':s.restoreTime<.7?'关闭训练光景，打开收纳槽':s.restoreTime<6.7?'家具沿原路径恢复日常位置':'家具已停稳，收纳槽闭合';
 if(s.status==='idle')return s.chapter==='party'?'今晚朋友来 · 6 人':s.chapter==='training'?'日常客厅 · 等待开始训练':'回家模式 · 等待确认';
 if(s.chapter==='arrival')return s.time<1.3?'玄关灯依次亮起':s.time<4?'窗帘打开，客厅灯光转暖':'灯光、窗帘已准备好';
 if(s.chapter==='training')return s.time<3?'模块沙发沿导轨收拢':s.time<6?'茶几下降，中央空间腾出':s.time<7.5?'家具停稳，收纳槽闭合':'山林展开，训练路径亮起';
 if(s.status==='complete')return s.target==='terrace'?'已到达露台 · 6 人聚会准备就绪':'已到达室内餐桌 · 6 人聚会准备就绪';
 if(s.transfer)return '新的转运任务 · 原餐车正前往露台';
 if(s.time<5)return '已备菜肴装盘，餐桌延展至六人';
 if(s.time<14)return '机器人布置餐具，餐车准备出发';
 return s.target==='terrace'?'目的地已改为露台 · 同一餐车正在转向':'餐车正在前往室内餐桌';
}
const finished=(s:MotionState)=>s.restore?s.restoreTime>=7.5:s.chapter==='arrival'?s.time>=5:s.chapter==='training'?s.time>=9:s.time>=15&&s.distance>=routeLength(s.route)&&(s.target!=='terrace'||s.terraceTime>=4);
function advance(s:MotionState,dt:number):MotionState{
 if(!Number.isFinite(dt)||dt<=0)return s;
 const n={...s};if(n.restore)n.restoreTime=Math.min(7.5,s.restoreTime+dt);else {n.time=Math.min(s.chapter==='party'?15:s.chapter==='training'?9:5,s.time+dt);if(s.chapter==='party'){if(s.target==='terrace')n.terraceTime=Math.min(4,s.terraceTime+dt);if(s.headingFrom!==null)n.turnTime=Math.min(.7,s.turnTime+dt);const turnDelay=s.headingFrom!==null?Math.max(0,.7-s.turnTime):0;const moving=Math.min(Math.max(0,dt-turnDelay),Math.max(0,(s.time+dt)-Math.max(s.time,14)));n.distance=Math.min(routeLength(s.route),s.distance+moving*1.1);}}if(finished(n))n.status='complete';return {...n,message:motionStage(n)};
}
export function motionReducer(s:MotionState,a:MotionAction):MotionState{
 switch(a.type){
 case 'START':if(s.status!=='idle')return s;return {...s,status:s.reduced?'paused':'running',message:'指令已确认'};
 case 'TICK':return s.status==='running'&&!s.reduced?advance(s,Math.min(a.dt,.12)):s;
 case 'STEP':return s.status==='paused'?advance(s,1):s;
 case 'PAUSE':return s.status==='running'?{...s,status:'paused',message:'已暂停 · 当前位置已保留'}:s;
 case 'RESUME':return s.status==='paused'&&!s.reduced?{...s,status:'running'}:s;
 case 'CANCEL':return ['running','paused'].includes(s.status)?{...s,status:'cancelled',message:'已取消 · 当前位置已保留'}:s;
 case 'RESTORE':if(s.chapter!=='training'||s.status==='idle'||(s.restore&&s.status!=='cancelled'))return s;return {...s,restore:true,restoreTime:0,restoreFrom:scenePose(s),status:s.reduced?'paused':'running',message:'正在恢复日常布局'};
 case 'TERRACE':{
 if(s.chapter!=='party'||s.target==='terrace'||s.status==='idle'||s.status==='cancelled')return s;
 const currentPose=scenePose(s),current=currentPose.cart;const points:Point[]=[{...current}];
 // Keep the exact current position. Backtrack to the clear route junction if indoor delivery began.
 if(s.distance<routeLength([kitchen,junction]))points.push({...junction});else if(Math.hypot(current.x-junction.x,current.z-junction.z)>.001)points.push({...junction});
 points.push({...terrace});return {...s,target:'terrace',route:roundedRoute(points),distance:0,headingFrom:currentPose.heading,turnTime:0,transfer:s.status==='complete',status:s.status==='complete'?(s.reduced?'paused':'running'):s.status,message:s.status==='complete'?'开始新的露台转运任务':'目的地已更新为露台'};}
 case 'REDUCED':return {...s,reduced:a.value,status:a.value&&s.status==='running'?'paused':s.status};
 case 'RESET':return initialMotion(a.chapter||s.chapter,s.reduced);
 }
}
