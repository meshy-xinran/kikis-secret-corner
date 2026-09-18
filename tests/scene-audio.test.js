import test from 'node:test';
import assert from 'node:assert/strict';
import {createSceneAudio} from '../src/scene-audio.js';

test('music starts without waiting for rain, and failed playback can retry the same audio graph', async()=>{
 const previous={document:globalThis.document,window:globalThis.window,Audio:globalThis.Audio,fetch:globalThis.fetch};
 const events=[];let button,contexts=0,plays=0,rejectPlay=false;
 const node=()=>({gain:{value:0,setTargetAtTime(){}},threshold:{},ratio:{},frequency:{},connect(target){return target;}});
 class Context{
  constructor(){contexts++;this.sampleRate=20;this.currentTime=0;this.state='running';this.destination=node();}
  createGain=node;createDynamicsCompressor=node;createBiquadFilter=node;createConvolver=node;
  createBuffer(ch,length,rate){return {duration:length/rate,length,numberOfChannels:ch,sampleRate:rate,getChannelData:()=>new Float32Array(length)};}
  createMediaElementSource(){events.push('graph');return node();}
  resume(){events.push('resume');return Promise.resolve();}
 }
 try{
  globalThis.document={createElement:()=>({dataset:{},setAttribute(){}}),body:{append(el){button=el;}},querySelector:()=>({addEventListener(){}}),addEventListener(){}};
  globalThis.window={AudioContext:Context};
  globalThis.Audio=class{play(){plays++;events.push('play');return rejectPlay?Promise.reject(new Error('blocked')):Promise.resolve();}pause(){}};
  globalThis.fetch=()=>{events.push('rain');return new Promise(()=>{});};
  const flush=()=>new Promise(resolve=>setImmediate(resolve));
  createSceneAudio();button.onclick();
  assert.deepEqual(events,['graph','resume','play']);
  await flush();assert.equal(button.textContent,'♫ Sound on');assert.ok(events.includes('rain'));
  button.onclick();assert.equal(button.textContent,'♫ Enable sound — highly recommended');
  rejectPlay=true;button.onclick();await flush();assert.equal(button.textContent,'♫ Tap to retry sound');
  rejectPlay=false;button.onclick();await flush();assert.equal(button.textContent,'♫ Sound on');
  assert.equal(contexts,1);assert.equal(plays,3);
 }finally{Object.assign(globalThis,previous);}
});
