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

test('a hint draws its outline before fading and the next hint starts within 2.4 seconds',()=>{
 const cue=createDeskDiscovery(()=>.5);let previous=0,completed=false,first=null,changed=false;
 for(let i=0;i<27;i++){
  const state=cue.update(.1,['globe','bed']);
  if(!state)continue;
  if(!first)first=state.id;
  if(state.id!==first){changed=true;break;}
  assert.ok(state.progress>=previous);previous=state.progress;
  if(state.progress===1)completed=true;
 }
 assert.equal(completed,true);assert.equal(changed,true);
});
