import{I as Wl,d as jo,x as mh,e as Qo,o as ta,a as vi,p as v_,D as x_,y as ip,b as xo,u as y_,m as S_,F as M_}from"./app-DapvrGy-.js";import{_ as rp}from"./_plugin-vue_export-helper-DlAUqK2U.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _h="173",T_=0,lf=1,E_=2,sp=1,b_=2,Xi=3,Tr=0,Dn=1,Zn=2,ji=0,zs=1,xi=2,cf=3,uf=4,w_=5,Gr=100,A_=101,C_=102,R_=103,P_=104,D_=200,L_=201,I_=202,U_=203,tu=204,eu=205,N_=206,O_=207,F_=208,B_=209,z_=210,k_=211,H_=212,V_=213,G_=214,nu=0,iu=1,ru=2,Ks=3,su=4,ou=5,au=6,lu=7,gh=0,W_=1,X_=2,xr=0,Y_=1,q_=2,Z_=3,$_=4,J_=5,K_=6,j_=7,op=300,js=301,Qs=302,cu=303,uu=304,Xl=306,hu=1e3,Xr=1001,fu=1002,Si=1003,Q_=1004,xa=1005,Ri=1006,tc=1007,Yr=1008,nr=1009,ap=1010,lp=1011,ea=1012,vh=1013,ns=1014,$i=1015,Qi=1016,xh=1017,yh=1018,to=1020,cp=35902,up=1021,hp=1022,yi=1023,fp=1024,dp=1025,ks=1026,eo=1027,pp=1028,Sh=1029,mp=1030,Mh=1031,Th=1033,cl=33776,ul=33777,hl=33778,fl=33779,du=35840,pu=35841,mu=35842,_u=35843,gu=36196,vu=37492,xu=37496,yu=37808,Su=37809,Mu=37810,Tu=37811,Eu=37812,bu=37813,wu=37814,Au=37815,Cu=37816,Ru=37817,Pu=37818,Du=37819,Lu=37820,Iu=37821,dl=36492,Uu=36494,Nu=36495,_p=36283,Ou=36284,Fu=36285,Bu=36286,tg=3200,eg=3201,gp=0,ng=1,dr="",Wn="srgb",no="srgb-linear",El="linear",_e="srgb",ds=7680,hf=519,ig=512,rg=513,sg=514,vp=515,og=516,ag=517,lg=518,cg=519,ff=35044,df="300 es",Ji=2e3,bl=2001;class ho{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pf=1234567;const Hs=Math.PI/180,na=180/Math.PI;function cs(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[r&255]+ln[r>>8&255]+ln[r>>16&255]+ln[r>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function oe(r,t,e){return Math.max(t,Math.min(e,r))}function Eh(r,t){return(r%t+t)%t}function ug(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function hg(r,t,e){return r!==t?(e-r)/(t-r):0}function Oo(r,t,e){return(1-e)*r+e*t}function fg(r,t,e,n){return Oo(r,t,1-Math.exp(-e*n))}function dg(r,t=1){return t-Math.abs(Eh(r,t*2)-t)}function pg(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function mg(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function _g(r,t){return r+Math.floor(Math.random()*(t-r+1))}function gg(r,t){return r+Math.random()*(t-r)}function vg(r){return r*(.5-Math.random())}function xg(r){r!==void 0&&(pf=r);let t=pf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yg(r){return r*Hs}function Sg(r){return r*na}function Mg(r){return(r&r-1)===0&&r!==0}function Tg(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Eg(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function bg(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),h=s((t-n)/2),f=o((t-n)/2),d=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ps(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function xn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const $e={DEG2RAD:Hs,RAD2DEG:na,generateUUID:cs,clamp:oe,euclideanModulo:Eh,mapLinear:ug,inverseLerp:hg,lerp:Oo,damp:fg,pingpong:dg,smoothstep:pg,smootherstep:mg,randInt:_g,randFloat:gg,randFloatSpread:vg,seededRandom:xg,degToRad:yg,radToDeg:Sg,isPowerOfTwo:Mg,ceilPowerOfTwo:Tg,floorPowerOfTwo:Eg,setQuaternionFromProperEuler:bg,normalize:xn,denormalize:Ps};class mt{constructor(t=0,e=0){mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,n,i,s,o,a,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],M=i[1],x=i[4],v=i[7],b=i[2],w=i[5],T=i[8];return s[0]=o*_+a*M+l*b,s[3]=o*p+a*x+l*w,s[6]=o*m+a*v+l*T,s[1]=c*_+u*M+h*b,s[4]=c*p+u*x+h*w,s[7]=c*m+u*v+h*T,s[2]=f*_+d*M+g*b,s[5]=f*p+d*x+g*w,s[8]=f*m+d*v+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=e*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ec.makeScale(t,e)),this}rotate(t){return this.premultiply(ec.makeRotation(-t)),this}translate(t,e){return this.premultiply(ec.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ec=new $t;function xp(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ia(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wg(){const r=ia("canvas");return r.style.display="block",r}const mf={};function Ds(r){r in mf||(mf[r]=!0,console.warn(r))}function Ag(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Cg(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Rg(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const _f=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gf=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pg(){const r={enabled:!0,workingColorSpace:no,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===_e&&(i.r=tr(i.r),i.g=tr(i.g),i.b=tr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(i.r=Vs(i.r),i.g=Vs(i.g),i.b=Vs(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===dr?El:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[no]:{primaries:t,whitePoint:n,transfer:El,toXYZ:_f,fromXYZ:gf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:_f,fromXYZ:gf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),r}const he=Pg();function tr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ps;class Dg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ps===void 0&&(ps=ia("canvas")),ps.width=t.width,ps.height=t.height;const n=ps.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ps}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ia("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=tr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(tr(e[n]/255)*255):e[n]=tr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Lg=0;class yp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=cs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(nc(i[o].image)):s.push(nc(i[o]))}else s=nc(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function nc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Dg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ig=0;class Cn extends ho{constructor(t=Cn.DEFAULT_IMAGE,e=Cn.DEFAULT_MAPPING,n=Xr,i=Xr,s=Ri,o=Yr,a=yi,l=nr,c=Cn.DEFAULT_ANISOTROPY,u=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=cs(),this.name="",this.source=new yp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==op)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hu:t.x=t.x-Math.floor(t.x);break;case Xr:t.x=t.x<0?0:1;break;case fu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hu:t.y=t.y-Math.floor(t.y);break;case Xr:t.y=t.y<0?0:1;break;case fu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=op;Cn.DEFAULT_ANISOTROPY=1;class Ie{constructor(t=0,e=0,n=0,i=1){Ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(d+1)/2,b=(m+1)/2,w=(u+f)/4,T=(h+_)/4,R=(g+p)/4;return x>v&&x>b?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=w/n,s=T/n):v>b?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=R/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=T/s,i=R/s),this.set(n,i,s,e),this}let M=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ug extends ho{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Cn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new yp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends Ug{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Sp extends Cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Si,this.minFilter=Si,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ng extends Cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Si,this.minFilter=Si,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _a{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let p=1-a;const m=l*f+c*d+u*g+h*_,M=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const b=Math.sqrt(x),w=Math.atan2(b,m*M);p=Math.sin(p*w)/b,a=Math.sin(a*w)/b}const v=a*M;if(l=l*p+f*v,c=c*p+d*v,u=u*p+g*v,h=h*p+_*v,p===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-a*d,t[e+2]=c*g+u*d+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,e=0,n=0){$.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ic.copy(this).projectOnVector(t),this.sub(ic)}reflect(t){return this.sub(ic.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ic=new $,vf=new _a;class fo{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pi):pi.fromBufferAttribute(s,o),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ya.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ya.copy(n.boundingBox)),ya.applyMatrix4(t.matrixWorld),this.union(ya)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yo),Sa.subVectors(this.max,yo),ms.subVectors(t.a,yo),_s.subVectors(t.b,yo),gs.subVectors(t.c,yo),sr.subVectors(_s,ms),or.subVectors(gs,_s),Rr.subVectors(ms,gs);let e=[0,-sr.z,sr.y,0,-or.z,or.y,0,-Rr.z,Rr.y,sr.z,0,-sr.x,or.z,0,-or.x,Rr.z,0,-Rr.x,-sr.y,sr.x,0,-or.y,or.x,0,-Rr.y,Rr.x,0];return!rc(e,ms,_s,gs,Sa)||(e=[1,0,0,0,1,0,0,0,1],!rc(e,ms,_s,gs,Sa))?!1:(Ma.crossVectors(sr,or),e=[Ma.x,Ma.y,Ma.z],rc(e,ms,_s,gs,Sa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const zi=[new $,new $,new $,new $,new $,new $,new $,new $],pi=new $,ya=new fo,ms=new $,_s=new $,gs=new $,sr=new $,or=new $,Rr=new $,yo=new $,Sa=new $,Ma=new $,Pr=new $;function rc(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Pr.fromArray(r,s);const a=i.x*Math.abs(Pr.x)+i.y*Math.abs(Pr.y)+i.z*Math.abs(Pr.z),l=t.dot(Pr),c=e.dot(Pr),u=n.dot(Pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Og=new fo,So=new $,sc=new $;class po{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Og.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;So.subVectors(t,this.center);const e=So.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(So,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(So.copy(t.center).add(sc)),this.expandByPoint(So.copy(t.center).sub(sc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new $,oc=new $,Ta=new $,ar=new $,ac=new $,Ea=new $,lc=new $;class bh{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ki)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ki.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ki.copy(this.origin).addScaledVector(this.direction,e),ki.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){oc.copy(t).add(e).multiplyScalar(.5),Ta.copy(e).sub(t).normalize(),ar.copy(this.origin).sub(oc);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ta),a=ar.dot(this.direction),l=-ar.dot(Ta),c=ar.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(oc).addScaledVector(Ta,f),d}intersectSphere(t,e){ki.subVectors(t.center,this.origin);const n=ki.dot(this.direction),i=ki.dot(ki)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ki)!==null}intersectTriangle(t,e,n,i,s){ac.subVectors(e,t),Ea.subVectors(n,t),lc.crossVectors(ac,Ea);let o=this.direction.dot(lc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ar.subVectors(this.origin,t);const l=a*this.direction.dot(Ea.crossVectors(ar,Ea));if(l<0)return null;const c=a*this.direction.dot(ac.cross(ar));if(c<0||l+c>o)return null;const u=-a*ar.dot(lc);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ee{constructor(t,e,n,i,s,o,a,l,c,u,h,f,d,g,_,p){Ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,h,f,d,g,_,p)}set(t,e,n,i,s,o,a,l,c,u,h,f,d,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/vs.setFromMatrixColumn(t,0).length(),s=1/vs.setFromMatrixColumn(t,1).length(),o=1/vs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fg,t,Bg)}lookAt(t,e,n){const i=this.elements;return kn.subVectors(t,e),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),lr.crossVectors(n,kn),lr.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),lr.crossVectors(n,kn)),lr.normalize(),ba.crossVectors(kn,lr),i[0]=lr.x,i[4]=ba.x,i[8]=kn.x,i[1]=lr.y,i[5]=ba.y,i[9]=kn.y,i[2]=lr.z,i[6]=ba.z,i[10]=kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],M=n[3],x=n[7],v=n[11],b=n[15],w=i[0],T=i[4],R=i[8],S=i[12],y=i[1],I=i[5],B=i[9],V=i[13],Y=i[2],Q=i[6],G=i[10],X=i[14],z=i[3],ht=i[7],F=i[11],_t=i[15];return s[0]=o*w+a*y+l*Y+c*z,s[4]=o*T+a*I+l*Q+c*ht,s[8]=o*R+a*B+l*G+c*F,s[12]=o*S+a*V+l*X+c*_t,s[1]=u*w+h*y+f*Y+d*z,s[5]=u*T+h*I+f*Q+d*ht,s[9]=u*R+h*B+f*G+d*F,s[13]=u*S+h*V+f*X+d*_t,s[2]=g*w+_*y+p*Y+m*z,s[6]=g*T+_*I+p*Q+m*ht,s[10]=g*R+_*B+p*G+m*F,s[14]=g*S+_*V+p*X+m*_t,s[3]=M*w+x*y+v*Y+b*z,s[7]=M*T+x*I+v*Q+b*ht,s[11]=M*R+x*B+v*G+b*F,s[15]=M*S+x*V+v*X+b*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+_*(+e*l*d-e*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+p*(+e*c*h-e*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+m*(-i*a*u-e*l*h+e*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],M=h*p*c-_*f*c+_*l*d-a*p*d-h*l*m+a*f*m,x=g*f*c-u*p*c-g*l*d+o*p*d+u*l*m-o*f*m,v=u*_*c-g*h*c+g*a*d-o*_*d-u*a*m+o*h*m,b=g*h*l-u*_*l-g*a*f+o*_*f+u*a*p-o*h*p,w=e*M+n*x+i*v+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=M*T,t[1]=(_*f*s-h*p*s-_*i*d+n*p*d+h*i*m-n*f*m)*T,t[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*m+n*l*m)*T,t[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*T,t[4]=x*T,t[5]=(u*p*s-g*f*s+g*i*d-e*p*d-u*i*m+e*f*m)*T,t[6]=(g*l*s-o*p*s-g*i*c+e*p*c+o*i*m-e*l*m)*T,t[7]=(o*f*s-u*l*s+u*i*c-e*f*c-o*i*d+e*l*d)*T,t[8]=v*T,t[9]=(g*h*s-u*_*s-g*n*d+e*_*d+u*n*m-e*h*m)*T,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*m+e*a*m)*T,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*d-e*a*d)*T,t[12]=b*T,t[13]=(u*_*i-g*h*i+g*n*f-e*_*f-u*n*p+e*h*p)*T,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*p-e*a*p)*T,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*f+e*a*f)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,p=o*h,m=a*h,M=l*c,x=l*u,v=l*h,b=n.x,w=n.y,T=n.z;return i[0]=(1-(_+m))*b,i[1]=(d+v)*b,i[2]=(g-x)*b,i[3]=0,i[4]=(d-v)*w,i[5]=(1-(f+m))*w,i[6]=(p+M)*w,i[7]=0,i[8]=(g+x)*T,i[9]=(p-M)*T,i[10]=(1-(f+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=vs.set(i[0],i[1],i[2]).length();const o=vs.set(i[4],i[5],i[6]).length(),a=vs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],mi.copy(this);const c=1/s,u=1/o,h=1/a;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=u,mi.elements[5]*=u,mi.elements[6]*=u,mi.elements[8]*=h,mi.elements[9]*=h,mi.elements[10]*=h,e.setFromRotationMatrix(mi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Ji){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let d,g;if(a===Ji)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===bl)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Ji){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(o-s),f=(e+t)*c,d=(n+i)*u;let g,_;if(a===Ji)g=(o+s)*h,_=-2*h;else if(a===bl)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const vs=new $,mi=new Ee,Fg=new $(0,0,0),Bg=new $(1,1,1),lr=new $,ba=new $,kn=new $,xf=new Ee,yf=new _a;class Oi{constructor(t=0,e=0,n=0,i=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yf.setFromEuler(this),this.setFromQuaternion(yf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class Mp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zg=0;const Sf=new $,xs=new _a,Hi=new Ee,wa=new $,Mo=new $,kg=new $,Hg=new _a,Mf=new $(1,0,0),Tf=new $(0,1,0),Ef=new $(0,0,1),bf={type:"added"},Vg={type:"removed"},ys={type:"childadded",child:null},cc={type:"childremoved",child:null};class en extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const t=new $,e=new Oi,n=new _a,i=new $(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ee},normalMatrix:{value:new $t}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(Mf,t)}rotateY(t){return this.rotateOnAxis(Tf,t)}rotateZ(t){return this.rotateOnAxis(Ef,t)}translateOnAxis(t,e){return Sf.copy(t).applyQuaternion(this.quaternion),this.position.add(Sf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mf,t)}translateY(t){return this.translateOnAxis(Tf,t)}translateZ(t){return this.translateOnAxis(Ef,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wa.copy(t):wa.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Mo,wa,this.up):Hi.lookAt(wa,Mo,this.up),this.quaternion.setFromRotationMatrix(Hi),i&&(Hi.extractRotation(i.matrixWorld),xs.setFromRotationMatrix(Hi),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bf),ys.child=t,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vg),cc.child=t,this.dispatchEvent(cc),cc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bf),ys.child=t,this.dispatchEvent(ys),ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,t,kg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,Hg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}en.DEFAULT_UP=new $(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new $,Vi=new $,uc=new $,Gi=new $,Ss=new $,Ms=new $,wf=new $,hc=new $,fc=new $,dc=new $,pc=new Ie,mc=new Ie,_c=new Ie;class ci{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),_i.subVectors(t,e),i.cross(_i);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){_i.subVectors(i,e),Vi.subVectors(n,e),uc.subVectors(t,e);const o=_i.dot(_i),a=_i.dot(Vi),l=_i.dot(uc),c=Vi.dot(Vi),u=Vi.dot(uc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gi.x),l.addScaledVector(o,Gi.y),l.addScaledVector(a,Gi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return pc.setScalar(0),mc.setScalar(0),_c.setScalar(0),pc.fromBufferAttribute(t,e),mc.fromBufferAttribute(t,n),_c.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(pc,s.x),o.addScaledVector(mc,s.y),o.addScaledVector(_c,s.z),o}static isFrontFacing(t,e,n,i){return _i.subVectors(n,e),Vi.subVectors(t,e),_i.cross(Vi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _i.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),_i.cross(Vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ci.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return ci.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Ss.subVectors(i,n),Ms.subVectors(s,n),hc.subVectors(t,n);const l=Ss.dot(hc),c=Ms.dot(hc);if(l<=0&&c<=0)return e.copy(n);fc.subVectors(t,i);const u=Ss.dot(fc),h=Ms.dot(fc);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Ss,o);dc.subVectors(t,s);const d=Ss.dot(dc),g=Ms.dot(dc);if(g>=0&&d<=g)return e.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ms,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return wf.subVectors(s,i),a=(h-u)/(h-u+(d-g)),e.copy(i).addScaledVector(wf,a);const m=1/(p+_+f);return o=_*m,a=f*m,e.copy(n).addScaledVector(Ss,o).addScaledVector(Ms,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function gc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=Eh(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=gc(o,s,t+1/3),this.g=gc(o,s,t),this.b=gc(o,s,t-1/3)}return he.toWorkingColorSpace(this,i),this}setStyle(t,e=Wn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Wn){const n=Tp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}copyLinearToSRGB(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Wn){return he.fromWorkingColorSpace(cn.copy(this),t),Math.round(oe(cn.r*255,0,255))*65536+Math.round(oe(cn.g*255,0,255))*256+Math.round(oe(cn.b*255,0,255))}getHexString(t=Wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(cn.copy(this),e);const n=cn.r,i=cn.g,s=cn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=Wn){he.fromWorkingColorSpace(cn.copy(this),t);const e=cn.r,n=cn.g,i=cn.b;return t!==Wn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(cr),this.setHSL(cr.h+t,cr.s+e,cr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(cr),t.getHSL(Aa);const n=Oo(cr.h,Aa.h,e),i=Oo(cr.s,Aa.s,e),s=Oo(cr.l,Aa.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new Xt;Xt.NAMES=Tp;let Gg=0;class us extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=zs,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tu,this.blendDst=eu,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(n.blending=this.blending),this.side!==Tr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==tu&&(n.blendSrc=this.blendSrc),this.blendDst!==eu&&(n.blendDst=this.blendDst),this.blendEquation!==Gr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ti extends us{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ze=new $,Ca=new mt;let Wg=0;class jn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ff,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ca.fromBufferAttribute(this,e),Ca.applyMatrix3(t),this.setXY(e,Ca.x,Ca.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ps(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ps(e,this.array)),e}setX(t,e){return this.normalized&&(e=xn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ps(e,this.array)),e}setY(t,e){return this.normalized&&(e=xn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ps(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ps(e,this.array)),e}setW(t,e){return this.normalized&&(e=xn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xn(e,this.array),n=xn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=xn(e,this.array),n=xn(n,this.array),i=xn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=xn(e,this.array),n=xn(n,this.array),i=xn(i,this.array),s=xn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ff&&(t.usage=this.usage),t}}class Ep extends jn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bp extends jn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ge extends jn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Xg=0;const si=new Ee,vc=new en,Ts=new $,Hn=new fo,To=new fo,je=new $;class an extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xp(t)?bp:Ep)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $t().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,e,n){return si.makeTranslation(t,e,n),this.applyMatrix4(si),this}scale(t,e,n){return si.makeScale(t,e,n),this.applyMatrix4(si),this}lookAt(t){return vc.lookAt(t),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ge(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Hn.setFromBufferAttribute(s),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new po);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];To.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(Hn.min,To.min),Hn.expandByPoint(je),je.addVectors(Hn.max,To.max),Hn.expandByPoint(je)):(Hn.expandByPoint(To.min),Hn.expandByPoint(To.max))}Hn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)je.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(je));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)je.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(t,c),je.add(Ts)),i=Math.max(i,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new $,l[R]=new $;const c=new $,u=new $,h=new $,f=new mt,d=new mt,g=new mt,_=new $,p=new $;function m(R,S,y){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,S),g.fromBufferAttribute(s,y),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(I),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),a[R].add(_),a[S].add(_),a[y].add(_),l[R].add(p),l[S].add(p),l[y].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,S=M.length;R<S;++R){const y=M[R],I=y.start,B=y.count;for(let V=I,Y=I+B;V<Y;V+=3)m(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const x=new $,v=new $,b=new $,w=new $;function T(R){b.fromBufferAttribute(i,R),w.copy(b);const S=a[R];x.copy(S),x.sub(b.multiplyScalar(b.dot(S))).normalize(),v.crossVectors(w,S);const I=v.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,I)}for(let R=0,S=M.length;R<S;++R){const y=M[R],I=y.start,B=y.count;for(let V=I,Y=I+B;V<Y;V+=3)T(t.getX(V+0)),T(t.getX(V+1)),T(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new $,s=new $,o=new $,a=new $,l=new $,c=new $,u=new $,h=new $;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new jn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new an,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Af=new Ee,Dr=new bh,Ra=new po,Cf=new $,Pa=new $,Da=new $,La=new $,xc=new $,Ia=new $,Rf=new $,Ua=new $;class Pe extends en{constructor(t=new an,e=new Ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Ia.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(xc.fromBufferAttribute(h,t),o?Ia.addScaledVector(xc,u):Ia.addScaledVector(xc.sub(e),u))}e.add(Ia)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),Dr.copy(t.ray).recast(t.near),!(Ra.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(Ra,Cf)===null||Dr.origin.distanceToSquared(Cf)>(t.far-t.near)**2))&&(Af.copy(s).invert(),Dr.copy(t.ray).applyMatrix4(Af),!(n.boundingBox!==null&&Dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Dr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],M=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=M,b=x;v<b;v+=3){const w=a.getX(v),T=a.getX(v+1),R=a.getX(v+2);i=Na(this,m,t,n,c,u,h,w,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const M=a.getX(p),x=a.getX(p+1),v=a.getX(p+2);i=Na(this,o,t,n,c,u,h,M,x,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],M=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=M,b=x;v<b;v+=3){const w=v,T=v+1,R=v+2;i=Na(this,m,t,n,c,u,h,w,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const M=p,x=p+1,v=p+2;i=Na(this,o,t,n,c,u,h,M,x,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Yg(r,t,e,n,i,s,o,a){let l;if(t.side===Dn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Tr,a),l===null)return null;Ua.copy(a),Ua.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ua);return c<e.near||c>e.far?null:{distance:c,point:Ua.clone(),object:r}}function Na(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Pa),r.getVertexPosition(l,Da),r.getVertexPosition(c,La);const u=Yg(r,t,e,n,Pa,Da,La,Rf);if(u){const h=new $;ci.getBarycoord(Rf,Pa,Da,La,h),i&&(u.uv=ci.getInterpolatedAttribute(i,a,l,c,h,new mt)),s&&(u.uv1=ci.getInterpolatedAttribute(s,a,l,c,h,new mt)),o&&(u.normal=ci.getInterpolatedAttribute(o,a,l,c,h,new $),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new $,materialIndex:0};ci.getNormal(Pa,Da,La,f.normal),u.face=f,u.barycoord=h}return u}class Ln extends an{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(u,3)),this.setAttribute("uv",new Ge(h,2));function g(_,p,m,M,x,v,b,w,T,R,S){const y=v/T,I=b/R,B=v/2,V=b/2,Y=w/2,Q=T+1,G=R+1;let X=0,z=0;const ht=new $;for(let F=0;F<G;F++){const _t=F*I-V;for(let Rt=0;Rt<Q;Rt++){const Vt=Rt*y-B;ht[_]=Vt*M,ht[p]=_t*x,ht[m]=Y,c.push(ht.x,ht.y,ht.z),ht[_]=0,ht[p]=0,ht[m]=w>0?1:-1,u.push(ht.x,ht.y,ht.z),h.push(Rt/T),h.push(1-F/R),X+=1}}for(let F=0;F<R;F++)for(let _t=0;_t<T;_t++){const Rt=f+_t+Q*F,Vt=f+_t+Q*(F+1),N=f+(_t+1)+Q*(F+1),U=f+(_t+1)+Q*F;l.push(Rt,Vt,U),l.push(Vt,N,U),z+=6}a.addGroup(d,z,S),d+=z,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ln(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function io(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Sn(r){const t={};for(let e=0;e<r.length;e++){const n=io(r[e]);for(const i in n)t[i]=n[i]}return t}function qg(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function wp(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const wl={clone:io,merge:Sn};var Zg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$g=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends us{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zg,this.fragmentShader=$g,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=io(t.uniforms),this.uniformsGroups=qg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ap extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Ji}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ur=new $,Pf=new mt,Df=new mt;class Yn extends Ap{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=na*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return na*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ur.x,ur.y).multiplyScalar(-t/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-t/ur.z)}getViewSize(t,e){return this.getViewBounds(t,Pf,Df),e.subVectors(Df,Pf)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Es=-90,bs=1;class Jg extends en{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Yn(Es,bs,t,e);i.layers=this.layers,this.add(i);const s=new Yn(Es,bs,t,e);s.layers=this.layers,this.add(s);const o=new Yn(Es,bs,t,e);o.layers=this.layers,this.add(o);const a=new Yn(Es,bs,t,e);a.layers=this.layers,this.add(a);const l=new Yn(Es,bs,t,e);l.layers=this.layers,this.add(l);const c=new Yn(Es,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Ji)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Cp extends Cn{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:js,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kg extends Mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Cp(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ri}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ln(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:io(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dn,blending:ji});s.uniforms.tEquirect.value=e;const o=new Pe(i,s),a=e.minFilter;return e.minFilter===Yr&&(e.minFilter=Ri),new Jg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}class ui extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jg={type:"move"};class yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ui;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class wh{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xt(t),this.near=e,this.far=n}clone(){return new wh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ah extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Sc extends jn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Mc=new $,Qg=new $,t0=new $t;class Br{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Mc.subVectors(n,e).cross(Qg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Mc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||t0.getNormalMatrix(t),i=this.coplanarPoint(Mc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new po,Oa=new $;class Ch{constructor(t=new Br,e=new Br,n=new Br,i=new Br,s=new Br,o=new Br){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ji){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],p=i[11],m=i[12],M=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-s,f-c,p-d,v-m).normalize(),n[1].setComponents(l+s,f+c,p+d,v+m).normalize(),n[2].setComponents(l+o,f+u,p+g,v+M).normalize(),n[3].setComponents(l-o,f-u,p-g,v-M).normalize(),n[4].setComponents(l-a,f-h,p-_,v-x).normalize(),e===Ji)n[5].setComponents(l+a,f+h,p+_,v+x).normalize();else if(e===bl)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(t){return Lr.center.set(0,0,0),Lr.radius=.7071067811865476,Lr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Oa.x=i.normal.x>0?t.max.x:t.min.x,Oa.y=i.normal.y>0?t.max.y:t.min.y,Oa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ei extends us{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Al=new $,Cl=new $,Lf=new Ee,Eo=new bh,Fa=new po,Tc=new $,If=new $;class e0 extends en{constructor(t=new an,e=new Ei){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Al.fromBufferAttribute(e,i-1),Cl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Al.distanceTo(Cl);t.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(i),Fa.radius+=s,t.ray.intersectsSphere(Fa)===!1)return;Lf.copy(i).invert(),Eo.copy(t.ray).applyMatrix4(Lf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=c){const m=u.getX(_),M=u.getX(_+1),x=Ba(this,t,Eo,l,m,M,_);x&&e.push(x)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(d),m=Ba(this,t,Eo,l,_,p,g-1);m&&e.push(m)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=c){const m=Ba(this,t,Eo,l,_,_+1,_);m&&e.push(m)}if(this.isLineLoop){const _=Ba(this,t,Eo,l,g-1,d,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ba(r,t,e,n,i,s,o){const a=r.geometry.attributes.position;if(Al.fromBufferAttribute(a,i),Cl.fromBufferAttribute(a,s),e.distanceSqToSegment(Al,Cl,Tc,If)>n)return;Tc.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Tc);if(!(c<t.near||c>t.far))return{distance:c,point:If.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Uf=new $,Nf=new $;class Rl extends e0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Uf.fromBufferAttribute(e,i),Nf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Uf.distanceTo(Nf);t.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class n0 extends us{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Of=new Ee,zu=new bh,za=new po,ka=new $;class i0 extends en{constructor(t=new an,e=new n0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(i),za.radius+=s,t.ray.intersectsSphere(za)===!1)return;Of.copy(i).invert(),zu.copy(t.ray).applyMatrix4(Of);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const p=c.getX(g);ka.fromBufferAttribute(h,p),Ff(ka,p,l,i,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)ka.fromBufferAttribute(h,g),Ff(ka,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ff(r,t,e,n,i,s,o){const a=zu.distanceSqToPoint(r);if(a<e){const l=new $;zu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Rp extends Cn{constructor(t,e,n,i,s,o,a,l,c,u=ks){if(u!==ks&&u!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ks&&(n=ns),n===void 0&&u===eo&&(n=to),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Si,this.minFilter=l!==void 0?l:Si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Bi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new mt:new $);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new $,i=[],s=[],o=[],a=new $,l=new Ee;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new $)}s[0]=new $,o[0]=new $;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(oe(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(oe(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Rh extends Bi{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new mt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class r0 extends Rh{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ph(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Ha=new $,Ec=new Ph,bc=new Ph,wc=new Ph;class s0 extends Bi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new $){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Ha.subVectors(i[0],i[1]).add(i[0]),c=Ha);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Ha.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Ha),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Ec.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,p),bc.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,p),wc.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(Ec.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),bc.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),wc.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Ec.calc(l),bc.calc(l),wc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new $().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Bf(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function o0(r,t){const e=1-r;return e*e*t}function a0(r,t){return 2*(1-r)*r*t}function l0(r,t){return r*r*t}function Fo(r,t,e,n){return o0(r,t)+a0(r,e)+l0(r,n)}function c0(r,t){const e=1-r;return e*e*e*t}function u0(r,t){const e=1-r;return 3*e*e*r*t}function h0(r,t){return 3*(1-r)*r*r*t}function f0(r,t){return r*r*r*t}function Bo(r,t,e,n,i){return c0(r,t)+u0(r,e)+h0(r,n)+f0(r,i)}class Pp extends Bi{constructor(t=new mt,e=new mt,n=new mt,i=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new mt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Bo(t,i.x,s.x,o.x,a.x),Bo(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class d0 extends Bi{constructor(t=new $,e=new $,n=new $,i=new $){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new $){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Bo(t,i.x,s.x,o.x,a.x),Bo(t,i.y,s.y,o.y,a.y),Bo(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dp extends Bi{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class p0 extends Bi{constructor(t=new $,e=new $){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new $){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lp extends Bi{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Fo(t,i.x,s.x,o.x),Fo(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class m0 extends Bi{constructor(t=new $,e=new $,n=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Fo(t,i.x,s.x,o.x),Fo(t,i.y,s.y,o.y),Fo(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ip extends Bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Bf(a,l.x,c.x,u.x,h.x),Bf(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new mt().fromArray(i))}return this}}var ku=Object.freeze({__proto__:null,ArcCurve:r0,CatmullRomCurve3:s0,CubicBezierCurve:Pp,CubicBezierCurve3:d0,EllipseCurve:Rh,LineCurve:Dp,LineCurve3:p0,QuadraticBezierCurve:Lp,QuadraticBezierCurve3:m0,SplineCurve:Ip});class _0 extends Bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ku[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ku[i.type]().fromJSON(i))}return this}}class Gs extends _0{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Dp(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Lp(this.currentPoint.clone(),new mt(t,e),new mt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new Pp(this.currentPoint.clone(),new mt(t,e),new mt(n,i),new mt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ip(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new Rh(t,e,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}const Va=new $,Ga=new $,Ac=new $,Wa=new ci;class Dh extends an{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),s=Math.cos(Hs*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:p,c:m}=Wa;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Wa.getNormal(Ac),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let M=0;M<3;M++){const x=(M+1)%3,v=h[M],b=h[x],w=Wa[u[M]],T=Wa[u[x]],R=`${v}_${b}`,S=`${b}_${v}`;S in f&&f[S]?(Ac.dot(f[S].normal)<=s&&(d.push(w.x,w.y,w.z),d.push(T.x,T.y,T.z)),f[S]=null):R in f||(f[R]={index0:c[M],index1:c[x],normal:Ac.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:p}=f[g];Va.fromBufferAttribute(a,_),Ga.fromBufferAttribute(a,p),d.push(Va.x,Va.y,Va.z),d.push(Ga.x,Ga.y,Ga.z)}this.setAttribute("position",new Ge(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Ws extends Gs{constructor(t){super(t),this.uuid=cs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Gs().fromJSON(i))}return this}}const g0={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=Up(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,d;if(n&&(s=M0(r,t,s,e)),r.length>80*e){a=c=r[0],l=u=r[1];for(let g=e;g<i;g+=e)h=r[g],f=r[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return ra(s,o,e,a,l,d,0),o}};function Up(r,t,e,n,i){let s,o;if(i===I0(r,t,e,n)>0)for(s=t;s<e;s+=n)o=zf(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=zf(s,r[s],r[s+1],o);return o&&Yl(o,o.next)&&(oa(o),o=o.next),o}function is(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Yl(e,e.next)||Ce(e.prev,e,e.next)===0)){if(oa(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ra(r,t,e,n,i,s,o){if(!r)return;!o&&s&&A0(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?x0(r,n,i,s):v0(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),oa(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=y0(is(r),t,e),ra(r,t,e,n,i,s,2)):o===2&&S0(r,t,e,n,i,s):ra(is(r),t,e,n,i,s,1);break}}}function v0(r){const t=r.prev,e=r,n=r.next;if(Ce(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Us(i,a,s,l,o,c,g.x,g.y)&&Ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function x0(r,t,e,n){const i=r.prev,s=r,o=r.next;if(Ce(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,m=Hu(d,g,t,e,n),M=Hu(_,p,t,e,n);let x=r.prevZ,v=r.nextZ;for(;x&&x.z>=m&&v&&v.z<=M;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&Us(a,u,l,h,c,f,x.x,x.y)&&Ce(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&Us(a,u,l,h,c,f,v.x,v.y)&&Ce(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=m;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&Us(a,u,l,h,c,f,x.x,x.y)&&Ce(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&Us(a,u,l,h,c,f,v.x,v.y)&&Ce(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function y0(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Yl(i,s)&&Np(i,n,n.next,s)&&sa(i,s)&&sa(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),oa(n),oa(n.next),n=r=s),n=n.next}while(n!==r);return is(n)}function S0(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&P0(o,a)){let l=Op(o,a);o=is(o,o.next),l=is(l,l.next),ra(o,t,e,n,i,s,0),ra(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function M0(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=Up(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(R0(c));for(i.sort(T0),s=0;s<i.length;s++)e=E0(i[s],e);return e}function T0(r,t){return r.x-t.x}function E0(r,t){const e=b0(r,t);if(!e)return t;const n=Op(e,r);return is(n,n.next),is(e,e.next)}function b0(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Us(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(s-e.x),sa(e,r)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&w0(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function w0(r,t){return Ce(r.prev,r,t.prev)<0&&Ce(t.next,r,r.next)<0}function A0(r,t,e,n){let i=r;do i.z===0&&(i.z=Hu(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,C0(i)}function C0(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function Hu(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function R0(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Us(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function P0(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!D0(r,t)&&(sa(r,t)&&sa(t,r)&&L0(r,t)&&(Ce(r.prev,r,t.prev)||Ce(r,t.prev,t))||Yl(r,t)&&Ce(r.prev,r,r.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Yl(r,t){return r.x===t.x&&r.y===t.y}function Np(r,t,e,n){const i=Ya(Ce(r,t,e)),s=Ya(Ce(r,t,n)),o=Ya(Ce(e,n,r)),a=Ya(Ce(e,n,t));return!!(i!==s&&o!==a||i===0&&Xa(r,e,t)||s===0&&Xa(r,n,t)||o===0&&Xa(e,r,n)||a===0&&Xa(e,t,n))}function Xa(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Ya(r){return r>0?1:r<0?-1:0}function D0(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Np(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function sa(r,t){return Ce(r.prev,r,r.next)<0?Ce(r,t,r.next)>=0&&Ce(r,r.prev,t)>=0:Ce(r,t,r.prev)<0||Ce(r,r.next,t)<0}function L0(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Op(r,t){const e=new Vu(r.i,r.x,r.y),n=new Vu(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function zf(r,t,e,n){const i=new Vu(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function oa(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Vu(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function I0(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Li{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Li.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];kf(t),Hf(n,t);let o=t.length;e.forEach(kf);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Hf(n,e[l]);const a=g0.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function kf(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Hf(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Lh extends an{constructor(t=new Ws([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Ge(i,3)),this.setAttribute("uv",new Ge(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:U0;let x,v=!1,b,w,T,R;m&&(x=m.getSpacedPoints(u),v=!0,f=!1,b=m.computeFrenetFrames(u,!1),w=new $,T=new $,R=new $),f||(p=0,d=0,g=0,_=0);const S=a.extractPoints(c);let y=S.shape;const I=S.holes;if(!Li.isClockWise(y)){y=y.reverse();for(let et=0,q=I.length;et<q;et++){const E=I[et];Li.isClockWise(E)&&(I[et]=E.reverse())}}const V=Li.triangulateShape(y,I),Y=y;for(let et=0,q=I.length;et<q;et++){const E=I[et];y=y.concat(E)}function Q(et,q,E){return q||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(q,E)}const G=y.length,X=V.length;function z(et,q,E){let st,nt,k;const H=et.x-q.x,O=et.y-q.y,lt=E.x-et.x,P=E.y-et.y,A=H*H+O*O,K=H*P-O*lt;if(Math.abs(K)>Number.EPSILON){const it=Math.sqrt(A),at=Math.sqrt(lt*lt+P*P),ct=q.x-O/it,yt=q.y+H/it,xt=E.x-P/at,St=E.y+lt/at,Bt=((xt-ct)*P-(St-yt)*lt)/(H*P-O*lt);st=ct+H*Bt-et.x,nt=yt+O*Bt-et.y;const gt=st*st+nt*nt;if(gt<=2)return new mt(st,nt);k=Math.sqrt(gt/2)}else{let it=!1;H>Number.EPSILON?lt>Number.EPSILON&&(it=!0):H<-Number.EPSILON?lt<-Number.EPSILON&&(it=!0):Math.sign(O)===Math.sign(P)&&(it=!0),it?(st=-O,nt=H,k=Math.sqrt(A)):(st=H,nt=O,k=Math.sqrt(A/2))}return new mt(st/k,nt/k)}const ht=[];for(let et=0,q=Y.length,E=q-1,st=et+1;et<q;et++,E++,st++)E===q&&(E=0),st===q&&(st=0),ht[et]=z(Y[et],Y[E],Y[st]);const F=[];let _t,Rt=ht.concat();for(let et=0,q=I.length;et<q;et++){const E=I[et];_t=[];for(let st=0,nt=E.length,k=nt-1,H=st+1;st<nt;st++,k++,H++)k===nt&&(k=0),H===nt&&(H=0),_t[st]=z(E[st],E[k],E[H]);F.push(_t),Rt=Rt.concat(_t)}for(let et=0;et<p;et++){const q=et/p,E=d*Math.cos(q*Math.PI/2),st=g*Math.sin(q*Math.PI/2)+_;for(let nt=0,k=Y.length;nt<k;nt++){const H=Q(Y[nt],ht[nt],st);C(H.x,H.y,-E)}for(let nt=0,k=I.length;nt<k;nt++){const H=I[nt];_t=F[nt];for(let O=0,lt=H.length;O<lt;O++){const P=Q(H[O],_t[O],st);C(P.x,P.y,-E)}}}const Vt=g+_;for(let et=0;et<G;et++){const q=f?Q(y[et],Rt[et],Vt):y[et];v?(T.copy(b.normals[0]).multiplyScalar(q.x),w.copy(b.binormals[0]).multiplyScalar(q.y),R.copy(x[0]).add(T).add(w),C(R.x,R.y,R.z)):C(q.x,q.y,0)}for(let et=1;et<=u;et++)for(let q=0;q<G;q++){const E=f?Q(y[q],Rt[q],Vt):y[q];v?(T.copy(b.normals[et]).multiplyScalar(E.x),w.copy(b.binormals[et]).multiplyScalar(E.y),R.copy(x[et]).add(T).add(w),C(R.x,R.y,R.z)):C(E.x,E.y,h/u*et)}for(let et=p-1;et>=0;et--){const q=et/p,E=d*Math.cos(q*Math.PI/2),st=g*Math.sin(q*Math.PI/2)+_;for(let nt=0,k=Y.length;nt<k;nt++){const H=Q(Y[nt],ht[nt],st);C(H.x,H.y,h+E)}for(let nt=0,k=I.length;nt<k;nt++){const H=I[nt];_t=F[nt];for(let O=0,lt=H.length;O<lt;O++){const P=Q(H[O],_t[O],st);v?C(P.x,P.y+x[u-1].y,x[u-1].x+E):C(P.x,P.y,h+E)}}}N(),U();function N(){const et=i.length/3;if(f){let q=0,E=G*q;for(let st=0;st<X;st++){const nt=V[st];tt(nt[2]+E,nt[1]+E,nt[0]+E)}q=u+p*2,E=G*q;for(let st=0;st<X;st++){const nt=V[st];tt(nt[0]+E,nt[1]+E,nt[2]+E)}}else{for(let q=0;q<X;q++){const E=V[q];tt(E[2],E[1],E[0])}for(let q=0;q<X;q++){const E=V[q];tt(E[0]+G*u,E[1]+G*u,E[2]+G*u)}}n.addGroup(et,i.length/3-et,0)}function U(){const et=i.length/3;let q=0;L(Y,q),q+=Y.length;for(let E=0,st=I.length;E<st;E++){const nt=I[E];L(nt,q),q+=nt.length}n.addGroup(et,i.length/3-et,1)}function L(et,q){let E=et.length;for(;--E>=0;){const st=E;let nt=E-1;nt<0&&(nt=et.length-1);for(let k=0,H=u+p*2;k<H;k++){const O=G*k,lt=G*(k+1),P=q+st+O,A=q+nt+O,K=q+nt+lt,it=q+st+lt;ft(P,A,K,it)}}}function C(et,q,E){l.push(et),l.push(q),l.push(E)}function tt(et,q,E){J(et),J(q),J(E);const st=i.length/3,nt=M.generateTopUV(n,i,st-3,st-2,st-1);dt(nt[0]),dt(nt[1]),dt(nt[2])}function ft(et,q,E,st){J(et),J(q),J(st),J(q),J(E),J(st);const nt=i.length/3,k=M.generateSideWallUV(n,i,nt-6,nt-3,nt-2,nt-1);dt(k[0]),dt(k[1]),dt(k[3]),dt(k[1]),dt(k[2]),dt(k[3])}function J(et){i.push(l[et*3+0]),i.push(l[et*3+1]),i.push(l[et*3+2])}function dt(et){s.push(et.x),s.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return N0(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ku[i.type]().fromJSON(i)),new Lh(n,t.options)}}const U0={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new mt(s,o),new mt(a,l),new mt(c,u)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[i*3],d=t[i*3+1],g=t[i*3+2],_=t[s*3],p=t[s*3+1],m=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new mt(o,1-l),new mt(c,1-h),new mt(f,1-g),new mt(_,1-m)]:[new mt(a,1-l),new mt(u,1-h),new mt(d,1-g),new mt(p,1-m)]}};function N0(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class mo extends an{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,f=e/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const M=m*f-o;for(let x=0;x<c;x++){const v=x*h-s;g.push(v,-M,0),_.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const x=M+c*m,v=M+c*(m+1),b=M+1+c*(m+1),w=M+1+c*m;d.push(x,v,w),d.push(v,b,w)}this.setIndex(d),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(_,3)),this.setAttribute("uv",new Ge(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mo(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ih extends an{constructor(t=new Ws([new mt(0,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ge(i,3)),this.setAttribute("normal",new Ge(s,3)),this.setAttribute("uv",new Ge(o,2));function c(u){const h=i.length/3,f=u.extractPoints(e);let d=f.shape;const g=f.holes;Li.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){const M=g[p];Li.isClockWise(M)===!0&&(g[p]=M.reverse())}const _=Li.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){const M=g[p];d=d.concat(M)}for(let p=0,m=d.length;p<m;p++){const M=d[p];i.push(M.x,M.y,0),s.push(0,0,1),o.push(M.x,M.y)}for(let p=0,m=_.length;p<m;p++){const M=_[p],x=M[0]+h,v=M[1]+h,b=M[2]+h;n.push(x,v,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return O0(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const o=e[t.shapes[i]];n.push(o)}return new Ih(n,t.curveSegments)}}function O0(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class F0 extends us{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xt(16777215),this.specular=new Xt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gp,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class B0 extends us{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class z0 extends us{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Pl={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class k0{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const H0=new k0;class _o{constructor(t){this.manager=t!==void 0?t:H0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}_o.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wi={};class V0 extends Error{constructor(t,e){super(t),this.response=e}}class Fp extends _o{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Pl.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Wi[t]!==void 0){Wi[t].push({onLoad:e,onProgress:n,onError:i});return}Wi[t]=[],Wi[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Wi[t],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const p=new ReadableStream({start(m){M();function M(){h.read().then(({done:x,value:v})=>{if(x)m.close();else{_+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let w=0,T=u.length;w<T;w++){const R=u[w];R.onProgress&&R.onProgress(b)}m.enqueue(v),M()}},x=>{m.error(x)})}}});return new Response(p)}else throw new V0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Pl.add(t,c);const u=Wi[t];delete Wi[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Wi[t];if(u===void 0)throw this.manager.itemError(t),c;delete Wi[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class G0 extends _o{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Pl.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=ia("img");function l(){u(),Pl.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class W0 extends _o{constructor(t){super(t)}load(t,e,n,i){const s=new Cn,o=new G0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Bp extends en{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Cc=new Ee,Vf=new $,Gf=new $;class X0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ch,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Vf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vf),Gf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gf),e.updateMatrixWorld(),Cc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ql extends Ap{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Y0 extends X0{constructor(){super(new ql(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class q0 extends Bp{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Y0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Z0 extends Bp{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class $0 extends an{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class J0 extends Yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class K0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Wf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Wf(){return performance.now()}const Xf=new mt;class j0{constructor(t=new mt(1/0,1/0),e=new mt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xf.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xf).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class hr{constructor(){this.type="ShapePath",this.color=new Xt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Gs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,o){return this.currentPath.bezierCurveTo(t,e,n,i,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(m){const M=[];for(let x=0,v=m.length;x<v;x++){const b=m[x],w=new Ws;w.curves=b.curves,M.push(w)}return M}function n(m,M){const x=M.length;let v=!1;for(let b=x-1,w=0;w<x;b=w++){let T=M[b],R=M[w],S=R.x-T.x,y=R.y-T.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(T=M[w],S=-S,R=M[b],y=-y),m.y<T.y||m.y>R.y)continue;if(m.y===T.y){if(m.x===T.x)return!0}else{const I=y*(m.x-T.x)-S*(m.y-T.y);if(I===0)return!0;if(I<0)continue;v=!v}}else{if(m.y!==T.y)continue;if(R.x<=m.x&&m.x<=T.x||T.x<=m.x&&m.x<=R.x)return!0}}return v}const i=Li.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Ws,l.curves=a.curves,c.push(l),c;let u=!i(s[0].getPoints());u=t?!u:u;const h=[],f=[];let d=[],g=0,_;f[g]=void 0,d[g]=[];for(let m=0,M=s.length;m<M;m++)a=s[m],_=a.getPoints(),o=i(_),o=t?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new Ws,p:_},f[g].s.curves=a.curves,u&&g++,d[g]=[]):d[g].push({h:a,p:_[0]});if(!f[0])return e(s);if(f.length>1){let m=!1,M=0;for(let x=0,v=f.length;x<v;x++)h[x]=[];for(let x=0,v=f.length;x<v;x++){const b=d[x];for(let w=0;w<b.length;w++){const T=b[w];let R=!0;for(let S=0;S<f.length;S++)n(T.p,f[S].p)&&(x!==S&&M++,R?(R=!1,h[S].push(T)):m=!0);R&&h[x].push(T)}}M>0&&m===!1&&(d=h)}let p;for(let m=0,M=f.length;m<M;m++){l=f[m].s,c.push(l),p=d[m];for(let x=0,v=p.length;x<v;x++)l.holes.push(p[x].h)}return c}}function Yf(r,t,e,n){const i=Q0(n);switch(e){case up:return r*t;case fp:return r*t;case dp:return r*t*2;case pp:return r*t/i.components*i.byteLength;case Sh:return r*t/i.components*i.byteLength;case mp:return r*t*2/i.components*i.byteLength;case Mh:return r*t*2/i.components*i.byteLength;case hp:return r*t*3/i.components*i.byteLength;case yi:return r*t*4/i.components*i.byteLength;case Th:return r*t*4/i.components*i.byteLength;case cl:case ul:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case hl:case fl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case pu:case _u:return Math.max(r,16)*Math.max(t,8)/4;case du:case mu:return Math.max(r,8)*Math.max(t,8)/2;case gu:case vu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case xu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case yu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Su:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Mu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Tu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Eu:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case bu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case wu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Au:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Cu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ru:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Pu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Du:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Lu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Iu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case dl:case Uu:case Nu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case _p:case Ou:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Fu:case Bu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Q0(r){switch(r){case nr:case ap:return{byteLength:1,components:1};case ea:case lp:case Qi:return{byteLength:2,components:1};case xh:case yh:return{byteLength:2,components:4};case ns:case vh:case $i:return{byteLength:4,components:1};case cp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_h}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_h);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zp(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function tv(r){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var ev=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nv=`#ifdef USE_ALPHAHASH
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
#endif`,iv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ov=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,av=`#ifdef USE_AOMAP
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
#endif`,lv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cv=`#ifdef USE_BATCHING
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
#endif`,uv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pv=`#ifdef USE_IRIDESCENCE
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
#endif`,mv=`#ifdef USE_BUMPMAP
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
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ev=`#define PI 3.141592653589793
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
} // validated`,bv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wv=`vec3 transformedNormal = objectNormal;
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
#endif`,Av=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iv=`#ifdef USE_ENVMAP
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
#endif`,Uv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nv=`#ifdef USE_ENVMAP
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
#endif`,Ov=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fv=`#ifdef USE_ENVMAP
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
#endif`,Bv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vv=`#ifdef USE_GRADIENTMAP
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
}`,Gv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yv=`uniform bool receiveShadow;
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
#endif`,qv=`#ifdef USE_ENVMAP
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
#endif`,Zv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jv=`PhysicalMaterial material;
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
#endif`,Qv=`struct PhysicalMaterial {
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
}`,tx=`
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
#endif`,ex=`#if defined( RE_IndirectDiffuse )
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
#endif`,nx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ix=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ox=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ax=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ux=`#if defined( USE_POINTS_UV )
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
#endif`,hx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,px=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_x=`#ifdef USE_MORPHTARGETS
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
#endif`,gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tx=`#ifdef USE_NORMALMAP
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
#endif`,Ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ax=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Px=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ix=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ux=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zx=`float getShadowMask() {
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
}`,kx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hx=`#ifdef USE_SKINNING
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
#endif`,Vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gx=`#ifdef USE_SKINNING
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
#endif`,Wx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zx=`#ifdef USE_TRANSMISSION
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
#endif`,$x=`#ifdef USE_TRANSMISSION
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
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ty=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ey=`uniform sampler2D t2D;
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
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oy=`#include <common>
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
}`,ay=`#if DEPTH_PACKING == 3200
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
}`,ly=`#define DISTANCE
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
}`,cy=`#define DISTANCE
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
}`,uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fy=`uniform float scale;
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
}`,dy=`uniform vec3 diffuse;
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
}`,py=`#include <common>
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
}`,my=`uniform vec3 diffuse;
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
}`,_y=`#define LAMBERT
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
}`,gy=`#define LAMBERT
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
}`,vy=`#define MATCAP
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
}`,xy=`#define MATCAP
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
}`,yy=`#define NORMAL
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
}`,Sy=`#define NORMAL
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
}`,My=`#define PHONG
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
}`,Ty=`#define PHONG
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
}`,Ey=`#define STANDARD
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
}`,by=`#define STANDARD
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
}`,wy=`#define TOON
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
}`,Ay=`#define TOON
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
}`,Cy=`uniform float size;
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
}`,Ry=`uniform vec3 diffuse;
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
}`,Py=`#include <common>
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
}`,Dy=`uniform vec3 color;
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
}`,Ly=`uniform float rotation;
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
}`,Iy=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:ev,alphahash_pars_fragment:nv,alphamap_fragment:iv,alphamap_pars_fragment:rv,alphatest_fragment:sv,alphatest_pars_fragment:ov,aomap_fragment:av,aomap_pars_fragment:lv,batching_pars_vertex:cv,batching_vertex:uv,begin_vertex:hv,beginnormal_vertex:fv,bsdfs:dv,iridescence_fragment:pv,bumpmap_pars_fragment:mv,clipping_planes_fragment:_v,clipping_planes_pars_fragment:gv,clipping_planes_pars_vertex:vv,clipping_planes_vertex:xv,color_fragment:yv,color_pars_fragment:Sv,color_pars_vertex:Mv,color_vertex:Tv,common:Ev,cube_uv_reflection_fragment:bv,defaultnormal_vertex:wv,displacementmap_pars_vertex:Av,displacementmap_vertex:Cv,emissivemap_fragment:Rv,emissivemap_pars_fragment:Pv,colorspace_fragment:Dv,colorspace_pars_fragment:Lv,envmap_fragment:Iv,envmap_common_pars_fragment:Uv,envmap_pars_fragment:Nv,envmap_pars_vertex:Ov,envmap_physical_pars_fragment:qv,envmap_vertex:Fv,fog_vertex:Bv,fog_pars_vertex:zv,fog_fragment:kv,fog_pars_fragment:Hv,gradientmap_pars_fragment:Vv,lightmap_pars_fragment:Gv,lights_lambert_fragment:Wv,lights_lambert_pars_fragment:Xv,lights_pars_begin:Yv,lights_toon_fragment:Zv,lights_toon_pars_fragment:$v,lights_phong_fragment:Jv,lights_phong_pars_fragment:Kv,lights_physical_fragment:jv,lights_physical_pars_fragment:Qv,lights_fragment_begin:tx,lights_fragment_maps:ex,lights_fragment_end:nx,logdepthbuf_fragment:ix,logdepthbuf_pars_fragment:rx,logdepthbuf_pars_vertex:sx,logdepthbuf_vertex:ox,map_fragment:ax,map_pars_fragment:lx,map_particle_fragment:cx,map_particle_pars_fragment:ux,metalnessmap_fragment:hx,metalnessmap_pars_fragment:fx,morphinstance_vertex:dx,morphcolor_vertex:px,morphnormal_vertex:mx,morphtarget_pars_vertex:_x,morphtarget_vertex:gx,normal_fragment_begin:vx,normal_fragment_maps:xx,normal_pars_fragment:yx,normal_pars_vertex:Sx,normal_vertex:Mx,normalmap_pars_fragment:Tx,clearcoat_normal_fragment_begin:Ex,clearcoat_normal_fragment_maps:bx,clearcoat_pars_fragment:wx,iridescence_pars_fragment:Ax,opaque_fragment:Cx,packing:Rx,premultiplied_alpha_fragment:Px,project_vertex:Dx,dithering_fragment:Lx,dithering_pars_fragment:Ix,roughnessmap_fragment:Ux,roughnessmap_pars_fragment:Nx,shadowmap_pars_fragment:Ox,shadowmap_pars_vertex:Fx,shadowmap_vertex:Bx,shadowmask_pars_fragment:zx,skinbase_vertex:kx,skinning_pars_vertex:Hx,skinning_vertex:Vx,skinnormal_vertex:Gx,specularmap_fragment:Wx,specularmap_pars_fragment:Xx,tonemapping_fragment:Yx,tonemapping_pars_fragment:qx,transmission_fragment:Zx,transmission_pars_fragment:$x,uv_pars_fragment:Jx,uv_pars_vertex:Kx,uv_vertex:jx,worldpos_vertex:Qx,background_vert:ty,background_frag:ey,backgroundCube_vert:ny,backgroundCube_frag:iy,cube_vert:ry,cube_frag:sy,depth_vert:oy,depth_frag:ay,distanceRGBA_vert:ly,distanceRGBA_frag:cy,equirect_vert:uy,equirect_frag:hy,linedashed_vert:fy,linedashed_frag:dy,meshbasic_vert:py,meshbasic_frag:my,meshlambert_vert:_y,meshlambert_frag:gy,meshmatcap_vert:vy,meshmatcap_frag:xy,meshnormal_vert:yy,meshnormal_frag:Sy,meshphong_vert:My,meshphong_frag:Ty,meshphysical_vert:Ey,meshphysical_frag:by,meshtoon_vert:wy,meshtoon_frag:Ay,points_vert:Cy,points_frag:Ry,shadow_vert:Py,shadow_frag:Dy,sprite_vert:Ly,sprite_frag:Iy},Ct={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Ai={basic:{uniforms:Sn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Sn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Xt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Sn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Sn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Sn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Xt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Sn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Sn([Ct.points,Ct.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Sn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Sn([Ct.common,Ct.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Sn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Sn([Ct.sprite,Ct.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Sn([Ct.common,Ct.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Sn([Ct.lights,Ct.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Ai.physical={uniforms:Sn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const qa={r:0,b:0,g:0},Ir=new Oi,Uy=new Ee;function Ny(r,t,e,n,i,s,o){const a=new Xt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function _(x){let v=!1;const b=g(x);b===null?m(a,l):b&&b.isColor&&(m(b,1),v=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(x,v){const b=g(v);b&&(b.isCubeTexture||b.mapping===Xl)?(u===void 0&&(u=new Pe(new Ln(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:io(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ir.copy(v.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Uy.makeRotationFromEuler(Ir)),u.material.toneMapped=he.getTransfer(b.colorSpace)!==_e,(h!==b||f!==b.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,d=r.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Pe(new mo(2,2),new An({name:"BackgroundMaterial",uniforms:io(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=he.getTransfer(b.colorSpace)!==_e,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,d=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,v){x.getRGB(qa,wp(r)),n.buffers.color.setClear(qa.r,qa.g,qa.b,v,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:_,addToRenderList:p,dispose:M}}function Oy(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(y,I,B,V,Y){let Q=!1;const G=h(V,B,I);s!==G&&(s=G,c(s.object)),Q=d(y,V,B,Y),Q&&g(y,V,B,Y),Y!==null&&t.update(Y,r.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,v(y,I,B,V),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function u(y){return r.deleteVertexArray(y)}function h(y,I,B){const V=B.wireframe===!0;let Y=n[y.id];Y===void 0&&(Y={},n[y.id]=Y);let Q=Y[I.id];Q===void 0&&(Q={},Y[I.id]=Q);let G=Q[V];return G===void 0&&(G=f(l()),Q[V]=G),G}function f(y){const I=[],B=[],V=[];for(let Y=0;Y<e;Y++)I[Y]=0,B[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:V,object:y,attributes:{},index:null}}function d(y,I,B,V){const Y=s.attributes,Q=I.attributes;let G=0;const X=B.getAttributes();for(const z in X)if(X[z].location>=0){const F=Y[z];let _t=Q[z];if(_t===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(_t=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(_t=y.instanceColor)),F===void 0||F.attribute!==_t||_t&&F.data!==_t.data)return!0;G++}return s.attributesNum!==G||s.index!==V}function g(y,I,B,V){const Y={},Q=I.attributes;let G=0;const X=B.getAttributes();for(const z in X)if(X[z].location>=0){let F=Q[z];F===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(F=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(F=y.instanceColor));const _t={};_t.attribute=F,F&&F.data&&(_t.data=F.data),Y[z]=_t,G++}s.attributes=Y,s.attributesNum=G,s.index=V}function _(){const y=s.newAttributes;for(let I=0,B=y.length;I<B;I++)y[I]=0}function p(y){m(y,0)}function m(y,I){const B=s.newAttributes,V=s.enabledAttributes,Y=s.attributeDivisors;B[y]=1,V[y]===0&&(r.enableVertexAttribArray(y),V[y]=1),Y[y]!==I&&(r.vertexAttribDivisor(y,I),Y[y]=I)}function M(){const y=s.newAttributes,I=s.enabledAttributes;for(let B=0,V=I.length;B<V;B++)I[B]!==y[B]&&(r.disableVertexAttribArray(B),I[B]=0)}function x(y,I,B,V,Y,Q,G){G===!0?r.vertexAttribIPointer(y,I,B,Y,Q):r.vertexAttribPointer(y,I,B,V,Y,Q)}function v(y,I,B,V){_();const Y=V.attributes,Q=B.getAttributes(),G=I.defaultAttributeValues;for(const X in Q){const z=Q[X];if(z.location>=0){let ht=Y[X];if(ht===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),ht!==void 0){const F=ht.normalized,_t=ht.itemSize,Rt=t.get(ht);if(Rt===void 0)continue;const Vt=Rt.buffer,N=Rt.type,U=Rt.bytesPerElement,L=N===r.INT||N===r.UNSIGNED_INT||ht.gpuType===vh;if(ht.isInterleavedBufferAttribute){const C=ht.data,tt=C.stride,ft=ht.offset;if(C.isInstancedInterleavedBuffer){for(let J=0;J<z.locationSize;J++)m(z.location+J,C.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let J=0;J<z.locationSize;J++)p(z.location+J);r.bindBuffer(r.ARRAY_BUFFER,Vt);for(let J=0;J<z.locationSize;J++)x(z.location+J,_t/z.locationSize,N,F,tt*U,(ft+_t/z.locationSize*J)*U,L)}else{if(ht.isInstancedBufferAttribute){for(let C=0;C<z.locationSize;C++)m(z.location+C,ht.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let C=0;C<z.locationSize;C++)p(z.location+C);r.bindBuffer(r.ARRAY_BUFFER,Vt);for(let C=0;C<z.locationSize;C++)x(z.location+C,_t/z.locationSize,N,F,_t*U,_t/z.locationSize*C*U,L)}}else if(G!==void 0){const F=G[X];if(F!==void 0)switch(F.length){case 2:r.vertexAttrib2fv(z.location,F);break;case 3:r.vertexAttrib3fv(z.location,F);break;case 4:r.vertexAttrib4fv(z.location,F);break;default:r.vertexAttrib1fv(z.location,F)}}}}M()}function b(){R();for(const y in n){const I=n[y];for(const B in I){const V=I[B];for(const Y in V)u(V[Y].object),delete V[Y];delete I[B]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const I=n[y.id];for(const B in I){const V=I[B];for(const Y in V)u(V[Y].object),delete V[Y];delete I[B]}delete n[y.id]}function T(y){for(const I in n){const B=n[I];if(B[y.id]===void 0)continue;const V=B[y.id];for(const Y in V)u(V[Y].object),delete V[Y];delete B[y.id]}}function R(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function Fy(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function By(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==yi&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===Qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==nr&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==$i&&!R)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:b,maxSamples:w}}function zy(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Br,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const M=s?0:n,x=M*4;let v=m.clippingState||null;l.value=v,v=u(g,f,x,d);for(let b=0;b!==x;++b)v[b]=e[b];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,v=d;x!==_;++x,v+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function ky(r){let t=new WeakMap;function e(o,a){return a===cu?o.mapping=js:a===uu&&(o.mapping=Qs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===cu||a===uu)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Kg(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Ns=4,qf=[.125,.215,.35,.446,.526,.582],Wr=20,Rc=new ql,Zf=new Xt;let Pc=null,Dc=0,Lc=0,Ic=!1;const zr=(1+Math.sqrt(5))/2,ws=1/zr,$f=[new $(-zr,ws,0),new $(zr,ws,0),new $(-ws,0,zr),new $(ws,0,zr),new $(0,zr,-ws),new $(0,zr,ws),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class Jf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Pc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Pc,Dc,Lc),this._renderer.xr.enabled=Ic,t.scissorTest=!1,Za(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===js||t.mapping===Qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:Qi,format:yi,colorSpace:no,depthBuffer:!1},i=Kf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kf(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hy(s)),this._blurMaterial=Vy(s,t,e)}return i}_compileMaterial(t){const e=new Pe(this._lodPlanes[0],t);this._renderer.compile(e,Rc)}_sceneToCubeUV(t,e,n,i){const a=new Yn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Zf),u.toneMapping=xr,u.autoClear=!1;const d=new Ti({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),g=new Pe(new Ln,d);let _=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(Zf),_=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;Za(i,M*x,m>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===js||t.mapping===Qs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Pe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Za(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Rc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$f[(i-s-1)%$f.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Pe(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Wr-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Wr;p>Wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wr}`);const m=[];let M=0;for(let T=0;T<Wr;++T){const R=T/_,S=Math.exp(-R*R/2);m.push(S),T===0?M+=S:T<p&&(M+=2*S)}for(let T=0;T<m.length;T++)m[T]=m[T]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const v=this._sizeLods[i],b=3*v*(i>x-Ns?i-x+Ns:0),w=4*(this._cubeSize-v);Za(e,b,w,3*v,2*v),l.setRenderTarget(e),l.render(h,Rc)}}function Hy(r){const t=[],e=[],n=[];let i=r;const s=r-Ns+1+qf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ns?l=qf[o-r+Ns-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,p=2,m=1,M=new Float32Array(_*g*d),x=new Float32Array(p*g*d),v=new Float32Array(m*g*d);for(let w=0;w<d;w++){const T=w%3*2/3-1,R=w>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];M.set(S,_*g*w),x.set(f,p*g*w);const y=[w,w,w,w,w,w];v.set(y,m*g*w)}const b=new an;b.setAttribute("position",new jn(M,_)),b.setAttribute("uv",new jn(x,p)),b.setAttribute("faceIndex",new jn(v,m)),t.push(b),i>Ns&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kf(r,t,e){const n=new Mi(r,t,e);return n.texture.mapping=Xl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Za(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Vy(r,t,e){const n=new Float32Array(Wr),i=new $(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Uh(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function jf(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uh(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Qf(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Uh(){return`

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
	`}function Gy(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===cu||l===uu,u=l===js||l===Qs;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Jf(r)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new Jf(r)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Wy(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ds("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Xy(r,t,e,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)t.update(f[d],r.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let x=0,v=M.length;x<v;x+=3){const b=M[x+0],w=M[x+1],T=M[x+2];f.push(b,w,w,T,T,b)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const b=x+0,w=x+1,T=x+2;f.push(b,w,w,T,T,b)}}else return;const p=new(xp(f)?bp:Ep)(f,1);p.version=_;const m=s.get(h);m&&t.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Yy(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*o,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function h(f,d,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let m=0;for(let M=0;M<g;M++)m+=d[M]*_[M];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function qy(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Zy(r,t,e){const n=new WeakMap,i=new Ie;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let S=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let v=a.attributes.position.count*x,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const w=new Float32Array(v*b*4*h),T=new Sp(w,v,b,h);T.type=$i,T.needsUpdate=!0;const R=x*4;for(let y=0;y<h;y++){const I=p[y],B=m[y],V=M[y],Y=v*b*4*y;for(let Q=0;Q<I.count;Q++){const G=Q*R;d===!0&&(i.fromBufferAttribute(I,Q),w[Y+G+0]=i.x,w[Y+G+1]=i.y,w[Y+G+2]=i.z,w[Y+G+3]=0),g===!0&&(i.fromBufferAttribute(B,Q),w[Y+G+4]=i.x,w[Y+G+5]=i.y,w[Y+G+6]=i.z,w[Y+G+7]=0),_===!0&&(i.fromBufferAttribute(V,Q),w[Y+G+8]=i.x,w[Y+G+9]=i.y,w[Y+G+10]=i.z,w[Y+G+11]=V.itemSize===4?i.w:1)}}f={count:h,texture:T,size:new mt(v,b)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function $y(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const kp=new Cn,td=new Rp(1,1),Hp=new Sp,Vp=new Ng,Gp=new Cp,ed=[],nd=[],id=new Float32Array(16),rd=new Float32Array(9),sd=new Float32Array(4);function go(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=ed[i];if(s===void 0&&(s=new Float32Array(i),ed[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Je(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ke(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Zl(r,t){let e=nd[t];e===void 0&&(e=new Int32Array(t),nd[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Jy(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Ky(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;r.uniform2fv(this.addr,t),Ke(e,t)}}function jy(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;r.uniform3fv(this.addr,t),Ke(e,t)}}function Qy(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;r.uniform4fv(this.addr,t),Ke(e,t)}}function tS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;sd.set(n),r.uniformMatrix2fv(this.addr,!1,sd),Ke(e,n)}}function eS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;rd.set(n),r.uniformMatrix3fv(this.addr,!1,rd),Ke(e,n)}}function nS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;id.set(n),r.uniformMatrix4fv(this.addr,!1,id),Ke(e,n)}}function iS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function rS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;r.uniform2iv(this.addr,t),Ke(e,t)}}function sS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;r.uniform3iv(this.addr,t),Ke(e,t)}}function oS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;r.uniform4iv(this.addr,t),Ke(e,t)}}function aS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function lS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;r.uniform2uiv(this.addr,t),Ke(e,t)}}function cS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;r.uniform3uiv(this.addr,t),Ke(e,t)}}function uS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;r.uniform4uiv(this.addr,t),Ke(e,t)}}function hS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(td.compareFunction=vp,s=td):s=kp,e.setTexture2D(t||s,i)}function fS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Vp,i)}function dS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Gp,i)}function pS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Hp,i)}function mS(r){switch(r){case 5126:return Jy;case 35664:return Ky;case 35665:return jy;case 35666:return Qy;case 35674:return tS;case 35675:return eS;case 35676:return nS;case 5124:case 35670:return iS;case 35667:case 35671:return rS;case 35668:case 35672:return sS;case 35669:case 35673:return oS;case 5125:return aS;case 36294:return lS;case 36295:return cS;case 36296:return uS;case 35678:case 36198:case 36298:case 36306:case 35682:return hS;case 35679:case 36299:case 36307:return fS;case 35680:case 36300:case 36308:case 36293:return dS;case 36289:case 36303:case 36311:case 36292:return pS}}function _S(r,t){r.uniform1fv(this.addr,t)}function gS(r,t){const e=go(t,this.size,2);r.uniform2fv(this.addr,e)}function vS(r,t){const e=go(t,this.size,3);r.uniform3fv(this.addr,e)}function xS(r,t){const e=go(t,this.size,4);r.uniform4fv(this.addr,e)}function yS(r,t){const e=go(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function SS(r,t){const e=go(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function MS(r,t){const e=go(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function TS(r,t){r.uniform1iv(this.addr,t)}function ES(r,t){r.uniform2iv(this.addr,t)}function bS(r,t){r.uniform3iv(this.addr,t)}function wS(r,t){r.uniform4iv(this.addr,t)}function AS(r,t){r.uniform1uiv(this.addr,t)}function CS(r,t){r.uniform2uiv(this.addr,t)}function RS(r,t){r.uniform3uiv(this.addr,t)}function PS(r,t){r.uniform4uiv(this.addr,t)}function DS(r,t,e){const n=this.cache,i=t.length,s=Zl(e,i);Je(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||kp,s[o])}function LS(r,t,e){const n=this.cache,i=t.length,s=Zl(e,i);Je(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Vp,s[o])}function IS(r,t,e){const n=this.cache,i=t.length,s=Zl(e,i);Je(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Gp,s[o])}function US(r,t,e){const n=this.cache,i=t.length,s=Zl(e,i);Je(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Hp,s[o])}function NS(r){switch(r){case 5126:return _S;case 35664:return gS;case 35665:return vS;case 35666:return xS;case 35674:return yS;case 35675:return SS;case 35676:return MS;case 5124:case 35670:return TS;case 35667:case 35671:return ES;case 35668:case 35672:return bS;case 35669:case 35673:return wS;case 5125:return AS;case 36294:return CS;case 36295:return RS;case 36296:return PS;case 35678:case 36198:case 36298:case 36306:case 35682:return DS;case 35679:case 36299:case 36307:return LS;case 35680:case 36300:case 36308:case 36293:return IS;case 36289:case 36303:case 36311:case 36292:return US}}class OS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mS(e.type)}}class FS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=NS(e.type)}}class BS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Uc=/(\w+)(\])?(\[|\.)?/g;function od(r,t){r.seq.push(t),r.map[t.id]=t}function zS(r,t,e){const n=r.name,i=n.length;for(Uc.lastIndex=0;;){const s=Uc.exec(n),o=Uc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){od(e,c===void 0?new OS(a,r,t):new FS(a,r,t));break}else{let h=e.map[a];h===void 0&&(h=new BS(a),od(e,h)),e=h}}}class pl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);zS(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function ad(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const kS=37297;let HS=0;function VS(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ld=new $t;function GS(r){he._getMatrix(ld,he.workingColorSpace,r);const t=`mat3( ${ld.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(r)){case El:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function cd(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+VS(r.getShaderSource(t),o)}else return i}function WS(r,t){const e=GS(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function XS(r,t){let e;switch(t){case Y_:e="Linear";break;case q_:e="Reinhard";break;case Z_:e="Cineon";break;case $_:e="ACESFilmic";break;case K_:e="AgX";break;case j_:e="Neutral";break;case J_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $a=new $;function YS(){he.getLuminanceCoefficients($a);const r=$a.x.toFixed(4),t=$a.y.toFixed(4),e=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function ZS(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $S(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Co(r){return r!==""}function ud(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hd(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const JS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gu(r){return r.replace(JS,jS)}const KS=new Map;function jS(r,t){let e=te[t];if(e===void 0){const n=KS.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gu(e)}const QS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fd(r){return r.replace(QS,tM)}function tM(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function dd(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function eM(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===sp?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===b_?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Xi&&(t="SHADOWMAP_TYPE_VSM"),t}function nM(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case js:case Qs:t="ENVMAP_TYPE_CUBE";break;case Xl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function iM(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Qs:t="ENVMAP_MODE_REFRACTION";break}return t}function rM(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case gh:t="ENVMAP_BLENDING_MULTIPLY";break;case W_:t="ENVMAP_BLENDING_MIX";break;case X_:t="ENVMAP_BLENDING_ADD";break}return t}function sM(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function oM(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=eM(e),c=nM(e),u=iM(e),h=rM(e),f=sM(e),d=qS(e),g=ZS(s),_=i.createProgram();let p,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Co).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Co).join(`
`),m.length>0&&(m+=`
`)):(p=[dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),m=[dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xr?"#define TONE_MAPPING":"",e.toneMapping!==xr?te.tonemapping_pars_fragment:"",e.toneMapping!==xr?XS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,WS("linearToOutputTexel",e.outputColorSpace),YS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Co).join(`
`)),o=Gu(o),o=ud(o,e),o=hd(o,e),a=Gu(a),a=ud(a,e),a=hd(a,e),o=fd(o),a=fd(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===df?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=M+p+o,v=M+m+a,b=ad(i,i.VERTEX_SHADER,x),w=ad(i,i.FRAGMENT_SHADER,v);i.attachShader(_,b),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(I){if(r.debug.checkShaderErrors){const B=i.getProgramInfoLog(_).trim(),V=i.getShaderInfoLog(b).trim(),Y=i.getShaderInfoLog(w).trim();let Q=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,b,w);else{const X=cd(i,b,"vertex"),z=cd(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+X+`
`+z)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(V===""||Y==="")&&(G=!1);G&&(I.diagnostics={runnable:Q,programLog:B,vertexShader:{log:V,prefix:p},fragmentShader:{log:Y,prefix:m}})}i.deleteShader(b),i.deleteShader(w),R=new pl(i,_),S=$S(i,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,kS)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=HS++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}let aM=0;class lM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new cM(t),e.set(t,n)),n}}class cM{constructor(t){this.id=aM++,this.code=t,this.usedTimes=0}}function uM(r,t,e,n,i,s,o){const a=new Mp,l=new lM,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,y,I,B,V){const Y=B.fog,Q=V.geometry,G=S.isMeshStandardMaterial?B.environment:null,X=(S.isMeshStandardMaterial?e:t).get(S.envMap||G),z=X&&X.mapping===Xl?X.image.height:null,ht=g[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const F=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,_t=F!==void 0?F.length:0;let Rt=0;Q.morphAttributes.position!==void 0&&(Rt=1),Q.morphAttributes.normal!==void 0&&(Rt=2),Q.morphAttributes.color!==void 0&&(Rt=3);let Vt,N,U,L;if(ht){const Dt=Ai[ht];Vt=Dt.vertexShader,N=Dt.fragmentShader}else Vt=S.vertexShader,N=S.fragmentShader,l.update(S),U=l.getVertexShaderID(S),L=l.getFragmentShaderID(S);const C=r.getRenderTarget(),tt=r.state.buffers.depth.getReversed(),ft=V.isInstancedMesh===!0,J=V.isBatchedMesh===!0,dt=!!S.map,et=!!S.matcap,q=!!X,E=!!S.aoMap,st=!!S.lightMap,nt=!!S.bumpMap,k=!!S.normalMap,H=!!S.displacementMap,O=!!S.emissiveMap,lt=!!S.metalnessMap,P=!!S.roughnessMap,A=S.anisotropy>0,K=S.clearcoat>0,it=S.dispersion>0,at=S.iridescence>0,ct=S.sheen>0,yt=S.transmission>0,xt=A&&!!S.anisotropyMap,St=K&&!!S.clearcoatMap,Bt=K&&!!S.clearcoatNormalMap,gt=K&&!!S.clearcoatRoughnessMap,Mt=at&&!!S.iridescenceMap,Nt=at&&!!S.iridescenceThicknessMap,Ot=ct&&!!S.sheenColorMap,Pt=ct&&!!S.sheenRoughnessMap,Kt=!!S.specularMap,Yt=!!S.specularColorMap,le=!!S.specularIntensityMap,W=yt&&!!S.transmissionMap,Et=yt&&!!S.thicknessMap,ut=!!S.gradientMap,pt=!!S.alphaMap,Tt=S.alphaTest>0,bt=!!S.alphaHash,qt=!!S.extensions;let ce=xr;S.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ce=r.toneMapping);const De={shaderID:ht,shaderType:S.type,shaderName:S.name,vertexShader:Vt,fragmentShader:N,defines:S.defines,customVertexShaderID:U,customFragmentShaderID:L,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:J,batchingColor:J&&V._colorsTexture!==null,instancing:ft,instancingColor:ft&&V.instanceColor!==null,instancingMorph:ft&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:C===null?r.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:no,alphaToCoverage:!!S.alphaToCoverage,map:dt,matcap:et,envMap:q,envMapMode:q&&X.mapping,envMapCubeUVHeight:z,aoMap:E,lightMap:st,bumpMap:nt,normalMap:k,displacementMap:f&&H,emissiveMap:O,normalMapObjectSpace:k&&S.normalMapType===ng,normalMapTangentSpace:k&&S.normalMapType===gp,metalnessMap:lt,roughnessMap:P,anisotropy:A,anisotropyMap:xt,clearcoat:K,clearcoatMap:St,clearcoatNormalMap:Bt,clearcoatRoughnessMap:gt,dispersion:it,iridescence:at,iridescenceMap:Mt,iridescenceThicknessMap:Nt,sheen:ct,sheenColorMap:Ot,sheenRoughnessMap:Pt,specularMap:Kt,specularColorMap:Yt,specularIntensityMap:le,transmission:yt,transmissionMap:W,thicknessMap:Et,gradientMap:ut,opaque:S.transparent===!1&&S.blending===zs&&S.alphaToCoverage===!1,alphaMap:pt,alphaTest:Tt,alphaHash:bt,combine:S.combine,mapUv:dt&&_(S.map.channel),aoMapUv:E&&_(S.aoMap.channel),lightMapUv:st&&_(S.lightMap.channel),bumpMapUv:nt&&_(S.bumpMap.channel),normalMapUv:k&&_(S.normalMap.channel),displacementMapUv:H&&_(S.displacementMap.channel),emissiveMapUv:O&&_(S.emissiveMap.channel),metalnessMapUv:lt&&_(S.metalnessMap.channel),roughnessMapUv:P&&_(S.roughnessMap.channel),anisotropyMapUv:xt&&_(S.anisotropyMap.channel),clearcoatMapUv:St&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&_(S.sheenRoughnessMap.channel),specularMapUv:Kt&&_(S.specularMap.channel),specularColorMapUv:Yt&&_(S.specularColorMap.channel),specularIntensityMapUv:le&&_(S.specularIntensityMap.channel),transmissionMapUv:W&&_(S.transmissionMap.channel),thicknessMapUv:Et&&_(S.thicknessMap.channel),alphaMapUv:pt&&_(S.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(k||A),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Q.attributes.uv&&(dt||pt),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:tt,skinning:V.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Rt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:ce,decodeVideoTexture:dt&&S.map.isVideoTexture===!0&&he.getTransfer(S.map.colorSpace)===_e,decodeVideoTextureEmissive:O&&S.emissiveMap.isVideoTexture===!0&&he.getTransfer(S.emissiveMap.colorSpace)===_e,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Zn,flipSided:S.side===Dn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:qt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&S.extensions.multiDraw===!0||J)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return De.vertexUv1s=c.has(1),De.vertexUv2s=c.has(2),De.vertexUv3s=c.has(3),c.clear(),De}function m(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)y.push(I),y.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(M(y,S),x(y,S),y.push(r.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function x(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const y=g[S.type];let I;if(y){const B=Ai[y];I=wl.clone(B.uniforms)}else I=S.uniforms;return I}function b(S,y){let I;for(let B=0,V=u.length;B<V;B++){const Y=u[B];if(Y.cacheKey===y){I=Y,++I.usedTimes;break}}return I===void 0&&(I=new oM(r,y,S,s),u.push(I)),I}function w(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:b,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:R}}function hM(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function fM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function pd(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function md(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,p){let m=r[t];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},r[t]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),t++,m}function a(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(h,f){e.length>1&&e.sort(h||fM),n.length>1&&n.sort(f||pd),i.length>1&&i.sort(f||pd)}function u(){for(let h=t,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function dM(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new md,r.set(n,[o])):i>=s.length?(o=new md,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function pM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new Xt};break;case"SpotLight":e={position:new $,direction:new $,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new $,halfWidth:new $,halfHeight:new $};break}return r[t.id]=e,e}}}function mM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let _M=0;function gM(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function vM(r){const t=new pM,e=mM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);const i=new $,s=new Ee,o=new Ee;function a(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,M=0,x=0,v=0,b=0,w=0,T=0;c.sort(gM);for(let S=0,y=c.length;S<y;S++){const I=c[S],B=I.color,V=I.intensity,Y=I.distance,Q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=B.r*V,h+=B.g*V,f+=B.b*V;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],V);T++}else if(I.isDirectionalLight){const G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const X=I.shadow,z=e.get(I);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=Q,n.directionalShadowMatrix[d]=I.shadow.matrix,M++}n.directional[d]=G,d++}else if(I.isSpotLight){const G=t.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(B).multiplyScalar(V),G.distance=Y,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[_]=G;const X=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,X.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[_]=X.matrix,I.castShadow){const z=e.get(I);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=Q,v++}_++}else if(I.isRectAreaLight){const G=t.get(I);G.color.copy(B).multiplyScalar(V),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=G,p++}else if(I.isPointLight){const G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){const X=I.shadow,z=e.get(I);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,z.shadowCameraNear=X.camera.near,z.shadowCameraFar=X.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=I.shadow.matrix,x++}n.point[g]=G,g++}else if(I.isHemisphereLight){const G=t.get(I);G.skyColor.copy(I.color).multiplyScalar(V),G.groundColor.copy(I.groundColor).multiplyScalar(V),n.hemi[m]=G,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==p||R.hemiLength!==m||R.numDirectionalShadows!==M||R.numPointShadows!==x||R.numSpotShadows!==v||R.numSpotMaps!==b||R.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=p,R.hemiLength=m,R.numDirectionalShadows=M,R.numPointShadows=x,R.numSpotShadows=v,R.numSpotMaps=b,R.numLightProbes=T,n.version=_M++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const x=c[m];if(x.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),h++}else if(x.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function _d(r){const t=new vM(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function xM(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new _d(r),t.set(i,[a])):s>=o.length?(a=new _d(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const yM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SM=`uniform sampler2D shadow_pass;
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
}`;function MM(r,t,e){let n=new Ch;const i=new mt,s=new mt,o=new Ie,a=new B0({depthPacking:eg}),l=new z0,c={},u=e.maxTextureSize,h={[Tr]:Dn,[Dn]:Tr,[Zn]:Zn},f=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:yM,fragmentShader:SM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new an;g.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pe(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sp;let m=this.type;this.render=function(w,T,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const S=r.getRenderTarget(),y=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),B=r.state;B.setBlending(ji),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const V=m!==Xi&&this.type===Xi,Y=m===Xi&&this.type!==Xi;for(let Q=0,G=w.length;Q<G;Q++){const X=w[Q],z=X.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const ht=z.getFrameExtents();if(i.multiply(ht),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ht.x),i.x=s.x*ht.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ht.y),i.y=s.y*ht.y,z.mapSize.y=s.y)),z.map===null||V===!0||Y===!0){const _t=this.type!==Xi?{minFilter:Si,magFilter:Si}:{};z.map!==null&&z.map.dispose(),z.map=new Mi(i.x,i.y,_t),z.map.texture.name=X.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const F=z.getViewportCount();for(let _t=0;_t<F;_t++){const Rt=z.getViewport(_t);o.set(s.x*Rt.x,s.y*Rt.y,s.x*Rt.z,s.y*Rt.w),B.viewport(o),z.updateMatrices(X,_t),n=z.getFrustum(),v(T,R,z.camera,X,this.type)}z.isPointLightShadow!==!0&&this.type===Xi&&M(z,R),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(S,y,I)};function M(w,T){const R=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Mi(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(T,null,R,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(T,null,R,d,_,null)}function x(w,T,R,S){let y=null;const I=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)y=I;else if(y=R.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=y.uuid,V=T.uuid;let Y=c[B];Y===void 0&&(Y={},c[B]=Y);let Q=Y[V];Q===void 0&&(Q=y.clone(),Y[V]=Q,T.addEventListener("dispose",b)),y=Q}if(y.visible=T.visible,y.wireframe=T.wireframe,S===Xi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=r.properties.get(y);B.light=R}return y}function v(w,T,R,S,y){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Xi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const V=t.update(w),Y=w.material;if(Array.isArray(Y)){const Q=V.groups;for(let G=0,X=Q.length;G<X;G++){const z=Q[G],ht=Y[z.materialIndex];if(ht&&ht.visible){const F=x(w,ht,S,y);w.onBeforeShadow(r,w,T,R,V,F,z),r.renderBufferDirect(R,null,V,F,w,z),w.onAfterShadow(r,w,T,R,V,F,z)}}}else if(Y.visible){const Q=x(w,Y,S,y);w.onBeforeShadow(r,w,T,R,V,Q,null),r.renderBufferDirect(R,null,V,Q,w,null),w.onAfterShadow(r,w,T,R,V,Q,null)}}const B=w.children;for(let V=0,Y=B.length;V<Y;V++)v(B[V],T,R,S,y)}function b(w){w.target.removeEventListener("dispose",b);for(const R in c){const S=c[R],y=w.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const TM={[nu]:iu,[ru]:au,[su]:lu,[Ks]:ou,[iu]:nu,[au]:ru,[lu]:su,[ou]:Ks};function EM(r,t){function e(){let W=!1;const Et=new Ie;let ut=null;const pt=new Ie(0,0,0,0);return{setMask:function(Tt){ut!==Tt&&!W&&(r.colorMask(Tt,Tt,Tt,Tt),ut=Tt)},setLocked:function(Tt){W=Tt},setClear:function(Tt,bt,qt,ce,De){De===!0&&(Tt*=ce,bt*=ce,qt*=ce),Et.set(Tt,bt,qt,ce),pt.equals(Et)===!1&&(r.clearColor(Tt,bt,qt,ce),pt.copy(Et))},reset:function(){W=!1,ut=null,pt.set(-1,0,0,0)}}}function n(){let W=!1,Et=!1,ut=null,pt=null,Tt=null;return{setReversed:function(bt){if(Et!==bt){const qt=t.get("EXT_clip_control");Et?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);const ce=Tt;Tt=null,this.setClear(ce)}Et=bt},getReversed:function(){return Et},setTest:function(bt){bt?C(r.DEPTH_TEST):tt(r.DEPTH_TEST)},setMask:function(bt){ut!==bt&&!W&&(r.depthMask(bt),ut=bt)},setFunc:function(bt){if(Et&&(bt=TM[bt]),pt!==bt){switch(bt){case nu:r.depthFunc(r.NEVER);break;case iu:r.depthFunc(r.ALWAYS);break;case ru:r.depthFunc(r.LESS);break;case Ks:r.depthFunc(r.LEQUAL);break;case su:r.depthFunc(r.EQUAL);break;case ou:r.depthFunc(r.GEQUAL);break;case au:r.depthFunc(r.GREATER);break;case lu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pt=bt}},setLocked:function(bt){W=bt},setClear:function(bt){Tt!==bt&&(Et&&(bt=1-bt),r.clearDepth(bt),Tt=bt)},reset:function(){W=!1,ut=null,pt=null,Tt=null,Et=!1}}}function i(){let W=!1,Et=null,ut=null,pt=null,Tt=null,bt=null,qt=null,ce=null,De=null;return{setTest:function(Dt){W||(Dt?C(r.STENCIL_TEST):tt(r.STENCIL_TEST))},setMask:function(Dt){Et!==Dt&&!W&&(r.stencilMask(Dt),Et=Dt)},setFunc:function(Dt,Ft,jt){(ut!==Dt||pt!==Ft||Tt!==jt)&&(r.stencilFunc(Dt,Ft,jt),ut=Dt,pt=Ft,Tt=jt)},setOp:function(Dt,Ft,jt){(bt!==Dt||qt!==Ft||ce!==jt)&&(r.stencilOp(Dt,Ft,jt),bt=Dt,qt=Ft,ce=jt)},setLocked:function(Dt){W=Dt},setClear:function(Dt){De!==Dt&&(r.clearStencil(Dt),De=Dt)},reset:function(){W=!1,Et=null,ut=null,pt=null,Tt=null,bt=null,qt=null,ce=null,De=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,p=null,m=null,M=null,x=null,v=null,b=null,w=null,T=new Xt(0,0,0),R=0,S=!1,y=null,I=null,B=null,V=null,Y=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,X=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(z)[1]),G=X>=1):z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),G=X>=2);let ht=null,F={};const _t=r.getParameter(r.SCISSOR_BOX),Rt=r.getParameter(r.VIEWPORT),Vt=new Ie().fromArray(_t),N=new Ie().fromArray(Rt);function U(W,Et,ut,pt){const Tt=new Uint8Array(4),bt=r.createTexture();r.bindTexture(W,bt),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qt=0;qt<ut;qt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Et,0,r.RGBA,1,1,pt,0,r.RGBA,r.UNSIGNED_BYTE,Tt):r.texImage2D(Et+qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Tt);return bt}const L={};L[r.TEXTURE_2D]=U(r.TEXTURE_2D,r.TEXTURE_2D,1),L[r.TEXTURE_CUBE_MAP]=U(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[r.TEXTURE_2D_ARRAY]=U(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),L[r.TEXTURE_3D]=U(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),C(r.DEPTH_TEST),o.setFunc(Ks),nt(!1),k(lf),C(r.CULL_FACE),E(ji);function C(W){u[W]!==!0&&(r.enable(W),u[W]=!0)}function tt(W){u[W]!==!1&&(r.disable(W),u[W]=!1)}function ft(W,Et){return h[W]!==Et?(r.bindFramebuffer(W,Et),h[W]=Et,W===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=Et),W===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=Et),!0):!1}function J(W,Et){let ut=d,pt=!1;if(W){ut=f.get(Et),ut===void 0&&(ut=[],f.set(Et,ut));const Tt=W.textures;if(ut.length!==Tt.length||ut[0]!==r.COLOR_ATTACHMENT0){for(let bt=0,qt=Tt.length;bt<qt;bt++)ut[bt]=r.COLOR_ATTACHMENT0+bt;ut.length=Tt.length,pt=!0}}else ut[0]!==r.BACK&&(ut[0]=r.BACK,pt=!0);pt&&r.drawBuffers(ut)}function dt(W){return g!==W?(r.useProgram(W),g=W,!0):!1}const et={[Gr]:r.FUNC_ADD,[A_]:r.FUNC_SUBTRACT,[C_]:r.FUNC_REVERSE_SUBTRACT};et[R_]=r.MIN,et[P_]=r.MAX;const q={[D_]:r.ZERO,[L_]:r.ONE,[I_]:r.SRC_COLOR,[tu]:r.SRC_ALPHA,[z_]:r.SRC_ALPHA_SATURATE,[F_]:r.DST_COLOR,[N_]:r.DST_ALPHA,[U_]:r.ONE_MINUS_SRC_COLOR,[eu]:r.ONE_MINUS_SRC_ALPHA,[B_]:r.ONE_MINUS_DST_COLOR,[O_]:r.ONE_MINUS_DST_ALPHA,[k_]:r.CONSTANT_COLOR,[H_]:r.ONE_MINUS_CONSTANT_COLOR,[V_]:r.CONSTANT_ALPHA,[G_]:r.ONE_MINUS_CONSTANT_ALPHA};function E(W,Et,ut,pt,Tt,bt,qt,ce,De,Dt){if(W===ji){_===!0&&(tt(r.BLEND),_=!1);return}if(_===!1&&(C(r.BLEND),_=!0),W!==w_){if(W!==p||Dt!==S){if((m!==Gr||v!==Gr)&&(r.blendEquation(r.FUNC_ADD),m=Gr,v=Gr),Dt)switch(W){case zs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xi:r.blendFunc(r.ONE,r.ONE);break;case cf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case uf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case zs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xi:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case cf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case uf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}M=null,x=null,b=null,w=null,T.set(0,0,0),R=0,p=W,S=Dt}return}Tt=Tt||Et,bt=bt||ut,qt=qt||pt,(Et!==m||Tt!==v)&&(r.blendEquationSeparate(et[Et],et[Tt]),m=Et,v=Tt),(ut!==M||pt!==x||bt!==b||qt!==w)&&(r.blendFuncSeparate(q[ut],q[pt],q[bt],q[qt]),M=ut,x=pt,b=bt,w=qt),(ce.equals(T)===!1||De!==R)&&(r.blendColor(ce.r,ce.g,ce.b,De),T.copy(ce),R=De),p=W,S=!1}function st(W,Et){W.side===Zn?tt(r.CULL_FACE):C(r.CULL_FACE);let ut=W.side===Dn;Et&&(ut=!ut),nt(ut),W.blending===zs&&W.transparent===!1?E(ji):E(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),s.setMask(W.colorWrite);const pt=W.stencilWrite;a.setTest(pt),pt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),O(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?C(r.SAMPLE_ALPHA_TO_COVERAGE):tt(r.SAMPLE_ALPHA_TO_COVERAGE)}function nt(W){y!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),y=W)}function k(W){W!==T_?(C(r.CULL_FACE),W!==I&&(W===lf?r.cullFace(r.BACK):W===E_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):tt(r.CULL_FACE),I=W}function H(W){W!==B&&(G&&r.lineWidth(W),B=W)}function O(W,Et,ut){W?(C(r.POLYGON_OFFSET_FILL),(V!==Et||Y!==ut)&&(r.polygonOffset(Et,ut),V=Et,Y=ut)):tt(r.POLYGON_OFFSET_FILL)}function lt(W){W?C(r.SCISSOR_TEST):tt(r.SCISSOR_TEST)}function P(W){W===void 0&&(W=r.TEXTURE0+Q-1),ht!==W&&(r.activeTexture(W),ht=W)}function A(W,Et,ut){ut===void 0&&(ht===null?ut=r.TEXTURE0+Q-1:ut=ht);let pt=F[ut];pt===void 0&&(pt={type:void 0,texture:void 0},F[ut]=pt),(pt.type!==W||pt.texture!==Et)&&(ht!==ut&&(r.activeTexture(ut),ht=ut),r.bindTexture(W,Et||L[W]),pt.type=W,pt.texture=Et)}function K(){const W=F[ht];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function it(){try{r.compressedTexImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function at(){try{r.compressedTexImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ct(){try{r.texSubImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function yt(){try{r.texSubImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function St(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Bt(){try{r.texStorage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function gt(){try{r.texStorage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Mt(){try{r.texImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Nt(){try{r.texImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ot(W){Vt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),Vt.copy(W))}function Pt(W){N.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),N.copy(W))}function Kt(W,Et){let ut=c.get(Et);ut===void 0&&(ut=new WeakMap,c.set(Et,ut));let pt=ut.get(W);pt===void 0&&(pt=r.getUniformBlockIndex(Et,W.name),ut.set(W,pt))}function Yt(W,Et){const pt=c.get(Et).get(W);l.get(Et)!==pt&&(r.uniformBlockBinding(Et,pt,W.__bindingPointIndex),l.set(Et,pt))}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ht=null,F={},h={},f=new WeakMap,d=[],g=null,_=!1,p=null,m=null,M=null,x=null,v=null,b=null,w=null,T=new Xt(0,0,0),R=0,S=!1,y=null,I=null,B=null,V=null,Y=null,Vt.set(0,0,r.canvas.width,r.canvas.height),N.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:C,disable:tt,bindFramebuffer:ft,drawBuffers:J,useProgram:dt,setBlending:E,setMaterial:st,setFlipSided:nt,setCullFace:k,setLineWidth:H,setPolygonOffset:O,setScissorTest:lt,activeTexture:P,bindTexture:A,unbindTexture:K,compressedTexImage2D:it,compressedTexImage3D:at,texImage2D:Mt,texImage3D:Nt,updateUBOMapping:Kt,uniformBlockBinding:Yt,texStorage2D:Bt,texStorage3D:gt,texSubImage2D:ct,texSubImage3D:yt,compressedTexSubImage2D:xt,compressedTexSubImage3D:St,scissor:Ot,viewport:Pt,reset:le}}function bM(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,A){return d?new OffscreenCanvas(P,A):ia("canvas")}function _(P,A,K){let it=1;const at=lt(P);if((at.width>K||at.height>K)&&(it=K/Math.max(at.width,at.height)),it<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ct=Math.floor(it*at.width),yt=Math.floor(it*at.height);h===void 0&&(h=g(ct,yt));const xt=A?g(ct,yt):h;return xt.width=ct,xt.height=yt,xt.getContext("2d").drawImage(P,0,0,ct,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+ct+"x"+yt+")."),xt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),P;return P}function p(P){return P.generateMipmaps}function m(P){r.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(P,A,K,it,at=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ct=A;if(A===r.RED&&(K===r.FLOAT&&(ct=r.R32F),K===r.HALF_FLOAT&&(ct=r.R16F),K===r.UNSIGNED_BYTE&&(ct=r.R8)),A===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(ct=r.R8UI),K===r.UNSIGNED_SHORT&&(ct=r.R16UI),K===r.UNSIGNED_INT&&(ct=r.R32UI),K===r.BYTE&&(ct=r.R8I),K===r.SHORT&&(ct=r.R16I),K===r.INT&&(ct=r.R32I)),A===r.RG&&(K===r.FLOAT&&(ct=r.RG32F),K===r.HALF_FLOAT&&(ct=r.RG16F),K===r.UNSIGNED_BYTE&&(ct=r.RG8)),A===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(ct=r.RG8UI),K===r.UNSIGNED_SHORT&&(ct=r.RG16UI),K===r.UNSIGNED_INT&&(ct=r.RG32UI),K===r.BYTE&&(ct=r.RG8I),K===r.SHORT&&(ct=r.RG16I),K===r.INT&&(ct=r.RG32I)),A===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(ct=r.RGB8UI),K===r.UNSIGNED_SHORT&&(ct=r.RGB16UI),K===r.UNSIGNED_INT&&(ct=r.RGB32UI),K===r.BYTE&&(ct=r.RGB8I),K===r.SHORT&&(ct=r.RGB16I),K===r.INT&&(ct=r.RGB32I)),A===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(ct=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(ct=r.RGBA16UI),K===r.UNSIGNED_INT&&(ct=r.RGBA32UI),K===r.BYTE&&(ct=r.RGBA8I),K===r.SHORT&&(ct=r.RGBA16I),K===r.INT&&(ct=r.RGBA32I)),A===r.RGB&&K===r.UNSIGNED_INT_5_9_9_9_REV&&(ct=r.RGB9_E5),A===r.RGBA){const yt=at?El:he.getTransfer(it);K===r.FLOAT&&(ct=r.RGBA32F),K===r.HALF_FLOAT&&(ct=r.RGBA16F),K===r.UNSIGNED_BYTE&&(ct=yt===_e?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(ct=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(ct=r.RGB5_A1)}return(ct===r.R16F||ct===r.R32F||ct===r.RG16F||ct===r.RG32F||ct===r.RGBA16F||ct===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function v(P,A){let K;return P?A===null||A===ns||A===to?K=r.DEPTH24_STENCIL8:A===$i?K=r.DEPTH32F_STENCIL8:A===ea&&(K=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ns||A===to?K=r.DEPTH_COMPONENT24:A===$i?K=r.DEPTH_COMPONENT32F:A===ea&&(K=r.DEPTH_COMPONENT16),K}function b(P,A){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Si&&P.minFilter!==Ri?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function w(P){const A=P.target;A.removeEventListener("dispose",w),R(A),A.isVideoTexture&&u.delete(A)}function T(P){const A=P.target;A.removeEventListener("dispose",T),y(A)}function R(P){const A=n.get(P);if(A.__webglInit===void 0)return;const K=P.source,it=f.get(K);if(it){const at=it[A.__cacheKey];at.usedTimes--,at.usedTimes===0&&S(P),Object.keys(it).length===0&&f.delete(K)}n.remove(P)}function S(P){const A=n.get(P);r.deleteTexture(A.__webglTexture);const K=P.source,it=f.get(K);delete it[A.__cacheKey],o.memory.textures--}function y(P){const A=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(A.__webglFramebuffer[it]))for(let at=0;at<A.__webglFramebuffer[it].length;at++)r.deleteFramebuffer(A.__webglFramebuffer[it][at]);else r.deleteFramebuffer(A.__webglFramebuffer[it]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[it])}else{if(Array.isArray(A.__webglFramebuffer))for(let it=0;it<A.__webglFramebuffer.length;it++)r.deleteFramebuffer(A.__webglFramebuffer[it]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let it=0;it<A.__webglColorRenderbuffer.length;it++)A.__webglColorRenderbuffer[it]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[it]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const K=P.textures;for(let it=0,at=K.length;it<at;it++){const ct=n.get(K[it]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),o.memory.textures--),n.remove(K[it])}n.remove(P)}let I=0;function B(){I=0}function V(){const P=I;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),I+=1,P}function Y(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function Q(P,A){const K=n.get(P);if(P.isVideoTexture&&H(P),P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){const it=P.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(K,P,A);return}}e.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+A)}function G(P,A){const K=n.get(P);if(P.version>0&&K.__version!==P.version){N(K,P,A);return}e.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+A)}function X(P,A){const K=n.get(P);if(P.version>0&&K.__version!==P.version){N(K,P,A);return}e.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+A)}function z(P,A){const K=n.get(P);if(P.version>0&&K.__version!==P.version){U(K,P,A);return}e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+A)}const ht={[hu]:r.REPEAT,[Xr]:r.CLAMP_TO_EDGE,[fu]:r.MIRRORED_REPEAT},F={[Si]:r.NEAREST,[Q_]:r.NEAREST_MIPMAP_NEAREST,[xa]:r.NEAREST_MIPMAP_LINEAR,[Ri]:r.LINEAR,[tc]:r.LINEAR_MIPMAP_NEAREST,[Yr]:r.LINEAR_MIPMAP_LINEAR},_t={[ig]:r.NEVER,[cg]:r.ALWAYS,[rg]:r.LESS,[vp]:r.LEQUAL,[sg]:r.EQUAL,[lg]:r.GEQUAL,[og]:r.GREATER,[ag]:r.NOTEQUAL};function Rt(P,A){if(A.type===$i&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ri||A.magFilter===tc||A.magFilter===xa||A.magFilter===Yr||A.minFilter===Ri||A.minFilter===tc||A.minFilter===xa||A.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ht[A.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ht[A.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ht[A.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,F[A.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,F[A.minFilter]),A.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,_t[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Si||A.minFilter!==xa&&A.minFilter!==Yr||A.type===$i&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Vt(P,A){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",w));const it=A.source;let at=f.get(it);at===void 0&&(at={},f.set(it,at));const ct=Y(A);if(ct!==P.__cacheKey){at[ct]===void 0&&(at[ct]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,K=!0),at[ct].usedTimes++;const yt=at[P.__cacheKey];yt!==void 0&&(at[P.__cacheKey].usedTimes--,yt.usedTimes===0&&S(A)),P.__cacheKey=ct,P.__webglTexture=at[ct].texture}return K}function N(P,A,K){let it=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(it=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(it=r.TEXTURE_3D);const at=Vt(P,A),ct=A.source;e.bindTexture(it,P.__webglTexture,r.TEXTURE0+K);const yt=n.get(ct);if(ct.version!==yt.__version||at===!0){e.activeTexture(r.TEXTURE0+K);const xt=he.getPrimaries(he.workingColorSpace),St=A.colorSpace===dr?null:he.getPrimaries(A.colorSpace),Bt=A.colorSpace===dr||xt===St?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let gt=_(A.image,!1,i.maxTextureSize);gt=O(A,gt);const Mt=s.convert(A.format,A.colorSpace),Nt=s.convert(A.type);let Ot=x(A.internalFormat,Mt,Nt,A.colorSpace,A.isVideoTexture);Rt(it,A);let Pt;const Kt=A.mipmaps,Yt=A.isVideoTexture!==!0,le=yt.__version===void 0||at===!0,W=ct.dataReady,Et=b(A,gt);if(A.isDepthTexture)Ot=v(A.format===eo,A.type),le&&(Yt?e.texStorage2D(r.TEXTURE_2D,1,Ot,gt.width,gt.height):e.texImage2D(r.TEXTURE_2D,0,Ot,gt.width,gt.height,0,Mt,Nt,null));else if(A.isDataTexture)if(Kt.length>0){Yt&&le&&e.texStorage2D(r.TEXTURE_2D,Et,Ot,Kt[0].width,Kt[0].height);for(let ut=0,pt=Kt.length;ut<pt;ut++)Pt=Kt[ut],Yt?W&&e.texSubImage2D(r.TEXTURE_2D,ut,0,0,Pt.width,Pt.height,Mt,Nt,Pt.data):e.texImage2D(r.TEXTURE_2D,ut,Ot,Pt.width,Pt.height,0,Mt,Nt,Pt.data);A.generateMipmaps=!1}else Yt?(le&&e.texStorage2D(r.TEXTURE_2D,Et,Ot,gt.width,gt.height),W&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,gt.width,gt.height,Mt,Nt,gt.data)):e.texImage2D(r.TEXTURE_2D,0,Ot,gt.width,gt.height,0,Mt,Nt,gt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Yt&&le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Et,Ot,Kt[0].width,Kt[0].height,gt.depth);for(let ut=0,pt=Kt.length;ut<pt;ut++)if(Pt=Kt[ut],A.format!==yi)if(Mt!==null)if(Yt){if(W)if(A.layerUpdates.size>0){const Tt=Yf(Pt.width,Pt.height,A.format,A.type);for(const bt of A.layerUpdates){const qt=Pt.data.subarray(bt*Tt/Pt.data.BYTES_PER_ELEMENT,(bt+1)*Tt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,bt,Pt.width,Pt.height,1,Mt,qt)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,0,Pt.width,Pt.height,gt.depth,Mt,Pt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ut,Ot,Pt.width,Pt.height,gt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?W&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,0,Pt.width,Pt.height,gt.depth,Mt,Nt,Pt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ut,Ot,Pt.width,Pt.height,gt.depth,0,Mt,Nt,Pt.data)}else{Yt&&le&&e.texStorage2D(r.TEXTURE_2D,Et,Ot,Kt[0].width,Kt[0].height);for(let ut=0,pt=Kt.length;ut<pt;ut++)Pt=Kt[ut],A.format!==yi?Mt!==null?Yt?W&&e.compressedTexSubImage2D(r.TEXTURE_2D,ut,0,0,Pt.width,Pt.height,Mt,Pt.data):e.compressedTexImage2D(r.TEXTURE_2D,ut,Ot,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?W&&e.texSubImage2D(r.TEXTURE_2D,ut,0,0,Pt.width,Pt.height,Mt,Nt,Pt.data):e.texImage2D(r.TEXTURE_2D,ut,Ot,Pt.width,Pt.height,0,Mt,Nt,Pt.data)}else if(A.isDataArrayTexture)if(Yt){if(le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Et,Ot,gt.width,gt.height,gt.depth),W)if(A.layerUpdates.size>0){const ut=Yf(gt.width,gt.height,A.format,A.type);for(const pt of A.layerUpdates){const Tt=gt.data.subarray(pt*ut/gt.data.BYTES_PER_ELEMENT,(pt+1)*ut/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pt,gt.width,gt.height,1,Mt,Nt,Tt)}A.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Mt,Nt,gt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ot,gt.width,gt.height,gt.depth,0,Mt,Nt,gt.data);else if(A.isData3DTexture)Yt?(le&&e.texStorage3D(r.TEXTURE_3D,Et,Ot,gt.width,gt.height,gt.depth),W&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Mt,Nt,gt.data)):e.texImage3D(r.TEXTURE_3D,0,Ot,gt.width,gt.height,gt.depth,0,Mt,Nt,gt.data);else if(A.isFramebufferTexture){if(le)if(Yt)e.texStorage2D(r.TEXTURE_2D,Et,Ot,gt.width,gt.height);else{let ut=gt.width,pt=gt.height;for(let Tt=0;Tt<Et;Tt++)e.texImage2D(r.TEXTURE_2D,Tt,Ot,ut,pt,0,Mt,Nt,null),ut>>=1,pt>>=1}}else if(Kt.length>0){if(Yt&&le){const ut=lt(Kt[0]);e.texStorage2D(r.TEXTURE_2D,Et,Ot,ut.width,ut.height)}for(let ut=0,pt=Kt.length;ut<pt;ut++)Pt=Kt[ut],Yt?W&&e.texSubImage2D(r.TEXTURE_2D,ut,0,0,Mt,Nt,Pt):e.texImage2D(r.TEXTURE_2D,ut,Ot,Mt,Nt,Pt);A.generateMipmaps=!1}else if(Yt){if(le){const ut=lt(gt);e.texStorage2D(r.TEXTURE_2D,Et,Ot,ut.width,ut.height)}W&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Mt,Nt,gt)}else e.texImage2D(r.TEXTURE_2D,0,Ot,Mt,Nt,gt);p(A)&&m(it),yt.__version=ct.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function U(P,A,K){if(A.image.length!==6)return;const it=Vt(P,A),at=A.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+K);const ct=n.get(at);if(at.version!==ct.__version||it===!0){e.activeTexture(r.TEXTURE0+K);const yt=he.getPrimaries(he.workingColorSpace),xt=A.colorSpace===dr?null:he.getPrimaries(A.colorSpace),St=A.colorSpace===dr||yt===xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Bt=A.isCompressedTexture||A.image[0].isCompressedTexture,gt=A.image[0]&&A.image[0].isDataTexture,Mt=[];for(let pt=0;pt<6;pt++)!Bt&&!gt?Mt[pt]=_(A.image[pt],!0,i.maxCubemapSize):Mt[pt]=gt?A.image[pt].image:A.image[pt],Mt[pt]=O(A,Mt[pt]);const Nt=Mt[0],Ot=s.convert(A.format,A.colorSpace),Pt=s.convert(A.type),Kt=x(A.internalFormat,Ot,Pt,A.colorSpace),Yt=A.isVideoTexture!==!0,le=ct.__version===void 0||it===!0,W=at.dataReady;let Et=b(A,Nt);Rt(r.TEXTURE_CUBE_MAP,A);let ut;if(Bt){Yt&&le&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Et,Kt,Nt.width,Nt.height);for(let pt=0;pt<6;pt++){ut=Mt[pt].mipmaps;for(let Tt=0;Tt<ut.length;Tt++){const bt=ut[Tt];A.format!==yi?Ot!==null?Yt?W&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Tt,0,0,bt.width,bt.height,Ot,bt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Tt,Kt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?W&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Tt,0,0,bt.width,bt.height,Ot,Pt,bt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Tt,Kt,bt.width,bt.height,0,Ot,Pt,bt.data)}}}else{if(ut=A.mipmaps,Yt&&le){ut.length>0&&Et++;const pt=lt(Mt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Et,Kt,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(gt){Yt?W&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Mt[pt].width,Mt[pt].height,Ot,Pt,Mt[pt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Kt,Mt[pt].width,Mt[pt].height,0,Ot,Pt,Mt[pt].data);for(let Tt=0;Tt<ut.length;Tt++){const qt=ut[Tt].image[pt].image;Yt?W&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Tt+1,0,0,qt.width,qt.height,Ot,Pt,qt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Tt+1,Kt,qt.width,qt.height,0,Ot,Pt,qt.data)}}else{Yt?W&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Ot,Pt,Mt[pt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Kt,Ot,Pt,Mt[pt]);for(let Tt=0;Tt<ut.length;Tt++){const bt=ut[Tt];Yt?W&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Tt+1,0,0,Ot,Pt,bt.image[pt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Tt+1,Kt,Ot,Pt,bt.image[pt])}}}p(A)&&m(r.TEXTURE_CUBE_MAP),ct.__version=at.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function L(P,A,K,it,at,ct){const yt=s.convert(K.format,K.colorSpace),xt=s.convert(K.type),St=x(K.internalFormat,yt,xt,K.colorSpace),Bt=n.get(A),gt=n.get(K);if(gt.__renderTarget=A,!Bt.__hasExternalTextures){const Mt=Math.max(1,A.width>>ct),Nt=Math.max(1,A.height>>ct);at===r.TEXTURE_3D||at===r.TEXTURE_2D_ARRAY?e.texImage3D(at,ct,St,Mt,Nt,A.depth,0,yt,xt,null):e.texImage2D(at,ct,St,Mt,Nt,0,yt,xt,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),k(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,it,at,gt.__webglTexture,0,nt(A)):(at===r.TEXTURE_2D||at>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,it,at,gt.__webglTexture,ct),e.bindFramebuffer(r.FRAMEBUFFER,null)}function C(P,A,K){if(r.bindRenderbuffer(r.RENDERBUFFER,P),A.depthBuffer){const it=A.depthTexture,at=it&&it.isDepthTexture?it.type:null,ct=v(A.stencilBuffer,at),yt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=nt(A);k(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xt,ct,A.width,A.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,xt,ct,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,ct,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,P)}else{const it=A.textures;for(let at=0;at<it.length;at++){const ct=it[at],yt=s.convert(ct.format,ct.colorSpace),xt=s.convert(ct.type),St=x(ct.internalFormat,yt,xt,ct.colorSpace),Bt=nt(A);K&&k(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Bt,St,A.width,A.height):k(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Bt,St,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,St,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function tt(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=n.get(A.depthTexture);it.__renderTarget=A,(!it.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Q(A.depthTexture,0);const at=it.__webglTexture,ct=nt(A);if(A.depthTexture.format===ks)k(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,at,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,at,0);else if(A.depthTexture.format===eo)k(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,at,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function ft(P){const A=n.get(P),K=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const it=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),it){const at=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,it.removeEventListener("dispose",at)};it.addEventListener("dispose",at),A.__depthDisposeCallback=at}A.__boundDepthTexture=it}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");tt(A.__webglFramebuffer,P)}else if(K){A.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[it]),A.__webglDepthbuffer[it]===void 0)A.__webglDepthbuffer[it]=r.createRenderbuffer(),C(A.__webglDepthbuffer[it],P,!1);else{const at=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=A.__webglDepthbuffer[it];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,at,r.RENDERBUFFER,ct)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),C(A.__webglDepthbuffer,P,!1);else{const it=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,at),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,at)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function J(P,A,K){const it=n.get(P);A!==void 0&&L(it.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&ft(P)}function dt(P){const A=P.texture,K=n.get(P),it=n.get(A);P.addEventListener("dispose",T);const at=P.textures,ct=P.isWebGLCubeRenderTarget===!0,yt=at.length>1;if(yt||(it.__webglTexture===void 0&&(it.__webglTexture=r.createTexture()),it.__version=A.version,o.memory.textures++),ct){K.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer[xt]=[];for(let St=0;St<A.mipmaps.length;St++)K.__webglFramebuffer[xt][St]=r.createFramebuffer()}else K.__webglFramebuffer[xt]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer=[];for(let xt=0;xt<A.mipmaps.length;xt++)K.__webglFramebuffer[xt]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(yt)for(let xt=0,St=at.length;xt<St;xt++){const Bt=n.get(at[xt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&k(P)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let xt=0;xt<at.length;xt++){const St=at[xt];K.__webglColorRenderbuffer[xt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[xt]);const Bt=s.convert(St.format,St.colorSpace),gt=s.convert(St.type),Mt=x(St.internalFormat,Bt,gt,St.colorSpace,P.isXRRenderTarget===!0),Nt=nt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Nt,Mt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,K.__webglColorRenderbuffer[xt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),C(K.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){e.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture),Rt(r.TEXTURE_CUBE_MAP,A);for(let xt=0;xt<6;xt++)if(A.mipmaps&&A.mipmaps.length>0)for(let St=0;St<A.mipmaps.length;St++)L(K.__webglFramebuffer[xt][St],P,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,St);else L(K.__webglFramebuffer[xt],P,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);p(A)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let xt=0,St=at.length;xt<St;xt++){const Bt=at[xt],gt=n.get(Bt);e.bindTexture(r.TEXTURE_2D,gt.__webglTexture),Rt(r.TEXTURE_2D,Bt),L(K.__webglFramebuffer,P,Bt,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,0),p(Bt)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let xt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(xt,it.__webglTexture),Rt(xt,A),A.mipmaps&&A.mipmaps.length>0)for(let St=0;St<A.mipmaps.length;St++)L(K.__webglFramebuffer[St],P,A,r.COLOR_ATTACHMENT0,xt,St);else L(K.__webglFramebuffer,P,A,r.COLOR_ATTACHMENT0,xt,0);p(A)&&m(xt),e.unbindTexture()}P.depthBuffer&&ft(P)}function et(P){const A=P.textures;for(let K=0,it=A.length;K<it;K++){const at=A[K];if(p(at)){const ct=M(P),yt=n.get(at).__webglTexture;e.bindTexture(ct,yt),m(ct),e.unbindTexture()}}}const q=[],E=[];function st(P){if(P.samples>0){if(k(P)===!1){const A=P.textures,K=P.width,it=P.height;let at=r.COLOR_BUFFER_BIT;const ct=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,yt=n.get(P),xt=A.length>1;if(xt)for(let St=0;St<A.length;St++)e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let St=0;St<A.length;St++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(at|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(at|=r.STENCIL_BUFFER_BIT)),xt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,yt.__webglColorRenderbuffer[St]);const Bt=n.get(A[St]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Bt,0)}r.blitFramebuffer(0,0,K,it,0,0,K,it,at,r.NEAREST),l===!0&&(q.length=0,E.length=0,q.push(r.COLOR_ATTACHMENT0+St),P.depthBuffer&&P.resolveDepthBuffer===!1&&(q.push(ct),E.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,E)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,q))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),xt)for(let St=0;St<A.length;St++){e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.RENDERBUFFER,yt.__webglColorRenderbuffer[St]);const Bt=n.get(A[St]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.TEXTURE_2D,Bt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const A=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function nt(P){return Math.min(i.maxSamples,P.samples)}function k(P){const A=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function H(P){const A=o.render.frame;u.get(P)!==A&&(u.set(P,A),P.update())}function O(P,A){const K=P.colorSpace,it=P.format,at=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||K!==no&&K!==dr&&(he.getTransfer(K)===_e?(it!==yi||at!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),A}function lt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.setTexture2D=Q,this.setTexture2DArray=G,this.setTexture3D=X,this.setTextureCube=z,this.rebindTextures=J,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=L,this.useMultisampledRTT=k}function wM(r,t){function e(n,i=dr){let s;const o=he.getTransfer(i);if(n===nr)return r.UNSIGNED_BYTE;if(n===xh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===yh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===cp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===ap)return r.BYTE;if(n===lp)return r.SHORT;if(n===ea)return r.UNSIGNED_SHORT;if(n===vh)return r.INT;if(n===ns)return r.UNSIGNED_INT;if(n===$i)return r.FLOAT;if(n===Qi)return r.HALF_FLOAT;if(n===up)return r.ALPHA;if(n===hp)return r.RGB;if(n===yi)return r.RGBA;if(n===fp)return r.LUMINANCE;if(n===dp)return r.LUMINANCE_ALPHA;if(n===ks)return r.DEPTH_COMPONENT;if(n===eo)return r.DEPTH_STENCIL;if(n===pp)return r.RED;if(n===Sh)return r.RED_INTEGER;if(n===mp)return r.RG;if(n===Mh)return r.RG_INTEGER;if(n===Th)return r.RGBA_INTEGER;if(n===cl||n===ul||n===hl||n===fl)if(o===_e)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===cl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===cl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ul)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===du||n===pu||n===mu||n===_u)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===du)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_u)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gu||n===vu||n===xu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gu||n===vu)return o===_e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yu||n===Su||n===Mu||n===Tu||n===Eu||n===bu||n===wu||n===Au||n===Cu||n===Ru||n===Pu||n===Du||n===Lu||n===Iu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===yu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Su)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Au)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ru)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Du)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Iu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dl||n===Uu||n===Nu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===dl)return o===_e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_p||n===Ou||n===Fu||n===Bu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===dl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ou)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===to?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const AM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CM=`
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

}`;class RM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Cn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new An({vertexShader:AM,fragmentShader:CM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new mo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PM extends ho{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new RM,p=e.getContextAttributes();let m=null,M=null;const x=[],v=[],b=new mt;let w=null;const T=new Yn;T.viewport=new Ie;const R=new Yn;R.viewport=new Ie;const S=[T,R],y=new J0;let I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let U=x[N];return U===void 0&&(U=new yc,x[N]=U),U.getTargetRaySpace()},this.getControllerGrip=function(N){let U=x[N];return U===void 0&&(U=new yc,x[N]=U),U.getGripSpace()},this.getHand=function(N){let U=x[N];return U===void 0&&(U=new yc,x[N]=U),U.getHandSpace()};function V(N){const U=v.indexOf(N.inputSource);if(U===-1)return;const L=x[U];L!==void 0&&(L.update(N.inputSource,N.frame,c||o),L.dispatchEvent({type:N.type,data:N.inputSource}))}function Y(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",Q);for(let N=0;N<x.length;N++){const U=v[N];U!==null&&(v[N]=null,x[N].disconnect(U))}I=null,B=null,_.reset(),t.setRenderTarget(m),d=null,f=null,h=null,i=null,M=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",Q),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(b),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let L=null,C=null,tt=null;p.depth&&(tt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,L=p.stencil?eo:ks,C=p.stencil?to:ns);const ft={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:s};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(ft),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Mi(f.textureWidth,f.textureHeight,{format:yi,type:nr,depthTexture:new Rp(f.textureWidth,f.textureHeight,C,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const L={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,L),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Mi(d.framebufferWidth,d.framebufferHeight,{format:yi,type:nr,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Vt.setContext(i),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q(N){for(let U=0;U<N.removed.length;U++){const L=N.removed[U],C=v.indexOf(L);C>=0&&(v[C]=null,x[C].disconnect(L))}for(let U=0;U<N.added.length;U++){const L=N.added[U];let C=v.indexOf(L);if(C===-1){for(let ft=0;ft<x.length;ft++)if(ft>=v.length){v.push(L),C=ft;break}else if(v[ft]===null){v[ft]=L,C=ft;break}if(C===-1)break}const tt=x[C];tt&&tt.connect(L)}}const G=new $,X=new $;function z(N,U,L){G.setFromMatrixPosition(U.matrixWorld),X.setFromMatrixPosition(L.matrixWorld);const C=G.distanceTo(X),tt=U.projectionMatrix.elements,ft=L.projectionMatrix.elements,J=tt[14]/(tt[10]-1),dt=tt[14]/(tt[10]+1),et=(tt[9]+1)/tt[5],q=(tt[9]-1)/tt[5],E=(tt[8]-1)/tt[0],st=(ft[8]+1)/ft[0],nt=J*E,k=J*st,H=C/(-E+st),O=H*-E;if(U.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(O),N.translateZ(H),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),tt[10]===-1)N.projectionMatrix.copy(U.projectionMatrix),N.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const lt=J+H,P=dt+H,A=nt-O,K=k+(C-O),it=et*dt/P*lt,at=q*dt/P*lt;N.projectionMatrix.makePerspective(A,K,it,at,lt,P),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function ht(N,U){U===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(U.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;let U=N.near,L=N.far;_.texture!==null&&(_.depthNear>0&&(U=_.depthNear),_.depthFar>0&&(L=_.depthFar)),y.near=R.near=T.near=U,y.far=R.far=T.far=L,(I!==y.near||B!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,B=y.far),T.layers.mask=N.layers.mask|2,R.layers.mask=N.layers.mask|4,y.layers.mask=T.layers.mask|R.layers.mask;const C=N.parent,tt=y.cameras;ht(y,C);for(let ft=0;ft<tt.length;ft++)ht(tt[ft],C);tt.length===2?z(y,T,R):y.projectionMatrix.copy(T.projectionMatrix),F(N,y,C)};function F(N,U,L){L===null?N.matrix.copy(U.matrixWorld):(N.matrix.copy(L.matrixWorld),N.matrix.invert(),N.matrix.multiply(U.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(U.projectionMatrix),N.projectionMatrixInverse.copy(U.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=na*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=N)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let _t=null;function Rt(N,U){if(u=U.getViewerPose(c||o),g=U,u!==null){const L=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let C=!1;L.length!==y.cameras.length&&(y.cameras.length=0,C=!0);for(let J=0;J<L.length;J++){const dt=L[J];let et=null;if(d!==null)et=d.getViewport(dt);else{const E=h.getViewSubImage(f,dt);et=E.viewport,J===0&&(t.setRenderTargetTextures(M,E.colorTexture,f.ignoreDepthValues?void 0:E.depthStencilTexture),t.setRenderTarget(M))}let q=S[J];q===void 0&&(q=new Yn,q.layers.enable(J),q.viewport=new Ie,S[J]=q),q.matrix.fromArray(dt.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(dt.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(et.x,et.y,et.width,et.height),J===0&&(y.matrix.copy(q.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),C===!0&&y.cameras.push(q)}const tt=i.enabledFeatures;if(tt&&tt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const J=h.getDepthInformation(L[0]);J&&J.isValid&&J.texture&&_.init(t,J,i.renderState)}}for(let L=0;L<x.length;L++){const C=v[L],tt=x[L];C!==null&&tt!==void 0&&tt.update(C,U,c||o)}_t&&_t(N,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),g=null}const Vt=new zp;Vt.setAnimationLoop(Rt),this.setAnimationLoop=function(N){_t=N},this.dispose=function(){}}}const Ur=new Oi,DM=new Ee;function LM(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,wp(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,x,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Dn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Dn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=t.get(m),x=M.envMap,v=M.envMapRotation;x&&(p.envMap.value=x,Ur.copy(v),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),p.envMapRotation.value.setFromMatrix4(DM.makeRotationFromEuler(Ur)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Dn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function IM(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function c(M,x){let v=i[M.id];v===void 0&&(g(M),v=u(M),i[M.id]=v,M.addEventListener("dispose",p));const b=x.program;n.updateUBOMapping(M,b);const w=t.render.frame;s[M.id]!==w&&(f(M),s[M.id]=w)}function u(M){const x=h();M.__bindingPointIndex=x;const v=r.createBuffer(),b=M.__size,w=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,b,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,v),v}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=i[M.id],v=M.uniforms,b=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,T=v.length;w<T;w++){const R=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,y=R.length;S<y;S++){const I=R[S];if(d(I,w,S,b)===!0){const B=I.__offset,V=Array.isArray(I.value)?I.value:[I.value];let Y=0;for(let Q=0;Q<V.length;Q++){const G=V[Q],X=_(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,B+Y,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,Y),Y+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(M,x,v,b){const w=M.value,T=x+"_"+v;if(b[T]===void 0)return typeof w=="number"||typeof w=="boolean"?b[T]=w:b[T]=w.clone(),!0;{const R=b[T];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return b[T]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(M){const x=M.uniforms;let v=0;const b=16;for(let T=0,R=x.length;T<R;T++){const S=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,I=S.length;y<I;y++){const B=S[y],V=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,Q=V.length;Y<Q;Y++){const G=V[Y],X=_(G),z=v%b,ht=z%X.boundary,F=z+ht;v+=ht,F!==0&&b-F<X.storage&&(v+=b-F),B.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=X.storage}}}const w=v%b;return w>0&&(v+=b-w),M.__size=v,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){const x=M.target;x.removeEventListener("dispose",p);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Nh{constructor(t={}){const{canvas:e=wg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,m=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wn,this.toneMapping=xr,this.toneMappingExposure=1;const v=this;let b=!1,w=0,T=0,R=null,S=-1,y=null;const I=new Ie,B=new Ie;let V=null;const Y=new Xt(0);let Q=0,G=e.width,X=e.height,z=1,ht=null,F=null;const _t=new Ie(0,0,G,X),Rt=new Ie(0,0,G,X);let Vt=!1;const N=new Ch;let U=!1,L=!1;this.transmissionResolutionScale=1;const C=new Ee,tt=new Ee,ft=new $,J=new Ie,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function q(){return R===null?z:1}let E=n;function st(D,j){return e.getContext(D,j)}try{const D={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_h}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),E===null){const j="webgl2";if(E=st(j,D),E===null)throw st(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let nt,k,H,O,lt,P,A,K,it,at,ct,yt,xt,St,Bt,gt,Mt,Nt,Ot,Pt,Kt,Yt,le,W;function Et(){nt=new Wy(E),nt.init(),Yt=new wM(E,nt),k=new By(E,nt,t,Yt),H=new EM(E,nt),k.reverseDepthBuffer&&f&&H.buffers.depth.setReversed(!0),O=new qy(E),lt=new hM,P=new bM(E,nt,H,lt,k,Yt,O),A=new ky(v),K=new Gy(v),it=new tv(E),le=new Oy(E,it),at=new Xy(E,it,O,le),ct=new $y(E,at,it,O),Ot=new Zy(E,k,P),gt=new zy(lt),yt=new uM(v,A,K,nt,k,le,gt),xt=new LM(v,lt),St=new dM,Bt=new xM(nt),Nt=new Ny(v,A,K,H,ct,d,l),Mt=new MM(v,ct,k),W=new IM(E,O,k,H),Pt=new Fy(E,nt,O),Kt=new Yy(E,nt,O),O.programs=yt.programs,v.capabilities=k,v.extensions=nt,v.properties=lt,v.renderLists=St,v.shadowMap=Mt,v.state=H,v.info=O}Et();const ut=new PM(v,E);this.xr=ut,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const D=nt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=nt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(D){D!==void 0&&(z=D,this.setSize(G,X,!1))},this.getSize=function(D){return D.set(G,X)},this.setSize=function(D,j,ot=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=D,X=j,e.width=Math.floor(D*z),e.height=Math.floor(j*z),ot===!0&&(e.style.width=D+"px",e.style.height=j+"px"),this.setViewport(0,0,D,j)},this.getDrawingBufferSize=function(D){return D.set(G*z,X*z).floor()},this.setDrawingBufferSize=function(D,j,ot){G=D,X=j,z=ot,e.width=Math.floor(D*ot),e.height=Math.floor(j*ot),this.setViewport(0,0,D,j)},this.getCurrentViewport=function(D){return D.copy(I)},this.getViewport=function(D){return D.copy(_t)},this.setViewport=function(D,j,ot,rt){D.isVector4?_t.set(D.x,D.y,D.z,D.w):_t.set(D,j,ot,rt),H.viewport(I.copy(_t).multiplyScalar(z).round())},this.getScissor=function(D){return D.copy(Rt)},this.setScissor=function(D,j,ot,rt){D.isVector4?Rt.set(D.x,D.y,D.z,D.w):Rt.set(D,j,ot,rt),H.scissor(B.copy(Rt).multiplyScalar(z).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(D){H.setScissorTest(Vt=D)},this.setOpaqueSort=function(D){ht=D},this.setTransparentSort=function(D){F=D},this.getClearColor=function(D){return D.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(D=!0,j=!0,ot=!0){let rt=0;if(D){let Z=!1;if(R!==null){const vt=R.texture.format;Z=vt===Th||vt===Mh||vt===Sh}if(Z){const vt=R.texture.type,At=vt===nr||vt===ns||vt===ea||vt===to||vt===xh||vt===yh,It=Nt.getClearColor(),Lt=Nt.getClearAlpha(),Ht=It.r,Wt=It.g,kt=It.b;At?(g[0]=Ht,g[1]=Wt,g[2]=kt,g[3]=Lt,E.clearBufferuiv(E.COLOR,0,g)):(_[0]=Ht,_[1]=Wt,_[2]=kt,_[3]=Lt,E.clearBufferiv(E.COLOR,0,_))}else rt|=E.COLOR_BUFFER_BIT}j&&(rt|=E.DEPTH_BUFFER_BIT),ot&&(rt|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),Nt.dispose(),St.dispose(),Bt.dispose(),lt.dispose(),A.dispose(),K.dispose(),ct.dispose(),le.dispose(),W.dispose(),yt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",wt),ut.removeEventListener("sessionend",Jt),zt.stop()};function pt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const D=O.autoReset,j=Mt.enabled,ot=Mt.autoUpdate,rt=Mt.needsUpdate,Z=Mt.type;Et(),O.autoReset=D,Mt.enabled=j,Mt.autoUpdate=ot,Mt.needsUpdate=rt,Mt.type=Z}function bt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function qt(D){const j=D.target;j.removeEventListener("dispose",qt),ce(j)}function ce(D){De(D),lt.remove(D)}function De(D){const j=lt.get(D).programs;j!==void 0&&(j.forEach(function(ot){yt.releaseProgram(ot)}),D.isShaderMaterial&&yt.releaseShaderCache(D))}this.renderBufferDirect=function(D,j,ot,rt,Z,vt){j===null&&(j=dt);const At=Z.isMesh&&Z.matrixWorld.determinant()<0,It=Bn(D,j,ot,rt,Z);H.setMaterial(rt,At);let Lt=ot.index,Ht=1;if(rt.wireframe===!0){if(Lt=at.getWireframeAttribute(ot),Lt===void 0)return;Ht=2}const Wt=ot.drawRange,kt=ot.attributes.position;let ee=Wt.start*Ht,de=(Wt.start+Wt.count)*Ht;vt!==null&&(ee=Math.max(ee,vt.start*Ht),de=Math.min(de,(vt.start+vt.count)*Ht)),Lt!==null?(ee=Math.max(ee,0),de=Math.min(de,Lt.count)):kt!=null&&(ee=Math.max(ee,0),de=Math.min(de,kt.count));const Be=de-ee;if(Be<0||Be===1/0)return;le.setup(Z,rt,It,ot,Lt);let Le,ue=Pt;if(Lt!==null&&(Le=it.get(Lt),ue=Kt,ue.setIndex(Le)),Z.isMesh)rt.wireframe===!0?(H.setLineWidth(rt.wireframeLinewidth*q()),ue.setMode(E.LINES)):ue.setMode(E.TRIANGLES);else if(Z.isLine){let Gt=rt.linewidth;Gt===void 0&&(Gt=1),H.setLineWidth(Gt*q()),Z.isLineSegments?ue.setMode(E.LINES):Z.isLineLoop?ue.setMode(E.LINE_LOOP):ue.setMode(E.LINE_STRIP)}else Z.isPoints?ue.setMode(E.POINTS):Z.isSprite&&ue.setMode(E.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ue.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))ue.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Gt=Z._multiDrawStarts,rn=Z._multiDrawCounts,pe=Z._multiDrawCount,di=Lt?it.get(Lt).bytesPerElement:1,fs=lt.get(rt).currentProgram.getUniforms();for(let zn=0;zn<pe;zn++)fs.setValue(E,"_gl_DrawID",zn),ue.render(Gt[zn]/di,rn[zn])}else if(Z.isInstancedMesh)ue.renderInstances(ee,Be,Z.count);else if(ot.isInstancedBufferGeometry){const Gt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,rn=Math.min(ot.instanceCount,Gt);ue.renderInstances(ee,Be,rn)}else ue.render(ee,Be)};function Dt(D,j,ot){D.transparent===!0&&D.side===Zn&&D.forceSinglePass===!1?(D.side=Dn,D.needsUpdate=!0,ge(D,j,ot),D.side=Tr,D.needsUpdate=!0,ge(D,j,ot),D.side=Zn):ge(D,j,ot)}this.compile=function(D,j,ot=null){ot===null&&(ot=D),m=Bt.get(ot),m.init(j),x.push(m),ot.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),D!==ot&&D.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights();const rt=new Set;return D.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const vt=Z.material;if(vt)if(Array.isArray(vt))for(let At=0;At<vt.length;At++){const It=vt[At];Dt(It,ot,Z),rt.add(It)}else Dt(vt,ot,Z),rt.add(vt)}),x.pop(),m=null,rt},this.compileAsync=function(D,j,ot=null){const rt=this.compile(D,j,ot);return new Promise(Z=>{function vt(){if(rt.forEach(function(At){lt.get(At).currentProgram.isReady()&&rt.delete(At)}),rt.size===0){Z(D);return}setTimeout(vt,10)}nt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Ft=null;function jt(D){Ft&&Ft(D)}function wt(){zt.stop()}function Jt(){zt.start()}const zt=new zp;zt.setAnimationLoop(jt),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(D){Ft=D,ut.setAnimationLoop(D),D===null?zt.stop():zt.start()},ut.addEventListener("sessionstart",wt),ut.addEventListener("sessionend",Jt),this.render=function(D,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(j),j=ut.getCamera()),D.isScene===!0&&D.onBeforeRender(v,D,j,R),m=Bt.get(D,x.length),m.init(j),x.push(m),tt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),N.setFromProjectionMatrix(tt),L=this.localClippingEnabled,U=gt.init(this.clippingPlanes,L),p=St.get(D,M.length),p.init(),M.push(p),ut.enabled===!0&&ut.isPresenting===!0){const vt=v.xr.getDepthSensingMesh();vt!==null&&Zt(vt,j,-1/0,v.sortObjects)}Zt(D,j,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(ht,F),et=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,et&&Nt.addToRenderList(p,D),this.info.render.frame++,U===!0&&gt.beginShadows();const ot=m.state.shadowsArray;Mt.render(ot,D,j),U===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=p.opaque,Z=p.transmissive;if(m.setupLights(),j.isArrayCamera){const vt=j.cameras;if(Z.length>0)for(let At=0,It=vt.length;At<It;At++){const Lt=vt[At];ie(rt,Z,D,Lt)}et&&Nt.render(D);for(let At=0,It=vt.length;At<It;At++){const Lt=vt[At];Ne(p,D,Lt,Lt.viewport)}}else Z.length>0&&ie(rt,Z,D,j),et&&Nt.render(D),Ne(p,D,j);R!==null&&T===0&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),D.isScene===!0&&D.onAfterRender(v,D,j),le.resetDefaultState(),S=-1,y=null,x.pop(),x.length>0?(m=x[x.length-1],U===!0&&gt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function Zt(D,j,ot,rt){if(D.visible===!1)return;if(D.layers.test(j.layers)){if(D.isGroup)ot=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(j);else if(D.isLight)m.pushLight(D),D.castShadow&&m.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||N.intersectsSprite(D)){rt&&J.setFromMatrixPosition(D.matrixWorld).applyMatrix4(tt);const At=ct.update(D),It=D.material;It.visible&&p.push(D,At,It,ot,J.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||N.intersectsObject(D))){const At=ct.update(D),It=D.material;if(rt&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),J.copy(D.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),J.copy(At.boundingSphere.center)),J.applyMatrix4(D.matrixWorld).applyMatrix4(tt)),Array.isArray(It)){const Lt=At.groups;for(let Ht=0,Wt=Lt.length;Ht<Wt;Ht++){const kt=Lt[Ht],ee=It[kt.materialIndex];ee&&ee.visible&&p.push(D,At,ee,ot,J.z,kt)}}else It.visible&&p.push(D,At,It,ot,J.z,null)}}const vt=D.children;for(let At=0,It=vt.length;At<It;At++)Zt(vt[At],j,ot,rt)}function Ne(D,j,ot,rt){const Z=D.opaque,vt=D.transmissive,At=D.transparent;m.setupLightsView(ot),U===!0&&gt.setGlobalState(v.clippingPlanes,ot),rt&&H.viewport(I.copy(rt)),Z.length>0&&ye(Z,j,ot),vt.length>0&&ye(vt,j,ot),At.length>0&&ye(At,j,ot),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function ie(D,j,ot,rt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[rt.id]===void 0&&(m.state.transmissionRenderTarget[rt.id]=new Mi(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?Qi:nr,minFilter:Yr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const vt=m.state.transmissionRenderTarget[rt.id],At=rt.viewport||I;vt.setSize(At.z*v.transmissionResolutionScale,At.w*v.transmissionResolutionScale);const It=v.getRenderTarget();v.setRenderTarget(vt),v.getClearColor(Y),Q=v.getClearAlpha(),Q<1&&v.setClearColor(16777215,.5),v.clear(),et&&Nt.render(ot);const Lt=v.toneMapping;v.toneMapping=xr;const Ht=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),m.setupLightsView(rt),U===!0&&gt.setGlobalState(v.clippingPlanes,rt),ye(D,ot,rt),P.updateMultisampleRenderTarget(vt),P.updateRenderTargetMipmap(vt),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let kt=0,ee=j.length;kt<ee;kt++){const de=j[kt],Be=de.object,Le=de.geometry,ue=de.material,Gt=de.group;if(ue.side===Zn&&Be.layers.test(rt.layers)){const rn=ue.side;ue.side=Dn,ue.needsUpdate=!0,We(Be,ot,rt,Le,ue,Gt),ue.side=rn,ue.needsUpdate=!0,Wt=!0}}Wt===!0&&(P.updateMultisampleRenderTarget(vt),P.updateRenderTargetMipmap(vt))}v.setRenderTarget(It),v.setClearColor(Y,Q),Ht!==void 0&&(rt.viewport=Ht),v.toneMapping=Lt}function ye(D,j,ot){const rt=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,vt=D.length;Z<vt;Z++){const At=D[Z],It=At.object,Lt=At.geometry,Ht=rt===null?At.material:rt,Wt=At.group;It.layers.test(ot.layers)&&We(It,j,ot,Lt,Ht,Wt)}}function We(D,j,ot,rt,Z,vt){D.onBeforeRender(v,j,ot,rt,Z,vt),D.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),Z.onBeforeRender(v,j,ot,rt,D,vt),Z.transparent===!0&&Z.side===Zn&&Z.forceSinglePass===!1?(Z.side=Dn,Z.needsUpdate=!0,v.renderBufferDirect(ot,j,rt,Z,D,vt),Z.side=Tr,Z.needsUpdate=!0,v.renderBufferDirect(ot,j,rt,Z,D,vt),Z.side=Zn):v.renderBufferDirect(ot,j,rt,Z,D,vt),D.onAfterRender(v,j,ot,rt,Z,vt)}function ge(D,j,ot){j.isScene!==!0&&(j=dt);const rt=lt.get(D),Z=m.state.lights,vt=m.state.shadowsArray,At=Z.state.version,It=yt.getParameters(D,Z.state,vt,j,ot),Lt=yt.getProgramCacheKey(It);let Ht=rt.programs;rt.environment=D.isMeshStandardMaterial?j.environment:null,rt.fog=j.fog,rt.envMap=(D.isMeshStandardMaterial?K:A).get(D.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&D.envMap===null?j.environmentRotation:D.envMapRotation,Ht===void 0&&(D.addEventListener("dispose",qt),Ht=new Map,rt.programs=Ht);let Wt=Ht.get(Lt);if(Wt!==void 0){if(rt.currentProgram===Wt&&rt.lightsStateVersion===At)return fe(D,It),Wt}else It.uniforms=yt.getUniforms(D),D.onBeforeCompile(It,v),Wt=yt.acquireProgram(It,Lt),Ht.set(Lt,Wt),rt.uniforms=It.uniforms;const kt=rt.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(kt.clippingPlanes=gt.uniform),fe(D,It),rt.needsLights=_n(D),rt.lightsStateVersion=At,rt.needsLights&&(kt.ambientLightColor.value=Z.state.ambient,kt.lightProbe.value=Z.state.probe,kt.directionalLights.value=Z.state.directional,kt.directionalLightShadows.value=Z.state.directionalShadow,kt.spotLights.value=Z.state.spot,kt.spotLightShadows.value=Z.state.spotShadow,kt.rectAreaLights.value=Z.state.rectArea,kt.ltc_1.value=Z.state.rectAreaLTC1,kt.ltc_2.value=Z.state.rectAreaLTC2,kt.pointLights.value=Z.state.point,kt.pointLightShadows.value=Z.state.pointShadow,kt.hemisphereLights.value=Z.state.hemi,kt.directionalShadowMap.value=Z.state.directionalShadowMap,kt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,kt.spotShadowMap.value=Z.state.spotShadowMap,kt.spotLightMatrix.value=Z.state.spotLightMatrix,kt.spotLightMap.value=Z.state.spotLightMap,kt.pointShadowMap.value=Z.state.pointShadowMap,kt.pointShadowMatrix.value=Z.state.pointShadowMatrix),rt.currentProgram=Wt,rt.uniformsList=null,Wt}function ve(D){if(D.uniformsList===null){const j=D.currentProgram.getUniforms();D.uniformsList=pl.seqWithValue(j.seq,D.uniforms)}return D.uniformsList}function fe(D,j){const ot=lt.get(D);ot.outputColorSpace=j.outputColorSpace,ot.batching=j.batching,ot.batchingColor=j.batchingColor,ot.instancing=j.instancing,ot.instancingColor=j.instancingColor,ot.instancingMorph=j.instancingMorph,ot.skinning=j.skinning,ot.morphTargets=j.morphTargets,ot.morphNormals=j.morphNormals,ot.morphColors=j.morphColors,ot.morphTargetsCount=j.morphTargetsCount,ot.numClippingPlanes=j.numClippingPlanes,ot.numIntersection=j.numClipIntersection,ot.vertexAlphas=j.vertexAlphas,ot.vertexTangents=j.vertexTangents,ot.toneMapping=j.toneMapping}function Bn(D,j,ot,rt,Z){j.isScene!==!0&&(j=dt),P.resetTextureUnits();const vt=j.fog,At=rt.isMeshStandardMaterial?j.environment:null,It=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:no,Lt=(rt.isMeshStandardMaterial?K:A).get(rt.envMap||At),Ht=rt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,Wt=!!ot.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),kt=!!ot.morphAttributes.position,ee=!!ot.morphAttributes.normal,de=!!ot.morphAttributes.color;let Be=xr;rt.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Be=v.toneMapping);const Le=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,ue=Le!==void 0?Le.length:0,Gt=lt.get(rt),rn=m.state.lights;if(U===!0&&(L===!0||D!==y)){const gn=D===y&&rt.id===S;gt.setState(rt,D,gn)}let pe=!1;rt.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==rn.state.version||Gt.outputColorSpace!==It||Z.isBatchedMesh&&Gt.batching===!1||!Z.isBatchedMesh&&Gt.batching===!0||Z.isBatchedMesh&&Gt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Gt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Gt.instancing===!1||!Z.isInstancedMesh&&Gt.instancing===!0||Z.isSkinnedMesh&&Gt.skinning===!1||!Z.isSkinnedMesh&&Gt.skinning===!0||Z.isInstancedMesh&&Gt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Gt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Gt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Gt.instancingMorph===!1&&Z.morphTexture!==null||Gt.envMap!==Lt||rt.fog===!0&&Gt.fog!==vt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==gt.numPlanes||Gt.numIntersection!==gt.numIntersection)||Gt.vertexAlphas!==Ht||Gt.vertexTangents!==Wt||Gt.morphTargets!==kt||Gt.morphNormals!==ee||Gt.morphColors!==de||Gt.toneMapping!==Be||Gt.morphTargetsCount!==ue)&&(pe=!0):(pe=!0,Gt.__version=rt.version);let di=Gt.currentProgram;pe===!0&&(di=ge(rt,j,Z));let fs=!1,zn=!1,vo=!1;const be=di.getUniforms(),ii=Gt.uniforms;if(H.useProgram(di.program)&&(fs=!0,zn=!0,vo=!0),rt.id!==S&&(S=rt.id,zn=!0),fs||y!==D){H.buffers.depth.getReversed()?(C.copy(D.projectionMatrix),Cg(C),Rg(C),be.setValue(E,"projectionMatrix",C)):be.setValue(E,"projectionMatrix",D.projectionMatrix),be.setValue(E,"viewMatrix",D.matrixWorldInverse);const Rn=be.map.cameraPosition;Rn!==void 0&&Rn.setValue(E,ft.setFromMatrixPosition(D.matrixWorld)),k.logarithmicDepthBuffer&&be.setValue(E,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&be.setValue(E,"isOrthographic",D.isOrthographicCamera===!0),y!==D&&(y=D,zn=!0,vo=!0)}if(Z.isSkinnedMesh){be.setOptional(E,Z,"bindMatrix"),be.setOptional(E,Z,"bindMatrixInverse");const gn=Z.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),be.setValue(E,"boneTexture",gn.boneTexture,P))}Z.isBatchedMesh&&(be.setOptional(E,Z,"batchingTexture"),be.setValue(E,"batchingTexture",Z._matricesTexture,P),be.setOptional(E,Z,"batchingIdTexture"),be.setValue(E,"batchingIdTexture",Z._indirectTexture,P),be.setOptional(E,Z,"batchingColorTexture"),Z._colorsTexture!==null&&be.setValue(E,"batchingColorTexture",Z._colorsTexture,P));const ri=ot.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&Ot.update(Z,ot,di),(zn||Gt.receiveShadow!==Z.receiveShadow)&&(Gt.receiveShadow=Z.receiveShadow,be.setValue(E,"receiveShadow",Z.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(ii.envMap.value=Lt,ii.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&j.environment!==null&&(ii.envMapIntensity.value=j.environmentIntensity),zn&&(be.setValue(E,"toneMappingExposure",v.toneMappingExposure),Gt.needsLights&&Te(ii,vo),vt&&rt.fog===!0&&xt.refreshFogUniforms(ii,vt),xt.refreshMaterialUniforms(ii,rt,z,X,m.state.transmissionRenderTarget[D.id]),pl.upload(E,ve(Gt),ii,P)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(pl.upload(E,ve(Gt),ii,P),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&be.setValue(E,"center",Z.center),be.setValue(E,"modelViewMatrix",Z.modelViewMatrix),be.setValue(E,"normalMatrix",Z.normalMatrix),be.setValue(E,"modelMatrix",Z.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const gn=rt.uniformsGroups;for(let Rn=0,Ql=gn.length;Rn<Ql;Rn++){const Cr=gn[Rn];W.update(Cr,di),W.bind(Cr,di)}}return di}function Te(D,j){D.ambientLightColor.needsUpdate=j,D.lightProbe.needsUpdate=j,D.directionalLights.needsUpdate=j,D.directionalLightShadows.needsUpdate=j,D.pointLights.needsUpdate=j,D.pointLightShadows.needsUpdate=j,D.spotLights.needsUpdate=j,D.spotLightShadows.needsUpdate=j,D.rectAreaLights.needsUpdate=j,D.hemisphereLights.needsUpdate=j}function _n(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(D,j,ot){lt.get(D.texture).__webglTexture=j,lt.get(D.depthTexture).__webglTexture=ot;const rt=lt.get(D);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=ot===void 0,rt.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,j){const ot=lt.get(D);ot.__webglFramebuffer=j,ot.__useDefaultFramebuffer=j===void 0};const ni=E.createFramebuffer();this.setRenderTarget=function(D,j=0,ot=0){R=D,w=j,T=ot;let rt=!0,Z=null,vt=!1,At=!1;if(D){const Lt=lt.get(D);if(Lt.__useDefaultFramebuffer!==void 0)H.bindFramebuffer(E.FRAMEBUFFER,null),rt=!1;else if(Lt.__webglFramebuffer===void 0)P.setupRenderTarget(D);else if(Lt.__hasExternalTextures)P.rebindTextures(D,lt.get(D.texture).__webglTexture,lt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const kt=D.depthTexture;if(Lt.__boundDepthTexture!==kt){if(kt!==null&&lt.has(kt)&&(D.width!==kt.image.width||D.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(D)}}const Ht=D.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(At=!0);const Wt=lt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Wt[j])?Z=Wt[j][ot]:Z=Wt[j],vt=!0):D.samples>0&&P.useMultisampledRTT(D)===!1?Z=lt.get(D).__webglMultisampledFramebuffer:Array.isArray(Wt)?Z=Wt[ot]:Z=Wt,I.copy(D.viewport),B.copy(D.scissor),V=D.scissorTest}else I.copy(_t).multiplyScalar(z).floor(),B.copy(Rt).multiplyScalar(z).floor(),V=Vt;if(ot!==0&&(Z=ni),H.bindFramebuffer(E.FRAMEBUFFER,Z)&&rt&&H.drawBuffers(D,Z),H.viewport(I),H.scissor(B),H.setScissorTest(V),vt){const Lt=lt.get(D.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+j,Lt.__webglTexture,ot)}else if(At){const Lt=lt.get(D.texture),Ht=j;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Lt.__webglTexture,ot,Ht)}else if(D!==null&&ot!==0){const Lt=lt.get(D.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Lt.__webglTexture,ot)}S=-1},this.readRenderTargetPixels=function(D,j,ot,rt,Z,vt,At){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=lt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It){H.bindFramebuffer(E.FRAMEBUFFER,It);try{const Lt=D.texture,Ht=Lt.format,Wt=Lt.type;if(!k.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=D.width-rt&&ot>=0&&ot<=D.height-Z&&E.readPixels(j,ot,rt,Z,Yt.convert(Ht),Yt.convert(Wt),vt)}finally{const Lt=R!==null?lt.get(R).__webglFramebuffer:null;H.bindFramebuffer(E.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(D,j,ot,rt,Z,vt,At){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=lt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It){const Lt=D.texture,Ht=Lt.format,Wt=Lt.type;if(!k.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=D.width-rt&&ot>=0&&ot<=D.height-Z){H.bindFramebuffer(E.FRAMEBUFFER,It);const kt=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,kt),E.bufferData(E.PIXEL_PACK_BUFFER,vt.byteLength,E.STREAM_READ),E.readPixels(j,ot,rt,Z,Yt.convert(Ht),Yt.convert(Wt),0);const ee=R!==null?lt.get(R).__webglFramebuffer:null;H.bindFramebuffer(E.FRAMEBUFFER,ee);const de=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Ag(E,de,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,kt),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,vt),E.deleteBuffer(kt),E.deleteSync(de),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,j=null,ot=0){D.isTexture!==!0&&(Ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,D=arguments[1]);const rt=Math.pow(2,-ot),Z=Math.floor(D.image.width*rt),vt=Math.floor(D.image.height*rt),At=j!==null?j.x:0,It=j!==null?j.y:0;P.setTexture2D(D,0),E.copyTexSubImage2D(E.TEXTURE_2D,ot,0,0,At,It,Z,vt),H.unbindTexture()};const Xe=E.createFramebuffer(),Ye=E.createFramebuffer();this.copyTextureToTexture=function(D,j,ot=null,rt=null,Z=0,vt=null){D.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture function signature has changed."),rt=arguments[0]||null,D=arguments[1],j=arguments[2],vt=arguments[3]||0,ot=null),vt===null&&(Z!==0?(Ds("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=Z,Z=0):vt=0);let At,It,Lt,Ht,Wt,kt,ee,de,Be;const Le=D.isCompressedTexture?D.mipmaps[vt]:D.image;if(ot!==null)At=ot.max.x-ot.min.x,It=ot.max.y-ot.min.y,Lt=ot.isBox3?ot.max.z-ot.min.z:1,Ht=ot.min.x,Wt=ot.min.y,kt=ot.isBox3?ot.min.z:0;else{const ri=Math.pow(2,-Z);At=Math.floor(Le.width*ri),It=Math.floor(Le.height*ri),D.isDataArrayTexture?Lt=Le.depth:D.isData3DTexture?Lt=Math.floor(Le.depth*ri):Lt=1,Ht=0,Wt=0,kt=0}rt!==null?(ee=rt.x,de=rt.y,Be=rt.z):(ee=0,de=0,Be=0);const ue=Yt.convert(j.format),Gt=Yt.convert(j.type);let rn;j.isData3DTexture?(P.setTexture3D(j,0),rn=E.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(P.setTexture2DArray(j,0),rn=E.TEXTURE_2D_ARRAY):(P.setTexture2D(j,0),rn=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,j.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,j.unpackAlignment);const pe=E.getParameter(E.UNPACK_ROW_LENGTH),di=E.getParameter(E.UNPACK_IMAGE_HEIGHT),fs=E.getParameter(E.UNPACK_SKIP_PIXELS),zn=E.getParameter(E.UNPACK_SKIP_ROWS),vo=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Le.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Le.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ht),E.pixelStorei(E.UNPACK_SKIP_ROWS,Wt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,kt);const be=D.isDataArrayTexture||D.isData3DTexture,ii=j.isDataArrayTexture||j.isData3DTexture;if(D.isDepthTexture){const ri=lt.get(D),gn=lt.get(j),Rn=lt.get(ri.__renderTarget),Ql=lt.get(gn.__renderTarget);H.bindFramebuffer(E.READ_FRAMEBUFFER,Rn.__webglFramebuffer),H.bindFramebuffer(E.DRAW_FRAMEBUFFER,Ql.__webglFramebuffer);for(let Cr=0;Cr<Lt;Cr++)be&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,lt.get(D).__webglTexture,Z,kt+Cr),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,lt.get(j).__webglTexture,vt,Be+Cr)),E.blitFramebuffer(Ht,Wt,At,It,ee,de,At,It,E.DEPTH_BUFFER_BIT,E.NEAREST);H.bindFramebuffer(E.READ_FRAMEBUFFER,null),H.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(Z!==0||D.isRenderTargetTexture||lt.has(D)){const ri=lt.get(D),gn=lt.get(j);H.bindFramebuffer(E.READ_FRAMEBUFFER,Xe),H.bindFramebuffer(E.DRAW_FRAMEBUFFER,Ye);for(let Rn=0;Rn<Lt;Rn++)be?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ri.__webglTexture,Z,kt+Rn):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,ri.__webglTexture,Z),ii?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,gn.__webglTexture,vt,Be+Rn):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,gn.__webglTexture,vt),Z!==0?E.blitFramebuffer(Ht,Wt,At,It,ee,de,At,It,E.COLOR_BUFFER_BIT,E.NEAREST):ii?E.copyTexSubImage3D(rn,vt,ee,de,Be+Rn,Ht,Wt,At,It):E.copyTexSubImage2D(rn,vt,ee,de,Ht,Wt,At,It);H.bindFramebuffer(E.READ_FRAMEBUFFER,null),H.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else ii?D.isDataTexture||D.isData3DTexture?E.texSubImage3D(rn,vt,ee,de,Be,At,It,Lt,ue,Gt,Le.data):j.isCompressedArrayTexture?E.compressedTexSubImage3D(rn,vt,ee,de,Be,At,It,Lt,ue,Le.data):E.texSubImage3D(rn,vt,ee,de,Be,At,It,Lt,ue,Gt,Le):D.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,vt,ee,de,At,It,ue,Gt,Le.data):D.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,vt,ee,de,Le.width,Le.height,ue,Le.data):E.texSubImage2D(E.TEXTURE_2D,vt,ee,de,At,It,ue,Gt,Le);E.pixelStorei(E.UNPACK_ROW_LENGTH,pe),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,di),E.pixelStorei(E.UNPACK_SKIP_PIXELS,fs),E.pixelStorei(E.UNPACK_SKIP_ROWS,zn),E.pixelStorei(E.UNPACK_SKIP_IMAGES,vo),vt===0&&j.generateMipmaps&&E.generateMipmap(rn),H.unbindTexture()},this.copyTextureToTexture3D=function(D,j,ot=null,rt=null,Z=0){return D.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ot=arguments[0]||null,rt=arguments[1]||null,D=arguments[2],j=arguments[3],Z=arguments[4]||0),Ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,j,ot,rt,Z)},this.initRenderTarget=function(D){lt.get(D).__webglFramebuffer===void 0&&P.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?P.setTextureCube(D,0):D.isData3DTexture?P.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?P.setTexture2DArray(D,0):P.setTexture2D(D,0),H.unbindTexture()},this.resetState=function(){w=0,T=0,R=null,H.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}function Yi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Wp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ro={duration:.5,overwrite:!1,delay:0},Oh,on,we,Ii=1e8,pn=1/Ii,Wu=Math.PI*2,UM=Wu/4,NM=0,Xp=Math.sqrt,OM=Math.cos,FM=Math.sin,nn=function(t){return typeof t=="string"},Ue=function(t){return typeof t=="function"},ir=function(t){return typeof t=="number"},Fh=function(t){return typeof t>"u"},Fi=function(t){return typeof t=="object"},In=function(t){return t!==!1},Bh=function(){return typeof window<"u"},Ja=function(t){return Ue(t)||nn(t)},Yp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},mn=Array.isArray,Xu=/(?:-?\.?\d|\.)+/gi,qp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Os=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Nc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Zp=/[+-]=-?[.\d]+/,$p=/[^,'"\[\]\s]+/gi,BM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ae,bi,Yu,zh,ti={},Dl={},Jp,Kp=function(t){return(Dl=so(t,ti))&&Fn},kh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},aa=function(t,e){return!e&&console.warn(t)},jp=function(t,e){return t&&(ti[t]=e)&&Dl&&(Dl[t]=e)||ti},la=function(){return 0},zM={suppressEvents:!0,isStart:!0,kill:!1},ml={suppressEvents:!0,kill:!1},kM={suppressEvents:!0},Hh={},yr=[],qu={},Qp,Xn={},Oc={},gd=30,_l=[],Vh="",Gh=function(t){var e=t[0],n,i;if(Fi(e)||Ue(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=_l.length;i--&&!_l[i].targetTest(e););n=_l[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Tm(t[i],n)))||t.splice(i,1);return t},$r=function(t){return t._gsap||Gh(hi(t))[0]._gsap},tm=function(t,e,n){return(n=t[e])&&Ue(n)?t[e]():Fh(n)&&t.getAttribute&&t.getAttribute(e)||n},Un=function(t,e){return(t=t.split(",")).forEach(e)||t},Oe=function(t){return Math.round(t*1e5)/1e5||0},Ve=function(t){return Math.round(t*1e7)/1e7||0},Xs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},HM=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ll=function(){var t=yr.length,e=yr.slice(0),n,i;for(qu={},yr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},em=function(t,e,n,i){yr.length&&!on&&Ll(),t.render(e,n,on&&e<0&&(t._initted||t._startAt)),yr.length&&!on&&Ll()},nm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match($p).length<2?e:nn(t)?t.trim():t},im=function(t){return t},ei=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},VM=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},so=function(t,e){for(var n in e)t[n]=e[n];return t},vd=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Fi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Il=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},zo=function(t){var e=t.parent||Ae,n=t.keyframes?VM(mn(t.keyframes)):ei;if(In(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},GM=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},rm=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},$l=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Er=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Jr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},WM=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Zu=function(t,e,n,i){return t._startAt&&(on?t._startAt.revert(ml):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},XM=function r(t){return!t||t._ts&&r(t.parent)},xd=function(t){return t._repeat?oo(t._tTime,t=t.duration()+t._rDelay)*t:0},oo=function(t,e){var n=Math.floor(t=Ve(t/e));return t&&n===t?n-1:n},Ul=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Jl=function(t){return t._end=Ve(t._start+(t._tDur/Math.abs(t._ts||t._rts||pn)||0))},Kl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ve(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Jl(t),n._dirty||Jr(n,t)),t},sm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ul(t.rawTime(),e),(!e._dur||ga(0,e.totalDuration(),n)-e._tTime>pn)&&e.render(n,!0)),Jr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-1e-8}},Ci=function(t,e,n,i){return e.parent&&Er(e),e._start=Ve((ir(n)?n:n||t!==Ae?oi(t,n,e):t._time)+e._delay),e._end=Ve(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),rm(t,e,"_first","_last",t._sort?"_start":0),$u(e)||(t._recent=e),i||sm(t,e),t._ts<0&&Kl(t,t._tTime),t},om=function(t,e){return(ti.ScrollTrigger||kh("scrollTrigger",e))&&ti.ScrollTrigger.create(e,t)},am=function(t,e,n,i,s){if(Xh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!on&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Qp!==$n.frame)return yr.push(t),t._lazy=[s,i],1},YM=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},$u=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},qM=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&YM(t)&&!(!t._initted&&$u(t))||(t._ts<0||t._dp._ts<0)&&!$u(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=ga(0,t._tDur,e),u=oo(l,a),t._yoyo&&u&1&&(o=1-o),u!==oo(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||on||i||t._zTime===pn||!e&&t._zTime){if(!t._initted&&am(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?pn:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Zu(t,e,n,!0),t._onUpdate&&!n&&Kn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Kn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Er(t,1),!n&&!on&&(Kn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},ZM=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ao=function(t,e,n,i){var s=t._repeat,o=Ve(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ve(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Kl(t,t._tTime=t._tDur*a),t.parent&&Jl(t),n||Jr(t.parent,t),t},yd=function(t){return t instanceof bn?Jr(t):ao(t,t._dur)},$M={_start:0,endTime:la,totalDuration:la},oi=function r(t,e,n){var i=t.labels,s=t._recent||$M,o=t.duration()>=Ii?s.endTime(!1):t._dur,a,l,c;return nn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(mn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},ko=function(t,e,n){var i=ir(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=In(l.vars.inherit)&&l.parent;o.immediateRender=In(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new He(e[0],o,e[s+1])},Ar=function(t,e){return t||t===0?e(t):e},ga=function(t,e,n){return n<t?t:n>e?e:n},fn=function(t,e){return!nn(t)||!(e=BM.exec(t))?"":e[1]},JM=function(t,e,n){return Ar(n,function(i){return ga(t,e,i)})},Ju=[].slice,lm=function(t,e){return t&&Fi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Fi(t[0]))&&!t.nodeType&&t!==bi},KM=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return nn(i)&&!e||lm(i,1)?(s=n).push.apply(s,hi(i)):n.push(i)})||n},hi=function(t,e,n){return we&&!e&&we.selector?we.selector(t):nn(t)&&!n&&(Yu||!lo())?Ju.call((e||zh).querySelectorAll(t),0):mn(t)?KM(t,n):lm(t)?Ju.call(t,0):t?[t]:[]},Ku=function(t){return t=hi(t)[0]||aa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return hi(e,n.querySelectorAll?n:n===t?aa("Invalid scope")||zh.createElement("div"):t)}},cm=function(t){return t.sort(function(){return .5-Math.random()})},um=function(t){if(Ue(t))return t;var e=Fi(t)?t:{each:t},n=Kr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,h=i;return nn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||e).length,p=o[_],m,M,x,v,b,w,T,R,S;if(!p){if(S=e.grid==="auto"?0:(e.grid||[1,Ii])[1],!S){for(T=-1e8;T<(T=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(p=o[_]=[],m=l?Math.min(S,_)*u-.5:i%S,M=S===Ii?0:l?_*h/S-.5:i/S|0,T=0,R=Ii,w=0;w<_;w++)x=w%S-m,v=M-(w/S|0),p[w]=b=c?Math.abs(c==="y"?v:x):Xp(x*x+v*v),b>T&&(T=b),b<R&&(R=b);i==="random"&&cm(p),p.max=T-R,p.min=R,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=fn(e.amount||e.each)||0,n=n&&_<0?ym(n):n}return _=(p[f]-p.min)/p.max||0,Ve(p.b+(n?n(_):_)*p.v)+p.u}},ju=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ve(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ir(n)?0:fn(n))}},hm=function(t,e){var n=mn(t),i,s;return!n&&Fi(t)&&(i=n=t.radius||Ii,t.values?(t=hi(t.values),(s=!ir(t[0]))&&(i*=i)):t=ju(t.increment)),Ar(e,n?Ue(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ii,u=0,h=t.length,f,d;h--;)s?(f=t[h].x-a,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:o,s||u===o||ir(o)?u:u+fn(o)}:ju(t))},fm=function(t,e,n,i){return Ar(mn(t)?!e:n===!0?!!(n=0):!i,function(){return mn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},jM=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},QM=function(t,e){return function(n){return t(parseFloat(n))+(e||fn(n))}},tT=function(t,e,n){return pm(t,e,0,1,n)},dm=function(t,e,n){return Ar(n,function(i){return t[~~e(i)]})},eT=function r(t,e,n){var i=e-t;return mn(t)?dm(t,r(0,t.length),e):Ar(n,function(s){return(i+(s-t)%i)%i+t})},nT=function r(t,e,n){var i=e-t,s=i*2;return mn(t)?dm(t,r(0,t.length-1),e):Ar(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},ca=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?$p:Xu),n+=t.substr(e,i-e)+fm(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},pm=function(t,e,n,i,s){var o=e-t,a=i-n;return Ar(s,function(l){return n+((l-t)/o*a||0)})},iT=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=nn(t),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(mn(t)&&!mn(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=e}else i||(t=so(mn(t)?[]:{},t));if(!u){for(l in e)Wh.call(a,t,l,"get",e[l]);s=function(g){return Zh(g,a)||(o?t.p:t)}}}return Ar(n,s)},Sd=function(t,e,n){var i=t.labels,s=Ii,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Kn=function(t,e,n){var i=t.vars,s=i[e],o=we,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&yr.length&&Ll(),a&&(we=a),u=l?s.apply(c,l):s.call(c),we=o,u},Ro=function(t){return Er(t),t.scrollTrigger&&t.scrollTrigger.kill(!!on),t.progress()<1&&Kn(t,"onInterrupt"),t},Fs,mm=[],_m=function(t){if(t)if(t=!t.name&&t.default||t,Bh()||t.headless){var e=t.name,n=Ue(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:la,render:Zh,add:Wh,kill:xT,modifier:vT,rawVars:0},o={targetTest:0,get:0,getSetter:qh,aliases:{},register:0};if(lo(),t!==i){if(Xn[e])return;ei(i,ei(Il(t,s),o)),so(i.prototype,so(s,Il(t,o))),Xn[i.prop=e]=i,t.targetTest&&(_l.push(i),Hh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}jp(e,i),t.register&&t.register(Fn,i,Nn)}else mm.push(t)},xe=255,Po={aqua:[0,xe,xe],lime:[0,xe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xe],navy:[0,0,128],white:[xe,xe,xe],olive:[128,128,0],yellow:[xe,xe,0],orange:[xe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xe,0,0],pink:[xe,192,203],cyan:[0,xe,xe],transparent:[xe,xe,xe,0]},Fc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*xe+.5|0},gm=function(t,e,n){var i=t?ir(t)?[t>>16,t>>8&xe,t&xe]:0:Po.black,s,o,a,l,c,u,h,f,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Po[t])i=Po[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&xe,i&xe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&xe,t&xe]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Xu),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Fc(l+1/3,s,o),i[1]=Fc(l,s,o),i[2]=Fc(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(qp),n&&i.length<4&&(i[3]=1),i}else i=t.match(Xu)||Po.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/xe,o=i[1]/xe,a=i[2]/xe,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},vm=function(t){var e=[],n=[],i=-1;return t.split(Sr).forEach(function(s){var o=s.match(Os)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Md=function(t,e,n){var i="",s=(t+i).match(Sr),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=gm(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=vm(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(Sr,"1").split(Os),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Sr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Sr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Po)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),rT=/hsl[a]?\(/,xm=function(t){var e=t.join(" "),n;if(Sr.lastIndex=0,Sr.test(e))return n=rT.test(e),t[1]=Md(t[1],n),t[0]=Md(t[0],n,vm(t[1])),!0},ua,$n=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function _(p){var m=r()-i,M=p===!0,x,v,b,w;if((m>t||m<0)&&(n+=m-e),i+=m,b=i-n,x=b-o,(x>0||M)&&(w=++h.frame,f=b-h.time*1e3,h.time=b=b/1e3,o+=x+(x>=s?4:s-x),v=1),M||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](b,f,w,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Jp&&(!Yu&&Bh()&&(bi=Yu=window,zh=bi.document||{},ti.gsap=Fn,(bi.gsapVersions||(bi.gsapVersions=[])).push(Fn.version),Kp(Dl||bi.GreenSockGlobals||!bi.gsap&&bi||{}),mm.forEach(_m)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},ua=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ua=0,c=la},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,m,M){var x=m?function(v,b,w,T){p(v,b,w,T),h.remove(x)}:p;return h.remove(p),a[M?"unshift":"push"](x),lo(),x},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h}(),lo=function(){return!ua&&$n.wake()},ae={},sT=/^[\d.\-M][\d.\-,\s]/,oT=/["']/g,aT=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(oT,"").trim():+c,i=l.substr(a+1).trim();return e},lT=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},cT=function(t){var e=(t+"").split("("),n=ae[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[aT(e[1])]:lT(t).split(",").map(nm)):ae._CE&&sT.test(t)?ae._CE("",t):n},ym=function(t){return function(e){return 1-t(1-e)}},Sm=function r(t,e){for(var n=t._first,i;n;)n instanceof bn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Kr=function(t,e){return t&&(Ue(t)?t:ae[t]||cT(t))||e},hs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Un(t,function(a){ae[a]=ti[a]=s,ae[o=a.toLowerCase()]=n;for(var l in s)ae[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ae[a+"."+l]=s[l]}),s},Mm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Bc=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Wu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*FM((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Mm(a);return s=Wu/s,l.config=function(c,u){return r(t,c,u)},l},zc=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Mm(n);return i.config=function(s){return r(t,s)},i};Un("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;hs(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ae.Linear.easeNone=ae.none=ae.Linear.easeIn;hs("Elastic",Bc("in"),Bc("out"),Bc());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};hs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);hs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});hs("Circ",function(r){return-(Xp(1-r*r)-1)});hs("Sine",function(r){return r===1?1:-OM(r*UM)+1});hs("Back",zc("in"),zc("out"),zc());ae.SteppedEase=ae.steps=ti.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-pn;return function(a){return((i*ga(0,o,a)|0)+s)*n}}};ro.ease=ae["quad.out"];Un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Vh+=r+","+r+"Params,"});var Tm=function(t,e){this.id=NM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:tm,this.set=e?e.getSetter:qh},ha=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ao(this,+e.duration,1,1),this.data=e.data,we&&(this._ctx=we,we.data.push(this)),ua||$n.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ao(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(lo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Kl(this,n),!s._dp||s.parent||sm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ci(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===pn||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),em(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+xd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+xd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?oo(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ul(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(ga(-Math.abs(this._delay),this._tDur,s),i!==!1),Jl(this),WM(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(lo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==pn&&(this._tTime-=pn)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ci(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(In(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ul(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=kM);var i=on;return on=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),on=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,yd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,yd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(oi(this,n),In(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,In(i)),this._dur||(this._zTime=-1e-8),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-pn)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=Ue(n)?n:im,a=function(){var c=i.then;i.then=null,Ue(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Ro(this)},r}();ei(ha.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var bn=function(r){Wp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=In(n.sortChildren),Ae&&Ci(n.parent||Ae,Yi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&om(Yi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return ko(0,arguments,this),this},e.from=function(i,s,o){return ko(1,arguments,this),this},e.fromTo=function(i,s,o,a){return ko(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,zo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new He(i,s,oi(this,o),1),this},e.call=function(i,s,o){return Ci(this,He.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new He(i,o,oi(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,zo(o).immediateRender=In(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,zo(a).immediateRender=In(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ve(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,p,m,M,x,v,b,w,T;if(this!==Ae&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,x=this._ts,m=!x,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=Ve(u%p),u===l?(_=this._repeat,f=c):(b=Ve(u/p),_=~~b,_&&_===b&&(f=c,_--),f>c&&(f=c)),b=oo(this._tTime,p),!a&&this._tTime&&b!==_&&this._tTime-b*p-this._dur<=0&&(b=_),w&&_&1&&(f=c-f,T=1),_!==b&&!this._lock){var R=w&&b&1,S=R===(w&&_&1);if(_<b&&(R=!R),a=R?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Ve(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Kn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Sm(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=ZM(this,Ve(a),Ve(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!_&&(Kn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){M=0,g&&(u+=this._zTime=-1e-8);break}}d=g}else{d=this._last;for(var y=i<0?i:f;d;){if(g=d._prev,(d._act||y<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,s,o||on&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!m){M=0,g&&(u+=this._zTime=y?-1e-8:pn);break}}d=g}}if(M&&!s&&(this.pause(),M.render(f>=a?0:-1e-8)._zTime=f>=a?1:-1,this._ts))return this._start=v,Jl(this),this.render(i,s,o);this._onUpdate&&!s&&Kn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Er(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Kn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(ir(s)||(s=oi(this,s,i)),!(i instanceof ha)){if(mn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(nn(i))return this.addLabel(i,s);if(Ue(i))i=He.delayedCall(0,i);else return this}return this!==i?Ci(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof He?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return nn(i)?this.removeLabel(i):Ue(i)?this.killTweensOf(i):(i.parent===this&&$l(this,i),i===this._recent&&(this._recent=this._last),Jr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ve($n.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=oi(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=He.delayedCall(0,s||la,o);return a.data="isPause",this._hasPause=1,Ci(this,a,oi(this,i))},e.removePause=function(i){var s=this._first;for(i=oi(this,i);s;)s._start===i&&s.data==="isPause"&&Er(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)pr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=hi(i),l=this._first,c=ir(s),u;l;)l instanceof He?HM(l._targets,a)&&(c?(!pr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=oi(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=He.to(o,ei({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||pn,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&ao(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,ei({startAt:{time:oi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Sd(this,oi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Sd(this,oi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+pn)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Jr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Jr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Ii,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ci(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ao(o,o===Ae&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ae._ts&&(em(Ae,Ul(i,Ae)),Qp=$n.frame),$n.frame>=gd){gd+=Qn.autoSleep||120;var s=Ae._first;if((!s||!s._ts)&&Qn.autoSleep&&$n._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||$n.sleep()}}},t}(ha);ei(bn.prototype,{_lock:0,_hasPause:0,_forcing:0});var uT=function(t,e,n,i,s,o,a){var l=new Nn(this._pt,t,e,0,1,Rm,null,s),c=0,u=0,h,f,d,g,_,p,m,M;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ca(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),f=n.match(Nc)||[];h=Nc.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?Xs(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=Nc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Zp.test(i)||m)&&(l.e=0),this._pt=l,l},Wh=function(t,e,n,i,s,o,a,l,c,u){Ue(i)&&(i=i(s||0,t,o));var h=t[e],f=n!=="get"?n:Ue(h)?c?t[e.indexOf("set")||!Ue(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=Ue(h)?c?mT:Am:Yh,g;if(nn(i)&&(~i.indexOf("random(")&&(i=ca(i)),i.charAt(1)==="="&&(g=Xs(f,i)+(fn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Qu)return!isNaN(f*i)&&i!==""?(g=new Nn(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?gT:Cm,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!h&&!(e in t)&&kh(e,i),uT.call(this,t,e,f,i,d,l||Qn.stringFilter,c))},hT=function(t,e,n,i,s){if(Ue(t)&&(t=Ho(t,s,e,n,i)),!Fi(t)||t.style&&t.nodeType||mn(t)||Yp(t))return nn(t)?Ho(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Ho(t[a],s,e,n,i);return o},Em=function(t,e,n,i,s,o){var a,l,c,u;if(Xn[t]&&(a=new Xn[t]).init(s,a.rawVars?e[t]:hT(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Nn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Fs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},pr,Qu,Xh=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,M=m&&m.data==="nested"?m.vars.targets:p,x=t._overwrite==="auto"&&!Oh,v=t.timeline,b,w,T,R,S,y,I,B,V,Y,Q,G,X;if(v&&(!f||!s)&&(s="none"),t._ease=Kr(s,ro.ease),t._yEase=h?ym(Kr(h===!0?s:h,ro.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!v&&!!i.runBackwards,!v||f&&!i.stagger){if(B=p[0]?$r(p[0]).harness:0,G=B&&i[B.prop],b=Il(i,Hh),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?ml:zM),_._lazy=0),o){if(Er(t._startAt=He.set(p,ei({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&In(l),startAt:null,delay:0,onUpdate:c&&function(){return Kn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(on||!a&&!d)&&t._startAt.revert(ml),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(a=!1),T=ei({overwrite:!1,data:"isFromStart",lazy:a&&!_&&In(l),immediateRender:a,stagger:0,parent:m},b),G&&(T[B.prop]=G),Er(t._startAt=He.set(p,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(on?t._startAt.revert(ml):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,pn,pn);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&In(l)||l&&!g,w=0;w<p.length;w++){if(S=p[w],I=S._gsap||Gh(p)[w]._gsap,t._ptLookup[w]=Y={},qu[I.id]&&yr.length&&Ll(),Q=M===p?w:M.indexOf(S),B&&(V=new B).init(S,G||b,t,Q,M)!==!1&&(t._pt=R=new Nn(t._pt,S,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(z){Y[z]=R}),V.priority&&(y=1)),!B||G)for(T in b)Xn[T]&&(V=Em(T,b,t,Q,S,M))?V.priority&&(y=1):Y[T]=R=Wh.call(t,S,T,"get",b[T],Q,M,0,i.stringFilter);t._op&&t._op[w]&&t.kill(S,t._op[w]),x&&t._pt&&(pr=t,Ae.killTweensOf(S,Y,t.globalTime(e)),X=!t.parent,pr=0),t._pt&&l&&(qu[I.id]=1)}y&&Pm(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!X,f&&e<=0&&v.render(Ii,!0,!0)},fT=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(u=f[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Qu=1,t.vars[e]="+=0",Xh(t,a),Qu=0,l?aa(e+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Oe(n)+fn(h.e)),h.b&&(h.b=u.s+fn(h.b))},dT=function(t,e){var n=t[0]?$r(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=so({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},pT=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(mn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Ho=function(t,e,n,i,s){return Ue(t)?t.call(e,n,i,s):nn(t)&&~t.indexOf("random(")?ca(t):t},bm=Vh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",wm={};Un(bm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return wm[r]=1});var He=function(r){Wp(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:zo(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,M=i.parent||Ae,x=(mn(n)||Yp(n)?ir(n[0]):"length"in i)?[n]:hi(n),v,b,w,T,R,S,y,I;if(a._targets=x.length?Gh(x):aa("GSAP target "+n+" not found. https://gsap.com",!Qn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Ja(c)||Ja(u)){if(i=a.vars,v=a.timeline=new bn({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:x}),v.kill(),v.parent=v._dp=Yi(a),v._start=0,f||Ja(c)||Ja(u)){if(T=x.length,y=f&&um(f),Fi(f))for(R in f)~bm.indexOf(R)&&(I||(I={}),I[R]=f[R]);for(b=0;b<T;b++)w=Il(i,wm),w.stagger=0,m&&(w.yoyoEase=m),I&&so(w,I),S=x[b],w.duration=+Ho(c,Yi(a),b,S,x),w.delay=(+Ho(u,Yi(a),b,S,x)||0)-a._delay,!f&&T===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),v.to(S,w,y?y(b,S,x):0),v._ease=ae.none;v.duration()?c=u=0:a.timeline=0}else if(g){zo(ei(v.vars.defaults,{ease:"none"})),v._ease=Kr(g.ease||i.ease||"none");var B=0,V,Y,Q;if(mn(g))g.forEach(function(G){return v.to(x,G,">")}),v.duration();else{w={};for(R in g)R==="ease"||R==="easeEach"||pT(R,g[R],w,g.easeEach);for(R in w)for(V=w[R].sort(function(G,X){return G.t-X.t}),B=0,b=0;b<V.length;b++)Y=V[b],Q={ease:Y.e,duration:(Y.t-(b?V[b-1].t:0))/100*c},Q[R]=Y.v,v.to(x,Q,B),B+=Q.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!Oh&&(pr=Yi(a),Ae.killTweensOf(x),pr=0),Ci(M,Yi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===Ve(M._time)&&In(h)&&XM(Yi(a))&&M.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-u)||0)),p&&om(Yi(a),p),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-pn&&!u?l:i<pn?0:i,f,d,g,_,p,m,M,x,v;if(!c)qM(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=Ve(h%_),h===l?(g=this._repeat,f=c):(p=Ve(h/_),g=~~p,g&&g===p?(f=c,g--):f>c&&(f=c)),m=this._yoyo&&g&1,m&&(v=this._yEase,f=c-f),p=oo(this._tTime,_),f===a&&!o&&this._initted&&g===p)return this._tTime=h,this;g!==p&&(x&&this._yEase&&Sm(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Ve(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(am(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(v||this._ease)(f/c),this._from&&(this.ratio=M=1-M),f&&!a&&!s&&!g&&(Kn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Zu(this,i,s,o),Kn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Kn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Zu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Er(this,1),!s&&!(u&&!a)&&(h||a||m)&&(Kn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){ua||$n.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Xh(this,c),u=this._ease(c/this._dur),fT(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Kl(this,0),this.parent||rm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ro(this):this.scrollTrigger&&this.scrollTrigger.kill(!!on),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,pr&&pr.vars.overwrite!==!0)._first||Ro(this),this.parent&&o!==this.timeline.totalDuration()&&ao(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?hi(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,p,m;if((!s||s==="all")&&GM(a,l))return s==="all"&&(this._pt=0),Ro(this);for(h=this._op=this._op||[],s!=="all"&&(nn(s)&&(_={},Un(s,function(M){return _[M]=1}),s=_),s=dT(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(h[m]=s,g=f,d={}):(d=h[m]=h[m]||{},g=s);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&$l(this,p,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Ro(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ko(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return ko(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Ae.killTweensOf(i,s,o)},t}(ha);ei(He.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Un("staggerTo,staggerFrom,staggerFromTo",function(r){He[r]=function(){var t=new bn,e=Ju.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Yh=function(t,e,n){return t[e]=n},Am=function(t,e,n){return t[e](n)},mT=function(t,e,n,i){return t[e](i.fp,n)},_T=function(t,e,n){return t.setAttribute(e,n)},qh=function(t,e){return Ue(t[e])?Am:Fh(t[e])&&t.setAttribute?_T:Yh},Cm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},gT=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Rm=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Zh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},vT=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},xT=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?$l(this,e,"_pt"):e.dep||(n=1),e=i;return!n},yT=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Pm=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Nn=function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Cm,this.d=l||this,this.set=c||Yh,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=yT,this.m=n,this.mt=s,this.tween=i},r}();Un(Vh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Hh[r]=1});ti.TweenMax=ti.TweenLite=He;ti.TimelineLite=ti.TimelineMax=bn;Ae=new bn({sortChildren:!1,defaults:ro,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qn.stringFilter=xm;var jr=[],gl={},ST=[],Td=0,MT=0,kc=function(t){return(gl[t]||ST).map(function(e){return e()})},th=function(){var t=Date.now(),e=[];t-Td>2&&(kc("matchMediaInit"),jr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=bi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),kc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Td=t,kc("matchMedia"))},Dm=function(){function r(e,n){this.selector=n&&Ku(n),this.data=[],this._r=[],this.isReverted=!1,this.id=MT++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ue(n)&&(s=i,i=n,n=Ue);var o=this,a=function(){var c=we,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Ku(s)),we=o,h=i.apply(o,arguments),Ue(h)&&o._r.push(h),we=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ue?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=we;we=null,n(this),we=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof He&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof bn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof He)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=jr.length;o--;)jr[o].id===this.id&&jr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),TT=function(){function r(e){this.contexts=[],this.scope=e,we&&we.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Fi(n)||(n={matches:n});var o=new Dm(0,s||this.scope),a=o.conditions={},l,c,u;we&&!o.selector&&(o.selector=we.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=bi.matchMedia(n[c]),l&&(jr.indexOf(o)<0&&jr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(th):l.addEventListener("change",th)));return u&&i(o,function(h){return o.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Nl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return _m(i)})},timeline:function(t){return new bn(t)},getTweensOf:function(t,e){return Ae.getTweensOf(t,e)},getProperty:function(t,e,n,i){nn(t)&&(t=hi(t)[0]);var s=$r(t||{}).get,o=n?im:nm;return n==="native"&&(n=""),t&&(e?o((Xn[e]&&Xn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Xn[a]&&Xn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=hi(t),t.length>1){var i=t.map(function(u){return Fn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var o=Xn[e],a=$r(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;Fs._pt=0,h.init(t,n?u+n:u,Fs,0,[t]),h.render(1,h),Fs._pt&&Zh(1,Fs)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=Fn.to(t,ei((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Ae.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Kr(t.ease,ro.ease)),vd(ro,t||{})},config:function(t){return vd(Qn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Xn[a]&&!ti[a]&&aa(e+" effect requires "+a+" plugin.")}),Oc[e]=function(a,l,c){return n(hi(a),ei(l||{},s),c)},o&&(bn.prototype[e]=function(a,l,c){return this.add(Oc[e](a,Fi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ae[t]=Kr(e)},parseEase:function(t,e){return arguments.length?Kr(t,e):ae},getById:function(t){return Ae.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new bn(t),i,s;for(n.smoothChildTiming=In(t.smoothChildTiming),Ae.remove(n),n._dp=0,n._time=n._tTime=Ae._time,i=Ae._first;i;)s=i._next,(e||!(!i._dur&&i instanceof He&&i.vars.onComplete===i._targets[0]))&&Ci(n,i,i._start-i._delay),i=s;return Ci(Ae,n,0),n},context:function(t,e){return t?new Dm(t,e):we},matchMedia:function(t){return new TT(t)},matchMediaRefresh:function(){return jr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||th()},addEventListener:function(t,e){var n=gl[t]||(gl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=gl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:eT,wrapYoyo:nT,distribute:um,random:fm,snap:hm,normalize:tT,getUnit:fn,clamp:JM,splitColor:gm,toArray:hi,selector:Ku,mapRange:pm,pipe:jM,unitize:QM,interpolate:iT,shuffle:cm},install:Kp,effects:Oc,ticker:$n,updateRoot:bn.updateRoot,plugins:Xn,globalTimeline:Ae,core:{PropTween:Nn,globals:jp,Tween:He,Timeline:bn,Animation:ha,getCache:$r,_removeLinkedListItem:$l,reverting:function(){return on},context:function(t){return t&&we&&(we.data.push(t),t._ctx=we),we},suppressOverwrites:function(t){return Oh=t}}};Un("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Nl[r]=He[r]});$n.add(bn.updateRoot);Fs=Nl.to({},{duration:0});var ET=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},bT=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=ET(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Hc=function(t,e){return{name:t,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(nn(s)&&(l={},Un(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}bT(a,s)}}}},Fn=Nl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)on?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Hc("roundProps",ju),Hc("modifiers"),Hc("snap",hm))||Nl;He.version=bn.version=Fn.version="3.12.7";Jp=1;Bh()&&lo();ae.Power0;ae.Power1;ae.Power2;ae.Power3;ae.Power4;ae.Linear;ae.Quad;ae.Cubic;ae.Quart;ae.Quint;ae.Strong;ae.Elastic;ae.Back;ae.SteppedEase;ae.Bounce;ae.Sine;ae.Expo;ae.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ed,mr,Ys,$h,qr,bd,Jh,wT=function(){return typeof window<"u"},rr={},kr=180/Math.PI,qs=Math.PI/180,As=Math.atan2,wd=1e8,Kh=/([A-Z])/g,AT=/(left|right|width|margin|padding|x)/i,CT=/[\s,\(]\S/,Pi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},eh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},RT=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},PT=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},DT=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Lm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Im=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},LT=function(t,e,n){return t.style[e]=n},IT=function(t,e,n){return t.style.setProperty(e,n)},UT=function(t,e,n){return t._gsap[e]=n},NT=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},OT=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},FT=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Re="transform",On=Re+"Origin",BT=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in rr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Pi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=qi(i,a)}):this.tfm[t]=o.x?o[t]:qi(i,t),t===On&&(this.tfm.zOrigin=o.zOrigin);else return Pi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Re)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(On,e,"")),t=Re}(s||e)&&this.props.push(t,e,s[t])},Um=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},zT=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Kh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Jh(),(!s||!s.isStart)&&!n[Re]&&(Um(n),i.zOrigin&&n[On]&&(n[On]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Nm=function(t,e){var n={target:t,props:[],revert:zT,save:BT};return t._gsap||Fn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Om,nh=function(t,e){var n=mr.createElementNS?mr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):mr.createElement(t);return n&&n.style?n:mr.createElement(t)},Ui=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Kh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,co(e)||e,1)||""},Ad="O,Moz,ms,Ms,Webkit".split(","),co=function(t,e,n){var i=e||qr,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Ad[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Ad[o]:"")+t},ih=function(){wT()&&window.document&&(Ed=window,mr=Ed.document,Ys=mr.documentElement,qr=nh("div")||{style:{}},nh("div"),Re=co(Re),On=Re+"Origin",qr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Om=!!co("perspective"),Jh=Fn.core.reverting,$h=1)},Cd=function(t){var e=t.ownerSVGElement,n=nh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ys.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ys.removeChild(n),s},Rd=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Fm=function(t){var e,n;try{e=t.getBBox()}catch{e=Cd(t),n=1}return e&&(e.width||e.height)||n||(e=Cd(t)),e&&!e.width&&!e.x&&!e.y?{x:+Rd(t,["x","cx","x1"])||0,y:+Rd(t,["y","cy","y1"])||0,width:0,height:0}:e},Bm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Fm(t))},rs=function(t,e){if(e){var n=t.style,i;e in rr&&e!==On&&(e=Re),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Kh,"-$1").toLowerCase())):n.removeAttribute(e)}},_r=function(t,e,n,i,s,o){var a=new Nn(t._pt,e,n,0,1,o?Im:Lm);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Pd={deg:1,rad:1,turn:1},kT={grid:1,flex:1},br=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=qr.style,l=AT.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,p,m;if(i===o||!s||Pd[i]||Pd[o])return s;if(o!=="px"&&!f&&(s=r(t,e,n,"px")),m=t.getCTM&&Bm(t),(d||o==="%")&&(rr[e]||~e.indexOf("adius")))return g=m?t.getBBox()[l?"width":"height"]:t[u],Oe(d?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===mr||!_.appendChild)&&(_=mr.body),p=_._gsap,p&&d&&p.width&&l&&p.time===$n.time&&!p.uncache)return Oe(s/p.width*h);if(d&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=h+i,g=t[u],M?t.style[e]=M:rs(t,e)}else(d||o==="%")&&!kT[Ui(_,"display")]&&(a.position=Ui(t,"position")),_===t&&(a.position="static"),_.appendChild(qr),g=qr[u],_.removeChild(qr),a.position="absolute";return l&&d&&(p=$r(_),p.time=$n.time,p.width=_[u]),Oe(f?g*s/h:g&&s?h/g*s:0)},qi=function(t,e,n,i){var s;return $h||ih(),e in Pi&&e!=="transform"&&(e=Pi[e],~e.indexOf(",")&&(e=e.split(",")[0])),rr[e]&&e!=="transform"?(s=da(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Fl(Ui(t,On))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ol[e]&&Ol[e](t,e,n)||Ui(t,e)||tm(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?br(t,e,s,n)+n:s},HT=function(t,e,n,i){if(!n||n==="none"){var s=co(e,t,1),o=s&&Ui(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Ui(t,"borderTopColor"))}var a=new Nn(this._pt,t.style,e,0,1,Rm),l=0,c=0,u,h,f,d,g,_,p,m,M,x,v,b;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=t.style[e],t.style[e]=i,i=Ui(t,e)||i,_?t.style[e]=_:rs(t,e)),u=[n,i],xm(u),n=u[0],i=u[1],f=n.match(Os)||[],b=i.match(Os)||[],b.length){for(;h=Os.exec(i);)p=h[0],M=i.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),p.charAt(1)==="="&&(p=Xs(d,p)+v),m=parseFloat(p),x=p.substr((m+"").length),l=Os.lastIndex-x.length,x||(x=x||Qn.units[e]||v,l===i.length&&(i+=x,a.e+=x)),v!==x&&(d=br(t,e,_,x)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:m-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Im:Lm;return Zp.test(i)&&(a.e=0),this._pt=a,a},Dd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},VT=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Dd[n]||n,e[1]=Dd[i]||i,e.join(" ")},GT=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],rr[a]&&(l=1,a=a==="transformOrigin"?On:Re),rs(n,a);l&&(rs(n,Re),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",da(n,1),o.uncache=1,Um(i)))}},Ol={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Nn(t._pt,e,n,0,0,GT);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},fa=[1,0,0,1,0,0],zm={},km=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ld=function(t){var e=Ui(t,Re);return km(e)?fa:e.substr(7).match(qp).map(Oe)},jh=function(t,e){var n=t._gsap||$r(t),i=t.style,s=Ld(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?fa:s):(s===fa&&!t.offsetParent&&t!==Ys&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Ys.appendChild(t)),s=Ld(t),l?i.display=l:rs(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Ys.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},rh=function(t,e,n,i,s,o){var a=t._gsap,l=s||jh(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],M=l[5],x=e.split(" "),v=parseFloat(x[0])||0,b=parseFloat(x[1])||0,w,T,R,S;n?l!==fa&&(T=d*p-g*_)&&(R=v*(p/T)+b*(-_/T)+(_*M-p*m)/T,S=v*(-g/T)+b*(d/T)-(d*M-g*m)/T,v=R,b=S):(w=Fm(t),v=w.x+(~x[0].indexOf("%")?v/100*w.width:v),b=w.y+(~(x[1]||x[0]).indexOf("%")?b/100*w.height:b)),i||i!==!1&&a.smooth?(m=v-c,M=b-u,a.xOffset=h+(m*d+M*_)-m,a.yOffset=f+(m*g+M*p)-M):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=b,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[On]="0px 0px",o&&(_r(o,a,"xOrigin",c,v),_r(o,a,"yOrigin",u,b),_r(o,a,"xOffset",h,a.xOffset),_r(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+b)},da=function(t,e){var n=t._gsap||new Tm(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Ui(t,On)||"0",u,h,f,d,g,_,p,m,M,x,v,b,w,T,R,S,y,I,B,V,Y,Q,G,X,z,ht,F,_t,Rt,Vt,N,U;return u=h=f=_=p=m=M=x=v=0,d=g=1,n.svg=!!(t.getCTM&&Bm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Re]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Re]!=="none"?l[Re]:"")),i.scale=i.rotate=i.translate="none"),T=jh(t,n.svg),n.svg&&(n.uncache?(z=t.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),rh(t,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,T)),b=n.xOrigin||0,w=n.yOrigin||0,T!==fa&&(I=T[0],B=T[1],V=T[2],Y=T[3],u=Q=T[4],h=G=T[5],T.length===6?(d=Math.sqrt(I*I+B*B),g=Math.sqrt(Y*Y+V*V),_=I||B?As(B,I)*kr:0,M=V||Y?As(V,Y)*kr+_:0,M&&(g*=Math.abs(Math.cos(M*qs))),n.svg&&(u-=b-(b*I+w*V),h-=w-(b*B+w*Y))):(U=T[6],Vt=T[7],F=T[8],_t=T[9],Rt=T[10],N=T[11],u=T[12],h=T[13],f=T[14],R=As(U,Rt),p=R*kr,R&&(S=Math.cos(-R),y=Math.sin(-R),X=Q*S+F*y,z=G*S+_t*y,ht=U*S+Rt*y,F=Q*-y+F*S,_t=G*-y+_t*S,Rt=U*-y+Rt*S,N=Vt*-y+N*S,Q=X,G=z,U=ht),R=As(-V,Rt),m=R*kr,R&&(S=Math.cos(-R),y=Math.sin(-R),X=I*S-F*y,z=B*S-_t*y,ht=V*S-Rt*y,N=Y*y+N*S,I=X,B=z,V=ht),R=As(B,I),_=R*kr,R&&(S=Math.cos(R),y=Math.sin(R),X=I*S+B*y,z=Q*S+G*y,B=B*S-I*y,G=G*S-Q*y,I=X,Q=z),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=Oe(Math.sqrt(I*I+B*B+V*V)),g=Oe(Math.sqrt(G*G+U*U)),R=As(Q,G),M=Math.abs(R)>2e-4?R*kr:0,v=N?1/(N<0?-N:N):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!km(Ui(t,Re)),X&&t.setAttribute("transform",X))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Oe(d),n.scaleY=Oe(g),n.rotation=Oe(_)+a,n.rotationX=Oe(p)+a,n.rotationY=Oe(m)+a,n.skewX=M+a,n.skewY=x+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[On]=Fl(c)),n.xOffset=n.yOffset=0,n.force3D=Qn.force3D,n.renderTransform=n.svg?XT:Om?Hm:WT,n.uncache=0,n},Fl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Vc=function(t,e,n){var i=fn(e);return Oe(parseFloat(e)+parseFloat(br(t,"x",n+"px",i)))+i},WT=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Hm(t,e)},Nr="0deg",bo="0px",Or=") ",Hm=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,M=n.target,x=n.zOrigin,v="",b=m==="auto"&&t&&t!==1||m===!0;if(x&&(h!==Nr||u!==Nr)){var w=parseFloat(u)*qs,T=Math.sin(w),R=Math.cos(w),S;w=parseFloat(h)*qs,S=Math.cos(w),o=Vc(M,o,T*S*-x),a=Vc(M,a,-Math.sin(w)*-x),l=Vc(M,l,R*S*-x+x)}p!==bo&&(v+="perspective("+p+Or),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(b||o!==bo||a!==bo||l!==bo)&&(v+=l!==bo||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Or),c!==Nr&&(v+="rotate("+c+Or),u!==Nr&&(v+="rotateY("+u+Or),h!==Nr&&(v+="rotateX("+h+Or),(f!==Nr||d!==Nr)&&(v+="skew("+f+", "+d+Or),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Or),M.style[Re]=v||"translate(0, 0)"},XT=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,M=n.forceCSS,x=parseFloat(o),v=parseFloat(a),b,w,T,R,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=qs,c*=qs,b=Math.cos(l)*h,w=Math.sin(l)*h,T=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(u*=qs,S=Math.tan(c-u),S=Math.sqrt(1+S*S),T*=S,R*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),b*=S,w*=S)),b=Oe(b),w=Oe(w),T=Oe(T),R=Oe(R)):(b=h,R=f,w=T=0),(x&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(x=br(d,"x",o,"px"),v=br(d,"y",a,"px")),(g||_||p||m)&&(x=Oe(x+g-(g*b+_*T)+p),v=Oe(v+_-(g*w+_*R)+m)),(i||s)&&(S=d.getBBox(),x=Oe(x+i/100*S.width),v=Oe(v+s/100*S.height)),S="matrix("+b+","+w+","+T+","+R+","+x+","+v+")",d.setAttribute("transform",S),M&&(d.style[Re]=S)},YT=function(t,e,n,i,s){var o=360,a=nn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?kr:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),h==="cw"&&c<0?c=(c+o*wd)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*wd)%o-~~(c/o)*o)),t._pt=f=new Nn(t._pt,e,n,i,c,RT),f.e=u,f.u="deg",t._props.push(n),f},Id=function(t,e){for(var n in e)t[n]=e[n];return t},qT=function(t,e,n){var i=Id({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Re]=e,a=da(n,1),rs(n,Re),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Re],o[Re]=e,a=da(n,1),o[Re]=c);for(l in rr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=fn(c),g=fn(u),h=d!==g?br(n,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new Nn(t._pt,a,l,h,f-h,eh),t._pt.u=g||0,t._props.push(l));Id(a,i)};Un("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Ol[t>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return qi(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var Vm={name:"css",register:ih,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,f,d,g,_,p,m,M,x,v,b,w,T,R;$h||ih(),this.styles=this.styles||Nm(t),R=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Xn[_]&&Em(_,e,n,i,t,s)))){if(d=typeof u,g=Ol[_],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ca(u)),g)g(this,t,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Sr.lastIndex=0,Sr.test(c)||(p=fn(c),m=fn(u)),m?p!==m&&(c=br(t,_,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],nn(c)&&~c.indexOf("random(")&&(c=ca(c)),fn(c+"")||c==="auto"||(c+=Qn.units[_]||fn(qi(t,_))||""),(c+"").charAt(1)==="="&&(c=qi(t,_))):c=qi(t,_),f=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),_ in Pi&&(_==="autoAlpha"&&(f===1&&qi(t,"visibility")==="hidden"&&h&&(f=0),R.push("visibility",0,a.visibility),_r(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Pi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in rr,x){if(this.styles.save(_),v||(b=t._gsap,b.renderTransform&&!e.parseTransform||da(t,e.parseTransform),w=e.smoothOrigin!==!1&&b.smooth,v=this._pt=new Nn(this._pt,a,Re,0,1,b.renderTransform,b,0,-1),v.dep=1),_==="scale")this._pt=new Nn(this._pt,b,"scaleY",b.scaleY,(M?Xs(b.scaleY,M+h):h)-b.scaleY||0,eh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(On,0,a[On]),u=VT(u),b.svg?rh(t,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==b.zOrigin&&_r(this,b,"zOrigin",b.zOrigin,m),_r(this,a,_,Fl(c),Fl(u)));continue}else if(_==="svgOrigin"){rh(t,u,1,w,0,this);continue}else if(_ in zm){YT(this,b,_,f,M?Xs(f,M+u):u);continue}else if(_==="smoothOrigin"){_r(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){qT(this,u,t);continue}}else _ in a||(_=co(_)||_);if(x||(h||h===0)&&(f||f===0)&&!CT.test(u)&&_ in a)p=(c+"").substr((f+"").length),h||(h=0),m=fn(u)||(_ in Qn.units?Qn.units[_]:p),p!==m&&(f=br(t,_,c,m)),this._pt=new Nn(this._pt,x?b:a,_,f,(M?Xs(f,M+h):h)-f,!x&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?DT:eh),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=PT);else if(_ in a)HT.call(this,t,_,c,M?M+u:u);else if(_ in t)this.add(t,_,c||t[_],M?M+u:u,i,s);else if(_!=="parseTransform"){kh(_,u);continue}x||(_ in a?R.push(_,0,a[_]):typeof t[_]=="function"?R.push(_,2,t[_]()):R.push(_,1,c||t[_])),o.push(_)}}T&&Pm(this)},render:function(t,e){if(e.tween._time||!Jh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:qi,aliases:Pi,getSetter:function(t,e,n){var i=Pi[e];return i&&i.indexOf(",")<0&&(e=i),e in rr&&e!==On&&(t._gsap.x||qi(t,"x"))?n&&bd===n?e==="scale"?NT:UT:(bd=n||{})&&(e==="scale"?OT:FT):t.style&&!Fh(t.style[e])?LT:~e.indexOf("-")?IT:qh(t,e)},core:{_removeProperty:rs,_getMatrix:jh}};Fn.utils.checkPrefix=co;Fn.core.getStyleSaver=Nm;(function(r,t,e,n){var i=Un(r+","+t+","+e,function(s){rr[s]=1});Un(t,function(s){Qn.units[s]="deg",zm[s]=1}),Pi[i[13]]=r+","+t,Un(n,function(s){var o=s.split(":");Pi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Qn.units[r]="px"});Fn.registerPlugin(Vm);var Me=Fn.registerPlugin(Vm)||Fn;Me.core.Tween;const ZT={class:"logo-3d-container"},$T=Wl({__name:"LogoMark",setup(r){const t=jo(null),e=jo(null);let n,i,s,o=[],a,l=null,c=null,u=null;const h=()=>{l==null||l.kill(),c==null||c.kill(),u==null||u.kill(),l=Me.to(o[0].meshes.red.rotation,{y:Math.PI*2,duration:4,repeat:-1,ease:"none"}),c=Me.to(o[1].meshes.green.rotation,{y:Math.PI*2,duration:5,repeat:-1,ease:"none"}),u=Me.to(o[2].meshes.blue.rotation,{y:Math.PI*2,duration:3,repeat:-1,ease:"none"})},f=()=>{l==null||l.kill(),c==null||c.kill(),u==null||u.kill(),Me.to(o[0].meshes.red.rotation,{y:0,duration:.5,repeat:0,ease:"none",onComplete:()=>l=null}),Me.to(o[1].meshes.green.rotation,{y:0,duration:.5,repeat:0,ease:"none",onComplete:()=>c=null}),Me.to(o[2].meshes.blue.rotation,{y:0,duration:.5,repeat:0,ease:"none",onComplete:()=>u=null})};return mh(()=>{if(!t.value)return;n=new Ah,i=new Yn(10,1,.1,1e3),s=new Nh({canvas:t.value,antialias:!0,alpha:!0}),s.setPixelRatio(window.devicePixelRatio);const d=new q0(16777215,1);d.position.set(10,20,30),n.add(d);const g=new Z0(16777215,.35);n.add(g);const _=new Ln(5,8,5),p=new Ln(5,5,5),m=new Ln(6,5,5);a=new ui,o=[new Xt(16711680),new Xt(65280),new Xt(255)].map((w,T)=>{const R=new F0({color:w,specular:5592405,shininess:30,transparent:!0,blending:xi,side:Zn,opacity:0}),S=new Pe(_,R),y=new Pe(p,R),I=new Pe(m,R);switch(T){case 0:S.position.set(0,17.1,0),S.rotation.set($e.degToRad(0),$e.degToRad(0),0),a.add(S);break;case 1:y.position.set(-10,0,0),y.rotation.set($e.degToRad(0),$e.degToRad(0),0),a.add(y);break;case 2:I.position.set(15.75,0,0),I.rotation.set($e.degToRad(0),$e.degToRad(0),0),a.add(I);break}return{meshes:{red:S,green:y,blue:I},color:w}}),n.add(a),i.position.set(60,-90,90),i.lookAt(2.5,2.5,0);const x=$e.degToRad(0);i.rotation.z=x;const v=()=>{if(t.value){const R=s.getPixelRatio();s.setSize(120*R,78*R,!1),i.aspect=120/78,i.updateProjectionMatrix(),t.value.style.width="120px",t.value.style.height="78px",i.updateProjectionMatrix()}};window.addEventListener("resize",v),v(),Me.from(e.value,{y:10,opacity:0,duration:5,ease:"power2.out"}),Me.to(o[0].meshes.red.position,{y:7.1,duration:1.5,ease:"power2.out"}),Me.to(o[0].meshes.red.rotation,{x:Math.PI,duration:1.5,ease:"power2.out"}),Me.to(o[0].meshes.red.material,{opacity:1,duration:1.5,ease:"power2.out"}),Me.to(o[1].meshes.green.position,{x:0,duration:1.5,ease:"power2.out"}),Me.to(o[1].meshes.green.rotation,{x:Math.PI,duration:1.5,ease:"power2.out"}),Me.to(o[1].meshes.green.material,{opacity:1,duration:1.5,ease:"power2.out"}),Me.to(o[2].meshes.blue.position,{x:5.75,duration:1.5,ease:"power2.out"}),Me.to(o[2].meshes.blue.rotation,{x:Math.PI,duration:1.5,ease:"power2.out"}),Me.to(o[2].meshes.blue.material,{opacity:1,duration:1.5,ease:"power2.out"});function b(){requestAnimationFrame(b),s.render(n,i)}b()}),(d,g)=>(ta(),Qo("div",{class:"flex flex-col items-center",onMouseenter:h,onMouseleave:f},[vi("div",ZT,[vi("canvas",{ref_key:"canvasRef",ref:t,class:"logo-3d-canvas"},null,512)]),(ta(),Qo("svg",{ref_key:"logoRef",ref:e,class:"relative h-3.5 -mt-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 238.54 17.28"},g[0]||(g[0]=[v_('<g data-v-7f0e7ce1><g data-v-7f0e7ce1><path d="M3.12,2.86v5.11h4.94l-1.44,2.59-3.5.05v6.43H0V.24h12.26l-1.45,2.62H3.12Z" style="fill:#fff;" data-v-7f0e7ce1></path><path d="M30.37,17.04l-3.43-4.92c-.14.02-.36.02-.65.02h-3.79v4.9h-3.12V.24h6.91c1.46,0,2.72.24,3.8.72,1.08.48,1.91,1.17,2.48,2.06.58.9.86,1.96.86,3.19s-.31,2.35-.92,3.26c-.62.91-1.5,1.59-2.65,2.04l3.86,5.52h-3.36ZM29.24,3.74c-.7-.58-1.74-.86-3.1-.86h-3.65v6.7h3.65c1.36,0,2.39-.29,3.1-.88s1.06-1.41,1.06-2.48-.35-1.9-1.06-2.47Z" style="fill:#fff;" data-v-7f0e7ce1></path><path d="M45.22,16.16c-1.38-.74-2.46-1.78-3.24-3.1-.78-1.32-1.18-2.8-1.18-4.43s.39-3.11,1.18-4.43c.78-1.32,1.86-2.35,3.24-3.1,1.38-.74,2.92-1.12,4.63-1.12s3.26.37,4.63,1.12c1.38.74,2.46,1.77,3.24,3.08.78,1.31,1.18,2.79,1.18,4.44s-.39,3.13-1.18,4.44c-.78,1.31-1.86,2.34-3.24,3.08-1.38.74-2.92,1.12-4.63,1.12s-3.26-.37-4.63-1.12ZM52.88,13.79c.9-.5,1.6-1.21,2.11-2.11.51-.9.77-1.92.77-3.04s-.26-2.13-.77-3.04c-.51-.9-1.22-1.61-2.11-2.11-.9-.5-1.9-.76-3.02-.76s-2.13.25-3.02.76c-.9.5-1.6,1.21-2.11,2.11-.51.9-.77,1.92-.77,3.04s.26,2.13.77,3.04c.51.9,1.22,1.61,2.11,2.11.9.5,1.9.76,3.02.76s2.13-.25,3.02-.76Z" style="fill:#fff;" data-v-7f0e7ce1></path><path d="M82.74,17.04l-.02-11.14-5.52,9.22h-1.39l-5.52-9.07v10.99h-2.98V.24h2.57l6.67,11.14L83.1.24h2.57l.02,16.8h-2.95Z" style="fill:#fff;" data-v-7f0e7ce1></path><path d="M110.43,2.88h-5.57V.24h14.26l-1.47,2.64h-4.09v14.16h-3.12V2.88Z" style="fill:#fff;" data-v-7f0e7ce1></path><path d="M141.49.24v16.8h-3.12v-7.2h-8.69v7.2h-3.12V.24h3.12v6.94h8.69V.24h3.12Z" style="fill:#fff;" data-v-7f0e7ce1></path><path d="M162.69,14.42l-1.51,2.62h-11.09V.24h12.26l-1.54,2.62h-7.61v4.37h8.11l-1.48,2.57h-6.63v4.63h9.48Z" style="fill:#fff;" data-v-7f0e7ce1></path><path d="M182.97.24h3.12v14.16h8.78l-1.53,2.64h-10.38V.24Z" style="fill:#fff;" data-v-7f0e7ce1></path><path d="M213.45,13.15h-8.4l-1.66,3.89h-3.22L207.73.24h3.07l7.58,16.8h-3.26l-1.68-3.89ZM212.41,10.7l-3.17-7.34-3.14,7.34h6.31Z" style="fill:#fff;" data-v-7f0e7ce1></path><path d="M237.73,9.83c.54.71.82,1.6.82,2.65,0,1.46-.56,2.58-1.68,3.37s-2.75,1.19-4.9,1.19h-8.35V.24h7.87c1.98,0,3.51.39,4.58,1.16,1.07.78,1.61,1.84,1.61,3.2,0,.83-.19,1.57-.58,2.21-.38.64-.91,1.14-1.58,1.49.93.3,1.66.81,2.21,1.52ZM226.73,2.69v4.63h4.42c1.09,0,1.92-.2,2.51-.59.58-.39.88-.96.88-1.72s-.29-1.35-.88-1.74c-.58-.39-1.42-.59-2.51-.59h-4.42ZM235.4,12.17c0-1.62-1.21-2.42-3.62-2.42h-5.04v4.85h5.04c2.42,0,3.62-.81,3.62-2.42Z" style="fill:#fff;" data-v-7f0e7ce1></path></g></g>',1)]),512))],32))}}),JT=rp($T,[["__scopeId","data-v-7f0e7ce1"]]);class va{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const KT=new ql(-1,1,1,-1,0,1);class jT extends an{constructor(){super(),this.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ge([0,2,0,0,2,0],2))}}const QT=new jT;class Gm{constructor(t){this._mesh=new Pe(QT,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,KT)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}const Wm={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},tE={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ss extends va{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new mt(t.x,t.y):new mt(256,256),this.clearColor=new Xt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Mi(s,o,{type:Qi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Mi(s,o,{type:Qi});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Mi(s,o,{type:Qi});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=tE;this.highPassUniforms=wl.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new An({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new mt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Wm;this.copyUniforms=wl.clone(u.uniforms),this.blendMaterial=new An({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:xi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Xt,this.oldClearAlpha=1,this.basic=new Ti,this.fsQuad=new Gm(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new mt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ss.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ss.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new An({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new mt(.5,.5)},direction:{value:new mt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new An({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ss.BlurDirectionX=new mt(1,0);ss.BlurDirectionY=new mt(0,1);class eE extends va{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof An?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=wl.clone(t.uniforms),this.material=new An({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Gm(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ud extends va{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class nE extends va{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Xm{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new mt);this._width=n.width,this._height=n.height,e=new Mi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new eE(Wm),this.copyPass.material.blending=ji,this.clock=new K0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ud!==void 0&&(o instanceof Ud?n=!0:o instanceof nE&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new mt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ym extends va{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const Fr=.01,Nd=45/3,iE=3,Gc=45,Od=Wl({__name:"CubeStrip",props:{particleWidth:{},particleHeight:{}},setup(r){const t=r,e=jo(null);let n,i,s=null,o=null,a=null,l=[];const c=x_({particleCount:400,particleWidth:t.particleWidth??20,particleHeight:t.particleHeight??20,minSpeed:2,maxSpeed:5,speedRandomness:.5,positionZRandomness:.5,rotationRandomness:.5,rotateParticles:!1,useSquares:!0,emitterDepth:100,bloomStrength:1.1,bloomRadius:0,showControls:!1}),u=Gc/2+10;function h(p){const m=Fr*c.particleWidth,M=Fr*c.particleHeight,x=c.useSquares?new mo(m,M):new Ln(m,M,m),v=Math.floor(Math.random()*3);let b;switch(v){case 0:b=new Xt(1,0,0);break;case 1:b=new Xt(0,1,0);break;case 2:b=new Xt(0,0,1);break;default:b=new Xt(1,0,0)}const w=new Ti({color:b,transparent:!0,opacity:.7}),T=new Pe(x,w),R=Gc+u*2;T.position.set(-45-u+p/(c.particleCount-1)*R,0,Fr*(Math.random()-.5)*c.positionZRandomness*c.emitterDepth);const S=Fr*(Math.random()*(c.maxSpeed-c.minSpeed)+c.minSpeed);return T.speed=S+Fr*(Math.random()-.5)*c.speedRandomness,T.rotationSpeed=new $(Math.PI/2,Math.PI/2,Math.PI/2).multiplyScalar(Math.random()*c.rotationRandomness+.5),T}function f(){n=new Ah;const p=iE*1.5,m=p*Nd;i=new ql(-67.5/2,m/2,p/2,-4.5/2,.1,1e3),i.position.z=150,s=new Nh({antialias:!0}),s.setPixelRatio(window.devicePixelRatio),s.domElement&&(s.domElement.style.width="100%",s.domElement.style.height="auto");const M=new Ym(n,i);a=new ss(new mt(window.innerWidth,window.innerHeight),c.bloomStrength,c.bloomRadius,.1),o=new Xm(s),o.addPass(M),o.addPass(a),g(),e.value&&e.value.appendChild(s.domElement),d(),_()}function d(){l.forEach(p=>n.remove(p)),l=[];for(let p=0;p<c.particleCount;p++){const m=h(p);l.push(m),n.add(m)}}function g(){if(!s||!o||!a)return;const p=window.innerWidth,m=p/Nd;s.setSize(p,m),o.setSize(p,m),a.setSize(p,m),s.domElement&&(s.domElement.style.width="100%",s.domElement.style.height="auto")}function _(){requestAnimationFrame(_),l.forEach(p=>{p.position.x+=p.speed,!c.useSquares&&c.rotateParticles&&(p.rotation.x+=p.rotationSpeed.x*.016,p.rotation.y+=p.rotationSpeed.y*.016,p.rotation.z+=p.rotationSpeed.z*.016),p.position.x>Gc/2+u&&(l.indexOf(p),p.position.x=-45-u-Fr*(p.geometry instanceof Ln,p.geometry.parameters.width),p.position.y=0,p.position.z=Fr*(Math.random()-.5)*c.positionZRandomness*c.emitterDepth)}),o&&o.render()}return mh(()=>{f(),window.addEventListener("resize",g)}),ip(()=>{window.removeEventListener("resize",g),s==null||s.dispose()}),(p,m)=>(ta(),Qo("div",{ref_key:"container",ref:e,class:"relative w-full before:absolute before:inset-x-0 before:top-0 before:h-[2vw] before:bg-gradient-to-b before:from-black before:to-transparent after:absolute after:inset-x-0 after:bottom-0 after:h-[2vw] after:bg-gradient-to-t after:from-black after:to-transparent"},null,512))}});function rE(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function sE(r,t,e){return t&&rE(r.prototype,t),r}/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var sn,vl,Jn,gr,vr,Zs,qm,Hr,Vo,Zm,Ki,gi,$m,Jm=function(){return sn||typeof window<"u"&&(sn=window.gsap)&&sn.registerPlugin&&sn},Km=1,Bs=[],se=[],Ni=[],Go=Date.now,sh=function(t,e){return e},oE=function(){var t=Vo.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,se),i.push.apply(i,Ni),se=n,Ni=i,sh=function(o,a){return e[o](a)}},Mr=function(t,e){return~Ni.indexOf(t)&&Ni[Ni.indexOf(t)+1][e]},Wo=function(t){return!!~Zm.indexOf(t)},yn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},vn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Ka="scrollLeft",ja="scrollTop",oh=function(){return Ki&&Ki.isPressed||se.cache++},Bl=function(t,e){var n=function i(s){if(s||s===0){Km&&(Jn.history.scrollRestoration="manual");var o=Ki&&Ki.isPressed;s=i.v=Math.round(s)||(Ki&&Ki.iOS?1:0),t(s),i.cacheID=se.cache,o&&sh("ss",s)}else(e||se.cache!==i.cacheID||sh("ref"))&&(i.cacheID=se.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},wn={s:Ka,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Bl(function(r){return arguments.length?Jn.scrollTo(r,Ze.sc()):Jn.pageXOffset||gr[Ka]||vr[Ka]||Zs[Ka]||0})},Ze={s:ja,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:wn,sc:Bl(function(r){return arguments.length?Jn.scrollTo(wn.sc(),r):Jn.pageYOffset||gr[ja]||vr[ja]||Zs[ja]||0})},Pn=function(t,e){return(e&&e._ctx&&e._ctx.selector||sn.utils.toArray)(t)[0]||(typeof t=="string"&&sn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},wr=function(t,e){var n=e.s,i=e.sc;Wo(t)&&(t=gr.scrollingElement||vr);var s=se.indexOf(t),o=i===Ze.sc?1:2;!~s&&(s=se.push(t)-1),se[s+o]||yn(t,"scroll",oh);var a=se[s+o],l=a||(se[s+o]=Bl(Mr(t,n),!0)||(Wo(t)?i:Bl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=sn.getProperty(t,"scrollBehavior")==="smooth"),l},ah=function(t,e,n){var i=t,s=t,o=Go(),a=o,l=e||50,c=Math.max(500,l*3),u=function(g,_){var p=Go();_||p-o>l?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(g){var _=a,p=s,m=Go();return(g||g===0)&&g!==i&&u(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},wo=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Fd=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},jm=function(){Vo=sn.core.globals().ScrollTrigger,Vo&&Vo.core&&oE()},Qm=function(t){return sn=t||Jm(),!vl&&sn&&typeof document<"u"&&document.body&&(Jn=window,gr=document,vr=gr.documentElement,Zs=gr.body,Zm=[Jn,gr,vr,Zs],sn.utils.clamp,$m=sn.core.context||function(){},Hr="onpointerenter"in Zs?"pointer":"mouse",qm=Fe.isTouch=Jn.matchMedia&&Jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,gi=Fe.eventTypes=("ontouchstart"in vr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in vr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Km=0},500),jm(),vl=1),vl};wn.op=Ze;se.cache=0;var Fe=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){vl||Qm(sn)||console.warn("Please gsap.registerPlugin(Observer)"),Vo||jm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,M=n.onDrag,x=n.onPress,v=n.onRelease,b=n.onRight,w=n.onLeft,T=n.onUp,R=n.onDown,S=n.onChangeX,y=n.onChangeY,I=n.onChange,B=n.onToggleX,V=n.onToggleY,Y=n.onHover,Q=n.onHoverEnd,G=n.onMove,X=n.ignoreCheck,z=n.isNormalizer,ht=n.onGestureStart,F=n.onGestureEnd,_t=n.onWheel,Rt=n.onEnable,Vt=n.onDisable,N=n.onClick,U=n.scrollSpeed,L=n.capture,C=n.allowClicks,tt=n.lockAxis,ft=n.onLockAxis;this.target=a=Pn(a)||vr,this.vars=n,d&&(d=sn.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,U=U||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Jn.getComputedStyle(Zs).lineHeight)||22);var J,dt,et,q,E,st,nt,k=this,H=0,O=0,lt=n.passive||!u&&n.passive!==!1,P=wr(a,wn),A=wr(a,Ze),K=P(),it=A(),at=~o.indexOf("touch")&&!~o.indexOf("pointer")&&gi[0]==="pointerdown",ct=Wo(a),yt=a.ownerDocument||gr,xt=[0,0,0],St=[0,0,0],Bt=0,gt=function(){return Bt=Go()},Mt=function(Ft,jt){return(k.event=Ft)&&d&&~d.indexOf(Ft.target)||jt&&at&&Ft.pointerType!=="touch"||X&&X(Ft,jt)},Nt=function(){k._vx.reset(),k._vy.reset(),dt.pause(),h&&h(k)},Ot=function(){var Ft=k.deltaX=Fd(xt),jt=k.deltaY=Fd(St),wt=Math.abs(Ft)>=i,Jt=Math.abs(jt)>=i;I&&(wt||Jt)&&I(k,Ft,jt,xt,St),wt&&(b&&k.deltaX>0&&b(k),w&&k.deltaX<0&&w(k),S&&S(k),B&&k.deltaX<0!=H<0&&B(k),H=k.deltaX,xt[0]=xt[1]=xt[2]=0),Jt&&(R&&k.deltaY>0&&R(k),T&&k.deltaY<0&&T(k),y&&y(k),V&&k.deltaY<0!=O<0&&V(k),O=k.deltaY,St[0]=St[1]=St[2]=0),(q||et)&&(G&&G(k),et&&(p&&et===1&&p(k),M&&M(k),et=0),q=!1),st&&!(st=!1)&&ft&&ft(k),E&&(_t(k),E=!1),J=0},Pt=function(Ft,jt,wt){xt[wt]+=Ft,St[wt]+=jt,k._vx.update(Ft),k._vy.update(jt),c?J||(J=requestAnimationFrame(Ot)):Ot()},Kt=function(Ft,jt){tt&&!nt&&(k.axis=nt=Math.abs(Ft)>Math.abs(jt)?"x":"y",st=!0),nt!=="y"&&(xt[2]+=Ft,k._vx.update(Ft,!0)),nt!=="x"&&(St[2]+=jt,k._vy.update(jt,!0)),c?J||(J=requestAnimationFrame(Ot)):Ot()},Yt=function(Ft){if(!Mt(Ft,1)){Ft=wo(Ft,u);var jt=Ft.clientX,wt=Ft.clientY,Jt=jt-k.x,zt=wt-k.y,Zt=k.isDragging;k.x=jt,k.y=wt,(Zt||(Jt||zt)&&(Math.abs(k.startX-jt)>=s||Math.abs(k.startY-wt)>=s))&&(et=Zt?2:1,Zt||(k.isDragging=!0),Kt(Jt,zt))}},le=k.onPress=function(Dt){Mt(Dt,1)||Dt&&Dt.button||(k.axis=nt=null,dt.pause(),k.isPressed=!0,Dt=wo(Dt),H=O=0,k.startX=k.x=Dt.clientX,k.startY=k.y=Dt.clientY,k._vx.reset(),k._vy.reset(),yn(z?a:yt,gi[1],Yt,lt,!0),k.deltaX=k.deltaY=0,x&&x(k))},W=k.onRelease=function(Dt){if(!Mt(Dt,1)){vn(z?a:yt,gi[1],Yt,!0);var Ft=!isNaN(k.y-k.startY),jt=k.isDragging,wt=jt&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),Jt=wo(Dt);!wt&&Ft&&(k._vx.reset(),k._vy.reset(),u&&C&&sn.delayedCall(.08,function(){if(Go()-Bt>300&&!Dt.defaultPrevented){if(Dt.target.click)Dt.target.click();else if(yt.createEvent){var zt=yt.createEvent("MouseEvents");zt.initMouseEvent("click",!0,!0,Jn,1,Jt.screenX,Jt.screenY,Jt.clientX,Jt.clientY,!1,!1,!1,!1,0,null),Dt.target.dispatchEvent(zt)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,h&&jt&&!z&&dt.restart(!0),et&&Ot(),m&&jt&&m(k),v&&v(k,wt)}},Et=function(Ft){return Ft.touches&&Ft.touches.length>1&&(k.isGesturing=!0)&&ht(Ft,k.isDragging)},ut=function(){return(k.isGesturing=!1)||F(k)},pt=function(Ft){if(!Mt(Ft)){var jt=P(),wt=A();Pt((jt-K)*U,(wt-it)*U,1),K=jt,it=wt,h&&dt.restart(!0)}},Tt=function(Ft){if(!Mt(Ft)){Ft=wo(Ft,u),_t&&(E=!0);var jt=(Ft.deltaMode===1?l:Ft.deltaMode===2?Jn.innerHeight:1)*g;Pt(Ft.deltaX*jt,Ft.deltaY*jt,0),h&&!z&&dt.restart(!0)}},bt=function(Ft){if(!Mt(Ft)){var jt=Ft.clientX,wt=Ft.clientY,Jt=jt-k.x,zt=wt-k.y;k.x=jt,k.y=wt,q=!0,h&&dt.restart(!0),(Jt||zt)&&Kt(Jt,zt)}},qt=function(Ft){k.event=Ft,Y(k)},ce=function(Ft){k.event=Ft,Q(k)},De=function(Ft){return Mt(Ft)||wo(Ft,u)&&N(k)};dt=k._dc=sn.delayedCall(f||.25,Nt).pause(),k.deltaX=k.deltaY=0,k._vx=ah(0,50,!0),k._vy=ah(0,50,!0),k.scrollX=P,k.scrollY=A,k.isDragging=k.isGesturing=k.isPressed=!1,$m(this),k.enable=function(Dt){return k.isEnabled||(yn(ct?yt:a,"scroll",oh),o.indexOf("scroll")>=0&&yn(ct?yt:a,"scroll",pt,lt,L),o.indexOf("wheel")>=0&&yn(a,"wheel",Tt,lt,L),(o.indexOf("touch")>=0&&qm||o.indexOf("pointer")>=0)&&(yn(a,gi[0],le,lt,L),yn(yt,gi[2],W),yn(yt,gi[3],W),C&&yn(a,"click",gt,!0,!0),N&&yn(a,"click",De),ht&&yn(yt,"gesturestart",Et),F&&yn(yt,"gestureend",ut),Y&&yn(a,Hr+"enter",qt),Q&&yn(a,Hr+"leave",ce),G&&yn(a,Hr+"move",bt)),k.isEnabled=!0,k.isDragging=k.isGesturing=k.isPressed=q=et=!1,k._vx.reset(),k._vy.reset(),K=P(),it=A(),Dt&&Dt.type&&le(Dt),Rt&&Rt(k)),k},k.disable=function(){k.isEnabled&&(Bs.filter(function(Dt){return Dt!==k&&Wo(Dt.target)}).length||vn(ct?yt:a,"scroll",oh),k.isPressed&&(k._vx.reset(),k._vy.reset(),vn(z?a:yt,gi[1],Yt,!0)),vn(ct?yt:a,"scroll",pt,L),vn(a,"wheel",Tt,L),vn(a,gi[0],le,L),vn(yt,gi[2],W),vn(yt,gi[3],W),vn(a,"click",gt,!0),vn(a,"click",De),vn(yt,"gesturestart",Et),vn(yt,"gestureend",ut),vn(a,Hr+"enter",qt),vn(a,Hr+"leave",ce),vn(a,Hr+"move",bt),k.isEnabled=k.isPressed=k.isDragging=!1,Vt&&Vt(k))},k.kill=k.revert=function(){k.disable();var Dt=Bs.indexOf(k);Dt>=0&&Bs.splice(Dt,1),Ki===k&&(Ki=0)},Bs.push(k),z&&Wo(a)&&(Ki=k),k.enable(_)},sE(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Fe.version="3.12.7";Fe.create=function(r){return new Fe(r)};Fe.register=Qm;Fe.getAll=function(){return Bs.slice()};Fe.getById=function(r){return Bs.filter(function(t){return t.vars.id===r})[0]};Jm()&&sn.registerPlugin(Fe);/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ut,Ls,re,Se,qn,me,Qh,zl,pa,Xo,Do,Qa,un,jl,lh,Tn,Bd,zd,Is,t_,Wc,e_,Mn,ch,n_,i_,fr,uh,tf,$s,ef,kl,hh,Xc,tl=1,hn=Date.now,Yc=hn(),fi=0,Lo=0,kd=function(t,e,n){var i=Gn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Hd=function(t,e){return e&&(!Gn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},aE=function r(){return Lo&&requestAnimationFrame(r)},Vd=function(){return jl=1},Gd=function(){return jl=0},wi=function(t){return t},Io=function(t){return Math.round(t*1e5)/1e5||0},r_=function(){return typeof window<"u"},s_=function(){return Ut||r_()&&(Ut=window.gsap)&&Ut.registerPlugin&&Ut},os=function(t){return!!~Qh.indexOf(t)},o_=function(t){return(t==="Height"?ef:re["inner"+t])||qn["client"+t]||me["client"+t]},a_=function(t){return Mr(t,"getBoundingClientRect")||(os(t)?function(){return Tl.width=re.innerWidth,Tl.height=ef,Tl}:function(){return Zi(t)})},lE=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=Mr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?o_(s):t["client"+s])||0}},cE=function(t,e){return!e||~Ni.indexOf(t)?a_(t):function(){return Tl}},Di=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Mr(t,n))?o()-a_(t)()[s]:os(t)?(qn[n]||me[n])-o_(i):t[n]-t["offset"+i])},el=function(t,e){for(var n=0;n<Is.length;n+=3)(!e||~e.indexOf(Is[n+1]))&&t(Is[n],Is[n+1],Is[n+2])},Gn=function(t){return typeof t=="string"},dn=function(t){return typeof t=="function"},Uo=function(t){return typeof t=="number"},Vr=function(t){return typeof t=="object"},Ao=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},qc=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},Cs=Math.abs,l_="left",c_="top",nf="right",rf="bottom",Qr="width",ts="height",Yo="Right",qo="Left",Zo="Top",$o="Bottom",ke="padding",ai="margin",uo="Width",sf="Height",qe="px",li=function(t){return re.getComputedStyle(t)},uE=function(t){var e=li(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Wd=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Zi=function(t,e){var n=e&&li(t)[lh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ut.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},Hl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},u_=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},hE=function(t){return function(e){return Ut.utils.snap(u_(t),e)}},of=function(t){var e=Ut.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},fE=function(t){return function(e,n){return of(u_(t))(e,n.direction)}},nl=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},tn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},Qe=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},il=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Xd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},rl={toggleActions:"play",anticipatePin:0},Vl={top:0,left:0,center:.5,bottom:1,right:1},xl=function(t,e){if(Gn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Vl?Vl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},sl=function(t,e,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=Se.createElement("div"),_=os(n)||Mr(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=_?me:n,M=t.indexOf("start")!==-1,x=M?c:u,v="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(v+=(i===Ze?nf:rf)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=v,g.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],yl(g,0,i,M),g},yl=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+uo]=1,s["border"+a+uo]=0,s[n.p]=e+"px",Ut.set(t,s)},ne=[],fh={},ma,Yd=function(){return hn()-fi>34&&(ma||(ma=requestAnimationFrame(er)))},Rs=function(){(!Mn||!Mn.isPressed||Mn.startX>me.clientWidth)&&(se.cache++,Mn?ma||(ma=requestAnimationFrame(er)):er(),fi||ls("scrollStart"),fi=hn())},Zc=function(){i_=re.innerWidth,n_=re.innerHeight},No=function(t){se.cache++,(t===!0||!un&&!e_&&!Se.fullscreenElement&&!Se.webkitFullscreenElement&&(!ch||i_!==re.innerWidth||Math.abs(re.innerHeight-n_)>re.innerHeight*.25))&&zl.restart(!0)},as={},dE=[],h_=function r(){return Qe(Qt,"scrollEnd",r)||Zr(!0)},ls=function(t){return as[t]&&as[t].map(function(e){return e()})||dE},Vn=[],f_=function(t){for(var e=0;e<Vn.length;e+=5)(!t||Vn[e+4]&&Vn[e+4].query===t)&&(Vn[e].style.cssText=Vn[e+1],Vn[e].getBBox&&Vn[e].setAttribute("transform",Vn[e+2]||""),Vn[e+3].uncache=1)},af=function(t,e){var n;for(Tn=0;Tn<ne.length;Tn++)n=ne[Tn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));kl=!0,e&&f_(e),e||ls("revert")},d_=function(t,e){se.cache++,(e||!En)&&se.forEach(function(n){return dn(n)&&n.cacheID++&&(n.rec=0)}),Gn(t)&&(re.history.scrollRestoration=tf=t)},En,es=0,qd,pE=function(){if(qd!==es){var t=qd=es;requestAnimationFrame(function(){return t===es&&Zr(!0)})}},p_=function(){me.appendChild($s),ef=!Mn&&$s.offsetHeight||re.innerHeight,me.removeChild($s)},Zd=function(t){return pa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Zr=function(t,e){if(qn=Se.documentElement,me=Se.body,Qh=[re,Se,qn,me],fi&&!t&&!kl){tn(Qt,"scrollEnd",h_);return}p_(),En=Qt.isRefreshing=!0,se.forEach(function(i){return dn(i)&&++i.cacheID&&(i.rec=i())});var n=ls("refreshInit");t_&&Qt.sort(),e||af(),se.forEach(function(i){dn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ne.slice(0).forEach(function(i){return i.refresh()}),kl=!1,ne.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),hh=1,Zd(!0),ne.forEach(function(i){var s=Di(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Zd(!1),hh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),se.forEach(function(i){dn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),d_(tf,1),zl.pause(),es++,En=2,er(2),ne.forEach(function(i){return dn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),En=Qt.isRefreshing=!1,ls("refresh")},dh=0,Sl=1,Jo,er=function(t){if(t===2||!En&&!kl){Qt.isUpdating=!0,Jo&&Jo.update(0);var e=ne.length,n=hn(),i=n-Yc>=50,s=e&&ne[0].scroll();if(Sl=dh>s?-1:1,En||(dh=s),i&&(fi&&!jl&&n-fi>200&&(fi=0,ls("scrollEnd")),Do=Yc,Yc=n),Sl<0){for(Tn=e;Tn-- >0;)ne[Tn]&&ne[Tn].update(0,i);Sl=1}else for(Tn=0;Tn<e;Tn++)ne[Tn]&&ne[Tn].update(0,i);Qt.isUpdating=!1}ma=0},ph=[l_,c_,rf,nf,ai+$o,ai+Yo,ai+Zo,ai+qo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ml=ph.concat([Qr,ts,"boxSizing","max"+uo,"max"+sf,"position",ai,ke,ke+Zo,ke+Yo,ke+$o,ke+qo]),mE=function(t,e,n){Js(n);var i=t._gsap;if(i.spacerIsNative)Js(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},$c=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=ph.length,o=e.style,a=t.style,l;s--;)l=ph[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[rf]=a[nf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Qr]=Hl(t,wn)+qe,o[ts]=Hl(t,Ze)+qe,o[ke]=a[ai]=a[c_]=a[l_]="0",Js(i),a[Qr]=a["max"+uo]=n[Qr],a[ts]=a["max"+sf]=n[ts],a[ke]=n[ke],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},_E=/([A-Z])/g,Js=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Ut.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(_E,"-$1").toLowerCase())}},ol=function(t){for(var e=Ml.length,n=t.style,i=[],s=0;s<e;s++)i.push(Ml[s],n[Ml[s]]);return i.t=t,i},gE=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Tl={left:0,top:0},$d=function(t,e,n,i,s,o,a,l,c,u,h,f,d,g){dn(t)&&(t=t(l)),Gn(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?xl("0"+t.substr(3),n):0));var _=d?d.time():0,p,m,M;if(d&&d.seek(0),isNaN(t)||(t=+t),Uo(t))d&&(t=Ut.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),a&&yl(a,n,i,!0);else{dn(e)&&(e=e(l));var x=(t||"0").split(" "),v,b,w,T;M=Pn(e,l)||me,v=Zi(M)||{},(!v||!v.left&&!v.top)&&li(M).display==="none"&&(T=M.style.display,M.style.display="block",v=Zi(M),T?M.style.display=T:M.style.removeProperty("display")),b=xl(x[0],v[i.d]),w=xl(x[1]||"0",n),t=v[i.p]-c[i.p]-u+b+s-w,a&&yl(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var R=t+n,S=o._isStart;p="scroll"+i.d2,yl(o,R,i,S&&R>20||!S&&(h?Math.max(me[p],qn[p]):o.parentNode[p])<=R+1),h&&(c=Zi(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+qe))}return d&&M&&(p=Zi(M),d.seek(f),m=Zi(M),d._caScrollDist=p[i.p]-m[i.p],t=t/d._caScrollDist*f),d&&d.seek(_),d?t:Math.round(t)},vE=/(webkit|moz|length|cssText|inset)/i,Jd=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===me){t._stOrig=s.cssText,a=li(t);for(o in a)!+o&&!vE.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Ut.core.getCache(t).uncache=1,e.appendChild(t)}},m_=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},al=function(t,e,n){var i={};i[e.p]="+="+n,Ut.set(t,i)},Kd=function(t,e){var n=wr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||n();var _=m_(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){se.cache++,o.tween&&er()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ut.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},tn(t,"wheel",n.wheelHandler),Qt.isTouch&&tn(t,"touchmove",n.wheelHandler),s},Qt=function(){function r(e,n){Ls||r.register(Ut)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),uh(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Lo){this.update=this.refresh=this.kill=wi;return}n=Wd(Gn(n)||Uo(n)||n.nodeType?{trigger:n}:n,rl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,M=s.onSnapComplete,x=s.once,v=s.snap,b=s.pinReparent,w=s.pinSpacer,T=s.containerAnimation,R=s.fastScrollEnd,S=s.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?wn:Ze,I=!h&&h!==0,B=Pn(n.scroller||re),V=Ut.core.getCache(B),Y=os(B),Q=("pinType"in n?n.pinType:Mr(B,"pinType")||Y&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=I&&n.toggleActions.split(" "),z="markers"in n?n.markers:rl.markers,ht=Y?0:parseFloat(li(B)["border"+y.p2+uo])||0,F=this,_t=n.onRefreshInit&&function(){return n.onRefreshInit(F)},Rt=lE(B,Y,y),Vt=cE(B,Y),N=0,U=0,L=0,C=wr(B,y),tt,ft,J,dt,et,q,E,st,nt,k,H,O,lt,P,A,K,it,at,ct,yt,xt,St,Bt,gt,Mt,Nt,Ot,Pt,Kt,Yt,le,W,Et,ut,pt,Tt,bt,qt,ce;if(F._startClamp=F._endClamp=!1,F._dir=y,p*=45,F.scroller=B,F.scroll=T?T.time.bind(T):C,dt=C(),F.vars=n,i=i||n.animation,"refreshPriority"in n&&(t_=1,n.refreshPriority===-9999&&(Jo=F)),V.tweenScroll=V.tweenScroll||{top:Kd(B,Ze),left:Kd(B,wn)},F.tweenTo=tt=V.tweenScroll[y.p],F.scrubDuration=function(wt){Et=Uo(wt)&&wt,Et?W?W.duration(wt):W=Ut.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Et,paused:!0,onComplete:function(){return m&&m(F)}}):(W&&W.progress(1).kill(),W=0)},i&&(i.vars.lazy=!1,i._initted&&!F.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),F.animation=i.pause(),i.scrollTrigger=F,F.scrubDuration(h),Yt=0,l||(l=i.vars.id)),v&&((!Vr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in me.style&&Ut.set(Y?[me,qn]:B,{scrollBehavior:"auto"}),se.forEach(function(wt){return dn(wt)&&wt.target===(Y?Se.scrollingElement||qn:B)&&(wt.smooth=!1)}),J=dn(v.snapTo)?v.snapTo:v.snapTo==="labels"?hE(i):v.snapTo==="labelsDirectional"?fE(i):v.directional!==!1?function(wt,Jt){return of(v.snapTo)(wt,hn()-U<500?0:Jt.direction)}:Ut.utils.snap(v.snapTo),ut=v.duration||{min:.1,max:2},ut=Vr(ut)?Xo(ut.min,ut.max):Xo(ut,ut),pt=Ut.delayedCall(v.delay||Et/2||.1,function(){var wt=C(),Jt=hn()-U<500,zt=tt.tween;if((Jt||Math.abs(F.getVelocity())<10)&&!zt&&!jl&&N!==wt){var Zt=(wt-q)/P,Ne=i&&!I?i.totalProgress():Zt,ie=Jt?0:(Ne-le)/(hn()-Do)*1e3||0,ye=Ut.utils.clamp(-Zt,1-Zt,Cs(ie/2)*ie/.185),We=Zt+(v.inertia===!1?0:ye),ge,ve,fe=v,Bn=fe.onStart,Te=fe.onInterrupt,_n=fe.onComplete;if(ge=J(We,F),Uo(ge)||(ge=We),ve=Math.max(0,Math.round(q+ge*P)),wt<=E&&wt>=q&&ve!==wt){if(zt&&!zt._initted&&zt.data<=Cs(ve-wt))return;v.inertia===!1&&(ye=ge-Zt),tt(ve,{duration:ut(Cs(Math.max(Cs(We-Ne),Cs(ge-Ne))*.185/ie/.05||0)),ease:v.ease||"power3",data:Cs(ve-wt),onInterrupt:function(){return pt.restart(!0)&&Te&&Te(F)},onComplete:function(){F.update(),N=C(),i&&!I&&(W?W.resetTo("totalProgress",ge,i._tTime/i._tDur):i.progress(ge)),Yt=le=i&&!I?i.totalProgress():F.progress,M&&M(F),_n&&_n(F)}},wt,ye*P,ve-wt-ye*P),Bn&&Bn(F,tt.tween)}}else F.isActive&&N!==wt&&pt.restart(!0)}).pause()),l&&(fh[l]=F),f=F.trigger=Pn(f||d!==!0&&d),ce=f&&f._gsap&&f._gsap.stRevert,ce&&(ce=ce(F)),d=d===!0?f:Pn(d),Gn(a)&&(a={targets:f,className:a}),d&&(g===!1||g===ai||(g=!g&&d.parentNode&&d.parentNode.style&&li(d.parentNode).display==="flex"?!1:ke),F.pin=d,ft=Ut.core.getCache(d),ft.spacer?A=ft.pinState:(w&&(w=Pn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),ft.spacerIsNative=!!w,w&&(ft.spacerState=ol(w))),ft.spacer=at=w||Se.createElement("div"),at.classList.add("pin-spacer"),l&&at.classList.add("pin-spacer-"+l),ft.pinState=A=ol(d)),n.force3D!==!1&&Ut.set(d,{force3D:!0}),F.spacer=at=ft.spacer,Kt=li(d),gt=Kt[g+y.os2],yt=Ut.getProperty(d),xt=Ut.quickSetter(d,y.a,qe),$c(d,at,Kt),it=ol(d)),z){O=Vr(z)?Wd(z,Xd):Xd,k=sl("scroller-start",l,B,y,O,0),H=sl("scroller-end",l,B,y,O,0,k),ct=k["offset"+y.op.d2];var De=Pn(Mr(B,"content")||B);st=this.markerStart=sl("start",l,De,y,O,ct,0,T),nt=this.markerEnd=sl("end",l,De,y,O,ct,0,T),T&&(qt=Ut.quickSetter([st,nt],y.a,qe)),!Q&&!(Ni.length&&Mr(B,"fixedMarkers")===!0)&&(uE(Y?me:B),Ut.set([k,H],{force3D:!0}),Nt=Ut.quickSetter(k,y.a,qe),Pt=Ut.quickSetter(H,y.a,qe))}if(T){var Dt=T.vars.onUpdate,Ft=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){F.update(0,0,1),Dt&&Dt.apply(T,Ft||[])})}if(F.previous=function(){return ne[ne.indexOf(F)-1]},F.next=function(){return ne[ne.indexOf(F)+1]},F.revert=function(wt,Jt){if(!Jt)return F.kill(!0);var zt=wt!==!1||!F.enabled,Zt=un;zt!==F.isReverted&&(zt&&(Tt=Math.max(C(),F.scroll.rec||0),L=F.progress,bt=i&&i.progress()),st&&[st,nt,k,H].forEach(function(Ne){return Ne.style.display=zt?"none":"block"}),zt&&(un=F,F.update(zt)),d&&(!b||!F.isActive)&&(zt?mE(d,at,A):$c(d,at,li(d),Mt)),zt||F.update(zt),un=Zt,F.isReverted=zt)},F.refresh=function(wt,Jt,zt,Zt){if(!((un||!F.enabled)&&!Jt)){if(d&&wt&&fi){tn(r,"scrollEnd",h_);return}!En&&_t&&_t(F),un=F,tt.tween&&!zt&&(tt.tween.kill(),tt.tween=0),W&&W.pause(),_&&i&&i.revert({kill:!1}).invalidate(),F.isReverted||F.revert(!0,!0),F._subPinOffset=!1;var Ne=Rt(),ie=Vt(),ye=T?T.duration():Di(B,y),We=P<=.01,ge=0,ve=Zt||0,fe=Vr(zt)?zt.end:n.end,Bn=n.endTrigger||f,Te=Vr(zt)?zt.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),_n=F.pinnedContainer=n.pinnedContainer&&Pn(n.pinnedContainer,F),ni=f&&Math.max(0,ne.indexOf(F))||0,Xe=ni,Ye,D,j,ot,rt,Z,vt,At,It,Lt,Ht,Wt,kt;for(z&&Vr(zt)&&(Wt=Ut.getProperty(k,y.p),kt=Ut.getProperty(H,y.p));Xe-- >0;)Z=ne[Xe],Z.end||Z.refresh(0,1)||(un=F),vt=Z.pin,vt&&(vt===f||vt===d||vt===_n)&&!Z.isReverted&&(Lt||(Lt=[]),Lt.unshift(Z),Z.revert(!0,!0)),Z!==ne[Xe]&&(ni--,Xe--);for(dn(Te)&&(Te=Te(F)),Te=kd(Te,"start",F),q=$d(Te,f,Ne,y,C(),st,k,F,ie,ht,Q,ye,T,F._startClamp&&"_startClamp")||(d?-.001:0),dn(fe)&&(fe=fe(F)),Gn(fe)&&!fe.indexOf("+=")&&(~fe.indexOf(" ")?fe=(Gn(Te)?Te.split(" ")[0]:"")+fe:(ge=xl(fe.substr(2),Ne),fe=Gn(Te)?Te:(T?Ut.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,q):q)+ge,Bn=f)),fe=kd(fe,"end",F),E=Math.max(q,$d(fe||(Bn?"100% 0":ye),Bn,Ne,y,C()+ge,nt,H,F,ie,ht,Q,ye,T,F._endClamp&&"_endClamp"))||-.001,ge=0,Xe=ni;Xe--;)Z=ne[Xe],vt=Z.pin,vt&&Z.start-Z._pinPush<=q&&!T&&Z.end>0&&(Ye=Z.end-(F._startClamp?Math.max(0,Z.start):Z.start),(vt===f&&Z.start-Z._pinPush<q||vt===_n)&&isNaN(Te)&&(ge+=Ye*(1-Z.progress)),vt===d&&(ve+=Ye));if(q+=ge,E+=ge,F._startClamp&&(F._startClamp+=ge),F._endClamp&&!En&&(F._endClamp=E||-.001,E=Math.min(E,Di(B,y))),P=E-q||(q-=.01)&&.001,We&&(L=Ut.utils.clamp(0,1,Ut.utils.normalize(q,E,Tt))),F._pinPush=ve,st&&ge&&(Ye={},Ye[y.a]="+="+ge,_n&&(Ye[y.p]="-="+C()),Ut.set([st,nt],Ye)),d&&!(hh&&F.end>=Di(B,y)))Ye=li(d),ot=y===Ze,j=C(),St=parseFloat(yt(y.a))+ve,!ye&&E>1&&(Ht=(Y?Se.scrollingElement||qn:B).style,Ht={style:Ht,value:Ht["overflow"+y.a.toUpperCase()]},Y&&li(me)["overflow"+y.a.toUpperCase()]!=="scroll"&&(Ht.style["overflow"+y.a.toUpperCase()]="scroll")),$c(d,at,Ye),it=ol(d),D=Zi(d,!0),At=Q&&wr(B,ot?wn:Ze)(),g?(Mt=[g+y.os2,P+ve+qe],Mt.t=at,Xe=g===ke?Hl(d,y)+P+ve:0,Xe&&(Mt.push(y.d,Xe+qe),at.style.flexBasis!=="auto"&&(at.style.flexBasis=Xe+qe)),Js(Mt),_n&&ne.forEach(function(ee){ee.pin===_n&&ee.vars.pinSpacing!==!1&&(ee._subPinOffset=!0)}),Q&&C(Tt)):(Xe=Hl(d,y),Xe&&at.style.flexBasis!=="auto"&&(at.style.flexBasis=Xe+qe)),Q&&(rt={top:D.top+(ot?j-q:At)+qe,left:D.left+(ot?At:j-q)+qe,boxSizing:"border-box",position:"fixed"},rt[Qr]=rt["max"+uo]=Math.ceil(D.width)+qe,rt[ts]=rt["max"+sf]=Math.ceil(D.height)+qe,rt[ai]=rt[ai+Zo]=rt[ai+Yo]=rt[ai+$o]=rt[ai+qo]="0",rt[ke]=Ye[ke],rt[ke+Zo]=Ye[ke+Zo],rt[ke+Yo]=Ye[ke+Yo],rt[ke+$o]=Ye[ke+$o],rt[ke+qo]=Ye[ke+qo],K=gE(A,rt,b),En&&C(0)),i?(It=i._initted,Wc(1),i.render(i.duration(),!0,!0),Bt=yt(y.a)-St+P+ve,Ot=Math.abs(P-Bt)>1,Q&&Ot&&K.splice(K.length-2,2),i.render(0,!0,!0),It||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Wc(0)):Bt=P,Ht&&(Ht.value?Ht.style["overflow"+y.a.toUpperCase()]=Ht.value:Ht.style.removeProperty("overflow-"+y.a));else if(f&&C()&&!T)for(D=f.parentNode;D&&D!==me;)D._pinOffset&&(q-=D._pinOffset,E-=D._pinOffset),D=D.parentNode;Lt&&Lt.forEach(function(ee){return ee.revert(!1,!0)}),F.start=q,F.end=E,dt=et=En?Tt:C(),!T&&!En&&(dt<Tt&&C(Tt),F.scroll.rec=0),F.revert(!1,!0),U=hn(),pt&&(N=-1,pt.restart(!0)),un=0,i&&I&&(i._initted||bt)&&i.progress()!==bt&&i.progress(bt||0,!0).render(i.time(),!0,!0),(We||L!==F.progress||T||_||i&&!i._initted)&&(i&&!I&&i.totalProgress(T&&q<-.001&&!L?Ut.utils.normalize(q,E,0):L,!0),F.progress=We||(dt-q)/P===L?0:L),d&&g&&(at._pinOffset=Math.round(F.progress*Bt)),W&&W.invalidate(),isNaN(Wt)||(Wt-=Ut.getProperty(k,y.p),kt-=Ut.getProperty(H,y.p),al(k,y,Wt),al(st,y,Wt-(Zt||0)),al(H,y,kt),al(nt,y,kt-(Zt||0))),We&&!En&&F.update(),u&&!En&&!lt&&(lt=!0,u(F),lt=!1)}},F.getVelocity=function(){return(C()-et)/(hn()-Do)*1e3||0},F.endAnimation=function(){Ao(F.callbackAnimation),i&&(W?W.progress(1):i.paused()?I||Ao(i,F.direction<0,1):Ao(i,i.reversed()))},F.labelToScroll=function(wt){return i&&i.labels&&(q||F.refresh()||q)+i.labels[wt]/i.duration()*P||0},F.getTrailing=function(wt){var Jt=ne.indexOf(F),zt=F.direction>0?ne.slice(0,Jt).reverse():ne.slice(Jt+1);return(Gn(wt)?zt.filter(function(Zt){return Zt.vars.preventOverlaps===wt}):zt).filter(function(Zt){return F.direction>0?Zt.end<=q:Zt.start>=E})},F.update=function(wt,Jt,zt){if(!(T&&!zt&&!wt)){var Zt=En===!0?Tt:F.scroll(),Ne=wt?0:(Zt-q)/P,ie=Ne<0?0:Ne>1?1:Ne||0,ye=F.progress,We,ge,ve,fe,Bn,Te,_n,ni;if(Jt&&(et=dt,dt=T?C():Zt,v&&(le=Yt,Yt=i&&!I?i.totalProgress():ie)),p&&d&&!un&&!tl&&fi&&(!ie&&q<Zt+(Zt-et)/(hn()-Do)*p?ie=1e-4:ie===1&&E>Zt+(Zt-et)/(hn()-Do)*p&&(ie=.9999)),ie!==ye&&F.enabled){if(We=F.isActive=!!ie&&ie<1,ge=!!ye&&ye<1,Te=We!==ge,Bn=Te||!!ie!=!!ye,F.direction=ie>ye?1:-1,F.progress=ie,Bn&&!un&&(ve=ie&&!ye?0:ie===1?1:ye===1?2:3,I&&(fe=!Te&&X[ve+1]!=="none"&&X[ve+1]||X[ve],ni=i&&(fe==="complete"||fe==="reset"||fe in i))),S&&(Te||ni)&&(ni||h||!i)&&(dn(S)?S(F):F.getTrailing(S).forEach(function(j){return j.endAnimation()})),I||(W&&!un&&!tl?(W._dp._time-W._start!==W._time&&W.render(W._dp._time-W._start),W.resetTo?W.resetTo("totalProgress",ie,i._tTime/i._tDur):(W.vars.totalProgress=ie,W.invalidate().restart())):i&&i.totalProgress(ie,!!(un&&(U||wt)))),d){if(wt&&g&&(at.style[g+y.os2]=gt),!Q)xt(Io(St+Bt*ie));else if(Bn){if(_n=!wt&&ie>ye&&E+1>Zt&&Zt+1>=Di(B,y),b)if(!wt&&(We||_n)){var Xe=Zi(d,!0),Ye=Zt-q;Jd(d,me,Xe.top+(y===Ze?Ye:0)+qe,Xe.left+(y===Ze?0:Ye)+qe)}else Jd(d,at);Js(We||_n?K:it),Ot&&ie<1&&We||xt(St+(ie===1&&!_n?Bt:0))}}v&&!tt.tween&&!un&&!tl&&pt.restart(!0),a&&(Te||x&&ie&&(ie<1||!Xc))&&pa(a.targets).forEach(function(j){return j.classList[We||x?"add":"remove"](a.className)}),o&&!I&&!wt&&o(F),Bn&&!un?(I&&(ni&&(fe==="complete"?i.pause().totalProgress(1):fe==="reset"?i.restart(!0).pause():fe==="restart"?i.restart(!0):i[fe]()),o&&o(F)),(Te||!Xc)&&(c&&Te&&qc(F,c),G[ve]&&qc(F,G[ve]),x&&(ie===1?F.kill(!1,1):G[ve]=0),Te||(ve=ie===1?1:3,G[ve]&&qc(F,G[ve]))),R&&!We&&Math.abs(F.getVelocity())>(Uo(R)?R:2500)&&(Ao(F.callbackAnimation),W?W.progress(1):Ao(i,fe==="reverse"?1:!ie,1))):I&&o&&!un&&o(F)}if(Pt){var D=T?Zt/T.duration()*(T._caScrollDist||0):Zt;Nt(D+(k._isFlipped?1:0)),Pt(D)}qt&&qt(-Zt/T.duration()*(T._caScrollDist||0))}},F.enable=function(wt,Jt){F.enabled||(F.enabled=!0,tn(B,"resize",No),Y||tn(B,"scroll",Rs),_t&&tn(r,"refreshInit",_t),wt!==!1&&(F.progress=L=0,dt=et=N=C()),Jt!==!1&&F.refresh())},F.getTween=function(wt){return wt&&tt?tt.tween:W},F.setPositions=function(wt,Jt,zt,Zt){if(T){var Ne=T.scrollTrigger,ie=T.duration(),ye=Ne.end-Ne.start;wt=Ne.start+ye*wt/ie,Jt=Ne.start+ye*Jt/ie}F.refresh(!1,!1,{start:Hd(wt,zt&&!!F._startClamp),end:Hd(Jt,zt&&!!F._endClamp)},Zt),F.update()},F.adjustPinSpacing=function(wt){if(Mt&&wt){var Jt=Mt.indexOf(y.d)+1;Mt[Jt]=parseFloat(Mt[Jt])+wt+qe,Mt[1]=parseFloat(Mt[1])+wt+qe,Js(Mt)}},F.disable=function(wt,Jt){if(F.enabled&&(wt!==!1&&F.revert(!0,!0),F.enabled=F.isActive=!1,Jt||W&&W.pause(),Tt=0,ft&&(ft.uncache=1),_t&&Qe(r,"refreshInit",_t),pt&&(pt.pause(),tt.tween&&tt.tween.kill()&&(tt.tween=0)),!Y)){for(var zt=ne.length;zt--;)if(ne[zt].scroller===B&&ne[zt]!==F)return;Qe(B,"resize",No),Y||Qe(B,"scroll",Rs)}},F.kill=function(wt,Jt){F.disable(wt,Jt),W&&!Jt&&W.kill(),l&&delete fh[l];var zt=ne.indexOf(F);zt>=0&&ne.splice(zt,1),zt===Tn&&Sl>0&&Tn--,zt=0,ne.forEach(function(Zt){return Zt.scroller===F.scroller&&(zt=1)}),zt||En||(F.scroll.rec=0),i&&(i.scrollTrigger=null,wt&&i.revert({kill:!1}),Jt||i.kill()),st&&[st,nt,k,H].forEach(function(Zt){return Zt.parentNode&&Zt.parentNode.removeChild(Zt)}),Jo===F&&(Jo=0),d&&(ft&&(ft.uncache=1),zt=0,ne.forEach(function(Zt){return Zt.pin===d&&zt++}),zt||(ft.spacer=0)),n.onKill&&n.onKill(F)},ne.push(F),F.enable(!1,!1),ce&&ce(F),i&&i.add&&!P){var jt=F.update;F.update=function(){F.update=jt,se.cache++,q||E||F.refresh()},Ut.delayedCall(.01,F.update),P=.01,q=E=0}else F.refresh();d&&pE()},r.register=function(n){return Ls||(Ut=n||s_(),r_()&&window.document&&r.enable(),Ls=Lo),Ls},r.defaults=function(n){if(n)for(var i in n)rl[i]=n[i];return rl},r.disable=function(n,i){Lo=0,ne.forEach(function(o){return o[i?"kill":"disable"](n)}),Qe(re,"wheel",Rs),Qe(Se,"scroll",Rs),clearInterval(Qa),Qe(Se,"touchcancel",wi),Qe(me,"touchstart",wi),nl(Qe,Se,"pointerdown,touchstart,mousedown",Vd),nl(Qe,Se,"pointerup,touchend,mouseup",Gd),zl.kill(),el(Qe);for(var s=0;s<se.length;s+=3)il(Qe,se[s],se[s+1]),il(Qe,se[s],se[s+2])},r.enable=function(){if(re=window,Se=document,qn=Se.documentElement,me=Se.body,Ut&&(pa=Ut.utils.toArray,Xo=Ut.utils.clamp,uh=Ut.core.context||wi,Wc=Ut.core.suppressOverwrites||wi,tf=re.history.scrollRestoration||"auto",dh=re.pageYOffset||0,Ut.core.globals("ScrollTrigger",r),me)){Lo=1,$s=document.createElement("div"),$s.style.height="100vh",$s.style.position="absolute",p_(),aE(),Fe.register(Ut),r.isTouch=Fe.isTouch,fr=Fe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ch=Fe.isTouch===1,tn(re,"wheel",Rs),Qh=[re,Se,qn,me],Ut.matchMedia?(r.matchMedia=function(c){var u=Ut.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Ut.addEventListener("matchMediaInit",function(){return af()}),Ut.addEventListener("matchMediaRevert",function(){return f_()}),Ut.addEventListener("matchMedia",function(){Zr(0,1),ls("matchMedia")}),Ut.matchMedia().add("(orientation: portrait)",function(){return Zc(),Zc})):console.warn("Requires GSAP 3.11.0 or later"),Zc(),tn(Se,"scroll",Rs);var n=me.hasAttribute("style"),i=me.style,s=i.borderTopStyle,o=Ut.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Zi(me),Ze.m=Math.round(a.top+Ze.sc())||0,wn.m=Math.round(a.left+wn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(me.setAttribute("style",""),me.removeAttribute("style")),Qa=setInterval(Yd,250),Ut.delayedCall(.5,function(){return tl=0}),tn(Se,"touchcancel",wi),tn(me,"touchstart",wi),nl(tn,Se,"pointerdown,touchstart,mousedown",Vd),nl(tn,Se,"pointerup,touchend,mouseup",Gd),lh=Ut.utils.checkPrefix("transform"),Ml.push(lh),Ls=hn(),zl=Ut.delayedCall(.2,Zr).pause(),Is=[Se,"visibilitychange",function(){var c=re.innerWidth,u=re.innerHeight;Se.hidden?(Bd=c,zd=u):(Bd!==c||zd!==u)&&No()},Se,"DOMContentLoaded",Zr,re,"load",Zr,re,"resize",No],el(tn),ne.forEach(function(c){return c.enable(0,1)}),l=0;l<se.length;l+=3)il(Qe,se[l],se[l+1]),il(Qe,se[l],se[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Xc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Qa)||(Qa=i)&&setInterval(Yd,i),"ignoreMobileResize"in n&&(ch=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(el(Qe)||el(tn,n.autoRefreshEvents||"none"),e_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Pn(n),o=se.indexOf(s),a=os(s);~o&&se.splice(o,a?6:2),i&&(a?Ni.unshift(re,i,me,i,qn,i):Ni.unshift(s,i))},r.clearMatchMedia=function(n){ne.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Gn(n)?Pn(n):n).getBoundingClientRect(),a=o[s?Qr:ts]*i||0;return s?o.right-a>0&&o.left+a<re.innerWidth:o.bottom-a>0&&o.top+a<re.innerHeight},r.positionInViewport=function(n,i,s){Gn(n)&&(n=Pn(n));var o=n.getBoundingClientRect(),a=o[s?Qr:ts],l=i==null?a/2:i in Vl?Vl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/re.innerWidth:(o.top+l)/re.innerHeight},r.killAll=function(n){if(ne.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=as.killAll||[];as={},i.forEach(function(s){return s()})}},r}();Qt.version="3.12.7";Qt.saveStyles=function(r){return r?pa(r).forEach(function(t){if(t&&t.style){var e=Vn.indexOf(t);e>=0&&Vn.splice(e,5),Vn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ut.core.getCache(t),uh())}}):Vn};Qt.revert=function(r,t){return af(!r,t)};Qt.create=function(r,t){return new Qt(r,t)};Qt.refresh=function(r){return r?No(!0):(Ls||Qt.register())&&Zr(!0)};Qt.update=function(r){return++se.cache&&er(r===!0?2:0)};Qt.clearScrollMemory=d_;Qt.maxScroll=function(r,t){return Di(r,t?wn:Ze)};Qt.getScrollFunc=function(r,t){return wr(Pn(r),t?wn:Ze)};Qt.getById=function(r){return fh[r]};Qt.getAll=function(){return ne.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qt.isScrolling=function(){return!!fi};Qt.snapDirectional=of;Qt.addEventListener=function(r,t){var e=as[r]||(as[r]=[]);~e.indexOf(t)||e.push(t)};Qt.removeEventListener=function(r,t){var e=as[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Qt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Ut.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&dn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return dn(s)&&(s=s(),tn(Qt,"refresh",function(){return s=t.batchMax()})),pa(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Qt.create(c))}),e};var jd=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Jc=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Fe.isTouch?" pinch-zoom":""):"none",t===qn&&r(me,e)},ll={auto:1,scroll:1},xE=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Ut.core.getCache(s),a=hn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==me&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ll[(l=li(s)).overflowY]||ll[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!os(s)&&(ll[(l=li(s)).overflowY]||ll[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},__=function(t,e,n,i){return Fe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&xE,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&tn(Se,Fe.eventTypes[0],tp,!1,!0)},onDisable:function(){return Qe(Se,Fe.eventTypes[0],tp,!0)}})},yE=/(input|label|select|textarea)/i,Qd,tp=function(t){var e=yE.test(t.target.tagName);(e||Qd)&&(t._gsapAllow=!0,Qd=e)},SE=function(t){Vr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Pn(t.target)||qn,u=Ut.core.globals().ScrollSmoother,h=u&&u.get(),f=fr&&(t.content&&Pn(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),d=wr(c,Ze),g=wr(c,wn),_=1,p=(Fe.isTouch&&re.visualViewport?re.visualViewport.scale*re.visualViewport.width:re.outerWidth)/re.innerWidth,m=0,M=dn(i)?function(){return i(a)}:function(){return i||2.8},x,v,b=__(c,t.type,!0,s),w=function(){return v=!1},T=wi,R=wi,S=function(){l=Di(c,Ze),R=Xo(fr?1:0,l),n&&(T=Xo(0,Di(c,wn))),x=es},y=function(){f._gsap.y=Io(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},I=function(){if(v){requestAnimationFrame(w);var z=Io(a.deltaY/2),ht=R(d.v-z);if(f&&ht!==d.v+d.offset){d.offset=ht-d.v;var F=Io((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+F+", 0, 1)",f._gsap.y=F+"px",d.cacheID=se.cache,er()}return!0}d.offset&&y(),v=!0},B,V,Y,Q,G=function(){S(),B.isActive()&&B.vars.scrollY>l&&(d()>l?B.progress(1)&&d(l):B.resetTo("scrollY",l))};return f&&Ut.set(f,{y:"+=0"}),t.ignoreCheck=function(X){return fr&&X.type==="touchmove"&&I()||_>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},t.onPress=function(){v=!1;var X=_;_=Io((re.visualViewport&&re.visualViewport.scale||1)/p),B.pause(),X!==_&&Jc(c,_>1.01?!0:n?!1:"x"),V=g(),Y=d(),S(),x=es},t.onRelease=t.onGestureStart=function(X,z){if(d.offset&&y(),!z)Q.restart(!0);else{se.cache++;var ht=M(),F,_t;n&&(F=g(),_t=F+ht*.05*-X.velocityX/.227,ht*=jd(g,F,_t,Di(c,wn)),B.vars.scrollX=T(_t)),F=d(),_t=F+ht*.05*-X.velocityY/.227,ht*=jd(d,F,_t,Di(c,Ze)),B.vars.scrollY=R(_t),B.invalidate().duration(ht).play(.01),(fr&&B.vars.scrollY>=l||F>=l-1)&&Ut.to({},{onUpdate:G,duration:ht})}o&&o(X)},t.onWheel=function(){B._ts&&B.pause(),hn()-m>1e3&&(x=0,m=hn())},t.onChange=function(X,z,ht,F,_t){if(es!==x&&S(),z&&n&&g(T(F[2]===z?V+(X.startX-X.x):g()+z-F[1])),ht){d.offset&&y();var Rt=_t[2]===ht,Vt=Rt?Y+X.startY-X.y:d()+ht-_t[1],N=R(Vt);Rt&&Vt!==N&&(Y+=N-Vt),d(N)}(ht||z)&&er()},t.onEnable=function(){Jc(c,n?!1:"x"),Qt.addEventListener("refresh",G),tn(re,"resize",G),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),b.enable()},t.onDisable=function(){Jc(c,!0),Qe(re,"resize",G),Qt.removeEventListener("refresh",G),b.kill()},t.lockAxis=t.lockAxis!==!1,a=new Fe(t),a.iOS=fr,fr&&!d()&&d(1),fr&&Ut.ticker.add(wi),Q=a._dc,B=Ut.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:m_(d,d(),function(){return B.pause()})},onUpdate:er,onComplete:Q.vars.onComplete}),a};Qt.sort=function(r){if(dn(r))return ne.sort(r);var t=re.pageYOffset||0;return Qt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+re.innerHeight}),ne.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Qt.observe=function(r){return new Fe(r)};Qt.normalizeScroll=function(r){if(typeof r>"u")return Mn;if(r===!0&&Mn)return Mn.enable();if(r===!1){Mn&&Mn.kill(),Mn=r;return}var t=r instanceof Fe?r:SE(r);return Mn&&Mn.target===t.target&&Mn.kill(),os(t.target)&&(Mn=t),t};Qt.core={_getVelocityProp:ah,_inputObserver:__,_scrollers:se,_proxies:Ni,bridge:{ss:function(){fi||ls("scrollStart"),fi=hn()},ref:function(){return un}}};s_()&&Ut.registerPlugin(Qt);var Ko=function(){var r=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(u){u.preventDefault(),n(++r%t.children.length)},!1);function e(u){return t.appendChild(u.dom),u}function n(u){for(var h=0;h<t.children.length;h++)t.children[h].style.display=h===u?"block":"none";r=u}var i=(performance||Date).now(),s=i,o=0,a=e(new Ko.Panel("FPS","#0ff","#002")),l=e(new Ko.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=e(new Ko.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:t,addPanel:e,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){o++;var u=(performance||Date).now();if(l.update(u-i,200),u>=s+1e3&&(a.update(o*1e3/(u-s),100),s=u,o=0,c)){var h=performance.memory;c.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return u},update:function(){i=this.end()},domElement:t,setMode:n}};Ko.Panel=function(r,t,e){var n=1/0,i=0,s=Math.round,o=s(window.devicePixelRatio||1),a=80*o,l=48*o,c=3*o,u=2*o,h=3*o,f=15*o,d=74*o,g=30*o,_=document.createElement("canvas");_.width=a,_.height=l,_.style.cssText="width:80px;height:48px";var p=_.getContext("2d");return p.font="bold "+9*o+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=e,p.fillRect(0,0,a,l),p.fillStyle=t,p.fillText(r,c,u),p.fillRect(h,f,d,g),p.fillStyle=e,p.globalAlpha=.9,p.fillRect(h,f,d,g),{dom:_,update:function(m,M){n=Math.min(n,m),i=Math.max(i,m),p.fillStyle=e,p.globalAlpha=1,p.fillRect(0,0,a,f),p.fillStyle=t,p.fillText(s(m)+" "+r+" ("+s(n)+"-"+s(i)+")",c,u),p.drawImage(_,h+o,f,d-o,g,h,f,d-o,g),p.fillRect(h+d-o,f,o,g),p.fillStyle=e,p.globalAlpha=.9,p.fillRect(h+d-o,f,o,s((1-m/M)*g))}}};class g_ extends Lh{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth===void 0&&(e.depth=50),e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}}const ME=Wn;class Gl extends _o{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,i){const s=this,o=new Fp(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}parse(t){const e=this;function n(N,U){if(N.nodeType!==1)return;const L=v(N);let C=!1,tt=null;switch(N.nodeName){case"svg":U=g(N,U);break;case"style":s(N);break;case"g":U=g(N,U);break;case"path":U=g(N,U),N.hasAttribute("d")&&(tt=i(N));break;case"rect":U=g(N,U),tt=l(N);break;case"polygon":U=g(N,U),tt=c(N);break;case"polyline":U=g(N,U),tt=u(N);break;case"circle":U=g(N,U),tt=h(N);break;case"ellipse":U=g(N,U),tt=f(N);break;case"line":U=g(N,U),tt=d(N);break;case"defs":C=!0;break;case"use":U=g(N,U);const dt=(N.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),et=N.viewportElement.getElementById(dt);et?n(et,U):console.warn("SVGLoader: 'use node' references non-existent node id: "+dt);break}tt&&(U.fill!==void 0&&U.fill!=="none"&&tt.color.setStyle(U.fill,ME),w(tt,_t),B.push(tt),tt.userData={node:N,style:U});const ft=N.childNodes;for(let J=0;J<ft.length;J++){const dt=ft[J];C&&dt.nodeName!=="style"&&dt.nodeName!=="defs"||n(dt,U)}L&&(Y.pop(),Y.length>0?_t.copy(Y[Y.length-1]):_t.identity())}function i(N){const U=new hr,L=new mt,C=new mt,tt=new mt;let ft=!0,J=!1;const dt=N.getAttribute("d");if(dt===""||dt==="none")return null;const et=dt.match(/[a-df-z][^a-df-z]*/ig);for(let q=0,E=et.length;q<E;q++){const st=et[q],nt=st.charAt(0),k=st.slice(1).trim();ft===!0&&(J=!0,ft=!1);let H;switch(nt){case"M":H=p(k);for(let O=0,lt=H.length;O<lt;O+=2)L.x=H[O+0],L.y=H[O+1],C.x=L.x,C.y=L.y,O===0?U.moveTo(L.x,L.y):U.lineTo(L.x,L.y),O===0&&tt.copy(L);break;case"H":H=p(k);for(let O=0,lt=H.length;O<lt;O++)L.x=H[O],C.x=L.x,C.y=L.y,U.lineTo(L.x,L.y),O===0&&J===!0&&tt.copy(L);break;case"V":H=p(k);for(let O=0,lt=H.length;O<lt;O++)L.y=H[O],C.x=L.x,C.y=L.y,U.lineTo(L.x,L.y),O===0&&J===!0&&tt.copy(L);break;case"L":H=p(k);for(let O=0,lt=H.length;O<lt;O+=2)L.x=H[O+0],L.y=H[O+1],C.x=L.x,C.y=L.y,U.lineTo(L.x,L.y),O===0&&J===!0&&tt.copy(L);break;case"C":H=p(k);for(let O=0,lt=H.length;O<lt;O+=6)U.bezierCurveTo(H[O+0],H[O+1],H[O+2],H[O+3],H[O+4],H[O+5]),C.x=H[O+2],C.y=H[O+3],L.x=H[O+4],L.y=H[O+5],O===0&&J===!0&&tt.copy(L);break;case"S":H=p(k);for(let O=0,lt=H.length;O<lt;O+=4)U.bezierCurveTo(_(L.x,C.x),_(L.y,C.y),H[O+0],H[O+1],H[O+2],H[O+3]),C.x=H[O+0],C.y=H[O+1],L.x=H[O+2],L.y=H[O+3],O===0&&J===!0&&tt.copy(L);break;case"Q":H=p(k);for(let O=0,lt=H.length;O<lt;O+=4)U.quadraticCurveTo(H[O+0],H[O+1],H[O+2],H[O+3]),C.x=H[O+0],C.y=H[O+1],L.x=H[O+2],L.y=H[O+3],O===0&&J===!0&&tt.copy(L);break;case"T":H=p(k);for(let O=0,lt=H.length;O<lt;O+=2){const P=_(L.x,C.x),A=_(L.y,C.y);U.quadraticCurveTo(P,A,H[O+0],H[O+1]),C.x=P,C.y=A,L.x=H[O+0],L.y=H[O+1],O===0&&J===!0&&tt.copy(L)}break;case"A":H=p(k,[3,4],7);for(let O=0,lt=H.length;O<lt;O+=7){if(H[O+5]==L.x&&H[O+6]==L.y)continue;const P=L.clone();L.x=H[O+5],L.y=H[O+6],C.x=L.x,C.y=L.y,o(U,H[O],H[O+1],H[O+2],H[O+3],H[O+4],P,L),O===0&&J===!0&&tt.copy(L)}break;case"m":H=p(k);for(let O=0,lt=H.length;O<lt;O+=2)L.x+=H[O+0],L.y+=H[O+1],C.x=L.x,C.y=L.y,O===0?U.moveTo(L.x,L.y):U.lineTo(L.x,L.y),O===0&&tt.copy(L);break;case"h":H=p(k);for(let O=0,lt=H.length;O<lt;O++)L.x+=H[O],C.x=L.x,C.y=L.y,U.lineTo(L.x,L.y),O===0&&J===!0&&tt.copy(L);break;case"v":H=p(k);for(let O=0,lt=H.length;O<lt;O++)L.y+=H[O],C.x=L.x,C.y=L.y,U.lineTo(L.x,L.y),O===0&&J===!0&&tt.copy(L);break;case"l":H=p(k);for(let O=0,lt=H.length;O<lt;O+=2)L.x+=H[O+0],L.y+=H[O+1],C.x=L.x,C.y=L.y,U.lineTo(L.x,L.y),O===0&&J===!0&&tt.copy(L);break;case"c":H=p(k);for(let O=0,lt=H.length;O<lt;O+=6)U.bezierCurveTo(L.x+H[O+0],L.y+H[O+1],L.x+H[O+2],L.y+H[O+3],L.x+H[O+4],L.y+H[O+5]),C.x=L.x+H[O+2],C.y=L.y+H[O+3],L.x+=H[O+4],L.y+=H[O+5],O===0&&J===!0&&tt.copy(L);break;case"s":H=p(k);for(let O=0,lt=H.length;O<lt;O+=4)U.bezierCurveTo(_(L.x,C.x),_(L.y,C.y),L.x+H[O+0],L.y+H[O+1],L.x+H[O+2],L.y+H[O+3]),C.x=L.x+H[O+0],C.y=L.y+H[O+1],L.x+=H[O+2],L.y+=H[O+3],O===0&&J===!0&&tt.copy(L);break;case"q":H=p(k);for(let O=0,lt=H.length;O<lt;O+=4)U.quadraticCurveTo(L.x+H[O+0],L.y+H[O+1],L.x+H[O+2],L.y+H[O+3]),C.x=L.x+H[O+0],C.y=L.y+H[O+1],L.x+=H[O+2],L.y+=H[O+3],O===0&&J===!0&&tt.copy(L);break;case"t":H=p(k);for(let O=0,lt=H.length;O<lt;O+=2){const P=_(L.x,C.x),A=_(L.y,C.y);U.quadraticCurveTo(P,A,L.x+H[O+0],L.y+H[O+1]),C.x=P,C.y=A,L.x=L.x+H[O+0],L.y=L.y+H[O+1],O===0&&J===!0&&tt.copy(L)}break;case"a":H=p(k,[3,4],7);for(let O=0,lt=H.length;O<lt;O+=7){if(H[O+5]==0&&H[O+6]==0)continue;const P=L.clone();L.x+=H[O+5],L.y+=H[O+6],C.x=L.x,C.y=L.y,o(U,H[O],H[O+1],H[O+2],H[O+3],H[O+4],P,L),O===0&&J===!0&&tt.copy(L)}break;case"Z":case"z":U.currentPath.autoClose=!0,U.currentPath.curves.length>0&&(L.copy(tt),U.currentPath.currentPoint.copy(L),ft=!0);break;default:console.warn(st)}J=!1}return U}function s(N){if(!(!N.sheet||!N.sheet.cssRules||!N.sheet.cssRules.length))for(let U=0;U<N.sheet.cssRules.length;U++){const L=N.sheet.cssRules[U];if(L.type!==1)continue;const C=L.selectorText.split(/,/gm).filter(Boolean).map(tt=>tt.trim());for(let tt=0;tt<C.length;tt++){const ft=Object.fromEntries(Object.entries(L.style).filter(([,J])=>J!==""));V[C[tt]]=Object.assign(V[C[tt]]||{},ft)}}}function o(N,U,L,C,tt,ft,J,dt){if(U==0||L==0){N.lineTo(dt.x,dt.y);return}C=C*Math.PI/180,U=Math.abs(U),L=Math.abs(L);const et=(J.x-dt.x)/2,q=(J.y-dt.y)/2,E=Math.cos(C)*et+Math.sin(C)*q,st=-Math.sin(C)*et+Math.cos(C)*q;let nt=U*U,k=L*L;const H=E*E,O=st*st,lt=H/nt+O/k;if(lt>1){const Bt=Math.sqrt(lt);U=Bt*U,L=Bt*L,nt=U*U,k=L*L}const P=nt*O+k*H,A=(nt*k-P)/P;let K=Math.sqrt(Math.max(0,A));tt===ft&&(K=-K);const it=K*U*st/L,at=-K*L*E/U,ct=Math.cos(C)*it-Math.sin(C)*at+(J.x+dt.x)/2,yt=Math.sin(C)*it+Math.cos(C)*at+(J.y+dt.y)/2,xt=a(1,0,(E-it)/U,(st-at)/L),St=a((E-it)/U,(st-at)/L,(-E-it)/U,(-st-at)/L)%(Math.PI*2);N.currentPath.absellipse(ct,yt,U,L,xt,xt+St,ft===0,C)}function a(N,U,L,C){const tt=N*L+U*C,ft=Math.sqrt(N*N+U*U)*Math.sqrt(L*L+C*C);let J=Math.acos(Math.max(-1,Math.min(1,tt/ft)));return N*C-U*L<0&&(J=-J),J}function l(N){const U=x(N.getAttribute("x")||0),L=x(N.getAttribute("y")||0),C=x(N.getAttribute("rx")||N.getAttribute("ry")||0),tt=x(N.getAttribute("ry")||N.getAttribute("rx")||0),ft=x(N.getAttribute("width")),J=x(N.getAttribute("height")),dt=1-.551915024494,et=new hr;return et.moveTo(U+C,L),et.lineTo(U+ft-C,L),(C!==0||tt!==0)&&et.bezierCurveTo(U+ft-C*dt,L,U+ft,L+tt*dt,U+ft,L+tt),et.lineTo(U+ft,L+J-tt),(C!==0||tt!==0)&&et.bezierCurveTo(U+ft,L+J-tt*dt,U+ft-C*dt,L+J,U+ft-C,L+J),et.lineTo(U+C,L+J),(C!==0||tt!==0)&&et.bezierCurveTo(U+C*dt,L+J,U,L+J-tt*dt,U,L+J-tt),et.lineTo(U,L+tt),(C!==0||tt!==0)&&et.bezierCurveTo(U,L+tt*dt,U+C*dt,L,U+C,L),et}function c(N){function U(ft,J,dt){const et=x(J),q=x(dt);tt===0?C.moveTo(et,q):C.lineTo(et,q),tt++}const L=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,C=new hr;let tt=0;return N.getAttribute("points").replace(L,U),C.currentPath.autoClose=!0,C}function u(N){function U(ft,J,dt){const et=x(J),q=x(dt);tt===0?C.moveTo(et,q):C.lineTo(et,q),tt++}const L=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,C=new hr;let tt=0;return N.getAttribute("points").replace(L,U),C.currentPath.autoClose=!1,C}function h(N){const U=x(N.getAttribute("cx")||0),L=x(N.getAttribute("cy")||0),C=x(N.getAttribute("r")||0),tt=new Gs;tt.absarc(U,L,C,0,Math.PI*2);const ft=new hr;return ft.subPaths.push(tt),ft}function f(N){const U=x(N.getAttribute("cx")||0),L=x(N.getAttribute("cy")||0),C=x(N.getAttribute("rx")||0),tt=x(N.getAttribute("ry")||0),ft=new Gs;ft.absellipse(U,L,C,tt,0,Math.PI*2);const J=new hr;return J.subPaths.push(ft),J}function d(N){const U=x(N.getAttribute("x1")||0),L=x(N.getAttribute("y1")||0),C=x(N.getAttribute("x2")||0),tt=x(N.getAttribute("y2")||0),ft=new hr;return ft.moveTo(U,L),ft.lineTo(C,tt),ft.currentPath.autoClose=!1,ft}function g(N,U){U=Object.assign({},U);let L={};if(N.hasAttribute("class")){const J=N.getAttribute("class").split(/\s/).filter(Boolean).map(dt=>dt.trim());for(let dt=0;dt<J.length;dt++)L=Object.assign(L,V["."+J[dt]])}N.hasAttribute("id")&&(L=Object.assign(L,V["#"+N.getAttribute("id")]));function C(J,dt,et){et===void 0&&(et=function(E){return E.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),E}),N.hasAttribute(J)&&(U[dt]=et(N.getAttribute(J))),L[J]&&(U[dt]=et(L[J])),N.style&&N.style[J]!==""&&(U[dt]=et(N.style[J]))}function tt(J){return Math.max(0,Math.min(1,x(J)))}function ft(J){return Math.max(0,x(J))}return C("fill","fill"),C("fill-opacity","fillOpacity",tt),C("fill-rule","fillRule"),C("opacity","opacity",tt),C("stroke","stroke"),C("stroke-opacity","strokeOpacity",tt),C("stroke-width","strokeWidth",ft),C("stroke-linejoin","strokeLineJoin"),C("stroke-linecap","strokeLineCap"),C("stroke-miterlimit","strokeMiterLimit",ft),C("visibility","visibility"),U}function _(N,U){return N-(U-N)}function p(N,U,L){if(typeof N!="string")throw new TypeError("Invalid input: "+typeof N);const C={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},tt=0,ft=1,J=2,dt=3;let et=tt,q=!0,E="",st="";const nt=[];function k(P,A,K){const it=new SyntaxError('Unexpected character "'+P+'" at index '+A+".");throw it.partial=K,it}function H(){E!==""&&(st===""?nt.push(Number(E)):nt.push(Number(E)*Math.pow(10,Number(st)))),E="",st=""}let O;const lt=N.length;for(let P=0;P<lt;P++){if(O=N[P],Array.isArray(U)&&U.includes(nt.length%L)&&C.FLAGS.test(O)){et=ft,E=O,H();continue}if(et===tt){if(C.WHITESPACE.test(O))continue;if(C.DIGIT.test(O)||C.SIGN.test(O)){et=ft,E=O;continue}if(C.POINT.test(O)){et=J,E=O;continue}C.COMMA.test(O)&&(q&&k(O,P,nt),q=!0)}if(et===ft){if(C.DIGIT.test(O)){E+=O;continue}if(C.POINT.test(O)){E+=O,et=J;continue}if(C.EXP.test(O)){et=dt;continue}C.SIGN.test(O)&&E.length===1&&C.SIGN.test(E[0])&&k(O,P,nt)}if(et===J){if(C.DIGIT.test(O)){E+=O;continue}if(C.EXP.test(O)){et=dt;continue}C.POINT.test(O)&&E[E.length-1]==="."&&k(O,P,nt)}if(et===dt){if(C.DIGIT.test(O)){st+=O;continue}if(C.SIGN.test(O)){if(st===""){st+=O;continue}st.length===1&&C.SIGN.test(st)&&k(O,P,nt)}}C.WHITESPACE.test(O)?(H(),et=tt,q=!1):C.COMMA.test(O)?(H(),et=tt,q=!0):C.SIGN.test(O)?(H(),et=ft,E=O):C.POINT.test(O)?(H(),et=J,E=O):k(O,P,nt)}return H(),nt}const m=["mm","cm","in","pt","pc","px"],M={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function x(N){let U="px";if(typeof N=="string"||N instanceof String)for(let C=0,tt=m.length;C<tt;C++){const ft=m[C];if(N.endsWith(ft)){U=ft,N=N.substring(0,N.length-ft.length);break}}let L;return U==="px"&&e.defaultUnit!=="px"?L=M.in[e.defaultUnit]/e.defaultDPI:(L=M[U][e.defaultUnit],L<0&&(L=M[U].in*e.defaultDPI)),L*parseFloat(N)}function v(N){if(!(N.hasAttribute("transform")||N.nodeName==="use"&&(N.hasAttribute("x")||N.hasAttribute("y"))))return null;const U=b(N);return Y.length>0&&U.premultiply(Y[Y.length-1]),_t.copy(U),Y.push(U),U}function b(N){const U=new $t,L=Q;if(N.nodeName==="use"&&(N.hasAttribute("x")||N.hasAttribute("y"))){const C=x(N.getAttribute("x")),tt=x(N.getAttribute("y"));U.translate(C,tt)}if(N.hasAttribute("transform")){const C=N.getAttribute("transform").split(")");for(let tt=C.length-1;tt>=0;tt--){const ft=C[tt].trim();if(ft==="")continue;const J=ft.indexOf("("),dt=ft.length;if(J>0&&J<dt){const et=ft.slice(0,J),q=p(ft.slice(J+1));switch(L.identity(),et){case"translate":if(q.length>=1){const E=q[0];let st=0;q.length>=2&&(st=q[1]),L.translate(E,st)}break;case"rotate":if(q.length>=1){let E=0,st=0,nt=0;E=q[0]*Math.PI/180,q.length>=3&&(st=q[1],nt=q[2]),G.makeTranslation(-st,-nt),X.makeRotation(E),z.multiplyMatrices(X,G),G.makeTranslation(st,nt),L.multiplyMatrices(G,z)}break;case"scale":if(q.length>=1){const E=q[0];let st=E;q.length>=2&&(st=q[1]),L.scale(E,st)}break;case"skewX":q.length===1&&L.set(1,Math.tan(q[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":q.length===1&&L.set(1,0,0,Math.tan(q[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":q.length===6&&L.set(q[0],q[2],q[4],q[1],q[3],q[5],0,0,1);break}}U.premultiply(L)}}return U}function w(N,U){function L(J){F.set(J.x,J.y,1).applyMatrix3(U),J.set(F.x,F.y)}function C(J){const dt=J.xRadius,et=J.yRadius,q=Math.cos(J.aRotation),E=Math.sin(J.aRotation),st=new $(dt*q,dt*E,0),nt=new $(-et*E,et*q,0),k=st.applyMatrix3(U),H=nt.applyMatrix3(U),O=Q.set(k.x,H.x,0,k.y,H.y,0,0,0,1),lt=G.copy(O).invert(),K=X.copy(lt).transpose().multiply(lt).elements,it=I(K[0],K[1],K[4]),at=Math.sqrt(it.rt1),ct=Math.sqrt(it.rt2);if(J.xRadius=1/at,J.yRadius=1/ct,J.aRotation=Math.atan2(it.sn,it.cs),!((J.aEndAngle-J.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const xt=G.set(at,0,0,0,ct,0,0,0,1),St=X.set(it.cs,it.sn,0,-it.sn,it.cs,0,0,0,1),Bt=xt.multiply(St).multiply(O),gt=Mt=>{const{x:Nt,y:Ot}=new $(Math.cos(Mt),Math.sin(Mt),0).applyMatrix3(Bt);return Math.atan2(Ot,Nt)};J.aStartAngle=gt(J.aStartAngle),J.aEndAngle=gt(J.aEndAngle),T(U)&&(J.aClockwise=!J.aClockwise)}}function tt(J){const dt=S(U),et=y(U);J.xRadius*=dt,J.yRadius*=et;const q=dt>Number.EPSILON?Math.atan2(U.elements[1],U.elements[0]):Math.atan2(-U.elements[3],U.elements[4]);J.aRotation+=q,T(U)&&(J.aStartAngle*=-1,J.aEndAngle*=-1,J.aClockwise=!J.aClockwise)}const ft=N.subPaths;for(let J=0,dt=ft.length;J<dt;J++){const q=ft[J].curves;for(let E=0;E<q.length;E++){const st=q[E];st.isLineCurve?(L(st.v1),L(st.v2)):st.isCubicBezierCurve?(L(st.v0),L(st.v1),L(st.v2),L(st.v3)):st.isQuadraticBezierCurve?(L(st.v0),L(st.v1),L(st.v2)):st.isEllipseCurve&&(ht.set(st.aX,st.aY),L(ht),st.aX=ht.x,st.aY=ht.y,R(U)?C(st):tt(st))}}}function T(N){const U=N.elements;return U[0]*U[4]-U[1]*U[3]<0}function R(N){const U=N.elements,L=U[0]*U[3]+U[1]*U[4];if(L===0)return!1;const C=S(N),tt=y(N);return Math.abs(L/(C*tt))>Number.EPSILON}function S(N){const U=N.elements;return Math.sqrt(U[0]*U[0]+U[1]*U[1])}function y(N){const U=N.elements;return Math.sqrt(U[3]*U[3]+U[4]*U[4])}function I(N,U,L){let C,tt,ft,J,dt;const et=N+L,q=N-L,E=Math.sqrt(q*q+4*U*U);return et>0?(C=.5*(et+E),dt=1/C,tt=N*dt*L-U*dt*U):et<0?tt=.5*(et-E):(C=.5*E,tt=-.5*E),q>0?ft=q+E:ft=q-E,Math.abs(ft)>2*Math.abs(U)?(dt=-2*U/ft,J=1/Math.sqrt(1+dt*dt),ft=dt*J):Math.abs(U)===0?(ft=1,J=0):(dt=-.5*ft/U,ft=1/Math.sqrt(1+dt*dt),J=dt*ft),q>0&&(dt=ft,ft=-J,J=dt),{rt1:C,rt2:tt,cs:ft,sn:J}}const B=[],V={},Y=[],Q=new $t,G=new $t,X=new $t,z=new $t,ht=new mt,F=new $,_t=new $t,Rt=new DOMParser().parseFromString(t,"image/svg+xml");return n(Rt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:B,xml:Rt.documentElement}}static createShapes(t){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},i={loc:n.ORIGIN,t:0};function s(_,p,m,M){const x=_.x,v=p.x,b=m.x,w=M.x,T=_.y,R=p.y,S=m.y,y=M.y,I=(w-b)*(T-S)-(y-S)*(x-b),B=(v-x)*(T-S)-(R-T)*(x-b),V=(y-S)*(v-x)-(w-b)*(R-T),Y=I/V,Q=B/V;if(V===0&&I!==0||Y<=0||Y>=1||Q<0||Q>1)return null;if(I===0&&V===0){for(let G=0;G<2;G++)if(o(G===0?m:M,_,p),i.loc==n.ORIGIN){const X=G===0?m:M;return{x:X.x,y:X.y,t:i.t}}else if(i.loc==n.BETWEEN){const X=+(x+i.t*(v-x)).toPrecision(10),z=+(T+i.t*(R-T)).toPrecision(10);return{x:X,y:z,t:i.t}}return null}else{for(let z=0;z<2;z++)if(o(z===0?m:M,_,p),i.loc==n.ORIGIN){const ht=z===0?m:M;return{x:ht.x,y:ht.y,t:i.t}}const G=+(x+Y*(v-x)).toPrecision(10),X=+(T+Y*(R-T)).toPrecision(10);return{x:G,y:X,t:Y}}}function o(_,p,m){const M=m.x-p.x,x=m.y-p.y,v=_.x-p.x,b=_.y-p.y,w=M*b-v*x;if(_.x===p.x&&_.y===p.y){i.loc=n.ORIGIN,i.t=0;return}if(_.x===m.x&&_.y===m.y){i.loc=n.DESTINATION,i.t=1;return}if(w<-Number.EPSILON){i.loc=n.LEFT;return}if(w>Number.EPSILON){i.loc=n.RIGHT;return}if(M*v<0||x*b<0){i.loc=n.BEHIND;return}if(Math.sqrt(M*M+x*x)<Math.sqrt(v*v+b*b)){i.loc=n.BEYOND;return}let T;M!==0?T=v/M:T=b/x,i.loc=n.BETWEEN,i.t=T}function a(_,p){const m=[],M=[];for(let x=1;x<_.length;x++){const v=_[x-1],b=_[x];for(let w=1;w<p.length;w++){const T=p[w-1],R=p[w],S=s(v,b,T,R);S!==null&&m.find(y=>y.t<=S.t+Number.EPSILON&&y.t>=S.t-Number.EPSILON)===void 0&&(m.push(S),M.push(new mt(S.x,S.y)))}}return M}function l(_,p,m){const M=new mt;p.getCenter(M);const x=[];return m.forEach(v=>{v.boundingBox.containsPoint(M)&&a(_,v.points).forEach(w=>{x.push({identifier:v.identifier,isCW:v.isCW,point:w})})}),x.sort((v,b)=>v.point.x-b.point.x),x}function c(_,p,m,M,x){(x==null||x==="")&&(x="nonzero");const v=new mt;_.boundingBox.getCenter(v);const b=[new mt(m,v.y),new mt(M,v.y)],w=l(b,_.boundingBox,p);w.sort((B,V)=>B.point.x-V.point.x);const T=[],R=[];w.forEach(B=>{B.identifier===_.identifier?T.push(B):R.push(B)});const S=T[0].point.x,y=[];let I=0;for(;I<R.length&&R[I].point.x<S;)y.length>0&&y[y.length-1]===R[I].identifier?y.pop():y.push(R[I].identifier),I++;if(y.push(_.identifier),x==="evenodd"){const B=y.length%2===0,V=y[y.length-2];return{identifier:_.identifier,isHole:B,for:V}}else if(x==="nonzero"){let B=!0,V=null,Y=null;for(let Q=0;Q<y.length;Q++){const G=y[Q];B?(Y=p[G].isCW,B=!1,V=G):Y!==p[G].isCW&&(Y=p[G].isCW,B=!0)}return{identifier:_.identifier,isHole:B,for:V}}else console.warn('fill-rule: "'+x+'" is currently not implemented.')}let u=999999999,h=-999999999,f=t.subPaths.map(_=>{const p=_.getPoints();let m=-999999999,M=999999999,x=-999999999,v=999999999;for(let b=0;b<p.length;b++){const w=p[b];w.y>m&&(m=w.y),w.y<M&&(M=w.y),w.x>x&&(x=w.x),w.x<v&&(v=w.x)}return h<=x&&(h=x+1),u>=v&&(u=v-1),{curves:_.curves,points:p,isCW:Li.isClockWise(p),identifier:-1,boundingBox:new j0(new mt(v,M),new mt(x,m))}});f=f.filter(_=>_.points.length>1);for(let _=0;_<f.length;_++)f[_].identifier=_;const d=f.map(_=>c(_,f,u,h,t.userData?t.userData.style.fillRule:void 0)),g=[];return f.forEach(_=>{if(!d[_.identifier].isHole){const m=new Ws;m.curves=_.curves,d.filter(x=>x.isHole&&x.for===_.identifier).forEach(x=>{const v=f[x.identifier],b=new Gs;b.curves=v.curves,m.holes.push(b)}),g.push(m)}}),g}static getStrokeStyle(t,e,n,i,s){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",s=s!==void 0?s:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:s}}static pointsToStroke(t,e,n,i){const s=[],o=[],a=[];if(Gl.pointsToStrokeWithBuffers(t,e,n,i,s,o,a)===0)return null;const l=new an;return l.setAttribute("position",new Ge(s,3)),l.setAttribute("normal",new Ge(o,3)),l.setAttribute("uv",new Ge(a,2)),l}static pointsToStrokeWithBuffers(t,e,n,i,s,o,a,l){const c=new mt,u=new mt,h=new mt,f=new mt,d=new mt,g=new mt,_=new mt,p=new mt,m=new mt,M=new mt,x=new mt,v=new mt,b=new mt,w=new mt,T=new mt,R=new mt,S=new mt;n=n!==void 0?n:12,i=i!==void 0?i:.001,l=l!==void 0?l:0,t=q(t);const y=t.length;if(y<2)return 0;const I=t[0].equals(t[y-1]);let B,V=t[0],Y;const Q=e.strokeWidth/2,G=1/(y-1);let X=0,z,ht,F,_t,Rt=!1,Vt=0,N=l*3,U=l*2;L(t[0],t[1],c).multiplyScalar(Q),p.copy(t[0]).sub(c),m.copy(t[0]).add(c),M.copy(p),x.copy(m);for(let E=1;E<y;E++){B=t[E],E===y-1?I?Y=t[1]:Y=void 0:Y=t[E+1];const st=c;if(L(V,B,st),h.copy(st).multiplyScalar(Q),v.copy(B).sub(h),b.copy(B).add(h),z=X+G,ht=!1,Y!==void 0){L(B,Y,u),h.copy(u).multiplyScalar(Q),w.copy(B).sub(h),T.copy(B).add(h),F=!0,h.subVectors(Y,V),st.dot(h)<0&&(F=!1),E===1&&(Rt=F),h.subVectors(Y,B),h.normalize();const nt=Math.abs(st.dot(h));if(nt>Number.EPSILON){const k=Q/nt;h.multiplyScalar(-k),f.subVectors(B,V),d.copy(f).setLength(k).add(h),R.copy(d).negate();const H=d.length(),O=f.length();f.divideScalar(O),g.subVectors(Y,B);const lt=g.length();switch(g.divideScalar(lt),f.dot(R)<O&&g.dot(R)<lt&&(ht=!0),S.copy(d).add(B),R.add(B),_t=!1,ht?F?(T.copy(R),b.copy(R)):(w.copy(R),v.copy(R)):ft(),e.strokeLineJoin){case"bevel":J(F,ht,z);break;case"round":dt(F,ht),F?tt(B,v,w,z,0):tt(B,T,b,z,1);break;case"miter":case"miter-clip":default:const P=Q*e.strokeMiterLimit/H;if(P<1)if(e.strokeLineJoin!=="miter-clip"){J(F,ht,z);break}else dt(F,ht),F?(g.subVectors(S,v).multiplyScalar(P).add(v),_.subVectors(S,w).multiplyScalar(P).add(w),C(v,z,0),C(g,z,0),C(B,z,.5),C(B,z,.5),C(g,z,0),C(_,z,0),C(B,z,.5),C(_,z,0),C(w,z,0)):(g.subVectors(S,b).multiplyScalar(P).add(b),_.subVectors(S,T).multiplyScalar(P).add(T),C(b,z,1),C(g,z,1),C(B,z,.5),C(B,z,.5),C(g,z,1),C(_,z,1),C(B,z,.5),C(_,z,1),C(T,z,1));else ht?(F?(C(m,X,1),C(p,X,0),C(S,z,0),C(m,X,1),C(S,z,0),C(R,z,1)):(C(m,X,1),C(p,X,0),C(S,z,1),C(p,X,0),C(R,z,0),C(S,z,1)),F?w.copy(S):T.copy(S)):F?(C(v,z,0),C(S,z,0),C(B,z,.5),C(B,z,.5),C(S,z,0),C(w,z,0)):(C(b,z,1),C(S,z,1),C(B,z,.5),C(B,z,.5),C(S,z,1),C(T,z,1)),_t=!0;break}}else ft()}else ft();!I&&E===y-1&&et(t[0],M,x,F,!0,X),X=z,V=B,p.copy(w),m.copy(T)}if(!I)et(B,v,b,F,!1,z);else if(ht&&s){let E=S,st=R;Rt!==F&&(E=R,st=S),F?(_t||Rt)&&(st.toArray(s,0*3),st.toArray(s,3*3),_t&&E.toArray(s,1*3)):(_t||!Rt)&&(st.toArray(s,1*3),st.toArray(s,3*3),_t&&E.toArray(s,0*3))}return Vt;function L(E,st,nt){return nt.subVectors(st,E),nt.set(-nt.y,nt.x).normalize()}function C(E,st,nt){s&&(s[N]=E.x,s[N+1]=E.y,s[N+2]=0,o&&(o[N]=0,o[N+1]=0,o[N+2]=1),N+=3,a&&(a[U]=st,a[U+1]=nt,U+=2)),Vt+=3}function tt(E,st,nt,k,H){c.copy(st).sub(E).normalize(),u.copy(nt).sub(E).normalize();let O=Math.PI;const lt=c.dot(u);Math.abs(lt)<1&&(O=Math.abs(Math.acos(lt))),O/=n,h.copy(st);for(let P=0,A=n-1;P<A;P++)f.copy(h).rotateAround(E,O),C(h,k,H),C(f,k,H),C(E,k,.5),h.copy(f);C(f,k,H),C(nt,k,H),C(E,k,.5)}function ft(){C(m,X,1),C(p,X,0),C(v,z,0),C(m,X,1),C(v,z,0),C(b,z,1)}function J(E,st,nt){st?E?(C(m,X,1),C(p,X,0),C(v,z,0),C(m,X,1),C(v,z,0),C(R,z,1),C(v,nt,0),C(w,nt,0),C(R,nt,.5)):(C(m,X,1),C(p,X,0),C(b,z,1),C(p,X,0),C(R,z,0),C(b,z,1),C(b,nt,1),C(R,nt,0),C(T,nt,1)):E?(C(v,nt,0),C(w,nt,0),C(B,nt,.5)):(C(b,nt,1),C(T,nt,0),C(B,nt,.5))}function dt(E,st){st&&(E?(C(m,X,1),C(p,X,0),C(v,z,0),C(m,X,1),C(v,z,0),C(R,z,1),C(v,X,0),C(B,z,.5),C(R,z,1),C(B,z,.5),C(w,X,0),C(R,z,1)):(C(m,X,1),C(p,X,0),C(b,z,1),C(p,X,0),C(R,z,0),C(b,z,1),C(b,X,1),C(R,z,0),C(B,z,.5),C(B,z,.5),C(R,z,0),C(T,X,1)))}function et(E,st,nt,k,H,O){switch(e.strokeLineCap){case"round":H?tt(E,nt,st,O,.5):tt(E,st,nt,O,.5);break;case"square":if(H)c.subVectors(st,E),u.set(c.y,-c.x),h.addVectors(c,u).add(E),f.subVectors(u,c).add(E),k?(h.toArray(s,1*3),f.toArray(s,0*3),f.toArray(s,3*3)):(h.toArray(s,1*3),a[3*2+1]===1?f.toArray(s,3*3):h.toArray(s,3*3),f.toArray(s,0*3));else{c.subVectors(nt,E),u.set(c.y,-c.x),h.addVectors(c,u).add(E),f.subVectors(u,c).add(E);const lt=s.length;k?(h.toArray(s,lt-1*3),f.toArray(s,lt-2*3),f.toArray(s,lt-4*3)):(f.toArray(s,lt-2*3),h.toArray(s,lt-1*3),f.toArray(s,lt-4*3))}break}}function q(E){let st=!1;for(let k=1,H=E.length-1;k<H;k++)if(E[k].distanceTo(E[k+1])<i){st=!0;break}if(!st)return E;const nt=[];nt.push(E[0]);for(let k=1,H=E.length-1;k<H;k++)E[k].distanceTo(E[k+1])>=i&&nt.push(E[k]);return nt.push(E[E.length-1]),nt}}}function TE(r,t,e,n){const{CUBE_SIZE:i,FIRST_CUBE_Z:s}=n,o=8,a=24,l=.075,c=200;let u,h=[],f=[],d=[],g=[];const _=(v,b,w,T)=>{const R=new Ln(v,v,v),S=new Dh(R),y=[new Ei({color:16711680,transparent:!0,opacity:T.opacity,blending:xi}),new Ei({color:65280,transparent:!0,opacity:T.opacity,blending:xi}),new Ei({color:255,transparent:!0,opacity:T.opacity,blending:xi}),new Ei({color:65535,transparent:!0,opacity:T.opacity,blending:xi}),new Ei({color:16711935,transparent:!0,opacity:T.opacity,blending:xi}),new Ei({color:16776960,transparent:!0,opacity:T.opacity,blending:xi})],I=new ui,B=S.getAttribute("position").array,V=[];for(let G=0;G<B.length/3;G+=2)V.push(G,G+1);const Y=Array(6).fill(null).map(()=>new an),Q=Array(6).fill(null).map(()=>[]);for(let G=0;G<V.length/2;G++){const X=G%6;Q[X].push(V[G*2],V[G*2+1])}return Y.forEach((G,X)=>{G.setIndex(Q[X]),G.setAttribute("position",S.getAttribute("position"));const z=new Rl(G,y[X]);I.add(z)}),I.position.z=b,I.rotation.z=w,I};return(()=>{const w=.9/(a-1);for(let V=0;V<a;V++)f[V]=new Ei({transparent:!0,opacity:1-V*w});if(u=new ui,!u){console.error("introGroup failed to initialize");return}for(let V=0;V<a;V++){const Y=i-V*o,Q=_(Y,0,0,f[V]),G=Q.children.map(X=>X.material);g.push(G.map(X=>({material:X,originalColor:X.color.clone()}))),u.add(Q)}u.position.z=s,t.add(u),h.push(u),d=f.map(V=>V.opacity);const T=Me.timeline({repeat:-1});T.to(u.rotation,{x:$e.degToRad(360),duration:12,ease:"none"},0),T.to(u.rotation,{y:$e.degToRad(360),duration:10,ease:"none"},0),T.to(u.rotation,{z:$e.degToRad(360),duration:14,ease:"none"},0);let R=-1,S=0;const y=l*1e3,I=a*y,B=V=>{const Y=V%I/y,Q=Math.floor(Y)%a;R!==-1&&V-S>=y&&(g[R].forEach(z=>{z.material.opacity=d[R],z.material.color.copy(z.originalColor)}),R=-1),R===-1&&Q!==R&&(R=Q,S=V,g[R].forEach(X=>{X.material.opacity=1,X.material.color.set(1,1,1)})),requestAnimationFrame(B)};requestAnimationFrame(B)})(),e.then(v=>{if(v){const b=m(v);r.add(b)}}),{introCubes:h};function m(v){const b=new ui,w=M(v);w.position.set(0,-36,0),b.add(w),x(R=>{b.add(R),Me.fromTo(w.material,{opacity:.3},{opacity:1,duration:3,ease:"linear",repeat:-1,yoyo:!0});const S=R.children.find(y=>y instanceof Pe&&y!==R.children[0]);if(S){const y=S.position.y;Me.to(S.position,{y:y+3,duration:1,ease:"easeOut",onComplete:()=>{S.position.y=y},repeat:-1})}}),b.position.x=0,b.position.y=-240;const T=s-a*o;return b.position.z=T+c,b}function M(v){const b=new g_("SCROLL TO CONTINUE",{font:v,size:8,depth:0,curveSegments:12,bevelEnabled:!1});b.computeBoundingBox(),b.center();const w=new Ti({color:16777215,transparent:!0,opacity:1});return new Pe(b,w)}function x(v){new Gl().load("/3D/mouse.svg",w=>{const T=w.paths;let R=null,S=null,y=new ui;if(T.forEach((I,B)=>{Gl.createShapes(I).forEach(Y=>{const Q=new Ih(Y);Q.computeBoundingBox();const G=new Ti({color:16777215,transparent:!0,opacity:1,side:Zn}),X=new Pe(Q,G);X.scale.set(.05,.05,1),B===0?R=X:B===1&&(S=X)})}),R&&S){y.add(R),y.add(S);const B=(R.geometry.boundingBox.max.x-R.geometry.boundingBox.min.x)*R.scale.x/2;y.position.x=-B,y.rotation.x=Math.PI,v(y)}})}}class EE extends _o{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new Fp(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=s.parse(JSON.parse(a));e&&e(l)},n,i)}parse(t){return new bE(t)}}class bE{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=wE(t,e,this.data);for(let s=0,o=i.length;s<o;s++)n.push(...i[s].toShapes());return n}}function wE(r,t,e){const n=Array.from(r),i=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=s;else{const h=AE(u,i,a,l,e);a+=h.offsetX,o.push(h.path)}}return o}function AE(r,t,e,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const o=new hr;let a,l,c,u,h,f,d,g;if(s.o){const _=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let p=0,m=_.length;p<m;)switch(_[p++]){case"m":a=_[p++]*t+e,l=_[p++]*t+n,o.moveTo(a,l);break;case"l":a=_[p++]*t+e,l=_[p++]*t+n,o.lineTo(a,l);break;case"q":c=_[p++]*t+e,u=_[p++]*t+n,h=_[p++]*t+e,f=_[p++]*t+n,o.quadraticCurveTo(h,f,c,u);break;case"b":c=_[p++]*t+e,u=_[p++]*t+n,h=_[p++]*t+e,f=_[p++]*t+n,d=_[p++]*t+e,g=_[p++]*t+n,o.bezierCurveTo(h,f,d,g,c,u);break}}return{offsetX:s.ha*t,path:o}}function CE(r,t,e,n){const{CUBE_SIZE:i,CUBE_SPACING:s,FIRST_CUBE_Z:o}=e,a=65535,l=16711935,c=$e.degToRad(15),u=1e3;let h=[],f=null,d=null,g=!1;const _=(v,b,w,T,R)=>{const S=new Ln(v,v,v),y=new Dh(S),I=new Ei({color:new Xt(a),transparent:!0,opacity:0}),B=new Rl(y,I),V=new ui;return V.add(B),V.position.z=b,V.rotation.z=w,T&&new W0().load(T,Q=>{const G=new mo(v-1,v-1),X=new Ti({map:Q,transparent:!0,opacity:0,blending:xi,side:Zn}),z=new Pe(G,X),ht=v/2;switch(R||"left"){case"left":z.position.set(-ht,0,0),z.rotation.y=Math.PI/2;break;case"top":z.position.set(0,ht,0),z.rotation.x=-Math.PI/2;break;case"right":z.position.set(ht,0,0),z.rotation.y=-Math.PI/2;break;case"bottom":z.position.set(0,-ht,0),z.rotation.x=Math.PI/2;break}V.add(z)},void 0,Q=>{console.error("Error loading keyart texture:",Q)}),V},p=(v,b,w,T,R,S)=>{const y=new g_(v,{font:S,size:R,depth:0,curveSegments:12,bevelEnabled:!1});y.computeBoundingBox(),y.center();const I=new Ti({color:16777215,transparent:!0,opacity:0,side:Zn}),B=new Pe(y,I);return B.position.set(b,w,T),r.add(B),B},m=()=>new Promise(v=>{f=new EE,f.load("/fonts/Poppins_Regular.json",b=>{d=b,n.forEach((w,T)=>{const R=o-(T+1)*s,S=(T+1)*c,y=_(i,R,S,w.keyart,w.keyartLocation);r.add(y),h.push(y),p(w.title,0,w.size+15,R,w.size,b)}),v()},void 0,b=>console.error("Error loading font:",b))}),M=()=>g?Promise.resolve({projectCubes:h,updateCubeColors:x,loadedFont:d}):m().then(()=>(g=!0,{projectCubes:h,updateCubeColors:x,loadedFont:d})),x=v=>{const b=v.position.z;let w=[];r.traverse(T=>{T instanceof Pe&&T.geometry&&T.geometry.type==="TextGeometry"&&w.push(T)}),h.forEach(T=>{const R=T.position.z,S=Math.abs(b-R);T.children.forEach(y=>{if(y instanceof Rl){const I=y.material;if(S<=u){const B=1-S/u,V=$e.lerp((a>>16&255)/255,(l>>16&255)/255,B),Y=$e.lerp((a>>8&255)/255,(l>>8&255)/255,B),Q=$e.lerp((a&255)/255,(l&255)/255,B);I.color.set(V,Y,Q),I.opacity=Math.min(1,B*2)}else I.opacity=0}else if(y instanceof Pe&&y.material instanceof Ti){const I=y.material;if(S<=u){const B=1-S/u;I.opacity=Math.min(.8,B*2)}else I.opacity=0}})}),w.forEach(T=>{const R=T.material,S=T.position.z,y=Math.abs(b-S);if(y<=1e3)if(y<=500)R.opacity=1;else{const B=(1e3-y)/500,V=1-Math.pow(1-B,2);R.opacity=V}else R.opacity=0})};return{getInitializedData:M,updateCubeColors:x}}function RE(r,t){let x,v,b,w=[],T=[],R=[],S=[],y=[];const I=()=>{x=new ui;const Y=new Ln(100,100,100),Q=new Dh(Y),G=32*60,X=new $0;X.copy(Q),X.instanceCount=G;const z=new Ei({color:2236962,transparent:!0,fog:!0,vertexColors:!0}),ht=new Float32Array(G*3),F=new Float32Array(G*3),_t=new Float32Array(G*3),Rt=32*100,Vt=-3200/2+100/2,N=-500;for(let P=0;P<32;P++){const A=B(P);for(let K=0;K<60;K++){const it=P*60+K,at=Vt+P*100,ct=N-K*100,yt=$e.randFloat(100,300),xt=yt/100,St=-600+yt/2;ht[it*3]=at,ht[it*3+1]=St,ht[it*3+2]=ct,F[it*3]=1,F[it*3+1]=xt,F[it*3+2]=1,_t[it*3]=A,_t[it*3+1]=A,_t[it*3+2]=A}}X.setAttribute("instancePosition",new Sc(ht,3)),X.setAttribute("instanceScale",new Sc(F,3)),X.setAttribute("color",new Sc(_t,3)),z.onBeforeCompile=P=>{P.vertexShader=`
                attribute vec3 instancePosition;
                attribute vec3 instanceScale;
                ${P.vertexShader}
            `.replace("#include <begin_vertex>",`#include <begin_vertex>
                transformed *= instanceScale;
                transformed += instancePosition;`)},v=new Rl(X,z);const U=-3200/2,L=Rt/2,C=-600,tt=-300,ft=-6500,J=-500;X.boundingBox=new fo(new $(U,C,ft),new $(L,tt,J));const dt=(U+L)/2,et=(C+tt)/2,q=(ft+J)/2,E=L-U,st=tt-C,nt=J-ft,k=Math.sqrt(E*E+st*st+nt*nt)/2;X.boundingSphere=new po(new $(dt,et,q),k),x.add(v),t.add(x),b=new ui;const H=Rt/5,O=-3200/2;for(let P=0;P<6;P++){let K=O+P*H,it=-500;const at=[new $(K,-450,it)];let ct=0;for(;it>-6500;){const yt=it===-500?$e.randFloat(300,800):Math.min($e.randFloat(300,800),Math.abs(it- -6500));if(it-=yt,at.push(new $(K,-450,it)),ct+=yt,it<=-6500){at[at.length-1].z=-6500;break}const xt=Math.random()<.5?-1:1,St=$e.randFloat(100,300);K+=xt*St,at.push(new $(K,-450,it)),ct+=St}T.push({points:at,totalLength:ct})}const lt=new Ln(4,4,4);for(let P=0;P<6;P++){const A=T[P],K=A.totalLength,it=K/60;for(let at=0;at<60;at++){const ct=new Ti({color:16711680,fog:!0}),yt=new Pe(lt,ct),xt=at*it;let St=xt;for(let Bt=0;Bt<A.points.length-1;Bt++){const gt=A.points[Bt],Mt=A.points[Bt+1],Nt=gt.distanceTo(Mt);if(St<=Nt){const Ot=St/Nt;yt.position.lerpVectors(gt,Mt,Ot);break}St-=Nt}w.push(yt),R.push(xt),S.push(P),y.push(1),b.add(yt)}for(let at=0;at<60;at++){const ct=new Ti({color:16777215,fog:!0}),yt=new Pe(lt,ct),xt=K-at*it;let St=K-xt;const Bt=[...A.points].reverse();for(let gt=0;gt<Bt.length-1;gt++){const Mt=Bt[gt],Nt=Bt[gt+1],Ot=Mt.distanceTo(Nt);if(St<=Ot){const Pt=St/Ot;yt.position.lerpVectors(Mt,Nt,Pt);break}St-=Ot}w.push(yt),R.push(xt),S.push(P),y.push(-1),b.add(yt)}}t.add(b)},B=Y=>{if(Y<10)return .05+Y*.10555555555555556;if(Y>=22){const Q=31-Y,G=(1-.05)/9;return .05+Q*G}return 1},V=Y=>{const Q=100*Y;for(let G=0;G<w.length;G++){const X=y[G];R[G]+=Q*X;const z=S[G],ht=T[z],F=ht.totalLength;if(X===1&&R[G]>=F)R[G]=0,w[G].position.copy(ht.points[0]);else if(X===-1&&R[G]<=0)R[G]=F,w[G].position.copy(ht.points[ht.points.length-1]);else{const _t=R[G],Rt=X===1?ht.points:[...ht.points].reverse();let Vt=X===1?_t:F-_t;for(let N=0;N<Rt.length-1;N++){const U=Rt[N],L=Rt[N+1],C=U.distanceTo(L);if(Vt<=C){const tt=Vt/C;w[G].position.lerpVectors(U,L,tt);break}Vt-=C}}}};return I(),{cityGroup:x,buildingLines:[v],updateParticles:V}}Me.registerPlugin(Qt);function PE(r,t,e,n,i,s,o,a){const{CUBE_SIZE:l,CUBE_SPACING:c,FIRST_CUBE_Z:u}=o,h=i.length-1,f=Math.min(h,10),p=u-c-(f-1)*c-l/2,m=Math.abs(p),x=Me.timeline({scrollTrigger:{trigger:n.value,start:"top top",end:`+=${m+100}`,scrub:1,pin:!0,pinSpacing:!0,anticipatePin:1,refreshPriority:1,onUpdate:v=>{a&&a(v.progress)},onLeaveBack:()=>{i.forEach(v=>{v.children.forEach(b=>{const w=b.material;Me.to(w,{opacity:0,duration:.5,ease:"power1.in"})})})}}});return x.to(e.position,{z:p,ease:"none",duration:1,onUpdate:()=>{e.lookAt(0,0,p),s(e)}}),x}function DE(r,t){const f=new an,d=new Float32Array(1e3*3),g=new Float32Array(1e3),_=new Float32Array(1e3);let p=0;for(;p<1e3;){const b=(Math.random()-.5)*4e3,w=(Math.random()-.5)*4e3,T=-1e3+Math.random()*-8e3,R=T>-7200&&Math.abs(b)<1e3&&Math.abs(w)<1e3,S=Math.abs(b)<150&&Math.abs(w)<150&&T>-2500&&T<-500;if(!R&&!S){const y=p*3;d[y]=b,d[y+1]=w,d[y+2]=T;const I=.1+Math.random()*(.7-.1);g[p]=I,_[p]=I,p++}}f.setAttribute("position",new jn(d,3)),f.setAttribute("opacity",new jn(_,1));const m=new An({uniforms:{color:{value:new Xt(1,1,1)},size:{value:20}},vertexShader:`
      attribute float opacity;
      varying float vOpacity;
      uniform float size;

      void main() {
        vOpacity = opacity;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (300.0 / -mvPosition.z); // Size attenuation
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      uniform vec3 color;
      varying float vOpacity;

      void main() {
        float dist = distance(gl_PointCoord, vec2(0.5, 0.5)) * 2.0;
        float alpha = vOpacity * (1.0 - dist);
        if (alpha <= 0.0) discard;
        gl_FragColor = vec4(color, alpha);
      }
    `,transparent:!0,fog:!1,depthWrite:!1}),M=new i0(f,m);r.add(M);const x=f.attributes.opacity;for(let b=0;b<1e3;b++)Me.to({opacity:g[b]},{opacity:.05,duration:1+Math.random(),yoyo:!0,repeat:-1,ease:"sine.inOut",delay:Math.random()*2,onUpdate:function(){_[b]=this.targets()[0].opacity,x.needsUpdate=!0}});return{dispose:()=>{Me.killTweensOf(_),r.remove(M),f.dispose(),m.dispose()}}}const Kc=250,ep=500,jc=-500,Qc=-520,np=-720,LE=Wl({__name:"HallwayEngine",props:{projects:{}},setup(r){Me.registerPlugin(Qt);const t=r,e=jo(null),n=jo(null);let i,s,o,a,l,c,u,h,f=0,d=null;const g=()=>{const M=e.value?e.value.getBoundingClientRect().width:window.innerWidth,x=window.innerHeight;o.setSize(M,x),a.setSize(M,x),s.aspect=M/x,s.far=6e4,s.updateProjectionMatrix()},_=()=>{i=new Ah,i.background=new Xt(0),i.fog=new wh(0,700,4e3),s=new Yn(75,window.innerWidth/window.innerHeight,1,6e4),s.position.set(0,0,0),s.lookAt(0,0,0),o=new Nh({antialias:!0}),o.setPixelRatio(window.devicePixelRatio),a=new Xm(o);const M=new Ym(i,s);if(a.addPass(M),l=new ss(new mt(window.innerWidth,window.innerHeight),3.5,.4,0),l.renderToScreen=!0,a.addPass(l),g(),e.value)e.value.appendChild(o.domElement);else return;u=new Ko,u.dom.style.position="fixed",u.dom.style.top="0px",u.dom.style.left="0px",u.dom.style.zIndex="1000",document.body.appendChild(u.dom);const{updateParticles:x}=RE(i,i);h=x,CE(i,i,{CUBE_SIZE:Kc,CUBE_SPACING:ep,FIRST_CUBE_Z:jc},t.projects).getInitializedData().then(({projectCubes:b,updateCubeColors:w,loadedFont:T})=>{const{introCubes:R}=TE(i,i,Promise.resolve(T),{CUBE_SIZE:Kc,FIRST_CUBE_Z:jc}),S=[...R,...b];PE(i,i,s,n,S,w,{CUBE_SIZE:Kc,CUBE_SPACING:ep,FIRST_CUBE_Z:jc},()=>{}),p()});const{dispose:v}=DE(i);d=v},p=(M=0)=>{if(c=requestAnimationFrame(p),o&&a){const x=(M-f)/1e3;f=M,h(x);const v=np-Qc;let b=0;s.position.z>=Qc?b=0:s.position.z<=np?b=1:b=(s.position.z-Qc)/v,l.strength=$e.lerp(1,.125,b),a.render()}Qt.update(),u.update()};mh(()=>{_(),window.addEventListener("resize",m)}),ip(()=>{window.removeEventListener("resize",m),cancelAnimationFrame(c),Qt.getAll().forEach(M=>M.kill()),o.dispose(),a.dispose(),i.clear(),document.body.removeChild(u.dom),d&&d()});const m=()=>{g(),Qt.refresh()};return(M,x)=>(ta(),Qo("section",{ref_key:"wrapper",ref:n,class:"wrapper"},[vi("div",{ref_key:"tunnelWrapper",ref:e,class:"tunnel-wrapper"},null,512)],512))}}),IE=rp(LE,[["__scopeId","data-v-e800115e"]]),UE={class:"relative bg-gray-50 text-black/50 dark:bg-black dark:text-white/50"},NE={class:"absolute z-10 flex flex-col items-center justify-center top-32 left-1/2 transform -translate-x-1/2"},OE={class:"overflow-hidden"},FE={class:"flex justify-center items-center"},BE={class:"flex justify-center items-center -mt-24 mix-blend-screen"},HE=Wl({__name:"Welcome",props:{canLogin:{type:Boolean},canRegister:{type:Boolean},laravelVersion:{},phpVersion:{},projects:{}},setup(r){return(t,e)=>(ta(),Qo(M_,null,[xo(y_(S_),{title:"Welcome"}),vi("div",UE,[vi("nav",NE,[xo(JT)]),vi("div",OE,[xo(IE,{projects:t.projects},null,8,["projects"])]),vi("div",FE,[xo(Od,{"particle-width":20,"particle-height":20})]),vi("div",BE,[xo(Od,{"particle-width":15,"particle-height":160})]),e[0]||(e[0]=vi("div",{class:"relative min-h-screen flex flex-col items-center justify-center"},[vi("div",{class:"relative w-full max-w-2xl px-2 lg:max-w-7xl"},[vi("footer",{class:"py-16 text-center text-xs text-black dark:text-white/70"}," © Copyright 2025 From the Lab. All rights reserved. ")])],-1))])],64))}});export{HE as default};
