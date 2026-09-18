// One gentle hint at a time; hovering/dragging resets the idle delay.
export function createDeskDiscovery(random=Math.random){
 let elapsed=0,wait=.3,target=null,last=null;
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
   if(elapsed>=1.65){last=target;target=null;elapsed=0;wait=.25+random()*.4;return null;}
   return {id:target,progress:Math.min(1,elapsed/.65),amount:Math.min(1,elapsed/.1)*Math.max(0,Math.min(1,(1.65-elapsed)/.55))};
  }
 };
}
