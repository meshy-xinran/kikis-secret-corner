// One gentle hint at a time; hovering/dragging resets the idle delay.
export function createDeskDiscovery(random=Math.random){
 let elapsed=0,wait=.9,target=null,last=null;
 return {
  reset(){elapsed=0;wait=1.8;target=null;},
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
   if(elapsed>=2.8){last=target;target=null;elapsed=0;wait=1.5+random()*1.5;return null;}
   return {id:target,amount:Math.sin(Math.PI*elapsed/2.8)**2};
  }
 };
}
