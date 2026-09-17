import * as THREE from 'three';
export function createGlobeUI({scene,camera,cat,renderer,offerings,deskUI,navigate,rotate,onPlant}){
 const layer=document.createElement('section');layer.className='globe-actions';layer.hidden=true;
 layer.innerHTML=`
 <div class="scene-return"><button data-view="focus">Back to the table ↗</button><button data-view="desk">Back to Kiki’s corner ↗</button></div>
 <button class="cat-invitation">Meet Kiki among the stars <span>↗</span></button>`;
 document.body.append(layer);
 const invite=layer.querySelector('.cat-invitation'),tableBack=layer.querySelector('[data-view="focus"]');
 layer.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>navigate(b.dataset.view));invite.onclick=()=>navigate('inside');
 const ray=new THREE.Raycaster(),pointer=new THREE.Vector2();let enabled=false,hoverCat=false,press=null;
 function pick(e){if(!enabled)return false;const rect=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);cat.updateWorldMatrix(true,true);camera.updateMatrixWorld();ray.setFromCamera(pointer,camera);return ray.intersectObject(cat,true).length>0&&!offerings.getHovered();}
 renderer.domElement.addEventListener('pointermove',e=>{hoverCat=e.buttons?false:pick(e);});renderer.domElement.addEventListener('pointerleave',()=>hoverCat=false);
 renderer.domElement.addEventListener('pointerdown',e=>{press={x:e.clientX,y:e.clientY,cat:pick(e)};});
 renderer.domElement.addEventListener('pointerup',e=>{if(press?.cat&&enabled&&Math.hypot(e.clientX-press.x,e.clientY-press.y)<6)navigate('inside');press=null;});
 return {get catHovered(){return enabled&&hoverCat;},get blocked(){return false;},update(isFocus,isInside,busy=false){
  if(!isFocus||busy){if(enabled||isInside||busy)deskUI.setFocusOutline(null);hoverCat=false;}enabled=isFocus&&!busy;layer.classList.toggle("ritual-running",busy);layer.hidden=!isFocus&&!isInside;tableBack.hidden=!isInside;invite.hidden=!isFocus||!hoverCat;
  if(!isFocus)hoverCat=false;
  if(isFocus&&!busy){const flower=offerings.getOutline();deskUI.setFocusOutline(!flower&&hoverCat?cat:null,'#c6e79c');renderer.domElement.style.cursor=hoverCat?'pointer':'';}
  if(!isFocus)invite.hidden=true;
 }};
}
