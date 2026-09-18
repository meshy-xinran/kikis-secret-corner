import * as THREE from 'three';
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {EXRLoader} from 'three/addons/loaders/EXRLoader.js';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';
import {ShaderPass} from 'three/addons/postprocessing/ShaderPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import {initFlowers} from './globe-flowers.js';
import './globe.css';
import {addKeepsakes} from './desk-keepsakes.js';
import {createGlobeInterior} from './globe-interior.js';
import {createGlobeStage} from './globe-stage.js';
import {createSceneAudio} from './scene-audio.js';
import {createOfferingSnow} from './offering-snow.js';
import {createGlobeUI} from './globe-ui.js';
import {createDeskInteractions} from './desk-interactions.js';
import {createBackdrops} from './globe-backdrops.js';

const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.body.classList.add('globe-mode');document.title='Kiki’s Secret Corner';
const loading=document.querySelector('#loading-scene');loading.hidden=false;loading.textContent='Opening your little world…';
const scene=new THREE.Scene();scene.background=new THREE.Color('#292b38');scene.fog=new THREE.FogExp2('#34313b',.022);
const sceneHost=document.querySelector('#garden');
const viewport={width:sceneHost.clientWidth,height:sceneHost.clientHeight};
const camera=new THREE.PerspectiveCamera(32,viewport.width/viewport.height,.05,100);
const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setSize(viewport.width,viewport.height,false);renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;sceneHost.append(renderer.domElement);
const composer=new EffectComposer(renderer);composer.addPass(new RenderPass(scene,camera));const bloom=new UnrealBloomPass(new THREE.Vector2(viewport.width,viewport.height),.22,.8,.82);
// Keep invalid HDR samples out of the multi-resolution bloom blur. A single
// NaN otherwise spreads into a large rectangular patch across its mip levels.
const finiteHDR=new ShaderPass({uniforms:{tDiffuse:{value:null}},vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`
uniform sampler2D tDiffuse;varying vec2 vUv;
bool finiteColor(vec4 c){return !any(isnan(c))&&!any(isinf(c));}
void main(){
 vec4 c=texture2D(tDiffuse,vUv);
 if(!finiteColor(c)){
  vec2 texel=1./vec2(textureSize(tDiffuse,0));vec4 total=vec4(0.);float count=0.;
  for(int y=-1;y<=1;y++)for(int x=-1;x<=1;x++){
   vec4 neighbor=texture2D(tDiffuse,clamp(vUv+vec2(float(x),float(y))*texel,vec2(0.),vec2(1.)));
   if(finiteColor(neighbor)){total+=neighbor;count+=1.;}
  }
  c=count>0.?total/count:vec4(0.,0.,0.,1.);
 }
 gl_FragColor=vec4(clamp(c.rgb,vec3(0.),vec3(8192.)),clamp(c.a,0.,1.));
}`});composer.addPass(finiteHDR);composer.addPass(bloom);
const softFocus=new ShaderPass({uniforms:{tDiffuse:{value:null},uPixel:{value:new THREE.Vector2(1/viewport.width,1/viewport.height)}},vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`uniform sampler2D tDiffuse;uniform vec2 uPixel;varying vec2 vUv;void main(){float edge=smoothstep(.24,.65,length((vUv-vec2(.5,.5))*vec2(1.,.8)));vec2 d=uPixel*edge*4.;vec4 c=texture2D(tDiffuse,vUv)*.28;c+=(texture2D(tDiffuse,vUv+vec2(d.x,0.))+texture2D(tDiffuse,vUv-vec2(d.x,0.))+texture2D(tDiffuse,vUv+vec2(0.,d.y))+texture2D(tDiffuse,vUv-vec2(0.,d.y)))*.12;c+=(texture2D(tDiffuse,vUv+d)+texture2D(tDiffuse,vUv-d)+texture2D(tDiffuse,vUv+vec2(d.x,-d.y))+texture2D(tDiffuse,vUv+vec2(-d.x,d.y)))*.06;gl_FragColor=c;}`});composer.addPass(softFocus);composer.addPass(new OutputPass());
function material(color,roughness=.65,metalness=0){return new THREE.MeshStandardMaterial({color,roughness,metalness});}
function mesh(geo,mat,pos,parent=scene){const obj=new THREE.Mesh(geo,mat);obj.position.set(...pos);obj.castShadow=true;obj.receiveShadow=true;parent.add(obj);return obj;}
function canvasTexture(w,h,paint){const c=document.createElement('canvas');c.width=w;c.height=h;paint(c.getContext('2d'),w,h);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;}
let seed=713;function random(){seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;}
const wood=canvasTexture(1024,512,(c,w,h)=>{c.fillStyle='#785542';c.fillRect(0,0,w,h);for(let i=0;i<1400;i++){const y=random()*h;c.strokeStyle=`rgba(${random()>.5?'39,22,16':'212,162,115'},${.025+random()*.075})`;c.lineWidth=.4+random()*1.4;c.beginPath();c.moveTo(0,y);for(let x=0;x<=w;x+=32)c.lineTo(x,y+Math.sin(x*.006+i)*3);c.stroke();}});wood.wrapS=wood.wrapT=THREE.RepeatWrapping;wood.repeat.set(2,2);
mesh(new THREE.BoxGeometry(16,.36,10),new THREE.MeshStandardMaterial({map:wood,roughness:.52}),[0,.4,0]);
// Close the desk underside with a recessed apron and a complete room floor.
const apronMaterial=material('#51392d',.72);
mesh(new THREE.BoxGeometry(15.8,1.6,.20),apronMaterial,[0,-.56,4.78]);
for(const x of [-7.78,7.78])mesh(new THREE.BoxGeometry(.20,1.6,9.5),apronMaterial,[x,-.56,0]);
for(const x of [-7.2,7.2])for(const z of [-4.2,4.2])mesh(new THREE.BoxGeometry(.34,3.6,.34),apronMaterial,[x,-1.57,z]);
const roomFloor=mesh(new THREE.PlaneGeometry(100,100),material('#403b36',.95),[0,-3.38,0]);roomFloor.rotation.x=-Math.PI/2;
mesh(new THREE.BoxGeometry(100,8,.3),material('#514a45',.95),[0,-3.4,-6.4]);

const backdrops=createBackdrops(scene);
const hemi=new THREE.HemisphereLight('#e5dccb','#a28060',.8);scene.add(hemi);
const key=new THREE.SpotLight('#ffe1b4',70,28,.72,.85,1.3);key.position.set(1.8,7.4,-5.1);key.target.position.set(-1,.58,1.5);key.castShadow=true;key.shadow.mapSize.set(2048,2048);key.shadow.bias=-.0002;key.shadow.normalBias=.004;key.shadow.radius=4;scene.add(key,key.target);
const leafPattern=canvasTexture(512,512,(c,w,h)=>{c.fillStyle='#fff5df';c.fillRect(0,0,w,h);c.filter='blur(7px)';for(let i=0;i<140;i++){c.fillStyle=i%3?'#343a30':'#777b62';c.beginPath();c.ellipse(random()*w,random()*h,8+random()*23,4+random()*13,random()*6.28,0,6.28);c.fill();}c.strokeStyle='#333b30';c.lineWidth=12;c.beginPath();c.moveTo(50,512);c.bezierCurveTo(160,330,240,230,430,0);c.stroke();});key.map=leafPattern;
const fill=new THREE.DirectionalLight('#e6dfcf',.85);fill.position.set(-3,4,5);scene.add(fill);
const globe=new THREE.Group();globe.userData.memoryKey="globe";scene.add(globe);const globeStart=new Set(scene.children);
const brass=material('#bfa471',.28,.7),darkWood=material('#624334',.42);
mesh(new THREE.CylinderGeometry(2.32,2.4,.28,96),darkWood,[0,.76,0]);
mesh(new THREE.CylinderGeometry(2.29,2.32,.09,96),brass,[0,.945,0]);
mesh(new THREE.CylinderGeometry(2.2,2.28,.18,96),darkWood,[0,1.08,0]);
mesh(new THREE.CylinderGeometry(2.15,2.15,.10,96),material('#495944'),[0,1.22,0]);
// Soft low moss mounds around the sleeping cat.
const mossMat=material('#71816a',.97);for(let i=0;i<80;i++){const a=random()*Math.PI*2,r=1.45+random()*.52;const o=mesh(new THREE.SphereGeometry(1,8,5),mossMat,[Math.sin(a)*r,1.3,Math.cos(a)*r]);o.scale.set(.08+random()*.16,.025+random()*.035,.07+random()*.12);}
const draco=new DRACOLoader().setDecoderPath('./assets/draco/');
const gltf=await new GLTFLoader().setDRACOLoader(draco).loadAsync('./assets/statue_cat_winged.glb');draco.dispose();
const cat=gltf.scene;const tex=await new THREE.TextureLoader().loadAsync('./assets/cat-winged-color.webp');tex.colorSpace=THREE.SRGBColorSpace;tex.flipY=true;
cat.scale.setScalar(2.1);cat.position.set(0,1.04,-.18);cat.traverse(o=>{if(o.isMesh){o.material.map=tex;o.material.roughness=.58;o.material.needsUpdate=true;o.castShadow=true;o.receiveShadow=true;}});scene.add(cat);
try{const hdr=await new EXRLoader().loadAsync('./assets/sky/mossy_forest_1k.exr');const pm=new THREE.PMREMGenerator(renderer);scene.environment=pm.fromEquirectangular(hdr).texture;scene.environmentIntensity=.32;pm.dispose();hdr.dispose();}catch{}
// Glass reads through its rim and soft reflected window; the center stays clear.
const glassMaterial=new THREE.MeshPhysicalMaterial({color:'#f7fcfa',metalness:0,roughness:.09,transmission:1,transparent:true,depthWrite:false,ior:1.46,thickness:.36,attenuationColor:'#d9ece1',attenuationDistance:4,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:.55,side:THREE.FrontSide});
// Sample the current transmission frame directly. Bicubic mip sampling can
// spread a single invalid HDR texel into a large flashing block during motion.
glassMaterial.onBeforeCompile=shader=>{
 const transmission=THREE.ShaderChunk.transmission_pars_fragment.replace(
  'return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );',
  `vec2 uv=clamp(fragCoord.xy,vec2(.001),vec2(.999));
   vec4 sampleColor=textureLod(transmissionSamplerMap,uv,0.0);
   if(any(isnan(sampleColor))||any(isinf(sampleColor))) return vec4(0.0,0.0,0.0,1.0);
   return clamp(sampleColor,vec4(0.0),vec4(64.0));`);
 shader.fragmentShader=shader.fragmentShader.replace('#include <transmission_pars_fragment>',transmission);
};
glassMaterial.customProgramCacheKey=()=> 'stable-glass-sampling-v1';
const glass=mesh(new THREE.SphereGeometry(2.65,96,64,0,Math.PI*2,0,2.28),glassMaterial,[0,2.95,0]);glass.castShadow=glass.receiveShadow=false;glass.renderOrder=10;
for(const child of [...scene.children])if(!globeStart.has(child))globe.add(child);
globe.scale.setScalar(.54);globe.position.y=.58-.62*.54;
// Photo frame: a clearly illustrative placeholder, ready for the user's own photo.
const photo=await new THREE.TextureLoader().loadAsync('./assets/photos/memory-varied-3.webp');
const portrait=canvasTexture(512,640,(c,w,h)=>{c.fillStyle='#f0e8dc';c.fillRect(0,0,w,h);const im=photo.image,scale=Math.min(w/im.width,h/im.height);c.drawImage(im,(w-im.width*scale)/2,(h-im.height*scale)/2,im.width*scale,im.height*scale);});photo.dispose();
const frame=new THREE.Group();frame.userData.memoryKey="photo-3";frame.position.set(7.6,.60,-2.5);frame.scale.setScalar(.60);frame.rotation.set(-.08,-.12,0);scene.add(frame);
mesh(new THREE.BoxGeometry(2.12,2.6,.16),darkWood,[0,1.3,0],frame);mesh(new THREE.BoxGeometry(1.91,2.38,.05),brass,[0,1.3,.10],frame);mesh(new THREE.BoxGeometry(1.79,2.24,.04),material('#e7dcc9'),[0,1.3,.14],frame);mesh(new THREE.PlaneGeometry(1.51,1.89),new THREE.MeshStandardMaterial({map:portrait,roughness:.95}),[0,1.38,.17],frame);
const book=new THREE.Group();book.userData.memoryKey="notebook";book.position.set(4,.65,2);book.rotation.y=-.22;scene.add(book);
mesh(new THREE.BoxGeometry(2.7,.14,2.15),material('#695b67'),[0,0,0],book);
const paper=canvasTexture(1024,768,(c,w,h)=>{c.fillStyle='#eddfc8';c.fillRect(0,0,w,h);c.strokeStyle='#a3948060';c.lineWidth=2;for(let y=240;y<690;y+=58){c.beginPath();c.moveTo(65,y);c.lineTo(455,y);c.moveTo(560,y);c.lineTo(955,y);c.stroke();}c.fillStyle='#736b62';c.font='italic 43px Georgia';c.fillText('Little things',70,130);c.font='24px Georgia';c.fillText('I never want to forget.',70,184);c.font='italic 35px Georgia';c.fillText('always with me',565,150);c.strokeStyle='#b5a48e';c.beginPath();c.moveTo(512,0);c.lineTo(512,h);c.stroke();});
const page=mesh(new THREE.PlaneGeometry(2.6,2.05),new THREE.MeshStandardMaterial({map:paper,roughness:1}),[0,.071,0],book);page.rotation.x=-Math.PI/2;
const pen=mesh(new THREE.CylinderGeometry(.034,.034,1.75,12),material('#34453f',.4),[3.4,.755,2.9]);pen.userData.memoryKey="notebook";pen.rotation.z=Math.PI/2;pen.rotation.y=-.35;
const pawMat=material('#5c433b',1);for(let i=0;i<3;i++){const x=-3.1+i*.42,z=2.0+i*.32;const pad=mesh(new THREE.CircleGeometry(.10,20),pawMat,[x,.589,z]);pad.rotation.x=-Math.PI/2;for(let k=0;k<4;k++){const a=(k-1.5)*.6;const toe=mesh(new THREE.CircleGeometry(.044,12),pawMat,[x+Math.sin(a)*.16,.59,z-.1-Math.cos(a)*.075]);toe.rotation.x=-Math.PI/2;}}
// Window light is the only room light source in the quiet front composition.
const rainUniforms={uTime:{value:0},uAmount:{value:0}};
const softLeafMap=leafPattern.clone();const softCanvas=document.createElement('canvas');softCanvas.width=softCanvas.height=512;const softContext=softCanvas.getContext('2d');softContext.drawImage(leafPattern.image,0,0);softContext.fillStyle='rgba(220,231,240,.72)';softContext.fillRect(0,0,512,512);softLeafMap.image=softCanvas;softLeafMap.needsUpdate=true;
const lamp=new THREE.PointLight('#ffc78c',0,12,2);lamp.position.set(5,4,-1.8);scene.add(lamp);
const keepsakes=addKeepsakes(scene);
keepsakes.loadMug('./assets/props/meshy-cat-mug.glb').then(()=>stage.register()).catch(error=>console.warn('Mug asset unavailable; using fallback.',error));

let entered=false,ritualStart=-1,near=0,yaw=0,pitch=0,down=null,reading=false,orbitYaw=0,lastFocus=0,inside=false,insideYaw=0,insidePitch=0,travel=null;const yawLimit=Math.PI/24;let windowPan=0,windowPanTarget=0;
// Stable, shuffled positions across a broad annulus: refreshes retain the layout.
const spots=[];let flowerSeed=937;const flowerRandom=()=>{flowerSeed=(flowerSeed*1664525+1013904223)>>>0;return flowerSeed/4294967296;};
for(let i=0;i<256;i++){let best=null,bestGap=-1;for(let k=0;k<40;k++){const a=flowerRandom()*Math.PI*2,r=Math.sqrt(1.44**2+flowerRandom()*(2.02**2-1.44**2));const p=new THREE.Vector3(Math.sin(a)*r,1.29,Math.cos(a)*r);const gap=spots.length?Math.min(...spots.map(q=>q.distanceToSquared(p))):flowerRandom();if(gap>bestGap){bestGap=gap;best=p;}}spots.push(best);}
const flowerSpot=id=>spots[id%spots.length];
const warmPalette=['#ffae32','#ef608a','#f1864e','#d66085','#f4c32f','#f09e70'];
const offerings=initFlowers({scene:globe,camera,positionFor:flowerSpot,storageKey:'cat-garden-globe-flowers-v1',palette:warmPalette,refinedGrowth:true,growthDuration:2600,plantDelay:3200});
const interior=createGlobeInterior(scene,globe,glass);
const stage=createGlobeStage(scene,globe,{hemi,key,fill,lamp,glassMaterial,bloom,rainUniforms});
keepsakes.loadBelongings(()=>stage.register()).catch(error=>console.warn('Keepsake asset unavailable.',error));
renderer.domElement.addEventListener('pointerdown',e=>{if(offerings.blocked||globeUI.blocked||offeringShot)return;if(reading&&!inside&&!travel){const rect=renderer.domElement.getBoundingClientRect();offerings.hoverAt(new THREE.Vector2((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1));}down={x:e.clientX,y:e.clientY,lx:e.clientX,ly:e.clientY,moved:false};renderer.domElement.setPointerCapture(e.pointerId);});
renderer.domElement.addEventListener('pointerleave',()=>{windowPanTarget=0;offerings.clearHover();backdrops.clearHover();});
renderer.domElement.addEventListener('pointermove',e=>{if(globeUI.blocked||offeringShot)return;if(!reading&&!inside&&!down){windowPanTarget=e.clientY<innerHeight*.78?(e.clientX/innerWidth-.5)*.045:0;}if(!reading&&!inside&&!travel&&!down&&!reduced){const rect=renderer.domElement.getBoundingClientRect();backdrops.hover(new THREE.Vector2((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1),camera);}else backdrops.clearHover();if(!down){if(reading&&!inside&&!travel&&lastFocus>.9){const rect=renderer.domElement.getBoundingClientRect();offerings.hoverAt(new THREE.Vector2((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1));}else offerings.clearHover();return;}offerings.clearHover();if(Math.hypot(e.clientX-down.x,e.clientY-down.y)>5)down.moved=true;if(down.moved){if(inside){insideYaw=THREE.MathUtils.clamp(insideYaw-(e.clientX-down.lx)*.003,-1.15,1.15);insidePitch=THREE.MathUtils.clamp(insidePitch+(e.clientY-down.ly)*.002,-.25,.6);}else if(lastFocus>.45)orbitYaw-=(e.clientX-down.lx)*.004;else yaw=THREE.MathUtils.clamp(yaw-(e.clientX-down.lx)*.002,-yawLimit,yawLimit);pitch=THREE.MathUtils.clamp(pitch+(e.clientY-down.ly)*.001,-.12,.16);}down.lx=e.clientX;down.ly=e.clientY;});
renderer.domElement.addEventListener('pointerup',()=>down=null);renderer.domElement.addEventListener('pointercancel',()=>down=null);
const sceneNav=document.createElement('nav');sceneNav.className='scene-switcher';sceneNav.setAttribute('aria-label','Scene views');document.body.append(sceneNav);
const sceneButtons=[];
function navigate(id){if(travel||offeringShot)return;const wasInside=inside;inside=id==='inside';reading=id!=='desk';entered=true;insideYaw=insidePitch=0;if(wasInside!==inside)travel={start:performance.now(),position:camera.position.clone(),quaternion:camera.quaternion.clone(),look:new THREE.Vector3(0,wasInside?1.72:lastFocus>.5?1.15:.78,wasInside?-.09:0),fov:camera.fov};if(id==='desk')yaw=pitch=orbitYaw=0;offerings.clearSelection();}
const deskUI=createDeskInteractions({scene,camera,composer,globe,glass,renderer,backdrops,onEnter:()=>navigate('focus')});
let bloomTime=-100,offeringShot=null;
const snow=createOfferingSnow(globe),audio=createSceneAudio();
const focusShade=document.createElement('div');focusShade.className='focus-shade';document.body.append(focusShade);
const globeUI=createGlobeUI({scene,camera,cat,renderer,offerings,deskUI,navigate,rotate:angle=>{orbitYaw+=angle;},onPlant:record=>{const now=performance.now()/1000,p=flowerSpot(record.id);bloomTime=now;offerings.clearSelection();offeringShot={start:now,angle:yaw+orbitYaw,targetAngle:Math.atan2(p.x,p.z),position:camera.position.clone(),look:new THREE.Vector3(0,1.15,0),flower:globe.localToWorld(p.clone()).add(new THREE.Vector3(0,.18,0))};}});
const messageSky=document.createElement('div');messageSky.className='message-sky';messageSky.hidden=true;document.body.append(messageSky);const messageNodes=new Map();
// Project each flower's local anchor after camera movement, so messages stay in its world space.
const messageAnchor=new THREE.Vector3(),messageView=new THREE.Vector3();
function updateMessageSky(t){
 const hover=offerings.getHovered();
 messageSky.hidden=!!offeringShot||globeUI.catHovered||globeUI.blocked||!!travel||(!inside&&!(reading&&hover));
 if(messageSky.hidden)return;
 globe.updateWorldMatrix(true,false);camera.updateMatrixWorld();
 const visibleRecords=offerings.getRecords().filter(r=>r.message);
 for(const [id,node] of messageNodes){if(!visibleRecords.some(r=>r.id===id)){node.remove();messageNodes.delete(id);}}
 for(const rec of visibleRecords){
  let node=messageNodes.get(rec.id);
  if(!node){node=document.createElement('span');node.className='flower-message';node.dataset.flowerId=rec.id;const author=document.createElement('strong');author.className='message-author';author.textContent=rec.name;const words=document.createElement('span');words.textContent=rec.message;node.append(author,words);messageSky.append(node);messageNodes.set(rec.id,node);}
  node.querySelector('.message-author').textContent=rec.name;node.lastElementChild.textContent=rec.message;
  node.classList.toggle('closeup-message',!inside);
  if(!inside){
   node.hidden=hover?.id!==rec.id;
   node.style.left='50%';node.style.top='21%';node.style.opacity='1';node.style.fontSize='';
   continue;
  }
  messageAnchor.copy(flowerSpot(rec.id));
  messageAnchor.y+=.70+(rec.id%4)*.047+(reduced?0:Math.sin(t*.9+rec.id)*.018);
  globe.localToWorld(messageAnchor);
  messageView.copy(messageAnchor).applyMatrix4(camera.matrixWorldInverse);
  messageAnchor.project(camera);
  const visible=messageView.z<0&&messageAnchor.z>-1&&messageAnchor.z<1&&Math.abs(messageAnchor.x)<1.15&&Math.abs(messageAnchor.y)<1.12;
  node.hidden=!visible||(!inside&&hover?.id!==rec.id);
  if(!visible)continue;
  node.style.left=((messageAnchor.x*.5+.5)*viewport.width)+'px';
  node.style.top=((-messageAnchor.y*.5+.5)*viewport.height)+'px';
  node.style.opacity=String(!inside?.96:reduced?.8:.2+.65*Math.pow(.5+.5*Math.sin(t*.7+rec.id*2.399),2));
  node.style.fontSize=(matchMedia('(any-pointer:coarse) and (max-height:600px)').matches?THREE.MathUtils.clamp(12/Math.sqrt(Math.max(.4,-messageView.z)),10,13):THREE.MathUtils.clamp(15/Math.sqrt(Math.max(.4,-messageView.z)),12,17))+'px';
 }
}

const clock=new THREE.Clock(),look=new THREE.Vector3();const ease=t=>t*t*(3-2*t);let frames=0;
function animate(now){requestAnimationFrame(animate);if(document.hidden)return;const dt=Math.min(clock.getDelta(),.05),t=now/1000;let zoom=0,phase='idle',elapsed=-1;
 if(ritualStart>=0){elapsed=(now-ritualStart)/1000;if(elapsed<2.6){zoom=ease(elapsed/2.6);phase='approach';}else if(elapsed<15.5){zoom=1;phase=elapsed<6?'snow':elapsed<9.4?'flower':elapsed<13.5?'glow':'quiet';}else if(elapsed<20){zoom=1-ease((elapsed-15.5)/4.5);phase='return';}else{ritualStart=-1;elapsed=-1;}}
 const particleOpacity=0;
 near=THREE.MathUtils.damp(near,(reading||inside)?1:0,2.2,dt);const focus=reduced?near:Math.max(near,zoom);const aspect=viewport.width/viewport.height,portrait=aspect<1;const distance=THREE.MathUtils.lerp(portrait?28:17.5,portrait?8.2:5.7,focus);
 const targetY=THREE.MathUtils.lerp(.78,1.15,focus);const eyeY=THREE.MathUtils.lerp(.78,7.0,focus);
 camera.setViewOffset(viewport.width,viewport.height,0,-viewport.height*.27*(1-focus),viewport.width,viewport.height);
 windowPan=THREE.MathUtils.damp(windowPan,reading?0:windowPanTarget,2,dt);lastFocus=focus;const angle=THREE.MathUtils.clamp(yaw+windowPan,-yawLimit,yawLimit)+orbitYaw*focus;camera.position.set(Math.sin(angle)*distance,eyeY+pitch*distance*focus,Math.cos(angle)*distance);look.set(0,targetY,0);camera.lookAt(look);camera.fov=inside?78:32;if(inside){camera.clearViewOffset();camera.position.set(Math.sin(insideYaw)*1.14,1.08,Math.cos(insideYaw)*1.14);camera.lookAt(0,1.72+insidePitch,-.09);}if(travel){const progress=reduced?1:Math.min(1,(now-travel.start)/2400),blend=ease(progress);const endPosition=camera.position.clone(),endQuaternion=camera.quaternion.clone();camera.position.lerpVectors(travel.position,endPosition,blend);camera.lookAt(travel.look.clone().lerp(new THREE.Vector3(0,inside?1.72+insidePitch:targetY,inside?-.09:0),blend));camera.fov=THREE.MathUtils.lerp(travel.fov,camera.fov,blend);interior.blend(inside?blend:1-blend);if(progress===1)travel=null;}
 if(offeringShot){const shot=offeringShot,age=t-shot.start,difference=Math.atan2(Math.sin(shot.targetAngle-shot.angle),Math.cos(shot.targetAngle-shot.angle)),progress=ease(Math.min(1,age/2.4)),a=shot.angle+difference*progress;
  const destination=new THREE.Vector3(Math.sin(a)*4.7,5.8,Math.cos(a)*4.7);const returnMix=THREE.MathUtils.smoothstep(age,8,10.5);
  camera.position.lerpVectors(shot.position,destination,progress);camera.position.lerp(new THREE.Vector3(Math.sin(shot.targetAngle)*distance,eyeY,Math.cos(shot.targetAngle)*distance),returnMix);
  const target=shot.look.clone().lerp(shot.flower,progress).lerp(new THREE.Vector3(0,targetY,0),returnMix);camera.lookAt(target);
  orbitYaw=shot.angle+difference*progress-yaw;if(age>=10.5)offeringShot=null;
 }
 camera.updateProjectionMatrix();
 for(const [id,button] of sceneButtons){button.disabled=!!travel;button.setAttribute('aria-pressed',String(id===(inside?'inside':reading?'focus':'desk')));}offerings.setImmersive(interior.amount);offerings.setDetail(reading&&!inside&&!travel);offerings.update(now,false);if(!reduced){key.target.position.x=-1+Math.sin(t*.38)*.32;key.target.position.z=1.5+Math.sin(t*.27)*.23;}
 const warmth=0;const stageAmount=stage.update(Math.max(near,zoom),warmth);rainUniforms.uTime.value=reduced?0:t;rainUniforms.uAmount.value=inside?0:near;key.map=near>.45?softLeafMap:leafPattern;const deskWeather=deskUI.update(dt,!reading&&!inside&&!travel&&near<.1);key.intensity*=1-deskWeather*.35;if(reading&&!inside)backdrops.setOvercast(near);globeUI.update(reading&&!inside&&!travel,inside&&!travel,!!offeringShot);snow.update(offeringShot?t-offeringShot.start:-1,reduced);audio.setMode(inside?'inside':reading?'focus':'desk');audio.setHoverRain(deskWeather);focusShade.style.opacity=String(near*(1-interior.amount));backdrops.update(t,reduced);interior.update(t,reduced);updateMessageSky(t);composer.render();if(frames++%30===0)document.querySelector('#garden').dataset.stats=JSON.stringify({mode:inside?'inside-globe':'globe',phase,stage:stageAmount,snowOpacity:particleOpacity,glassWarmth:warmth,orbitDegrees:THREE.MathUtils.radToDeg(orbitYaw),yawDegrees:THREE.MathUtils.radToDeg(yaw),camera:camera.position.toArray()});
}
loading.hidden=true;requestAnimationFrame(animate);
function resizeScene(){
 const width=Math.max(1,sceneHost.clientWidth),height=Math.max(1,sceneHost.clientHeight);
 if(width===viewport.width&&height===viewport.height)return;
 viewport.width=width;viewport.height=height;
 camera.aspect=width/height;camera.updateProjectionMatrix();
 renderer.setSize(width,height,false);composer.setSize(width,height);
 softFocus.uniforms.uPixel.value.set(1/width,1/height);
}
new ResizeObserver(resizeScene).observe(sceneHost);
window.addEventListener('resize',resizeScene);
window.visualViewport?.addEventListener('resize',resizeScene);
window.addEventListener('orientationchange',()=>{requestAnimationFrame(resizeScene);setTimeout(resizeScene,250);});
resizeScene();
