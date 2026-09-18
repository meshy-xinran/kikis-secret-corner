import * as THREE from 'three';
import {createDeskDiscovery} from './desk-discovery.js';
import {OutlinePass} from 'three/addons/postprocessing/OutlinePass.js';

export const memories={
 globe:['A little world, all hers','Step into Kiki’s inner world.'],
 bed:['Her sunny little nest','Fourteen years of afternoon naps. She always left one paw hanging over the edge.'],
 'water-bowl':['The quiet water bowl','Fresh water every morning. Kiki still preferred a sip from your cup.'],
 'fish-toy':['The fish she brought you','A tiny gift left beside your slippers, usually just before breakfast.'],
 'yarn-ball':['One very patient ball of yarn','She never chased it far. Unravelling it beside you was the whole adventure.'],
 'mouse-toy':['Her midnight mouse','By day, perfectly innocent. At two in the morning, the reason you woke up smiling.'],
 mug:['Your cup, her curiosity','Tea for you. A curious nose over the rim for Kiki. Neither of you minded sharing the moment.'],
 collar:['Her first collar','Soft rose leather and a little brass tag. She grew into it, then made every room feel like home.'],
 album:['The little green album','Fourteen years of blurry paws, sunlit whiskers, and ordinary days worth keeping.'],
 notebook:['Things you never wanted to forget','Her tiny chirp at the window. The warm weight beside your feet. You wrote it all down.'],
 'photo-2':['The blanket nap','A cream-white domestic longhair with a gift for finding the warmest patch in every room.'],
 'photo-4':['Her garden patrol','She took the same slow route through the daisies, stopping to investigate every leaf.'],
 'photo-5':['Absolutely no thoughts','A close-up, a little pink tongue, and your favourite accidental photograph.'],
 'photo-6':['Five more minutes of play','Even at fourteen, a ribbon could turn the gentle queen of naps into a kitten again.'],
 'photo-3':['The blue-hour companion','When the room grew quiet, Kiki would settle nearby. Being together was enough.']
};
export function createDeskInteractions({scene,camera,composer,globe,glass,renderer,backdrops,onEnter}){
 const outline=new OutlinePass(new THREE.Vector2(innerWidth,innerHeight),scene,camera);
 outline.visibleEdgeColor.set('#d6eca0');outline.hiddenEdgeColor.set('#000000');outline.edgeStrength=3;outline.edgeGlow=.7;outline.edgeThickness=1.5;outline.pulsePeriod=0;
 composer.insertPass(outline,1);
 // Reveal the existing silhouette clockwise from its top, without a second pass.
 const trace={progress:{value:1},center:{value:new THREE.Vector2(.5,.5)},aspect:{value:1}};
 Object.assign(outline.overlayMaterial.uniforms,{traceProgress:trace.progress,traceCenter:trace.center,traceAspect:trace.aspect});
 outline.overlayMaterial.fragmentShader=outline.overlayMaterial.fragmentShader
  .replace('uniform bool usePatternTexture;',`uniform bool usePatternTexture;
   uniform float traceProgress;
   uniform vec2 traceCenter;
   uniform float traceAspect;`)
  .replace('gl_FragColor = finalColor;',`if(traceProgress < 1.0){
   vec2 delta=(vUv-traceCenter)*vec2(traceAspect,1.0);
   float angle=mod(atan(delta.x,delta.y)+6.28318530718,6.28318530718)/6.28318530718;
   float reveal=1.0-smoothstep(traceProgress-.015,traceProgress,angle);
   float tip=(1.0-smoothstep(.0,.035,abs(angle-traceProgress)))*reveal;
   finalColor*=reveal*(1.0+.5*tip);
  }
  gl_FragColor = finalColor;`);
 const traceBounds=new THREE.Box3(),tracePoint=new THREE.Vector3();
 function setTrace(object,progress=1){
  trace.progress.value=progress;
  if(progress>=1||!object)return;
  camera.updateMatrixWorld();traceBounds.setFromObject(object).getCenter(tracePoint);tracePoint.project(camera);
  trace.center.value.set(tracePoint.x*.5+.5,tracePoint.y*.5+.5);
  trace.aspect.value=renderer.domElement.clientWidth/Math.max(1,renderer.domElement.clientHeight);
 }

 const title=document.createElement('h1');title.className='desk-title';title.textContent='Kiki’s Secret Corner';document.body.append(title);
 const dates=document.createElement('p');dates.className='desk-dates';dates.textContent='May 2012 — August 2026';document.body.append(dates);
 const caption=document.createElement('div');caption.className='desk-memory';caption.setAttribute('role','status');caption.setAttribute('aria-live','polite');caption.innerHTML='<span class="desk-memory-name"></span><p></p>';document.body.append(caption);
 const captionName=caption.querySelector('span'),captionStory=caption.querySelector('p');
 const glow={value:0};
 const aura=new THREE.Mesh(glass.geometry,new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,uniforms:{uGlow:glow},vertexShader:`varying vec3 n;varying vec3 v;void main(){vec4 p=modelViewMatrix*vec4(position,1.);n=normalize(normalMatrix*normal);v=normalize(-p.xyz);gl_Position=projectionMatrix*p;}`,fragmentShader:`uniform float uGlow;varying vec3 n;varying vec3 v;void main(){float facing=clamp(abs(dot(normalize(n),normalize(v))),0.,1.);float rim=pow(1.-facing,2.5);gl_FragColor=vec4(.76,.94,.48,uGlow*(.018+.28*rim));}`}));
 aura.position.copy(glass.position);aura.scale.setScalar(1.006);aura.renderOrder=13;globe.add(aura);
 const innerLight=new THREE.PointLight('#d9edac',0,5,2);innerLight.position.set(0,2.2,1.1);globe.add(innerLight);
 const ray=new THREE.Raycaster(),pointer=new THREE.Vector2(),sphere=new THREE.Sphere(),center=new THREE.Vector3(),hitPoint=new THREE.Vector3();
 const discovery=createDeskDiscovery(),reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
 let hovered=null,enabled=false,amount=0;
 function clear(){discovery.reset();hovered=null;outline.selectedObjects=[];caption.classList.remove('visible');renderer.domElement.style.cursor='';}
 function pick(e){
  if(!enabled)return null;
  const rect=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);
  scene.updateMatrixWorld(true);camera.updateMatrixWorld();ray.setFromCamera(pointer,camera);
  const roots=scene.children.filter(o=>o.visible&&o.userData.memoryKey);
  const hit=ray.intersectObjects(roots,true).find(h=>h.object.visible);
  let root=hit?.object;while(root&&!root.userData.memoryKey)root=root.parent;
  globe.localToWorld(center.copy(glass.position));sphere.set(center,2.65*.54*1.08);
  const globeHit=ray.ray.intersectSphere(sphere,hitPoint);
  if(globeHit&&(!hit||camera.position.distanceTo(hitPoint)<hit.distance))root=globe;
  const id=root?.userData.memoryKey;
  if(!id||!memories[id]){clear();return null;}
  if(hovered!==id){hovered=id;caption.classList.toggle('globe-invitation',id==='globe');captionName.textContent=id==='globe'?'':memories[id][0];captionStory.textContent=memories[id][1];caption.classList.add('visible');}
  outline.selectedObjects=id==='globe'?[glass]:[root];outline.edgeStrength=id==='globe'?5:3;
  discovery.reset();setTrace(null);outline.edgeGlow=.7;outline.edgeThickness=1.5;
  renderer.domElement.style.cursor=id==='globe'?'pointer':'default';
  return id;
 }
 renderer.domElement.addEventListener('pointermove',e=>{if(e.buttons===0)pick(e);else clear();});
 renderer.domElement.addEventListener('pointerleave',clear);
 let press=null;
 renderer.domElement.addEventListener('pointerdown',e=>{press={x:e.clientX,y:e.clientY,id:pick(e)};});
 renderer.domElement.addEventListener('pointerup',e=>{if(press?.id==='globe'&&Math.hypot(e.clientX-press.x,e.clientY-press.y)<6&&enabled){clear();onEnter();}press=null;});
 renderer.domElement.addEventListener('pointercancel',()=>{press=null;clear();});
 return {setFocusOutline(object,color){setTrace(null);outline.selectedObjects=object?[object]:[];outline.visibleEdgeColor.set(color||'#c3e890');outline.hiddenEdgeColor.set(color||'#c3e890');outline.edgeGlow=1.1;outline.edgeStrength=4.5;},update(dt,isDesk){
  if(enabled&&!isDesk)clear();enabled=isDesk;setTrace(null);
  if(isDesk){
   outline.visibleEdgeColor.set('#d6eca0');outline.hiddenEdgeColor.set('#000000');
   if(!hovered){
    const roots=scene.children.filter(o=>o.visible&&memories[o.userData.memoryKey]);
    const ids=roots.map(o=>o.userData.memoryKey);
    if(!ids.includes('globe'))ids.push('globe');
    const cue=press?null:reducedMotion.matches?{id:'globe',amount:.3,progress:1}:discovery.update(dt,ids);
    const object=cue?.id==='globe'?glass:roots.find(o=>o.userData.memoryKey===cue?.id);
    outline.selectedObjects=object?[object]:[];
    outline.edgeStrength=cue?cue.amount*3.2:0;outline.edgeGlow=.75;outline.edgeThickness=1.5;
    setTrace(object,cue?.progress??1);
   }
  }
  dates.hidden=!isDesk;title.classList.toggle('hidden',!isDesk);title.setAttribute('aria-hidden',String(!isDesk));caption.hidden=!isDesk;
  amount=THREE.MathUtils.damp(amount,isDesk&&hovered==='globe'?1:0,2.4,dt);
  glow.value=amount;aura.visible=glow.value>.001;innerLight.intensity=amount*1.3;
  backdrops.setOvercast(amount);return amount;
 }};
}
