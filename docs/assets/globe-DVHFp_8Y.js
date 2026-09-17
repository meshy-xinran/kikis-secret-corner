const Io="attached",Jc="detached";const Mt="srgb",At="srgb-linear",Ds="linear",ut="srgb";const Lo="300 es";class rr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Uo=1234567;const Er=Math.PI/180,Zi=180/Math.PI;function En(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[r&255]+Xt[r>>8&255]+Xt[r>>16&255]+Xt[r>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function it(r,e,t){return Math.max(e,Math.min(t,r))}function eo(r,e){return(r%e+e)%e}function Qc(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function eu(r,e,t){return r!==e?(t-r)/(e-r):0}function br(r,e,t){return(1-t)*r+t*e}function tu(r,e,t,n){return br(r,e,1-Math.exp(-t*n))}function nu(r,e=1){return e-Math.abs(eo(r,e*2)-e)}function iu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function ru(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function su(r,e){return r+Math.floor(Math.random()*(e-r+1))}function au(r,e){return r+Math.random()*(e-r)}function ou(r){return r*(.5-Math.random())}function lu(r){r!==void 0&&(Uo=r);let e=Uo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cu(r){return r*Er}function uu(r){return r*Zi}function hu(r){return(r&r-1)===0&&r!==0}function du(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function fu(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function pu(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),m=s((n-e)/2),v=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*v,l*m,o*c);break;case"YXY":r.set(l*m,o*h,l*v,o*c);break;case"ZYZ":r.set(l*v,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ht(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ft={DEG2RAD:Er,RAD2DEG:Zi,generateUUID:En,clamp:it,euclideanModulo:eo,mapLinear:Qc,inverseLerp:eu,lerp:br,damp:tu,pingpong:nu,smoothstep:iu,smootherstep:ru,randInt:su,randFloat:au,randFloatSpread:ou,seededRandom:lu,degToRad:cu,radToDeg:uu,isPowerOfTwo:hu,ceilPowerOfTwo:du,floorPowerOfTwo:fu,setQuaternionFromProperEuler:pu,normalize:ht,denormalize:Tn};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ai{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],m=s[a+1],v=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=v,e[t+3]=x;return}if(u!==x||l!==d||c!==m||h!==v){let g=1-o;const p=l*d+c*m+h*v+u*x,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const L=Math.sqrt(S),R=Math.atan2(L,p*b);g=Math.sin(g*R)/L,o=Math.sin(o*R)/L}const E=o*b;if(l=l*g+d*E,c=c*g+m*E,h=h*g+v*E,u=u*g+x*E,g===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],m=s[a+2],v=s[a+3];return e[t]=o*v+h*u+l*m-c*d,e[t+1]=l*v+h*d+c*u-o*m,e[t+2]=c*v+h*m+o*d-l*u,e[t+3]=h*v-o*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),m=l(i/2),v=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*m*v,this._y=c*m*u-d*h*v,this._z=c*h*v+d*m*u,this._w=c*h*u-d*m*v;break;case"YXZ":this._x=d*h*u+c*m*v,this._y=c*m*u-d*h*v,this._z=c*h*v-d*m*u,this._w=c*h*u+d*m*v;break;case"ZXY":this._x=d*h*u-c*m*v,this._y=c*m*u+d*h*v,this._z=c*h*v+d*m*u,this._w=c*h*u-d*m*v;break;case"ZYX":this._x=d*h*u-c*m*v,this._y=c*m*u+d*h*v,this._z=c*h*v-d*m*u,this._w=c*h*u+d*m*v;break;case"YZX":this._x=d*h*u+c*m*v,this._y=c*m*u+d*h*v,this._z=c*h*v-d*m*u,this._w=c*h*u-d*m*v;break;case"XZY":this._x=d*h*u-c*m*v,this._y=c*m*u-d*h*v,this._z=c*h*v+d*m*u,this._w=c*h*u+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(No.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(No.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $s.copy(this).projectOnVector(e),this.sub($s)}reflect(e){return this.sub($s.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $s=new B,No=new ai;class et{constructor(e,t,n,i,s,a,o,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],v=n[8],x=i[0],g=i[3],p=i[6],b=i[1],S=i[4],E=i[7],L=i[2],R=i[5],C=i[8];return s[0]=a*x+o*b+l*L,s[3]=a*g+o*S+l*R,s[6]=a*p+o*E+l*C,s[1]=c*x+h*b+u*L,s[4]=c*g+h*S+u*R,s[7]=c*p+h*E+u*C,s[2]=d*x+m*b+v*L,s[5]=d*g+m*S+v*R,s[8]=d*p+m*E+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,m=c*s-a*l,v=t*u+n*d+i*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=d*x,e[4]=(h*t-i*l)*x,e[5]=(i*s-o*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Js.makeScale(e,t)),this}rotate(e){return this.premultiply(Js.makeRotation(-e)),this}translate(e,t){return this.premultiply(Js.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Js=new et;function oc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Pr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function mu(){const r=Pr("canvas");return r.style.display="block",r}const Fo={};function Dr(r){r in Fo||(Fo[r]=!0,console.warn(r))}function gu(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Oo=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bo=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _u(){const r={enabled:!0,workingColorSpace:At,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ut&&(i.r=Kn(i.r),i.g=Kn(i.g),i.b=Kn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(i.r=qi(i.r),i.g=qi(i.g),i.b=qi(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===""?Ds:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Dr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Dr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[At]:{primaries:e,whitePoint:n,transfer:Ds,toXYZ:Oo,fromXYZ:Bo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:Oo,fromXYZ:Bo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),r}const at=_u();function Kn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let bi;class vu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bi===void 0&&(bi=Pr("canvas")),bi.width=e.width,bi.height=e.height;const i=bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Kn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kn(t[n]/255)*255):t[n]=Kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xu=0;class to{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=En(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Qs(i[a].image)):s.push(Qs(i[a]))}else s=Qs(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Qs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?vu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yu=0;const ea=new B;class Ot extends rr{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=Ot.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=En(),this.name="",this.source=new to(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ea).x}get height(){return this.source.getSize(ea).y}get depth(){return this.source.getSize(ea).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=300;Ot.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,i=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],v=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(v+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,E=(m+1)/2,L=(p+1)/2,R=(h+d)/4,C=(u+x)/4,F=(v+g)/4;return S>E&&S>L?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=R/n,s=C/n):E>L?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=R/i,s=F/i):L<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(L),n=C/s,i=F/s),this.set(n,i,s,t),this}let b=Math.sqrt((g-v)*(g-v)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-v)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mu extends rr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Ot(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new to(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ht extends Mu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class lc extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Su extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wn{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gn):gn.fromBufferAttribute(s,a),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),Jr.subVectors(this.max,hr),wi.subVectors(e.a,hr),Ai.subVectors(e.b,hr),Ri.subVectors(e.c,hr),Zn.subVectors(Ai,wi),$n.subVectors(Ri,Ai),ui.subVectors(wi,Ri);let t=[0,-Zn.z,Zn.y,0,-$n.z,$n.y,0,-ui.z,ui.y,Zn.z,0,-Zn.x,$n.z,0,-$n.x,ui.z,0,-ui.x,-Zn.y,Zn.x,0,-$n.y,$n.x,0,-ui.y,ui.x,0];return!ta(t,wi,Ai,Ri,Jr)||(t=[1,0,0,0,1,0,0,0,1],!ta(t,wi,Ai,Ri,Jr))?!1:(Qr.crossVectors(Zn,$n),t=[Qr.x,Qr.y,Qr.z],ta(t,wi,Ai,Ri,Jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zn=[new B,new B,new B,new B,new B,new B,new B,new B],gn=new B,$r=new wn,wi=new B,Ai=new B,Ri=new B,Zn=new B,$n=new B,ui=new B,hr=new B,Jr=new B,Qr=new B,hi=new B;function ta(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){hi.fromArray(r,s);const o=i.x*Math.abs(hi.x)+i.y*Math.abs(hi.y)+i.z*Math.abs(hi.z),l=e.dot(hi),c=t.dot(hi),h=n.dot(hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Tu=new wn,dr=new B,na=new B;class Rn{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Tu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);const t=dr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(dr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(na)),this.expandByPoint(dr.copy(e.center).sub(na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Gn=new B,ia=new B,es=new B,Jn=new B,ra=new B,ts=new B,sa=new B;class kr{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ia.copy(e).add(t).multiplyScalar(.5),es.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(ia);const s=e.distanceTo(t)*.5,a=-this.direction.dot(es),o=Jn.dot(this.direction),l=-Jn.dot(es),c=Jn.lengthSq(),h=Math.abs(1-a*a);let u,d,m,v;if(h>0)if(u=a*l-o,d=a*o-l,v=s*h,u>=0)if(d>=-v)if(d<=v){const x=1/h;u*=x,d*=x,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-v?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c):d<=v?(u=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ia).addScaledVector(es,d),m}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);const n=Gn.dot(this.direction),i=Gn.dot(Gn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,n,i,s){ra.subVectors(t,e),ts.subVectors(n,e),sa.crossVectors(ra,ts);let a=this.direction.dot(sa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,e);const l=o*this.direction.dot(ts.crossVectors(Jn,ts));if(l<0)return null;const c=o*this.direction.dot(ra.cross(Jn));if(c<0||l+c>a)return null;const h=-o*Jn.dot(sa);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,n,i,s,a,o,l,c,h,u,d,m,v,x,g){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,m,v,x,g)}set(e,t,n,i,s,a,o,l,c,h,u,d,m,v,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=v,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ci.setFromMatrixColumn(e,0).length(),s=1/Ci.setFromMatrixColumn(e,1).length(),a=1/Ci.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,m=a*u,v=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+v*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=v+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,m=l*u,v=c*h,x=c*u;t[0]=d+x*o,t[4]=v*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-v,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,m=l*u,v=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,m=a*u,v=o*h,x=o*u;t[0]=l*h,t[4]=v*c-m,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,v=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=v*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+v,t[10]=d-x*u}else if(e.order==="XZY"){const d=a*l,m=a*c,v=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=m*u-v,t[2]=v*u-m,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eu,e,bu)}lookAt(e,t,n){const i=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Qn.crossVectors(n,nn),Qn.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Qn.crossVectors(n,nn)),Qn.normalize(),ns.crossVectors(nn,Qn),i[0]=Qn.x,i[4]=ns.x,i[8]=nn.x,i[1]=Qn.y,i[5]=ns.y,i[9]=nn.y,i[2]=Qn.z,i[6]=ns.z,i[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],v=n[2],x=n[6],g=n[10],p=n[14],b=n[3],S=n[7],E=n[11],L=n[15],R=i[0],C=i[4],F=i[8],M=i[12],T=i[1],N=i[5],k=i[9],X=i[13],K=i[2],$=i[6],V=i[10],ae=i[14],G=i[3],te=i[7],ce=i[11],he=i[15];return s[0]=a*R+o*T+l*K+c*G,s[4]=a*C+o*N+l*$+c*te,s[8]=a*F+o*k+l*V+c*ce,s[12]=a*M+o*X+l*ae+c*he,s[1]=h*R+u*T+d*K+m*G,s[5]=h*C+u*N+d*$+m*te,s[9]=h*F+u*k+d*V+m*ce,s[13]=h*M+u*X+d*ae+m*he,s[2]=v*R+x*T+g*K+p*G,s[6]=v*C+x*N+g*$+p*te,s[10]=v*F+x*k+g*V+p*ce,s[14]=v*M+x*X+g*ae+p*he,s[3]=b*R+S*T+E*K+L*G,s[7]=b*C+S*N+E*$+L*te,s[11]=b*F+S*k+E*V+L*ce,s[15]=b*M+S*X+E*ae+L*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],v=e[3],x=e[7],g=e[11],p=e[15];return v*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*m-n*l*m)+x*(+t*l*m-t*c*d+s*a*d-i*a*m+i*c*h-s*l*h)+g*(+t*c*u-t*o*m-s*a*u+n*a*m+s*o*h-n*c*h)+p*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],v=e[12],x=e[13],g=e[14],p=e[15],b=u*g*c-x*d*c+x*l*m-o*g*m-u*l*p+o*d*p,S=v*d*c-h*g*c-v*l*m+a*g*m+h*l*p-a*d*p,E=h*x*c-v*u*c+v*o*m-a*x*m-h*o*p+a*u*p,L=v*u*l-h*x*l-v*o*d+a*x*d+h*o*g-a*u*g,R=t*b+n*S+i*E+s*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=b*C,e[1]=(x*d*s-u*g*s-x*i*m+n*g*m+u*i*p-n*d*p)*C,e[2]=(o*g*s-x*l*s+x*i*c-n*g*c-o*i*p+n*l*p)*C,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*m-n*l*m)*C,e[4]=S*C,e[5]=(h*g*s-v*d*s+v*i*m-t*g*m-h*i*p+t*d*p)*C,e[6]=(v*l*s-a*g*s-v*i*c+t*g*c+a*i*p-t*l*p)*C,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*m+t*l*m)*C,e[8]=E*C,e[9]=(v*u*s-h*x*s-v*n*m+t*x*m+h*n*p-t*u*p)*C,e[10]=(a*x*s-v*o*s+v*n*c-t*x*c-a*n*p+t*o*p)*C,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*m-t*o*m)*C,e[12]=L*C,e[13]=(h*x*i-v*u*i+v*n*d-t*x*d-h*n*g+t*u*g)*C,e[14]=(v*o*i-a*x*i-v*n*l+t*x*l+a*n*g-t*o*g)*C,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,m=s*h,v=s*u,x=a*h,g=a*u,p=o*u,b=l*c,S=l*h,E=l*u,L=n.x,R=n.y,C=n.z;return i[0]=(1-(x+p))*L,i[1]=(m+E)*L,i[2]=(v-S)*L,i[3]=0,i[4]=(m-E)*R,i[5]=(1-(d+p))*R,i[6]=(g+b)*R,i[7]=0,i[8]=(v+S)*C,i[9]=(g-b)*C,i[10]=(1-(d+x))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ci.set(i[0],i[1],i[2]).length();const a=Ci.set(i[4],i[5],i[6]).length(),o=Ci.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],_n.copy(this);const c=1/s,h=1/a,u=1/o;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,t.setFromRotationMatrix(_n),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),m=(n+i)/(n-i);let v,x;if(l)v=s/(a-s),x=a*s/(a-s);else if(o===2e3)v=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===2001)v=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),m=-(n+i)/(n-i);let v,x;if(l)v=1/(a-s),x=a/(a-s);else if(o===2e3)v=-2/(a-s),x=-(a+s)/(a-s);else if(o===2001)v=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ci=new B,_n=new $e,Eu=new B(0,0,0),bu=new B(1,1,1),Qn=new B,ns=new B,nn=new B,ko=new $e,zo=new ai;class On{constructor(e=0,t=0,n=0,i=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ko.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ko,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zo.setFromEuler(this),this.setFromQuaternion(zo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class no{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wu=0;const Go=new B,Pi=new ai,Hn=new $e,is=new B,fr=new B,Au=new B,Ru=new ai,Ho=new B(1,0,0),Vo=new B(0,1,0),Wo=new B(0,0,1),Xo={type:"added"},Cu={type:"removed"},Di={type:"childadded",child:null},aa={type:"childremoved",child:null};class xt extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new B,t=new On,n=new ai,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $e},normalMatrix:{value:new et}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new no,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(Ho,e)}rotateY(e){return this.rotateOnAxis(Vo,e)}rotateZ(e){return this.rotateOnAxis(Wo,e)}translateOnAxis(e,t){return Go.copy(e).applyQuaternion(this.quaternion),this.position.add(Go.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ho,e)}translateY(e){return this.translateOnAxis(Vo,e)}translateZ(e){return this.translateOnAxis(Wo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?is.copy(e):is.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(fr,is,this.up):Hn.lookAt(is,fr,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),Pi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xo),Di.child=e,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cu),aa.child=e,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xo),Di.child=e,this.dispatchEvent(Di),Di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,Au),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Ru,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}xt.DEFAULT_UP=new B(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new B,Vn=new B,oa=new B,Wn=new B,Ii=new B,Li=new B,qo=new B,la=new B,ca=new B,ua=new B,ha=new ct,da=new ct,fa=new ct;class hn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),vn.subVectors(e,t),i.cross(vn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){vn.subVectors(i,t),Vn.subVectors(n,t),oa.subVectors(e,t);const a=vn.dot(vn),o=vn.dot(Vn),l=vn.dot(oa),c=Vn.dot(Vn),h=Vn.dot(oa),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,m=(c*l-o*h)*d,v=(a*h-o*l)*d;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wn.x),l.addScaledVector(a,Wn.y),l.addScaledVector(o,Wn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return ha.setScalar(0),da.setScalar(0),fa.setScalar(0),ha.fromBufferAttribute(e,t),da.fromBufferAttribute(e,n),fa.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ha,s.x),a.addScaledVector(da,s.y),a.addScaledVector(fa,s.z),a}static isFrontFacing(e,t,n,i){return vn.subVectors(n,t),Vn.subVectors(e,t),vn.cross(Vn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),vn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return hn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ii.subVectors(i,n),Li.subVectors(s,n),la.subVectors(e,n);const l=Ii.dot(la),c=Li.dot(la);if(l<=0&&c<=0)return t.copy(n);ca.subVectors(e,i);const h=Ii.dot(ca),u=Li.dot(ca);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ii,a);ua.subVectors(e,s);const m=Ii.dot(ua),v=Li.dot(ua);if(v>=0&&m<=v)return t.copy(s);const x=m*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Li,o);const g=h*v-m*u;if(g<=0&&u-h>=0&&m-v>=0)return qo.subVectors(s,i),o=(u-h)/(u-h+(m-v)),t.copy(i).addScaledVector(qo,o);const p=1/(g+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(Ii,a).addScaledVector(Li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},rs={h:0,s:0,l:0};function pa(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ae{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=at.workingColorSpace){if(e=eo(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=pa(a,s,e+1/3),this.g=pa(a,s,e),this.b=pa(a,s,e-1/3)}return at.colorSpaceToWorking(this,i),this}setStyle(e,t=Mt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const n=cc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return at.workingToColorSpace(qt.copy(this),e),Math.round(it(qt.r*255,0,255))*65536+Math.round(it(qt.g*255,0,255))*256+Math.round(it(qt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(qt.copy(this),t);const n=qt.r,i=qt.g,s=qt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Mt){at.workingToColorSpace(qt.copy(this),e);const t=qt.r,n=qt.g,i=qt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(rs);const n=br(ei.h,rs.h,t),i=br(ei.s,rs.s,t),s=br(ei.l,rs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Ae;Ae.NAMES=cc;let Pu=0;class bn extends rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=En(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fn extends bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qn=Du();function Du(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function Iu(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=it(r,-65504,65504),qn.floatView[0]=r;const e=qn.uint32View[0],t=e>>23&511;return qn.baseTable[t]+((e&8388607)>>qn.shiftTable[t])}function Lu(r){const e=r>>10;return qn.uint32View[0]=qn.mantissaTable[qn.offsetTable[e]+(r&1023)]+qn.exponentTable[e],qn.floatView[0]}class Yo{static toHalfFloat(e){return Iu(e)}static fromHalfFloat(e){return Lu(e)}}const Ft=new B,ss=new Me;let Uu=0;class Bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ss.fromBufferAttribute(this,t),ss.applyMatrix3(e),this.setXY(t,ss.x,ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class uc extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hc extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pt extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Nu=0;const cn=new $e,ma=new xt,Ui=new B,rn=new wn,pr=new wn,Gt=new B;class Lt extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oc(e)?hc:uc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return ma.lookAt(e),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(rn.min,pr.min),rn.expandByPoint(Gt),Gt.addVectors(rn.max,pr.max),rn.expandByPoint(Gt)):(rn.expandByPoint(pr.min),rn.expandByPoint(pr.max))}rn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Gt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Gt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Gt.fromBufferAttribute(o,c),l&&(Ui.fromBufferAttribute(e,c),Gt.add(Ui)),i=Math.max(i,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new B,l[F]=new B;const c=new B,h=new B,u=new B,d=new Me,m=new Me,v=new Me,x=new B,g=new B;function p(F,M,T){c.fromBufferAttribute(n,F),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,T),d.fromBufferAttribute(s,F),m.fromBufferAttribute(s,M),v.fromBufferAttribute(s,T),h.sub(c),u.sub(c),m.sub(d),v.sub(d);const N=1/(m.x*v.y-v.x*m.y);isFinite(N)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(N),g.copy(u).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(N),o[F].add(x),o[M].add(x),o[T].add(x),l[F].add(g),l[M].add(g),l[T].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let F=0,M=b.length;F<M;++F){const T=b[F],N=T.start,k=T.count;for(let X=N,K=N+k;X<K;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const S=new B,E=new B,L=new B,R=new B;function C(F){L.fromBufferAttribute(i,F),R.copy(L);const M=o[F];S.copy(M),S.sub(L.multiplyScalar(L.dot(M))).normalize(),E.crossVectors(R,M);const N=E.dot(l[F])<0?-1:1;a.setXYZW(F,S.x,S.y,S.z,N)}for(let F=0,M=b.length;F<M;++F){const T=b[F],N=T.start,k=T.count;for(let X=N,K=N+k;X<K;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new B,s=new B,a=new B,o=new B,l=new B,c=new B,h=new B,u=new B;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let m=0,v=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*h;for(let p=0;p<h;p++)d[v++]=c[m++]}return new Bt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ko=new $e,di=new kr,as=new Rn,jo=new B,os=new B,ls=new B,cs=new B,ga=new B,us=new B,Zo=new B,hs=new B;class St extends xt{constructor(e=new Lt,t=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){us.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(ga.fromBufferAttribute(u,e),a?us.addScaledVector(ga,h):us.addScaledVector(ga.sub(t),h))}t.add(us)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(s),di.copy(e.ray).recast(e.near),!(as.containsPoint(di.origin)===!1&&(di.intersectSphere(as,jo)===null||di.origin.distanceToSquared(jo)>(e.far-e.near)**2))&&(Ko.copy(s).invert(),di.copy(e.ray).applyMatrix4(Ko),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=d.length;v<x;v++){const g=d[v],p=a[g.materialIndex],b=Math.max(g.start,m.start),S=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let E=b,L=S;E<L;E+=3){const R=o.getX(E),C=o.getX(E+1),F=o.getX(E+2);i=ds(this,p,e,n,c,h,u,R,C,F),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const v=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let g=v,p=x;g<p;g+=3){const b=o.getX(g),S=o.getX(g+1),E=o.getX(g+2);i=ds(this,a,e,n,c,h,u,b,S,E),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=d.length;v<x;v++){const g=d[v],p=a[g.materialIndex],b=Math.max(g.start,m.start),S=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let E=b,L=S;E<L;E+=3){const R=E,C=E+1,F=E+2;i=ds(this,p,e,n,c,h,u,R,C,F),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let g=v,p=x;g<p;g+=3){const b=g,S=g+1,E=g+2;i=ds(this,a,e,n,c,h,u,b,S,E),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Fu(r,e,t,n,i,s,a,o){let l;if(e.side===1?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===0,o),l===null)return null;hs.copy(o),hs.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(hs);return c<t.near||c>t.far?null:{distance:c,point:hs.clone(),object:r}}function ds(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,os),r.getVertexPosition(l,ls),r.getVertexPosition(c,cs);const h=Fu(r,e,t,n,os,ls,cs,Zo);if(h){const u=new B;hn.getBarycoord(Zo,os,ls,cs,u),i&&(h.uv=hn.getInterpolatedAttribute(i,o,l,c,u,new Me)),s&&(h.uv1=hn.getInterpolatedAttribute(s,o,l,c,u,new Me)),a&&(h.normal=hn.getInterpolatedAttribute(a,o,l,c,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new B,materialIndex:0};hn.getNormal(os,ls,cs,d.normal),h.face=d,h.barycoord=u}return h}class wt extends Lt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,m=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,i,a,2),v("x","z","y",1,-1,e,n,-t,i,a,3),v("x","y","z",1,-1,e,t,n,i,s,4),v("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(u,2));function v(x,g,p,b,S,E,L,R,C,F,M){const T=E/C,N=L/F,k=E/2,X=L/2,K=R/2,$=C+1,V=F+1;let ae=0,G=0;const te=new B;for(let ce=0;ce<V;ce++){const he=ce*N-X;for(let Se=0;Se<$;Se++){const Oe=Se*T-k;te[x]=Oe*b,te[g]=he*S,te[p]=K,c.push(te.x,te.y,te.z),te[x]=0,te[g]=0,te[p]=R>0?1:-1,h.push(te.x,te.y,te.z),u.push(Se/C),u.push(1-ce/F),ae+=1}}for(let ce=0;ce<F;ce++)for(let he=0;he<C;he++){const Se=d+he+$*ce,Oe=d+he+$*(ce+1),qe=d+(he+1)+$*(ce+1),Ye=d+(he+1)+$*ce;l.push(Se,Oe,Ye),l.push(Oe,qe,Ye),G+=6}o.addGroup(m,G,M),m+=G,d+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $i(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function jt(r){const e={};for(let t=0;t<r.length;t++){const n=$i(r[t]);for(const i in n)e[i]=n[i]}return e}function Ou(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function dc(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const Ji={clone:$i,merge:jt};var Bu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pt extends bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bu,this.fragmentShader=ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=Ou(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fc extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new B,$o=new Me,Jo=new Me;class Zt extends fc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,$o,Jo),t.subVectors(Jo,$o)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Er*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ni=-90,Fi=1;class zu extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Zt(Ni,Fi,e,t);i.layers=this.layers,this.add(i);const s=new Zt(Ni,Fi,e,t);s.layers=this.layers,this.add(s);const a=new Zt(Ni,Fi,e,t);a.layers=this.layers,this.add(a);const o=new Zt(Ni,Fi,e,t);o.layers=this.layers,this.add(o);const l=new Zt(Ni,Fi,e,t);l.layers=this.layers,this.add(l);const c=new Zt(Ni,Fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class pc extends Ot{constructor(e=[],t=301,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gu extends Ht{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new pc(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new wt(5,5,5),s=new Pt({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const a=new St(i,s),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new zu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class Yt extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hu={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hu)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class io{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ae(e),this.density=t}clone(){return new io(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Vu extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class mc{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new B;class Ir{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ir(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class gc extends bn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Oi;const mr=new B,Bi=new B,ki=new B,zi=new Me,gr=new Me,_c=new $e,fs=new B,_r=new B,ps=new B,Qo=new Me,va=new Me,el=new Me;class Wu extends xt{constructor(e=new gc){if(super(),this.isSprite=!0,this.type="Sprite",Oi===void 0){Oi=new Lt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mc(t,5);Oi.setIndex([0,1,2,0,2,3]),Oi.setAttribute("position",new Ir(n,3,0,!1)),Oi.setAttribute("uv",new Ir(n,2,3,!1))}this.geometry=Oi,this.material=e,this.center=new Me(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bi.setFromMatrixScale(this.matrixWorld),_c.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ki.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bi.multiplyScalar(-ki.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;ms(fs.set(-.5,-.5,0),ki,a,Bi,i,s),ms(_r.set(.5,-.5,0),ki,a,Bi,i,s),ms(ps.set(.5,.5,0),ki,a,Bi,i,s),Qo.set(0,0),va.set(1,0),el.set(1,1);let o=e.ray.intersectTriangle(fs,_r,ps,!1,mr);if(o===null&&(ms(_r.set(-.5,.5,0),ki,a,Bi,i,s),va.set(0,1),o=e.ray.intersectTriangle(fs,ps,_r,!1,mr),o===null))return;const l=e.ray.origin.distanceTo(mr);l<e.near||l>e.far||t.push({distance:l,point:mr.clone(),uv:hn.getInterpolation(mr,fs,_r,ps,Qo,va,el,new Me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ms(r,e,t,n,i,s){zi.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(gr.x=s*zi.x-i*zi.y,gr.y=i*zi.x+s*zi.y):gr.copy(zi),r.copy(e),r.x+=gr.x,r.y+=gr.y,r.applyMatrix4(_c)}const tl=new B,nl=new ct,il=new ct,Xu=new B,rl=new $e,gs=new B,xa=new Rn,sl=new $e,ya=new kr;class qu extends St{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Io,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,gs),this.boundingBox.expandByPoint(gs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,gs),this.boundingSphere.expandByPoint(gs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xa.copy(this.boundingSphere),xa.applyMatrix4(i),e.ray.intersectsSphere(xa)!==!1&&(sl.copy(i).invert(),ya.copy(e.ray).applyMatrix4(sl),!(this.boundingBox!==null&&ya.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ya)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Io?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Jc?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;nl.fromBufferAttribute(i.attributes.skinIndex,e),il.fromBufferAttribute(i.attributes.skinWeight,e),tl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=il.getComponent(s);if(a!==0){const o=nl.getComponent(s);rl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Xu.copy(tl).applyMatrix4(rl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class vc extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ro extends Ot{constructor(e=null,t=1,n=1,i,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const al=new $e,Yu=new $e;class so{constructor(e=[],t=[]){this.uuid=En(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Yu;al.multiplyMatrices(o,t[s]),al.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new so(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ro(t,e,e,1023,1015);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new vc),this.bones.push(a),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Is extends Bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Gi=new $e,ol=new $e,_s=[],ll=new wn,Ku=new $e,vr=new St,xr=new Rn;class xc extends St{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Is(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ku)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gi),ll.copy(e.boundingBox).applyMatrix4(Gi),this.boundingBox.union(ll)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gi),xr.copy(e.boundingSphere).applyMatrix4(Gi),this.boundingSphere.union(xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(n),e.ray.intersectsSphere(xr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Gi),ol.multiplyMatrices(n,Gi),vr.matrixWorld=ol,vr.raycast(e,_s);for(let a=0,o=_s.length;a<o;a++){const l=_s[a];l.instanceId=s,l.object=this,t.push(l)}_s.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Is(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ro(new Float32Array(i*this.count),i,this.count,1028,1015));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ma=new B,ju=new B,Zu=new et;class _i{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ma.subVectors(n,t).cross(ju.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ma),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zu.getNormalMatrix(e),i=this.coplanarPoint(Ma).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Rn,$u=new Me(.5,.5),vs=new B;class ao{constructor(e=new _i,t=new _i,n=new _i,i=new _i,s=new _i,a=new _i){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],m=s[7],v=s[8],x=s[9],g=s[10],p=s[11],b=s[12],S=s[13],E=s[14],L=s[15];if(i[0].setComponents(c-a,m-h,p-v,L-b).normalize(),i[1].setComponents(c+a,m+h,p+v,L+b).normalize(),i[2].setComponents(c+o,m+u,p+x,L+S).normalize(),i[3].setComponents(c-o,m-u,p-x,L-S).normalize(),n)i[4].setComponents(l,d,g,E).normalize(),i[5].setComponents(c-l,m-d,p-g,L-E).normalize();else if(i[4].setComponents(c-l,m-d,p-g,L-E).normalize(),t===2e3)i[5].setComponents(c+l,m+d,p+g,L+E).normalize();else if(t===2001)i[5].setComponents(l,d,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){fi.center.set(0,0,0);const t=$u.distanceTo(e.center);return fi.radius=.7071067811865476+t,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(vs.x=i.normal.x>0?e.max.x:e.min.x,vs.y=i.normal.y>0?e.max.y:e.min.y,vs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yc extends bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ls=new B,Us=new B,cl=new $e,yr=new kr,xs=new Rn,Sa=new B,ul=new B;class oo extends xt{constructor(e=new Lt,t=new yc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ls.fromBufferAttribute(t,i-1),Us.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ls.distanceTo(Us);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(i),xs.radius+=s,e.ray.intersectsSphere(xs)===!1)return;cl.copy(i).invert(),yr.copy(e.ray).applyMatrix4(cl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let x=m,g=v-1;x<g;x+=c){const p=h.getX(x),b=h.getX(x+1),S=ys(this,e,yr,l,p,b,x);S&&t.push(S)}if(this.isLineLoop){const x=h.getX(v-1),g=h.getX(m),p=ys(this,e,yr,l,x,g,v-1);p&&t.push(p)}}else{const m=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let x=m,g=v-1;x<g;x+=c){const p=ys(this,e,yr,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=ys(this,e,yr,l,v-1,m,v-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ys(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(Ls.fromBufferAttribute(o,i),Us.fromBufferAttribute(o,s),t.distanceSqToSegment(Ls,Us,Sa,ul)>n)return;Sa.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Sa);if(!(c<e.near||c>e.far))return{distance:c,point:ul.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const hl=new B,dl=new B;class Ju extends oo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)hl.fromBufferAttribute(t,i),dl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hl.distanceTo(dl);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qu extends oo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class zs extends bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fl=new $e,Xa=new kr,Ms=new Rn,Ss=new B;class lo extends xt{constructor(e=new Lt,t=new zs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(i),Ms.radius+=s,e.ray.intersectsSphere(Ms)===!1)return;fl.copy(i).invert(),Xa.copy(e.ray).applyMatrix4(fl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let v=d,x=m;v<x;v++){const g=c.getX(v);Ss.fromBufferAttribute(u,g),pl(Ss,g,l,i,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=d,x=m;v<x;v++)Ss.fromBufferAttribute(u,v),pl(Ss,v,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function pl(r,e,t,n,i,s,a){const o=Xa.distanceSqToPoint(r);if(o<t){const l=new B;Xa.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Lr extends Ot{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mc extends Ot{constructor(e,t,n=1014,i,s,a,o=1003,l=1003,c,h=1026,u=1){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new to(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Sc extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Si extends Lt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new B,h=new Me;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const m=n+u/t*i;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(o,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Cn extends Lt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],m=[];let v=0;const x=[],g=n/2;let p=0;b(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new pt(u,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(m,2));function b(){const E=new B,L=new B;let R=0;const C=(t-e)/n;for(let F=0;F<=s;F++){const M=[],T=F/s,N=T*(t-e)+e;for(let k=0;k<=i;k++){const X=k/i,K=X*l+o,$=Math.sin(K),V=Math.cos(K);L.x=N*$,L.y=-T*n+g,L.z=N*V,u.push(L.x,L.y,L.z),E.set($,C,V).normalize(),d.push(E.x,E.y,E.z),m.push(X,1-T),M.push(v++)}x.push(M)}for(let F=0;F<i;F++)for(let M=0;M<s;M++){const T=x[M][F],N=x[M+1][F],k=x[M+1][F+1],X=x[M][F+1];(e>0||M!==0)&&(h.push(T,N,X),R+=3),(t>0||M!==s-1)&&(h.push(N,k,X),R+=3)}c.addGroup(p,R,0),p+=R}function S(E){const L=v,R=new Me,C=new B;let F=0;const M=E===!0?e:t,T=E===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,g*T,0),d.push(0,T,0),m.push(.5,.5),v++;const N=v;for(let k=0;k<=i;k++){const K=k/i*l+o,$=Math.cos(K),V=Math.sin(K);C.x=M*V,C.y=g*T,C.z=M*$,u.push(C.x,C.y,C.z),d.push(0,T,0),R.x=$*.5+.5,R.y=V*.5*T+.5,m.push(R.x,R.y),v++}for(let k=0;k<i;k++){const X=L+k,K=N+k;E===!0?h.push(K,K+1,X):h.push(K+1,K,X),F+=3}c.addGroup(p,F,E===!0?1:2),p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class co extends Cn{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new co(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class uo extends Lt{constructor(e=[new Me(0,-.5),new Me(.5,0),new Me(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=it(i,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/t,u=new B,d=new Me,m=new B,v=new B,x=new B;let g=0,p=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:g=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,m.x=p*1,m.y=-g,m.z=p*0,x.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,m.x=p*1,m.y=-g,m.z=p*0,v.copy(m),m.x+=x.x,m.y+=x.y,m.z+=x.z,m.normalize(),l.push(m.x,m.y,m.z),x.copy(v)}for(let b=0;b<=t;b++){const S=n+b*h*i,E=Math.sin(S),L=Math.cos(S);for(let R=0;R<=e.length-1;R++){u.x=e[R].x*E,u.y=e[R].y,u.z=e[R].x*L,a.push(u.x,u.y,u.z),d.x=b/t,d.y=R/(e.length-1),o.push(d.x,d.y);const C=l[3*R+0]*E,F=l[3*R+1],M=l[3*R+0]*L;c.push(C,F,M)}}for(let b=0;b<t;b++)for(let S=0;S<e.length-1;S++){const E=S+b*e.length,L=E,R=E+e.length,C=E+e.length+1,F=E+1;s.push(L,R,F),s.push(C,F,R)}this.setIndex(s),this.setAttribute("position",new pt(a,3)),this.setAttribute("uv",new pt(o,2)),this.setAttribute("normal",new pt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.points,e.segments,e.phiStart,e.phiLength)}}class An extends Lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,m=[],v=[],x=[],g=[];for(let p=0;p<h;p++){const b=p*d-a;for(let S=0;S<c;S++){const E=S*u-s;v.push(E,-b,0),x.push(0,0,1),g.push(S/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const S=b+c*p,E=b+c*(p+1),L=b+1+c*(p+1),R=b+1+c*p;m.push(S,E,R),m.push(E,L,R)}this.setIndex(m),this.setAttribute("position",new pt(v,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.width,e.height,e.widthSegments,e.heightSegments)}}class si extends Lt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new B,d=new B,m=[],v=[],x=[],g=[];for(let p=0;p<=n;p++){const b=[],S=p/n;let E=0;p===0&&a===0?E=.5/t:p===n&&l===Math.PI&&(E=-.5/t);for(let L=0;L<=t;L++){const R=L/t;u.x=-e*Math.cos(i+R*s)*Math.sin(a+S*o),u.y=e*Math.cos(a+S*o),u.z=e*Math.sin(i+R*s)*Math.sin(a+S*o),v.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(R+E,1-S),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){const S=h[p][b+1],E=h[p][b],L=h[p+1][b],R=h[p+1][b+1];(p!==0||a>0)&&m.push(S,E,R),(p!==n-1||l<Math.PI)&&m.push(E,L,R)}this.setIndex(m),this.setAttribute("position",new pt(v,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Yi extends Lt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new B,u=new B,d=new B;for(let m=0;m<=n;m++)for(let v=0;v<=i;v++){const x=v/i*s,g=m/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(v/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let v=1;v<=i;v++){const x=(i+1)*m+v-1,g=(i+1)*(m-1)+v-1,p=(i+1)*(m-1)+v,b=(i+1)*m+v;a.push(x,g,b),a.push(g,p,b)}this.setIndex(a),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(l,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class eh extends Pt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sn extends bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pn extends sn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Tc extends bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class th extends bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ts(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function nh(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ih(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ml(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function Ec(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class zr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class rh extends zr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:s=e,o=2*t-n;break;case 2402:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case 2401:a=e,l=2*n-t;break;case 2402:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,v=(n-t)/(i-t),x=v*v,g=x*v,p=-d*g+2*d*x-d*v,b=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*v+1,S=(-1-m)*g+(1.5+m)*x+.5*v,E=m*g-m*x;for(let L=0;L!==o;++L)s[L]=p*a[h+L]+b*a[c+L]+S*a[l+L]+E*a[u+L];return s}}class sh extends zr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class ah extends zr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Pn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ts(t,this.TimeBufferType),this.values=Ts(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ts(e.times,Array),values:Ts(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&nh(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,m=u+n;for(let v=0;v!==n;++v){const x=t[u+v];if(x!==t[d+v]||x!==t[m+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[u+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=2301;class sr extends Pn{constructor(e,t,n){super(e,t,n)}}sr.prototype.ValueTypeName="bool";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=2300;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;class bc extends Pn{constructor(e,t,n,i){super(e,t,n,i)}}bc.prototype.ValueTypeName="color";class Qi extends Pn{constructor(e,t,n,i){super(e,t,n,i)}}Qi.prototype.ValueTypeName="number";class oh extends zr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)ai.slerpFlat(s,0,a,c-o,a,c,l);return s}}class er extends Pn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new oh(this.times,this.values,this.getValueSize(),e)}}er.prototype.ValueTypeName="quaternion";er.prototype.InterpolantFactoryMethodSmooth=void 0;class ar extends Pn{constructor(e,t,n){super(e,t,n)}}ar.prototype.ValueTypeName="string";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=2300;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;class tr extends Pn{constructor(e,t,n,i){super(e,t,n,i)}}tr.prototype.ValueTypeName="vector";class lh{constructor(e="",t=-1,n=[],i=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=En(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(uh(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Pn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=ih(l);l=ml(l,1,h),c=ml(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Qi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,m,v,x){if(m.length!==0){const g=[],p=[];Ec(m,g,p,v),g.length!==0&&x.push(new u(d,g,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let v;for(v=0;v<d.length;v++)if(d[v].morphTargets)for(let x=0;x<d[v].morphTargets.length;x++)m[d[v].morphTargets[x]]=-1;for(const x in m){const g=[],p=[];for(let b=0;b!==d[v].morphTargets.length;++b){const S=d[v];g.push(S.time),p.push(S.morphTarget===x?1:0)}i.push(new Qi(".morphTargetInfluence["+x+"]",g,p))}l=m.length*a}else{const m=".bones["+t[u].name+"]";n(tr,m+".position",d,"pos",i),n(er,m+".quaternion",d,"rot",i),n(tr,m+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function ch(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qi;case"vector":case"vector2":case"vector3":case"vector4":return tr;case"color":return bc;case"quaternion":return er;case"bool":case"boolean":return sr;case"string":return ar}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function uh(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ch(r.type);if(r.times===void 0){const t=[],n=[];Ec(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Yn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class hh{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const m=c[u],v=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const dh=new hh;class oi{constructor(e){this.manager=e!==void 0?e:dh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}oi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xn={};class fh extends Error{constructor(e,t){super(e),this.response=t}}class Ur extends oi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Yn.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Xn[e]!==void 0){Xn[e].push({onLoad:t,onProgress:n,onError:i});return}Xn[e]=[],Xn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Xn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=d?parseInt(d):0,v=m!==0;let x=0;const g=new ReadableStream({start(p){b();function b(){u.read().then(({done:S,value:E})=>{if(S)p.close();else{x+=E.byteLength;const L=new ProgressEvent("progress",{lengthComputable:v,loaded:x,total:m});for(let R=0,C=h.length;R<C;R++){const F=h[R];F.onProgress&&F.onProgress(L)}p.enqueue(E),b()}},S=>{p.error(S)})}}});return new Response(g)}else throw new fh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(v=>m.decode(v))}}}).then(c=>{Yn.add(`file:${e}`,c);const h=Xn[e];delete Xn[e];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=Xn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Xn[e];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Hi=new WeakMap;class ph extends oi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Yn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Hi.get(a);u===void 0&&(u=[],Hi.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=Pr("img");function l(){h(),t&&t(this);const u=Hi.get(this)||[];for(let d=0;d<u.length;d++){const m=u[d];m.onLoad&&m.onLoad(this)}Hi.delete(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),Yn.remove(`image:${e}`);const d=Hi.get(this)||[];for(let m=0;m<d.length;m++){const v=d[m];v.onError&&v.onError(u)}Hi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Yn.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class mh extends oi{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new ro,o=new Ur(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:1001,a.wrapT=c.wrapT!==void 0?c.wrapT:1001,a.magFilter=c.magFilter!==void 0?c.magFilter:1006,a.minFilter=c.minFilter!==void 0?c.minFilter:1006,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=1008),c.mipmapCount===1&&(a.minFilter=1006),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}}class or extends oi{constructor(e){super(e)}load(e,t,n,i){const s=new Ot,a=new ph(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Gs extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class wc extends Gs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ta=new $e,gl=new B,_l=new B;class ho{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ao,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gl.setFromMatrixPosition(e.matrixWorld),t.position.copy(gl),_l.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_l),t.updateMatrixWorld(),Ta.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ta,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ta)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gh extends ho{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Zi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Hs extends Gs{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new gh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const vl=new $e,Mr=new B,Ea=new B;class _h extends ho{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Mr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Mr),Ea.copy(n.position),Ea.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ea),n.updateMatrixWorld(),i.makeTranslation(-Mr.x,-Mr.y,-Mr.z),vl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl,n.coordinateSystem,n.reversedDepth)}}class fo extends Gs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new _h}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Vs extends fc{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vh extends ho{constructor(){super(new Vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ac extends Gs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new vh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ba=new WeakMap;class xh extends oi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Yn.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{if(ba.has(a)===!0)i&&i(ba.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Yn.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ba.set(l,c),Yn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Yn.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class yh extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Rc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const po="\\[\\]\\.:\\/",Mh=new RegExp("["+po+"]","g"),mo="[^"+po+"]",Sh="[^"+po.replace("\\.","")+"]",Th=/((?:WC+[\/:])*)/.source.replace("WC",mo),Eh=/(WCOD+)?/.source.replace("WCOD",Sh),bh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mo),wh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mo),Ah=new RegExp("^"+Th+Eh+bh+wh+"$"),Rh=["material","materials","bones","map"];class Ch{constructor(e,t,n){const i=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class dt{constructor(e,t,n){this.path=t,this.parsedPath=n||dt.parseTrackName(t),this.node=dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new dt.Composite(e,t,n):new dt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Mh,"")}static parseTrackName(e){const t=Ah.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Rh.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}dt.Composite=Ch;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const xl=new $e;class Ws{constructor(e,t,n=0,i=1/0){this.ray=new kr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new no,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xl),this}intersectObject(e,t=!0,n=[]){return qa(e,this,n,t),n.sort(yl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)qa(e[i],this,n,t);return n.sort(yl),n}}function yl(r,e){return r.distance-e.distance}function qa(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)qa(s[a],e,t,!0)}}function Ml(r,e,t,n){const i=Ph(n);switch(t){case 1021:return r*e;case 1028:return r*e/i.components*i.byteLength;case 1029:return r*e/i.components*i.byteLength;case 1030:return r*e*2/i.components*i.byteLength;case 1031:return r*e*2/i.components*i.byteLength;case 1022:return r*e*3/i.components*i.byteLength;case 1023:return r*e*4/i.components*i.byteLength;case 1033:return r*e*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ph(r){switch(r){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Cc(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Dh(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=r.SHORT;else if(c instanceof Uint32Array)m=r.UNSIGNED_INT;else if(c instanceof Int32Array)m=r.INT;else if(c instanceof Int8Array)m=r.BYTE;else if(c instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<u.length;m++){const v=u[d],x=u[m];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++d,u[d]=x)}u.length=d+1;for(let m=0,v=u.length;m<v;m++){const x=u[m];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var Ih=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lh=`#ifdef USE_ALPHAHASH
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
#endif`,Uh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Oh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bh=`#ifdef USE_AOMAP
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
#endif`,kh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zh=`#ifdef USE_BATCHING
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
#endif`,Gh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xh=`#ifdef USE_IRIDESCENCE
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
#endif`,qh=`#ifdef USE_BUMPMAP
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
#endif`,Yh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$h=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
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
#endif`,td=`#define PI 3.141592653589793
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
} // validated`,nd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,id=`vec3 transformedNormal = objectNormal;
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
#endif`,rd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ad=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,od=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ld="gl_FragColor = linearToOutputTexel( gl_FragColor );",cd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ud=`#ifdef USE_ENVMAP
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
#endif`,hd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dd=`#ifdef USE_ENVMAP
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
#endif`,fd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pd=`#ifdef USE_ENVMAP
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
#endif`,md=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xd=`#ifdef USE_GRADIENTMAP
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
}`,yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Md=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Td=`uniform bool receiveShadow;
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
#endif`,Ed=`#ifdef USE_ENVMAP
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
#endif`,bd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ad=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cd=`PhysicalMaterial material;
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
#endif`,Pd=`struct PhysicalMaterial {
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
}`,Dd=`
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
#endif`,Id=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ld=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ud=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Od=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gd=`#if defined( USE_POINTS_UV )
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
#endif`,Hd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yd=`#ifdef USE_MORPHTARGETS
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
#endif`,Kd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ef=`#ifdef USE_NORMALMAP
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
#endif`,tf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,af=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,of=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_f=`float getShadowMask() {
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
}`,vf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xf=`#ifdef USE_SKINNING
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
#endif`,yf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mf=`#ifdef USE_SKINNING
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
#endif`,Sf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ef=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wf=`#ifdef USE_TRANSMISSION
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
#endif`,Af=`#ifdef USE_TRANSMISSION
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
#endif`,Rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Df=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const If=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lf=`uniform sampler2D t2D;
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
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Of=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bf=`#include <common>
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
}`,kf=`#if DEPTH_PACKING == 3200
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
}`,zf=`#define DISTANCE
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
}`,Gf=`#define DISTANCE
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
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`uniform float scale;
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
}`,Xf=`uniform vec3 diffuse;
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
}`,qf=`#include <common>
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
}`,Yf=`uniform vec3 diffuse;
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
}`,Kf=`#define LAMBERT
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
}`,jf=`#define LAMBERT
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
}`,Zf=`#define MATCAP
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
}`,$f=`#define MATCAP
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
}`,Jf=`#define NORMAL
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
}`,Qf=`#define NORMAL
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
}`,ep=`#define PHONG
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
}`,tp=`#define PHONG
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
}`,np=`#define STANDARD
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
}`,ip=`#define STANDARD
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
}`,rp=`#define TOON
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
}`,sp=`#define TOON
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
}`,ap=`uniform float size;
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
}`,op=`uniform vec3 diffuse;
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
}`,lp=`#include <common>
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
}`,cp=`uniform vec3 color;
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
}`,up=`uniform float rotation;
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
}`,hp=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Ih,alphahash_pars_fragment:Lh,alphamap_fragment:Uh,alphamap_pars_fragment:Nh,alphatest_fragment:Fh,alphatest_pars_fragment:Oh,aomap_fragment:Bh,aomap_pars_fragment:kh,batching_pars_vertex:zh,batching_vertex:Gh,begin_vertex:Hh,beginnormal_vertex:Vh,bsdfs:Wh,iridescence_fragment:Xh,bumpmap_pars_fragment:qh,clipping_planes_fragment:Yh,clipping_planes_pars_fragment:Kh,clipping_planes_pars_vertex:jh,clipping_planes_vertex:Zh,color_fragment:$h,color_pars_fragment:Jh,color_pars_vertex:Qh,color_vertex:ed,common:td,cube_uv_reflection_fragment:nd,defaultnormal_vertex:id,displacementmap_pars_vertex:rd,displacementmap_vertex:sd,emissivemap_fragment:ad,emissivemap_pars_fragment:od,colorspace_fragment:ld,colorspace_pars_fragment:cd,envmap_fragment:ud,envmap_common_pars_fragment:hd,envmap_pars_fragment:dd,envmap_pars_vertex:fd,envmap_physical_pars_fragment:Ed,envmap_vertex:pd,fog_vertex:md,fog_pars_vertex:gd,fog_fragment:_d,fog_pars_fragment:vd,gradientmap_pars_fragment:xd,lightmap_pars_fragment:yd,lights_lambert_fragment:Md,lights_lambert_pars_fragment:Sd,lights_pars_begin:Td,lights_toon_fragment:bd,lights_toon_pars_fragment:wd,lights_phong_fragment:Ad,lights_phong_pars_fragment:Rd,lights_physical_fragment:Cd,lights_physical_pars_fragment:Pd,lights_fragment_begin:Dd,lights_fragment_maps:Id,lights_fragment_end:Ld,logdepthbuf_fragment:Ud,logdepthbuf_pars_fragment:Nd,logdepthbuf_pars_vertex:Fd,logdepthbuf_vertex:Od,map_fragment:Bd,map_pars_fragment:kd,map_particle_fragment:zd,map_particle_pars_fragment:Gd,metalnessmap_fragment:Hd,metalnessmap_pars_fragment:Vd,morphinstance_vertex:Wd,morphcolor_vertex:Xd,morphnormal_vertex:qd,morphtarget_pars_vertex:Yd,morphtarget_vertex:Kd,normal_fragment_begin:jd,normal_fragment_maps:Zd,normal_pars_fragment:$d,normal_pars_vertex:Jd,normal_vertex:Qd,normalmap_pars_fragment:ef,clearcoat_normal_fragment_begin:tf,clearcoat_normal_fragment_maps:nf,clearcoat_pars_fragment:rf,iridescence_pars_fragment:sf,opaque_fragment:af,packing:of,premultiplied_alpha_fragment:lf,project_vertex:cf,dithering_fragment:uf,dithering_pars_fragment:hf,roughnessmap_fragment:df,roughnessmap_pars_fragment:ff,shadowmap_pars_fragment:pf,shadowmap_pars_vertex:mf,shadowmap_vertex:gf,shadowmask_pars_fragment:_f,skinbase_vertex:vf,skinning_pars_vertex:xf,skinning_vertex:yf,skinnormal_vertex:Mf,specularmap_fragment:Sf,specularmap_pars_fragment:Tf,tonemapping_fragment:Ef,tonemapping_pars_fragment:bf,transmission_fragment:wf,transmission_pars_fragment:Af,uv_pars_fragment:Rf,uv_pars_vertex:Cf,uv_vertex:Pf,worldpos_vertex:Df,background_vert:If,background_frag:Lf,backgroundCube_vert:Uf,backgroundCube_frag:Nf,cube_vert:Ff,cube_frag:Of,depth_vert:Bf,depth_frag:kf,distanceRGBA_vert:zf,distanceRGBA_frag:Gf,equirect_vert:Hf,equirect_frag:Vf,linedashed_vert:Wf,linedashed_frag:Xf,meshbasic_vert:qf,meshbasic_frag:Yf,meshlambert_vert:Kf,meshlambert_frag:jf,meshmatcap_vert:Zf,meshmatcap_frag:$f,meshnormal_vert:Jf,meshnormal_frag:Qf,meshphong_vert:ep,meshphong_frag:tp,meshphysical_vert:np,meshphysical_frag:ip,meshtoon_vert:rp,meshtoon_frag:sp,points_vert:ap,points_frag:op,shadow_vert:lp,shadow_frag:cp,sprite_vert:up,sprite_frag:hp},Ee={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Fn={basic:{uniforms:jt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:jt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:jt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:jt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:jt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:jt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:jt([Ee.points,Ee.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:jt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:jt([Ee.common,Ee.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:jt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:jt([Ee.sprite,Ee.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:jt([Ee.common,Ee.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:jt([Ee.lights,Ee.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Fn.physical={uniforms:jt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Es={r:0,b:0,g:0},pi=new On,dp=new $e;function fp(r,e,t,n,i,s,a){const o=new Ae(0);let l=s===!0?0:1,c,h,u=null,d=0,m=null;function v(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?t:e).get(E)),E}function x(S){let E=!1;const L=v(S);L===null?p(o,l):L&&L.isColor&&(p(L,1),E=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(S,E){const L=v(E);L&&(L.isCubeTexture||L.mapping===306)?(h===void 0&&(h=new St(new wt(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:$i(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),pi.copy(E.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dp.makeRotationFromEuler(pi)),h.material.toneMapped=at.getTransfer(L.colorSpace)!==ut,(u!==L||d!==L.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,u=L,d=L.version,m=r.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new St(new An(2,2),new Pt({name:"BackgroundMaterial",uniforms:$i(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=at.getTransfer(L.colorSpace)!==ut,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||d!==L.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,u=L,d=L.version,m=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,E){S.getRGB(Es,dc(r)),n.buffers.color.setClear(Es.r,Es.g,Es.b,E,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,E=1){o.set(S),l=E,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:x,addToRenderList:g,dispose:b}}function pp(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(T,N,k,X,K){let $=!1;const V=u(X,k,N);s!==V&&(s=V,c(s.object)),$=m(T,X,k,K),$&&v(T,X,k,K),K!==null&&e.update(K,r.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,E(T,N,k,X),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return r.createVertexArray()}function c(T){return r.bindVertexArray(T)}function h(T){return r.deleteVertexArray(T)}function u(T,N,k){const X=k.wireframe===!0;let K=n[T.id];K===void 0&&(K={},n[T.id]=K);let $=K[N.id];$===void 0&&($={},K[N.id]=$);let V=$[X];return V===void 0&&(V=d(l()),$[X]=V),V}function d(T){const N=[],k=[],X=[];for(let K=0;K<t;K++)N[K]=0,k[K]=0,X[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:X,object:T,attributes:{},index:null}}function m(T,N,k,X){const K=s.attributes,$=N.attributes;let V=0;const ae=k.getAttributes();for(const G in ae)if(ae[G].location>=0){const ce=K[G];let he=$[G];if(he===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(he=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(he=T.instanceColor)),ce===void 0||ce.attribute!==he||he&&ce.data!==he.data)return!0;V++}return s.attributesNum!==V||s.index!==X}function v(T,N,k,X){const K={},$=N.attributes;let V=0;const ae=k.getAttributes();for(const G in ae)if(ae[G].location>=0){let ce=$[G];ce===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(ce=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(ce=T.instanceColor));const he={};he.attribute=ce,ce&&ce.data&&(he.data=ce.data),K[G]=he,V++}s.attributes=K,s.attributesNum=V,s.index=X}function x(){const T=s.newAttributes;for(let N=0,k=T.length;N<k;N++)T[N]=0}function g(T){p(T,0)}function p(T,N){const k=s.newAttributes,X=s.enabledAttributes,K=s.attributeDivisors;k[T]=1,X[T]===0&&(r.enableVertexAttribArray(T),X[T]=1),K[T]!==N&&(r.vertexAttribDivisor(T,N),K[T]=N)}function b(){const T=s.newAttributes,N=s.enabledAttributes;for(let k=0,X=N.length;k<X;k++)N[k]!==T[k]&&(r.disableVertexAttribArray(k),N[k]=0)}function S(T,N,k,X,K,$,V){V===!0?r.vertexAttribIPointer(T,N,k,K,$):r.vertexAttribPointer(T,N,k,X,K,$)}function E(T,N,k,X){x();const K=X.attributes,$=k.getAttributes(),V=N.defaultAttributeValues;for(const ae in $){const G=$[ae];if(G.location>=0){let te=K[ae];if(te===void 0&&(ae==="instanceMatrix"&&T.instanceMatrix&&(te=T.instanceMatrix),ae==="instanceColor"&&T.instanceColor&&(te=T.instanceColor)),te!==void 0){const ce=te.normalized,he=te.itemSize,Se=e.get(te);if(Se===void 0)continue;const Oe=Se.buffer,qe=Se.type,Ye=Se.bytesPerElement,J=qe===r.INT||qe===r.UNSIGNED_INT||te.gpuType===1013;if(te.isInterleavedBufferAttribute){const se=te.data,be=se.stride,Ge=te.offset;if(se.isInstancedInterleavedBuffer){for(let Ue=0;Ue<G.locationSize;Ue++)p(G.location+Ue,se.meshPerAttribute);T.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ue=0;Ue<G.locationSize;Ue++)g(G.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let Ue=0;Ue<G.locationSize;Ue++)S(G.location+Ue,he/G.locationSize,qe,ce,be*Ye,(Ge+he/G.locationSize*Ue)*Ye,J)}else{if(te.isInstancedBufferAttribute){for(let se=0;se<G.locationSize;se++)p(G.location+se,te.meshPerAttribute);T.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let se=0;se<G.locationSize;se++)g(G.location+se);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let se=0;se<G.locationSize;se++)S(G.location+se,he/G.locationSize,qe,ce,he*Ye,he/G.locationSize*se*Ye,J)}}else if(V!==void 0){const ce=V[ae];if(ce!==void 0)switch(ce.length){case 2:r.vertexAttrib2fv(G.location,ce);break;case 3:r.vertexAttrib3fv(G.location,ce);break;case 4:r.vertexAttrib4fv(G.location,ce);break;default:r.vertexAttrib1fv(G.location,ce)}}}}b()}function L(){F();for(const T in n){const N=n[T];for(const k in N){const X=N[k];for(const K in X)h(X[K].object),delete X[K];delete N[k]}delete n[T]}}function R(T){if(n[T.id]===void 0)return;const N=n[T.id];for(const k in N){const X=N[k];for(const K in X)h(X[K].object),delete X[K];delete N[k]}delete n[T.id]}function C(T){for(const N in n){const k=n[N];if(k[T.id]===void 0)continue;const X=k[T.id];for(const K in X)h(X[K].object),delete X[K];delete k[T.id]}}function F(){M(),a=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:F,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function mp(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v];t.update(m,n,1)}function l(c,h,u,d){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)a(c[v],h[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let v=0;for(let x=0;x<u;x++)v+=h[x]*d[x];t.update(v,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function gp(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==1023&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const F=C===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==1009&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==1015&&!F)}function l(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),E=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,R=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:E,vertexTextures:L,maxSamples:R}}function _p(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new _i,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const v=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=r.get(u);if(!i||v===null||v.length===0||s&&!g)s?h(null):c();else{const b=s?0:n,S=b*4;let E=p.clippingState||null;l.value=E,E=h(v,d,S,m);for(let L=0;L!==S;++L)E[L]=t[L];p.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,v){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=l.value,v!==!0||g===null){const p=m+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,E=m;S!==x;++S,E+=4)a.copy(u[S]).applyMatrix4(b,o),a.normal.toArray(g,E),g[E+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function vp(r){let e=new WeakMap;function t(a,o){return o===303?a.mapping=301:o===304&&(a.mapping=302),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===303||o===304)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Gu(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Wi=4,Sl=[.125,.215,.35,.446,.526,.582],xi=20,wa=new Vs,Tl=new Ae;let Aa=null,Ra=0,Ca=0,Pa=!1;const vi=(1+Math.sqrt(5))/2,Vi=1/vi,El=[new B(-vi,Vi,0),new B(vi,Vi,0),new B(-Vi,0,vi),new B(Vi,0,vi),new B(0,vi,-Vi),new B(0,vi,Vi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],xp=new B;class Ya{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=xp}=s;Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Aa,Ra,Ca),this._renderer.xr.enabled=Pa,e.scissorTest=!1,bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:At,depthBuffer:!1},i=bl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yp(s)),this._blurMaterial=Mp(s,e,t)}return i}_compileMaterial(e){const t=new St(this._lodPlanes[0],e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,n,i,s){const l=new Zt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,m=u.toneMapping;u.getClearColor(Tl),u.toneMapping=0,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const x=new fn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),g=new St(new wt,x);let p=!1;const b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,p=!0):(x.color.copy(Tl),p=!0);for(let S=0;S<6;S++){const E=S%3;E===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[S],s.y,s.z)):E===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[S]));const L=this._cubeSize;bs(i,E*L,S>2?L:0,L,L),u.setRenderTarget(i),p&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=m,u.autoClear=d,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===301||e.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Al()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wl());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new St(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;bs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=El[(i-s-1)%El.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new St(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*xi-1),x=s/v,g=isFinite(s)?1+Math.floor(h*x):xi;g>xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${xi}`);const p=[];let b=0;for(let C=0;C<xi;++C){const F=C/x,M=Math.exp(-F*F/2);p.push(M),C===0?b+=M:C<g&&(b+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=v,d.mipInt.value=S-n;const E=this._sizeLods[i],L=3*E*(i>S-Wi?i-S+Wi:0),R=4*(this._cubeSize-E);bs(t,L,R,3*E,2*E),l.setRenderTarget(t),l.render(u,wa)}}function yp(r){const e=[],t=[],n=[];let i=r;const s=r-Wi+1+Sl.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Wi?l=Sl[a-r+Wi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,v=6,x=3,g=2,p=1,b=new Float32Array(x*v*m),S=new Float32Array(g*v*m),E=new Float32Array(p*v*m);for(let R=0;R<m;R++){const C=R%3*2/3-1,F=R>2?0:-1,M=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];b.set(M,x*v*R),S.set(d,g*v*R);const T=[R,R,R,R,R,R];E.set(T,p*v*R)}const L=new Lt;L.setAttribute("position",new Bt(b,x)),L.setAttribute("uv",new Bt(S,g)),L.setAttribute("faceIndex",new Bt(E,p)),e.push(L),i>Wi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bl(r,e,t){const n=new Ht(r,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Mp(r,e,t){const n=new Float32Array(xi),i=new B(0,1,0);return new Pt({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:go(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function wl(){return new Pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:go(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Al(){return new Pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function go(){return`

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
	`}function Sp(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===303||l===304,h=l===301||l===302;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Ya(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&i(m)?(t===null&&(t=new Ya(r)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Tp(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Dr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ep(r,e,t,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete i[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)e.update(d[m],r.ARRAY_BUFFER)}function c(u){const d=[],m=u.index,v=u.attributes.position;let x=0;if(m!==null){const b=m.array;x=m.version;for(let S=0,E=b.length;S<E;S+=3){const L=b[S+0],R=b[S+1],C=b[S+2];d.push(L,R,R,C,C,L)}}else if(v!==void 0){const b=v.array;x=v.version;for(let S=0,E=b.length/3-1;S<E;S+=3){const L=S+0,R=S+1,C=S+2;d.push(L,R,R,C,C,L)}}else return;const g=new(oc(d)?hc:uc)(d,1);g.version=x;const p=s.get(u);p&&e.remove(p),s.set(u,g)}function h(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function bp(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){r.drawElements(n,m,s,d*a),t.update(m,n,1)}function c(d,m,v){v!==0&&(r.drawElementsInstanced(n,m,s,d*a,v),t.update(m,n,v))}function h(d,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,v);let g=0;for(let p=0;p<v;p++)g+=m[p];t.update(g,n,1)}function u(d,m,v,x){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,m[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,x,0,v);let p=0;for(let b=0;b<v;b++)p+=m[b]*x[b];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function wp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ap(r,e,t){const n=new WeakMap,i=new ct;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let S=0;m===!0&&(S=1),v===!0&&(S=2),x===!0&&(S=3);let E=o.attributes.position.count*S,L=1;E>e.maxTextureSize&&(L=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const R=new Float32Array(E*L*4*u),C=new lc(R,E,L,u);C.type=1015,C.needsUpdate=!0;const F=S*4;for(let T=0;T<u;T++){const N=g[T],k=p[T],X=b[T],K=E*L*4*T;for(let $=0;$<N.count;$++){const V=$*F;m===!0&&(i.fromBufferAttribute(N,$),R[K+V+0]=i.x,R[K+V+1]=i.y,R[K+V+2]=i.z,R[K+V+3]=0),v===!0&&(i.fromBufferAttribute(k,$),R[K+V+4]=i.x,R[K+V+5]=i.y,R[K+V+6]=i.z,R[K+V+7]=0),x===!0&&(i.fromBufferAttribute(X,$),R[K+V+8]=i.x,R[K+V+9]=i.y,R[K+V+10]=i.z,R[K+V+11]=X.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new Me(E,L)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Rp(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Pc=new Ot,Rl=new Mc(1,1),Dc=new lc,Ic=new Su,Lc=new pc,Cl=[],Pl=[],Dl=new Float32Array(16),Il=new Float32Array(9),Ll=new Float32Array(4);function lr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Cl[i];if(s===void 0&&(s=new Float32Array(i),Cl[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function kt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function zt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Xs(r,e){let t=Pl[e];t===void 0&&(t=new Int32Array(e),Pl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Cp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Pp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2fv(this.addr,e),zt(t,e)}}function Dp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;r.uniform3fv(this.addr,e),zt(t,e)}}function Ip(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4fv(this.addr,e),zt(t,e)}}function Lp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;Ll.set(n),r.uniformMatrix2fv(this.addr,!1,Ll),zt(t,n)}}function Up(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;Il.set(n),r.uniformMatrix3fv(this.addr,!1,Il),zt(t,n)}}function Np(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;Dl.set(n),r.uniformMatrix4fv(this.addr,!1,Dl),zt(t,n)}}function Fp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Op(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2iv(this.addr,e),zt(t,e)}}function Bp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;r.uniform3iv(this.addr,e),zt(t,e)}}function kp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4iv(this.addr,e),zt(t,e)}}function zp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Gp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2uiv(this.addr,e),zt(t,e)}}function Hp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;r.uniform3uiv(this.addr,e),zt(t,e)}}function Vp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4uiv(this.addr,e),zt(t,e)}}function Wp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Rl.compareFunction=515,s=Rl):s=Pc,t.setTexture2D(e||s,i)}function Xp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ic,i)}function qp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Lc,i)}function Yp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Dc,i)}function Kp(r){switch(r){case 5126:return Cp;case 35664:return Pp;case 35665:return Dp;case 35666:return Ip;case 35674:return Lp;case 35675:return Up;case 35676:return Np;case 5124:case 35670:return Fp;case 35667:case 35671:return Op;case 35668:case 35672:return Bp;case 35669:case 35673:return kp;case 5125:return zp;case 36294:return Gp;case 36295:return Hp;case 36296:return Vp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Yp}}function jp(r,e){r.uniform1fv(this.addr,e)}function Zp(r,e){const t=lr(e,this.size,2);r.uniform2fv(this.addr,t)}function $p(r,e){const t=lr(e,this.size,3);r.uniform3fv(this.addr,t)}function Jp(r,e){const t=lr(e,this.size,4);r.uniform4fv(this.addr,t)}function Qp(r,e){const t=lr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function em(r,e){const t=lr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function tm(r,e){const t=lr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function nm(r,e){r.uniform1iv(this.addr,e)}function im(r,e){r.uniform2iv(this.addr,e)}function rm(r,e){r.uniform3iv(this.addr,e)}function sm(r,e){r.uniform4iv(this.addr,e)}function am(r,e){r.uniform1uiv(this.addr,e)}function om(r,e){r.uniform2uiv(this.addr,e)}function lm(r,e){r.uniform3uiv(this.addr,e)}function cm(r,e){r.uniform4uiv(this.addr,e)}function um(r,e,t){const n=this.cache,i=e.length,s=Xs(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),zt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Pc,s[a])}function hm(r,e,t){const n=this.cache,i=e.length,s=Xs(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),zt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ic,s[a])}function dm(r,e,t){const n=this.cache,i=e.length,s=Xs(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),zt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Lc,s[a])}function fm(r,e,t){const n=this.cache,i=e.length,s=Xs(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),zt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Dc,s[a])}function pm(r){switch(r){case 5126:return jp;case 35664:return Zp;case 35665:return $p;case 35666:return Jp;case 35674:return Qp;case 35675:return em;case 35676:return tm;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return rm;case 35669:case 35673:return sm;case 5125:return am;case 36294:return om;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return fm}}class mm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kp(t.type)}}class gm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pm(t.type)}}class _m{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Da=/(\w+)(\])?(\[|\.)?/g;function Ul(r,e){r.seq.push(e),r.map[e.id]=e}function vm(r,e,t){const n=r.name,i=n.length;for(Da.lastIndex=0;;){const s=Da.exec(n),a=Da.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Ul(t,c===void 0?new mm(o,r,e):new gm(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new _m(o),Ul(t,u)),t=u}}}class Ps{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);vm(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Nl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const xm=37297;let ym=0;function Mm(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Fl=new et;function Sm(r){at._getMatrix(Fl,at.workingColorSpace,r);const e=`mat3( ${Fl.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(r)){case Ds:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ol(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Mm(r.getShaderSource(e),o)}else return s}function Tm(r,e){const t=Sm(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Em(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ws=new B;function bm(){at.getLuminanceCoefficients(ws);const r=ws.x.toFixed(4),e=ws.y.toFixed(4),t=ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}function Am(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rm(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Tr(r){return r!==""}function Bl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ka(r){return r.replace(Cm,Dm)}const Pm=new Map;function Dm(r,e){let t=Qe[e];if(t===void 0){const n=Pm.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ka(t)}const Im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zl(r){return r.replace(Im,Lm)}function Lm(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Gl(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function Um(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function Nm(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fm(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===302&&(e="ENVMAP_MODE_REFRACTION"),e}function Om(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function Bm(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function km(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Um(t),c=Nm(t),h=Fm(t),u=Om(t),d=Bm(t),m=wm(t),v=Am(s),x=i.createProgram();let g,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Tr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Tr).join(`
`),p.length>0&&(p+=`
`)):(g=[Gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),p=[Gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Qe.tonemapping_pars_fragment:"",t.toneMapping!==0?Em("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Tm("linearToOutputTexel",t.outputColorSpace),bm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tr).join(`
`)),a=Ka(a),a=Bl(a,t),a=kl(a,t),o=Ka(o),o=Bl(o,t),o=kl(o,t),a=zl(a),o=zl(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=b+g+a,E=b+p+o,L=Nl(i,i.VERTEX_SHADER,S),R=Nl(i,i.FRAGMENT_SHADER,E);i.attachShader(x,L),i.attachShader(x,R),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(N){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(x)||"",X=i.getShaderInfoLog(L)||"",K=i.getShaderInfoLog(R)||"",$=k.trim(),V=X.trim(),ae=K.trim();let G=!0,te=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,L,R);else{const ce=Ol(i,L,"vertex"),he=Ol(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+$+`
`+ce+`
`+he)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(V===""||ae==="")&&(te=!1);te&&(N.diagnostics={runnable:G,programLog:$,vertexShader:{log:V,prefix:g},fragmentShader:{log:ae,prefix:p}})}i.deleteShader(L),i.deleteShader(R),F=new Ps(i,x),M=Rm(i,x)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(x,xm)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ym++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=R,this}let zm=0;class Gm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Hm(e),t.set(e,n)),n}}class Hm{constructor(e){this.id=zm++,this.code=e,this.usedTimes=0}}function Vm(r,e,t,n,i,s,a){const o=new no,l=new Gm,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,T,N,k,X){const K=k.fog,$=X.geometry,V=M.isMeshStandardMaterial?k.environment:null,ae=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),G=ae&&ae.mapping===306?ae.image.height:null,te=v[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const ce=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,he=ce!==void 0?ce.length:0;let Se=0;$.morphAttributes.position!==void 0&&(Se=1),$.morphAttributes.normal!==void 0&&(Se=2),$.morphAttributes.color!==void 0&&(Se=3);let Oe,qe,Ye,J;if(te){const ot=Fn[te];Oe=ot.vertexShader,qe=ot.fragmentShader}else Oe=M.vertexShader,qe=M.fragmentShader,l.update(M),Ye=l.getVertexShaderID(M),J=l.getFragmentShaderID(M);const se=r.getRenderTarget(),be=r.state.buffers.depth.getReversed(),Ge=X.isInstancedMesh===!0,Ue=X.isBatchedMesh===!0,tt=!!M.map,Ct=!!M.matcap,O=!!ae,_t=!!M.aoMap,Ke=!!M.lightMap,Ve=!!M.bumpMap,Pe=!!M.normalMap,vt=!!M.displacementMap,Re=!!M.emissiveMap,Ze=!!M.metalnessMap,Ut=!!M.roughnessMap,Et=M.anisotropy>0,U=M.clearcoat>0,w=M.dispersion>0,Y=M.iridescence>0,ie=M.sheen>0,le=M.transmission>0,ee=Et&&!!M.anisotropyMap,Ne=U&&!!M.clearcoatMap,ge=U&&!!M.clearcoatNormalMap,Ie=U&&!!M.clearcoatRoughnessMap,Fe=Y&&!!M.iridescenceMap,pe=Y&&!!M.iridescenceThicknessMap,xe=ie&&!!M.sheenColorMap,De=ie&&!!M.sheenRoughnessMap,Le=!!M.specularMap,ye=!!M.specularColorMap,Be=!!M.specularIntensityMap,z=le&&!!M.transmissionMap,me=le&&!!M.thicknessMap,Z=!!M.gradientMap,we=!!M.alphaMap,de=M.alphaTest>0,re=!!M.alphaHash,Ce=!!M.extensions;let je=0;M.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(je=r.toneMapping);const mt={shaderID:te,shaderType:M.type,shaderName:M.name,vertexShader:Oe,fragmentShader:qe,defines:M.defines,customVertexShaderID:Ye,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ue,batchingColor:Ue&&X._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&X.instanceColor!==null,instancingMorph:Ge&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?r.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:At,alphaToCoverage:!!M.alphaToCoverage,map:tt,matcap:Ct,envMap:O,envMapMode:O&&ae.mapping,envMapCubeUVHeight:G,aoMap:_t,lightMap:Ke,bumpMap:Ve,normalMap:Pe,displacementMap:d&&vt,emissiveMap:Re,normalMapObjectSpace:Pe&&M.normalMapType===1,normalMapTangentSpace:Pe&&M.normalMapType===0,metalnessMap:Ze,roughnessMap:Ut,anisotropy:Et,anisotropyMap:ee,clearcoat:U,clearcoatMap:Ne,clearcoatNormalMap:ge,clearcoatRoughnessMap:Ie,dispersion:w,iridescence:Y,iridescenceMap:Fe,iridescenceThicknessMap:pe,sheen:ie,sheenColorMap:xe,sheenRoughnessMap:De,specularMap:Le,specularColorMap:ye,specularIntensityMap:Be,transmission:le,transmissionMap:z,thicknessMap:me,gradientMap:Z,opaque:M.transparent===!1&&M.blending===1&&M.alphaToCoverage===!1,alphaMap:we,alphaTest:de,alphaHash:re,combine:M.combine,mapUv:tt&&x(M.map.channel),aoMapUv:_t&&x(M.aoMap.channel),lightMapUv:Ke&&x(M.lightMap.channel),bumpMapUv:Ve&&x(M.bumpMap.channel),normalMapUv:Pe&&x(M.normalMap.channel),displacementMapUv:vt&&x(M.displacementMap.channel),emissiveMapUv:Re&&x(M.emissiveMap.channel),metalnessMapUv:Ze&&x(M.metalnessMap.channel),roughnessMapUv:Ut&&x(M.roughnessMap.channel),anisotropyMapUv:ee&&x(M.anisotropyMap.channel),clearcoatMapUv:Ne&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ge&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(M.sheenRoughnessMap.channel),specularMapUv:Le&&x(M.specularMap.channel),specularColorMapUv:ye&&x(M.specularColorMap.channel),specularIntensityMapUv:Be&&x(M.specularIntensityMap.channel),transmissionMapUv:z&&x(M.transmissionMap.channel),thicknessMapUv:me&&x(M.thicknessMap.channel),alphaMapUv:we&&x(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Pe||Et),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!$.attributes.uv&&(tt||we),fog:!!K,useFog:M.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:be,skinning:X.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Se,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:je,decodeVideoTexture:tt&&M.map.isVideoTexture===!0&&at.getTransfer(M.map.colorSpace)===ut,decodeVideoTextureEmissive:Re&&M.emissiveMap.isVideoTexture===!0&&at.getTransfer(M.emissiveMap.colorSpace)===ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===2,flipSided:M.side===1,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ce&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&M.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function p(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)T.push(N),T.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(b(T,M),S(T,M),T.push(r.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function b(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function S(M,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),T.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),M.push(o.mask)}function E(M){const T=v[M.type];let N;if(T){const k=Fn[T];N=Ji.clone(k.uniforms)}else N=M.uniforms;return N}function L(M,T){let N;for(let k=0,X=h.length;k<X;k++){const K=h[k];if(K.cacheKey===T){N=K,++N.usedTimes;break}}return N===void 0&&(N=new km(r,T,M,s),h.push(N)),N}function R(M){if(--M.usedTimes===0){const T=h.indexOf(M);h[T]=h[h.length-1],h.pop(),M.destroy()}}function C(M){l.remove(M)}function F(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:E,acquireProgram:L,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:F}}function Wm(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Xm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Hl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Vl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,m,v,x,g){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:v,renderOrder:u.renderOrder,z:x,group:g},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=v,p.renderOrder=u.renderOrder,p.z=x,p.group=g),e++,p}function o(u,d,m,v,x,g){const p=a(u,d,m,v,x,g);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):t.push(p)}function l(u,d,m,v,x,g){const p=a(u,d,m,v,x,g);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Xm),n.length>1&&n.sort(d||Hl),i.length>1&&i.sort(d||Hl)}function h(){for(let u=e,d=r.length;u<d;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function qm(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Vl,r.set(n,[a])):i>=s.length?(a=new Vl,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ym(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ae};break;case"SpotLight":t={position:new B,direction:new B,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function Km(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let jm=0;function Zm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function $m(r){const e=new Ym,t=Km(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,s=new $e,a=new $e;function o(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,v=0,x=0,g=0,p=0,b=0,S=0,E=0,L=0,R=0,C=0;c.sort(Zm);for(let M=0,T=c.length;M<T;M++){const N=c[M],k=N.color,X=N.intensity,K=N.distance,$=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=k.r*X,u+=k.g*X,d+=k.b*X;else if(N.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(N.sh.coefficients[V],X);C++}else if(N.isDirectionalLight){const V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ae=N.shadow,G=t.get(N);G.shadowIntensity=ae.intensity,G.shadowBias=ae.bias,G.shadowNormalBias=ae.normalBias,G.shadowRadius=ae.radius,G.shadowMapSize=ae.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=N.shadow.matrix,b++}n.directional[m]=V,m++}else if(N.isSpotLight){const V=e.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(k).multiplyScalar(X),V.distance=K,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,n.spot[x]=V;const ae=N.shadow;if(N.map&&(n.spotLightMap[L]=N.map,L++,ae.updateMatrices(N),N.castShadow&&R++),n.spotLightMatrix[x]=ae.matrix,N.castShadow){const G=t.get(N);G.shadowIntensity=ae.intensity,G.shadowBias=ae.bias,G.shadowNormalBias=ae.normalBias,G.shadowRadius=ae.radius,G.shadowMapSize=ae.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=$,E++}x++}else if(N.isRectAreaLight){const V=e.get(N);V.color.copy(k).multiplyScalar(X),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),n.rectArea[g]=V,g++}else if(N.isPointLight){const V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),V.distance=N.distance,V.decay=N.decay,N.castShadow){const ae=N.shadow,G=t.get(N);G.shadowIntensity=ae.intensity,G.shadowBias=ae.bias,G.shadowNormalBias=ae.normalBias,G.shadowRadius=ae.radius,G.shadowMapSize=ae.mapSize,G.shadowCameraNear=ae.camera.near,G.shadowCameraFar=ae.camera.far,n.pointShadow[v]=G,n.pointShadowMap[v]=$,n.pointShadowMatrix[v]=N.shadow.matrix,S++}n.point[v]=V,v++}else if(N.isHemisphereLight){const V=e.get(N);V.skyColor.copy(N.color).multiplyScalar(X),V.groundColor.copy(N.groundColor).multiplyScalar(X),n.hemi[p]=V,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const F=n.hash;(F.directionalLength!==m||F.pointLength!==v||F.spotLength!==x||F.rectAreaLength!==g||F.hemiLength!==p||F.numDirectionalShadows!==b||F.numPointShadows!==S||F.numSpotShadows!==E||F.numSpotMaps!==L||F.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=g,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=E+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,F.directionalLength=m,F.pointLength=v,F.spotLength=x,F.rectAreaLength=g,F.hemiLength=p,F.numDirectionalShadows=b,F.numPointShadows=S,F.numSpotShadows=E,F.numSpotMaps=L,F.numLightProbes=C,n.version=jm++)}function l(c,h){let u=0,d=0,m=0,v=0,x=0;const g=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const S=c[p];if(S.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),u++}else if(S.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),m++}else if(S.isRectAreaLight){const E=n.rectArea[v];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(g),a.identity(),s.copy(S.matrixWorld),s.premultiply(g),a.extractRotation(s),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){const E=n.hemi[x];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function Wl(r){const e=new $m(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Jm(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Wl(r),e.set(i,[o])):s>=a.length?(o=new Wl(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Qm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eg=`uniform sampler2D shadow_pass;
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
}`;function tg(r,e,t){let n=new ao;const i=new Me,s=new Me,a=new ct,o=new Tc({depthPacking:3201}),l=new th,c={},h=t.maxTextureSize,u={0:1,1:0,2:2},d=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:Qm,fragmentShader:eg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Lt;v.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new St(v,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(R,C,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const M=r.getRenderTarget(),T=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),k=r.state;k.setBlending(0),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const X=p!==3&&this.type===3,K=p===3&&this.type!==3;for(let $=0,V=R.length;$<V;$++){const ae=R[$],G=ae.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const te=G.getFrameExtents();if(i.multiply(te),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/te.x),i.x=s.x*te.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/te.y),i.y=s.y*te.y,G.mapSize.y=s.y)),G.map===null||X===!0||K===!0){const he=this.type!==3?{minFilter:1003,magFilter:1003}:{};G.map!==null&&G.map.dispose(),G.map=new Ht(i.x,i.y,he),G.map.texture.name=ae.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const ce=G.getViewportCount();for(let he=0;he<ce;he++){const Se=G.getViewport(he);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),k.viewport(a),G.updateMatrices(ae,he),n=G.getFrustum(),E(C,F,G.camera,ae,this.type)}G.isPointLightShadow!==!0&&this.type===3&&b(G,F),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(M,T,N)};function b(R,C){const F=e.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ht(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(C,null,F,d,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(C,null,F,m,x,null)}function S(R,C,F,M){let T=null;const N=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)T=N;else if(T=F.isPointLight===!0?l:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=T.uuid,X=C.uuid;let K=c[k];K===void 0&&(K={},c[k]=K);let $=K[X];$===void 0&&($=T.clone(),K[X]=$,C.addEventListener("dispose",L)),T=$}if(T.visible=C.visible,T.wireframe=C.wireframe,M===3?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:u[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,F.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const k=r.properties.get(T);k.light=F}return T}function E(R,C,F,M,T){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===3)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const X=e.update(R),K=R.material;if(Array.isArray(K)){const $=X.groups;for(let V=0,ae=$.length;V<ae;V++){const G=$[V],te=K[G.materialIndex];if(te&&te.visible){const ce=S(R,te,M,T);R.onBeforeShadow(r,R,C,F,X,ce,G),r.renderBufferDirect(F,null,X,ce,R,G),R.onAfterShadow(r,R,C,F,X,ce,G)}}}else if(K.visible){const $=S(R,K,M,T);R.onBeforeShadow(r,R,C,F,X,$,null),r.renderBufferDirect(F,null,X,$,R,null),R.onAfterShadow(r,R,C,F,X,$,null)}}const k=R.children;for(let X=0,K=k.length;X<K;X++)E(k[X],C,F,M,T)}function L(R){R.target.removeEventListener("dispose",L);for(const F in c){const M=c[F],T=R.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}const ng={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function ig(r,e){function t(){let z=!1;const me=new ct;let Z=null;const we=new ct(0,0,0,0);return{setMask:function(de){Z!==de&&!z&&(r.colorMask(de,de,de,de),Z=de)},setLocked:function(de){z=de},setClear:function(de,re,Ce,je,mt){mt===!0&&(de*=je,re*=je,Ce*=je),me.set(de,re,Ce,je),we.equals(me)===!1&&(r.clearColor(de,re,Ce,je),we.copy(me))},reset:function(){z=!1,Z=null,we.set(-1,0,0,0)}}}function n(){let z=!1,me=!1,Z=null,we=null,de=null;return{setReversed:function(re){if(me!==re){const Ce=e.get("EXT_clip_control");re?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),me=re;const je=de;de=null,this.setClear(je)}},getReversed:function(){return me},setTest:function(re){re?se(r.DEPTH_TEST):be(r.DEPTH_TEST)},setMask:function(re){Z!==re&&!z&&(r.depthMask(re),Z=re)},setFunc:function(re){if(me&&(re=ng[re]),we!==re){switch(re){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}we=re}},setLocked:function(re){z=re},setClear:function(re){de!==re&&(me&&(re=1-re),r.clearDepth(re),de=re)},reset:function(){z=!1,Z=null,we=null,de=null,me=!1}}}function i(){let z=!1,me=null,Z=null,we=null,de=null,re=null,Ce=null,je=null,mt=null;return{setTest:function(ot){z||(ot?se(r.STENCIL_TEST):be(r.STENCIL_TEST))},setMask:function(ot){me!==ot&&!z&&(r.stencilMask(ot),me=ot)},setFunc:function(ot,mn,on){(Z!==ot||we!==mn||de!==on)&&(r.stencilFunc(ot,mn,on),Z=ot,we=mn,de=on)},setOp:function(ot,mn,on){(re!==ot||Ce!==mn||je!==on)&&(r.stencilOp(ot,mn,on),re=ot,Ce=mn,je=on)},setLocked:function(ot){z=ot},setClear:function(ot){mt!==ot&&(r.clearStencil(ot),mt=ot)},reset:function(){z=!1,me=null,Z=null,we=null,de=null,re=null,Ce=null,je=null,mt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,m=[],v=null,x=!1,g=null,p=null,b=null,S=null,E=null,L=null,R=null,C=new Ae(0,0,0),F=0,M=!1,T=null,N=null,k=null,X=null,K=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ae=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=ae>=1):G.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=ae>=2);let te=null,ce={};const he=r.getParameter(r.SCISSOR_BOX),Se=r.getParameter(r.VIEWPORT),Oe=new ct().fromArray(he),qe=new ct().fromArray(Se);function Ye(z,me,Z,we){const de=new Uint8Array(4),re=r.createTexture();r.bindTexture(z,re),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ce=0;Ce<Z;Ce++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(me,0,r.RGBA,1,1,we,0,r.RGBA,r.UNSIGNED_BYTE,de):r.texImage2D(me+Ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,de);return re}const J={};J[r.TEXTURE_2D]=Ye(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=Ye(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=Ye(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=Ye(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(r.DEPTH_TEST),a.setFunc(3),Ve(!1),Pe(1),se(r.CULL_FACE),_t(0);function se(z){h[z]!==!0&&(r.enable(z),h[z]=!0)}function be(z){h[z]!==!1&&(r.disable(z),h[z]=!1)}function Ge(z,me){return u[z]!==me?(r.bindFramebuffer(z,me),u[z]=me,z===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=me),z===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=me),!0):!1}function Ue(z,me){let Z=m,we=!1;if(z){Z=d.get(me),Z===void 0&&(Z=[],d.set(me,Z));const de=z.textures;if(Z.length!==de.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let re=0,Ce=de.length;re<Ce;re++)Z[re]=r.COLOR_ATTACHMENT0+re;Z.length=de.length,we=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,we=!0);we&&r.drawBuffers(Z)}function tt(z){return v!==z?(r.useProgram(z),v=z,!0):!1}const Ct={100:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};Ct[103]=r.MIN,Ct[104]=r.MAX;const O={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,204:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,205:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function _t(z,me,Z,we,de,re,Ce,je,mt,ot){if(z===0){x===!0&&(be(r.BLEND),x=!1);return}if(x===!1&&(se(r.BLEND),x=!0),z!==5){if(z!==g||ot!==M){if((p!==100||E!==100)&&(r.blendEquation(r.FUNC_ADD),p=100,E=100),ot)switch(z){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case 3:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}b=null,S=null,L=null,R=null,C.set(0,0,0),F=0,g=z,M=ot}return}de=de||me,re=re||Z,Ce=Ce||we,(me!==p||de!==E)&&(r.blendEquationSeparate(Ct[me],Ct[de]),p=me,E=de),(Z!==b||we!==S||re!==L||Ce!==R)&&(r.blendFuncSeparate(O[Z],O[we],O[re],O[Ce]),b=Z,S=we,L=re,R=Ce),(je.equals(C)===!1||mt!==F)&&(r.blendColor(je.r,je.g,je.b,mt),C.copy(je),F=mt),g=z,M=!1}function Ke(z,me){z.side===2?be(r.CULL_FACE):se(r.CULL_FACE);let Z=z.side===1;me&&(Z=!Z),Ve(Z),z.blending===1&&z.transparent===!1?_t(0):_t(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),s.setMask(z.colorWrite);const we=z.stencilWrite;o.setTest(we),we&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Re(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):be(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(z){T!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),T=z)}function Pe(z){z!==0?(se(r.CULL_FACE),z!==N&&(z===1?r.cullFace(r.BACK):z===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):be(r.CULL_FACE),N=z}function vt(z){z!==k&&(V&&r.lineWidth(z),k=z)}function Re(z,me,Z){z?(se(r.POLYGON_OFFSET_FILL),(X!==me||K!==Z)&&(r.polygonOffset(me,Z),X=me,K=Z)):be(r.POLYGON_OFFSET_FILL)}function Ze(z){z?se(r.SCISSOR_TEST):be(r.SCISSOR_TEST)}function Ut(z){z===void 0&&(z=r.TEXTURE0+$-1),te!==z&&(r.activeTexture(z),te=z)}function Et(z,me,Z){Z===void 0&&(te===null?Z=r.TEXTURE0+$-1:Z=te);let we=ce[Z];we===void 0&&(we={type:void 0,texture:void 0},ce[Z]=we),(we.type!==z||we.texture!==me)&&(te!==Z&&(r.activeTexture(Z),te=Z),r.bindTexture(z,me||J[z]),we.type=z,we.texture=me)}function U(){const z=ce[te];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function w(){try{r.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Y(){try{r.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{r.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{r.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(){try{r.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ne(){try{r.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ge(){try{r.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{r.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Fe(){try{r.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pe(){try{r.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xe(z){Oe.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),Oe.copy(z))}function De(z){qe.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),qe.copy(z))}function Le(z,me){let Z=c.get(me);Z===void 0&&(Z=new WeakMap,c.set(me,Z));let we=Z.get(z);we===void 0&&(we=r.getUniformBlockIndex(me,z.name),Z.set(z,we))}function ye(z,me){const we=c.get(me).get(z);l.get(me)!==we&&(r.uniformBlockBinding(me,we,z.__bindingPointIndex),l.set(me,we))}function Be(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},te=null,ce={},u={},d=new WeakMap,m=[],v=null,x=!1,g=null,p=null,b=null,S=null,E=null,L=null,R=null,C=new Ae(0,0,0),F=0,M=!1,T=null,N=null,k=null,X=null,K=null,Oe.set(0,0,r.canvas.width,r.canvas.height),qe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:be,bindFramebuffer:Ge,drawBuffers:Ue,useProgram:tt,setBlending:_t,setMaterial:Ke,setFlipSided:Ve,setCullFace:Pe,setLineWidth:vt,setPolygonOffset:Re,setScissorTest:Ze,activeTexture:Ut,bindTexture:Et,unbindTexture:U,compressedTexImage2D:w,compressedTexImage3D:Y,texImage2D:Fe,texImage3D:pe,updateUBOMapping:Le,uniformBlockBinding:ye,texStorage2D:ge,texStorage3D:Ie,texSubImage2D:ie,texSubImage3D:le,compressedTexSubImage2D:ee,compressedTexSubImage3D:Ne,scissor:xe,viewport:De,reset:Be}}function rg(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(U,w){return m?new OffscreenCanvas(U,w):Pr("canvas")}function x(U,w,Y){let ie=1;const le=Et(U);if((le.width>Y||le.height>Y)&&(ie=Y/Math.max(le.width,le.height)),ie<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ee=Math.floor(ie*le.width),Ne=Math.floor(ie*le.height);u===void 0&&(u=v(ee,Ne));const ge=w?v(ee,Ne):u;return ge.width=ee,ge.height=Ne,ge.getContext("2d").drawImage(U,0,0,ee,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ee+"x"+Ne+")."),ge}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),U;return U}function g(U){return U.generateMipmaps}function p(U){r.generateMipmap(U)}function b(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(U,w,Y,ie,le=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ee=w;if(w===r.RED&&(Y===r.FLOAT&&(ee=r.R32F),Y===r.HALF_FLOAT&&(ee=r.R16F),Y===r.UNSIGNED_BYTE&&(ee=r.R8)),w===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ee=r.R8UI),Y===r.UNSIGNED_SHORT&&(ee=r.R16UI),Y===r.UNSIGNED_INT&&(ee=r.R32UI),Y===r.BYTE&&(ee=r.R8I),Y===r.SHORT&&(ee=r.R16I),Y===r.INT&&(ee=r.R32I)),w===r.RG&&(Y===r.FLOAT&&(ee=r.RG32F),Y===r.HALF_FLOAT&&(ee=r.RG16F),Y===r.UNSIGNED_BYTE&&(ee=r.RG8)),w===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ee=r.RG8UI),Y===r.UNSIGNED_SHORT&&(ee=r.RG16UI),Y===r.UNSIGNED_INT&&(ee=r.RG32UI),Y===r.BYTE&&(ee=r.RG8I),Y===r.SHORT&&(ee=r.RG16I),Y===r.INT&&(ee=r.RG32I)),w===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ee=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(ee=r.RGB16UI),Y===r.UNSIGNED_INT&&(ee=r.RGB32UI),Y===r.BYTE&&(ee=r.RGB8I),Y===r.SHORT&&(ee=r.RGB16I),Y===r.INT&&(ee=r.RGB32I)),w===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ee=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(ee=r.RGBA16UI),Y===r.UNSIGNED_INT&&(ee=r.RGBA32UI),Y===r.BYTE&&(ee=r.RGBA8I),Y===r.SHORT&&(ee=r.RGBA16I),Y===r.INT&&(ee=r.RGBA32I)),w===r.RGB&&(Y===r.UNSIGNED_INT_5_9_9_9_REV&&(ee=r.RGB9_E5),Y===r.UNSIGNED_INT_10F_11F_11F_REV&&(ee=r.R11F_G11F_B10F)),w===r.RGBA){const Ne=le?Ds:at.getTransfer(ie);Y===r.FLOAT&&(ee=r.RGBA32F),Y===r.HALF_FLOAT&&(ee=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(ee=Ne===ut?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(ee=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(ee=r.RGB5_A1)}return(ee===r.R16F||ee===r.R32F||ee===r.RG16F||ee===r.RG32F||ee===r.RGBA16F||ee===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function E(U,w){let Y;return U?w===null||w===1014||w===1020?Y=r.DEPTH24_STENCIL8:w===1015?Y=r.DEPTH32F_STENCIL8:w===1012&&(Y=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===1014||w===1020?Y=r.DEPTH_COMPONENT24:w===1015?Y=r.DEPTH_COMPONENT32F:w===1012&&(Y=r.DEPTH_COMPONENT16),Y}function L(U,w){return g(U)===!0||U.isFramebufferTexture&&U.minFilter!==1003&&U.minFilter!==1006?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function R(U){const w=U.target;w.removeEventListener("dispose",R),F(w),w.isVideoTexture&&h.delete(w)}function C(U){const w=U.target;w.removeEventListener("dispose",C),T(w)}function F(U){const w=n.get(U);if(w.__webglInit===void 0)return;const Y=U.source,ie=d.get(Y);if(ie){const le=ie[w.__cacheKey];le.usedTimes--,le.usedTimes===0&&M(U),Object.keys(ie).length===0&&d.delete(Y)}n.remove(U)}function M(U){const w=n.get(U);r.deleteTexture(w.__webglTexture);const Y=U.source,ie=d.get(Y);delete ie[w.__cacheKey],a.memory.textures--}function T(U){const w=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(w.__webglFramebuffer[ie]))for(let le=0;le<w.__webglFramebuffer[ie].length;le++)r.deleteFramebuffer(w.__webglFramebuffer[ie][le]);else r.deleteFramebuffer(w.__webglFramebuffer[ie]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[ie])}else{if(Array.isArray(w.__webglFramebuffer))for(let ie=0;ie<w.__webglFramebuffer.length;ie++)r.deleteFramebuffer(w.__webglFramebuffer[ie]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ie=0;ie<w.__webglColorRenderbuffer.length;ie++)w.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[ie]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Y=U.textures;for(let ie=0,le=Y.length;ie<le;ie++){const ee=n.get(Y[ie]);ee.__webglTexture&&(r.deleteTexture(ee.__webglTexture),a.memory.textures--),n.remove(Y[ie])}n.remove(U)}let N=0;function k(){N=0}function X(){const U=N;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),N+=1,U}function K(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function $(U,w){const Y=n.get(U);if(U.isVideoTexture&&Ze(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Y.__version!==U.version){const ie=U.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(Y,U,w);return}}else U.isExternalTexture&&(Y.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+w)}function V(U,w){const Y=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Y.__version!==U.version){J(Y,U,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+w)}function ae(U,w){const Y=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Y.__version!==U.version){J(Y,U,w);return}t.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+w)}function G(U,w){const Y=n.get(U);if(U.version>0&&Y.__version!==U.version){se(Y,U,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+w)}const te={1e3:r.REPEAT,1001:r.CLAMP_TO_EDGE,1002:r.MIRRORED_REPEAT},ce={1003:r.NEAREST,1004:r.NEAREST_MIPMAP_NEAREST,1005:r.NEAREST_MIPMAP_LINEAR,1006:r.LINEAR,1007:r.LINEAR_MIPMAP_NEAREST,1008:r.LINEAR_MIPMAP_LINEAR},he={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function Se(U,w){if(w.type===1015&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===1006||w.magFilter===1007||w.magFilter===1005||w.magFilter===1008||w.minFilter===1006||w.minFilter===1007||w.minFilter===1005||w.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,te[w.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,te[w.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,te[w.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,ce[w.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,ce[w.minFilter]),w.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,he[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===1003||w.minFilter!==1005&&w.minFilter!==1008||w.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Oe(U,w){let Y=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",R));const ie=w.source;let le=d.get(ie);le===void 0&&(le={},d.set(ie,le));const ee=K(w);if(ee!==U.__cacheKey){le[ee]===void 0&&(le[ee]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),le[ee].usedTimes++;const Ne=le[U.__cacheKey];Ne!==void 0&&(le[U.__cacheKey].usedTimes--,Ne.usedTimes===0&&M(w)),U.__cacheKey=ee,U.__webglTexture=le[ee].texture}return Y}function qe(U,w,Y){return Math.floor(Math.floor(U/Y)/w)}function Ye(U,w,Y,ie){const ee=U.updateRanges;if(ee.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,w.width,w.height,Y,ie,w.data);else{ee.sort((pe,xe)=>pe.start-xe.start);let Ne=0;for(let pe=1;pe<ee.length;pe++){const xe=ee[Ne],De=ee[pe],Le=xe.start+xe.count,ye=qe(De.start,w.width,4),Be=qe(xe.start,w.width,4);De.start<=Le+1&&ye===Be&&qe(De.start+De.count-1,w.width,4)===ye?xe.count=Math.max(xe.count,De.start+De.count-xe.start):(++Ne,ee[Ne]=De)}ee.length=Ne+1;const ge=r.getParameter(r.UNPACK_ROW_LENGTH),Ie=r.getParameter(r.UNPACK_SKIP_PIXELS),Fe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,w.width);for(let pe=0,xe=ee.length;pe<xe;pe++){const De=ee[pe],Le=Math.floor(De.start/4),ye=Math.ceil(De.count/4),Be=Le%w.width,z=Math.floor(Le/w.width),me=ye,Z=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Be),r.pixelStorei(r.UNPACK_SKIP_ROWS,z),t.texSubImage2D(r.TEXTURE_2D,0,Be,z,me,Z,Y,ie,w.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ge),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ie),r.pixelStorei(r.UNPACK_SKIP_ROWS,Fe)}}function J(U,w,Y){let ie=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ie=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ie=r.TEXTURE_3D);const le=Oe(U,w),ee=w.source;t.bindTexture(ie,U.__webglTexture,r.TEXTURE0+Y);const Ne=n.get(ee);if(ee.version!==Ne.__version||le===!0){t.activeTexture(r.TEXTURE0+Y);const ge=at.getPrimaries(at.workingColorSpace),Ie=w.colorSpace===""?null:at.getPrimaries(w.colorSpace),Fe=w.colorSpace===""||ge===Ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let pe=x(w.image,!1,i.maxTextureSize);pe=Ut(w,pe);const xe=s.convert(w.format,w.colorSpace),De=s.convert(w.type);let Le=S(w.internalFormat,xe,De,w.colorSpace,w.isVideoTexture);Se(ie,w);let ye;const Be=w.mipmaps,z=w.isVideoTexture!==!0,me=Ne.__version===void 0||le===!0,Z=ee.dataReady,we=L(w,pe);if(w.isDepthTexture)Le=E(w.format===1027,w.type),me&&(z?t.texStorage2D(r.TEXTURE_2D,1,Le,pe.width,pe.height):t.texImage2D(r.TEXTURE_2D,0,Le,pe.width,pe.height,0,xe,De,null));else if(w.isDataTexture)if(Be.length>0){z&&me&&t.texStorage2D(r.TEXTURE_2D,we,Le,Be[0].width,Be[0].height);for(let de=0,re=Be.length;de<re;de++)ye=Be[de],z?Z&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,ye.width,ye.height,xe,De,ye.data):t.texImage2D(r.TEXTURE_2D,de,Le,ye.width,ye.height,0,xe,De,ye.data);w.generateMipmaps=!1}else z?(me&&t.texStorage2D(r.TEXTURE_2D,we,Le,pe.width,pe.height),Z&&Ye(w,pe,xe,De)):t.texImage2D(r.TEXTURE_2D,0,Le,pe.width,pe.height,0,xe,De,pe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){z&&me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,we,Le,Be[0].width,Be[0].height,pe.depth);for(let de=0,re=Be.length;de<re;de++)if(ye=Be[de],w.format!==1023)if(xe!==null)if(z){if(Z)if(w.layerUpdates.size>0){const Ce=Ml(ye.width,ye.height,w.format,w.type);for(const je of w.layerUpdates){const mt=ye.data.subarray(je*Ce/ye.data.BYTES_PER_ELEMENT,(je+1)*Ce/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,je,ye.width,ye.height,1,xe,mt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,ye.width,ye.height,pe.depth,xe,ye.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,de,Le,ye.width,ye.height,pe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?Z&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,ye.width,ye.height,pe.depth,xe,De,ye.data):t.texImage3D(r.TEXTURE_2D_ARRAY,de,Le,ye.width,ye.height,pe.depth,0,xe,De,ye.data)}else{z&&me&&t.texStorage2D(r.TEXTURE_2D,we,Le,Be[0].width,Be[0].height);for(let de=0,re=Be.length;de<re;de++)ye=Be[de],w.format!==1023?xe!==null?z?Z&&t.compressedTexSubImage2D(r.TEXTURE_2D,de,0,0,ye.width,ye.height,xe,ye.data):t.compressedTexImage2D(r.TEXTURE_2D,de,Le,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?Z&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,ye.width,ye.height,xe,De,ye.data):t.texImage2D(r.TEXTURE_2D,de,Le,ye.width,ye.height,0,xe,De,ye.data)}else if(w.isDataArrayTexture)if(z){if(me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,we,Le,pe.width,pe.height,pe.depth),Z)if(w.layerUpdates.size>0){const de=Ml(pe.width,pe.height,w.format,w.type);for(const re of w.layerUpdates){const Ce=pe.data.subarray(re*de/pe.data.BYTES_PER_ELEMENT,(re+1)*de/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,re,pe.width,pe.height,1,xe,De,Ce)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,xe,De,pe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Le,pe.width,pe.height,pe.depth,0,xe,De,pe.data);else if(w.isData3DTexture)z?(me&&t.texStorage3D(r.TEXTURE_3D,we,Le,pe.width,pe.height,pe.depth),Z&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,xe,De,pe.data)):t.texImage3D(r.TEXTURE_3D,0,Le,pe.width,pe.height,pe.depth,0,xe,De,pe.data);else if(w.isFramebufferTexture){if(me)if(z)t.texStorage2D(r.TEXTURE_2D,we,Le,pe.width,pe.height);else{let de=pe.width,re=pe.height;for(let Ce=0;Ce<we;Ce++)t.texImage2D(r.TEXTURE_2D,Ce,Le,de,re,0,xe,De,null),de>>=1,re>>=1}}else if(Be.length>0){if(z&&me){const de=Et(Be[0]);t.texStorage2D(r.TEXTURE_2D,we,Le,de.width,de.height)}for(let de=0,re=Be.length;de<re;de++)ye=Be[de],z?Z&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,xe,De,ye):t.texImage2D(r.TEXTURE_2D,de,Le,xe,De,ye);w.generateMipmaps=!1}else if(z){if(me){const de=Et(pe);t.texStorage2D(r.TEXTURE_2D,we,Le,de.width,de.height)}Z&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,xe,De,pe)}else t.texImage2D(r.TEXTURE_2D,0,Le,xe,De,pe);g(w)&&p(ie),Ne.__version=ee.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function se(U,w,Y){if(w.image.length!==6)return;const ie=Oe(U,w),le=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+Y);const ee=n.get(le);if(le.version!==ee.__version||ie===!0){t.activeTexture(r.TEXTURE0+Y);const Ne=at.getPrimaries(at.workingColorSpace),ge=w.colorSpace===""?null:at.getPrimaries(w.colorSpace),Ie=w.colorSpace===""||Ne===ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Fe=w.isCompressedTexture||w.image[0].isCompressedTexture,pe=w.image[0]&&w.image[0].isDataTexture,xe=[];for(let re=0;re<6;re++)!Fe&&!pe?xe[re]=x(w.image[re],!0,i.maxCubemapSize):xe[re]=pe?w.image[re].image:w.image[re],xe[re]=Ut(w,xe[re]);const De=xe[0],Le=s.convert(w.format,w.colorSpace),ye=s.convert(w.type),Be=S(w.internalFormat,Le,ye,w.colorSpace),z=w.isVideoTexture!==!0,me=ee.__version===void 0||ie===!0,Z=le.dataReady;let we=L(w,De);Se(r.TEXTURE_CUBE_MAP,w);let de;if(Fe){z&&me&&t.texStorage2D(r.TEXTURE_CUBE_MAP,we,Be,De.width,De.height);for(let re=0;re<6;re++){de=xe[re].mipmaps;for(let Ce=0;Ce<de.length;Ce++){const je=de[Ce];w.format!==1023?Le!==null?z?Z&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce,0,0,je.width,je.height,Le,je.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce,Be,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce,0,0,je.width,je.height,Le,ye,je.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce,Be,je.width,je.height,0,Le,ye,je.data)}}}else{if(de=w.mipmaps,z&&me){de.length>0&&we++;const re=Et(xe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,we,Be,re.width,re.height)}for(let re=0;re<6;re++)if(pe){z?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,xe[re].width,xe[re].height,Le,ye,xe[re].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Be,xe[re].width,xe[re].height,0,Le,ye,xe[re].data);for(let Ce=0;Ce<de.length;Ce++){const mt=de[Ce].image[re].image;z?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce+1,0,0,mt.width,mt.height,Le,ye,mt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce+1,Be,mt.width,mt.height,0,Le,ye,mt.data)}}else{z?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Le,ye,xe[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Be,Le,ye,xe[re]);for(let Ce=0;Ce<de.length;Ce++){const je=de[Ce];z?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce+1,0,0,Le,ye,je.image[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce+1,Be,Le,ye,je.image[re])}}}g(w)&&p(r.TEXTURE_CUBE_MAP),ee.__version=le.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function be(U,w,Y,ie,le,ee){const Ne=s.convert(Y.format,Y.colorSpace),ge=s.convert(Y.type),Ie=S(Y.internalFormat,Ne,ge,Y.colorSpace),Fe=n.get(w),pe=n.get(Y);if(pe.__renderTarget=w,!Fe.__hasExternalTextures){const xe=Math.max(1,w.width>>ee),De=Math.max(1,w.height>>ee);le===r.TEXTURE_3D||le===r.TEXTURE_2D_ARRAY?t.texImage3D(le,ee,Ie,xe,De,w.depth,0,Ne,ge,null):t.texImage2D(le,ee,Ie,xe,De,0,Ne,ge,null)}t.bindFramebuffer(r.FRAMEBUFFER,U),Re(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,le,pe.__webglTexture,0,vt(w)):(le===r.TEXTURE_2D||le>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ie,le,pe.__webglTexture,ee),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ge(U,w,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,U),w.depthBuffer){const ie=w.depthTexture,le=ie&&ie.isDepthTexture?ie.type:null,ee=E(w.stencilBuffer,le),Ne=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=vt(w);Re(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ge,ee,w.width,w.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,ee,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,ee,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ne,r.RENDERBUFFER,U)}else{const ie=w.textures;for(let le=0;le<ie.length;le++){const ee=ie[le],Ne=s.convert(ee.format,ee.colorSpace),ge=s.convert(ee.type),Ie=S(ee.internalFormat,Ne,ge,ee.colorSpace),Fe=vt(w);Y&&Re(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Fe,Ie,w.width,w.height):Re(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Fe,Ie,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Ie,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ue(U,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=n.get(w.depthTexture);ie.__renderTarget=w,(!ie.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),$(w.depthTexture,0);const le=ie.__webglTexture,ee=vt(w);if(w.depthTexture.format===1026)Re(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,le,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,le,0);else if(w.depthTexture.format===1027)Re(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,le,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function tt(U){const w=n.get(U),Y=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const ie=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ie){const le=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ie.removeEventListener("dispose",le)};ie.addEventListener("dispose",le),w.__depthDisposeCallback=le}w.__boundDepthTexture=ie}if(U.depthTexture&&!w.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");const ie=U.texture.mipmaps;ie&&ie.length>0?Ue(w.__webglFramebuffer[0],U):Ue(w.__webglFramebuffer,U)}else if(Y){w.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[ie]),w.__webglDepthbuffer[ie]===void 0)w.__webglDepthbuffer[ie]=r.createRenderbuffer(),Ge(w.__webglDepthbuffer[ie],U,!1);else{const le=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=w.__webglDepthbuffer[ie];r.bindRenderbuffer(r.RENDERBUFFER,ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,ee)}}else{const ie=U.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),Ge(w.__webglDepthbuffer,U,!1);else{const le=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,ee)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(U,w,Y){const ie=n.get(U);w!==void 0&&be(ie.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&tt(U)}function O(U){const w=U.texture,Y=n.get(U),ie=n.get(w);U.addEventListener("dispose",C);const le=U.textures,ee=U.isWebGLCubeRenderTarget===!0,Ne=le.length>1;if(Ne||(ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture()),ie.__version=w.version,a.memory.textures++),ee){Y.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[ge]=[];for(let Ie=0;Ie<w.mipmaps.length;Ie++)Y.__webglFramebuffer[ge][Ie]=r.createFramebuffer()}else Y.__webglFramebuffer[ge]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ge=0;ge<w.mipmaps.length;ge++)Y.__webglFramebuffer[ge]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Ne)for(let ge=0,Ie=le.length;ge<Ie;ge++){const Fe=n.get(le[ge]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=r.createTexture(),a.memory.textures++)}if(U.samples>0&&Re(U)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ge=0;ge<le.length;ge++){const Ie=le[ge];Y.__webglColorRenderbuffer[ge]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[ge]);const Fe=s.convert(Ie.format,Ie.colorSpace),pe=s.convert(Ie.type),xe=S(Ie.internalFormat,Fe,pe,Ie.colorSpace,U.isXRRenderTarget===!0),De=vt(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,De,xe,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,Y.__webglColorRenderbuffer[ge])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),Ge(Y.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ee){t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture),Se(r.TEXTURE_CUBE_MAP,w);for(let ge=0;ge<6;ge++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ie=0;Ie<w.mipmaps.length;Ie++)be(Y.__webglFramebuffer[ge][Ie],U,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie);else be(Y.__webglFramebuffer[ge],U,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(w)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let ge=0,Ie=le.length;ge<Ie;ge++){const Fe=le[ge],pe=n.get(Fe);let xe=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(xe=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(xe,pe.__webglTexture),Se(xe,Fe),be(Y.__webglFramebuffer,U,Fe,r.COLOR_ATTACHMENT0+ge,xe,0),g(Fe)&&p(xe)}t.unbindTexture()}else{let ge=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ge=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ge,ie.__webglTexture),Se(ge,w),w.mipmaps&&w.mipmaps.length>0)for(let Ie=0;Ie<w.mipmaps.length;Ie++)be(Y.__webglFramebuffer[Ie],U,w,r.COLOR_ATTACHMENT0,ge,Ie);else be(Y.__webglFramebuffer,U,w,r.COLOR_ATTACHMENT0,ge,0);g(w)&&p(ge),t.unbindTexture()}U.depthBuffer&&tt(U)}function _t(U){const w=U.textures;for(let Y=0,ie=w.length;Y<ie;Y++){const le=w[Y];if(g(le)){const ee=b(U),Ne=n.get(le).__webglTexture;t.bindTexture(ee,Ne),p(ee),t.unbindTexture()}}}const Ke=[],Ve=[];function Pe(U){if(U.samples>0){if(Re(U)===!1){const w=U.textures,Y=U.width,ie=U.height;let le=r.COLOR_BUFFER_BIT;const ee=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=n.get(U),ge=w.length>1;if(ge)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const Ie=U.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(le|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(le|=r.STENCIL_BUFFER_BIT)),ge){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Fe]);const pe=n.get(w[Fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,pe,0)}r.blitFramebuffer(0,0,Y,ie,0,0,Y,ie,le,r.NEAREST),l===!0&&(Ke.length=0,Ve.length=0,Ke.push(r.COLOR_ATTACHMENT0+Fe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ke.push(ee),Ve.push(ee),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ve)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ge)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Fe]);const pe=n.get(w[Fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,pe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const w=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function vt(U){return Math.min(i.maxSamples,U.samples)}function Re(U){const w=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ze(U){const w=a.render.frame;h.get(U)!==w&&(h.set(U,w),U.update())}function Ut(U,w){const Y=U.colorSpace,ie=U.format,le=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Y!==At&&Y!==""&&(at.getTransfer(Y)===ut?(ie!==1023||le!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),w}function Et(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=V,this.setTexture3D=ae,this.setTextureCube=G,this.rebindTextures=Ct,this.setupRenderTarget=O,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Re}function sg(r,e){function t(n,i=""){let s;const a=at.getTransfer(i);if(n===1009)return r.UNSIGNED_BYTE;if(n===1017)return r.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return r.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return r.BYTE;if(n===1011)return r.SHORT;if(n===1012)return r.UNSIGNED_SHORT;if(n===1013)return r.INT;if(n===1014)return r.UNSIGNED_INT;if(n===1015)return r.FLOAT;if(n===1016)return r.HALF_FLOAT;if(n===1021)return r.ALPHA;if(n===1022)return r.RGB;if(n===1023)return r.RGBA;if(n===1026)return r.DEPTH_COMPONENT;if(n===1027)return r.DEPTH_STENCIL;if(n===1028)return r.RED;if(n===1029)return r.RED_INTEGER;if(n===1030)return r.RG;if(n===1031)return r.RG_INTEGER;if(n===1033)return r.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,og=`
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

}`;class lg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Sc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Pt({vertexShader:ag,fragmentShader:og,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new An(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cg extends rr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,v=null;const x=typeof XRWebGLBinding<"u",g=new lg,p={},b=t.getContextAttributes();let S=null,E=null;const L=[],R=[],C=new Me;let F=null;const M=new Zt;M.viewport=new ct;const T=new Zt;T.viewport=new ct;const N=[M,T],k=new yh;let X=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let se=L[J];return se===void 0&&(se=new _a,L[J]=se),se.getTargetRaySpace()},this.getControllerGrip=function(J){let se=L[J];return se===void 0&&(se=new _a,L[J]=se),se.getGripSpace()},this.getHand=function(J){let se=L[J];return se===void 0&&(se=new _a,L[J]=se),se.getHandSpace()};function $(J){const se=R.indexOf(J.inputSource);if(se===-1)return;const be=L[se];be!==void 0&&(be.update(J.inputSource,J.frame,c||a),be.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",ae);for(let J=0;J<L.length;J++){const se=R[J];se!==null&&(R[J]=null,L[J].disconnect(se))}X=null,K=null,g.reset();for(const J in p)delete p[J];e.setRenderTarget(S),m=null,d=null,u=null,i=null,E=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",V),i.addEventListener("inputsourceschange",ae),b.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ge=null,Ue=null;b.depth&&(Ue=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=b.stencil?1027:1026,Ge=b.stencil?1020:1014);const tt={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(tt),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Ht(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new Mc(d.textureWidth,d.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const be={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,be),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Ht(m.framebufferWidth,m.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ae(J){for(let se=0;se<J.removed.length;se++){const be=J.removed[se],Ge=R.indexOf(be);Ge>=0&&(R[Ge]=null,L[Ge].disconnect(be))}for(let se=0;se<J.added.length;se++){const be=J.added[se];let Ge=R.indexOf(be);if(Ge===-1){for(let tt=0;tt<L.length;tt++)if(tt>=R.length){R.push(be),Ge=tt;break}else if(R[tt]===null){R[tt]=be,Ge=tt;break}if(Ge===-1)break}const Ue=L[Ge];Ue&&Ue.connect(be)}}const G=new B,te=new B;function ce(J,se,be){G.setFromMatrixPosition(se.matrixWorld),te.setFromMatrixPosition(be.matrixWorld);const Ge=G.distanceTo(te),Ue=se.projectionMatrix.elements,tt=be.projectionMatrix.elements,Ct=Ue[14]/(Ue[10]-1),O=Ue[14]/(Ue[10]+1),_t=(Ue[9]+1)/Ue[5],Ke=(Ue[9]-1)/Ue[5],Ve=(Ue[8]-1)/Ue[0],Pe=(tt[8]+1)/tt[0],vt=Ct*Ve,Re=Ct*Pe,Ze=Ge/(-Ve+Pe),Ut=Ze*-Ve;if(se.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ut),J.translateZ(Ze),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ue[10]===-1)J.projectionMatrix.copy(se.projectionMatrix),J.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Et=Ct+Ze,U=O+Ze,w=vt-Ut,Y=Re+(Ge-Ut),ie=_t*O/U*Et,le=Ke*O/U*Et;J.projectionMatrix.makePerspective(w,Y,ie,le,Et,U),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function he(J,se){se===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(se.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let se=J.near,be=J.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(be=g.depthFar)),k.near=T.near=M.near=se,k.far=T.far=M.far=be,(X!==k.near||K!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),X=k.near,K=k.far),k.layers.mask=J.layers.mask|6,M.layers.mask=k.layers.mask&3,T.layers.mask=k.layers.mask&5;const Ge=J.parent,Ue=k.cameras;he(k,Ge);for(let tt=0;tt<Ue.length;tt++)he(Ue[tt],Ge);Ue.length===2?ce(k,M,T):k.projectionMatrix.copy(M.projectionMatrix),Se(J,k,Ge)};function Se(J,se,be){be===null?J.matrix.copy(se.matrixWorld):(J.matrix.copy(be.matrixWorld),J.matrix.invert(),J.matrix.multiply(se.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(se.projectionMatrix),J.projectionMatrixInverse.copy(se.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Zi*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(J){return p[J]};let Oe=null;function qe(J,se){if(h=se.getViewerPose(c||a),v=se,h!==null){const be=h.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Ge=!1;be.length!==k.cameras.length&&(k.cameras.length=0,Ge=!0);for(let O=0;O<be.length;O++){const _t=be[O];let Ke=null;if(m!==null)Ke=m.getViewport(_t);else{const Pe=u.getViewSubImage(d,_t);Ke=Pe.viewport,O===0&&(e.setRenderTargetTextures(E,Pe.colorTexture,Pe.depthStencilTexture),e.setRenderTarget(E))}let Ve=N[O];Ve===void 0&&(Ve=new Zt,Ve.layers.enable(O),Ve.viewport=new ct,N[O]=Ve),Ve.matrix.fromArray(_t.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(_t.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),O===0&&(k.matrix.copy(Ve.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ge===!0&&k.cameras.push(Ve)}const Ue=i.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const O=u.getDepthInformation(be[0]);O&&O.isValid&&O.texture&&g.init(O,i.renderState)}if(Ue&&Ue.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let O=0;O<be.length;O++){const _t=be[O].camera;if(_t){let Ke=p[_t];Ke||(Ke=new Sc,p[_t]=Ke);const Ve=u.getCameraImage(_t);Ke.sourceTexture=Ve}}}}for(let be=0;be<L.length;be++){const Ge=R[be],Ue=L[be];Ge!==null&&Ue!==void 0&&Ue.update(Ge,se,c||a)}Oe&&Oe(J,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),v=null}const Ye=new Cc;Ye.setAnimationLoop(qe),this.setAnimationLoop=function(J){Oe=J},this.dispose=function(){}}}const mi=new On,ug=new $e;function hg(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,dc(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,b,S,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&m(g,p,E)):p.isMeshMatcapMaterial?(s(g,p),v(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,b,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===1&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===1&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const b=e.get(p),S=b.envMap,E=b.envMapRotation;S&&(g.envMap.value=S,mi.copy(E),mi.x*=-1,mi.y*=-1,mi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),g.envMapRotation.value.setFromMatrix4(ug.makeRotationFromEuler(mi)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=S*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const b=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dg(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const E=S.program;n.uniformBlockBinding(b,E)}function c(b,S){let E=i[b.id];E===void 0&&(v(b),E=h(b),i[b.id]=E,b.addEventListener("dispose",g));const L=S.program;n.updateUBOMapping(b,L);const R=e.render.frame;s[b.id]!==R&&(d(b),s[b.id]=R)}function h(b){const S=u();b.__bindingPointIndex=S;const E=r.createBuffer(),L=b.__size,R=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,L,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,E),E}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const S=i[b.id],E=b.uniforms,L=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let R=0,C=E.length;R<C;R++){const F=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,T=F.length;M<T;M++){const N=F[M];if(m(N,R,M,L)===!0){const k=N.__offset,X=Array.isArray(N.value)?N.value:[N.value];let K=0;for(let $=0;$<X.length;$++){const V=X[$],ae=x(V);typeof V=="number"||typeof V=="boolean"?(N.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,k+K,N.__data)):V.isMatrix3?(N.__data[0]=V.elements[0],N.__data[1]=V.elements[1],N.__data[2]=V.elements[2],N.__data[3]=0,N.__data[4]=V.elements[3],N.__data[5]=V.elements[4],N.__data[6]=V.elements[5],N.__data[7]=0,N.__data[8]=V.elements[6],N.__data[9]=V.elements[7],N.__data[10]=V.elements[8],N.__data[11]=0):(V.toArray(N.__data,K),K+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(b,S,E,L){const R=b.value,C=S+"_"+E;if(L[C]===void 0)return typeof R=="number"||typeof R=="boolean"?L[C]=R:L[C]=R.clone(),!0;{const F=L[C];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return L[C]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function v(b){const S=b.uniforms;let E=0;const L=16;for(let C=0,F=S.length;C<F;C++){const M=Array.isArray(S[C])?S[C]:[S[C]];for(let T=0,N=M.length;T<N;T++){const k=M[T],X=Array.isArray(k.value)?k.value:[k.value];for(let K=0,$=X.length;K<$;K++){const V=X[K],ae=x(V),G=E%L,te=G%ae.boundary,ce=G+te;E+=te,ce!==0&&L-ce<ae.storage&&(E+=L-ce),k.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=ae.storage}}}const R=E%L;return R>0&&(E+=L-R),b.__size=E,b.__cache={},this}function x(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function g(b){const S=b.target;S.removeEventListener("dispose",g);const E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(const b in i)r.deleteBuffer(i[b]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class fg{constructor(e={}){const{canvas:t=mu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),x=new Int32Array(4);let g=null,p=null;const b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let L=!1;this._outputColorSpace=Mt;let R=0,C=0,F=null,M=-1,T=null;const N=new ct,k=new ct;let X=null;const K=new Ae(0);let $=0,V=t.width,ae=t.height,G=1,te=null,ce=null;const he=new ct(0,0,V,ae),Se=new ct(0,0,V,ae);let Oe=!1;const qe=new ao;let Ye=!1,J=!1;const se=new $e,be=new B,Ge=new ct,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function Ct(){return F===null?G:1}let O=n;function _t(f,y){return t.getContext(f,y)}try{const f={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r180"),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",de,!1),O===null){const y="webgl2";if(O=_t(y,f),O===null)throw _t(y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(f){throw console.error("THREE.WebGLRenderer: "+f.message),f}let Ke,Ve,Pe,vt,Re,Ze,Ut,Et,U,w,Y,ie,le,ee,Ne,ge,Ie,Fe,pe,xe,De,Le,ye,Be;function z(){Ke=new Tp(O),Ke.init(),Le=new sg(O,Ke),Ve=new gp(O,Ke,e,Le),Pe=new ig(O,Ke),Ve.reversedDepthBuffer&&d&&Pe.buffers.depth.setReversed(!0),vt=new wp(O),Re=new Wm,Ze=new rg(O,Ke,Pe,Re,Ve,Le,vt),Ut=new vp(E),Et=new Sp(E),U=new Dh(O),ye=new pp(O,U),w=new Ep(O,U,vt,ye),Y=new Rp(O,w,U,vt),pe=new Ap(O,Ve,Ze),ge=new _p(Re),ie=new Vm(E,Ut,Et,Ke,Ve,ye,ge),le=new hg(E,Re),ee=new qm,Ne=new Jm(Ke),Fe=new fp(E,Ut,Et,Pe,Y,m,l),Ie=new tg(E,Y,Ve),Be=new dg(O,vt,Ve,Pe),xe=new mp(O,Ke,vt),De=new bp(O,Ke,vt),vt.programs=ie.programs,E.capabilities=Ve,E.extensions=Ke,E.properties=Re,E.renderLists=ee,E.shadowMap=Ie,E.state=Pe,E.info=vt}z();const me=new cg(E,O);this.xr=me,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const f=Ke.get("WEBGL_lose_context");f&&f.loseContext()},this.forceContextRestore=function(){const f=Ke.get("WEBGL_lose_context");f&&f.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(f){f!==void 0&&(G=f,this.setSize(V,ae,!1))},this.getSize=function(f){return f.set(V,ae)},this.setSize=function(f,y,A=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=f,ae=y,t.width=Math.floor(f*G),t.height=Math.floor(y*G),A===!0&&(t.style.width=f+"px",t.style.height=y+"px"),this.setViewport(0,0,f,y)},this.getDrawingBufferSize=function(f){return f.set(V*G,ae*G).floor()},this.setDrawingBufferSize=function(f,y,A){V=f,ae=y,G=A,t.width=Math.floor(f*A),t.height=Math.floor(y*A),this.setViewport(0,0,f,y)},this.getCurrentViewport=function(f){return f.copy(N)},this.getViewport=function(f){return f.copy(he)},this.setViewport=function(f,y,A,D){f.isVector4?he.set(f.x,f.y,f.z,f.w):he.set(f,y,A,D),Pe.viewport(N.copy(he).multiplyScalar(G).round())},this.getScissor=function(f){return f.copy(Se)},this.setScissor=function(f,y,A,D){f.isVector4?Se.set(f.x,f.y,f.z,f.w):Se.set(f,y,A,D),Pe.scissor(k.copy(Se).multiplyScalar(G).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(f){Pe.setScissorTest(Oe=f)},this.setOpaqueSort=function(f){te=f},this.setTransparentSort=function(f){ce=f},this.getClearColor=function(f){return f.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(f=!0,y=!0,A=!0){let D=0;if(f){let I=!1;if(F!==null){const P=F.texture.format;I=P===1033||P===1031||P===1029}if(I){const P=F.texture.type,q=P===1009||P===1014||P===1012||P===1020||P===1017||P===1018,W=Fe.getClearColor(),H=Fe.getClearAlpha(),j=W.r,ne=W.g,Q=W.b;q?(v[0]=j,v[1]=ne,v[2]=Q,v[3]=H,O.clearBufferuiv(O.COLOR,0,v)):(x[0]=j,x[1]=ne,x[2]=Q,x[3]=H,O.clearBufferiv(O.COLOR,0,x))}else D|=O.COLOR_BUFFER_BIT}y&&(D|=O.DEPTH_BUFFER_BIT),A&&(D|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Fe.dispose(),ee.dispose(),Ne.dispose(),Re.dispose(),Ut.dispose(),Et.dispose(),Y.dispose(),ye.dispose(),Be.dispose(),ie.dispose(),me.dispose(),me.removeEventListener("sessionstart",on),me.removeEventListener("sessionend",Vr),Bn.stop()};function Z(f){f.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const f=vt.autoReset,y=Ie.enabled,A=Ie.autoUpdate,D=Ie.needsUpdate,I=Ie.type;z(),vt.autoReset=f,Ie.enabled=y,Ie.autoUpdate=A,Ie.needsUpdate=D,Ie.type=I}function de(f){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",f.statusMessage)}function re(f){const y=f.target;y.removeEventListener("dispose",re),Ce(y)}function Ce(f){je(f),Re.remove(f)}function je(f){const y=Re.get(f).programs;y!==void 0&&(y.forEach(function(A){ie.releaseProgram(A)}),f.isShaderMaterial&&ie.releaseShaderCache(f))}this.renderBufferDirect=function(f,y,A,D,I,P){y===null&&(y=Ue);const q=I.isMesh&&I.matrixWorld.determinant()<0,W=jr(f,y,A,D,I);Pe.setMaterial(D,q);let H=A.index,j=1;if(D.wireframe===!0){if(H=w.getWireframeAttribute(A),H===void 0)return;j=2}const ne=A.drawRange,Q=A.attributes.position;let oe=ne.start*j,_e=(ne.start+ne.count)*j;P!==null&&(oe=Math.max(oe,P.start*j),_e=Math.min(_e,(P.start+P.count)*j)),H!==null?(oe=Math.max(oe,0),_e=Math.min(_e,H.count)):Q!=null&&(oe=Math.max(oe,0),_e=Math.min(_e,Q.count));const ue=_e-oe;if(ue<0||ue===1/0)return;ye.setup(I,D,W,A,H);let fe,Te=xe;if(H!==null&&(fe=U.get(H),Te=De,Te.setIndex(fe)),I.isMesh)D.wireframe===!0?(Pe.setLineWidth(D.wireframeLinewidth*Ct()),Te.setMode(O.LINES)):Te.setMode(O.TRIANGLES);else if(I.isLine){let ve=D.linewidth;ve===void 0&&(ve=1),Pe.setLineWidth(ve*Ct()),I.isLineSegments?Te.setMode(O.LINES):I.isLineLoop?Te.setMode(O.LINE_LOOP):Te.setMode(O.LINE_STRIP)}else I.isPoints?Te.setMode(O.POINTS):I.isSprite&&Te.setMode(O.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Dr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Te.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))Te.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const ve=I._multiDrawStarts,ze=I._multiDrawCounts,ke=I._multiDrawCount,Je=H?U.get(H).bytesPerElement:1,He=Re.get(D).currentProgram.getUniforms();for(let rt=0;rt<ke;rt++)He.setValue(O,"_gl_DrawID",rt),Te.render(ve[rt]/Je,ze[rt])}else if(I.isInstancedMesh)Te.renderInstances(oe,ue,I.count);else if(A.isInstancedBufferGeometry){const ve=A._maxInstanceCount!==void 0?A._maxInstanceCount:1/0,ze=Math.min(A.instanceCount,ve);Te.renderInstances(oe,ue,ze)}else Te.render(oe,ue)};function mt(f,y,A){f.transparent===!0&&f.side===2&&f.forceSinglePass===!1?(f.side=1,f.needsUpdate=!0,Ei(f,y,A),f.side=0,f.needsUpdate=!0,Ei(f,y,A),f.side=2):Ei(f,y,A)}this.compile=function(f,y,A=null){A===null&&(A=f),p=Ne.get(A),p.init(y),S.push(p),A.traverseVisible(function(I){I.isLight&&I.layers.test(y.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),f!==A&&f.traverseVisible(function(I){I.isLight&&I.layers.test(y.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const D=new Set;return f.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const P=I.material;if(P)if(Array.isArray(P))for(let q=0;q<P.length;q++){const W=P[q];mt(W,A,I),D.add(W)}else mt(P,A,I),D.add(P)}),p=S.pop(),D},this.compileAsync=function(f,y,A=null){const D=this.compile(f,y,A);return new Promise(I=>{function P(){if(D.forEach(function(q){Re.get(q).currentProgram.isReady()&&D.delete(q)}),D.size===0){I(f);return}setTimeout(P,10)}Ke.get("KHR_parallel_shader_compile")!==null?P():setTimeout(P,10)})};let ot=null;function mn(f){ot&&ot(f)}function on(){Bn.stop()}function Vr(){Bn.start()}const Bn=new Cc;Bn.setAnimationLoop(mn),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(f){ot=f,me.setAnimationLoop(f),f===null?Bn.stop():Bn.start()},me.addEventListener("sessionstart",on),me.addEventListener("sessionend",Vr),this.render=function(f,y){if(y!==void 0&&y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(y),y=me.getCamera()),f.isScene===!0&&f.onBeforeRender(E,f,y,F),p=Ne.get(f,S.length),p.init(y),S.push(p),se.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),qe.setFromProjectionMatrix(se,2e3,y.reversedDepth),J=this.localClippingEnabled,Ye=ge.init(this.clippingPlanes,J),g=ee.get(f,b.length),g.init(),b.push(g),me.enabled===!0&&me.isPresenting===!0){const P=E.xr.getDepthSensingMesh();P!==null&&ur(P,y,-1/0,E.sortObjects)}ur(f,y,0,E.sortObjects),g.finish(),E.sortObjects===!0&&g.sort(te,ce),tt=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,tt&&Fe.addToRenderList(g,f),this.info.render.frame++,Ye===!0&&ge.beginShadows();const A=p.state.shadowsArray;Ie.render(A,f,y),Ye===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const D=g.opaque,I=g.transmissive;if(p.setupLights(),y.isArrayCamera){const P=y.cameras;if(I.length>0)for(let q=0,W=P.length;q<W;q++){const H=P[q];Xr(D,I,f,H)}tt&&Fe.render(f);for(let q=0,W=P.length;q<W;q++){const H=P[q];Wr(g,f,H,H.viewport)}}else I.length>0&&Xr(D,I,f,y),tt&&Fe.render(f),Wr(g,f,y);F!==null&&C===0&&(Ze.updateMultisampleRenderTarget(F),Ze.updateRenderTargetMipmap(F)),f.isScene===!0&&f.onAfterRender(E,f,y),ye.resetDefaultState(),M=-1,T=null,S.pop(),S.length>0?(p=S[S.length-1],Ye===!0&&ge.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function ur(f,y,A,D){if(f.visible===!1)return;if(f.layers.test(y.layers)){if(f.isGroup)A=f.renderOrder;else if(f.isLOD)f.autoUpdate===!0&&f.update(y);else if(f.isLight)p.pushLight(f),f.castShadow&&p.pushShadow(f);else if(f.isSprite){if(!f.frustumCulled||qe.intersectsSprite(f)){D&&Ge.setFromMatrixPosition(f.matrixWorld).applyMatrix4(se);const q=Y.update(f),W=f.material;W.visible&&g.push(f,q,W,A,Ge.z,null)}}else if((f.isMesh||f.isLine||f.isPoints)&&(!f.frustumCulled||qe.intersectsObject(f))){const q=Y.update(f),W=f.material;if(D&&(f.boundingSphere!==void 0?(f.boundingSphere===null&&f.computeBoundingSphere(),Ge.copy(f.boundingSphere.center)):(q.boundingSphere===null&&q.computeBoundingSphere(),Ge.copy(q.boundingSphere.center)),Ge.applyMatrix4(f.matrixWorld).applyMatrix4(se)),Array.isArray(W)){const H=q.groups;for(let j=0,ne=H.length;j<ne;j++){const Q=H[j],oe=W[Q.materialIndex];oe&&oe.visible&&g.push(f,q,oe,A,Ge.z,Q)}}else W.visible&&g.push(f,q,W,A,Ge.z,null)}}const P=f.children;for(let q=0,W=P.length;q<W;q++)ur(P[q],y,A,D)}function Wr(f,y,A,D){const I=f.opaque,P=f.transmissive,q=f.transparent;p.setupLightsView(A),Ye===!0&&ge.setGlobalState(E.clippingPlanes,A),D&&Pe.viewport(N.copy(D)),I.length>0&&ci(I,y,A),P.length>0&&ci(P,y,A),q.length>0&&ci(q,y,A),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Xr(f,y,A,D){if((A.isScene===!0?A.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[D.id]===void 0&&(p.state.transmissionRenderTarget[D.id]=new Ht(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const P=p.state.transmissionRenderTarget[D.id],q=D.viewport||N;P.setSize(q.z*E.transmissionResolutionScale,q.w*E.transmissionResolutionScale);const W=E.getRenderTarget(),H=E.getActiveCubeFace(),j=E.getActiveMipmapLevel();E.setRenderTarget(P),E.getClearColor(K),$=E.getClearAlpha(),$<1&&E.setClearColor(16777215,.5),E.clear(),tt&&Fe.render(A);const ne=E.toneMapping;E.toneMapping=0;const Q=D.viewport;if(D.viewport!==void 0&&(D.viewport=void 0),p.setupLightsView(D),Ye===!0&&ge.setGlobalState(E.clippingPlanes,D),ci(f,A,D),Ze.updateMultisampleRenderTarget(P),Ze.updateRenderTargetMipmap(P),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let _e=0,ue=y.length;_e<ue;_e++){const fe=y[_e],Te=fe.object,ve=fe.geometry,ze=fe.material,ke=fe.group;if(ze.side===2&&Te.layers.test(D.layers)){const Je=ze.side;ze.side=1,ze.needsUpdate=!0,qr(Te,A,D,ve,ze,ke),ze.side=Je,ze.needsUpdate=!0,oe=!0}}oe===!0&&(Ze.updateMultisampleRenderTarget(P),Ze.updateRenderTargetMipmap(P))}E.setRenderTarget(W,H,j),E.setClearColor(K,$),Q!==void 0&&(D.viewport=Q),E.toneMapping=ne}function ci(f,y,A){const D=y.isScene===!0?y.overrideMaterial:null;for(let I=0,P=f.length;I<P;I++){const q=f[I],W=q.object,H=q.geometry,j=q.group;let ne=q.material;ne.allowOverride===!0&&D!==null&&(ne=D),W.layers.test(A.layers)&&qr(W,y,A,H,ne,j)}}function qr(f,y,A,D,I,P){f.onBeforeRender(E,y,A,D,I,P),f.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,f.matrixWorld),f.normalMatrix.getNormalMatrix(f.modelViewMatrix),I.onBeforeRender(E,y,A,D,f,P),I.transparent===!0&&I.side===2&&I.forceSinglePass===!1?(I.side=1,I.needsUpdate=!0,E.renderBufferDirect(A,y,D,I,f,P),I.side=0,I.needsUpdate=!0,E.renderBufferDirect(A,y,D,I,f,P),I.side=2):E.renderBufferDirect(A,y,D,I,f,P),f.onAfterRender(E,y,A,D,I,P)}function Ei(f,y,A){y.isScene!==!0&&(y=Ue);const D=Re.get(f),I=p.state.lights,P=p.state.shadowsArray,q=I.state.version,W=ie.getParameters(f,I.state,P,y,A),H=ie.getProgramCacheKey(W);let j=D.programs;D.environment=f.isMeshStandardMaterial?y.environment:null,D.fog=y.fog,D.envMap=(f.isMeshStandardMaterial?Et:Ut).get(f.envMap||D.environment),D.envMapRotation=D.environment!==null&&f.envMap===null?y.environmentRotation:f.envMapRotation,j===void 0&&(f.addEventListener("dispose",re),j=new Map,D.programs=j);let ne=j.get(H);if(ne!==void 0){if(D.currentProgram===ne&&D.lightsStateVersion===q)return Kr(f,W),ne}else W.uniforms=ie.getUniforms(f),f.onBeforeCompile(W,E),ne=ie.acquireProgram(W,H),j.set(H,ne),D.uniforms=W.uniforms;const Q=D.uniforms;return(!f.isShaderMaterial&&!f.isRawShaderMaterial||f.clipping===!0)&&(Q.clippingPlanes=ge.uniform),Kr(f,W),D.needsLights=Zs(f),D.lightsStateVersion=q,D.needsLights&&(Q.ambientLightColor.value=I.state.ambient,Q.lightProbe.value=I.state.probe,Q.directionalLights.value=I.state.directional,Q.directionalLightShadows.value=I.state.directionalShadow,Q.spotLights.value=I.state.spot,Q.spotLightShadows.value=I.state.spotShadow,Q.rectAreaLights.value=I.state.rectArea,Q.ltc_1.value=I.state.rectAreaLTC1,Q.ltc_2.value=I.state.rectAreaLTC2,Q.pointLights.value=I.state.point,Q.pointLightShadows.value=I.state.pointShadow,Q.hemisphereLights.value=I.state.hemi,Q.directionalShadowMap.value=I.state.directionalShadowMap,Q.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Q.spotShadowMap.value=I.state.spotShadowMap,Q.spotLightMatrix.value=I.state.spotLightMatrix,Q.spotLightMap.value=I.state.spotLightMap,Q.pointShadowMap.value=I.state.pointShadowMap,Q.pointShadowMatrix.value=I.state.pointShadowMatrix),D.currentProgram=ne,D.uniformsList=null,ne}function Yr(f){if(f.uniformsList===null){const y=f.currentProgram.getUniforms();f.uniformsList=Ps.seqWithValue(y.seq,f.uniforms)}return f.uniformsList}function Kr(f,y){const A=Re.get(f);A.outputColorSpace=y.outputColorSpace,A.batching=y.batching,A.batchingColor=y.batchingColor,A.instancing=y.instancing,A.instancingColor=y.instancingColor,A.instancingMorph=y.instancingMorph,A.skinning=y.skinning,A.morphTargets=y.morphTargets,A.morphNormals=y.morphNormals,A.morphColors=y.morphColors,A.morphTargetsCount=y.morphTargetsCount,A.numClippingPlanes=y.numClippingPlanes,A.numIntersection=y.numClipIntersection,A.vertexAlphas=y.vertexAlphas,A.vertexTangents=y.vertexTangents,A.toneMapping=y.toneMapping}function jr(f,y,A,D,I){y.isScene!==!0&&(y=Ue),Ze.resetTextureUnits();const P=y.fog,q=D.isMeshStandardMaterial?y.environment:null,W=F===null?E.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:At,H=(D.isMeshStandardMaterial?Et:Ut).get(D.envMap||q),j=D.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,ne=!!A.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),Q=!!A.morphAttributes.position,oe=!!A.morphAttributes.normal,_e=!!A.morphAttributes.color;let ue=0;D.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ue=E.toneMapping);const fe=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,Te=fe!==void 0?fe.length:0,ve=Re.get(D),ze=p.state.lights;if(Ye===!0&&(J===!0||f!==T)){const yt=f===T&&D.id===M;ge.setState(D,f,yt)}let ke=!1;D.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==ze.state.version||ve.outputColorSpace!==W||I.isBatchedMesh&&ve.batching===!1||!I.isBatchedMesh&&ve.batching===!0||I.isBatchedMesh&&ve.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&ve.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&ve.instancing===!1||!I.isInstancedMesh&&ve.instancing===!0||I.isSkinnedMesh&&ve.skinning===!1||!I.isSkinnedMesh&&ve.skinning===!0||I.isInstancedMesh&&ve.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&ve.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&ve.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&ve.instancingMorph===!1&&I.morphTexture!==null||ve.envMap!==H||D.fog===!0&&ve.fog!==P||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==ge.numPlanes||ve.numIntersection!==ge.numIntersection)||ve.vertexAlphas!==j||ve.vertexTangents!==ne||ve.morphTargets!==Q||ve.morphNormals!==oe||ve.morphColors!==_e||ve.toneMapping!==ue||ve.morphTargetsCount!==Te)&&(ke=!0):(ke=!0,ve.__version=D.version);let Je=ve.currentProgram;ke===!0&&(Je=Ei(D,y,I));let He=!1,rt=!1,bt=!1;const We=Je.getUniforms(),Xe=ve.uniforms;if(Pe.useProgram(Je.program)&&(He=!0,rt=!0,bt=!0),D.id!==M&&(M=D.id,rt=!0),He||T!==f){Pe.buffers.depth.getReversed()&&f.reversedDepth!==!0&&(f._reversedDepth=!0,f.updateProjectionMatrix()),We.setValue(O,"projectionMatrix",f.projectionMatrix),We.setValue(O,"viewMatrix",f.matrixWorldInverse);const Nt=We.map.cameraPosition;Nt!==void 0&&Nt.setValue(O,be.setFromMatrixPosition(f.matrixWorld)),Ve.logarithmicDepthBuffer&&We.setValue(O,"logDepthBufFC",2/(Math.log(f.far+1)/Math.LN2)),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&We.setValue(O,"isOrthographic",f.isOrthographicCamera===!0),T!==f&&(T=f,rt=!0,bt=!0)}if(I.isSkinnedMesh){We.setOptional(O,I,"bindMatrix"),We.setOptional(O,I,"bindMatrixInverse");const yt=I.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),We.setValue(O,"boneTexture",yt.boneTexture,Ze))}I.isBatchedMesh&&(We.setOptional(O,I,"batchingTexture"),We.setValue(O,"batchingTexture",I._matricesTexture,Ze),We.setOptional(O,I,"batchingIdTexture"),We.setValue(O,"batchingIdTexture",I._indirectTexture,Ze),We.setOptional(O,I,"batchingColorTexture"),I._colorsTexture!==null&&We.setValue(O,"batchingColorTexture",I._colorsTexture,Ze));const nt=A.morphAttributes;if((nt.position!==void 0||nt.normal!==void 0||nt.color!==void 0)&&pe.update(I,A,Je),(rt||ve.receiveShadow!==I.receiveShadow)&&(ve.receiveShadow=I.receiveShadow,We.setValue(O,"receiveShadow",I.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(Xe.envMap.value=H,Xe.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1),D.isMeshStandardMaterial&&D.envMap===null&&y.environment!==null&&(Xe.envMapIntensity.value=y.environmentIntensity),rt&&(We.setValue(O,"toneMappingExposure",E.toneMappingExposure),ve.needsLights&&Zr(Xe,bt),P&&D.fog===!0&&le.refreshFogUniforms(Xe,P),le.refreshMaterialUniforms(Xe,D,G,ae,p.state.transmissionRenderTarget[f.id]),Ps.upload(O,Yr(ve),Xe,Ze)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Ps.upload(O,Yr(ve),Xe,Ze),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&We.setValue(O,"center",I.center),We.setValue(O,"modelViewMatrix",I.modelViewMatrix),We.setValue(O,"normalMatrix",I.normalMatrix),We.setValue(O,"modelMatrix",I.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const yt=D.uniformsGroups;for(let Nt=0,Jt=yt.length;Nt<Jt;Nt++){const ln=yt[Nt];Be.update(ln,Je),Be.bind(ln,Je)}}return Je}function Zr(f,y){f.ambientLightColor.needsUpdate=y,f.lightProbe.needsUpdate=y,f.directionalLights.needsUpdate=y,f.directionalLightShadows.needsUpdate=y,f.pointLights.needsUpdate=y,f.pointLightShadows.needsUpdate=y,f.spotLights.needsUpdate=y,f.spotLightShadows.needsUpdate=y,f.rectAreaLights.needsUpdate=y,f.hemisphereLights.needsUpdate=y}function Zs(f){return f.isMeshLambertMaterial||f.isMeshToonMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isShadowMaterial||f.isShaderMaterial&&f.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(f,y,A){const D=Re.get(f);D.__autoAllocateDepthBuffer=f.resolveDepthBuffer===!1,D.__autoAllocateDepthBuffer===!1&&(D.__useRenderToTexture=!1),Re.get(f.texture).__webglTexture=y,Re.get(f.depthTexture).__webglTexture=D.__autoAllocateDepthBuffer?void 0:A,D.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(f,y){const A=Re.get(f);A.__webglFramebuffer=y,A.__useDefaultFramebuffer=y===void 0};const kn=O.createFramebuffer();this.setRenderTarget=function(f,y=0,A=0){F=f,R=y,C=A;let D=!0,I=null,P=!1,q=!1;if(f){const H=Re.get(f);if(H.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(O.FRAMEBUFFER,null),D=!1;else if(H.__webglFramebuffer===void 0)Ze.setupRenderTarget(f);else if(H.__hasExternalTextures)Ze.rebindTextures(f,Re.get(f.texture).__webglTexture,Re.get(f.depthTexture).__webglTexture);else if(f.depthBuffer){const Q=f.depthTexture;if(H.__boundDepthTexture!==Q){if(Q!==null&&Re.has(Q)&&(f.width!==Q.image.width||f.height!==Q.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ze.setupDepthRenderbuffer(f)}}const j=f.texture;(j.isData3DTexture||j.isDataArrayTexture||j.isCompressedArrayTexture)&&(q=!0);const ne=Re.get(f).__webglFramebuffer;f.isWebGLCubeRenderTarget?(Array.isArray(ne[y])?I=ne[y][A]:I=ne[y],P=!0):f.samples>0&&Ze.useMultisampledRTT(f)===!1?I=Re.get(f).__webglMultisampledFramebuffer:Array.isArray(ne)?I=ne[A]:I=ne,N.copy(f.viewport),k.copy(f.scissor),X=f.scissorTest}else N.copy(he).multiplyScalar(G).floor(),k.copy(Se).multiplyScalar(G).floor(),X=Oe;if(A!==0&&(I=kn),Pe.bindFramebuffer(O.FRAMEBUFFER,I)&&D&&Pe.drawBuffers(f,I),Pe.viewport(N),Pe.scissor(k),Pe.setScissorTest(X),P){const H=Re.get(f.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+y,H.__webglTexture,A)}else if(q){const H=y;for(let j=0;j<f.textures.length;j++){const ne=Re.get(f.textures[j]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+j,ne.__webglTexture,A,H)}}else if(f!==null&&A!==0){const H=Re.get(f.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,H.__webglTexture,A)}M=-1},this.readRenderTargetPixels=function(f,y,A,D,I,P,q,W=0){if(!(f&&f.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let H=Re.get(f).__webglFramebuffer;if(f.isWebGLCubeRenderTarget&&q!==void 0&&(H=H[q]),H){Pe.bindFramebuffer(O.FRAMEBUFFER,H);try{const j=f.textures[W],ne=j.format,Q=j.type;if(!Ve.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Q)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}y>=0&&y<=f.width-D&&A>=0&&A<=f.height-I&&(f.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+W),O.readPixels(y,A,D,I,Le.convert(ne),Le.convert(Q),P))}finally{const j=F!==null?Re.get(F).__webglFramebuffer:null;Pe.bindFramebuffer(O.FRAMEBUFFER,j)}}},this.readRenderTargetPixelsAsync=async function(f,y,A,D,I,P,q,W=0){if(!(f&&f.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let H=Re.get(f).__webglFramebuffer;if(f.isWebGLCubeRenderTarget&&q!==void 0&&(H=H[q]),H)if(y>=0&&y<=f.width-D&&A>=0&&A<=f.height-I){Pe.bindFramebuffer(O.FRAMEBUFFER,H);const j=f.textures[W],ne=j.format,Q=j.type;if(!Ve.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Q))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const oe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,oe),O.bufferData(O.PIXEL_PACK_BUFFER,P.byteLength,O.STREAM_READ),f.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+W),O.readPixels(y,A,D,I,Le.convert(ne),Le.convert(Q),0);const _e=F!==null?Re.get(F).__webglFramebuffer:null;Pe.bindFramebuffer(O.FRAMEBUFFER,_e);const ue=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await gu(O,ue,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,oe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,P),O.deleteBuffer(oe),O.deleteSync(ue),P}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(f,y=null,A=0){const D=Math.pow(2,-A),I=Math.floor(f.image.width*D),P=Math.floor(f.image.height*D),q=y!==null?y.x:0,W=y!==null?y.y:0;Ze.setTexture2D(f,0),O.copyTexSubImage2D(O.TEXTURE_2D,A,0,0,q,W,I,P),Pe.unbindTexture()};const In=O.createFramebuffer(),_=O.createFramebuffer();this.copyTextureToTexture=function(f,y,A=null,D=null,I=0,P=null){P===null&&(I!==0?(Dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),P=I,I=0):P=0);let q,W,H,j,ne,Q,oe,_e,ue;const fe=f.isCompressedTexture?f.mipmaps[P]:f.image;if(A!==null)q=A.max.x-A.min.x,W=A.max.y-A.min.y,H=A.isBox3?A.max.z-A.min.z:1,j=A.min.x,ne=A.min.y,Q=A.isBox3?A.min.z:0;else{const nt=Math.pow(2,-I);q=Math.floor(fe.width*nt),W=Math.floor(fe.height*nt),f.isDataArrayTexture?H=fe.depth:f.isData3DTexture?H=Math.floor(fe.depth*nt):H=1,j=0,ne=0,Q=0}D!==null?(oe=D.x,_e=D.y,ue=D.z):(oe=0,_e=0,ue=0);const Te=Le.convert(y.format),ve=Le.convert(y.type);let ze;y.isData3DTexture?(Ze.setTexture3D(y,0),ze=O.TEXTURE_3D):y.isDataArrayTexture||y.isCompressedArrayTexture?(Ze.setTexture2DArray(y,0),ze=O.TEXTURE_2D_ARRAY):(Ze.setTexture2D(y,0),ze=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,y.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,y.unpackAlignment);const ke=O.getParameter(O.UNPACK_ROW_LENGTH),Je=O.getParameter(O.UNPACK_IMAGE_HEIGHT),He=O.getParameter(O.UNPACK_SKIP_PIXELS),rt=O.getParameter(O.UNPACK_SKIP_ROWS),bt=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,fe.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,fe.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,j),O.pixelStorei(O.UNPACK_SKIP_ROWS,ne),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Q);const We=f.isDataArrayTexture||f.isData3DTexture,Xe=y.isDataArrayTexture||y.isData3DTexture;if(f.isDepthTexture){const nt=Re.get(f),yt=Re.get(y),Nt=Re.get(nt.__renderTarget),Jt=Re.get(yt.__renderTarget);Pe.bindFramebuffer(O.READ_FRAMEBUFFER,Nt.__webglFramebuffer),Pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer);for(let ln=0;ln<H;ln++)We&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.get(f).__webglTexture,I,Q+ln),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.get(y).__webglTexture,P,ue+ln)),O.blitFramebuffer(j,ne,q,W,oe,_e,q,W,O.DEPTH_BUFFER_BIT,O.NEAREST);Pe.bindFramebuffer(O.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(I!==0||f.isRenderTargetTexture||Re.has(f)){const nt=Re.get(f),yt=Re.get(y);Pe.bindFramebuffer(O.READ_FRAMEBUFFER,In),Pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,_);for(let Nt=0;Nt<H;Nt++)We?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,nt.__webglTexture,I,Q+Nt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,nt.__webglTexture,I),Xe?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,yt.__webglTexture,P,ue+Nt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,yt.__webglTexture,P),I!==0?O.blitFramebuffer(j,ne,q,W,oe,_e,q,W,O.COLOR_BUFFER_BIT,O.NEAREST):Xe?O.copyTexSubImage3D(ze,P,oe,_e,ue+Nt,j,ne,q,W):O.copyTexSubImage2D(ze,P,oe,_e,j,ne,q,W);Pe.bindFramebuffer(O.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Xe?f.isDataTexture||f.isData3DTexture?O.texSubImage3D(ze,P,oe,_e,ue,q,W,H,Te,ve,fe.data):y.isCompressedArrayTexture?O.compressedTexSubImage3D(ze,P,oe,_e,ue,q,W,H,Te,fe.data):O.texSubImage3D(ze,P,oe,_e,ue,q,W,H,Te,ve,fe):f.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,P,oe,_e,q,W,Te,ve,fe.data):f.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,P,oe,_e,fe.width,fe.height,Te,fe.data):O.texSubImage2D(O.TEXTURE_2D,P,oe,_e,q,W,Te,ve,fe);O.pixelStorei(O.UNPACK_ROW_LENGTH,ke),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Je),O.pixelStorei(O.UNPACK_SKIP_PIXELS,He),O.pixelStorei(O.UNPACK_SKIP_ROWS,rt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,bt),P===0&&y.generateMipmaps&&O.generateMipmap(ze),Pe.unbindTexture()},this.initRenderTarget=function(f){Re.get(f).__webglFramebuffer===void 0&&Ze.setupRenderTarget(f)},this.initTexture=function(f){f.isCubeTexture?Ze.setTextureCube(f,0):f.isData3DTexture?Ze.setTexture3D(f,0):f.isDataArrayTexture||f.isCompressedArrayTexture?Ze.setTexture2DArray(f,0):Ze.setTexture2D(f,0),Pe.unbindTexture()},this.resetState=function(){R=0,C=0,F=null,Pe.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}const Ia=new WeakMap;class pg extends oi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new Ur(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Mt,n).catch(n)}decodeDracoFile(e,t,n,i,s=At,a=()=>{}){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Ia.has(e)){const l=Ia.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(s,a).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[s]={resolve:c,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Ia.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new Lt;e.index&&t.setIndex(new Bt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,a=i.array,o=i.itemSize,l=new Bt(a,o);s==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(a instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==Mt)return;const n=new Ae;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),at.colorSpaceToWorking(n,Mt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Ur(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=mg.toString(),a=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const a=s.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function mg(){let r,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":r=o.decoderConfig,e=new Promise(function(h){r.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(r)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const m=t(u,d,new Int8Array(l),c),v=m.attributes.map(x=>x.array.buffer);m.index&&v.push(m.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:m},v)}catch(m){console.error(m),self.postMessage({type:"error",id:o.id,error:m.message})}finally{u.destroy(d)}});break}};function t(a,o,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,m;const v=o.GetEncodedGeometryType(l);if(v===a.TRIANGULAR_MESH)d=new a.Mesh,m=o.DecodeArrayToMesh(l,l.byteLength,d);else if(v===a.POINT_CLOUD)d=new a.PointCloud,m=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!m.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+m.error_msg());const x={index:null,attributes:[]};for(const g in h){const p=self[u[g]];let b,S;if(c.useUniqueIDs)S=h[g],b=o.GetAttributeByUniqueId(d,S);else{if(S=o.GetAttributeId(d,a[h[g]]),S===-1)continue;b=o.GetAttribute(d,S)}const E=i(a,o,d,g,p,b);g==="color"&&(E.vertexColorSpace=c.vertexColorSpace),x.attributes.push(E)}return v===a.TRIANGULAR_MESH&&(x.index=n(a,o,d)),a.destroy(d),x}function n(a,o,l){const h=l.num_faces()*3,u=h*4,d=a._malloc(u);o.GetTrianglesUInt32Array(l,u,d);const m=new Uint32Array(a.HEAPF32.buffer,d,h).slice();return a._free(d),{array:m,itemSize:1}}function i(a,o,l,c,h,u){const d=u.num_components(),v=l.num_points()*d,x=v*h.BYTES_PER_ELEMENT,g=s(a,h),p=a._malloc(x);o.GetAttributeDataArrayForAllPoints(l,u,g,x,p);const b=new h(a.HEAPF32.buffer,p,v).slice();return a._free(p),{name:c,array:b,itemSize:d}}function s(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}function gg(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new Lt;let c=0;for(let h=0;h<r.length;++h){const u=r[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in u.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(u.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in u.morphAttributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(u.morphAttributes[m])}if(e){let m;if(t)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(t){let h=0;const u=[];for(let d=0;d<r.length;++d){const m=r[d].index;for(let v=0;v<m.count;++v)u.push(m.getX(v)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(const h in s){const u=Xl(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const m=[];for(let x=0;x<a[h].length;++x)m.push(a[h][x][d]);const v=Xl(m);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(v)}}return l}function Xl(r){let e,t,n,i=-1,s=0;for(let c=0;c<r.length;++c){const h=r[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const a=new e(s),o=new Bt(a,t,n);let l=0;for(let c=0;c<r.length;++c){const h=r[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,m=h.count;d<m;d++)for(let v=0;v<t;v++){const x=h.getComponent(d,v);o.setComponent(d+u,v,x)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function ql(r,e){if(e===0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===2||e===1){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===2)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class ja extends oi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Mg(t)}),this.register(function(t){return new Sg(t)}),this.register(function(t){return new Dg(t)}),this.register(function(t){return new Ig(t)}),this.register(function(t){return new Lg(t)}),this.register(function(t){return new Eg(t)}),this.register(function(t){return new bg(t)}),this.register(function(t){return new wg(t)}),this.register(function(t){return new Ag(t)}),this.register(function(t){return new yg(t)}),this.register(function(t){return new Rg(t)}),this.register(function(t){return new Tg(t)}),this.register(function(t){return new Pg(t)}),this.register(function(t){return new Cg(t)}),this.register(function(t){return new vg(t)}),this.register(function(t){return new Ug(t)}),this.register(function(t){return new Ng(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=wr.extractUrlBase(e);a=wr.resolveURL(c,this.path)}else a=wr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Ur(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Uc){try{a[st.KHR_BINARY_GLTF]=new Fg(e)}catch(u){i&&i(u);return}s=JSON.parse(a[st.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new jg(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case st.KHR_MATERIALS_UNLIT:a[u]=new xg;break;case st.KHR_DRACO_MESH_COMPRESSION:a[u]=new Og(s,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:a[u]=new Bg;break;case st.KHR_MESH_QUANTIZATION:a[u]=new kg;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function _g(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class vg{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ae(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],At);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ac(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new fo(h),c.distance=u;break;case"spot":c=new Hs(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Un(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class xg{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return fn}extendParams(e,t,n){const i=[];e.color=new Ae(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],At),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Mt))}return Promise.all(i)}}class yg{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Mg{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Me(o,o)}return Promise.all(s)}}class Sg{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Tg{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class Eg{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],At)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Mt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class bg{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class wg{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ae().setRGB(o[0],o[1],o[2],At),Promise.all(s)}}class Ag{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Rg{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ae().setRGB(o[0],o[1],o[2],At),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Mt)),Promise.all(s)}}class Cg{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class Pg{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class Dg{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class Ig{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Lg{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Ug{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(m){return m.buffer}):a.ready.then(function(){const m=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(m),h,u,d,i.mode,i.filter),m})})}else return null}}class Ng{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==un.TRIANGLES&&c.mode!==un.TRIANGLE_STRIP&&c.mode!==un.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,m=[];for(const v of u){const x=new $e,g=new B,p=new ai,b=new B(1,1,1),S=new xc(v.geometry,v.material,d);for(let E=0;E<d;E++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,E),l.SCALE&&b.fromBufferAttribute(l.SCALE,E),S.setMatrixAt(E,x.compose(g,p,b));for(const E in l)if(E==="_COLOR_0"){const L=l[E];S.instanceColor=new Is(L.array,L.itemSize,L.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&v.geometry.setAttribute(E,l[E]);xt.prototype.copy.call(S,v),this.parser.assignFinalMaterial(S),m.push(S)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}}const Uc="glTF",Sr=12,Yl={JSON:1313821514,BIN:5130562};class Fg{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Sr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Uc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Sr,s=new DataView(e,Sr);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Yl.JSON){const c=new Uint8Array(e,Sr+a,o);this.content=n.decode(c)}else if(l===Yl.BIN){const c=Sr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Og{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Za[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Za[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],m=Ki[d.componentType];c[u]=m.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(m){for(const v in m.attributes){const x=m.attributes[v],g=l[v];g!==void 0&&(x.normalized=g)}u(m)},o,c,At,d)})})}}class Bg{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class kg{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class Nc extends zr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,m=d*u,v=e*c,x=v-c,g=-2*m+3*d,p=m-d,b=1-g,S=p-d+u;for(let E=0;E!==o;E++){const L=a[x+E+o],R=a[x+E+l]*h,C=a[v+E+o],F=a[v+E]*h;s[E]=b*L+S*R+g*C+p*F}return s}}const zg=new ai;class Gg extends Nc{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return zg.fromArray(s).normalize().toArray(s),s}}const un={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ki={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Kl={9728:1003,9729:1006,9984:1004,9985:1007,9986:1005,9987:1008},jl={33071:1001,33648:1002,10497:1e3},La={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Za={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ni={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Hg={CUBICSPLINE:void 0,LINEAR:2301,STEP:2300},Ua={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Vg(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new sn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),r.DefaultMaterial}function gi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Un(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Wg(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Xg(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qg(r){let e;const t=r.extensions&&r.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Na(t.attributes):e=r.indices+":"+Na(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Na(r.targets[n]);return e}function Na(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function $a(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Yg(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Kg=new $e;class jg{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new _g,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new or(this.options.manager):this.textureLoader=new xh(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ur(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return gi(s,o,i),Un(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(wr.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=La[i.type],o=Ki[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Bt(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=La[i.type],c=Ki[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,v=i.normalized===!0;let x,g;if(m&&m!==u){const p=Math.floor(d/m),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let S=t.cache.get(b);S||(x=new c(o,p*m,i.count*m/h),S=new mc(x,m/h),t.cache.add(b,S)),g=new Ir(S,l,d%m/h,v)}else o===null?x=new c(i.count*l):x=new c(o,d,i.count*l),g=new Bt(x,l,v);if(i.sparse!==void 0){const p=La.SCALAR,b=Ki[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,L=new b(a[1],S,i.sparse.count*p),R=new c(a[2],E,i.sparse.count*l);o!==null&&(g=new Bt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let C=0,F=L.length;C<F;C++){const M=L[C];if(g.setX(M,R[C*l]),l>=2&&g.setY(M,R[C*l+1]),l>=3&&g.setZ(M,R[C*l+2]),l>=4&&g.setW(M,R[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=v}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=Kl[d.magFilter]||1006,h.minFilter=Kl[d.minFilter]||1008,h.wrapS=jl[d.wrapS]||1e3,h.wrapT=jl[d.wrapT]||1e3,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==1003&&h.minFilter!==1006,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,m){let v=d;t.isImageBitmapLoader===!0&&(v=function(x){const g=new Ot(x);g.needsUpdate=!0,d(g)}),t.load(wr.resolveURL(u,s.path),v,void 0,m)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Un(u,a),u.userData.mimeType=a.mimeType||Yg(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[st.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new zs,bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new yc,bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return sn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){const u=i[st.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new Ae(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],At),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Mt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=2);const h=s.alphaMode||Ua.OPAQUE;if(h===Ua.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ua.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==fn&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Me(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==fn&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==fn){const u=s.emissiveFactor;o.emissive=new Ae().setRGB(u[0],u[1],u[2],At)}return s.emissiveTexture!==void 0&&a!==fn&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Mt)),Promise.all(c).then(function(){const u=new a(o);return s.name&&(u.name=s.name),Un(u,s),t.associations.set(u,{materials:e}),s.extensions&&gi(i,u,s),u})}createUniqueName(e){const t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Zl(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=qg(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Zl(new Lt,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?Vg(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let m=0,v=h.length;m<v;m++){const x=h[m],g=a[m];let p;const b=c[m];if(g.mode===un.TRIANGLES||g.mode===un.TRIANGLE_STRIP||g.mode===un.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new qu(x,b):new St(x,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===un.TRIANGLE_STRIP?p.geometry=ql(p.geometry,1):g.mode===un.TRIANGLE_FAN&&(p.geometry=ql(p.geometry,2));else if(g.mode===un.LINES)p=new Ju(x,b);else if(g.mode===un.LINE_STRIP)p=new oo(x,b);else if(g.mode===un.LINE_LOOP)p=new Qu(x,b);else if(g.mode===un.POINTS)p=new lo(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&Xg(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Un(p,s),g.extensions&&gi(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let m=0,v=u.length;m<v;m++)t.associations.set(u[m],{meshes:e,primitives:m});if(u.length===1)return s.extensions&&gi(i,u[0],s),u[0];const d=new Yt;s.extensions&&gi(i,d,s),t.associations.set(d,{meshes:e});for(let m=0,v=u.length;m<v;m++)d.add(u[m]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Zt(ft.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Vs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Un(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new $e;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new so(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const m=i.channels[u],v=i.samplers[m.sampler],x=m.target,g=x.node,p=i.parameters!==void 0?i.parameters[v.input]:v.input,b=i.parameters!==void 0?i.parameters[v.output]:v.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(v),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],m=u[1],v=u[2],x=u[3],g=u[4],p=[];for(let S=0,E=d.length;S<E;S++){const L=d[S],R=m[S],C=v[S],F=x[S],M=g[S];if(L===void 0)continue;L.updateMatrix&&L.updateMatrix();const T=n._createAnimationTracks(L,R,C,F,M);if(T)for(let N=0;N<T.length;N++)p.push(T[N])}const b=new lh(s,void 0,p);return Un(b,i),b})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(d,Kg)});for(let m=0,v=u.length;m<v;m++)h.add(u[m]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new vc:c.length>1?h=new Yt:c.length===1?h=c[0]:h=new xt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),Un(h,s),s.extensions&&gi(n,h,s),s.matrix!==void 0){const u=new $e;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Yt;n.name&&(s.name=i.createUniqueName(n.name)),Un(s,n),n.extensions&&gi(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,m]of i.associations)(d instanceof bn||d instanceof Ot)&&u.set(d,m);return h.traverse(d=>{const m=i.associations.get(d);m!=null&&u.set(d,m)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];ni[s.path]===ni.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(ni[s.path]){case ni.weights:c=Qi;break;case ni.rotation:c=er;break;case ni.translation:case ni.scale:c=tr;break;default:n.itemSize===1?c=Qi:c=tr;break}const h=i.interpolation!==void 0?Hg[i.interpolation]:2301,u=this._getArrayFromAccessor(n);for(let d=0,m=l.length;d<m;d++){const v=new c(l[d]+"."+ni[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=$a(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof er?Gg:Nc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Zg(r,e,t){const n=e.attributes,i=new wn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),o.normalized){const h=$a(Ki[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new B,l=new B;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],m=d.min,v=d.max;if(m!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(v[2]))),d.normalized){const x=$a(Ki[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new Rn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Zl(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=Za[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return at.workingColorSpace!==At&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),Un(r,e),Zg(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Wg(r,e.targets,t):r})}var dn=Uint8Array,Xi=Uint16Array,$g=Int32Array,Fc=new dn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Oc=new dn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Jg=new dn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Bc=function(r,e){for(var t=new Xi(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new $g(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return{b:t,r:i}},kc=Bc(Fc,2),zc=kc.b,Qg=kc.r;zc[28]=258,Qg[258]=28;var e_=Bc(Oc,0),t_=e_.b,Ja=new Xi(32768);for(var Tt=0;Tt<32768;++Tt){var ii=(Tt&43690)>>1|(Tt&21845)<<1;ii=(ii&52428)>>2|(ii&13107)<<2,ii=(ii&61680)>>4|(ii&3855)<<4,Ja[Tt]=((ii&65280)>>8|(ii&255)<<8)>>1}var Ar=(function(r,e,t){for(var n=r.length,i=0,s=new Xi(e);i<n;++i)r[i]&&++s[r[i]-1];var a=new Xi(e);for(i=1;i<e;++i)a[i]=a[i-1]+s[i-1]<<1;var o;if(t){o=new Xi(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],h=e-r[i],u=a[r[i]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)o[Ja[u]>>l]=c}else for(o=new Xi(n),i=0;i<n;++i)r[i]&&(o[i]=Ja[a[r[i]-1]++]>>15-r[i]);return o}),Gr=new dn(288);for(var Tt=0;Tt<144;++Tt)Gr[Tt]=8;for(var Tt=144;Tt<256;++Tt)Gr[Tt]=9;for(var Tt=256;Tt<280;++Tt)Gr[Tt]=7;for(var Tt=280;Tt<288;++Tt)Gr[Tt]=8;var Gc=new dn(32);for(var Tt=0;Tt<32;++Tt)Gc[Tt]=5;var n_=Ar(Gr,9,1),i_=Ar(Gc,5,1),Fa=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},xn=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},Oa=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},r_=function(r){return(r+7)/8|0},s_=function(r,e,t){return(t==null||t>r.length)&&(t=r.length),new dn(r.subarray(e,t))},a_=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Mn=function(r,e,t){var n=new Error(e||a_[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,Mn),!t)throw n;return n},o_=function(r,e,t,n){var i=r.length,s=0;if(!i||e.f&&!e.l)return t||new dn(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new dn(i*3));var c=function(tt){var Ct=t.length;if(tt>Ct){var O=new dn(Math.max(Ct*2,tt));O.set(t),t=O}},h=e.f||0,u=e.p||0,d=e.b||0,m=e.l,v=e.d,x=e.m,g=e.n,p=i*8;do{if(!m){h=xn(r,u,1);var b=xn(r,u+1,3);if(u+=3,b)if(b==1)m=n_,v=i_,x=9,g=5;else if(b==2){var R=xn(r,u,31)+257,C=xn(r,u+10,15)+4,F=R+xn(r,u+5,31)+1;u+=14;for(var M=new dn(F),T=new dn(19),N=0;N<C;++N)T[Jg[N]]=xn(r,u+N*3,7);u+=C*3;for(var k=Fa(T),X=(1<<k)-1,K=Ar(T,k,1),N=0;N<F;){var $=K[xn(r,u,X)];u+=$&15;var S=$>>4;if(S<16)M[N++]=S;else{var V=0,ae=0;for(S==16?(ae=3+xn(r,u,3),u+=2,V=M[N-1]):S==17?(ae=3+xn(r,u,7),u+=3):S==18&&(ae=11+xn(r,u,127),u+=7);ae--;)M[N++]=V}}var G=M.subarray(0,R),te=M.subarray(R);x=Fa(G),g=Fa(te),m=Ar(G,x,1),v=Ar(te,g,1)}else Mn(1);else{var S=r_(u)+4,E=r[S-4]|r[S-3]<<8,L=S+E;if(L>i){l&&Mn(0);break}o&&c(d+E),t.set(r.subarray(S,L),d),e.b=d+=E,e.p=u=L*8,e.f=h;continue}if(u>p){l&&Mn(0);break}}o&&c(d+131072);for(var ce=(1<<x)-1,he=(1<<g)-1,Se=u;;Se=u){var V=m[Oa(r,u)&ce],Oe=V>>4;if(u+=V&15,u>p){l&&Mn(0);break}if(V||Mn(2),Oe<256)t[d++]=Oe;else if(Oe==256){Se=u,m=null;break}else{var qe=Oe-254;if(Oe>264){var N=Oe-257,Ye=Fc[N];qe=xn(r,u,(1<<Ye)-1)+zc[N],u+=Ye}var J=v[Oa(r,u)&he],se=J>>4;J||Mn(3),u+=J&15;var te=t_[se];if(se>3){var Ye=Oc[se];te+=Oa(r,u)&(1<<Ye)-1,u+=Ye}if(u>p){l&&Mn(0);break}o&&c(d+131072);var be=d+qe;if(d<te){var Ge=s-te,Ue=Math.min(te,be);for(Ge+d<0&&Mn(3);d<Ue;++d)t[d]=n[Ge+d]}for(;d<be;++d)t[d]=t[d-te]}}e.l=m,e.p=Se,e.b=d,e.f=h,m&&(h=1,e.m=x,e.d=v,e.n=g)}while(!h);return d!=t.length&&a?s_(t,0,d):t.subarray(0,d)},l_=new dn(0),c_=function(r,e){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&Mn(6,"invalid zlib data"),(r[1]>>5&1)==1&&Mn(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function As(r,e){return o_(r.subarray(c_(r),-4),{i:2},e,e)}var u_=typeof TextDecoder<"u"&&new TextDecoder,h_=0;try{u_.decode(l_,{stream:!0}),h_=1}catch{}class d_ extends mh{constructor(e){super(e),this.type=1016,this.outputFormat=1023}parse(e){const M=Math.pow(2.7182818,2.2);function T(_,f){let y=0;for(let D=0;D<65536;++D)(D==0||_[D>>3]&1<<(D&7))&&(f[y++]=D);const A=y-1;for(;y<65536;)f[y++]=0;return A}function N(_){for(let f=0;f<16384;f++)_[f]={},_[f].len=0,_[f].lit=0,_[f].p=null}const k={l:0,c:0,lc:0};function X(_,f,y,A,D){for(;y<_;)f=f<<8|Le(A,D),y+=8;y-=_,k.l=f>>y&(1<<_)-1,k.c=f,k.lc=y}const K=new Array(59);function $(_){for(let y=0;y<=58;++y)K[y]=0;for(let y=0;y<65537;++y)K[_[y]]+=1;let f=0;for(let y=58;y>0;--y){const A=f+K[y]>>1;K[y]=f,f=A}for(let y=0;y<65537;++y){const A=_[y];A>0&&(_[y]=A|K[A]++<<6)}}function V(_,f,y,A,D,I){const P=f;let q=0,W=0;for(;A<=D;A++){if(P.value-f.value>y)return!1;X(6,q,W,_,P);const H=k.l;if(q=k.c,W=k.lc,I[A]=H,H==63){if(P.value-f.value>y)throw new Error("Something wrong with hufUnpackEncTable");X(8,q,W,_,P);let j=k.l+6;if(q=k.c,W=k.lc,A+j>D+1)throw new Error("Something wrong with hufUnpackEncTable");for(;j--;)I[A++]=0;A--}else if(H>=59){let j=H-59+2;if(A+j>D+1)throw new Error("Something wrong with hufUnpackEncTable");for(;j--;)I[A++]=0;A--}}$(I)}function ae(_){return _&63}function G(_){return _>>6}function te(_,f,y,A){for(;f<=y;f++){const D=G(_[f]),I=ae(_[f]);if(D>>I)throw new Error("Invalid table entry");if(I>14){const P=A[D>>I-14];if(P.len)throw new Error("Invalid table entry");if(P.lit++,P.p){const q=P.p;P.p=new Array(P.lit);for(let W=0;W<P.lit-1;++W)P.p[W]=q[W]}else P.p=new Array(1);P.p[P.lit-1]=f}else if(I){let P=0;for(let q=1<<14-I;q>0;q--){const W=A[(D<<14-I)+P];if(W.len||W.p)throw new Error("Invalid table entry");W.len=I,W.lit=f,P++}}}return!0}const ce={c:0,lc:0};function he(_,f,y,A){_=_<<8|Le(y,A),f+=8,ce.c=_,ce.lc=f}const Se={c:0,lc:0};function Oe(_,f,y,A,D,I,P,q,W){if(_==f){A<8&&(he(y,A,D,I),y=ce.c,A=ce.lc),A-=8;let H=y>>A;if(H=new Uint8Array([H])[0],q.value+H>W)return!1;const j=P[q.value-1];for(;H-- >0;)P[q.value++]=j}else if(q.value<W)P[q.value++]=_;else return!1;Se.c=y,Se.lc=A}function qe(_){return _&65535}function Ye(_){const f=qe(_);return f>32767?f-65536:f}const J={a:0,b:0};function se(_,f){const y=Ye(_),D=Ye(f),I=y+(D&1)+(D>>1),P=I,q=I-D;J.a=P,J.b=q}function be(_,f){const y=qe(_),A=qe(f),D=y-(A>>1)&65535,I=A+D-32768&65535;J.a=I,J.b=D}function Ge(_,f,y,A,D,I,P){const q=P<16384,W=y>D?D:y;let H=1,j,ne;for(;H<=W;)H<<=1;for(H>>=1,j=H,H>>=1;H>=1;){ne=0;const Q=ne+I*(D-j),oe=I*H,_e=I*j,ue=A*H,fe=A*j;let Te,ve,ze,ke;for(;ne<=Q;ne+=_e){let Je=ne;const He=ne+A*(y-j);for(;Je<=He;Je+=fe){const rt=Je+ue,bt=Je+oe,We=bt+ue;q?(se(_[Je+f],_[bt+f]),Te=J.a,ze=J.b,se(_[rt+f],_[We+f]),ve=J.a,ke=J.b,se(Te,ve),_[Je+f]=J.a,_[rt+f]=J.b,se(ze,ke),_[bt+f]=J.a,_[We+f]=J.b):(be(_[Je+f],_[bt+f]),Te=J.a,ze=J.b,be(_[rt+f],_[We+f]),ve=J.a,ke=J.b,be(Te,ve),_[Je+f]=J.a,_[rt+f]=J.b,be(ze,ke),_[bt+f]=J.a,_[We+f]=J.b)}if(y&H){const rt=Je+oe;q?se(_[Je+f],_[rt+f]):be(_[Je+f],_[rt+f]),Te=J.a,_[rt+f]=J.b,_[Je+f]=Te}}if(D&H){let Je=ne;const He=ne+A*(y-j);for(;Je<=He;Je+=fe){const rt=Je+ue;q?se(_[Je+f],_[rt+f]):be(_[Je+f],_[rt+f]),Te=J.a,_[rt+f]=J.b,_[Je+f]=Te}}j=H,H>>=1}return ne}function Ue(_,f,y,A,D,I,P,q,W){let H=0,j=0;const ne=P,Q=Math.trunc(A.value+(D+7)/8);for(;A.value<Q;)for(he(H,j,y,A),H=ce.c,j=ce.lc;j>=14;){const _e=H>>j-14&16383,ue=f[_e];if(ue.len)j-=ue.len,Oe(ue.lit,I,H,j,y,A,q,W,ne),H=Se.c,j=Se.lc;else{if(!ue.p)throw new Error("hufDecode issues");let fe;for(fe=0;fe<ue.lit;fe++){const Te=ae(_[ue.p[fe]]);for(;j<Te&&A.value<Q;)he(H,j,y,A),H=ce.c,j=ce.lc;if(j>=Te&&G(_[ue.p[fe]])==(H>>j-Te&(1<<Te)-1)){j-=Te,Oe(ue.p[fe],I,H,j,y,A,q,W,ne),H=Se.c,j=Se.lc;break}}if(fe==ue.lit)throw new Error("hufDecode issues")}}const oe=8-D&7;for(H>>=oe,j-=oe;j>0;){const _e=f[H<<14-j&16383];if(_e.len)j-=_e.len,Oe(_e.lit,I,H,j,y,A,q,W,ne),H=Se.c,j=Se.lc;else throw new Error("hufDecode issues")}return!0}function tt(_,f,y,A,D,I){const P={value:0},q=y.value,W=De(f,y),H=De(f,y);y.value+=4;const j=De(f,y);if(y.value+=4,W<0||W>=65537||H<0||H>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const ne=new Array(65537),Q=new Array(16384);N(Q);const oe=A-(y.value-q);if(V(_,y,oe,W,H,ne),j>8*(A-(y.value-q)))throw new Error("Something wrong with hufUncompress");te(ne,W,H,Q),Ue(ne,Q,_,y,j,H,I,D,P)}function Ct(_,f,y){for(let A=0;A<y;++A)f[A]=_[f[A]]}function O(_){for(let f=1;f<_.length;f++){const y=_[f-1]+_[f]-128;_[f]=y}}function _t(_,f){let y=0,A=Math.floor((_.length+1)/2),D=0;const I=_.length-1;for(;!(D>I||(f[D++]=_[y++],D>I));)f[D++]=_[A++]}function Ke(_){let f=_.byteLength;const y=new Array;let A=0;const D=new DataView(_);for(;f>0;){const I=D.getInt8(A++);if(I<0){const P=-I;f-=P+1;for(let q=0;q<P;q++)y.push(D.getUint8(A++))}else{const P=I;f-=2;const q=D.getUint8(A++);for(let W=0;W<P+1;W++)y.push(q)}}return y}function Ve(_,f,y,A,D,I){let P=new DataView(I.buffer);const q=y[_.idx[0]].width,W=y[_.idx[0]].height,H=3,j=Math.floor(q/8),ne=Math.ceil(q/8),Q=Math.ceil(W/8),oe=q-(ne-1)*8,_e=W-(Q-1)*8,ue={value:0},fe=new Array(H),Te=new Array(H),ve=new Array(H),ze=new Array(H),ke=new Array(H);for(let He=0;He<H;++He)ke[He]=f[_.idx[He]],fe[He]=He<1?0:fe[He-1]+ne*Q,Te[He]=new Float32Array(64),ve[He]=new Uint16Array(64),ze[He]=new Uint16Array(ne*64);for(let He=0;He<Q;++He){let rt=8;He==Q-1&&(rt=_e);let bt=8;for(let Xe=0;Xe<ne;++Xe){Xe==ne-1&&(bt=oe);for(let nt=0;nt<H;++nt)ve[nt].fill(0),ve[nt][0]=D[fe[nt]++],vt(ue,A,ve[nt]),Re(ve[nt],Te[nt]),Ze(Te[nt]);Ut(Te);for(let nt=0;nt<H;++nt)Et(Te[nt],ze[nt],Xe*64)}let We=0;for(let Xe=0;Xe<H;++Xe){const nt=y[_.idx[Xe]].type;for(let yt=8*He;yt<8*He+rt;++yt){We=ke[Xe][yt];for(let Nt=0;Nt<j;++Nt){const Jt=Nt*64+(yt&7)*8;P.setUint16(We+0*nt,ze[Xe][Jt+0],!0),P.setUint16(We+2*nt,ze[Xe][Jt+1],!0),P.setUint16(We+4*nt,ze[Xe][Jt+2],!0),P.setUint16(We+6*nt,ze[Xe][Jt+3],!0),P.setUint16(We+8*nt,ze[Xe][Jt+4],!0),P.setUint16(We+10*nt,ze[Xe][Jt+5],!0),P.setUint16(We+12*nt,ze[Xe][Jt+6],!0),P.setUint16(We+14*nt,ze[Xe][Jt+7],!0),We+=16*nt}}if(j!=ne)for(let yt=8*He;yt<8*He+rt;++yt){const Nt=ke[Xe][yt]+8*j*2*nt,Jt=j*64+(yt&7)*8;for(let ln=0;ln<bt;++ln)P.setUint16(Nt+ln*2*nt,ze[Xe][Jt+ln],!0)}}}const Je=new Uint16Array(q);P=new DataView(I.buffer);for(let He=0;He<H;++He){y[_.idx[He]].decoded=!0;const rt=y[_.idx[He]].type;if(y[He].type==2)for(let bt=0;bt<W;++bt){const We=ke[He][bt];for(let Xe=0;Xe<q;++Xe)Je[Xe]=P.getUint16(We+Xe*2*rt,!0);for(let Xe=0;Xe<q;++Xe)P.setFloat32(We+Xe*2*rt,Z(Je[Xe]),!0)}}}function Pe(_,f,y,A,D,I){const P=new DataView(I.buffer),q=y[_],W=q.width,H=q.height,j=Math.ceil(W/8),ne=Math.ceil(H/8),Q=Math.floor(W/8),oe=W-(j-1)*8,_e=H-(ne-1)*8,ue={value:0};let fe=0;const Te=new Float32Array(64),ve=new Uint16Array(64),ze=new Uint16Array(j*64);for(let ke=0;ke<ne;++ke){let Je=8;ke==ne-1&&(Je=_e);for(let He=0;He<j;++He)ve.fill(0),ve[0]=D[fe++],vt(ue,A,ve),Re(ve,Te),Ze(Te),Et(Te,ze,He*64);for(let He=8*ke;He<8*ke+Je;++He){let rt=f[_][He];for(let bt=0;bt<Q;++bt){const We=bt*64+(He&7)*8;for(let Xe=0;Xe<8;++Xe)P.setUint16(rt+Xe*2*q.type,ze[We+Xe],!0);rt+=16*q.type}if(j!=Q){const bt=Q*64+(He&7)*8;for(let We=0;We<oe;++We)P.setUint16(rt+We*2*q.type,ze[bt+We],!0)}}}q.decoded=!0}function vt(_,f,y){let A,D=1;for(;D<64;)A=f[_.value],A==65280?D=64:A>>8==255?D+=A&255:(y[D]=A,D++),_.value++}function Re(_,f){f[0]=Z(_[0]),f[1]=Z(_[1]),f[2]=Z(_[5]),f[3]=Z(_[6]),f[4]=Z(_[14]),f[5]=Z(_[15]),f[6]=Z(_[27]),f[7]=Z(_[28]),f[8]=Z(_[2]),f[9]=Z(_[4]),f[10]=Z(_[7]),f[11]=Z(_[13]),f[12]=Z(_[16]),f[13]=Z(_[26]),f[14]=Z(_[29]),f[15]=Z(_[42]),f[16]=Z(_[3]),f[17]=Z(_[8]),f[18]=Z(_[12]),f[19]=Z(_[17]),f[20]=Z(_[25]),f[21]=Z(_[30]),f[22]=Z(_[41]),f[23]=Z(_[43]),f[24]=Z(_[9]),f[25]=Z(_[11]),f[26]=Z(_[18]),f[27]=Z(_[24]),f[28]=Z(_[31]),f[29]=Z(_[40]),f[30]=Z(_[44]),f[31]=Z(_[53]),f[32]=Z(_[10]),f[33]=Z(_[19]),f[34]=Z(_[23]),f[35]=Z(_[32]),f[36]=Z(_[39]),f[37]=Z(_[45]),f[38]=Z(_[52]),f[39]=Z(_[54]),f[40]=Z(_[20]),f[41]=Z(_[22]),f[42]=Z(_[33]),f[43]=Z(_[38]),f[44]=Z(_[46]),f[45]=Z(_[51]),f[46]=Z(_[55]),f[47]=Z(_[60]),f[48]=Z(_[21]),f[49]=Z(_[34]),f[50]=Z(_[37]),f[51]=Z(_[47]),f[52]=Z(_[50]),f[53]=Z(_[56]),f[54]=Z(_[59]),f[55]=Z(_[61]),f[56]=Z(_[35]),f[57]=Z(_[36]),f[58]=Z(_[48]),f[59]=Z(_[49]),f[60]=Z(_[57]),f[61]=Z(_[58]),f[62]=Z(_[62]),f[63]=Z(_[63])}function Ze(_){const f=.5*Math.cos(.7853975),y=.5*Math.cos(3.14159/16),A=.5*Math.cos(3.14159/8),D=.5*Math.cos(3*3.14159/16),I=.5*Math.cos(5*3.14159/16),P=.5*Math.cos(3*3.14159/8),q=.5*Math.cos(7*3.14159/16),W=new Array(4),H=new Array(4),j=new Array(4),ne=new Array(4);for(let Q=0;Q<8;++Q){const oe=Q*8;W[0]=A*_[oe+2],W[1]=P*_[oe+2],W[2]=A*_[oe+6],W[3]=P*_[oe+6],H[0]=y*_[oe+1]+D*_[oe+3]+I*_[oe+5]+q*_[oe+7],H[1]=D*_[oe+1]-q*_[oe+3]-y*_[oe+5]-I*_[oe+7],H[2]=I*_[oe+1]-y*_[oe+3]+q*_[oe+5]+D*_[oe+7],H[3]=q*_[oe+1]-I*_[oe+3]+D*_[oe+5]-y*_[oe+7],j[0]=f*(_[oe+0]+_[oe+4]),j[3]=f*(_[oe+0]-_[oe+4]),j[1]=W[0]+W[3],j[2]=W[1]-W[2],ne[0]=j[0]+j[1],ne[1]=j[3]+j[2],ne[2]=j[3]-j[2],ne[3]=j[0]-j[1],_[oe+0]=ne[0]+H[0],_[oe+1]=ne[1]+H[1],_[oe+2]=ne[2]+H[2],_[oe+3]=ne[3]+H[3],_[oe+4]=ne[3]-H[3],_[oe+5]=ne[2]-H[2],_[oe+6]=ne[1]-H[1],_[oe+7]=ne[0]-H[0]}for(let Q=0;Q<8;++Q)W[0]=A*_[16+Q],W[1]=P*_[16+Q],W[2]=A*_[48+Q],W[3]=P*_[48+Q],H[0]=y*_[8+Q]+D*_[24+Q]+I*_[40+Q]+q*_[56+Q],H[1]=D*_[8+Q]-q*_[24+Q]-y*_[40+Q]-I*_[56+Q],H[2]=I*_[8+Q]-y*_[24+Q]+q*_[40+Q]+D*_[56+Q],H[3]=q*_[8+Q]-I*_[24+Q]+D*_[40+Q]-y*_[56+Q],j[0]=f*(_[Q]+_[32+Q]),j[3]=f*(_[Q]-_[32+Q]),j[1]=W[0]+W[3],j[2]=W[1]-W[2],ne[0]=j[0]+j[1],ne[1]=j[3]+j[2],ne[2]=j[3]-j[2],ne[3]=j[0]-j[1],_[0+Q]=ne[0]+H[0],_[8+Q]=ne[1]+H[1],_[16+Q]=ne[2]+H[2],_[24+Q]=ne[3]+H[3],_[32+Q]=ne[3]-H[3],_[40+Q]=ne[2]-H[2],_[48+Q]=ne[1]-H[1],_[56+Q]=ne[0]-H[0]}function Ut(_){for(let f=0;f<64;++f){const y=_[0][f],A=_[1][f],D=_[2][f];_[0][f]=y+1.5747*D,_[1][f]=y-.1873*A-.4682*D,_[2][f]=y+1.8556*A}}function Et(_,f,y){for(let A=0;A<64;++A)f[y+A]=Yo.toHalfFloat(U(_[A]))}function U(_){return _<=1?Math.sign(_)*Math.pow(Math.abs(_),2.2):Math.sign(_)*Math.pow(M,Math.abs(_)-1)}function w(_){return new DataView(_.array.buffer,_.offset.value,_.size)}function Y(_){const f=_.viewer.buffer.slice(_.offset.value,_.offset.value+_.size),y=new Uint8Array(Ke(f)),A=new Uint8Array(y.length);return O(y),_t(y,A),new DataView(A.buffer)}function ie(_){const f=_.array.slice(_.offset.value,_.offset.value+_.size),y=As(f),A=new Uint8Array(y.length);return O(y),_t(y,A),new DataView(A.buffer)}function le(_){const f=_.viewer,y={value:_.offset.value},A=new Uint16Array(_.columns*_.lines*(_.inputChannels.length*_.type)),D=new Uint8Array(8192);let I=0;const P=new Array(_.inputChannels.length);for(let _e=0,ue=_.inputChannels.length;_e<ue;_e++)P[_e]={},P[_e].start=I,P[_e].end=P[_e].start,P[_e].nx=_.columns,P[_e].ny=_.lines,P[_e].size=_.type,I+=P[_e].nx*P[_e].ny*P[_e].size;const q=we(f,y),W=we(f,y);if(W>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(q<=W)for(let _e=0;_e<W-q+1;_e++)D[_e+q]=ye(f,y);const H=new Uint16Array(65536),j=T(D,H),ne=De(f,y);tt(_.array,f,y,ne,A,I);for(let _e=0;_e<_.inputChannels.length;++_e){const ue=P[_e];for(let fe=0;fe<P[_e].size;++fe)Ge(A,ue.start+fe,ue.nx,ue.size,ue.ny,ue.nx*ue.size,j)}Ct(H,A,I);let Q=0;const oe=new Uint8Array(A.buffer.byteLength);for(let _e=0;_e<_.lines;_e++)for(let ue=0;ue<_.inputChannels.length;ue++){const fe=P[ue],Te=fe.nx*fe.size,ve=new Uint8Array(A.buffer,fe.end*2,Te*2);oe.set(ve,Q),Q+=Te*2,fe.end+=Te}return new DataView(oe.buffer)}function ee(_){const f=_.array.slice(_.offset.value,_.offset.value+_.size),y=As(f),A=_.inputChannels.length*_.lines*_.columns*_.totalBytes,D=new ArrayBuffer(A),I=new DataView(D);let P=0,q=0;const W=new Array(4);for(let H=0;H<_.lines;H++)for(let j=0;j<_.inputChannels.length;j++){let ne=0;switch(_.inputChannels[j].pixelType){case 1:W[0]=P,W[1]=W[0]+_.columns,P=W[1]+_.columns;for(let oe=0;oe<_.columns;++oe){const _e=y[W[0]++]<<8|y[W[1]++];ne+=_e,I.setUint16(q,ne,!0),q+=2}break;case 2:W[0]=P,W[1]=W[0]+_.columns,W[2]=W[1]+_.columns,P=W[2]+_.columns;for(let oe=0;oe<_.columns;++oe){const _e=y[W[0]++]<<24|y[W[1]++]<<16|y[W[2]++]<<8;ne+=_e,I.setUint32(q,ne,!0),q+=4}break}}return I}function Ne(_){const f=_.viewer,y={value:_.offset.value},A=new Uint8Array(_.columns*_.lines*(_.inputChannels.length*_.type*2)),D={version:Be(f,y),unknownUncompressedSize:Be(f,y),unknownCompressedSize:Be(f,y),acCompressedSize:Be(f,y),dcCompressedSize:Be(f,y),rleCompressedSize:Be(f,y),rleUncompressedSize:Be(f,y),rleRawSize:Be(f,y),totalAcUncompressedCount:Be(f,y),totalDcUncompressedCount:Be(f,y),acCompression:Be(f,y)};if(D.version<2)throw new Error("EXRLoader.parse: "+kn.compression+" version "+D.version+" is unsupported");const I=new Array;let P=we(f,y)-2;for(;P>0;){const ue=ge(f.buffer,y),fe=ye(f,y),Te=fe>>2&3,ve=(fe>>4)-1,ze=new Int8Array([ve])[0],ke=ye(f,y);I.push({name:ue,index:ze,type:ke,compression:Te}),P-=ue.length+3}const q=kn.channels,W=new Array(_.inputChannels.length);for(let ue=0;ue<_.inputChannels.length;++ue){const fe=W[ue]={},Te=q[ue];fe.name=Te.name,fe.compression=0,fe.decoded=!1,fe.type=Te.pixelType,fe.pLinear=Te.pLinear,fe.width=_.columns,fe.height=_.lines}const H={idx:new Array(3)};for(let ue=0;ue<_.inputChannels.length;++ue){const fe=W[ue];for(let Te=0;Te<I.length;++Te){const ve=I[Te];fe.name==ve.name&&(fe.compression=ve.compression,ve.index>=0&&(H.idx[ve.index]=ue),fe.offset=ue)}}let j,ne,Q;if(D.acCompressedSize>0)switch(D.acCompression){case 0:j=new Uint16Array(D.totalAcUncompressedCount),tt(_.array,f,y,D.acCompressedSize,j,D.totalAcUncompressedCount);break;case 1:const ue=_.array.slice(y.value,y.value+D.totalAcUncompressedCount),fe=As(ue);j=new Uint16Array(fe.buffer),y.value+=D.totalAcUncompressedCount;break}if(D.dcCompressedSize>0){const ue={array:_.array,offset:y,size:D.dcCompressedSize};ne=new Uint16Array(ie(ue).buffer),y.value+=D.dcCompressedSize}if(D.rleRawSize>0){const ue=_.array.slice(y.value,y.value+D.rleCompressedSize),fe=As(ue);Q=Ke(fe.buffer),y.value+=D.rleCompressedSize}let oe=0;const _e=new Array(W.length);for(let ue=0;ue<_e.length;++ue)_e[ue]=new Array;for(let ue=0;ue<_.lines;++ue)for(let fe=0;fe<W.length;++fe)_e[fe].push(oe),oe+=W[fe].width*_.type*2;H.idx[0]!==void 0&&W[H.idx[0]]&&Ve(H,_e,W,j,ne,A);for(let ue=0;ue<W.length;++ue){const fe=W[ue];if(!fe.decoded)switch(fe.compression){case 2:let Te=0,ve=0;for(let ze=0;ze<_.lines;++ze){let ke=_e[ue][Te];for(let Je=0;Je<fe.width;++Je){for(let He=0;He<2*fe.type;++He)A[ke++]=Q[ve+He*fe.width*fe.height];ve++}Te++}break;case 1:Pe(ue,_e,W,j,ne,A);break;default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(A.buffer)}function ge(_,f){const y=new Uint8Array(_);let A=0;for(;y[f.value+A]!=0;)A+=1;const D=new TextDecoder().decode(y.slice(f.value,f.value+A));return f.value=f.value+A+1,D}function Ie(_,f,y){const A=new TextDecoder().decode(new Uint8Array(_).slice(f.value,f.value+y));return f.value=f.value+y,A}function Fe(_,f){const y=xe(_,f),A=De(_,f);return[y,A]}function pe(_,f){const y=De(_,f),A=De(_,f);return[y,A]}function xe(_,f){const y=_.getInt32(f.value,!0);return f.value=f.value+4,y}function De(_,f){const y=_.getUint32(f.value,!0);return f.value=f.value+4,y}function Le(_,f){const y=_[f.value];return f.value=f.value+1,y}function ye(_,f){const y=_.getUint8(f.value);return f.value=f.value+1,y}const Be=function(_,f){let y;return"getBigInt64"in DataView.prototype?y=Number(_.getBigInt64(f.value,!0)):y=_.getUint32(f.value+4,!0)+Number(_.getUint32(f.value,!0)<<32),f.value+=8,y};function z(_,f){const y=_.getFloat32(f.value,!0);return f.value+=4,y}function me(_,f){return Yo.toHalfFloat(z(_,f))}function Z(_){const f=(_&31744)>>10,y=_&1023;return(_>>15?-1:1)*(f?f===31?y?NaN:1/0:Math.pow(2,f-15)*(1+y/1024):6103515625e-14*(y/1024))}function we(_,f){const y=_.getUint16(f.value,!0);return f.value+=2,y}function de(_,f){return Z(we(_,f))}function re(_,f,y,A){const D=y.value,I=[];for(;y.value<D+A-1;){const P=ge(f,y),q=xe(_,y),W=ye(_,y);y.value+=3;const H=xe(_,y),j=xe(_,y);I.push({name:P,pixelType:q,pLinear:W,xSampling:H,ySampling:j})}return y.value+=1,I}function Ce(_,f){const y=z(_,f),A=z(_,f),D=z(_,f),I=z(_,f),P=z(_,f),q=z(_,f),W=z(_,f),H=z(_,f);return{redX:y,redY:A,greenX:D,greenY:I,blueX:P,blueY:q,whiteX:W,whiteY:H}}function je(_,f){const y=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],A=ye(_,f);return y[A]}function mt(_,f){const y=xe(_,f),A=xe(_,f),D=xe(_,f),I=xe(_,f);return{xMin:y,yMin:A,xMax:D,yMax:I}}function ot(_,f){const y=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],A=ye(_,f);return y[A]}function mn(_,f){const y=["ENVMAP_LATLONG","ENVMAP_CUBE"],A=ye(_,f);return y[A]}function on(_,f){const y=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],A=["ROUND_DOWN","ROUND_UP"],D=De(_,f),I=De(_,f),P=ye(_,f);return{xSize:D,ySize:I,levelMode:y[P&15],roundingMode:A[P>>4]}}function Vr(_,f){const y=z(_,f),A=z(_,f);return[y,A]}function Bn(_,f){const y=z(_,f),A=z(_,f),D=z(_,f);return[y,A,D]}function ur(_,f,y,A,D){if(A==="string"||A==="stringvector"||A==="iccProfile")return Ie(f,y,D);if(A==="chlist")return re(_,f,y,D);if(A==="chromaticities")return Ce(_,y);if(A==="compression")return je(_,y);if(A==="box2i")return mt(_,y);if(A==="envmap")return mn(_,y);if(A==="tiledesc")return on(_,y);if(A==="lineOrder")return ot(_,y);if(A==="float")return z(_,y);if(A==="v2f")return Vr(_,y);if(A==="v3f")return Bn(_,y);if(A==="int")return xe(_,y);if(A==="rational")return Fe(_,y);if(A==="timecode")return pe(_,y);if(A==="preview")return y.value+=D,"skipped";y.value+=D}function Wr(_,f){const y=Math.log2(_);return f=="ROUND_DOWN"?Math.floor(y):Math.ceil(y)}function Xr(_,f,y){let A=0;switch(_.levelMode){case"ONE_LEVEL":A=1;break;case"MIPMAP_LEVELS":A=Wr(Math.max(f,y),_.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return A}function ci(_,f,y,A){const D=new Array(_);for(let I=0;I<_;I++){const P=1<<I;let q=f/P|0;A=="ROUND_UP"&&q*P<f&&(q+=1);const W=Math.max(q,1);D[I]=(W+y-1)/y|0}return D}function qr(){const _=this,f=_.offset,y={value:0};for(let A=0;A<_.tileCount;A++){const D=xe(_.viewer,f),I=xe(_.viewer,f);f.value+=8,_.size=De(_.viewer,f);const P=D*_.blockWidth,q=I*_.blockHeight;_.columns=P+_.blockWidth>_.width?_.width-P:_.blockWidth,_.lines=q+_.blockHeight>_.height?_.height-q:_.blockHeight;const W=_.columns*_.totalBytes,j=_.size<_.lines*W?_.uncompress(_):w(_);f.value+=_.size;for(let ne=0;ne<_.lines;ne++){const Q=ne*_.columns*_.totalBytes;for(let oe=0;oe<_.inputChannels.length;oe++){const _e=kn.channels[oe].name,ue=_.channelByteOffsets[_e]*_.columns,fe=_.decodeChannels[_e];if(fe===void 0)continue;y.value=Q+ue;const Te=(_.height-(1+q+ne))*_.outLineWidth;for(let ve=0;ve<_.columns;ve++){const ze=Te+(ve+P)*_.outputChannels+fe;_.byteArray[ze]=_.getter(j,y)}}}}}function Ei(){const _=this,f=_.offset,y={value:0};for(let A=0;A<_.height/_.blockHeight;A++){const D=xe(_.viewer,f)-kn.dataWindow.yMin;_.size=De(_.viewer,f),_.lines=D+_.blockHeight>_.height?_.height-D:_.blockHeight;const I=_.columns*_.totalBytes,q=_.size<_.lines*I?_.uncompress(_):w(_);f.value+=_.size;for(let W=0;W<_.blockHeight;W++){const H=A*_.blockHeight,j=W+_.scanOrder(H);if(j>=_.height)continue;const ne=W*I,Q=(_.height-1-j)*_.outLineWidth;for(let oe=0;oe<_.inputChannels.length;oe++){const _e=kn.channels[oe].name,ue=_.channelByteOffsets[_e]*_.columns,fe=_.decodeChannels[_e];if(fe!==void 0){y.value=ne+ue;for(let Te=0;Te<_.columns;Te++){const ve=Q+Te*_.outputChannels+fe;_.byteArray[ve]=_.getter(q,y)}}}}}}function Yr(_,f,y){const A={};if(_.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");A.version=_.getUint8(4);const D=_.getUint8(5);A.spec={singleTile:!!(D&2),longName:!!(D&4),deepFormat:!!(D&8),multiPart:!!(D&16)},y.value=8;let I=!0;for(;I;){const P=ge(f,y);if(P==="")I=!1;else{const q=ge(f,y),W=De(_,y),H=ur(_,f,y,q,W);H===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${q}'.`):A[P]=H}}if((D&-7)!=0)throw console.error("THREE.EXRHeader:",A),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return A}function Kr(_,f,y,A,D,I){const P={size:0,viewer:f,array:y,offset:A,width:_.dataWindow.xMax-_.dataWindow.xMin+1,height:_.dataWindow.yMax-_.dataWindow.yMin+1,inputChannels:_.channels,channelByteOffsets:{},shouldExpand:!1,scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:At};switch(_.compression){case"NO_COMPRESSION":P.blockHeight=1,P.uncompress=w;break;case"RLE_COMPRESSION":P.blockHeight=1,P.uncompress=Y;break;case"ZIPS_COMPRESSION":P.blockHeight=1,P.uncompress=ie;break;case"ZIP_COMPRESSION":P.blockHeight=16,P.uncompress=ie;break;case"PIZ_COMPRESSION":P.blockHeight=32,P.uncompress=le;break;case"PXR24_COMPRESSION":P.blockHeight=16,P.uncompress=ee;break;case"DWAA_COMPRESSION":P.blockHeight=32,P.uncompress=Ne;break;case"DWAB_COMPRESSION":P.blockHeight=256,P.uncompress=Ne;break;default:throw new Error("EXRLoader.parse: "+_.compression+" is unsupported")}const q={};for(const Q of _.channels)switch(Q.name){case"Y":case"R":case"G":case"B":case"A":q[Q.name]=!0,P.type=Q.pixelType}let W=!1,H=!1;if(q.R&&q.G&&q.B)P.outputChannels=4;else if(q.Y)P.outputChannels=1;else throw new Error("EXRLoader.parse: file contains unsupported data channels.");switch(P.outputChannels){case 4:I==1023?(W=!q.A,P.format=1023,P.colorSpace=At,P.outputChannels=4,P.decodeChannels={R:0,G:1,B:2,A:3}):I==1030?(P.format=1030,P.colorSpace=At,P.outputChannels=2,P.decodeChannels={R:0,G:1}):I==1028?(P.format=1028,P.colorSpace=At,P.outputChannels=1,P.decodeChannels={R:0}):H=!0;break;case 1:I==1023?(W=!0,P.format=1023,P.colorSpace=At,P.outputChannels=4,P.shouldExpand=!0,P.decodeChannels={Y:0}):I==1030?(P.format=1030,P.colorSpace=At,P.outputChannels=2,P.shouldExpand=!0,P.decodeChannels={Y:0}):I==1028?(P.format=1028,P.colorSpace=At,P.outputChannels=1,P.decodeChannels={Y:0}):H=!0;break;default:H=!0}if(H)throw new Error("EXRLoader.parse: invalid output format for specified file.");if(P.type==1)switch(D){case 1015:P.getter=de;break;case 1016:P.getter=we;break}else if(P.type==2)switch(D){case 1015:P.getter=z;break;case 1016:P.getter=me}else throw new Error("EXRLoader.parse: unsupported pixelType "+P.type+" for "+_.compression+".");P.columns=P.width;const j=P.width*P.height*P.outputChannels;switch(D){case 1015:P.byteArray=new Float32Array(j),W&&P.byteArray.fill(1,0,j);break;case 1016:P.byteArray=new Uint16Array(j),W&&P.byteArray.fill(15360,0,j);break;default:console.error("THREE.EXRLoader: unsupported type: ",D);break}let ne=0;for(const Q of _.channels)P.decodeChannels[Q.name]!==void 0&&(P.channelByteOffsets[Q.name]=ne),ne+=Q.pixelType*2;if(P.totalBytes=ne,P.outLineWidth=P.width*P.outputChannels,_.lineOrder==="INCREASING_Y"?P.scanOrder=Q=>Q:P.scanOrder=Q=>P.height-1-Q,_.spec.singleTile){P.blockHeight=_.tiles.ySize,P.blockWidth=_.tiles.xSize;const Q=Xr(_.tiles,P.width,P.height),oe=ci(Q,P.width,_.tiles.xSize,_.tiles.roundingMode),_e=ci(Q,P.height,_.tiles.ySize,_.tiles.roundingMode);P.tileCount=oe[0]*_e[0];for(let ue=0;ue<Q;ue++)for(let fe=0;fe<_e[ue];fe++)for(let Te=0;Te<oe[ue];Te++)Be(f,A);P.decode=qr.bind(P)}else{P.blockWidth=P.width;const Q=Math.ceil(P.height/P.blockHeight);for(let oe=0;oe<Q;oe++)Be(f,A);P.decode=Ei.bind(P)}return P}const jr={value:0},Zr=new DataView(e),Zs=new Uint8Array(e),kn=Yr(Zr,e,jr),In=Kr(kn,Zr,Zs,jr,this.type,this.outputFormat);if(In.decode(),In.shouldExpand){const _=In.byteArray;if(this.outputFormat==1023)for(let f=0;f<_.length;f+=4)_[f+2]=_[f+1]=_[f];else if(this.outputFormat==1030)for(let f=0;f<_.length;f+=2)_[f+1]=_[f]}return{header:kn,width:In.width,height:In.height,data:In.byteArray,format:In.format,colorSpace:In.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}setOutputFormat(e){return this.outputFormat=e,this}load(e,t,n,i){function s(a,o){a.colorSpace=o.colorSpace,a.minFilter=1006,a.magFilter=1006,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,o)}return super.load(e,s,n,i)}}const Rr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ti{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const f_=new Vs(-1,1,1,-1,0,1);class p_ extends Lt{constructor(){super(),this.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pt([0,2,0,0,2,0],2))}}const m_=new p_;class qs{constructor(e){this._mesh=new St(m_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,f_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class _o extends Ti{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ji.clone(e.uniforms),this.material=new Pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new qs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class $l extends Ti{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class g_ extends Ti{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class __{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Me);this._width=n.width,this._height=n.height,t=new Ht(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:1016}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _o(Rr),this.copyPass.material.blending=0,this.clock=new Rc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}$l!==void 0&&(a instanceof $l?n=!0:a instanceof g_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class v_ extends Ti{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ae}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const x_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ae(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class nr extends Ti{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256),this.clearColor=new Ae(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ht(s,a,{type:1016}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Ht(s,a,{type:1016});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Ht(s,a,{type:1016});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),a=Math.round(a/2)}const o=x_;this.highPassUniforms=Ji.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Me(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ji.clone(Rr.uniforms),this.blendMaterial=new Pt({uniforms:this.copyUniforms,vertexShader:Rr.vertexShader,fragmentShader:Rr.fragmentShader,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ae,this._oldClearAlpha=1,this._basic=new fn,this._fsQuad=new qs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Me(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=nr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=nr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Pt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new Pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}nr.BlurDirectionX=new Me(1,0);nr.BlurDirectionY=new Me(0,1);const Rs={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class y_ extends Ti{constructor(){super(),this.uniforms=Ji.clone(Rs.uniforms),this.material=new eh({name:Rs.name,uniforms:this.uniforms,vertexShader:Rs.vertexShader,fragmentShader:Rs.fragmentShader}),this._fsQuad=new qs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},at.getTransfer(this._outputColorSpace)===ut&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const M_=["You made an ordinary day feel like home.","There is still a sunny spot here, just for you.","Small paws. A love that stays.","I miss the little sound of you following me.","Sleep softly, my sweetest friend.","Thank you for choosing me as your person.","Every quiet morning holds a little of you.","You left paw prints on all my favorite memories.","I hope the stars feel as warm as your favorite blanket.","A flower for every time you made me smile.","I still look for you in the afternoon light.","You were my smallest, greatest adventure.","May your dreams be full of sunbeams.","Your place in my heart will always be yours.","For the naps, the mischief, and the midnight cuddles.","I carry your gentle company with me.","Some love is too soft for words.","I would choose every moment with you again.","The world was kinder with you beside me.","Loved in every season. Remembered in every bloom.","A little light for my little shadow.","Your purr is a song I will never forget.","You taught me how beautiful a quiet life can be.","Wherever you are, I hope there are boxes to explore.","One more flower. One more thank you.","You are part of every place I call home.","Rest among the flowers, dear one.","Our time was small. Our love was not.","I remember your warmth more than the goodbye.","A soft place to land, a love without an end.","You will always be my favorite hello.","Until we find the same sunbeam again."],Ba=["A little flower","A quiet wish","A golden bloom","A gentle thought","A small light","A warm memory","A soft promise","A tender thank you"],Jl=["for the joy you brought home.","for your sleepy morning company.","for every little adventure we shared.","for the comfort of your purr.","for all those sunlit afternoons.","for the love that stays with me.","for your wonderfully curious heart.","for my dearest little friend.","for every paw print in my heart.","for the sweetest ordinary moments.","for the warmth you left behind.","for the days we spent together.","for a friendship beyond words.","for the kindness in your gentle eyes.","for the peace you gave me.","for our own small, beautiful world.","for every time you curled up beside me.","for the home we found in each other.","for all your playful little surprises.","for a love I will always carry.","for our quiet evenings together.","for you, wherever the stars may lead.","for the happiness of knowing you.","for the memories still growing here.","for the naps we never wanted to end.","for the softest part of my life.","for the light in every memory.","for my companion in every season."];function S_(r){return M_[r]||`${Ba[(r-32)%Ba.length]} ${Jl[Math.floor((r-32)/Ba.length)%Jl.length]}`}const Ql=["Mia","sunbeam.sophie","Oliver","Luna & Me","Maple","Theo","littlecloud","Amelia","Nora","peachypaws","Leo","Willow","Hazel","moonmilk","Eli","Juniper","softestdays","Isla","Charlie","stargazer.jo","Poppy","Arlo","Lily","mossandtea","Finn","Cleo","Emmy","Rowan","honeytoast","Jules","Kit","Wren"];function T_(r){return Ql[r%Ql.length]}const ec=[["mentha","love❤️"],["maya","see u among the star"],["leah","🩵"],["Lisa","have a good trip"],["Mentha","Always loved, in every little universe."],["Mentha","A little flower, an endless love."],["Mia","have a nice trip"],["Mentha","There is always a little light here for you."],["kikiiloveyou","always."]],E_=Array.from({length:29},(r,e)=>({id:e,name:e<20?T_(e):ec[e-20][0],message:e<20?S_(e):ec[e-20][1],authored:!0})),tc=29;function b_(r){let e=0;for(let t=0;t<12;t++){const n=1.65+t*.65,i=24+t*12;for(let s=0;s<i;s++){const a=s/i*Math.PI*2+.48,o=Math.sin(a)*n,l=Math.cos(a)*n;if(!(Math.abs(o)<1.02&&l>-.15||Math.hypot(o-3.4,l+1.6)<.85||n>6.4)&&e++===r)return new B(o,0,l)}}return new B(-2,0,-2)}function w_({scene:r,camera:e,onPlant:t,positionFor:n=b_,plantDelay:i=0,growthDuration:s=1500,refinedGrowth:a=!1,palette:o=null,onSelect:l=()=>{}}){let c=!1;const h={value:0},u={value:0},d={value:0},m=E_.map(G=>({...G}));let v=null,x=null,g=!0;const p=new sn({vertexColors:!0,roughness:.85});p.userData.isMemorialFlower=!0;function b(G,te){const ce=new Ae(te),he=[];for(let Se=0;Se<G.attributes.position.count;Se++)he.push(ce.r,ce.g,ce.b);return G.setAttribute("color",new pt(he,3)),G}p.onBeforeCompile=G=>{G.uniforms.uInsideOpacity=d,G.uniforms.uFlowerTime=h,G.uniforms.uFlowerWind=u,G.vertexShader=`uniform float uFlowerTime;
uniform float uFlowerWind;
varying float vFlowerGlow;
#ifdef USE_INSTANCING
attribute float instanceGlow;
#endif
`+G.vertexShader,G.vertexShader=G.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowerGlow=0.;
#ifdef USE_INSTANCING
vFlowerGlow=instanceGlow;
transformed.x+=uFlowerWind*sin(uFlowerTime*1.25+instanceMatrix[3].x*4.+instanceMatrix[3].z*3.)*position.y*position.y*.13;
#endif`),G.fragmentShader=`uniform float uInsideOpacity;
varying float vFlowerGlow;
`+G.fragmentShader,G.fragmentShader=G.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * (vFlowerGlow * .4 + uInsideOpacity * .20);`),G.fragmentShader=G.fragmentShader.replace("#include <alphahash_fragment>",`diffuseColor.a *= mix(1.,mix(.06,.46,smoothstep(.25,1.3,length(vViewPosition))),uInsideOpacity);
#include <alphahash_fragment>`)},p.customProgramCacheKey=()=>"flower-instance-emission-v2";const S=[],E=o||["#fff2cd","#bfd7ef","#edbdb4","#dbcfef","#f1d27e","#e9ece1"];for(let G=0;G<6;G++){const te=[];te.push(b(new Cn(.012,.018,.47,5).translate(0,.235,0),"#5c7652"));for(let he=0;he<3;he++){const Se=new si(1,7,5);Se.scale(.095,.022,.04),Se.rotateZ((he%2?1:-1)*.55),Se.translate((he%2?1:-1)*.06,.12+he*.09,0),te.push(b(Se,"#819261"))}for(let he=0;he<5+G%3;he++){const Se=he/(5+G%3)*Math.PI*2,Oe=new si(1,8,5);Oe.scale(.077,.025,.046),Oe.rotateY(-Se),Oe.translate(Math.cos(Se)*.061,.47,Math.sin(Se)*.061),te.push(b(Oe,E[G]))}te.push(b(new si(.032,8,6).translate(0,.485,0),"#cfaa56"));const ce=new xc(gg(te),p,tc);ce.geometry.setAttribute("instanceGlow",new Is(new Float32Array(tc),1)),ce.count=0,ce.frustumCulled=!1,ce.castShadow=!0,r.add(ce),S.push(ce)}const L=document.createElement("canvas");L.width=128,L.height=128;const R=L.getContext("2d");R.fillStyle="#ffffff",R.beginPath(),R.moveTo(64,116),R.bezierCurveTo(54,96,20,78,20,52),R.bezierCurveTo(20,27,39,12,64,12),R.bezierCurveTo(89,12,108,27,108,52),R.bezierCurveTo(108,78,74,96,64,116),R.closePath(),R.fill();const C=new Lr(L),F=new Map;let M=null;const T=S.map(()=>[]),N=new xt;function k(G=1){S.forEach((te,ce)=>{te.count=0,T[ce]=[]});for(const te of m){if(a&&v?.id===te.id)continue;const ce=n(te.id),he=te.id%6,Se=S[he];N.position.copy(ce),N.rotation.set(0,te.id*2.4,0);const Oe=v?.id===te.id?a?1e-4:Math.max(.001,G):1;if(N.scale.setScalar(Oe*(.95+te.id%4*.1)),N.updateMatrix(),Se.setMatrixAt(Se.count++,N.matrix),T[he].push(te),te.message&&!F.has(te.id)){const qe=new Wu(new gc({map:C,transparent:!0,depthWrite:!1,opacity:.82}));qe.userData.record=te,qe.scale.set(.2,.2,1),r.add(qe),F.set(te.id,qe)}}S.forEach(te=>{te.instanceMatrix.needsUpdate=!0,te.computeBoundingSphere()})}k();const X=new Ws,K=new fn({color:E[0],side:1});K.onBeforeCompile=G=>{G.vertexShader=G.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normal * .012;`)};const $=new St(S[0].geometry,K);$.visible=!1,r.add($);function V(){$.visible=!!M,M&&(K.color.set(E[M.id%6]),$.geometry=S[M.id%6].geometry,$.position.copy(n(M.id)),$.rotation.set(0,M.id*2.4,0),$.scale.setScalar(.95+M.id%4*.1),$.updateMatrixWorld())}function ae(G){r.updateWorldMatrix(!0,!0),e.updateMatrixWorld(),X.setFromCamera(G,e);const te=X.intersectObjects(S,!1)[0];if(M=te?T[S.indexOf(te.object)][te.instanceId]:null,!M){let ce=32;const he=new B;for(const Se of m){if(he.copy(n(Se.id)),he.y+=.485*(.95+Se.id%4*.1),r.localToWorld(he),he.project(e),he.z<-1||he.z>1)continue;const Oe=Math.hypot((he.x-G.x)*innerWidth/2,(he.y-G.y)*innerHeight/2);Oe<ce&&(ce=Oe,M=Se)}}return V(),M}return{getOutline:()=>(V(),M?$:null),getHoverColor:()=>E[M?.id%6||0],hoverAt:ae,clearHover:()=>{M=null,$.visible=!1},getHovered:()=>M,clearSelection:()=>{x=null,M=null,$.visible=!1},getRecords:()=>m.map(G=>({...G})),setImmersive:G=>{d.value=Number(G),c=G>.5;const te=G>.001;p.transparent!==te&&(p.transparent=te,p.depthWrite=!te,p.needsUpdate=!0)},setDetail:G=>{g=G},get blocked(){return!1},update(G,te){h.value=G*.001,u.value=c&&!matchMedia("(prefers-reduced-motion: reduce)").matches?1:0;const ce=M||x;S.forEach((he,Se)=>{const Oe=he.geometry.attributes.instanceGlow;if(Oe.array.fill(0),c&&T[Se].forEach((qe,Ye)=>Oe.setX(Ye,.12+.5*Math.pow(Math.max(0,Math.sin(G*7e-4+qe.id*2.399)),6))),ce&&g){const qe=T[Se].findIndex(Ye=>Ye.id===ce.id);qe>=0&&Oe.setX(qe,1)}Oe.needsUpdate=!0});for(const[he,Se]of F){const Oe=n(he),qe=ce?.id===he;Se.visible=!1;const Ye=matchMedia("(prefers-reduced-motion: reduce)").matches?0:Math.sin(G*.0018+he)*.025;Se.position.set(Oe.x,Oe.y+.78+he%4*.047+Ye,Oe.z),Se.material.opacity=qe?1:.94,Se.material.color.set(E[he%6]),qe&&Se.material.color.lerp(new Ae("#ffffff"),.12),Se.scale.setScalar(qe?.25:.2)}}}}function A_(r){const e=(R,C=.7,F=0)=>new sn({color:R,roughness:C,metalness:F}),t=e("#e1d2b8");e("#7b8c78");const n=e("#b59866",.3,.65),i=e("#a76d58");function s(R,C,F,M=r){const T=new St(R,C);return T.position.set(...F),T.castShadow=T.receiveShadow=!0,M.add(T),T}function a(R,C,F,M,T,N){const k=new Yt;k.userData.memoryKey=`photo-${R}`,k.position.set(C,.59,F),k.rotation.set(-.1,N,.025*(R%2?1:-1)),r.add(k),s(new wt(M,T,.12),e(R%2?"#746555":"#ba9f76"),[0,T/2,0],k),s(new wt(M-.1,T-.1,.035),t,[0,T/2,.078],k);const X=new or().load(`./assets/photos/memory-${[2,4,6].includes(R)?"candid":"varied"}-${R}.webp`,K=>{const $=K.image.width/K.image.height,V=(M-.27)/(T-.27);$>V?(K.repeat.x=V/$,K.offset.x=(1-K.repeat.x)/2):(K.repeat.y=$/V,K.offset.y=(1-K.repeat.y)/2),K.needsUpdate=!0});return X.colorSpace=Mt,s(new An(M-.27,T-.27),new sn({map:X,roughness:.95}),[0,T/2,.1],k),s(new wt(M*.65,.08,.6),e("#665649"),[0,.035,-.14],k),k}a(2,-6.3,-3,1.8,2.9,.08),a(4,-3.15,.65,1.85,1.12,-.08),a(5,3.6,-1.4,1.75,1.85,-.1),a(6,5.35,-2.9,1.7,2.5,-.12);const o=document.createElement("canvas");o.width=o.height=128;const l=o.getContext("2d");l.fillStyle="#888",l.fillRect(0,0,128,128),l.strokeStyle="#aaa",l.lineWidth=1;for(let R=0;R<128;R+=4)l.beginPath(),l.moveTo(R,0),l.lineTo(R,128),l.moveTo(0,R),l.lineTo(128,R),l.stroke();const c=new Lr(o);c.wrapS=c.wrapT=1e3,c.repeat.set(8,8);const h=e("#829080");h.bumpMap=c,h.bumpScale=.015;const u=new Yt;u.userData.memoryKey="album",u.position.set(-5,.58,2.1),u.rotation.y=.2,r.add(u),s(new wt(2.12,.045,1.58),h,[0,.0225,0],u),s(new wt(1.98,.145,1.46),t,[.035,.1175,0],u),s(new wt(2.12,.045,1.58),h,[0,.2125,0],u),s(new wt(.085,.235,1.58),h,[-1.0175,.1175,0],u);for(let R=0;R<7;R++)s(new wt(1.97,.003,.008),e("#b9ac96"),[.035,.059+R*.019,.734],u);const d=s(new Yi(.43,.055,8,56),i,[-5,.895,2.32]);d.userData.memoryKey="collar",d.rotation.x=Math.PI/2,d.scale.x=1.23;const m=s(new Cn(.14,.14,.035,24),n,[-4.7,.75,2.92]);m.userData.memoryKey="collar",m.rotation.x=Math.PI/2,s(new Yi(.055,.012,6,16),n,[-4.7,.86,2.9]),s(new wt(.21,.09,.1),n,[-5.43,.895,2.47]);const v=document.createElement("canvas");v.width=v.height=128;const x=v.getContext("2d"),g=x.createRadialGradient(64,64,6,64,64,62);g.addColorStop(0,"rgba(24,18,14,.48)"),g.addColorStop(.5,"rgba(24,18,14,.22)"),g.addColorStop(1,"rgba(24,18,14,0)"),x.fillStyle=g,x.fillRect(0,0,128,128);const p=new Lr(v);function b(R,C,F,M){const T=s(new An(F,M),new fn({map:p,transparent:!0,depthWrite:!1,opacity:.65}),[R,.582,C]);T.rotation.x=-Math.PI/2,T.castShadow=T.receiveShadow=!1}const S=new Yt;S.userData.memoryKey="mug",S.position.set(5.9,.6,1.15),S.scale.setScalar(1.45),r.add(S);const E=[new Me(0,0),new Me(.36,0),new Me(.4,.08),new Me(.42,.67),new Me(.39,.71),new Me(.35,.67),new Me(.32,.09),new Me(0,.09)];s(new uo(E,48),t,[0,0,0],S),s(new Yi(.24,.065,10,32),t,[.48,.36,0],S);for(const R of[-.25,.25])s(new co(.1,.18,3),t,[R,.75,0],S);const L=s(new Si(.34,40),e("#71563a",.25),[0,.55,0],S);return L.rotation.x=-Math.PI/2,{async loadBelongings(R=()=>{}){await Promise.all([["bed",4.8,-5.8,-.45,.15],["water-bowl",1.45,3.05,-.45,0],["fish-toy",1.25,-2.05,1.65,.65],["yarn-ball",.85,-5.6,2.75,0],["mouse-toy",.85,3.6,3.45,-.6]].map(async([C,F,M,T,N])=>{const{scene:k}=await new ja().loadAsync("./assets/props/meshy-"+C+".glb");k.rotation.y=N,C==="fish-toy"&&(k.rotation.z=1.18,k.rotation.y=1.15),k.updateMatrixWorld(!0);const X=new wn().setFromObject(k),K=X.getSize(new B),$=X.getCenter(new B),V=F/Math.max(K.x,K.z),ae=new Yt;if(ae.userData.memoryKey=C,ae.add(k),ae.scale.setScalar(V),ae.position.set(M-$.x*V,.58-X.min.y*V-(C==="fish-toy"?.11:["mouse-toy","yarn-ball"].includes(C)?.018:0),T-$.z*V),k.traverse(G=>{G.isMesh&&(G.castShadow=G.receiveShadow=!0)}),r.add(ae),b(M,T,K.x*V*1.12,K.z*V*1.12),C==="water-bowl"){const G=s(new Si(F*.33,48),new pn({color:"#91b8ad",metalness:.15,roughness:.12,transparent:!0,opacity:.75}),[M,.595+K.y*V*.65,T]);G.userData.memoryKey="water-bowl",G.rotation.x=-Math.PI/2}R()}))},async loadMug(R){const{scene:C}=await new ja().loadAsync(R),F=new wn().setFromObject(C),M=F.getSize(new B),T=F.getCenter(new B),N=1.45/Math.max(M.x,M.y,M.z);C.userData.memoryKey="mug",C.scale.setScalar(N),C.position.set(5.9-T.x*N,.58-F.min.y*N,1.15-T.z*N),C.traverse(k=>{k.isMesh&&(k.castShadow=k.receiveShadow=!0)}),r.add(C),S.visible=!1}}}function R_(r,e,t){const n=new Yt;r.add(n),n.visible=!1;const i=new or().load("./assets/sky/milky-way-eso.webp");i.colorSpace=Mt;const s=new St(new si(38,64,40),new fn({map:i,side:1,depthWrite:!1,transparent:!0,opacity:0,color:"#e1e3f2"}));s.renderOrder=-1e3,s.rotation.set(.3,Math.PI/2,.32),n.add(s);const a=document.createElement("a");a.href="https://www.eso.org/public/images/eso0932a/",a.textContent="Milky Way: ESO/S. Brunier · CC BY 4.0",a.target="_blank",a.style.cssText="position:fixed;left:28px;top:28px;font-size:11px;color:#c4c5d1;z-index:6",a.hidden=!0,document.body.append(a);let o=935;const l=()=>(o=o*1664525+1013904223>>>0,o/4294967296),c=[],h=[];for(let C=0;C<2600;C++){const F=l()*Math.PI*2,M=l()*2-1,T=Math.sqrt(1-M*M);c.push(Math.cos(F)*T*30,M*30,Math.sin(F)*T*30);const N=new Ae().setHSL(.1+l()*.58,.16,.55+l()*.4);h.push(N.r,N.g,N.b)}const u=new Lt;u.setAttribute("position",new pt(c,3)),u.setAttribute("color",new pt(h,3));const d=new lo(u,new zs({size:.035,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,sizeAttenuation:!0}));d.visible=!1,n.add(d),n.add(new wc("#ffe8cd","#15151e",.1));for(const[C,F,M,T,N]of[[-.4,2.65,1.9,"#ffdbac",12],[.55,2.3,1.65,"#ffe4ba",2.5]]){const k=new Hs(T,N,7,.43,1,2);k.position.set(C,F,M),k.target.position.set(-.16,1.62,.18),n.add(k,k.target)}const m=new St(new Si(12,96),new sn({color:"#10121d",roughness:.95}));m.renderOrder=-999,m.rotation.x=-Math.PI/2,m.position.y=.93,n.add(m);const v={value:0};e.traverse(C=>{if(!(!C.isMesh||C===t))for(const F of Array.isArray(C.material)?C.material:[C.material]){if(F.userData.isMemorialFlower||F.userData.interiorDim)return;F.userData.interiorDim=!0;const M=F.onBeforeCompile,T=F.customProgramCacheKey();F.onBeforeCompile=(N,k)=>{M.call(F,N,k),N.uniforms.uInteriorDim=v,N.vertexShader=`varying vec3 vInteriorPosition;
`+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vInteriorPosition=(modelMatrix*vec4(transformed,1.)).xyz;`),N.fragmentShader=`uniform float uInteriorDim;varying vec3 vInteriorPosition;
`+N.fragmentShader,N.fragmentShader=N.fragmentShader.replace("#include <opaque_fragment>",`float heightLight=smoothstep(1.06,1.65,vInteriorPosition.y);
    float frontLight=smoothstep(-.55,.25,vInteriorPosition.z);
    float edgeLight=1.-smoothstep(.42,.95,abs(vInteriorPosition.x));
    outgoingLight *= mix(1.,mix(.10,1.,heightLight*mix(.3,1.,frontLight)*mix(.4,1.,edgeLight)),uInteriorDim);
    #include <opaque_fragment>`)},F.customProgramCacheKey=()=>T+"-interior-focus",F.needsUpdate=!0}});const x=new Map,g=new Map,p=new Map;let b=0,S=r.fog;const E=[];n.traverse(C=>{C.isLight&&E.push([C,C.intensity])});function L(){for(const C of r.children)C===e||C===n||x.has(C)||(x.set(C,C.visible),C.traverse(F=>{if(F.isLight&&!p.has(F)&&p.set(F,F.intensity),!!F.isMesh)for(const M of Array.isArray(F.material)?F.material:[F.material])g.has(M)||g.set(M,{opacity:M.opacity,transparent:M.transparent,depthWrite:M.depthWrite})}))}function R(C){b=ft.clamp(C,0,1),v.value=b,L(),document.body.classList.toggle("inside-globe",b>.5),a.hidden=b<.8,n.visible=b>0,r.fog=b>.05?null:S;for(const[M,T]of x)M.visible=T&&b<.999;for(const[M,T]of g){const N=b>.001||T.transparent;M.transparent!==N&&(M.transparent=N,M.needsUpdate=!0),M.opacity=T.opacity*(1-b),M.depthWrite=T.depthWrite}const F=ft.smoothstep(b,0,.12);t.visible=F<.999,t.material.opacity=1-F,t.material.transmission=1,s.material.opacity=b,m.material.transparent=!0,m.material.depthWrite=!1,m.material.opacity=b;for(const[M,T]of E)M.intensity=T*b}return{set(C){R(C?1:0)},blend:R,update(){if(b>0){for(const[C,F]of p){const M=C.parent===r;C.intensity=(M?C.intensity:F)*(1-b)}r.environmentIntensity=ft.lerp(r.environmentIntensity,.035,b)}},get amount(){return b},get active(){return b>.5}}}function C_(r,e,{hemi:t,key:n,fill:i,lamp:s,glassMaterial:a,bloom:o,rainUniforms:l}){const c={value:0},h=new WeakSet,u=new Hs("#ffe1b0",0,14,.5,.8,2);u.position.set(-2.4,6.2,3.4),u.target.position.set(0,1.55,0),r.add(u,u.target);function d(v){for(;v;){if(v===e)return!0;v=v.parent}return!1}function m(){r.traverse(v=>{if(!v.isMesh||d(v)||h.has(v))return;h.add(v);const x=g=>{if(g.isShaderMaterial)return g;const p=g.clone(),b=g.onBeforeCompile;return g.defines&&(p.defines={...g.defines}),p.onBeforeCompile=(S,E)=>{b.call(p,S,E),S.uniforms.uNear=c,S.uniforms.uRainTime=l.uTime,S.uniforms.uRainAmount=l.uAmount,S.vertexShader=`varying vec3 vRainWorld;
`+S.vertexShader,S.vertexShader=S.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vRainWorld = (modelMatrix * vec4(transformed, 1.)).xyz;`),S.fragmentShader=`varying vec3 vRainWorld;
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
 `+S.fragmentShader,S.fragmentShader=`uniform float uNear;
`+S.fragmentShader,S.fragmentShader=S.fragmentShader.replace("#include <opaque_fragment>",`outgoingLight *= mix(1., .30, uNear) * (1. - rainShade(vRainWorld));
#include <opaque_fragment>`)},p.customProgramCacheKey=()=>g.customProgramCacheKey()+"-near-dim-rain-v2",p};v.material=Array.isArray(v.material)?v.material.map(x):x(v.material)})}return m(),{register:m,update(v,x=0){const g=ft.smoothstep(v,0,1);return c.value=g,t.color.set("#e5dccb").lerp(new Ae("#c4d7e4"),g),i.color.set("#e6dfcf").lerp(new Ae("#cbdce8"),g),n.color.set("#ffe1b4").lerp(new Ae("#d1e1ef"),g),t.intensity=ft.lerp(.35,.65,g),i.intensity=ft.lerp(.1,.38,g),n.intensity=ft.lerp(95,65,g),s.intensity=0,r.environmentIntensity=ft.lerp(.13,.07,g),a.envMapIntensity=ft.lerp(.42,.1,g),a.specularIntensity=.65,a.clearcoat=.65,a.emissive.set("#ffad63"),a.emissiveIntensity=x*.065,u.intensity=5*g,o.strength=ft.lerp(.19,.33,g)+x*.08,document.body.classList.remove("stage-active"),g}}}function P_(){const r=document.createElement("button");r.className="sound-toggle",r.textContent="♫ Enable sound",r.setAttribute("aria-label","Enable ambient sound"),document.body.append(r);const e=new Audio("./assets/audio/kiki-theme-loop.mp3");e.loop=!0,e.preload="metadata";let t,n,i,s,a,o,l=!1,c=!1,h=!1,u="desk",d=0;const m=Promise.all(["./assets/audio/woodland-rain.mp3"].map(async p=>{const b=await fetch(p);if(!b.ok)throw new Error("Audio unavailable");return b.arrayBuffer()}));function v(p,b){const S=Math.min(b,p.duration/4),E=Math.floor(S*p.sampleRate),L=p.length-E,R=t.createBuffer(p.numberOfChannels,L,p.sampleRate);for(let C=0;C<p.numberOfChannels;C++){const F=p.getChannelData(C),M=R.getChannelData(C);M.set(F.subarray(E));for(let T=0;T<E;T++){const N=T/E;M[L-E+T]=F[p.length-E+T]*(1-N)+F[T]*N}}return R}function x(){if(!l)return;const p=t.currentTime;n.gain.setTargetAtTime(c?0:.7,p,.4),o.gain.setTargetAtTime(u==="inside"?.39:u==="focus"?.24:.32,p,1.2),a.gain.setTargetAtTime(u==="focus"?.65:u==="desk"?d*.5:0,p,.8),i.gain.setTargetAtTime(u==="inside"?6:0,p,1.4),s.gain.setTargetAtTime(u==="inside"?.48:.14,p,1.5),r.dataset.mode=u,r.dataset.playing=String(!c),r.textContent=c?"♫ Sound off":"♫ Sound on",r.setAttribute("aria-label",c?"Enable ambient sound":"Mute ambient sound"),r.setAttribute("aria-pressed",String(!c))}async function g(){if(!(l||h)){h=!0,r.textContent="♫ Loading…";try{t=new AudioContext,await t.resume(),n=t.createGain(),n.gain.value=0;const p=t.createDynamicsCompressor();p.threshold.value=-14,p.ratio.value=3,n.connect(p).connect(t.destination),i=t.createBiquadFilter(),i.type="lowshelf",i.frequency.value=240,i.connect(n),o=t.createGain(),o.gain.value=.32,o.connect(i);const b=t.createConvolver(),S=t.createBuffer(2,t.sampleRate*5,t.sampleRate);for(let C=0;C<2;C++){const F=S.getChannelData(C);for(let M=0;M<F.length;M++)F[M]=(Math.random()*2-1)*Math.pow(1-M/F.length,3)*.35}b.buffer=S,s=t.createGain(),s.gain.value=.14,o.connect(b).connect(s).connect(n),a=t.createGain(),a.gain.value=0,a.connect(n);const E=await Promise.all((await m).map(C=>t.decodeAudioData(C.slice(0))));t.createMediaElementSource(e).connect(o);const R=t.createBufferSource();R.buffer=v(E[0],1),R.loop=!0,R.connect(a),R.start(),await e.play(),l=!0,x()}catch{r.textContent="♫ Retry sound",r.setAttribute("aria-label","Retry ambient sound")}finally{h=!1}}}return r.onclick=()=>{l?(c=!c,c||t.resume(),x()):g()},document.querySelector("canvas").addEventListener("pointerdown",()=>{l||g()}),document.addEventListener("visibilitychange",()=>{l&&(document.hidden?t.suspend():c||t.resume())}),{setHoverRain(p){const b=Math.max(0,Math.min(1,p));Math.abs(b-d)<.005||(d=b,l&&a.gain.setTargetAtTime(u==="focus"?.65:u==="desk"?d*.5:0,t.currentTime,.65))},setMode(p){p!==u&&(u=p,x())}}}function D_(r){const t=new Float32Array(1680),n=[];let i=8721;const s=()=>(i=i*1664525+1013904223>>>0,i/4294967296);for(let d=0;d<560;d++)n.push([s()*Math.PI*2,Math.sqrt(s())*1.9,s(),.14+s()*.18]);const a=new Lt;a.setAttribute("position",new Bt(t,3));const o=document.createElement("canvas");o.width=o.height=32;const l=o.getContext("2d"),c=l.createRadialGradient(16,16,0,16,16,15);c.addColorStop(0,"#fff"),c.addColorStop(.5,"#ffffffdd"),c.addColorStop(1,"#ffffff00"),l.fillStyle=c,l.fillRect(0,0,32,32);const h=new zs({color:"#fff3db",map:new Lr(o),size:.038,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0}),u=new lo(a,h);return u.renderOrder=11,u.frustumCulled=!1,u.visible=!1,r.add(u),{update(d,m){if(u.visible=d>=1.1&&d<9.5&&!m,!!u.visible){h.opacity=ft.smoothstep(d,1.1,2)*(1-ft.smoothstep(d,6.5,9.5))*.9;for(let v=0;v<560;v++){const[x,g,p,b]=n[v],S=(p+(d-1.1)*b)%1,E=4.95-S*3.6,L=Math.sqrt(Math.max(.1,2.5**2-(E-2.95)**2)),R=Math.min(g,L*.88);t[v*3]=Math.sin(x)*R+Math.sin(d*.7+v)*.055,t[v*3+1]=E,t[v*3+2]=Math.cos(x)*R+Math.cos(d*.6+v)*.05}a.attributes.position.needsUpdate=!0}}}}function I_({scene:r,camera:e,cat:t,renderer:n,offerings:i,deskUI:s,navigate:a,rotate:o,onPlant:l}){const c=document.createElement("section");c.className="globe-actions",c.hidden=!0,c.innerHTML=`
 <div class="scene-return"><button data-view="focus">Back to the table ↗</button><button data-view="desk">Back to Kiki’s corner ↗</button></div>
 <button class="cat-invitation">Meet Kiki among the stars <span>↗</span></button>`,document.body.append(c);const h=c.querySelector(".cat-invitation"),u=c.querySelector('[data-view="focus"]');c.querySelectorAll("[data-view]").forEach(b=>b.onclick=()=>a(b.dataset.view)),h.onclick=()=>a("inside");const d=new Ws,m=new Me;let v=!1,x=!1,g=null;function p(b){if(!v)return!1;const S=n.domElement.getBoundingClientRect();return m.set((b.clientX-S.left)/S.width*2-1,-(b.clientY-S.top)/S.height*2+1),t.updateWorldMatrix(!0,!0),e.updateMatrixWorld(),d.setFromCamera(m,e),d.intersectObject(t,!0).length>0&&!i.getHovered()}return n.domElement.addEventListener("pointermove",b=>{x=b.buttons?!1:p(b)}),n.domElement.addEventListener("pointerleave",()=>x=!1),n.domElement.addEventListener("pointerdown",b=>{g={x:b.clientX,y:b.clientY,cat:p(b)}}),n.domElement.addEventListener("pointerup",b=>{g?.cat&&v&&Math.hypot(b.clientX-g.x,b.clientY-g.y)<6&&a("inside"),g=null}),{get catHovered(){return v&&x},get blocked(){return!1},update(b,S,E=!1){if((!b||E)&&((v||S||E)&&s.setFocusOutline(null),x=!1),v=b&&!E,c.classList.toggle("ritual-running",E),c.hidden=!b&&!S,u.hidden=!S,h.hidden=!b||!x,b||(x=!1),b&&!E){const L=i.getOutline();s.setFocusOutline(!L&&x?t:null,"#c6e79c"),n.domElement.style.cursor=x?"pointer":""}b||(h.hidden=!0)}}}class ri extends Ti{constructor(e,t,n,i){super(),this.renderScene=t,this.renderCamera=n,this.selectedObjects=i!==void 0?i:[],this.visibleEdgeColor=new Ae(1,1,1),this.hiddenEdgeColor=new Ae(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.patternTexture=null,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256);const s=Math.round(this.resolution.x/this.downSampleRatio),a=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new Ht(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new Tc,this.depthMaterial.side=2,this.depthMaterial.depthPacking=3201,this.depthMaterial.blending=0,this.prepareMaskMaterial=this._getPrepareMaskMaterial(),this.prepareMaskMaterial.side=2,this.prepareMaskMaterial.fragmentShader=h(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new Ht(this.resolution.x,this.resolution.y,{type:1016}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new Ht(s,a,{type:1016}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new Ht(s,a,{type:1016}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new Ht(Math.round(s/2),Math.round(a/2),{type:1016}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this._getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new Ht(s,a,{type:1016}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new Ht(Math.round(s/2),Math.round(a/2),{type:1016}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const o=4,l=4;this.separableBlurMaterial1=this._getSeparableBlurMaterial(o),this.separableBlurMaterial1.uniforms.texSize.value.set(s,a),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this._getSeparableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(s/2),Math.round(a/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this._getOverlayMaterial();const c=Rr;this.copyUniforms=Ji.clone(c.uniforms),this.materialCopy=new Pt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ae,this.oldClearAlpha=1,this._fsQuad=new qs(null),this.tempPulseColor1=new Ae,this.tempPulseColor2=new Ae,this.textureMatrix=new $e;function h(u,d){const m=d.isPerspectiveCamera?"perspective":"orthographic";return u.replace(/DEPTH_TO_VIEW_Z/g,m+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this._fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let n=Math.round(e/this.downSampleRatio),i=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(n,i),this.renderTargetBlurBuffer1.setSize(n,i),this.renderTargetEdgeBuffer1.setSize(n,i),this.separableBlurMaterial1.uniforms.texSize.value.set(n,i),n=Math.round(n/2),i=Math.round(i/2),this.renderTargetBlurBuffer2.setSize(n,i),this.renderTargetEdgeBuffer2.setSize(n,i),this.separableBlurMaterial2.uniforms.texSize.value.set(n,i)}render(e,t,n,i,s){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,s&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this._updateSelectionCache(),this._changeVisibilityOfSelectedObjects(!1);const o=this.renderScene.background,l=this.renderScene.overrideMaterial;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this._updateTextureMatrix(),this._changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=o,this.renderScene.overrideMaterial=l,this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this._fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const c=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(c),this.tempPulseColor2.multiplyScalar(c)}this._fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=ri.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=ri.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=ri.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=ri.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,s&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(n),this._fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}this.renderToScreen&&(this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=n.texture,e.setRenderTarget(null),this._fsQuad.render(e))}_updateSelectionCache(){const e=this._selectionCache;function t(n){n.isMesh&&e.add(n)}e.clear();for(let n=0;n<this.selectedObjects.length;n++)this.selectedObjects[n].traverse(t)}_changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;for(const n of this._selectionCache)e===!0?n.visible=t.get(n):(t.set(n,n.visible),n.visible=e)}_changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,n=this._selectionCache;function i(s){if(s.isPoints||s.isLine||s.isLine2)e===!0?s.visible=t.get(s):(t.set(s,s.visible),s.visible=e);else if((s.isMesh||s.isSprite)&&!n.has(s)){const a=s.visible;(e===!1||t.get(s)===!0)&&(s.visible=e),t.set(s,a)}}this.renderScene.traverse(i)}_updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}_getPrepareMaskMaterial(){return new Pt({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new Me(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <batching_pars_vertex>
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

				}`})}_getEdgeDetectionMaterial(){return new Pt({uniforms:{maskTexture:{value:null},texSize:{value:new Me(.5,.5)},visibleEdgeColor:{value:new B(1,1,1)},hiddenEdgeColor:{value:new B(1,1,1)}},vertexShader:`varying vec2 vUv;

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
				}`})}_getSeparableBlurMaterial(e){return new Pt({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

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
				}`})}_getOverlayMaterial(){return new Pt({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

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
				}`,blending:2,depthTest:!1,depthWrite:!1,transparent:!0})}}ri.BlurDirectionX=new Me(1,0);ri.BlurDirectionY=new Me(0,1);const ka={globe:["A little world, all hers","Step into Kiki’s inner world."],bed:["Her sunny little nest","Fourteen years of afternoon naps. She always left one paw hanging over the edge."],"water-bowl":["The quiet water bowl","Fresh water every morning. Kiki still preferred a sip from your cup."],"fish-toy":["The fish she brought you","A tiny gift left beside your slippers, usually just before breakfast."],"yarn-ball":["One very patient ball of yarn","She never chased it far. Unravelling it beside you was the whole adventure."],"mouse-toy":["Her midnight mouse","By day, perfectly innocent. At two in the morning, the reason you woke up smiling."],mug:["Your cup, her curiosity","Tea for you. A curious nose over the rim for Kiki. Neither of you minded sharing the moment."],collar:["Her first collar","Soft rose leather and a little brass tag. She grew into it, then made every room feel like home."],album:["The little green album","Fourteen years of blurry paws, sunlit whiskers, and ordinary days worth keeping."],notebook:["Things you never wanted to forget","Her tiny chirp at the window. The warm weight beside your feet. You wrote it all down."],"photo-2":["The blanket nap","A cream-white domestic longhair with a gift for finding the warmest patch in every room."],"photo-4":["Her garden patrol","She took the same slow route through the daisies, stopping to investigate every leaf."],"photo-5":["Absolutely no thoughts","A close-up, a little pink tongue, and your favourite accidental photograph."],"photo-6":["Five more minutes of play","Even at fourteen, a ribbon could turn the gentle queen of naps into a kitten again."],"photo-3":["The blue-hour companion","When the room grew quiet, Kiki would settle nearby. Being together was enough."]};function L_({scene:r,camera:e,composer:t,globe:n,glass:i,renderer:s,backdrops:a,onEnter:o}){const l=new ri(new Me(innerWidth,innerHeight),r,e);l.visibleEdgeColor.set("#d6eca0"),l.hiddenEdgeColor.set("#000000"),l.edgeStrength=3,l.edgeGlow=.7,l.edgeThickness=1.5,l.pulsePeriod=0,t.insertPass(l,1);const c=document.createElement("h1");c.className="desk-title",c.textContent="Kiki’s Secret Corner",document.body.append(c);const h=document.createElement("p");h.className="desk-dates",h.textContent="May 2012 — August 2026",document.body.append(h);const u=document.createElement("div");u.className="desk-memory",u.setAttribute("role","status"),u.setAttribute("aria-live","polite"),u.innerHTML='<span class="desk-memory-name"></span><p></p>',document.body.append(u);const d=u.querySelector("span"),m=u.querySelector("p"),v={value:0},x=new St(i.geometry,new Pt({transparent:!0,depthWrite:!1,blending:2,uniforms:{uGlow:v},vertexShader:"varying vec3 n;varying vec3 v;void main(){vec4 p=modelViewMatrix*vec4(position,1.);n=normalize(normalMatrix*normal);v=normalize(-p.xyz);gl_Position=projectionMatrix*p;}",fragmentShader:"uniform float uGlow;varying vec3 n;varying vec3 v;void main(){float facing=clamp(abs(dot(normalize(n),normalize(v))),0.,1.);float rim=pow(1.-facing,2.5);gl_FragColor=vec4(.76,.94,.48,uGlow*(.018+.28*rim));}"}));x.position.copy(i.position),x.scale.setScalar(1.006),x.renderOrder=13,n.add(x);const g=new fo("#d9edac",0,5,2);g.position.set(0,2.2,1.1),n.add(g);const p=new Ws,b=new Me,S=new Rn,E=new B,L=new B;let R=null,C=!1,F=0;function M(){R=null,l.selectedObjects=[],u.classList.remove("visible"),s.domElement.style.cursor=""}function T(k){if(!C)return null;const X=s.domElement.getBoundingClientRect();b.set((k.clientX-X.left)/X.width*2-1,-(k.clientY-X.top)/X.height*2+1),r.updateMatrixWorld(!0),e.updateMatrixWorld(),p.setFromCamera(b,e);const K=r.children.filter(te=>te.visible&&te.userData.memoryKey),$=p.intersectObjects(K,!0).find(te=>te.object.visible);let V=$?.object;for(;V&&!V.userData.memoryKey;)V=V.parent;n.localToWorld(E.copy(i.position)),S.set(E,2.65*.54*1.08),p.ray.intersectSphere(S,L)&&(!$||e.position.distanceTo(L)<$.distance)&&(V=n);const G=V?.userData.memoryKey;return!G||!ka[G]?(M(),null):(R!==G&&(R=G,u.classList.toggle("globe-invitation",G==="globe"),d.textContent=G==="globe"?"":ka[G][0],m.textContent=ka[G][1],u.classList.add("visible")),l.selectedObjects=G==="globe"?[i]:[V],l.edgeStrength=G==="globe"?5:3,s.domElement.style.cursor=G==="globe"?"pointer":"default",G)}s.domElement.addEventListener("pointermove",k=>{k.buttons===0?T(k):M()}),s.domElement.addEventListener("pointerleave",M);let N=null;return s.domElement.addEventListener("pointerdown",k=>{N={x:k.clientX,y:k.clientY,id:T(k)}}),s.domElement.addEventListener("pointerup",k=>{N?.id==="globe"&&Math.hypot(k.clientX-N.x,k.clientY-N.y)<6&&C&&(M(),o()),N=null}),s.domElement.addEventListener("pointercancel",()=>{N=null,M()}),{setFocusOutline(k,X){l.selectedObjects=k?[k]:[],l.visibleEdgeColor.set(X||"#c3e890"),l.hiddenEdgeColor.set(X||"#c3e890"),l.edgeGlow=1.1,l.edgeStrength=4.5},update(k,X){return C&&!X&&M(),C=X,X&&(l.visibleEdgeColor.set("#d6eca0"),l.hiddenEdgeColor.set("#000000")),h.hidden=!X,c.classList.toggle("hidden",!X),c.setAttribute("aria-hidden",String(!X)),u.hidden=!X,F=ft.damp(F,X&&R==="globe"?1:0,2.4,k),v.value=F,x.visible=F>.001,g.intensity=F*1.3,a.setOvercast(F),F}}}function U_(r){const e=new Yt;r.add(e);const t=g=>new sn({color:g,roughness:.85});function n(g,p,b,S,E,L,R,C){const F=new St(new wt(p,b,S),t(C));return F.position.set(E,L,R),g.add(F),F}n(e,17,16,.3,-19.5,7,-5.9,"#5e5854"),n(e,12,16,.3,17,7,-5.9,"#5e5854"),n(e,40,5,.3,0,-1.9,-5.9,"#5e5854"),n(e,40,6,.3,0,19,-5.9,"#5e5854");for(const g of[-11,11])n(e,.16,15.45,.5,g,8.275,-5.6,"#463f36");for(const g of[.55,16])n(e,22.2,.16,.65,0,g,-5.5,"#726859");n(e,.12,15.45,.3,0,8.275,-5.45,"#927252"),n(e,22,.12,.3,0,8.45,-5.45,"#927252");const i=new or().load("./assets/sky/woodland-soft-v2.webp");i.colorSpace=Mt;const s=new fn({map:i,color:new Ae().setScalar(.86)}),a={value:0};s.onBeforeCompile=g=>{g.uniforms.uOvercast=a,g.fragmentShader=`uniform float uOvercast;
`+g.fragmentShader,g.fragmentShader=g.fragmentShader.replace("#include <opaque_fragment>",`float gray=dot(outgoingLight,vec3(.2126,.7152,.0722));outgoingLight=mix(outgoingLight,mix(outgoingLight,vec3(gray)*vec3(.91,.98,1.03),.48)*.58,uOvercast);
#include <opaque_fragment>`)};const o=new St(new An(22,15.45),s);o.position.set(0,8.275,-6.1),e.add(o);const l={value:0},c=[],h=[],u=new Ws;let d=null,m=-1/0,v=null;function x(g,p,b,S,E){const L=new St(new Cn(.035,.035,b-p+.6,16),t("#918575"));L.rotation.z=Math.PI/2,L.position.set((p+b)/2,S+.1,-5.02),g.add(L);for(const[R,C]of[[1,p],[-1,b]]){const M=S-E,T=new An(5.8,M,120,64),N=T.attributes.position;for(let V=0;V<N.count;V++){const ae=T.attributes.uv.getX(V),G=T.attributes.uv.getY(V);N.setZ(V,Math.sin(ae*Math.PI*24)*(.2+.06*(1-G))),N.setY(V,N.getY(V)+Math.cos(ae*Math.PI*24)*.025*(1-G))}T.computeVertexNormals();const k=new sn({color:"#f4ecda",roughness:1,transparent:!0,opacity:.62,side:2,depthWrite:!1,emissive:"#d8c9ab",emissiveIntensity:.1}),X={value:0},K={gust:X,velocity:0};h.push(K),k.onBeforeCompile=V=>{V.uniforms.uCurtainGust=X,V.uniforms.uCurtainTime=l,V.vertexShader=`uniform float uCurtainGust;
uniform float uCurtainTime;
`+V.vertexShader,V.vertexShader=V.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
    float hem=pow(1.-uv.y,1.35);
    float breeze=.72+.28*sin(uCurtainTime*.31);
    transformed.x+=hem*breeze*(sin(uCurtainTime*.65+uv.y*2.8+${R.toFixed(1)})*.32+sin(uCurtainTime*.39+uv.x*4.)*.10);
    transformed.z+=hem*(.22+sin(uCurtainTime*.57+uv.y*3.5+uv.x*2.+${R.toFixed(1)})*.46)*breeze;
    transformed.y+=hem*(.035+.035*sin(uCurtainTime*.7+uv.x*3.));
    float lift=pow(1.-uv.y,1.05);
    transformed.x+=lift*uCurtainGust*${R.toFixed(1)}*.48;
    transformed.z+=lift*uCurtainGust*(.8+.22*sin(uv.y*4.+uv.x*3.-uCurtainTime*1.4));
    transformed.y+=lift*abs(uCurtainGust)*.055;`),V.fragmentShader=V.fragmentShader.replace("#include <alphamap_fragment>",`#include <alphamap_fragment>
    float fold=.5+.5*cos(vUv.x*75.3982);
    diffuseColor.rgb*=mix(.70,1.10,fold);diffuseColor.a*=mix(.74,1.12,fold);
    float border=1.-smoothstep(.015,.035,vUv.y);diffuseColor.a=mix(diffuseColor.a,.76,border);`)},k.defines={USE_UV:""};const $=new St(T,k);$.position.set(C+R*2.1,(S+E)/2,-4.98),g.add($),c.push($);for(let V=0;V<9;V++){const ae=new St(new Yi(.052,.009,6,12),t("#ada292"));ae.position.set(C+R*2.1-5.8/2+V*5.8/8,S+.04,-5.02),g.add(ae)}}}return x(e,-10.1,10.1,16.07,.66),r.background.set("#9ab5c0"),{setOvercast(g){a.value=g},hover(g,p){e.updateWorldMatrix(!0,!0),p.updateMatrixWorld(),u.setFromCamera(g,p);const b=u.intersectObjects(c,!1)[0],S=b?.object,E=performance.now()/1e3;if(S&&(S!==v||E-m>.45)){const L=h[c.indexOf(S)];L.velocity=Math.min(1.7,L.velocity+1.1),m=E}v=S},clearHover(){v=null},update(g,p){const b=d===null?0:Math.min(.05,Math.max(0,g-d));d=g,l.value=p?0:g;for(const S of h){if(p){S.gust.value=0,S.velocity=0;continue}S.velocity+=(-3.8*S.gust.value-1.15*S.velocity)*b,S.gust.value+=S.velocity*b}}}}const Nn=matchMedia("(prefers-reduced-motion: reduce)").matches;document.body.classList.add("globe-mode");document.title="Kiki’s Secret Corner";const vo=document.querySelector("#loading-scene");vo.hidden=!1;vo.textContent="Opening your little world…";const Rt=new Vu;Rt.background=new Ae("#292b38");Rt.fog=new io("#34313b",.022);const lt=new Zt(32,innerWidth/innerHeight,.05,100),Dt=new fg({antialias:!0,powerPreference:"high-performance"});Dt.setPixelRatio(Math.min(devicePixelRatio,1.5));Dt.setSize(innerWidth,innerHeight);Dt.toneMapping=4;Dt.toneMappingExposure=1.05;Dt.shadowMap.enabled=!0;Dt.shadowMap.type=2;document.querySelector("#garden").append(Dt.domElement);const li=new __(Dt);li.addPass(new v_(Rt,lt));const Hc=new nr(new Me(innerWidth,innerHeight),.22,.8,.82),N_=new _o({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`
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
}`});li.addPass(N_);li.addPass(Hc);const Vc=new _o({uniforms:{tDiffuse:{value:null},uPixel:{value:new Me(1/innerWidth,1/innerHeight)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse;uniform vec2 uPixel;varying vec2 vUv;void main(){float edge=smoothstep(.24,.65,length((vUv-vec2(.5,.5))*vec2(1.,.8)));vec2 d=uPixel*edge*4.;vec4 c=texture2D(tDiffuse,vUv)*.28;c+=(texture2D(tDiffuse,vUv+vec2(d.x,0.))+texture2D(tDiffuse,vUv-vec2(d.x,0.))+texture2D(tDiffuse,vUv+vec2(0.,d.y))+texture2D(tDiffuse,vUv-vec2(0.,d.y)))*.12;c+=(texture2D(tDiffuse,vUv+d)+texture2D(tDiffuse,vUv-d)+texture2D(tDiffuse,vUv+vec2(d.x,-d.y))+texture2D(tDiffuse,vUv+vec2(-d.x,d.y)))*.06;gl_FragColor=c;}"});li.addPass(Vc);li.addPass(new y_);function Dn(r,e=.65,t=0){return new sn({color:r,roughness:e,metalness:t})}function It(r,e,t,n=Rt){const i=new St(r,e);return i.position.set(...t),i.castShadow=!0,i.receiveShadow=!0,n.add(i),i}function Ys(r,e,t){const n=document.createElement("canvas");n.width=r,n.height=e,t(n.getContext("2d"),r,e);const i=new Lr(n);return i.colorSpace=Mt,i}let za=713;function en(){return za=za*1664525+1013904223>>>0,za/4294967296}const Ns=Ys(1024,512,(r,e,t)=>{r.fillStyle="#785542",r.fillRect(0,0,e,t);for(let n=0;n<1400;n++){const i=en()*t;r.strokeStyle=`rgba(${en()>.5?"39,22,16":"212,162,115"},${.025+en()*.075})`,r.lineWidth=.4+en()*1.4,r.beginPath(),r.moveTo(0,i);for(let s=0;s<=e;s+=32)r.lineTo(s,i+Math.sin(s*.006+n)*3);r.stroke()}});Ns.wrapS=Ns.wrapT=1e3;Ns.repeat.set(2,2);It(new wt(16,.36,10),new sn({map:Ns,roughness:.52}),[0,.4,0]);const xo=Dn("#51392d",.72);It(new wt(15.8,1.6,.2),xo,[0,-.56,4.78]);for(const r of[-7.78,7.78])It(new wt(.2,1.6,9.5),xo,[r,-.56,0]);for(const r of[-7.2,7.2])for(const e of[-4.2,4.2])It(new wt(.34,3.6,.34),xo,[r,-1.57,e]);const F_=It(new An(100,100),Dn("#403b36",.95),[0,-3.38,0]);F_.rotation.x=-Math.PI/2;It(new wt(100,8,.3),Dn("#514a45",.95),[0,-3.4,-6.4]);const ir=U_(Rt),Wc=new wc("#e5dccb","#a28060",.8);Rt.add(Wc);const $t=new Hs("#ffe1b4",70,28,.72,.85,1.3);$t.position.set(1.8,7.4,-5.1);$t.target.position.set(-1,.58,1.5);$t.castShadow=!0;$t.shadow.mapSize.set(2048,2048);$t.shadow.bias=-2e-4;$t.shadow.normalBias=.004;$t.shadow.radius=4;Rt.add($t,$t.target);const Ks=Ys(512,512,(r,e,t)=>{r.fillStyle="#fff5df",r.fillRect(0,0,e,t),r.filter="blur(7px)";for(let n=0;n<140;n++)r.fillStyle=n%3?"#343a30":"#777b62",r.beginPath(),r.ellipse(en()*e,en()*t,8+en()*23,4+en()*13,en()*6.28,0,6.28),r.fill();r.strokeStyle="#333b30",r.lineWidth=12,r.beginPath(),r.moveTo(50,512),r.bezierCurveTo(160,330,240,230,430,0),r.stroke()});$t.map=Ks;const yo=new Ac("#e6dfcf",.85);yo.position.set(-3,4,5);Rt.add(yo);const an=new Yt;an.userData.memoryKey="globe";Rt.add(an);const O_=new Set(Rt.children),Xc=Dn("#bfa471",.28,.7),Mo=Dn("#624334",.42);It(new Cn(2.32,2.4,.28,96),Mo,[0,.76,0]);It(new Cn(2.29,2.32,.09,96),Xc,[0,.945,0]);It(new Cn(2.2,2.28,.18,96),Mo,[0,1.08,0]);It(new Cn(2.15,2.15,.1,96),Dn("#495944"),[0,1.22,0]);const B_=Dn("#71816a",.97);for(let r=0;r<80;r++){const e=en()*Math.PI*2,t=1.45+en()*.52;It(new si(1,8,5),B_,[Math.sin(e)*t,1.3,Math.cos(e)*t]).scale.set(.08+en()*.16,.025+en()*.035,.07+en()*.12)}const qc=new pg().setDecoderPath("./assets/draco/"),k_=await new ja().setDRACOLoader(qc).loadAsync("./assets/statue_cat_winged.glb");qc.dispose();const Hr=k_.scene,So=await new or().loadAsync("./assets/cat-winged-color.webp");So.colorSpace=Mt;So.flipY=!0;Hr.scale.setScalar(2.1);Hr.position.set(0,1.04,-.18);Hr.traverse(r=>{r.isMesh&&(r.material.map=So,r.material.roughness=.58,r.material.needsUpdate=!0,r.castShadow=!0,r.receiveShadow=!0)});Rt.add(Hr);try{const r=await new d_().loadAsync("./assets/sky/mossy_forest_1k.exr"),e=new Ya(Dt);Rt.environment=e.fromEquirectangular(r).texture,Rt.environmentIntensity=.32,e.dispose(),r.dispose()}catch{}const js=new pn({color:"#f7fcfa",metalness:0,roughness:.09,transmission:1,transparent:!0,depthWrite:!1,ior:1.46,thickness:.36,attenuationColor:"#d9ece1",attenuationDistance:4,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:.55,side:0});js.onBeforeCompile=r=>{const e=Qe.transmission_pars_fragment.replace("return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );",`vec2 uv=clamp(fragCoord.xy,vec2(.001),vec2(.999));
   vec4 sampleColor=textureLod(transmissionSamplerMap,uv,0.0);
   if(any(isnan(sampleColor))||any(isinf(sampleColor))) return vec4(0.0,0.0,0.0,1.0);
   return clamp(sampleColor,vec4(0.0),vec4(64.0));`);r.fragmentShader=r.fragmentShader.replace("#include <transmission_pars_fragment>",e)};js.customProgramCacheKey=()=>"stable-glass-sampling-v1";const Nr=It(new si(2.65,96,64,0,Math.PI*2,0,2.28),js,[0,2.95,0]);Nr.castShadow=Nr.receiveShadow=!1;Nr.renderOrder=10;for(const r of[...Rt.children])O_.has(r)||an.add(r);an.scale.setScalar(.54);an.position.y=.58-.62*.54;const Yc=await new or().loadAsync("./assets/photos/memory-varied-3.webp"),z_=Ys(512,640,(r,e,t)=>{r.fillStyle="#f0e8dc",r.fillRect(0,0,e,t);const n=Yc.image,i=Math.min(e/n.width,t/n.height);r.drawImage(n,(e-n.width*i)/2,(t-n.height*i)/2,n.width*i,n.height*i)});Yc.dispose();const jn=new Yt;jn.userData.memoryKey="photo-3";jn.position.set(7.6,.6,-2.5);jn.scale.setScalar(.6);jn.rotation.set(-.08,-.12,0);Rt.add(jn);It(new wt(2.12,2.6,.16),Mo,[0,1.3,0],jn);It(new wt(1.91,2.38,.05),Xc,[0,1.3,.1],jn);It(new wt(1.79,2.24,.04),Dn("#e7dcc9"),[0,1.3,.14],jn);It(new An(1.51,1.89),new sn({map:z_,roughness:.95}),[0,1.38,.17],jn);const cr=new Yt;cr.userData.memoryKey="notebook";cr.position.set(4,.65,2);cr.rotation.y=-.22;Rt.add(cr);It(new wt(2.7,.14,2.15),Dn("#695b67"),[0,0,0],cr);const G_=Ys(1024,768,(r,e,t)=>{r.fillStyle="#eddfc8",r.fillRect(0,0,e,t),r.strokeStyle="#a3948060",r.lineWidth=2;for(let n=240;n<690;n+=58)r.beginPath(),r.moveTo(65,n),r.lineTo(455,n),r.moveTo(560,n),r.lineTo(955,n),r.stroke();r.fillStyle="#736b62",r.font="italic 43px Georgia",r.fillText("Little things",70,130),r.font="24px Georgia",r.fillText("I never want to forget.",70,184),r.font="italic 35px Georgia",r.fillText("always with me",565,150),r.strokeStyle="#b5a48e",r.beginPath(),r.moveTo(512,0),r.lineTo(512,t),r.stroke()}),H_=It(new An(2.6,2.05),new sn({map:G_,roughness:1}),[0,.071,0],cr);H_.rotation.x=-Math.PI/2;const To=It(new Cn(.034,.034,1.75,12),Dn("#34453f",.4),[3.4,.755,2.9]);To.userData.memoryKey="notebook";To.rotation.z=Math.PI/2;To.rotation.y=-.35;const nc=Dn("#5c433b",1);for(let r=0;r<3;r++){const e=-3.1+r*.42,t=2+r*.32,n=It(new Si(.1,20),nc,[e,.589,t]);n.rotation.x=-Math.PI/2;for(let i=0;i<4;i++){const s=(i-1.5)*.6,a=It(new Si(.044,12),nc,[e+Math.sin(s)*.16,.59,t-.1-Math.cos(s)*.075]);a.rotation.x=-Math.PI/2}}const Qa={uTime:{value:0},uAmount:{value:0}},Eo=Ks.clone(),Fs=document.createElement("canvas");Fs.width=Fs.height=512;const bo=Fs.getContext("2d");bo.drawImage(Ks.image,0,0);bo.fillStyle="rgba(220,231,240,.72)";bo.fillRect(0,0,512,512);Eo.image=Fs;Eo.needsUpdate=!0;const wo=new fo("#ffc78c",0,12,2);wo.position.set(5,4,-1.8);Rt.add(wo);const Kc=A_(Rt);Kc.loadMug("./assets/props/meshy-cat-mug.glb").then(()=>Co.register()).catch(r=>console.warn("Mug asset unavailable; using fallback.",r));let Ln=0,yi=0,Os=0,Vt=null,Qt=!1,Mi=0,Bs=0,gt=!1,Fr=0,Or=0,Wt=null;const ks=Math.PI/24;let Ga=0,Ao=0;const Cr=[];let Ha=937;const Va=()=>(Ha=Ha*1664525+1013904223>>>0,Ha/4294967296);for(let r=0;r<256;r++){let e=null,t=-1;for(let n=0;n<40;n++){const i=Va()*Math.PI*2,s=Math.sqrt(1.44**2+Va()*(2.02**2-1.44**2)),a=new B(Math.sin(i)*s,1.29,Math.cos(i)*s),o=Cr.length?Math.min(...Cr.map(l=>l.distanceToSquared(a))):Va();o>t&&(t=o,e=a)}Cr.push(e)}const Ro=r=>Cr[r%Cr.length],V_=["#ffae32","#ef608a","#f1864e","#d66085","#f4c32f","#f09e70"],tn=w_({scene:an,camera:lt,positionFor:Ro,palette:V_,refinedGrowth:!0,growthDuration:2600,plantDelay:3200}),Cs=R_(Rt,an,Nr),Co=C_(Rt,an,{hemi:Wc,key:$t,fill:yo,lamp:wo,glassMaterial:js,bloom:Hc,rainUniforms:Qa});Kc.loadBelongings(()=>Co.register()).catch(r=>console.warn("Keepsake asset unavailable.",r));Dt.domElement.addEventListener("pointerdown",r=>{if(!(tn.blocked||Br.blocked||Sn)){if(Qt&&!gt&&!Wt){const e=Dt.domElement.getBoundingClientRect();tn.hoverAt(new Me((r.clientX-e.left)/e.width*2-1,-(r.clientY-e.top)/e.height*2+1))}Vt={x:r.clientX,y:r.clientY,lx:r.clientX,ly:r.clientY,moved:!1},Dt.domElement.setPointerCapture(r.pointerId)}});Dt.domElement.addEventListener("pointerleave",()=>{Ao=0,tn.clearHover(),ir.clearHover()});Dt.domElement.addEventListener("pointermove",r=>{if(!(Br.blocked||Sn)){if(!Qt&&!gt&&!Vt&&(Ao=r.clientY<innerHeight*.78?(r.clientX/innerWidth-.5)*.045:0),!Qt&&!gt&&!Wt&&!Vt&&!Nn){const e=Dt.domElement.getBoundingClientRect();ir.hover(new Me((r.clientX-e.left)/e.width*2-1,-(r.clientY-e.top)/e.height*2+1),lt)}else ir.clearHover();if(!Vt){if(Qt&&!gt&&!Wt&&Bs>.9){const e=Dt.domElement.getBoundingClientRect();tn.hoverAt(new Me((r.clientX-e.left)/e.width*2-1,-(r.clientY-e.top)/e.height*2+1))}else tn.clearHover();return}tn.clearHover(),Math.hypot(r.clientX-Vt.x,r.clientY-Vt.y)>5&&(Vt.moved=!0),Vt.moved&&(gt?(Fr=ft.clamp(Fr-(r.clientX-Vt.lx)*.003,-1.15,1.15),Or=ft.clamp(Or+(r.clientY-Vt.ly)*.002,-.25,.6)):Bs>.45?Mi-=(r.clientX-Vt.lx)*.004:yi=ft.clamp(yi-(r.clientX-Vt.lx)*.002,-ks,ks),Os=ft.clamp(Os+(r.clientY-Vt.ly)*.001,-.12,.16)),Vt.lx=r.clientX,Vt.ly=r.clientY}});Dt.domElement.addEventListener("pointerup",()=>Vt=null);Dt.domElement.addEventListener("pointercancel",()=>Vt=null);const Po=document.createElement("nav");Po.className="scene-switcher";Po.setAttribute("aria-label","Scene views");document.body.append(Po);const W_=[];function jc(r){if(Wt||Sn)return;const e=gt;gt=r==="inside",Qt=r!=="desk",Fr=Or=0,e!==gt&&(Wt={start:performance.now(),position:lt.position.clone(),quaternion:lt.quaternion.clone(),look:new B(0,e?1.72:Bs>.5?1.15:.78,e?-.09:0),fov:lt.fov}),r==="desk"&&(yi=Os=Mi=0),tn.clearSelection()}const Zc=L_({scene:Rt,camera:lt,composer:li,globe:an,glass:Nr,renderer:Dt,backdrops:ir,onEnter:()=>jc("focus")});let Sn=null;const X_=D_(an),ic=P_(),Do=document.createElement("div");Do.className="focus-shade";document.body.append(Do);const Br=I_({scene:Rt,camera:lt,cat:Hr,renderer:Dt,offerings:tn,deskUI:Zc,navigate:jc,rotate:r=>{Mi+=r},onPlant:r=>{const e=performance.now()/1e3,t=Ro(r.id);tn.clearSelection(),Sn={start:e,angle:yi+Mi,targetAngle:Math.atan2(t.x,t.z),position:lt.position.clone(),look:new B(0,1.15,0),flower:an.localToWorld(t.clone()).add(new B(0,.18,0))}}}),ji=document.createElement("div");ji.className="message-sky";ji.hidden=!0;document.body.append(ji);const rc=new Map,yn=new B,Wa=new B;function q_(r){const e=tn.getHovered();if(ji.hidden=!!Sn||Br.catHovered||Br.blocked||!!Wt||!gt&&!(Qt&&e),!ji.hidden){an.updateWorldMatrix(!0,!1),lt.updateMatrixWorld();for(const t of tn.getRecords().filter(n=>n.message)){let n=rc.get(t.id);if(!n){n=document.createElement("span"),n.className="flower-message",n.dataset.flowerId=t.id;const s=document.createElement("strong");s.className="message-author",s.textContent=t.name;const a=document.createElement("span");a.textContent=t.message,n.append(s,a),ji.append(n),rc.set(t.id,n)}if(n.classList.toggle("closeup-message",!gt),!gt){n.hidden=e?.id!==t.id,n.style.left="50%",n.style.top="21%",n.style.opacity="1",n.style.fontSize="";continue}yn.copy(Ro(t.id)),yn.y+=.7+t.id%4*.047+(Nn?0:Math.sin(r*.9+t.id)*.018),an.localToWorld(yn),Wa.copy(yn).applyMatrix4(lt.matrixWorldInverse),yn.project(lt);const i=Wa.z<0&&yn.z>-1&&yn.z<1&&Math.abs(yn.x)<1.15&&Math.abs(yn.y)<1.12;n.hidden=!i||!gt&&e?.id!==t.id,i&&(n.style.left=(yn.x*.5+.5)*innerWidth+"px",n.style.top=(-yn.y*.5+.5)*innerHeight+"px",n.style.opacity=String(gt?Nn?.8:.2+.65*Math.pow(.5+.5*Math.sin(r*.7+t.id*2.399),2):.96),n.style.fontSize=ft.clamp(15/Math.sqrt(Math.max(.4,-Wa.z)),12,17)+"px")}}}const Y_=new Rc,sc=new B,ac=r=>r*r*(3-2*r);let K_=0;function $c(r){if(requestAnimationFrame($c),document.hidden)return;const e=Math.min(Y_.getDelta(),.05),t=r/1e3;let n=0,i="idle";const s=0;Ln=ft.damp(Ln,Qt||gt?1:0,2.2,e);const a=Nn?Ln:Math.max(Ln,n),o=innerWidth/innerHeight,l=o<1,c=ft.lerp(l?28:17.5,l?8.2:5.7,a),h=ft.lerp(.78,1.15,a),u=ft.lerp(.78,7,a);lt.setViewOffset(innerWidth,innerHeight,0,-innerHeight*.27*(1-a),innerWidth,innerHeight),Ga=ft.damp(Ga,Qt?0:Ao,2,e),Bs=a;const d=ft.clamp(yi+Ga,-ks,ks)+Mi*a;if(lt.position.set(Math.sin(d)*c,u+Os*c*a,Math.cos(d)*c),sc.set(0,h,0),lt.lookAt(sc),lt.fov=gt?78:32,gt&&(lt.clearViewOffset(),lt.position.set(Math.sin(Fr)*1.14,1.08,Math.cos(Fr)*1.14),lt.lookAt(0,1.72+Or,-.09)),Wt){const g=Nn?1:Math.min(1,(r-Wt.start)/2400),p=ac(g),b=lt.position.clone();lt.quaternion.clone(),lt.position.lerpVectors(Wt.position,b,p),lt.lookAt(Wt.look.clone().lerp(new B(0,gt?1.72+Or:h,gt?-.09:0),p)),lt.fov=ft.lerp(Wt.fov,lt.fov,p),Cs.blend(gt?p:1-p),g===1&&(Wt=null)}if(Sn){const g=Sn,p=t-g.start,b=Math.atan2(Math.sin(g.targetAngle-g.angle),Math.cos(g.targetAngle-g.angle)),S=ac(Math.min(1,p/2.4)),E=g.angle+b*S,L=new B(Math.sin(E)*4.7,5.8,Math.cos(E)*4.7),R=ft.smoothstep(p,8,10.5);lt.position.lerpVectors(g.position,L,S),lt.position.lerp(new B(Math.sin(g.targetAngle)*c,u,Math.cos(g.targetAngle)*c),R);const C=g.look.clone().lerp(g.flower,S).lerp(new B(0,h,0),R);lt.lookAt(C),Mi=g.angle+b*S-yi,p>=10.5&&(Sn=null)}lt.updateProjectionMatrix();for(const[g,p]of W_)p.disabled=!!Wt,p.setAttribute("aria-pressed",String(g===(gt?"inside":Qt?"focus":"desk")));tn.setImmersive(Cs.amount),tn.setDetail(Qt&&!gt&&!Wt),tn.update(r,!1),Nn||($t.target.position.x=-1+Math.sin(t*.38)*.32,$t.target.position.z=1.5+Math.sin(t*.27)*.23);const m=0,v=Co.update(Math.max(Ln,n),m);Qa.uTime.value=Nn?0:t,Qa.uAmount.value=gt?0:Ln,$t.map=Ln>.45?Eo:Ks;const x=Zc.update(e,!Qt&&!gt&&!Wt&&Ln<.1);$t.intensity*=1-x*.35,Qt&&!gt&&ir.setOvercast(Ln),Br.update(Qt&&!gt&&!Wt,gt&&!Wt,!!Sn),X_.update(Sn?t-Sn.start:-1,Nn),ic.setMode(gt?"inside":Qt?"focus":"desk"),ic.setHoverRain(x),Do.style.opacity=String(Ln*(1-Cs.amount)),ir.update(t,Nn),Cs.update(t,Nn),q_(t),li.render(),K_++%30===0&&(document.querySelector("#garden").dataset.stats=JSON.stringify({mode:gt?"inside-globe":"globe",phase:i,stage:v,snowOpacity:s,glassWarmth:m,orbitDegrees:ft.radToDeg(Mi),yawDegrees:ft.radToDeg(yi),camera:lt.position.toArray()}))}vo.hidden=!0;requestAnimationFrame($c);window.addEventListener("resize",()=>{lt.aspect=innerWidth/innerHeight,lt.updateProjectionMatrix(),Dt.setSize(innerWidth,innerHeight),li.setSize(innerWidth,innerHeight),Vc.uniforms.uPixel.value.set(1/innerWidth,1/innerHeight)});
