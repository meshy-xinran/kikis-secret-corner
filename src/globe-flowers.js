import {demoFlowers} from './demo-flowers.js';
import * as THREE from 'three';
import {flowerMessage,flowerName} from './flower-messages.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
const LIMIT=256;
export function flowerPosition(id){let slot=0;for(let ring=0;ring<12;ring++){const r=1.65+ring*.65,n=24+ring*12;for(let i=0;i<n;i++){const a=i/n*Math.PI*2+.48;const x=Math.sin(a)*r,z=Math.cos(a)*r;if((Math.abs(x)<1.02&&z>-.15)||Math.hypot(x-3.4,z+1.6)<.85||r>6.4)continue;if(slot++===id)return new THREE.Vector3(x,0,z);}}return new THREE.Vector3(-2,0,-2);}
export function initFlowers({scene,camera,onPlant,positionFor=flowerPosition,plantDelay=0,growthDuration=1500,refinedGrowth=false,palette=null,onSelect=()=>{}}){
 let immersive=false;const breezeTime={value:0},breezeAmount={value:0},insideOpacity={value:0};
 const records=demoFlowers.map(record=>({...record}));let animation=null,selected=null,detail=true;

 const stemMat=new THREE.MeshStandardMaterial({vertexColors:true,roughness:.85});
 stemMat.userData.isMemorialFlower=true;
 function colored(g,c){const color=new THREE.Color(c),arr=[];for(let i=0;i<g.attributes.position.count;i++)arr.push(color.r,color.g,color.b);g.setAttribute('color',new THREE.Float32BufferAttribute(arr,3));return g;}
 // Highlight the actual opaque flower before glass transmission is rendered.
 stemMat.onBeforeCompile=shader=>{
  shader.uniforms.uInsideOpacity=insideOpacity;shader.uniforms.uFlowerTime=breezeTime;shader.uniforms.uFlowerWind=breezeAmount;
  shader.vertexShader='uniform float uFlowerTime;\nuniform float uFlowerWind;\nvarying float vFlowerGlow;\n#ifdef USE_INSTANCING\nattribute float instanceGlow;\n#endif\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvFlowerGlow=0.;\n#ifdef USE_INSTANCING\nvFlowerGlow=instanceGlow;\ntransformed.x+=uFlowerWind*sin(uFlowerTime*1.25+instanceMatrix[3].x*4.+instanceMatrix[3].z*3.)*position.y*position.y*.13;\n#endif');
  shader.fragmentShader='uniform float uInsideOpacity;\nvarying float vFlowerGlow;\n'+shader.fragmentShader;
  shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>','#include <emissivemap_fragment>\ntotalEmissiveRadiance += diffuseColor.rgb * (vFlowerGlow * .4 + uInsideOpacity * .20);');
  shader.fragmentShader=shader.fragmentShader.replace('#include <alphahash_fragment>', 'diffuseColor.a *= mix(1.,mix(.06,.46,smoothstep(.25,1.3,length(vViewPosition))),uInsideOpacity);\n#include <alphahash_fragment>');
 };
 stemMat.customProgramCacheKey=()=> 'flower-instance-emission-v2';
 const flowers=[];const palettes=palette||['#fff2cd','#bfd7ef','#edbdb4','#dbcfef','#f1d27e','#e9ece1'];
 for(let s=0;s<6;s++){const gs=[];gs.push(colored(new THREE.CylinderGeometry(.012,.018,.47,5).translate(0,.235,0),'#5c7652'));for(let k=0;k<3;k++){const l=new THREE.SphereGeometry(1,7,5);l.scale(.095,.022,.04);l.rotateZ((k%2?1:-1)*.55);l.translate((k%2?1:-1)*.06,.12+k*.09,0);gs.push(colored(l,'#819261'));}
 for(let k=0;k<5+s%3;k++){const a=k/(5+s%3)*Math.PI*2;const p=new THREE.SphereGeometry(1,8,5);p.scale(.077,.025,.046);p.rotateY(-a);p.translate(Math.cos(a)*.061,.47,Math.sin(a)*.061);gs.push(colored(p,palettes[s]));}gs.push(colored(new THREE.SphereGeometry(.032,8,6).translate(0,.485,0),'#cfaa56'));
 const im=new THREE.InstancedMesh(mergeGeometries(gs),stemMat,LIMIT);im.geometry.setAttribute('instanceGlow',new THREE.InstancedBufferAttribute(new Float32Array(LIMIT),1));im.count=0;im.frustumCulled=false;im.castShadow=true;scene.add(im);flowers.push(im);}
 let growing=null;
 function createGrowth(rec){
  const geometry=flowers[rec.id%6].geometry.clone();
  growing=new THREE.Mesh(geometry,stemMat);growing.userData.rest=geometry.attributes.position.array.slice();growing.position.copy(positionFor(rec.id));growing.rotation.y=rec.id*2.4;growing.scale.setScalar(.95+(rec.id%4)*.1);growing.castShadow=true;growing.frustumCulled=false;scene.add(growing);
 }
 function grow(t){
  const smooth=(a,b)=>THREE.MathUtils.smoothstep(t,a,b),stem=smooth(0,.58),bloom=smooth(.42,1);
  const attr=growing.geometry.attributes.position,rest=growing.userData.rest;growing.visible=t>.001;if(!growing.visible)return;
  for(let i=0;i<attr.count;i++){
   const x=rest[i*3],y=rest[i*3+1],z=rest[i*3+2];
   if(y>.42){const spread=.08+.92*bloom;attr.setXYZ(i,x*spread,.47*stem+(y-.47)*(.2+.8*bloom)+Math.hypot(x,z)*(1-bloom)*1.3,z*spread);}
   else{const leaf=.04+.96*smooth(.12+y*.55,.42+y*.55);attr.setXYZ(i,x*leaf,y*stem,z*leaf);}
  }
  attr.needsUpdate=true;growing.geometry.computeVertexNormals();
 }
 const bubbleCanvas=document.createElement('canvas');bubbleCanvas.width=128;bubbleCanvas.height=128;
 const ctx=bubbleCanvas.getContext('2d');ctx.fillStyle='#ffffff';ctx.beginPath();ctx.moveTo(64,116);ctx.bezierCurveTo(54,96,20,78,20,52);ctx.bezierCurveTo(20,27,39,12,64,12);ctx.bezierCurveTo(89,12,108,27,108,52);ctx.bezierCurveTo(108,78,74,96,64,116);ctx.closePath();ctx.fill();
 const bubbleMap=new THREE.CanvasTexture(bubbleCanvas),bubbles=new Map();let hovered=null;

 const instanceRecords=flowers.map(()=>[]);
 const o=new THREE.Object3D();
 function draw(progress=1){flowers.forEach((f,i)=>{f.count=0;instanceRecords[i]=[];});for(const rec of records){if(refinedGrowth&&animation?.id===rec.id)continue;const p=positionFor(rec.id),s=rec.id%6,f=flowers[s];o.position.copy(p);o.rotation.set(0,rec.id*2.4,0);const scale=animation?.id===rec.id?(refinedGrowth?.0001:Math.max(.001,progress)):1;o.scale.setScalar(scale*(.95+(rec.id%4)*.1));o.updateMatrix();f.setMatrixAt(f.count++,o.matrix);instanceRecords[s].push(rec);if(rec.message&&!bubbles.has(rec.id)){const bubble=new THREE.Sprite(new THREE.SpriteMaterial({map:bubbleMap,transparent:true,depthWrite:false,opacity:.82}));bubble.userData.record=rec;bubble.scale.set(.20,.20,1);scene.add(bubble);bubbles.set(rec.id,bubble);}}
 flowers.forEach(f=>{f.instanceMatrix.needsUpdate=true;f.computeBoundingSphere();});
 }

 draw();
 const hoverRay=new THREE.Raycaster();
 // Render the flower's thin back-face outline through the same glass as the petals.
 const flowerRim=new THREE.MeshBasicMaterial({color:palettes[0],side:THREE.BackSide});
 flowerRim.onBeforeCompile=shader=>{shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\ntransformed += normal * .012;');};
 const outlineFlower=new THREE.Mesh(flowers[0].geometry,flowerRim);outlineFlower.visible=false;scene.add(outlineFlower);
 function syncOutline(){outlineFlower.visible=!!hovered;if(!hovered)return;flowerRim.color.set(palettes[hovered.id%6]);outlineFlower.geometry=flowers[hovered.id%6].geometry;outlineFlower.position.copy(positionFor(hovered.id));outlineFlower.rotation.set(0,hovered.id*2.4,0);outlineFlower.scale.setScalar(.95+(hovered.id%4)*.1);outlineFlower.updateMatrixWorld();}

 function addSaved(row,animate=false){
  const existing=records.find(r=>r.remoteId===row.id);if(existing)return existing;
  let slot=records.length;
  if(records.length>=LIMIT){
   const index=records.findIndex(r=>r.remoteId);
   if(index<0)throw new Error('This little garden is full.');
   slot=records[index].id;records.splice(index,1);hovered=null;selected=null;
   const bubble=bubbles.get(slot);if(bubble){scene.remove(bubble);bubble.material.dispose();bubbles.delete(slot);}
  }
  const rec={id:slot,remoteId:row.id,name:row.name,message:row.message,date:row.created_at,authored:true};
  records.push(rec);
  if(animate){animation={id:rec.id,start:performance.now()+plantDelay};if(refinedGrowth)createGrowth(rec);}
  draw(animate?0:1);return rec;
 }
 function hydrate(rows){records.length=0;hovered=null;selected=null;for(const bubble of bubbles.values()){scene.remove(bubble);bubble.material.dispose();}bubbles.clear();for(const row of rows)addSaved(row);draw();}
 function plant(name,message){return addSaved({id:crypto.randomUUID(),name:name.trim().slice(0,24)||'A friend',message:message.trim().slice(0,240),created_at:new Date().toISOString()},true);}
 function hoverAt(pointer){
  scene.updateWorldMatrix(true,true);camera.updateMatrixWorld();hoverRay.setFromCamera(pointer,camera);
  const hit=hoverRay.intersectObjects(flowers,false)[0];
  hovered=hit?instanceRecords[flowers.indexOf(hit.object)][hit.instanceId]:null;
  // Allow a small petal-sized target around the tip, including the glass refraction offset.
  if(!hovered){let nearest=32;const tip=new THREE.Vector3();for(const rec of records){tip.copy(positionFor(rec.id));tip.y+=.485*(.95+(rec.id%4)*.1);scene.localToWorld(tip);tip.project(camera);if(tip.z < -1 || tip.z > 1)continue;const distance=Math.hypot((tip.x-pointer.x)*innerWidth/2,(tip.y-pointer.y)*innerHeight/2);if(distance<nearest){nearest=distance;hovered=rec;}}}
  syncOutline();return hovered;
 }
 return {plant,addSaved,hydrate,getOutline:()=>{syncOutline();return hovered?outlineFlower:null;},getHoverColor:()=>palettes[hovered?.id%6||0],hoverAt,clearHover:()=>{hovered=null;outlineFlower.visible=false;},getHovered:()=>hovered,clearSelection:()=>{selected=null;hovered=null;outlineFlower.visible=false;},getRecords:()=>records.map(r=>({...r})),setImmersive:value=>{insideOpacity.value=Number(value);immersive=value>.5;const transparent=value>.001;if(stemMat.transparent!==transparent){stemMat.transparent=transparent;stemMat.depthWrite=!transparent;stemMat.needsUpdate=true;}},setDetail:value=>{detail=value;},get blocked(){return false;},update(now,entered){breezeTime.value=now*.001;breezeAmount.value=immersive&&!matchMedia('(prefers-reduced-motion: reduce)').matches?1:0;const activeRecord=hovered||selected;
 flowers.forEach((flower,species)=>{const glow=flower.geometry.attributes.instanceGlow;glow.array.fill(0);if(immersive)instanceRecords[species].forEach((rec,i)=>glow.setX(i,.12+.5*Math.pow(Math.max(0,Math.sin(now*.0007+rec.id*2.399)),6)));if(activeRecord&&detail){const index=instanceRecords[species].findIndex(rec=>rec.id===activeRecord.id);if(index>=0)glow.setX(index,1);}glow.needsUpdate=true;});
 for(const [id,bubble] of bubbles){const p=positionFor(id),active=activeRecord?.id===id;bubble.visible=false&&detail&&(active||id>=records.length-12)&&!(animation?.id===id&&now<animation.start+growthDuration*.85);const bob=matchMedia('(prefers-reduced-motion: reduce)').matches?0:Math.sin(now*.0018+id)*.025;bubble.position.set(p.x,p.y+.78+(id%4)*.047+bob,p.z);bubble.material.opacity=active?1:.94;bubble.material.color.set(palettes[id%6]);if(active)bubble.material.color.lerp(new THREE.Color('#ffffff'),.12);bubble.scale.setScalar(active?.25:.20);}
 if(animation){const t=Math.max(0,Math.min(1,(now-animation.start)/growthDuration));if(refinedGrowth)grow(t);else draw(1-Math.pow(1-t,3));if(t===1){animation=null;if(growing){scene.remove(growing);growing.geometry.dispose();growing=null;}draw();}}}};
}
