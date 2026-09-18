export function needsLandscape({coarse,shortSide,orientation,legacyAngle,width,height}){
 if(!coarse||shortSide>600)return false;
 if(orientation)return orientation.startsWith('portrait');
 if(typeof legacyAngle==='number')return Math.abs(legacyAngle)%180===0;
 return height>width;
}
export function installOrientationGate(){
 const gate=document.querySelector('#orientation-gate');
 const coarse=matchMedia('(any-pointer: coarse)');
 let release;const ready=new Promise(resolve=>{release=resolve;});
 function update(){
  const blocked=needsLandscape({coarse:coarse.matches,shortSide:Math.min(screen.width,screen.height),orientation:screen.orientation?.type,legacyAngle:window.orientation,width:innerWidth,height:innerHeight});
  document.documentElement.classList.toggle('portrait-blocked',blocked);
  if(blocked&&!gate.open)gate.showModal();
  if(!blocked){if(gate.open)gate.close();release();}
 }
 gate.addEventListener('cancel',event=>event.preventDefault());
 window.addEventListener('resize',update);window.addEventListener('orientationchange',update);
 screen.orientation?.addEventListener('change',update);coarse.addEventListener('change',update);
 update();return ready;
}
