/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-unique",
factory: function (require) {
var plugin=(()=>{var Dr=Object.create,V=Object.defineProperty;var Rr=Object.getOwnPropertyDescriptor;var Br=Object.getOwnPropertyNames;var kr=Object.getPrototypeOf,Nr=Object.prototype.hasOwnProperty;var Gr=e=>V(e,"__esModule",{value:!0});var Ae=e=>{if(typeof require!="undefined")return require(e);throw new Error('Dynamic require of "'+e+'" is not supported')};var Wr=(e,t)=>{for(var r in t)V(e,r,{get:t[r],enumerable:!0})},Fr=(e,t,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Br(t))!Nr.call(e,a)&&a!=="default"&&V(e,a,{get:()=>t[a],enumerable:!(r=Rr(t,a))||r.enumerable});return e},Te=e=>Fr(Gr(V(e!=null?Dr(kr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var ji={};Wr(ji,{default:()=>di,hasOwnProperty:()=>Lr});var Er=Te(Ae("@yarnpkg/core")),ve=Te(Ae("@yarnpkg/fslib"));var Kr=typeof global=="object"&&global&&global.Object===Object&&global,Z=Kr;var qr=typeof self=="object"&&self&&self.Object===Object&&self,zr=Z||qr||Function("return this")(),d=zr;var Ur=d.Symbol,h=Ur;var ke=Object.prototype,Hr=ke.hasOwnProperty,$r=ke.toString,U=h?h.toStringTag:void 0;function Jr(e){var t=Hr.call(e,U),r=e[U];try{e[U]=void 0;var a=!0}catch(o){}var s=$r.call(e);return a&&(t?e[U]=r:delete e[U]),s}var Ne=Jr;var Xr=Object.prototype,Yr=Xr.toString;function Vr(e){return Yr.call(e)}var Ge=Vr;var Zr="[object Null]",Qr="[object Undefined]",We=h?h.toStringTag:void 0;function ea(e){return e==null?e===void 0?Qr:Zr:We&&We in Object(e)?Ne(e):Ge(e)}var _=ea;function ta(e){return e!=null&&typeof e=="object"}var b=ta;var ra="[object Symbol]";function aa(e){return typeof e=="symbol"||b(e)&&_(e)==ra}var B=aa;function oa(e,t){for(var r=-1,a=e==null?0:e.length,s=Array(a);++r<a;)s[r]=t(e[r],r,e);return s}var Q=oa;var sa=Array.isArray,m=sa;var fa=1/0,Fe=h?h.prototype:void 0,Ke=Fe?Fe.toString:void 0;function qe(e){if(typeof e=="string")return e;if(m(e))return Q(e,qe)+"";if(B(e))return Ke?Ke.call(e):"";var t=e+"";return t=="0"&&1/e==-fa?"-0":t}var ze=qe;function ia(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var k=ia;function na(e){return e}var Ue=na;var pa="[object AsyncFunction]",ua="[object Function]",la="[object GeneratorFunction]",ma="[object Proxy]";function da(e){if(!k(e))return!1;var t=_(e);return t==ua||t==la||t==pa||t==ma}var ee=da;var ja=d["__core-js_shared__"],te=ja;var He=function(){var e=/[^.]+$/.exec(te&&te.keys&&te.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function ca(e){return!!He&&He in e}var $e=ca;var xa=Function.prototype,ga=xa.toString;function ha(e){if(e!=null){try{return ga.call(e)}catch(t){}try{return e+""}catch(t){}}return""}var A=ha;var ya=/[\\^$.*+?()[\]{}|]/g,_a=/^\[object .+?Constructor\]$/,ba=Function.prototype,va=Object.prototype,Aa=ba.toString,Ta=va.hasOwnProperty,Pa=RegExp("^"+Aa.call(Ta).replace(ya,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Oa(e){if(!k(e)||$e(e))return!1;var t=ee(e)?Pa:_a;return t.test(A(e))}var Je=Oa;function Sa(e,t){return e==null?void 0:e[t]}var Xe=Sa;function Ia(e,t){var r=Xe(e,t);return Je(r)?r:void 0}var c=Ia;var wa=c(d,"WeakMap"),re=wa;var Ca=function(){try{var e=c(Object,"defineProperty");return e({},"",{}),e}catch(t){}}(),Pe=Ca;var Ea=9007199254740991,Ma=/^(?:0|[1-9]\d*)$/;function La(e,t){var r=typeof e;return t=t==null?Ea:t,!!t&&(r=="number"||r!="symbol"&&Ma.test(e))&&e>-1&&e%1==0&&e<t}var ae=La;function Da(e,t,r){t=="__proto__"&&Pe?Pe(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var Ye=Da;function Ra(e,t){return e===t||e!==e&&t!==t}var oe=Ra;var Ba=9007199254740991;function ka(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ba}var N=ka;function Na(e){return e!=null&&N(e.length)&&!ee(e)}var se=Na;var Ga=Object.prototype;function Wa(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Ga;return e===r}var Ve=Wa;function Fa(e,t){for(var r=-1,a=Array(e);++r<e;)a[r]=t(r);return a}var Ze=Fa;var Ka="[object Arguments]";function qa(e){return b(e)&&_(e)==Ka}var Oe=qa;var Qe=Object.prototype,za=Qe.hasOwnProperty,Ua=Qe.propertyIsEnumerable,Ha=Oe(function(){return arguments}())?Oe:function(e){return b(e)&&za.call(e,"callee")&&!Ua.call(e,"callee")},fe=Ha;function $a(){return!1}var et=$a;var tt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,rt=tt&&typeof module=="object"&&module&&!module.nodeType&&module,Ja=rt&&rt.exports===tt,at=Ja?d.Buffer:void 0,Xa=at?at.isBuffer:void 0,Ya=Xa||et,H=Ya;var Va="[object Arguments]",Za="[object Array]",Qa="[object Boolean]",eo="[object Date]",to="[object Error]",ro="[object Function]",ao="[object Map]",oo="[object Number]",so="[object Object]",fo="[object RegExp]",io="[object Set]",no="[object String]",po="[object WeakMap]",uo="[object ArrayBuffer]",lo="[object DataView]",mo="[object Float32Array]",jo="[object Float64Array]",co="[object Int8Array]",xo="[object Int16Array]",go="[object Int32Array]",ho="[object Uint8Array]",yo="[object Uint8ClampedArray]",_o="[object Uint16Array]",bo="[object Uint32Array]",p={};p[mo]=p[jo]=p[co]=p[xo]=p[go]=p[ho]=p[yo]=p[_o]=p[bo]=!0;p[Va]=p[Za]=p[uo]=p[Qa]=p[lo]=p[eo]=p[to]=p[ro]=p[ao]=p[oo]=p[so]=p[fo]=p[io]=p[no]=p[po]=!1;function vo(e){return b(e)&&N(e.length)&&!!p[_(e)]}var ot=vo;function Ao(e){return function(t){return e(t)}}var st=Ao;var ft=typeof exports=="object"&&exports&&!exports.nodeType&&exports,$=ft&&typeof module=="object"&&module&&!module.nodeType&&module,To=$&&$.exports===ft,Se=To&&Z.process,Po=function(){try{var e=$&&$.require&&$.require("util").types;return e||Se&&Se.binding&&Se.binding("util")}catch(t){}}(),Ie=Po;var it=Ie&&Ie.isTypedArray,Oo=it?st(it):ot,ie=Oo;var So=Object.prototype,Io=So.hasOwnProperty;function wo(e,t){var r=m(e),a=!r&&fe(e),s=!r&&!a&&H(e),o=!r&&!a&&!s&&ie(e),f=r||a||s||o,i=f?Ze(e.length,String):[],u=i.length;for(var n in e)(t||Io.call(e,n))&&!(f&&(n=="length"||s&&(n=="offset"||n=="parent")||o&&(n=="buffer"||n=="byteLength"||n=="byteOffset")||ae(n,u)))&&i.push(n);return i}var nt=wo;function Co(e,t){return function(r){return e(t(r))}}var pt=Co;var Eo=pt(Object.keys,Object),ut=Eo;var Mo=Object.prototype,Lo=Mo.hasOwnProperty;function Do(e){if(!Ve(e))return ut(e);var t=[];for(var r in Object(e))Lo.call(e,r)&&r!="constructor"&&t.push(r);return t}var lt=Do;function Ro(e){return se(e)?nt(e):lt(e)}var O=Ro;var Bo=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ko=/^\w*$/;function No(e,t){if(m(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||B(e)?!0:ko.test(e)||!Bo.test(e)||t!=null&&e in Object(t)}var G=No;var Go=c(Object,"create"),T=Go;function Wo(){this.__data__=T?T(null):{},this.size=0}var mt=Wo;function Fo(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var dt=Fo;var Ko="__lodash_hash_undefined__",qo=Object.prototype,zo=qo.hasOwnProperty;function Uo(e){var t=this.__data__;if(T){var r=t[e];return r===Ko?void 0:r}return zo.call(t,e)?t[e]:void 0}var jt=Uo;var Ho=Object.prototype,$o=Ho.hasOwnProperty;function Jo(e){var t=this.__data__;return T?t[e]!==void 0:$o.call(t,e)}var ct=Jo;var Xo="__lodash_hash_undefined__";function Yo(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=T&&t===void 0?Xo:t,this}var xt=Yo;function W(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}W.prototype.clear=mt;W.prototype.delete=dt;W.prototype.get=jt;W.prototype.has=ct;W.prototype.set=xt;var we=W;function Vo(){this.__data__=[],this.size=0}var gt=Vo;function Zo(e,t){for(var r=e.length;r--;)if(oe(e[r][0],t))return r;return-1}var S=Zo;var Qo=Array.prototype,es=Qo.splice;function ts(e){var t=this.__data__,r=S(t,e);if(r<0)return!1;var a=t.length-1;return r==a?t.pop():es.call(t,r,1),--this.size,!0}var ht=ts;function rs(e){var t=this.__data__,r=S(t,e);return r<0?void 0:t[r][1]}var yt=rs;function as(e){return S(this.__data__,e)>-1}var _t=as;function os(e,t){var r=this.__data__,a=S(r,e);return a<0?(++this.size,r.push([e,t])):r[a][1]=t,this}var bt=os;function F(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}F.prototype.clear=gt;F.prototype.delete=ht;F.prototype.get=yt;F.prototype.has=_t;F.prototype.set=bt;var I=F;var ss=c(d,"Map"),w=ss;function fs(){this.size=0,this.__data__={hash:new we,map:new(w||I),string:new we}}var vt=fs;function is(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var At=is;function ns(e,t){var r=e.__data__;return At(t)?r[typeof t=="string"?"string":"hash"]:r.map}var C=ns;function ps(e){var t=C(this,e).delete(e);return this.size-=t?1:0,t}var Tt=ps;function us(e){return C(this,e).get(e)}var Pt=us;function ls(e){return C(this,e).has(e)}var Ot=ls;function ms(e,t){var r=C(this,e),a=r.size;return r.set(e,t),this.size+=r.size==a?0:1,this}var St=ms;function K(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}K.prototype.clear=vt;K.prototype.delete=Tt;K.prototype.get=Pt;K.prototype.has=Ot;K.prototype.set=St;var D=K;var ds="Expected a function";function Ce(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(ds);var r=function(){var a=arguments,s=t?t.apply(this,a):a[0],o=r.cache;if(o.has(s))return o.get(s);var f=e.apply(this,a);return r.cache=o.set(s,f)||o,f};return r.cache=new(Ce.Cache||D),r}Ce.Cache=D;var It=Ce;var js=500;function cs(e){var t=It(e,function(a){return r.size===js&&r.clear(),a}),r=t.cache;return t}var wt=cs;var xs=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,gs=/\\(\\)?/g,hs=wt(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(xs,function(r,a,s,o){t.push(s?o.replace(gs,"$1"):a||r)}),t}),Ct=hs;function ys(e){return e==null?"":ze(e)}var Et=ys;function _s(e,t){return m(e)?e:G(e,t)?[e]:Ct(Et(e))}var ne=_s;var bs=1/0;function vs(e){if(typeof e=="string"||B(e))return e;var t=e+"";return t=="0"&&1/e==-bs?"-0":t}var E=vs;function As(e,t){t=ne(t,e);for(var r=0,a=t.length;e!=null&&r<a;)e=e[E(t[r++])];return r&&r==a?e:void 0}var pe=As;function Ts(e,t,r){var a=e==null?void 0:pe(e,t);return a===void 0?r:a}var Mt=Ts;function Ps(e,t){for(var r=-1,a=t.length,s=e.length;++r<a;)e[s+r]=t[r];return e}var Lt=Ps;function Os(){this.__data__=new I,this.size=0}var Dt=Os;function Ss(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}var Rt=Ss;function Is(e){return this.__data__.get(e)}var Bt=Is;function ws(e){return this.__data__.has(e)}var kt=ws;var Cs=200;function Es(e,t){var r=this.__data__;if(r instanceof I){var a=r.__data__;if(!w||a.length<Cs-1)return a.push([e,t]),this.size=++r.size,this;r=this.__data__=new D(a)}return r.set(e,t),this.size=r.size,this}var Nt=Es;function q(e){var t=this.__data__=new I(e);this.size=t.size}q.prototype.clear=Dt;q.prototype.delete=Rt;q.prototype.get=Bt;q.prototype.has=kt;q.prototype.set=Nt;var z=q;function Ms(e,t){for(var r=-1,a=e==null?0:e.length,s=0,o=[];++r<a;){var f=e[r];t(f,r,e)&&(o[s++]=f)}return o}var Gt=Ms;function Ls(){return[]}var Wt=Ls;var Ds=Object.prototype,Rs=Ds.propertyIsEnumerable,Ft=Object.getOwnPropertySymbols,Bs=Ft?function(e){return e==null?[]:(e=Object(e),Gt(Ft(e),function(t){return Rs.call(e,t)}))}:Wt,Kt=Bs;function ks(e,t,r){var a=t(e);return m(e)?a:Lt(a,r(e))}var qt=ks;function Ns(e){return qt(e,O,Kt)}var Ee=Ns;var Gs=c(d,"DataView"),ue=Gs;var Ws=c(d,"Promise"),le=Ws;var Fs=c(d,"Set"),me=Fs;var zt="[object Map]",Ks="[object Object]",Ut="[object Promise]",Ht="[object Set]",$t="[object WeakMap]",Jt="[object DataView]",qs=A(ue),zs=A(w),Us=A(le),Hs=A(me),$s=A(re),R=_;(ue&&R(new ue(new ArrayBuffer(1)))!=Jt||w&&R(new w)!=zt||le&&R(le.resolve())!=Ut||me&&R(new me)!=Ht||re&&R(new re)!=$t)&&(R=function(e){var t=_(e),r=t==Ks?e.constructor:void 0,a=r?A(r):"";if(a)switch(a){case qs:return Jt;case zs:return zt;case Us:return Ut;case Hs:return Ht;case $s:return $t}return t});var J=R;var Js=d.Uint8Array,Me=Js;var Xs="__lodash_hash_undefined__";function Ys(e){return this.__data__.set(e,Xs),this}var Xt=Ys;function Vs(e){return this.__data__.has(e)}var Yt=Vs;function de(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new D;++t<r;)this.add(e[t])}de.prototype.add=de.prototype.push=Xt;de.prototype.has=Yt;var Vt=de;function Zs(e,t){for(var r=-1,a=e==null?0:e.length;++r<a;)if(t(e[r],r,e))return!0;return!1}var Zt=Zs;function Qs(e,t){return e.has(t)}var Qt=Qs;var ef=1,tf=2;function rf(e,t,r,a,s,o){var f=r&ef,i=e.length,u=t.length;if(i!=u&&!(f&&u>i))return!1;var n=o.get(e),x=o.get(t);if(n&&x)return n==t&&x==e;var j=-1,l=!0,v=r&tf?new Vt:void 0;for(o.set(e,t),o.set(t,e);++j<i;){var g=e[j],y=t[j];if(a)var P=f?a(y,g,j,t,e,o):a(g,y,j,e,t,o);if(P!==void 0){if(P)continue;l=!1;break}if(v){if(!Zt(t,function(M,L){if(!Qt(v,L)&&(g===M||s(g,M,r,a,o)))return v.push(L)})){l=!1;break}}else if(!(g===y||s(g,y,r,a,o))){l=!1;break}}return o.delete(e),o.delete(t),l}var je=rf;function af(e){var t=-1,r=Array(e.size);return e.forEach(function(a,s){r[++t]=[s,a]}),r}var ce=af;function of(e){var t=-1,r=Array(e.size);return e.forEach(function(a){r[++t]=a}),r}var er=of;var sf=1,ff=2,nf="[object Boolean]",pf="[object Date]",uf="[object Error]",lf="[object Map]",mf="[object Number]",df="[object RegExp]",jf="[object Set]",cf="[object String]",xf="[object Symbol]",gf="[object ArrayBuffer]",hf="[object DataView]",tr=h?h.prototype:void 0,Le=tr?tr.valueOf:void 0;function yf(e,t,r,a,s,o,f){switch(r){case hf:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case gf:return!(e.byteLength!=t.byteLength||!o(new Me(e),new Me(t)));case nf:case pf:case mf:return oe(+e,+t);case uf:return e.name==t.name&&e.message==t.message;case df:case cf:return e==t+"";case lf:var i=ce;case jf:var u=a&sf;if(i||(i=er),e.size!=t.size&&!u)return!1;var n=f.get(e);if(n)return n==t;a|=ff,f.set(e,t);var x=je(i(e),i(t),a,s,o,f);return f.delete(e),x;case xf:if(Le)return Le.call(e)==Le.call(t)}return!1}var rr=yf;var _f=1,bf=Object.prototype,vf=bf.hasOwnProperty;function Af(e,t,r,a,s,o){var f=r&_f,i=Ee(e),u=i.length,n=Ee(t),x=n.length;if(u!=x&&!f)return!1;for(var j=u;j--;){var l=i[j];if(!(f?l in t:vf.call(t,l)))return!1}var v=o.get(e),g=o.get(t);if(v&&g)return v==t&&g==e;var y=!0;o.set(e,t),o.set(t,e);for(var P=f;++j<u;){l=i[j];var M=e[l],L=t[l];if(a)var Be=f?a(L,M,l,t,e,o):a(M,L,l,e,t,o);if(!(Be===void 0?M===L||s(M,L,r,a,o):Be)){y=!1;break}P||(P=l=="constructor")}if(y&&!P){var X=e.constructor,Y=t.constructor;X!=Y&&"constructor"in e&&"constructor"in t&&!(typeof X=="function"&&X instanceof X&&typeof Y=="function"&&Y instanceof Y)&&(y=!1)}return o.delete(e),o.delete(t),y}var ar=Af;var Tf=1,or="[object Arguments]",sr="[object Array]",xe="[object Object]",Pf=Object.prototype,fr=Pf.hasOwnProperty;function Of(e,t,r,a,s,o){var f=m(e),i=m(t),u=f?sr:J(e),n=i?sr:J(t);u=u==or?xe:u,n=n==or?xe:n;var x=u==xe,j=n==xe,l=u==n;if(l&&H(e)){if(!H(t))return!1;f=!0,x=!1}if(l&&!x)return o||(o=new z),f||ie(e)?je(e,t,r,a,s,o):rr(e,t,u,r,a,s,o);if(!(r&Tf)){var v=x&&fr.call(e,"__wrapped__"),g=j&&fr.call(t,"__wrapped__");if(v||g){var y=v?e.value():e,P=g?t.value():t;return o||(o=new z),s(y,P,r,a,o)}}return l?(o||(o=new z),ar(e,t,r,a,s,o)):!1}var ir=Of;function nr(e,t,r,a,s){return e===t?!0:e==null||t==null||!b(e)&&!b(t)?e!==e&&t!==t:ir(e,t,r,a,nr,s)}var ge=nr;var Sf=1,If=2;function wf(e,t,r,a){var s=r.length,o=s,f=!a;if(e==null)return!o;for(e=Object(e);s--;){var i=r[s];if(f&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++s<o;){i=r[s];var u=i[0],n=e[u],x=i[1];if(f&&i[2]){if(n===void 0&&!(u in e))return!1}else{var j=new z;if(a)var l=a(n,x,u,e,t,j);if(!(l===void 0?ge(x,n,Sf|If,a,j):l))return!1}}return!0}var pr=wf;function Cf(e){return e===e&&!k(e)}var he=Cf;function Ef(e){for(var t=O(e),r=t.length;r--;){var a=t[r],s=e[a];t[r]=[a,s,he(s)]}return t}var ur=Ef;function Mf(e,t){return function(r){return r==null?!1:r[e]===t&&(t!==void 0||e in Object(r))}}var ye=Mf;function Lf(e){var t=ur(e);return t.length==1&&t[0][2]?ye(t[0][0],t[0][1]):function(r){return r===e||pr(r,e,t)}}var lr=Lf;function Df(e,t){return e!=null&&t in Object(e)}var mr=Df;function Rf(e,t,r){t=ne(t,e);for(var a=-1,s=t.length,o=!1;++a<s;){var f=E(t[a]);if(!(o=e!=null&&r(e,f)))break;e=e[f]}return o||++a!=s?o:(s=e==null?0:e.length,!!s&&N(s)&&ae(f,s)&&(m(e)||fe(e)))}var dr=Rf;function Bf(e,t){return e!=null&&dr(e,t,mr)}var jr=Bf;var kf=1,Nf=2;function Gf(e,t){return G(e)&&he(t)?ye(E(e),t):function(r){var a=Mt(r,e);return a===void 0&&a===t?jr(r,e):ge(t,a,kf|Nf)}}var cr=Gf;function Wf(e){return function(t){return t==null?void 0:t[e]}}var xr=Wf;function Ff(e){return function(t){return pe(t,e)}}var gr=Ff;function Kf(e){return G(e)?xr(E(e)):gr(e)}var hr=Kf;function qf(e){return typeof e=="function"?e:e==null?Ue:typeof e=="object"?m(e)?cr(e[0],e[1]):lr(e):hr(e)}var yr=qf;function zf(e,t,r,a){for(var s=-1,o=e==null?0:e.length;++s<o;){var f=e[s];t(a,f,r(f),e)}return a}var _r=zf;function Uf(e){return function(t,r,a){for(var s=-1,o=Object(t),f=a(t),i=f.length;i--;){var u=f[e?i:++s];if(r(o[u],u,o)===!1)break}return t}}var br=Uf;var Hf=br(),vr=Hf;function $f(e,t){return e&&vr(e,t,O)}var Ar=$f;function Jf(e,t){return function(r,a){if(r==null)return r;if(!se(r))return e(r,a);for(var s=r.length,o=t?s:-1,f=Object(r);(t?o--:++o<s)&&a(f[o],o,f)!==!1;);return r}}var Tr=Jf;var Xf=Tr(Ar),Pr=Xf;function Yf(e,t,r,a){return Pr(e,function(s,o,f){t(a,s,r(s),f)}),a}var Or=Yf;function Vf(e,t){return function(r,a){var s=m(r)?_r:Or,o=t?t():{};return s(r,e,yr(a,2),o)}}var Sr=Vf;function Zf(e,t){return Q(t,function(r){return[r,e[r]]})}var Ir=Zf;function Qf(e){var t=-1,r=Array(e.size);return e.forEach(function(a){r[++t]=[a,a]}),r}var wr=Qf;var ei="[object Map]",ti="[object Set]";function ri(e){return function(t){var r=J(t);return r==ei?ce(t):r==ti?wr(t):Ir(t,e(t))}}var Cr=ri;var ai=Cr(O),_e=ai;var oi=Object.prototype,si=oi.hasOwnProperty,fi=Sr(function(e,t,r){si.call(e,r)?e[r].push(t):Ye(e,r,[t])}),be=fi;var De=Te(Ae("process")),ii="[31m",Mr=e=>{console.error(ii,`[yarn-plugin-unique] Error: ${e}`)},ni=(...e)=>e;function Lr(e,t){return t in e}var Re="uniquePackages",pi=e=>{let t=o=>Array.isArray(o)&&o.every(f=>typeof f=="string"),r=ve.ppath.resolve(e,ve.npath.toPortablePath("package.json")),a=Er.miscUtils.dynamicRequire(r);if(!Lr(a,Re))return;let s=a[Re];return t(s)||(Mr(`Invalid form for \`${Re}\` field in package.json. Valid forms: \`string[]\`.`),(0,De.exit)(1)),s},ui=(e,t)=>{let r=o=>`@${o.scope}/${o.name}`,a=Array.from(e.storedPackages.values()).filter(o=>t.includes(r(o)));return _e(be(a,r)).map(([o,f])=>ni(o,_e(be(f,"version")))).filter(o=>o[1].length>=2)},li=e=>{for(let t of e){let[r,a]=t,s=a.map(o=>o[0]);Mr(`${r} is duplicated and not allowed. versions: ${s.join(", ")}`)}},mi={hooks:{afterAllInstalled:(e,t)=>{let r=pi(e.cwd);if(r===void 0)return;let a=ui(e,r);a&&(li(a),(0,De.exit)(1))}}},di=mi;return ji;})();
/**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
return plugin;
}
};
