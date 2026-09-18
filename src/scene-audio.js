export function createSceneAudio(){
 const button=document.createElement('button');button.className='sound-toggle';button.textContent='♫ Enable sound';button.setAttribute('aria-label','Enable ambient sound');document.body.append(button);
 const theme=new Audio('./assets/audio/kiki-theme-loop.mp3');theme.loop=true;theme.preload='metadata';
 let context,master,bass,wet,rainGain,musicGain,started=false,muted=false,loading=false,mode='desk',hoverRain=0;
 let rainReady=false,rainLoading=false;
 function deadline(promise,ms){let timer;return Promise.race([promise,new Promise((_,reject)=>{timer=setTimeout(()=>reject(new Error('Audio timed out')),ms);})]).finally(()=>clearTimeout(timer));}
 function seamless(buffer,seconds){const fade=Math.min(seconds,buffer.duration/4),n=Math.floor(fade*buffer.sampleRate),length=buffer.length-n,result=context.createBuffer(buffer.numberOfChannels,length,buffer.sampleRate);for(let ch=0;ch<buffer.numberOfChannels;ch++){const src=buffer.getChannelData(ch),dst=result.getChannelData(ch);dst.set(src.subarray(n));for(let i=0;i<n;i++){const blend=i/n;dst[length-n+i]=src[buffer.length-n+i]*(1-blend)+src[i]*blend;}}return result;}
 function mix(){if(!started)return;const time=context.currentTime;master.gain.setTargetAtTime(muted?0:.7,time,.4);musicGain.gain.setTargetAtTime(mode==='inside'?.39:mode==='focus'?.24:.32,time,1.2);rainGain.gain.setTargetAtTime(mode==='focus'?.65:mode==='desk'?hoverRain*.5:0,time,.8);bass.gain.setTargetAtTime(mode==='inside'?6:0,time,1.4);wet.gain.setTargetAtTime(mode==='inside'?.48:.14,time,1.5);button.dataset.mode=mode;button.dataset.playing=String(!muted);button.textContent=muted?'♫ Sound off':'♫ Sound on';button.setAttribute('aria-label',muted?'Enable ambient sound':'Mute ambient sound');button.setAttribute('aria-pressed',String(!muted));}
 function setup(){
  if(context)return;
  context=new (window.AudioContext||window.webkitAudioContext)();
  master=context.createGain();master.gain.value=0;
  const limiter=context.createDynamicsCompressor();limiter.threshold.value=-14;limiter.ratio.value=3;master.connect(limiter).connect(context.destination);
  bass=context.createBiquadFilter();bass.type='lowshelf';bass.frequency.value=240;bass.connect(master);
  musicGain=context.createGain();musicGain.gain.value=.32;musicGain.connect(bass);
  const reverb=context.createConvolver(),impulse=context.createBuffer(2,context.sampleRate*5,context.sampleRate);
  for(let ch=0;ch<2;ch++){const samples=impulse.getChannelData(ch);for(let i=0;i<samples.length;i++)samples[i]=(Math.random()*2-1)*Math.pow(1-i/samples.length,3)*.35;}
  reverb.buffer=impulse;wet=context.createGain();wet.gain.value=.14;musicGain.connect(reverb).connect(wet).connect(master);
  rainGain=context.createGain();rainGain.gain.value=0;rainGain.connect(master);
  context.createMediaElementSource(theme).connect(musicGain);
 }
 async function loadRain(){
  if(rainReady||rainLoading)return;rainLoading=true;
  try{
   const response=await fetch('./assets/audio/woodland-rain.mp3',{signal:AbortSignal.timeout(15000)});
   if(!response.ok)throw new Error('Rain unavailable');
   const buffer=await deadline(context.decodeAudioData(await response.arrayBuffer()),15000);
   const source=context.createBufferSource();source.buffer=seamless(buffer,1);source.loop=true;source.connect(rainGain);source.start();rainReady=true;
  }catch{ /* Optional rain must never prevent music from playing. */ }
  finally{rainLoading=false;}
 }
 function retry(){started=false;theme.pause();if(master)master.gain.value=0;button.textContent='♫ Tap to retry sound';button.dataset.playing='false';button.setAttribute('aria-label','Retry ambient sound');button.setAttribute('aria-pressed','false');}
 async function start(){
  if(loading)return;loading=true;button.textContent='♫ Loading…';
  try{
   setup();
   // Both calls happen in the tap/click handler, before any network or decode await.
   const resumed=context.resume(),played=theme.play();
   await deadline(Promise.all([resumed,played]),12000);
   started=true;muted=false;mix();void loadRain();
  }catch{retry();}
  finally{loading=false;}
 }
 button.onclick=()=>{
  if(!started||muted||context.state!=='running'){void start();return;}
  muted=true;mix();
 };
 // A completed tap is supported by iOS; pointerdown alone may not unlock media.
 document.querySelector('canvas').addEventListener('click',()=>{if(!started&&!loading)void start();});
 document.addEventListener('visibilitychange',()=>{
  if(!started)return;
  if(document.hidden){context.suspend().catch(()=>{});}
  else if(!muted){deadline(context.resume(),3000).then(()=>{mix();}).catch(retry);}
 });
 return {setHoverRain(amount){const next=Math.max(0,Math.min(1,amount));if(Math.abs(next-hoverRain)<.005)return;hoverRain=next;if(started)rainGain.gain.setTargetAtTime(mode==='focus'?.65:mode==='desk'?hoverRain*.5:0,context.currentTime,.65);},setMode(next){if(next===mode)return;mode=next;mix();}};
}
