import {sitePath} from './site-paths.ts';
import {useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {clamp,routeLength,routePose,type Chapter,type Pose,type Point} from './motion-model';
type ViewProps={pose:Pose;chapter:Chapter;active:boolean;staticView:boolean;onError:()=>void};
export default function HomeWorld({pose,chapter,active,staticView,onError}:ViewProps){
 const host=useRef<HTMLDivElement>(null),update=useRef<((p:Pose)=>void)|null>(null),current=useRef(pose);current.current=pose;const [ready,setReady]=useState(false),[failed,setFailed]=useState(false);const failRef=useRef(onError);failRef.current=onError;
 useEffect(()=>{if(!active||!host.current)return;const parent=host.current;let disposed=false;let renderer:THREE.WebGLRenderer;
 try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'low-power'});}catch{setFailed(true);failRef.current();return;}
 renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.6));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.96;renderer.outputColorSpace=THREE.SRGBColorSpace;parent.append(renderer.domElement);renderer.domElement.setAttribute('aria-hidden','true');
 const scene=new THREE.Scene();scene.background=new THREE.Color('#1d252a');
 const pmrem=new THREE.PMREMGenerator(renderer),env=pmrem.fromScene(new RoomEnvironment(),.04);scene.environment=env.texture;scene.environmentIntensity=.22;
 const camera=new THREE.PerspectiveCamera(39,1,.1,110);const root=new THREE.Group();scene.add(root);
 const materials:THREE.Material[]=[];const mat=(color:string,roughness=.7,metalness=0)=>{const m=new THREE.MeshStandardMaterial({color,roughness,metalness});materials.push(m);return m;};
 const plaster=mat('#b5b0a0'),floor=mat('#98866f',.87),cream=mat('#b5a68b',.98),cushion=mat('#d1c1a4',.99),wood=mat('#342519',.54),dark=mat('#292d2b',.45,.35),stone=mat('#c6bb9f',.42),metal=mat('#89918b',.3,.72),white=mat('#eee6d2',.3),green=mat('#35473b');

 const surface=document.createElement('canvas');surface.width=surface.height=512;const ctx=surface.getContext('2d')!;ctx.fillStyle='#aaa';ctx.fillRect(0,0,512,512);let seed=521;for(let i=0;i<24000;i++){seed=(seed*1664525+1013904223)>>>0;const x=seed%512;seed=(seed*1664525+1013904223)>>>0;const y=seed%512;ctx.fillStyle=i%2?'#99999940':'#cccccc40';ctx.fillRect(x,y,2,1);}const tex=new THREE.CanvasTexture(surface);tex.wrapS=tex.wrapT=THREE.RepeatWrapping;tex.repeat.set(5,5);for(const m of [plaster,floor,cream,cushion,wood]){m.bumpMap=tex;m.bumpScale=m===wood?.014:.018;}floor.map=tex;floor.needsUpdate=true;
 const glow=mat('#e4bb76',.5);glow.emissive=new THREE.Color('#ffbc69');glow.emissiveIntensity=2.4;
 const pathMat=mat('#98dacf');pathMat.emissive=new THREE.Color('#75d2c7');
 const box=(w:number,h:number,d:number,m:THREE.Material,x:number,y:number,z:number,r=.02,group:THREE.Object3D=root)=>{const o=new THREE.Mesh(r?new RoundedBoxGeometry(w,h,d,2,r):new THREE.BoxGeometry(w,h,d),m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;group.add(o);return o;};
 const cyl=(r:number,h:number,m:THREE.Material,x:number,y:number,z:number,group:THREE.Object3D=root)=>{const o=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,32),m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;group.add(o);return o;};
 // The floor is built around a physical recess, so the coffee table descends below it.
 box(14,.14,3.2,floor,0,-.07,-3.4,0);box(14,.14,10,floor,0,-.07,6,0);box(2.6,.14,2.8,floor,-5.7,-.07,-.4,0);box(8.6,.14,2.8,floor,2.7,-.07,-.4,0);box(2.9,.1,2.7,dark,-3,-1.64,-.4,0);box(.08,1.6,2.7,dark,-4.4,-.8,-.4,0);box(.08,1.6,2.7,dark,-1.6,-.8,-.4,0);box(2.8,1.6,.08,dark,-3,-.8,-1.77,0);box(2.8,1.6,.08,dark,-3,-.8,.97,0);
 // Travertine slab joints anchor the same floor through each transformation.
 for(let x=-6.8;x<7;x+=1.8){box(.009,.002,3.15,wood,x,.001,-3.4,0);box(.009,.002,9.75,wood,x,.001,6.1,0);if(x< -4.4||x> -1.6)box(.009,.002,2.8,wood,x,.001,-.4,0);}
 for(let z=-4.8;z<11;z+=1.8){if(z< -1.8||z>1.0)box(14,.002,.009,wood,0,.001,z,0);else {box(2.6,.002,.009,wood,-5.7,.001,z,0);box(8.6,.002,.009,wood,2.7,.001,z,0);}}
 const hatchA=box(1.4,.08,2.8,floor,-3.7,-.04,-.4,.008),hatchB=box(1.4,.08,2.8,floor,-2.3,-.04,-.4,.008);
 if(chapter!=='party')box(14,.12,16,plaster,0,3.95,3,0);

 box(14,3.85,.22,plaster,0,1.92,-5.03,0);box(.18,.35,9,plaster,-7,.17,-.5,0);box(.18,.33,9,plaster,-7,3.75,-.5,0);
 // The same fixed window and frames remain visible in all chapter snapshots.
 const landscape=new THREE.TextureLoader();const outdoorMat=new THREE.MeshBasicMaterial({color:'#8c9a87'});materials.push(outdoorMat);const outdoor=box(.015,3.3,8.4,outdoorMat,-7.07,2,-.5,0);landscape.load('/media/forest.jpg',t=>{if(disposed){t.dispose();return;}t.colorSpace=THREE.SRGBColorSpace;outdoorMat.map=t;outdoorMat.color.set('#9d9c86');outdoorMat.needsUpdate=true;draw();},undefined,()=>{if(!disposed){setFailed(true);failRef.current();}});
 for(let z=-4.7;z<4;z+=1.72)box(.11,3.65,.06,dark,-6.96,1.92,z,.004);
 const curtains=new THREE.Group();root.add(curtains);for(let side=0;side<2;side++){const g=new THREE.Group();g.position.set(-6.8,0,side?1.9:-3.1);curtains.add(g);for(let i=0;i<18;i++)box(.06,3.4,.15,cream,Math.sin(i*1.1)*.07,1.9,(i-9)*.23,.02,g);}
 // Architectural details, entrance, low console, and a shared light-ring hub.
 box(5.6,.12,.05,glow,-3.25,3.65,-4.88,.005);box(3.8,.12,.05,glow,3.9,3.65,-4.88,.005);box(1.5,2.9,.045,wood,6,1.45,-4.9,0);
 box(4.8,.42,.5,wood,-3.3,.37,-4.6,.025);const hub=cyl(.22,.23,dark,-.85,.72,-4.57);const ring=new THREE.Mesh(new THREE.TorusGeometry(.222,.011,8,48),pathMat);ring.rotation.x=Math.PI/2;ring.position.set(-.85,.8,-4.57);root.add(ring);
 const screenFrame=box(4.7,2.35,.12,dark,-3.3,2.04,-4.83,.06);const screenMat=new THREE.MeshStandardMaterial({color:'#111d1b',roughness:.22,emissive:'#3b5147',emissiveIntensity:.05});materials.push(screenMat);const screen=box(4.47,2.13,.018,screenMat,-3.3,2.04,-4.753,.01);landscape.load('/media/forest.jpg',t=>{if(disposed){t.dispose();return;}t.colorSpace=THREE.SRGBColorSpace;screenMat.map=t;screenMat.emissiveMap=t;screenMat.needsUpdate=true;draw();},undefined,()=>{if(!disposed){setFailed(true);failRef.current();}});
 // Sofa and floor rails are actual meshes, not changes to an image.
 const sofa=new THREE.Group();root.add(sofa);for(let j=0;j<3;j++){const z=(j-1)*1.17;box(1.22,.3,1.13,cream,0,.25,z,.12,sofa);box(1.1,.18,1.08,cushion,.06,.48,z,.08,sofa);box(.22,.69,1.13,cream,-.48,.56,z,.09,sofa);box(.3,.4,.71,cushion,-.22,.77,z,.08,sofa);}box(1.2,.6,.18,cream,0,.46,-1.8,.07,sofa);box(1.2,.6,.18,cream,0,.46,1.8,.07,sofa);
 for(const z of [-1.1,1.1])box(1.65,.012,.027,metal,-5.75,.02,z+.6,0);
 const coffee=new THREE.Group();coffee.position.set(-3,0,-.4);root.add(coffee);const top=cyl(.8,.12,wood,0,.62,0,coffee);top.scale.x=1.38;const foot=cyl(.44,.52,wood,0,.3,0,coffee);foot.scale.x=1.55;
 const entranceMats=[0,1,2].map(()=>{const m=mat('#ffd7a0');m.emissive=new THREE.Color('#ffb666');return m;});entranceMats.forEach((m,i)=>box(.16,.05,.28,m,5.7,2.65-i*.08,-3.5+i*.8,.02));
 const lights:THREE.Mesh[]=[];for(let i=0;i<7;i++)lights.push(box(.82,.008,.042,pathMat,-3.1,.012,-1.55+i*.55,.004));
 // Kitchen cabinetry and already-prepared dishes.
 box(4.5,.85,1.02,wood,2.5,.43,-4.3,.03);box(4.65,.1,1.15,stone,2.5,.91,-4.3,.025);for(let i=0;i<5;i++)box(.018,.74,.015,metal,.47+i*.86,.43,-3.78,0);box(3.7,1.1,.45,plaster,2.1,2.48,-4.8,.03);
 const kitchenLamp=new THREE.PointLight('#ffcc89',8,8,2);kitchenLamp.position.set(2.5,2.7,-3.5);scene.add(kitchenLamp);
 const arm=new THREE.Group();arm.position.set(3.3,1,-4.2);root.add(arm);cyl(.24,.12,metal,0,.06,0,arm);const shoulder=new THREE.Group();shoulder.position.y=.13;arm.add(shoulder);cyl(.14,.35,metal,0,.18,0,shoulder);const upper=new THREE.Group();upper.position.y=.3;shoulder.add(upper);box(.15,.68,.16,metal,0,.3,0,.05,upper);const elbow=new THREE.Group();elbow.position.y=.62;upper.add(elbow);box(.14,.6,.14,metal,0,.27,0,.04,elbow);box(.26,.05,.1,dark,0,.58,0,.01,elbow);box(.04,.2,.06,metal,-.09,.67,0,.008,elbow);box(.04,.2,.06,metal,.09,.67,0,.008,elbow);
 const armFood=new THREE.Mesh(new THREE.SphereGeometry(.13,16,12),green);armFood.scale.set(1,.55,1);elbow.add(armFood);armFood.position.set(0,.78,0);
 const dish=(g:THREE.Object3D,x:number,y:number,z:number,food=false)=>{const pl=cyl(.17,.035,white,x,y,z,g);if(food){const f=new THREE.Mesh(new THREE.SphereGeometry(.13,16,10),green);f.scale.y=.5;f.position.set(x,y+.06,z);g.add(f);}return pl;};dish(root,2.4,.99,-4.03,true);dish(root,3.85,.99,-4.03,true);
 // Two table halves separate while the middle leaf grows; chairs move with their places.
 const dining=new THREE.Group();dining.position.set(1.85,0,.2);root.add(dining);const leaves=[box(1.62,.13,.85,wood,0,.83,-.425,.045,dining),box(1.62,.13,.85,wood,0,.83,.425,.045,dining)];const middle=box(1.62,.115,1.75,wood,0,.827,0,.025,dining);box(.58,.76,.95,dark,0,.38,0,.03,dining);
 const chair=(x:number,z:number,rot:number,g:THREE.Object3D)=>{const c=new THREE.Group();c.position.set(x,0,z);c.rotation.y=rot;g.add(c);box(.57,.11,.6,cream,0,.45,0,.05,c);box(.57,.56,.09,cream,0,.73,-.27,.04,c);for(const a of [-1,1])for(const b of [-1,1])box(.035,.45,.035,dark,a*.22,.22,b*.21,.009,c);return c;};
 const chairs=[chair(-1.22,-.65,Math.PI/2,dining),chair(1.22,-.65,-Math.PI/2,dining),chair(-1.22,.65,Math.PI/2,dining),chair(1.22,.65,-Math.PI/2,dining),chair(0,-1.36,0,dining),chair(0,1.36,Math.PI,dining)];
 const places:THREE.Group[]=[];for(let i=0;i<6;i++){const place=new THREE.Group();places.push(place);root.add(place);dish(place,0,0,0);box(.018,.012,.28,metal,.24,-.012,0,.004,place);box(.018,.012,.28,metal,-.24,-.012,0,.004,place);cyl(.058,.15,white,.2,.06,-.21,place);}
 const robot=new THREE.Group();root.add(robot);cyl(.3,.13,dark,0,.12,0,robot);box(.48,.55,.41,cream,0,.42,0,.14,robot);cyl(.23,.13,dark,0,.75,0,robot);box(.56,.055,.55,metal,0,.78,0,.025,robot);
 const serviceStations:Point[]=[{x:0,z:-1},{x:0,z:1.2},{x:1.85,z:3.2},{x:3.7,z:1.2},{x:3.7,z:-1},{x:1.85,z:-2.75}];
 const serviceRoutes:Point[][]=[[{x:0,z:-2.8},serviceStations[0]],[serviceStations[0],serviceStations[1]],[serviceStations[1],{x:0,z:3.2},serviceStations[2]],[serviceStations[2],{x:3.7,z:3.2},serviceStations[3]],[serviceStations[3],serviceStations[4]],[serviceStations[4],{x:3.7,z:-2.75},serviceStations[5]]];
 const placeTargets=[{x:1.37,z:-.86},{x:1.37,z:1.26},{x:1.85,z:1.98},{x:2.33,z:1.26},{x:2.33,z:-.86},{x:1.85,z:-1.58}];
 const serviceArm=box(.06,.06,1,metal,0,.82,0,.025);

 const cart=new THREE.Group();root.add(cart);box(.66,.15,.83,dark,0,.15,0,.06,cart);box(.71,.08,.87,cream,0,.68,0,.04,cart);box(.71,.06,.87,cream,0,.3,0,.025,cart);for(const x of [-.28,.28])for(const z of [-.34,.34]){box(.035,.45,.035,metal,x,.47,z,.008,cart);const wheel=cyl(.07,.04,dark,x,.07,z,cart);wheel.rotation.z=Math.PI/2;}
 const meals:THREE.Group[]=[];for(let i=0;i<3;i++){const meal=new THREE.Group();root.add(meal);dish(meal,0,0,0,true);meals.push(meal);}
 const armBeam1=box(.12,1,.12,metal,0,0,0,.04),armBeam2=box(.11,1,.11,metal,0,0,0,.04);const gripper=box(.4,.06,.26,dark,0,0,0,.025);arm.visible=false;
 const segment=(mesh:THREE.Mesh,a:THREE.Vector3,b:THREE.Vector3)=>{mesh.position.copy(a).add(b).multiplyScalar(.5);mesh.scale.y=a.distanceTo(b);mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),b.clone().sub(a).normalize());};

 // Existing terrace, outdoor dining and a retracting slatted canopy.
 box(5,.12,15.95,stone,9.5,-.06,3,0);for(let z=-4.8;z<11;z+=.72)box(4.9,.008,.012,plaster,9.5,.006,z,0);box(2.25,.14,1.65,wood,9.45,.83,-.1,.05);box(1.7,.76,.9,dark,9.45,.38,-.1,.04);for(const x of [8.85,10.05]){chair(x,-1.28,0,root);chair(x,1.13,Math.PI,root);}chair(7.85,-.1,Math.PI/2,root);chair(11.03,-.1,-Math.PI/2,root);
 box(5.0,3.8,.02,outdoorMat,9.5,1.9,-5.2,0);for(const x of [7.45,11.6])for(const z of [-3.5,3.15])box(.11,3.25,.11,dark,x,1.625,z,.015);for(const x of [7.45,11.6])box(.14,.12,6.8,dark,x,3.25,-.2,.01);
 const slats:THREE.Mesh[]=[];for(let i=0;i<19;i++)slats.push(box(4.25,.045,.31,cream,9.5,3.28,-3.3+i*.35,.014));
 const outdoorLamp=new THREE.PointLight('#ffd696',0,9,2);outdoorLamp.position.set(9.5,2.5,.2);scene.add(outdoorLamp);const outdoorPath:THREE.Mesh[]=[];for(let i=0;i<6;i++)outdoorPath.push(box(.05,.02,.5,glow,6.4+i*.5,.015,2.3,.004));
 for(const [x,z] of [[8.85,-.68],[10.05,-.68],[8.85,.48],[10.05,.48],[8.52,-.1],[10.4,-.1]]){dish(root,x,.94,z);cyl(.055,.15,white,x+.18,1.0,z-.14);}
 const pendant=box(1.4,.07,.22,dark,1.85,2.66,.2,.03);box(1.32,.015,.17,glow,1.85,2.62,.2,.006);for(const x of [1.25,2.45])box(.008,1.13,.008,dark,x,3.22,.2,0);
 // Interior softness and daylight anchored to the same window.
 const sun=new THREE.DirectionalLight('#fff1d7',3.5);sun.position.set(-6,9,5);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-14;sun.shadow.camera.right=14;sun.shadow.camera.top=10;sun.shadow.camera.bottom=-12;sun.shadow.bias=-.0005;sun.shadow.normalBias=.03;sun.shadow.radius=3;scene.add(sun);scene.add(new THREE.HemisphereLight('#d7e7e9','#756752',.65));const warmth=new THREE.PointLight('#ffd090',20,15,2);warmth.position.set(-3,2.8,1.5);scene.add(warmth);
 let lastPose=current.current;function draw(){if(!disposed)renderer.render(scene,camera);}function resize(){const w=parent.clientWidth,h=parent.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;const mobile=w<650;if(chapter==='party'){camera.position.set(mobile?11.3:10.5,mobile?8.0:6.6,mobile?13.2:10.2);camera.lookAt(5.2,.7,-.4);camera.fov=mobile?49:43;}else{camera.position.set(mobile?-.9:.4,mobile?3.0:2.85,mobile?9.8:7.4);camera.lookAt(-3.2,1.15,-1.5);camera.fov=mobile?47:53;}camera.updateProjectionMatrix();if(update.current)update.current(lastPose);else draw();}
 function renderPose(p:Pose){lastPose=p;if(chapter==='party'&&parent.clientWidth<650){const focusX=3.2+clamp((p.cart.x-4.7)/3.5)*4.8;camera.position.set(focusX+4.2,6.1,8.6);camera.lookAt(focusX,.65,-.25);camera.fov=47;camera.updateProjectionMatrix();}sofa.position.set(-4.85-p.sofa*1.12,0,.6);coffee.position.y=-p.tableDrop*1.52;const opening=p.recess;hatchA.position.x=-3.7-opening*1.45;hatchB.position.x=-2.3+opening*1.45;screenMat.color.setScalar(.002+.998*p.forest);screenMat.emissiveIntensity=p.forest*.45;pathMat.emissiveIntensity=.2+p.forest*2;lights.forEach((o,i)=>o.visible=p.forest>(i/9));curtains.children.forEach((o,i)=>{o.scale.z=1-.83*p.curtain;o.position.z=(i?1.83:-2.31)+(i?1:-1)*p.curtain*1.58;});entranceMats.forEach((m,i)=>m.emissiveIntensity=clamp((p.light-i*.15)*3)*3);warmth.intensity=1+p.light*12;kitchenLamp.intensity=2+p.light*6;glow.emissiveIntensity=.5+p.light*2;sun.intensity=chapter==='party'?1.35:2.0;leaves[0].position.z=-.425-p.dining*.8;leaves[1].position.z=.425+p.dining*.8;middle.scale.z=Math.max(.001,p.dining);chairs.forEach((c,i)=>{if(i<4){c.position.z=(i<2?-1:1)*(.55+.48*p.dining);c.position.x=(i%2?1:-1)*(.42+.8*p.dining);c.scale.y=.38+.62*p.dining;c.rotation.y=(i%2?-Math.PI/2:Math.PI/2);}else c.position.z=(i===4?-1:1)*(1.36+p.dining*.8);});const phase=Math.min(5,Math.floor(p.robot*6)),phaseProgress=p.robot===1?1:p.robot*6-phase;
 const walk=routePose(serviceRoutes[phase],routeLength(serviceRoutes[phase])*clamp(phaseProgress/.6));robot.position.set(walk.cart.x,0,walk.cart.z);robot.rotation.y=walk.heading;
 const placement=clamp((phaseProgress-.6)/.4);places.forEach((pl,i)=>{const dest=placeTargets[i];if(i<phase||p.robot===1)pl.position.set(dest.x,.94,dest.z);else if(i===phase){pl.position.set(walk.cart.x+(dest.x-walk.cart.x)*placement,.88+Math.sin(placement*Math.PI)*.2+.06*placement,walk.cart.z+(dest.z-walk.cart.z)*placement);}else pl.position.set(walk.cart.x,.91+(i-phase)*.035,walk.cart.z);});
 const destination=placeTargets[phase];serviceArm.position.set(walk.cart.x+(destination.x-walk.cart.x)*placement*.5,.86,walk.cart.z+(destination.z-walk.cart.z)*placement*.5);serviceArm.scale.z=Math.max(.001,Math.hypot(destination.x-walk.cart.x,destination.z-walk.cart.z)*placement);serviceArm.rotation.y=Math.atan2(destination.x-walk.cart.x,destination.z-walk.cart.z);serviceArm.visible=phaseProgress>.6&&phaseProgress<1;
 cart.position.set(p.cart.x,0,p.cart.z);cart.rotation.y=p.heading;
 const mealPhase=Math.min(2,Math.floor(p.plating*3)),mp=p.plating===1?1:p.plating*3-mealPhase;
 meals.forEach((meal,i)=>{const q=clamp(p.plating*3-i),offset=(i-1)*.26;const target=new THREE.Vector3(p.cart.x+Math.sin(p.heading)*offset,.77,p.cart.z+Math.cos(p.heading)*offset);const source=new THREE.Vector3(2.0+i*.43,1.02,-4.05);const f=clamp((q-.1)/.55);meal.position.copy(source).lerp(target,f);meal.position.y+=Math.sin(f*Math.PI)*.85;});
 const wrist=meals[mealPhase].position.clone().add(new THREE.Vector3(0,.11,0));const base=new THREE.Vector3(3.3,1.07,-4.2);const joint=new THREE.Vector3(3.6,2.3,-3.55);if(mp>.65){const returnTo=mealPhase<2?new THREE.Vector3(2.0+(mealPhase+1)*.43,1.13,-4.05):new THREE.Vector3(3.7,1.5,-4.0);const f=clamp((mp-.65)/.35);wrist.lerp(returnTo,f);wrist.y+=Math.sin(f*Math.PI)*.55;}segment(armBeam1,base,joint);segment(armBeam2,joint,wrist);gripper.position.copy(wrist);

 slats.forEach((sl,i)=>sl.position.z=-3.3+i*(.05+.3*p.canopy));outdoorLamp.intensity=p.terraceLight*28;outdoorPath.forEach((o,i)=>o.visible=p.terraceLight>(i/7));draw();}
 update.current=renderPose;const ro=new ResizeObserver(resize);ro.observe(parent);const lost=(event:Event)=>{event.preventDefault();setFailed(true);failRef.current();};renderer.domElement.addEventListener('webglcontextlost',lost);resize();renderPose(current.current);setReady(true);
 return()=>{disposed=true;update.current=null;ro.disconnect();renderer.domElement.removeEventListener('webglcontextlost',lost);scene.traverse(o=>{if(o instanceof THREE.Mesh)o.geometry.dispose();});materials.forEach(m=>{const standard=m as THREE.MeshStandardMaterial;standard.map?.dispose();m.dispose();});env.dispose();pmrem.dispose();renderer.dispose();renderer.domElement.remove();};
 },[active,chapter]);
 useEffect(()=>{update.current?.(pose);},[pose]);
 return <div className={'home-world '+(ready&&!failed?'is-ready':'')}><img className="world-poster" src={sitePath('/media/home-v5.jpg')} alt="同一未来家：左侧客厅，右侧用餐区与厨房，连通露台" loading="lazy"/><div className="world-canvas" ref={host} hidden={failed}/>{failed&&<div className="world-fallback"><span>当前设备无法显示三维场景</span><p>可逐步查看动作说明与实施条件。</p></div>}<span className="world-kind">{failed?'静态情境图':staticView?'静态步骤 · 概念空间':'可交互概念空间'}</span></div>;
}
