import * as THREE from 'three';
export function createOfferingSnow(globe){
 const count=560,positions=new Float32Array(count*3),seeds=[];let seed=8721;const rnd=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 for(let i=0;i<count;i++)seeds.push([rnd()*Math.PI*2,Math.sqrt(rnd())*1.9,rnd(),.14+rnd()*.18]);
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));
 const canvas=document.createElement('canvas');canvas.width=canvas.height=32;const c=canvas.getContext('2d'),g=c.createRadialGradient(16,16,0,16,16,15);g.addColorStop(0,'#fff');g.addColorStop(.5,'#ffffffdd');g.addColorStop(1,'#ffffff00');c.fillStyle=g;c.fillRect(0,0,32,32);
 const material=new THREE.PointsMaterial({color:'#fff3db',map:new THREE.CanvasTexture(canvas),size:.038,transparent:true,opacity:0,depthWrite:false,sizeAttenuation:true});
 const snow=new THREE.Points(geometry,material);snow.renderOrder=11;snow.frustumCulled=false;snow.visible=false;globe.add(snow);
 return {update(elapsed,reduced){snow.visible=elapsed>=1.1&&elapsed<9.5&&!reduced;if(!snow.visible)return;material.opacity=THREE.MathUtils.smoothstep(elapsed,1.1,2)*(1-THREE.MathUtils.smoothstep(elapsed,6.5,9.5))*.9;for(let i=0;i<count;i++){const [a,r,phase,speed]=seeds[i],fall=(phase+(elapsed-1.1)*speed)%1,y=4.95-fall*3.6,limit=Math.sqrt(Math.max(.1,2.5**2-(y-2.95)**2)),radius=Math.min(r,limit*.88);positions[i*3]=Math.sin(a)*radius+Math.sin(elapsed*.7+i)*.055;positions[i*3+1]=y;positions[i*3+2]=Math.cos(a)*radius+Math.cos(elapsed*.6+i)*.05;}geometry.attributes.position.needsUpdate=true;}};
}
