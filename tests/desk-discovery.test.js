import test from 'node:test';
import assert from 'node:assert/strict';
import {createDeskDiscovery} from '../src/desk-discovery.js';
test('discovery starts with the globe, pulses gently, and does not repeat the last object',()=>{
 const cue=createDeskDiscovery(()=>0);const ids=['bed','globe','mug'];let current;
 for(let i=0;i<12;i++)current=cue.update(.1,ids);
 assert.equal(current.id,'globe');
 const seen=new Set();
 for(let i=0;i<120;i++){current=cue.update(.1,ids);if(current){assert.ok(current.amount>=0&&current.amount<=1);seen.add(current.id);}}
 assert.ok(seen.has('bed'));assert.ok(seen.has('globe'));
 cue.reset();for(let i=0;i<5;i++)assert.equal(cue.update(.1,ids),null);
});
test('discovery handles unavailable objects without leaving a stale target',()=>{
 const cue=createDeskDiscovery(()=>0);for(let i=0;i<12;i++)cue.update(.1,['globe']);
 assert.equal(cue.update(.1,['bed']),null);
});

test('a whole-outline hint brightens, blinks once, and fades before the next object',()=>{
 const cue=createDeskDiscovery(()=>.5),samples=[];let next=false;
 for(let i=0;i<40;i++){
  const state=cue.update(.1,['globe','bed']);
  if(state?.id==='bed'){next=true;break;}
  if(state?.id==='globe')samples.push(state.amount);
 }
 assert.ok(samples[4]>.95); // Initial full brightness.
 assert.ok(samples[10]<samples[7]-.25); // One soft dip.
 assert.ok(samples[13]>samples[10]+.25); // Bright again.
 assert.ok(samples.at(-1)<.05); // Fade to dark before switching.
 assert.equal(next,true);
});
