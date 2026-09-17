import * as THREE from 'three';
export function createGlobeInterior(scene,globe,glass){
 const cosmos=new THREE.Group();scene.add(cosmos);cosmos.visible=false;
 const texture=new THREE.TextureLoader().load('./assets/sky/milky-way-eso.webp');texture.colorSpace=THREE.SRGBColorSpace;
 const sky=new THREE.Mesh(new THREE.SphereGeometry(38,64,40),new THREE.MeshBasicMaterial({map:texture,side:THREE.BackSide,depthWrite:false,transparent:true,opacity:0,color:'#e1e3f2'}));sky.renderOrder=-1000;sky.rotation.set(.3,Math.PI/2,.32);cosmos.add(sky);
 const credit=document.createElement('a');credit.href='https://www.eso.org/public/images/eso0932a/';credit.textContent='Milky Way: ESO/S. Brunier · CC BY 4.0';credit.target='_blank';credit.style.cssText='position:fixed;left:28px;top:28px;font-size:11px;color:#c4c5d1;z-index:6';credit.hidden=true;document.body.append(credit);
 let seed=935;const rnd=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};const positions=[],colors=[];
 for(let i=0;i<2600;i++){const a=rnd()*Math.PI*2,y=rnd()*2-1,r=Math.sqrt(1-y*y);positions.push(Math.cos(a)*r*30,y*30,Math.sin(a)*r*30);const c=new THREE.Color().setHSL(.1+rnd()*.58,.16,.55+rnd()*.4);colors.push(c.r,c.g,c.b);}
 const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geo.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));const stars=new THREE.Points(geo,new THREE.PointsMaterial({size:.035,vertexColors:true,transparent:true,opacity:.9,depthWrite:false,sizeAttenuation:true}));stars.visible=false;cosmos.add(stars);
 cosmos.add(new THREE.HemisphereLight('#ffe8cd','#15151e',.10)); const uplights=[];
 for(const [x,y,z,color,power] of [[-.4,2.65,1.9,'#ffdbac',12],[.55,2.3,1.65,'#ffe4ba',2.5]]){const l=new THREE.SpotLight(color,power,7,.43,1,2);l.position.set(x,y,z);l.target.position.set(-.16,1.62,.18);cosmos.add(l,l.target);uplights.push(l);}

 const floor=new THREE.Mesh(new THREE.CircleGeometry(12,96),new THREE.MeshStandardMaterial({color:'#10121d',roughness:.95}));floor.renderOrder=-999;floor.rotation.x=-Math.PI/2;floor.position.y=.93;cosmos.add(floor);
 const interiorDim={value:0};
 globe.traverse(o=>{if(!o.isMesh||o===glass)return;for(const m of Array.isArray(o.material)?o.material:[o.material]){
  if(m.userData.isMemorialFlower||m.userData.interiorDim)return;m.userData.interiorDim=true;const previous=m.onBeforeCompile,cache=m.customProgramCacheKey();
  m.onBeforeCompile=(shader,renderer)=>{previous.call(m,shader,renderer);shader.uniforms.uInteriorDim=interiorDim;
   shader.vertexShader='varying vec3 vInteriorPosition;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <project_vertex>','#include <project_vertex>\nvInteriorPosition=(modelMatrix*vec4(transformed,1.)).xyz;');
   shader.fragmentShader='uniform float uInteriorDim;varying vec3 vInteriorPosition;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>',`float heightLight=smoothstep(1.06,1.65,vInteriorPosition.y);
    float frontLight=smoothstep(-.55,.25,vInteriorPosition.z);
    float edgeLight=1.-smoothstep(.42,.95,abs(vInteriorPosition.x));
    outgoingLight *= mix(1.,mix(.10,1.,heightLight*mix(.3,1.,frontLight)*mix(.4,1.,edgeLight)),uInteriorDim);
    #include <opaque_fragment>`);
  };m.customProgramCacheKey=()=>cache+'-interior-focus';m.needsUpdate=true;
 }});
 const saved=new Map(),materials=new Map(),roomLights=new Map();let amount=0,savedFog=scene.fog;
 const glowLights=[];cosmos.traverse(o=>{if(o.isLight)glowLights.push([o,o.intensity]);});
 function capture(){for(const child of scene.children){if(child===globe||child===cosmos||saved.has(child))continue;saved.set(child,child.visible);child.traverse(o=>{if(o.isLight&&!roomLights.has(o))roomLights.set(o,o.intensity);if(!o.isMesh)return;for(const m of Array.isArray(o.material)?o.material:[o.material]){if(!materials.has(m))materials.set(m,{opacity:m.opacity,transparent:m.transparent,depthWrite:m.depthWrite});}});}}
 function blend(value){amount=THREE.MathUtils.clamp(value,0,1);interiorDim.value=amount;capture();document.body.classList.toggle('inside-globe',amount>.5);credit.hidden=amount<.8;cosmos.visible=amount>0;scene.fog=amount>.05?null:savedFog;
 for(const [child,visible] of saved)child.visible=visible&&amount<.999;
 for(const [m,original] of materials){const transparent=amount>.001||original.transparent;if(m.transparent!==transparent){m.transparent=transparent;m.needsUpdate=true;}m.opacity=original.opacity*(1-amount);m.depthWrite=original.depthWrite;}
 // Retire the refractive shell before the camera crosses it. Transparent room
 // objects are excluded from Three's transmission capture.
 const shellFade=THREE.MathUtils.smoothstep(amount,0,.12);
 glass.visible=shellFade<.999;glass.material.opacity=1-shellFade;glass.material.transmission=1;

 sky.material.opacity=amount;floor.material.transparent=true;floor.material.depthWrite=false;floor.material.opacity=amount;
 for(const [l,power] of glowLights)l.intensity=power*amount;
 }
 return {set(value){blend(value?1:0);},blend,update(){if(amount>0){for(const [light,initial] of roomLights){const controlled=light.parent===scene;light.intensity=(controlled?light.intensity:initial)*(1-amount);}scene.environmentIntensity=THREE.MathUtils.lerp(scene.environmentIntensity,.035,amount);}},get amount(){return amount;},get active(){return amount>.5;}};
}
