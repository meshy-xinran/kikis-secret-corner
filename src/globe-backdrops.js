import * as THREE from 'three';
export function createBackdrops(scene){
 const forest=new THREE.Group();scene.add(forest);
 const mat=c=>new THREE.MeshStandardMaterial({color:c,roughness:.85});
 function box(g,w,h,d,x,y,z,color){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat(color));m.position.set(x,y,z);g.add(m);return m;}
 // Deep reveal and a single large forest-facing window.
 box(forest,17,16,.3,-19.5,7,-5.9,'#5e5854');box(forest,12,16,.3,17,7,-5.9,'#5e5854');
 box(forest,40,5,.3,0,-1.9,-5.9,'#5e5854');box(forest,40,6,.3,0,19,-5.9,'#5e5854');
 for(const x of [-11,11])box(forest,.16,15.45,.5,x,8.275,-5.6,'#463f36');
 for(const y of [.55,16])box(forest,22.2,.16,.65,0,y,-5.5,'#726859');
 box(forest,.12,15.45,.3,0,8.275,-5.45,'#927252');box(forest,22,.12,.3,0,8.45,-5.45,'#927252');
 const forestTexture=new THREE.TextureLoader().load('./assets/sky/woodland-soft-v2.webp');forestTexture.colorSpace=THREE.SRGBColorSpace;
 const forestMaterial=new THREE.MeshBasicMaterial({map:forestTexture,color:new THREE.Color().setScalar(.86)});
 const overcast={value:0};
 forestMaterial.onBeforeCompile=shader=>{shader.uniforms.uOvercast=overcast;shader.fragmentShader='uniform float uOvercast;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>',`float gray=dot(outgoingLight,vec3(.2126,.7152,.0722));outgoingLight=mix(outgoingLight,mix(outgoingLight,vec3(gray)*vec3(.91,.98,1.03),.48)*.58,uOvercast);\n#include <opaque_fragment>`);};
 const forestView=new THREE.Mesh(new THREE.PlaneGeometry(22,15.45),forestMaterial);forestView.position.set(0,8.275,-6.1);forest.add(forestView);
 // Airy voile: fixed at the rail, with movement increasing toward the hem.
 const curtainTime={value:0},panels=[],gusts=[],hoverRay=new THREE.Raycaster();
 let previousTime=null,lastImpulse=-Infinity,lastPanel=null;
 function curtains(parent,left,right,top,bottom){
  const rail=new THREE.Mesh(new THREE.CylinderGeometry(.035,.035,right-left+.6,16),mat('#918575'));rail.rotation.z=Math.PI/2;rail.position.set((left+right)/2,top+.10,-5.02);parent.add(rail);
  for(const [side,edge] of [[1,left],[-1,right]]){
   const width=5.8,height=top-bottom,geometry=new THREE.PlaneGeometry(width,height,120,64),position=geometry.attributes.position;
   for(let i=0;i<position.count;i++){const u=geometry.attributes.uv.getX(i),v=geometry.attributes.uv.getY(i);position.setZ(i,Math.sin(u*Math.PI*24)*(.20+.06*(1-v)));position.setY(i,position.getY(i)+Math.cos(u*Math.PI*24)*.025*(1-v));}geometry.computeVertexNormals();
   const fabric=new THREE.MeshStandardMaterial({color:'#f4ecda',roughness:1,transparent:true,opacity:.62,side:THREE.DoubleSide,depthWrite:false,emissive:'#d8c9ab',emissiveIntensity:.10});
   const gust={value:0},motion={gust,velocity:0};gusts.push(motion);
   fabric.onBeforeCompile=shader=>{shader.uniforms.uCurtainGust=gust;shader.uniforms.uCurtainTime=curtainTime;shader.vertexShader='uniform float uCurtainGust;\nuniform float uCurtainTime;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
    float hem=pow(1.-uv.y,1.35);
    float breeze=.72+.28*sin(uCurtainTime*.31);
    transformed.x+=hem*breeze*(sin(uCurtainTime*.65+uv.y*2.8+${side.toFixed(1)})*.32+sin(uCurtainTime*.39+uv.x*4.)*.10);
    transformed.z+=hem*(.22+sin(uCurtainTime*.57+uv.y*3.5+uv.x*2.+${side.toFixed(1)})*.46)*breeze;
    transformed.y+=hem*(.035+.035*sin(uCurtainTime*.7+uv.x*3.));
    float lift=pow(1.-uv.y,1.05);
    transformed.x+=lift*uCurtainGust*${side.toFixed(1)}*.48;
    transformed.z+=lift*uCurtainGust*(.8+.22*sin(uv.y*4.+uv.x*3.-uCurtainTime*1.4));
    transformed.y+=lift*abs(uCurtainGust)*.055;`);
    shader.fragmentShader=shader.fragmentShader.replace('#include <alphamap_fragment>',`#include <alphamap_fragment>
    float fold=.5+.5*cos(vUv.x*75.3982);
    diffuseColor.rgb*=mix(.70,1.10,fold);diffuseColor.a*=mix(.74,1.12,fold);
    float border=1.-smoothstep(.015,.035,vUv.y);diffuseColor.a=mix(diffuseColor.a,.76,border);`);
   };
   // Enable UVs in the standard shader for hem opacity.
   fabric.defines={USE_UV:''};
   const panel=new THREE.Mesh(geometry,fabric);panel.position.set(edge+side*2.1,(top+bottom)/2,-4.98);parent.add(panel);panels.push(panel);
   for(let j=0;j<9;j++){const ring=new THREE.Mesh(new THREE.TorusGeometry(.052,.009,6,12),mat('#ada292'));ring.position.set(edge+side*2.1-width/2+j*width/8,top+.04,-5.02);parent.add(ring);}
  }
 }
 curtains(forest,-10.1,10.1,16.07,.66);
 scene.background.set('#9ab5c0');
 return {
  setOvercast(value){overcast.value=value;},
  hover(pointer,camera){
   forest.updateWorldMatrix(true,true);camera.updateMatrixWorld();hoverRay.setFromCamera(pointer,camera);
   const hit=hoverRay.intersectObjects(panels,false)[0],panel=hit?.object;
   const now=performance.now()/1000;
   if(panel&&(panel!==lastPanel||now-lastImpulse>.45)){
    const motion=gusts[panels.indexOf(panel)];motion.velocity=Math.min(1.7,motion.velocity+1.1);lastImpulse=now;
   }
   lastPanel=panel;
  },
  clearHover(){lastPanel=null;},
  update(time,reduced){
   const dt=previousTime===null?0:Math.min(.05,Math.max(0,time-previousTime));previousTime=time;
   curtainTime.value=reduced?0:time;
   for(const motion of gusts){if(reduced){motion.gust.value=0;motion.velocity=0;continue;}
    motion.velocity+=(-3.8*motion.gust.value-1.15*motion.velocity)*dt;
    motion.gust.value+=motion.velocity*dt;
   }
  }
 };

}
