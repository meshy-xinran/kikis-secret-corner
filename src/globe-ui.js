import * as THREE from 'three';
export function createGlobeUI({scene,camera,cat,renderer,offerings,deskUI,navigate,rotate,onPlant}){
 const layer=document.createElement('section');layer.className='globe-actions';layer.hidden=true;
 layer.innerHTML=`<button class="leave-flowers"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M20 28 32 56 45 28M32 56 32 21M23 43 41 43" fill="none" stroke="currentColor" stroke-width="2"/><g fill="#f2b788"><circle cx="19" cy="20" r="7"/><circle cx="12" cy="26" r="6"/><circle cx="24" cy="28" r="6"/></g><g fill="#eed498"><circle cx="34" cy="12" r="7"/><circle cx="27" cy="18" r="6"/><circle cx="39" cy="20" r="6"/></g><g fill="#d7a0ac"><circle cx="47" cy="23" r="7"/><circle cx="40" cy="29" r="6"/><circle cx="52" cy="30" r="6"/></g><path d="M19 42 Q11 31 25 36M39 40 Q52 34 45 45" fill="#adbf90"/></svg><span>Leave Kiki a bouquet</span></button>
 <div class="scene-return"><button data-view="focus">Back to the table ↗</button><button data-view="desk">Back to Kiki’s corner ↗</button></div>
 <button class="cat-invitation">Meet Kiki among the stars <span>↗</span></button>`;
 document.body.append(layer);
 const offer=layer.querySelector('.leave-flowers'),invite=layer.querySelector('.cat-invitation'),tableBack=layer.querySelector('[data-view="focus"]');
 const dialog=document.createElement('dialog');dialog.className='flower-dialog';dialog.innerHTML=`<form><button type="button" class="dialog-close" aria-label="Close">×</button><h2>A little love for Kiki</h2><p>Your words will bloom in her little world.</p><label>Your name or nickname<input name="name" maxlength="24" required placeholder="What should we call you?" autocomplete="given-name"></label><label>Your message<textarea name="message" maxlength="240" required rows="4" placeholder="Leave her a few kind words…"></textarea></label><p class="form-error" role="alert"></p><button class="plant-submit" type="submit">Leave a bouquet ↗</button><small>Demo: your flower stays until you refresh this page.</small></form>`;document.body.append(dialog);
 const form=dialog.querySelector('form'),error=dialog.querySelector('.form-error');
 offer.onclick=()=>{error.textContent='';dialog.showModal();};dialog.querySelector('.dialog-close').onclick=()=>dialog.close();
 form.onsubmit=e=>{e.preventDefault();try{const data=new FormData(form);const record=offerings.plant(String(data.get('name')),String(data.get('message')));dialog.close();form.reset();onPlant(record);}catch(err){error.textContent=err.message;}};
 layer.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>navigate(b.dataset.view));invite.onclick=()=>navigate('inside');
 const ray=new THREE.Raycaster(),pointer=new THREE.Vector2();let enabled=false,hoverCat=false,press=null;
 function pick(e){if(!enabled||dialog.open)return false;const rect=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);cat.updateWorldMatrix(true,true);camera.updateMatrixWorld();ray.setFromCamera(pointer,camera);return ray.intersectObject(cat,true).length>0&&!offerings.getHovered();}
 renderer.domElement.addEventListener('pointermove',e=>{hoverCat=e.buttons?false:pick(e);});renderer.domElement.addEventListener('pointerleave',()=>hoverCat=false);
 renderer.domElement.addEventListener('pointerdown',e=>{press={x:e.clientX,y:e.clientY,cat:pick(e)};});
 renderer.domElement.addEventListener('pointerup',e=>{if(press?.cat&&enabled&&Math.hypot(e.clientX-press.x,e.clientY-press.y)<6)navigate('inside');press=null;});
 return {get catHovered(){return enabled&&hoverCat;},get blocked(){return dialog.open;},update(isFocus,isInside,busy=false){
  if(!isFocus||busy||dialog.open){if(enabled||isInside||busy||dialog.open)deskUI.setFocusOutline(null);hoverCat=false;}enabled=isFocus&&!busy;offer.disabled=busy;layer.classList.toggle("ritual-running",busy);layer.hidden=!isFocus&&!isInside;offer.hidden=!isFocus;tableBack.hidden=!isInside;invite.hidden=!isFocus||!hoverCat||dialog.open;
  if(!isFocus)hoverCat=false;
  if(isFocus&&!busy){const flower=offerings.getOutline();deskUI.setFocusOutline(!flower&&hoverCat?cat:null,'#c6e79c');renderer.domElement.style.cursor=hoverCat?'pointer':'';}
  if(!isFocus&&!dialog.open)invite.hidden=true;
 }};
}
