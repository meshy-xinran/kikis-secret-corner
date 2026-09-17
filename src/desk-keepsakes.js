import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
export function addKeepsakes(scene){
 const mat=(color,r=.7,m=0)=>new THREE.MeshStandardMaterial({color,roughness:r,metalness:m});
 const cream=mat('#e1d2b8'),sage=mat('#7b8c78'),brass=mat('#b59866',.3,.65),leather=mat('#a76d58');
 function object(geo,material,pos,parent=scene){const m=new THREE.Mesh(geo,material);m.position.set(...pos);m.castShadow=m.receiveShadow=true;parent.add(m);return m;}
 function frame(i,x,z,w,h,turn){const g=new THREE.Group();g.userData.memoryKey=`photo-${i}`;g.position.set(x,.59,z);g.rotation.set(-.10,turn,.025*(i%2?1:-1));scene.add(g);object(new THREE.BoxGeometry(w,h,.12),mat(i%2?'#746555':'#ba9f76'),[0,h/2,0],g);object(new THREE.BoxGeometry(w-.10,h-.1,.035),cream,[0,h/2,.078],g);const t=new THREE.TextureLoader().load(`./assets/photos/memory-${[2,4,6].includes(i)?'candid':'varied'}-${i}.webp`,tex=>{const ratio=tex.image.width/tex.image.height,target=(w-.27)/(h-.27);if(ratio>target){tex.repeat.x=target/ratio;tex.offset.x=(1-tex.repeat.x)/2;}else{tex.repeat.y=ratio/target;tex.offset.y=(1-tex.repeat.y)/2;}tex.needsUpdate=true;});t.colorSpace=THREE.SRGBColorSpace;object(new THREE.PlaneGeometry(w-.27,h-.27),new THREE.MeshStandardMaterial({map:t,roughness:.95}),[0,h/2,.10],g);const foot=object(new THREE.BoxGeometry(w*.65,.08,.6),mat('#665649'),[0,.035,-.14],g);return g;}
 frame(2,-6.3,-3,1.8,2.9,.08);frame(4,-3.15,.65,1.85,1.12,-.08);frame(5,3.6,-1.4,1.75,1.85,-.1);frame(6,5.35,-2.9,1.7,2.5,-.12);
 // Linen-covered memory album, with tactile woven bump detail.
 const canvas=document.createElement('canvas');canvas.width=canvas.height=128;const c=canvas.getContext('2d');c.fillStyle='#888';c.fillRect(0,0,128,128);c.strokeStyle='#aaa';c.lineWidth=1;for(let i=0;i<128;i+=4){c.beginPath();c.moveTo(i,0);c.lineTo(i,128);c.moveTo(0,i);c.lineTo(128,i);c.stroke();}const weave=new THREE.CanvasTexture(canvas);weave.wrapS=weave.wrapT=THREE.RepeatWrapping;weave.repeat.set(8,8);const cloth=mat('#829080');cloth.bumpMap=weave;cloth.bumpScale=.015;
 const album=new THREE.Group();album.userData.memoryKey="album";album.position.set(-5,.58,2.1);album.rotation.y=.20;scene.add(album);
 object(new THREE.BoxGeometry(2.12,.045,1.58),cloth,[0,.0225,0],album);
 object(new THREE.BoxGeometry(1.98,.145,1.46),cream,[.035,.1175,0],album);
 object(new THREE.BoxGeometry(2.12,.045,1.58),cloth,[0,.2125,0],album);
 object(new THREE.BoxGeometry(.085,.235,1.58),cloth,[-1.0175,.1175,0],album);
 for(let n=0;n<7;n++)object(new THREE.BoxGeometry(1.97,.003,.008),mat('#b9ac96'),[.035,.059+n*.019,.734],album);
  // Collar laid loosely across the album, with a brass memory tag.
 const collar=object(new THREE.TorusGeometry(.43,.055,8,56),leather,[-5,.895,2.32]);collar.userData.memoryKey="collar";collar.rotation.x=Math.PI/2;collar.scale.x=1.23;const tag=object(new THREE.CylinderGeometry(.14,.14,.035,24),brass,[-4.7,.75,2.92]);tag.userData.memoryKey="collar";tag.rotation.x=Math.PI/2;object(new THREE.TorusGeometry(.055,.012,6,16),brass,[-4.7,.86,2.90]);object(new THREE.BoxGeometry(.21,.09,.10),brass,[-5.43,.895,2.47]);
 // Soft toys are loaded as textured models, with their actual rotated bounds grounded.
 const shadowCanvas=document.createElement('canvas');shadowCanvas.width=shadowCanvas.height=128;const shadowContext=shadowCanvas.getContext('2d'),gradient=shadowContext.createRadialGradient(64,64,6,64,64,62);gradient.addColorStop(0,'rgba(24,18,14,.48)');gradient.addColorStop(.5,'rgba(24,18,14,.22)');gradient.addColorStop(1,'rgba(24,18,14,0)');shadowContext.fillStyle=gradient;shadowContext.fillRect(0,0,128,128);const contactMap=new THREE.CanvasTexture(shadowCanvas);
 function contact(x,z,w,d){const m=object(new THREE.PlaneGeometry(w,d),new THREE.MeshBasicMaterial({map:contactMap,transparent:true,depthWrite:false,opacity:.65}),[x,.582,z]);m.rotation.x=-Math.PI/2;m.castShadow=m.receiveShadow=false;}
 // Mug fallback is replaced only after a generated asset loads successfully.
 const mug=new THREE.Group();mug.userData.memoryKey="mug";mug.position.set(5.9,.60,1.15);mug.scale.setScalar(1.45);scene.add(mug);const profile=[new THREE.Vector2(0,0),new THREE.Vector2(.36,0),new THREE.Vector2(.40,.08),new THREE.Vector2(.42,.67),new THREE.Vector2(.39,.71),new THREE.Vector2(.35,.67),new THREE.Vector2(.32,.09),new THREE.Vector2(0,.09)];object(new THREE.LatheGeometry(profile,48),cream,[0,0,0],mug);object(new THREE.TorusGeometry(.24,.065,10,32),cream,[.48,.36,0],mug);for(const x of [-.25,.25])object(new THREE.ConeGeometry(.1,.18,3),cream,[x,.75,0],mug);const tea=object(new THREE.CircleGeometry(.34,40),mat('#71563a',.25),[0,.55,0],mug);tea.rotation.x=-Math.PI/2;
 return {async loadBelongings(onLoaded=()=>{}){
   await Promise.all([['bed',4.8,-5.8,-.45,.15],['water-bowl',1.45,3.05,-.45,0],['fish-toy',1.25,-2.05,1.65,.65],['yarn-ball',.85,-5.6,2.75,0],['mouse-toy',.85,3.6,3.45,-.6]].map(async ([name,width,x,z,angle])=>{
    const {scene:model}=await new GLTFLoader().loadAsync('./assets/props/meshy-'+name+'.glb');
    model.rotation.y=angle;if(name==='fish-toy'){model.rotation.z=1.18;model.rotation.y=1.15;}model.updateMatrixWorld(true);const box=new THREE.Box3().setFromObject(model),size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3()),scale=width/Math.max(size.x,size.z);
    const group=new THREE.Group();group.userData.memoryKey=name;group.add(model);group.scale.setScalar(scale);group.position.set(x-center.x*scale,.58-box.min.y*scale-(name==='fish-toy'?.11:['mouse-toy','yarn-ball'].includes(name)?.018:0),z-center.z*scale);model.traverse(o=>{if(o.isMesh){o.castShadow=o.receiveShadow=true;}});scene.add(group);contact(x,z,size.x*scale*1.12,size.z*scale*1.12);
    if(name==='water-bowl'){const water=object(new THREE.CircleGeometry(width*.33,48),new THREE.MeshPhysicalMaterial({color:'#91b8ad',metalness:.15,roughness:.12,transparent:true,opacity:.75}),[x,.595+size.y*scale*.65,z]);water.userData.memoryKey='water-bowl';water.rotation.x=-Math.PI/2;}
    onLoaded();
   }));
  },async loadMug(url){const {scene:model}=await new GLTFLoader().loadAsync(url);const bounds=new THREE.Box3().setFromObject(model),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());const scale=1.45/Math.max(size.x,size.y,size.z);model.userData.memoryKey="mug";model.scale.setScalar(scale);model.position.set(5.9-center.x*scale,.58-bounds.min.y*scale,1.15-center.z*scale);model.traverse(o=>{if(o.isMesh){o.castShadow=o.receiveShadow=true;}});scene.add(model);mug.visible=false;}};
}
