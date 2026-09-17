import * as THREE from 'three';
export function createGlobeStage(scene,globe,{hemi,key,fill,lamp,glassMaterial,bloom,rainUniforms}){
 const strength={value:0},registered=new WeakSet();
 const warm=new THREE.SpotLight('#ffe1b0',0,14,.50,.8,2);warm.position.set(-2.4,6.2,3.4);warm.target.position.set(0,1.55,0);scene.add(warm,warm.target);
 // The retired warm shell is removed entirely: zero alpha still executes
 // its shader and can contaminate HDR bloom with non-finite values.
 function inside(o){while(o){if(o===globe)return true;o=o.parent;}return false;}
 function register(){scene.traverse(o=>{if(!o.isMesh||inside(o)||registered.has(o))return;registered.add(o);const adapt=original=>{if(original.isShaderMaterial)return original;const m=original.clone(),previous=original.onBeforeCompile;if(original.defines)m.defines={...original.defines};m.onBeforeCompile=(shader,renderer)=>{previous.call(m,shader,renderer);shader.uniforms.uNear=strength;
 shader.uniforms.uRainTime=rainUniforms.uTime;shader.uniforms.uRainAmount=rainUniforms.uAmount;
 shader.vertexShader='varying vec3 vRainWorld;\n'+shader.vertexShader;
 shader.vertexShader=shader.vertexShader.replace('#include <project_vertex>','#include <project_vertex>\nvRainWorld = (modelMatrix * vec4(transformed, 1.)).xyz;');
 shader.fragmentShader=`varying vec3 vRainWorld;
 uniform float uRainTime;uniform float uRainAmount;
 float rainShade(vec3 w){
  // Project slender window streaks onto the actual receiving surfaces.
  vec2 p=vec2(w.x-w.y*.28,w.z+w.y*.5);
  p.x=(p.x+p.y*.7)*2.4;
  float lane=floor(p.x);
  float seed=fract(sin(lane*127.1)*43758.5453);
  float widthAA=max(fwidth(p.x),.003);
  float line=1.-smoothstep(.007,.007+widthAA,abs(fract(p.x)-.5));
  float phase=fract(p.y*.65+uRainTime*.42+seed*13.);
  float trail=smoothstep(.06,.15,phase)*(1.-smoothstep(.22,.48,phase));
  float sparse=step(.45,seed);
  float tabletop=1.-smoothstep(3.5,5.,w.y);
  return line*trail*sparse*tabletop*uRainAmount*.32;
 }
 `+shader.fragmentShader;
shader.fragmentShader='uniform float uNear;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>','outgoingLight *= mix(1., .30, uNear) * (1. - rainShade(vRainWorld));\n#include <opaque_fragment>');};m.customProgramCacheKey=()=>original.customProgramCacheKey()+'-near-dim-rain-v2';return m;};o.material=Array.isArray(o.material)?o.material.map(adapt):adapt(o.material);});}
 register();return {register,update(amount,glow=0){
  const s=THREE.MathUtils.smoothstep(amount,0,1);strength.value=s;
  hemi.color.set('#e5dccb').lerp(new THREE.Color('#c4d7e4'),s);fill.color.set('#e6dfcf').lerp(new THREE.Color('#cbdce8'),s);key.color.set('#ffe1b4').lerp(new THREE.Color('#d1e1ef'),s);
  hemi.intensity=THREE.MathUtils.lerp(.35,.65,s);fill.intensity=THREE.MathUtils.lerp(.10,.38,s);key.intensity=THREE.MathUtils.lerp(95,65,s);lamp.intensity=0;
  scene.environmentIntensity=THREE.MathUtils.lerp(.13,.07,s);glassMaterial.envMapIntensity=THREE.MathUtils.lerp(.42,.10,s);glassMaterial.specularIntensity=.65;glassMaterial.clearcoat=.65;
  glassMaterial.emissive.set('#ffad63');glassMaterial.emissiveIntensity=glow*.065;
  warm.intensity=5*s;bloom.strength=THREE.MathUtils.lerp(.19,.33,s)+glow*.08;document.body.classList.remove('stage-active');return s;
 }};
}
