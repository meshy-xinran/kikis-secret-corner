const Bo="attached",iu="detached";const Tt="srgb",Rt="srgb-linear",Bs="linear",dt="srgb";const ko="300 es";class lr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zo=1234567;const Rr=Math.PI/180,Ji=180/Math.PI;function bn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[r&255]+qt[r>>8&255]+qt[r>>16&255]+qt[r>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function it(r,e,t){return Math.max(e,Math.min(t,r))}function ao(r,e){return(r%e+e)%e}function ru(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function su(r,e,t){return r!==e?(t-r)/(e-r):0}function Cr(r,e,t){return(1-t)*r+t*e}function au(r,e,t,n){return Cr(r,e,1-Math.exp(-t*n))}function ou(r,e=1){return e-Math.abs(ao(r,e*2)-e)}function lu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function cu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function uu(r,e){return r+Math.floor(Math.random()*(e-r+1))}function hu(r,e){return r+Math.random()*(e-r)}function du(r){return r*(.5-Math.random())}function fu(r){r!==void 0&&(zo=r);let e=zo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pu(r){return r*Rr}function mu(r){return r*Ji}function gu(r){return(r&r-1)===0&&r!==0}function _u(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function vu(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function xu(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),v=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*v,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*v,o*c);break;case"ZYZ":r.set(l*v,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function En(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ft(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ut={DEG2RAD:Rr,RAD2DEG:Ji,generateUUID:bn,clamp:it,euclideanModulo:ao,mapLinear:ru,inverseLerp:su,lerp:Cr,damp:au,pingpong:ou,smoothstep:lu,smootherstep:cu,randInt:uu,randFloat:hu,randFloatSpread:du,seededRandom:fu,degToRad:pu,radToDeg:mu,isPowerOfTwo:gu,ceilPowerOfTwo:_u,floorPowerOfTwo:vu,setQuaternionFromProperEuler:xu,normalize:ft,denormalize:En};class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],f=s[a+1],v=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=v,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==v){let g=1-o;const m=l*d+c*f+h*v+u*x,w=m>=0?1:-1,T=1-m*m;if(T>Number.EPSILON){const D=Math.sqrt(T),A=Math.atan2(D,m*w);g=Math.sin(g*A)/D,o=Math.sin(o*A)/D}const b=o*w;if(l=l*g+d*b,c=c*g+f*b,h=h*g+v*b,u=u*g+x*b,g===1-o){const D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],v=s[a+3];return e[t]=o*v+h*u+l*f-c*d,e[t+1]=l*v+h*d+c*u-o*f,e[t+2]=c*v+h*f+o*d-l*u,e[t+3]=h*v-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),v=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*v,this._y=c*f*u-d*h*v,this._z=c*h*v+d*f*u,this._w=c*h*u-d*f*v;break;case"YXZ":this._x=d*h*u+c*f*v,this._y=c*f*u-d*h*v,this._z=c*h*v-d*f*u,this._w=c*h*u+d*f*v;break;case"ZXY":this._x=d*h*u-c*f*v,this._y=c*f*u+d*h*v,this._z=c*h*v+d*f*u,this._w=c*h*u-d*f*v;break;case"ZYX":this._x=d*h*u-c*f*v,this._y=c*f*u+d*h*v,this._z=c*h*v-d*f*u,this._w=c*h*u+d*f*v;break;case"YZX":this._x=d*h*u+c*f*v,this._y=c*f*u+d*h*v,this._z=c*h*v-d*f*u,this._w=c*h*u-d*f*v;break;case"XZY":this._x=d*h*u-c*f*v,this._y=c*f*u-d*h*v,this._z=c*h*v+d*f*u,this._w=c*h*u+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Go.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Go.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ra.copy(this).projectOnVector(e),this.sub(ra)}reflect(e){return this.sub(ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ra=new k,Go=new oi;class et{constructor(e,t,n,i,s,a,o,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],v=n[8],x=i[0],g=i[3],m=i[6],w=i[1],T=i[4],b=i[7],D=i[2],A=i[5],C=i[8];return s[0]=a*x+o*w+l*D,s[3]=a*g+o*T+l*A,s[6]=a*m+o*b+l*C,s[1]=c*x+h*w+u*D,s[4]=c*g+h*T+u*A,s[7]=c*m+h*b+u*C,s[2]=d*x+f*w+v*D,s[5]=d*g+f*T+v*A,s[8]=d*m+f*b+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,v=t*u+n*d+i*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=d*x,e[4]=(h*t-i*l)*x,e[5]=(i*s-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(sa.makeScale(e,t)),this}rotate(e){return this.premultiply(sa.makeRotation(-e)),this}translate(e,t){return this.premultiply(sa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sa=new et;function hc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ur(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function yu(){const r=Ur("canvas");return r.style.display="block",r}const Ho={};function Nr(r){r in Ho||(Ho[r]=!0,console.warn(r))}function Mu(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Vo=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wo=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Su(){const r={enabled:!0,workingColorSpace:Rt,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===dt&&(i.r=jn(i.r),i.g=jn(i.g),i.b=jn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===""?Bs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Nr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Nr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Rt]:{primaries:e,whitePoint:n,transfer:Bs,toXYZ:Vo,fromXYZ:Wo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:Vo,fromXYZ:Wo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),r}const at=Su();function jn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ki(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ai;class Tu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ai===void 0&&(Ai=Ur("canvas")),Ai.width=e.width,Ai.height=e.height;const i=Ai.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ai}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=jn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Eu=0;class oo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=bn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(aa(i[a].image)):s.push(aa(i[a]))}else s=aa(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function aa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Tu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bu=0;const oa=new k;class Bt extends lr{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=Bt.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=bn(),this.name="",this.source=new oo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(oa).x}get height(){return this.source.getSize(oa).y}get depth(){return this.source.getSize(oa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=300;Bt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,i=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],v=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(v+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,b=(f+1)/2,D=(m+1)/2,A=(h+d)/4,C=(u+x)/4,N=(v+g)/4;return T>b&&T>D?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=A/n,s=C/n):b>D?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=A/i,s=N/i):D<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(D),n=C/s,i=N/s),this.set(n,i,s,t),this}let w=Math.sqrt((g-v)*(g-v)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(g-v)/w,this.y=(u-x)/w,this.z=(d-h)/w,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wu extends lr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Bt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new oo(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vt extends wu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dc extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Au extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class An{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_n):_n.fromBufferAttribute(s,a),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ts.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ts.copy(n.boundingBox)),ts.applyMatrix4(e.matrixWorld),this.union(ts)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),ns.subVectors(this.max,mr),Ri.subVectors(e.a,mr),Ci.subVectors(e.b,mr),Pi.subVectors(e.c,mr),$n.subVectors(Ci,Ri),Jn.subVectors(Pi,Ci),hi.subVectors(Ri,Pi);let t=[0,-$n.z,$n.y,0,-Jn.z,Jn.y,0,-hi.z,hi.y,$n.z,0,-$n.x,Jn.z,0,-Jn.x,hi.z,0,-hi.x,-$n.y,$n.x,0,-Jn.y,Jn.x,0,-hi.y,hi.x,0];return!la(t,Ri,Ci,Pi,ns)||(t=[1,0,0,0,1,0,0,0,1],!la(t,Ri,Ci,Pi,ns))?!1:(is.crossVectors($n,Jn),t=[is.x,is.y,is.z],la(t,Ri,Ci,Pi,ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Gn=[new k,new k,new k,new k,new k,new k,new k,new k],_n=new k,ts=new An,Ri=new k,Ci=new k,Pi=new k,$n=new k,Jn=new k,hi=new k,mr=new k,ns=new k,is=new k,di=new k;function la(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){di.fromArray(r,s);const o=i.x*Math.abs(di.x)+i.y*Math.abs(di.y)+i.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),h=n.dot(di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ru=new An,gr=new k,ca=new k;class Cn{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ru.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gr.subVectors(e,this.center);const t=gr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(gr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gr.copy(e.center).add(ca)),this.expandByPoint(gr.copy(e.center).sub(ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Hn=new k,ua=new k,rs=new k,Qn=new k,ha=new k,ss=new k,da=new k;class Vr{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ua.copy(e).add(t).multiplyScalar(.5),rs.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(ua);const s=e.distanceTo(t)*.5,a=-this.direction.dot(rs),o=Qn.dot(this.direction),l=-Qn.dot(rs),c=Qn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,v;if(h>0)if(u=a*l-o,d=a*o-l,v=s*h,u>=0)if(d>=-v)if(d<=v){const x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-v?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=v?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ua).addScaledVector(rs,d),f}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),i=Hn.dot(Hn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,i,s){ha.subVectors(t,e),ss.subVectors(n,e),da.crossVectors(ha,ss);let a=this.direction.dot(da),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qn.subVectors(this.origin,e);const l=o*this.direction.dot(ss.crossVectors(Qn,ss));if(l<0)return null;const c=o*this.direction.dot(ha.cross(Qn));if(c<0||l+c>a)return null;const h=-o*Qn.dot(da);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,n,i,s,a,o,l,c,h,u,d,f,v,x,g){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,f,v,x,g)}set(e,t,n,i,s,a,o,l,c,h,u,d,f,v,x,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=v,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Di.setFromMatrixColumn(e,0).length(),s=1/Di.setFromMatrixColumn(e,1).length(),a=1/Di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,v=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+v*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=v+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,v=c*h,x=c*u;t[0]=d+x*o,t[4]=v*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-v,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,v=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=v+f*o,t[1]=f+v*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,v=o*h,x=o*u;t[0]=l*h,t[4]=v*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,v=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=v*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+v,t[10]=d-x*u}else if(e.order==="XZY"){const d=a*l,f=a*c,v=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-v,t[2]=v*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cu,e,Pu)}lookAt(e,t,n){const i=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ei.crossVectors(n,rn),ei.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ei.crossVectors(n,rn)),ei.normalize(),as.crossVectors(rn,ei),i[0]=ei.x,i[4]=as.x,i[8]=rn.x,i[1]=ei.y,i[5]=as.y,i[9]=rn.y,i[2]=ei.z,i[6]=as.z,i[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],v=n[2],x=n[6],g=n[10],m=n[14],w=n[3],T=n[7],b=n[11],D=n[15],A=i[0],C=i[4],N=i[8],M=i[12],S=i[1],I=i[5],O=i[9],W=i[13],H=i[2],Y=i[6],G=i[10],re=i[14],K=i[3],le=i[7],xe=i[11],Te=i[15];return s[0]=a*A+o*S+l*H+c*K,s[4]=a*C+o*I+l*Y+c*le,s[8]=a*N+o*O+l*G+c*xe,s[12]=a*M+o*W+l*re+c*Te,s[1]=h*A+u*S+d*H+f*K,s[5]=h*C+u*I+d*Y+f*le,s[9]=h*N+u*O+d*G+f*xe,s[13]=h*M+u*W+d*re+f*Te,s[2]=v*A+x*S+g*H+m*K,s[6]=v*C+x*I+g*Y+m*le,s[10]=v*N+x*O+g*G+m*xe,s[14]=v*M+x*W+g*re+m*Te,s[3]=w*A+T*S+b*H+D*K,s[7]=w*C+T*I+b*Y+D*le,s[11]=w*N+T*O+b*G+D*xe,s[15]=w*M+T*W+b*re+D*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],v=e[3],x=e[7],g=e[11],m=e[15];return v*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*f-n*l*f)+x*(+t*l*f-t*c*d+s*a*d-i*a*f+i*c*h-s*l*h)+g*(+t*c*u-t*o*f-s*a*u+n*a*f+s*o*h-n*c*h)+m*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],v=e[12],x=e[13],g=e[14],m=e[15],w=u*g*c-x*d*c+x*l*f-o*g*f-u*l*m+o*d*m,T=v*d*c-h*g*c-v*l*f+a*g*f+h*l*m-a*d*m,b=h*x*c-v*u*c+v*o*f-a*x*f-h*o*m+a*u*m,D=v*u*l-h*x*l-v*o*d+a*x*d+h*o*g-a*u*g,A=t*w+n*T+i*b+s*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=w*C,e[1]=(x*d*s-u*g*s-x*i*f+n*g*f+u*i*m-n*d*m)*C,e[2]=(o*g*s-x*l*s+x*i*c-n*g*c-o*i*m+n*l*m)*C,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*f-n*l*f)*C,e[4]=T*C,e[5]=(h*g*s-v*d*s+v*i*f-t*g*f-h*i*m+t*d*m)*C,e[6]=(v*l*s-a*g*s-v*i*c+t*g*c+a*i*m-t*l*m)*C,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*f+t*l*f)*C,e[8]=b*C,e[9]=(v*u*s-h*x*s-v*n*f+t*x*f+h*n*m-t*u*m)*C,e[10]=(a*x*s-v*o*s+v*n*c-t*x*c-a*n*m+t*o*m)*C,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*f-t*o*f)*C,e[12]=D*C,e[13]=(h*x*i-v*u*i+v*n*d-t*x*d-h*n*g+t*u*g)*C,e[14]=(v*o*i-a*x*i-v*n*l+t*x*l+a*n*g-t*o*g)*C,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,v=s*u,x=a*h,g=a*u,m=o*u,w=l*c,T=l*h,b=l*u,D=n.x,A=n.y,C=n.z;return i[0]=(1-(x+m))*D,i[1]=(f+b)*D,i[2]=(v-T)*D,i[3]=0,i[4]=(f-b)*A,i[5]=(1-(d+m))*A,i[6]=(g+w)*A,i[7]=0,i[8]=(v+T)*C,i[9]=(g-w)*C,i[10]=(1-(d+x))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Di.set(i[0],i[1],i[2]).length();const a=Di.set(i[4],i[5],i[6]).length(),o=Di.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],vn.copy(this);const c=1/s,h=1/a,u=1/o;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,t.setFromRotationMatrix(vn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let v,x;if(l)v=s/(a-s),x=a*s/(a-s);else if(o===2e3)v=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===2001)v=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let v,x;if(l)v=1/(a-s),x=a/(a-s);else if(o===2e3)v=-2/(a-s),x=-(a+s)/(a-s);else if(o===2001)v=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Di=new k,vn=new $e,Cu=new k(0,0,0),Pu=new k(1,1,1),ei=new k,as=new k,rn=new k,Xo=new $e,qo=new oi;class Bn{constructor(e=0,t=0,n=0,i=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qo.setFromEuler(this),this.setFromQuaternion(qo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class lo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Du=0;const Yo=new k,Ii=new oi,Vn=new $e,os=new k,_r=new k,Iu=new k,Lu=new oi,Ko=new k(1,0,0),jo=new k(0,1,0),Zo=new k(0,0,1),$o={type:"added"},Uu={type:"removed"},Li={type:"childadded",child:null},fa={type:"childremoved",child:null};class Mt extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new k,t=new Bn,n=new oi,i=new k(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $e},normalMatrix:{value:new et}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(Ko,e)}rotateY(e){return this.rotateOnAxis(jo,e)}rotateZ(e){return this.rotateOnAxis(Zo,e)}translateOnAxis(e,t){return Yo.copy(e).applyQuaternion(this.quaternion),this.position.add(Yo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ko,e)}translateY(e){return this.translateOnAxis(jo,e)}translateZ(e){return this.translateOnAxis(Zo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?os.copy(e):os.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(_r,os,this.up):Vn.lookAt(os,_r,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),Ii.setFromRotationMatrix(Vn),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($o),Li.child=e,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Uu),fa.child=e,this.dispatchEvent(fa),fa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($o),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,e,Iu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,Lu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Mt.DEFAULT_UP=new k(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new k,Wn=new k,pa=new k,Xn=new k,Ui=new k,Ni=new k,Jo=new k,ma=new k,ga=new k,_a=new k,va=new ht,xa=new ht,ya=new ht;class dn{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xn.subVectors(e,t),i.cross(xn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){xn.subVectors(i,t),Wn.subVectors(n,t),pa.subVectors(e,t);const a=xn.dot(xn),o=xn.dot(Wn),l=xn.dot(pa),c=Wn.dot(Wn),h=Wn.dot(pa),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,v=(a*h-o*l)*d;return s.set(1-f-v,v,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return va.setScalar(0),xa.setScalar(0),ya.setScalar(0),va.fromBufferAttribute(e,t),xa.fromBufferAttribute(e,n),ya.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(va,s.x),a.addScaledVector(xa,s.y),a.addScaledVector(ya,s.z),a}static isFrontFacing(e,t,n,i){return xn.subVectors(n,t),Wn.subVectors(e,t),xn.cross(Wn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),xn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ui.subVectors(i,n),Ni.subVectors(s,n),ma.subVectors(e,n);const l=Ui.dot(ma),c=Ni.dot(ma);if(l<=0&&c<=0)return t.copy(n);ga.subVectors(e,i);const h=Ui.dot(ga),u=Ni.dot(ga);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ui,a);_a.subVectors(e,s);const f=Ui.dot(_a),v=Ni.dot(_a);if(v>=0&&f<=v)return t.copy(s);const x=f*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Ni,o);const g=h*v-f*u;if(g<=0&&u-h>=0&&f-v>=0)return Jo.subVectors(s,i),o=(u-h)/(u-h+(f-v)),t.copy(i).addScaledVector(Jo,o);const m=1/(g+x+d);return a=x*m,o=d*m,t.copy(n).addScaledVector(Ui,a).addScaledVector(Ni,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},ls={h:0,s:0,l:0};function Ma(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=at.workingColorSpace){if(e=ao(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ma(a,s,e+1/3),this.g=Ma(a,s,e),this.b=Ma(a,s,e-1/3)}return at.colorSpaceToWorking(this,i),this}setStyle(e,t=Tt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const n=fc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return at.workingToColorSpace(Yt.copy(this),e),Math.round(it(Yt.r*255,0,255))*65536+Math.round(it(Yt.g*255,0,255))*256+Math.round(it(Yt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(Yt.copy(this),t);const n=Yt.r,i=Yt.g,s=Yt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Tt){at.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,i=Yt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(ls);const n=Cr(ti.h,ls.h,t),i=Cr(ti.s,ls.s,t),s=Cr(ti.l,ls.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Pe;Pe.NAMES=fc;let Nu=0;class wn extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=bn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pn extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yn=Fu();function Fu(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function Ou(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=it(r,-65504,65504),Yn.floatView[0]=r;const e=Yn.uint32View[0],t=e>>23&511;return Yn.baseTable[t]+((e&8388607)>>Yn.shiftTable[t])}function Bu(r){const e=r>>10;return Yn.uint32View[0]=Yn.mantissaTable[Yn.offsetTable[e]+(r&1023)]+Yn.exponentTable[e],Yn.floatView[0]}class Qo{static toHalfFloat(e){return Ou(e)}static fromHalfFloat(e){return Bu(e)}}const Ot=new k,cs=new be;let ku=0;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ku++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cs.fromBufferAttribute(this,t),cs.applyMatrix3(e),this.setXY(t,cs.x,cs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class pc extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mc extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zu=0;const un=new $e,Sa=new Mt,Fi=new k,sn=new An,vr=new An,Ht=new k;class Ut extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hc(e)?mc:pc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return Sa.lookAt(e),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];vr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(sn.min,vr.min),sn.expandByPoint(Ht),Ht.addVectors(sn.max,vr.max),sn.expandByPoint(Ht)):(sn.expandByPoint(vr.min),sn.expandByPoint(vr.max))}sn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Ht.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ht));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ht.fromBufferAttribute(o,c),l&&(Fi.fromBufferAttribute(e,c),Ht.add(Fi)),i=Math.max(i,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new k,l[N]=new k;const c=new k,h=new k,u=new k,d=new be,f=new be,v=new be,x=new k,g=new k;function m(N,M,S){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),d.fromBufferAttribute(s,N),f.fromBufferAttribute(s,M),v.fromBufferAttribute(s,S),h.sub(c),u.sub(c),f.sub(d),v.sub(d);const I=1/(f.x*v.y-v.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(u,-f.y).multiplyScalar(I),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-v.x).multiplyScalar(I),o[N].add(x),o[M].add(x),o[S].add(x),l[N].add(g),l[M].add(g),l[S].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,M=w.length;N<M;++N){const S=w[N],I=S.start,O=S.count;for(let W=I,H=I+O;W<H;W+=3)m(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const T=new k,b=new k,D=new k,A=new k;function C(N){D.fromBufferAttribute(i,N),A.copy(D);const M=o[N];T.copy(M),T.sub(D.multiplyScalar(D.dot(M))).normalize(),b.crossVectors(A,M);const I=b.dot(l[N])<0?-1:1;a.setXYZW(N,T.x,T.y,T.z,I)}for(let N=0,M=w.length;N<M;++N){const S=w[N],I=S.start,O=S.count;for(let W=I,H=I+O;W<H;W+=3)C(e.getX(W+0)),C(e.getX(W+1)),C(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new k,s=new k,a=new k,o=new k,l=new k,c=new k,h=new k,u=new k;if(e)for(let d=0,f=e.count;d<f;d+=3){const v=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,v=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)d[v++]=c[f++]}return new kt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const el=new $e,fi=new Vr,us=new Cn,tl=new k,hs=new k,ds=new k,fs=new k,Ta=new k,ps=new k,nl=new k,ms=new k;class yt extends Mt{constructor(e=new Ut,t=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){ps.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Ta.fromBufferAttribute(u,e),a?ps.addScaledVector(Ta,h):ps.addScaledVector(Ta.sub(t),h))}t.add(ps)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(s),fi.copy(e.ray).recast(e.near),!(us.containsPoint(fi.origin)===!1&&(fi.intersectSphere(us,tl)===null||fi.origin.distanceToSquared(tl)>(e.far-e.near)**2))&&(el.copy(s).invert(),fi.copy(e.ray).applyMatrix4(el),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=d.length;v<x;v++){const g=d[v],m=a[g.materialIndex],w=Math.max(g.start,f.start),T=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let b=w,D=T;b<D;b+=3){const A=o.getX(b),C=o.getX(b+1),N=o.getX(b+2);i=gs(this,m,e,n,c,h,u,A,C,N),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const v=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=v,m=x;g<m;g+=3){const w=o.getX(g),T=o.getX(g+1),b=o.getX(g+2);i=gs(this,a,e,n,c,h,u,w,T,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=d.length;v<x;v++){const g=d[v],m=a[g.materialIndex],w=Math.max(g.start,f.start),T=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let b=w,D=T;b<D;b+=3){const A=b,C=b+1,N=b+2;i=gs(this,m,e,n,c,h,u,A,C,N),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const v=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=v,m=x;g<m;g+=3){const w=g,T=g+1,b=g+2;i=gs(this,a,e,n,c,h,u,w,T,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Gu(r,e,t,n,i,s,a,o){let l;if(e.side===1?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===0,o),l===null)return null;ms.copy(o),ms.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ms);return c<t.near||c>t.far?null:{distance:c,point:ms.clone(),object:r}}function gs(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,hs),r.getVertexPosition(l,ds),r.getVertexPosition(c,fs);const h=Gu(r,e,t,n,hs,ds,fs,nl);if(h){const u=new k;dn.getBarycoord(nl,hs,ds,fs,u),i&&(h.uv=dn.getInterpolatedAttribute(i,o,l,c,u,new be)),s&&(h.uv1=dn.getInterpolatedAttribute(s,o,l,c,u,new be)),a&&(h.normal=dn.getInterpolatedAttribute(a,o,l,c,u,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new k,materialIndex:0};dn.getNormal(hs,ds,fs,d.normal),h.face=d,h.barycoord=u}return h}class At extends Ut{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,i,a,2),v("x","z","y",1,-1,e,n,-t,i,a,3),v("x","y","z",1,-1,e,t,n,i,s,4),v("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(u,2));function v(x,g,m,w,T,b,D,A,C,N,M){const S=b/C,I=D/N,O=b/2,W=D/2,H=A/2,Y=C+1,G=N+1;let re=0,K=0;const le=new k;for(let xe=0;xe<G;xe++){const Te=xe*I-W;for(let ke=0;ke<Y;ke++){const tt=ke*S-O;le[x]=tt*w,le[g]=Te*T,le[m]=H,c.push(le.x,le.y,le.z),le[x]=0,le[g]=0,le[m]=A>0?1:-1,h.push(le.x,le.y,le.z),u.push(ke/C),u.push(1-xe/N),re+=1}}for(let xe=0;xe<N;xe++)for(let Te=0;Te<C;Te++){const ke=d+Te+Y*xe,tt=d+Te+Y*(xe+1),ue=d+(Te+1)+Y*(xe+1),pe=d+(Te+1)+Y*xe;l.push(ke,tt,pe),l.push(tt,ue,pe),K+=6}o.addGroup(f,K,M),f+=K,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new At(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Zt(r){const e={};for(let t=0;t<r.length;t++){const n=Qi(r[t]);for(const i in n)e[i]=n[i]}return e}function Hu(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function gc(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const er={clone:Qi,merge:Zt};var Vu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dt extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vu,this.fragmentShader=Wu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=Hu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _c extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new k,il=new be,rl=new be;class $t extends _c{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,il,rl),t.subVectors(rl,il)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,Bi=1;class Xu extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $t(Oi,Bi,e,t);i.layers=this.layers,this.add(i);const s=new $t(Oi,Bi,e,t);s.layers=this.layers,this.add(s);const a=new $t(Oi,Bi,e,t);a.layers=this.layers,this.add(a);const o=new $t(Oi,Bi,e,t);o.layers=this.layers,this.add(o);const l=new $t(Oi,Bi,e,t);l.layers=this.layers,this.add(l);const c=new $t(Oi,Bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class vc extends Bt{constructor(e=[],t=301,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qu extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new vc(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new At(5,5,5),s=new Dt({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const a=new yt(i,s),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Xu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class Kt extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yu={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,v=.005;c.inputState.pinching&&d>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yu)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class co{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pe(e),this.density=t}clone(){return new co(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ku extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xc{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new k;class Fr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class yc extends wn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ki;const xr=new k,zi=new k,Gi=new k,Hi=new be,yr=new be,Mc=new $e,_s=new k,Mr=new k,vs=new k,sl=new be,ba=new be,al=new be;class ju extends Mt{constructor(e=new yc){if(super(),this.isSprite=!0,this.type="Sprite",ki===void 0){ki=new Ut;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xc(t,5);ki.setIndex([0,1,2,0,2,3]),ki.setAttribute("position",new Fr(n,3,0,!1)),ki.setAttribute("uv",new Fr(n,2,3,!1))}this.geometry=ki,this.material=e,this.center=new be(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zi.setFromMatrixScale(this.matrixWorld),Mc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zi.multiplyScalar(-Gi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;xs(_s.set(-.5,-.5,0),Gi,a,zi,i,s),xs(Mr.set(.5,-.5,0),Gi,a,zi,i,s),xs(vs.set(.5,.5,0),Gi,a,zi,i,s),sl.set(0,0),ba.set(1,0),al.set(1,1);let o=e.ray.intersectTriangle(_s,Mr,vs,!1,xr);if(o===null&&(xs(Mr.set(-.5,.5,0),Gi,a,zi,i,s),ba.set(0,1),o=e.ray.intersectTriangle(_s,vs,Mr,!1,xr),o===null))return;const l=e.ray.origin.distanceTo(xr);l<e.near||l>e.far||t.push({distance:l,point:xr.clone(),uv:dn.getInterpolation(xr,_s,Mr,vs,sl,ba,al,new be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function xs(r,e,t,n,i,s){Hi.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(yr.x=s*Hi.x-i*Hi.y,yr.y=i*Hi.x+s*Hi.y):yr.copy(Hi),r.copy(e),r.x+=yr.x,r.y+=yr.y,r.applyMatrix4(Mc)}const ol=new k,ll=new ht,cl=new ht,Zu=new k,ul=new $e,ys=new k,wa=new Cn,hl=new $e,Aa=new Vr;class $u extends yt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bo,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new An),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ys),this.boundingBox.expandByPoint(ys)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Cn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ys),this.boundingSphere.expandByPoint(ys)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wa.copy(this.boundingSphere),wa.applyMatrix4(i),e.ray.intersectsSphere(wa)!==!1&&(hl.copy(i).invert(),Aa.copy(e.ray).applyMatrix4(hl),!(this.boundingBox!==null&&Aa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Aa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ht,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Bo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===iu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ll.fromBufferAttribute(i.attributes.skinIndex,e),cl.fromBufferAttribute(i.attributes.skinWeight,e),ol.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=cl.getComponent(s);if(a!==0){const o=ll.getComponent(s);ul.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Zu.copy(ol).applyMatrix4(ul),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Sc extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class uo extends Bt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dl=new $e,Ju=new $e;class ho{constructor(e=[],t=[]){this.uuid=bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Ju;dl.multiplyMatrices(o,t[s]),dl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ho(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new uo(t,e,e,1023,1015);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Sc),this.bones.push(a),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class ks extends kt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vi=new $e,fl=new $e,Ms=[],pl=new An,Qu=new $e,Sr=new yt,Tr=new Cn;class Tc extends yt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ks(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Qu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new An),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),pl.copy(e.boundingBox).applyMatrix4(Vi),this.boundingBox.union(pl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),Tr.copy(e.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(Tr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tr.copy(this.boundingSphere),Tr.applyMatrix4(n),e.ray.intersectsSphere(Tr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Vi),fl.multiplyMatrices(n,Vi),Sr.matrixWorld=fl,Sr.raycast(e,Ms);for(let a=0,o=Ms.length;a<o;a++){const l=Ms[a];l.instanceId=s,l.object=this,t.push(l)}Ms.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ks(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new uo(new Float32Array(i*this.count),i,this.count,1028,1015));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ra=new k,eh=new k,th=new et;class xi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ra.subVectors(n,t).cross(eh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ra),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||th.getNormalMatrix(e),i=this.coplanarPoint(Ra).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new Cn,nh=new be(.5,.5),Ss=new k;class fo{constructor(e=new xi,t=new xi,n=new xi,i=new xi,s=new xi,a=new xi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],v=s[8],x=s[9],g=s[10],m=s[11],w=s[12],T=s[13],b=s[14],D=s[15];if(i[0].setComponents(c-a,f-h,m-v,D-w).normalize(),i[1].setComponents(c+a,f+h,m+v,D+w).normalize(),i[2].setComponents(c+o,f+u,m+x,D+T).normalize(),i[3].setComponents(c-o,f-u,m-x,D-T).normalize(),n)i[4].setComponents(l,d,g,b).normalize(),i[5].setComponents(c-l,f-d,m-g,D-b).normalize();else if(i[4].setComponents(c-l,f-d,m-g,D-b).normalize(),t===2e3)i[5].setComponents(c+l,f+d,m+g,D+b).normalize();else if(t===2001)i[5].setComponents(l,d,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){pi.center.set(0,0,0);const t=nh.distanceTo(e.center);return pi.radius=.7071067811865476+t,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ss.x=i.normal.x>0?e.max.x:e.min.x,Ss.y=i.normal.y>0?e.max.y:e.min.y,Ss.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ec extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zs=new k,Gs=new k,ml=new $e,Er=new Vr,Ts=new Cn,Ca=new k,gl=new k;class po extends Mt{constructor(e=new Ut,t=new Ec){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)zs.fromBufferAttribute(t,i-1),Gs.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=zs.distanceTo(Gs);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(i),Ts.radius+=s,e.ray.intersectsSphere(Ts)===!1)return;ml.copy(i).invert(),Er.copy(e.ray).applyMatrix4(ml);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let x=f,g=v-1;x<g;x+=c){const m=h.getX(x),w=h.getX(x+1),T=Es(this,e,Er,l,m,w,x);T&&t.push(T)}if(this.isLineLoop){const x=h.getX(v-1),g=h.getX(f),m=Es(this,e,Er,l,x,g,v-1);m&&t.push(m)}}else{const f=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let x=f,g=v-1;x<g;x+=c){const m=Es(this,e,Er,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){const x=Es(this,e,Er,l,v-1,f,v-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Es(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(zs.fromBufferAttribute(o,i),Gs.fromBufferAttribute(o,s),t.distanceSqToSegment(zs,Gs,Ca,gl)>n)return;Ca.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ca);if(!(c<e.near||c>e.far))return{distance:c,point:gl.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const _l=new k,vl=new k;class ih extends po{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)_l.fromBufferAttribute(t,i),vl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_l.distanceTo(vl);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rh extends po{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ys extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xl=new $e,$a=new Vr,bs=new Cn,ws=new k;class mo extends Mt{constructor(e=new Ut,t=new Ys){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(i),bs.radius+=s,e.ray.intersectsSphere(bs)===!1)return;xl.copy(i).invert(),$a.copy(e.ray).applyMatrix4(xl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let v=d,x=f;v<x;v++){const g=c.getX(v);ws.fromBufferAttribute(u,g),yl(ws,g,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let v=d,x=f;v<x;v++)ws.fromBufferAttribute(u,v),yl(ws,v,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function yl(r,e,t,n,i,s,a){const o=$a.distanceSqToPoint(r);if(o<t){const l=new k;$a.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Or extends Bt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bc extends Bt{constructor(e,t,n=1014,i,s,a,o=1003,l=1003,c,h=1026,u=1){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new oo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wc extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ei extends Ut{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new k,h=new be;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(o,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Pn extends Ut{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let v=0;const x=[],g=n/2;let m=0;w(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(f,2));function w(){const b=new k,D=new k;let A=0;const C=(t-e)/n;for(let N=0;N<=s;N++){const M=[],S=N/s,I=S*(t-e)+e;for(let O=0;O<=i;O++){const W=O/i,H=W*l+o,Y=Math.sin(H),G=Math.cos(H);D.x=I*Y,D.y=-S*n+g,D.z=I*G,u.push(D.x,D.y,D.z),b.set(Y,C,G).normalize(),d.push(b.x,b.y,b.z),f.push(W,1-S),M.push(v++)}x.push(M)}for(let N=0;N<i;N++)for(let M=0;M<s;M++){const S=x[M][N],I=x[M+1][N],O=x[M+1][N+1],W=x[M][N+1];(e>0||M!==0)&&(h.push(S,I,W),A+=3),(t>0||M!==s-1)&&(h.push(I,O,W),A+=3)}c.addGroup(m,A,0),m+=A}function T(b){const D=v,A=new be,C=new k;let N=0;const M=b===!0?e:t,S=b===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),v++;const I=v;for(let O=0;O<=i;O++){const H=O/i*l+o,Y=Math.cos(H),G=Math.sin(H);C.x=M*G,C.y=g*S,C.z=M*Y,u.push(C.x,C.y,C.z),d.push(0,S,0),A.x=Y*.5+.5,A.y=G*.5*S+.5,f.push(A.x,A.y),v++}for(let O=0;O<i;O++){const W=D+O,H=I+O;b===!0?h.push(H,H+1,W):h.push(H+1,H,W),N+=3}c.addGroup(m,N,b===!0?1:2),m+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class go extends Pn{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new go(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _o extends Ut{constructor(e=[new be(0,-.5),new be(.5,0),new be(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=it(i,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/t,u=new k,d=new be,f=new k,v=new k,x=new k;let g=0,m=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:g=e[w+1].x-e[w].x,m=e[w+1].y-e[w].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[w+1].x-e[w].x,m=e[w+1].y-e[w].y,f.x=m*1,f.y=-g,f.z=m*0,v.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(v)}for(let w=0;w<=t;w++){const T=n+w*h*i,b=Math.sin(T),D=Math.cos(T);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*b,u.y=e[A].y,u.z=e[A].x*D,a.push(u.x,u.y,u.z),d.x=w/t,d.y=A/(e.length-1),o.push(d.x,d.y);const C=l[3*A+0]*b,N=l[3*A+1],M=l[3*A+0]*D;c.push(C,N,M)}}for(let w=0;w<t;w++)for(let T=0;T<e.length-1;T++){const b=T+w*e.length,D=b,A=b+e.length,C=b+e.length+1,N=b+1;s.push(D,A,N),s.push(C,N,A)}this.setIndex(s),this.setAttribute("position",new mt(a,3)),this.setAttribute("uv",new mt(o,2)),this.setAttribute("normal",new mt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.points,e.segments,e.phiStart,e.phiLength)}}class Rn extends Ut{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],v=[],x=[],g=[];for(let m=0;m<h;m++){const w=m*d-a;for(let T=0;T<c;T++){const b=T*u-s;v.push(b,-w,0),x.push(0,0,1),g.push(T/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<o;w++){const T=w+c*m,b=w+c*(m+1),D=w+1+c*(m+1),A=w+1+c*m;f.push(T,b,A),f.push(b,D,A)}this.setIndex(f),this.setAttribute("position",new mt(v,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.width,e.height,e.widthSegments,e.heightSegments)}}class ai extends Ut{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new k,d=new k,f=[],v=[],x=[],g=[];for(let m=0;m<=n;m++){const w=[],T=m/n;let b=0;m===0&&a===0?b=.5/t:m===n&&l===Math.PI&&(b=-.5/t);for(let D=0;D<=t;D++){const A=D/t;u.x=-e*Math.cos(i+A*s)*Math.sin(a+T*o),u.y=e*Math.cos(a+T*o),u.z=e*Math.sin(i+A*s)*Math.sin(a+T*o),v.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(A+b,1-T),w.push(c++)}h.push(w)}for(let m=0;m<n;m++)for(let w=0;w<t;w++){const T=h[m][w+1],b=h[m][w],D=h[m+1][w],A=h[m+1][w+1];(m!==0||a>0)&&f.push(T,b,A),(m!==n-1||l<Math.PI)&&f.push(b,D,A)}this.setIndex(f),this.setAttribute("position",new mt(v,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ji extends Ut{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new k,u=new k,d=new k;for(let f=0;f<=n;f++)for(let v=0;v<=i;v++){const x=v/i*s,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(v/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let v=1;v<=i;v++){const x=(i+1)*f+v-1,g=(i+1)*(f-1)+v-1,m=(i+1)*(f-1)+v,w=(i+1)*f+v;a.push(x,g,w),a.push(g,m,w)}this.setIndex(a),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class sh extends Dt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class an extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mn extends an{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ac extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ah extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function As(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function oh(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function lh(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ml(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function Rc(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Wr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ch extends Wr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:s=e,o=2*t-n;break;case 2402:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case 2401:a=e,l=2*n-t;break;case 2402:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,v=(n-t)/(i-t),x=v*v,g=x*v,m=-d*g+2*d*x-d*v,w=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*v+1,T=(-1-f)*g+(1.5+f)*x+.5*v,b=f*g-f*x;for(let D=0;D!==o;++D)s[D]=m*a[h+D]+w*a[c+D]+T*a[l+D]+b*a[u+D];return s}}class uh extends Wr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class hh extends Wr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Dn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=As(t,this.TimeBufferType),this.values=As(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:As(e.times,Array),values:As(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ch(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&oh(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let v=0;v!==n;++v){const x=t[u+v];if(x!==t[d+v]||x!==t[f+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=2301;class cr extends Dn{constructor(e,t,n){super(e,t,n)}}cr.prototype.ValueTypeName="bool";cr.prototype.ValueBufferType=Array;cr.prototype.DefaultInterpolation=2300;cr.prototype.InterpolantFactoryMethodLinear=void 0;cr.prototype.InterpolantFactoryMethodSmooth=void 0;class Cc extends Dn{constructor(e,t,n,i){super(e,t,n,i)}}Cc.prototype.ValueTypeName="color";class tr extends Dn{constructor(e,t,n,i){super(e,t,n,i)}}tr.prototype.ValueTypeName="number";class dh extends Wr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)oi.slerpFlat(s,0,a,c-o,a,c,l);return s}}class nr extends Dn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new dh(this.times,this.values,this.getValueSize(),e)}}nr.prototype.ValueTypeName="quaternion";nr.prototype.InterpolantFactoryMethodSmooth=void 0;class ur extends Dn{constructor(e,t,n){super(e,t,n)}}ur.prototype.ValueTypeName="string";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=2300;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;class ir extends Dn{constructor(e,t,n,i){super(e,t,n,i)}}ir.prototype.ValueTypeName="vector";class fh{constructor(e="",t=-1,n=[],i=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=bn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(mh(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Dn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=lh(l);l=Ml(l,1,h),c=Ml(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new tr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,v,x){if(f.length!==0){const g=[],m=[];Rc(f,g,m,v),g.length!==0&&x.push(new u(d,g,m))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let v;for(v=0;v<d.length;v++)if(d[v].morphTargets)for(let x=0;x<d[v].morphTargets.length;x++)f[d[v].morphTargets[x]]=-1;for(const x in f){const g=[],m=[];for(let w=0;w!==d[v].morphTargets.length;++w){const T=d[v];g.push(T.time),m.push(T.morphTarget===x?1:0)}i.push(new tr(".morphTargetInfluence["+x+"]",g,m))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(ir,f+".position",d,"pos",i),n(nr,f+".quaternion",d,"rot",i),n(ir,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function ph(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return tr;case"vector":case"vector2":case"vector3":case"vector4":return ir;case"color":return Cc;case"quaternion":return nr;case"bool":case"boolean":return cr;case"string":return ur}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function mh(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ph(r.type);if(r.times===void 0){const t=[],n=[];Rc(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Kn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class gh{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],v=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const _h=new gh;class li{constructor(e){this.manager=e!==void 0?e:_h,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}li.DEFAULT_MATERIAL_NAME="__DEFAULT";const qn={};class vh extends Error{constructor(e,t){super(e),this.response=t}}class Br extends li{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Kn.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(qn[e]!==void 0){qn[e].push({onLoad:t,onProgress:n,onError:i});return}qn[e]=[],qn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=qn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,v=f!==0;let x=0;const g=new ReadableStream({start(m){w();function w(){u.read().then(({done:T,value:b})=>{if(T)m.close();else{x+=b.byteLength;const D=new ProgressEvent("progress",{lengthComputable:v,loaded:x,total:f});for(let A=0,C=h.length;A<C;A++){const N=h[A];N.onProgress&&N.onProgress(D)}m.enqueue(b),w()}},T=>{m.error(T)})}}});return new Response(g)}else throw new vh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(v=>f.decode(v))}}}).then(c=>{Kn.add(`file:${e}`,c);const h=qn[e];delete qn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=qn[e];if(h===void 0)throw this.manager.itemError(e),c;delete qn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Wi=new WeakMap;class xh extends li{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Kn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Wi.get(a);u===void 0&&(u=[],Wi.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=Ur("img");function l(){h(),t&&t(this);const u=Wi.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Wi.delete(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),Kn.remove(`image:${e}`);const d=Wi.get(this)||[];for(let f=0;f<d.length;f++){const v=d[f];v.onError&&v.onError(u)}Wi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Kn.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class yh extends li{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new uo,o=new Br(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:1001,a.wrapT=c.wrapT!==void 0?c.wrapT:1001,a.magFilter=c.magFilter!==void 0?c.magFilter:1006,a.minFilter=c.minFilter!==void 0?c.minFilter:1006,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=1008),c.mipmapCount===1&&(a.minFilter=1006),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}}class hr extends li{constructor(e){super(e)}load(e,t,n,i){const s=new Bt,a=new xh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ks extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Pc extends Ks{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Pa=new $e,Sl=new k,Tl=new k;class vo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fo,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Sl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sl),Tl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tl),t.updateMatrixWorld(),Pa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Mh extends vo{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ji*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class js extends Ks{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Mh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const El=new $e,br=new k,Da=new k;class Sh extends vo{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),br.setFromMatrixPosition(e.matrixWorld),n.position.copy(br),Da.copy(n.position),Da.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Da),n.updateMatrixWorld(),i.makeTranslation(-br.x,-br.y,-br.z),El.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(El,n.coordinateSystem,n.reversedDepth)}}class xo extends Ks{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Zs extends _c{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Th extends vo{constructor(){super(new Zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dc extends Ks{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Th}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Pr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ia=new WeakMap;class Eh extends li{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Kn.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{if(Ia.has(a)===!0)i&&i(Ia.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Kn.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Ia.set(l,c),Kn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Kn.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class bh extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ic{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const yo="\\[\\]\\.:\\/",wh=new RegExp("["+yo+"]","g"),Mo="[^"+yo+"]",Ah="[^"+yo.replace("\\.","")+"]",Rh=/((?:WC+[\/:])*)/.source.replace("WC",Mo),Ch=/(WCOD+)?/.source.replace("WCOD",Ah),Ph=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mo),Dh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mo),Ih=new RegExp("^"+Rh+Ch+Ph+Dh+"$"),Lh=["material","materials","bones","map"];class Uh{constructor(e,t,n){const i=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class pt{constructor(e,t,n){this.path=t,this.parsedPath=n||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,n):new pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wh,"")}static parseTrackName(e){const t=Ih.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Lh.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=Uh;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const bl=new $e;class $s{constructor(e,t,n=0,i=1/0){this.ray=new Vr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new lo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return bl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bl),this}intersectObject(e,t=!0,n=[]){return Ja(e,this,n,t),n.sort(wl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Ja(e[i],this,n,t);return n.sort(wl),n}}function wl(r,e){return r.distance-e.distance}function Ja(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Ja(s[a],e,t,!0)}}function Al(r,e,t,n){const i=Nh(n);switch(t){case 1021:return r*e;case 1028:return r*e/i.components*i.byteLength;case 1029:return r*e/i.components*i.byteLength;case 1030:return r*e*2/i.components*i.byteLength;case 1031:return r*e*2/i.components*i.byteLength;case 1022:return r*e*3/i.components*i.byteLength;case 1023:return r*e*4/i.components*i.byteLength;case 1033:return r*e*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Nh(r){switch(r){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Lc(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Fh(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,v)=>f.start-v.start);let d=0;for(let f=1;f<u.length;f++){const v=u[d],x=u[f];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,v=u.length;f<v;f++){const x=u[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var Oh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$h=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ad=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,od=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ld=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ud=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",pd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_d=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Md=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ed=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ad=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Id=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ld=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ud=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Nd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Od=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$d=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,af=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,of=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,df=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ff=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ef=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Df=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,If=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ff=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Of=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$f=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ep=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,np=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ap=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,up=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:Oh,alphahash_pars_fragment:Bh,alphamap_fragment:kh,alphamap_pars_fragment:zh,alphatest_fragment:Gh,alphatest_pars_fragment:Hh,aomap_fragment:Vh,aomap_pars_fragment:Wh,batching_pars_vertex:Xh,batching_vertex:qh,begin_vertex:Yh,beginnormal_vertex:Kh,bsdfs:jh,iridescence_fragment:Zh,bumpmap_pars_fragment:$h,clipping_planes_fragment:Jh,clipping_planes_pars_fragment:Qh,clipping_planes_pars_vertex:ed,clipping_planes_vertex:td,color_fragment:nd,color_pars_fragment:id,color_pars_vertex:rd,color_vertex:sd,common:ad,cube_uv_reflection_fragment:od,defaultnormal_vertex:ld,displacementmap_pars_vertex:cd,displacementmap_vertex:ud,emissivemap_fragment:hd,emissivemap_pars_fragment:dd,colorspace_fragment:fd,colorspace_pars_fragment:pd,envmap_fragment:md,envmap_common_pars_fragment:gd,envmap_pars_fragment:_d,envmap_pars_vertex:vd,envmap_physical_pars_fragment:Cd,envmap_vertex:xd,fog_vertex:yd,fog_pars_vertex:Md,fog_fragment:Sd,fog_pars_fragment:Td,gradientmap_pars_fragment:Ed,lightmap_pars_fragment:bd,lights_lambert_fragment:wd,lights_lambert_pars_fragment:Ad,lights_pars_begin:Rd,lights_toon_fragment:Pd,lights_toon_pars_fragment:Dd,lights_phong_fragment:Id,lights_phong_pars_fragment:Ld,lights_physical_fragment:Ud,lights_physical_pars_fragment:Nd,lights_fragment_begin:Fd,lights_fragment_maps:Od,lights_fragment_end:Bd,logdepthbuf_fragment:kd,logdepthbuf_pars_fragment:zd,logdepthbuf_pars_vertex:Gd,logdepthbuf_vertex:Hd,map_fragment:Vd,map_pars_fragment:Wd,map_particle_fragment:Xd,map_particle_pars_fragment:qd,metalnessmap_fragment:Yd,metalnessmap_pars_fragment:Kd,morphinstance_vertex:jd,morphcolor_vertex:Zd,morphnormal_vertex:$d,morphtarget_pars_vertex:Jd,morphtarget_vertex:Qd,normal_fragment_begin:ef,normal_fragment_maps:tf,normal_pars_fragment:nf,normal_pars_vertex:rf,normal_vertex:sf,normalmap_pars_fragment:af,clearcoat_normal_fragment_begin:of,clearcoat_normal_fragment_maps:lf,clearcoat_pars_fragment:cf,iridescence_pars_fragment:uf,opaque_fragment:hf,packing:df,premultiplied_alpha_fragment:ff,project_vertex:pf,dithering_fragment:mf,dithering_pars_fragment:gf,roughnessmap_fragment:_f,roughnessmap_pars_fragment:vf,shadowmap_pars_fragment:xf,shadowmap_pars_vertex:yf,shadowmap_vertex:Mf,shadowmask_pars_fragment:Sf,skinbase_vertex:Tf,skinning_pars_vertex:Ef,skinning_vertex:bf,skinnormal_vertex:wf,specularmap_fragment:Af,specularmap_pars_fragment:Rf,tonemapping_fragment:Cf,tonemapping_pars_fragment:Pf,transmission_fragment:Df,transmission_pars_fragment:If,uv_pars_fragment:Lf,uv_pars_vertex:Uf,uv_vertex:Nf,worldpos_vertex:Ff,background_vert:Of,background_frag:Bf,backgroundCube_vert:kf,backgroundCube_frag:zf,cube_vert:Gf,cube_frag:Hf,depth_vert:Vf,depth_frag:Wf,distanceRGBA_vert:Xf,distanceRGBA_frag:qf,equirect_vert:Yf,equirect_frag:Kf,linedashed_vert:jf,linedashed_frag:Zf,meshbasic_vert:$f,meshbasic_frag:Jf,meshlambert_vert:Qf,meshlambert_frag:ep,meshmatcap_vert:tp,meshmatcap_frag:np,meshnormal_vert:ip,meshnormal_frag:rp,meshphong_vert:sp,meshphong_frag:ap,meshphysical_vert:op,meshphysical_frag:lp,meshtoon_vert:cp,meshtoon_frag:up,points_vert:hp,points_frag:dp,shadow_vert:fp,shadow_frag:pp,sprite_vert:mp,sprite_frag:gp},Re={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},On={basic:{uniforms:Zt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Zt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Zt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Zt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Zt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Zt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Zt([Re.points,Re.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Zt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Zt([Re.common,Re.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Zt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Zt([Re.sprite,Re.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Zt([Re.common,Re.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Zt([Re.lights,Re.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};On.physical={uniforms:Zt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Rs={r:0,b:0,g:0},mi=new Bn,_p=new $e;function vp(r,e,t,n,i,s,a){const o=new Pe(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function v(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?t:e).get(b)),b}function x(T){let b=!1;const D=v(T);D===null?m(o,l):D&&D.isColor&&(m(D,1),b=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(T,b){const D=v(b);D&&(D.isCubeTexture||D.mapping===306)?(h===void 0&&(h=new yt(new At(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:Qi(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),mi.copy(b.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_p.makeRotationFromEuler(mi)),h.material.toneMapped=at.getTransfer(D.colorSpace)!==dt,(u!==D||d!==D.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=D,d=D.version,f=r.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new yt(new Rn(2,2),new Dt({name:"BackgroundMaterial",uniforms:Qi(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=at.getTransfer(D.colorSpace)!==dt,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(u!==D||d!==D.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=D,d=D.version,f=r.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function m(T,b){T.getRGB(Rs,gc(r)),n.buffers.color.setClear(Rs.r,Rs.g,Rs.b,b,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,b=1){o.set(T),l=b,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,m(o,l)},render:x,addToRenderList:g,dispose:w}}function xp(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(S,I,O,W,H){let Y=!1;const G=u(W,O,I);s!==G&&(s=G,c(s.object)),Y=f(S,W,O,H),Y&&v(S,W,O,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,b(S,I,O,W),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function u(S,I,O){const W=O.wireframe===!0;let H=n[S.id];H===void 0&&(H={},n[S.id]=H);let Y=H[I.id];Y===void 0&&(Y={},H[I.id]=Y);let G=Y[W];return G===void 0&&(G=d(l()),Y[W]=G),G}function d(S){const I=[],O=[],W=[];for(let H=0;H<t;H++)I[H]=0,O[H]=0,W[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:W,object:S,attributes:{},index:null}}function f(S,I,O,W){const H=s.attributes,Y=I.attributes;let G=0;const re=O.getAttributes();for(const K in re)if(re[K].location>=0){const xe=H[K];let Te=Y[K];if(Te===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(Te=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(Te=S.instanceColor)),xe===void 0||xe.attribute!==Te||Te&&xe.data!==Te.data)return!0;G++}return s.attributesNum!==G||s.index!==W}function v(S,I,O,W){const H={},Y=I.attributes;let G=0;const re=O.getAttributes();for(const K in re)if(re[K].location>=0){let xe=Y[K];xe===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(xe=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(xe=S.instanceColor));const Te={};Te.attribute=xe,xe&&xe.data&&(Te.data=xe.data),H[K]=Te,G++}s.attributes=H,s.attributesNum=G,s.index=W}function x(){const S=s.newAttributes;for(let I=0,O=S.length;I<O;I++)S[I]=0}function g(S){m(S,0)}function m(S,I){const O=s.newAttributes,W=s.enabledAttributes,H=s.attributeDivisors;O[S]=1,W[S]===0&&(r.enableVertexAttribArray(S),W[S]=1),H[S]!==I&&(r.vertexAttribDivisor(S,I),H[S]=I)}function w(){const S=s.newAttributes,I=s.enabledAttributes;for(let O=0,W=I.length;O<W;O++)I[O]!==S[O]&&(r.disableVertexAttribArray(O),I[O]=0)}function T(S,I,O,W,H,Y,G){G===!0?r.vertexAttribIPointer(S,I,O,H,Y):r.vertexAttribPointer(S,I,O,W,H,Y)}function b(S,I,O,W){x();const H=W.attributes,Y=O.getAttributes(),G=I.defaultAttributeValues;for(const re in Y){const K=Y[re];if(K.location>=0){let le=H[re];if(le===void 0&&(re==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),re==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),le!==void 0){const xe=le.normalized,Te=le.itemSize,ke=e.get(le);if(ke===void 0)continue;const tt=ke.buffer,ue=ke.type,pe=ke.bytesPerElement,q=ue===r.INT||ue===r.UNSIGNED_INT||le.gpuType===1013;if(le.isInterleavedBufferAttribute){const $=le.data,se=$.stride,we=le.offset;if($.isInstancedInterleavedBuffer){for(let _e=0;_e<K.locationSize;_e++)m(K.location+_e,$.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let _e=0;_e<K.locationSize;_e++)g(K.location+_e);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let _e=0;_e<K.locationSize;_e++)T(K.location+_e,Te/K.locationSize,ue,xe,se*pe,(we+Te/K.locationSize*_e)*pe,q)}else{if(le.isInstancedBufferAttribute){for(let $=0;$<K.locationSize;$++)m(K.location+$,le.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let $=0;$<K.locationSize;$++)g(K.location+$);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let $=0;$<K.locationSize;$++)T(K.location+$,Te/K.locationSize,ue,xe,Te*pe,Te/K.locationSize*$*pe,q)}}else if(G!==void 0){const xe=G[re];if(xe!==void 0)switch(xe.length){case 2:r.vertexAttrib2fv(K.location,xe);break;case 3:r.vertexAttrib3fv(K.location,xe);break;case 4:r.vertexAttrib4fv(K.location,xe);break;default:r.vertexAttrib1fv(K.location,xe)}}}}w()}function D(){N();for(const S in n){const I=n[S];for(const O in I){const W=I[O];for(const H in W)h(W[H].object),delete W[H];delete I[O]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const I=n[S.id];for(const O in I){const W=I[O];for(const H in W)h(W[H].object),delete W[H];delete I[O]}delete n[S.id]}function C(S){for(const I in n){const O=n[I];if(O[S.id]===void 0)continue;const W=O[S.id];for(const H in W)h(W[H].object),delete W[H];delete O[S.id]}}function N(){M(),a=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:N,resetDefaultState:M,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:w}}function yp(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let v=0;v<u;v++)f+=h[v];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<c.length;v++)a(c[v],h[v],d[v]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let v=0;for(let x=0;x<u;x++)v+=h[x]*d[x];t.update(v,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Mp(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==1023&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const N=C===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==1009&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==1015&&!N)}function l(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),D=v>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:b,vertexTextures:D,maxSamples:A}}function Sp(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new xi,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const v=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=r.get(u);if(!i||v===null||v.length===0||s&&!g)s?h(null):c();else{const w=s?0:n,T=w*4;let b=m.clippingState||null;l.value=b,b=h(v,d,T,f);for(let D=0;D!==T;++D)b[D]=t[D];m.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,v){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=l.value,v!==!0||g===null){const m=f+x*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,b=f;T!==x;++T,b+=4)a.copy(u[T]).applyMatrix4(w,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Tp(r){let e=new WeakMap;function t(a,o){return o===303?a.mapping=301:o===304&&(a.mapping=302),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===303||o===304)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new qu(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const qi=4,Rl=[.125,.215,.35,.446,.526,.582],Mi=20,La=new Zs,Cl=new Pe;let Ua=null,Na=0,Fa=0,Oa=!1;const yi=(1+Math.sqrt(5))/2,Xi=1/yi,Pl=[new k(-yi,Xi,0),new k(yi,Xi,0),new k(-Xi,0,yi),new k(Xi,0,yi),new k(0,yi,-Xi),new k(0,yi,Xi),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],Ep=new k;class Qa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Ep}=s;Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ua,Na,Fa),this._renderer.xr.enabled=Oa,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:Rt,depthBuffer:!1},i=Dl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bp(s)),this._blurMaterial=wp(s,e,t)}return i}_compileMaterial(e){const t=new yt(this._lodPlanes[0],e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,n,i,s){const l=new $t(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Cl),u.toneMapping=0,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const x=new pn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),g=new yt(new At,x);let m=!1;const w=e.background;w?w.isColor&&(x.color.copy(w),e.background=null,m=!0):(x.color.copy(Cl),m=!0);for(let T=0;T<6;T++){const b=T%3;b===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[T],s.y,s.z)):b===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[T]));const D=this._cubeSize;Cs(i,b*D,T>2?D:0,D,D),u.setRenderTarget(i),m&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===301||e.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Il());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new yt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Cs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,La)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Pl[(i-s-1)%Pl.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new yt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Mi-1),x=s/v,g=isFinite(s)?1+Math.floor(h*x):Mi;g>Mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Mi}`);const m=[];let w=0;for(let C=0;C<Mi;++C){const N=C/x,M=Math.exp(-N*N/2);m.push(M),C===0?w+=M:C<g&&(w+=2*M)}for(let C=0;C<m.length;C++)m[C]=m[C]/w;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=v,d.mipInt.value=T-n;const b=this._sizeLods[i],D=3*b*(i>T-qi?i-T+qi:0),A=4*(this._cubeSize-b);Cs(t,D,A,3*b,2*b),l.setRenderTarget(t),l.render(u,La)}}function bp(r){const e=[],t=[],n=[];let i=r;const s=r-qi+1+Rl.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-qi?l=Rl[a-r+qi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,v=6,x=3,g=2,m=1,w=new Float32Array(x*v*f),T=new Float32Array(g*v*f),b=new Float32Array(m*v*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,N=A>2?0:-1,M=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];w.set(M,x*v*A),T.set(d,g*v*A);const S=[A,A,A,A,A,A];b.set(S,m*v*A)}const D=new Ut;D.setAttribute("position",new kt(w,x)),D.setAttribute("uv",new kt(T,g)),D.setAttribute("faceIndex",new kt(b,m)),e.push(D),i>qi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Dl(r,e,t){const n=new Vt(r,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function wp(r,e,t){const n=new Float32Array(Mi),i=new k(0,1,0);return new Dt({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Il(){return new Dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ll(){return new Dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function So(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ap(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===303||l===304,h=l===301||l===302;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Qa(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Qa(r)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Rp(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Nr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Cp(r,e,t,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,v=u.attributes.position;let x=0;if(f!==null){const w=f.array;x=f.version;for(let T=0,b=w.length;T<b;T+=3){const D=w[T+0],A=w[T+1],C=w[T+2];d.push(D,A,A,C,C,D)}}else if(v!==void 0){const w=v.array;x=v.version;for(let T=0,b=w.length/3-1;T<b;T+=3){const D=T+0,A=T+1,C=T+2;d.push(D,A,A,C,C,D)}}else return;const g=new(hc(d)?mc:pc)(d,1);g.version=x;const m=s.get(u);m&&e.remove(m),s.set(u,g)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Pp(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,v){v!==0&&(r.drawElementsInstanced(n,f,s,d*a,v),t.update(f,n,v))}function h(d,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,v);let g=0;for(let m=0;m<v;m++)g+=f[m];t.update(g,n,1)}function u(d,f,v,x){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,x,0,v);let m=0;for(let w=0;w<v;w++)m+=f[w]*x[w];t.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Dp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ip(r,e,t){const n=new WeakMap,i=new ht;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let T=0;f===!0&&(T=1),v===!0&&(T=2),x===!0&&(T=3);let b=o.attributes.position.count*T,D=1;b>e.maxTextureSize&&(D=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*D*4*u),C=new dc(A,b,D,u);C.type=1015,C.needsUpdate=!0;const N=T*4;for(let S=0;S<u;S++){const I=g[S],O=m[S],W=w[S],H=b*D*4*S;for(let Y=0;Y<I.count;Y++){const G=Y*N;f===!0&&(i.fromBufferAttribute(I,Y),A[H+G+0]=i.x,A[H+G+1]=i.y,A[H+G+2]=i.z,A[H+G+3]=0),v===!0&&(i.fromBufferAttribute(O,Y),A[H+G+4]=i.x,A[H+G+5]=i.y,A[H+G+6]=i.z,A[H+G+7]=0),x===!0&&(i.fromBufferAttribute(W,Y),A[H+G+8]=i.x,A[H+G+9]=i.y,A[H+G+10]=i.z,A[H+G+11]=W.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new be(b,D)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const v=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Lp(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Uc=new Bt,Ul=new bc(1,1),Nc=new dc,Fc=new Au,Oc=new vc,Nl=[],Fl=[],Ol=new Float32Array(16),Bl=new Float32Array(9),kl=new Float32Array(4);function dr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Nl[i];if(s===void 0&&(s=new Float32Array(i),Nl[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function zt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Gt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Js(r,e){let t=Fl[e];t===void 0&&(t=new Int32Array(e),Fl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Up(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Np(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;r.uniform2fv(this.addr,e),Gt(t,e)}}function Fp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;r.uniform3fv(this.addr,e),Gt(t,e)}}function Op(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;r.uniform4fv(this.addr,e),Gt(t,e)}}function Bp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,n))return;kl.set(n),r.uniformMatrix2fv(this.addr,!1,kl),Gt(t,n)}}function kp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,n))return;Bl.set(n),r.uniformMatrix3fv(this.addr,!1,Bl),Gt(t,n)}}function zp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,n))return;Ol.set(n),r.uniformMatrix4fv(this.addr,!1,Ol),Gt(t,n)}}function Gp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Hp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;r.uniform2iv(this.addr,e),Gt(t,e)}}function Vp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;r.uniform3iv(this.addr,e),Gt(t,e)}}function Wp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;r.uniform4iv(this.addr,e),Gt(t,e)}}function Xp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function qp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;r.uniform2uiv(this.addr,e),Gt(t,e)}}function Yp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;r.uniform3uiv(this.addr,e),Gt(t,e)}}function Kp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;r.uniform4uiv(this.addr,e),Gt(t,e)}}function jp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ul.compareFunction=515,s=Ul):s=Uc,t.setTexture2D(e||s,i)}function Zp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Fc,i)}function $p(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Oc,i)}function Jp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Nc,i)}function Qp(r){switch(r){case 5126:return Up;case 35664:return Np;case 35665:return Fp;case 35666:return Op;case 35674:return Bp;case 35675:return kp;case 35676:return zp;case 5124:case 35670:return Gp;case 35667:case 35671:return Hp;case 35668:case 35672:return Vp;case 35669:case 35673:return Wp;case 5125:return Xp;case 36294:return qp;case 36295:return Yp;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return Zp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return Jp}}function em(r,e){r.uniform1fv(this.addr,e)}function tm(r,e){const t=dr(e,this.size,2);r.uniform2fv(this.addr,t)}function nm(r,e){const t=dr(e,this.size,3);r.uniform3fv(this.addr,t)}function im(r,e){const t=dr(e,this.size,4);r.uniform4fv(this.addr,t)}function rm(r,e){const t=dr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function sm(r,e){const t=dr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function am(r,e){const t=dr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function om(r,e){r.uniform1iv(this.addr,e)}function lm(r,e){r.uniform2iv(this.addr,e)}function cm(r,e){r.uniform3iv(this.addr,e)}function um(r,e){r.uniform4iv(this.addr,e)}function hm(r,e){r.uniform1uiv(this.addr,e)}function dm(r,e){r.uniform2uiv(this.addr,e)}function fm(r,e){r.uniform3uiv(this.addr,e)}function pm(r,e){r.uniform4uiv(this.addr,e)}function mm(r,e,t){const n=this.cache,i=e.length,s=Js(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Uc,s[a])}function gm(r,e,t){const n=this.cache,i=e.length,s=Js(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Fc,s[a])}function _m(r,e,t){const n=this.cache,i=e.length,s=Js(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Oc,s[a])}function vm(r,e,t){const n=this.cache,i=e.length,s=Js(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Nc,s[a])}function xm(r){switch(r){case 5126:return em;case 35664:return tm;case 35665:return nm;case 35666:return im;case 35674:return rm;case 35675:return sm;case 35676:return am;case 5124:case 35670:return om;case 35667:case 35671:return lm;case 35668:case 35672:return cm;case 35669:case 35673:return um;case 5125:return hm;case 36294:return dm;case 36295:return fm;case 36296:return pm;case 35678:case 36198:case 36298:case 36306:case 35682:return mm;case 35679:case 36299:case 36307:return gm;case 35680:case 36300:case 36308:case 36293:return _m;case 36289:case 36303:case 36311:case 36292:return vm}}class ym{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qp(t.type)}}class Mm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xm(t.type)}}class Sm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Ba=/(\w+)(\])?(\[|\.)?/g;function zl(r,e){r.seq.push(e),r.map[e.id]=e}function Tm(r,e,t){const n=r.name,i=n.length;for(Ba.lastIndex=0;;){const s=Ba.exec(n),a=Ba.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){zl(t,c===void 0?new ym(o,r,e):new Mm(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new Sm(o),zl(t,u)),t=u}}}class Os{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Tm(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Gl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Em=37297;let bm=0;function wm(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Hl=new et;function Am(r){at._getMatrix(Hl,at.workingColorSpace,r);const e=`mat3( ${Hl.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(r)){case Bs:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Vl(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+wm(r.getShaderSource(e),o)}else return s}function Rm(r,e){const t=Am(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Cm(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ps=new k;function Pm(){at.getLuminanceCoefficients(Ps);const r=Ps.x.toFixed(4),e=Ps.y.toFixed(4),t=Ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function Im(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Lm(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ar(r){return r!==""}function Wl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Um=/^[ \t]*#include +<([\w\d./]+)>/gm;function eo(r){return r.replace(Um,Fm)}const Nm=new Map;function Fm(r,e){let t=Qe[e];if(t===void 0){const n=Nm.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return eo(t)}const Om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ql(r){return r.replace(Om,Bm)}function Bm(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Yl(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function km(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function zm(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gm(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===302&&(e="ENVMAP_MODE_REFRACTION"),e}function Hm(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function Vm(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Wm(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=km(t),c=zm(t),h=Gm(t),u=Hm(t),d=Vm(t),f=Dm(t),v=Im(s),x=i.createProgram();let g,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ar).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ar).join(`
`),m.length>0&&(m+=`
`)):(g=[Yl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),m=[Yl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Qe.tonemapping_pars_fragment:"",t.toneMapping!==0?Cm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Rm("linearToOutputTexel",t.outputColorSpace),Pm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ar).join(`
`)),a=eo(a),a=Wl(a,t),a=Xl(a,t),o=eo(o),o=Wl(o,t),o=Xl(o,t),a=ql(a),o=ql(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=w+g+a,b=w+m+o,D=Gl(i,i.VERTEX_SHADER,T),A=Gl(i,i.FRAGMENT_SHADER,b);i.attachShader(x,D),i.attachShader(x,A),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(I){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(x)||"",W=i.getShaderInfoLog(D)||"",H=i.getShaderInfoLog(A)||"",Y=O.trim(),G=W.trim(),re=H.trim();let K=!0,le=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,D,A);else{const xe=Vl(i,D,"vertex"),Te=Vl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Y+`
`+xe+`
`+Te)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(G===""||re==="")&&(le=!1);le&&(I.diagnostics={runnable:K,programLog:Y,vertexShader:{log:G,prefix:g},fragmentShader:{log:re,prefix:m}})}i.deleteShader(D),i.deleteShader(A),N=new Os(i,x),M=Lm(i,x)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(x,Em)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=A,this}let Xm=0;class qm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ym(e),t.set(e,n)),n}}class Ym{constructor(e){this.id=Xm++,this.code=e,this.usedTimes=0}}function Km(r,e,t,n,i,s,a){const o=new lo,l=new qm,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,S,I,O,W){const H=O.fog,Y=W.geometry,G=M.isMeshStandardMaterial?O.environment:null,re=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),K=re&&re.mapping===306?re.image.height:null,le=v[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const xe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Te=xe!==void 0?xe.length:0;let ke=0;Y.morphAttributes.position!==void 0&&(ke=1),Y.morphAttributes.normal!==void 0&&(ke=2),Y.morphAttributes.color!==void 0&&(ke=3);let tt,ue,pe,q;if(le){const lt=On[le];tt=lt.vertexShader,ue=lt.fragmentShader}else tt=M.vertexShader,ue=M.fragmentShader,l.update(M),pe=l.getVertexShaderID(M),q=l.getFragmentShaderID(M);const $=r.getRenderTarget(),se=r.state.buffers.depth.getReversed(),we=W.isInstancedMesh===!0,_e=W.isBatchedMesh===!0,Ge=!!M.map,vt=!!M.matcap,B=!!re,ot=!!M.aoMap,Ke=!!M.lightMap,Xe=!!M.bumpMap,Le=!!M.normalMap,xt=!!M.displacementMap,De=!!M.emissiveMap,Ze=!!M.metalnessMap,Nt=!!M.roughnessMap,bt=M.anisotropy>0,F=M.clearcoat>0,E=M.dispersion>0,Z=M.iridescence>0,ie=M.sheen>0,ce=M.transmission>0,te=bt&&!!M.anisotropyMap,Oe=F&&!!M.clearcoatMap,ve=F&&!!M.clearcoatNormalMap,Ne=F&&!!M.clearcoatRoughnessMap,Be=Z&&!!M.iridescenceMap,me=Z&&!!M.iridescenceThicknessMap,Se=ie&&!!M.sheenColorMap,Ue=ie&&!!M.sheenRoughnessMap,Fe=!!M.specularMap,Ee=!!M.specularColorMap,ze=!!M.specularIntensityMap,z=ce&&!!M.transmissionMap,ge=ce&&!!M.thicknessMap,Q=!!M.gradientMap,Ce=!!M.alphaMap,de=M.alphaTest>0,ae=!!M.alphaHash,Ie=!!M.extensions;let je=0;M.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(je=r.toneMapping);const gt={shaderID:le,shaderType:M.type,shaderName:M.name,vertexShader:tt,fragmentShader:ue,defines:M.defines,customVertexShaderID:pe,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:_e,batchingColor:_e&&W._colorsTexture!==null,instancing:we,instancingColor:we&&W.instanceColor!==null,instancingMorph:we&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?r.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Rt,alphaToCoverage:!!M.alphaToCoverage,map:Ge,matcap:vt,envMap:B,envMapMode:B&&re.mapping,envMapCubeUVHeight:K,aoMap:ot,lightMap:Ke,bumpMap:Xe,normalMap:Le,displacementMap:d&&xt,emissiveMap:De,normalMapObjectSpace:Le&&M.normalMapType===1,normalMapTangentSpace:Le&&M.normalMapType===0,metalnessMap:Ze,roughnessMap:Nt,anisotropy:bt,anisotropyMap:te,clearcoat:F,clearcoatMap:Oe,clearcoatNormalMap:ve,clearcoatRoughnessMap:Ne,dispersion:E,iridescence:Z,iridescenceMap:Be,iridescenceThicknessMap:me,sheen:ie,sheenColorMap:Se,sheenRoughnessMap:Ue,specularMap:Fe,specularColorMap:Ee,specularIntensityMap:ze,transmission:ce,transmissionMap:z,thicknessMap:ge,gradientMap:Q,opaque:M.transparent===!1&&M.blending===1&&M.alphaToCoverage===!1,alphaMap:Ce,alphaTest:de,alphaHash:ae,combine:M.combine,mapUv:Ge&&x(M.map.channel),aoMapUv:ot&&x(M.aoMap.channel),lightMapUv:Ke&&x(M.lightMap.channel),bumpMapUv:Xe&&x(M.bumpMap.channel),normalMapUv:Le&&x(M.normalMap.channel),displacementMapUv:xt&&x(M.displacementMap.channel),emissiveMapUv:De&&x(M.emissiveMap.channel),metalnessMapUv:Ze&&x(M.metalnessMap.channel),roughnessMapUv:Nt&&x(M.roughnessMap.channel),anisotropyMapUv:te&&x(M.anisotropyMap.channel),clearcoatMapUv:Oe&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ve&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:me&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(M.sheenRoughnessMap.channel),specularMapUv:Fe&&x(M.specularMap.channel),specularColorMapUv:Ee&&x(M.specularColorMap.channel),specularIntensityMapUv:ze&&x(M.specularIntensityMap.channel),transmissionMapUv:z&&x(M.transmissionMap.channel),thicknessMapUv:ge&&x(M.thicknessMap.channel),alphaMapUv:Ce&&x(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Le||bt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Y.attributes.uv&&(Ge||Ce),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:se,skinning:W.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:ke,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:je,decodeVideoTexture:Ge&&M.map.isVideoTexture===!0&&at.getTransfer(M.map.colorSpace)===dt,decodeVideoTextureEmissive:De&&M.emissiveMap.isVideoTexture===!0&&at.getTransfer(M.emissiveMap.colorSpace)===dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===2,flipSided:M.side===1,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ie&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&M.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt}function m(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)S.push(I),S.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(w(S,M),T(S,M),S.push(r.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function w(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function T(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function b(M){const S=v[M.type];let I;if(S){const O=On[S];I=er.clone(O.uniforms)}else I=M.uniforms;return I}function D(M,S){let I;for(let O=0,W=h.length;O<W;O++){const H=h[O];if(H.cacheKey===S){I=H,++I.usedTimes;break}}return I===void 0&&(I=new Wm(r,S,M,s),h.push(I)),I}function A(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function C(M){l.remove(M)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:b,acquireProgram:D,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:N}}function jm(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Zm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Kl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function jl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,v,x,g){let m=r[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:v,renderOrder:u.renderOrder,z:x,group:g},r[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=v,m.renderOrder=u.renderOrder,m.z=x,m.group=g),e++,m}function o(u,d,f,v,x,g){const m=a(u,d,f,v,x,g);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(u,d,f,v,x,g){const m=a(u,d,f,v,x,g);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||Zm),n.length>1&&n.sort(d||Kl),i.length>1&&i.sort(d||Kl)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function $m(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new jl,r.set(n,[a])):i>=s.length?(a=new jl,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Jm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Pe};break;case"SpotLight":t={position:new k,direction:new k,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new k,halfWidth:new k,halfHeight:new k};break}return r[e.id]=t,t}}}function Qm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let eg=0;function tg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ng(r){const e=new Jm,t=Qm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const i=new k,s=new $e,a=new $e;function o(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,v=0,x=0,g=0,m=0,w=0,T=0,b=0,D=0,A=0,C=0;c.sort(tg);for(let M=0,S=c.length;M<S;M++){const I=c[M],O=I.color,W=I.intensity,H=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=O.r*W,u+=O.g*W,d+=O.b*W;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],W);C++}else if(I.isDirectionalLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const re=I.shadow,K=t.get(I);K.shadowIntensity=re.intensity,K.shadowBias=re.bias,K.shadowNormalBias=re.normalBias,K.shadowRadius=re.radius,K.shadowMapSize=re.mapSize,n.directionalShadow[f]=K,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=I.shadow.matrix,w++}n.directional[f]=G,f++}else if(I.isSpotLight){const G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(O).multiplyScalar(W),G.distance=H,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[x]=G;const re=I.shadow;if(I.map&&(n.spotLightMap[D]=I.map,D++,re.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[x]=re.matrix,I.castShadow){const K=t.get(I);K.shadowIntensity=re.intensity,K.shadowBias=re.bias,K.shadowNormalBias=re.normalBias,K.shadowRadius=re.radius,K.shadowMapSize=re.mapSize,n.spotShadow[x]=K,n.spotShadowMap[x]=Y,b++}x++}else if(I.isRectAreaLight){const G=e.get(I);G.color.copy(O).multiplyScalar(W),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=G,g++}else if(I.isPointLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){const re=I.shadow,K=t.get(I);K.shadowIntensity=re.intensity,K.shadowBias=re.bias,K.shadowNormalBias=re.normalBias,K.shadowRadius=re.radius,K.shadowMapSize=re.mapSize,K.shadowCameraNear=re.camera.near,K.shadowCameraFar=re.camera.far,n.pointShadow[v]=K,n.pointShadowMap[v]=Y,n.pointShadowMatrix[v]=I.shadow.matrix,T++}n.point[v]=G,v++}else if(I.isHemisphereLight){const G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(W),G.groundColor.copy(I.groundColor).multiplyScalar(W),n.hemi[m]=G,m++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const N=n.hash;(N.directionalLength!==f||N.pointLength!==v||N.spotLength!==x||N.rectAreaLength!==g||N.hemiLength!==m||N.numDirectionalShadows!==w||N.numPointShadows!==T||N.numSpotShadows!==b||N.numSpotMaps!==D||N.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=v,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=b+D-A,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,N.directionalLength=f,N.pointLength=v,N.spotLength=x,N.rectAreaLength=g,N.hemiLength=m,N.numDirectionalShadows=w,N.numPointShadows=T,N.numSpotShadows=b,N.numSpotMaps=D,N.numLightProbes=C,n.version=eg++)}function l(c,h){let u=0,d=0,f=0,v=0,x=0;const g=h.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){const T=c[m];if(T.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),u++}else if(T.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),f++}else if(T.isRectAreaLight){const b=n.rectArea[v];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(g),a.identity(),s.copy(T.matrixWorld),s.premultiply(g),a.extractRotation(s),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(g),d++}else if(T.isHemisphereLight){const b=n.hemi[x];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function Zl(r){const e=new ng(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function ig(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Zl(r),e.set(i,[o])):s>=a.length?(o=new Zl(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ag(r,e,t){let n=new fo;const i=new be,s=new be,a=new ht,o=new Ac({depthPacking:3201}),l=new ah,c={},h=t.maxTextureSize,u={0:1,1:0,2:2},d=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:rg,fragmentShader:sg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new Ut;v.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new yt(v,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let m=this.type;this.render=function(A,C,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const M=r.getRenderTarget(),S=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),O=r.state;O.setBlending(0),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const W=m!==3&&this.type===3,H=m===3&&this.type!==3;for(let Y=0,G=A.length;Y<G;Y++){const re=A[Y],K=re.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);const le=K.getFrameExtents();if(i.multiply(le),s.copy(K.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/le.x),i.x=s.x*le.x,K.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/le.y),i.y=s.y*le.y,K.mapSize.y=s.y)),K.map===null||W===!0||H===!0){const Te=this.type!==3?{minFilter:1003,magFilter:1003}:{};K.map!==null&&K.map.dispose(),K.map=new Vt(i.x,i.y,Te),K.map.texture.name=re.name+".shadowMap",K.camera.updateProjectionMatrix()}r.setRenderTarget(K.map),r.clear();const xe=K.getViewportCount();for(let Te=0;Te<xe;Te++){const ke=K.getViewport(Te);a.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),O.viewport(a),K.updateMatrices(re,Te),n=K.getFrustum(),b(C,N,K.camera,re,this.type)}K.isPointLightShadow!==!0&&this.type===3&&w(K,N),K.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(M,S,I)};function w(A,C){const N=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Vt(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(C,null,N,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(C,null,N,f,x,null)}function T(A,C,N,M){let S=null;const I=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)S=I;else if(S=N.isPointLight===!0?l:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=S.uuid,W=C.uuid;let H=c[O];H===void 0&&(H={},c[O]=H);let Y=H[W];Y===void 0&&(Y=S.clone(),H[W]=Y,C.addEventListener("dispose",D)),S=Y}if(S.visible=C.visible,S.wireframe=C.wireframe,M===3?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=r.properties.get(S);O.light=N}return S}function b(A,C,N,M,S){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===3)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const W=e.update(A),H=A.material;if(Array.isArray(H)){const Y=W.groups;for(let G=0,re=Y.length;G<re;G++){const K=Y[G],le=H[K.materialIndex];if(le&&le.visible){const xe=T(A,le,M,S);A.onBeforeShadow(r,A,C,N,W,xe,K),r.renderBufferDirect(N,null,W,xe,A,K),A.onAfterShadow(r,A,C,N,W,xe,K)}}}else if(H.visible){const Y=T(A,H,M,S);A.onBeforeShadow(r,A,C,N,W,Y,null),r.renderBufferDirect(N,null,W,Y,A,null),A.onAfterShadow(r,A,C,N,W,Y,null)}}const O=A.children;for(let W=0,H=O.length;W<H;W++)b(O[W],C,N,M,S)}function D(A){A.target.removeEventListener("dispose",D);for(const N in c){const M=c[N],S=A.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const og={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function lg(r,e){function t(){let z=!1;const ge=new ht;let Q=null;const Ce=new ht(0,0,0,0);return{setMask:function(de){Q!==de&&!z&&(r.colorMask(de,de,de,de),Q=de)},setLocked:function(de){z=de},setClear:function(de,ae,Ie,je,gt){gt===!0&&(de*=je,ae*=je,Ie*=je),ge.set(de,ae,Ie,je),Ce.equals(ge)===!1&&(r.clearColor(de,ae,Ie,je),Ce.copy(ge))},reset:function(){z=!1,Q=null,Ce.set(-1,0,0,0)}}}function n(){let z=!1,ge=!1,Q=null,Ce=null,de=null;return{setReversed:function(ae){if(ge!==ae){const Ie=e.get("EXT_clip_control");ae?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),ge=ae;const je=de;de=null,this.setClear(je)}},getReversed:function(){return ge},setTest:function(ae){ae?$(r.DEPTH_TEST):se(r.DEPTH_TEST)},setMask:function(ae){Q!==ae&&!z&&(r.depthMask(ae),Q=ae)},setFunc:function(ae){if(ge&&(ae=og[ae]),Ce!==ae){switch(ae){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ce=ae}},setLocked:function(ae){z=ae},setClear:function(ae){de!==ae&&(ge&&(ae=1-ae),r.clearDepth(ae),de=ae)},reset:function(){z=!1,Q=null,Ce=null,de=null,ge=!1}}}function i(){let z=!1,ge=null,Q=null,Ce=null,de=null,ae=null,Ie=null,je=null,gt=null;return{setTest:function(lt){z||(lt?$(r.STENCIL_TEST):se(r.STENCIL_TEST))},setMask:function(lt){ge!==lt&&!z&&(r.stencilMask(lt),ge=lt)},setFunc:function(lt,gn,ln){(Q!==lt||Ce!==gn||de!==ln)&&(r.stencilFunc(lt,gn,ln),Q=lt,Ce=gn,de=ln)},setOp:function(lt,gn,ln){(ae!==lt||Ie!==gn||je!==ln)&&(r.stencilOp(lt,gn,ln),ae=lt,Ie=gn,je=ln)},setLocked:function(lt){z=lt},setClear:function(lt){gt!==lt&&(r.clearStencil(lt),gt=lt)},reset:function(){z=!1,ge=null,Q=null,Ce=null,de=null,ae=null,Ie=null,je=null,gt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],v=null,x=!1,g=null,m=null,w=null,T=null,b=null,D=null,A=null,C=new Pe(0,0,0),N=0,M=!1,S=null,I=null,O=null,W=null,H=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,re=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(K)[1]),G=re>=1):K.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),G=re>=2);let le=null,xe={};const Te=r.getParameter(r.SCISSOR_BOX),ke=r.getParameter(r.VIEWPORT),tt=new ht().fromArray(Te),ue=new ht().fromArray(ke);function pe(z,ge,Q,Ce){const de=new Uint8Array(4),ae=r.createTexture();r.bindTexture(z,ae),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ie=0;Ie<Q;Ie++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(ge,0,r.RGBA,1,1,Ce,0,r.RGBA,r.UNSIGNED_BYTE,de):r.texImage2D(ge+Ie,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,de);return ae}const q={};q[r.TEXTURE_2D]=pe(r.TEXTURE_2D,r.TEXTURE_2D,1),q[r.TEXTURE_CUBE_MAP]=pe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[r.TEXTURE_2D_ARRAY]=pe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),q[r.TEXTURE_3D]=pe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(r.DEPTH_TEST),a.setFunc(3),Xe(!1),Le(1),$(r.CULL_FACE),ot(0);function $(z){h[z]!==!0&&(r.enable(z),h[z]=!0)}function se(z){h[z]!==!1&&(r.disable(z),h[z]=!1)}function we(z,ge){return u[z]!==ge?(r.bindFramebuffer(z,ge),u[z]=ge,z===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ge),z===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ge),!0):!1}function _e(z,ge){let Q=f,Ce=!1;if(z){Q=d.get(ge),Q===void 0&&(Q=[],d.set(ge,Q));const de=z.textures;if(Q.length!==de.length||Q[0]!==r.COLOR_ATTACHMENT0){for(let ae=0,Ie=de.length;ae<Ie;ae++)Q[ae]=r.COLOR_ATTACHMENT0+ae;Q.length=de.length,Ce=!0}}else Q[0]!==r.BACK&&(Q[0]=r.BACK,Ce=!0);Ce&&r.drawBuffers(Q)}function Ge(z){return v!==z?(r.useProgram(z),v=z,!0):!1}const vt={100:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};vt[103]=r.MIN,vt[104]=r.MAX;const B={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,204:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,205:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function ot(z,ge,Q,Ce,de,ae,Ie,je,gt,lt){if(z===0){x===!0&&(se(r.BLEND),x=!1);return}if(x===!1&&($(r.BLEND),x=!0),z!==5){if(z!==g||lt!==M){if((m!==100||b!==100)&&(r.blendEquation(r.FUNC_ADD),m=100,b=100),lt)switch(z){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case 3:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}w=null,T=null,D=null,A=null,C.set(0,0,0),N=0,g=z,M=lt}return}de=de||ge,ae=ae||Q,Ie=Ie||Ce,(ge!==m||de!==b)&&(r.blendEquationSeparate(vt[ge],vt[de]),m=ge,b=de),(Q!==w||Ce!==T||ae!==D||Ie!==A)&&(r.blendFuncSeparate(B[Q],B[Ce],B[ae],B[Ie]),w=Q,T=Ce,D=ae,A=Ie),(je.equals(C)===!1||gt!==N)&&(r.blendColor(je.r,je.g,je.b,gt),C.copy(je),N=gt),g=z,M=!1}function Ke(z,ge){z.side===2?se(r.CULL_FACE):$(r.CULL_FACE);let Q=z.side===1;ge&&(Q=!Q),Xe(Q),z.blending===1&&z.transparent===!1?ot(0):ot(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),s.setMask(z.colorWrite);const Ce=z.stencilWrite;o.setTest(Ce),Ce&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),De(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?$(r.SAMPLE_ALPHA_TO_COVERAGE):se(r.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(z){S!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),S=z)}function Le(z){z!==0?($(r.CULL_FACE),z!==I&&(z===1?r.cullFace(r.BACK):z===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):se(r.CULL_FACE),I=z}function xt(z){z!==O&&(G&&r.lineWidth(z),O=z)}function De(z,ge,Q){z?($(r.POLYGON_OFFSET_FILL),(W!==ge||H!==Q)&&(r.polygonOffset(ge,Q),W=ge,H=Q)):se(r.POLYGON_OFFSET_FILL)}function Ze(z){z?$(r.SCISSOR_TEST):se(r.SCISSOR_TEST)}function Nt(z){z===void 0&&(z=r.TEXTURE0+Y-1),le!==z&&(r.activeTexture(z),le=z)}function bt(z,ge,Q){Q===void 0&&(le===null?Q=r.TEXTURE0+Y-1:Q=le);let Ce=xe[Q];Ce===void 0&&(Ce={type:void 0,texture:void 0},xe[Q]=Ce),(Ce.type!==z||Ce.texture!==ge)&&(le!==Q&&(r.activeTexture(Q),le=Q),r.bindTexture(z,ge||q[z]),Ce.type=z,Ce.texture=ge)}function F(){const z=xe[le];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{r.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{r.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{r.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function te(){try{r.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Oe(){try{r.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(){try{r.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ne(){try{r.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Be(){try{r.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{r.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(z){tt.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),tt.copy(z))}function Ue(z){ue.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),ue.copy(z))}function Fe(z,ge){let Q=c.get(ge);Q===void 0&&(Q=new WeakMap,c.set(ge,Q));let Ce=Q.get(z);Ce===void 0&&(Ce=r.getUniformBlockIndex(ge,z.name),Q.set(z,Ce))}function Ee(z,ge){const Ce=c.get(ge).get(z);l.get(ge)!==Ce&&(r.uniformBlockBinding(ge,Ce,z.__bindingPointIndex),l.set(ge,Ce))}function ze(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},le=null,xe={},u={},d=new WeakMap,f=[],v=null,x=!1,g=null,m=null,w=null,T=null,b=null,D=null,A=null,C=new Pe(0,0,0),N=0,M=!1,S=null,I=null,O=null,W=null,H=null,tt.set(0,0,r.canvas.width,r.canvas.height),ue.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:se,bindFramebuffer:we,drawBuffers:_e,useProgram:Ge,setBlending:ot,setMaterial:Ke,setFlipSided:Xe,setCullFace:Le,setLineWidth:xt,setPolygonOffset:De,setScissorTest:Ze,activeTexture:Nt,bindTexture:bt,unbindTexture:F,compressedTexImage2D:E,compressedTexImage3D:Z,texImage2D:Be,texImage3D:me,updateUBOMapping:Fe,uniformBlockBinding:Ee,texStorage2D:ve,texStorage3D:Ne,texSubImage2D:ie,texSubImage3D:ce,compressedTexSubImage2D:te,compressedTexSubImage3D:Oe,scissor:Se,viewport:Ue,reset:ze}}function cg(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(F,E){return f?new OffscreenCanvas(F,E):Ur("canvas")}function x(F,E,Z){let ie=1;const ce=bt(F);if((ce.width>Z||ce.height>Z)&&(ie=Z/Math.max(ce.width,ce.height)),ie<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const te=Math.floor(ie*ce.width),Oe=Math.floor(ie*ce.height);u===void 0&&(u=v(te,Oe));const ve=E?v(te,Oe):u;return ve.width=te,ve.height=Oe,ve.getContext("2d").drawImage(F,0,0,te,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+te+"x"+Oe+")."),ve}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),F;return F}function g(F){return F.generateMipmaps}function m(F){r.generateMipmap(F)}function w(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(F,E,Z,ie,ce=!1){if(F!==null){if(r[F]!==void 0)return r[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let te=E;if(E===r.RED&&(Z===r.FLOAT&&(te=r.R32F),Z===r.HALF_FLOAT&&(te=r.R16F),Z===r.UNSIGNED_BYTE&&(te=r.R8)),E===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(te=r.R8UI),Z===r.UNSIGNED_SHORT&&(te=r.R16UI),Z===r.UNSIGNED_INT&&(te=r.R32UI),Z===r.BYTE&&(te=r.R8I),Z===r.SHORT&&(te=r.R16I),Z===r.INT&&(te=r.R32I)),E===r.RG&&(Z===r.FLOAT&&(te=r.RG32F),Z===r.HALF_FLOAT&&(te=r.RG16F),Z===r.UNSIGNED_BYTE&&(te=r.RG8)),E===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(te=r.RG8UI),Z===r.UNSIGNED_SHORT&&(te=r.RG16UI),Z===r.UNSIGNED_INT&&(te=r.RG32UI),Z===r.BYTE&&(te=r.RG8I),Z===r.SHORT&&(te=r.RG16I),Z===r.INT&&(te=r.RG32I)),E===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(te=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(te=r.RGB16UI),Z===r.UNSIGNED_INT&&(te=r.RGB32UI),Z===r.BYTE&&(te=r.RGB8I),Z===r.SHORT&&(te=r.RGB16I),Z===r.INT&&(te=r.RGB32I)),E===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(te=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(te=r.RGBA16UI),Z===r.UNSIGNED_INT&&(te=r.RGBA32UI),Z===r.BYTE&&(te=r.RGBA8I),Z===r.SHORT&&(te=r.RGBA16I),Z===r.INT&&(te=r.RGBA32I)),E===r.RGB&&(Z===r.UNSIGNED_INT_5_9_9_9_REV&&(te=r.RGB9_E5),Z===r.UNSIGNED_INT_10F_11F_11F_REV&&(te=r.R11F_G11F_B10F)),E===r.RGBA){const Oe=ce?Bs:at.getTransfer(ie);Z===r.FLOAT&&(te=r.RGBA32F),Z===r.HALF_FLOAT&&(te=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(te=Oe===dt?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(te=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(te=r.RGB5_A1)}return(te===r.R16F||te===r.R32F||te===r.RG16F||te===r.RG32F||te===r.RGBA16F||te===r.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function b(F,E){let Z;return F?E===null||E===1014||E===1020?Z=r.DEPTH24_STENCIL8:E===1015?Z=r.DEPTH32F_STENCIL8:E===1012&&(Z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===1014||E===1020?Z=r.DEPTH_COMPONENT24:E===1015?Z=r.DEPTH_COMPONENT32F:E===1012&&(Z=r.DEPTH_COMPONENT16),Z}function D(F,E){return g(F)===!0||F.isFramebufferTexture&&F.minFilter!==1003&&F.minFilter!==1006?Math.log2(Math.max(E.width,E.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?E.mipmaps.length:1}function A(F){const E=F.target;E.removeEventListener("dispose",A),N(E),E.isVideoTexture&&h.delete(E)}function C(F){const E=F.target;E.removeEventListener("dispose",C),S(E)}function N(F){const E=n.get(F);if(E.__webglInit===void 0)return;const Z=F.source,ie=d.get(Z);if(ie){const ce=ie[E.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&M(F),Object.keys(ie).length===0&&d.delete(Z)}n.remove(F)}function M(F){const E=n.get(F);r.deleteTexture(E.__webglTexture);const Z=F.source,ie=d.get(Z);delete ie[E.__cacheKey],a.memory.textures--}function S(F){const E=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(E.__webglFramebuffer[ie]))for(let ce=0;ce<E.__webglFramebuffer[ie].length;ce++)r.deleteFramebuffer(E.__webglFramebuffer[ie][ce]);else r.deleteFramebuffer(E.__webglFramebuffer[ie]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ie])}else{if(Array.isArray(E.__webglFramebuffer))for(let ie=0;ie<E.__webglFramebuffer.length;ie++)r.deleteFramebuffer(E.__webglFramebuffer[ie]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ie=0;ie<E.__webglColorRenderbuffer.length;ie++)E.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ie]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=F.textures;for(let ie=0,ce=Z.length;ie<ce;ie++){const te=n.get(Z[ie]);te.__webglTexture&&(r.deleteTexture(te.__webglTexture),a.memory.textures--),n.remove(Z[ie])}n.remove(F)}let I=0;function O(){I=0}function W(){const F=I;return F>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+i.maxTextures),I+=1,F}function H(F){const E=[];return E.push(F.wrapS),E.push(F.wrapT),E.push(F.wrapR||0),E.push(F.magFilter),E.push(F.minFilter),E.push(F.anisotropy),E.push(F.internalFormat),E.push(F.format),E.push(F.type),E.push(F.generateMipmaps),E.push(F.premultiplyAlpha),E.push(F.flipY),E.push(F.unpackAlignment),E.push(F.colorSpace),E.join()}function Y(F,E){const Z=n.get(F);if(F.isVideoTexture&&Ze(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Z.__version!==F.version){const ie=F.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(Z,F,E);return}}else F.isExternalTexture&&(Z.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+E)}function G(F,E){const Z=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){q(Z,F,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+E)}function re(F,E){const Z=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){q(Z,F,E);return}t.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+E)}function K(F,E){const Z=n.get(F);if(F.version>0&&Z.__version!==F.version){$(Z,F,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+E)}const le={1e3:r.REPEAT,1001:r.CLAMP_TO_EDGE,1002:r.MIRRORED_REPEAT},xe={1003:r.NEAREST,1004:r.NEAREST_MIPMAP_NEAREST,1005:r.NEAREST_MIPMAP_LINEAR,1006:r.LINEAR,1007:r.LINEAR_MIPMAP_NEAREST,1008:r.LINEAR_MIPMAP_LINEAR},Te={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function ke(F,E){if(E.type===1015&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===1006||E.magFilter===1007||E.magFilter===1005||E.magFilter===1008||E.minFilter===1006||E.minFilter===1007||E.minFilter===1005||E.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,le[E.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,le[E.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,le[E.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,xe[E.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,xe[E.minFilter]),E.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,Te[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===1003||E.minFilter!==1005&&E.minFilter!==1008||E.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(F,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function tt(F,E){let Z=!1;F.__webglInit===void 0&&(F.__webglInit=!0,E.addEventListener("dispose",A));const ie=E.source;let ce=d.get(ie);ce===void 0&&(ce={},d.set(ie,ce));const te=H(E);if(te!==F.__cacheKey){ce[te]===void 0&&(ce[te]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),ce[te].usedTimes++;const Oe=ce[F.__cacheKey];Oe!==void 0&&(ce[F.__cacheKey].usedTimes--,Oe.usedTimes===0&&M(E)),F.__cacheKey=te,F.__webglTexture=ce[te].texture}return Z}function ue(F,E,Z){return Math.floor(Math.floor(F/Z)/E)}function pe(F,E,Z,ie){const te=F.updateRanges;if(te.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,Z,ie,E.data);else{te.sort((me,Se)=>me.start-Se.start);let Oe=0;for(let me=1;me<te.length;me++){const Se=te[Oe],Ue=te[me],Fe=Se.start+Se.count,Ee=ue(Ue.start,E.width,4),ze=ue(Se.start,E.width,4);Ue.start<=Fe+1&&Ee===ze&&ue(Ue.start+Ue.count-1,E.width,4)===Ee?Se.count=Math.max(Se.count,Ue.start+Ue.count-Se.start):(++Oe,te[Oe]=Ue)}te.length=Oe+1;const ve=r.getParameter(r.UNPACK_ROW_LENGTH),Ne=r.getParameter(r.UNPACK_SKIP_PIXELS),Be=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let me=0,Se=te.length;me<Se;me++){const Ue=te[me],Fe=Math.floor(Ue.start/4),Ee=Math.ceil(Ue.count/4),ze=Fe%E.width,z=Math.floor(Fe/E.width),ge=Ee,Q=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ze),r.pixelStorei(r.UNPACK_SKIP_ROWS,z),t.texSubImage2D(r.TEXTURE_2D,0,ze,z,ge,Q,Z,ie,E.data)}F.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ve),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ne),r.pixelStorei(r.UNPACK_SKIP_ROWS,Be)}}function q(F,E,Z){let ie=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=r.TEXTURE_3D);const ce=tt(F,E),te=E.source;t.bindTexture(ie,F.__webglTexture,r.TEXTURE0+Z);const Oe=n.get(te);if(te.version!==Oe.__version||ce===!0){t.activeTexture(r.TEXTURE0+Z);const ve=at.getPrimaries(at.workingColorSpace),Ne=E.colorSpace===""?null:at.getPrimaries(E.colorSpace),Be=E.colorSpace===""||ve===Ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let me=x(E.image,!1,i.maxTextureSize);me=Nt(E,me);const Se=s.convert(E.format,E.colorSpace),Ue=s.convert(E.type);let Fe=T(E.internalFormat,Se,Ue,E.colorSpace,E.isVideoTexture);ke(ie,E);let Ee;const ze=E.mipmaps,z=E.isVideoTexture!==!0,ge=Oe.__version===void 0||ce===!0,Q=te.dataReady,Ce=D(E,me);if(E.isDepthTexture)Fe=b(E.format===1027,E.type),ge&&(z?t.texStorage2D(r.TEXTURE_2D,1,Fe,me.width,me.height):t.texImage2D(r.TEXTURE_2D,0,Fe,me.width,me.height,0,Se,Ue,null));else if(E.isDataTexture)if(ze.length>0){z&&ge&&t.texStorage2D(r.TEXTURE_2D,Ce,Fe,ze[0].width,ze[0].height);for(let de=0,ae=ze.length;de<ae;de++)Ee=ze[de],z?Q&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,Ee.width,Ee.height,Se,Ue,Ee.data):t.texImage2D(r.TEXTURE_2D,de,Fe,Ee.width,Ee.height,0,Se,Ue,Ee.data);E.generateMipmaps=!1}else z?(ge&&t.texStorage2D(r.TEXTURE_2D,Ce,Fe,me.width,me.height),Q&&pe(E,me,Se,Ue)):t.texImage2D(r.TEXTURE_2D,0,Fe,me.width,me.height,0,Se,Ue,me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){z&&ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Fe,ze[0].width,ze[0].height,me.depth);for(let de=0,ae=ze.length;de<ae;de++)if(Ee=ze[de],E.format!==1023)if(Se!==null)if(z){if(Q)if(E.layerUpdates.size>0){const Ie=Al(Ee.width,Ee.height,E.format,E.type);for(const je of E.layerUpdates){const gt=Ee.data.subarray(je*Ie/Ee.data.BYTES_PER_ELEMENT,(je+1)*Ie/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,je,Ee.width,Ee.height,1,Se,gt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,me.depth,Se,Ee.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,de,Fe,Ee.width,Ee.height,me.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?Q&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,me.depth,Se,Ue,Ee.data):t.texImage3D(r.TEXTURE_2D_ARRAY,de,Fe,Ee.width,Ee.height,me.depth,0,Se,Ue,Ee.data)}else{z&&ge&&t.texStorage2D(r.TEXTURE_2D,Ce,Fe,ze[0].width,ze[0].height);for(let de=0,ae=ze.length;de<ae;de++)Ee=ze[de],E.format!==1023?Se!==null?z?Q&&t.compressedTexSubImage2D(r.TEXTURE_2D,de,0,0,Ee.width,Ee.height,Se,Ee.data):t.compressedTexImage2D(r.TEXTURE_2D,de,Fe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?Q&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,Ee.width,Ee.height,Se,Ue,Ee.data):t.texImage2D(r.TEXTURE_2D,de,Fe,Ee.width,Ee.height,0,Se,Ue,Ee.data)}else if(E.isDataArrayTexture)if(z){if(ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Fe,me.width,me.height,me.depth),Q)if(E.layerUpdates.size>0){const de=Al(me.width,me.height,E.format,E.type);for(const ae of E.layerUpdates){const Ie=me.data.subarray(ae*de/me.data.BYTES_PER_ELEMENT,(ae+1)*de/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ae,me.width,me.height,1,Se,Ue,Ie)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Se,Ue,me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,me.width,me.height,me.depth,0,Se,Ue,me.data);else if(E.isData3DTexture)z?(ge&&t.texStorage3D(r.TEXTURE_3D,Ce,Fe,me.width,me.height,me.depth),Q&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Se,Ue,me.data)):t.texImage3D(r.TEXTURE_3D,0,Fe,me.width,me.height,me.depth,0,Se,Ue,me.data);else if(E.isFramebufferTexture){if(ge)if(z)t.texStorage2D(r.TEXTURE_2D,Ce,Fe,me.width,me.height);else{let de=me.width,ae=me.height;for(let Ie=0;Ie<Ce;Ie++)t.texImage2D(r.TEXTURE_2D,Ie,Fe,de,ae,0,Se,Ue,null),de>>=1,ae>>=1}}else if(ze.length>0){if(z&&ge){const de=bt(ze[0]);t.texStorage2D(r.TEXTURE_2D,Ce,Fe,de.width,de.height)}for(let de=0,ae=ze.length;de<ae;de++)Ee=ze[de],z?Q&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,Se,Ue,Ee):t.texImage2D(r.TEXTURE_2D,de,Fe,Se,Ue,Ee);E.generateMipmaps=!1}else if(z){if(ge){const de=bt(me);t.texStorage2D(r.TEXTURE_2D,Ce,Fe,de.width,de.height)}Q&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Se,Ue,me)}else t.texImage2D(r.TEXTURE_2D,0,Fe,Se,Ue,me);g(E)&&m(ie),Oe.__version=te.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function $(F,E,Z){if(E.image.length!==6)return;const ie=tt(F,E),ce=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+Z);const te=n.get(ce);if(ce.version!==te.__version||ie===!0){t.activeTexture(r.TEXTURE0+Z);const Oe=at.getPrimaries(at.workingColorSpace),ve=E.colorSpace===""?null:at.getPrimaries(E.colorSpace),Ne=E.colorSpace===""||Oe===ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Be=E.isCompressedTexture||E.image[0].isCompressedTexture,me=E.image[0]&&E.image[0].isDataTexture,Se=[];for(let ae=0;ae<6;ae++)!Be&&!me?Se[ae]=x(E.image[ae],!0,i.maxCubemapSize):Se[ae]=me?E.image[ae].image:E.image[ae],Se[ae]=Nt(E,Se[ae]);const Ue=Se[0],Fe=s.convert(E.format,E.colorSpace),Ee=s.convert(E.type),ze=T(E.internalFormat,Fe,Ee,E.colorSpace),z=E.isVideoTexture!==!0,ge=te.__version===void 0||ie===!0,Q=ce.dataReady;let Ce=D(E,Ue);ke(r.TEXTURE_CUBE_MAP,E);let de;if(Be){z&&ge&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,ze,Ue.width,Ue.height);for(let ae=0;ae<6;ae++){de=Se[ae].mipmaps;for(let Ie=0;Ie<de.length;Ie++){const je=de[Ie];E.format!==1023?Fe!==null?z?Q&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie,0,0,je.width,je.height,Fe,je.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie,ze,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie,0,0,je.width,je.height,Fe,Ee,je.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie,ze,je.width,je.height,0,Fe,Ee,je.data)}}}else{if(de=E.mipmaps,z&&ge){de.length>0&&Ce++;const ae=bt(Se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,ze,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(me){z?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Se[ae].width,Se[ae].height,Fe,Ee,Se[ae].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ze,Se[ae].width,Se[ae].height,0,Fe,Ee,Se[ae].data);for(let Ie=0;Ie<de.length;Ie++){const gt=de[Ie].image[ae].image;z?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie+1,0,0,gt.width,gt.height,Fe,Ee,gt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie+1,ze,gt.width,gt.height,0,Fe,Ee,gt.data)}}else{z?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Fe,Ee,Se[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ze,Fe,Ee,Se[ae]);for(let Ie=0;Ie<de.length;Ie++){const je=de[Ie];z?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie+1,0,0,Fe,Ee,je.image[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie+1,ze,Fe,Ee,je.image[ae])}}}g(E)&&m(r.TEXTURE_CUBE_MAP),te.__version=ce.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function se(F,E,Z,ie,ce,te){const Oe=s.convert(Z.format,Z.colorSpace),ve=s.convert(Z.type),Ne=T(Z.internalFormat,Oe,ve,Z.colorSpace),Be=n.get(E),me=n.get(Z);if(me.__renderTarget=E,!Be.__hasExternalTextures){const Se=Math.max(1,E.width>>te),Ue=Math.max(1,E.height>>te);ce===r.TEXTURE_3D||ce===r.TEXTURE_2D_ARRAY?t.texImage3D(ce,te,Ne,Se,Ue,E.depth,0,Oe,ve,null):t.texImage2D(ce,te,Ne,Se,Ue,0,Oe,ve,null)}t.bindFramebuffer(r.FRAMEBUFFER,F),De(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,ce,me.__webglTexture,0,xt(E)):(ce===r.TEXTURE_2D||ce>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ie,ce,me.__webglTexture,te),t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(F,E,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,F),E.depthBuffer){const ie=E.depthTexture,ce=ie&&ie.isDepthTexture?ie.type:null,te=b(E.stencilBuffer,ce),Oe=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=xt(E);De(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ve,te,E.width,E.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,ve,te,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,te,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Oe,r.RENDERBUFFER,F)}else{const ie=E.textures;for(let ce=0;ce<ie.length;ce++){const te=ie[ce],Oe=s.convert(te.format,te.colorSpace),ve=s.convert(te.type),Ne=T(te.internalFormat,Oe,ve,te.colorSpace),Be=xt(E);Z&&De(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Be,Ne,E.width,E.height):De(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Be,Ne,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ne,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function _e(F,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,F),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=n.get(E.depthTexture);ie.__renderTarget=E,(!ie.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const ce=ie.__webglTexture,te=xt(E);if(E.depthTexture.format===1026)De(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ce,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ce,0);else if(E.depthTexture.format===1027)De(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ce,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Ge(F){const E=n.get(F),Z=F.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==F.depthTexture){const ie=F.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ie){const ce=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ie.removeEventListener("dispose",ce)};ie.addEventListener("dispose",ce),E.__depthDisposeCallback=ce}E.__boundDepthTexture=ie}if(F.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");const ie=F.texture.mipmaps;ie&&ie.length>0?_e(E.__webglFramebuffer[0],F):_e(E.__webglFramebuffer,F)}else if(Z){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]===void 0)E.__webglDepthbuffer[ie]=r.createRenderbuffer(),we(E.__webglDepthbuffer[ie],F,!1);else{const ce=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer[ie];r.bindRenderbuffer(r.RENDERBUFFER,te),r.framebufferRenderbuffer(r.FRAMEBUFFER,ce,r.RENDERBUFFER,te)}}else{const ie=F.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),we(E.__webglDepthbuffer,F,!1);else{const ce=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,te),r.framebufferRenderbuffer(r.FRAMEBUFFER,ce,r.RENDERBUFFER,te)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function vt(F,E,Z){const ie=n.get(F);E!==void 0&&se(ie.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&Ge(F)}function B(F){const E=F.texture,Z=n.get(F),ie=n.get(E);F.addEventListener("dispose",C);const ce=F.textures,te=F.isWebGLCubeRenderTarget===!0,Oe=ce.length>1;if(Oe||(ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture()),ie.__version=E.version,a.memory.textures++),te){Z.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[ve]=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)Z.__webglFramebuffer[ve][Ne]=r.createFramebuffer()}else Z.__webglFramebuffer[ve]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ve=0;ve<E.mipmaps.length;ve++)Z.__webglFramebuffer[ve]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(Oe)for(let ve=0,Ne=ce.length;ve<Ne;ve++){const Be=n.get(ce[ve]);Be.__webglTexture===void 0&&(Be.__webglTexture=r.createTexture(),a.memory.textures++)}if(F.samples>0&&De(F)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ve=0;ve<ce.length;ve++){const Ne=ce[ve];Z.__webglColorRenderbuffer[ve]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[ve]);const Be=s.convert(Ne.format,Ne.colorSpace),me=s.convert(Ne.type),Se=T(Ne.internalFormat,Be,me,Ne.colorSpace,F.isXRRenderTarget===!0),Ue=xt(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,Se,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,Z.__webglColorRenderbuffer[ve])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),we(Z.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(te){t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture),ke(r.TEXTURE_CUBE_MAP,E);for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)se(Z.__webglFramebuffer[ve][Ne],F,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ne);else se(Z.__webglFramebuffer[ve],F,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);g(E)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let ve=0,Ne=ce.length;ve<Ne;ve++){const Be=ce[ve],me=n.get(Be);let Se=r.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Se=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Se,me.__webglTexture),ke(Se,Be),se(Z.__webglFramebuffer,F,Be,r.COLOR_ATTACHMENT0+ve,Se,0),g(Be)&&m(Se)}t.unbindTexture()}else{let ve=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ve=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ve,ie.__webglTexture),ke(ve,E),E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)se(Z.__webglFramebuffer[Ne],F,E,r.COLOR_ATTACHMENT0,ve,Ne);else se(Z.__webglFramebuffer,F,E,r.COLOR_ATTACHMENT0,ve,0);g(E)&&m(ve),t.unbindTexture()}F.depthBuffer&&Ge(F)}function ot(F){const E=F.textures;for(let Z=0,ie=E.length;Z<ie;Z++){const ce=E[Z];if(g(ce)){const te=w(F),Oe=n.get(ce).__webglTexture;t.bindTexture(te,Oe),m(te),t.unbindTexture()}}}const Ke=[],Xe=[];function Le(F){if(F.samples>0){if(De(F)===!1){const E=F.textures,Z=F.width,ie=F.height;let ce=r.COLOR_BUFFER_BIT;const te=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=n.get(F),ve=E.length>1;if(ve)for(let Be=0;Be<E.length;Be++)t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const Ne=F.texture.mipmaps;Ne&&Ne.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Be=0;Be<E.length;Be++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ce|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ce|=r.STENCIL_BUFFER_BIT)),ve){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Be]);const me=n.get(E[Be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,me,0)}r.blitFramebuffer(0,0,Z,ie,0,0,Z,ie,ce,r.NEAREST),l===!0&&(Ke.length=0,Xe.length=0,Ke.push(r.COLOR_ATTACHMENT0+Be),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Ke.push(te),Xe.push(te),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Xe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ve)for(let Be=0;Be<E.length;Be++){t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Be]);const me=n.get(E[Be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.TEXTURE_2D,me,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){const E=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function xt(F){return Math.min(i.maxSamples,F.samples)}function De(F){const E=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ze(F){const E=a.render.frame;h.get(F)!==E&&(h.set(F,E),F.update())}function Nt(F,E){const Z=F.colorSpace,ie=F.format,ce=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Z!==Rt&&Z!==""&&(at.getTransfer(Z)===dt?(ie!==1023||ce!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}function bt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=O,this.setTexture2D=Y,this.setTexture2DArray=G,this.setTexture3D=re,this.setTextureCube=K,this.rebindTextures=vt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=se,this.useMultisampledRTT=De}function ug(r,e){function t(n,i=""){let s;const a=at.getTransfer(i);if(n===1009)return r.UNSIGNED_BYTE;if(n===1017)return r.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return r.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return r.BYTE;if(n===1011)return r.SHORT;if(n===1012)return r.UNSIGNED_SHORT;if(n===1013)return r.INT;if(n===1014)return r.UNSIGNED_INT;if(n===1015)return r.FLOAT;if(n===1016)return r.HALF_FLOAT;if(n===1021)return r.ALPHA;if(n===1022)return r.RGB;if(n===1023)return r.RGBA;if(n===1026)return r.DEPTH_COMPONENT;if(n===1027)return r.DEPTH_STENCIL;if(n===1028)return r.RED;if(n===1029)return r.RED_INTEGER;if(n===1030)return r.RG;if(n===1031)return r.RG_INTEGER;if(n===1033)return r.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const hg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new wc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Dt({vertexShader:hg,fragmentShader:dg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yt(new Rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pg extends lr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,v=null;const x=typeof XRWebGLBinding<"u",g=new fg,m={},w=t.getContextAttributes();let T=null,b=null;const D=[],A=[],C=new be;let N=null;const M=new $t;M.viewport=new ht;const S=new $t;S.viewport=new ht;const I=[M,S],O=new bh;let W=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let $=D[q];return $===void 0&&($=new Ea,D[q]=$),$.getTargetRaySpace()},this.getControllerGrip=function(q){let $=D[q];return $===void 0&&($=new Ea,D[q]=$),$.getGripSpace()},this.getHand=function(q){let $=D[q];return $===void 0&&($=new Ea,D[q]=$),$.getHandSpace()};function Y(q){const $=A.indexOf(q.inputSource);if($===-1)return;const se=D[$];se!==void 0&&(se.update(q.inputSource,q.frame,c||a),se.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",re);for(let q=0;q<D.length;q++){const $=A[q];$!==null&&(A[q]=null,D[q].disconnect($))}W=null,H=null,g.reset();for(const q in m)delete m[q];e.setRenderTarget(T),f=null,d=null,u=null,i=null,b=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",G),i.addEventListener("inputsourceschange",re),w.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,we=null,_e=null;w.depth&&(_e=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=w.stencil?1027:1026,we=w.stencil?1020:1014);const Ge={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ge),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Vt(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new bc(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const se={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Vt(f.framebufferWidth,f.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),pe.setContext(i),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function re(q){for(let $=0;$<q.removed.length;$++){const se=q.removed[$],we=A.indexOf(se);we>=0&&(A[we]=null,D[we].disconnect(se))}for(let $=0;$<q.added.length;$++){const se=q.added[$];let we=A.indexOf(se);if(we===-1){for(let Ge=0;Ge<D.length;Ge++)if(Ge>=A.length){A.push(se),we=Ge;break}else if(A[Ge]===null){A[Ge]=se,we=Ge;break}if(we===-1)break}const _e=D[we];_e&&_e.connect(se)}}const K=new k,le=new k;function xe(q,$,se){K.setFromMatrixPosition($.matrixWorld),le.setFromMatrixPosition(se.matrixWorld);const we=K.distanceTo(le),_e=$.projectionMatrix.elements,Ge=se.projectionMatrix.elements,vt=_e[14]/(_e[10]-1),B=_e[14]/(_e[10]+1),ot=(_e[9]+1)/_e[5],Ke=(_e[9]-1)/_e[5],Xe=(_e[8]-1)/_e[0],Le=(Ge[8]+1)/Ge[0],xt=vt*Xe,De=vt*Le,Ze=we/(-Xe+Le),Nt=Ze*-Xe;if($.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Nt),q.translateZ(Ze),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),_e[10]===-1)q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const bt=vt+Ze,F=B+Ze,E=xt-Nt,Z=De+(we-Nt),ie=ot*B/F*bt,ce=Ke*B/F*bt;q.projectionMatrix.makePerspective(E,Z,ie,ce,bt,F),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Te(q,$){$===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices($.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let $=q.near,se=q.far;g.texture!==null&&(g.depthNear>0&&($=g.depthNear),g.depthFar>0&&(se=g.depthFar)),O.near=S.near=M.near=$,O.far=S.far=M.far=se,(W!==O.near||H!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),W=O.near,H=O.far),O.layers.mask=q.layers.mask|6,M.layers.mask=O.layers.mask&3,S.layers.mask=O.layers.mask&5;const we=q.parent,_e=O.cameras;Te(O,we);for(let Ge=0;Ge<_e.length;Ge++)Te(_e[Ge],we);_e.length===2?xe(O,M,S):O.projectionMatrix.copy(M.projectionMatrix),ke(q,O,we)};function ke(q,$,se){se===null?q.matrix.copy($.matrixWorld):(q.matrix.copy(se.matrixWorld),q.matrix.invert(),q.matrix.multiply($.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ji*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(q){return m[q]};let tt=null;function ue(q,$){if(h=$.getViewerPose(c||a),v=$,h!==null){const se=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let we=!1;se.length!==O.cameras.length&&(O.cameras.length=0,we=!0);for(let B=0;B<se.length;B++){const ot=se[B];let Ke=null;if(f!==null)Ke=f.getViewport(ot);else{const Le=u.getViewSubImage(d,ot);Ke=Le.viewport,B===0&&(e.setRenderTargetTextures(b,Le.colorTexture,Le.depthStencilTexture),e.setRenderTarget(b))}let Xe=I[B];Xe===void 0&&(Xe=new $t,Xe.layers.enable(B),Xe.viewport=new ht,I[B]=Xe),Xe.matrix.fromArray(ot.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(ot.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),B===0&&(O.matrix.copy(Xe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),we===!0&&O.cameras.push(Xe)}const _e=i.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const B=u.getDepthInformation(se[0]);B&&B.isValid&&B.texture&&g.init(B,i.renderState)}if(_e&&_e.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let B=0;B<se.length;B++){const ot=se[B].camera;if(ot){let Ke=m[ot];Ke||(Ke=new wc,m[ot]=Ke);const Xe=u.getCameraImage(ot);Ke.sourceTexture=Xe}}}}for(let se=0;se<D.length;se++){const we=A[se],_e=D[se];we!==null&&_e!==void 0&&_e.update(we,$,c||a)}tt&&tt(q,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),v=null}const pe=new Lc;pe.setAnimationLoop(ue),this.setAnimationLoop=function(q){tt=q},this.dispose=function(){}}}const gi=new Bn,mg=new $e;function gg(r,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,gc(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,w,T,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,b)):m.isMeshMatcapMaterial?(s(g,m),v(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,w,T):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===1&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===1&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const w=e.get(m),T=w.envMap,b=w.envMapRotation;T&&(g.envMap.value=T,gi.copy(b),gi.x*=-1,gi.y*=-1,gi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),g.envMapRotation.value.setFromMatrix4(mg.makeRotationFromEuler(gi)),g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,w,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=T*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,w){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===1&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const w=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function _g(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,T){const b=T.program;n.uniformBlockBinding(w,b)}function c(w,T){let b=i[w.id];b===void 0&&(v(w),b=h(w),i[w.id]=b,w.addEventListener("dispose",g));const D=T.program;n.updateUBOMapping(w,D);const A=e.render.frame;s[w.id]!==A&&(d(w),s[w.id]=A)}function h(w){const T=u();w.__bindingPointIndex=T;const b=r.createBuffer(),D=w.__size,A=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,D,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,b),b}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const T=i[w.id],b=w.uniforms,D=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let A=0,C=b.length;A<C;A++){const N=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,S=N.length;M<S;M++){const I=N[M];if(f(I,A,M,D)===!0){const O=I.__offset,W=Array.isArray(I.value)?I.value:[I.value];let H=0;for(let Y=0;Y<W.length;Y++){const G=W[Y],re=x(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,O+H,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,H),H+=re.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(w,T,b,D){const A=w.value,C=T+"_"+b;if(D[C]===void 0)return typeof A=="number"||typeof A=="boolean"?D[C]=A:D[C]=A.clone(),!0;{const N=D[C];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return D[C]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function v(w){const T=w.uniforms;let b=0;const D=16;for(let C=0,N=T.length;C<N;C++){const M=Array.isArray(T[C])?T[C]:[T[C]];for(let S=0,I=M.length;S<I;S++){const O=M[S],W=Array.isArray(O.value)?O.value:[O.value];for(let H=0,Y=W.length;H<Y;H++){const G=W[H],re=x(G),K=b%D,le=K%re.boundary,xe=K+le;b+=le,xe!==0&&D-xe<re.storage&&(b+=D-xe),O.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=re.storage}}}const A=b%D;return A>0&&(b+=D-A),w.__size=b,w.__cache={},this}function x(w){const T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),T}function g(w){const T=w.target;T.removeEventListener("dispose",g);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function m(){for(const w in i)r.deleteBuffer(i[w]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}class vg{constructor(e={}){const{canvas:t=yu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const v=new Uint32Array(4),x=new Int32Array(4);let g=null,m=null;const w=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let D=!1;this._outputColorSpace=Tt;let A=0,C=0,N=null,M=-1,S=null;const I=new ht,O=new ht;let W=null;const H=new Pe(0);let Y=0,G=t.width,re=t.height,K=1,le=null,xe=null;const Te=new ht(0,0,G,re),ke=new ht(0,0,G,re);let tt=!1;const ue=new fo;let pe=!1,q=!1;const $=new $e,se=new k,we=new ht,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function vt(){return N===null?K:1}let B=n;function ot(p,y){return t.getContext(p,y)}try{const p={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r180"),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",de,!1),B===null){const y="webgl2";if(B=ot(y,p),B===null)throw ot(y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(p){throw console.error("THREE.WebGLRenderer: "+p.message),p}let Ke,Xe,Le,xt,De,Ze,Nt,bt,F,E,Z,ie,ce,te,Oe,ve,Ne,Be,me,Se,Ue,Fe,Ee,ze;function z(){Ke=new Rp(B),Ke.init(),Fe=new ug(B,Ke),Xe=new Mp(B,Ke,e,Fe),Le=new lg(B,Ke),Xe.reversedDepthBuffer&&d&&Le.buffers.depth.setReversed(!0),xt=new Dp(B),De=new jm,Ze=new cg(B,Ke,Le,De,Xe,Fe,xt),Nt=new Tp(b),bt=new Ap(b),F=new Fh(B),Ee=new xp(B,F),E=new Cp(B,F,xt,Ee),Z=new Lp(B,E,F,xt),me=new Ip(B,Xe,Ze),ve=new Sp(De),ie=new Km(b,Nt,bt,Ke,Xe,Ee,ve),ce=new gg(b,De),te=new $m,Oe=new ig(Ke),Be=new vp(b,Nt,bt,Le,Z,f,l),Ne=new ag(b,Z,Xe),ze=new _g(B,xt,Xe,Le),Se=new yp(B,Ke,xt),Ue=new Pp(B,Ke,xt),xt.programs=ie.programs,b.capabilities=Xe,b.extensions=Ke,b.properties=De,b.renderLists=te,b.shadowMap=Ne,b.state=Le,b.info=xt}z();const ge=new pg(b,B);this.xr=ge,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const p=Ke.get("WEBGL_lose_context");p&&p.loseContext()},this.forceContextRestore=function(){const p=Ke.get("WEBGL_lose_context");p&&p.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(p){p!==void 0&&(K=p,this.setSize(G,re,!1))},this.getSize=function(p){return p.set(G,re)},this.setSize=function(p,y,R=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=p,re=y,t.width=Math.floor(p*K),t.height=Math.floor(y*K),R===!0&&(t.style.width=p+"px",t.style.height=y+"px"),this.setViewport(0,0,p,y)},this.getDrawingBufferSize=function(p){return p.set(G*K,re*K).floor()},this.setDrawingBufferSize=function(p,y,R){G=p,re=y,K=R,t.width=Math.floor(p*R),t.height=Math.floor(y*R),this.setViewport(0,0,p,y)},this.getCurrentViewport=function(p){return p.copy(I)},this.getViewport=function(p){return p.copy(Te)},this.setViewport=function(p,y,R,L){p.isVector4?Te.set(p.x,p.y,p.z,p.w):Te.set(p,y,R,L),Le.viewport(I.copy(Te).multiplyScalar(K).round())},this.getScissor=function(p){return p.copy(ke)},this.setScissor=function(p,y,R,L){p.isVector4?ke.set(p.x,p.y,p.z,p.w):ke.set(p,y,R,L),Le.scissor(O.copy(ke).multiplyScalar(K).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(p){Le.setScissorTest(tt=p)},this.setOpaqueSort=function(p){le=p},this.setTransparentSort=function(p){xe=p},this.getClearColor=function(p){return p.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(p=!0,y=!0,R=!0){let L=0;if(p){let U=!1;if(N!==null){const P=N.texture.format;U=P===1033||P===1031||P===1029}if(U){const P=N.texture.type,j=P===1009||P===1014||P===1012||P===1020||P===1017||P===1018,X=Be.getClearColor(),V=Be.getClearAlpha(),J=X.r,ne=X.g,ee=X.b;j?(v[0]=J,v[1]=ne,v[2]=ee,v[3]=V,B.clearBufferuiv(B.COLOR,0,v)):(x[0]=J,x[1]=ne,x[2]=ee,x[3]=V,B.clearBufferiv(B.COLOR,0,x))}else L|=B.COLOR_BUFFER_BIT}y&&(L|=B.DEPTH_BUFFER_BIT),R&&(L|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Be.dispose(),te.dispose(),Oe.dispose(),De.dispose(),Nt.dispose(),bt.dispose(),Z.dispose(),Ee.dispose(),ze.dispose(),ie.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",ln),ge.removeEventListener("sessionend",Yr),kn.stop()};function Q(p){p.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const p=xt.autoReset,y=Ne.enabled,R=Ne.autoUpdate,L=Ne.needsUpdate,U=Ne.type;z(),xt.autoReset=p,Ne.enabled=y,Ne.autoUpdate=R,Ne.needsUpdate=L,Ne.type=U}function de(p){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",p.statusMessage)}function ae(p){const y=p.target;y.removeEventListener("dispose",ae),Ie(y)}function Ie(p){je(p),De.remove(p)}function je(p){const y=De.get(p).programs;y!==void 0&&(y.forEach(function(R){ie.releaseProgram(R)}),p.isShaderMaterial&&ie.releaseShaderCache(p))}this.renderBufferDirect=function(p,y,R,L,U,P){y===null&&(y=_e);const j=U.isMesh&&U.matrixWorld.determinant()<0,X=Qr(p,y,R,L,U);Le.setMaterial(L,j);let V=R.index,J=1;if(L.wireframe===!0){if(V=E.getWireframeAttribute(R),V===void 0)return;J=2}const ne=R.drawRange,ee=R.attributes.position;let oe=ne.start*J,ye=(ne.start+ne.count)*J;P!==null&&(oe=Math.max(oe,P.start*J),ye=Math.min(ye,(P.start+P.count)*J)),V!==null?(oe=Math.max(oe,0),ye=Math.min(ye,V.count)):ee!=null&&(oe=Math.max(oe,0),ye=Math.min(ye,ee.count));const he=ye-oe;if(he<0||he===1/0)return;Ee.setup(U,L,X,R,V);let fe,Ae=Se;if(V!==null&&(fe=F.get(V),Ae=Ue,Ae.setIndex(fe)),U.isMesh)L.wireframe===!0?(Le.setLineWidth(L.wireframeLinewidth*vt()),Ae.setMode(B.LINES)):Ae.setMode(B.TRIANGLES);else if(U.isLine){let Me=L.linewidth;Me===void 0&&(Me=1),Le.setLineWidth(Me*vt()),U.isLineSegments?Ae.setMode(B.LINES):U.isLineLoop?Ae.setMode(B.LINE_LOOP):Ae.setMode(B.LINE_STRIP)}else U.isPoints?Ae.setMode(B.POINTS):U.isSprite&&Ae.setMode(B.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Nr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ae.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))Ae.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Me=U._multiDrawStarts,Ve=U._multiDrawCounts,He=U._multiDrawCount,Je=V?F.get(V).bytesPerElement:1,We=De.get(L).currentProgram.getUniforms();for(let rt=0;rt<He;rt++)We.setValue(B,"_gl_DrawID",rt),Ae.render(Me[rt]/Je,Ve[rt])}else if(U.isInstancedMesh)Ae.renderInstances(oe,he,U.count);else if(R.isInstancedBufferGeometry){const Me=R._maxInstanceCount!==void 0?R._maxInstanceCount:1/0,Ve=Math.min(R.instanceCount,Me);Ae.renderInstances(oe,he,Ve)}else Ae.render(oe,he)};function gt(p,y,R){p.transparent===!0&&p.side===2&&p.forceSinglePass===!1?(p.side=1,p.needsUpdate=!0,wi(p,y,R),p.side=0,p.needsUpdate=!0,wi(p,y,R),p.side=2):wi(p,y,R)}this.compile=function(p,y,R=null){R===null&&(R=p),m=Oe.get(R),m.init(y),T.push(m),R.traverseVisible(function(U){U.isLight&&U.layers.test(y.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),p!==R&&p.traverseVisible(function(U){U.isLight&&U.layers.test(y.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const L=new Set;return p.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const P=U.material;if(P)if(Array.isArray(P))for(let j=0;j<P.length;j++){const X=P[j];gt(X,R,U),L.add(X)}else gt(P,R,U),L.add(P)}),m=T.pop(),L},this.compileAsync=function(p,y,R=null){const L=this.compile(p,y,R);return new Promise(U=>{function P(){if(L.forEach(function(j){De.get(j).currentProgram.isReady()&&L.delete(j)}),L.size===0){U(p);return}setTimeout(P,10)}Ke.get("KHR_parallel_shader_compile")!==null?P():setTimeout(P,10)})};let lt=null;function gn(p){lt&&lt(p)}function ln(){kn.stop()}function Yr(){kn.start()}const kn=new Lc;kn.setAnimationLoop(gn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(p){lt=p,ge.setAnimationLoop(p),p===null?kn.stop():kn.start()},ge.addEventListener("sessionstart",ln),ge.addEventListener("sessionend",Yr),this.render=function(p,y){if(y!==void 0&&y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(y),y=ge.getCamera()),p.isScene===!0&&p.onBeforeRender(b,p,y,N),m=Oe.get(p,T.length),m.init(y),T.push(m),$.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),ue.setFromProjectionMatrix($,2e3,y.reversedDepth),q=this.localClippingEnabled,pe=ve.init(this.clippingPlanes,q),g=te.get(p,w.length),g.init(),w.push(g),ge.enabled===!0&&ge.isPresenting===!0){const P=b.xr.getDepthSensingMesh();P!==null&&pr(P,y,-1/0,b.sortObjects)}pr(p,y,0,b.sortObjects),g.finish(),b.sortObjects===!0&&g.sort(le,xe),Ge=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,Ge&&Be.addToRenderList(g,p),this.info.render.frame++,pe===!0&&ve.beginShadows();const R=m.state.shadowsArray;Ne.render(R,p,y),pe===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const L=g.opaque,U=g.transmissive;if(m.setupLights(),y.isArrayCamera){const P=y.cameras;if(U.length>0)for(let j=0,X=P.length;j<X;j++){const V=P[j];jr(L,U,p,V)}Ge&&Be.render(p);for(let j=0,X=P.length;j<X;j++){const V=P[j];Kr(g,p,V,V.viewport)}}else U.length>0&&jr(L,U,p,y),Ge&&Be.render(p),Kr(g,p,y);N!==null&&C===0&&(Ze.updateMultisampleRenderTarget(N),Ze.updateRenderTargetMipmap(N)),p.isScene===!0&&p.onAfterRender(b,p,y),Ee.resetDefaultState(),M=-1,S=null,T.pop(),T.length>0?(m=T[T.length-1],pe===!0&&ve.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function pr(p,y,R,L){if(p.visible===!1)return;if(p.layers.test(y.layers)){if(p.isGroup)R=p.renderOrder;else if(p.isLOD)p.autoUpdate===!0&&p.update(y);else if(p.isLight)m.pushLight(p),p.castShadow&&m.pushShadow(p);else if(p.isSprite){if(!p.frustumCulled||ue.intersectsSprite(p)){L&&we.setFromMatrixPosition(p.matrixWorld).applyMatrix4($);const j=Z.update(p),X=p.material;X.visible&&g.push(p,j,X,R,we.z,null)}}else if((p.isMesh||p.isLine||p.isPoints)&&(!p.frustumCulled||ue.intersectsObject(p))){const j=Z.update(p),X=p.material;if(L&&(p.boundingSphere!==void 0?(p.boundingSphere===null&&p.computeBoundingSphere(),we.copy(p.boundingSphere.center)):(j.boundingSphere===null&&j.computeBoundingSphere(),we.copy(j.boundingSphere.center)),we.applyMatrix4(p.matrixWorld).applyMatrix4($)),Array.isArray(X)){const V=j.groups;for(let J=0,ne=V.length;J<ne;J++){const ee=V[J],oe=X[ee.materialIndex];oe&&oe.visible&&g.push(p,j,oe,R,we.z,ee)}}else X.visible&&g.push(p,j,X,R,we.z,null)}}const P=p.children;for(let j=0,X=P.length;j<X;j++)pr(P[j],y,R,L)}function Kr(p,y,R,L){const U=p.opaque,P=p.transmissive,j=p.transparent;m.setupLightsView(R),pe===!0&&ve.setGlobalState(b.clippingPlanes,R),L&&Le.viewport(I.copy(L)),U.length>0&&ui(U,y,R),P.length>0&&ui(P,y,R),j.length>0&&ui(j,y,R),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function jr(p,y,R,L){if((R.isScene===!0?R.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[L.id]===void 0&&(m.state.transmissionRenderTarget[L.id]=new Vt(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const P=m.state.transmissionRenderTarget[L.id],j=L.viewport||I;P.setSize(j.z*b.transmissionResolutionScale,j.w*b.transmissionResolutionScale);const X=b.getRenderTarget(),V=b.getActiveCubeFace(),J=b.getActiveMipmapLevel();b.setRenderTarget(P),b.getClearColor(H),Y=b.getClearAlpha(),Y<1&&b.setClearColor(16777215,.5),b.clear(),Ge&&Be.render(R);const ne=b.toneMapping;b.toneMapping=0;const ee=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),m.setupLightsView(L),pe===!0&&ve.setGlobalState(b.clippingPlanes,L),ui(p,R,L),Ze.updateMultisampleRenderTarget(P),Ze.updateRenderTargetMipmap(P),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let ye=0,he=y.length;ye<he;ye++){const fe=y[ye],Ae=fe.object,Me=fe.geometry,Ve=fe.material,He=fe.group;if(Ve.side===2&&Ae.layers.test(L.layers)){const Je=Ve.side;Ve.side=1,Ve.needsUpdate=!0,Zr(Ae,R,L,Me,Ve,He),Ve.side=Je,Ve.needsUpdate=!0,oe=!0}}oe===!0&&(Ze.updateMultisampleRenderTarget(P),Ze.updateRenderTargetMipmap(P))}b.setRenderTarget(X,V,J),b.setClearColor(H,Y),ee!==void 0&&(L.viewport=ee),b.toneMapping=ne}function ui(p,y,R){const L=y.isScene===!0?y.overrideMaterial:null;for(let U=0,P=p.length;U<P;U++){const j=p[U],X=j.object,V=j.geometry,J=j.group;let ne=j.material;ne.allowOverride===!0&&L!==null&&(ne=L),X.layers.test(R.layers)&&Zr(X,y,R,V,ne,J)}}function Zr(p,y,R,L,U,P){p.onBeforeRender(b,y,R,L,U,P),p.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,p.matrixWorld),p.normalMatrix.getNormalMatrix(p.modelViewMatrix),U.onBeforeRender(b,y,R,L,p,P),U.transparent===!0&&U.side===2&&U.forceSinglePass===!1?(U.side=1,U.needsUpdate=!0,b.renderBufferDirect(R,y,L,U,p,P),U.side=0,U.needsUpdate=!0,b.renderBufferDirect(R,y,L,U,p,P),U.side=2):b.renderBufferDirect(R,y,L,U,p,P),p.onAfterRender(b,y,R,L,U,P)}function wi(p,y,R){y.isScene!==!0&&(y=_e);const L=De.get(p),U=m.state.lights,P=m.state.shadowsArray,j=U.state.version,X=ie.getParameters(p,U.state,P,y,R),V=ie.getProgramCacheKey(X);let J=L.programs;L.environment=p.isMeshStandardMaterial?y.environment:null,L.fog=y.fog,L.envMap=(p.isMeshStandardMaterial?bt:Nt).get(p.envMap||L.environment),L.envMapRotation=L.environment!==null&&p.envMap===null?y.environmentRotation:p.envMapRotation,J===void 0&&(p.addEventListener("dispose",ae),J=new Map,L.programs=J);let ne=J.get(V);if(ne!==void 0){if(L.currentProgram===ne&&L.lightsStateVersion===j)return Jr(p,X),ne}else X.uniforms=ie.getUniforms(p),p.onBeforeCompile(X,b),ne=ie.acquireProgram(X,V),J.set(V,ne),L.uniforms=X.uniforms;const ee=L.uniforms;return(!p.isShaderMaterial&&!p.isRawShaderMaterial||p.clipping===!0)&&(ee.clippingPlanes=ve.uniform),Jr(p,X),L.needsLights=ia(p),L.lightsStateVersion=j,L.needsLights&&(ee.ambientLightColor.value=U.state.ambient,ee.lightProbe.value=U.state.probe,ee.directionalLights.value=U.state.directional,ee.directionalLightShadows.value=U.state.directionalShadow,ee.spotLights.value=U.state.spot,ee.spotLightShadows.value=U.state.spotShadow,ee.rectAreaLights.value=U.state.rectArea,ee.ltc_1.value=U.state.rectAreaLTC1,ee.ltc_2.value=U.state.rectAreaLTC2,ee.pointLights.value=U.state.point,ee.pointLightShadows.value=U.state.pointShadow,ee.hemisphereLights.value=U.state.hemi,ee.directionalShadowMap.value=U.state.directionalShadowMap,ee.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ee.spotShadowMap.value=U.state.spotShadowMap,ee.spotLightMatrix.value=U.state.spotLightMatrix,ee.spotLightMap.value=U.state.spotLightMap,ee.pointShadowMap.value=U.state.pointShadowMap,ee.pointShadowMatrix.value=U.state.pointShadowMatrix),L.currentProgram=ne,L.uniformsList=null,ne}function $r(p){if(p.uniformsList===null){const y=p.currentProgram.getUniforms();p.uniformsList=Os.seqWithValue(y.seq,p.uniforms)}return p.uniformsList}function Jr(p,y){const R=De.get(p);R.outputColorSpace=y.outputColorSpace,R.batching=y.batching,R.batchingColor=y.batchingColor,R.instancing=y.instancing,R.instancingColor=y.instancingColor,R.instancingMorph=y.instancingMorph,R.skinning=y.skinning,R.morphTargets=y.morphTargets,R.morphNormals=y.morphNormals,R.morphColors=y.morphColors,R.morphTargetsCount=y.morphTargetsCount,R.numClippingPlanes=y.numClippingPlanes,R.numIntersection=y.numClipIntersection,R.vertexAlphas=y.vertexAlphas,R.vertexTangents=y.vertexTangents,R.toneMapping=y.toneMapping}function Qr(p,y,R,L,U){y.isScene!==!0&&(y=_e),Ze.resetTextureUnits();const P=y.fog,j=L.isMeshStandardMaterial?y.environment:null,X=N===null?b.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Rt,V=(L.isMeshStandardMaterial?bt:Nt).get(L.envMap||j),J=L.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,ne=!!R.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),ee=!!R.morphAttributes.position,oe=!!R.morphAttributes.normal,ye=!!R.morphAttributes.color;let he=0;L.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(he=b.toneMapping);const fe=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Ae=fe!==void 0?fe.length:0,Me=De.get(L),Ve=m.state.lights;if(pe===!0&&(q===!0||p!==S)){const St=p===S&&L.id===M;ve.setState(L,p,St)}let He=!1;L.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Ve.state.version||Me.outputColorSpace!==X||U.isBatchedMesh&&Me.batching===!1||!U.isBatchedMesh&&Me.batching===!0||U.isBatchedMesh&&Me.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Me.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Me.instancing===!1||!U.isInstancedMesh&&Me.instancing===!0||U.isSkinnedMesh&&Me.skinning===!1||!U.isSkinnedMesh&&Me.skinning===!0||U.isInstancedMesh&&Me.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Me.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Me.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Me.instancingMorph===!1&&U.morphTexture!==null||Me.envMap!==V||L.fog===!0&&Me.fog!==P||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ve.numPlanes||Me.numIntersection!==ve.numIntersection)||Me.vertexAlphas!==J||Me.vertexTangents!==ne||Me.morphTargets!==ee||Me.morphNormals!==oe||Me.morphColors!==ye||Me.toneMapping!==he||Me.morphTargetsCount!==Ae)&&(He=!0):(He=!0,Me.__version=L.version);let Je=Me.currentProgram;He===!0&&(Je=wi(L,y,U));let We=!1,rt=!1,wt=!1;const qe=Je.getUniforms(),Ye=Me.uniforms;if(Le.useProgram(Je.program)&&(We=!0,rt=!0,wt=!0),L.id!==M&&(M=L.id,rt=!0),We||S!==p){Le.buffers.depth.getReversed()&&p.reversedDepth!==!0&&(p._reversedDepth=!0,p.updateProjectionMatrix()),qe.setValue(B,"projectionMatrix",p.projectionMatrix),qe.setValue(B,"viewMatrix",p.matrixWorldInverse);const Ft=qe.map.cameraPosition;Ft!==void 0&&Ft.setValue(B,se.setFromMatrixPosition(p.matrixWorld)),Xe.logarithmicDepthBuffer&&qe.setValue(B,"logDepthBufFC",2/(Math.log(p.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&qe.setValue(B,"isOrthographic",p.isOrthographicCamera===!0),S!==p&&(S=p,rt=!0,wt=!0)}if(U.isSkinnedMesh){qe.setOptional(B,U,"bindMatrix"),qe.setOptional(B,U,"bindMatrixInverse");const St=U.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),qe.setValue(B,"boneTexture",St.boneTexture,Ze))}U.isBatchedMesh&&(qe.setOptional(B,U,"batchingTexture"),qe.setValue(B,"batchingTexture",U._matricesTexture,Ze),qe.setOptional(B,U,"batchingIdTexture"),qe.setValue(B,"batchingIdTexture",U._indirectTexture,Ze),qe.setOptional(B,U,"batchingColorTexture"),U._colorsTexture!==null&&qe.setValue(B,"batchingColorTexture",U._colorsTexture,Ze));const nt=R.morphAttributes;if((nt.position!==void 0||nt.normal!==void 0||nt.color!==void 0)&&me.update(U,R,Je),(rt||Me.receiveShadow!==U.receiveShadow)&&(Me.receiveShadow=U.receiveShadow,qe.setValue(B,"receiveShadow",U.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(Ye.envMap.value=V,Ye.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1),L.isMeshStandardMaterial&&L.envMap===null&&y.environment!==null&&(Ye.envMapIntensity.value=y.environmentIntensity),rt&&(qe.setValue(B,"toneMappingExposure",b.toneMappingExposure),Me.needsLights&&es(Ye,wt),P&&L.fog===!0&&ce.refreshFogUniforms(Ye,P),ce.refreshMaterialUniforms(Ye,L,K,re,m.state.transmissionRenderTarget[p.id]),Os.upload(B,$r(Me),Ye,Ze)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(Os.upload(B,$r(Me),Ye,Ze),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&qe.setValue(B,"center",U.center),qe.setValue(B,"modelViewMatrix",U.modelViewMatrix),qe.setValue(B,"normalMatrix",U.normalMatrix),qe.setValue(B,"modelMatrix",U.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const St=L.uniformsGroups;for(let Ft=0,Qt=St.length;Ft<Qt;Ft++){const cn=St[Ft];ze.update(cn,Je),ze.bind(cn,Je)}}return Je}function es(p,y){p.ambientLightColor.needsUpdate=y,p.lightProbe.needsUpdate=y,p.directionalLights.needsUpdate=y,p.directionalLightShadows.needsUpdate=y,p.pointLights.needsUpdate=y,p.pointLightShadows.needsUpdate=y,p.spotLights.needsUpdate=y,p.spotLightShadows.needsUpdate=y,p.rectAreaLights.needsUpdate=y,p.hemisphereLights.needsUpdate=y}function ia(p){return p.isMeshLambertMaterial||p.isMeshToonMaterial||p.isMeshPhongMaterial||p.isMeshStandardMaterial||p.isShadowMaterial||p.isShaderMaterial&&p.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(p,y,R){const L=De.get(p);L.__autoAllocateDepthBuffer=p.resolveDepthBuffer===!1,L.__autoAllocateDepthBuffer===!1&&(L.__useRenderToTexture=!1),De.get(p.texture).__webglTexture=y,De.get(p.depthTexture).__webglTexture=L.__autoAllocateDepthBuffer?void 0:R,L.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(p,y){const R=De.get(p);R.__webglFramebuffer=y,R.__useDefaultFramebuffer=y===void 0};const zn=B.createFramebuffer();this.setRenderTarget=function(p,y=0,R=0){N=p,A=y,C=R;let L=!0,U=null,P=!1,j=!1;if(p){const V=De.get(p);if(V.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(B.FRAMEBUFFER,null),L=!1;else if(V.__webglFramebuffer===void 0)Ze.setupRenderTarget(p);else if(V.__hasExternalTextures)Ze.rebindTextures(p,De.get(p.texture).__webglTexture,De.get(p.depthTexture).__webglTexture);else if(p.depthBuffer){const ee=p.depthTexture;if(V.__boundDepthTexture!==ee){if(ee!==null&&De.has(ee)&&(p.width!==ee.image.width||p.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ze.setupDepthRenderbuffer(p)}}const J=p.texture;(J.isData3DTexture||J.isDataArrayTexture||J.isCompressedArrayTexture)&&(j=!0);const ne=De.get(p).__webglFramebuffer;p.isWebGLCubeRenderTarget?(Array.isArray(ne[y])?U=ne[y][R]:U=ne[y],P=!0):p.samples>0&&Ze.useMultisampledRTT(p)===!1?U=De.get(p).__webglMultisampledFramebuffer:Array.isArray(ne)?U=ne[R]:U=ne,I.copy(p.viewport),O.copy(p.scissor),W=p.scissorTest}else I.copy(Te).multiplyScalar(K).floor(),O.copy(ke).multiplyScalar(K).floor(),W=tt;if(R!==0&&(U=zn),Le.bindFramebuffer(B.FRAMEBUFFER,U)&&L&&Le.drawBuffers(p,U),Le.viewport(I),Le.scissor(O),Le.setScissorTest(W),P){const V=De.get(p.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+y,V.__webglTexture,R)}else if(j){const V=y;for(let J=0;J<p.textures.length;J++){const ne=De.get(p.textures[J]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+J,ne.__webglTexture,R,V)}}else if(p!==null&&R!==0){const V=De.get(p.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,V.__webglTexture,R)}M=-1},this.readRenderTargetPixels=function(p,y,R,L,U,P,j,X=0){if(!(p&&p.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let V=De.get(p).__webglFramebuffer;if(p.isWebGLCubeRenderTarget&&j!==void 0&&(V=V[j]),V){Le.bindFramebuffer(B.FRAMEBUFFER,V);try{const J=p.textures[X],ne=J.format,ee=J.type;if(!Xe.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}y>=0&&y<=p.width-L&&R>=0&&R<=p.height-U&&(p.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+X),B.readPixels(y,R,L,U,Fe.convert(ne),Fe.convert(ee),P))}finally{const J=N!==null?De.get(N).__webglFramebuffer:null;Le.bindFramebuffer(B.FRAMEBUFFER,J)}}},this.readRenderTargetPixelsAsync=async function(p,y,R,L,U,P,j,X=0){if(!(p&&p.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let V=De.get(p).__webglFramebuffer;if(p.isWebGLCubeRenderTarget&&j!==void 0&&(V=V[j]),V)if(y>=0&&y<=p.width-L&&R>=0&&R<=p.height-U){Le.bindFramebuffer(B.FRAMEBUFFER,V);const J=p.textures[X],ne=J.format,ee=J.type;if(!Xe.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const oe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,oe),B.bufferData(B.PIXEL_PACK_BUFFER,P.byteLength,B.STREAM_READ),p.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+X),B.readPixels(y,R,L,U,Fe.convert(ne),Fe.convert(ee),0);const ye=N!==null?De.get(N).__webglFramebuffer:null;Le.bindFramebuffer(B.FRAMEBUFFER,ye);const he=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Mu(B,he,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,oe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,P),B.deleteBuffer(oe),B.deleteSync(he),P}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(p,y=null,R=0){const L=Math.pow(2,-R),U=Math.floor(p.image.width*L),P=Math.floor(p.image.height*L),j=y!==null?y.x:0,X=y!==null?y.y:0;Ze.setTexture2D(p,0),B.copyTexSubImage2D(B.TEXTURE_2D,R,0,0,j,X,U,P),Le.unbindTexture()};const Ln=B.createFramebuffer(),_=B.createFramebuffer();this.copyTextureToTexture=function(p,y,R=null,L=null,U=0,P=null){P===null&&(U!==0?(Nr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),P=U,U=0):P=0);let j,X,V,J,ne,ee,oe,ye,he;const fe=p.isCompressedTexture?p.mipmaps[P]:p.image;if(R!==null)j=R.max.x-R.min.x,X=R.max.y-R.min.y,V=R.isBox3?R.max.z-R.min.z:1,J=R.min.x,ne=R.min.y,ee=R.isBox3?R.min.z:0;else{const nt=Math.pow(2,-U);j=Math.floor(fe.width*nt),X=Math.floor(fe.height*nt),p.isDataArrayTexture?V=fe.depth:p.isData3DTexture?V=Math.floor(fe.depth*nt):V=1,J=0,ne=0,ee=0}L!==null?(oe=L.x,ye=L.y,he=L.z):(oe=0,ye=0,he=0);const Ae=Fe.convert(y.format),Me=Fe.convert(y.type);let Ve;y.isData3DTexture?(Ze.setTexture3D(y,0),Ve=B.TEXTURE_3D):y.isDataArrayTexture||y.isCompressedArrayTexture?(Ze.setTexture2DArray(y,0),Ve=B.TEXTURE_2D_ARRAY):(Ze.setTexture2D(y,0),Ve=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,y.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,y.unpackAlignment);const He=B.getParameter(B.UNPACK_ROW_LENGTH),Je=B.getParameter(B.UNPACK_IMAGE_HEIGHT),We=B.getParameter(B.UNPACK_SKIP_PIXELS),rt=B.getParameter(B.UNPACK_SKIP_ROWS),wt=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,fe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,fe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,J),B.pixelStorei(B.UNPACK_SKIP_ROWS,ne),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ee);const qe=p.isDataArrayTexture||p.isData3DTexture,Ye=y.isDataArrayTexture||y.isData3DTexture;if(p.isDepthTexture){const nt=De.get(p),St=De.get(y),Ft=De.get(nt.__renderTarget),Qt=De.get(St.__renderTarget);Le.bindFramebuffer(B.READ_FRAMEBUFFER,Ft.__webglFramebuffer),Le.bindFramebuffer(B.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let cn=0;cn<V;cn++)qe&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,De.get(p).__webglTexture,U,ee+cn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,De.get(y).__webglTexture,P,he+cn)),B.blitFramebuffer(J,ne,j,X,oe,ye,j,X,B.DEPTH_BUFFER_BIT,B.NEAREST);Le.bindFramebuffer(B.READ_FRAMEBUFFER,null),Le.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(U!==0||p.isRenderTargetTexture||De.has(p)){const nt=De.get(p),St=De.get(y);Le.bindFramebuffer(B.READ_FRAMEBUFFER,Ln),Le.bindFramebuffer(B.DRAW_FRAMEBUFFER,_);for(let Ft=0;Ft<V;Ft++)qe?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,nt.__webglTexture,U,ee+Ft):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,nt.__webglTexture,U),Ye?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,St.__webglTexture,P,he+Ft):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,St.__webglTexture,P),U!==0?B.blitFramebuffer(J,ne,j,X,oe,ye,j,X,B.COLOR_BUFFER_BIT,B.NEAREST):Ye?B.copyTexSubImage3D(Ve,P,oe,ye,he+Ft,J,ne,j,X):B.copyTexSubImage2D(Ve,P,oe,ye,J,ne,j,X);Le.bindFramebuffer(B.READ_FRAMEBUFFER,null),Le.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ye?p.isDataTexture||p.isData3DTexture?B.texSubImage3D(Ve,P,oe,ye,he,j,X,V,Ae,Me,fe.data):y.isCompressedArrayTexture?B.compressedTexSubImage3D(Ve,P,oe,ye,he,j,X,V,Ae,fe.data):B.texSubImage3D(Ve,P,oe,ye,he,j,X,V,Ae,Me,fe):p.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,P,oe,ye,j,X,Ae,Me,fe.data):p.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,P,oe,ye,fe.width,fe.height,Ae,fe.data):B.texSubImage2D(B.TEXTURE_2D,P,oe,ye,j,X,Ae,Me,fe);B.pixelStorei(B.UNPACK_ROW_LENGTH,He),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Je),B.pixelStorei(B.UNPACK_SKIP_PIXELS,We),B.pixelStorei(B.UNPACK_SKIP_ROWS,rt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,wt),P===0&&y.generateMipmaps&&B.generateMipmap(Ve),Le.unbindTexture()},this.initRenderTarget=function(p){De.get(p).__webglFramebuffer===void 0&&Ze.setupRenderTarget(p)},this.initTexture=function(p){p.isCubeTexture?Ze.setTextureCube(p,0):p.isData3DTexture?Ze.setTexture3D(p,0):p.isDataArrayTexture||p.isCompressedArrayTexture?Ze.setTexture2DArray(p,0):Ze.setTexture2D(p,0),Le.unbindTexture()},this.resetState=function(){A=0,C=0,N=null,Le.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}const ka=new WeakMap;class xg extends li{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new Br(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Tt,n).catch(n)}decodeDracoFile(e,t,n,i,s=Rt,a=()=>{}){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const n=JSON.stringify(t);if(ka.has(e)){const l=ka.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(s,a).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[s]={resolve:c,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),ka.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new Ut;e.index&&t.setIndex(new kt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,a=i.array,o=i.itemSize,l=new kt(a,o);s==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(a instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==Tt)return;const n=new Pe;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),at.colorSpaceToWorking(n,Tt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Br(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=yg.toString(),a=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const a=s.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function yg(){let r,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":r=o.decoderConfig,e=new Promise(function(h){r.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(r)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(l),c),v=f.attributes.map(x=>x.array.buffer);f.index&&v.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},v)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{u.destroy(d)}});break}};function t(a,o,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const v=o.GetEncodedGeometryType(l);if(v===a.TRIANGULAR_MESH)d=new a.Mesh,f=o.DecodeArrayToMesh(l,l.byteLength,d);else if(v===a.POINT_CLOUD)d=new a.PointCloud,f=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const x={index:null,attributes:[]};for(const g in h){const m=self[u[g]];let w,T;if(c.useUniqueIDs)T=h[g],w=o.GetAttributeByUniqueId(d,T);else{if(T=o.GetAttributeId(d,a[h[g]]),T===-1)continue;w=o.GetAttribute(d,T)}const b=i(a,o,d,g,m,w);g==="color"&&(b.vertexColorSpace=c.vertexColorSpace),x.attributes.push(b)}return v===a.TRIANGULAR_MESH&&(x.index=n(a,o,d)),a.destroy(d),x}function n(a,o,l){const h=l.num_faces()*3,u=h*4,d=a._malloc(u);o.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(a.HEAPF32.buffer,d,h).slice();return a._free(d),{array:f,itemSize:1}}function i(a,o,l,c,h,u){const d=u.num_components(),v=l.num_points()*d,x=v*h.BYTES_PER_ELEMENT,g=s(a,h),m=a._malloc(x);o.GetAttributeDataArrayForAllPoints(l,u,g,x,m);const w=new h(a.HEAPF32.buffer,m,v).slice();return a._free(m),{name:c,array:w,itemSize:d}}function s(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}function Mg(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new Ut;let c=0;for(let h=0;h<r.length;++h){const u=r[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<r.length;++d){const f=r[d].index;for(let v=0;v<f.count;++v)u.push(f.getX(v)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(const h in s){const u=$l(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);const v=$l(f);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(v)}}return l}function $l(r){let e,t,n,i=-1,s=0;for(let c=0;c<r.length;++c){const h=r[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const a=new e(s),o=new kt(a,t,n);let l=0;for(let c=0;c<r.length;++c){const h=r[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let v=0;v<t;v++){const x=h.getComponent(d,v);o.setComponent(d+u,v,x)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Jl(r,e){if(e===0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===2||e===1){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===2)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class to extends li{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new wg(t)}),this.register(function(t){return new Ag(t)}),this.register(function(t){return new Fg(t)}),this.register(function(t){return new Og(t)}),this.register(function(t){return new Bg(t)}),this.register(function(t){return new Cg(t)}),this.register(function(t){return new Pg(t)}),this.register(function(t){return new Dg(t)}),this.register(function(t){return new Ig(t)}),this.register(function(t){return new bg(t)}),this.register(function(t){return new Lg(t)}),this.register(function(t){return new Rg(t)}),this.register(function(t){return new Ng(t)}),this.register(function(t){return new Ug(t)}),this.register(function(t){return new Tg(t)}),this.register(function(t){return new kg(t)}),this.register(function(t){return new zg(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Pr.extractUrlBase(e);a=Pr.resolveURL(c,this.path)}else a=Pr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Br(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Bc){try{a[st.KHR_BINARY_GLTF]=new Gg(e)}catch(u){i&&i(u);return}s=JSON.parse(a[st.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new e_(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case st.KHR_MATERIALS_UNLIT:a[u]=new Eg;break;case st.KHR_DRACO_MESH_COMPRESSION:a[u]=new Hg(s,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:a[u]=new Vg;break;case st.KHR_MESH_QUANTIZATION:a[u]=new Wg;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Sg(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Tg{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Pe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Rt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Dc(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new xo(h),c.distance=u;break;case"spot":c=new js(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Nn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Eg{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return pn}extendParams(e,t,n){const i=[];e.color=new Pe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Rt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Tt))}return Promise.all(i)}}class bg{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class wg{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new be(o,o)}return Promise.all(s)}}class Ag{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Rg{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class Cg{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Rt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Tt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class Pg{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class Dg{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(o[0],o[1],o[2],Rt),Promise.all(s)}}class Ig{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Lg{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(o[0],o[1],o[2],Rt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Tt)),Promise.all(s)}}class Ug{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class Ng{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class Fg{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class Og{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Bg{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class kg{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class zg{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==hn.TRIANGLES&&c.mode!==hn.TRIANGLE_STRIP&&c.mode!==hn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const v of u){const x=new $e,g=new k,m=new oi,w=new k(1,1,1),T=new Tc(v.geometry,v.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,b),l.SCALE&&w.fromBufferAttribute(l.SCALE,b),T.setMatrixAt(b,x.compose(g,m,w));for(const b in l)if(b==="_COLOR_0"){const D=l[b];T.instanceColor=new ks(D.array,D.itemSize,D.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&v.geometry.setAttribute(b,l[b]);Mt.prototype.copy.call(T,v),this.parser.assignFinalMaterial(T),f.push(T)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Bc="glTF",wr=12,Ql={JSON:1313821514,BIN:5130562};class Gg{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,wr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Bc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-wr,s=new DataView(e,wr);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Ql.JSON){const c=new Uint8Array(e,wr+a,o);this.content=n.decode(c)}else if(l===Ql.BIN){const c=wr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Hg{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=no[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=no[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Zi[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const v in f.attributes){const x=f.attributes[v],g=l[v];g!==void 0&&(x.normalized=g)}u(f)},o,c,Rt,d)})})}}class Vg{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Wg{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class kc extends Wr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,v=e*c,x=v-c,g=-2*f+3*d,m=f-d,w=1-g,T=m-d+u;for(let b=0;b!==o;b++){const D=a[x+b+o],A=a[x+b+l]*h,C=a[v+b+o],N=a[v+b]*h;s[b]=w*D+T*A+g*C+m*N}return s}}const Xg=new oi;class qg extends kc{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Xg.fromArray(s).normalize().toArray(s),s}}const hn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Zi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ec={9728:1003,9729:1006,9984:1004,9985:1007,9986:1005,9987:1008},tc={33071:1001,33648:1002,10497:1e3},za={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},no={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Yg={CUBICSPLINE:void 0,LINEAR:2301,STEP:2300},Ga={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Kg(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new an({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),r.DefaultMaterial}function _i(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Nn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function jg(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Zg(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $g(r){let e;const t=r.extensions&&r.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ha(t.attributes):e=r.indices+":"+Ha(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Ha(r.targets[n]);return e}function Ha(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function io(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Jg(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Qg=new $e;class e_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Sg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new hr(this.options.manager):this.textureLoader=new Eh(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Br(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return _i(s,o,i),Nn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Pr.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=za[i.type],o=Zi[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new kt(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=za[i.type],c=Zi[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,v=i.normalized===!0;let x,g;if(f&&f!==u){const m=Math.floor(d/f),w="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let T=t.cache.get(w);T||(x=new c(o,m*f,i.count*f/h),T=new xc(x,f/h),t.cache.add(w,T)),g=new Fr(T,l,d%f/h,v)}else o===null?x=new c(i.count*l):x=new c(o,d,i.count*l),g=new kt(x,l,v);if(i.sparse!==void 0){const m=za.SCALAR,w=Zi[i.sparse.indices.componentType],T=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,D=new w(a[1],T,i.sparse.count*m),A=new c(a[2],b,i.sparse.count*l);o!==null&&(g=new kt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let C=0,N=D.length;C<N;C++){const M=D[C];if(g.setX(M,A[C*l]),l>=2&&g.setY(M,A[C*l+1]),l>=3&&g.setZ(M,A[C*l+2]),l>=4&&g.setW(M,A[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=v}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=ec[d.magFilter]||1006,h.minFilter=ec[d.minFilter]||1008,h.wrapS=tc[d.wrapS]||1e3,h.wrapT=tc[d.wrapT]||1e3,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==1003&&h.minFilter!==1006,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let v=d;t.isImageBitmapLoader===!0&&(v=function(x){const g=new Bt(x);g.needsUpdate=!0,d(g)}),t.load(Pr.resolveURL(u,s.path),v,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Nn(u,a),u.userData.mimeType=a.mimeType||Jg(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[st.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Ys,wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Ec,wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return an}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){const u=i[st.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new Pe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Rt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Tt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=2);const h=s.alphaMode||Ga.OPAQUE;if(h===Ga.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ga.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==pn&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new be(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==pn&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==pn){const u=s.emissiveFactor;o.emissive=new Pe().setRGB(u[0],u[1],u[2],Rt)}return s.emissiveTexture!==void 0&&a!==pn&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Tt)),Promise.all(c).then(function(){const u=new a(o);return s.name&&(u.name=s.name),Nn(u,s),t.associations.set(u,{materials:e}),s.extensions&&_i(i,u,s),u})}createUniqueName(e){const t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return nc(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=$g(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=nc(new Ut,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?Kg(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,v=h.length;f<v;f++){const x=h[f],g=a[f];let m;const w=c[f];if(g.mode===hn.TRIANGLES||g.mode===hn.TRIANGLE_STRIP||g.mode===hn.TRIANGLE_FAN||g.mode===void 0)m=s.isSkinnedMesh===!0?new $u(x,w):new yt(x,w),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===hn.TRIANGLE_STRIP?m.geometry=Jl(m.geometry,1):g.mode===hn.TRIANGLE_FAN&&(m.geometry=Jl(m.geometry,2));else if(g.mode===hn.LINES)m=new ih(x,w);else if(g.mode===hn.LINE_STRIP)m=new po(x,w);else if(g.mode===hn.LINE_LOOP)m=new rh(x,w);else if(g.mode===hn.POINTS)m=new mo(x,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Zg(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Nn(m,s),g.extensions&&_i(i,m,g),t.assignFinalMaterial(m),u.push(m)}for(let f=0,v=u.length;f<v;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&_i(i,u[0],s),u[0];const d=new Kt;s.extensions&&_i(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,v=u.length;f<v;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $t(ut.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Zs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Nn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new $e;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ho(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],v=i.samplers[f.sampler],x=f.target,g=x.node,m=i.parameters!==void 0?i.parameters[v.input]:v.input,w=i.parameters!==void 0?i.parameters[v.output]:v.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",w)),c.push(v),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],v=u[2],x=u[3],g=u[4],m=[];for(let T=0,b=d.length;T<b;T++){const D=d[T],A=f[T],C=v[T],N=x[T],M=g[T];if(D===void 0)continue;D.updateMatrix&&D.updateMatrix();const S=n._createAnimationTracks(D,A,C,N,M);if(S)for(let I=0;I<S.length;I++)m.push(S[I])}const w=new fh(s,void 0,m);return Nn(w,i),w})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Qg)});for(let f=0,v=u.length;f<v;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new Sc:c.length>1?h=new Kt:c.length===1?h=c[0]:h=new Mt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),Nn(h,s),s.extensions&&_i(n,h,s),s.matrix!==void 0){const u=new $e;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Kt;n.name&&(s.name=i.createUniqueName(n.name)),Nn(s,n),n.extensions&&_i(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof wn||d instanceof Bt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];ii[s.path]===ii.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(ii[s.path]){case ii.weights:c=tr;break;case ii.rotation:c=nr;break;case ii.translation:case ii.scale:c=ir;break;default:n.itemSize===1?c=tr:c=ir;break}const h=i.interpolation!==void 0?Yg[i.interpolation]:2301,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const v=new c(l[d]+"."+ii[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=io(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof nr?qg:kc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function t_(r,e,t){const n=e.attributes,i=new An;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),o.normalized){const h=io(Zi[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new k,l=new k;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,v=d.max;if(f!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(v[2]))),d.normalized){const x=io(Zi[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new Cn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function nc(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=no[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return at.workingColorSpace!==Rt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),Nn(r,e),t_(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?jg(r,e.targets,t):r})}var fn=Uint8Array,Yi=Uint16Array,n_=Int32Array,zc=new fn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Gc=new fn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),i_=new fn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Hc=function(r,e){for(var t=new Yi(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new n_(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return{b:t,r:i}},Vc=Hc(zc,2),Wc=Vc.b,r_=Vc.r;Wc[28]=258,r_[258]=28;var s_=Hc(Gc,0),a_=s_.b,ro=new Yi(32768);for(var Et=0;Et<32768;++Et){var ri=(Et&43690)>>1|(Et&21845)<<1;ri=(ri&52428)>>2|(ri&13107)<<2,ri=(ri&61680)>>4|(ri&3855)<<4,ro[Et]=((ri&65280)>>8|(ri&255)<<8)>>1}var Dr=(function(r,e,t){for(var n=r.length,i=0,s=new Yi(e);i<n;++i)r[i]&&++s[r[i]-1];var a=new Yi(e);for(i=1;i<e;++i)a[i]=a[i-1]+s[i-1]<<1;var o;if(t){o=new Yi(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],h=e-r[i],u=a[r[i]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)o[ro[u]>>l]=c}else for(o=new Yi(n),i=0;i<n;++i)r[i]&&(o[i]=ro[a[r[i]-1]++]>>15-r[i]);return o}),Xr=new fn(288);for(var Et=0;Et<144;++Et)Xr[Et]=8;for(var Et=144;Et<256;++Et)Xr[Et]=9;for(var Et=256;Et<280;++Et)Xr[Et]=7;for(var Et=280;Et<288;++Et)Xr[Et]=8;var Xc=new fn(32);for(var Et=0;Et<32;++Et)Xc[Et]=5;var o_=Dr(Xr,9,1),l_=Dr(Xc,5,1),Va=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},yn=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},Wa=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},c_=function(r){return(r+7)/8|0},u_=function(r,e,t){return(t==null||t>r.length)&&(t=r.length),new fn(r.subarray(e,t))},h_=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Sn=function(r,e,t){var n=new Error(e||h_[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,Sn),!t)throw n;return n},d_=function(r,e,t,n){var i=r.length,s=0;if(!i||e.f&&!e.l)return t||new fn(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new fn(i*3));var c=function(Ge){var vt=t.length;if(Ge>vt){var B=new fn(Math.max(vt*2,Ge));B.set(t),t=B}},h=e.f||0,u=e.p||0,d=e.b||0,f=e.l,v=e.d,x=e.m,g=e.n,m=i*8;do{if(!f){h=yn(r,u,1);var w=yn(r,u+1,3);if(u+=3,w)if(w==1)f=o_,v=l_,x=9,g=5;else if(w==2){var A=yn(r,u,31)+257,C=yn(r,u+10,15)+4,N=A+yn(r,u+5,31)+1;u+=14;for(var M=new fn(N),S=new fn(19),I=0;I<C;++I)S[i_[I]]=yn(r,u+I*3,7);u+=C*3;for(var O=Va(S),W=(1<<O)-1,H=Dr(S,O,1),I=0;I<N;){var Y=H[yn(r,u,W)];u+=Y&15;var T=Y>>4;if(T<16)M[I++]=T;else{var G=0,re=0;for(T==16?(re=3+yn(r,u,3),u+=2,G=M[I-1]):T==17?(re=3+yn(r,u,7),u+=3):T==18&&(re=11+yn(r,u,127),u+=7);re--;)M[I++]=G}}var K=M.subarray(0,A),le=M.subarray(A);x=Va(K),g=Va(le),f=Dr(K,x,1),v=Dr(le,g,1)}else Sn(1);else{var T=c_(u)+4,b=r[T-4]|r[T-3]<<8,D=T+b;if(D>i){l&&Sn(0);break}o&&c(d+b),t.set(r.subarray(T,D),d),e.b=d+=b,e.p=u=D*8,e.f=h;continue}if(u>m){l&&Sn(0);break}}o&&c(d+131072);for(var xe=(1<<x)-1,Te=(1<<g)-1,ke=u;;ke=u){var G=f[Wa(r,u)&xe],tt=G>>4;if(u+=G&15,u>m){l&&Sn(0);break}if(G||Sn(2),tt<256)t[d++]=tt;else if(tt==256){ke=u,f=null;break}else{var ue=tt-254;if(tt>264){var I=tt-257,pe=zc[I];ue=yn(r,u,(1<<pe)-1)+Wc[I],u+=pe}var q=v[Wa(r,u)&Te],$=q>>4;q||Sn(3),u+=q&15;var le=a_[$];if($>3){var pe=Gc[$];le+=Wa(r,u)&(1<<pe)-1,u+=pe}if(u>m){l&&Sn(0);break}o&&c(d+131072);var se=d+ue;if(d<le){var we=s-le,_e=Math.min(le,se);for(we+d<0&&Sn(3);d<_e;++d)t[d]=n[we+d]}for(;d<se;++d)t[d]=t[d-le]}}e.l=f,e.p=ke,e.b=d,e.f=h,f&&(h=1,e.m=x,e.d=v,e.n=g)}while(!h);return d!=t.length&&a?u_(t,0,d):t.subarray(0,d)},f_=new fn(0),p_=function(r,e){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&Sn(6,"invalid zlib data"),(r[1]>>5&1)==1&&Sn(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function Ds(r,e){return d_(r.subarray(p_(r),-4),{i:2},e,e)}var m_=typeof TextDecoder<"u"&&new TextDecoder,g_=0;try{m_.decode(f_,{stream:!0}),g_=1}catch{}class __ extends yh{constructor(e){super(e),this.type=1016,this.outputFormat=1023}parse(e){const M=Math.pow(2.7182818,2.2);function S(_,p){let y=0;for(let L=0;L<65536;++L)(L==0||_[L>>3]&1<<(L&7))&&(p[y++]=L);const R=y-1;for(;y<65536;)p[y++]=0;return R}function I(_){for(let p=0;p<16384;p++)_[p]={},_[p].len=0,_[p].lit=0,_[p].p=null}const O={l:0,c:0,lc:0};function W(_,p,y,R,L){for(;y<_;)p=p<<8|Fe(R,L),y+=8;y-=_,O.l=p>>y&(1<<_)-1,O.c=p,O.lc=y}const H=new Array(59);function Y(_){for(let y=0;y<=58;++y)H[y]=0;for(let y=0;y<65537;++y)H[_[y]]+=1;let p=0;for(let y=58;y>0;--y){const R=p+H[y]>>1;H[y]=p,p=R}for(let y=0;y<65537;++y){const R=_[y];R>0&&(_[y]=R|H[R]++<<6)}}function G(_,p,y,R,L,U){const P=p;let j=0,X=0;for(;R<=L;R++){if(P.value-p.value>y)return!1;W(6,j,X,_,P);const V=O.l;if(j=O.c,X=O.lc,U[R]=V,V==63){if(P.value-p.value>y)throw new Error("Something wrong with hufUnpackEncTable");W(8,j,X,_,P);let J=O.l+6;if(j=O.c,X=O.lc,R+J>L+1)throw new Error("Something wrong with hufUnpackEncTable");for(;J--;)U[R++]=0;R--}else if(V>=59){let J=V-59+2;if(R+J>L+1)throw new Error("Something wrong with hufUnpackEncTable");for(;J--;)U[R++]=0;R--}}Y(U)}function re(_){return _&63}function K(_){return _>>6}function le(_,p,y,R){for(;p<=y;p++){const L=K(_[p]),U=re(_[p]);if(L>>U)throw new Error("Invalid table entry");if(U>14){const P=R[L>>U-14];if(P.len)throw new Error("Invalid table entry");if(P.lit++,P.p){const j=P.p;P.p=new Array(P.lit);for(let X=0;X<P.lit-1;++X)P.p[X]=j[X]}else P.p=new Array(1);P.p[P.lit-1]=p}else if(U){let P=0;for(let j=1<<14-U;j>0;j--){const X=R[(L<<14-U)+P];if(X.len||X.p)throw new Error("Invalid table entry");X.len=U,X.lit=p,P++}}}return!0}const xe={c:0,lc:0};function Te(_,p,y,R){_=_<<8|Fe(y,R),p+=8,xe.c=_,xe.lc=p}const ke={c:0,lc:0};function tt(_,p,y,R,L,U,P,j,X){if(_==p){R<8&&(Te(y,R,L,U),y=xe.c,R=xe.lc),R-=8;let V=y>>R;if(V=new Uint8Array([V])[0],j.value+V>X)return!1;const J=P[j.value-1];for(;V-- >0;)P[j.value++]=J}else if(j.value<X)P[j.value++]=_;else return!1;ke.c=y,ke.lc=R}function ue(_){return _&65535}function pe(_){const p=ue(_);return p>32767?p-65536:p}const q={a:0,b:0};function $(_,p){const y=pe(_),L=pe(p),U=y+(L&1)+(L>>1),P=U,j=U-L;q.a=P,q.b=j}function se(_,p){const y=ue(_),R=ue(p),L=y-(R>>1)&65535,U=R+L-32768&65535;q.a=U,q.b=L}function we(_,p,y,R,L,U,P){const j=P<16384,X=y>L?L:y;let V=1,J,ne;for(;V<=X;)V<<=1;for(V>>=1,J=V,V>>=1;V>=1;){ne=0;const ee=ne+U*(L-J),oe=U*V,ye=U*J,he=R*V,fe=R*J;let Ae,Me,Ve,He;for(;ne<=ee;ne+=ye){let Je=ne;const We=ne+R*(y-J);for(;Je<=We;Je+=fe){const rt=Je+he,wt=Je+oe,qe=wt+he;j?($(_[Je+p],_[wt+p]),Ae=q.a,Ve=q.b,$(_[rt+p],_[qe+p]),Me=q.a,He=q.b,$(Ae,Me),_[Je+p]=q.a,_[rt+p]=q.b,$(Ve,He),_[wt+p]=q.a,_[qe+p]=q.b):(se(_[Je+p],_[wt+p]),Ae=q.a,Ve=q.b,se(_[rt+p],_[qe+p]),Me=q.a,He=q.b,se(Ae,Me),_[Je+p]=q.a,_[rt+p]=q.b,se(Ve,He),_[wt+p]=q.a,_[qe+p]=q.b)}if(y&V){const rt=Je+oe;j?$(_[Je+p],_[rt+p]):se(_[Je+p],_[rt+p]),Ae=q.a,_[rt+p]=q.b,_[Je+p]=Ae}}if(L&V){let Je=ne;const We=ne+R*(y-J);for(;Je<=We;Je+=fe){const rt=Je+he;j?$(_[Je+p],_[rt+p]):se(_[Je+p],_[rt+p]),Ae=q.a,_[rt+p]=q.b,_[Je+p]=Ae}}J=V,V>>=1}return ne}function _e(_,p,y,R,L,U,P,j,X){let V=0,J=0;const ne=P,ee=Math.trunc(R.value+(L+7)/8);for(;R.value<ee;)for(Te(V,J,y,R),V=xe.c,J=xe.lc;J>=14;){const ye=V>>J-14&16383,he=p[ye];if(he.len)J-=he.len,tt(he.lit,U,V,J,y,R,j,X,ne),V=ke.c,J=ke.lc;else{if(!he.p)throw new Error("hufDecode issues");let fe;for(fe=0;fe<he.lit;fe++){const Ae=re(_[he.p[fe]]);for(;J<Ae&&R.value<ee;)Te(V,J,y,R),V=xe.c,J=xe.lc;if(J>=Ae&&K(_[he.p[fe]])==(V>>J-Ae&(1<<Ae)-1)){J-=Ae,tt(he.p[fe],U,V,J,y,R,j,X,ne),V=ke.c,J=ke.lc;break}}if(fe==he.lit)throw new Error("hufDecode issues")}}const oe=8-L&7;for(V>>=oe,J-=oe;J>0;){const ye=p[V<<14-J&16383];if(ye.len)J-=ye.len,tt(ye.lit,U,V,J,y,R,j,X,ne),V=ke.c,J=ke.lc;else throw new Error("hufDecode issues")}return!0}function Ge(_,p,y,R,L,U){const P={value:0},j=y.value,X=Ue(p,y),V=Ue(p,y);y.value+=4;const J=Ue(p,y);if(y.value+=4,X<0||X>=65537||V<0||V>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const ne=new Array(65537),ee=new Array(16384);I(ee);const oe=R-(y.value-j);if(G(_,y,oe,X,V,ne),J>8*(R-(y.value-j)))throw new Error("Something wrong with hufUncompress");le(ne,X,V,ee),_e(ne,ee,_,y,J,V,U,L,P)}function vt(_,p,y){for(let R=0;R<y;++R)p[R]=_[p[R]]}function B(_){for(let p=1;p<_.length;p++){const y=_[p-1]+_[p]-128;_[p]=y}}function ot(_,p){let y=0,R=Math.floor((_.length+1)/2),L=0;const U=_.length-1;for(;!(L>U||(p[L++]=_[y++],L>U));)p[L++]=_[R++]}function Ke(_){let p=_.byteLength;const y=new Array;let R=0;const L=new DataView(_);for(;p>0;){const U=L.getInt8(R++);if(U<0){const P=-U;p-=P+1;for(let j=0;j<P;j++)y.push(L.getUint8(R++))}else{const P=U;p-=2;const j=L.getUint8(R++);for(let X=0;X<P+1;X++)y.push(j)}}return y}function Xe(_,p,y,R,L,U){let P=new DataView(U.buffer);const j=y[_.idx[0]].width,X=y[_.idx[0]].height,V=3,J=Math.floor(j/8),ne=Math.ceil(j/8),ee=Math.ceil(X/8),oe=j-(ne-1)*8,ye=X-(ee-1)*8,he={value:0},fe=new Array(V),Ae=new Array(V),Me=new Array(V),Ve=new Array(V),He=new Array(V);for(let We=0;We<V;++We)He[We]=p[_.idx[We]],fe[We]=We<1?0:fe[We-1]+ne*ee,Ae[We]=new Float32Array(64),Me[We]=new Uint16Array(64),Ve[We]=new Uint16Array(ne*64);for(let We=0;We<ee;++We){let rt=8;We==ee-1&&(rt=ye);let wt=8;for(let Ye=0;Ye<ne;++Ye){Ye==ne-1&&(wt=oe);for(let nt=0;nt<V;++nt)Me[nt].fill(0),Me[nt][0]=L[fe[nt]++],xt(he,R,Me[nt]),De(Me[nt],Ae[nt]),Ze(Ae[nt]);Nt(Ae);for(let nt=0;nt<V;++nt)bt(Ae[nt],Ve[nt],Ye*64)}let qe=0;for(let Ye=0;Ye<V;++Ye){const nt=y[_.idx[Ye]].type;for(let St=8*We;St<8*We+rt;++St){qe=He[Ye][St];for(let Ft=0;Ft<J;++Ft){const Qt=Ft*64+(St&7)*8;P.setUint16(qe+0*nt,Ve[Ye][Qt+0],!0),P.setUint16(qe+2*nt,Ve[Ye][Qt+1],!0),P.setUint16(qe+4*nt,Ve[Ye][Qt+2],!0),P.setUint16(qe+6*nt,Ve[Ye][Qt+3],!0),P.setUint16(qe+8*nt,Ve[Ye][Qt+4],!0),P.setUint16(qe+10*nt,Ve[Ye][Qt+5],!0),P.setUint16(qe+12*nt,Ve[Ye][Qt+6],!0),P.setUint16(qe+14*nt,Ve[Ye][Qt+7],!0),qe+=16*nt}}if(J!=ne)for(let St=8*We;St<8*We+rt;++St){const Ft=He[Ye][St]+8*J*2*nt,Qt=J*64+(St&7)*8;for(let cn=0;cn<wt;++cn)P.setUint16(Ft+cn*2*nt,Ve[Ye][Qt+cn],!0)}}}const Je=new Uint16Array(j);P=new DataView(U.buffer);for(let We=0;We<V;++We){y[_.idx[We]].decoded=!0;const rt=y[_.idx[We]].type;if(y[We].type==2)for(let wt=0;wt<X;++wt){const qe=He[We][wt];for(let Ye=0;Ye<j;++Ye)Je[Ye]=P.getUint16(qe+Ye*2*rt,!0);for(let Ye=0;Ye<j;++Ye)P.setFloat32(qe+Ye*2*rt,Q(Je[Ye]),!0)}}}function Le(_,p,y,R,L,U){const P=new DataView(U.buffer),j=y[_],X=j.width,V=j.height,J=Math.ceil(X/8),ne=Math.ceil(V/8),ee=Math.floor(X/8),oe=X-(J-1)*8,ye=V-(ne-1)*8,he={value:0};let fe=0;const Ae=new Float32Array(64),Me=new Uint16Array(64),Ve=new Uint16Array(J*64);for(let He=0;He<ne;++He){let Je=8;He==ne-1&&(Je=ye);for(let We=0;We<J;++We)Me.fill(0),Me[0]=L[fe++],xt(he,R,Me),De(Me,Ae),Ze(Ae),bt(Ae,Ve,We*64);for(let We=8*He;We<8*He+Je;++We){let rt=p[_][We];for(let wt=0;wt<ee;++wt){const qe=wt*64+(We&7)*8;for(let Ye=0;Ye<8;++Ye)P.setUint16(rt+Ye*2*j.type,Ve[qe+Ye],!0);rt+=16*j.type}if(J!=ee){const wt=ee*64+(We&7)*8;for(let qe=0;qe<oe;++qe)P.setUint16(rt+qe*2*j.type,Ve[wt+qe],!0)}}}j.decoded=!0}function xt(_,p,y){let R,L=1;for(;L<64;)R=p[_.value],R==65280?L=64:R>>8==255?L+=R&255:(y[L]=R,L++),_.value++}function De(_,p){p[0]=Q(_[0]),p[1]=Q(_[1]),p[2]=Q(_[5]),p[3]=Q(_[6]),p[4]=Q(_[14]),p[5]=Q(_[15]),p[6]=Q(_[27]),p[7]=Q(_[28]),p[8]=Q(_[2]),p[9]=Q(_[4]),p[10]=Q(_[7]),p[11]=Q(_[13]),p[12]=Q(_[16]),p[13]=Q(_[26]),p[14]=Q(_[29]),p[15]=Q(_[42]),p[16]=Q(_[3]),p[17]=Q(_[8]),p[18]=Q(_[12]),p[19]=Q(_[17]),p[20]=Q(_[25]),p[21]=Q(_[30]),p[22]=Q(_[41]),p[23]=Q(_[43]),p[24]=Q(_[9]),p[25]=Q(_[11]),p[26]=Q(_[18]),p[27]=Q(_[24]),p[28]=Q(_[31]),p[29]=Q(_[40]),p[30]=Q(_[44]),p[31]=Q(_[53]),p[32]=Q(_[10]),p[33]=Q(_[19]),p[34]=Q(_[23]),p[35]=Q(_[32]),p[36]=Q(_[39]),p[37]=Q(_[45]),p[38]=Q(_[52]),p[39]=Q(_[54]),p[40]=Q(_[20]),p[41]=Q(_[22]),p[42]=Q(_[33]),p[43]=Q(_[38]),p[44]=Q(_[46]),p[45]=Q(_[51]),p[46]=Q(_[55]),p[47]=Q(_[60]),p[48]=Q(_[21]),p[49]=Q(_[34]),p[50]=Q(_[37]),p[51]=Q(_[47]),p[52]=Q(_[50]),p[53]=Q(_[56]),p[54]=Q(_[59]),p[55]=Q(_[61]),p[56]=Q(_[35]),p[57]=Q(_[36]),p[58]=Q(_[48]),p[59]=Q(_[49]),p[60]=Q(_[57]),p[61]=Q(_[58]),p[62]=Q(_[62]),p[63]=Q(_[63])}function Ze(_){const p=.5*Math.cos(.7853975),y=.5*Math.cos(3.14159/16),R=.5*Math.cos(3.14159/8),L=.5*Math.cos(3*3.14159/16),U=.5*Math.cos(5*3.14159/16),P=.5*Math.cos(3*3.14159/8),j=.5*Math.cos(7*3.14159/16),X=new Array(4),V=new Array(4),J=new Array(4),ne=new Array(4);for(let ee=0;ee<8;++ee){const oe=ee*8;X[0]=R*_[oe+2],X[1]=P*_[oe+2],X[2]=R*_[oe+6],X[3]=P*_[oe+6],V[0]=y*_[oe+1]+L*_[oe+3]+U*_[oe+5]+j*_[oe+7],V[1]=L*_[oe+1]-j*_[oe+3]-y*_[oe+5]-U*_[oe+7],V[2]=U*_[oe+1]-y*_[oe+3]+j*_[oe+5]+L*_[oe+7],V[3]=j*_[oe+1]-U*_[oe+3]+L*_[oe+5]-y*_[oe+7],J[0]=p*(_[oe+0]+_[oe+4]),J[3]=p*(_[oe+0]-_[oe+4]),J[1]=X[0]+X[3],J[2]=X[1]-X[2],ne[0]=J[0]+J[1],ne[1]=J[3]+J[2],ne[2]=J[3]-J[2],ne[3]=J[0]-J[1],_[oe+0]=ne[0]+V[0],_[oe+1]=ne[1]+V[1],_[oe+2]=ne[2]+V[2],_[oe+3]=ne[3]+V[3],_[oe+4]=ne[3]-V[3],_[oe+5]=ne[2]-V[2],_[oe+6]=ne[1]-V[1],_[oe+7]=ne[0]-V[0]}for(let ee=0;ee<8;++ee)X[0]=R*_[16+ee],X[1]=P*_[16+ee],X[2]=R*_[48+ee],X[3]=P*_[48+ee],V[0]=y*_[8+ee]+L*_[24+ee]+U*_[40+ee]+j*_[56+ee],V[1]=L*_[8+ee]-j*_[24+ee]-y*_[40+ee]-U*_[56+ee],V[2]=U*_[8+ee]-y*_[24+ee]+j*_[40+ee]+L*_[56+ee],V[3]=j*_[8+ee]-U*_[24+ee]+L*_[40+ee]-y*_[56+ee],J[0]=p*(_[ee]+_[32+ee]),J[3]=p*(_[ee]-_[32+ee]),J[1]=X[0]+X[3],J[2]=X[1]-X[2],ne[0]=J[0]+J[1],ne[1]=J[3]+J[2],ne[2]=J[3]-J[2],ne[3]=J[0]-J[1],_[0+ee]=ne[0]+V[0],_[8+ee]=ne[1]+V[1],_[16+ee]=ne[2]+V[2],_[24+ee]=ne[3]+V[3],_[32+ee]=ne[3]-V[3],_[40+ee]=ne[2]-V[2],_[48+ee]=ne[1]-V[1],_[56+ee]=ne[0]-V[0]}function Nt(_){for(let p=0;p<64;++p){const y=_[0][p],R=_[1][p],L=_[2][p];_[0][p]=y+1.5747*L,_[1][p]=y-.1873*R-.4682*L,_[2][p]=y+1.8556*R}}function bt(_,p,y){for(let R=0;R<64;++R)p[y+R]=Qo.toHalfFloat(F(_[R]))}function F(_){return _<=1?Math.sign(_)*Math.pow(Math.abs(_),2.2):Math.sign(_)*Math.pow(M,Math.abs(_)-1)}function E(_){return new DataView(_.array.buffer,_.offset.value,_.size)}function Z(_){const p=_.viewer.buffer.slice(_.offset.value,_.offset.value+_.size),y=new Uint8Array(Ke(p)),R=new Uint8Array(y.length);return B(y),ot(y,R),new DataView(R.buffer)}function ie(_){const p=_.array.slice(_.offset.value,_.offset.value+_.size),y=Ds(p),R=new Uint8Array(y.length);return B(y),ot(y,R),new DataView(R.buffer)}function ce(_){const p=_.viewer,y={value:_.offset.value},R=new Uint16Array(_.columns*_.lines*(_.inputChannels.length*_.type)),L=new Uint8Array(8192);let U=0;const P=new Array(_.inputChannels.length);for(let ye=0,he=_.inputChannels.length;ye<he;ye++)P[ye]={},P[ye].start=U,P[ye].end=P[ye].start,P[ye].nx=_.columns,P[ye].ny=_.lines,P[ye].size=_.type,U+=P[ye].nx*P[ye].ny*P[ye].size;const j=Ce(p,y),X=Ce(p,y);if(X>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(j<=X)for(let ye=0;ye<X-j+1;ye++)L[ye+j]=Ee(p,y);const V=new Uint16Array(65536),J=S(L,V),ne=Ue(p,y);Ge(_.array,p,y,ne,R,U);for(let ye=0;ye<_.inputChannels.length;++ye){const he=P[ye];for(let fe=0;fe<P[ye].size;++fe)we(R,he.start+fe,he.nx,he.size,he.ny,he.nx*he.size,J)}vt(V,R,U);let ee=0;const oe=new Uint8Array(R.buffer.byteLength);for(let ye=0;ye<_.lines;ye++)for(let he=0;he<_.inputChannels.length;he++){const fe=P[he],Ae=fe.nx*fe.size,Me=new Uint8Array(R.buffer,fe.end*2,Ae*2);oe.set(Me,ee),ee+=Ae*2,fe.end+=Ae}return new DataView(oe.buffer)}function te(_){const p=_.array.slice(_.offset.value,_.offset.value+_.size),y=Ds(p),R=_.inputChannels.length*_.lines*_.columns*_.totalBytes,L=new ArrayBuffer(R),U=new DataView(L);let P=0,j=0;const X=new Array(4);for(let V=0;V<_.lines;V++)for(let J=0;J<_.inputChannels.length;J++){let ne=0;switch(_.inputChannels[J].pixelType){case 1:X[0]=P,X[1]=X[0]+_.columns,P=X[1]+_.columns;for(let oe=0;oe<_.columns;++oe){const ye=y[X[0]++]<<8|y[X[1]++];ne+=ye,U.setUint16(j,ne,!0),j+=2}break;case 2:X[0]=P,X[1]=X[0]+_.columns,X[2]=X[1]+_.columns,P=X[2]+_.columns;for(let oe=0;oe<_.columns;++oe){const ye=y[X[0]++]<<24|y[X[1]++]<<16|y[X[2]++]<<8;ne+=ye,U.setUint32(j,ne,!0),j+=4}break}}return U}function Oe(_){const p=_.viewer,y={value:_.offset.value},R=new Uint8Array(_.columns*_.lines*(_.inputChannels.length*_.type*2)),L={version:ze(p,y),unknownUncompressedSize:ze(p,y),unknownCompressedSize:ze(p,y),acCompressedSize:ze(p,y),dcCompressedSize:ze(p,y),rleCompressedSize:ze(p,y),rleUncompressedSize:ze(p,y),rleRawSize:ze(p,y),totalAcUncompressedCount:ze(p,y),totalDcUncompressedCount:ze(p,y),acCompression:ze(p,y)};if(L.version<2)throw new Error("EXRLoader.parse: "+zn.compression+" version "+L.version+" is unsupported");const U=new Array;let P=Ce(p,y)-2;for(;P>0;){const he=ve(p.buffer,y),fe=Ee(p,y),Ae=fe>>2&3,Me=(fe>>4)-1,Ve=new Int8Array([Me])[0],He=Ee(p,y);U.push({name:he,index:Ve,type:He,compression:Ae}),P-=he.length+3}const j=zn.channels,X=new Array(_.inputChannels.length);for(let he=0;he<_.inputChannels.length;++he){const fe=X[he]={},Ae=j[he];fe.name=Ae.name,fe.compression=0,fe.decoded=!1,fe.type=Ae.pixelType,fe.pLinear=Ae.pLinear,fe.width=_.columns,fe.height=_.lines}const V={idx:new Array(3)};for(let he=0;he<_.inputChannels.length;++he){const fe=X[he];for(let Ae=0;Ae<U.length;++Ae){const Me=U[Ae];fe.name==Me.name&&(fe.compression=Me.compression,Me.index>=0&&(V.idx[Me.index]=he),fe.offset=he)}}let J,ne,ee;if(L.acCompressedSize>0)switch(L.acCompression){case 0:J=new Uint16Array(L.totalAcUncompressedCount),Ge(_.array,p,y,L.acCompressedSize,J,L.totalAcUncompressedCount);break;case 1:const he=_.array.slice(y.value,y.value+L.totalAcUncompressedCount),fe=Ds(he);J=new Uint16Array(fe.buffer),y.value+=L.totalAcUncompressedCount;break}if(L.dcCompressedSize>0){const he={array:_.array,offset:y,size:L.dcCompressedSize};ne=new Uint16Array(ie(he).buffer),y.value+=L.dcCompressedSize}if(L.rleRawSize>0){const he=_.array.slice(y.value,y.value+L.rleCompressedSize),fe=Ds(he);ee=Ke(fe.buffer),y.value+=L.rleCompressedSize}let oe=0;const ye=new Array(X.length);for(let he=0;he<ye.length;++he)ye[he]=new Array;for(let he=0;he<_.lines;++he)for(let fe=0;fe<X.length;++fe)ye[fe].push(oe),oe+=X[fe].width*_.type*2;V.idx[0]!==void 0&&X[V.idx[0]]&&Xe(V,ye,X,J,ne,R);for(let he=0;he<X.length;++he){const fe=X[he];if(!fe.decoded)switch(fe.compression){case 2:let Ae=0,Me=0;for(let Ve=0;Ve<_.lines;++Ve){let He=ye[he][Ae];for(let Je=0;Je<fe.width;++Je){for(let We=0;We<2*fe.type;++We)R[He++]=ee[Me+We*fe.width*fe.height];Me++}Ae++}break;case 1:Le(he,ye,X,J,ne,R);break;default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(R.buffer)}function ve(_,p){const y=new Uint8Array(_);let R=0;for(;y[p.value+R]!=0;)R+=1;const L=new TextDecoder().decode(y.slice(p.value,p.value+R));return p.value=p.value+R+1,L}function Ne(_,p,y){const R=new TextDecoder().decode(new Uint8Array(_).slice(p.value,p.value+y));return p.value=p.value+y,R}function Be(_,p){const y=Se(_,p),R=Ue(_,p);return[y,R]}function me(_,p){const y=Ue(_,p),R=Ue(_,p);return[y,R]}function Se(_,p){const y=_.getInt32(p.value,!0);return p.value=p.value+4,y}function Ue(_,p){const y=_.getUint32(p.value,!0);return p.value=p.value+4,y}function Fe(_,p){const y=_[p.value];return p.value=p.value+1,y}function Ee(_,p){const y=_.getUint8(p.value);return p.value=p.value+1,y}const ze=function(_,p){let y;return"getBigInt64"in DataView.prototype?y=Number(_.getBigInt64(p.value,!0)):y=_.getUint32(p.value+4,!0)+Number(_.getUint32(p.value,!0)<<32),p.value+=8,y};function z(_,p){const y=_.getFloat32(p.value,!0);return p.value+=4,y}function ge(_,p){return Qo.toHalfFloat(z(_,p))}function Q(_){const p=(_&31744)>>10,y=_&1023;return(_>>15?-1:1)*(p?p===31?y?NaN:1/0:Math.pow(2,p-15)*(1+y/1024):6103515625e-14*(y/1024))}function Ce(_,p){const y=_.getUint16(p.value,!0);return p.value+=2,y}function de(_,p){return Q(Ce(_,p))}function ae(_,p,y,R){const L=y.value,U=[];for(;y.value<L+R-1;){const P=ve(p,y),j=Se(_,y),X=Ee(_,y);y.value+=3;const V=Se(_,y),J=Se(_,y);U.push({name:P,pixelType:j,pLinear:X,xSampling:V,ySampling:J})}return y.value+=1,U}function Ie(_,p){const y=z(_,p),R=z(_,p),L=z(_,p),U=z(_,p),P=z(_,p),j=z(_,p),X=z(_,p),V=z(_,p);return{redX:y,redY:R,greenX:L,greenY:U,blueX:P,blueY:j,whiteX:X,whiteY:V}}function je(_,p){const y=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],R=Ee(_,p);return y[R]}function gt(_,p){const y=Se(_,p),R=Se(_,p),L=Se(_,p),U=Se(_,p);return{xMin:y,yMin:R,xMax:L,yMax:U}}function lt(_,p){const y=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],R=Ee(_,p);return y[R]}function gn(_,p){const y=["ENVMAP_LATLONG","ENVMAP_CUBE"],R=Ee(_,p);return y[R]}function ln(_,p){const y=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],R=["ROUND_DOWN","ROUND_UP"],L=Ue(_,p),U=Ue(_,p),P=Ee(_,p);return{xSize:L,ySize:U,levelMode:y[P&15],roundingMode:R[P>>4]}}function Yr(_,p){const y=z(_,p),R=z(_,p);return[y,R]}function kn(_,p){const y=z(_,p),R=z(_,p),L=z(_,p);return[y,R,L]}function pr(_,p,y,R,L){if(R==="string"||R==="stringvector"||R==="iccProfile")return Ne(p,y,L);if(R==="chlist")return ae(_,p,y,L);if(R==="chromaticities")return Ie(_,y);if(R==="compression")return je(_,y);if(R==="box2i")return gt(_,y);if(R==="envmap")return gn(_,y);if(R==="tiledesc")return ln(_,y);if(R==="lineOrder")return lt(_,y);if(R==="float")return z(_,y);if(R==="v2f")return Yr(_,y);if(R==="v3f")return kn(_,y);if(R==="int")return Se(_,y);if(R==="rational")return Be(_,y);if(R==="timecode")return me(_,y);if(R==="preview")return y.value+=L,"skipped";y.value+=L}function Kr(_,p){const y=Math.log2(_);return p=="ROUND_DOWN"?Math.floor(y):Math.ceil(y)}function jr(_,p,y){let R=0;switch(_.levelMode){case"ONE_LEVEL":R=1;break;case"MIPMAP_LEVELS":R=Kr(Math.max(p,y),_.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return R}function ui(_,p,y,R){const L=new Array(_);for(let U=0;U<_;U++){const P=1<<U;let j=p/P|0;R=="ROUND_UP"&&j*P<p&&(j+=1);const X=Math.max(j,1);L[U]=(X+y-1)/y|0}return L}function Zr(){const _=this,p=_.offset,y={value:0};for(let R=0;R<_.tileCount;R++){const L=Se(_.viewer,p),U=Se(_.viewer,p);p.value+=8,_.size=Ue(_.viewer,p);const P=L*_.blockWidth,j=U*_.blockHeight;_.columns=P+_.blockWidth>_.width?_.width-P:_.blockWidth,_.lines=j+_.blockHeight>_.height?_.height-j:_.blockHeight;const X=_.columns*_.totalBytes,J=_.size<_.lines*X?_.uncompress(_):E(_);p.value+=_.size;for(let ne=0;ne<_.lines;ne++){const ee=ne*_.columns*_.totalBytes;for(let oe=0;oe<_.inputChannels.length;oe++){const ye=zn.channels[oe].name,he=_.channelByteOffsets[ye]*_.columns,fe=_.decodeChannels[ye];if(fe===void 0)continue;y.value=ee+he;const Ae=(_.height-(1+j+ne))*_.outLineWidth;for(let Me=0;Me<_.columns;Me++){const Ve=Ae+(Me+P)*_.outputChannels+fe;_.byteArray[Ve]=_.getter(J,y)}}}}}function wi(){const _=this,p=_.offset,y={value:0};for(let R=0;R<_.height/_.blockHeight;R++){const L=Se(_.viewer,p)-zn.dataWindow.yMin;_.size=Ue(_.viewer,p),_.lines=L+_.blockHeight>_.height?_.height-L:_.blockHeight;const U=_.columns*_.totalBytes,j=_.size<_.lines*U?_.uncompress(_):E(_);p.value+=_.size;for(let X=0;X<_.blockHeight;X++){const V=R*_.blockHeight,J=X+_.scanOrder(V);if(J>=_.height)continue;const ne=X*U,ee=(_.height-1-J)*_.outLineWidth;for(let oe=0;oe<_.inputChannels.length;oe++){const ye=zn.channels[oe].name,he=_.channelByteOffsets[ye]*_.columns,fe=_.decodeChannels[ye];if(fe!==void 0){y.value=ne+he;for(let Ae=0;Ae<_.columns;Ae++){const Me=ee+Ae*_.outputChannels+fe;_.byteArray[Me]=_.getter(j,y)}}}}}}function $r(_,p,y){const R={};if(_.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");R.version=_.getUint8(4);const L=_.getUint8(5);R.spec={singleTile:!!(L&2),longName:!!(L&4),deepFormat:!!(L&8),multiPart:!!(L&16)},y.value=8;let U=!0;for(;U;){const P=ve(p,y);if(P==="")U=!1;else{const j=ve(p,y),X=Ue(_,y),V=pr(_,p,y,j,X);V===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${j}'.`):R[P]=V}}if((L&-7)!=0)throw console.error("THREE.EXRHeader:",R),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return R}function Jr(_,p,y,R,L,U){const P={size:0,viewer:p,array:y,offset:R,width:_.dataWindow.xMax-_.dataWindow.xMin+1,height:_.dataWindow.yMax-_.dataWindow.yMin+1,inputChannels:_.channels,channelByteOffsets:{},shouldExpand:!1,scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Rt};switch(_.compression){case"NO_COMPRESSION":P.blockHeight=1,P.uncompress=E;break;case"RLE_COMPRESSION":P.blockHeight=1,P.uncompress=Z;break;case"ZIPS_COMPRESSION":P.blockHeight=1,P.uncompress=ie;break;case"ZIP_COMPRESSION":P.blockHeight=16,P.uncompress=ie;break;case"PIZ_COMPRESSION":P.blockHeight=32,P.uncompress=ce;break;case"PXR24_COMPRESSION":P.blockHeight=16,P.uncompress=te;break;case"DWAA_COMPRESSION":P.blockHeight=32,P.uncompress=Oe;break;case"DWAB_COMPRESSION":P.blockHeight=256,P.uncompress=Oe;break;default:throw new Error("EXRLoader.parse: "+_.compression+" is unsupported")}const j={};for(const ee of _.channels)switch(ee.name){case"Y":case"R":case"G":case"B":case"A":j[ee.name]=!0,P.type=ee.pixelType}let X=!1,V=!1;if(j.R&&j.G&&j.B)P.outputChannels=4;else if(j.Y)P.outputChannels=1;else throw new Error("EXRLoader.parse: file contains unsupported data channels.");switch(P.outputChannels){case 4:U==1023?(X=!j.A,P.format=1023,P.colorSpace=Rt,P.outputChannels=4,P.decodeChannels={R:0,G:1,B:2,A:3}):U==1030?(P.format=1030,P.colorSpace=Rt,P.outputChannels=2,P.decodeChannels={R:0,G:1}):U==1028?(P.format=1028,P.colorSpace=Rt,P.outputChannels=1,P.decodeChannels={R:0}):V=!0;break;case 1:U==1023?(X=!0,P.format=1023,P.colorSpace=Rt,P.outputChannels=4,P.shouldExpand=!0,P.decodeChannels={Y:0}):U==1030?(P.format=1030,P.colorSpace=Rt,P.outputChannels=2,P.shouldExpand=!0,P.decodeChannels={Y:0}):U==1028?(P.format=1028,P.colorSpace=Rt,P.outputChannels=1,P.decodeChannels={Y:0}):V=!0;break;default:V=!0}if(V)throw new Error("EXRLoader.parse: invalid output format for specified file.");if(P.type==1)switch(L){case 1015:P.getter=de;break;case 1016:P.getter=Ce;break}else if(P.type==2)switch(L){case 1015:P.getter=z;break;case 1016:P.getter=ge}else throw new Error("EXRLoader.parse: unsupported pixelType "+P.type+" for "+_.compression+".");P.columns=P.width;const J=P.width*P.height*P.outputChannels;switch(L){case 1015:P.byteArray=new Float32Array(J),X&&P.byteArray.fill(1,0,J);break;case 1016:P.byteArray=new Uint16Array(J),X&&P.byteArray.fill(15360,0,J);break;default:console.error("THREE.EXRLoader: unsupported type: ",L);break}let ne=0;for(const ee of _.channels)P.decodeChannels[ee.name]!==void 0&&(P.channelByteOffsets[ee.name]=ne),ne+=ee.pixelType*2;if(P.totalBytes=ne,P.outLineWidth=P.width*P.outputChannels,_.lineOrder==="INCREASING_Y"?P.scanOrder=ee=>ee:P.scanOrder=ee=>P.height-1-ee,_.spec.singleTile){P.blockHeight=_.tiles.ySize,P.blockWidth=_.tiles.xSize;const ee=jr(_.tiles,P.width,P.height),oe=ui(ee,P.width,_.tiles.xSize,_.tiles.roundingMode),ye=ui(ee,P.height,_.tiles.ySize,_.tiles.roundingMode);P.tileCount=oe[0]*ye[0];for(let he=0;he<ee;he++)for(let fe=0;fe<ye[he];fe++)for(let Ae=0;Ae<oe[he];Ae++)ze(p,R);P.decode=Zr.bind(P)}else{P.blockWidth=P.width;const ee=Math.ceil(P.height/P.blockHeight);for(let oe=0;oe<ee;oe++)ze(p,R);P.decode=wi.bind(P)}return P}const Qr={value:0},es=new DataView(e),ia=new Uint8Array(e),zn=$r(es,e,Qr),Ln=Jr(zn,es,ia,Qr,this.type,this.outputFormat);if(Ln.decode(),Ln.shouldExpand){const _=Ln.byteArray;if(this.outputFormat==1023)for(let p=0;p<_.length;p+=4)_[p+2]=_[p+1]=_[p];else if(this.outputFormat==1030)for(let p=0;p<_.length;p+=2)_[p+1]=_[p]}return{header:zn,width:Ln.width,height:Ln.height,data:Ln.byteArray,format:Ln.format,colorSpace:Ln.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}setOutputFormat(e){return this.outputFormat=e,this}load(e,t,n,i){function s(a,o){a.colorSpace=o.colorSpace,a.minFilter=1006,a.magFilter=1006,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,o)}return super.load(e,s,n,i)}}const Ir={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class bi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const v_=new Zs(-1,1,1,-1,0,1);class x_ extends Ut{constructor(){super(),this.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new mt([0,2,0,0,2,0],2))}}const y_=new x_;class Qs{constructor(e){this._mesh=new yt(y_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,v_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class To extends bi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=er.clone(e.uniforms),this.material=new Dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Qs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ic extends bi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class M_ extends bi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class S_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new be);this._width=n.width,this._height=n.height,t=new Vt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:1016}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new To(Ir),this.copyPass.material.blending=0,this.clock=new Ic}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ic!==void 0&&(a instanceof ic?n=!0:a instanceof M_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class T_ extends bi{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const E_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class rr extends bi{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new be(e.x,e.y):new be(256,256),this.clearColor=new Pe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Vt(s,a,{type:1016}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Vt(s,a,{type:1016});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Vt(s,a,{type:1016});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),a=Math.round(a/2)}const o=E_;this.highPassUniforms=er.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Dt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new be(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=er.clone(Ir.uniforms),this.blendMaterial=new Dt({uniforms:this.copyUniforms,vertexShader:Ir.vertexShader,fragmentShader:Ir.fragmentShader,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Pe,this._oldClearAlpha=1,this._basic=new pn,this._fsQuad=new Qs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new be(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=rr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=rr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Dt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new be(.5,.5)},direction:{value:new be(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new Dt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}rr.BlurDirectionX=new be(1,0);rr.BlurDirectionY=new be(0,1);const Is={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class b_ extends bi{constructor(){super(),this.uniforms=er.clone(Is.uniforms),this.material=new sh({name:Is.name,uniforms:this.uniforms,vertexShader:Is.vertexShader,fragmentShader:Is.fragmentShader}),this._fsQuad=new Qs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},at.getTransfer(this._outputColorSpace)===dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const w_=["You made an ordinary day feel like home.","There is still a sunny spot here, just for you.","Small paws. A love that stays.","I miss the little sound of you following me.","Sleep softly, my sweetest friend.","Thank you for choosing me as your person.","Every quiet morning holds a little of you.","You left paw prints on all my favorite memories.","I hope the stars feel as warm as your favorite blanket.","A flower for every time you made me smile.","I still look for you in the afternoon light.","You were my smallest, greatest adventure.","May your dreams be full of sunbeams.","Your place in my heart will always be yours.","For the naps, the mischief, and the midnight cuddles.","I carry your gentle company with me.","Some love is too soft for words.","I would choose every moment with you again.","The world was kinder with you beside me.","Loved in every season. Remembered in every bloom.","A little light for my little shadow.","Your purr is a song I will never forget.","You taught me how beautiful a quiet life can be.","Wherever you are, I hope there are boxes to explore.","One more flower. One more thank you.","You are part of every place I call home.","Rest among the flowers, dear one.","Our time was small. Our love was not.","I remember your warmth more than the goodbye.","A soft place to land, a love without an end.","You will always be my favorite hello.","Until we find the same sunbeam again."],Xa=["A little flower","A quiet wish","A golden bloom","A gentle thought","A small light","A warm memory","A soft promise","A tender thank you"],rc=["for the joy you brought home.","for your sleepy morning company.","for every little adventure we shared.","for the comfort of your purr.","for all those sunlit afternoons.","for the love that stays with me.","for your wonderfully curious heart.","for my dearest little friend.","for every paw print in my heart.","for the sweetest ordinary moments.","for the warmth you left behind.","for the days we spent together.","for a friendship beyond words.","for the kindness in your gentle eyes.","for the peace you gave me.","for our own small, beautiful world.","for every time you curled up beside me.","for the home we found in each other.","for all your playful little surprises.","for a love I will always carry.","for our quiet evenings together.","for you, wherever the stars may lead.","for the happiness of knowing you.","for the memories still growing here.","for the naps we never wanted to end.","for the softest part of my life.","for the light in every memory.","for my companion in every season."];function A_(r){return w_[r]||`${Xa[(r-32)%Xa.length]} ${rc[Math.floor((r-32)/Xa.length)%rc.length]}`}const sc=["Mia","sunbeam.sophie","Oliver","Luna & Me","Maple","Theo","littlecloud","Amelia","Nora","peachypaws","Leo","Willow","Hazel","moonmilk","Eli","Juniper","softestdays","Isla","Charlie","stargazer.jo","Poppy","Arlo","Lily","mossandtea","Finn","Cleo","Emmy","Rowan","honeytoast","Jules","Kit","Wren"];function R_(r){return sc[r%sc.length]}const ac=[["mentha","love❤️"],["maya","see u among the star"],["leah","🩵"],["Lisa","have a good trip"],["Mentha","Always loved, in every little universe."],["Mentha","A little flower, an endless love."],["Mia","have a nice trip"],["Mentha","There is always a little light here for you."],["kikiiloveyou","always."]],C_=Array.from({length:29},(r,e)=>({id:e,name:e<20?R_(e):ac[e-20][0],message:e<20?A_(e):ac[e-20][1],authored:!0})),qa=256;function P_(r){let e=0;for(let t=0;t<12;t++){const n=1.65+t*.65,i=24+t*12;for(let s=0;s<i;s++){const a=s/i*Math.PI*2+.48,o=Math.sin(a)*n,l=Math.cos(a)*n;if(!(Math.abs(o)<1.02&&l>-.15||Math.hypot(o-3.4,l+1.6)<.85||n>6.4)&&e++===r)return new k(o,0,l)}}return new k(-2,0,-2)}function D_({scene:r,camera:e,onPlant:t,positionFor:n=P_,plantDelay:i=0,growthDuration:s=1500,refinedGrowth:a=!1,palette:o=null,onSelect:l=()=>{}}){let c=!1;const h={value:0},u={value:0},d={value:0},f=C_.map(ue=>({...ue}));let v=null,x=null,g=!0;const m=new an({vertexColors:!0,roughness:.85});m.userData.isMemorialFlower=!0;function w(ue,pe){const q=new Pe(pe),$=[];for(let se=0;se<ue.attributes.position.count;se++)$.push(q.r,q.g,q.b);return ue.setAttribute("color",new mt($,3)),ue}m.onBeforeCompile=ue=>{ue.uniforms.uInsideOpacity=d,ue.uniforms.uFlowerTime=h,ue.uniforms.uFlowerWind=u,ue.vertexShader=`uniform float uFlowerTime;
uniform float uFlowerWind;
varying float vFlowerGlow;
#ifdef USE_INSTANCING
attribute float instanceGlow;
#endif
`+ue.vertexShader,ue.vertexShader=ue.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowerGlow=0.;
#ifdef USE_INSTANCING
vFlowerGlow=instanceGlow;
transformed.x+=uFlowerWind*sin(uFlowerTime*1.25+instanceMatrix[3].x*4.+instanceMatrix[3].z*3.)*position.y*position.y*.13;
#endif`),ue.fragmentShader=`uniform float uInsideOpacity;
varying float vFlowerGlow;
`+ue.fragmentShader,ue.fragmentShader=ue.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * (vFlowerGlow * .4 + uInsideOpacity * .20);`),ue.fragmentShader=ue.fragmentShader.replace("#include <alphahash_fragment>",`diffuseColor.a *= mix(1.,mix(.06,.46,smoothstep(.25,1.3,length(vViewPosition))),uInsideOpacity);
#include <alphahash_fragment>`)},m.customProgramCacheKey=()=>"flower-instance-emission-v2";const T=[],b=o||["#fff2cd","#bfd7ef","#edbdb4","#dbcfef","#f1d27e","#e9ece1"];for(let ue=0;ue<6;ue++){const pe=[];pe.push(w(new Pn(.012,.018,.47,5).translate(0,.235,0),"#5c7652"));for(let $=0;$<3;$++){const se=new ai(1,7,5);se.scale(.095,.022,.04),se.rotateZ(($%2?1:-1)*.55),se.translate(($%2?1:-1)*.06,.12+$*.09,0),pe.push(w(se,"#819261"))}for(let $=0;$<5+ue%3;$++){const se=$/(5+ue%3)*Math.PI*2,we=new ai(1,8,5);we.scale(.077,.025,.046),we.rotateY(-se),we.translate(Math.cos(se)*.061,.47,Math.sin(se)*.061),pe.push(w(we,b[ue]))}pe.push(w(new ai(.032,8,6).translate(0,.485,0),"#cfaa56"));const q=new Tc(Mg(pe),m,qa);q.geometry.setAttribute("instanceGlow",new ks(new Float32Array(qa),1)),q.count=0,q.frustumCulled=!1,q.castShadow=!0,r.add(q),T.push(q)}let D=null;function A(ue){const pe=T[ue.id%6].geometry.clone();D=new yt(pe,m),D.userData.rest=pe.attributes.position.array.slice(),D.position.copy(n(ue.id)),D.rotation.y=ue.id*2.4,D.scale.setScalar(.95+ue.id%4*.1),D.castShadow=!0,D.frustumCulled=!1,r.add(D)}function C(ue){const pe=(_e,Ge)=>ut.smoothstep(ue,_e,Ge),q=pe(0,.58),$=pe(.42,1),se=D.geometry.attributes.position,we=D.userData.rest;if(D.visible=ue>.001,!!D.visible){for(let _e=0;_e<se.count;_e++){const Ge=we[_e*3],vt=we[_e*3+1],B=we[_e*3+2];if(vt>.42){const ot=.08+.92*$;se.setXYZ(_e,Ge*ot,.47*q+(vt-.47)*(.2+.8*$)+Math.hypot(Ge,B)*(1-$)*1.3,B*ot)}else{const ot=.04+.96*pe(.12+vt*.55,.42+vt*.55);se.setXYZ(_e,Ge*ot,vt*q,B*ot)}}se.needsUpdate=!0,D.geometry.computeVertexNormals()}}const N=document.createElement("canvas");N.width=128,N.height=128;const M=N.getContext("2d");M.fillStyle="#ffffff",M.beginPath(),M.moveTo(64,116),M.bezierCurveTo(54,96,20,78,20,52),M.bezierCurveTo(20,27,39,12,64,12),M.bezierCurveTo(89,12,108,27,108,52),M.bezierCurveTo(108,78,74,96,64,116),M.closePath(),M.fill();const S=new Or(N),I=new Map;let O=null;const W=T.map(()=>[]),H=new Mt;function Y(ue=1){T.forEach((pe,q)=>{pe.count=0,W[q]=[]});for(const pe of f){if(a&&v?.id===pe.id)continue;const q=n(pe.id),$=pe.id%6,se=T[$];H.position.copy(q),H.rotation.set(0,pe.id*2.4,0);const we=v?.id===pe.id?a?1e-4:Math.max(.001,ue):1;if(H.scale.setScalar(we*(.95+pe.id%4*.1)),H.updateMatrix(),se.setMatrixAt(se.count++,H.matrix),W[$].push(pe),pe.message&&!I.has(pe.id)){const _e=new ju(new yc({map:S,transparent:!0,depthWrite:!1,opacity:.82}));_e.userData.record=pe,_e.scale.set(.2,.2,1),r.add(_e),I.set(pe.id,_e)}}T.forEach(pe=>{pe.instanceMatrix.needsUpdate=!0,pe.computeBoundingSphere()})}Y();const G=new $s,re=new pn({color:b[0],side:1});re.onBeforeCompile=ue=>{ue.vertexShader=ue.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normal * .012;`)};const K=new yt(T[0].geometry,re);K.visible=!1,r.add(K);function le(){K.visible=!!O,O&&(re.color.set(b[O.id%6]),K.geometry=T[O.id%6].geometry,K.position.copy(n(O.id)),K.rotation.set(0,O.id*2.4,0),K.scale.setScalar(.95+O.id%4*.1),K.updateMatrixWorld())}function xe(ue,pe=!1){const q=f.find(we=>we.remoteId===ue.id);if(q)return q;let $=f.length;if(f.length>=qa){const we=f.findIndex(Ge=>Ge.remoteId);if(we<0)throw new Error("This little garden is full.");$=f[we].id,f.splice(we,1),O=null,x=null;const _e=I.get($);_e&&(r.remove(_e),_e.material.dispose(),I.delete($))}const se={id:$,remoteId:ue.id,name:ue.name,message:ue.message,date:ue.created_at,authored:!0};return f.push(se),pe&&(v={id:se.id,start:performance.now()+i},a&&A(se)),Y(pe?0:1),se}function Te(ue){f.length=0,O=null,x=null;for(const pe of I.values())r.remove(pe),pe.material.dispose();I.clear();for(const pe of ue)xe(pe);Y()}function ke(ue,pe){return xe({id:crypto.randomUUID(),name:ue.trim().slice(0,24)||"A friend",message:pe.trim().slice(0,240),created_at:new Date().toISOString()},!0)}function tt(ue){r.updateWorldMatrix(!0,!0),e.updateMatrixWorld(),G.setFromCamera(ue,e);const pe=G.intersectObjects(T,!1)[0];if(O=pe?W[T.indexOf(pe.object)][pe.instanceId]:null,!O){let q=32;const $=new k;for(const se of f){if($.copy(n(se.id)),$.y+=.485*(.95+se.id%4*.1),r.localToWorld($),$.project(e),$.z<-1||$.z>1)continue;const we=Math.hypot(($.x-ue.x)*innerWidth/2,($.y-ue.y)*innerHeight/2);we<q&&(q=we,O=se)}}return le(),O}return{plant:ke,addSaved:xe,hydrate:Te,getOutline:()=>(le(),O?K:null),getHoverColor:()=>b[O?.id%6||0],hoverAt:tt,clearHover:()=>{O=null,K.visible=!1},getHovered:()=>O,clearSelection:()=>{x=null,O=null,K.visible=!1},getRecords:()=>f.map(ue=>({...ue})),setImmersive:ue=>{d.value=Number(ue),c=ue>.5;const pe=ue>.001;m.transparent!==pe&&(m.transparent=pe,m.depthWrite=!pe,m.needsUpdate=!0)},setDetail:ue=>{g=ue},get blocked(){return!1},update(ue,pe){h.value=ue*.001,u.value=c&&!matchMedia("(prefers-reduced-motion: reduce)").matches?1:0;const q=O||x;T.forEach(($,se)=>{const we=$.geometry.attributes.instanceGlow;if(we.array.fill(0),c&&W[se].forEach((_e,Ge)=>we.setX(Ge,.12+.5*Math.pow(Math.max(0,Math.sin(ue*7e-4+_e.id*2.399)),6))),q&&g){const _e=W[se].findIndex(Ge=>Ge.id===q.id);_e>=0&&we.setX(_e,1)}we.needsUpdate=!0});for(const[$,se]of I){const we=n($),_e=q?.id===$;se.visible=!1;const Ge=matchMedia("(prefers-reduced-motion: reduce)").matches?0:Math.sin(ue*.0018+$)*.025;se.position.set(we.x,we.y+.78+$%4*.047+Ge,we.z),se.material.opacity=_e?1:.94,se.material.color.set(b[$%6]),_e&&se.material.color.lerp(new Pe("#ffffff"),.12),se.scale.setScalar(_e?.25:.2)}if(v){const $=Math.max(0,Math.min(1,(ue-v.start)/s));a?C($):Y(1-Math.pow(1-$,3)),$===1&&(v=null,D&&(r.remove(D),D.geometry.dispose(),D=null),Y())}}}}function I_(r){const e=(A,C=.7,N=0)=>new an({color:A,roughness:C,metalness:N}),t=e("#e1d2b8");e("#7b8c78");const n=e("#b59866",.3,.65),i=e("#a76d58");function s(A,C,N,M=r){const S=new yt(A,C);return S.position.set(...N),S.castShadow=S.receiveShadow=!0,M.add(S),S}function a(A,C,N,M,S,I){const O=new Kt;O.userData.memoryKey=`photo-${A}`,O.position.set(C,.59,N),O.rotation.set(-.1,I,.025*(A%2?1:-1)),r.add(O),s(new At(M,S,.12),e(A%2?"#746555":"#ba9f76"),[0,S/2,0],O),s(new At(M-.1,S-.1,.035),t,[0,S/2,.078],O);const W=new hr().load(`./assets/photos/memory-${[2,4,6].includes(A)?"candid":"varied"}-${A}.webp`,H=>{const Y=H.image.width/H.image.height,G=(M-.27)/(S-.27);Y>G?(H.repeat.x=G/Y,H.offset.x=(1-H.repeat.x)/2):(H.repeat.y=Y/G,H.offset.y=(1-H.repeat.y)/2),H.needsUpdate=!0});return W.colorSpace=Tt,s(new Rn(M-.27,S-.27),new an({map:W,roughness:.95}),[0,S/2,.1],O),s(new At(M*.65,.08,.6),e("#665649"),[0,.035,-.14],O),O}a(2,-6.3,-3,1.8,2.9,.08),a(4,-3.15,.65,1.85,1.12,-.08),a(5,3.6,-1.4,1.75,1.85,-.1),a(6,5.35,-2.9,1.7,2.5,-.12);const o=document.createElement("canvas");o.width=o.height=128;const l=o.getContext("2d");l.fillStyle="#888",l.fillRect(0,0,128,128),l.strokeStyle="#aaa",l.lineWidth=1;for(let A=0;A<128;A+=4)l.beginPath(),l.moveTo(A,0),l.lineTo(A,128),l.moveTo(0,A),l.lineTo(128,A),l.stroke();const c=new Or(o);c.wrapS=c.wrapT=1e3,c.repeat.set(8,8);const h=e("#829080");h.bumpMap=c,h.bumpScale=.015;const u=new Kt;u.userData.memoryKey="album",u.position.set(-5,.58,2.1),u.rotation.y=.2,r.add(u),s(new At(2.12,.045,1.58),h,[0,.0225,0],u),s(new At(1.98,.145,1.46),t,[.035,.1175,0],u),s(new At(2.12,.045,1.58),h,[0,.2125,0],u),s(new At(.085,.235,1.58),h,[-1.0175,.1175,0],u);for(let A=0;A<7;A++)s(new At(1.97,.003,.008),e("#b9ac96"),[.035,.059+A*.019,.734],u);const d=s(new ji(.43,.055,8,56),i,[-5,.895,2.32]);d.userData.memoryKey="collar",d.rotation.x=Math.PI/2,d.scale.x=1.23;const f=s(new Pn(.14,.14,.035,24),n,[-4.7,.75,2.92]);f.userData.memoryKey="collar",f.rotation.x=Math.PI/2,s(new ji(.055,.012,6,16),n,[-4.7,.86,2.9]),s(new At(.21,.09,.1),n,[-5.43,.895,2.47]);const v=document.createElement("canvas");v.width=v.height=128;const x=v.getContext("2d"),g=x.createRadialGradient(64,64,6,64,64,62);g.addColorStop(0,"rgba(24,18,14,.48)"),g.addColorStop(.5,"rgba(24,18,14,.22)"),g.addColorStop(1,"rgba(24,18,14,0)"),x.fillStyle=g,x.fillRect(0,0,128,128);const m=new Or(v);function w(A,C,N,M){const S=s(new Rn(N,M),new pn({map:m,transparent:!0,depthWrite:!1,opacity:.65}),[A,.582,C]);S.rotation.x=-Math.PI/2,S.castShadow=S.receiveShadow=!1}const T=new Kt;T.userData.memoryKey="mug",T.position.set(5.9,.6,1.15),T.scale.setScalar(1.45),r.add(T);const b=[new be(0,0),new be(.36,0),new be(.4,.08),new be(.42,.67),new be(.39,.71),new be(.35,.67),new be(.32,.09),new be(0,.09)];s(new _o(b,48),t,[0,0,0],T),s(new ji(.24,.065,10,32),t,[.48,.36,0],T);for(const A of[-.25,.25])s(new go(.1,.18,3),t,[A,.75,0],T);const D=s(new Ei(.34,40),e("#71563a",.25),[0,.55,0],T);return D.rotation.x=-Math.PI/2,{async loadBelongings(A=()=>{}){await Promise.all([["bed",4.8,-5.8,-.45,.15],["water-bowl",1.45,3.05,-.45,0],["fish-toy",1.25,-2.05,1.65,.65],["yarn-ball",.85,-5.6,2.75,0],["mouse-toy",.85,3.6,3.45,-.6]].map(async([C,N,M,S,I])=>{const{scene:O}=await new to().loadAsync("./assets/props/meshy-"+C+".glb");O.rotation.y=I,C==="fish-toy"&&(O.rotation.z=1.18,O.rotation.y=1.15),O.updateMatrixWorld(!0);const W=new An().setFromObject(O),H=W.getSize(new k),Y=W.getCenter(new k),G=N/Math.max(H.x,H.z),re=new Kt;if(re.userData.memoryKey=C,re.add(O),re.scale.setScalar(G),re.position.set(M-Y.x*G,.58-W.min.y*G-(C==="fish-toy"?.11:["mouse-toy","yarn-ball"].includes(C)?.018:0),S-Y.z*G),O.traverse(K=>{K.isMesh&&(K.castShadow=K.receiveShadow=!0)}),r.add(re),w(M,S,H.x*G*1.12,H.z*G*1.12),C==="water-bowl"){const K=s(new Ei(N*.33,48),new mn({color:"#91b8ad",metalness:.15,roughness:.12,transparent:!0,opacity:.75}),[M,.595+H.y*G*.65,S]);K.userData.memoryKey="water-bowl",K.rotation.x=-Math.PI/2}A()}))},async loadMug(A){const{scene:C}=await new to().loadAsync(A),N=new An().setFromObject(C),M=N.getSize(new k),S=N.getCenter(new k),I=1.45/Math.max(M.x,M.y,M.z);C.userData.memoryKey="mug",C.scale.setScalar(I),C.position.set(5.9-S.x*I,.58-N.min.y*I,1.15-S.z*I),C.traverse(O=>{O.isMesh&&(O.castShadow=O.receiveShadow=!0)}),r.add(C),T.visible=!1}}}function L_(r,e,t){const n=new Kt;r.add(n),n.visible=!1;const i=new hr().load("./assets/sky/milky-way-eso.webp");i.colorSpace=Tt;const s=new yt(new ai(38,64,40),new pn({map:i,side:1,depthWrite:!1,transparent:!0,opacity:0,color:"#e1e3f2"}));s.renderOrder=-1e3,s.rotation.set(.3,Math.PI/2,.32),n.add(s);const a=document.createElement("a");a.href="https://www.eso.org/public/images/eso0932a/",a.textContent="Milky Way: ESO/S. Brunier · CC BY 4.0",a.target="_blank",a.style.cssText="position:fixed;left:28px;top:28px;font-size:11px;color:#c4c5d1;z-index:6",a.hidden=!0,document.body.append(a);let o=935;const l=()=>(o=o*1664525+1013904223>>>0,o/4294967296),c=[],h=[];for(let C=0;C<2600;C++){const N=l()*Math.PI*2,M=l()*2-1,S=Math.sqrt(1-M*M);c.push(Math.cos(N)*S*30,M*30,Math.sin(N)*S*30);const I=new Pe().setHSL(.1+l()*.58,.16,.55+l()*.4);h.push(I.r,I.g,I.b)}const u=new Ut;u.setAttribute("position",new mt(c,3)),u.setAttribute("color",new mt(h,3));const d=new mo(u,new Ys({size:.035,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,sizeAttenuation:!0}));d.visible=!1,n.add(d),n.add(new Pc("#ffe8cd","#15151e",.1));for(const[C,N,M,S,I]of[[-.4,2.65,1.9,"#ffdbac",12],[.55,2.3,1.65,"#ffe4ba",2.5]]){const O=new js(S,I,7,.43,1,2);O.position.set(C,N,M),O.target.position.set(-.16,1.62,.18),n.add(O,O.target)}const f=new yt(new Ei(12,96),new an({color:"#10121d",roughness:.95}));f.renderOrder=-999,f.rotation.x=-Math.PI/2,f.position.y=.93,n.add(f);const v={value:0};e.traverse(C=>{if(!(!C.isMesh||C===t))for(const N of Array.isArray(C.material)?C.material:[C.material]){if(N.userData.isMemorialFlower||N.userData.interiorDim)return;N.userData.interiorDim=!0;const M=N.onBeforeCompile,S=N.customProgramCacheKey();N.onBeforeCompile=(I,O)=>{M.call(N,I,O),I.uniforms.uInteriorDim=v,I.vertexShader=`varying vec3 vInteriorPosition;
`+I.vertexShader,I.vertexShader=I.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vInteriorPosition=(modelMatrix*vec4(transformed,1.)).xyz;`),I.fragmentShader=`uniform float uInteriorDim;varying vec3 vInteriorPosition;
`+I.fragmentShader,I.fragmentShader=I.fragmentShader.replace("#include <opaque_fragment>",`float heightLight=smoothstep(1.06,1.65,vInteriorPosition.y);
    float frontLight=smoothstep(-.55,.25,vInteriorPosition.z);
    float edgeLight=1.-smoothstep(.42,.95,abs(vInteriorPosition.x));
    outgoingLight *= mix(1.,mix(.10,1.,heightLight*mix(.3,1.,frontLight)*mix(.4,1.,edgeLight)),uInteriorDim);
    #include <opaque_fragment>`)},N.customProgramCacheKey=()=>S+"-interior-focus",N.needsUpdate=!0}});const x=new Map,g=new Map,m=new Map;let w=0,T=r.fog;const b=[];n.traverse(C=>{C.isLight&&b.push([C,C.intensity])});function D(){for(const C of r.children)C===e||C===n||x.has(C)||(x.set(C,C.visible),C.traverse(N=>{if(N.isLight&&!m.has(N)&&m.set(N,N.intensity),!!N.isMesh)for(const M of Array.isArray(N.material)?N.material:[N.material])g.has(M)||g.set(M,{opacity:M.opacity,transparent:M.transparent,depthWrite:M.depthWrite})}))}function A(C){w=ut.clamp(C,0,1),v.value=w,D(),document.body.classList.toggle("inside-globe",w>.5),a.hidden=w<.8,n.visible=w>0,r.fog=w>.05?null:T;for(const[M,S]of x)M.visible=S&&w<.999;for(const[M,S]of g){const I=w>.001||S.transparent;M.transparent!==I&&(M.transparent=I,M.needsUpdate=!0),M.opacity=S.opacity*(1-w),M.depthWrite=S.depthWrite}const N=ut.smoothstep(w,0,.12);t.visible=N<.999,t.material.opacity=1-N,t.material.transmission=1,s.material.opacity=w,f.material.transparent=!0,f.material.depthWrite=!1,f.material.opacity=w;for(const[M,S]of b)M.intensity=S*w}return{set(C){A(C?1:0)},blend:A,update(){if(w>0){for(const[C,N]of m){const M=C.parent===r;C.intensity=(M?C.intensity:N)*(1-w)}r.environmentIntensity=ut.lerp(r.environmentIntensity,.035,w)}},get amount(){return w},get active(){return w>.5}}}function U_(r,e,{hemi:t,key:n,fill:i,lamp:s,glassMaterial:a,bloom:o,rainUniforms:l}){const c={value:0},h=new WeakSet,u=new js("#ffe1b0",0,14,.5,.8,2);u.position.set(-2.4,6.2,3.4),u.target.position.set(0,1.55,0),r.add(u,u.target);function d(v){for(;v;){if(v===e)return!0;v=v.parent}return!1}function f(){r.traverse(v=>{if(!v.isMesh||d(v)||h.has(v))return;h.add(v);const x=g=>{if(g.isShaderMaterial)return g;const m=g.clone(),w=g.onBeforeCompile;return g.defines&&(m.defines={...g.defines}),m.onBeforeCompile=(T,b)=>{w.call(m,T,b),T.uniforms.uNear=c,T.uniforms.uRainTime=l.uTime,T.uniforms.uRainAmount=l.uAmount,T.vertexShader=`varying vec3 vRainWorld;
`+T.vertexShader,T.vertexShader=T.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vRainWorld = (modelMatrix * vec4(transformed, 1.)).xyz;`),T.fragmentShader=`varying vec3 vRainWorld;
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
 `+T.fragmentShader,T.fragmentShader=`uniform float uNear;
`+T.fragmentShader,T.fragmentShader=T.fragmentShader.replace("#include <opaque_fragment>",`outgoingLight *= mix(1., .30, uNear) * (1. - rainShade(vRainWorld));
#include <opaque_fragment>`)},m.customProgramCacheKey=()=>g.customProgramCacheKey()+"-near-dim-rain-v2",m};v.material=Array.isArray(v.material)?v.material.map(x):x(v.material)})}return f(),{register:f,update(v,x=0){const g=ut.smoothstep(v,0,1);return c.value=g,t.color.set("#e5dccb").lerp(new Pe("#c4d7e4"),g),i.color.set("#e6dfcf").lerp(new Pe("#cbdce8"),g),n.color.set("#ffe1b4").lerp(new Pe("#d1e1ef"),g),t.intensity=ut.lerp(.35,.65,g),i.intensity=ut.lerp(.1,.38,g),n.intensity=ut.lerp(95,65,g),s.intensity=0,r.environmentIntensity=ut.lerp(.13,.07,g),a.envMapIntensity=ut.lerp(.42,.1,g),a.specularIntensity=.65,a.clearcoat=.65,a.emissive.set("#ffad63"),a.emissiveIntensity=x*.065,u.intensity=5*g,o.strength=ut.lerp(.19,.33,g)+x*.08,document.body.classList.remove("stage-active"),g}}}function N_(){const r=document.createElement("button");r.className="sound-toggle",r.dataset.recommend="true",r.textContent=`♫ Enable sound
Highly recommended`,r.setAttribute("aria-label","Enable ambient sound"),document.body.append(r);const e=new Audio("./assets/audio/kiki-theme-loop.mp3");e.loop=!0,e.preload="metadata";let t,n,i,s,a,o,l=!1,c=!1,h=!1,u="desk",d=0,f=!1,v=!1;function x(A,C){let N;return Promise.race([A,new Promise((M,S)=>{N=setTimeout(()=>S(new Error("Audio timed out")),C)})]).finally(()=>clearTimeout(N))}function g(A,C){const N=Math.min(C,A.duration/4),M=Math.floor(N*A.sampleRate),S=A.length-M,I=t.createBuffer(A.numberOfChannels,S,A.sampleRate);for(let O=0;O<A.numberOfChannels;O++){const W=A.getChannelData(O),H=I.getChannelData(O);H.set(W.subarray(M));for(let Y=0;Y<M;Y++){const G=Y/M;H[S-M+Y]=W[A.length-M+Y]*(1-G)+W[Y]*G}}return I}function m(){if(!l)return;const A=t.currentTime;n.gain.setTargetAtTime(c?0:.7,A,.4),o.gain.setTargetAtTime(u==="inside"?.39:u==="focus"?.24:.32,A,1.2),a.gain.setTargetAtTime(u==="focus"?.65:u==="desk"?d*.5:0,A,.8),i.gain.setTargetAtTime(u==="inside"?6:0,A,1.4),s.gain.setTargetAtTime(u==="inside"?.48:.14,A,1.5),r.dataset.recommend=String(c),r.dataset.mode=u,r.dataset.playing=String(!c),r.textContent=c?`♫ Enable sound
Highly recommended`:"♫ Sound on",r.setAttribute("aria-label",c?"Enable ambient sound":"Mute ambient sound"),r.setAttribute("aria-pressed",String(!c))}function w(){if(t)return;t=new(window.AudioContext||window.webkitAudioContext),n=t.createGain(),n.gain.value=0;const A=t.createDynamicsCompressor();A.threshold.value=-14,A.ratio.value=3,n.connect(A).connect(t.destination),i=t.createBiquadFilter(),i.type="lowshelf",i.frequency.value=240,i.connect(n),o=t.createGain(),o.gain.value=.32,o.connect(i);const C=t.createConvolver(),N=t.createBuffer(2,t.sampleRate*5,t.sampleRate);for(let M=0;M<2;M++){const S=N.getChannelData(M);for(let I=0;I<S.length;I++)S[I]=(Math.random()*2-1)*Math.pow(1-I/S.length,3)*.35}C.buffer=N,s=t.createGain(),s.gain.value=.14,o.connect(C).connect(s).connect(n),a=t.createGain(),a.gain.value=0,a.connect(n),t.createMediaElementSource(e).connect(o)}async function T(){if(!(f||v)){v=!0;try{const A=await fetch("./assets/audio/woodland-rain.mp3",{signal:AbortSignal.timeout(15e3)});if(!A.ok)throw new Error("Rain unavailable");const C=await x(t.decodeAudioData(await A.arrayBuffer()),15e3),N=t.createBufferSource();N.buffer=g(C,1),N.loop=!0,N.connect(a),N.start(),f=!0}catch{}finally{v=!1}}}function b(){l=!1,e.pause(),n&&(n.gain.value=0),r.textContent="♫ Tap to retry sound",r.dataset.playing="false",r.setAttribute("aria-label","Retry ambient sound"),r.setAttribute("aria-pressed","false")}async function D(){if(!h){h=!0,r.dataset.recommend="false",r.textContent="♫ Loading…";try{w();const A=t.resume(),C=e.play();await x(Promise.all([A,C]),12e3),l=!0,c=!1,m(),T()}catch{b()}finally{h=!1}}}return r.onclick=()=>{if(!l||c||t.state!=="running"){D();return}c=!0,m()},document.querySelector("canvas").addEventListener("click",()=>{!l&&!h&&D()}),document.addEventListener("visibilitychange",()=>{l&&(document.hidden?t.suspend().catch(()=>{}):c||x(t.resume(),3e3).then(()=>{m()}).catch(b))}),{setHoverRain(A){const C=Math.max(0,Math.min(1,A));Math.abs(C-d)<.005||(d=C,l&&a.gain.setTargetAtTime(u==="focus"?.65:u==="desk"?d*.5:0,t.currentTime,.65))},setMode(A){A!==u&&(u=A,m())}}}function F_(r){const t=new Float32Array(1680),n=[];let i=8721;const s=()=>(i=i*1664525+1013904223>>>0,i/4294967296);for(let d=0;d<560;d++)n.push([s()*Math.PI*2,Math.sqrt(s())*1.9,s(),.14+s()*.18]);const a=new Ut;a.setAttribute("position",new kt(t,3));const o=document.createElement("canvas");o.width=o.height=32;const l=o.getContext("2d"),c=l.createRadialGradient(16,16,0,16,16,15);c.addColorStop(0,"#fff"),c.addColorStop(.5,"#ffffffdd"),c.addColorStop(1,"#ffffff00"),l.fillStyle=c,l.fillRect(0,0,32,32);const h=new Ys({color:"#fff3db",map:new Or(o),size:.038,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0}),u=new mo(a,h);return u.renderOrder=11,u.frustumCulled=!1,u.visible=!1,r.add(u),{update(d,f){if(u.visible=d>=1.1&&d<9.5&&!f,!!u.visible){h.opacity=ut.smoothstep(d,1.1,2)*(1-ut.smoothstep(d,6.5,9.5))*.9;for(let v=0;v<560;v++){const[x,g,m,w]=n[v],T=(m+(d-1.1)*w)%1,b=4.95-T*3.6,D=Math.sqrt(Math.max(.1,2.5**2-(b-2.95)**2)),A=Math.min(g,D*.88);t[v*3]=Math.sin(x)*A+Math.sin(d*.7+v)*.055,t[v*3+1]=b,t[v*3+2]=Math.cos(x)*A+Math.cos(d*.6+v)*.05}a.attributes.position.needsUpdate=!0}}}}const O_="https://tkowkkymoecmhpnktcli.supabase.co",B_="sb_publishable_yeBjtVW6D_D2CyAtlbuTAg_ITkYWcNw";let vi;function k_(){if(vi)return vi;try{vi=localStorage.getItem("kiki-visitor")}catch{}/^[0-9a-f-]{36}$/i.test(vi||"")||(vi=crypto.randomUUID());try{localStorage.setItem("kiki-visitor",vi)}catch{}return vi}async function qc(r,e={}){let t;try{t=await fetch(O_+"/rest/v1/"+r,{...e,headers:{apikey:B_,"Content-Type":"application/json"},signal:AbortSignal.timeout(15e3)})}catch{throw new Error("Could not reach the garden. Please check your connection and try again.")}const n=await t.json();if(!t.ok)throw n.code==="P0001"?new Error(n.message):new Error("The garden could not save or load messages. Please try again shortly.");return n}async function z_(){return(await qc("kiki_messages?select=id,name,message,created_at&order=created_at.desc,id.desc&limit=200")).reverse()}async function G_(r,e,t){const n=await qc("rpc/leave_kiki_message",{method:"POST",body:JSON.stringify({p_id:t,p_visitor:k_(),p_name:r.trim(),p_message:e.trim()})});if(!n?.[0]?.id)throw new Error("No save confirmation received. Please try again.");return n[0]}function H_({scene:r,camera:e,cat:t,renderer:n,offerings:i,deskUI:s,navigate:a,rotate:o,onPlant:l}){const c=document.createElement("section");c.className="globe-actions",c.hidden=!0,c.innerHTML=`<button class="leave-flowers"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M20 28 32 56 45 28M32 56 32 21M23 43 41 43" fill="none" stroke="currentColor" stroke-width="2"/><g fill="#f2b788"><circle cx="19" cy="20" r="7"/><circle cx="12" cy="26" r="6"/><circle cx="24" cy="28" r="6"/></g><g fill="#eed498"><circle cx="34" cy="12" r="7"/><circle cx="27" cy="18" r="6"/><circle cx="39" cy="20" r="6"/></g><g fill="#d7a0ac"><circle cx="47" cy="23" r="7"/><circle cx="40" cy="29" r="6"/><circle cx="52" cy="30" r="6"/></g><path d="M19 42 Q11 31 25 36M39 40 Q52 34 45 45" fill="#adbf90"/></svg><span>Leave Kiki a bouquet</span></button>
 <div class="scene-return"><button data-view="focus">Back to the table ↗</button><button data-view="desk">Back to Kiki’s corner ↗</button></div>
 <button class="cat-invitation">Meet Kiki among the stars <span>↗</span></button>`,document.body.append(c);const h=c.querySelector(".leave-flowers"),u=c.querySelector(".cat-invitation"),d=c.querySelector('[data-view="focus"]'),f=document.createElement("dialog");f.className="flower-dialog",f.innerHTML='<form><button type="button" class="dialog-close" aria-label="Close">×</button><h2>A little love for Kiki</h2><p>Your words will bloom in her little world.</p><label>Your name or nickname<input name="name" maxlength="24" required placeholder="What should we call you?" autocomplete="given-name"></label><label>Your message<textarea name="message" maxlength="240" required rows="4" placeholder="Leave her a few kind words…"></textarea></label><p class="form-error" role="alert"></p><button class="plant-submit" type="submit">Leave a bouquet ↗</button><small>Your name and message will be saved and visible to everyone.</small></form>',document.body.append(f);const v=f.querySelector("form"),x=f.querySelector(".form-error");h.onclick=()=>{x.textContent="",f.showModal()},f.querySelector(".dialog-close").onclick=()=>f.close();const g=v.querySelector(".plant-submit");let m=!1,w=!1,T=null;async function b(){w||(i.hydrate(await z_()),w=!0)}const D=b().catch(()=>{f.querySelector("small").textContent="Saved messages could not load. Open this form again to retry."});h.onclick=async()=>{x.textContent="",f.showModal(),g.disabled=!0;try{await D,await b(),f.querySelector("small").textContent="Your name and message will be saved and visible to everyone."}catch(O){x.textContent=O.message}finally{g.disabled=m}},v.onsubmit=async O=>{if(O.preventDefault(),!m){m=!0,g.disabled=!0,g.textContent="Saving…",x.textContent="";try{await D,await b();const W=new FormData(v),H=String(W.get("name")).trim(),Y=String(W.get("message")).trim();if(!H||!Y)throw new Error("Please enter your name and a few words for Kiki.");const G=JSON.stringify([H,Y]);(!T||T.signature!==G)&&(T={signature:G,id:crypto.randomUUID()});const re=await G_(H,Y,T.id),K=i.addSaved(re,!0);T=null,f.close(),v.reset(),l(K)}catch(W){x.textContent=W.message}finally{m=!1,g.disabled=!1,g.textContent="Leave a bouquet ↗"}}},c.querySelectorAll("[data-view]").forEach(O=>O.onclick=()=>a(O.dataset.view)),u.onclick=()=>a("inside");const A=new $s,C=new be;let N=!1,M=!1,S=null;function I(O){if(!N||f.open)return!1;const W=n.domElement.getBoundingClientRect();return C.set((O.clientX-W.left)/W.width*2-1,-(O.clientY-W.top)/W.height*2+1),t.updateWorldMatrix(!0,!0),e.updateMatrixWorld(),A.setFromCamera(C,e),A.intersectObject(t,!0).length>0&&!i.getHovered()}return n.domElement.addEventListener("pointermove",O=>{M=O.buttons?!1:I(O)}),n.domElement.addEventListener("pointerleave",()=>M=!1),n.domElement.addEventListener("pointerdown",O=>{S={x:O.clientX,y:O.clientY,cat:I(O)}}),n.domElement.addEventListener("pointerup",O=>{S?.cat&&N&&Math.hypot(O.clientX-S.x,O.clientY-S.y)<6&&a("inside"),S=null}),{get catHovered(){return N&&M},get blocked(){return f.open},update(O,W,H=!1){if((!O||H||f.open)&&((N||W||H||f.open)&&s.setFocusOutline(null),M=!1),N=O&&!H,h.disabled=H,c.classList.toggle("ritual-running",H),c.hidden=!O&&!W,h.hidden=!O,d.hidden=!W,u.hidden=!O||!M||f.open,O||(M=!1),O&&!H){const Y=i.getOutline();s.setFocusOutline(!Y&&M?t:null,"#c6e79c"),n.domElement.style.cursor=M?"pointer":""}!O&&!f.open&&(u.hidden=!0)}}}function V_(r=Math.random){let e=0,t=.9,n=null,i=null;return{reset(){e=0,t=1.8,n=null},update(s,a){if(!a.length)return null;if(e+=Math.max(0,Math.min(s,.1)),!n){if(e<t)return null;const o=a.filter(l=>l!==i);n=i===null&&a.includes("globe")?"globe":(o.length?o:a)[Math.floor(r()*(o.length||a.length))],e=0}return a.includes(n)?e>=2.8?(i=n,n=null,e=0,t=1.5+r()*1.5,null):{id:n,amount:Math.sin(Math.PI*e/2.8)**2}:(n=null,e=0,null)}}}class si extends bi{constructor(e,t,n,i){super(),this.renderScene=t,this.renderCamera=n,this.selectedObjects=i!==void 0?i:[],this.visibleEdgeColor=new Pe(1,1,1),this.hiddenEdgeColor=new Pe(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.patternTexture=null,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new be(e.x,e.y):new be(256,256);const s=Math.round(this.resolution.x/this.downSampleRatio),a=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new Vt(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new Ac,this.depthMaterial.side=2,this.depthMaterial.depthPacking=3201,this.depthMaterial.blending=0,this.prepareMaskMaterial=this._getPrepareMaskMaterial(),this.prepareMaskMaterial.side=2,this.prepareMaskMaterial.fragmentShader=h(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new Vt(this.resolution.x,this.resolution.y,{type:1016}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new Vt(s,a,{type:1016}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new Vt(s,a,{type:1016}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new Vt(Math.round(s/2),Math.round(a/2),{type:1016}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this._getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new Vt(s,a,{type:1016}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new Vt(Math.round(s/2),Math.round(a/2),{type:1016}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const o=4,l=4;this.separableBlurMaterial1=this._getSeparableBlurMaterial(o),this.separableBlurMaterial1.uniforms.texSize.value.set(s,a),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this._getSeparableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(s/2),Math.round(a/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this._getOverlayMaterial();const c=Ir;this.copyUniforms=er.clone(c.uniforms),this.materialCopy=new Dt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Pe,this.oldClearAlpha=1,this._fsQuad=new Qs(null),this.tempPulseColor1=new Pe,this.tempPulseColor2=new Pe,this.textureMatrix=new $e;function h(u,d){const f=d.isPerspectiveCamera?"perspective":"orthographic";return u.replace(/DEPTH_TO_VIEW_Z/g,f+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this._fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let n=Math.round(e/this.downSampleRatio),i=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(n,i),this.renderTargetBlurBuffer1.setSize(n,i),this.renderTargetEdgeBuffer1.setSize(n,i),this.separableBlurMaterial1.uniforms.texSize.value.set(n,i),n=Math.round(n/2),i=Math.round(i/2),this.renderTargetBlurBuffer2.setSize(n,i),this.renderTargetEdgeBuffer2.setSize(n,i),this.separableBlurMaterial2.uniforms.texSize.value.set(n,i)}render(e,t,n,i,s){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,s&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this._updateSelectionCache(),this._changeVisibilityOfSelectedObjects(!1);const o=this.renderScene.background,l=this.renderScene.overrideMaterial;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this._updateTextureMatrix(),this._changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=o,this.renderScene.overrideMaterial=l,this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this._fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const c=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(c),this.tempPulseColor2.multiplyScalar(c)}this._fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=si.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=si.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=si.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=si.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,s&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(n),this._fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}this.renderToScreen&&(this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=n.texture,e.setRenderTarget(null),this._fsQuad.render(e))}_updateSelectionCache(){const e=this._selectionCache;function t(n){n.isMesh&&e.add(n)}e.clear();for(let n=0;n<this.selectedObjects.length;n++)this.selectedObjects[n].traverse(t)}_changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;for(const n of this._selectionCache)e===!0?n.visible=t.get(n):(t.set(n,n.visible),n.visible=e)}_changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,n=this._selectionCache;function i(s){if(s.isPoints||s.isLine||s.isLine2)e===!0?s.visible=t.get(s):(t.set(s,s.visible),s.visible=e);else if((s.isMesh||s.isSprite)&&!n.has(s)){const a=s.visible;(e===!1||t.get(s)===!0)&&(s.visible=e),t.set(s,a)}}this.renderScene.traverse(i)}_updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}_getPrepareMaskMaterial(){return new Dt({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new be(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <batching_pars_vertex>
				#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <batching_vertex>
					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif

					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}_getEdgeDetectionMaterial(){return new Dt({uniforms:{maskTexture:{value:null},texSize:{value:new be(.5,.5)},visibleEdgeColor:{value:new k(1,1,1)},hiddenEdgeColor:{value:new k(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}_getSeparableBlurMaterial(e){return new Dt({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new be(.5,.5)},direction:{value:new be(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}_getOverlayMaterial(){return new Dt({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:2,depthTest:!1,depthWrite:!1,transparent:!0})}}si.BlurDirectionX=new be(1,0);si.BlurDirectionY=new be(0,1);const Ls={globe:["A little world, all hers","Step into Kiki’s inner world."],bed:["Her sunny little nest","Fourteen years of afternoon naps. She always left one paw hanging over the edge."],"water-bowl":["The quiet water bowl","Fresh water every morning. Kiki still preferred a sip from your cup."],"fish-toy":["The fish she brought you","A tiny gift left beside your slippers, usually just before breakfast."],"yarn-ball":["One very patient ball of yarn","She never chased it far. Unravelling it beside you was the whole adventure."],"mouse-toy":["Her midnight mouse","By day, perfectly innocent. At two in the morning, the reason you woke up smiling."],mug:["Your cup, her curiosity","Tea for you. A curious nose over the rim for Kiki. Neither of you minded sharing the moment."],collar:["Her first collar","Soft rose leather and a little brass tag. She grew into it, then made every room feel like home."],album:["The little green album","Fourteen years of blurry paws, sunlit whiskers, and ordinary days worth keeping."],notebook:["Things you never wanted to forget","Her tiny chirp at the window. The warm weight beside your feet. You wrote it all down."],"photo-2":["The blanket nap","A cream-white domestic longhair with a gift for finding the warmest patch in every room."],"photo-4":["Her garden patrol","She took the same slow route through the daisies, stopping to investigate every leaf."],"photo-5":["Absolutely no thoughts","A close-up, a little pink tongue, and your favourite accidental photograph."],"photo-6":["Five more minutes of play","Even at fourteen, a ribbon could turn the gentle queen of naps into a kitten again."],"photo-3":["The blue-hour companion","When the room grew quiet, Kiki would settle nearby. Being together was enough."]};function W_({scene:r,camera:e,composer:t,globe:n,glass:i,renderer:s,backdrops:a,onEnter:o}){const l=new si(new be(innerWidth,innerHeight),r,e);l.visibleEdgeColor.set("#d6eca0"),l.hiddenEdgeColor.set("#000000"),l.edgeStrength=3,l.edgeGlow=.7,l.edgeThickness=1.5,l.pulsePeriod=0,t.insertPass(l,1);const c=document.createElement("h1");c.className="desk-title",c.textContent="Kiki’s Secret Corner",document.body.append(c);const h=document.createElement("p");h.className="desk-dates",h.textContent="May 2012 — August 2026",document.body.append(h);const u=document.createElement("div");u.className="desk-memory",u.setAttribute("role","status"),u.setAttribute("aria-live","polite"),u.innerHTML='<span class="desk-memory-name"></span><p></p>',document.body.append(u);const d=u.querySelector("span"),f=u.querySelector("p"),v={value:0},x=new yt(i.geometry,new Dt({transparent:!0,depthWrite:!1,blending:2,uniforms:{uGlow:v},vertexShader:"varying vec3 n;varying vec3 v;void main(){vec4 p=modelViewMatrix*vec4(position,1.);n=normalize(normalMatrix*normal);v=normalize(-p.xyz);gl_Position=projectionMatrix*p;}",fragmentShader:"uniform float uGlow;varying vec3 n;varying vec3 v;void main(){float facing=clamp(abs(dot(normalize(n),normalize(v))),0.,1.);float rim=pow(1.-facing,2.5);gl_FragColor=vec4(.76,.94,.48,uGlow*(.018+.28*rim));}"}));x.position.copy(i.position),x.scale.setScalar(1.006),x.renderOrder=13,n.add(x);const g=new xo("#d9edac",0,5,2);g.position.set(0,2.2,1.1),n.add(g);const m=new $s,w=new be,T=new Cn,b=new k,D=new k,A=V_(),C=matchMedia("(prefers-reduced-motion: reduce)");let N=null,M=!1,S=0,I=0;function O(){A.reset(),N=null,l.selectedObjects=[],u.classList.remove("visible"),s.domElement.style.cursor=""}function W(Y){if(!M)return null;const G=s.domElement.getBoundingClientRect();w.set((Y.clientX-G.left)/G.width*2-1,-(Y.clientY-G.top)/G.height*2+1),r.updateMatrixWorld(!0),e.updateMatrixWorld(),m.setFromCamera(w,e);const re=r.children.filter(ke=>ke.visible&&ke.userData.memoryKey),K=m.intersectObjects(re,!0).find(ke=>ke.object.visible);let le=K?.object;for(;le&&!le.userData.memoryKey;)le=le.parent;n.localToWorld(b.copy(i.position)),T.set(b,2.65*.54*1.08),m.ray.intersectSphere(T,D)&&(!K||e.position.distanceTo(D)<K.distance)&&(le=n);const Te=le?.userData.memoryKey;return!Te||!Ls[Te]?(O(),null):(N!==Te&&(N=Te,u.classList.toggle("globe-invitation",Te==="globe"),d.textContent=Te==="globe"?"":Ls[Te][0],f.textContent=Ls[Te][1],u.classList.add("visible")),l.selectedObjects=Te==="globe"?[i]:[le],l.edgeStrength=Te==="globe"?5:3,A.reset(),l.edgeGlow=.7,l.edgeThickness=1.5,s.domElement.style.cursor=Te==="globe"?"pointer":"default",Te)}s.domElement.addEventListener("pointermove",Y=>{Y.buttons===0?W(Y):O()}),s.domElement.addEventListener("pointerleave",O);let H=null;return s.domElement.addEventListener("pointerdown",Y=>{H={x:Y.clientX,y:Y.clientY,id:W(Y)}}),s.domElement.addEventListener("pointerup",Y=>{H?.id==="globe"&&Math.hypot(Y.clientX-H.x,Y.clientY-H.y)<6&&M&&(O(),o()),H=null}),s.domElement.addEventListener("pointercancel",()=>{H=null,O()}),{setFocusOutline(Y,G){l.selectedObjects=Y?[Y]:[],l.visibleEdgeColor.set(G||"#c3e890"),l.hiddenEdgeColor.set(G||"#c3e890"),l.edgeGlow=1.1,l.edgeStrength=4.5},update(Y,G){if(M&&!G&&O(),M=G,I=0,G&&(l.visibleEdgeColor.set("#d6eca0"),l.hiddenEdgeColor.set("#000000"),!N)){const re=r.children.filter(Te=>Te.visible&&Ls[Te.userData.memoryKey]),K=re.map(Te=>Te.userData.memoryKey);K.includes("globe")||K.push("globe");const le=H?null:C.matches?{id:"globe",amount:.3}:A.update(Y,K),xe=le?.id==="globe"?i:re.find(Te=>Te.userData.memoryKey===le?.id);l.selectedObjects=xe?[xe]:[],l.edgeStrength=le?le.amount*3.2:0,l.edgeGlow=.75,l.edgeThickness=1.5,le?.id==="globe"&&(I=le.amount*.5)}return h.hidden=!G,c.classList.toggle("hidden",!G),c.setAttribute("aria-hidden",String(!G)),u.hidden=!G,S=ut.damp(S,G&&N==="globe"?1:0,2.4,Y),v.value=Math.max(S,I),x.visible=v.value>.001,g.intensity=S*1.3,a.setOvercast(S),S}}}function X_(r){const e=new Kt;r.add(e);const t=g=>new an({color:g,roughness:.85});function n(g,m,w,T,b,D,A,C){const N=new yt(new At(m,w,T),t(C));return N.position.set(b,D,A),g.add(N),N}n(e,17,16,.3,-19.5,7,-5.9,"#5e5854"),n(e,12,16,.3,17,7,-5.9,"#5e5854"),n(e,40,5,.3,0,-1.9,-5.9,"#5e5854"),n(e,40,6,.3,0,19,-5.9,"#5e5854");for(const g of[-11,11])n(e,.16,15.45,.5,g,8.275,-5.6,"#463f36");for(const g of[.55,16])n(e,22.2,.16,.65,0,g,-5.5,"#726859");n(e,.12,15.45,.3,0,8.275,-5.45,"#927252"),n(e,22,.12,.3,0,8.45,-5.45,"#927252");const i=new hr().load("./assets/sky/woodland-soft-v2.webp");i.colorSpace=Tt;const s=new pn({map:i,color:new Pe().setScalar(.86)}),a={value:0};s.onBeforeCompile=g=>{g.uniforms.uOvercast=a,g.fragmentShader=`uniform float uOvercast;
`+g.fragmentShader,g.fragmentShader=g.fragmentShader.replace("#include <opaque_fragment>",`float gray=dot(outgoingLight,vec3(.2126,.7152,.0722));outgoingLight=mix(outgoingLight,mix(outgoingLight,vec3(gray)*vec3(.91,.98,1.03),.48)*.58,uOvercast);
#include <opaque_fragment>`)};const o=new yt(new Rn(22,15.45),s);o.position.set(0,8.275,-6.1),e.add(o);const l={value:0},c=[],h=[],u=new $s;let d=null,f=-1/0,v=null;function x(g,m,w,T,b){const D=new yt(new Pn(.035,.035,w-m+.6,16),t("#918575"));D.rotation.z=Math.PI/2,D.position.set((m+w)/2,T+.1,-5.02),g.add(D);for(const[A,C]of[[1,m],[-1,w]]){const M=T-b,S=new Rn(5.8,M,120,64),I=S.attributes.position;for(let G=0;G<I.count;G++){const re=S.attributes.uv.getX(G),K=S.attributes.uv.getY(G);I.setZ(G,Math.sin(re*Math.PI*24)*(.2+.06*(1-K))),I.setY(G,I.getY(G)+Math.cos(re*Math.PI*24)*.025*(1-K))}S.computeVertexNormals();const O=new an({color:"#f4ecda",roughness:1,transparent:!0,opacity:.62,side:2,depthWrite:!1,emissive:"#d8c9ab",emissiveIntensity:.1}),W={value:0},H={gust:W,velocity:0};h.push(H),O.onBeforeCompile=G=>{G.uniforms.uCurtainGust=W,G.uniforms.uCurtainTime=l,G.vertexShader=`uniform float uCurtainGust;
uniform float uCurtainTime;
`+G.vertexShader,G.vertexShader=G.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
    float hem=pow(1.-uv.y,1.35);
    float breeze=.72+.28*sin(uCurtainTime*.31);
    transformed.x+=hem*breeze*(sin(uCurtainTime*.65+uv.y*2.8+${A.toFixed(1)})*.32+sin(uCurtainTime*.39+uv.x*4.)*.10);
    transformed.z+=hem*(.22+sin(uCurtainTime*.57+uv.y*3.5+uv.x*2.+${A.toFixed(1)})*.46)*breeze;
    transformed.y+=hem*(.035+.035*sin(uCurtainTime*.7+uv.x*3.));
    float lift=pow(1.-uv.y,1.05);
    transformed.x+=lift*uCurtainGust*${A.toFixed(1)}*.48;
    transformed.z+=lift*uCurtainGust*(.8+.22*sin(uv.y*4.+uv.x*3.-uCurtainTime*1.4));
    transformed.y+=lift*abs(uCurtainGust)*.055;`),G.fragmentShader=G.fragmentShader.replace("#include <alphamap_fragment>",`#include <alphamap_fragment>
    float fold=.5+.5*cos(vUv.x*75.3982);
    diffuseColor.rgb*=mix(.70,1.10,fold);diffuseColor.a*=mix(.74,1.12,fold);
    float border=1.-smoothstep(.015,.035,vUv.y);diffuseColor.a=mix(diffuseColor.a,.76,border);`)},O.defines={USE_UV:""};const Y=new yt(S,O);Y.position.set(C+A*2.1,(T+b)/2,-4.98),g.add(Y),c.push(Y);for(let G=0;G<9;G++){const re=new yt(new ji(.052,.009,6,12),t("#ada292"));re.position.set(C+A*2.1-5.8/2+G*5.8/8,T+.04,-5.02),g.add(re)}}}return x(e,-10.1,10.1,16.07,.66),r.background.set("#9ab5c0"),{setOvercast(g){a.value=g},hover(g,m){e.updateWorldMatrix(!0,!0),m.updateMatrixWorld(),u.setFromCamera(g,m);const w=u.intersectObjects(c,!1)[0],T=w?.object,b=performance.now()/1e3;if(T&&(T!==v||b-f>.45)){const D=h[c.indexOf(T)];D.velocity=Math.min(1.7,D.velocity+1.1),f=b}v=T},clearHover(){v=null},update(g,m){const w=d===null?0:Math.min(.05,Math.max(0,g-d));d=g,l.value=m?0:g;for(const T of h){if(m){T.gust.value=0,T.velocity=0;continue}T.velocity+=(-3.8*T.gust.value-1.15*T.velocity)*w,T.gust.value+=T.velocity*w}}}}const Fn=matchMedia("(prefers-reduced-motion: reduce)").matches;document.body.classList.add("globe-mode");document.title="Kiki’s Secret Corner";const Eo=document.querySelector("#loading-scene");Eo.hidden=!1;Eo.textContent="Opening your little world…";const Ct=new Ku;Ct.background=new Pe("#292b38");Ct.fog=new co("#34313b",.022);const sr=document.querySelector("#garden"),Pt={width:sr.clientWidth,height:sr.clientHeight},ct=new $t(32,Pt.width/Pt.height,.05,100),It=new vg({antialias:!0,powerPreference:"high-performance"});It.setPixelRatio(Math.min(devicePixelRatio,1.5));It.setSize(Pt.width,Pt.height,!1);It.toneMapping=4;It.toneMappingExposure=1.05;It.shadowMap.enabled=!0;It.shadowMap.type=2;sr.append(It.domElement);const ci=new S_(It);ci.addPass(new T_(Ct,ct));const Yc=new rr(new be(Pt.width,Pt.height),.22,.8,.82),q_=new To({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`
uniform sampler2D tDiffuse;varying vec2 vUv;
bool finiteColor(vec4 c){return !any(isnan(c))&&!any(isinf(c));}
void main(){
 vec4 c=texture2D(tDiffuse,vUv);
 if(!finiteColor(c)){
  vec2 texel=1./vec2(textureSize(tDiffuse,0));vec4 total=vec4(0.);float count=0.;
  for(int y=-1;y<=1;y++)for(int x=-1;x<=1;x++){
   vec4 neighbor=texture2D(tDiffuse,clamp(vUv+vec2(float(x),float(y))*texel,vec2(0.),vec2(1.)));
   if(finiteColor(neighbor)){total+=neighbor;count+=1.;}
  }
  c=count>0.?total/count:vec4(0.,0.,0.,1.);
 }
 gl_FragColor=vec4(clamp(c.rgb,vec3(0.),vec3(8192.)),clamp(c.a,0.,1.));
}`});ci.addPass(q_);ci.addPass(Yc);const Kc=new To({uniforms:{tDiffuse:{value:null},uPixel:{value:new be(1/Pt.width,1/Pt.height)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse;uniform vec2 uPixel;varying vec2 vUv;void main(){float edge=smoothstep(.24,.65,length((vUv-vec2(.5,.5))*vec2(1.,.8)));vec2 d=uPixel*edge*4.;vec4 c=texture2D(tDiffuse,vUv)*.28;c+=(texture2D(tDiffuse,vUv+vec2(d.x,0.))+texture2D(tDiffuse,vUv-vec2(d.x,0.))+texture2D(tDiffuse,vUv+vec2(0.,d.y))+texture2D(tDiffuse,vUv-vec2(0.,d.y)))*.12;c+=(texture2D(tDiffuse,vUv+d)+texture2D(tDiffuse,vUv-d)+texture2D(tDiffuse,vUv+vec2(d.x,-d.y))+texture2D(tDiffuse,vUv+vec2(-d.x,d.y)))*.06;gl_FragColor=c;}"});ci.addPass(Kc);ci.addPass(new b_);function In(r,e=.65,t=0){return new an({color:r,roughness:e,metalness:t})}function Lt(r,e,t,n=Ct){const i=new yt(r,e);return i.position.set(...t),i.castShadow=!0,i.receiveShadow=!0,n.add(i),i}function ea(r,e,t){const n=document.createElement("canvas");n.width=r,n.height=e,t(n.getContext("2d"),r,e);const i=new Or(n);return i.colorSpace=Tt,i}let Ya=713;function tn(){return Ya=Ya*1664525+1013904223>>>0,Ya/4294967296}const Hs=ea(1024,512,(r,e,t)=>{r.fillStyle="#785542",r.fillRect(0,0,e,t);for(let n=0;n<1400;n++){const i=tn()*t;r.strokeStyle=`rgba(${tn()>.5?"39,22,16":"212,162,115"},${.025+tn()*.075})`,r.lineWidth=.4+tn()*1.4,r.beginPath(),r.moveTo(0,i);for(let s=0;s<=e;s+=32)r.lineTo(s,i+Math.sin(s*.006+n)*3);r.stroke()}});Hs.wrapS=Hs.wrapT=1e3;Hs.repeat.set(2,2);Lt(new At(16,.36,10),new an({map:Hs,roughness:.52}),[0,.4,0]);const bo=In("#51392d",.72);Lt(new At(15.8,1.6,.2),bo,[0,-.56,4.78]);for(const r of[-7.78,7.78])Lt(new At(.2,1.6,9.5),bo,[r,-.56,0]);for(const r of[-7.2,7.2])for(const e of[-4.2,4.2])Lt(new At(.34,3.6,.34),bo,[r,-1.57,e]);const Y_=Lt(new Rn(100,100),In("#403b36",.95),[0,-3.38,0]);Y_.rotation.x=-Math.PI/2;Lt(new At(100,8,.3),In("#514a45",.95),[0,-3.4,-6.4]);const ar=X_(Ct),jc=new Pc("#e5dccb","#a28060",.8);Ct.add(jc);const Jt=new js("#ffe1b4",70,28,.72,.85,1.3);Jt.position.set(1.8,7.4,-5.1);Jt.target.position.set(-1,.58,1.5);Jt.castShadow=!0;Jt.shadow.mapSize.set(2048,2048);Jt.shadow.bias=-2e-4;Jt.shadow.normalBias=.004;Jt.shadow.radius=4;Ct.add(Jt,Jt.target);const ta=ea(512,512,(r,e,t)=>{r.fillStyle="#fff5df",r.fillRect(0,0,e,t),r.filter="blur(7px)";for(let n=0;n<140;n++)r.fillStyle=n%3?"#343a30":"#777b62",r.beginPath(),r.ellipse(tn()*e,tn()*t,8+tn()*23,4+tn()*13,tn()*6.28,0,6.28),r.fill();r.strokeStyle="#333b30",r.lineWidth=12,r.beginPath(),r.moveTo(50,512),r.bezierCurveTo(160,330,240,230,430,0),r.stroke()});Jt.map=ta;const wo=new Dc("#e6dfcf",.85);wo.position.set(-3,4,5);Ct.add(wo);const on=new Kt;on.userData.memoryKey="globe";Ct.add(on);const K_=new Set(Ct.children),Zc=In("#bfa471",.28,.7),Ao=In("#624334",.42);Lt(new Pn(2.32,2.4,.28,96),Ao,[0,.76,0]);Lt(new Pn(2.29,2.32,.09,96),Zc,[0,.945,0]);Lt(new Pn(2.2,2.28,.18,96),Ao,[0,1.08,0]);Lt(new Pn(2.15,2.15,.1,96),In("#495944"),[0,1.22,0]);const j_=In("#71816a",.97);for(let r=0;r<80;r++){const e=tn()*Math.PI*2,t=1.45+tn()*.52;Lt(new ai(1,8,5),j_,[Math.sin(e)*t,1.3,Math.cos(e)*t]).scale.set(.08+tn()*.16,.025+tn()*.035,.07+tn()*.12)}const $c=new xg().setDecoderPath("./assets/draco/"),Z_=await new to().setDRACOLoader($c).loadAsync("./assets/statue_cat_winged.glb");$c.dispose();const qr=Z_.scene,Ro=await new hr().loadAsync("./assets/cat-winged-color.webp");Ro.colorSpace=Tt;Ro.flipY=!0;qr.scale.setScalar(2.1);qr.position.set(0,1.04,-.18);qr.traverse(r=>{r.isMesh&&(r.material.map=Ro,r.material.roughness=.58,r.material.needsUpdate=!0,r.castShadow=!0,r.receiveShadow=!0)});Ct.add(qr);try{const r=await new __().loadAsync("./assets/sky/mossy_forest_1k.exr"),e=new Qa(It);Ct.environment=e.fromEquirectangular(r).texture,Ct.environmentIntensity=.32,e.dispose(),r.dispose()}catch{}const na=new mn({color:"#f7fcfa",metalness:0,roughness:.09,transmission:1,transparent:!0,depthWrite:!1,ior:1.46,thickness:.36,attenuationColor:"#d9ece1",attenuationDistance:4,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:.55,side:0});na.onBeforeCompile=r=>{const e=Qe.transmission_pars_fragment.replace("return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );",`vec2 uv=clamp(fragCoord.xy,vec2(.001),vec2(.999));
   vec4 sampleColor=textureLod(transmissionSamplerMap,uv,0.0);
   if(any(isnan(sampleColor))||any(isinf(sampleColor))) return vec4(0.0,0.0,0.0,1.0);
   return clamp(sampleColor,vec4(0.0),vec4(64.0));`);r.fragmentShader=r.fragmentShader.replace("#include <transmission_pars_fragment>",e)};na.customProgramCacheKey=()=>"stable-glass-sampling-v1";const kr=Lt(new ai(2.65,96,64,0,Math.PI*2,0,2.28),na,[0,2.95,0]);kr.castShadow=kr.receiveShadow=!1;kr.renderOrder=10;for(const r of[...Ct.children])K_.has(r)||on.add(r);on.scale.setScalar(.54);on.position.y=.58-.62*.54;const Jc=await new hr().loadAsync("./assets/photos/memory-varied-3.webp"),$_=ea(512,640,(r,e,t)=>{r.fillStyle="#f0e8dc",r.fillRect(0,0,e,t);const n=Jc.image,i=Math.min(e/n.width,t/n.height);r.drawImage(n,(e-n.width*i)/2,(t-n.height*i)/2,n.width*i,n.height*i)});Jc.dispose();const Zn=new Kt;Zn.userData.memoryKey="photo-3";Zn.position.set(7.6,.6,-2.5);Zn.scale.setScalar(.6);Zn.rotation.set(-.08,-.12,0);Ct.add(Zn);Lt(new At(2.12,2.6,.16),Ao,[0,1.3,0],Zn);Lt(new At(1.91,2.38,.05),Zc,[0,1.3,.1],Zn);Lt(new At(1.79,2.24,.04),In("#e7dcc9"),[0,1.3,.14],Zn);Lt(new Rn(1.51,1.89),new an({map:$_,roughness:.95}),[0,1.38,.17],Zn);const fr=new Kt;fr.userData.memoryKey="notebook";fr.position.set(4,.65,2);fr.rotation.y=-.22;Ct.add(fr);Lt(new At(2.7,.14,2.15),In("#695b67"),[0,0,0],fr);const J_=ea(1024,768,(r,e,t)=>{r.fillStyle="#eddfc8",r.fillRect(0,0,e,t),r.strokeStyle="#a3948060",r.lineWidth=2;for(let n=240;n<690;n+=58)r.beginPath(),r.moveTo(65,n),r.lineTo(455,n),r.moveTo(560,n),r.lineTo(955,n),r.stroke();r.fillStyle="#736b62",r.font="italic 43px Georgia",r.fillText("Little things",70,130),r.font="24px Georgia",r.fillText("I never want to forget.",70,184),r.font="italic 35px Georgia",r.fillText("always with me",565,150),r.strokeStyle="#b5a48e",r.beginPath(),r.moveTo(512,0),r.lineTo(512,t),r.stroke()}),Q_=Lt(new Rn(2.6,2.05),new an({map:J_,roughness:1}),[0,.071,0],fr);Q_.rotation.x=-Math.PI/2;const Co=Lt(new Pn(.034,.034,1.75,12),In("#34453f",.4),[3.4,.755,2.9]);Co.userData.memoryKey="notebook";Co.rotation.z=Math.PI/2;Co.rotation.y=-.35;const oc=In("#5c433b",1);for(let r=0;r<3;r++){const e=-3.1+r*.42,t=2+r*.32,n=Lt(new Ei(.1,20),oc,[e,.589,t]);n.rotation.x=-Math.PI/2;for(let i=0;i<4;i++){const s=(i-1.5)*.6,a=Lt(new Ei(.044,12),oc,[e+Math.sin(s)*.16,.59,t-.1-Math.cos(s)*.075]);a.rotation.x=-Math.PI/2}}const so={uTime:{value:0},uAmount:{value:0}},Po=ta.clone(),Vs=document.createElement("canvas");Vs.width=Vs.height=512;const Do=Vs.getContext("2d");Do.drawImage(ta.image,0,0);Do.fillStyle="rgba(220,231,240,.72)";Do.fillRect(0,0,512,512);Po.image=Vs;Po.needsUpdate=!0;const Io=new xo("#ffc78c",0,12,2);Io.position.set(5,4,-1.8);Ct.add(Io);const Qc=I_(Ct);Qc.loadMug("./assets/props/meshy-cat-mug.glb").then(()=>No.register()).catch(r=>console.warn("Mug asset unavailable; using fallback.",r));let Un=0,Si=0,Ws=0,Wt=null,en=!1,Ti=0,Xs=0,_t=!1,zr=0,Gr=0,Xt=null;const qs=Math.PI/24;let Ka=0,Lo=0;const Lr=[];let ja=937;const Za=()=>(ja=ja*1664525+1013904223>>>0,ja/4294967296);for(let r=0;r<256;r++){let e=null,t=-1;for(let n=0;n<40;n++){const i=Za()*Math.PI*2,s=Math.sqrt(1.44**2+Za()*(2.02**2-1.44**2)),a=new k(Math.sin(i)*s,1.29,Math.cos(i)*s),o=Lr.length?Math.min(...Lr.map(l=>l.distanceToSquared(a))):Za();o>t&&(t=o,e=a)}Lr.push(e)}const Uo=r=>Lr[r%Lr.length],e0=["#ffae32","#ef608a","#f1864e","#d66085","#f4c32f","#f09e70"],nn=D_({scene:on,camera:ct,positionFor:Uo,palette:e0,refinedGrowth:!0,growthDuration:2600,plantDelay:3200}),Us=L_(Ct,on,kr),No=U_(Ct,on,{hemi:jc,key:Jt,fill:wo,lamp:Io,glassMaterial:na,bloom:Yc,rainUniforms:so});Qc.loadBelongings(()=>No.register()).catch(r=>console.warn("Keepsake asset unavailable.",r));It.domElement.addEventListener("pointerdown",r=>{if(!(nn.blocked||Hr.blocked||Tn)){if(en&&!_t&&!Xt){const e=It.domElement.getBoundingClientRect();nn.hoverAt(new be((r.clientX-e.left)/e.width*2-1,-(r.clientY-e.top)/e.height*2+1))}Wt={x:r.clientX,y:r.clientY,lx:r.clientX,ly:r.clientY,moved:!1},It.domElement.setPointerCapture(r.pointerId)}});It.domElement.addEventListener("pointerleave",()=>{Lo=0,nn.clearHover(),ar.clearHover()});It.domElement.addEventListener("pointermove",r=>{if(!(Hr.blocked||Tn)){if(!en&&!_t&&!Wt&&(Lo=r.clientY<innerHeight*.78?(r.clientX/innerWidth-.5)*.045:0),!en&&!_t&&!Xt&&!Wt&&!Fn){const e=It.domElement.getBoundingClientRect();ar.hover(new be((r.clientX-e.left)/e.width*2-1,-(r.clientY-e.top)/e.height*2+1),ct)}else ar.clearHover();if(!Wt){if(en&&!_t&&!Xt&&Xs>.9){const e=It.domElement.getBoundingClientRect();nn.hoverAt(new be((r.clientX-e.left)/e.width*2-1,-(r.clientY-e.top)/e.height*2+1))}else nn.clearHover();return}nn.clearHover(),Math.hypot(r.clientX-Wt.x,r.clientY-Wt.y)>5&&(Wt.moved=!0),Wt.moved&&(_t?(zr=ut.clamp(zr-(r.clientX-Wt.lx)*.003,-1.15,1.15),Gr=ut.clamp(Gr+(r.clientY-Wt.ly)*.002,-.25,.6)):Xs>.45?Ti-=(r.clientX-Wt.lx)*.004:Si=ut.clamp(Si-(r.clientX-Wt.lx)*.002,-qs,qs),Ws=ut.clamp(Ws+(r.clientY-Wt.ly)*.001,-.12,.16)),Wt.lx=r.clientX,Wt.ly=r.clientY}});It.domElement.addEventListener("pointerup",()=>Wt=null);It.domElement.addEventListener("pointercancel",()=>Wt=null);const Fo=document.createElement("nav");Fo.className="scene-switcher";Fo.setAttribute("aria-label","Scene views");document.body.append(Fo);const t0=[];function eu(r){if(Xt||Tn)return;const e=_t;_t=r==="inside",en=r!=="desk",zr=Gr=0,e!==_t&&(Xt={start:performance.now(),position:ct.position.clone(),quaternion:ct.quaternion.clone(),look:new k(0,e?1.72:Xs>.5?1.15:.78,e?-.09:0),fov:ct.fov}),r==="desk"&&(Si=Ws=Ti=0),nn.clearSelection()}const tu=W_({scene:Ct,camera:ct,composer:ci,globe:on,glass:kr,renderer:It,backdrops:ar,onEnter:()=>eu("focus")});let n0=-100,Tn=null;const i0=F_(on),lc=N_(),Oo=document.createElement("div");Oo.className="focus-shade";document.body.append(Oo);const Hr=H_({scene:Ct,camera:ct,cat:qr,renderer:It,offerings:nn,deskUI:tu,navigate:eu,rotate:r=>{Ti+=r},onPlant:r=>{const e=performance.now()/1e3,t=Uo(r.id);n0=e,nn.clearSelection(),Tn={start:e,angle:Si+Ti,targetAngle:Math.atan2(t.x,t.z),position:ct.position.clone(),look:new k(0,1.15,0),flower:on.localToWorld(t.clone()).add(new k(0,.18,0))}}}),$i=document.createElement("div");$i.className="message-sky";$i.hidden=!0;document.body.append($i);const Ns=new Map,Mn=new k,Fs=new k;function r0(r){const e=nn.getHovered();if($i.hidden=!!Tn||Hr.catHovered||Hr.blocked||!!Xt||!_t&&!(en&&e),$i.hidden)return;on.updateWorldMatrix(!0,!1),ct.updateMatrixWorld();const t=nn.getRecords().filter(n=>n.message);for(const[n,i]of Ns)t.some(s=>s.id===n)||(i.remove(),Ns.delete(n));for(const n of t){let i=Ns.get(n.id);if(!i){i=document.createElement("span"),i.className="flower-message",i.dataset.flowerId=n.id;const a=document.createElement("strong");a.className="message-author",a.textContent=n.name;const o=document.createElement("span");o.textContent=n.message,i.append(a,o),$i.append(i),Ns.set(n.id,i)}if(i.querySelector(".message-author").textContent=n.name,i.lastElementChild.textContent=n.message,i.classList.toggle("closeup-message",!_t),!_t){i.hidden=e?.id!==n.id,i.style.left="50%",i.style.top="21%",i.style.opacity="1",i.style.fontSize="";continue}Mn.copy(Uo(n.id)),Mn.y+=.7+n.id%4*.047+(Fn?0:Math.sin(r*.9+n.id)*.018),on.localToWorld(Mn),Fs.copy(Mn).applyMatrix4(ct.matrixWorldInverse),Mn.project(ct);const s=Fs.z<0&&Mn.z>-1&&Mn.z<1&&Math.abs(Mn.x)<1.15&&Math.abs(Mn.y)<1.12;i.hidden=!s||!_t&&e?.id!==n.id,s&&(i.style.left=(Mn.x*.5+.5)*Pt.width+"px",i.style.top=(-Mn.y*.5+.5)*Pt.height+"px",i.style.opacity=String(_t?Fn?.8:.2+.65*Math.pow(.5+.5*Math.sin(r*.7+n.id*2.399),2):.96),i.style.fontSize=(matchMedia("(any-pointer:coarse) and (max-height:600px)").matches?ut.clamp(12/Math.sqrt(Math.max(.4,-Fs.z)),10,13):ut.clamp(15/Math.sqrt(Math.max(.4,-Fs.z)),12,17))+"px")}}const s0=new Ic,cc=new k,uc=r=>r*r*(3-2*r);let a0=0;function nu(r){if(requestAnimationFrame(nu),document.hidden)return;const e=Math.min(s0.getDelta(),.05),t=r/1e3;let n=0,i="idle";const s=0;Un=ut.damp(Un,en||_t?1:0,2.2,e);const a=Fn?Un:Math.max(Un,n),o=Pt.width/Pt.height,l=o<1,c=ut.lerp(l?28:17.5,l?8.2:5.7,a),h=ut.lerp(.78,1.15,a),u=ut.lerp(.78,7,a);ct.setViewOffset(Pt.width,Pt.height,0,-Pt.height*.27*(1-a),Pt.width,Pt.height),Ka=ut.damp(Ka,en?0:Lo,2,e),Xs=a;const d=ut.clamp(Si+Ka,-qs,qs)+Ti*a;if(ct.position.set(Math.sin(d)*c,u+Ws*c*a,Math.cos(d)*c),cc.set(0,h,0),ct.lookAt(cc),ct.fov=_t?78:32,_t&&(ct.clearViewOffset(),ct.position.set(Math.sin(zr)*1.14,1.08,Math.cos(zr)*1.14),ct.lookAt(0,1.72+Gr,-.09)),Xt){const g=Fn?1:Math.min(1,(r-Xt.start)/2400),m=uc(g),w=ct.position.clone();ct.quaternion.clone(),ct.position.lerpVectors(Xt.position,w,m),ct.lookAt(Xt.look.clone().lerp(new k(0,_t?1.72+Gr:h,_t?-.09:0),m)),ct.fov=ut.lerp(Xt.fov,ct.fov,m),Us.blend(_t?m:1-m),g===1&&(Xt=null)}if(Tn){const g=Tn,m=t-g.start,w=Math.atan2(Math.sin(g.targetAngle-g.angle),Math.cos(g.targetAngle-g.angle)),T=uc(Math.min(1,m/2.4)),b=g.angle+w*T,D=new k(Math.sin(b)*4.7,5.8,Math.cos(b)*4.7),A=ut.smoothstep(m,8,10.5);ct.position.lerpVectors(g.position,D,T),ct.position.lerp(new k(Math.sin(g.targetAngle)*c,u,Math.cos(g.targetAngle)*c),A);const C=g.look.clone().lerp(g.flower,T).lerp(new k(0,h,0),A);ct.lookAt(C),Ti=g.angle+w*T-Si,m>=10.5&&(Tn=null)}ct.updateProjectionMatrix();for(const[g,m]of t0)m.disabled=!!Xt,m.setAttribute("aria-pressed",String(g===(_t?"inside":en?"focus":"desk")));nn.setImmersive(Us.amount),nn.setDetail(en&&!_t&&!Xt),nn.update(r,!1),Fn||(Jt.target.position.x=-1+Math.sin(t*.38)*.32,Jt.target.position.z=1.5+Math.sin(t*.27)*.23);const f=0,v=No.update(Math.max(Un,n),f);so.uTime.value=Fn?0:t,so.uAmount.value=_t?0:Un,Jt.map=Un>.45?Po:ta;const x=tu.update(e,!en&&!_t&&!Xt&&Un<.1);Jt.intensity*=1-x*.35,en&&!_t&&ar.setOvercast(Un),Hr.update(en&&!_t&&!Xt,_t&&!Xt,!!Tn),i0.update(Tn?t-Tn.start:-1,Fn),lc.setMode(_t?"inside":en?"focus":"desk"),lc.setHoverRain(x),Oo.style.opacity=String(Un*(1-Us.amount)),ar.update(t,Fn),Us.update(t,Fn),r0(t),ci.render(),a0++%30===0&&(document.querySelector("#garden").dataset.stats=JSON.stringify({mode:_t?"inside-globe":"globe",phase:i,stage:v,snowOpacity:s,glassWarmth:f,orbitDegrees:ut.radToDeg(Ti),yawDegrees:ut.radToDeg(Si),camera:ct.position.toArray()}))}Eo.hidden=!0;requestAnimationFrame(nu);function or(){const r=Math.max(1,sr.clientWidth),e=Math.max(1,sr.clientHeight);r===Pt.width&&e===Pt.height||(Pt.width=r,Pt.height=e,ct.aspect=r/e,ct.updateProjectionMatrix(),It.setSize(r,e,!1),ci.setSize(r,e),Kc.uniforms.uPixel.value.set(1/r,1/e))}new ResizeObserver(or).observe(sr);window.addEventListener("resize",or);window.visualViewport?.addEventListener("resize",or);window.addEventListener("orientationchange",()=>{requestAnimationFrame(or),setTimeout(or,250)});or();
