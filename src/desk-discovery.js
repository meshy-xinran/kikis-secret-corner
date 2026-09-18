// One gentle hint at a time; hovering/dragging resets the idle delay.
export function createDeskDiscovery(random=Math.random){
 let elapsed=0,wait=.45,target=null,last=null;
 return {
  reset(){elapsed=0;wait=.65;target=null;},
  update(dt,ids){
   if(!ids.length)return null;
   elapsed+=Math.max(0,Math.min(dt,.1));
   if(!target){
    if(elapsed<wait)return null;
    const choices=ids.filter(id=>id!==last);
    target=last===null&&ids.includes('globe')?'globe':(choices.length?choices:ids)[Math.floor(random()*(choices.length||ids.length))];
    elapsed=0;
   }
   if(!ids.includes(target)){target=null;elapsed=0;return null;}
   if(elapsed>=2.25){last=target;target=null;elapsed=0;wait=.55+random()*.3;return null;}
   const smooth=t=>{t=Math.max(0,Math.min(1,t));return t*t*(3-2*t);};
   // Fade in, dip once and recover softly, then fade completely out.
   const blink=elapsed>=.75&&elapsed<=1.25?1-.38*Math.sin(Math.PI*(elapsed-.75)/.5)**2:1;
   return {id:target,amount:smooth(elapsed/.35)*blink*(1-smooth((elapsed-1.5)/.75))};
  }
 };
}
