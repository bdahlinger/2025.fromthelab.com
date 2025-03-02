import{I as lh,d as $o,x as ch,e as Jo,o as Ko,a as _i,p as c_,D as u_,y as $d,b as _o,u as h_,m as f_,F as d_}from"./app-C39PHucp.js";import{_ as Jd}from"./_plugin-vue_export-helper-DlAUqK2U.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uh="173",p_=0,ef=1,m_=2,Kd=1,__=2,Wi=3,Mr=0,Pn=1,ai=2,Ki=0,Fs=1,bi=2,nf=3,rf=4,g_=5,Vr=100,v_=101,x_=102,y_=103,S_=104,M_=200,E_=201,T_=202,b_=203,Zc=204,$c=205,w_=206,A_=207,C_=208,R_=209,P_=210,D_=211,L_=212,I_=213,U_=214,Jc=0,Kc=1,jc=2,$s=3,Qc=4,tu=5,eu=6,nu=7,hh=0,N_=1,O_=2,vr=0,F_=1,B_=2,z_=3,k_=4,H_=5,V_=6,G_=7,jd=300,Js=301,Ks=302,iu=303,ru=304,zl=306,su=1e3,Wr=1001,ou=1002,xi=1003,W_=1004,ga=1005,Ci=1006,$l=1007,Xr=1008,er=1009,Qd=1010,tp=1011,jo=1012,fh=1013,es=1014,Zi=1015,ji=1016,dh=1017,ph=1018,js=1020,ep=35902,np=1021,ip=1022,gi=1023,rp=1024,sp=1025,Bs=1026,Qs=1027,op=1028,mh=1029,ap=1030,_h=1031,gh=1033,sl=33776,ol=33777,al=33778,ll=33779,au=35840,lu=35841,cu=35842,uu=35843,hu=36196,fu=37492,du=37496,pu=37808,mu=37809,_u=37810,gu=37811,vu=37812,xu=37813,yu=37814,Su=37815,Mu=37816,Eu=37817,Tu=37818,bu=37819,wu=37820,Au=37821,cl=36492,Cu=36494,Ru=36495,lp=36283,Pu=36284,Du=36285,Lu=36286,X_=3200,Y_=3201,cp=0,q_=1,fr="",Gn="srgb",to="srgb-linear",yl="linear",_e="srgb",hs=7680,sf=519,Z_=512,$_=513,J_=514,up=515,K_=516,j_=517,Q_=518,tg=519,of=35044,af="300 es",$i=2e3,Sl=2001;class uo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lf=1234567;const zs=Math.PI/180,Qo=180/Math.PI;function ls(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[r&255]+on[r>>8&255]+on[r>>16&255]+on[r>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function oe(r,t,e){return Math.max(t,Math.min(e,r))}function vh(r,t){return(r%t+t)%t}function eg(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function ng(r,t,e){return r!==t?(e-r)/(t-r):0}function Io(r,t,e){return(1-e)*r+e*t}function ig(r,t,e,n){return Io(r,t,1-Math.exp(-e*n))}function rg(r,t=1){return t-Math.abs(vh(r,t*2)-t)}function sg(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function og(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function ag(r,t){return r+Math.floor(Math.random()*(t-r+1))}function lg(r,t){return r+Math.random()*(t-r)}function cg(r){return r*(.5-Math.random())}function ug(r){r!==void 0&&(lf=r);let t=lf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hg(r){return r*zs}function fg(r){return r*Qo}function dg(r){return(r&r-1)===0&&r!==0}function pg(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function mg(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function _g(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),h=s((t-n)/2),f=o((t-n)/2),d=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Cs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function gn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const En={DEG2RAD:zs,RAD2DEG:Qo,generateUUID:ls,clamp:oe,euclideanModulo:vh,mapLinear:eg,inverseLerp:ng,lerp:Io,damp:ig,pingpong:rg,smoothstep:sg,smootherstep:og,randInt:ag,randFloat:lg,randFloatSpread:cg,seededRandom:ug,degToRad:hg,radToDeg:fg,isPowerOfTwo:dg,ceilPowerOfTwo:pg,floorPowerOfTwo:mg,setQuaternionFromProperEuler:_g,normalize:gn,denormalize:Cs};class mt{constructor(t=0,e=0){mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,n,i,s,o,a,l,c){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],M=i[1],x=i[4],v=i[7],A=i[2],b=i[5],E=i[8];return s[0]=o*_+a*M+l*A,s[3]=o*p+a*x+l*b,s[6]=o*m+a*v+l*E,s[1]=c*_+u*M+h*A,s[4]=c*p+u*x+h*b,s[7]=c*m+u*v+h*E,s[2]=f*_+d*M+g*A,s[5]=f*p+d*x+g*b,s[8]=f*m+d*v+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=e*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Jl.makeScale(t,e)),this}rotate(t){return this.premultiply(Jl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jl=new Zt;function hp(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ml(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gg(){const r=Ml("canvas");return r.style.display="block",r}const cf={};function Rs(r){r in cf||(cf[r]=!0,console.warn(r))}function vg(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function xg(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yg(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const uf=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hf=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sg(){const r={enabled:!0,workingColorSpace:to,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===_e&&(i.r=Qi(i.r),i.g=Qi(i.g),i.b=Qi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(i.r=ks(i.r),i.g=ks(i.g),i.b=ks(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fr?yl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[to]:{primaries:t,whitePoint:n,transfer:yl,toXYZ:uf,fromXYZ:hf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:uf,fromXYZ:hf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),r}const he=Sg();function Qi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ks(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let fs;class Mg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fs===void 0&&(fs=Ml("canvas")),fs.width=t.width,fs.height=t.height;const n=fs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fs}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ml("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Qi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qi(e[n]/255)*255):e[n]=Qi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Eg=0;class fp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=ls(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Kl(i[o].image)):s.push(Kl(i[o]))}else s=Kl(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Kl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Mg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tg=0;class Dn extends uo{constructor(t=Dn.DEFAULT_IMAGE,e=Dn.DEFAULT_MAPPING,n=Wr,i=Wr,s=Ci,o=Xr,a=gi,l=er,c=Dn.DEFAULT_ANISOTROPY,u=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=ls(),this.name="",this.source=new fp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case su:t.x=t.x-Math.floor(t.x);break;case Wr:t.x=t.x<0?0:1;break;case ou:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case su:t.y=t.y-Math.floor(t.y);break;case Wr:t.y=t.y<0?0:1;break;case ou:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=jd;Dn.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,e=0,n=0,i=1){Le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(d+1)/2,A=(m+1)/2,b=(u+f)/4,E=(h+_)/4,P=(g+p)/4;return x>v&&x>A?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=b/n,s=E/n):v>A?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=b/i,s=P/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=E/s,i=P/s),this.set(n,i,s,e),this}let M=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bg extends uo{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Dn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new fp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends bg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class dp extends Dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xi,this.minFilter=xi,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wg extends Dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xi,this.minFilter=xi,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fa{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let p=1-a;const m=l*f+c*d+u*g+h*_,M=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const A=Math.sqrt(x),b=Math.atan2(A,m*M);p=Math.sin(p*b)/A,a=Math.sin(a*b)/A}const v=a*M;if(l=l*p+f*v,c=c*p+d*v,u=u*p+g*v,h=h*p+_*v,p===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-a*d,t[e+2]=c*g+u*d+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,e=0,n=0){Z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ff.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ff.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jl.copy(this).projectOnVector(t),this.sub(jl)}reflect(t){return this.sub(jl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jl=new Z,ff=new fa;class ho{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=fi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,fi):fi.fromBufferAttribute(s,o),fi.applyMatrix4(t.matrixWorld),this.expandByPoint(fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),va.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),va.copy(n.boundingBox)),va.applyMatrix4(t.matrixWorld),this.union(va)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fi),fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(go),xa.subVectors(this.max,go),ds.subVectors(t.a,go),ps.subVectors(t.b,go),ms.subVectors(t.c,go),rr.subVectors(ps,ds),sr.subVectors(ms,ps),Cr.subVectors(ds,ms);let e=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-Cr.z,Cr.y,rr.z,0,-rr.x,sr.z,0,-sr.x,Cr.z,0,-Cr.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-Cr.y,Cr.x,0];return!Ql(e,ds,ps,ms,xa)||(e=[1,0,0,0,1,0,0,0,1],!Ql(e,ds,ps,ms,xa))?!1:(ya.crossVectors(rr,sr),e=[ya.x,ya.y,ya.z],Ql(e,ds,ps,ms,xa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Bi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],fi=new Z,va=new ho,ds=new Z,ps=new Z,ms=new Z,rr=new Z,sr=new Z,Cr=new Z,go=new Z,xa=new Z,ya=new Z,Rr=new Z;function Ql(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Rr.fromArray(r,s);const a=i.x*Math.abs(Rr.x)+i.y*Math.abs(Rr.y)+i.z*Math.abs(Rr.z),l=t.dot(Rr),c=e.dot(Rr),u=n.dot(Rr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ag=new ho,vo=new Z,tc=new Z;class da{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ag.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vo.subVectors(t,this.center);const e=vo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(vo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vo.copy(t.center).add(tc)),this.expandByPoint(vo.copy(t.center).sub(tc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new Z,ec=new Z,Sa=new Z,or=new Z,nc=new Z,Ma=new Z,ic=new Z;class pp{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zi.copy(this.origin).addScaledVector(this.direction,e),zi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ec.copy(t).add(e).multiplyScalar(.5),Sa.copy(e).sub(t).normalize(),or.copy(this.origin).sub(ec);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Sa),a=or.dot(this.direction),l=-or.dot(Sa),c=or.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ec).addScaledVector(Sa,f),d}intersectSphere(t,e){zi.subVectors(t.center,this.origin);const n=zi.dot(this.direction),i=zi.dot(zi)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,zi)!==null}intersectTriangle(t,e,n,i,s){nc.subVectors(e,t),Ma.subVectors(n,t),ic.crossVectors(nc,Ma);let o=this.direction.dot(ic),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;or.subVectors(this.origin,t);const l=a*this.direction.dot(Ma.crossVectors(or,Ma));if(l<0)return null;const c=a*this.direction.dot(nc.cross(or));if(c<0||l+c>o)return null;const u=-a*or.dot(ic);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(t,e,n,i,s,o,a,l,c,u,h,f,d,g,_,p){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,h,f,d,g,_,p)}set(t,e,n,i,s,o,a,l,c,u,h,f,d,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/_s.setFromMatrixColumn(t,0).length(),s=1/_s.setFromMatrixColumn(t,1).length(),o=1/_s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cg,t,Rg)}lookAt(t,e,n){const i=this.elements;return zn.subVectors(t,e),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),ar.crossVectors(n,zn),ar.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),ar.crossVectors(n,zn)),ar.normalize(),Ea.crossVectors(zn,ar),i[0]=ar.x,i[4]=Ea.x,i[8]=zn.x,i[1]=ar.y,i[5]=Ea.y,i[9]=zn.y,i[2]=ar.z,i[6]=Ea.z,i[10]=zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],M=n[3],x=n[7],v=n[11],A=n[15],b=i[0],E=i[4],P=i[8],S=i[12],y=i[1],I=i[5],F=i[9],G=i[13],W=i[2],j=i[6],X=i[10],J=i[14],H=i[3],ft=i[7],B=i[11],gt=i[15];return s[0]=o*b+a*y+l*W+c*H,s[4]=o*E+a*I+l*j+c*ft,s[8]=o*P+a*F+l*X+c*B,s[12]=o*S+a*G+l*J+c*gt,s[1]=u*b+h*y+f*W+d*H,s[5]=u*E+h*I+f*j+d*ft,s[9]=u*P+h*F+f*X+d*B,s[13]=u*S+h*G+f*J+d*gt,s[2]=g*b+_*y+p*W+m*H,s[6]=g*E+_*I+p*j+m*ft,s[10]=g*P+_*F+p*X+m*B,s[14]=g*S+_*G+p*J+m*gt,s[3]=M*b+x*y+v*W+A*H,s[7]=M*E+x*I+v*j+A*ft,s[11]=M*P+x*F+v*X+A*B,s[15]=M*S+x*G+v*J+A*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+_*(+e*l*d-e*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+p*(+e*c*h-e*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+m*(-i*a*u-e*l*h+e*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],M=h*p*c-_*f*c+_*l*d-a*p*d-h*l*m+a*f*m,x=g*f*c-u*p*c-g*l*d+o*p*d+u*l*m-o*f*m,v=u*_*c-g*h*c+g*a*d-o*_*d-u*a*m+o*h*m,A=g*h*l-u*_*l-g*a*f+o*_*f+u*a*p-o*h*p,b=e*M+n*x+i*v+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=M*E,t[1]=(_*f*s-h*p*s-_*i*d+n*p*d+h*i*m-n*f*m)*E,t[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*m+n*l*m)*E,t[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*E,t[4]=x*E,t[5]=(u*p*s-g*f*s+g*i*d-e*p*d-u*i*m+e*f*m)*E,t[6]=(g*l*s-o*p*s-g*i*c+e*p*c+o*i*m-e*l*m)*E,t[7]=(o*f*s-u*l*s+u*i*c-e*f*c-o*i*d+e*l*d)*E,t[8]=v*E,t[9]=(g*h*s-u*_*s-g*n*d+e*_*d+u*n*m-e*h*m)*E,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*m+e*a*m)*E,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*d-e*a*d)*E,t[12]=A*E,t[13]=(u*_*i-g*h*i+g*n*f-e*_*f-u*n*p+e*h*p)*E,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*p-e*a*p)*E,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*f+e*a*f)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,p=o*h,m=a*h,M=l*c,x=l*u,v=l*h,A=n.x,b=n.y,E=n.z;return i[0]=(1-(_+m))*A,i[1]=(d+v)*A,i[2]=(g-x)*A,i[3]=0,i[4]=(d-v)*b,i[5]=(1-(f+m))*b,i[6]=(p+M)*b,i[7]=0,i[8]=(g+x)*E,i[9]=(p-M)*E,i[10]=(1-(f+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=_s.set(i[0],i[1],i[2]).length();const o=_s.set(i[4],i[5],i[6]).length(),a=_s.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],di.copy(this);const c=1/s,u=1/o,h=1/a;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=u,di.elements[5]*=u,di.elements[6]*=u,di.elements[8]*=h,di.elements[9]*=h,di.elements[10]*=h,e.setFromRotationMatrix(di),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=$i){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let d,g;if(a===$i)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Sl)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=$i){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(o-s),f=(e+t)*c,d=(n+i)*u;let g,_;if(a===$i)g=(o+s)*h,_=-2*h;else if(a===Sl)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const _s=new Z,di=new we,Cg=new Z(0,0,0),Rg=new Z(1,1,1),ar=new Z,Ea=new Z,zn=new Z,df=new we,pf=new fa;class Ni{constructor(t=0,e=0,n=0,i=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return df.makeRotationFromQuaternion(t),this.setFromRotationMatrix(df,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pf.setFromEuler(this),this.setFromQuaternion(pf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class mp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pg=0;const mf=new Z,gs=new fa,ki=new we,Ta=new Z,xo=new Z,Dg=new Z,Lg=new fa,_f=new Z(1,0,0),gf=new Z(0,1,0),vf=new Z(0,0,1),xf={type:"added"},Ig={type:"removed"},vs={type:"childadded",child:null},rc={type:"childremoved",child:null};class rn extends uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const t=new Z,e=new Ni,n=new fa,i=new Z(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new we},normalMatrix:{value:new Zt}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(_f,t)}rotateY(t){return this.rotateOnAxis(gf,t)}rotateZ(t){return this.rotateOnAxis(vf,t)}translateOnAxis(t,e){return mf.copy(t).applyQuaternion(this.quaternion),this.position.add(mf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_f,t)}translateY(t){return this.translateOnAxis(gf,t)}translateZ(t){return this.translateOnAxis(vf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ta.copy(t):Ta.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(xo,Ta,this.up):ki.lookAt(Ta,xo,this.up),this.quaternion.setFromRotationMatrix(ki),i&&(ki.extractRotation(i.matrixWorld),gs.setFromRotationMatrix(ki),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xf),vs.child=t,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ig),rc.child=t,this.dispatchEvent(rc),rc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xf),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,t,Dg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,Lg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}rn.DEFAULT_UP=new Z(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new Z,Hi=new Z,sc=new Z,Vi=new Z,xs=new Z,ys=new Z,yf=new Z,oc=new Z,ac=new Z,lc=new Z,cc=new Le,uc=new Le,hc=new Le;class li{constructor(t=new Z,e=new Z,n=new Z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),pi.subVectors(t,e),i.cross(pi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){pi.subVectors(i,e),Hi.subVectors(n,e),sc.subVectors(t,e);const o=pi.dot(pi),a=pi.dot(Hi),l=pi.dot(sc),c=Hi.dot(Hi),u=Hi.dot(sc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vi.x),l.addScaledVector(o,Vi.y),l.addScaledVector(a,Vi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return cc.setScalar(0),uc.setScalar(0),hc.setScalar(0),cc.fromBufferAttribute(t,e),uc.fromBufferAttribute(t,n),hc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(cc,s.x),o.addScaledVector(uc,s.y),o.addScaledVector(hc,s.z),o}static isFrontFacing(t,e,n,i){return pi.subVectors(n,e),Hi.subVectors(t,e),pi.cross(Hi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),pi.cross(Hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return li.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return li.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;xs.subVectors(i,n),ys.subVectors(s,n),oc.subVectors(t,n);const l=xs.dot(oc),c=ys.dot(oc);if(l<=0&&c<=0)return e.copy(n);ac.subVectors(t,i);const u=xs.dot(ac),h=ys.dot(ac);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(xs,o);lc.subVectors(t,s);const d=xs.dot(lc),g=ys.dot(lc);if(g>=0&&d<=g)return e.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ys,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return yf.subVectors(s,i),a=(h-u)/(h-u+(d-g)),e.copy(i).addScaledVector(yf,a);const m=1/(p+_+f);return o=_*m,a=f*m,e.copy(n).addScaledVector(xs,o).addScaledVector(ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},ba={h:0,s:0,l:0};function fc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=vh(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=fc(o,s,t+1/3),this.g=fc(o,s,t),this.b=fc(o,s,t-1/3)}return he.toWorkingColorSpace(this,i),this}setStyle(t,e=Gn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Gn){const n=_p[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}copyLinearToSRGB(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Gn){return he.fromWorkingColorSpace(an.copy(this),t),Math.round(oe(an.r*255,0,255))*65536+Math.round(oe(an.g*255,0,255))*256+Math.round(oe(an.b*255,0,255))}getHexString(t=Gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(an.copy(this),e);const n=an.r,i=an.g,s=an.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=Gn){he.fromWorkingColorSpace(an.copy(this),t);const e=an.r,n=an.g,i=an.b;return t!==Gn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(lr),this.setHSL(lr.h+t,lr.s+e,lr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(lr),t.getHSL(ba);const n=Io(lr.h,ba.h,e),i=Io(lr.s,ba.s,e),s=Io(lr.l,ba.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new Yt;Yt.NAMES=_p;let Ug=0;class fo extends uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=Fs,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=$c,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(n.blending=this.blending),this.side!==Mr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zc&&(n.blendSrc=this.blendSrc),this.blendDst!==$c&&(n.blendDst=this.blendDst),this.blendEquation!==Vr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ns extends fo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Be=new Z,wa=new mt;let Ng=0;class Si{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ng++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=of,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wa.fromBufferAttribute(this,e),wa.applyMatrix3(t),this.setXY(e,wa.x,wa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cs(e,this.array)),e}setX(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cs(e,this.array)),e}setY(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cs(e,this.array)),e}setW(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),i=gn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),i=gn(i,this.array),s=gn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==of&&(t.usage=this.usage),t}}class gp extends Si{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class vp extends Si{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ve extends Si{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Og=0;const ii=new we,dc=new rn,Ss=new Z,kn=new ho,yo=new ho,Ke=new Z;class wn extends uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hp(t)?vp:gp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,e,n){return ii.makeTranslation(t,e,n),this.applyMatrix4(ii),this}scale(t,e,n){return ii.makeScale(t,e,n),this.applyMatrix4(ii),this}lookAt(t){return dc.lookAt(t),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ve(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ho);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new da);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const n=this.boundingSphere.center;if(kn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];yo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(kn.min,yo.min),kn.expandByPoint(Ke),Ke.addVectors(kn.max,yo.max),kn.expandByPoint(Ke)):(kn.expandByPoint(yo.min),kn.expandByPoint(yo.max))}kn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ke.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ke));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ke.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(t,c),Ke.add(Ss)),i=Math.max(i,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new Z,l[P]=new Z;const c=new Z,u=new Z,h=new Z,f=new mt,d=new mt,g=new mt,_=new Z,p=new Z;function m(P,S,y){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,S),g.fromBufferAttribute(s,y),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(I),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),a[P].add(_),a[S].add(_),a[y].add(_),l[P].add(p),l[S].add(p),l[y].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,S=M.length;P<S;++P){const y=M[P],I=y.start,F=y.count;for(let G=I,W=I+F;G<W;G+=3)m(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const x=new Z,v=new Z,A=new Z,b=new Z;function E(P){A.fromBufferAttribute(i,P),b.copy(A);const S=a[P];x.copy(S),x.sub(A.multiplyScalar(A.dot(S))).normalize(),v.crossVectors(b,S);const I=v.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,I)}for(let P=0,S=M.length;P<S;++P){const y=M[P],I=y.start,F=y.count;for(let G=I,W=I+F;G<W;G+=3)E(t.getX(G+0)),E(t.getX(G+1)),E(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Si(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new Z,s=new Z,o=new Z,a=new Z,l=new Z,c=new Z,u=new Z,h=new Z;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new Si(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new wn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sf=new we,Pr=new pp,Aa=new da,Mf=new Z,Ca=new Z,Ra=new Z,Pa=new Z,pc=new Z,Da=new Z,Ef=new Z,La=new Z;class Ze extends rn{constructor(t=new wn,e=new ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Da.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(pc.fromBufferAttribute(h,t),o?Da.addScaledVector(pc,u):Da.addScaledVector(pc.sub(e),u))}e.add(Da)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(s),Pr.copy(t.ray).recast(t.near),!(Aa.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(Aa,Mf)===null||Pr.origin.distanceToSquared(Mf)>(t.far-t.near)**2))&&(Sf.copy(s).invert(),Pr.copy(t.ray).applyMatrix4(Sf),!(n.boundingBox!==null&&Pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],M=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=M,A=x;v<A;v+=3){const b=a.getX(v),E=a.getX(v+1),P=a.getX(v+2);i=Ia(this,m,t,n,c,u,h,b,E,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const M=a.getX(p),x=a.getX(p+1),v=a.getX(p+2);i=Ia(this,o,t,n,c,u,h,M,x,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],M=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=M,A=x;v<A;v+=3){const b=v,E=v+1,P=v+2;i=Ia(this,m,t,n,c,u,h,b,E,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const M=p,x=p+1,v=p+2;i=Ia(this,o,t,n,c,u,h,M,x,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Fg(r,t,e,n,i,s,o,a){let l;if(t.side===Pn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Mr,a),l===null)return null;La.copy(a),La.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(La);return c<e.near||c>e.far?null:{distance:c,point:La.clone(),object:r}}function Ia(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Ca),r.getVertexPosition(l,Ra),r.getVertexPosition(c,Pa);const u=Fg(r,t,e,n,Ca,Ra,Pa,Ef);if(u){const h=new Z;li.getBarycoord(Ef,Ca,Ra,Pa,h),i&&(u.uv=li.getInterpolatedAttribute(i,a,l,c,h,new mt)),s&&(u.uv1=li.getInterpolatedAttribute(s,a,l,c,h,new mt)),o&&(u.normal=li.getInterpolatedAttribute(o,a,l,c,h,new Z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new Z,materialIndex:0};li.getNormal(Ca,Ra,Pa,f.normal),u.face=f,u.barycoord=h}return u}class Jn extends wn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(u,3)),this.setAttribute("uv",new Ve(h,2));function g(_,p,m,M,x,v,A,b,E,P,S){const y=v/E,I=A/P,F=v/2,G=A/2,W=b/2,j=E+1,X=P+1;let J=0,H=0;const ft=new Z;for(let B=0;B<X;B++){const gt=B*I-G;for(let It=0;It<j;It++){const $t=It*y-F;ft[_]=$t*M,ft[p]=gt*x,ft[m]=W,c.push(ft.x,ft.y,ft.z),ft[_]=0,ft[p]=0,ft[m]=b>0?1:-1,u.push(ft.x,ft.y,ft.z),h.push(It/E),h.push(1-B/P),J+=1}}for(let B=0;B<P;B++)for(let gt=0;gt<E;gt++){const It=f+gt+j*B,$t=f+gt+j*(B+1),O=f+(gt+1)+j*(B+1),U=f+(gt+1)+j*B;l.push(It,$t,U),l.push($t,O,U),H+=6}a.addGroup(d,H,S),d+=H,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function eo(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function xn(r){const t={};for(let e=0;e<r.length;e++){const n=eo(r[e]);for(const i in n)t[i]=n[i]}return t}function Bg(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function xp(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const El={clone:eo,merge:xn};var zg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends fo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zg,this.fragmentShader=kg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=eo(t.uniforms),this.uniformsGroups=Bg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class yp extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=$i}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cr=new Z,Tf=new mt,bf=new mt;class Xn extends yp{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qo*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(cr.x,cr.y).multiplyScalar(-t/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-t/cr.z)}getViewSize(t,e){return this.getViewBounds(t,Tf,bf),e.subVectors(bf,Tf)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ms=-90,Es=1;class Hg extends rn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xn(Ms,Es,t,e);i.layers=this.layers,this.add(i);const s=new Xn(Ms,Es,t,e);s.layers=this.layers,this.add(s);const o=new Xn(Ms,Es,t,e);o.layers=this.layers,this.add(o);const a=new Xn(Ms,Es,t,e);a.layers=this.layers,this.add(a);const l=new Xn(Ms,Es,t,e);l.layers=this.layers,this.add(l);const c=new Xn(Ms,Es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===$i)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Sp extends Dn{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Js,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vg extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Sp(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ci}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Jn(5,5,5),s=new Rn({name:"CubemapFromEquirect",uniforms:eo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:Ki});s.uniforms.tEquirect.value=e;const o=new Ze(i,s),a=e.minFilter;return e.minFilter===Xr&&(e.minFilter=Ci),new Hg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}class vi extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gg={type:"move"};class mc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new vi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class xh{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new xh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class yh extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class _c extends Si{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const gc=new Z,Wg=new Z,Xg=new Zt;class Fr{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=gc.subVectors(n,e).cross(Wg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(gc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Xg.getNormalMatrix(t),i=this.coplanarPoint(gc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new da,Ua=new Z;class Sh{constructor(t=new Fr,e=new Fr,n=new Fr,i=new Fr,s=new Fr,o=new Fr){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$i){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],p=i[11],m=i[12],M=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-s,f-c,p-d,v-m).normalize(),n[1].setComponents(l+s,f+c,p+d,v+m).normalize(),n[2].setComponents(l+o,f+u,p+g,v+M).normalize(),n[3].setComponents(l-o,f-u,p-g,v-M).normalize(),n[4].setComponents(l-a,f-h,p-_,v-x).normalize(),e===$i)n[5].setComponents(l+a,f+h,p+_,v+x).normalize();else if(e===Sl)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(t){return Dr.center.set(0,0,0),Dr.radius=.7071067811865476,Dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ua.x=i.normal.x>0?t.max.x:t.min.x,Ua.y=i.normal.y>0?t.max.y:t.min.y,Ua.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mi extends fo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Tl=new Z,bl=new Z,wf=new we,So=new pp,Na=new da,vc=new Z,Af=new Z;class Yg extends rn{constructor(t=new wn,e=new Mi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Tl.fromBufferAttribute(e,i-1),bl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Tl.distanceTo(bl);t.setAttribute("lineDistance",new Ve(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(i),Na.radius+=s,t.ray.intersectsSphere(Na)===!1)return;wf.copy(i).invert(),So.copy(t.ray).applyMatrix4(wf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=c){const m=u.getX(_),M=u.getX(_+1),x=Oa(this,t,So,l,m,M,_);x&&e.push(x)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(d),m=Oa(this,t,So,l,_,p,g-1);m&&e.push(m)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=c){const m=Oa(this,t,So,l,_,_+1,_);m&&e.push(m)}if(this.isLineLoop){const _=Oa(this,t,So,l,g-1,d,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Oa(r,t,e,n,i,s,o){const a=r.geometry.attributes.position;if(Tl.fromBufferAttribute(a,i),bl.fromBufferAttribute(a,s),e.distanceSqToSegment(Tl,bl,vc,Af)>n)return;vc.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(vc);if(!(c<t.near||c>t.far))return{distance:c,point:Af.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Cf=new Z,Rf=new Z;class Mh extends Yg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Cf.fromBufferAttribute(e,i),Rf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Cf.distanceTo(Rf);t.setAttribute("lineDistance",new Ve(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mp extends Dn{constructor(t,e,n,i,s,o,a,l,c,u=Bs){if(u!==Bs&&u!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Bs&&(n=es),n===void 0&&u===Qs&&(n=js),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:xi,this.minFilter=l!==void 0?l:xi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Fi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new mt:new Z);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new Z,i=[],s=[],o=[],a=new Z,l=new we;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new Z)}s[0]=new Z,o[0]=new Z;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(oe(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(oe(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Eh extends Fi{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new mt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class qg extends Eh{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Th(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Fa=new Z,xc=new Th,yc=new Th,Sc=new Th;class Zg extends Fi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new Z){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Fa.subVectors(i[0],i[1]).add(i[0]),c=Fa);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Fa.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Fa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),xc.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,p),yc.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,p),Sc.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(xc.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),yc.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Sc.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(xc.calc(l),yc.calc(l),Sc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Z().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Pf(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function $g(r,t){const e=1-r;return e*e*t}function Jg(r,t){return 2*(1-r)*r*t}function Kg(r,t){return r*r*t}function Uo(r,t,e,n){return $g(r,t)+Jg(r,e)+Kg(r,n)}function jg(r,t){const e=1-r;return e*e*e*t}function Qg(r,t){const e=1-r;return 3*e*e*r*t}function t0(r,t){return 3*(1-r)*r*r*t}function e0(r,t){return r*r*r*t}function No(r,t,e,n,i){return jg(r,t)+Qg(r,e)+t0(r,n)+e0(r,i)}class Ep extends Fi{constructor(t=new mt,e=new mt,n=new mt,i=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new mt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(No(t,i.x,s.x,o.x,a.x),No(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class n0 extends Fi{constructor(t=new Z,e=new Z,n=new Z,i=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Z){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(No(t,i.x,s.x,o.x,a.x),No(t,i.y,s.y,o.y,a.y),No(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Tp extends Fi{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class i0 extends Fi{constructor(t=new Z,e=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new Z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bp extends Fi{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Uo(t,i.x,s.x,o.x),Uo(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class r0 extends Fi{constructor(t=new Z,e=new Z,n=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Z){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Uo(t,i.x,s.x,o.x),Uo(t,i.y,s.y,o.y),Uo(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wp extends Fi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Pf(a,l.x,c.x,u.x,h.x),Pf(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new mt().fromArray(i))}return this}}var Iu=Object.freeze({__proto__:null,ArcCurve:qg,CatmullRomCurve3:Zg,CubicBezierCurve:Ep,CubicBezierCurve3:n0,EllipseCurve:Eh,LineCurve:Tp,LineCurve3:i0,QuadraticBezierCurve:bp,QuadraticBezierCurve3:r0,SplineCurve:wp});class s0 extends Fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Iu[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Iu[i.type]().fromJSON(i))}return this}}class Hs extends s0{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Tp(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new bp(this.currentPoint.clone(),new mt(t,e),new mt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new Ep(this.currentPoint.clone(),new mt(t,e),new mt(n,i),new mt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new wp(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new Eh(t,e,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}const Ba=new Z,za=new Z,Mc=new Z,ka=new li;class bh extends wn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),s=Math.cos(zs*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:p,c:m}=ka;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),ka.getNormal(Mc),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let M=0;M<3;M++){const x=(M+1)%3,v=h[M],A=h[x],b=ka[u[M]],E=ka[u[x]],P=`${v}_${A}`,S=`${A}_${v}`;S in f&&f[S]?(Mc.dot(f[S].normal)<=s&&(d.push(b.x,b.y,b.z),d.push(E.x,E.y,E.z)),f[S]=null):P in f||(f[P]={index0:c[M],index1:c[x],normal:Mc.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:p}=f[g];Ba.fromBufferAttribute(a,_),za.fromBufferAttribute(a,p),d.push(Ba.x,Ba.y,Ba.z),d.push(za.x,za.y,za.z)}this.setAttribute("position",new Ve(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Vs extends Hs{constructor(t){super(t),this.uuid=ls(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Hs().fromJSON(i))}return this}}const o0={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=Ap(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,d;if(n&&(s=h0(r,t,s,e)),r.length>80*e){a=c=r[0],l=u=r[1];for(let g=e;g<i;g+=e)h=r[g],f=r[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return ta(s,o,e,a,l,d,0),o}};function Ap(r,t,e,n,i){let s,o;if(i===M0(r,t,e,n)>0)for(s=t;s<e;s+=n)o=Df(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=Df(s,r[s],r[s+1],o);return o&&kl(o,o.next)&&(na(o),o=o.next),o}function is(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(kl(e,e.next)||Ce(e.prev,e,e.next)===0)){if(na(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ta(r,t,e,n,i,s,o){if(!r)return;!o&&s&&_0(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?l0(r,n,i,s):a0(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),na(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=c0(is(r),t,e),ta(r,t,e,n,i,s,2)):o===2&&u0(r,t,e,n,i,s):ta(is(r),t,e,n,i,s,1);break}}}function a0(r){const t=r.prev,e=r,n=r.next;if(Ce(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Ls(i,a,s,l,o,c,g.x,g.y)&&Ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function l0(r,t,e,n){const i=r.prev,s=r,o=r.next;if(Ce(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,m=Uu(d,g,t,e,n),M=Uu(_,p,t,e,n);let x=r.prevZ,v=r.nextZ;for(;x&&x.z>=m&&v&&v.z<=M;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&Ls(a,u,l,h,c,f,x.x,x.y)&&Ce(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&Ls(a,u,l,h,c,f,v.x,v.y)&&Ce(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=m;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&Ls(a,u,l,h,c,f,x.x,x.y)&&Ce(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&Ls(a,u,l,h,c,f,v.x,v.y)&&Ce(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function c0(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!kl(i,s)&&Cp(i,n,n.next,s)&&ea(i,s)&&ea(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),na(n),na(n.next),n=r=s),n=n.next}while(n!==r);return is(n)}function u0(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&x0(o,a)){let l=Rp(o,a);o=is(o,o.next),l=is(l,l.next),ta(o,t,e,n,i,s,0),ta(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function h0(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=Ap(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(v0(c));for(i.sort(f0),s=0;s<i.length;s++)e=d0(i[s],e);return e}function f0(r,t){return r.x-t.x}function d0(r,t){const e=p0(r,t);if(!e)return t;const n=Rp(e,r);return is(n,n.next),is(e,e.next)}function p0(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Ls(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(s-e.x),ea(e,r)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&m0(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function m0(r,t){return Ce(r.prev,r,t.prev)<0&&Ce(t.next,r,r.next)<0}function _0(r,t,e,n){let i=r;do i.z===0&&(i.z=Uu(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,g0(i)}function g0(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function Uu(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function v0(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Ls(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function x0(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!y0(r,t)&&(ea(r,t)&&ea(t,r)&&S0(r,t)&&(Ce(r.prev,r,t.prev)||Ce(r,t.prev,t))||kl(r,t)&&Ce(r.prev,r,r.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function kl(r,t){return r.x===t.x&&r.y===t.y}function Cp(r,t,e,n){const i=Va(Ce(r,t,e)),s=Va(Ce(r,t,n)),o=Va(Ce(e,n,r)),a=Va(Ce(e,n,t));return!!(i!==s&&o!==a||i===0&&Ha(r,e,t)||s===0&&Ha(r,n,t)||o===0&&Ha(e,r,n)||a===0&&Ha(e,t,n))}function Ha(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Va(r){return r>0?1:r<0?-1:0}function y0(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Cp(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function ea(r,t){return Ce(r.prev,r,r.next)<0?Ce(r,t,r.next)>=0&&Ce(r,r.prev,t)>=0:Ce(r,t,r.prev)<0||Ce(r,r.next,t)<0}function S0(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Rp(r,t){const e=new Nu(r.i,r.x,r.y),n=new Nu(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Df(r,t,e,n){const i=new Nu(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function na(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Nu(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function M0(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Di{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Di.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Lf(t),If(n,t);let o=t.length;e.forEach(Lf);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,If(n,e[l]);const a=o0.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Lf(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function If(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class wh extends wn{constructor(t=new Vs([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Ve(i,3)),this.setAttribute("uv",new Ve(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:E0;let x,v=!1,A,b,E,P;m&&(x=m.getSpacedPoints(u),v=!0,f=!1,A=m.computeFrenetFrames(u,!1),b=new Z,E=new Z,P=new Z),f||(p=0,d=0,g=0,_=0);const S=a.extractPoints(c);let y=S.shape;const I=S.holes;if(!Di.isClockWise(y)){y=y.reverse();for(let tt=0,Y=I.length;tt<Y;tt++){const T=I[tt];Di.isClockWise(T)&&(I[tt]=T.reverse())}}const G=Di.triangulateShape(y,I),W=y;for(let tt=0,Y=I.length;tt<Y;tt++){const T=I[tt];y=y.concat(T)}function j(tt,Y,T){return Y||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(Y,T)}const X=y.length,J=G.length;function H(tt,Y,T){let rt,nt,z;const k=tt.x-Y.x,N=tt.y-Y.y,lt=T.x-tt.x,D=T.y-tt.y,w=k*k+N*N,Q=k*D-N*lt;if(Math.abs(Q)>Number.EPSILON){const ot=Math.sqrt(w),ct=Math.sqrt(lt*lt+D*D),ut=Y.x-N/ot,St=Y.y+k/ot,xt=T.x-D/ct,Mt=T.y+lt/ct,Ht=((xt-ut)*D-(Mt-St)*lt)/(k*D-N*lt);rt=ut+k*Ht-tt.x,nt=St+N*Ht-tt.y;const vt=rt*rt+nt*nt;if(vt<=2)return new mt(rt,nt);z=Math.sqrt(vt/2)}else{let ot=!1;k>Number.EPSILON?lt>Number.EPSILON&&(ot=!0):k<-Number.EPSILON?lt<-Number.EPSILON&&(ot=!0):Math.sign(N)===Math.sign(D)&&(ot=!0),ot?(rt=-N,nt=k,z=Math.sqrt(w)):(rt=k,nt=N,z=Math.sqrt(w/2))}return new mt(rt/z,nt/z)}const ft=[];for(let tt=0,Y=W.length,T=Y-1,rt=tt+1;tt<Y;tt++,T++,rt++)T===Y&&(T=0),rt===Y&&(rt=0),ft[tt]=H(W[tt],W[T],W[rt]);const B=[];let gt,It=ft.concat();for(let tt=0,Y=I.length;tt<Y;tt++){const T=I[tt];gt=[];for(let rt=0,nt=T.length,z=nt-1,k=rt+1;rt<nt;rt++,z++,k++)z===nt&&(z=0),k===nt&&(k=0),gt[rt]=H(T[rt],T[z],T[k]);B.push(gt),It=It.concat(gt)}for(let tt=0;tt<p;tt++){const Y=tt/p,T=d*Math.cos(Y*Math.PI/2),rt=g*Math.sin(Y*Math.PI/2)+_;for(let nt=0,z=W.length;nt<z;nt++){const k=j(W[nt],ft[nt],rt);C(k.x,k.y,-T)}for(let nt=0,z=I.length;nt<z;nt++){const k=I[nt];gt=B[nt];for(let N=0,lt=k.length;N<lt;N++){const D=j(k[N],gt[N],rt);C(D.x,D.y,-T)}}}const $t=g+_;for(let tt=0;tt<X;tt++){const Y=f?j(y[tt],It[tt],$t):y[tt];v?(E.copy(A.normals[0]).multiplyScalar(Y.x),b.copy(A.binormals[0]).multiplyScalar(Y.y),P.copy(x[0]).add(E).add(b),C(P.x,P.y,P.z)):C(Y.x,Y.y,0)}for(let tt=1;tt<=u;tt++)for(let Y=0;Y<X;Y++){const T=f?j(y[Y],It[Y],$t):y[Y];v?(E.copy(A.normals[tt]).multiplyScalar(T.x),b.copy(A.binormals[tt]).multiplyScalar(T.y),P.copy(x[tt]).add(E).add(b),C(P.x,P.y,P.z)):C(T.x,T.y,h/u*tt)}for(let tt=p-1;tt>=0;tt--){const Y=tt/p,T=d*Math.cos(Y*Math.PI/2),rt=g*Math.sin(Y*Math.PI/2)+_;for(let nt=0,z=W.length;nt<z;nt++){const k=j(W[nt],ft[nt],rt);C(k.x,k.y,h+T)}for(let nt=0,z=I.length;nt<z;nt++){const k=I[nt];gt=B[nt];for(let N=0,lt=k.length;N<lt;N++){const D=j(k[N],gt[N],rt);v?C(D.x,D.y+x[u-1].y,x[u-1].x+T):C(D.x,D.y,h+T)}}}O(),U();function O(){const tt=i.length/3;if(f){let Y=0,T=X*Y;for(let rt=0;rt<J;rt++){const nt=G[rt];et(nt[2]+T,nt[1]+T,nt[0]+T)}Y=u+p*2,T=X*Y;for(let rt=0;rt<J;rt++){const nt=G[rt];et(nt[0]+T,nt[1]+T,nt[2]+T)}}else{for(let Y=0;Y<J;Y++){const T=G[Y];et(T[2],T[1],T[0])}for(let Y=0;Y<J;Y++){const T=G[Y];et(T[0]+X*u,T[1]+X*u,T[2]+X*u)}}n.addGroup(tt,i.length/3-tt,0)}function U(){const tt=i.length/3;let Y=0;L(W,Y),Y+=W.length;for(let T=0,rt=I.length;T<rt;T++){const nt=I[T];L(nt,Y),Y+=nt.length}n.addGroup(tt,i.length/3-tt,1)}function L(tt,Y){let T=tt.length;for(;--T>=0;){const rt=T;let nt=T-1;nt<0&&(nt=tt.length-1);for(let z=0,k=u+p*2;z<k;z++){const N=X*z,lt=X*(z+1),D=Y+rt+N,w=Y+nt+N,Q=Y+nt+lt,ot=Y+rt+lt;ht(D,w,Q,ot)}}}function C(tt,Y,T){l.push(tt),l.push(Y),l.push(T)}function et(tt,Y,T){K(tt),K(Y),K(T);const rt=i.length/3,nt=M.generateTopUV(n,i,rt-3,rt-2,rt-1);dt(nt[0]),dt(nt[1]),dt(nt[2])}function ht(tt,Y,T,rt){K(tt),K(Y),K(rt),K(Y),K(T),K(rt);const nt=i.length/3,z=M.generateSideWallUV(n,i,nt-6,nt-3,nt-2,nt-1);dt(z[0]),dt(z[1]),dt(z[3]),dt(z[1]),dt(z[2]),dt(z[3])}function K(tt){i.push(l[tt*3+0]),i.push(l[tt*3+1]),i.push(l[tt*3+2])}function dt(tt){s.push(tt.x),s.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return T0(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Iu[i.type]().fromJSON(i)),new wh(n,t.options)}}const E0={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new mt(s,o),new mt(a,l),new mt(c,u)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[i*3],d=t[i*3+1],g=t[i*3+2],_=t[s*3],p=t[s*3+1],m=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new mt(o,1-l),new mt(c,1-h),new mt(f,1-g),new mt(_,1-m)]:[new mt(a,1-l),new mt(u,1-h),new mt(d,1-g),new mt(p,1-m)]}};function T0(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class pa extends wn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,f=e/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const M=m*f-o;for(let x=0;x<c;x++){const v=x*h-s;g.push(v,-M,0),_.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const x=M+c*m,v=M+c*(m+1),A=M+1+c*(m+1),b=M+1+c*m;d.push(x,v,b),d.push(v,A,b)}this.setIndex(d),this.setAttribute("position",new Ve(g,3)),this.setAttribute("normal",new Ve(_,3)),this.setAttribute("uv",new Ve(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ah extends wn{constructor(t=new Vs([new mt(0,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ve(i,3)),this.setAttribute("normal",new Ve(s,3)),this.setAttribute("uv",new Ve(o,2));function c(u){const h=i.length/3,f=u.extractPoints(e);let d=f.shape;const g=f.holes;Di.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){const M=g[p];Di.isClockWise(M)===!0&&(g[p]=M.reverse())}const _=Di.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){const M=g[p];d=d.concat(M)}for(let p=0,m=d.length;p<m;p++){const M=d[p];i.push(M.x,M.y,0),s.push(0,0,1),o.push(M.x,M.y)}for(let p=0,m=_.length;p<m;p++){const M=_[p],x=M[0]+h,v=M[1]+h,A=M[2]+h;n.push(x,v,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return b0(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const o=e[t.shapes[i]];n.push(o)}return new Ah(n,t.curveSegments)}}function b0(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class w0 extends fo{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Yt(16777215),this.specular=new Yt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cp,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class A0 extends fo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=X_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class C0 extends fo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Uf={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class R0{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const P0=new R0;class Hl{constructor(t){this.manager=t!==void 0?t:P0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Hl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gi={};class D0 extends Error{constructor(t,e){super(t),this.response=e}}class Pp extends Hl{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Uf.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Gi[t]!==void 0){Gi[t].push({onLoad:e,onProgress:n,onError:i});return}Gi[t]=[],Gi[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Gi[t],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const p=new ReadableStream({start(m){M();function M(){h.read().then(({done:x,value:v})=>{if(x)m.close();else{_+=v.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let b=0,E=u.length;b<E;b++){const P=u[b];P.onProgress&&P.onProgress(A)}m.enqueue(v),M()}},x=>{m.error(x)})}}});return new Response(p)}else throw new D0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Uf.add(t,c);const u=Gi[t];delete Gi[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Gi[t];if(u===void 0)throw this.manager.itemError(t),c;delete Gi[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Dp extends rn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ec=new we,Nf=new Z,Of=new Z;class L0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sh,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Nf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nf),Of.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Of),e.updateMatrixWorld(),Ec.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ec),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ec)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Vl extends yp{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class I0 extends L0{constructor(){super(new Vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class U0 extends Dp{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new I0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class N0 extends Dp{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class O0 extends wn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class F0 extends Xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class B0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ff(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ff();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ff(){return performance.now()}const Bf=new mt;class z0{constructor(t=new mt(1/0,1/0),e=new mt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Bf.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bf).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class ur{constructor(){this.type="ShapePath",this.color=new Yt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Hs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,o){return this.currentPath.bezierCurveTo(t,e,n,i,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(m){const M=[];for(let x=0,v=m.length;x<v;x++){const A=m[x],b=new Vs;b.curves=A.curves,M.push(b)}return M}function n(m,M){const x=M.length;let v=!1;for(let A=x-1,b=0;b<x;A=b++){let E=M[A],P=M[b],S=P.x-E.x,y=P.y-E.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(E=M[b],S=-S,P=M[A],y=-y),m.y<E.y||m.y>P.y)continue;if(m.y===E.y){if(m.x===E.x)return!0}else{const I=y*(m.x-E.x)-S*(m.y-E.y);if(I===0)return!0;if(I<0)continue;v=!v}}else{if(m.y!==E.y)continue;if(P.x<=m.x&&m.x<=E.x||E.x<=m.x&&m.x<=P.x)return!0}}return v}const i=Di.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Vs,l.curves=a.curves,c.push(l),c;let u=!i(s[0].getPoints());u=t?!u:u;const h=[],f=[];let d=[],g=0,_;f[g]=void 0,d[g]=[];for(let m=0,M=s.length;m<M;m++)a=s[m],_=a.getPoints(),o=i(_),o=t?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new Vs,p:_},f[g].s.curves=a.curves,u&&g++,d[g]=[]):d[g].push({h:a,p:_[0]});if(!f[0])return e(s);if(f.length>1){let m=!1,M=0;for(let x=0,v=f.length;x<v;x++)h[x]=[];for(let x=0,v=f.length;x<v;x++){const A=d[x];for(let b=0;b<A.length;b++){const E=A[b];let P=!0;for(let S=0;S<f.length;S++)n(E.p,f[S].p)&&(x!==S&&M++,P?(P=!1,h[S].push(E)):m=!0);P&&h[x].push(E)}}M>0&&m===!1&&(d=h)}let p;for(let m=0,M=f.length;m<M;m++){l=f[m].s,c.push(l),p=d[m];for(let x=0,v=p.length;x<v;x++)l.holes.push(p[x].h)}return c}}function zf(r,t,e,n){const i=k0(n);switch(e){case np:return r*t;case rp:return r*t;case sp:return r*t*2;case op:return r*t/i.components*i.byteLength;case mh:return r*t/i.components*i.byteLength;case ap:return r*t*2/i.components*i.byteLength;case _h:return r*t*2/i.components*i.byteLength;case ip:return r*t*3/i.components*i.byteLength;case gi:return r*t*4/i.components*i.byteLength;case gh:return r*t*4/i.components*i.byteLength;case sl:case ol:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case al:case ll:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case lu:case uu:return Math.max(r,16)*Math.max(t,8)/4;case au:case cu:return Math.max(r,8)*Math.max(t,8)/2;case hu:case fu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case du:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case pu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case mu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case _u:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case gu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case vu:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case xu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case yu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Su:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Mu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Eu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Tu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case bu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case wu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Au:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case cl:case Cu:case Ru:return Math.ceil(r/4)*Math.ceil(t/4)*16;case lp:case Pu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Du:case Lu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function k0(r){switch(r){case er:case Qd:return{byteLength:1,components:1};case jo:case tp:case ji:return{byteLength:2,components:1};case dh:case ph:return{byteLength:2,components:4};case es:case fh:case Zi:return{byteLength:4,components:1};case ep:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Lp(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function H0(r){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var V0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G0=`#ifdef USE_ALPHAHASH
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
#endif`,W0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z0=`#ifdef USE_AOMAP
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
#endif`,$0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J0=`#ifdef USE_BATCHING
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
#endif`,K0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ev=`#ifdef USE_IRIDESCENCE
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
#endif`,nv=`#ifdef USE_BUMPMAP
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
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ov=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,av=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hv=`#define PI 3.141592653589793
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
} // validated`,fv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dv=`vec3 transformedNormal = objectNormal;
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
#endif`,pv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_v=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vv="gl_FragColor = linearToOutputTexel( gl_FragColor );",xv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yv=`#ifdef USE_ENVMAP
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
#endif`,Sv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mv=`#ifdef USE_ENVMAP
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
#endif`,Ev=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tv=`#ifdef USE_ENVMAP
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
#endif`,bv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Av=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rv=`#ifdef USE_GRADIENTMAP
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
}`,Pv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iv=`uniform bool receiveShadow;
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
#endif`,Uv=`#ifdef USE_ENVMAP
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
#endif`,Nv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zv=`PhysicalMaterial material;
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
#endif`,kv=`struct PhysicalMaterial {
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
}`,Hv=`
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
#endif`,Vv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$v=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kv=`#if defined( USE_POINTS_UV )
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
#endif`,jv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`#ifdef USE_MORPHTARGETS
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
#endif`,rx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ux=`#ifdef USE_NORMALMAP
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
#endif`,hx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_x=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wx=`float getShadowMask() {
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
}`,Ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cx=`#ifdef USE_SKINNING
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
#endif`,Rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Px=`#ifdef USE_SKINNING
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
#endif`,Dx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ux=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nx=`#ifdef USE_TRANSMISSION
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
#endif`,Ox=`#ifdef USE_TRANSMISSION
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
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vx=`uniform sampler2D t2D;
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
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`#include <common>
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
}`,Zx=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$x=`#define DISTANCE
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
}`,Jx=`#define DISTANCE
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
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`uniform float scale;
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
}`,ty=`uniform vec3 diffuse;
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
}`,ey=`#include <common>
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
}`,ny=`uniform vec3 diffuse;
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
}`,iy=`#define LAMBERT
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
}`,ry=`#define LAMBERT
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
}`,sy=`#define MATCAP
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
}`,oy=`#define MATCAP
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
}`,ay=`#define NORMAL
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
}`,ly=`#define NORMAL
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
}`,cy=`#define PHONG
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
}`,uy=`#define PHONG
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
}`,hy=`#define STANDARD
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
}`,fy=`#define STANDARD
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
}`,dy=`#define TOON
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
}`,py=`#define TOON
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
}`,my=`uniform float size;
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
}`,_y=`uniform vec3 diffuse;
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
}`,gy=`#include <common>
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
}`,vy=`uniform vec3 color;
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
}`,xy=`uniform float rotation;
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
}`,yy=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:V0,alphahash_pars_fragment:G0,alphamap_fragment:W0,alphamap_pars_fragment:X0,alphatest_fragment:Y0,alphatest_pars_fragment:q0,aomap_fragment:Z0,aomap_pars_fragment:$0,batching_pars_vertex:J0,batching_vertex:K0,begin_vertex:j0,beginnormal_vertex:Q0,bsdfs:tv,iridescence_fragment:ev,bumpmap_pars_fragment:nv,clipping_planes_fragment:iv,clipping_planes_pars_fragment:rv,clipping_planes_pars_vertex:sv,clipping_planes_vertex:ov,color_fragment:av,color_pars_fragment:lv,color_pars_vertex:cv,color_vertex:uv,common:hv,cube_uv_reflection_fragment:fv,defaultnormal_vertex:dv,displacementmap_pars_vertex:pv,displacementmap_vertex:mv,emissivemap_fragment:_v,emissivemap_pars_fragment:gv,colorspace_fragment:vv,colorspace_pars_fragment:xv,envmap_fragment:yv,envmap_common_pars_fragment:Sv,envmap_pars_fragment:Mv,envmap_pars_vertex:Ev,envmap_physical_pars_fragment:Uv,envmap_vertex:Tv,fog_vertex:bv,fog_pars_vertex:wv,fog_fragment:Av,fog_pars_fragment:Cv,gradientmap_pars_fragment:Rv,lightmap_pars_fragment:Pv,lights_lambert_fragment:Dv,lights_lambert_pars_fragment:Lv,lights_pars_begin:Iv,lights_toon_fragment:Nv,lights_toon_pars_fragment:Ov,lights_phong_fragment:Fv,lights_phong_pars_fragment:Bv,lights_physical_fragment:zv,lights_physical_pars_fragment:kv,lights_fragment_begin:Hv,lights_fragment_maps:Vv,lights_fragment_end:Gv,logdepthbuf_fragment:Wv,logdepthbuf_pars_fragment:Xv,logdepthbuf_pars_vertex:Yv,logdepthbuf_vertex:qv,map_fragment:Zv,map_pars_fragment:$v,map_particle_fragment:Jv,map_particle_pars_fragment:Kv,metalnessmap_fragment:jv,metalnessmap_pars_fragment:Qv,morphinstance_vertex:tx,morphcolor_vertex:ex,morphnormal_vertex:nx,morphtarget_pars_vertex:ix,morphtarget_vertex:rx,normal_fragment_begin:sx,normal_fragment_maps:ox,normal_pars_fragment:ax,normal_pars_vertex:lx,normal_vertex:cx,normalmap_pars_fragment:ux,clearcoat_normal_fragment_begin:hx,clearcoat_normal_fragment_maps:fx,clearcoat_pars_fragment:dx,iridescence_pars_fragment:px,opaque_fragment:mx,packing:_x,premultiplied_alpha_fragment:gx,project_vertex:vx,dithering_fragment:xx,dithering_pars_fragment:yx,roughnessmap_fragment:Sx,roughnessmap_pars_fragment:Mx,shadowmap_pars_fragment:Ex,shadowmap_pars_vertex:Tx,shadowmap_vertex:bx,shadowmask_pars_fragment:wx,skinbase_vertex:Ax,skinning_pars_vertex:Cx,skinning_vertex:Rx,skinnormal_vertex:Px,specularmap_fragment:Dx,specularmap_pars_fragment:Lx,tonemapping_fragment:Ix,tonemapping_pars_fragment:Ux,transmission_fragment:Nx,transmission_pars_fragment:Ox,uv_pars_fragment:Fx,uv_pars_vertex:Bx,uv_vertex:zx,worldpos_vertex:kx,background_vert:Hx,background_frag:Vx,backgroundCube_vert:Gx,backgroundCube_frag:Wx,cube_vert:Xx,cube_frag:Yx,depth_vert:qx,depth_frag:Zx,distanceRGBA_vert:$x,distanceRGBA_frag:Jx,equirect_vert:Kx,equirect_frag:jx,linedashed_vert:Qx,linedashed_frag:ty,meshbasic_vert:ey,meshbasic_frag:ny,meshlambert_vert:iy,meshlambert_frag:ry,meshmatcap_vert:sy,meshmatcap_frag:oy,meshnormal_vert:ay,meshnormal_frag:ly,meshphong_vert:cy,meshphong_frag:uy,meshphysical_vert:hy,meshphysical_frag:fy,meshtoon_vert:dy,meshtoon_frag:py,points_vert:my,points_frag:_y,shadow_vert:gy,shadow_frag:vy,sprite_vert:xy,sprite_frag:yy},Ct={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},wi={basic:{uniforms:xn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:xn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Yt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:xn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:xn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:xn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Yt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:xn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:xn([Ct.points,Ct.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:xn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:xn([Ct.common,Ct.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:xn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:xn([Ct.sprite,Ct.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:xn([Ct.common,Ct.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:xn([Ct.lights,Ct.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};wi.physical={uniforms:xn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Ga={r:0,b:0,g:0},Lr=new Ni,Sy=new we;function My(r,t,e,n,i,s,o){const a=new Yt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function _(x){let v=!1;const A=g(x);A===null?m(a,l):A&&A.isColor&&(m(A,1),v=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(x,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===zl)?(u===void 0&&(u=new Ze(new Jn(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:eo(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Lr.copy(v.backgroundRotation),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Sy.makeRotationFromEuler(Lr)),u.material.toneMapped=he.getTransfer(A.colorSpace)!==_e,(h!==A||f!==A.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,d=r.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Ze(new pa(2,2),new Rn({name:"BackgroundMaterial",uniforms:eo(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=he.getTransfer(A.colorSpace)!==_e,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,d=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,v){x.getRGB(Ga,xp(r)),n.buffers.color.setClear(Ga.r,Ga.g,Ga.b,v,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:_,addToRenderList:p,dispose:M}}function Ey(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(y,I,F,G,W){let j=!1;const X=h(G,F,I);s!==X&&(s=X,c(s.object)),j=d(y,G,F,W),j&&g(y,G,F,W),W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,v(y,I,F,G),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function u(y){return r.deleteVertexArray(y)}function h(y,I,F){const G=F.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let j=W[I.id];j===void 0&&(j={},W[I.id]=j);let X=j[G];return X===void 0&&(X=f(l()),j[G]=X),X}function f(y){const I=[],F=[],G=[];for(let W=0;W<e;W++)I[W]=0,F[W]=0,G[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:G,object:y,attributes:{},index:null}}function d(y,I,F,G){const W=s.attributes,j=I.attributes;let X=0;const J=F.getAttributes();for(const H in J)if(J[H].location>=0){const B=W[H];let gt=j[H];if(gt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor)),B===void 0||B.attribute!==gt||gt&&B.data!==gt.data)return!0;X++}return s.attributesNum!==X||s.index!==G}function g(y,I,F,G){const W={},j=I.attributes;let X=0;const J=F.getAttributes();for(const H in J)if(J[H].location>=0){let B=j[H];B===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(B=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(B=y.instanceColor));const gt={};gt.attribute=B,B&&B.data&&(gt.data=B.data),W[H]=gt,X++}s.attributes=W,s.attributesNum=X,s.index=G}function _(){const y=s.newAttributes;for(let I=0,F=y.length;I<F;I++)y[I]=0}function p(y){m(y,0)}function m(y,I){const F=s.newAttributes,G=s.enabledAttributes,W=s.attributeDivisors;F[y]=1,G[y]===0&&(r.enableVertexAttribArray(y),G[y]=1),W[y]!==I&&(r.vertexAttribDivisor(y,I),W[y]=I)}function M(){const y=s.newAttributes,I=s.enabledAttributes;for(let F=0,G=I.length;F<G;F++)I[F]!==y[F]&&(r.disableVertexAttribArray(F),I[F]=0)}function x(y,I,F,G,W,j,X){X===!0?r.vertexAttribIPointer(y,I,F,W,j):r.vertexAttribPointer(y,I,F,G,W,j)}function v(y,I,F,G){_();const W=G.attributes,j=F.getAttributes(),X=I.defaultAttributeValues;for(const J in j){const H=j[J];if(H.location>=0){let ft=W[J];if(ft===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(ft=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(ft=y.instanceColor)),ft!==void 0){const B=ft.normalized,gt=ft.itemSize,It=t.get(ft);if(It===void 0)continue;const $t=It.buffer,O=It.type,U=It.bytesPerElement,L=O===r.INT||O===r.UNSIGNED_INT||ft.gpuType===fh;if(ft.isInterleavedBufferAttribute){const C=ft.data,et=C.stride,ht=ft.offset;if(C.isInstancedInterleavedBuffer){for(let K=0;K<H.locationSize;K++)m(H.location+K,C.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let K=0;K<H.locationSize;K++)p(H.location+K);r.bindBuffer(r.ARRAY_BUFFER,$t);for(let K=0;K<H.locationSize;K++)x(H.location+K,gt/H.locationSize,O,B,et*U,(ht+gt/H.locationSize*K)*U,L)}else{if(ft.isInstancedBufferAttribute){for(let C=0;C<H.locationSize;C++)m(H.location+C,ft.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let C=0;C<H.locationSize;C++)p(H.location+C);r.bindBuffer(r.ARRAY_BUFFER,$t);for(let C=0;C<H.locationSize;C++)x(H.location+C,gt/H.locationSize,O,B,gt*U,gt/H.locationSize*C*U,L)}}else if(X!==void 0){const B=X[J];if(B!==void 0)switch(B.length){case 2:r.vertexAttrib2fv(H.location,B);break;case 3:r.vertexAttrib3fv(H.location,B);break;case 4:r.vertexAttrib4fv(H.location,B);break;default:r.vertexAttrib1fv(H.location,B)}}}}M()}function A(){P();for(const y in n){const I=n[y];for(const F in I){const G=I[F];for(const W in G)u(G[W].object),delete G[W];delete I[F]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;const I=n[y.id];for(const F in I){const G=I[F];for(const W in G)u(G[W].object),delete G[W];delete I[F]}delete n[y.id]}function E(y){for(const I in n){const F=n[I];if(F[y.id]===void 0)continue;const G=F[y.id];for(const W in G)u(G[W].object),delete G[W];delete F[y.id]}}function P(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function Ty(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function by(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==gi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const P=E===ji&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==er&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Zi&&!P)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:A,maxSamples:b}}function wy(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Fr,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const M=s?0:n,x=M*4;let v=m.clippingState||null;l.value=v,v=u(g,f,x,d);for(let A=0;A!==x;++A)v[A]=e[A];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,v=d;x!==_;++x,v+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Ay(r){let t=new WeakMap;function e(o,a){return a===iu?o.mapping=Js:a===ru&&(o.mapping=Ks),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===iu||a===ru)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Vg(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Is=4,kf=[.125,.215,.35,.446,.526,.582],Gr=20,Tc=new Vl,Hf=new Yt;let bc=null,wc=0,Ac=0,Cc=!1;const Br=(1+Math.sqrt(5))/2,Ts=1/Br,Vf=[new Z(-Br,Ts,0),new Z(Br,Ts,0),new Z(-Ts,0,Br),new Z(Ts,0,Br),new Z(0,Br,-Ts),new Z(0,Br,Ts),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class Gf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){bc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Ac=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bc,wc,Ac),this._renderer.xr.enabled=Cc,t.scissorTest=!1,Wa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Js||t.mapping===Ks?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Ac=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:ji,format:gi,colorSpace:to,depthBuffer:!1},i=Wf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wf(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cy(s)),this._blurMaterial=Ry(s,t,e)}return i}_compileMaterial(t){const e=new Ze(this._lodPlanes[0],t);this._renderer.compile(e,Tc)}_sceneToCubeUV(t,e,n,i){const a=new Xn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Hf),u.toneMapping=vr,u.autoClear=!1;const d=new ns({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),g=new Ze(new Jn,d);let _=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(Hf),_=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;Wa(i,M*x,m>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Js||t.mapping===Ks;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ze(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Wa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Tc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Vf[(i-s-1)%Vf.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ze(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Gr-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Gr;p>Gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gr}`);const m=[];let M=0;for(let E=0;E<Gr;++E){const P=E/_,S=Math.exp(-P*P/2);m.push(S),E===0?M+=S:E<p&&(M+=2*S)}for(let E=0;E<m.length;E++)m[E]=m[E]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const v=this._sizeLods[i],A=3*v*(i>x-Is?i-x+Is:0),b=4*(this._cubeSize-v);Wa(e,A,b,3*v,2*v),l.setRenderTarget(e),l.render(h,Tc)}}function Cy(r){const t=[],e=[],n=[];let i=r;const s=r-Is+1+kf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Is?l=kf[o-r+Is-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,p=2,m=1,M=new Float32Array(_*g*d),x=new Float32Array(p*g*d),v=new Float32Array(m*g*d);for(let b=0;b<d;b++){const E=b%3*2/3-1,P=b>2?0:-1,S=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];M.set(S,_*g*b),x.set(f,p*g*b);const y=[b,b,b,b,b,b];v.set(y,m*g*b)}const A=new wn;A.setAttribute("position",new Si(M,_)),A.setAttribute("uv",new Si(x,p)),A.setAttribute("faceIndex",new Si(v,m)),t.push(A),i>Is&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wf(r,t,e){const n=new yi(r,t,e);return n.texture.mapping=zl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wa(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Ry(r,t,e){const n=new Float32Array(Gr),i=new Z(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Xf(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Yf(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Ch(){return`

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
	`}function Py(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===iu||l===ru,u=l===Js||l===Ks;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Gf(r)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new Gf(r)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Dy(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Rs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ly(r,t,e,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)t.update(f[d],r.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let x=0,v=M.length;x<v;x+=3){const A=M[x+0],b=M[x+1],E=M[x+2];f.push(A,b,b,E,E,A)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const A=x+0,b=x+1,E=x+2;f.push(A,b,b,E,E,A)}}else return;const p=new(hp(f)?vp:gp)(f,1);p.version=_;const m=s.get(h);m&&t.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Iy(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*o,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function h(f,d,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let m=0;for(let M=0;M<g;M++)m+=d[M]*_[M];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Uy(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ny(r,t,e){const n=new WeakMap,i=new Le;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let S=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let v=a.attributes.position.count*x,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const b=new Float32Array(v*A*4*h),E=new dp(b,v,A,h);E.type=Zi,E.needsUpdate=!0;const P=x*4;for(let y=0;y<h;y++){const I=p[y],F=m[y],G=M[y],W=v*A*4*y;for(let j=0;j<I.count;j++){const X=j*P;d===!0&&(i.fromBufferAttribute(I,j),b[W+X+0]=i.x,b[W+X+1]=i.y,b[W+X+2]=i.z,b[W+X+3]=0),g===!0&&(i.fromBufferAttribute(F,j),b[W+X+4]=i.x,b[W+X+5]=i.y,b[W+X+6]=i.z,b[W+X+7]=0),_===!0&&(i.fromBufferAttribute(G,j),b[W+X+8]=i.x,b[W+X+9]=i.y,b[W+X+10]=i.z,b[W+X+11]=G.itemSize===4?i.w:1)}}f={count:h,texture:E,size:new mt(v,A)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Oy(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const Ip=new Dn,qf=new Mp(1,1),Up=new dp,Np=new wg,Op=new Sp,Zf=[],$f=[],Jf=new Float32Array(16),Kf=new Float32Array(9),jf=new Float32Array(4);function po(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Zf[i];if(s===void 0&&(s=new Float32Array(i),Zf[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function $e(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Je(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Gl(r,t){let e=$f[t];e===void 0&&(e=new Int32Array(t),$f[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Fy(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function By(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;r.uniform2fv(this.addr,t),Je(e,t)}}function zy(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;r.uniform3fv(this.addr,t),Je(e,t)}}function ky(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;r.uniform4fv(this.addr,t),Je(e,t)}}function Hy(r,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if($e(e,n))return;jf.set(n),r.uniformMatrix2fv(this.addr,!1,jf),Je(e,n)}}function Vy(r,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if($e(e,n))return;Kf.set(n),r.uniformMatrix3fv(this.addr,!1,Kf),Je(e,n)}}function Gy(r,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if($e(e,n))return;Jf.set(n),r.uniformMatrix4fv(this.addr,!1,Jf),Je(e,n)}}function Wy(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Xy(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;r.uniform2iv(this.addr,t),Je(e,t)}}function Yy(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;r.uniform3iv(this.addr,t),Je(e,t)}}function qy(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;r.uniform4iv(this.addr,t),Je(e,t)}}function Zy(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function $y(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;r.uniform2uiv(this.addr,t),Je(e,t)}}function Jy(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;r.uniform3uiv(this.addr,t),Je(e,t)}}function Ky(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;r.uniform4uiv(this.addr,t),Je(e,t)}}function jy(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(qf.compareFunction=up,s=qf):s=Ip,e.setTexture2D(t||s,i)}function Qy(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Np,i)}function tS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Op,i)}function eS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Up,i)}function nS(r){switch(r){case 5126:return Fy;case 35664:return By;case 35665:return zy;case 35666:return ky;case 35674:return Hy;case 35675:return Vy;case 35676:return Gy;case 5124:case 35670:return Wy;case 35667:case 35671:return Xy;case 35668:case 35672:return Yy;case 35669:case 35673:return qy;case 5125:return Zy;case 36294:return $y;case 36295:return Jy;case 36296:return Ky;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return Qy;case 35680:case 36300:case 36308:case 36293:return tS;case 36289:case 36303:case 36311:case 36292:return eS}}function iS(r,t){r.uniform1fv(this.addr,t)}function rS(r,t){const e=po(t,this.size,2);r.uniform2fv(this.addr,e)}function sS(r,t){const e=po(t,this.size,3);r.uniform3fv(this.addr,e)}function oS(r,t){const e=po(t,this.size,4);r.uniform4fv(this.addr,e)}function aS(r,t){const e=po(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function lS(r,t){const e=po(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function cS(r,t){const e=po(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function uS(r,t){r.uniform1iv(this.addr,t)}function hS(r,t){r.uniform2iv(this.addr,t)}function fS(r,t){r.uniform3iv(this.addr,t)}function dS(r,t){r.uniform4iv(this.addr,t)}function pS(r,t){r.uniform1uiv(this.addr,t)}function mS(r,t){r.uniform2uiv(this.addr,t)}function _S(r,t){r.uniform3uiv(this.addr,t)}function gS(r,t){r.uniform4uiv(this.addr,t)}function vS(r,t,e){const n=this.cache,i=t.length,s=Gl(e,i);$e(n,s)||(r.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Ip,s[o])}function xS(r,t,e){const n=this.cache,i=t.length,s=Gl(e,i);$e(n,s)||(r.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Np,s[o])}function yS(r,t,e){const n=this.cache,i=t.length,s=Gl(e,i);$e(n,s)||(r.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Op,s[o])}function SS(r,t,e){const n=this.cache,i=t.length,s=Gl(e,i);$e(n,s)||(r.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Up,s[o])}function MS(r){switch(r){case 5126:return iS;case 35664:return rS;case 35665:return sS;case 35666:return oS;case 35674:return aS;case 35675:return lS;case 35676:return cS;case 5124:case 35670:return uS;case 35667:case 35671:return hS;case 35668:case 35672:return fS;case 35669:case 35673:return dS;case 5125:return pS;case 36294:return mS;case 36295:return _S;case 36296:return gS;case 35678:case 36198:case 36298:case 36306:case 35682:return vS;case 35679:case 36299:case 36307:return xS;case 35680:case 36300:case 36308:case 36293:return yS;case 36289:case 36303:case 36311:case 36292:return SS}}class ES{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=nS(e.type)}}class TS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=MS(e.type)}}class bS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Rc=/(\w+)(\])?(\[|\.)?/g;function Qf(r,t){r.seq.push(t),r.map[t.id]=t}function wS(r,t,e){const n=r.name,i=n.length;for(Rc.lastIndex=0;;){const s=Rc.exec(n),o=Rc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Qf(e,c===void 0?new ES(a,r,t):new TS(a,r,t));break}else{let h=e.map[a];h===void 0&&(h=new bS(a),Qf(e,h)),e=h}}}class ul{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);wS(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function td(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const AS=37297;let CS=0;function RS(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ed=new Zt;function PS(r){he._getMatrix(ed,he.workingColorSpace,r);const t=`mat3( ${ed.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(r)){case yl:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function nd(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+RS(r.getShaderSource(t),o)}else return i}function DS(r,t){const e=PS(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function LS(r,t){let e;switch(t){case F_:e="Linear";break;case B_:e="Reinhard";break;case z_:e="Cineon";break;case k_:e="ACESFilmic";break;case V_:e="AgX";break;case G_:e="Neutral";break;case H_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xa=new Z;function IS(){he.getLuminanceCoefficients(Xa);const r=Xa.x.toFixed(4),t=Xa.y.toFixed(4),e=Xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function US(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function NS(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function OS(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function bo(r){return r!==""}function id(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rd(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const FS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ou(r){return r.replace(FS,zS)}const BS=new Map;function zS(r,t){let e=te[t];if(e===void 0){const n=BS.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ou(e)}const kS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sd(r){return r.replace(kS,HS)}function HS(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function od(r){let t=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function VS(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Kd?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===__?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Wi&&(t="SHADOWMAP_TYPE_VSM"),t}function GS(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Js:case Ks:t="ENVMAP_TYPE_CUBE";break;case zl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function WS(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ks:t="ENVMAP_MODE_REFRACTION";break}return t}function XS(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case hh:t="ENVMAP_BLENDING_MULTIPLY";break;case N_:t="ENVMAP_BLENDING_MIX";break;case O_:t="ENVMAP_BLENDING_ADD";break}return t}function YS(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function qS(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=VS(e),c=GS(e),u=WS(e),h=XS(e),f=YS(e),d=US(e),g=NS(s),_=i.createProgram();let p,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bo).join(`
`),m.length>0&&(m+=`
`)):(p=[od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),m=[od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vr?"#define TONE_MAPPING":"",e.toneMapping!==vr?te.tonemapping_pars_fragment:"",e.toneMapping!==vr?LS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,DS("linearToOutputTexel",e.outputColorSpace),IS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bo).join(`
`)),o=Ou(o),o=id(o,e),o=rd(o,e),a=Ou(a),a=id(a,e),a=rd(a,e),o=sd(o),a=sd(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===af?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===af?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=M+p+o,v=M+m+a,A=td(i,i.VERTEX_SHADER,x),b=td(i,i.FRAGMENT_SHADER,v);i.attachShader(_,A),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(I){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(_).trim(),G=i.getShaderInfoLog(A).trim(),W=i.getShaderInfoLog(b).trim();let j=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,b);else{const J=nd(i,A,"vertex"),H=nd(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+J+`
`+H)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(G===""||W==="")&&(X=!1);X&&(I.diagnostics={runnable:j,programLog:F,vertexShader:{log:G,prefix:p},fragmentShader:{log:W,prefix:m}})}i.deleteShader(A),i.deleteShader(b),P=new ul(i,_),S=OS(i,_)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,AS)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=CS++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=b,this}let ZS=0;class $S{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new JS(t),e.set(t,n)),n}}class JS{constructor(t){this.id=ZS++,this.code=t,this.usedTimes=0}}function KS(r,t,e,n,i,s,o){const a=new mp,l=new $S,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,y,I,F,G){const W=F.fog,j=G.geometry,X=S.isMeshStandardMaterial?F.environment:null,J=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),H=J&&J.mapping===zl?J.image.height:null,ft=g[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const B=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,gt=B!==void 0?B.length:0;let It=0;j.morphAttributes.position!==void 0&&(It=1),j.morphAttributes.normal!==void 0&&(It=2),j.morphAttributes.color!==void 0&&(It=3);let $t,O,U,L;if(ft){const Rt=wi[ft];$t=Rt.vertexShader,O=Rt.fragmentShader}else $t=S.vertexShader,O=S.fragmentShader,l.update(S),U=l.getVertexShaderID(S),L=l.getFragmentShaderID(S);const C=r.getRenderTarget(),et=r.state.buffers.depth.getReversed(),ht=G.isInstancedMesh===!0,K=G.isBatchedMesh===!0,dt=!!S.map,tt=!!S.matcap,Y=!!J,T=!!S.aoMap,rt=!!S.lightMap,nt=!!S.bumpMap,z=!!S.normalMap,k=!!S.displacementMap,N=!!S.emissiveMap,lt=!!S.metalnessMap,D=!!S.roughnessMap,w=S.anisotropy>0,Q=S.clearcoat>0,ot=S.dispersion>0,ct=S.iridescence>0,ut=S.sheen>0,St=S.transmission>0,xt=w&&!!S.anisotropyMap,Mt=Q&&!!S.clearcoatMap,Ht=Q&&!!S.clearcoatNormalMap,vt=Q&&!!S.clearcoatRoughnessMap,yt=ct&&!!S.iridescenceMap,zt=ct&&!!S.iridescenceThicknessMap,Ft=ut&&!!S.sheenColorMap,Pt=ut&&!!S.sheenRoughnessMap,Kt=!!S.specularMap,Wt=!!S.specularColorMap,le=!!S.specularIntensityMap,V=St&&!!S.transmissionMap,Tt=St&&!!S.thicknessMap,at=!!S.gradientMap,pt=!!S.alphaMap,Et=S.alphaTest>0,bt=!!S.alphaHash,Xt=!!S.extensions;let ce=vr;S.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ce=r.toneMapping);const Pe={shaderID:ft,shaderType:S.type,shaderName:S.name,vertexShader:$t,fragmentShader:O,defines:S.defines,customVertexShaderID:U,customFragmentShaderID:L,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:K,batchingColor:K&&G._colorsTexture!==null,instancing:ht,instancingColor:ht&&G.instanceColor!==null,instancingMorph:ht&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:C===null?r.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:to,alphaToCoverage:!!S.alphaToCoverage,map:dt,matcap:tt,envMap:Y,envMapMode:Y&&J.mapping,envMapCubeUVHeight:H,aoMap:T,lightMap:rt,bumpMap:nt,normalMap:z,displacementMap:f&&k,emissiveMap:N,normalMapObjectSpace:z&&S.normalMapType===q_,normalMapTangentSpace:z&&S.normalMapType===cp,metalnessMap:lt,roughnessMap:D,anisotropy:w,anisotropyMap:xt,clearcoat:Q,clearcoatMap:Mt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:vt,dispersion:ot,iridescence:ct,iridescenceMap:yt,iridescenceThicknessMap:zt,sheen:ut,sheenColorMap:Ft,sheenRoughnessMap:Pt,specularMap:Kt,specularColorMap:Wt,specularIntensityMap:le,transmission:St,transmissionMap:V,thicknessMap:Tt,gradientMap:at,opaque:S.transparent===!1&&S.blending===Fs&&S.alphaToCoverage===!1,alphaMap:pt,alphaTest:Et,alphaHash:bt,combine:S.combine,mapUv:dt&&_(S.map.channel),aoMapUv:T&&_(S.aoMap.channel),lightMapUv:rt&&_(S.lightMap.channel),bumpMapUv:nt&&_(S.bumpMap.channel),normalMapUv:z&&_(S.normalMap.channel),displacementMapUv:k&&_(S.displacementMap.channel),emissiveMapUv:N&&_(S.emissiveMap.channel),metalnessMapUv:lt&&_(S.metalnessMap.channel),roughnessMapUv:D&&_(S.roughnessMap.channel),anisotropyMapUv:xt&&_(S.anisotropyMap.channel),clearcoatMapUv:Mt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&_(S.sheenRoughnessMap.channel),specularMapUv:Kt&&_(S.specularMap.channel),specularColorMapUv:Wt&&_(S.specularColorMap.channel),specularIntensityMapUv:le&&_(S.specularIntensityMap.channel),transmissionMapUv:V&&_(S.transmissionMap.channel),thicknessMapUv:Tt&&_(S.thicknessMap.channel),alphaMapUv:pt&&_(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(z||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!j.attributes.uv&&(dt||pt),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:et,skinning:G.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:It,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:ce,decodeVideoTexture:dt&&S.map.isVideoTexture===!0&&he.getTransfer(S.map.colorSpace)===_e,decodeVideoTextureEmissive:N&&S.emissiveMap.isVideoTexture===!0&&he.getTransfer(S.emissiveMap.colorSpace)===_e,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ai,flipSided:S.side===Pn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Xt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&S.extensions.multiDraw===!0||K)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function m(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)y.push(I),y.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(M(y,S),x(y,S),y.push(r.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function x(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const y=g[S.type];let I;if(y){const F=wi[y];I=El.clone(F.uniforms)}else I=S.uniforms;return I}function A(S,y){let I;for(let F=0,G=u.length;F<G;F++){const W=u[F];if(W.cacheKey===y){I=W,++I.usedTimes;break}}return I===void 0&&(I=new qS(r,y,S,s),u.push(I)),I}function b(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function E(S){l.remove(S)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:A,releaseProgram:b,releaseShaderCache:E,programs:u,dispose:P}}function jS(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function QS(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ad(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ld(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,p){let m=r[t];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},r[t]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),t++,m}function a(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(h,f){e.length>1&&e.sort(h||QS),n.length>1&&n.sort(f||ad),i.length>1&&i.sort(f||ad)}function u(){for(let h=t,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function tM(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new ld,r.set(n,[o])):i>=s.length?(o=new ld,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function eM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Z,color:new Yt};break;case"SpotLight":e={position:new Z,direction:new Z,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[t.id]=e,e}}}function nM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let iM=0;function rM(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function sM(r){const t=new eM,e=nM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Z);const i=new Z,s=new we,o=new we;function a(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,M=0,x=0,v=0,A=0,b=0,E=0;c.sort(rM);for(let S=0,y=c.length;S<y;S++){const I=c[S],F=I.color,G=I.intensity,W=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=F.r*G,h+=F.g*G,f+=F.b*G;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],G);E++}else if(I.isDirectionalLight){const X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const J=I.shadow,H=e.get(I);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=j,n.directionalShadowMatrix[d]=I.shadow.matrix,M++}n.directional[d]=X,d++}else if(I.isSpotLight){const X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(F).multiplyScalar(G),X.distance=W,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[_]=X;const J=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,J.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[_]=J.matrix,I.castShadow){const H=e.get(I);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=j,v++}_++}else if(I.isRectAreaLight){const X=t.get(I);X.color.copy(F).multiplyScalar(G),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=X,p++}else if(I.isPointLight){const X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){const J=I.shadow,H=e.get(I);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=I.shadow.matrix,x++}n.point[g]=X,g++}else if(I.isHemisphereLight){const X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(G),X.groundColor.copy(I.groundColor).multiplyScalar(G),n.hemi[m]=X,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==M||P.numPointShadows!==x||P.numSpotShadows!==v||P.numSpotMaps!==A||P.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=M,P.numPointShadows=x,P.numSpotShadows=v,P.numSpotMaps=A,P.numLightProbes=E,n.version=iM++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const x=c[m];if(x.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),h++}else if(x.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function cd(r){const t=new sM(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function oM(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new cd(r),t.set(i,[a])):s>=o.length?(a=new cd(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const aM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lM=`uniform sampler2D shadow_pass;
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
}`;function cM(r,t,e){let n=new Sh;const i=new mt,s=new mt,o=new Le,a=new A0({depthPacking:Y_}),l=new C0,c={},u=e.maxTextureSize,h={[Mr]:Pn,[Pn]:Mr,[ai]:ai},f=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:aM,fragmentShader:lM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new wn;g.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ze(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kd;let m=this.type;this.render=function(b,E,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const S=r.getRenderTarget(),y=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Ki),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const G=m!==Wi&&this.type===Wi,W=m===Wi&&this.type!==Wi;for(let j=0,X=b.length;j<X;j++){const J=b[j],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const ft=H.getFrameExtents();if(i.multiply(ft),s.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ft.x),i.x=s.x*ft.x,H.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ft.y),i.y=s.y*ft.y,H.mapSize.y=s.y)),H.map===null||G===!0||W===!0){const gt=this.type!==Wi?{minFilter:xi,magFilter:xi}:{};H.map!==null&&H.map.dispose(),H.map=new yi(i.x,i.y,gt),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const B=H.getViewportCount();for(let gt=0;gt<B;gt++){const It=H.getViewport(gt);o.set(s.x*It.x,s.y*It.y,s.x*It.z,s.y*It.w),F.viewport(o),H.updateMatrices(J,gt),n=H.getFrustum(),v(E,P,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===Wi&&M(H,P),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(S,y,I)};function M(b,E){const P=t.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new yi(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(E,null,P,f,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(E,null,P,d,_,null)}function x(b,E,P,S){let y=null;const I=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)y=I;else if(y=P.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const F=y.uuid,G=E.uuid;let W=c[F];W===void 0&&(W={},c[F]=W);let j=W[G];j===void 0&&(j=y.clone(),W[G]=j,E.addEventListener("dispose",A)),y=j}if(y.visible=E.visible,y.wireframe=E.wireframe,S===Wi?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:h[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=r.properties.get(y);F.light=P}return y}function v(b,E,P,S,y){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Wi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const G=t.update(b),W=b.material;if(Array.isArray(W)){const j=G.groups;for(let X=0,J=j.length;X<J;X++){const H=j[X],ft=W[H.materialIndex];if(ft&&ft.visible){const B=x(b,ft,S,y);b.onBeforeShadow(r,b,E,P,G,B,H),r.renderBufferDirect(P,null,G,B,b,H),b.onAfterShadow(r,b,E,P,G,B,H)}}}else if(W.visible){const j=x(b,W,S,y);b.onBeforeShadow(r,b,E,P,G,j,null),r.renderBufferDirect(P,null,G,j,b,null),b.onAfterShadow(r,b,E,P,G,j,null)}}const F=b.children;for(let G=0,W=F.length;G<W;G++)v(F[G],E,P,S,y)}function A(b){b.target.removeEventListener("dispose",A);for(const P in c){const S=c[P],y=b.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const uM={[Jc]:Kc,[jc]:eu,[Qc]:nu,[$s]:tu,[Kc]:Jc,[eu]:jc,[nu]:Qc,[tu]:$s};function hM(r,t){function e(){let V=!1;const Tt=new Le;let at=null;const pt=new Le(0,0,0,0);return{setMask:function(Et){at!==Et&&!V&&(r.colorMask(Et,Et,Et,Et),at=Et)},setLocked:function(Et){V=Et},setClear:function(Et,bt,Xt,ce,Pe){Pe===!0&&(Et*=ce,bt*=ce,Xt*=ce),Tt.set(Et,bt,Xt,ce),pt.equals(Tt)===!1&&(r.clearColor(Et,bt,Xt,ce),pt.copy(Tt))},reset:function(){V=!1,at=null,pt.set(-1,0,0,0)}}}function n(){let V=!1,Tt=!1,at=null,pt=null,Et=null;return{setReversed:function(bt){if(Tt!==bt){const Xt=t.get("EXT_clip_control");Tt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);const ce=Et;Et=null,this.setClear(ce)}Tt=bt},getReversed:function(){return Tt},setTest:function(bt){bt?C(r.DEPTH_TEST):et(r.DEPTH_TEST)},setMask:function(bt){at!==bt&&!V&&(r.depthMask(bt),at=bt)},setFunc:function(bt){if(Tt&&(bt=uM[bt]),pt!==bt){switch(bt){case Jc:r.depthFunc(r.NEVER);break;case Kc:r.depthFunc(r.ALWAYS);break;case jc:r.depthFunc(r.LESS);break;case $s:r.depthFunc(r.LEQUAL);break;case Qc:r.depthFunc(r.EQUAL);break;case tu:r.depthFunc(r.GEQUAL);break;case eu:r.depthFunc(r.GREATER);break;case nu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pt=bt}},setLocked:function(bt){V=bt},setClear:function(bt){Et!==bt&&(Tt&&(bt=1-bt),r.clearDepth(bt),Et=bt)},reset:function(){V=!1,at=null,pt=null,Et=null,Tt=!1}}}function i(){let V=!1,Tt=null,at=null,pt=null,Et=null,bt=null,Xt=null,ce=null,Pe=null;return{setTest:function(Rt){V||(Rt?C(r.STENCIL_TEST):et(r.STENCIL_TEST))},setMask:function(Rt){Tt!==Rt&&!V&&(r.stencilMask(Rt),Tt=Rt)},setFunc:function(Rt,Nt,jt){(at!==Rt||pt!==Nt||Et!==jt)&&(r.stencilFunc(Rt,Nt,jt),at=Rt,pt=Nt,Et=jt)},setOp:function(Rt,Nt,jt){(bt!==Rt||Xt!==Nt||ce!==jt)&&(r.stencilOp(Rt,Nt,jt),bt=Rt,Xt=Nt,ce=jt)},setLocked:function(Rt){V=Rt},setClear:function(Rt){Pe!==Rt&&(r.clearStencil(Rt),Pe=Rt)},reset:function(){V=!1,Tt=null,at=null,pt=null,Et=null,bt=null,Xt=null,ce=null,Pe=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,p=null,m=null,M=null,x=null,v=null,A=null,b=null,E=new Yt(0,0,0),P=0,S=!1,y=null,I=null,F=null,G=null,W=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,J=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=J>=2);let ft=null,B={};const gt=r.getParameter(r.SCISSOR_BOX),It=r.getParameter(r.VIEWPORT),$t=new Le().fromArray(gt),O=new Le().fromArray(It);function U(V,Tt,at,pt){const Et=new Uint8Array(4),bt=r.createTexture();r.bindTexture(V,bt),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xt=0;Xt<at;Xt++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Tt,0,r.RGBA,1,1,pt,0,r.RGBA,r.UNSIGNED_BYTE,Et):r.texImage2D(Tt+Xt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Et);return bt}const L={};L[r.TEXTURE_2D]=U(r.TEXTURE_2D,r.TEXTURE_2D,1),L[r.TEXTURE_CUBE_MAP]=U(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[r.TEXTURE_2D_ARRAY]=U(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),L[r.TEXTURE_3D]=U(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),C(r.DEPTH_TEST),o.setFunc($s),nt(!1),z(ef),C(r.CULL_FACE),T(Ki);function C(V){u[V]!==!0&&(r.enable(V),u[V]=!0)}function et(V){u[V]!==!1&&(r.disable(V),u[V]=!1)}function ht(V,Tt){return h[V]!==Tt?(r.bindFramebuffer(V,Tt),h[V]=Tt,V===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=Tt),V===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=Tt),!0):!1}function K(V,Tt){let at=d,pt=!1;if(V){at=f.get(Tt),at===void 0&&(at=[],f.set(Tt,at));const Et=V.textures;if(at.length!==Et.length||at[0]!==r.COLOR_ATTACHMENT0){for(let bt=0,Xt=Et.length;bt<Xt;bt++)at[bt]=r.COLOR_ATTACHMENT0+bt;at.length=Et.length,pt=!0}}else at[0]!==r.BACK&&(at[0]=r.BACK,pt=!0);pt&&r.drawBuffers(at)}function dt(V){return g!==V?(r.useProgram(V),g=V,!0):!1}const tt={[Vr]:r.FUNC_ADD,[v_]:r.FUNC_SUBTRACT,[x_]:r.FUNC_REVERSE_SUBTRACT};tt[y_]=r.MIN,tt[S_]=r.MAX;const Y={[M_]:r.ZERO,[E_]:r.ONE,[T_]:r.SRC_COLOR,[Zc]:r.SRC_ALPHA,[P_]:r.SRC_ALPHA_SATURATE,[C_]:r.DST_COLOR,[w_]:r.DST_ALPHA,[b_]:r.ONE_MINUS_SRC_COLOR,[$c]:r.ONE_MINUS_SRC_ALPHA,[R_]:r.ONE_MINUS_DST_COLOR,[A_]:r.ONE_MINUS_DST_ALPHA,[D_]:r.CONSTANT_COLOR,[L_]:r.ONE_MINUS_CONSTANT_COLOR,[I_]:r.CONSTANT_ALPHA,[U_]:r.ONE_MINUS_CONSTANT_ALPHA};function T(V,Tt,at,pt,Et,bt,Xt,ce,Pe,Rt){if(V===Ki){_===!0&&(et(r.BLEND),_=!1);return}if(_===!1&&(C(r.BLEND),_=!0),V!==g_){if(V!==p||Rt!==S){if((m!==Vr||v!==Vr)&&(r.blendEquation(r.FUNC_ADD),m=Vr,v=Vr),Rt)switch(V){case Fs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bi:r.blendFunc(r.ONE,r.ONE);break;case nf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Fs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bi:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case nf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}M=null,x=null,A=null,b=null,E.set(0,0,0),P=0,p=V,S=Rt}return}Et=Et||Tt,bt=bt||at,Xt=Xt||pt,(Tt!==m||Et!==v)&&(r.blendEquationSeparate(tt[Tt],tt[Et]),m=Tt,v=Et),(at!==M||pt!==x||bt!==A||Xt!==b)&&(r.blendFuncSeparate(Y[at],Y[pt],Y[bt],Y[Xt]),M=at,x=pt,A=bt,b=Xt),(ce.equals(E)===!1||Pe!==P)&&(r.blendColor(ce.r,ce.g,ce.b,Pe),E.copy(ce),P=Pe),p=V,S=!1}function rt(V,Tt){V.side===ai?et(r.CULL_FACE):C(r.CULL_FACE);let at=V.side===Pn;Tt&&(at=!at),nt(at),V.blending===Fs&&V.transparent===!1?T(Ki):T(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const pt=V.stencilWrite;a.setTest(pt),pt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),N(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?C(r.SAMPLE_ALPHA_TO_COVERAGE):et(r.SAMPLE_ALPHA_TO_COVERAGE)}function nt(V){y!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),y=V)}function z(V){V!==p_?(C(r.CULL_FACE),V!==I&&(V===ef?r.cullFace(r.BACK):V===m_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):et(r.CULL_FACE),I=V}function k(V){V!==F&&(X&&r.lineWidth(V),F=V)}function N(V,Tt,at){V?(C(r.POLYGON_OFFSET_FILL),(G!==Tt||W!==at)&&(r.polygonOffset(Tt,at),G=Tt,W=at)):et(r.POLYGON_OFFSET_FILL)}function lt(V){V?C(r.SCISSOR_TEST):et(r.SCISSOR_TEST)}function D(V){V===void 0&&(V=r.TEXTURE0+j-1),ft!==V&&(r.activeTexture(V),ft=V)}function w(V,Tt,at){at===void 0&&(ft===null?at=r.TEXTURE0+j-1:at=ft);let pt=B[at];pt===void 0&&(pt={type:void 0,texture:void 0},B[at]=pt),(pt.type!==V||pt.texture!==Tt)&&(ft!==at&&(r.activeTexture(at),ft=at),r.bindTexture(V,Tt||L[V]),pt.type=V,pt.texture=Tt)}function Q(){const V=B[ft];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ot(){try{r.compressedTexImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ct(){try{r.compressedTexImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(){try{r.texSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function St(){try{r.texSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ht(){try{r.texStorage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function vt(){try{r.texStorage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function yt(){try{r.texImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function zt(){try{r.texImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ft(V){$t.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),$t.copy(V))}function Pt(V){O.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),O.copy(V))}function Kt(V,Tt){let at=c.get(Tt);at===void 0&&(at=new WeakMap,c.set(Tt,at));let pt=at.get(V);pt===void 0&&(pt=r.getUniformBlockIndex(Tt,V.name),at.set(V,pt))}function Wt(V,Tt){const pt=c.get(Tt).get(V);l.get(Tt)!==pt&&(r.uniformBlockBinding(Tt,pt,V.__bindingPointIndex),l.set(Tt,pt))}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ft=null,B={},h={},f=new WeakMap,d=[],g=null,_=!1,p=null,m=null,M=null,x=null,v=null,A=null,b=null,E=new Yt(0,0,0),P=0,S=!1,y=null,I=null,F=null,G=null,W=null,$t.set(0,0,r.canvas.width,r.canvas.height),O.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:C,disable:et,bindFramebuffer:ht,drawBuffers:K,useProgram:dt,setBlending:T,setMaterial:rt,setFlipSided:nt,setCullFace:z,setLineWidth:k,setPolygonOffset:N,setScissorTest:lt,activeTexture:D,bindTexture:w,unbindTexture:Q,compressedTexImage2D:ot,compressedTexImage3D:ct,texImage2D:yt,texImage3D:zt,updateUBOMapping:Kt,uniformBlockBinding:Wt,texStorage2D:Ht,texStorage3D:vt,texSubImage2D:ut,texSubImage3D:St,compressedTexSubImage2D:xt,compressedTexSubImage3D:Mt,scissor:Ft,viewport:Pt,reset:le}}function fM(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,w){return d?new OffscreenCanvas(D,w):Ml("canvas")}function _(D,w,Q){let ot=1;const ct=lt(D);if((ct.width>Q||ct.height>Q)&&(ot=Q/Math.max(ct.width,ct.height)),ot<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ut=Math.floor(ot*ct.width),St=Math.floor(ot*ct.height);h===void 0&&(h=g(ut,St));const xt=w?g(ut,St):h;return xt.width=ut,xt.height=St,xt.getContext("2d").drawImage(D,0,0,ut,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+ut+"x"+St+")."),xt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),D;return D}function p(D){return D.generateMipmaps}function m(D){r.generateMipmap(D)}function M(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(D,w,Q,ot,ct=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ut=w;if(w===r.RED&&(Q===r.FLOAT&&(ut=r.R32F),Q===r.HALF_FLOAT&&(ut=r.R16F),Q===r.UNSIGNED_BYTE&&(ut=r.R8)),w===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ut=r.R8UI),Q===r.UNSIGNED_SHORT&&(ut=r.R16UI),Q===r.UNSIGNED_INT&&(ut=r.R32UI),Q===r.BYTE&&(ut=r.R8I),Q===r.SHORT&&(ut=r.R16I),Q===r.INT&&(ut=r.R32I)),w===r.RG&&(Q===r.FLOAT&&(ut=r.RG32F),Q===r.HALF_FLOAT&&(ut=r.RG16F),Q===r.UNSIGNED_BYTE&&(ut=r.RG8)),w===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ut=r.RG8UI),Q===r.UNSIGNED_SHORT&&(ut=r.RG16UI),Q===r.UNSIGNED_INT&&(ut=r.RG32UI),Q===r.BYTE&&(ut=r.RG8I),Q===r.SHORT&&(ut=r.RG16I),Q===r.INT&&(ut=r.RG32I)),w===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ut=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(ut=r.RGB16UI),Q===r.UNSIGNED_INT&&(ut=r.RGB32UI),Q===r.BYTE&&(ut=r.RGB8I),Q===r.SHORT&&(ut=r.RGB16I),Q===r.INT&&(ut=r.RGB32I)),w===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ut=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(ut=r.RGBA16UI),Q===r.UNSIGNED_INT&&(ut=r.RGBA32UI),Q===r.BYTE&&(ut=r.RGBA8I),Q===r.SHORT&&(ut=r.RGBA16I),Q===r.INT&&(ut=r.RGBA32I)),w===r.RGB&&Q===r.UNSIGNED_INT_5_9_9_9_REV&&(ut=r.RGB9_E5),w===r.RGBA){const St=ct?yl:he.getTransfer(ot);Q===r.FLOAT&&(ut=r.RGBA32F),Q===r.HALF_FLOAT&&(ut=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(ut=St===_e?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function v(D,w){let Q;return D?w===null||w===es||w===js?Q=r.DEPTH24_STENCIL8:w===Zi?Q=r.DEPTH32F_STENCIL8:w===jo&&(Q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===es||w===js?Q=r.DEPTH_COMPONENT24:w===Zi?Q=r.DEPTH_COMPONENT32F:w===jo&&(Q=r.DEPTH_COMPONENT16),Q}function A(D,w){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==xi&&D.minFilter!==Ci?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function b(D){const w=D.target;w.removeEventListener("dispose",b),P(w),w.isVideoTexture&&u.delete(w)}function E(D){const w=D.target;w.removeEventListener("dispose",E),y(w)}function P(D){const w=n.get(D);if(w.__webglInit===void 0)return;const Q=D.source,ot=f.get(Q);if(ot){const ct=ot[w.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&S(D),Object.keys(ot).length===0&&f.delete(Q)}n.remove(D)}function S(D){const w=n.get(D);r.deleteTexture(w.__webglTexture);const Q=D.source,ot=f.get(Q);delete ot[w.__cacheKey],o.memory.textures--}function y(D){const w=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(w.__webglFramebuffer[ot]))for(let ct=0;ct<w.__webglFramebuffer[ot].length;ct++)r.deleteFramebuffer(w.__webglFramebuffer[ot][ct]);else r.deleteFramebuffer(w.__webglFramebuffer[ot]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[ot])}else{if(Array.isArray(w.__webglFramebuffer))for(let ot=0;ot<w.__webglFramebuffer.length;ot++)r.deleteFramebuffer(w.__webglFramebuffer[ot]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ot=0;ot<w.__webglColorRenderbuffer.length;ot++)w.__webglColorRenderbuffer[ot]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[ot]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Q=D.textures;for(let ot=0,ct=Q.length;ot<ct;ot++){const ut=n.get(Q[ot]);ut.__webglTexture&&(r.deleteTexture(ut.__webglTexture),o.memory.textures--),n.remove(Q[ot])}n.remove(D)}let I=0;function F(){I=0}function G(){const D=I;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),I+=1,D}function W(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function j(D,w){const Q=n.get(D);if(D.isVideoTexture&&k(D),D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){const ot=D.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(Q,D,w);return}}e.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+w)}function X(D,w){const Q=n.get(D);if(D.version>0&&Q.__version!==D.version){O(Q,D,w);return}e.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+w)}function J(D,w){const Q=n.get(D);if(D.version>0&&Q.__version!==D.version){O(Q,D,w);return}e.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+w)}function H(D,w){const Q=n.get(D);if(D.version>0&&Q.__version!==D.version){U(Q,D,w);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+w)}const ft={[su]:r.REPEAT,[Wr]:r.CLAMP_TO_EDGE,[ou]:r.MIRRORED_REPEAT},B={[xi]:r.NEAREST,[W_]:r.NEAREST_MIPMAP_NEAREST,[ga]:r.NEAREST_MIPMAP_LINEAR,[Ci]:r.LINEAR,[$l]:r.LINEAR_MIPMAP_NEAREST,[Xr]:r.LINEAR_MIPMAP_LINEAR},gt={[Z_]:r.NEVER,[tg]:r.ALWAYS,[$_]:r.LESS,[up]:r.LEQUAL,[J_]:r.EQUAL,[Q_]:r.GEQUAL,[K_]:r.GREATER,[j_]:r.NOTEQUAL};function It(D,w){if(w.type===Zi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Ci||w.magFilter===$l||w.magFilter===ga||w.magFilter===Xr||w.minFilter===Ci||w.minFilter===$l||w.minFilter===ga||w.minFilter===Xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,ft[w.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,ft[w.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,ft[w.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,B[w.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,B[w.minFilter]),w.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,gt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===xi||w.minFilter!==ga&&w.minFilter!==Xr||w.type===Zi&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function $t(D,w){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",b));const ot=w.source;let ct=f.get(ot);ct===void 0&&(ct={},f.set(ot,ct));const ut=W(w);if(ut!==D.__cacheKey){ct[ut]===void 0&&(ct[ut]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),ct[ut].usedTimes++;const St=ct[D.__cacheKey];St!==void 0&&(ct[D.__cacheKey].usedTimes--,St.usedTimes===0&&S(w)),D.__cacheKey=ut,D.__webglTexture=ct[ut].texture}return Q}function O(D,w,Q){let ot=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ot=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ot=r.TEXTURE_3D);const ct=$t(D,w),ut=w.source;e.bindTexture(ot,D.__webglTexture,r.TEXTURE0+Q);const St=n.get(ut);if(ut.version!==St.__version||ct===!0){e.activeTexture(r.TEXTURE0+Q);const xt=he.getPrimaries(he.workingColorSpace),Mt=w.colorSpace===fr?null:he.getPrimaries(w.colorSpace),Ht=w.colorSpace===fr||xt===Mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let vt=_(w.image,!1,i.maxTextureSize);vt=N(w,vt);const yt=s.convert(w.format,w.colorSpace),zt=s.convert(w.type);let Ft=x(w.internalFormat,yt,zt,w.colorSpace,w.isVideoTexture);It(ot,w);let Pt;const Kt=w.mipmaps,Wt=w.isVideoTexture!==!0,le=St.__version===void 0||ct===!0,V=ut.dataReady,Tt=A(w,vt);if(w.isDepthTexture)Ft=v(w.format===Qs,w.type),le&&(Wt?e.texStorage2D(r.TEXTURE_2D,1,Ft,vt.width,vt.height):e.texImage2D(r.TEXTURE_2D,0,Ft,vt.width,vt.height,0,yt,zt,null));else if(w.isDataTexture)if(Kt.length>0){Wt&&le&&e.texStorage2D(r.TEXTURE_2D,Tt,Ft,Kt[0].width,Kt[0].height);for(let at=0,pt=Kt.length;at<pt;at++)Pt=Kt[at],Wt?V&&e.texSubImage2D(r.TEXTURE_2D,at,0,0,Pt.width,Pt.height,yt,zt,Pt.data):e.texImage2D(r.TEXTURE_2D,at,Ft,Pt.width,Pt.height,0,yt,zt,Pt.data);w.generateMipmaps=!1}else Wt?(le&&e.texStorage2D(r.TEXTURE_2D,Tt,Ft,vt.width,vt.height),V&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,vt.width,vt.height,yt,zt,vt.data)):e.texImage2D(r.TEXTURE_2D,0,Ft,vt.width,vt.height,0,yt,zt,vt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Wt&&le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,Ft,Kt[0].width,Kt[0].height,vt.depth);for(let at=0,pt=Kt.length;at<pt;at++)if(Pt=Kt[at],w.format!==gi)if(yt!==null)if(Wt){if(V)if(w.layerUpdates.size>0){const Et=zf(Pt.width,Pt.height,w.format,w.type);for(const bt of w.layerUpdates){const Xt=Pt.data.subarray(bt*Et/Pt.data.BYTES_PER_ELEMENT,(bt+1)*Et/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,at,0,0,bt,Pt.width,Pt.height,1,yt,Xt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,at,0,0,0,Pt.width,Pt.height,vt.depth,yt,Pt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,at,Ft,Pt.width,Pt.height,vt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?V&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,at,0,0,0,Pt.width,Pt.height,vt.depth,yt,zt,Pt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,at,Ft,Pt.width,Pt.height,vt.depth,0,yt,zt,Pt.data)}else{Wt&&le&&e.texStorage2D(r.TEXTURE_2D,Tt,Ft,Kt[0].width,Kt[0].height);for(let at=0,pt=Kt.length;at<pt;at++)Pt=Kt[at],w.format!==gi?yt!==null?Wt?V&&e.compressedTexSubImage2D(r.TEXTURE_2D,at,0,0,Pt.width,Pt.height,yt,Pt.data):e.compressedTexImage2D(r.TEXTURE_2D,at,Ft,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?V&&e.texSubImage2D(r.TEXTURE_2D,at,0,0,Pt.width,Pt.height,yt,zt,Pt.data):e.texImage2D(r.TEXTURE_2D,at,Ft,Pt.width,Pt.height,0,yt,zt,Pt.data)}else if(w.isDataArrayTexture)if(Wt){if(le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,Ft,vt.width,vt.height,vt.depth),V)if(w.layerUpdates.size>0){const at=zf(vt.width,vt.height,w.format,w.type);for(const pt of w.layerUpdates){const Et=vt.data.subarray(pt*at/vt.data.BYTES_PER_ELEMENT,(pt+1)*at/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pt,vt.width,vt.height,1,yt,zt,Et)}w.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,yt,zt,vt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ft,vt.width,vt.height,vt.depth,0,yt,zt,vt.data);else if(w.isData3DTexture)Wt?(le&&e.texStorage3D(r.TEXTURE_3D,Tt,Ft,vt.width,vt.height,vt.depth),V&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,yt,zt,vt.data)):e.texImage3D(r.TEXTURE_3D,0,Ft,vt.width,vt.height,vt.depth,0,yt,zt,vt.data);else if(w.isFramebufferTexture){if(le)if(Wt)e.texStorage2D(r.TEXTURE_2D,Tt,Ft,vt.width,vt.height);else{let at=vt.width,pt=vt.height;for(let Et=0;Et<Tt;Et++)e.texImage2D(r.TEXTURE_2D,Et,Ft,at,pt,0,yt,zt,null),at>>=1,pt>>=1}}else if(Kt.length>0){if(Wt&&le){const at=lt(Kt[0]);e.texStorage2D(r.TEXTURE_2D,Tt,Ft,at.width,at.height)}for(let at=0,pt=Kt.length;at<pt;at++)Pt=Kt[at],Wt?V&&e.texSubImage2D(r.TEXTURE_2D,at,0,0,yt,zt,Pt):e.texImage2D(r.TEXTURE_2D,at,Ft,yt,zt,Pt);w.generateMipmaps=!1}else if(Wt){if(le){const at=lt(vt);e.texStorage2D(r.TEXTURE_2D,Tt,Ft,at.width,at.height)}V&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,yt,zt,vt)}else e.texImage2D(r.TEXTURE_2D,0,Ft,yt,zt,vt);p(w)&&m(ot),St.__version=ut.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function U(D,w,Q){if(w.image.length!==6)return;const ot=$t(D,w),ct=w.source;e.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+Q);const ut=n.get(ct);if(ct.version!==ut.__version||ot===!0){e.activeTexture(r.TEXTURE0+Q);const St=he.getPrimaries(he.workingColorSpace),xt=w.colorSpace===fr?null:he.getPrimaries(w.colorSpace),Mt=w.colorSpace===fr||St===xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Ht=w.isCompressedTexture||w.image[0].isCompressedTexture,vt=w.image[0]&&w.image[0].isDataTexture,yt=[];for(let pt=0;pt<6;pt++)!Ht&&!vt?yt[pt]=_(w.image[pt],!0,i.maxCubemapSize):yt[pt]=vt?w.image[pt].image:w.image[pt],yt[pt]=N(w,yt[pt]);const zt=yt[0],Ft=s.convert(w.format,w.colorSpace),Pt=s.convert(w.type),Kt=x(w.internalFormat,Ft,Pt,w.colorSpace),Wt=w.isVideoTexture!==!0,le=ut.__version===void 0||ot===!0,V=ct.dataReady;let Tt=A(w,zt);It(r.TEXTURE_CUBE_MAP,w);let at;if(Ht){Wt&&le&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Tt,Kt,zt.width,zt.height);for(let pt=0;pt<6;pt++){at=yt[pt].mipmaps;for(let Et=0;Et<at.length;Et++){const bt=at[Et];w.format!==gi?Ft!==null?Wt?V&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et,0,0,bt.width,bt.height,Ft,bt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et,Kt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et,0,0,bt.width,bt.height,Ft,Pt,bt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et,Kt,bt.width,bt.height,0,Ft,Pt,bt.data)}}}else{if(at=w.mipmaps,Wt&&le){at.length>0&&Tt++;const pt=lt(yt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Tt,Kt,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(vt){Wt?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,yt[pt].width,yt[pt].height,Ft,Pt,yt[pt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Kt,yt[pt].width,yt[pt].height,0,Ft,Pt,yt[pt].data);for(let Et=0;Et<at.length;Et++){const Xt=at[Et].image[pt].image;Wt?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et+1,0,0,Xt.width,Xt.height,Ft,Pt,Xt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et+1,Kt,Xt.width,Xt.height,0,Ft,Pt,Xt.data)}}else{Wt?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Ft,Pt,yt[pt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Kt,Ft,Pt,yt[pt]);for(let Et=0;Et<at.length;Et++){const bt=at[Et];Wt?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et+1,0,0,Ft,Pt,bt.image[pt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et+1,Kt,Ft,Pt,bt.image[pt])}}}p(w)&&m(r.TEXTURE_CUBE_MAP),ut.__version=ct.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function L(D,w,Q,ot,ct,ut){const St=s.convert(Q.format,Q.colorSpace),xt=s.convert(Q.type),Mt=x(Q.internalFormat,St,xt,Q.colorSpace),Ht=n.get(w),vt=n.get(Q);if(vt.__renderTarget=w,!Ht.__hasExternalTextures){const yt=Math.max(1,w.width>>ut),zt=Math.max(1,w.height>>ut);ct===r.TEXTURE_3D||ct===r.TEXTURE_2D_ARRAY?e.texImage3D(ct,ut,Mt,yt,zt,w.depth,0,St,xt,null):e.texImage2D(ct,ut,Mt,yt,zt,0,St,xt,null)}e.bindFramebuffer(r.FRAMEBUFFER,D),z(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ot,ct,vt.__webglTexture,0,nt(w)):(ct===r.TEXTURE_2D||ct>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ot,ct,vt.__webglTexture,ut),e.bindFramebuffer(r.FRAMEBUFFER,null)}function C(D,w,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,D),w.depthBuffer){const ot=w.depthTexture,ct=ot&&ot.isDepthTexture?ot.type:null,ut=v(w.stencilBuffer,ct),St=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=nt(w);z(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xt,ut,w.width,w.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,xt,ut,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,ut,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,D)}else{const ot=w.textures;for(let ct=0;ct<ot.length;ct++){const ut=ot[ct],St=s.convert(ut.format,ut.colorSpace),xt=s.convert(ut.type),Mt=x(ut.internalFormat,St,xt,ut.colorSpace),Ht=nt(w);Q&&z(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht,Mt,w.width,w.height):z(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ht,Mt,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Mt,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function et(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ot=n.get(w.depthTexture);ot.__renderTarget=w,(!ot.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),j(w.depthTexture,0);const ct=ot.__webglTexture,ut=nt(w);if(w.depthTexture.format===Bs)z(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ct,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ct,0);else if(w.depthTexture.format===Qs)z(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ct,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function ht(D){const w=n.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const ot=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ot){const ct=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ot.removeEventListener("dispose",ct)};ot.addEventListener("dispose",ct),w.__depthDisposeCallback=ct}w.__boundDepthTexture=ot}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");et(w.__webglFramebuffer,D)}else if(Q){w.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[ot]),w.__webglDepthbuffer[ot]===void 0)w.__webglDepthbuffer[ot]=r.createRenderbuffer(),C(w.__webglDepthbuffer[ot],D,!1);else{const ct=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=w.__webglDepthbuffer[ot];r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,ct,r.RENDERBUFFER,ut)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),C(w.__webglDepthbuffer,D,!1);else{const ot=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,ot,r.RENDERBUFFER,ct)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function K(D,w,Q){const ot=n.get(D);w!==void 0&&L(ot.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&ht(D)}function dt(D){const w=D.texture,Q=n.get(D),ot=n.get(w);D.addEventListener("dispose",E);const ct=D.textures,ut=D.isWebGLCubeRenderTarget===!0,St=ct.length>1;if(St||(ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture()),ot.__version=w.version,o.memory.textures++),ut){Q.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer[xt]=[];for(let Mt=0;Mt<w.mipmaps.length;Mt++)Q.__webglFramebuffer[xt][Mt]=r.createFramebuffer()}else Q.__webglFramebuffer[xt]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let xt=0;xt<w.mipmaps.length;xt++)Q.__webglFramebuffer[xt]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(St)for(let xt=0,Mt=ct.length;xt<Mt;xt++){const Ht=n.get(ct[xt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=r.createTexture(),o.memory.textures++)}if(D.samples>0&&z(D)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let xt=0;xt<ct.length;xt++){const Mt=ct[xt];Q.__webglColorRenderbuffer[xt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[xt]);const Ht=s.convert(Mt.format,Mt.colorSpace),vt=s.convert(Mt.type),yt=x(Mt.internalFormat,Ht,vt,Mt.colorSpace,D.isXRRenderTarget===!0),zt=nt(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,zt,yt,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,Q.__webglColorRenderbuffer[xt])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),C(Q.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){e.bindTexture(r.TEXTURE_CUBE_MAP,ot.__webglTexture),It(r.TEXTURE_CUBE_MAP,w);for(let xt=0;xt<6;xt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Mt=0;Mt<w.mipmaps.length;Mt++)L(Q.__webglFramebuffer[xt][Mt],D,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Mt);else L(Q.__webglFramebuffer[xt],D,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);p(w)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let xt=0,Mt=ct.length;xt<Mt;xt++){const Ht=ct[xt],vt=n.get(Ht);e.bindTexture(r.TEXTURE_2D,vt.__webglTexture),It(r.TEXTURE_2D,Ht),L(Q.__webglFramebuffer,D,Ht,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,0),p(Ht)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let xt=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(xt=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(xt,ot.__webglTexture),It(xt,w),w.mipmaps&&w.mipmaps.length>0)for(let Mt=0;Mt<w.mipmaps.length;Mt++)L(Q.__webglFramebuffer[Mt],D,w,r.COLOR_ATTACHMENT0,xt,Mt);else L(Q.__webglFramebuffer,D,w,r.COLOR_ATTACHMENT0,xt,0);p(w)&&m(xt),e.unbindTexture()}D.depthBuffer&&ht(D)}function tt(D){const w=D.textures;for(let Q=0,ot=w.length;Q<ot;Q++){const ct=w[Q];if(p(ct)){const ut=M(D),St=n.get(ct).__webglTexture;e.bindTexture(ut,St),m(ut),e.unbindTexture()}}}const Y=[],T=[];function rt(D){if(D.samples>0){if(z(D)===!1){const w=D.textures,Q=D.width,ot=D.height;let ct=r.COLOR_BUFFER_BIT;const ut=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,St=n.get(D),xt=w.length>1;if(xt)for(let Mt=0;Mt<w.length;Mt++)e.bindFramebuffer(r.FRAMEBUFFER,St.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,St.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Mt=0;Mt<w.length;Mt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ct|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ct|=r.STENCIL_BUFFER_BIT)),xt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,St.__webglColorRenderbuffer[Mt]);const Ht=n.get(w[Mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ht,0)}r.blitFramebuffer(0,0,Q,ot,0,0,Q,ot,ct,r.NEAREST),l===!0&&(Y.length=0,T.length=0,Y.push(r.COLOR_ATTACHMENT0+Mt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Y.push(ut),T.push(ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,T)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Y))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),xt)for(let Mt=0;Mt<w.length;Mt++){e.bindFramebuffer(r.FRAMEBUFFER,St.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,St.__webglColorRenderbuffer[Mt]);const Ht=n.get(w[Mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,St.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,Ht,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const w=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function nt(D){return Math.min(i.maxSamples,D.samples)}function z(D){const w=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function k(D){const w=o.render.frame;u.get(D)!==w&&(u.set(D,w),D.update())}function N(D,w){const Q=D.colorSpace,ot=D.format,ct=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==to&&Q!==fr&&(he.getTransfer(Q)===_e?(ot!==gi||ct!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),w}function lt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=F,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=H,this.rebindTextures=K,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=L,this.useMultisampledRTT=z}function dM(r,t){function e(n,i=fr){let s;const o=he.getTransfer(i);if(n===er)return r.UNSIGNED_BYTE;if(n===dh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ph)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ep)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Qd)return r.BYTE;if(n===tp)return r.SHORT;if(n===jo)return r.UNSIGNED_SHORT;if(n===fh)return r.INT;if(n===es)return r.UNSIGNED_INT;if(n===Zi)return r.FLOAT;if(n===ji)return r.HALF_FLOAT;if(n===np)return r.ALPHA;if(n===ip)return r.RGB;if(n===gi)return r.RGBA;if(n===rp)return r.LUMINANCE;if(n===sp)return r.LUMINANCE_ALPHA;if(n===Bs)return r.DEPTH_COMPONENT;if(n===Qs)return r.DEPTH_STENCIL;if(n===op)return r.RED;if(n===mh)return r.RED_INTEGER;if(n===ap)return r.RG;if(n===_h)return r.RG_INTEGER;if(n===gh)return r.RGBA_INTEGER;if(n===sl||n===ol||n===al||n===ll)if(o===_e)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===sl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===sl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ol)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===al)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ll)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===au||n===lu||n===cu||n===uu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===au)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hu||n===fu||n===du)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===hu||n===fu)return o===_e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===du)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pu||n===mu||n===_u||n===gu||n===vu||n===xu||n===yu||n===Su||n===Mu||n===Eu||n===Tu||n===bu||n===wu||n===Au)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===pu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_u)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Su)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Eu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Au)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cl||n===Cu||n===Ru)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===cl)return o===_e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ru)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lp||n===Pu||n===Du||n===Lu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===cl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Pu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Du)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const pM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mM=`
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

}`;class _M{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Dn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Rn({vertexShader:pM,fragmentShader:mM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ze(new pa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gM extends uo{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new _M,p=e.getContextAttributes();let m=null,M=null;const x=[],v=[],A=new mt;let b=null;const E=new Xn;E.viewport=new Le;const P=new Xn;P.viewport=new Le;const S=[E,P],y=new F0;let I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let U=x[O];return U===void 0&&(U=new mc,x[O]=U),U.getTargetRaySpace()},this.getControllerGrip=function(O){let U=x[O];return U===void 0&&(U=new mc,x[O]=U),U.getGripSpace()},this.getHand=function(O){let U=x[O];return U===void 0&&(U=new mc,x[O]=U),U.getHandSpace()};function G(O){const U=v.indexOf(O.inputSource);if(U===-1)return;const L=x[U];L!==void 0&&(L.update(O.inputSource,O.frame,c||o),L.dispatchEvent({type:O.type,data:O.inputSource}))}function W(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",j);for(let O=0;O<x.length;O++){const U=v[O];U!==null&&(v[O]=null,x[O].disconnect(U))}I=null,F=null,_.reset(),t.setRenderTarget(m),d=null,f=null,h=null,i=null,M=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",W),i.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let L=null,C=null,et=null;p.depth&&(et=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,L=p.stencil?Qs:Bs,C=p.stencil?js:es);const ht={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:s};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(ht),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new yi(f.textureWidth,f.textureHeight,{format:gi,type:er,depthTexture:new Mp(f.textureWidth,f.textureHeight,C,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const L={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,L),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new yi(d.framebufferWidth,d.framebufferHeight,{format:gi,type:er,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(O){for(let U=0;U<O.removed.length;U++){const L=O.removed[U],C=v.indexOf(L);C>=0&&(v[C]=null,x[C].disconnect(L))}for(let U=0;U<O.added.length;U++){const L=O.added[U];let C=v.indexOf(L);if(C===-1){for(let ht=0;ht<x.length;ht++)if(ht>=v.length){v.push(L),C=ht;break}else if(v[ht]===null){v[ht]=L,C=ht;break}if(C===-1)break}const et=x[C];et&&et.connect(L)}}const X=new Z,J=new Z;function H(O,U,L){X.setFromMatrixPosition(U.matrixWorld),J.setFromMatrixPosition(L.matrixWorld);const C=X.distanceTo(J),et=U.projectionMatrix.elements,ht=L.projectionMatrix.elements,K=et[14]/(et[10]-1),dt=et[14]/(et[10]+1),tt=(et[9]+1)/et[5],Y=(et[9]-1)/et[5],T=(et[8]-1)/et[0],rt=(ht[8]+1)/ht[0],nt=K*T,z=K*rt,k=C/(-T+rt),N=k*-T;if(U.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(N),O.translateZ(k),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),et[10]===-1)O.projectionMatrix.copy(U.projectionMatrix),O.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const lt=K+k,D=dt+k,w=nt-N,Q=z+(C-N),ot=tt*dt/D*lt,ct=Y*dt/D*lt;O.projectionMatrix.makePerspective(w,Q,ot,ct,lt,D),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function ft(O,U){U===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(U.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;let U=O.near,L=O.far;_.texture!==null&&(_.depthNear>0&&(U=_.depthNear),_.depthFar>0&&(L=_.depthFar)),y.near=P.near=E.near=U,y.far=P.far=E.far=L,(I!==y.near||F!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,F=y.far),E.layers.mask=O.layers.mask|2,P.layers.mask=O.layers.mask|4,y.layers.mask=E.layers.mask|P.layers.mask;const C=O.parent,et=y.cameras;ft(y,C);for(let ht=0;ht<et.length;ht++)ft(et[ht],C);et.length===2?H(y,E,P):y.projectionMatrix.copy(E.projectionMatrix),B(O,y,C)};function B(O,U,L){L===null?O.matrix.copy(U.matrixWorld):(O.matrix.copy(L.matrixWorld),O.matrix.invert(),O.matrix.multiply(U.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(U.projectionMatrix),O.projectionMatrixInverse.copy(U.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Qo*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(O){l=O,f!==null&&(f.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let gt=null;function It(O,U){if(u=U.getViewerPose(c||o),g=U,u!==null){const L=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let C=!1;L.length!==y.cameras.length&&(y.cameras.length=0,C=!0);for(let K=0;K<L.length;K++){const dt=L[K];let tt=null;if(d!==null)tt=d.getViewport(dt);else{const T=h.getViewSubImage(f,dt);tt=T.viewport,K===0&&(t.setRenderTargetTextures(M,T.colorTexture,f.ignoreDepthValues?void 0:T.depthStencilTexture),t.setRenderTarget(M))}let Y=S[K];Y===void 0&&(Y=new Xn,Y.layers.enable(K),Y.viewport=new Le,S[K]=Y),Y.matrix.fromArray(dt.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(dt.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(tt.x,tt.y,tt.width,tt.height),K===0&&(y.matrix.copy(Y.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),C===!0&&y.cameras.push(Y)}const et=i.enabledFeatures;if(et&&et.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const K=h.getDepthInformation(L[0]);K&&K.isValid&&K.texture&&_.init(t,K,i.renderState)}}for(let L=0;L<x.length;L++){const C=v[L],et=x[L];C!==null&&et!==void 0&&et.update(C,U,c||o)}gt&&gt(O,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),g=null}const $t=new Lp;$t.setAnimationLoop(It),this.setAnimationLoop=function(O){gt=O},this.dispose=function(){}}}const Ir=new Ni,vM=new we;function xM(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,xp(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,x,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Pn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Pn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=t.get(m),x=M.envMap,v=M.envMapRotation;x&&(p.envMap.value=x,Ir.copy(v),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),p.envMapRotation.value.setFromMatrix4(vM.makeRotationFromEuler(Ir)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Pn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yM(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function c(M,x){let v=i[M.id];v===void 0&&(g(M),v=u(M),i[M.id]=v,M.addEventListener("dispose",p));const A=x.program;n.updateUBOMapping(M,A);const b=t.render.frame;s[M.id]!==b&&(f(M),s[M.id]=b)}function u(M){const x=h();M.__bindingPointIndex=x;const v=r.createBuffer(),A=M.__size,b=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,A,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,v),v}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=i[M.id],v=M.uniforms,A=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let b=0,E=v.length;b<E;b++){const P=Array.isArray(v[b])?v[b]:[v[b]];for(let S=0,y=P.length;S<y;S++){const I=P[S];if(d(I,b,S,A)===!0){const F=I.__offset,G=Array.isArray(I.value)?I.value:[I.value];let W=0;for(let j=0;j<G.length;j++){const X=G[j],J=_(X);typeof X=="number"||typeof X=="boolean"?(I.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,F+W,I.__data)):X.isMatrix3?(I.__data[0]=X.elements[0],I.__data[1]=X.elements[1],I.__data[2]=X.elements[2],I.__data[3]=0,I.__data[4]=X.elements[3],I.__data[5]=X.elements[4],I.__data[6]=X.elements[5],I.__data[7]=0,I.__data[8]=X.elements[6],I.__data[9]=X.elements[7],I.__data[10]=X.elements[8],I.__data[11]=0):(X.toArray(I.__data,W),W+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(M,x,v,A){const b=M.value,E=x+"_"+v;if(A[E]===void 0)return typeof b=="number"||typeof b=="boolean"?A[E]=b:A[E]=b.clone(),!0;{const P=A[E];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return A[E]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(M){const x=M.uniforms;let v=0;const A=16;for(let E=0,P=x.length;E<P;E++){const S=Array.isArray(x[E])?x[E]:[x[E]];for(let y=0,I=S.length;y<I;y++){const F=S[y],G=Array.isArray(F.value)?F.value:[F.value];for(let W=0,j=G.length;W<j;W++){const X=G[W],J=_(X),H=v%A,ft=H%J.boundary,B=H+ft;v+=ft,B!==0&&A-B<J.storage&&(v+=A-B),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=J.storage}}}const b=v%A;return b>0&&(v+=A-b),M.__size=v,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){const x=M.target;x.removeEventListener("dispose",p);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Rh{constructor(t={}){const{canvas:e=gg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,m=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gn,this.toneMapping=vr,this.toneMappingExposure=1;const v=this;let A=!1,b=0,E=0,P=null,S=-1,y=null;const I=new Le,F=new Le;let G=null;const W=new Yt(0);let j=0,X=e.width,J=e.height,H=1,ft=null,B=null;const gt=new Le(0,0,X,J),It=new Le(0,0,X,J);let $t=!1;const O=new Sh;let U=!1,L=!1;this.transmissionResolutionScale=1;const C=new we,et=new we,ht=new Z,K=new Le,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function Y(){return P===null?H:1}let T=n;function rt(R,$){return e.getContext(R,$)}try{const R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${uh}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",bt,!1),T===null){const $="webgl2";if(T=rt($,R),T===null)throw rt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let nt,z,k,N,lt,D,w,Q,ot,ct,ut,St,xt,Mt,Ht,vt,yt,zt,Ft,Pt,Kt,Wt,le,V;function Tt(){nt=new Dy(T),nt.init(),Wt=new dM(T,nt),z=new by(T,nt,t,Wt),k=new hM(T,nt),z.reverseDepthBuffer&&f&&k.buffers.depth.setReversed(!0),N=new Uy(T),lt=new jS,D=new fM(T,nt,k,lt,z,Wt,N),w=new Ay(v),Q=new Py(v),ot=new H0(T),le=new Ey(T,ot),ct=new Ly(T,ot,N,le),ut=new Oy(T,ct,ot,N),Ft=new Ny(T,z,D),vt=new wy(lt),St=new KS(v,w,Q,nt,z,le,vt),xt=new xM(v,lt),Mt=new tM,Ht=new oM(nt),zt=new My(v,w,Q,k,ut,d,l),yt=new cM(v,ut,z),V=new yM(T,N,z,k),Pt=new Ty(T,nt,N),Kt=new Iy(T,nt,N),N.programs=St.programs,v.capabilities=z,v.extensions=nt,v.properties=lt,v.renderLists=Mt,v.shadowMap=yt,v.state=k,v.info=N}Tt();const at=new gM(v,T);this.xr=at,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const R=nt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=nt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(X,J,!1))},this.getSize=function(R){return R.set(X,J)},this.setSize=function(R,$,st=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=R,J=$,e.width=Math.floor(R*H),e.height=Math.floor($*H),st===!0&&(e.style.width=R+"px",e.style.height=$+"px"),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(X*H,J*H).floor()},this.setDrawingBufferSize=function(R,$,st){X=R,J=$,H=st,e.width=Math.floor(R*st),e.height=Math.floor($*st),this.setViewport(0,0,R,$)},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(gt)},this.setViewport=function(R,$,st,it){R.isVector4?gt.set(R.x,R.y,R.z,R.w):gt.set(R,$,st,it),k.viewport(I.copy(gt).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(It)},this.setScissor=function(R,$,st,it){R.isVector4?It.set(R.x,R.y,R.z,R.w):It.set(R,$,st,it),k.scissor(F.copy(It).multiplyScalar(H).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(R){k.setScissorTest($t=R)},this.setOpaqueSort=function(R){ft=R},this.setTransparentSort=function(R){B=R},this.getClearColor=function(R){return R.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(R=!0,$=!0,st=!0){let it=0;if(R){let q=!1;if(P!==null){const _t=P.texture.format;q=_t===gh||_t===_h||_t===mh}if(q){const _t=P.texture.type,At=_t===er||_t===es||_t===jo||_t===js||_t===dh||_t===ph,Lt=zt.getClearColor(),Dt=zt.getClearAlpha(),kt=Lt.r,Gt=Lt.g,Bt=Lt.b;At?(g[0]=kt,g[1]=Gt,g[2]=Bt,g[3]=Dt,T.clearBufferuiv(T.COLOR,0,g)):(_[0]=kt,_[1]=Gt,_[2]=Bt,_[3]=Dt,T.clearBufferiv(T.COLOR,0,_))}else it|=T.COLOR_BUFFER_BIT}$&&(it|=T.DEPTH_BUFFER_BIT),st&&(it|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),zt.dispose(),Mt.dispose(),Ht.dispose(),lt.dispose(),w.dispose(),Q.dispose(),ut.dispose(),le.dispose(),V.dispose(),St.dispose(),at.dispose(),at.removeEventListener("sessionstart",wt),at.removeEventListener("sessionend",Jt),Ot.stop()};function pt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const R=N.autoReset,$=yt.enabled,st=yt.autoUpdate,it=yt.needsUpdate,q=yt.type;Tt(),N.autoReset=R,yt.enabled=$,yt.autoUpdate=st,yt.needsUpdate=it,yt.type=q}function bt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Xt(R){const $=R.target;$.removeEventListener("dispose",Xt),ce($)}function ce(R){Pe(R),lt.remove(R)}function Pe(R){const $=lt.get(R).programs;$!==void 0&&($.forEach(function(st){St.releaseProgram(st)}),R.isShaderMaterial&&St.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,st,it,q,_t){$===null&&($=dt);const At=q.isMesh&&q.matrixWorld.determinant()<0,Lt=Fn(R,$,st,it,q);k.setMaterial(it,At);let Dt=st.index,kt=1;if(it.wireframe===!0){if(Dt=ct.getWireframeAttribute(st),Dt===void 0)return;kt=2}const Gt=st.drawRange,Bt=st.attributes.position;let ee=Gt.start*kt,de=(Gt.start+Gt.count)*kt;_t!==null&&(ee=Math.max(ee,_t.start*kt),de=Math.min(de,(_t.start+_t.count)*kt)),Dt!==null?(ee=Math.max(ee,0),de=Math.min(de,Dt.count)):Bt!=null&&(ee=Math.max(ee,0),de=Math.min(de,Bt.count));const Fe=de-ee;if(Fe<0||Fe===1/0)return;le.setup(q,it,Lt,st,Dt);let De,ue=Pt;if(Dt!==null&&(De=ot.get(Dt),ue=Kt,ue.setIndex(De)),q.isMesh)it.wireframe===!0?(k.setLineWidth(it.wireframeLinewidth*Y()),ue.setMode(T.LINES)):ue.setMode(T.TRIANGLES);else if(q.isLine){let Vt=it.linewidth;Vt===void 0&&(Vt=1),k.setLineWidth(Vt*Y()),q.isLineSegments?ue.setMode(T.LINES):q.isLineLoop?ue.setMode(T.LINE_LOOP):ue.setMode(T.LINE_STRIP)}else q.isPoints?ue.setMode(T.POINTS):q.isSprite&&ue.setMode(T.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ue.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))ue.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Vt=q._multiDrawStarts,en=q._multiDrawCounts,pe=q._multiDrawCount,hi=Dt?ot.get(Dt).bytesPerElement:1,us=lt.get(it).currentProgram.getUniforms();for(let Bn=0;Bn<pe;Bn++)us.setValue(T,"_gl_DrawID",Bn),ue.render(Vt[Bn]/hi,en[Bn])}else if(q.isInstancedMesh)ue.renderInstances(ee,Fe,q.count);else if(st.isInstancedBufferGeometry){const Vt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,en=Math.min(st.instanceCount,Vt);ue.renderInstances(ee,Fe,en)}else ue.render(ee,Fe)};function Rt(R,$,st){R.transparent===!0&&R.side===ai&&R.forceSinglePass===!1?(R.side=Pn,R.needsUpdate=!0,ge(R,$,st),R.side=Mr,R.needsUpdate=!0,ge(R,$,st),R.side=ai):ge(R,$,st)}this.compile=function(R,$,st=null){st===null&&(st=R),m=Ht.get(st),m.init($),x.push(m),st.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),R!==st&&R.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights();const it=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const _t=q.material;if(_t)if(Array.isArray(_t))for(let At=0;At<_t.length;At++){const Lt=_t[At];Rt(Lt,st,q),it.add(Lt)}else Rt(_t,st,q),it.add(_t)}),x.pop(),m=null,it},this.compileAsync=function(R,$,st=null){const it=this.compile(R,$,st);return new Promise(q=>{function _t(){if(it.forEach(function(At){lt.get(At).currentProgram.isReady()&&it.delete(At)}),it.size===0){q(R);return}setTimeout(_t,10)}nt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Nt=null;function jt(R){Nt&&Nt(R)}function wt(){Ot.stop()}function Jt(){Ot.start()}const Ot=new Lp;Ot.setAnimationLoop(jt),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(R){Nt=R,at.setAnimationLoop(R),R===null?Ot.stop():Ot.start()},at.addEventListener("sessionstart",wt),at.addEventListener("sessionend",Jt),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera($),$=at.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,$,P),m=Ht.get(R,x.length),m.init($),x.push(m),et.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),O.setFromProjectionMatrix(et),L=this.localClippingEnabled,U=vt.init(this.clippingPlanes,L),p=Mt.get(R,M.length),p.init(),M.push(p),at.enabled===!0&&at.isPresenting===!0){const _t=v.xr.getDepthSensingMesh();_t!==null&&qt(_t,$,-1/0,v.sortObjects)}qt(R,$,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(ft,B),tt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,tt&&zt.addToRenderList(p,R),this.info.render.frame++,U===!0&&vt.beginShadows();const st=m.state.shadowsArray;yt.render(st,R,$),U===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=p.opaque,q=p.transmissive;if(m.setupLights(),$.isArrayCamera){const _t=$.cameras;if(q.length>0)for(let At=0,Lt=_t.length;At<Lt;At++){const Dt=_t[At];ie(it,q,R,Dt)}tt&&zt.render(R);for(let At=0,Lt=_t.length;At<Lt;At++){const Dt=_t[At];Ue(p,R,Dt,Dt.viewport)}}else q.length>0&&ie(it,q,R,$),tt&&zt.render(R),Ue(p,R,$);P!==null&&E===0&&(D.updateMultisampleRenderTarget(P),D.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(v,R,$),le.resetDefaultState(),S=-1,y=null,x.pop(),x.length>0?(m=x[x.length-1],U===!0&&vt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function qt(R,$,st,it){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||O.intersectsSprite(R)){it&&K.setFromMatrixPosition(R.matrixWorld).applyMatrix4(et);const At=ut.update(R),Lt=R.material;Lt.visible&&p.push(R,At,Lt,st,K.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||O.intersectsObject(R))){const At=ut.update(R),Lt=R.material;if(it&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),K.copy(R.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),K.copy(At.boundingSphere.center)),K.applyMatrix4(R.matrixWorld).applyMatrix4(et)),Array.isArray(Lt)){const Dt=At.groups;for(let kt=0,Gt=Dt.length;kt<Gt;kt++){const Bt=Dt[kt],ee=Lt[Bt.materialIndex];ee&&ee.visible&&p.push(R,At,ee,st,K.z,Bt)}}else Lt.visible&&p.push(R,At,Lt,st,K.z,null)}}const _t=R.children;for(let At=0,Lt=_t.length;At<Lt;At++)qt(_t[At],$,st,it)}function Ue(R,$,st,it){const q=R.opaque,_t=R.transmissive,At=R.transparent;m.setupLightsView(st),U===!0&&vt.setGlobalState(v.clippingPlanes,st),it&&k.viewport(I.copy(it)),q.length>0&&ye(q,$,st),_t.length>0&&ye(_t,$,st),At.length>0&&ye(At,$,st),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function ie(R,$,st,it){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[it.id]===void 0&&(m.state.transmissionRenderTarget[it.id]=new yi(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?ji:er,minFilter:Xr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const _t=m.state.transmissionRenderTarget[it.id],At=it.viewport||I;_t.setSize(At.z*v.transmissionResolutionScale,At.w*v.transmissionResolutionScale);const Lt=v.getRenderTarget();v.setRenderTarget(_t),v.getClearColor(W),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),tt&&zt.render(st);const Dt=v.toneMapping;v.toneMapping=vr;const kt=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),m.setupLightsView(it),U===!0&&vt.setGlobalState(v.clippingPlanes,it),ye(R,st,it),D.updateMultisampleRenderTarget(_t),D.updateRenderTargetMipmap(_t),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Bt=0,ee=$.length;Bt<ee;Bt++){const de=$[Bt],Fe=de.object,De=de.geometry,ue=de.material,Vt=de.group;if(ue.side===ai&&Fe.layers.test(it.layers)){const en=ue.side;ue.side=Pn,ue.needsUpdate=!0,Ge(Fe,st,it,De,ue,Vt),ue.side=en,ue.needsUpdate=!0,Gt=!0}}Gt===!0&&(D.updateMultisampleRenderTarget(_t),D.updateRenderTargetMipmap(_t))}v.setRenderTarget(Lt),v.setClearColor(W,j),kt!==void 0&&(it.viewport=kt),v.toneMapping=Dt}function ye(R,$,st){const it=$.isScene===!0?$.overrideMaterial:null;for(let q=0,_t=R.length;q<_t;q++){const At=R[q],Lt=At.object,Dt=At.geometry,kt=it===null?At.material:it,Gt=At.group;Lt.layers.test(st.layers)&&Ge(Lt,$,st,Dt,kt,Gt)}}function Ge(R,$,st,it,q,_t){R.onBeforeRender(v,$,st,it,q,_t),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(v,$,st,it,R,_t),q.transparent===!0&&q.side===ai&&q.forceSinglePass===!1?(q.side=Pn,q.needsUpdate=!0,v.renderBufferDirect(st,$,it,q,R,_t),q.side=Mr,q.needsUpdate=!0,v.renderBufferDirect(st,$,it,q,R,_t),q.side=ai):v.renderBufferDirect(st,$,it,q,R,_t),R.onAfterRender(v,$,st,it,q,_t)}function ge(R,$,st){$.isScene!==!0&&($=dt);const it=lt.get(R),q=m.state.lights,_t=m.state.shadowsArray,At=q.state.version,Lt=St.getParameters(R,q.state,_t,$,st),Dt=St.getProgramCacheKey(Lt);let kt=it.programs;it.environment=R.isMeshStandardMaterial?$.environment:null,it.fog=$.fog,it.envMap=(R.isMeshStandardMaterial?Q:w).get(R.envMap||it.environment),it.envMapRotation=it.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,kt===void 0&&(R.addEventListener("dispose",Xt),kt=new Map,it.programs=kt);let Gt=kt.get(Dt);if(Gt!==void 0){if(it.currentProgram===Gt&&it.lightsStateVersion===At)return fe(R,Lt),Gt}else Lt.uniforms=St.getUniforms(R),R.onBeforeCompile(Lt,v),Gt=St.acquireProgram(Lt,Dt),kt.set(Dt,Gt),it.uniforms=Lt.uniforms;const Bt=it.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Bt.clippingPlanes=vt.uniform),fe(R,Lt),it.needsLights=pn(R),it.lightsStateVersion=At,it.needsLights&&(Bt.ambientLightColor.value=q.state.ambient,Bt.lightProbe.value=q.state.probe,Bt.directionalLights.value=q.state.directional,Bt.directionalLightShadows.value=q.state.directionalShadow,Bt.spotLights.value=q.state.spot,Bt.spotLightShadows.value=q.state.spotShadow,Bt.rectAreaLights.value=q.state.rectArea,Bt.ltc_1.value=q.state.rectAreaLTC1,Bt.ltc_2.value=q.state.rectAreaLTC2,Bt.pointLights.value=q.state.point,Bt.pointLightShadows.value=q.state.pointShadow,Bt.hemisphereLights.value=q.state.hemi,Bt.directionalShadowMap.value=q.state.directionalShadowMap,Bt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Bt.spotShadowMap.value=q.state.spotShadowMap,Bt.spotLightMatrix.value=q.state.spotLightMatrix,Bt.spotLightMap.value=q.state.spotLightMap,Bt.pointShadowMap.value=q.state.pointShadowMap,Bt.pointShadowMatrix.value=q.state.pointShadowMatrix),it.currentProgram=Gt,it.uniformsList=null,Gt}function ve(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=ul.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function fe(R,$){const st=lt.get(R);st.outputColorSpace=$.outputColorSpace,st.batching=$.batching,st.batchingColor=$.batchingColor,st.instancing=$.instancing,st.instancingColor=$.instancingColor,st.instancingMorph=$.instancingMorph,st.skinning=$.skinning,st.morphTargets=$.morphTargets,st.morphNormals=$.morphNormals,st.morphColors=$.morphColors,st.morphTargetsCount=$.morphTargetsCount,st.numClippingPlanes=$.numClippingPlanes,st.numIntersection=$.numClipIntersection,st.vertexAlphas=$.vertexAlphas,st.vertexTangents=$.vertexTangents,st.toneMapping=$.toneMapping}function Fn(R,$,st,it,q){$.isScene!==!0&&($=dt),D.resetTextureUnits();const _t=$.fog,At=it.isMeshStandardMaterial?$.environment:null,Lt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:to,Dt=(it.isMeshStandardMaterial?Q:w).get(it.envMap||At),kt=it.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Gt=!!st.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Bt=!!st.morphAttributes.position,ee=!!st.morphAttributes.normal,de=!!st.morphAttributes.color;let Fe=vr;it.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Fe=v.toneMapping);const De=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ue=De!==void 0?De.length:0,Vt=lt.get(it),en=m.state.lights;if(U===!0&&(L===!0||R!==y)){const mn=R===y&&it.id===S;vt.setState(it,R,mn)}let pe=!1;it.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==en.state.version||Vt.outputColorSpace!==Lt||q.isBatchedMesh&&Vt.batching===!1||!q.isBatchedMesh&&Vt.batching===!0||q.isBatchedMesh&&Vt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Vt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Vt.instancing===!1||!q.isInstancedMesh&&Vt.instancing===!0||q.isSkinnedMesh&&Vt.skinning===!1||!q.isSkinnedMesh&&Vt.skinning===!0||q.isInstancedMesh&&Vt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Vt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Vt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Vt.instancingMorph===!1&&q.morphTexture!==null||Vt.envMap!==Dt||it.fog===!0&&Vt.fog!==_t||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==vt.numPlanes||Vt.numIntersection!==vt.numIntersection)||Vt.vertexAlphas!==kt||Vt.vertexTangents!==Gt||Vt.morphTargets!==Bt||Vt.morphNormals!==ee||Vt.morphColors!==de||Vt.toneMapping!==Fe||Vt.morphTargetsCount!==ue)&&(pe=!0):(pe=!0,Vt.__version=it.version);let hi=Vt.currentProgram;pe===!0&&(hi=ge(it,$,q));let us=!1,Bn=!1,mo=!1;const Ee=hi.getUniforms(),ei=Vt.uniforms;if(k.useProgram(hi.program)&&(us=!0,Bn=!0,mo=!0),it.id!==S&&(S=it.id,Bn=!0),us||y!==R){k.buffers.depth.getReversed()?(C.copy(R.projectionMatrix),xg(C),yg(C),Ee.setValue(T,"projectionMatrix",C)):Ee.setValue(T,"projectionMatrix",R.projectionMatrix),Ee.setValue(T,"viewMatrix",R.matrixWorldInverse);const An=Ee.map.cameraPosition;An!==void 0&&An.setValue(T,ht.setFromMatrixPosition(R.matrixWorld)),z.logarithmicDepthBuffer&&Ee.setValue(T,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Ee.setValue(T,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,Bn=!0,mo=!0)}if(q.isSkinnedMesh){Ee.setOptional(T,q,"bindMatrix"),Ee.setOptional(T,q,"bindMatrixInverse");const mn=q.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ee.setValue(T,"boneTexture",mn.boneTexture,D))}q.isBatchedMesh&&(Ee.setOptional(T,q,"batchingTexture"),Ee.setValue(T,"batchingTexture",q._matricesTexture,D),Ee.setOptional(T,q,"batchingIdTexture"),Ee.setValue(T,"batchingIdTexture",q._indirectTexture,D),Ee.setOptional(T,q,"batchingColorTexture"),q._colorsTexture!==null&&Ee.setValue(T,"batchingColorTexture",q._colorsTexture,D));const ni=st.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&Ft.update(q,st,hi),(Bn||Vt.receiveShadow!==q.receiveShadow)&&(Vt.receiveShadow=q.receiveShadow,Ee.setValue(T,"receiveShadow",q.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(ei.envMap.value=Dt,ei.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&$.environment!==null&&(ei.envMapIntensity.value=$.environmentIntensity),Bn&&(Ee.setValue(T,"toneMappingExposure",v.toneMappingExposure),Vt.needsLights&&Me(ei,mo),_t&&it.fog===!0&&xt.refreshFogUniforms(ei,_t),xt.refreshMaterialUniforms(ei,it,H,J,m.state.transmissionRenderTarget[R.id]),ul.upload(T,ve(Vt),ei,D)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(ul.upload(T,ve(Vt),ei,D),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Ee.setValue(T,"center",q.center),Ee.setValue(T,"modelViewMatrix",q.modelViewMatrix),Ee.setValue(T,"normalMatrix",q.normalMatrix),Ee.setValue(T,"modelMatrix",q.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const mn=it.uniformsGroups;for(let An=0,Zl=mn.length;An<Zl;An++){const Ar=mn[An];V.update(Ar,hi),V.bind(Ar,hi)}}return hi}function Me(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function pn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,$,st){lt.get(R.texture).__webglTexture=$,lt.get(R.depthTexture).__webglTexture=st;const it=lt.get(R);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=st===void 0,it.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,$){const st=lt.get(R);st.__webglFramebuffer=$,st.__useDefaultFramebuffer=$===void 0};const ti=T.createFramebuffer();this.setRenderTarget=function(R,$=0,st=0){P=R,b=$,E=st;let it=!0,q=null,_t=!1,At=!1;if(R){const Dt=lt.get(R);if(Dt.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(T.FRAMEBUFFER,null),it=!1;else if(Dt.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(Dt.__hasExternalTextures)D.rebindTextures(R,lt.get(R.texture).__webglTexture,lt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Bt=R.depthTexture;if(Dt.__boundDepthTexture!==Bt){if(Bt!==null&&lt.has(Bt)&&(R.width!==Bt.image.width||R.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const kt=R.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(At=!0);const Gt=lt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Gt[$])?q=Gt[$][st]:q=Gt[$],_t=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?q=lt.get(R).__webglMultisampledFramebuffer:Array.isArray(Gt)?q=Gt[st]:q=Gt,I.copy(R.viewport),F.copy(R.scissor),G=R.scissorTest}else I.copy(gt).multiplyScalar(H).floor(),F.copy(It).multiplyScalar(H).floor(),G=$t;if(st!==0&&(q=ti),k.bindFramebuffer(T.FRAMEBUFFER,q)&&it&&k.drawBuffers(R,q),k.viewport(I),k.scissor(F),k.setScissorTest(G),_t){const Dt=lt.get(R.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+$,Dt.__webglTexture,st)}else if(At){const Dt=lt.get(R.texture),kt=$;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Dt.__webglTexture,st,kt)}else if(R!==null&&st!==0){const Dt=lt.get(R.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Dt.__webglTexture,st)}S=-1},this.readRenderTargetPixels=function(R,$,st,it,q,_t,At){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=lt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&At!==void 0&&(Lt=Lt[At]),Lt){k.bindFramebuffer(T.FRAMEBUFFER,Lt);try{const Dt=R.texture,kt=Dt.format,Gt=Dt.type;if(!z.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-it&&st>=0&&st<=R.height-q&&T.readPixels($,st,it,q,Wt.convert(kt),Wt.convert(Gt),_t)}finally{const Dt=P!==null?lt.get(P).__webglFramebuffer:null;k.bindFramebuffer(T.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(R,$,st,it,q,_t,At){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=lt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&At!==void 0&&(Lt=Lt[At]),Lt){const Dt=R.texture,kt=Dt.format,Gt=Dt.type;if(!z.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=R.width-it&&st>=0&&st<=R.height-q){k.bindFramebuffer(T.FRAMEBUFFER,Lt);const Bt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Bt),T.bufferData(T.PIXEL_PACK_BUFFER,_t.byteLength,T.STREAM_READ),T.readPixels($,st,it,q,Wt.convert(kt),Wt.convert(Gt),0);const ee=P!==null?lt.get(P).__webglFramebuffer:null;k.bindFramebuffer(T.FRAMEBUFFER,ee);const de=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await vg(T,de,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Bt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,_t),T.deleteBuffer(Bt),T.deleteSync(de),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,$=null,st=0){R.isTexture!==!0&&(Rs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,R=arguments[1]);const it=Math.pow(2,-st),q=Math.floor(R.image.width*it),_t=Math.floor(R.image.height*it),At=$!==null?$.x:0,Lt=$!==null?$.y:0;D.setTexture2D(R,0),T.copyTexSubImage2D(T.TEXTURE_2D,st,0,0,At,Lt,q,_t),k.unbindTexture()};const We=T.createFramebuffer(),Xe=T.createFramebuffer();this.copyTextureToTexture=function(R,$,st=null,it=null,q=0,_t=null){R.isTexture!==!0&&(Rs("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,R=arguments[1],$=arguments[2],_t=arguments[3]||0,st=null),_t===null&&(q!==0?(Rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=q,q=0):_t=0);let At,Lt,Dt,kt,Gt,Bt,ee,de,Fe;const De=R.isCompressedTexture?R.mipmaps[_t]:R.image;if(st!==null)At=st.max.x-st.min.x,Lt=st.max.y-st.min.y,Dt=st.isBox3?st.max.z-st.min.z:1,kt=st.min.x,Gt=st.min.y,Bt=st.isBox3?st.min.z:0;else{const ni=Math.pow(2,-q);At=Math.floor(De.width*ni),Lt=Math.floor(De.height*ni),R.isDataArrayTexture?Dt=De.depth:R.isData3DTexture?Dt=Math.floor(De.depth*ni):Dt=1,kt=0,Gt=0,Bt=0}it!==null?(ee=it.x,de=it.y,Fe=it.z):(ee=0,de=0,Fe=0);const ue=Wt.convert($.format),Vt=Wt.convert($.type);let en;$.isData3DTexture?(D.setTexture3D($,0),en=T.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(D.setTexture2DArray($,0),en=T.TEXTURE_2D_ARRAY):(D.setTexture2D($,0),en=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,$.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,$.unpackAlignment);const pe=T.getParameter(T.UNPACK_ROW_LENGTH),hi=T.getParameter(T.UNPACK_IMAGE_HEIGHT),us=T.getParameter(T.UNPACK_SKIP_PIXELS),Bn=T.getParameter(T.UNPACK_SKIP_ROWS),mo=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,De.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,De.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,kt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Gt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Bt);const Ee=R.isDataArrayTexture||R.isData3DTexture,ei=$.isDataArrayTexture||$.isData3DTexture;if(R.isDepthTexture){const ni=lt.get(R),mn=lt.get($),An=lt.get(ni.__renderTarget),Zl=lt.get(mn.__renderTarget);k.bindFramebuffer(T.READ_FRAMEBUFFER,An.__webglFramebuffer),k.bindFramebuffer(T.DRAW_FRAMEBUFFER,Zl.__webglFramebuffer);for(let Ar=0;Ar<Dt;Ar++)Ee&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,lt.get(R).__webglTexture,q,Bt+Ar),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,lt.get($).__webglTexture,_t,Fe+Ar)),T.blitFramebuffer(kt,Gt,At,Lt,ee,de,At,Lt,T.DEPTH_BUFFER_BIT,T.NEAREST);k.bindFramebuffer(T.READ_FRAMEBUFFER,null),k.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(q!==0||R.isRenderTargetTexture||lt.has(R)){const ni=lt.get(R),mn=lt.get($);k.bindFramebuffer(T.READ_FRAMEBUFFER,We),k.bindFramebuffer(T.DRAW_FRAMEBUFFER,Xe);for(let An=0;An<Dt;An++)Ee?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ni.__webglTexture,q,Bt+An):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ni.__webglTexture,q),ei?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,mn.__webglTexture,_t,Fe+An):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,mn.__webglTexture,_t),q!==0?T.blitFramebuffer(kt,Gt,At,Lt,ee,de,At,Lt,T.COLOR_BUFFER_BIT,T.NEAREST):ei?T.copyTexSubImage3D(en,_t,ee,de,Fe+An,kt,Gt,At,Lt):T.copyTexSubImage2D(en,_t,ee,de,kt,Gt,At,Lt);k.bindFramebuffer(T.READ_FRAMEBUFFER,null),k.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else ei?R.isDataTexture||R.isData3DTexture?T.texSubImage3D(en,_t,ee,de,Fe,At,Lt,Dt,ue,Vt,De.data):$.isCompressedArrayTexture?T.compressedTexSubImage3D(en,_t,ee,de,Fe,At,Lt,Dt,ue,De.data):T.texSubImage3D(en,_t,ee,de,Fe,At,Lt,Dt,ue,Vt,De):R.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,_t,ee,de,At,Lt,ue,Vt,De.data):R.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,_t,ee,de,De.width,De.height,ue,De.data):T.texSubImage2D(T.TEXTURE_2D,_t,ee,de,At,Lt,ue,Vt,De);T.pixelStorei(T.UNPACK_ROW_LENGTH,pe),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,hi),T.pixelStorei(T.UNPACK_SKIP_PIXELS,us),T.pixelStorei(T.UNPACK_SKIP_ROWS,Bn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,mo),_t===0&&$.generateMipmaps&&T.generateMipmap(en),k.unbindTexture()},this.copyTextureToTexture3D=function(R,$,st=null,it=null,q=0){return R.isTexture!==!0&&(Rs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),st=arguments[0]||null,it=arguments[1]||null,R=arguments[2],$=arguments[3],q=arguments[4]||0),Rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,$,st,it,q)},this.initRenderTarget=function(R){lt.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),k.unbindTexture()},this.resetState=function(){b=0,E=0,P=null,k.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}function Xi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Fp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},no={duration:.5,overwrite:!1,delay:0},Ph,sn,be,Li=1e8,fn=1/Li,Fu=Math.PI*2,SM=Fu/4,MM=0,Bp=Math.sqrt,EM=Math.cos,TM=Math.sin,tn=function(t){return typeof t=="string"},Ie=function(t){return typeof t=="function"},nr=function(t){return typeof t=="number"},Dh=function(t){return typeof t>"u"},Oi=function(t){return typeof t=="object"},Ln=function(t){return t!==!1},Lh=function(){return typeof window<"u"},Ya=function(t){return Ie(t)||tn(t)},zp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},dn=Array.isArray,Bu=/(?:-?\.?\d|\.)+/gi,kp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Us=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Pc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Hp=/[+-]=-?[.\d]+/,Vp=/[^,'"\[\]\s]+/gi,bM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ae,Ei,zu,Ih,jn={},wl={},Gp,Wp=function(t){return(wl=io(t,jn))&&On},Uh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ia=function(t,e){return!e&&console.warn(t)},Xp=function(t,e){return t&&(jn[t]=e)&&wl&&(wl[t]=e)||jn},ra=function(){return 0},wM={suppressEvents:!0,isStart:!0,kill:!1},hl={suppressEvents:!0,kill:!1},AM={suppressEvents:!0},Nh={},xr=[],ku={},Yp,Wn={},Dc={},ud=30,fl=[],Oh="",Fh=function(t){var e=t[0],n,i;if(Oi(e)||Ie(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=fl.length;i--&&!fl[i].targetTest(e););n=fl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new _m(t[i],n)))||t.splice(i,1);return t},Zr=function(t){return t._gsap||Fh(ci(t))[0]._gsap},qp=function(t,e,n){return(n=t[e])&&Ie(n)?t[e]():Dh(n)&&t.getAttribute&&t.getAttribute(e)||n},In=function(t,e){return(t=t.split(",")).forEach(e)||t},Ne=function(t){return Math.round(t*1e5)/1e5||0},He=function(t){return Math.round(t*1e7)/1e7||0},Gs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},CM=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Al=function(){var t=xr.length,e=xr.slice(0),n,i;for(ku={},xr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Zp=function(t,e,n,i){xr.length&&!sn&&Al(),t.render(e,n,sn&&e<0&&(t._initted||t._startAt)),xr.length&&!sn&&Al()},$p=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Vp).length<2?e:tn(t)?t.trim():t},Jp=function(t){return t},Qn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},RM=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},io=function(t,e){for(var n in e)t[n]=e[n];return t},hd=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Oi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Cl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Oo=function(t){var e=t.parent||Ae,n=t.keyframes?RM(dn(t.keyframes)):Qn;if(Ln(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},PM=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Kp=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Wl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Er=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},$r=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},DM=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Hu=function(t,e,n,i){return t._startAt&&(sn?t._startAt.revert(hl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},LM=function r(t){return!t||t._ts&&r(t.parent)},fd=function(t){return t._repeat?ro(t._tTime,t=t.duration()+t._rDelay)*t:0},ro=function(t,e){var n=Math.floor(t=He(t/e));return t&&n===t?n-1:n},Rl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Xl=function(t){return t._end=He(t._start+(t._tDur/Math.abs(t._ts||t._rts||fn)||0))},Yl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=He(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Xl(t),n._dirty||$r(n,t)),t},jp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Rl(t.rawTime(),e),(!e._dur||ma(0,e.totalDuration(),n)-e._tTime>fn)&&e.render(n,!0)),$r(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-1e-8}},Ai=function(t,e,n,i){return e.parent&&Er(e),e._start=He((nr(n)?n:n||t!==Ae?ri(t,n,e):t._time)+e._delay),e._end=He(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Kp(t,e,"_first","_last",t._sort?"_start":0),Vu(e)||(t._recent=e),i||jp(t,e),t._ts<0&&Yl(t,t._tTime),t},Qp=function(t,e){return(jn.ScrollTrigger||Uh("scrollTrigger",e))&&jn.ScrollTrigger.create(e,t)},tm=function(t,e,n,i,s){if(zh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!sn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Yp!==qn.frame)return xr.push(t),t._lazy=[s,i],1},IM=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Vu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},UM=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&IM(t)&&!(!t._initted&&Vu(t))||(t._ts<0||t._dp._ts<0)&&!Vu(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=ma(0,t._tDur,e),u=ro(l,a),t._yoyo&&u&1&&(o=1-o),u!==ro(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||sn||i||t._zTime===fn||!e&&t._zTime){if(!t._initted&&tm(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?fn:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Hu(t,e,n,!0),t._onUpdate&&!n&&$n(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&$n(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Er(t,1),!n&&!sn&&($n(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},NM=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},so=function(t,e,n,i){var s=t._repeat,o=He(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:He(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Yl(t,t._tTime=t._tDur*a),t.parent&&Xl(t),n||$r(t.parent,t),t},dd=function(t){return t instanceof Tn?$r(t):so(t,t._dur)},OM={_start:0,endTime:ra,totalDuration:ra},ri=function r(t,e,n){var i=t.labels,s=t._recent||OM,o=t.duration()>=Li?s.endTime(!1):t._dur,a,l,c;return tn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(dn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Fo=function(t,e,n){var i=nr(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ln(l.vars.inherit)&&l.parent;o.immediateRender=Ln(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new ke(e[0],o,e[s+1])},wr=function(t,e){return t||t===0?e(t):e},ma=function(t,e,n){return n<t?t:n>e?e:n},un=function(t,e){return!tn(t)||!(e=bM.exec(t))?"":e[1]},FM=function(t,e,n){return wr(n,function(i){return ma(t,e,i)})},Gu=[].slice,em=function(t,e){return t&&Oi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Oi(t[0]))&&!t.nodeType&&t!==Ei},BM=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return tn(i)&&!e||em(i,1)?(s=n).push.apply(s,ci(i)):n.push(i)})||n},ci=function(t,e,n){return be&&!e&&be.selector?be.selector(t):tn(t)&&!n&&(zu||!oo())?Gu.call((e||Ih).querySelectorAll(t),0):dn(t)?BM(t,n):em(t)?Gu.call(t,0):t?[t]:[]},Wu=function(t){return t=ci(t)[0]||ia("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ci(e,n.querySelectorAll?n:n===t?ia("Invalid scope")||Ih.createElement("div"):t)}},nm=function(t){return t.sort(function(){return .5-Math.random()})},im=function(t){if(Ie(t))return t;var e=Oi(t)?t:{each:t},n=Jr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,h=i;return tn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||e).length,p=o[_],m,M,x,v,A,b,E,P,S;if(!p){if(S=e.grid==="auto"?0:(e.grid||[1,Li])[1],!S){for(E=-1e8;E<(E=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(p=o[_]=[],m=l?Math.min(S,_)*u-.5:i%S,M=S===Li?0:l?_*h/S-.5:i/S|0,E=0,P=Li,b=0;b<_;b++)x=b%S-m,v=M-(b/S|0),p[b]=A=c?Math.abs(c==="y"?v:x):Bp(x*x+v*v),A>E&&(E=A),A<P&&(P=A);i==="random"&&nm(p),p.max=E-P,p.min=P,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=un(e.amount||e.each)||0,n=n&&_<0?dm(n):n}return _=(p[f]-p.min)/p.max||0,He(p.b+(n?n(_):_)*p.v)+p.u}},Xu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=He(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(nr(n)?0:un(n))}},rm=function(t,e){var n=dn(t),i,s;return!n&&Oi(t)&&(i=n=t.radius||Li,t.values?(t=ci(t.values),(s=!nr(t[0]))&&(i*=i)):t=Xu(t.increment)),wr(e,n?Ie(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Li,u=0,h=t.length,f,d;h--;)s?(f=t[h].x-a,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:o,s||u===o||nr(o)?u:u+un(o)}:Xu(t))},sm=function(t,e,n,i){return wr(dn(t)?!e:n===!0?!!(n=0):!i,function(){return dn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},zM=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},kM=function(t,e){return function(n){return t(parseFloat(n))+(e||un(n))}},HM=function(t,e,n){return am(t,e,0,1,n)},om=function(t,e,n){return wr(n,function(i){return t[~~e(i)]})},VM=function r(t,e,n){var i=e-t;return dn(t)?om(t,r(0,t.length),e):wr(n,function(s){return(i+(s-t)%i)%i+t})},GM=function r(t,e,n){var i=e-t,s=i*2;return dn(t)?om(t,r(0,t.length-1),e):wr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},sa=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?Vp:Bu),n+=t.substr(e,i-e)+sm(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},am=function(t,e,n,i,s){var o=e-t,a=i-n;return wr(s,function(l){return n+((l-t)/o*a||0)})},WM=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=tn(t),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(dn(t)&&!dn(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=e}else i||(t=io(dn(t)?[]:{},t));if(!u){for(l in e)Bh.call(a,t,l,"get",e[l]);s=function(g){return Vh(g,a)||(o?t.p:t)}}}return wr(n,s)},pd=function(t,e,n){var i=t.labels,s=Li,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},$n=function(t,e,n){var i=t.vars,s=i[e],o=be,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&xr.length&&Al(),a&&(be=a),u=l?s.apply(c,l):s.call(c),be=o,u},wo=function(t){return Er(t),t.scrollTrigger&&t.scrollTrigger.kill(!!sn),t.progress()<1&&$n(t,"onInterrupt"),t},Ns,lm=[],cm=function(t){if(t)if(t=!t.name&&t.default||t,Lh()||t.headless){var e=t.name,n=Ie(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ra,render:Vh,add:Bh,kill:oE,modifier:sE,rawVars:0},o={targetTest:0,get:0,getSetter:Hh,aliases:{},register:0};if(oo(),t!==i){if(Wn[e])return;Qn(i,Qn(Cl(t,s),o)),io(i.prototype,io(s,Cl(t,o))),Wn[i.prop=e]=i,t.targetTest&&(fl.push(i),Nh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Xp(e,i),t.register&&t.register(On,i,Un)}else lm.push(t)},xe=255,Ao={aqua:[0,xe,xe],lime:[0,xe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xe],navy:[0,0,128],white:[xe,xe,xe],olive:[128,128,0],yellow:[xe,xe,0],orange:[xe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xe,0,0],pink:[xe,192,203],cyan:[0,xe,xe],transparent:[xe,xe,xe,0]},Lc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*xe+.5|0},um=function(t,e,n){var i=t?nr(t)?[t>>16,t>>8&xe,t&xe]:0:Ao.black,s,o,a,l,c,u,h,f,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ao[t])i=Ao[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&xe,i&xe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&xe,t&xe]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Bu),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Lc(l+1/3,s,o),i[1]=Lc(l,s,o),i[2]=Lc(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(kp),n&&i.length<4&&(i[3]=1),i}else i=t.match(Bu)||Ao.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/xe,o=i[1]/xe,a=i[2]/xe,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},hm=function(t){var e=[],n=[],i=-1;return t.split(yr).forEach(function(s){var o=s.match(Us)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},md=function(t,e,n){var i="",s=(t+i).match(yr),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=um(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=hm(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(yr,"1").split(Us),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(yr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},yr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ao)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),XM=/hsl[a]?\(/,fm=function(t){var e=t.join(" "),n;if(yr.lastIndex=0,yr.test(e))return n=XM.test(e),t[1]=md(t[1],n),t[0]=md(t[0],n,hm(t[1])),!0},oa,qn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function _(p){var m=r()-i,M=p===!0,x,v,A,b;if((m>t||m<0)&&(n+=m-e),i+=m,A=i-n,x=A-o,(x>0||M)&&(b=++h.frame,f=A-h.time*1e3,h.time=A=A/1e3,o+=x+(x>=s?4:s-x),v=1),M||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](A,f,b,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Gp&&(!zu&&Lh()&&(Ei=zu=window,Ih=Ei.document||{},jn.gsap=On,(Ei.gsapVersions||(Ei.gsapVersions=[])).push(On.version),Wp(wl||Ei.GreenSockGlobals||!Ei.gsap&&Ei||{}),lm.forEach(cm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},oa=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),oa=0,c=ra},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,m,M){var x=m?function(v,A,b,E){p(v,A,b,E),h.remove(x)}:p;return h.remove(p),a[M?"unshift":"push"](x),oo(),x},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h}(),oo=function(){return!oa&&qn.wake()},ae={},YM=/^[\d.\-M][\d.\-,\s]/,qM=/["']/g,ZM=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(qM,"").trim():+c,i=l.substr(a+1).trim();return e},$M=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},JM=function(t){var e=(t+"").split("("),n=ae[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[ZM(e[1])]:$M(t).split(",").map($p)):ae._CE&&YM.test(t)?ae._CE("",t):n},dm=function(t){return function(e){return 1-t(1-e)}},pm=function r(t,e){for(var n=t._first,i;n;)n instanceof Tn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Jr=function(t,e){return t&&(Ie(t)?t:ae[t]||JM(t))||e},cs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return In(t,function(a){ae[a]=jn[a]=s,ae[o=a.toLowerCase()]=n;for(var l in s)ae[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ae[a+"."+l]=s[l]}),s},mm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ic=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Fu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*TM((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:mm(a);return s=Fu/s,l.config=function(c,u){return r(t,c,u)},l},Uc=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:mm(n);return i.config=function(s){return r(t,s)},i};In("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;cs(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ae.Linear.easeNone=ae.none=ae.Linear.easeIn;cs("Elastic",Ic("in"),Ic("out"),Ic());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};cs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);cs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});cs("Circ",function(r){return-(Bp(1-r*r)-1)});cs("Sine",function(r){return r===1?1:-EM(r*SM)+1});cs("Back",Uc("in"),Uc("out"),Uc());ae.SteppedEase=ae.steps=jn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-fn;return function(a){return((i*ma(0,o,a)|0)+s)*n}}};no.ease=ae["quad.out"];In("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Oh+=r+","+r+"Params,"});var _m=function(t,e){this.id=MM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:qp,this.set=e?e.getSetter:Hh},aa=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,so(this,+e.duration,1,1),this.data=e.data,be&&(this._ctx=be,be.data.push(this)),oa||qn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,so(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(oo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Yl(this,n),!s._dp||s.parent||jp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ai(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===fn||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Zp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+fd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+fd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ro(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Rl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(ma(-Math.abs(this._delay),this._tDur,s),i!==!1),Xl(this),DM(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(oo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==fn&&(this._tTime-=fn)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ai(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ln(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Rl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=AM);var i=sn;return sn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),sn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,dd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,dd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(ri(this,n),Ln(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ln(i)),this._dur||(this._zTime=-1e-8),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-fn)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=Ie(n)?n:Jp,a=function(){var c=i.then;i.then=null,Ie(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){wo(this)},r}();Qn(aa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Tn=function(r){Fp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ln(n.sortChildren),Ae&&Ai(n.parent||Ae,Xi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Qp(Xi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Fo(0,arguments,this),this},e.from=function(i,s,o){return Fo(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Fo(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Oo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ke(i,s,ri(this,o),1),this},e.call=function(i,s,o){return Ai(this,ke.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new ke(i,o,ri(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Oo(o).immediateRender=Ln(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Oo(a).immediateRender=Ln(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:He(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,p,m,M,x,v,A,b,E;if(this!==Ae&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,x=this._ts,m=!x,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=He(u%p),u===l?(_=this._repeat,f=c):(A=He(u/p),_=~~A,_&&_===A&&(f=c,_--),f>c&&(f=c)),A=ro(this._tTime,p),!a&&this._tTime&&A!==_&&this._tTime-A*p-this._dur<=0&&(A=_),b&&_&1&&(f=c-f,E=1),_!==A&&!this._lock){var P=b&&A&1,S=P===(b&&_&1);if(_<A&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(E?0:He(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&$n(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;pm(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=NM(this,He(a),He(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!_&&($n(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){M=0,g&&(u+=this._zTime=-1e-8);break}}d=g}else{d=this._last;for(var y=i<0?i:f;d;){if(g=d._prev,(d._act||y<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,s,o||sn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!m){M=0,g&&(u+=this._zTime=y?-1e-8:fn);break}}d=g}}if(M&&!s&&(this.pause(),M.render(f>=a?0:-1e-8)._zTime=f>=a?1:-1,this._ts))return this._start=v,Xl(this),this.render(i,s,o);this._onUpdate&&!s&&$n(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Er(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&($n(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(nr(s)||(s=ri(this,s,i)),!(i instanceof aa)){if(dn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(tn(i))return this.addLabel(i,s);if(Ie(i))i=ke.delayedCall(0,i);else return this}return this!==i?Ai(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ke?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return tn(i)?this.removeLabel(i):Ie(i)?this.killTweensOf(i):(i.parent===this&&Wl(this,i),i===this._recent&&(this._recent=this._last),$r(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=He(qn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=ri(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=ke.delayedCall(0,s||ra,o);return a.data="isPause",this._hasPause=1,Ai(this,a,ri(this,i))},e.removePause=function(i){var s=this._first;for(i=ri(this,i);s;)s._start===i&&s.data==="isPause"&&Er(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)dr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=ci(i),l=this._first,c=nr(s),u;l;)l instanceof ke?CM(l._targets,a)&&(c?(!dr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=ri(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=ke.to(o,Qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||fn,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&so(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Qn({startAt:{time:ri(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),pd(this,ri(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),pd(this,ri(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+fn)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return $r(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),$r(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Li,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ai(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;so(o,o===Ae&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ae._ts&&(Zp(Ae,Rl(i,Ae)),Yp=qn.frame),qn.frame>=ud){ud+=Kn.autoSleep||120;var s=Ae._first;if((!s||!s._ts)&&Kn.autoSleep&&qn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||qn.sleep()}}},t}(aa);Qn(Tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var KM=function(t,e,n,i,s,o,a){var l=new Un(this._pt,t,e,0,1,Mm,null,s),c=0,u=0,h,f,d,g,_,p,m,M;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=sa(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),f=n.match(Pc)||[];h=Pc.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?Gs(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=Pc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Hp.test(i)||m)&&(l.e=0),this._pt=l,l},Bh=function(t,e,n,i,s,o,a,l,c,u){Ie(i)&&(i=i(s||0,t,o));var h=t[e],f=n!=="get"?n:Ie(h)?c?t[e.indexOf("set")||!Ie(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=Ie(h)?c?nE:ym:kh,g;if(tn(i)&&(~i.indexOf("random(")&&(i=sa(i)),i.charAt(1)==="="&&(g=Gs(f,i)+(un(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Yu)return!isNaN(f*i)&&i!==""?(g=new Un(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?rE:Sm,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!h&&!(e in t)&&Uh(e,i),KM.call(this,t,e,f,i,d,l||Kn.stringFilter,c))},jM=function(t,e,n,i,s){if(Ie(t)&&(t=Bo(t,s,e,n,i)),!Oi(t)||t.style&&t.nodeType||dn(t)||zp(t))return tn(t)?Bo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Bo(t[a],s,e,n,i);return o},gm=function(t,e,n,i,s,o){var a,l,c,u;if(Wn[t]&&(a=new Wn[t]).init(s,a.rawVars?e[t]:jM(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Un(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Ns))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},dr,Yu,zh=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,M=m&&m.data==="nested"?m.vars.targets:p,x=t._overwrite==="auto"&&!Ph,v=t.timeline,A,b,E,P,S,y,I,F,G,W,j,X,J;if(v&&(!f||!s)&&(s="none"),t._ease=Jr(s,no.ease),t._yEase=h?dm(Jr(h===!0?s:h,no.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!v&&!!i.runBackwards,!v||f&&!i.stagger){if(F=p[0]?Zr(p[0]).harness:0,X=F&&i[F.prop],A=Cl(i,Nh),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?hl:wM),_._lazy=0),o){if(Er(t._startAt=ke.set(p,Qn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Ln(l),startAt:null,delay:0,onUpdate:c&&function(){return $n(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(sn||!a&&!d)&&t._startAt.revert(hl),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(a=!1),E=Qn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Ln(l),immediateRender:a,stagger:0,parent:m},A),X&&(E[F.prop]=X),Er(t._startAt=ke.set(p,E)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(sn?t._startAt.revert(hl):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,fn,fn);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Ln(l)||l&&!g,b=0;b<p.length;b++){if(S=p[b],I=S._gsap||Fh(p)[b]._gsap,t._ptLookup[b]=W={},ku[I.id]&&xr.length&&Al(),j=M===p?b:M.indexOf(S),F&&(G=new F).init(S,X||A,t,j,M)!==!1&&(t._pt=P=new Un(t._pt,S,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(H){W[H]=P}),G.priority&&(y=1)),!F||X)for(E in A)Wn[E]&&(G=gm(E,A,t,j,S,M))?G.priority&&(y=1):W[E]=P=Bh.call(t,S,E,"get",A[E],j,M,0,i.stringFilter);t._op&&t._op[b]&&t.kill(S,t._op[b]),x&&t._pt&&(dr=t,Ae.killTweensOf(S,W,t.globalTime(e)),J=!t.parent,dr=0),t._pt&&l&&(ku[I.id]=1)}y&&Em(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!J,f&&e<=0&&v.render(Li,!0,!0)},QM=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(u=f[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Yu=1,t.vars[e]="+=0",zh(t,a),Yu=0,l?ia(e+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Ne(n)+un(h.e)),h.b&&(h.b=u.s+un(h.b))},tE=function(t,e){var n=t[0]?Zr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=io({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},eE=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(dn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Bo=function(t,e,n,i,s){return Ie(t)?t.call(e,n,i,s):tn(t)&&~t.indexOf("random(")?sa(t):t},vm=Oh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",xm={};In(vm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return xm[r]=1});var ke=function(r){Fp(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Oo(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,M=i.parent||Ae,x=(dn(n)||zp(n)?nr(n[0]):"length"in i)?[n]:ci(n),v,A,b,E,P,S,y,I;if(a._targets=x.length?Fh(x):ia("GSAP target "+n+" not found. https://gsap.com",!Kn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Ya(c)||Ya(u)){if(i=a.vars,v=a.timeline=new Tn({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:x}),v.kill(),v.parent=v._dp=Xi(a),v._start=0,f||Ya(c)||Ya(u)){if(E=x.length,y=f&&im(f),Oi(f))for(P in f)~vm.indexOf(P)&&(I||(I={}),I[P]=f[P]);for(A=0;A<E;A++)b=Cl(i,xm),b.stagger=0,m&&(b.yoyoEase=m),I&&io(b,I),S=x[A],b.duration=+Bo(c,Xi(a),A,S,x),b.delay=(+Bo(u,Xi(a),A,S,x)||0)-a._delay,!f&&E===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),v.to(S,b,y?y(A,S,x):0),v._ease=ae.none;v.duration()?c=u=0:a.timeline=0}else if(g){Oo(Qn(v.vars.defaults,{ease:"none"})),v._ease=Jr(g.ease||i.ease||"none");var F=0,G,W,j;if(dn(g))g.forEach(function(X){return v.to(x,X,">")}),v.duration();else{b={};for(P in g)P==="ease"||P==="easeEach"||eE(P,g[P],b,g.easeEach);for(P in b)for(G=b[P].sort(function(X,J){return X.t-J.t}),F=0,A=0;A<G.length;A++)W=G[A],j={ease:W.e,duration:(W.t-(A?G[A-1].t:0))/100*c},j[P]=W.v,v.to(x,j,F),F+=j.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!Ph&&(dr=Xi(a),Ae.killTweensOf(x),dr=0),Ai(M,Xi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===He(M._time)&&Ln(h)&&LM(Xi(a))&&M.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-u)||0)),p&&Qp(Xi(a),p),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-fn&&!u?l:i<fn?0:i,f,d,g,_,p,m,M,x,v;if(!c)UM(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=He(h%_),h===l?(g=this._repeat,f=c):(p=He(h/_),g=~~p,g&&g===p?(f=c,g--):f>c&&(f=c)),m=this._yoyo&&g&1,m&&(v=this._yEase,f=c-f),p=ro(this._tTime,_),f===a&&!o&&this._initted&&g===p)return this._tTime=h,this;g!==p&&(x&&this._yEase&&pm(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(He(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(tm(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(v||this._ease)(f/c),this._from&&(this.ratio=M=1-M),f&&!a&&!s&&!g&&($n(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Hu(this,i,s,o),$n(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&$n(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Hu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Er(this,1),!s&&!(u&&!a)&&(h||a||m)&&($n(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){oa||qn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||zh(this,c),u=this._ease(c/this._dur),QM(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Yl(this,0),this.parent||Kp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?wo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!sn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,dr&&dr.vars.overwrite!==!0)._first||wo(this),this.parent&&o!==this.timeline.totalDuration()&&so(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ci(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,p,m;if((!s||s==="all")&&PM(a,l))return s==="all"&&(this._pt=0),wo(this);for(h=this._op=this._op||[],s!=="all"&&(tn(s)&&(_={},In(s,function(M){return _[M]=1}),s=_),s=tE(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(h[m]=s,g=f,d={}):(d=h[m]=h[m]||{},g=s);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Wl(this,p,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&wo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Fo(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Fo(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Ae.killTweensOf(i,s,o)},t}(aa);Qn(ke.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});In("staggerTo,staggerFrom,staggerFromTo",function(r){ke[r]=function(){var t=new Tn,e=Gu.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var kh=function(t,e,n){return t[e]=n},ym=function(t,e,n){return t[e](n)},nE=function(t,e,n,i){return t[e](i.fp,n)},iE=function(t,e,n){return t.setAttribute(e,n)},Hh=function(t,e){return Ie(t[e])?ym:Dh(t[e])&&t.setAttribute?iE:kh},Sm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},rE=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Mm=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Vh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},sE=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},oE=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Wl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},aE=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Em=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Un=function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Sm,this.d=l||this,this.set=c||kh,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=aE,this.m=n,this.mt=s,this.tween=i},r}();In(Oh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Nh[r]=1});jn.TweenMax=jn.TweenLite=ke;jn.TimelineLite=jn.TimelineMax=Tn;Ae=new Tn({sortChildren:!1,defaults:no,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Kn.stringFilter=fm;var Kr=[],dl={},lE=[],_d=0,cE=0,Nc=function(t){return(dl[t]||lE).map(function(e){return e()})},qu=function(){var t=Date.now(),e=[];t-_d>2&&(Nc("matchMediaInit"),Kr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ei.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Nc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),_d=t,Nc("matchMedia"))},Tm=function(){function r(e,n){this.selector=n&&Wu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=cE++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ie(n)&&(s=i,i=n,n=Ie);var o=this,a=function(){var c=be,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Wu(s)),be=o,h=i.apply(o,arguments),Ie(h)&&o._r.push(h),be=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ie?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=be;be=null,n(this),be=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ke&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ke)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Kr.length;o--;)Kr[o].id===this.id&&Kr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),uE=function(){function r(e){this.contexts=[],this.scope=e,be&&be.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Oi(n)||(n={matches:n});var o=new Tm(0,s||this.scope),a=o.conditions={},l,c,u;be&&!o.selector&&(o.selector=be.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Ei.matchMedia(n[c]),l&&(Kr.indexOf(o)<0&&Kr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(qu):l.addEventListener("change",qu)));return u&&i(o,function(h){return o.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Pl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return cm(i)})},timeline:function(t){return new Tn(t)},getTweensOf:function(t,e){return Ae.getTweensOf(t,e)},getProperty:function(t,e,n,i){tn(t)&&(t=ci(t)[0]);var s=Zr(t||{}).get,o=n?Jp:$p;return n==="native"&&(n=""),t&&(e?o((Wn[e]&&Wn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Wn[a]&&Wn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=ci(t),t.length>1){var i=t.map(function(u){return On.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var o=Wn[e],a=Zr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;Ns._pt=0,h.init(t,n?u+n:u,Ns,0,[t]),h.render(1,h),Ns._pt&&Vh(1,Ns)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=On.to(t,Qn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Ae.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Jr(t.ease,no.ease)),hd(no,t||{})},config:function(t){return hd(Kn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Wn[a]&&!jn[a]&&ia(e+" effect requires "+a+" plugin.")}),Dc[e]=function(a,l,c){return n(ci(a),Qn(l||{},s),c)},o&&(Tn.prototype[e]=function(a,l,c){return this.add(Dc[e](a,Oi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ae[t]=Jr(e)},parseEase:function(t,e){return arguments.length?Jr(t,e):ae},getById:function(t){return Ae.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Tn(t),i,s;for(n.smoothChildTiming=Ln(t.smoothChildTiming),Ae.remove(n),n._dp=0,n._time=n._tTime=Ae._time,i=Ae._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ke&&i.vars.onComplete===i._targets[0]))&&Ai(n,i,i._start-i._delay),i=s;return Ai(Ae,n,0),n},context:function(t,e){return t?new Tm(t,e):be},matchMedia:function(t){return new uE(t)},matchMediaRefresh:function(){return Kr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||qu()},addEventListener:function(t,e){var n=dl[t]||(dl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=dl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:VM,wrapYoyo:GM,distribute:im,random:sm,snap:rm,normalize:HM,getUnit:un,clamp:FM,splitColor:um,toArray:ci,selector:Wu,mapRange:am,pipe:zM,unitize:kM,interpolate:WM,shuffle:nm},install:Wp,effects:Dc,ticker:qn,updateRoot:Tn.updateRoot,plugins:Wn,globalTimeline:Ae,core:{PropTween:Un,globals:Xp,Tween:ke,Timeline:Tn,Animation:aa,getCache:Zr,_removeLinkedListItem:Wl,reverting:function(){return sn},context:function(t){return t&&be&&(be.data.push(t),t._ctx=be),be},suppressOverwrites:function(t){return Ph=t}}};In("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Pl[r]=ke[r]});qn.add(Tn.updateRoot);Ns=Pl.to({},{duration:0});var hE=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},fE=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=hE(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Oc=function(t,e){return{name:t,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(tn(s)&&(l={},In(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}fE(a,s)}}}},On=Pl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)sn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Oc("roundProps",Xu),Oc("modifiers"),Oc("snap",rm))||Pl;ke.version=Tn.version=On.version="3.12.7";Gp=1;Lh()&&oo();ae.Power0;ae.Power1;ae.Power2;ae.Power3;ae.Power4;ae.Linear;ae.Quad;ae.Cubic;ae.Quart;ae.Quint;ae.Strong;ae.Elastic;ae.Back;ae.SteppedEase;ae.Bounce;ae.Sine;ae.Expo;ae.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var gd,pr,Ws,Gh,Yr,vd,Wh,dE=function(){return typeof window<"u"},ir={},zr=180/Math.PI,Xs=Math.PI/180,bs=Math.atan2,xd=1e8,Xh=/([A-Z])/g,pE=/(left|right|width|margin|padding|x)/i,mE=/[\s,\(]\S/,Ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Zu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},_E=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},gE=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},vE=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},bm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},wm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},xE=function(t,e,n){return t.style[e]=n},yE=function(t,e,n){return t.style.setProperty(e,n)},SE=function(t,e,n){return t._gsap[e]=n},ME=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},EE=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},TE=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Re="transform",Nn=Re+"Origin",bE=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in ir&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ri[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Yi(i,a)}):this.tfm[t]=o.x?o[t]:Yi(i,t),t===Nn&&(this.tfm.zOrigin=o.zOrigin);else return Ri.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Re)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Nn,e,"")),t=Re}(s||e)&&this.props.push(t,e,s[t])},Am=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},wE=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Xh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Wh(),(!s||!s.isStart)&&!n[Re]&&(Am(n),i.zOrigin&&n[Nn]&&(n[Nn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Cm=function(t,e){var n={target:t,props:[],revert:wE,save:bE};return t._gsap||On.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Rm,$u=function(t,e){var n=pr.createElementNS?pr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):pr.createElement(t);return n&&n.style?n:pr.createElement(t)},Ii=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Xh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,ao(e)||e,1)||""},yd="O,Moz,ms,Ms,Webkit".split(","),ao=function(t,e,n){var i=e||Yr,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(yd[o]+t in s););return o<0?null:(o===3?"ms":o>=0?yd[o]:"")+t},Ju=function(){dE()&&window.document&&(gd=window,pr=gd.document,Ws=pr.documentElement,Yr=$u("div")||{style:{}},$u("div"),Re=ao(Re),Nn=Re+"Origin",Yr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Rm=!!ao("perspective"),Wh=On.core.reverting,Gh=1)},Sd=function(t){var e=t.ownerSVGElement,n=$u("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ws.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ws.removeChild(n),s},Md=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Pm=function(t){var e,n;try{e=t.getBBox()}catch{e=Sd(t),n=1}return e&&(e.width||e.height)||n||(e=Sd(t)),e&&!e.width&&!e.x&&!e.y?{x:+Md(t,["x","cx","x1"])||0,y:+Md(t,["y","cy","y1"])||0,width:0,height:0}:e},Dm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Pm(t))},rs=function(t,e){if(e){var n=t.style,i;e in ir&&e!==Nn&&(e=Re),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Xh,"-$1").toLowerCase())):n.removeAttribute(e)}},mr=function(t,e,n,i,s,o){var a=new Un(t._pt,e,n,0,1,o?wm:bm);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Ed={deg:1,rad:1,turn:1},AE={grid:1,flex:1},Tr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Yr.style,l=pE.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,p,m;if(i===o||!s||Ed[i]||Ed[o])return s;if(o!=="px"&&!f&&(s=r(t,e,n,"px")),m=t.getCTM&&Dm(t),(d||o==="%")&&(ir[e]||~e.indexOf("adius")))return g=m?t.getBBox()[l?"width":"height"]:t[u],Ne(d?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===pr||!_.appendChild)&&(_=pr.body),p=_._gsap,p&&d&&p.width&&l&&p.time===qn.time&&!p.uncache)return Ne(s/p.width*h);if(d&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=h+i,g=t[u],M?t.style[e]=M:rs(t,e)}else(d||o==="%")&&!AE[Ii(_,"display")]&&(a.position=Ii(t,"position")),_===t&&(a.position="static"),_.appendChild(Yr),g=Yr[u],_.removeChild(Yr),a.position="absolute";return l&&d&&(p=Zr(_),p.time=qn.time,p.width=_[u]),Ne(f?g*s/h:g&&s?h/g*s:0)},Yi=function(t,e,n,i){var s;return Gh||Ju(),e in Ri&&e!=="transform"&&(e=Ri[e],~e.indexOf(",")&&(e=e.split(",")[0])),ir[e]&&e!=="transform"?(s=ca(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ll(Ii(t,Nn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Dl[e]&&Dl[e](t,e,n)||Ii(t,e)||qp(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Tr(t,e,s,n)+n:s},CE=function(t,e,n,i){if(!n||n==="none"){var s=ao(e,t,1),o=s&&Ii(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Ii(t,"borderTopColor"))}var a=new Un(this._pt,t.style,e,0,1,Mm),l=0,c=0,u,h,f,d,g,_,p,m,M,x,v,A;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=t.style[e],t.style[e]=i,i=Ii(t,e)||i,_?t.style[e]=_:rs(t,e)),u=[n,i],fm(u),n=u[0],i=u[1],f=n.match(Us)||[],A=i.match(Us)||[],A.length){for(;h=Us.exec(i);)p=h[0],M=i.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),p.charAt(1)==="="&&(p=Gs(d,p)+v),m=parseFloat(p),x=p.substr((m+"").length),l=Us.lastIndex-x.length,x||(x=x||Kn.units[e]||v,l===i.length&&(i+=x,a.e+=x)),v!==x&&(d=Tr(t,e,_,x)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:m-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?wm:bm;return Hp.test(i)&&(a.e=0),this._pt=a,a},Td={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},RE=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Td[n]||n,e[1]=Td[i]||i,e.join(" ")},PE=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ir[a]&&(l=1,a=a==="transformOrigin"?Nn:Re),rs(n,a);l&&(rs(n,Re),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ca(n,1),o.uncache=1,Am(i)))}},Dl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Un(t._pt,e,n,0,0,PE);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},la=[1,0,0,1,0,0],Lm={},Im=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},bd=function(t){var e=Ii(t,Re);return Im(e)?la:e.substr(7).match(kp).map(Ne)},Yh=function(t,e){var n=t._gsap||Zr(t),i=t.style,s=bd(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?la:s):(s===la&&!t.offsetParent&&t!==Ws&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Ws.appendChild(t)),s=bd(t),l?i.display=l:rs(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Ws.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ku=function(t,e,n,i,s,o){var a=t._gsap,l=s||Yh(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],M=l[5],x=e.split(" "),v=parseFloat(x[0])||0,A=parseFloat(x[1])||0,b,E,P,S;n?l!==la&&(E=d*p-g*_)&&(P=v*(p/E)+A*(-_/E)+(_*M-p*m)/E,S=v*(-g/E)+A*(d/E)-(d*M-g*m)/E,v=P,A=S):(b=Pm(t),v=b.x+(~x[0].indexOf("%")?v/100*b.width:v),A=b.y+(~(x[1]||x[0]).indexOf("%")?A/100*b.height:A)),i||i!==!1&&a.smooth?(m=v-c,M=A-u,a.xOffset=h+(m*d+M*_)-m,a.yOffset=f+(m*g+M*p)-M):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=A,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Nn]="0px 0px",o&&(mr(o,a,"xOrigin",c,v),mr(o,a,"yOrigin",u,A),mr(o,a,"xOffset",h,a.xOffset),mr(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+A)},ca=function(t,e){var n=t._gsap||new _m(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Ii(t,Nn)||"0",u,h,f,d,g,_,p,m,M,x,v,A,b,E,P,S,y,I,F,G,W,j,X,J,H,ft,B,gt,It,$t,O,U;return u=h=f=_=p=m=M=x=v=0,d=g=1,n.svg=!!(t.getCTM&&Dm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Re]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Re]!=="none"?l[Re]:"")),i.scale=i.rotate=i.translate="none"),E=Yh(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",J=""):J=!e&&t.getAttribute("data-svg-origin"),Ku(t,J||c,!!J||n.originIsAbsolute,n.smooth!==!1,E)),A=n.xOrigin||0,b=n.yOrigin||0,E!==la&&(I=E[0],F=E[1],G=E[2],W=E[3],u=j=E[4],h=X=E[5],E.length===6?(d=Math.sqrt(I*I+F*F),g=Math.sqrt(W*W+G*G),_=I||F?bs(F,I)*zr:0,M=G||W?bs(G,W)*zr+_:0,M&&(g*=Math.abs(Math.cos(M*Xs))),n.svg&&(u-=A-(A*I+b*G),h-=b-(A*F+b*W))):(U=E[6],$t=E[7],B=E[8],gt=E[9],It=E[10],O=E[11],u=E[12],h=E[13],f=E[14],P=bs(U,It),p=P*zr,P&&(S=Math.cos(-P),y=Math.sin(-P),J=j*S+B*y,H=X*S+gt*y,ft=U*S+It*y,B=j*-y+B*S,gt=X*-y+gt*S,It=U*-y+It*S,O=$t*-y+O*S,j=J,X=H,U=ft),P=bs(-G,It),m=P*zr,P&&(S=Math.cos(-P),y=Math.sin(-P),J=I*S-B*y,H=F*S-gt*y,ft=G*S-It*y,O=W*y+O*S,I=J,F=H,G=ft),P=bs(F,I),_=P*zr,P&&(S=Math.cos(P),y=Math.sin(P),J=I*S+F*y,H=j*S+X*y,F=F*S-I*y,X=X*S-j*y,I=J,j=H),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=Ne(Math.sqrt(I*I+F*F+G*G)),g=Ne(Math.sqrt(X*X+U*U)),P=bs(j,X),M=Math.abs(P)>2e-4?P*zr:0,v=O?1/(O<0?-O:O):0),n.svg&&(J=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Im(Ii(t,Re)),J&&t.setAttribute("transform",J))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Ne(d),n.scaleY=Ne(g),n.rotation=Ne(_)+a,n.rotationX=Ne(p)+a,n.rotationY=Ne(m)+a,n.skewX=M+a,n.skewY=x+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Nn]=Ll(c)),n.xOffset=n.yOffset=0,n.force3D=Kn.force3D,n.renderTransform=n.svg?LE:Rm?Um:DE,n.uncache=0,n},Ll=function(t){return(t=t.split(" "))[0]+" "+t[1]},Fc=function(t,e,n){var i=un(e);return Ne(parseFloat(e)+parseFloat(Tr(t,"x",n+"px",i)))+i},DE=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Um(t,e)},Ur="0deg",Mo="0px",Nr=") ",Um=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,M=n.target,x=n.zOrigin,v="",A=m==="auto"&&t&&t!==1||m===!0;if(x&&(h!==Ur||u!==Ur)){var b=parseFloat(u)*Xs,E=Math.sin(b),P=Math.cos(b),S;b=parseFloat(h)*Xs,S=Math.cos(b),o=Fc(M,o,E*S*-x),a=Fc(M,a,-Math.sin(b)*-x),l=Fc(M,l,P*S*-x+x)}p!==Mo&&(v+="perspective("+p+Nr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(A||o!==Mo||a!==Mo||l!==Mo)&&(v+=l!==Mo||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Nr),c!==Ur&&(v+="rotate("+c+Nr),u!==Ur&&(v+="rotateY("+u+Nr),h!==Ur&&(v+="rotateX("+h+Nr),(f!==Ur||d!==Ur)&&(v+="skew("+f+", "+d+Nr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Nr),M.style[Re]=v||"translate(0, 0)"},LE=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,M=n.forceCSS,x=parseFloat(o),v=parseFloat(a),A,b,E,P,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Xs,c*=Xs,A=Math.cos(l)*h,b=Math.sin(l)*h,E=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=Xs,S=Math.tan(c-u),S=Math.sqrt(1+S*S),E*=S,P*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),A*=S,b*=S)),A=Ne(A),b=Ne(b),E=Ne(E),P=Ne(P)):(A=h,P=f,b=E=0),(x&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(x=Tr(d,"x",o,"px"),v=Tr(d,"y",a,"px")),(g||_||p||m)&&(x=Ne(x+g-(g*A+_*E)+p),v=Ne(v+_-(g*b+_*P)+m)),(i||s)&&(S=d.getBBox(),x=Ne(x+i/100*S.width),v=Ne(v+s/100*S.height)),S="matrix("+A+","+b+","+E+","+P+","+x+","+v+")",d.setAttribute("transform",S),M&&(d.style[Re]=S)},IE=function(t,e,n,i,s){var o=360,a=tn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?zr:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),h==="cw"&&c<0?c=(c+o*xd)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*xd)%o-~~(c/o)*o)),t._pt=f=new Un(t._pt,e,n,i,c,_E),f.e=u,f.u="deg",t._props.push(n),f},wd=function(t,e){for(var n in e)t[n]=e[n];return t},UE=function(t,e,n){var i=wd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Re]=e,a=ca(n,1),rs(n,Re),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Re],o[Re]=e,a=ca(n,1),o[Re]=c);for(l in ir)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=un(c),g=un(u),h=d!==g?Tr(n,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new Un(t._pt,a,l,h,f-h,Zu),t._pt.u=g||0,t._props.push(l));wd(a,i)};In("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Dl[t>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return Yi(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var Nm={name:"css",register:Ju,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,f,d,g,_,p,m,M,x,v,A,b,E,P;Gh||Ju(),this.styles=this.styles||Cm(t),P=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Wn[_]&&gm(_,e,n,i,t,s)))){if(d=typeof u,g=Dl[_],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=sa(u)),g)g(this,t,_,u,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",yr.lastIndex=0,yr.test(c)||(p=un(c),m=un(u)),m?p!==m&&(c=Tr(t,_,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),P.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],tn(c)&&~c.indexOf("random(")&&(c=sa(c)),un(c+"")||c==="auto"||(c+=Kn.units[_]||un(Yi(t,_))||""),(c+"").charAt(1)==="="&&(c=Yi(t,_))):c=Yi(t,_),f=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),_ in Ri&&(_==="autoAlpha"&&(f===1&&Yi(t,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,a.visibility),mr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Ri[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in ir,x){if(this.styles.save(_),v||(A=t._gsap,A.renderTransform&&!e.parseTransform||ca(t,e.parseTransform),b=e.smoothOrigin!==!1&&A.smooth,v=this._pt=new Un(this._pt,a,Re,0,1,A.renderTransform,A,0,-1),v.dep=1),_==="scale")this._pt=new Un(this._pt,A,"scaleY",A.scaleY,(M?Gs(A.scaleY,M+h):h)-A.scaleY||0,Zu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(Nn,0,a[Nn]),u=RE(u),A.svg?Ku(t,u,0,b,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&mr(this,A,"zOrigin",A.zOrigin,m),mr(this,a,_,Ll(c),Ll(u)));continue}else if(_==="svgOrigin"){Ku(t,u,1,b,0,this);continue}else if(_ in Lm){IE(this,A,_,f,M?Gs(f,M+u):u);continue}else if(_==="smoothOrigin"){mr(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){UE(this,u,t);continue}}else _ in a||(_=ao(_)||_);if(x||(h||h===0)&&(f||f===0)&&!mE.test(u)&&_ in a)p=(c+"").substr((f+"").length),h||(h=0),m=un(u)||(_ in Kn.units?Kn.units[_]:p),p!==m&&(f=Tr(t,_,c,m)),this._pt=new Un(this._pt,x?A:a,_,f,(M?Gs(f,M+h):h)-f,!x&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?vE:Zu),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=gE);else if(_ in a)CE.call(this,t,_,c,M?M+u:u);else if(_ in t)this.add(t,_,c||t[_],M?M+u:u,i,s);else if(_!=="parseTransform"){Uh(_,u);continue}x||(_ in a?P.push(_,0,a[_]):typeof t[_]=="function"?P.push(_,2,t[_]()):P.push(_,1,c||t[_])),o.push(_)}}E&&Em(this)},render:function(t,e){if(e.tween._time||!Wh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Yi,aliases:Ri,getSetter:function(t,e,n){var i=Ri[e];return i&&i.indexOf(",")<0&&(e=i),e in ir&&e!==Nn&&(t._gsap.x||Yi(t,"x"))?n&&vd===n?e==="scale"?ME:SE:(vd=n||{})&&(e==="scale"?EE:TE):t.style&&!Dh(t.style[e])?xE:~e.indexOf("-")?yE:Hh(t,e)},core:{_removeProperty:rs,_getMatrix:Yh}};On.utils.checkPrefix=ao;On.core.getStyleSaver=Cm;(function(r,t,e,n){var i=In(r+","+t+","+e,function(s){ir[s]=1});In(t,function(s){Kn.units[s]="deg",Lm[s]=1}),Ri[i[13]]=r+","+t,In(n,function(s){var o=s.split(":");Ri[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");In("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Kn.units[r]="px"});On.registerPlugin(Nm);var Te=On.registerPlugin(Nm)||On;Te.core.Tween;const NE={class:"logo-3d-container"},OE=lh({__name:"LogoMark",setup(r){const t=$o(null),e=$o(null);let n,i,s,o=[],a,l=null,c=null,u=null;const h=()=>{l==null||l.kill(),c==null||c.kill(),u==null||u.kill(),l=Te.to(o[0].meshes.red.rotation,{y:Math.PI*2,duration:4,repeat:-1,ease:"none"}),c=Te.to(o[1].meshes.green.rotation,{y:Math.PI*2,duration:5,repeat:-1,ease:"none"}),u=Te.to(o[2].meshes.blue.rotation,{y:Math.PI*2,duration:3,repeat:-1,ease:"none"})},f=()=>{l==null||l.kill(),c==null||c.kill(),u==null||u.kill(),Te.to(o[0].meshes.red.rotation,{y:0,duration:.5,repeat:0,ease:"none",onComplete:()=>l=null}),Te.to(o[1].meshes.green.rotation,{y:0,duration:.5,repeat:0,ease:"none",onComplete:()=>c=null}),Te.to(o[2].meshes.blue.rotation,{y:0,duration:.5,repeat:0,ease:"none",onComplete:()=>u=null})};return ch(()=>{if(!t.value)return;n=new yh,i=new Xn(10,1,.1,1e3),s=new Rh({canvas:t.value,antialias:!0}),s.setClearColor(0),s.setPixelRatio(window.devicePixelRatio);const d=new U0(16777215,1);d.position.set(10,20,30),n.add(d);const g=new N0(16777215,.35);n.add(g);const _=new Jn(5,8,5),p=new Jn(5,5,5),m=new Jn(6,5,5);a=new vi,o=[new Yt(16711680),new Yt(65280),new Yt(255)].map((b,E)=>{const P=new w0({color:b,specular:5592405,shininess:30,transparent:!0,blending:bi,side:ai,opacity:0}),S=new Ze(_,P),y=new Ze(p,P),I=new Ze(m,P);switch(E){case 0:S.position.set(0,17.1,0),S.rotation.set(En.degToRad(0),En.degToRad(0),0),a.add(S);break;case 1:y.position.set(-10,0,0),y.rotation.set(En.degToRad(0),En.degToRad(0),0),a.add(y);break;case 2:I.position.set(15.75,0,0),I.rotation.set(En.degToRad(0),En.degToRad(0),0),a.add(I);break}return{meshes:{red:S,green:y,blue:I},color:b}}),n.add(a),i.position.set(60,-90,90),i.lookAt(2.5,2.5,0);const x=En.degToRad(0);i.rotation.z=x;const v=()=>{if(t.value){const P=s.getPixelRatio();s.setSize(120*P,78*P,!1),i.aspect=120/78,i.updateProjectionMatrix(),t.value.style.width="120px",t.value.style.height="78px",i.updateProjectionMatrix()}};window.addEventListener("resize",v),v(),Te.from(e.value,{y:10,opacity:0,duration:5,ease:"power2.out"}),Te.to(o[0].meshes.red.position,{y:7.1,duration:1.5,ease:"power2.out"}),Te.to(o[0].meshes.red.rotation,{x:Math.PI,duration:1.5,ease:"power2.out"}),Te.to(o[0].meshes.red.material,{opacity:1,duration:1.5,ease:"power2.out"}),Te.to(o[1].meshes.green.position,{x:0,duration:1.5,ease:"power2.out"}),Te.to(o[1].meshes.green.rotation,{x:Math.PI,duration:1.5,ease:"power2.out"}),Te.to(o[1].meshes.green.material,{opacity:1,duration:1.5,ease:"power2.out"}),Te.to(o[2].meshes.blue.position,{x:5.75,duration:1.5,ease:"power2.out"}),Te.to(o[2].meshes.blue.rotation,{x:Math.PI,duration:1.5,ease:"power2.out"}),Te.to(o[2].meshes.blue.material,{opacity:1,duration:1.5,ease:"power2.out"});function A(){requestAnimationFrame(A),s.render(n,i)}A()}),(d,g)=>(Ko(),Jo("div",{class:"flex flex-col items-center",onMouseenter:h,onMouseleave:f},[_i("div",NE,[_i("canvas",{ref_key:"canvasRef",ref:t,class:"logo-3d-canvas"},null,512)]),(Ko(),Jo("svg",{ref_key:"logoRef",ref:e,class:"relative h-3.5 -mt-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 238.54 17.28"},g[0]||(g[0]=[c_('<g data-v-861abac4><g data-v-861abac4><path d="M3.12,2.86v5.11h4.94l-1.44,2.59-3.5.05v6.43H0V.24h12.26l-1.45,2.62H3.12Z" style="fill:#fff;" data-v-861abac4></path><path d="M30.37,17.04l-3.43-4.92c-.14.02-.36.02-.65.02h-3.79v4.9h-3.12V.24h6.91c1.46,0,2.72.24,3.8.72,1.08.48,1.91,1.17,2.48,2.06.58.9.86,1.96.86,3.19s-.31,2.35-.92,3.26c-.62.91-1.5,1.59-2.65,2.04l3.86,5.52h-3.36ZM29.24,3.74c-.7-.58-1.74-.86-3.1-.86h-3.65v6.7h3.65c1.36,0,2.39-.29,3.1-.88s1.06-1.41,1.06-2.48-.35-1.9-1.06-2.47Z" style="fill:#fff;" data-v-861abac4></path><path d="M45.22,16.16c-1.38-.74-2.46-1.78-3.24-3.1-.78-1.32-1.18-2.8-1.18-4.43s.39-3.11,1.18-4.43c.78-1.32,1.86-2.35,3.24-3.1,1.38-.74,2.92-1.12,4.63-1.12s3.26.37,4.63,1.12c1.38.74,2.46,1.77,3.24,3.08.78,1.31,1.18,2.79,1.18,4.44s-.39,3.13-1.18,4.44c-.78,1.31-1.86,2.34-3.24,3.08-1.38.74-2.92,1.12-4.63,1.12s-3.26-.37-4.63-1.12ZM52.88,13.79c.9-.5,1.6-1.21,2.11-2.11.51-.9.77-1.92.77-3.04s-.26-2.13-.77-3.04c-.51-.9-1.22-1.61-2.11-2.11-.9-.5-1.9-.76-3.02-.76s-2.13.25-3.02.76c-.9.5-1.6,1.21-2.11,2.11-.51.9-.77,1.92-.77,3.04s.26,2.13.77,3.04c.51.9,1.22,1.61,2.11,2.11.9.5,1.9.76,3.02.76s2.13-.25,3.02-.76Z" style="fill:#fff;" data-v-861abac4></path><path d="M82.74,17.04l-.02-11.14-5.52,9.22h-1.39l-5.52-9.07v10.99h-2.98V.24h2.57l6.67,11.14L83.1.24h2.57l.02,16.8h-2.95Z" style="fill:#fff;" data-v-861abac4></path><path d="M110.43,2.88h-5.57V.24h14.26l-1.47,2.64h-4.09v14.16h-3.12V2.88Z" style="fill:#fff;" data-v-861abac4></path><path d="M141.49.24v16.8h-3.12v-7.2h-8.69v7.2h-3.12V.24h3.12v6.94h8.69V.24h3.12Z" style="fill:#fff;" data-v-861abac4></path><path d="M162.69,14.42l-1.51,2.62h-11.09V.24h12.26l-1.54,2.62h-7.61v4.37h8.11l-1.48,2.57h-6.63v4.63h9.48Z" style="fill:#fff;" data-v-861abac4></path><path d="M182.97.24h3.12v14.16h8.78l-1.53,2.64h-10.38V.24Z" style="fill:#fff;" data-v-861abac4></path><path d="M213.45,13.15h-8.4l-1.66,3.89h-3.22L207.73.24h3.07l7.58,16.8h-3.26l-1.68-3.89ZM212.41,10.7l-3.17-7.34-3.14,7.34h6.31Z" style="fill:#fff;" data-v-861abac4></path><path d="M237.73,9.83c.54.71.82,1.6.82,2.65,0,1.46-.56,2.58-1.68,3.37s-2.75,1.19-4.9,1.19h-8.35V.24h7.87c1.98,0,3.51.39,4.58,1.16,1.07.78,1.61,1.84,1.61,3.2,0,.83-.19,1.57-.58,2.21-.38.64-.91,1.14-1.58,1.49.93.3,1.66.81,2.21,1.52ZM226.73,2.69v4.63h4.42c1.09,0,1.92-.2,2.51-.59.58-.39.88-.96.88-1.72s-.29-1.35-.88-1.74c-.58-.39-1.42-.59-2.51-.59h-4.42ZM235.4,12.17c0-1.62-1.21-2.42-3.62-2.42h-5.04v4.85h5.04c2.42,0,3.62-.81,3.62-2.42Z" style="fill:#fff;" data-v-861abac4></path></g></g>',1)]),512))],32))}}),FE=Jd(OE,[["__scopeId","data-v-861abac4"]]),Om={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class _a{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const BE=new Vl(-1,1,1,-1,0,1);class zE extends wn{constructor(){super(),this.setAttribute("position",new Ve([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ve([0,2,0,0,2,0],2))}}const kE=new zE;class Fm{constructor(t){this._mesh=new Ze(kE,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,BE)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class HE extends _a{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Rn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=El.clone(t.uniforms),this.material=new Rn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Fm(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ad extends _a{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class VE extends _a{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class GE{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new mt);this._width=n.width,this._height=n.height,e=new yi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ji}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new HE(Om),this.copyPass.material.blending=Ki,this.clock=new B0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ad!==void 0&&(o instanceof Ad?n=!0:o instanceof VE&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new mt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class WE extends _a{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Yt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const XE={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Yt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class lo extends _a{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new mt(t.x,t.y):new mt(256,256),this.clearColor=new Yt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new yi(s,o,{type:ji}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new yi(s,o,{type:ji});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new yi(s,o,{type:ji});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=XE;this.highPassUniforms=El.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Rn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new mt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Om;this.copyUniforms=El.clone(u.uniforms),this.blendMaterial=new Rn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:bi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Yt,this.oldClearAlpha=1,this.basic=new ns,this.fsQuad=new Fm(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new mt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=lo.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=lo.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Rn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new mt(.5,.5)},direction:{value:new mt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Rn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}lo.BlurDirectionX=new mt(1,0);lo.BlurDirectionY=new mt(0,1);const Or=.01,Cd=45/3,YE=3,Bc=45,Rd=lh({__name:"CubeStrip",props:{particleWidth:{},particleHeight:{}},setup(r){const t=r,e=$o(null);let n,i,s=null,o=null,a=null,l=[];const c=u_({particleCount:400,particleWidth:t.particleWidth??20,particleHeight:t.particleHeight??20,minSpeed:2,maxSpeed:5,speedRandomness:.5,positionZRandomness:.5,rotationRandomness:.5,rotateParticles:!1,useSquares:!0,emitterDepth:100,bloomStrength:1.1,bloomRadius:0,showControls:!1}),u=Bc/2+10;function h(p){const m=Or*c.particleWidth,M=Or*c.particleHeight,x=c.useSquares?new pa(m,M):new Jn(m,M,m),v=Math.floor(Math.random()*3);let A;switch(v){case 0:A=new Yt(1,0,0);break;case 1:A=new Yt(0,1,0);break;case 2:A=new Yt(0,0,1);break;default:A=new Yt(1,0,0)}const b=new ns({color:A,transparent:!0,opacity:.7}),E=new Ze(x,b),P=Bc+u*2;E.position.set(-45-u+p/(c.particleCount-1)*P,0,Or*(Math.random()-.5)*c.positionZRandomness*c.emitterDepth);const S=Or*(Math.random()*(c.maxSpeed-c.minSpeed)+c.minSpeed);return E.speed=S+Or*(Math.random()-.5)*c.speedRandomness,E.rotationSpeed=new Z(Math.PI/2,Math.PI/2,Math.PI/2).multiplyScalar(Math.random()*c.rotationRandomness+.5),E}function f(){n=new yh;const p=YE*1.5,m=p*Cd;i=new Vl(-67.5/2,m/2,p/2,-4.5/2,.1,1e3),i.position.z=150,s=new Rh({antialias:!0}),s.setPixelRatio(window.devicePixelRatio),s.domElement&&(s.domElement.style.width="100%",s.domElement.style.height="auto");const M=new WE(n,i);a=new lo(new mt(window.innerWidth,window.innerHeight),c.bloomStrength,c.bloomRadius,.1),o=new GE(s),o.addPass(M),o.addPass(a),g(),e.value&&e.value.appendChild(s.domElement),d(),_()}function d(){l.forEach(p=>n.remove(p)),l=[];for(let p=0;p<c.particleCount;p++){const m=h(p);l.push(m),n.add(m)}}function g(){if(!s||!o||!a)return;const p=window.innerWidth,m=p/Cd;s.setSize(p,m),o.setSize(p,m),a.setSize(p,m),s.domElement&&(s.domElement.style.width="100%",s.domElement.style.height="auto")}function _(){requestAnimationFrame(_),l.forEach(p=>{p.position.x+=p.speed,!c.useSquares&&c.rotateParticles&&(p.rotation.x+=p.rotationSpeed.x*.016,p.rotation.y+=p.rotationSpeed.y*.016,p.rotation.z+=p.rotationSpeed.z*.016),p.position.x>Bc/2+u&&(l.indexOf(p),p.position.x=-45-u-Or*(p.geometry instanceof Jn,p.geometry.parameters.width),p.position.y=0,p.position.z=Or*(Math.random()-.5)*c.positionZRandomness*c.emitterDepth)}),o&&o.render()}return ch(()=>{f(),window.addEventListener("resize",g)}),$d(()=>{window.removeEventListener("resize",g),s==null||s.dispose()}),(p,m)=>(Ko(),Jo("div",{ref_key:"container",ref:e,class:"relative w-full before:absolute before:inset-x-0 before:top-0 before:h-[2vw] before:bg-gradient-to-b before:from-black before:to-transparent after:absolute after:inset-x-0 after:bottom-0 after:h-[2vw] after:bg-gradient-to-t after:from-black after:to-transparent"},null,512))}});class qE extends Hl{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new Pp(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=s.parse(JSON.parse(a));e&&e(l)},n,i)}parse(t){return new ZE(t)}}class ZE{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=$E(t,e,this.data);for(let s=0,o=i.length;s<o;s++)n.push(...i[s].toShapes());return n}}function $E(r,t,e){const n=Array.from(r),i=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=s;else{const h=JE(u,i,a,l,e);a+=h.offsetX,o.push(h.path)}}return o}function JE(r,t,e,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const o=new ur;let a,l,c,u,h,f,d,g;if(s.o){const _=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let p=0,m=_.length;p<m;)switch(_[p++]){case"m":a=_[p++]*t+e,l=_[p++]*t+n,o.moveTo(a,l);break;case"l":a=_[p++]*t+e,l=_[p++]*t+n,o.lineTo(a,l);break;case"q":c=_[p++]*t+e,u=_[p++]*t+n,h=_[p++]*t+e,f=_[p++]*t+n,o.quadraticCurveTo(h,f,c,u);break;case"b":c=_[p++]*t+e,u=_[p++]*t+n,h=_[p++]*t+e,f=_[p++]*t+n,d=_[p++]*t+e,g=_[p++]*t+n,o.bezierCurveTo(h,f,d,g,c,u);break}}return{offsetX:s.ha*t,path:o}}class Bm extends wh{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth===void 0&&(e.depth=50),e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}}function KE(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function jE(r,t,e){return t&&KE(r.prototype,t),r}/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var nn,pl,Zn,_r,gr,Ys,zm,kr,zo,km,Ji,mi,Hm,Vm=function(){return nn||typeof window<"u"&&(nn=window.gsap)&&nn.registerPlugin&&nn},Gm=1,Os=[],se=[],Ui=[],ko=Date.now,ju=function(t,e){return e},QE=function(){var t=zo.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,se),i.push.apply(i,Ui),se=n,Ui=i,ju=function(o,a){return e[o](a)}},Sr=function(t,e){return~Ui.indexOf(t)&&Ui[Ui.indexOf(t)+1][e]},Ho=function(t){return!!~km.indexOf(t)},vn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},_n=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},qa="scrollLeft",Za="scrollTop",Qu=function(){return Ji&&Ji.isPressed||se.cache++},Il=function(t,e){var n=function i(s){if(s||s===0){Gm&&(Zn.history.scrollRestoration="manual");var o=Ji&&Ji.isPressed;s=i.v=Math.round(s)||(Ji&&Ji.iOS?1:0),t(s),i.cacheID=se.cache,o&&ju("ss",s)}else(e||se.cache!==i.cacheID||ju("ref"))&&(i.cacheID=se.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},bn={s:qa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Il(function(r){return arguments.length?Zn.scrollTo(r,qe.sc()):Zn.pageXOffset||_r[qa]||gr[qa]||Ys[qa]||0})},qe={s:Za,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:bn,sc:Il(function(r){return arguments.length?Zn.scrollTo(bn.sc(),r):Zn.pageYOffset||_r[Za]||gr[Za]||Ys[Za]||0})},Cn=function(t,e){return(e&&e._ctx&&e._ctx.selector||nn.utils.toArray)(t)[0]||(typeof t=="string"&&nn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},br=function(t,e){var n=e.s,i=e.sc;Ho(t)&&(t=_r.scrollingElement||gr);var s=se.indexOf(t),o=i===qe.sc?1:2;!~s&&(s=se.push(t)-1),se[s+o]||vn(t,"scroll",Qu);var a=se[s+o],l=a||(se[s+o]=Il(Sr(t,n),!0)||(Ho(t)?i:Il(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=nn.getProperty(t,"scrollBehavior")==="smooth"),l},th=function(t,e,n){var i=t,s=t,o=ko(),a=o,l=e||50,c=Math.max(500,l*3),u=function(g,_){var p=ko();_||p-o>l?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(g){var _=a,p=s,m=ko();return(g||g===0)&&g!==i&&u(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},Eo=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Pd=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Wm=function(){zo=nn.core.globals().ScrollTrigger,zo&&zo.core&&QE()},Xm=function(t){return nn=t||Vm(),!pl&&nn&&typeof document<"u"&&document.body&&(Zn=window,_r=document,gr=_r.documentElement,Ys=_r.body,km=[Zn,_r,gr,Ys],nn.utils.clamp,Hm=nn.core.context||function(){},kr="onpointerenter"in Ys?"pointer":"mouse",zm=Oe.isTouch=Zn.matchMedia&&Zn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Zn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,mi=Oe.eventTypes=("ontouchstart"in gr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in gr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Gm=0},500),Wm(),pl=1),pl};bn.op=qe;se.cache=0;var Oe=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){pl||Xm(nn)||console.warn("Please gsap.registerPlugin(Observer)"),zo||Wm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,M=n.onDrag,x=n.onPress,v=n.onRelease,A=n.onRight,b=n.onLeft,E=n.onUp,P=n.onDown,S=n.onChangeX,y=n.onChangeY,I=n.onChange,F=n.onToggleX,G=n.onToggleY,W=n.onHover,j=n.onHoverEnd,X=n.onMove,J=n.ignoreCheck,H=n.isNormalizer,ft=n.onGestureStart,B=n.onGestureEnd,gt=n.onWheel,It=n.onEnable,$t=n.onDisable,O=n.onClick,U=n.scrollSpeed,L=n.capture,C=n.allowClicks,et=n.lockAxis,ht=n.onLockAxis;this.target=a=Cn(a)||gr,this.vars=n,d&&(d=nn.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,U=U||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Zn.getComputedStyle(Ys).lineHeight)||22);var K,dt,tt,Y,T,rt,nt,z=this,k=0,N=0,lt=n.passive||!u&&n.passive!==!1,D=br(a,bn),w=br(a,qe),Q=D(),ot=w(),ct=~o.indexOf("touch")&&!~o.indexOf("pointer")&&mi[0]==="pointerdown",ut=Ho(a),St=a.ownerDocument||_r,xt=[0,0,0],Mt=[0,0,0],Ht=0,vt=function(){return Ht=ko()},yt=function(Nt,jt){return(z.event=Nt)&&d&&~d.indexOf(Nt.target)||jt&&ct&&Nt.pointerType!=="touch"||J&&J(Nt,jt)},zt=function(){z._vx.reset(),z._vy.reset(),dt.pause(),h&&h(z)},Ft=function(){var Nt=z.deltaX=Pd(xt),jt=z.deltaY=Pd(Mt),wt=Math.abs(Nt)>=i,Jt=Math.abs(jt)>=i;I&&(wt||Jt)&&I(z,Nt,jt,xt,Mt),wt&&(A&&z.deltaX>0&&A(z),b&&z.deltaX<0&&b(z),S&&S(z),F&&z.deltaX<0!=k<0&&F(z),k=z.deltaX,xt[0]=xt[1]=xt[2]=0),Jt&&(P&&z.deltaY>0&&P(z),E&&z.deltaY<0&&E(z),y&&y(z),G&&z.deltaY<0!=N<0&&G(z),N=z.deltaY,Mt[0]=Mt[1]=Mt[2]=0),(Y||tt)&&(X&&X(z),tt&&(p&&tt===1&&p(z),M&&M(z),tt=0),Y=!1),rt&&!(rt=!1)&&ht&&ht(z),T&&(gt(z),T=!1),K=0},Pt=function(Nt,jt,wt){xt[wt]+=Nt,Mt[wt]+=jt,z._vx.update(Nt),z._vy.update(jt),c?K||(K=requestAnimationFrame(Ft)):Ft()},Kt=function(Nt,jt){et&&!nt&&(z.axis=nt=Math.abs(Nt)>Math.abs(jt)?"x":"y",rt=!0),nt!=="y"&&(xt[2]+=Nt,z._vx.update(Nt,!0)),nt!=="x"&&(Mt[2]+=jt,z._vy.update(jt,!0)),c?K||(K=requestAnimationFrame(Ft)):Ft()},Wt=function(Nt){if(!yt(Nt,1)){Nt=Eo(Nt,u);var jt=Nt.clientX,wt=Nt.clientY,Jt=jt-z.x,Ot=wt-z.y,qt=z.isDragging;z.x=jt,z.y=wt,(qt||(Jt||Ot)&&(Math.abs(z.startX-jt)>=s||Math.abs(z.startY-wt)>=s))&&(tt=qt?2:1,qt||(z.isDragging=!0),Kt(Jt,Ot))}},le=z.onPress=function(Rt){yt(Rt,1)||Rt&&Rt.button||(z.axis=nt=null,dt.pause(),z.isPressed=!0,Rt=Eo(Rt),k=N=0,z.startX=z.x=Rt.clientX,z.startY=z.y=Rt.clientY,z._vx.reset(),z._vy.reset(),vn(H?a:St,mi[1],Wt,lt,!0),z.deltaX=z.deltaY=0,x&&x(z))},V=z.onRelease=function(Rt){if(!yt(Rt,1)){_n(H?a:St,mi[1],Wt,!0);var Nt=!isNaN(z.y-z.startY),jt=z.isDragging,wt=jt&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),Jt=Eo(Rt);!wt&&Nt&&(z._vx.reset(),z._vy.reset(),u&&C&&nn.delayedCall(.08,function(){if(ko()-Ht>300&&!Rt.defaultPrevented){if(Rt.target.click)Rt.target.click();else if(St.createEvent){var Ot=St.createEvent("MouseEvents");Ot.initMouseEvent("click",!0,!0,Zn,1,Jt.screenX,Jt.screenY,Jt.clientX,Jt.clientY,!1,!1,!1,!1,0,null),Rt.target.dispatchEvent(Ot)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,h&&jt&&!H&&dt.restart(!0),tt&&Ft(),m&&jt&&m(z),v&&v(z,wt)}},Tt=function(Nt){return Nt.touches&&Nt.touches.length>1&&(z.isGesturing=!0)&&ft(Nt,z.isDragging)},at=function(){return(z.isGesturing=!1)||B(z)},pt=function(Nt){if(!yt(Nt)){var jt=D(),wt=w();Pt((jt-Q)*U,(wt-ot)*U,1),Q=jt,ot=wt,h&&dt.restart(!0)}},Et=function(Nt){if(!yt(Nt)){Nt=Eo(Nt,u),gt&&(T=!0);var jt=(Nt.deltaMode===1?l:Nt.deltaMode===2?Zn.innerHeight:1)*g;Pt(Nt.deltaX*jt,Nt.deltaY*jt,0),h&&!H&&dt.restart(!0)}},bt=function(Nt){if(!yt(Nt)){var jt=Nt.clientX,wt=Nt.clientY,Jt=jt-z.x,Ot=wt-z.y;z.x=jt,z.y=wt,Y=!0,h&&dt.restart(!0),(Jt||Ot)&&Kt(Jt,Ot)}},Xt=function(Nt){z.event=Nt,W(z)},ce=function(Nt){z.event=Nt,j(z)},Pe=function(Nt){return yt(Nt)||Eo(Nt,u)&&O(z)};dt=z._dc=nn.delayedCall(f||.25,zt).pause(),z.deltaX=z.deltaY=0,z._vx=th(0,50,!0),z._vy=th(0,50,!0),z.scrollX=D,z.scrollY=w,z.isDragging=z.isGesturing=z.isPressed=!1,Hm(this),z.enable=function(Rt){return z.isEnabled||(vn(ut?St:a,"scroll",Qu),o.indexOf("scroll")>=0&&vn(ut?St:a,"scroll",pt,lt,L),o.indexOf("wheel")>=0&&vn(a,"wheel",Et,lt,L),(o.indexOf("touch")>=0&&zm||o.indexOf("pointer")>=0)&&(vn(a,mi[0],le,lt,L),vn(St,mi[2],V),vn(St,mi[3],V),C&&vn(a,"click",vt,!0,!0),O&&vn(a,"click",Pe),ft&&vn(St,"gesturestart",Tt),B&&vn(St,"gestureend",at),W&&vn(a,kr+"enter",Xt),j&&vn(a,kr+"leave",ce),X&&vn(a,kr+"move",bt)),z.isEnabled=!0,z.isDragging=z.isGesturing=z.isPressed=Y=tt=!1,z._vx.reset(),z._vy.reset(),Q=D(),ot=w(),Rt&&Rt.type&&le(Rt),It&&It(z)),z},z.disable=function(){z.isEnabled&&(Os.filter(function(Rt){return Rt!==z&&Ho(Rt.target)}).length||_n(ut?St:a,"scroll",Qu),z.isPressed&&(z._vx.reset(),z._vy.reset(),_n(H?a:St,mi[1],Wt,!0)),_n(ut?St:a,"scroll",pt,L),_n(a,"wheel",Et,L),_n(a,mi[0],le,L),_n(St,mi[2],V),_n(St,mi[3],V),_n(a,"click",vt,!0),_n(a,"click",Pe),_n(St,"gesturestart",Tt),_n(St,"gestureend",at),_n(a,kr+"enter",Xt),_n(a,kr+"leave",ce),_n(a,kr+"move",bt),z.isEnabled=z.isPressed=z.isDragging=!1,$t&&$t(z))},z.kill=z.revert=function(){z.disable();var Rt=Os.indexOf(z);Rt>=0&&Os.splice(Rt,1),Ji===z&&(Ji=0)},Os.push(z),H&&Ho(a)&&(Ji=z),z.enable(_)},jE(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Oe.version="3.12.7";Oe.create=function(r){return new Oe(r)};Oe.register=Xm;Oe.getAll=function(){return Os.slice()};Oe.getById=function(r){return Os.filter(function(t){return t.vars.id===r})[0]};Vm()&&nn.registerPlugin(Oe);/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ut,Ps,re,Se,Yn,me,qh,Ul,ua,Vo,Co,$a,ln,ql,eh,Sn,Dd,Ld,Ds,Ym,zc,qm,yn,nh,Zm,$m,hr,ih,Zh,qs,$h,Nl,rh,kc,Ja=1,cn=Date.now,Hc=cn(),ui=0,Ro=0,Id=function(t,e,n){var i=Vn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Ud=function(t,e){return e&&(!Vn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},tT=function r(){return Ro&&requestAnimationFrame(r)},Nd=function(){return ql=1},Od=function(){return ql=0},Ti=function(t){return t},Po=function(t){return Math.round(t*1e5)/1e5||0},Jm=function(){return typeof window<"u"},Km=function(){return Ut||Jm()&&(Ut=window.gsap)&&Ut.registerPlugin&&Ut},ss=function(t){return!!~qh.indexOf(t)},jm=function(t){return(t==="Height"?$h:re["inner"+t])||Yn["client"+t]||me["client"+t]},Qm=function(t){return Sr(t,"getBoundingClientRect")||(ss(t)?function(){return xl.width=re.innerWidth,xl.height=$h,xl}:function(){return qi(t)})},eT=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=Sr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?jm(s):t["client"+s])||0}},nT=function(t,e){return!e||~Ui.indexOf(t)?Qm(t):function(){return xl}},Pi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Sr(t,n))?o()-Qm(t)()[s]:ss(t)?(Yn[n]||me[n])-jm(i):t[n]-t["offset"+i])},Ka=function(t,e){for(var n=0;n<Ds.length;n+=3)(!e||~e.indexOf(Ds[n+1]))&&t(Ds[n],Ds[n+1],Ds[n+2])},Vn=function(t){return typeof t=="string"},hn=function(t){return typeof t=="function"},Do=function(t){return typeof t=="number"},Hr=function(t){return typeof t=="object"},To=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Vc=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},ws=Math.abs,t_="left",e_="top",Jh="right",Kh="bottom",jr="width",Qr="height",Go="Right",Wo="Left",Xo="Top",Yo="Bottom",ze="padding",si="margin",co="Width",jh="Height",Ye="px",oi=function(t){return re.getComputedStyle(t)},iT=function(t){var e=oi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Fd=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},qi=function(t,e){var n=e&&oi(t)[eh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ut.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},Ol=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},n_=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},rT=function(t){return function(e){return Ut.utils.snap(n_(t),e)}},Qh=function(t){var e=Ut.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},sT=function(t){return function(e,n){return Qh(n_(t))(e,n.direction)}},ja=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},Qe=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},je=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Qa=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Bd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},tl={toggleActions:"play",anticipatePin:0},Fl={top:0,left:0,center:.5,bottom:1,right:1},ml=function(t,e){if(Vn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Fl?Fl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},el=function(t,e,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=Se.createElement("div"),_=ss(n)||Sr(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=_?me:n,M=t.indexOf("start")!==-1,x=M?c:u,v="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(v+=(i===qe?Jh:Kh)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=v,g.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],_l(g,0,i,M),g},_l=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+co]=1,s["border"+a+co]=0,s[n.p]=e+"px",Ut.set(t,s)},ne=[],sh={},ha,zd=function(){return cn()-ui>34&&(ha||(ha=requestAnimationFrame(tr)))},As=function(){(!yn||!yn.isPressed||yn.startX>me.clientWidth)&&(se.cache++,yn?ha||(ha=requestAnimationFrame(tr)):tr(),ui||as("scrollStart"),ui=cn())},Gc=function(){$m=re.innerWidth,Zm=re.innerHeight},Lo=function(t){se.cache++,(t===!0||!ln&&!qm&&!Se.fullscreenElement&&!Se.webkitFullscreenElement&&(!nh||$m!==re.innerWidth||Math.abs(re.innerHeight-Zm)>re.innerHeight*.25))&&Ul.restart(!0)},os={},oT=[],i_=function r(){return je(Qt,"scrollEnd",r)||qr(!0)},as=function(t){return os[t]&&os[t].map(function(e){return e()})||oT},Hn=[],r_=function(t){for(var e=0;e<Hn.length;e+=5)(!t||Hn[e+4]&&Hn[e+4].query===t)&&(Hn[e].style.cssText=Hn[e+1],Hn[e].getBBox&&Hn[e].setAttribute("transform",Hn[e+2]||""),Hn[e+3].uncache=1)},tf=function(t,e){var n;for(Sn=0;Sn<ne.length;Sn++)n=ne[Sn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Nl=!0,e&&r_(e),e||as("revert")},s_=function(t,e){se.cache++,(e||!Mn)&&se.forEach(function(n){return hn(n)&&n.cacheID++&&(n.rec=0)}),Vn(t)&&(re.history.scrollRestoration=Zh=t)},Mn,ts=0,kd,aT=function(){if(kd!==ts){var t=kd=ts;requestAnimationFrame(function(){return t===ts&&qr(!0)})}},o_=function(){me.appendChild(qs),$h=!yn&&qs.offsetHeight||re.innerHeight,me.removeChild(qs)},Hd=function(t){return ua(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},qr=function(t,e){if(Yn=Se.documentElement,me=Se.body,qh=[re,Se,Yn,me],ui&&!t&&!Nl){Qe(Qt,"scrollEnd",i_);return}o_(),Mn=Qt.isRefreshing=!0,se.forEach(function(i){return hn(i)&&++i.cacheID&&(i.rec=i())});var n=as("refreshInit");Ym&&Qt.sort(),e||tf(),se.forEach(function(i){hn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ne.slice(0).forEach(function(i){return i.refresh()}),Nl=!1,ne.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),rh=1,Hd(!0),ne.forEach(function(i){var s=Pi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Hd(!1),rh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),se.forEach(function(i){hn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),s_(Zh,1),Ul.pause(),ts++,Mn=2,tr(2),ne.forEach(function(i){return hn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Mn=Qt.isRefreshing=!1,as("refresh")},oh=0,gl=1,qo,tr=function(t){if(t===2||!Mn&&!Nl){Qt.isUpdating=!0,qo&&qo.update(0);var e=ne.length,n=cn(),i=n-Hc>=50,s=e&&ne[0].scroll();if(gl=oh>s?-1:1,Mn||(oh=s),i&&(ui&&!ql&&n-ui>200&&(ui=0,as("scrollEnd")),Co=Hc,Hc=n),gl<0){for(Sn=e;Sn-- >0;)ne[Sn]&&ne[Sn].update(0,i);gl=1}else for(Sn=0;Sn<e;Sn++)ne[Sn]&&ne[Sn].update(0,i);Qt.isUpdating=!1}ha=0},ah=[t_,e_,Kh,Jh,si+Yo,si+Go,si+Xo,si+Wo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],vl=ah.concat([jr,Qr,"boxSizing","max"+co,"max"+jh,"position",si,ze,ze+Xo,ze+Go,ze+Yo,ze+Wo]),lT=function(t,e,n){Zs(n);var i=t._gsap;if(i.spacerIsNative)Zs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Wc=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=ah.length,o=e.style,a=t.style,l;s--;)l=ah[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Kh]=a[Jh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[jr]=Ol(t,bn)+Ye,o[Qr]=Ol(t,qe)+Ye,o[ze]=a[si]=a[e_]=a[t_]="0",Zs(i),a[jr]=a["max"+co]=n[jr],a[Qr]=a["max"+jh]=n[Qr],a[ze]=n[ze],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},cT=/([A-Z])/g,Zs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Ut.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(cT,"-$1").toLowerCase())}},nl=function(t){for(var e=vl.length,n=t.style,i=[],s=0;s<e;s++)i.push(vl[s],n[vl[s]]);return i.t=t,i},uT=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},xl={left:0,top:0},Vd=function(t,e,n,i,s,o,a,l,c,u,h,f,d,g){hn(t)&&(t=t(l)),Vn(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?ml("0"+t.substr(3),n):0));var _=d?d.time():0,p,m,M;if(d&&d.seek(0),isNaN(t)||(t=+t),Do(t))d&&(t=Ut.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),a&&_l(a,n,i,!0);else{hn(e)&&(e=e(l));var x=(t||"0").split(" "),v,A,b,E;M=Cn(e,l)||me,v=qi(M)||{},(!v||!v.left&&!v.top)&&oi(M).display==="none"&&(E=M.style.display,M.style.display="block",v=qi(M),E?M.style.display=E:M.style.removeProperty("display")),A=ml(x[0],v[i.d]),b=ml(x[1]||"0",n),t=v[i.p]-c[i.p]-u+A+s-b,a&&_l(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var P=t+n,S=o._isStart;p="scroll"+i.d2,_l(o,P,i,S&&P>20||!S&&(h?Math.max(me[p],Yn[p]):o.parentNode[p])<=P+1),h&&(c=qi(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Ye))}return d&&M&&(p=qi(M),d.seek(f),m=qi(M),d._caScrollDist=p[i.p]-m[i.p],t=t/d._caScrollDist*f),d&&d.seek(_),d?t:Math.round(t)},hT=/(webkit|moz|length|cssText|inset)/i,Gd=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===me){t._stOrig=s.cssText,a=oi(t);for(o in a)!+o&&!hT.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Ut.core.getCache(t).uncache=1,e.appendChild(t)}},a_=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},il=function(t,e,n){var i={};i[e.p]="+="+n,Ut.set(t,i)},Wd=function(t,e){var n=br(t,e),i="_scroll"+e.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||n();var _=a_(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){se.cache++,o.tween&&tr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ut.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Qe(t,"wheel",n.wheelHandler),Qt.isTouch&&Qe(t,"touchmove",n.wheelHandler),s},Qt=function(){function r(e,n){Ps||r.register(Ut)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ih(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ro){this.update=this.refresh=this.kill=Ti;return}n=Fd(Vn(n)||Do(n)||n.nodeType?{trigger:n}:n,tl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,M=s.onSnapComplete,x=s.once,v=s.snap,A=s.pinReparent,b=s.pinSpacer,E=s.containerAnimation,P=s.fastScrollEnd,S=s.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?bn:qe,I=!h&&h!==0,F=Cn(n.scroller||re),G=Ut.core.getCache(F),W=ss(F),j=("pinType"in n?n.pinType:Sr(F,"pinType")||W&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],J=I&&n.toggleActions.split(" "),H="markers"in n?n.markers:tl.markers,ft=W?0:parseFloat(oi(F)["border"+y.p2+co])||0,B=this,gt=n.onRefreshInit&&function(){return n.onRefreshInit(B)},It=eT(F,W,y),$t=nT(F,W),O=0,U=0,L=0,C=br(F,y),et,ht,K,dt,tt,Y,T,rt,nt,z,k,N,lt,D,w,Q,ot,ct,ut,St,xt,Mt,Ht,vt,yt,zt,Ft,Pt,Kt,Wt,le,V,Tt,at,pt,Et,bt,Xt,ce;if(B._startClamp=B._endClamp=!1,B._dir=y,p*=45,B.scroller=F,B.scroll=E?E.time.bind(E):C,dt=C(),B.vars=n,i=i||n.animation,"refreshPriority"in n&&(Ym=1,n.refreshPriority===-9999&&(qo=B)),G.tweenScroll=G.tweenScroll||{top:Wd(F,qe),left:Wd(F,bn)},B.tweenTo=et=G.tweenScroll[y.p],B.scrubDuration=function(wt){Tt=Do(wt)&&wt,Tt?V?V.duration(wt):V=Ut.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Tt,paused:!0,onComplete:function(){return m&&m(B)}}):(V&&V.progress(1).kill(),V=0)},i&&(i.vars.lazy=!1,i._initted&&!B.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),B.animation=i.pause(),i.scrollTrigger=B,B.scrubDuration(h),Wt=0,l||(l=i.vars.id)),v&&((!Hr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in me.style&&Ut.set(W?[me,Yn]:F,{scrollBehavior:"auto"}),se.forEach(function(wt){return hn(wt)&&wt.target===(W?Se.scrollingElement||Yn:F)&&(wt.smooth=!1)}),K=hn(v.snapTo)?v.snapTo:v.snapTo==="labels"?rT(i):v.snapTo==="labelsDirectional"?sT(i):v.directional!==!1?function(wt,Jt){return Qh(v.snapTo)(wt,cn()-U<500?0:Jt.direction)}:Ut.utils.snap(v.snapTo),at=v.duration||{min:.1,max:2},at=Hr(at)?Vo(at.min,at.max):Vo(at,at),pt=Ut.delayedCall(v.delay||Tt/2||.1,function(){var wt=C(),Jt=cn()-U<500,Ot=et.tween;if((Jt||Math.abs(B.getVelocity())<10)&&!Ot&&!ql&&O!==wt){var qt=(wt-Y)/D,Ue=i&&!I?i.totalProgress():qt,ie=Jt?0:(Ue-le)/(cn()-Co)*1e3||0,ye=Ut.utils.clamp(-qt,1-qt,ws(ie/2)*ie/.185),Ge=qt+(v.inertia===!1?0:ye),ge,ve,fe=v,Fn=fe.onStart,Me=fe.onInterrupt,pn=fe.onComplete;if(ge=K(Ge,B),Do(ge)||(ge=Ge),ve=Math.max(0,Math.round(Y+ge*D)),wt<=T&&wt>=Y&&ve!==wt){if(Ot&&!Ot._initted&&Ot.data<=ws(ve-wt))return;v.inertia===!1&&(ye=ge-qt),et(ve,{duration:at(ws(Math.max(ws(Ge-Ue),ws(ge-Ue))*.185/ie/.05||0)),ease:v.ease||"power3",data:ws(ve-wt),onInterrupt:function(){return pt.restart(!0)&&Me&&Me(B)},onComplete:function(){B.update(),O=C(),i&&!I&&(V?V.resetTo("totalProgress",ge,i._tTime/i._tDur):i.progress(ge)),Wt=le=i&&!I?i.totalProgress():B.progress,M&&M(B),pn&&pn(B)}},wt,ye*D,ve-wt-ye*D),Fn&&Fn(B,et.tween)}}else B.isActive&&O!==wt&&pt.restart(!0)}).pause()),l&&(sh[l]=B),f=B.trigger=Cn(f||d!==!0&&d),ce=f&&f._gsap&&f._gsap.stRevert,ce&&(ce=ce(B)),d=d===!0?f:Cn(d),Vn(a)&&(a={targets:f,className:a}),d&&(g===!1||g===si||(g=!g&&d.parentNode&&d.parentNode.style&&oi(d.parentNode).display==="flex"?!1:ze),B.pin=d,ht=Ut.core.getCache(d),ht.spacer?w=ht.pinState:(b&&(b=Cn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),ht.spacerIsNative=!!b,b&&(ht.spacerState=nl(b))),ht.spacer=ct=b||Se.createElement("div"),ct.classList.add("pin-spacer"),l&&ct.classList.add("pin-spacer-"+l),ht.pinState=w=nl(d)),n.force3D!==!1&&Ut.set(d,{force3D:!0}),B.spacer=ct=ht.spacer,Kt=oi(d),vt=Kt[g+y.os2],St=Ut.getProperty(d),xt=Ut.quickSetter(d,y.a,Ye),Wc(d,ct,Kt),ot=nl(d)),H){N=Hr(H)?Fd(H,Bd):Bd,z=el("scroller-start",l,F,y,N,0),k=el("scroller-end",l,F,y,N,0,z),ut=z["offset"+y.op.d2];var Pe=Cn(Sr(F,"content")||F);rt=this.markerStart=el("start",l,Pe,y,N,ut,0,E),nt=this.markerEnd=el("end",l,Pe,y,N,ut,0,E),E&&(Xt=Ut.quickSetter([rt,nt],y.a,Ye)),!j&&!(Ui.length&&Sr(F,"fixedMarkers")===!0)&&(iT(W?me:F),Ut.set([z,k],{force3D:!0}),zt=Ut.quickSetter(z,y.a,Ye),Pt=Ut.quickSetter(k,y.a,Ye))}if(E){var Rt=E.vars.onUpdate,Nt=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){B.update(0,0,1),Rt&&Rt.apply(E,Nt||[])})}if(B.previous=function(){return ne[ne.indexOf(B)-1]},B.next=function(){return ne[ne.indexOf(B)+1]},B.revert=function(wt,Jt){if(!Jt)return B.kill(!0);var Ot=wt!==!1||!B.enabled,qt=ln;Ot!==B.isReverted&&(Ot&&(Et=Math.max(C(),B.scroll.rec||0),L=B.progress,bt=i&&i.progress()),rt&&[rt,nt,z,k].forEach(function(Ue){return Ue.style.display=Ot?"none":"block"}),Ot&&(ln=B,B.update(Ot)),d&&(!A||!B.isActive)&&(Ot?lT(d,ct,w):Wc(d,ct,oi(d),yt)),Ot||B.update(Ot),ln=qt,B.isReverted=Ot)},B.refresh=function(wt,Jt,Ot,qt){if(!((ln||!B.enabled)&&!Jt)){if(d&&wt&&ui){Qe(r,"scrollEnd",i_);return}!Mn&&gt&&gt(B),ln=B,et.tween&&!Ot&&(et.tween.kill(),et.tween=0),V&&V.pause(),_&&i&&i.revert({kill:!1}).invalidate(),B.isReverted||B.revert(!0,!0),B._subPinOffset=!1;var Ue=It(),ie=$t(),ye=E?E.duration():Pi(F,y),Ge=D<=.01,ge=0,ve=qt||0,fe=Hr(Ot)?Ot.end:n.end,Fn=n.endTrigger||f,Me=Hr(Ot)?Ot.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),pn=B.pinnedContainer=n.pinnedContainer&&Cn(n.pinnedContainer,B),ti=f&&Math.max(0,ne.indexOf(B))||0,We=ti,Xe,R,$,st,it,q,_t,At,Lt,Dt,kt,Gt,Bt;for(H&&Hr(Ot)&&(Gt=Ut.getProperty(z,y.p),Bt=Ut.getProperty(k,y.p));We-- >0;)q=ne[We],q.end||q.refresh(0,1)||(ln=B),_t=q.pin,_t&&(_t===f||_t===d||_t===pn)&&!q.isReverted&&(Dt||(Dt=[]),Dt.unshift(q),q.revert(!0,!0)),q!==ne[We]&&(ti--,We--);for(hn(Me)&&(Me=Me(B)),Me=Id(Me,"start",B),Y=Vd(Me,f,Ue,y,C(),rt,z,B,ie,ft,j,ye,E,B._startClamp&&"_startClamp")||(d?-.001:0),hn(fe)&&(fe=fe(B)),Vn(fe)&&!fe.indexOf("+=")&&(~fe.indexOf(" ")?fe=(Vn(Me)?Me.split(" ")[0]:"")+fe:(ge=ml(fe.substr(2),Ue),fe=Vn(Me)?Me:(E?Ut.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Y):Y)+ge,Fn=f)),fe=Id(fe,"end",B),T=Math.max(Y,Vd(fe||(Fn?"100% 0":ye),Fn,Ue,y,C()+ge,nt,k,B,ie,ft,j,ye,E,B._endClamp&&"_endClamp"))||-.001,ge=0,We=ti;We--;)q=ne[We],_t=q.pin,_t&&q.start-q._pinPush<=Y&&!E&&q.end>0&&(Xe=q.end-(B._startClamp?Math.max(0,q.start):q.start),(_t===f&&q.start-q._pinPush<Y||_t===pn)&&isNaN(Me)&&(ge+=Xe*(1-q.progress)),_t===d&&(ve+=Xe));if(Y+=ge,T+=ge,B._startClamp&&(B._startClamp+=ge),B._endClamp&&!Mn&&(B._endClamp=T||-.001,T=Math.min(T,Pi(F,y))),D=T-Y||(Y-=.01)&&.001,Ge&&(L=Ut.utils.clamp(0,1,Ut.utils.normalize(Y,T,Et))),B._pinPush=ve,rt&&ge&&(Xe={},Xe[y.a]="+="+ge,pn&&(Xe[y.p]="-="+C()),Ut.set([rt,nt],Xe)),d&&!(rh&&B.end>=Pi(F,y)))Xe=oi(d),st=y===qe,$=C(),Mt=parseFloat(St(y.a))+ve,!ye&&T>1&&(kt=(W?Se.scrollingElement||Yn:F).style,kt={style:kt,value:kt["overflow"+y.a.toUpperCase()]},W&&oi(me)["overflow"+y.a.toUpperCase()]!=="scroll"&&(kt.style["overflow"+y.a.toUpperCase()]="scroll")),Wc(d,ct,Xe),ot=nl(d),R=qi(d,!0),At=j&&br(F,st?bn:qe)(),g?(yt=[g+y.os2,D+ve+Ye],yt.t=ct,We=g===ze?Ol(d,y)+D+ve:0,We&&(yt.push(y.d,We+Ye),ct.style.flexBasis!=="auto"&&(ct.style.flexBasis=We+Ye)),Zs(yt),pn&&ne.forEach(function(ee){ee.pin===pn&&ee.vars.pinSpacing!==!1&&(ee._subPinOffset=!0)}),j&&C(Et)):(We=Ol(d,y),We&&ct.style.flexBasis!=="auto"&&(ct.style.flexBasis=We+Ye)),j&&(it={top:R.top+(st?$-Y:At)+Ye,left:R.left+(st?At:$-Y)+Ye,boxSizing:"border-box",position:"fixed"},it[jr]=it["max"+co]=Math.ceil(R.width)+Ye,it[Qr]=it["max"+jh]=Math.ceil(R.height)+Ye,it[si]=it[si+Xo]=it[si+Go]=it[si+Yo]=it[si+Wo]="0",it[ze]=Xe[ze],it[ze+Xo]=Xe[ze+Xo],it[ze+Go]=Xe[ze+Go],it[ze+Yo]=Xe[ze+Yo],it[ze+Wo]=Xe[ze+Wo],Q=uT(w,it,A),Mn&&C(0)),i?(Lt=i._initted,zc(1),i.render(i.duration(),!0,!0),Ht=St(y.a)-Mt+D+ve,Ft=Math.abs(D-Ht)>1,j&&Ft&&Q.splice(Q.length-2,2),i.render(0,!0,!0),Lt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),zc(0)):Ht=D,kt&&(kt.value?kt.style["overflow"+y.a.toUpperCase()]=kt.value:kt.style.removeProperty("overflow-"+y.a));else if(f&&C()&&!E)for(R=f.parentNode;R&&R!==me;)R._pinOffset&&(Y-=R._pinOffset,T-=R._pinOffset),R=R.parentNode;Dt&&Dt.forEach(function(ee){return ee.revert(!1,!0)}),B.start=Y,B.end=T,dt=tt=Mn?Et:C(),!E&&!Mn&&(dt<Et&&C(Et),B.scroll.rec=0),B.revert(!1,!0),U=cn(),pt&&(O=-1,pt.restart(!0)),ln=0,i&&I&&(i._initted||bt)&&i.progress()!==bt&&i.progress(bt||0,!0).render(i.time(),!0,!0),(Ge||L!==B.progress||E||_||i&&!i._initted)&&(i&&!I&&i.totalProgress(E&&Y<-.001&&!L?Ut.utils.normalize(Y,T,0):L,!0),B.progress=Ge||(dt-Y)/D===L?0:L),d&&g&&(ct._pinOffset=Math.round(B.progress*Ht)),V&&V.invalidate(),isNaN(Gt)||(Gt-=Ut.getProperty(z,y.p),Bt-=Ut.getProperty(k,y.p),il(z,y,Gt),il(rt,y,Gt-(qt||0)),il(k,y,Bt),il(nt,y,Bt-(qt||0))),Ge&&!Mn&&B.update(),u&&!Mn&&!lt&&(lt=!0,u(B),lt=!1)}},B.getVelocity=function(){return(C()-tt)/(cn()-Co)*1e3||0},B.endAnimation=function(){To(B.callbackAnimation),i&&(V?V.progress(1):i.paused()?I||To(i,B.direction<0,1):To(i,i.reversed()))},B.labelToScroll=function(wt){return i&&i.labels&&(Y||B.refresh()||Y)+i.labels[wt]/i.duration()*D||0},B.getTrailing=function(wt){var Jt=ne.indexOf(B),Ot=B.direction>0?ne.slice(0,Jt).reverse():ne.slice(Jt+1);return(Vn(wt)?Ot.filter(function(qt){return qt.vars.preventOverlaps===wt}):Ot).filter(function(qt){return B.direction>0?qt.end<=Y:qt.start>=T})},B.update=function(wt,Jt,Ot){if(!(E&&!Ot&&!wt)){var qt=Mn===!0?Et:B.scroll(),Ue=wt?0:(qt-Y)/D,ie=Ue<0?0:Ue>1?1:Ue||0,ye=B.progress,Ge,ge,ve,fe,Fn,Me,pn,ti;if(Jt&&(tt=dt,dt=E?C():qt,v&&(le=Wt,Wt=i&&!I?i.totalProgress():ie)),p&&d&&!ln&&!Ja&&ui&&(!ie&&Y<qt+(qt-tt)/(cn()-Co)*p?ie=1e-4:ie===1&&T>qt+(qt-tt)/(cn()-Co)*p&&(ie=.9999)),ie!==ye&&B.enabled){if(Ge=B.isActive=!!ie&&ie<1,ge=!!ye&&ye<1,Me=Ge!==ge,Fn=Me||!!ie!=!!ye,B.direction=ie>ye?1:-1,B.progress=ie,Fn&&!ln&&(ve=ie&&!ye?0:ie===1?1:ye===1?2:3,I&&(fe=!Me&&J[ve+1]!=="none"&&J[ve+1]||J[ve],ti=i&&(fe==="complete"||fe==="reset"||fe in i))),S&&(Me||ti)&&(ti||h||!i)&&(hn(S)?S(B):B.getTrailing(S).forEach(function($){return $.endAnimation()})),I||(V&&!ln&&!Ja?(V._dp._time-V._start!==V._time&&V.render(V._dp._time-V._start),V.resetTo?V.resetTo("totalProgress",ie,i._tTime/i._tDur):(V.vars.totalProgress=ie,V.invalidate().restart())):i&&i.totalProgress(ie,!!(ln&&(U||wt)))),d){if(wt&&g&&(ct.style[g+y.os2]=vt),!j)xt(Po(Mt+Ht*ie));else if(Fn){if(pn=!wt&&ie>ye&&T+1>qt&&qt+1>=Pi(F,y),A)if(!wt&&(Ge||pn)){var We=qi(d,!0),Xe=qt-Y;Gd(d,me,We.top+(y===qe?Xe:0)+Ye,We.left+(y===qe?0:Xe)+Ye)}else Gd(d,ct);Zs(Ge||pn?Q:ot),Ft&&ie<1&&Ge||xt(Mt+(ie===1&&!pn?Ht:0))}}v&&!et.tween&&!ln&&!Ja&&pt.restart(!0),a&&(Me||x&&ie&&(ie<1||!kc))&&ua(a.targets).forEach(function($){return $.classList[Ge||x?"add":"remove"](a.className)}),o&&!I&&!wt&&o(B),Fn&&!ln?(I&&(ti&&(fe==="complete"?i.pause().totalProgress(1):fe==="reset"?i.restart(!0).pause():fe==="restart"?i.restart(!0):i[fe]()),o&&o(B)),(Me||!kc)&&(c&&Me&&Vc(B,c),X[ve]&&Vc(B,X[ve]),x&&(ie===1?B.kill(!1,1):X[ve]=0),Me||(ve=ie===1?1:3,X[ve]&&Vc(B,X[ve]))),P&&!Ge&&Math.abs(B.getVelocity())>(Do(P)?P:2500)&&(To(B.callbackAnimation),V?V.progress(1):To(i,fe==="reverse"?1:!ie,1))):I&&o&&!ln&&o(B)}if(Pt){var R=E?qt/E.duration()*(E._caScrollDist||0):qt;zt(R+(z._isFlipped?1:0)),Pt(R)}Xt&&Xt(-qt/E.duration()*(E._caScrollDist||0))}},B.enable=function(wt,Jt){B.enabled||(B.enabled=!0,Qe(F,"resize",Lo),W||Qe(F,"scroll",As),gt&&Qe(r,"refreshInit",gt),wt!==!1&&(B.progress=L=0,dt=tt=O=C()),Jt!==!1&&B.refresh())},B.getTween=function(wt){return wt&&et?et.tween:V},B.setPositions=function(wt,Jt,Ot,qt){if(E){var Ue=E.scrollTrigger,ie=E.duration(),ye=Ue.end-Ue.start;wt=Ue.start+ye*wt/ie,Jt=Ue.start+ye*Jt/ie}B.refresh(!1,!1,{start:Ud(wt,Ot&&!!B._startClamp),end:Ud(Jt,Ot&&!!B._endClamp)},qt),B.update()},B.adjustPinSpacing=function(wt){if(yt&&wt){var Jt=yt.indexOf(y.d)+1;yt[Jt]=parseFloat(yt[Jt])+wt+Ye,yt[1]=parseFloat(yt[1])+wt+Ye,Zs(yt)}},B.disable=function(wt,Jt){if(B.enabled&&(wt!==!1&&B.revert(!0,!0),B.enabled=B.isActive=!1,Jt||V&&V.pause(),Et=0,ht&&(ht.uncache=1),gt&&je(r,"refreshInit",gt),pt&&(pt.pause(),et.tween&&et.tween.kill()&&(et.tween=0)),!W)){for(var Ot=ne.length;Ot--;)if(ne[Ot].scroller===F&&ne[Ot]!==B)return;je(F,"resize",Lo),W||je(F,"scroll",As)}},B.kill=function(wt,Jt){B.disable(wt,Jt),V&&!Jt&&V.kill(),l&&delete sh[l];var Ot=ne.indexOf(B);Ot>=0&&ne.splice(Ot,1),Ot===Sn&&gl>0&&Sn--,Ot=0,ne.forEach(function(qt){return qt.scroller===B.scroller&&(Ot=1)}),Ot||Mn||(B.scroll.rec=0),i&&(i.scrollTrigger=null,wt&&i.revert({kill:!1}),Jt||i.kill()),rt&&[rt,nt,z,k].forEach(function(qt){return qt.parentNode&&qt.parentNode.removeChild(qt)}),qo===B&&(qo=0),d&&(ht&&(ht.uncache=1),Ot=0,ne.forEach(function(qt){return qt.pin===d&&Ot++}),Ot||(ht.spacer=0)),n.onKill&&n.onKill(B)},ne.push(B),B.enable(!1,!1),ce&&ce(B),i&&i.add&&!D){var jt=B.update;B.update=function(){B.update=jt,se.cache++,Y||T||B.refresh()},Ut.delayedCall(.01,B.update),D=.01,Y=T=0}else B.refresh();d&&aT()},r.register=function(n){return Ps||(Ut=n||Km(),Jm()&&window.document&&r.enable(),Ps=Ro),Ps},r.defaults=function(n){if(n)for(var i in n)tl[i]=n[i];return tl},r.disable=function(n,i){Ro=0,ne.forEach(function(o){return o[i?"kill":"disable"](n)}),je(re,"wheel",As),je(Se,"scroll",As),clearInterval($a),je(Se,"touchcancel",Ti),je(me,"touchstart",Ti),ja(je,Se,"pointerdown,touchstart,mousedown",Nd),ja(je,Se,"pointerup,touchend,mouseup",Od),Ul.kill(),Ka(je);for(var s=0;s<se.length;s+=3)Qa(je,se[s],se[s+1]),Qa(je,se[s],se[s+2])},r.enable=function(){if(re=window,Se=document,Yn=Se.documentElement,me=Se.body,Ut&&(ua=Ut.utils.toArray,Vo=Ut.utils.clamp,ih=Ut.core.context||Ti,zc=Ut.core.suppressOverwrites||Ti,Zh=re.history.scrollRestoration||"auto",oh=re.pageYOffset||0,Ut.core.globals("ScrollTrigger",r),me)){Ro=1,qs=document.createElement("div"),qs.style.height="100vh",qs.style.position="absolute",o_(),tT(),Oe.register(Ut),r.isTouch=Oe.isTouch,hr=Oe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),nh=Oe.isTouch===1,Qe(re,"wheel",As),qh=[re,Se,Yn,me],Ut.matchMedia?(r.matchMedia=function(c){var u=Ut.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Ut.addEventListener("matchMediaInit",function(){return tf()}),Ut.addEventListener("matchMediaRevert",function(){return r_()}),Ut.addEventListener("matchMedia",function(){qr(0,1),as("matchMedia")}),Ut.matchMedia().add("(orientation: portrait)",function(){return Gc(),Gc})):console.warn("Requires GSAP 3.11.0 or later"),Gc(),Qe(Se,"scroll",As);var n=me.hasAttribute("style"),i=me.style,s=i.borderTopStyle,o=Ut.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=qi(me),qe.m=Math.round(a.top+qe.sc())||0,bn.m=Math.round(a.left+bn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(me.setAttribute("style",""),me.removeAttribute("style")),$a=setInterval(zd,250),Ut.delayedCall(.5,function(){return Ja=0}),Qe(Se,"touchcancel",Ti),Qe(me,"touchstart",Ti),ja(Qe,Se,"pointerdown,touchstart,mousedown",Nd),ja(Qe,Se,"pointerup,touchend,mouseup",Od),eh=Ut.utils.checkPrefix("transform"),vl.push(eh),Ps=cn(),Ul=Ut.delayedCall(.2,qr).pause(),Ds=[Se,"visibilitychange",function(){var c=re.innerWidth,u=re.innerHeight;Se.hidden?(Dd=c,Ld=u):(Dd!==c||Ld!==u)&&Lo()},Se,"DOMContentLoaded",qr,re,"load",qr,re,"resize",Lo],Ka(Qe),ne.forEach(function(c){return c.enable(0,1)}),l=0;l<se.length;l+=3)Qa(je,se[l],se[l+1]),Qa(je,se[l],se[l+2])}},r.config=function(n){"limitCallbacks"in n&&(kc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval($a)||($a=i)&&setInterval(zd,i),"ignoreMobileResize"in n&&(nh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ka(je)||Ka(Qe,n.autoRefreshEvents||"none"),qm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Cn(n),o=se.indexOf(s),a=ss(s);~o&&se.splice(o,a?6:2),i&&(a?Ui.unshift(re,i,me,i,Yn,i):Ui.unshift(s,i))},r.clearMatchMedia=function(n){ne.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Vn(n)?Cn(n):n).getBoundingClientRect(),a=o[s?jr:Qr]*i||0;return s?o.right-a>0&&o.left+a<re.innerWidth:o.bottom-a>0&&o.top+a<re.innerHeight},r.positionInViewport=function(n,i,s){Vn(n)&&(n=Cn(n));var o=n.getBoundingClientRect(),a=o[s?jr:Qr],l=i==null?a/2:i in Fl?Fl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/re.innerWidth:(o.top+l)/re.innerHeight},r.killAll=function(n){if(ne.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=os.killAll||[];os={},i.forEach(function(s){return s()})}},r}();Qt.version="3.12.7";Qt.saveStyles=function(r){return r?ua(r).forEach(function(t){if(t&&t.style){var e=Hn.indexOf(t);e>=0&&Hn.splice(e,5),Hn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ut.core.getCache(t),ih())}}):Hn};Qt.revert=function(r,t){return tf(!r,t)};Qt.create=function(r,t){return new Qt(r,t)};Qt.refresh=function(r){return r?Lo(!0):(Ps||Qt.register())&&qr(!0)};Qt.update=function(r){return++se.cache&&tr(r===!0?2:0)};Qt.clearScrollMemory=s_;Qt.maxScroll=function(r,t){return Pi(r,t?bn:qe)};Qt.getScrollFunc=function(r,t){return br(Cn(r),t?bn:qe)};Qt.getById=function(r){return sh[r]};Qt.getAll=function(){return ne.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qt.isScrolling=function(){return!!ui};Qt.snapDirectional=Qh;Qt.addEventListener=function(r,t){var e=os[r]||(os[r]=[]);~e.indexOf(t)||e.push(t)};Qt.removeEventListener=function(r,t){var e=os[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Qt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Ut.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&hn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return hn(s)&&(s=s(),Qe(Qt,"refresh",function(){return s=t.batchMax()})),ua(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Qt.create(c))}),e};var Xd=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Xc=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Oe.isTouch?" pinch-zoom":""):"none",t===Yn&&r(me,e)},rl={auto:1,scroll:1},fT=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Ut.core.getCache(s),a=cn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==me&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(rl[(l=oi(s)).overflowY]||rl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ss(s)&&(rl[(l=oi(s)).overflowY]||rl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},l_=function(t,e,n,i){return Oe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&fT,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Qe(Se,Oe.eventTypes[0],qd,!1,!0)},onDisable:function(){return je(Se,Oe.eventTypes[0],qd,!0)}})},dT=/(input|label|select|textarea)/i,Yd,qd=function(t){var e=dT.test(t.target.tagName);(e||Yd)&&(t._gsapAllow=!0,Yd=e)},pT=function(t){Hr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Cn(t.target)||Yn,u=Ut.core.globals().ScrollSmoother,h=u&&u.get(),f=hr&&(t.content&&Cn(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),d=br(c,qe),g=br(c,bn),_=1,p=(Oe.isTouch&&re.visualViewport?re.visualViewport.scale*re.visualViewport.width:re.outerWidth)/re.innerWidth,m=0,M=hn(i)?function(){return i(a)}:function(){return i||2.8},x,v,A=l_(c,t.type,!0,s),b=function(){return v=!1},E=Ti,P=Ti,S=function(){l=Pi(c,qe),P=Vo(hr?1:0,l),n&&(E=Vo(0,Pi(c,bn))),x=ts},y=function(){f._gsap.y=Po(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},I=function(){if(v){requestAnimationFrame(b);var H=Po(a.deltaY/2),ft=P(d.v-H);if(f&&ft!==d.v+d.offset){d.offset=ft-d.v;var B=Po((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+B+", 0, 1)",f._gsap.y=B+"px",d.cacheID=se.cache,tr()}return!0}d.offset&&y(),v=!0},F,G,W,j,X=function(){S(),F.isActive()&&F.vars.scrollY>l&&(d()>l?F.progress(1)&&d(l):F.resetTo("scrollY",l))};return f&&Ut.set(f,{y:"+=0"}),t.ignoreCheck=function(J){return hr&&J.type==="touchmove"&&I()||_>1.05&&J.type!=="touchstart"||a.isGesturing||J.touches&&J.touches.length>1},t.onPress=function(){v=!1;var J=_;_=Po((re.visualViewport&&re.visualViewport.scale||1)/p),F.pause(),J!==_&&Xc(c,_>1.01?!0:n?!1:"x"),G=g(),W=d(),S(),x=ts},t.onRelease=t.onGestureStart=function(J,H){if(d.offset&&y(),!H)j.restart(!0);else{se.cache++;var ft=M(),B,gt;n&&(B=g(),gt=B+ft*.05*-J.velocityX/.227,ft*=Xd(g,B,gt,Pi(c,bn)),F.vars.scrollX=E(gt)),B=d(),gt=B+ft*.05*-J.velocityY/.227,ft*=Xd(d,B,gt,Pi(c,qe)),F.vars.scrollY=P(gt),F.invalidate().duration(ft).play(.01),(hr&&F.vars.scrollY>=l||B>=l-1)&&Ut.to({},{onUpdate:X,duration:ft})}o&&o(J)},t.onWheel=function(){F._ts&&F.pause(),cn()-m>1e3&&(x=0,m=cn())},t.onChange=function(J,H,ft,B,gt){if(ts!==x&&S(),H&&n&&g(E(B[2]===H?G+(J.startX-J.x):g()+H-B[1])),ft){d.offset&&y();var It=gt[2]===ft,$t=It?W+J.startY-J.y:d()+ft-gt[1],O=P($t);It&&$t!==O&&(W+=O-$t),d(O)}(ft||H)&&tr()},t.onEnable=function(){Xc(c,n?!1:"x"),Qt.addEventListener("refresh",X),Qe(re,"resize",X),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),A.enable()},t.onDisable=function(){Xc(c,!0),je(re,"resize",X),Qt.removeEventListener("refresh",X),A.kill()},t.lockAxis=t.lockAxis!==!1,a=new Oe(t),a.iOS=hr,hr&&!d()&&d(1),hr&&Ut.ticker.add(Ti),j=a._dc,F=Ut.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:a_(d,d(),function(){return F.pause()})},onUpdate:tr,onComplete:j.vars.onComplete}),a};Qt.sort=function(r){if(hn(r))return ne.sort(r);var t=re.pageYOffset||0;return Qt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+re.innerHeight}),ne.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Qt.observe=function(r){return new Oe(r)};Qt.normalizeScroll=function(r){if(typeof r>"u")return yn;if(r===!0&&yn)return yn.enable();if(r===!1){yn&&yn.kill(),yn=r;return}var t=r instanceof Oe?r:pT(r);return yn&&yn.target===t.target&&yn.kill(),ss(t.target)&&(yn=t),t};Qt.core={_getVelocityProp:th,_inputObserver:l_,_scrollers:se,_proxies:Ui,bridge:{ss:function(){ui||as("scrollStart"),ui=cn()},ref:function(){return ln}}};Km()&&Ut.registerPlugin(Qt);var Zo=function(){var r=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(u){u.preventDefault(),n(++r%t.children.length)},!1);function e(u){return t.appendChild(u.dom),u}function n(u){for(var h=0;h<t.children.length;h++)t.children[h].style.display=h===u?"block":"none";r=u}var i=(performance||Date).now(),s=i,o=0,a=e(new Zo.Panel("FPS","#0ff","#002")),l=e(new Zo.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=e(new Zo.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:t,addPanel:e,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){o++;var u=(performance||Date).now();if(l.update(u-i,200),u>=s+1e3&&(a.update(o*1e3/(u-s),100),s=u,o=0,c)){var h=performance.memory;c.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return u},update:function(){i=this.end()},domElement:t,setMode:n}};Zo.Panel=function(r,t,e){var n=1/0,i=0,s=Math.round,o=s(window.devicePixelRatio||1),a=80*o,l=48*o,c=3*o,u=2*o,h=3*o,f=15*o,d=74*o,g=30*o,_=document.createElement("canvas");_.width=a,_.height=l,_.style.cssText="width:80px;height:48px";var p=_.getContext("2d");return p.font="bold "+9*o+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=e,p.fillRect(0,0,a,l),p.fillStyle=t,p.fillText(r,c,u),p.fillRect(h,f,d,g),p.fillStyle=e,p.globalAlpha=.9,p.fillRect(h,f,d,g),{dom:_,update:function(m,M){n=Math.min(n,m),i=Math.max(i,m),p.fillStyle=e,p.globalAlpha=1,p.fillRect(0,0,a,f),p.fillStyle=t,p.fillText(s(m)+" "+r+" ("+s(n)+"-"+s(i)+")",c,u),p.drawImage(_,h+o,f,d-o,g,h,f,d-o,g),p.fillRect(h+d-o,f,o,g),p.fillStyle=e,p.globalAlpha=.9,p.fillRect(h+d-o,f,o,s((1-m/M)*g))}}};const mT=Gn;class Bl extends Hl{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,i){const s=this,o=new Pp(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}parse(t){const e=this;function n(O,U){if(O.nodeType!==1)return;const L=v(O);let C=!1,et=null;switch(O.nodeName){case"svg":U=g(O,U);break;case"style":s(O);break;case"g":U=g(O,U);break;case"path":U=g(O,U),O.hasAttribute("d")&&(et=i(O));break;case"rect":U=g(O,U),et=l(O);break;case"polygon":U=g(O,U),et=c(O);break;case"polyline":U=g(O,U),et=u(O);break;case"circle":U=g(O,U),et=h(O);break;case"ellipse":U=g(O,U),et=f(O);break;case"line":U=g(O,U),et=d(O);break;case"defs":C=!0;break;case"use":U=g(O,U);const dt=(O.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),tt=O.viewportElement.getElementById(dt);tt?n(tt,U):console.warn("SVGLoader: 'use node' references non-existent node id: "+dt);break}et&&(U.fill!==void 0&&U.fill!=="none"&&et.color.setStyle(U.fill,mT),b(et,gt),F.push(et),et.userData={node:O,style:U});const ht=O.childNodes;for(let K=0;K<ht.length;K++){const dt=ht[K];C&&dt.nodeName!=="style"&&dt.nodeName!=="defs"||n(dt,U)}L&&(W.pop(),W.length>0?gt.copy(W[W.length-1]):gt.identity())}function i(O){const U=new ur,L=new mt,C=new mt,et=new mt;let ht=!0,K=!1;const dt=O.getAttribute("d");if(dt===""||dt==="none")return null;const tt=dt.match(/[a-df-z][^a-df-z]*/ig);for(let Y=0,T=tt.length;Y<T;Y++){const rt=tt[Y],nt=rt.charAt(0),z=rt.slice(1).trim();ht===!0&&(K=!0,ht=!1);let k;switch(nt){case"M":k=p(z);for(let N=0,lt=k.length;N<lt;N+=2)L.x=k[N+0],L.y=k[N+1],C.x=L.x,C.y=L.y,N===0?U.moveTo(L.x,L.y):U.lineTo(L.x,L.y),N===0&&et.copy(L);break;case"H":k=p(z);for(let N=0,lt=k.length;N<lt;N++)L.x=k[N],C.x=L.x,C.y=L.y,U.lineTo(L.x,L.y),N===0&&K===!0&&et.copy(L);break;case"V":k=p(z);for(let N=0,lt=k.length;N<lt;N++)L.y=k[N],C.x=L.x,C.y=L.y,U.lineTo(L.x,L.y),N===0&&K===!0&&et.copy(L);break;case"L":k=p(z);for(let N=0,lt=k.length;N<lt;N+=2)L.x=k[N+0],L.y=k[N+1],C.x=L.x,C.y=L.y,U.lineTo(L.x,L.y),N===0&&K===!0&&et.copy(L);break;case"C":k=p(z);for(let N=0,lt=k.length;N<lt;N+=6)U.bezierCurveTo(k[N+0],k[N+1],k[N+2],k[N+3],k[N+4],k[N+5]),C.x=k[N+2],C.y=k[N+3],L.x=k[N+4],L.y=k[N+5],N===0&&K===!0&&et.copy(L);break;case"S":k=p(z);for(let N=0,lt=k.length;N<lt;N+=4)U.bezierCurveTo(_(L.x,C.x),_(L.y,C.y),k[N+0],k[N+1],k[N+2],k[N+3]),C.x=k[N+0],C.y=k[N+1],L.x=k[N+2],L.y=k[N+3],N===0&&K===!0&&et.copy(L);break;case"Q":k=p(z);for(let N=0,lt=k.length;N<lt;N+=4)U.quadraticCurveTo(k[N+0],k[N+1],k[N+2],k[N+3]),C.x=k[N+0],C.y=k[N+1],L.x=k[N+2],L.y=k[N+3],N===0&&K===!0&&et.copy(L);break;case"T":k=p(z);for(let N=0,lt=k.length;N<lt;N+=2){const D=_(L.x,C.x),w=_(L.y,C.y);U.quadraticCurveTo(D,w,k[N+0],k[N+1]),C.x=D,C.y=w,L.x=k[N+0],L.y=k[N+1],N===0&&K===!0&&et.copy(L)}break;case"A":k=p(z,[3,4],7);for(let N=0,lt=k.length;N<lt;N+=7){if(k[N+5]==L.x&&k[N+6]==L.y)continue;const D=L.clone();L.x=k[N+5],L.y=k[N+6],C.x=L.x,C.y=L.y,o(U,k[N],k[N+1],k[N+2],k[N+3],k[N+4],D,L),N===0&&K===!0&&et.copy(L)}break;case"m":k=p(z);for(let N=0,lt=k.length;N<lt;N+=2)L.x+=k[N+0],L.y+=k[N+1],C.x=L.x,C.y=L.y,N===0?U.moveTo(L.x,L.y):U.lineTo(L.x,L.y),N===0&&et.copy(L);break;case"h":k=p(z);for(let N=0,lt=k.length;N<lt;N++)L.x+=k[N],C.x=L.x,C.y=L.y,U.lineTo(L.x,L.y),N===0&&K===!0&&et.copy(L);break;case"v":k=p(z);for(let N=0,lt=k.length;N<lt;N++)L.y+=k[N],C.x=L.x,C.y=L.y,U.lineTo(L.x,L.y),N===0&&K===!0&&et.copy(L);break;case"l":k=p(z);for(let N=0,lt=k.length;N<lt;N+=2)L.x+=k[N+0],L.y+=k[N+1],C.x=L.x,C.y=L.y,U.lineTo(L.x,L.y),N===0&&K===!0&&et.copy(L);break;case"c":k=p(z);for(let N=0,lt=k.length;N<lt;N+=6)U.bezierCurveTo(L.x+k[N+0],L.y+k[N+1],L.x+k[N+2],L.y+k[N+3],L.x+k[N+4],L.y+k[N+5]),C.x=L.x+k[N+2],C.y=L.y+k[N+3],L.x+=k[N+4],L.y+=k[N+5],N===0&&K===!0&&et.copy(L);break;case"s":k=p(z);for(let N=0,lt=k.length;N<lt;N+=4)U.bezierCurveTo(_(L.x,C.x),_(L.y,C.y),L.x+k[N+0],L.y+k[N+1],L.x+k[N+2],L.y+k[N+3]),C.x=L.x+k[N+0],C.y=L.y+k[N+1],L.x+=k[N+2],L.y+=k[N+3],N===0&&K===!0&&et.copy(L);break;case"q":k=p(z);for(let N=0,lt=k.length;N<lt;N+=4)U.quadraticCurveTo(L.x+k[N+0],L.y+k[N+1],L.x+k[N+2],L.y+k[N+3]),C.x=L.x+k[N+0],C.y=L.y+k[N+1],L.x+=k[N+2],L.y+=k[N+3],N===0&&K===!0&&et.copy(L);break;case"t":k=p(z);for(let N=0,lt=k.length;N<lt;N+=2){const D=_(L.x,C.x),w=_(L.y,C.y);U.quadraticCurveTo(D,w,L.x+k[N+0],L.y+k[N+1]),C.x=D,C.y=w,L.x=L.x+k[N+0],L.y=L.y+k[N+1],N===0&&K===!0&&et.copy(L)}break;case"a":k=p(z,[3,4],7);for(let N=0,lt=k.length;N<lt;N+=7){if(k[N+5]==0&&k[N+6]==0)continue;const D=L.clone();L.x+=k[N+5],L.y+=k[N+6],C.x=L.x,C.y=L.y,o(U,k[N],k[N+1],k[N+2],k[N+3],k[N+4],D,L),N===0&&K===!0&&et.copy(L)}break;case"Z":case"z":U.currentPath.autoClose=!0,U.currentPath.curves.length>0&&(L.copy(et),U.currentPath.currentPoint.copy(L),ht=!0);break;default:console.warn(rt)}K=!1}return U}function s(O){if(!(!O.sheet||!O.sheet.cssRules||!O.sheet.cssRules.length))for(let U=0;U<O.sheet.cssRules.length;U++){const L=O.sheet.cssRules[U];if(L.type!==1)continue;const C=L.selectorText.split(/,/gm).filter(Boolean).map(et=>et.trim());for(let et=0;et<C.length;et++){const ht=Object.fromEntries(Object.entries(L.style).filter(([,K])=>K!==""));G[C[et]]=Object.assign(G[C[et]]||{},ht)}}}function o(O,U,L,C,et,ht,K,dt){if(U==0||L==0){O.lineTo(dt.x,dt.y);return}C=C*Math.PI/180,U=Math.abs(U),L=Math.abs(L);const tt=(K.x-dt.x)/2,Y=(K.y-dt.y)/2,T=Math.cos(C)*tt+Math.sin(C)*Y,rt=-Math.sin(C)*tt+Math.cos(C)*Y;let nt=U*U,z=L*L;const k=T*T,N=rt*rt,lt=k/nt+N/z;if(lt>1){const Ht=Math.sqrt(lt);U=Ht*U,L=Ht*L,nt=U*U,z=L*L}const D=nt*N+z*k,w=(nt*z-D)/D;let Q=Math.sqrt(Math.max(0,w));et===ht&&(Q=-Q);const ot=Q*U*rt/L,ct=-Q*L*T/U,ut=Math.cos(C)*ot-Math.sin(C)*ct+(K.x+dt.x)/2,St=Math.sin(C)*ot+Math.cos(C)*ct+(K.y+dt.y)/2,xt=a(1,0,(T-ot)/U,(rt-ct)/L),Mt=a((T-ot)/U,(rt-ct)/L,(-T-ot)/U,(-rt-ct)/L)%(Math.PI*2);O.currentPath.absellipse(ut,St,U,L,xt,xt+Mt,ht===0,C)}function a(O,U,L,C){const et=O*L+U*C,ht=Math.sqrt(O*O+U*U)*Math.sqrt(L*L+C*C);let K=Math.acos(Math.max(-1,Math.min(1,et/ht)));return O*C-U*L<0&&(K=-K),K}function l(O){const U=x(O.getAttribute("x")||0),L=x(O.getAttribute("y")||0),C=x(O.getAttribute("rx")||O.getAttribute("ry")||0),et=x(O.getAttribute("ry")||O.getAttribute("rx")||0),ht=x(O.getAttribute("width")),K=x(O.getAttribute("height")),dt=1-.551915024494,tt=new ur;return tt.moveTo(U+C,L),tt.lineTo(U+ht-C,L),(C!==0||et!==0)&&tt.bezierCurveTo(U+ht-C*dt,L,U+ht,L+et*dt,U+ht,L+et),tt.lineTo(U+ht,L+K-et),(C!==0||et!==0)&&tt.bezierCurveTo(U+ht,L+K-et*dt,U+ht-C*dt,L+K,U+ht-C,L+K),tt.lineTo(U+C,L+K),(C!==0||et!==0)&&tt.bezierCurveTo(U+C*dt,L+K,U,L+K-et*dt,U,L+K-et),tt.lineTo(U,L+et),(C!==0||et!==0)&&tt.bezierCurveTo(U,L+et*dt,U+C*dt,L,U+C,L),tt}function c(O){function U(ht,K,dt){const tt=x(K),Y=x(dt);et===0?C.moveTo(tt,Y):C.lineTo(tt,Y),et++}const L=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,C=new ur;let et=0;return O.getAttribute("points").replace(L,U),C.currentPath.autoClose=!0,C}function u(O){function U(ht,K,dt){const tt=x(K),Y=x(dt);et===0?C.moveTo(tt,Y):C.lineTo(tt,Y),et++}const L=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,C=new ur;let et=0;return O.getAttribute("points").replace(L,U),C.currentPath.autoClose=!1,C}function h(O){const U=x(O.getAttribute("cx")||0),L=x(O.getAttribute("cy")||0),C=x(O.getAttribute("r")||0),et=new Hs;et.absarc(U,L,C,0,Math.PI*2);const ht=new ur;return ht.subPaths.push(et),ht}function f(O){const U=x(O.getAttribute("cx")||0),L=x(O.getAttribute("cy")||0),C=x(O.getAttribute("rx")||0),et=x(O.getAttribute("ry")||0),ht=new Hs;ht.absellipse(U,L,C,et,0,Math.PI*2);const K=new ur;return K.subPaths.push(ht),K}function d(O){const U=x(O.getAttribute("x1")||0),L=x(O.getAttribute("y1")||0),C=x(O.getAttribute("x2")||0),et=x(O.getAttribute("y2")||0),ht=new ur;return ht.moveTo(U,L),ht.lineTo(C,et),ht.currentPath.autoClose=!1,ht}function g(O,U){U=Object.assign({},U);let L={};if(O.hasAttribute("class")){const K=O.getAttribute("class").split(/\s/).filter(Boolean).map(dt=>dt.trim());for(let dt=0;dt<K.length;dt++)L=Object.assign(L,G["."+K[dt]])}O.hasAttribute("id")&&(L=Object.assign(L,G["#"+O.getAttribute("id")]));function C(K,dt,tt){tt===void 0&&(tt=function(T){return T.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),T}),O.hasAttribute(K)&&(U[dt]=tt(O.getAttribute(K))),L[K]&&(U[dt]=tt(L[K])),O.style&&O.style[K]!==""&&(U[dt]=tt(O.style[K]))}function et(K){return Math.max(0,Math.min(1,x(K)))}function ht(K){return Math.max(0,x(K))}return C("fill","fill"),C("fill-opacity","fillOpacity",et),C("fill-rule","fillRule"),C("opacity","opacity",et),C("stroke","stroke"),C("stroke-opacity","strokeOpacity",et),C("stroke-width","strokeWidth",ht),C("stroke-linejoin","strokeLineJoin"),C("stroke-linecap","strokeLineCap"),C("stroke-miterlimit","strokeMiterLimit",ht),C("visibility","visibility"),U}function _(O,U){return O-(U-O)}function p(O,U,L){if(typeof O!="string")throw new TypeError("Invalid input: "+typeof O);const C={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},et=0,ht=1,K=2,dt=3;let tt=et,Y=!0,T="",rt="";const nt=[];function z(D,w,Q){const ot=new SyntaxError('Unexpected character "'+D+'" at index '+w+".");throw ot.partial=Q,ot}function k(){T!==""&&(rt===""?nt.push(Number(T)):nt.push(Number(T)*Math.pow(10,Number(rt)))),T="",rt=""}let N;const lt=O.length;for(let D=0;D<lt;D++){if(N=O[D],Array.isArray(U)&&U.includes(nt.length%L)&&C.FLAGS.test(N)){tt=ht,T=N,k();continue}if(tt===et){if(C.WHITESPACE.test(N))continue;if(C.DIGIT.test(N)||C.SIGN.test(N)){tt=ht,T=N;continue}if(C.POINT.test(N)){tt=K,T=N;continue}C.COMMA.test(N)&&(Y&&z(N,D,nt),Y=!0)}if(tt===ht){if(C.DIGIT.test(N)){T+=N;continue}if(C.POINT.test(N)){T+=N,tt=K;continue}if(C.EXP.test(N)){tt=dt;continue}C.SIGN.test(N)&&T.length===1&&C.SIGN.test(T[0])&&z(N,D,nt)}if(tt===K){if(C.DIGIT.test(N)){T+=N;continue}if(C.EXP.test(N)){tt=dt;continue}C.POINT.test(N)&&T[T.length-1]==="."&&z(N,D,nt)}if(tt===dt){if(C.DIGIT.test(N)){rt+=N;continue}if(C.SIGN.test(N)){if(rt===""){rt+=N;continue}rt.length===1&&C.SIGN.test(rt)&&z(N,D,nt)}}C.WHITESPACE.test(N)?(k(),tt=et,Y=!1):C.COMMA.test(N)?(k(),tt=et,Y=!0):C.SIGN.test(N)?(k(),tt=ht,T=N):C.POINT.test(N)?(k(),tt=K,T=N):z(N,D,nt)}return k(),nt}const m=["mm","cm","in","pt","pc","px"],M={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function x(O){let U="px";if(typeof O=="string"||O instanceof String)for(let C=0,et=m.length;C<et;C++){const ht=m[C];if(O.endsWith(ht)){U=ht,O=O.substring(0,O.length-ht.length);break}}let L;return U==="px"&&e.defaultUnit!=="px"?L=M.in[e.defaultUnit]/e.defaultDPI:(L=M[U][e.defaultUnit],L<0&&(L=M[U].in*e.defaultDPI)),L*parseFloat(O)}function v(O){if(!(O.hasAttribute("transform")||O.nodeName==="use"&&(O.hasAttribute("x")||O.hasAttribute("y"))))return null;const U=A(O);return W.length>0&&U.premultiply(W[W.length-1]),gt.copy(U),W.push(U),U}function A(O){const U=new Zt,L=j;if(O.nodeName==="use"&&(O.hasAttribute("x")||O.hasAttribute("y"))){const C=x(O.getAttribute("x")),et=x(O.getAttribute("y"));U.translate(C,et)}if(O.hasAttribute("transform")){const C=O.getAttribute("transform").split(")");for(let et=C.length-1;et>=0;et--){const ht=C[et].trim();if(ht==="")continue;const K=ht.indexOf("("),dt=ht.length;if(K>0&&K<dt){const tt=ht.slice(0,K),Y=p(ht.slice(K+1));switch(L.identity(),tt){case"translate":if(Y.length>=1){const T=Y[0];let rt=0;Y.length>=2&&(rt=Y[1]),L.translate(T,rt)}break;case"rotate":if(Y.length>=1){let T=0,rt=0,nt=0;T=Y[0]*Math.PI/180,Y.length>=3&&(rt=Y[1],nt=Y[2]),X.makeTranslation(-rt,-nt),J.makeRotation(T),H.multiplyMatrices(J,X),X.makeTranslation(rt,nt),L.multiplyMatrices(X,H)}break;case"scale":if(Y.length>=1){const T=Y[0];let rt=T;Y.length>=2&&(rt=Y[1]),L.scale(T,rt)}break;case"skewX":Y.length===1&&L.set(1,Math.tan(Y[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":Y.length===1&&L.set(1,0,0,Math.tan(Y[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":Y.length===6&&L.set(Y[0],Y[2],Y[4],Y[1],Y[3],Y[5],0,0,1);break}}U.premultiply(L)}}return U}function b(O,U){function L(K){B.set(K.x,K.y,1).applyMatrix3(U),K.set(B.x,B.y)}function C(K){const dt=K.xRadius,tt=K.yRadius,Y=Math.cos(K.aRotation),T=Math.sin(K.aRotation),rt=new Z(dt*Y,dt*T,0),nt=new Z(-tt*T,tt*Y,0),z=rt.applyMatrix3(U),k=nt.applyMatrix3(U),N=j.set(z.x,k.x,0,z.y,k.y,0,0,0,1),lt=X.copy(N).invert(),Q=J.copy(lt).transpose().multiply(lt).elements,ot=I(Q[0],Q[1],Q[4]),ct=Math.sqrt(ot.rt1),ut=Math.sqrt(ot.rt2);if(K.xRadius=1/ct,K.yRadius=1/ut,K.aRotation=Math.atan2(ot.sn,ot.cs),!((K.aEndAngle-K.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const xt=X.set(ct,0,0,0,ut,0,0,0,1),Mt=J.set(ot.cs,ot.sn,0,-ot.sn,ot.cs,0,0,0,1),Ht=xt.multiply(Mt).multiply(N),vt=yt=>{const{x:zt,y:Ft}=new Z(Math.cos(yt),Math.sin(yt),0).applyMatrix3(Ht);return Math.atan2(Ft,zt)};K.aStartAngle=vt(K.aStartAngle),K.aEndAngle=vt(K.aEndAngle),E(U)&&(K.aClockwise=!K.aClockwise)}}function et(K){const dt=S(U),tt=y(U);K.xRadius*=dt,K.yRadius*=tt;const Y=dt>Number.EPSILON?Math.atan2(U.elements[1],U.elements[0]):Math.atan2(-U.elements[3],U.elements[4]);K.aRotation+=Y,E(U)&&(K.aStartAngle*=-1,K.aEndAngle*=-1,K.aClockwise=!K.aClockwise)}const ht=O.subPaths;for(let K=0,dt=ht.length;K<dt;K++){const Y=ht[K].curves;for(let T=0;T<Y.length;T++){const rt=Y[T];rt.isLineCurve?(L(rt.v1),L(rt.v2)):rt.isCubicBezierCurve?(L(rt.v0),L(rt.v1),L(rt.v2),L(rt.v3)):rt.isQuadraticBezierCurve?(L(rt.v0),L(rt.v1),L(rt.v2)):rt.isEllipseCurve&&(ft.set(rt.aX,rt.aY),L(ft),rt.aX=ft.x,rt.aY=ft.y,P(U)?C(rt):et(rt))}}}function E(O){const U=O.elements;return U[0]*U[4]-U[1]*U[3]<0}function P(O){const U=O.elements,L=U[0]*U[3]+U[1]*U[4];if(L===0)return!1;const C=S(O),et=y(O);return Math.abs(L/(C*et))>Number.EPSILON}function S(O){const U=O.elements;return Math.sqrt(U[0]*U[0]+U[1]*U[1])}function y(O){const U=O.elements;return Math.sqrt(U[3]*U[3]+U[4]*U[4])}function I(O,U,L){let C,et,ht,K,dt;const tt=O+L,Y=O-L,T=Math.sqrt(Y*Y+4*U*U);return tt>0?(C=.5*(tt+T),dt=1/C,et=O*dt*L-U*dt*U):tt<0?et=.5*(tt-T):(C=.5*T,et=-.5*T),Y>0?ht=Y+T:ht=Y-T,Math.abs(ht)>2*Math.abs(U)?(dt=-2*U/ht,K=1/Math.sqrt(1+dt*dt),ht=dt*K):Math.abs(U)===0?(ht=1,K=0):(dt=-.5*ht/U,ht=1/Math.sqrt(1+dt*dt),K=dt*ht),Y>0&&(dt=ht,ht=-K,K=dt),{rt1:C,rt2:et,cs:ht,sn:K}}const F=[],G={},W=[],j=new Zt,X=new Zt,J=new Zt,H=new Zt,ft=new mt,B=new Z,gt=new Zt,It=new DOMParser().parseFromString(t,"image/svg+xml");return n(It.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:F,xml:It.documentElement}}static createShapes(t){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},i={loc:n.ORIGIN,t:0};function s(_,p,m,M){const x=_.x,v=p.x,A=m.x,b=M.x,E=_.y,P=p.y,S=m.y,y=M.y,I=(b-A)*(E-S)-(y-S)*(x-A),F=(v-x)*(E-S)-(P-E)*(x-A),G=(y-S)*(v-x)-(b-A)*(P-E),W=I/G,j=F/G;if(G===0&&I!==0||W<=0||W>=1||j<0||j>1)return null;if(I===0&&G===0){for(let X=0;X<2;X++)if(o(X===0?m:M,_,p),i.loc==n.ORIGIN){const J=X===0?m:M;return{x:J.x,y:J.y,t:i.t}}else if(i.loc==n.BETWEEN){const J=+(x+i.t*(v-x)).toPrecision(10),H=+(E+i.t*(P-E)).toPrecision(10);return{x:J,y:H,t:i.t}}return null}else{for(let H=0;H<2;H++)if(o(H===0?m:M,_,p),i.loc==n.ORIGIN){const ft=H===0?m:M;return{x:ft.x,y:ft.y,t:i.t}}const X=+(x+W*(v-x)).toPrecision(10),J=+(E+W*(P-E)).toPrecision(10);return{x:X,y:J,t:W}}}function o(_,p,m){const M=m.x-p.x,x=m.y-p.y,v=_.x-p.x,A=_.y-p.y,b=M*A-v*x;if(_.x===p.x&&_.y===p.y){i.loc=n.ORIGIN,i.t=0;return}if(_.x===m.x&&_.y===m.y){i.loc=n.DESTINATION,i.t=1;return}if(b<-Number.EPSILON){i.loc=n.LEFT;return}if(b>Number.EPSILON){i.loc=n.RIGHT;return}if(M*v<0||x*A<0){i.loc=n.BEHIND;return}if(Math.sqrt(M*M+x*x)<Math.sqrt(v*v+A*A)){i.loc=n.BEYOND;return}let E;M!==0?E=v/M:E=A/x,i.loc=n.BETWEEN,i.t=E}function a(_,p){const m=[],M=[];for(let x=1;x<_.length;x++){const v=_[x-1],A=_[x];for(let b=1;b<p.length;b++){const E=p[b-1],P=p[b],S=s(v,A,E,P);S!==null&&m.find(y=>y.t<=S.t+Number.EPSILON&&y.t>=S.t-Number.EPSILON)===void 0&&(m.push(S),M.push(new mt(S.x,S.y)))}}return M}function l(_,p,m){const M=new mt;p.getCenter(M);const x=[];return m.forEach(v=>{v.boundingBox.containsPoint(M)&&a(_,v.points).forEach(b=>{x.push({identifier:v.identifier,isCW:v.isCW,point:b})})}),x.sort((v,A)=>v.point.x-A.point.x),x}function c(_,p,m,M,x){(x==null||x==="")&&(x="nonzero");const v=new mt;_.boundingBox.getCenter(v);const A=[new mt(m,v.y),new mt(M,v.y)],b=l(A,_.boundingBox,p);b.sort((F,G)=>F.point.x-G.point.x);const E=[],P=[];b.forEach(F=>{F.identifier===_.identifier?E.push(F):P.push(F)});const S=E[0].point.x,y=[];let I=0;for(;I<P.length&&P[I].point.x<S;)y.length>0&&y[y.length-1]===P[I].identifier?y.pop():y.push(P[I].identifier),I++;if(y.push(_.identifier),x==="evenodd"){const F=y.length%2===0,G=y[y.length-2];return{identifier:_.identifier,isHole:F,for:G}}else if(x==="nonzero"){let F=!0,G=null,W=null;for(let j=0;j<y.length;j++){const X=y[j];F?(W=p[X].isCW,F=!1,G=X):W!==p[X].isCW&&(W=p[X].isCW,F=!0)}return{identifier:_.identifier,isHole:F,for:G}}else console.warn('fill-rule: "'+x+'" is currently not implemented.')}let u=999999999,h=-999999999,f=t.subPaths.map(_=>{const p=_.getPoints();let m=-999999999,M=999999999,x=-999999999,v=999999999;for(let A=0;A<p.length;A++){const b=p[A];b.y>m&&(m=b.y),b.y<M&&(M=b.y),b.x>x&&(x=b.x),b.x<v&&(v=b.x)}return h<=x&&(h=x+1),u>=v&&(u=v-1),{curves:_.curves,points:p,isCW:Di.isClockWise(p),identifier:-1,boundingBox:new z0(new mt(v,M),new mt(x,m))}});f=f.filter(_=>_.points.length>1);for(let _=0;_<f.length;_++)f[_].identifier=_;const d=f.map(_=>c(_,f,u,h,t.userData?t.userData.style.fillRule:void 0)),g=[];return f.forEach(_=>{if(!d[_.identifier].isHole){const m=new Vs;m.curves=_.curves,d.filter(x=>x.isHole&&x.for===_.identifier).forEach(x=>{const v=f[x.identifier],A=new Hs;A.curves=v.curves,m.holes.push(A)}),g.push(m)}}),g}static getStrokeStyle(t,e,n,i,s){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",s=s!==void 0?s:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:s}}static pointsToStroke(t,e,n,i){const s=[],o=[],a=[];if(Bl.pointsToStrokeWithBuffers(t,e,n,i,s,o,a)===0)return null;const l=new wn;return l.setAttribute("position",new Ve(s,3)),l.setAttribute("normal",new Ve(o,3)),l.setAttribute("uv",new Ve(a,2)),l}static pointsToStrokeWithBuffers(t,e,n,i,s,o,a,l){const c=new mt,u=new mt,h=new mt,f=new mt,d=new mt,g=new mt,_=new mt,p=new mt,m=new mt,M=new mt,x=new mt,v=new mt,A=new mt,b=new mt,E=new mt,P=new mt,S=new mt;n=n!==void 0?n:12,i=i!==void 0?i:.001,l=l!==void 0?l:0,t=Y(t);const y=t.length;if(y<2)return 0;const I=t[0].equals(t[y-1]);let F,G=t[0],W;const j=e.strokeWidth/2,X=1/(y-1);let J=0,H,ft,B,gt,It=!1,$t=0,O=l*3,U=l*2;L(t[0],t[1],c).multiplyScalar(j),p.copy(t[0]).sub(c),m.copy(t[0]).add(c),M.copy(p),x.copy(m);for(let T=1;T<y;T++){F=t[T],T===y-1?I?W=t[1]:W=void 0:W=t[T+1];const rt=c;if(L(G,F,rt),h.copy(rt).multiplyScalar(j),v.copy(F).sub(h),A.copy(F).add(h),H=J+X,ft=!1,W!==void 0){L(F,W,u),h.copy(u).multiplyScalar(j),b.copy(F).sub(h),E.copy(F).add(h),B=!0,h.subVectors(W,G),rt.dot(h)<0&&(B=!1),T===1&&(It=B),h.subVectors(W,F),h.normalize();const nt=Math.abs(rt.dot(h));if(nt>Number.EPSILON){const z=j/nt;h.multiplyScalar(-z),f.subVectors(F,G),d.copy(f).setLength(z).add(h),P.copy(d).negate();const k=d.length(),N=f.length();f.divideScalar(N),g.subVectors(W,F);const lt=g.length();switch(g.divideScalar(lt),f.dot(P)<N&&g.dot(P)<lt&&(ft=!0),S.copy(d).add(F),P.add(F),gt=!1,ft?B?(E.copy(P),A.copy(P)):(b.copy(P),v.copy(P)):ht(),e.strokeLineJoin){case"bevel":K(B,ft,H);break;case"round":dt(B,ft),B?et(F,v,b,H,0):et(F,E,A,H,1);break;case"miter":case"miter-clip":default:const D=j*e.strokeMiterLimit/k;if(D<1)if(e.strokeLineJoin!=="miter-clip"){K(B,ft,H);break}else dt(B,ft),B?(g.subVectors(S,v).multiplyScalar(D).add(v),_.subVectors(S,b).multiplyScalar(D).add(b),C(v,H,0),C(g,H,0),C(F,H,.5),C(F,H,.5),C(g,H,0),C(_,H,0),C(F,H,.5),C(_,H,0),C(b,H,0)):(g.subVectors(S,A).multiplyScalar(D).add(A),_.subVectors(S,E).multiplyScalar(D).add(E),C(A,H,1),C(g,H,1),C(F,H,.5),C(F,H,.5),C(g,H,1),C(_,H,1),C(F,H,.5),C(_,H,1),C(E,H,1));else ft?(B?(C(m,J,1),C(p,J,0),C(S,H,0),C(m,J,1),C(S,H,0),C(P,H,1)):(C(m,J,1),C(p,J,0),C(S,H,1),C(p,J,0),C(P,H,0),C(S,H,1)),B?b.copy(S):E.copy(S)):B?(C(v,H,0),C(S,H,0),C(F,H,.5),C(F,H,.5),C(S,H,0),C(b,H,0)):(C(A,H,1),C(S,H,1),C(F,H,.5),C(F,H,.5),C(S,H,1),C(E,H,1)),gt=!0;break}}else ht()}else ht();!I&&T===y-1&&tt(t[0],M,x,B,!0,J),J=H,G=F,p.copy(b),m.copy(E)}if(!I)tt(F,v,A,B,!1,H);else if(ft&&s){let T=S,rt=P;It!==B&&(T=P,rt=S),B?(gt||It)&&(rt.toArray(s,0*3),rt.toArray(s,3*3),gt&&T.toArray(s,1*3)):(gt||!It)&&(rt.toArray(s,1*3),rt.toArray(s,3*3),gt&&T.toArray(s,0*3))}return $t;function L(T,rt,nt){return nt.subVectors(rt,T),nt.set(-nt.y,nt.x).normalize()}function C(T,rt,nt){s&&(s[O]=T.x,s[O+1]=T.y,s[O+2]=0,o&&(o[O]=0,o[O+1]=0,o[O+2]=1),O+=3,a&&(a[U]=rt,a[U+1]=nt,U+=2)),$t+=3}function et(T,rt,nt,z,k){c.copy(rt).sub(T).normalize(),u.copy(nt).sub(T).normalize();let N=Math.PI;const lt=c.dot(u);Math.abs(lt)<1&&(N=Math.abs(Math.acos(lt))),N/=n,h.copy(rt);for(let D=0,w=n-1;D<w;D++)f.copy(h).rotateAround(T,N),C(h,z,k),C(f,z,k),C(T,z,.5),h.copy(f);C(f,z,k),C(nt,z,k),C(T,z,.5)}function ht(){C(m,J,1),C(p,J,0),C(v,H,0),C(m,J,1),C(v,H,0),C(A,H,1)}function K(T,rt,nt){rt?T?(C(m,J,1),C(p,J,0),C(v,H,0),C(m,J,1),C(v,H,0),C(P,H,1),C(v,nt,0),C(b,nt,0),C(P,nt,.5)):(C(m,J,1),C(p,J,0),C(A,H,1),C(p,J,0),C(P,H,0),C(A,H,1),C(A,nt,1),C(P,nt,0),C(E,nt,1)):T?(C(v,nt,0),C(b,nt,0),C(F,nt,.5)):(C(A,nt,1),C(E,nt,0),C(F,nt,.5))}function dt(T,rt){rt&&(T?(C(m,J,1),C(p,J,0),C(v,H,0),C(m,J,1),C(v,H,0),C(P,H,1),C(v,J,0),C(F,H,.5),C(P,H,1),C(F,H,.5),C(b,J,0),C(P,H,1)):(C(m,J,1),C(p,J,0),C(A,H,1),C(p,J,0),C(P,H,0),C(A,H,1),C(A,J,1),C(P,H,0),C(F,H,.5),C(F,H,.5),C(P,H,0),C(E,J,1)))}function tt(T,rt,nt,z,k,N){switch(e.strokeLineCap){case"round":k?et(T,nt,rt,N,.5):et(T,rt,nt,N,.5);break;case"square":if(k)c.subVectors(rt,T),u.set(c.y,-c.x),h.addVectors(c,u).add(T),f.subVectors(u,c).add(T),z?(h.toArray(s,1*3),f.toArray(s,0*3),f.toArray(s,3*3)):(h.toArray(s,1*3),a[3*2+1]===1?f.toArray(s,3*3):h.toArray(s,3*3),f.toArray(s,0*3));else{c.subVectors(nt,T),u.set(c.y,-c.x),h.addVectors(c,u).add(T),f.subVectors(u,c).add(T);const lt=s.length;z?(h.toArray(s,lt-1*3),f.toArray(s,lt-2*3),f.toArray(s,lt-4*3)):(f.toArray(s,lt-2*3),h.toArray(s,lt-1*3),f.toArray(s,lt-4*3))}break}}function Y(T){let rt=!1;for(let z=1,k=T.length-1;z<k;z++)if(T[z].distanceTo(T[z+1])<i){rt=!0;break}if(!rt)return T;const nt=[];nt.push(T[0]);for(let z=1,k=T.length-1;z<k;z++)T[z].distanceTo(T[z+1])>=i&&nt.push(T[z]);return nt.push(T[T.length-1]),nt}}}function _T(r,t,e){const{CUBE_SIZE:n,FIRST_CUBE_Z:i}=e,s=8,o=16,a=.075,l=200;let c,u=[],h=[],f=[],d=[];const g=(x,v,A,b)=>{const E=new Jn(x,x,x),P=new bh(E),S=[new Mi({color:16711680,transparent:!0,opacity:b.opacity,blending:bi}),new Mi({color:65280,transparent:!0,opacity:b.opacity,blending:bi}),new Mi({color:255,transparent:!0,opacity:b.opacity,blending:bi}),new Mi({color:65535,transparent:!0,opacity:b.opacity,blending:bi}),new Mi({color:16711935,transparent:!0,opacity:b.opacity,blending:bi}),new Mi({color:16776960,transparent:!0,opacity:b.opacity,blending:bi})],y=new vi,I=P.getAttribute("position").array,F=[];for(let j=0;j<I.length/3;j+=2)F.push(j,j+1);const G=Array(6).fill(null).map(()=>new wn),W=Array(6).fill(null).map(()=>[]);for(let j=0;j<F.length/2;j++){const X=j%6;W[X].push(F[j*2],F[j*2+1])}return G.forEach((j,X)=>{j.setIndex(W[X]),j.setAttribute("position",P.getAttribute("position"));const J=new Mh(j,S[X]);y.add(J)}),y.position.z=v,y.rotation.z=A,y};return(()=>{const A=.9/(o-1);for(let F=0;F<o;F++)h[F]=new Mi({transparent:!0,opacity:1-F*A});if(c=new vi,!c){console.error("introGroup failed to initialize");return}for(let F=0;F<o;F++){const G=n-F*s,W=g(G,0,0,h[F]),j=W.children.map(X=>X.material);d.push(j.map(X=>({material:X,originalColor:X.color.clone()}))),c.add(W)}c.position.z=i,r.add(c),u.push(c),f=h.map(F=>F.opacity);const b=Te.timeline({repeat:-1});b.to(c.rotation,{x:En.degToRad(360),duration:12,ease:"none"},0),b.to(c.rotation,{y:En.degToRad(360),duration:10,ease:"none"},0),b.to(c.rotation,{z:En.degToRad(360),duration:14,ease:"none"},0);let E=-1,P=0;const S=a*1e3,y=o*S,I=F=>{const G=F%y/S,W=Math.floor(G)%o;E!==-1&&F-P>=S&&(d[E].forEach(J=>{J.material.opacity=f[E],J.material.color.copy(J.originalColor)}),E=-1),E===-1&&W!==E&&(E=W,P=F,d[E].forEach(X=>{X.material.opacity=1,X.material.color.set(1,1,1)})),requestAnimationFrame(I)};requestAnimationFrame(I)})(),t.then(x=>{if(x){const v=p(x);r.add(v)}}),{introCubes:u};function p(x){const v=new vi,A=m(x);A.position.set(0,-36,0),v.add(A),M(E=>{v.add(E),Te.fromTo(A.material,{opacity:.3},{opacity:1,duration:3,ease:"linear",repeat:-1,yoyo:!0});const P=E.children.find(S=>S instanceof Ze&&S!==E.children[0]);if(P){const S=P.position.y;Te.to(P.position,{y:S+3,duration:1,ease:"easeOut",onComplete:()=>{P.position.y=S},repeat:-1})}}),v.position.x=0,v.position.y=-240;const b=i-o*s;return v.position.z=b+l,v}function m(x){const v=new Bm("SCROLL TO CONTINUE",{font:x,size:8,depth:0,curveSegments:12,bevelEnabled:!1});v.computeBoundingBox(),v.center();const A=new ns({color:16777215,transparent:!0,opacity:1});return new Ze(v,A)}function M(x){new Bl().load("/3D/mouse.svg",A=>{const b=A.paths;let E=null,P=null,S=new vi;if(b.forEach((y,I)=>{Bl.createShapes(y).forEach(G=>{const W=new Ah(G);W.computeBoundingBox();const j=new ns({color:16777215,transparent:!0,opacity:1,side:ai}),X=new Ze(W,j);X.scale.set(.05,.05,1),I===0?E=X:I===1&&(P=X)})}),E&&P){S.add(E),S.add(P);const I=(E.geometry.boundingBox.max.x-E.geometry.boundingBox.min.x)*E.scale.x/2;S.position.x=-I,S.rotation.x=Math.PI,x(S)}})}}function gT(r,t){const{CUBE_SIZE:e,CUBE_SPACING:n,FIRST_CUBE_Z:i}=t,s=[{title:"SUICIDE SQUAD: KILL THE JUSTICE LEAGUE",size:9},{title:"MORTAL KOMBAT 1",size:9},{title:"HARRY POTTER: HOGWARTS LEGACY",size:9},{title:"HARRY POTTER: QUIDDITCH CHAMPIONS",size:9},{title:"MULTIVERSUS",size:9},{title:"GOTHAM KNIGHTS",size:9},{title:"GAME OF THRONES: CONQUEST",size:9},{title:"MARVEL: STRIKE FORCE",size:9},{title:"LEAGUE OF LEGENDS: RIOT KING",size:9},{title:"LEAGUE OF LEGENDS: CONVERGENCE",size:9}],o=65535,a=16711935,l=En.degToRad(15),c=1e3;let u=[],h=null,f=null,d=!1;const g=(x,v,A)=>{const b=new Jn(x,x,x),E=new bh(b),P=new Mi({color:new Yt(o),transparent:!0,opacity:0}),S=new Mh(E,P),y=new vi;return y.add(S),y.position.z=v,y.rotation.z=A,y},_=(x,v,A,b,E,P)=>{const S=new Bm(x,{font:P,size:E,depth:0,curveSegments:12,bevelEnabled:!1});S.computeBoundingBox(),S.center();const y=new ns({color:16777215,transparent:!0,opacity:0,side:ai}),I=new Ze(S,y);return I.position.set(v,A,b),r.add(I),I},p=()=>new Promise(x=>{h=new qE,h.load("/fonts/Poppins_Regular.json",v=>{f=v,s.forEach((A,b)=>{const E=i-(b+1)*n,P=(b+1)*l,S=g(e,E,P);r.add(S),u.push(S),_(A.title,0,A.size+15,E,A.size,v)}),x()},void 0,v=>console.error("Error loading font:",v))}),m=()=>d?Promise.resolve({projectCubes:u,updateCubeColors:M,loadedFont:f}):p().then(()=>(d=!0,{projectCubes:u,updateCubeColors:M,loadedFont:f})),M=x=>{const v=x.position.z;let A=[];r.traverse(b=>{b instanceof Ze&&b.geometry&&b.geometry.type==="TextGeometry"&&A.push(b)}),u.forEach(b=>{const E=b.position.z,P=Math.abs(v-E);b.children.forEach(S=>{const y=S.material;if(P<=c){const I=1-P/c,F=En.lerp((o>>16&255)/255,(a>>16&255)/255,I),G=En.lerp((o>>8&255)/255,(a>>8&255)/255,I),W=En.lerp((o&255)/255,(a&255)/255,I);y.color.set(F,G,W),y.opacity=Math.min(1,I*2)}else y.opacity=0})}),A.forEach(b=>{const E=b.material,P=b.position.z,S=Math.abs(v-P);if(S<=1e3)if(S<=500)E.opacity=1;else{const I=(1e3-S)/500,F=1-Math.pow(1-I,2);E.opacity=F}else E.opacity=0})};return{getInitializedData:m,updateCubeColors:M}}function vT(r){let f,d;const g=()=>{f=new vi;const p=new Jn(100,100,100),m=new bh(p),M=32*60,x=new O0;x.copy(m),x.instanceCount=M;const v=new Mi({color:2236962,transparent:!0,fog:!0,vertexColors:!0}),A=new Float32Array(M*3),b=new Float32Array(M*3),E=new Float32Array(M*3),P=-3200/2+100/2,S=-500;for(let y=0;y<32;y++){const I=_(y);for(let F=0;F<60;F++){const G=y*60+F,W=P+y*100,j=S-F*100,X=En.randFloat(100,300),J=X/100,H=-600+X/2;A[G*3]=W,A[G*3+1]=H,A[G*3+2]=j,b[G*3]=1,b[G*3+1]=J,b[G*3+2]=1,E[G*3]=I,E[G*3+1]=I,E[G*3+2]=I}}x.setAttribute("instancePosition",new _c(A,3)),x.setAttribute("instanceScale",new _c(b,3)),x.setAttribute("color",new _c(E,3)),v.onBeforeCompile=y=>{y.vertexShader=`
                attribute vec3 instancePosition;
                attribute vec3 instanceScale;
                ${y.vertexShader}
            `.replace("#include <begin_vertex>",`#include <begin_vertex>
                transformed *= instanceScale; // Apply scale
                transformed += instancePosition; // Then translate`)},d=new Mh(x,v),x.boundingBox=new ho(new Z(-1550,-600,-6500),new Z(1550,-300,-500)),x.boundingSphere=new da(new Z(0,-450,-3500),6500),f.add(d),r.add(f)},_=p=>{if(p<10)return .05+p*.10555555555555556;if(p>=22){const m=31-p,M=(1-.05)/9;return .05+m*M}return 1};return g(),{cityGroup:f,buildingLines:[d]}}Te.registerPlugin(Qt);function xT(r,t,e,n,i,s){const{CUBE_SIZE:o,CUBE_SPACING:a,FIRST_CUBE_Z:l}=s,c=n.length-1,u=Math.min(c,10),g=l-a-(u-1)*a-o/2,_=Math.abs(g),m=Te.timeline({scrollTrigger:{trigger:e.value,start:"top top",end:`+=${_+100}`,scrub:1,pin:!0,pinSpacing:!0,anticipatePin:1,refreshPriority:1,onLeaveBack:()=>{n.forEach(M=>{M.children.forEach(x=>{const v=x.material;Te.to(v,{opacity:0,duration:.5,ease:"power1.in"})})})}}});return m.to(t.position,{z:g,ease:"none",duration:1,onUpdate:()=>{t.lookAt(0,0,g),i(t)}}),m}const Yc=250,Zd=500,qc=-500,yT=lh({__name:"HallwayEngine",setup(r){Te.registerPlugin(Qt);const t=$o(null),e=$o(null);let n,i,s,o,a;const l=()=>{const f=t.value?t.value.getBoundingClientRect().width:window.innerWidth,d=window.innerHeight;s.setSize(f,d),i.aspect=f/d,i.updateProjectionMatrix()},c=()=>{if(n=new yh,n.background=new Yt(0),n.fog=new xh(0,700,4e3),i=new Xn(90,window.innerWidth/window.innerHeight,1,1e4),i.position.set(0,0,0),i.lookAt(0,0,0),s=new Rh({antialias:!0}),s.setPixelRatio(window.devicePixelRatio),l(),t.value)t.value.appendChild(s.domElement);else return;a=new Zo,a.dom.style.position="fixed",a.dom.style.top="0px",a.dom.style.left="0px",a.dom.style.zIndex="1000",document.body.appendChild(a.dom),vT(n),gT(n,{CUBE_SIZE:Yc,CUBE_SPACING:Zd,FIRST_CUBE_Z:qc}).getInitializedData().then(({projectCubes:f,updateCubeColors:d,loadedFont:g})=>{const{introCubes:_}=_T(n,Promise.resolve(g),{CUBE_SIZE:Yc,FIRST_CUBE_Z:qc}),p=[..._,...f];xT(n,i,e,p,d,{CUBE_SIZE:Yc,CUBE_SPACING:Zd,FIRST_CUBE_Z:qc}),u()})},u=()=>{o=requestAnimationFrame(u),s&&s.render(n,i),Qt.update(),a.update()};ch(()=>{c(),window.addEventListener("resize",h)}),$d(()=>{window.removeEventListener("resize",h),cancelAnimationFrame(o),Qt.getAll().forEach(f=>f.kill()),s.dispose(),n.clear(),document.body.removeChild(a.dom)});const h=()=>{l(),Qt.refresh()};return(f,d)=>(Ko(),Jo("section",{ref_key:"wrapper",ref:e,class:"wrapper"},[_i("div",{ref_key:"tunnelWrapper",ref:t,class:"tunnel-wrapper"},null,512)],512))}}),ST=Jd(yT,[["__scopeId","data-v-47462d6a"]]),MT={class:"bg-gray-50 text-black/50 dark:bg-black dark:text-white/50"},ET={class:"relative z-10 flex flex-col items-center justify-center pt-32 -mb-48"},TT={class:"overflow-hidden"},bT={class:"flex justify-center items-center"},wT={class:"flex justify-center items-center -mt-24 mix-blend-screen"},RT={__name:"Welcome",props:{canLogin:{type:Boolean},canRegister:{type:Boolean},laravelVersion:{type:String,required:!0},phpVersion:{type:String,required:!0}},setup(r){return(t,e)=>(Ko(),Jo(d_,null,[_o(h_(f_),{title:"Welcome"}),_i("div",MT,[_i("nav",ET,[_o(FE)]),_i("div",TT,[_o(ST)]),_i("div",bT,[_o(Rd,{"particle-width":20,"particle-height":20})]),_i("div",wT,[_o(Rd,{"particle-width":15,"particle-height":160})]),e[0]||(e[0]=_i("div",{class:"relative min-h-screen flex flex-col items-center justify-center"},[_i("div",{class:"relative w-full max-w-2xl px-2 lg:max-w-7xl"},[_i("footer",{class:"py-16 text-center text-xs text-black dark:text-white/70"}," © Copyright 2025 From the Lab. All rights reserved. ")])],-1))])],64))}};export{RT as default};
