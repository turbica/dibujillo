(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},da;
if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var fa;a:{var ha={a:!0},ia={};try{ia.__proto__=ha;fa=ia.a;break a}catch(a){}fa=!1}da=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=da,ka="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function la(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ma=la(this);function na(a,b){if(b){for(var c=ma,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ka(c,d,{configurable:!0,writable:!0,value:f})}}
function oa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
na("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=oa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
na("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=oa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,h=Math.max(0,Math.min(c|0,d.length)),g=0;g<f&&h<e;)if(d[h++]!=b[g++])return!1;return g>=f}});
function pa(){pa=function(){};
ma.Symbol||(ma.Symbol=qa)}
function ra(a,b){this.f=a;ka(this,"description",{configurable:!0,writable:!0,value:b})}
ra.prototype.toString=function(){return this.f};
var qa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ra("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function sa(){pa();var a=ma.Symbol.iterator;a||(a=ma.Symbol.iterator=ma.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ka(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ta(aa(this))}});
sa=function(){}}
function ta(a){sa();a={next:a};a[ma.Symbol.iterator]=function(){return this};
return a}
function ua(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var va="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ua(d,e)&&(a[e]=d[e])}return a};
na("Object.assign",function(a){return a||va});
var wa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
na("Reflect.construct",function(){return wa});
na("WeakMap",function(a){function b(k){this.f=(g+=Math.random()+1).toString();if(k){k=ba(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ua(k,h)){var l=new c;ka(k,h,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(p){if(p instanceof c)return p;e(p);return l(p)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),p=new a([[k,2],[l,3]]);if(2!=p.get(k)||3!=p.get(l))return!1;p["delete"](k);p.set(l,4);return!p.has(k)&&4==p.get(l)}catch(q){return!1}}())return a;
var h="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var g=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ua(k,h))throw Error("WeakMap key fail: "+k);k[h][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&ua(k,h)?k[h][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&ua(k,h)&&ua(k[h],this.f)};
b.prototype["delete"]=function(k){return d(k)&&ua(k,h)&&ua(k[h],this.f)?delete k[h][this.f]:!1};
return b});
na("Map",function(a){function b(){var g={};return g.previous=g.next=g.head=g}
function c(g,k){var l=g.f;return ta(function(){if(l){for(;l.head!=g.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(g,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++h,f.set(k,l)):l="p_"+k;var p=g.g[l];if(p&&ua(g.g,l))for(var q=0;q<p.length;q++){var t=p[q];if(k!==k&&t.key!==t.key||k===t.key)return{id:l,list:p,index:q,C:t}}return{id:l,list:p,index:-1,C:void 0}}
function e(g){this.g={};this.f=b();this.size=0;if(g){g=ba(g);for(var k;!(k=g.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var g=Object.seal({x:4}),k=new a(ba([[g,"s"]]));if("s"!=k.get(g)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),p=l.next();if(p.done||p.value[0]!=g||"s"!=p.value[1])return!1;p=l.next();return p.done||4!=p.value[0].x||"t"!=p.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;
sa();var f=new WeakMap;e.prototype.set=function(g,k){g=0===g?0:g;var l=d(this,g);l.list||(l.list=this.g[l.id]=[]);l.C?l.C.value=k:(l.C={next:this.f,previous:this.f.previous,head:this.f,key:g,value:k},l.list.push(l.C),this.f.previous.next=l.C,this.f.previous=l.C,this.size++);return this};
e.prototype["delete"]=function(g){g=d(this,g);return g.C&&g.list?(g.list.splice(g.index,1),g.list.length||delete this.g[g.id],g.C.previous.next=g.C.next,g.C.next.previous=g.C.previous,g.C.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(g){return!!d(this,g).C};
e.prototype.get=function(g){return(g=d(this,g).C)&&g.value};
e.prototype.entries=function(){return c(this,function(g){return[g.key,g.value]})};
e.prototype.keys=function(){return c(this,function(g){return g.key})};
e.prototype.values=function(){return c(this,function(g){return g.value})};
e.prototype.forEach=function(g,k){for(var l=this.entries(),p;!(p=l.next()).done;)p=p.value,g.call(k,p[1],p[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var h=0;return e});
na("Set",function(a){function b(c){this.f=new Map;if(c){c=ba(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(ba([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(h){return!1}}())return a;
sa();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
na("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==oa(this,b,"includes").indexOf(b,c||0)}});
var n=this||self;function v(a,b){for(var c=a.split("."),d=b||n,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function ya(){}
function za(a){a.ca=void 0;a.w=function(){return a.ca?a.ca:a.ca=new a}}
function Aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Ba(a){var b=Aa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ca(a){return"function"==Aa(a)}
function Da(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ea(a){return Object.prototype.hasOwnProperty.call(a,Fa)&&a[Fa]||(a[Fa]=++Ga)}
var Fa="closure_uid_"+(1E9*Math.random()>>>0),Ga=0;function Ha(a,b,c){return a.call.apply(a.bind,arguments)}
function Ia(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w=Ha:w=Ia;return w.apply(null,arguments)}
function Ja(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var Ka=Date.now||function(){return+new Date};
function x(a,b){var c=a.split("."),d=n;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function y(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;function La(a){if(Error.captureStackTrace)Error.captureStackTrace(this,La);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
y(La,Error);La.prototype.name="CustomError";var Ma;var Na=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Oa=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h="string"===typeof a?a.split(""):a,g=0;g<d;g++)if(g in h){var k=h[g];
b.call(c,k,g,a)&&(e[f++]=k)}return e},Pa=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Qa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
z(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},Ra=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1};
function Sa(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function Ta(a,b){return 0<=Na(a,b)}
function Ua(a){return Array.prototype.concat.apply([],arguments)}
function Va(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Xa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ba(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
function Ya(a,b,c,d){return Array.prototype.splice.apply(a,Za(arguments,1))}
function Za(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function $a(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Array.isArray(d))for(var e=0;e<d.length;e+=8192)for(var f=$a.apply(null,Za(d,e,e+8192)),h=0;h<f.length;h++)b.push(f[h]);else b.push(d)}return b}
;function ab(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var bb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function cb(a,b){for(var c=0,d=bb(String(a)).split("."),e=bb(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var g=d[h]||"",k=e[h]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;c=db(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||db(0==g[2].length,0==k[2].length)||db(g[2],k[2]);g=g[3];k=k[3]}while(0==c)}return c}
function db(a,b){return a<b?-1:a>b?1:0}
;var eb;a:{var fb=n.navigator;if(fb){var gb=fb.userAgent;if(gb){eb=gb;break a}}eb=""}function A(a){return-1!=eb.indexOf(a)}
;function hb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function ib(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function jb(a){var b=kb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function lb(a){for(var b in a)return!1;return!0}
function mb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function nb(a){var b=Aa(a);if("object"==b||"array"==b){if(Ca(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=nb(a[c]);return b}return a}
var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function qb(){return A("Firefox")||A("FxiOS")}
function rb(){return A("Safari")&&!(sb()||A("Coast")||A("Opera")||A("Edge")||A("Edg/")||A("OPR")||qb()||A("Silk")||A("Android"))}
function sb(){return(A("Chrome")||A("CriOS"))&&!A("Edge")}
function tb(){return A("Android")&&!(sb()||qb()||A("Opera")||A("Silk"))}
;function ub(a,b){this.f=a===vb&&b||"";this.g=wb}
ub.prototype.T=!0;ub.prototype.S=function(){return this.f};
var wb={},vb={},xb=new ub(vb,"");function yb(a,b){this.f=a===zb&&b||"";this.g=Ab}
yb.prototype.T=!0;yb.prototype.S=function(){return this.f.toString()};
var Ab={},zb={};function Bb(a,b){this.f=a===Cb&&b||"";this.g=Db}
Bb.prototype.T=!0;Bb.prototype.S=function(){return this.f.toString()};
var Eb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Db={},Cb={};function Fb(){this.f="";this.g=Gb}
Fb.prototype.T=!0;Fb.prototype.S=function(){return this.f.toString()};
function Hb(a){return a instanceof Fb&&a.constructor===Fb&&a.g===Gb?a.f:"type_error:SafeHtml"}
var Gb={};function Ib(a){var b=new Fb;b.f=a;return b}
Ib("<!DOCTYPE html>");var Jb=Ib("");Ib("<br>");var Kb=ab(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=Hb(Jb);return!b.parentElement});
function Lb(a,b){if(Kb())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Hb(b)}
function Mb(a){var b=new yb(zb,xb instanceof ub&&xb.constructor===ub&&xb.g===wb?xb.f:"type_error:Const");a.src=(b instanceof yb&&b.constructor===yb&&b.g===Ab?b.f:"type_error:TrustedResourceUrl").toString()}
;function Nb(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})}
function Ob(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})}
;function Pb(){return A("iPhone")&&!A("iPod")&&!A("iPad")}
function Qb(){return Pb()||A("iPad")||A("iPod")}
;function Rb(a){Rb[" "](a);return a}
Rb[" "]=ya;function Sb(a,b){var c=Tb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Ub=A("Opera"),B=A("Trident")||A("MSIE"),Vb=A("Edge"),Wb=Vb||B,Xb=A("Gecko")&&!(-1!=eb.toLowerCase().indexOf("webkit")&&!A("Edge"))&&!(A("Trident")||A("MSIE"))&&!A("Edge"),Yb=-1!=eb.toLowerCase().indexOf("webkit")&&!A("Edge"),Zb=A("Macintosh"),$b=A("Windows"),ac=A("Android"),bc=Pb(),cc=A("iPad"),dc=A("iPod"),ec=Qb();function fc(){var a=n.document;return a?a.documentMode:void 0}
var gc;a:{var hc="",ic=function(){var a=eb;if(Xb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Vb)return/Edge\/([\d\.]+)/.exec(a);if(B)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Yb)return/WebKit\/(\S+)/.exec(a);if(Ub)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ic&&(hc=ic?ic[1]:"");if(B){var kc=fc();if(null!=kc&&kc>parseFloat(hc)){gc=String(kc);break a}}gc=hc}var lc=gc,Tb={};function mc(a){return Sb(a,function(){return 0<=cb(lc,a)})}
var nc;if(n.document&&B){var oc=fc();nc=oc?oc:parseInt(lc,10)||void 0}else nc=void 0;var pc=nc;var qc=qb(),rc=Pb()||A("iPod"),sc=A("iPad"),tc=tb(),uc=sb(),vc=rb()&&!Qb();var wc={},xc=null;var C=window;function yc(a){this.f=a||{cookie:""}}
m=yc.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Vb;d=c.secure||!1;var f=c.domain||void 0;var h=c.path||void 0;var g=c.sa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===g&&(g=-1);c=f?";domain="+f:"";h=h?";path="+h:"";d=d?";secure":"";g=0>g?"":0==g?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Ka()+1E3*g)).toUTCString();this.f.cookie=a+"="+b+c+h+g+d+(null!=e?";samesite="+e:
"")};
m.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=bb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{sa:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.f.cookie};
m.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=bb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var zc=new yc("undefined"==typeof document?null:document);var Ac=!Xb&&!B||B&&9<=Number(pc)||Xb&&mc("1.9.1"),Bc=B&&!mc("9");function D(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=D.prototype;m.clone=function(){return new D(this.x,this.y)};
m.equals=function(a){return a instanceof D&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function Cc(a,b){return new D(a.x-b.x,a.y-b.y)}
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Dc(a,b){this.width=a;this.height=b}
m=Dc.prototype;m.clone=function(){return new Dc(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ec(a){return a?new Fc(Gc(a)):Ma||(Ma=new Fc)}
function E(a){return"string"===typeof a?document.getElementById(a):a}
function Hc(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Ic(document,"*",a,b)}
function G(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):Ic(c,"*",a,b)[0]||null}return c||null}
function Ic(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,h;h=a[f];f++)b==h.nodeName&&(d[e++]=h);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;h=a[f];f++)b=h.className,"function"==typeof b.split&&Ta(b.split(/\s+/),c)&&(d[e++]=h);d.length=e;return d}return a}
function Jc(a,b){hb(b,function(c,d){c&&"object"==typeof c&&c.T&&(c=c.S());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Kc.hasOwnProperty(d)?a.setAttribute(Kc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Kc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Lc(a){a=a.document;a=Mc(a)?a.documentElement:a.body;return new Dc(a.clientWidth,a.clientHeight)}
function Nc(a){var b=Oc(a);a=Pc(a);return B&&mc("10")&&a.pageYOffset!=b.scrollTop?new D(b.scrollLeft,b.scrollTop):new D(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Oc(a){return a.scrollingElement?a.scrollingElement:!Yb&&Mc(a)?a.documentElement:a.body||a.documentElement}
function Pc(a){return a.parentWindow||a.defaultView}
function Qc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Mc(a){return"CSS1Compat"==a.compatMode}
function Rc(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Sc(a){return Ac&&void 0!=a.children?a.children:Oa(a.childNodes,function(b){return 1==b.nodeType})}
function Tc(a){return Da(a)&&1==a.nodeType}
function Uc(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Gc(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Vc(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(Gc(a).createTextNode(String(b)))}}
function Wc(a,b){var c=[];return Xc(a,b,c,!0)?c[0]:void 0}
function Xc(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Xc(a,b,c,d))return!0;a=a.nextSibling}return!1}
var Zc={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},$c={IMG:" ",BR:"\n"};function ad(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!bd(a)||cd(a)):bd(a)&&cd(a))&&B){var c;!Ca(a.getBoundingClientRect)||B&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function bd(a){return B&&!mc("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function cd(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a}
function dd(a){if(Bc&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];ed(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Bc||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function ed(a,b,c){if(!(a.nodeName in Zc))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in $c)b.push($c[a.nodeName]);else for(a=a.firstChild;a;)ed(a,b,c),a=a.nextSibling}
function fd(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return gd(a,function(f){return(!e||f.nodeName==e)&&(!c||"string"===typeof f.className&&Ta(f.className.split(/\s+/),c))},!0,d)}
function H(a,b){return fd(a,null,b,void 0)}
function gd(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function Fc(a){this.f=a||n.document||document}
Fc.prototype.getElementsByTagName=function(a,b){return(b||this.f).getElementsByTagName(String(a))};
Fc.prototype.createElement=function(a){return Qc(this.f,a)};
Fc.prototype.appendChild=function(a,b){a.appendChild(b)};
Fc.prototype.isElement=Tc;var hd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function id(a){return a.match(hd)}
function jd(a){return a?decodeURI(a):a}
function kd(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function ld(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ld(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function md(a,b){for(var c=[],d=b||0;d<a.length;d+=2)ld(a[d],a[d+1],c);return c.join("&")}
function nd(a){var b=[],c;for(c in a)ld(c,a[c],b);return b.join("&")}
function od(a,b){var c=2==arguments.length?md(arguments[1],0):md(arguments,1);return kd(a,c)}
function pd(a,b){var c=nd(b);return kd(a,c)}
;function qd(a){var b=rd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function sd(){var a=[];qd(function(b){a.push(b)});
return a}
var rd={Ab:"allow-forms",Bb:"allow-modals",Cb:"allow-orientation-lock",Db:"allow-pointer-lock",Eb:"allow-popups",Fb:"allow-popups-to-escape-sandbox",Gb:"allow-presentation",Hb:"allow-same-origin",Ib:"allow-scripts",Jb:"allow-top-navigation",Kb:"allow-top-navigation-by-user-activation"},td=ab(function(){return sd()});
function ud(){var a=Qc(document,"IFRAME"),b={};z(td(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function vd(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
m=vd.prototype;m.getHeight=function(){return this.bottom-this.top};
m.clone=function(){return new vd(this.top,this.right,this.bottom,this.left)};
m.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
m.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
m.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function wd(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
wd.prototype.clone=function(){return new wd(this.left,this.top,this.width,this.height)};
wd.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
wd.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
wd.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function xd(a,b,c){if("string"===typeof b)(b=yd(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=yd(c,d);f&&(c.style[f]=e)}}
var zd={};function yd(a,b){var c=zd[b];if(!c){var d=Nb(b);c=d;void 0===a.style[d]&&(d=(Yb?"Webkit":Xb?"Moz":B?"ms":Ub?"O":null)+Ob(d),void 0!==a.style[d]&&(c=d));zd[b]=c}return c}
function Ad(a,b){var c=Gc(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Bd(a,b){return Ad(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Cd(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}B&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Dd(a){if(B&&!(8<=Number(pc)))return a.offsetParent;var b=Gc(a),c=Bd(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=Bd(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Ed(a){for(var b=new vd(0,Infinity,Infinity,0),c=Ec(a),d=c.f.body,e=c.f.documentElement,f=Oc(c.f);a=Dd(a);)if(!(B&&0==a.clientWidth||Yb&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=Bd(a,"overflow")){var h=Fd(a),g=new D(a.clientLeft,a.clientTop);h.x+=g.x;h.y+=g.y;b.top=Math.max(b.top,h.y);b.right=Math.min(b.right,h.x+a.clientWidth);b.bottom=Math.min(b.bottom,h.y+a.clientHeight);b.left=Math.max(b.left,h.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
Lc(Pc(c.f)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Fd(a){var b=Gc(a),c=new D(0,0);var d=b?Gc(b):document;d=!B||9<=Number(pc)||Mc(Ec(d).f)?d.documentElement:d.body;if(a==d)return c;a=Cd(a);b=Nc(Ec(b).f);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function Gd(a){a=Cd(a);return new D(a.left,a.top)}
function Hd(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Id(a){var b=Jd;if("none"!=Bd(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Jd(a){var b=a.offsetWidth,c=a.offsetHeight,d=Yb&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=Cd(a),new Dc(a.right-a.left,a.bottom-a.top)):new Dc(b,c)}
function Kd(a){var b=Fd(a);a=Id(a);return new wd(b.x,b.y,a.width,a.height)}
function Ld(a){return"rtl"==Bd(a,"direction")}
function Md(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Nd(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Md(a,c):0}
var Od={thin:2,medium:4,thick:6};function Pd(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Od?Od[c]:Md(a,c)}
;var Qd=(new Date).getTime();function Rd(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Sd=window,Td=document,Ud=Sd.location;function Vd(){}
var Wd=/\[native code\]/;function I(a,b,c){return a[b]=a[b]||c}
function Xd(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Yd(){var a;if((a=Object.create)&&Wd.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Zd=I(Sd,"gapi",{});var J;J=I(Sd,"___jsl",Yd());I(J,"I",0);I(J,"hel",10);function $d(){var a=Ud.href;if(J.dpo)var b=J.h;else{b=J.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function ae(a){var b=I(J,"PQ",[]);J.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function be(a){return I(I(J,"H",Yd()),a,Yd())}
;function ce(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=l=0}
function b(q){for(var t=h,r=0;64>r;r+=4)t[r/4]=q[r]<<24|q[r+1]<<16|q[r+2]<<8|q[r+3];for(r=16;80>r;r++)q=t[r-3]^t[r-8]^t[r-14]^t[r-16],t[r]=(q<<1|q>>>31)&4294967295;q=e[0];var u=e[1],Q=e[2],F=e[3],Wa=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var ea=F^u&(Q^F);var xa=1518500249}else ea=u^Q^F,xa=1859775393;else 60>r?(ea=u&Q|F&(u|Q),xa=2400959708):(ea=u^Q^F,xa=3395469782);ea=((q<<5|q>>>27)&4294967295)+ea+Wa+xa+t[r]&4294967295;Wa=F;F=Q;Q=(u<<30|u>>>2)&4294967295;u=q;q=ea}e[0]=e[0]+q&4294967295;e[1]=e[1]+
u&4294967295;e[2]=e[2]+Q&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+Wa&4294967295}
function c(q,t){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var r=[],u=0,Q=q.length;u<Q;++u)r.push(q.charCodeAt(u));q=r}t||(t=q.length);r=0;if(0==l)for(;r+64<t;)b(q.slice(r,r+64)),r+=64,p+=64;for(;r<t;)if(f[l++]=q[r++],p++,64==l)for(l=0,b(f);r+64<t;)b(q.slice(r,r+64)),r+=64,p+=64}
function d(){var q=[],t=8*p;56>l?c(g,56-l):c(g,64-(l-56));for(var r=63;56<=r;r--)f[r]=t&255,t>>>=8;b(f);for(r=t=0;5>r;r++)for(var u=24;0<=u;u-=8)q[t++]=e[r]>>u&255;return q}
for(var e=[],f=[],h=[],g=[128],k=1;64>k;++k)g[k]=0;var l,p;a();return{reset:a,update:c,digest:d,Ua:function(){for(var q=d(),t="",r=0;r<q.length;r++)t+="0123456789ABCDEF".charAt(Math.floor(q[r]/16))+"0123456789ABCDEF".charAt(q[r]%16);return t}}}
;function de(a,b,c){var d=[],e=[];if(1==("array"==Aa(c)?2:1))return e=[b,a],z(d,function(g){e.push(g)}),ee(e.join(" "));
var f=[],h=[];z(c,function(g){h.push(g.key);f.push(g.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];z(d,function(g){e.push(g)});
a=ee(e.join(" "));a=[c,a];0==h.length||a.push(h.join(""));return a.join("_")}
function ee(a){var b=ce();b.update(a);return b.Ua().toLowerCase()}
;function fe(a){var b=Rd(String(n.location.href)),c;(c=n.__SAPISID||n.__APISID||n.__OVERRIDE_SID)?c=!0:(c=new yc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,c||(c=new yc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(n.location.href);return d&&c&&b?[b,de(Rd(d),c,a||null)].join(" "):null}return null}
;var ge=I(J,"perf",Yd());I(ge,"g",Yd());var he=I(ge,"i",Yd());I(ge,"r",[]);Yd();Yd();function ie(a,b,c){b&&0<b.length&&(b=je(b),c&&0<c.length&&(b+="___"+je(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=I(he,"_p",Yd()),I(b,c,Yd())[a]=(new Date).getTime(),b=ge.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function je(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var ke=Yd(),le=[];function me(a){throw Error("Bad hint"+(a?": "+a:""));}
le.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?J[b]=I(J,b,[]).concat(c):I(J,b,c)}if(b=a.u)a=I(J,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var ne=/^(\/[a-zA-Z0-9_\-]+)+$/,oe=[/\/amp\//,/\/amp$/,/^\/amp$/],pe=/^[a-zA-Z0-9\-_\.,!]+$/,qe=/^gapi\.loaded_[0-9]+$/,re=/^[a-zA-Z0-9,._-]+$/;function se(a,b,c,d){var e=a.split(";"),f=e.shift(),h=ke[f],g=null;h?g=h(e,b,c,d):me("no hint processor for: "+f);g||me("failed to generate load url");b=g;c=b.match(te);(d=b.match(ue))&&1===d.length&&ve.test(b)&&c&&1===c.length||me("failed sanity: "+a);return g}
function we(a,b,c,d){function e(f){return encodeURIComponent(f).replace(/%2C/g,",")}
a=xe(a);qe.test(c)||me("invalid_callback");b=ye(b);d=d&&d.length?ye(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.ga?"/am="+e(a.ga):"",a.Ea?"/rs="+e(a.Ea):"",a.Oa?"/t="+e(a.Oa):"","/cb=",e(c)].join("")}
function xe(a){"/"!==a.charAt(0)&&me("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))me("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),h=decodeURIComponent(f[0]),g=decodeURIComponent(f[1]);2==f.length&&h&&g&&(a[h]=a[h]||g)}b="/"+c.join("/");ne.test(b)||me("invalid_prefix");c=0;for(d=oe.length;c<d;++c)oe[c].test(b)&&me("invalid_prefix");c=ze(a,
"k",!0);d=ze(a,"am");e=ze(a,"rs");a=ze(a,"t");return{pathPrefix:b,version:c,ga:d,Ea:e,Oa:a}}
function ye(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");re.test(e)&&b.push(e)}return b.join(",")}
function ze(a,b,c){a=a[b];!a&&c&&me("missing: "+b);if(a){if(pe.test(a))return a;me("invalid: "+b)}return null}
var ve=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,ue=/\/cb=/g,te=/\/\//g;function Ae(){var a=$d();if(!a)throw Error("Bad hint");return a}
ke.m=function(a,b,c,d){(a=a[0])||me("missing_hint");return"https://apis.google.com"+we(a,b,c,d)};
var Be=decodeURI("%73cript"),Ce=/^[-+_0-9\/A-Za-z]+={0,2}$/;function De(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function Ee(){var a=J.nonce;return void 0!==a?a&&a===String(a)&&a.match(Ce)?a:J.nonce=null:Td.querySelector?(a=Td.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(Ce)?J.nonce=a:J.nonce=null):null:null}
function Fe(a){if("loading"!=Td.readyState)Ge(a);else{var b=Ee(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+Be+' src="'+encodeURI(a)+'"'+c+"></"+Be+">";Td.write(a)}}
function Ge(a){var b=Td.createElement(Be);b.setAttribute("src",a);a=Ee();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Td.getElementsByTagName(Be)[0])?a.parentNode.insertBefore(b,a):(Td.head||Td.body||Td.documentElement).appendChild(b)}
function He(a,b){var c=b&&b._c;if(c)for(var d=0;d<le.length;d++){var e=le[d][0],f=le[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Ie(a,b,c){Je(function(){var d=b===$d()?I(Zd,"_",Yd()):Yd();d=I(be(b),"_",d);a(d)},c)}
function Ke(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);He(a,c);var d=a?a.split(":"):[],e=c.h||Ae(),f=I(J,"ah",Yd());if(f["::"]&&d.length){for(var h=[],g=null;g=d.shift();){var k=g.split(".");k=f[g]||f[k[1]&&"ns:"+k[0]||""]||e;var l=h.length&&h[h.length-1]||null,p=l;l&&l.hint==k||(p={hint:k,features:[]},h.push(p));p.features.push(g)}var q=h.length;if(1<q){var t=c.callback;t&&(c.callback=function(){0==--q&&t()})}for(;d=h.shift();)Le(d.features,c,d.hint)}else Le(d||[],c,e)}
function Le(a,b,c){function d(ea,xa){if(q)return 0;Sd.clearTimeout(p);t.push.apply(t,u);var jc=((Zd||{}).config||{}).update;jc?jc(f):f&&I(J,"cu",[]).push(f);if(xa){ie("me0",ea,r);try{Ie(xa,c,l)}finally{ie("me1",ea,r)}}return 1}
a=Xd(a)||[];var e=b.callback,f=b.config,h=b.timeout,g=b.ontimeout,k=b.onerror,l=void 0;"function"==typeof k&&(l=k);var p=null,q=!1;if(h&&!g||!h&&g)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";k=I(be(c),"r",[]).sort();var t=I(be(c),"L",[]).sort(),r=[].concat(k);0<h&&(p=Sd.setTimeout(function(){q=!0;g()},h));
var u=De(a,t);if(u.length){u=De(a,k);var Q=I(J,"CP",[]),F=Q.length;Q[F]=function(ea){function xa(){var Yc=Q[F+1];Yc&&Yc()}
function jc(Yc){Q[F]=null;d(u,ea)&&ae(function(){e&&e();Yc()})}
if(!ea)return 0;ie("ml1",u,r);0<F&&Q[F-1]?Q[F]=function(){jc(xa)}:jc(xa)};
if(u.length){var Wa="loaded_"+J.I++;Zd[Wa]=function(ea){Q[F](ea);Zd[Wa]=null};
a=se(c,u,"gapi."+Wa,k);k.push.apply(k,u);ie("ml0",u,r);b.sync||Sd.___gapisync?Fe(a):Ge(a)}else Q[F](Vd)}else d(u)&&e&&e()}
function Je(a,b){if(J.hee&&0<J.hel)try{return a()}catch(c){b&&b(c),J.hel--,Ke("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Zd.load=function(a,b){return Je(function(){return Ke(a,b)})};function Me(){this.g=[];this.f=-1}
Me.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Me.prototype.get=function(a){return!!this.g[a]};
function Ne(a){-1==a.f&&(a.f=Qa(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Oe(a,b){this.i=a;this.l=b;this.g=0;this.f=null}
Oe.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.i();return a};
function Pe(a,b){a.l(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Qe(a){n.setTimeout(function(){throw a;},0)}
var Re;
function Se(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!A("Presto")&&(a=function(){var e=Qc(document,"IFRAME");e.style.display="none";Mb(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Hb(Jb));e.close();var h="callImmediate"+Math.random(),g="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=w(function(k){if(("*"==g||k.origin==g)&&k.data==h)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(h,g)}}});
if("undefined"!==typeof a&&!A("Trident")&&!A("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ia;c.ia=null;e()}};
return function(e){d.next={ia:e};d=d.next;b.port2.postMessage(0)}}return function(e){n.setTimeout(e,0)}}
;function Te(){this.g=this.f=null}
var Ve=new Oe(function(){return new Ue},function(a){a.reset()});
Te.prototype.add=function(a,b){var c=Ve.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Te.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Ue(){this.next=this.scope=this.f=null}
Ue.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Ue.prototype.reset=function(){this.next=this.scope=this.f=null};function We(a,b){Xe||Ye();Ze||(Xe(),Ze=!0);$e.add(a,b)}
var Xe;function Ye(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve(void 0);Xe=function(){a.then(af)}}else Xe=function(){var b=af;
!Ca(n.setImmediate)||n.Window&&n.Window.prototype&&!A("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(Re||(Re=Se()),Re(b)):n.setImmediate(b)}}
var Ze=!1,$e=new Te;function af(){for(var a;a=$e.remove();){try{a.f.call(a.scope)}catch(b){Qe(b)}Pe(Ve,a)}Ze=!1}
;function bf(){this.g=-1}
;function cf(){this.g=64;this.f=[];this.v=[];this.B=[];this.l=[];this.l[0]=128;for(var a=1;a<this.g;++a)this.l[a]=0;this.o=this.i=0;this.reset()}
y(cf,bf);cf.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.o=this.i=0};
function df(a,b,c){c||(c=0);var d=a.B;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var h=a.f[2],g=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=g^c&(h^g);var l=1518500249}else f=c^h^g,l=1859775393;else 60>e?(f=c&h|g&(c|h),l=2400959708):
(f=c^h^g,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=g;g=h;h=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+h&4294967295;a.f[3]=a.f[3]+g&4294967295;a.f[4]=a.f[4]+k&4294967295}
cf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.v,f=this.i;d<b;){if(0==f)for(;d<=c;)df(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){df(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){df(this,e);f=0;break}}this.i=f;this.o+=b}};
cf.prototype.digest=function(){var a=[],b=8*this.o;56>this.i?this.update(this.l,56-this.i):this.update(this.l,this.g-(this.i-56));for(var c=this.g-1;56<=c;c--)this.v[c]=b&255,b/=256;df(this,this.v);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function ef(){this.i=this.i;this.l=this.l}
ef.prototype.i=!1;ef.prototype.X=function(){return this.i};
ef.prototype.dispose=function(){this.i||(this.i=!0,this.ba())};
ef.prototype.ba=function(){if(this.l)for(;this.l.length;)this.l.shift()()};
function ff(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function gf(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function hf(a){return a.classList?a.classList:gf(a).match(/\S+/g)||[]}
function jf(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function K(a,b){return a.classList?a.classList.contains(b):Ta(hf(a),b)}
function L(a,b){if(a.classList)a.classList.add(b);else if(!K(a,b)){var c=gf(a);jf(a,c+(0<c.length?" "+b:b))}}
function kf(a,b){if(a.classList)z(b,function(f){L(a,f)});
else{var c={};z(hf(a),function(f){c[f]=!0});
z(b,function(f){c[f]=!0});
var d="",e;for(e in c)d+=0<d.length?" "+e:e;jf(a,d)}}
function M(a,b){a.classList?a.classList.remove(b):K(a,b)&&jf(a,Oa(hf(a),function(c){return c!=b}).join(" "))}
function lf(a,b){a.classList?z(b,function(c){M(a,c)}):jf(a,Oa(hf(a),function(c){return!Ta(b,c)}).join(" "))}
function mf(a,b,c){c?L(a,b):M(a,b)}
function nf(a,b,c){K(a,b)&&(M(a,b),L(a,c))}
function of(a,b){var c=!K(a,b);mf(a,b,c)}
;var pf=!B&&!rb();function qf(a,b){if(/-[a-z]/.test(b))return null;if(pf&&a.dataset){if(tb()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;var rf="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function sf(){}
sf.prototype.next=function(){throw rf;};
sf.prototype.L=function(){return this};
function tf(a){if(a instanceof sf)return a;if("function"==typeof a.L)return a.L(!1);if(Ba(a)){var b=0,c=new sf;c.next=function(){for(;;){if(b>=a.length)throw rf;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function uf(a,b){if(Ba(a))try{z(a,b,void 0)}catch(c){if(c!==rf)throw c;}else{a=tf(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==rf)throw c;}}}
function vf(a){if(Ba(a))return Va(a);a=tf(a);var b=[];uf(a,function(c){b.push(c)});
return b}
;function wf(a,b){this.i={};this.f=[];this.M=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof wf)for(c=xf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function xf(a){yf(a);return a.f.concat()}
m=wf.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||zf;yf(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function zf(a,b){return a===b}
m.isEmpty=function(){return 0==this.g};
m.clear=function(){this.i={};this.M=this.g=this.f.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.g--,this.M++,this.f.length>2*this.g&&yf(this),!0):!1};
function yf(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.g++,this.f.push(a),this.M++);this.i[a]=b};
m.forEach=function(a,b){for(var c=xf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new wf(this)};
m.L=function(a){yf(this);var b=0,c=this.M,d=this,e=new sf;e.next=function(){if(c!=d.M)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw rf;var f=d.f[b++];return a?f:d.i[f]};
return e};function Af(a){var b=[];Bf(new Cf,a,b);return b.join("")}
function Cf(){}
function Bf(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Bf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Df(d,c),c.push(":"),Bf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Df(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ef={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ff=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Df(a,b){b.push('"',a.replace(Ff,function(c){var d=Ef[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Ef[c]=d);return d}),'"')}
;var Gf=function(){if($b){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(eb))?a[1]:"0"}return Zb?(a=/10[_.][0-9_.]+/,(a=a.exec(eb))?a[0].replace(/_/g,"."):"10"):ac?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(eb))?a[1]:""):bc||cc||dc?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(eb))?a[1].replace(/_/g,"."):""):""}();function Hf(a){return(a=a.exec(eb))?a[1]:""}
var If=function(){if(qc)return Hf(/Firefox\/([0-9.]+)/);if(B||Vb||Ub)return lc;if(uc)return Qb()?Hf(/CriOS\/([0-9.]+)/):Hf(/Chrome\/([0-9.]+)/);if(vc&&!Qb())return Hf(/Version\/([0-9.]+)/);if(rc||sc){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(eb);if(a)return a[1]+"."+a[2]}else if(tc)return(a=Hf(/Android\s+([0-9.]+)/))?a:Hf(/Version\/([0-9.]+)/);return""}();function Jf(a,b,c,d,e,f,h){var g;if(g=c.offsetParent){var k="HTML"==g.tagName||"BODY"==g.tagName;if(!k||"static"!=Bd(g,"position")){var l=Fd(g);if(!k){k=Ld(g);var p;if(p=k){if(p=vc)p=0<=cb(If,10);var q;if(q=ec)q=0<=cb(Gf,10);p=Xb||p||q}k=p?-g.scrollLeft:!k||Wb&&mc("8")||"visible"==Bd(g,"overflowX")?g.scrollLeft:g.scrollWidth-g.clientWidth-g.scrollLeft;l=Cc(l,new D(k,g.scrollTop))}}}g=l||new D;l=Kd(a);if(k=Ed(a)){var t=new wd(k.left,k.top,k.right-k.left,k.bottom-k.top);k=Math.max(l.left,t.left);p=
Math.min(l.left+l.width,t.left+t.width);k<=p&&(q=Math.max(l.top,t.top),t=Math.min(l.top+l.height,t.top+t.height),q<=t&&(l.left=k,l.top=q,l.width=p-k,l.height=t-q))}k=Ec(a);q=Ec(c);if(k.f!=q.f){p=k.f.body;q=Pc(q.f);t=new D(0,0);var r=(r=Gc(p))?Pc(r):window;b:{try{Rb(r.parent);var u=!0;break b}catch(Wa){}u=!1}if(u){u=p;do{var Q=r==q?Fd(u):Gd(u);t.x+=Q.x;t.y+=Q.y}while(r&&r!=q&&r!=r.parent&&(u=r.frameElement)&&(r=r.parent))}u=Cc(t,Fd(p));!B||9<=Number(pc)||Mc(k.f)||(u=Cc(u,Nc(k.f)));l.left+=u.x;l.top+=
u.y}a=Kf(a,b);b=l.left;a&4?b+=l.width:a&2&&(b+=l.width/2);b=new D(b,l.top+(a&1?l.height:0));b=Cc(b,g);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var F;h&&(F=Ed(c))&&(F.top-=g.y,F.right-=g.x,F.bottom-=g.y,F.left-=g.x);return Lf(b,c,d,f,F,h,void 0)}
function Lf(a,b,c,d,e,f,h){a=a.clone();var g=Kf(b,c);c=Id(b);h=h?h.clone():c.clone();a=a.clone();h=h.clone();var k=0;if(d||0!=g)g&4?a.x-=h.width+(d?d.right:0):g&2?a.x-=h.width/2:d&&(a.x+=d.left),g&1?a.y-=h.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){d=a;g=h;k=0;65==(f&65)&&(d.x<e.left||d.x>=e.right)&&(f&=-2);132==(f&132)&&(d.y<e.top||d.y>=e.bottom)&&(f&=-5);d.x<e.left&&f&1&&(d.x=e.left,k|=1);if(f&16){var l=d.x;d.x<e.left&&(d.x=e.left,k|=4);d.x+g.width>e.right&&(g.width=Math.min(e.right-d.x,
l+g.width-e.left),g.width=Math.max(g.width,0),k|=4)}d.x+g.width>e.right&&f&1&&(d.x=Math.max(e.right-g.width,e.left),k|=1);f&2&&(k|=(d.x<e.left?16:0)|(d.x+g.width>e.right?32:0));d.y<e.top&&f&4&&(d.y=e.top,k|=2);f&32&&(l=d.y,d.y<e.top&&(d.y=e.top,k|=8),d.y+g.height>e.bottom&&(g.height=Math.min(e.bottom-d.y,l+g.height-e.top),g.height=Math.max(g.height,0),k|=8));d.y+g.height>e.bottom&&f&4&&(d.y=Math.max(e.bottom-g.height,e.top),k|=2);f&8&&(k|=(d.y<e.top?64:0)|(d.y+g.height>e.bottom?128:0));e=k}else e=
256;k=e}f=new wd(0,0,0,0);f.left=a.x;f.top=a.y;f.width=h.width;f.height=h.height;e=k;if(e&496)return e;a=new D(f.left,f.top);a instanceof D?(h=a.x,a=a.y):(h=a,a=void 0);b.style.left=Hd(h,!1);b.style.top=Hd(a,!1);h=new Dc(f.width,f.height);c==h||c&&h&&c.width==h.width&&c.height==h.height||(c=h,a=Mc(Ec(Gc(b)).f),!B||mc("10")||a&&mc("8")?(b=b.style,Xb?b.MozBoxSizing="border-box":Yb?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,0)+"px",b.height=Math.max(c.height,0)+
"px"):(h=b.style,a?(B?(a=Nd(b,"paddingLeft"),f=Nd(b,"paddingRight"),d=Nd(b,"paddingTop"),g=Nd(b,"paddingBottom"),a=new vd(d,f,g,a)):(a=Ad(b,"paddingLeft"),f=Ad(b,"paddingRight"),d=Ad(b,"paddingTop"),g=Ad(b,"paddingBottom"),a=new vd(parseFloat(d),parseFloat(f),parseFloat(g),parseFloat(a))),!B||9<=Number(pc)?(f=Ad(b,"borderLeftWidth"),d=Ad(b,"borderRightWidth"),g=Ad(b,"borderTopWidth"),b=Ad(b,"borderBottomWidth"),b=new vd(parseFloat(g),parseFloat(d),parseFloat(b),parseFloat(f))):(f=Pd(b,"borderLeft"),
d=Pd(b,"borderRight"),g=Pd(b,"borderTop"),b=Pd(b,"borderBottom"),b=new vd(g,d,b,f)),h.pixelWidth=c.width-b.left-a.left-a.right-b.right,h.pixelHeight=c.height-b.top-a.top-a.bottom-b.bottom):(h.pixelWidth=c.width,h.pixelHeight=c.height)));return e}
function Kf(a,b){return(b&8&&Ld(a)?b^4:b)&-9}
;function Mf(a){this.f=0;this.B=void 0;this.l=this.g=this.i=null;this.o=this.v=!1;if(a!=ya)try{var b=this;a.call(void 0,function(c){Nf(b,2,c)},function(c){Nf(b,3,c)})}catch(c){Nf(this,3,c)}}
function Of(){this.next=this.context=this.onRejected=this.g=this.f=null;this.i=!1}
Of.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.i=!1};
var Pf=new Oe(function(){return new Of},function(a){a.reset()});
function Qf(a,b,c){var d=Pf.get();d.g=a;d.onRejected=b;d.context=c;return d}
Mf.prototype.then=function(a,b,c){return Rf(this,Ca(a)?a:null,Ca(b)?b:null,c)};
Mf.prototype.$goog_Thenable=!0;Mf.prototype.cancel=function(a){if(0==this.f){var b=new Sf(a);We(function(){Tf(this,b)},this)}};
function Tf(a,b){if(0==a.f)if(a.i){var c=a.i;if(c.g){for(var d=0,e=null,f=null,h=c.g;h&&(h.i||(d++,h.f==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.f&&1==d?Tf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Uf(c),Vf(c,e,3,b)))}a.i=null}else Nf(a,3,b)}
function Wf(a,b){a.g||2!=a.f&&3!=a.f||Xf(a);a.l?a.l.next=b:a.g=b;a.l=b}
function Rf(a,b,c,d){var e=Qf(null,null,null);e.f=new Mf(function(f,h){e.g=b?function(g){try{var k=b.call(d,g);f(k)}catch(l){h(l)}}:f;
e.onRejected=c?function(g){try{var k=c.call(d,g);void 0===k&&g instanceof Sf?h(g):f(k)}catch(l){h(l)}}:h});
e.f.i=a;Wf(a,e);return e.f}
Mf.prototype.K=function(a){this.f=0;Nf(this,2,a)};
Mf.prototype.V=function(a){this.f=0;Nf(this,3,a)};
function Nf(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.K,f=a.V;if(d instanceof Mf){Wf(d,Qf(e||ya,f||null,a));var h=!0}else{if(d)try{var g=!!d.$goog_Thenable}catch(l){g=!1}else g=!1;if(g)d.then(e,f,a),h=!0;else{if(Da(d))try{var k=d.then;if(Ca(k)){Yf(d,k,e,f,a);h=!0;break a}}catch(l){f.call(a,l);h=!0;break a}h=!1}}}h||(a.B=c,a.f=b,a.i=null,Xf(a),3!=b||c instanceof Sf||Zf(a,c))}}
function Yf(a,b,c,d,e){function f(k){g||(g=!0,d.call(e,k))}
function h(k){g||(g=!0,c.call(e,k))}
var g=!1;try{b.call(a,h,f)}catch(k){f(k)}}
function Xf(a){a.v||(a.v=!0,We(a.F,a))}
function Uf(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.l=null);return b}
Mf.prototype.F=function(){for(var a;a=Uf(this);)Vf(this,a,this.f,this.B);this.v=!1};
function Vf(a,b,c,d){if(3==c&&b.onRejected&&!b.i)for(;a&&a.o;a=a.i)a.o=!1;if(b.f)b.f.i=null,$f(b,c,d);else try{b.i?b.g.call(b.context):$f(b,c,d)}catch(e){ag.call(null,e)}Pe(Pf,b)}
function $f(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Zf(a,b){a.o=!0;We(function(){a.o&&ag.call(null,b)})}
var ag=Qe;function Sf(a){La.call(this,a)}
y(Sf,La);Sf.prototype.name="cancel";function N(a){ef.call(this);this.B=1;this.o=[];this.v=0;this.f=[];this.g={};this.F=!!a}
y(N,ef);m=N.prototype;m.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.B;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.B=e+3;d.push(e);return e};
function bg(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(e){c||(c=!0,this.R(d),b.apply(void 0,arguments))},a)}
function cg(a,b,c){if(b=a.g[b]){var d=a.f;(b=Sa(b,function(e){return d[e+1]==c&&void 0==d[e+2]}))&&a.R(b)}}
m.R=function(a){var b=this.f[a];if(b){var c=this.g[b];if(0!=this.v)this.o.push(a),this.f[a+1]=ya;else{if(c){var d=Na(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.f[a];delete this.f[a+1];delete this.f[a+2]}}return!!b};
m.J=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.F)for(e=0;e<c.length;e++){var h=c[e];dg(this.f[h+1],this.f[h+2],d)}else{this.v++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.f[h+1].apply(this.f[h+2],d)}finally{if(this.v--,0<this.o.length&&0==this.v)for(;c=this.o.pop();)this.R(c)}}return 0!=e}return!1};
function dg(a,b,c){We(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.g[a];b&&(z(b,this.R,this),delete this.g[a])}else this.f.length=0,this.g={}};
function eg(a,b){if(b){var c=a.g[b];return c?c.length:0}c=0;for(var d in a.g)c+=eg(a,d);return c}
m.ba=function(){N.A.ba.call(this);this.clear();this.o.length=0};function fg(a){this.f=a}
fg.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,Af(b))};
fg.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
fg.prototype.remove=function(a){this.f.remove(a)};function gg(a){this.f=a}
y(gg,fg);function hg(a){this.data=a}
function ig(a){return void 0===a||a instanceof hg?a:new hg(a)}
gg.prototype.set=function(a,b){gg.A.set.call(this,a,ig(b))};
gg.prototype.g=function(a){a=gg.A.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
gg.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function jg(a){this.f=a}
y(jg,gg);jg.prototype.set=function(a,b,c){if(b=ig(b)){if(c){if(c<Ka()){jg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ka()}jg.A.set.call(this,a,b)};
jg.prototype.g=function(a){var b=jg.A.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ka()||c&&c>Ka())jg.prototype.remove.call(this,a);else return b}};function kg(){}
;function lg(){}
y(lg,kg);lg.prototype.clear=function(){var a=vf(this.L(!0)),b=this;z(a,function(c){b.remove(c)})};function mg(a){this.f=a}
y(mg,lg);m=mg.prototype;m.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeItem(a)};
m.L=function(a){var b=0,c=this.f,d=new sf;d.next=function(){if(b>=c.length)throw rf;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.f.clear()};
m.key=function(a){return this.f.key(a)};function ng(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
y(ng,mg);function og(a,b){this.g=a;this.f=null;if(B&&!(9<=Number(pc))){pg||(pg=new wf);this.f=pg.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),pg.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
y(og,lg);var qg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},pg=null;function rg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return qg[b]})}
m=og.prototype;m.isAvailable=function(){return!!this.f};
m.set=function(a,b){this.f.setAttribute(rg(a),b);sg(this)};
m.get=function(a){a=this.f.getAttribute(rg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeAttribute(rg(a));sg(this)};
m.L=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new sf;d.next=function(){if(b>=c.length)throw rf;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);sg(this)};
function sg(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function tg(a,b){this.g=a;this.f=b+"::"}
y(tg,lg);tg.prototype.set=function(a,b){this.g.set(this.f+a,b)};
tg.prototype.get=function(a){return this.g.get(this.f+a)};
tg.prototype.remove=function(a){this.g.remove(this.f+a)};
tg.prototype.L=function(a){var b=this.g.L(!0),c=this,d=new sf;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};var ug=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};x("yt.config_",ug);function vg(a){var b=arguments;1<b.length?ug[b[0]]=b[1]:1===b.length&&Object.assign(ug,b[0])}
function O(a,b){return a in ug?ug[a]:b}
function wg(a){return O(a,void 0)}
;var xg=[];function yg(a){xg.forEach(function(b){return b(a)})}
function zg(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ag(b),yg(b)}}:a}
function Ag(a){var b=v("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),vg("ERRORS",b))}
function Bg(a){var b=v("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),vg("ERRORS",b))}
;function P(a,b){Ca(a)&&(a=zg(a));return window.setTimeout(a,b)}
function Cg(a){window.clearTimeout(a)}
;var Dg=v("ytPubsubPubsubInstance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.R;N.prototype.publish=N.prototype.J;N.prototype.clear=N.prototype.clear;x("ytPubsubPubsubInstance",Dg);var Eg=v("ytPubsubPubsubSubscribedKeys")||{};x("ytPubsubPubsubSubscribedKeys",Eg);var Fg=v("ytPubsubPubsubTopicToKeys")||{};x("ytPubsubPubsubTopicToKeys",Fg);var Gg=v("ytPubsubPubsubIsSynchronous")||{};x("ytPubsubPubsubIsSynchronous",Gg);
function Hg(a,b,c){var d=Ig();if(d){var e=d.subscribe(a,function(){var f=arguments;var h=function(){Eg[e]&&b.apply(c||window,f)};
try{Gg[a]?h():P(h,0)}catch(g){Ag(g)}},c);
Eg[e]=!0;Fg[a]||(Fg[a]=[]);Fg[a].push(e);return e}return 0}
function Jg(a){var b=Ig();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),z(a,function(c){b.unsubscribeByKey(c);delete Eg[c]}))}
function R(a,b){var c=Ig();return c?c.publish.apply(c,arguments):!1}
function Kg(a,b){Gg[a]=!0;var c=Ig();c&&c.publish.apply(c,arguments);Gg[a]=!1}
function Ig(){return v("ytPubsubPubsubInstance")}
;function Lg(a,b,c){a&&(a.dataset?a.dataset[Mg(b)]=String(c):a.setAttribute("data-"+b,c))}
function Ng(a,b){return a?a.dataset?a.dataset[Mg(b)]:a.getAttribute("data-"+b):null}
function Og(a,b){a&&(a.dataset?delete a.dataset[Mg(b)]:a.removeAttribute("data-"+b))}
var Pg={};function Mg(a){return Pg[a]||(Pg[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;function S(a,b){this.version=a;this.args=b}
;function T(a,b){this.topic=a;this.f=b}
T.prototype.toString=function(){return this.topic};function Qg(){}
function Rg(){}
Qg.prototype=ca(Rg.prototype);Qg.prototype.constructor=Qg;if(ja)ja(Qg,Rg);else for(var Sg in Rg)if("prototype"!=Sg)if(Object.defineProperties){var Tg=Object.getOwnPropertyDescriptor(Rg,Sg);Tg&&Object.defineProperty(Qg,Sg,Tg)}else Qg[Sg]=Rg[Sg];Qg.A=Rg.prototype;function Ug(a,b,c){isNaN(c)&&(c=void 0);var d=v("yt.scheduler.instance.addJob");d?d(a,b,c):void 0===c?a():P(a,c||0)}
Qg.prototype.start=function(){var a=v("yt.scheduler.instance.start");a&&a()};
za(Qg);Qg.w();var Vg=v("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.R;N.prototype.publish=N.prototype.J;N.prototype.clear=N.prototype.clear;x("ytPubsub2Pubsub2Instance",Vg);var Wg=v("ytPubsub2Pubsub2SubscribedKeys")||{};x("ytPubsub2Pubsub2SubscribedKeys",Wg);var Xg=v("ytPubsub2Pubsub2TopicToKeys")||{};x("ytPubsub2Pubsub2TopicToKeys",Xg);var Yg=v("ytPubsub2Pubsub2IsAsync")||{};x("ytPubsub2Pubsub2IsAsync",Yg);
x("ytPubsub2Pubsub2SkipSubKey",null);function U(a,b){var c=Zg();c&&c.publish.call(c,a.toString(),a,b)}
function $g(a,b,c){var d=Zg();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,h){var g=v("ytPubsub2Pubsub2SkipSubKey");g&&g==e||(g=function(){if(Wg[e])try{if(h&&a instanceof T&&a!=f)try{var k=a.f,l=h;if(!l.args||!l.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!k.M){var p=new k;k.M=p.version}var q=k.M}catch(t){}if(!q||l.version!=q)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{h=Reflect.construct(k,Va(l.args))}catch(t){throw t.message=
"yt.pubsub2.Data.deserialize(): "+t.message,t;}}catch(t){throw t.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+t.message,t;}b.call(c||window,h)}catch(t){Ag(t)}},Yg[a.toString()]?v("yt.scheduler.instance")?Ug(g,1,void 0):P(g,0):g())});
Wg[e]=!0;Xg[a.toString()]||(Xg[a.toString()]=[]);Xg[a.toString()].push(e);return e}
function ah(a){var b=Zg();b&&("number"===typeof a&&(a=[a]),z(a,function(c){b.unsubscribeByKey(c);delete Wg[c]}))}
function Zg(){return v("ytPubsub2Pubsub2Instance")}
;var bh=0;function ch(a){var b=a.__yt_uid_key;b||(b=dh(),a.__yt_uid_key=b);return b}
function eh(a,b){a=E(a);b=E(b);return!!gd(a,function(c){return c===b},!0,void 0)}
function fh(a,b){var c=Ic(document,a,null,b);return c.length?c[0]:null}
function gh(){var a=document,b;Ra(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function hh(){mf(document.body,"hide-players",!1);z(Hc("preserve-players"),function(a){M(a,"preserve-players")})}
var dh=v("ytDomDomGetNextId")||function(){return++bh};
x("ytDomDomGetNextId",dh);var ih={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function jh(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in ih||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
jh.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
jh.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
jh.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var kb=v("ytEventsEventsListeners")||{};x("ytEventsEventsListeners",kb);var kh=v("ytEventsEventsCounter")||{count:0};x("ytEventsEventsCounter",kh);
function lh(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return jb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,h=Da(e[4])&&Da(d)&&mb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||h)})}
function V(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=lh(a,b,c,d);if(e)return e;e=++kh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var h=f?function(g){g=new jh(g);if(!gd(g.relatedTarget,function(k){return k==a},!0))return g.currentTarget=a,g.type=b,c.call(a,g)}:function(g){g=new jh(g);
g.currentTarget=a;return c.call(a,g)};
h=zg(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),mh()||"boolean"===typeof d?a.addEventListener(b,h,d):a.addEventListener(b,h,!!d.capture)):a.attachEvent("on"+b,h);kb[e]=[a,b,c,h,d];return e}
function nh(a,b,c){var d=a||document;return V(d,"click",function(e){var f=gd(e.target,function(h){return h===d||c(h)},!0);
f&&f!==d&&!f.disabled&&(e.currentTarget=f,b.call(f,e))})}
function oh(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var mh=ab(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function ph(a,b,c){return nh(a,b,function(d){return K(d,c)})}
function qh(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function W(a){a&&("string"==typeof a&&(a=[a]),z(a,function(b){if(b in kb){var c=kb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?mh()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete kb[b]}}))}
;var rh={},sh="ontouchstart"in document;function th(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return gd(c,function(e){return K(e,b)},!0,d)}
function uh(a){var b="mouseover"==a.type&&"mouseenter"in rh||"mouseout"==a.type&&"mouseleave"in rh,c=a.type in rh||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=rh[b];for(var d in c.g){var e=th(b,d,a.target);e&&!gd(a.relatedTarget,function(f){return f==e},!0)&&c.J(d,e,b,a)}}if(b=rh[a.type])for(d in b.g)(e=th(a.type,d,a.target))&&b.J(d,e,a.type,a)}}
V(document,"blur",uh,!0);V(document,"change",uh,!0);V(document,"click",uh);V(document,"focus",uh,!0);V(document,"mouseover",uh);V(document,"mouseout",uh);V(document,"mousedown",uh);V(document,"keydown",uh);V(document,"keyup",uh);V(document,"keypress",uh);V(document,"cut",uh);V(document,"paste",uh);sh&&(V(document,"touchstart",uh),V(document,"touchend",uh),V(document,"touchcancel",uh));function vh(a){this.o=a;this.B={};this.K=[];this.F=[]}
m=vh.prototype;m.D=function(a){return H(a,X(this))};
function X(a,b){return"yt-uix"+(a.o?"-"+a.o:"")+(b?"-"+b:"")}
m.unregister=function(){Jg(this.K);this.K.length=0;ah(this.F);this.F.length=0};
m.init=ya;m.dispose=ya;function wh(a,b,c){a.K.push(Hg(b,c,a))}
function xh(a,b,c){a.F.push($g(b,c,a))}
function Y(a,b,c,d){d=X(a,d);var e=w(c,a);b in rh||(rh[b]=new N);rh[b].subscribe(d,e);a.B[c]=e}
function Z(a,b,c,d){if(b in rh){var e=rh[b];cg(e,X(a,d),a.B[c]);0>=eg(e)&&(e.dispose(),delete rh[b])}delete a.B[c]}
m.P=function(a,b,c){var d=this.j(a,b);if(d&&(d=v(d))){var e=Za(arguments,2);Ya(e,0,0,a);d.apply(null,e)}};
m.j=function(a,b){return Ng(a,b)};
function yh(a,b){Lg(a,"tooltip-text",b)}
;var zh=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};x("yt.uix.widgets_",zh);function Ah(a){var b=[];hb(a,function(c,d){var e=encodeURIComponent(String(d)),f;"array"==Aa(c)?f=c:f=[c];z(f,function(h){""==h?b.push(e):b.push(e+"="+encodeURIComponent(String(h)))})});
return b.join("&")}
function Bh(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),h=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?"array"==Aa(b[f])?Xa(b[f],h):b[f]=[b[f],h]:b[f]=h}catch(k){if("q"!=e[0]){var g=Error("Error decoding URL component");g.params={key:e[0],value:e[1]};Ag(g)}}}return b}
function Ch(a,b){return Dh(a,b||{},!0)}
function Dh(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Bh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return pd(a,e)+d}
;function Eh(a){a=void 0===a?{}:a;Ca(a)&&(a={callback:a});if(a.gapiHintOverride||O("GAPI_HINT_OVERRIDE")){var b=document.location.href;-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=Bh(1<b.length?b[1]:b[0])):b={};(b=b.gapi_jsh)&&pb(a,{_c:{jsl:{h:b}}})}Ke("gapi.iframes:gapi.iframes.style.common",a)}
;function Fh(){return v("gapi.iframes.getContext")()}
;function Gh(a){S.call(this,1,arguments);this.f=a}
y(Gh,S);function Hh(a){S.call(this,1,arguments);this.f=a}
y(Hh,S);function Ih(a,b,c){S.call(this,3,arguments);this.i=a;this.g=b;this.f=null!=c?!!c:null}
y(Ih,S);function Jh(a,b,c,d,e,f){S.call(this,2,arguments);this.g=a;this.f=b;this.l=c||null;this.i=d||null;this.source=e||null;this.params=f||null}
y(Jh,S);function Kh(a,b,c){S.call(this,1,arguments);this.f=a;this.g=b}
y(Kh,S);function Lh(a,b,c,d,e,f,h){S.call(this,1,arguments);this.g=a;this.o=b;this.f=c;this.v=d||null;this.l=e||null;this.i=f||null;this.source=h||null}
y(Lh,S);
var Mh=new T("subscription-batch-subscribe",Gh),Nh=new T("subscription-batch-unsubscribe",Gh),Oh=new T("subscription-subscribe",Jh),Ph=new T("subscription-subscribe-loading",Hh),Qh=new T("subscription-subscribe-loaded",Hh),Rh=new T("subscription-subscribe-success",Kh),Sh=new T("subscription-subscribe-external",Jh),Th=new T("subscription-unsubscribe",Lh),Uh=new T("subscription-unsubscirbe-loading",Hh),Vh=new T("subscription-unsubscribe-loaded",Hh),Wh=new T("subscription-unsubscribe-success",Hh),Xh=
new T("subscription-external-unsubscribe",Lh),Yh=new T("subscription-enable-ypc",Hh),Zh=new T("subscription-disable-ypc",Hh),$h=new T("subscription-prefs",Ih),ai=new T("subscription-prefs-success",Ih),bi=new T("subscription-prefs-failure",Ih);function ci(){var a=void 0===a?!1:a;var b=gh();if(a)for(;b&&b.shadowRoot;)b=b.shadowRoot.fullscreenElement;return b?b:null}
;function di(a,b){(a=E(a))&&a.style&&(a.style.display=b?"":"none",mf(a,"hid",!b))}
function ei(a){return(a=E(a))?"none"!=a.style.display&&!K(a,"hid"):!1}
function fi(a){z(arguments,function(b){!Ba(b)||b instanceof Element?di(b,!0):z(b,function(c){fi(c)})})}
function gi(a){z(arguments,function(b){!Ba(b)||b instanceof Element?di(b,!1):z(b,function(c){gi(c)})})}
;function hi(){vh.call(this,"tooltip");this.f=0;this.g={}}
y(hi,vh);za(hi);m=hi.prototype;m.register=function(){Y(this,"mouseover",this.Y);Y(this,"mouseout",this.N);Y(this,"focus",this.ma);Y(this,"blur",this.ha);Y(this,"click",this.N);Y(this,"touchstart",this.Ia);Y(this,"touchend",this.Z);Y(this,"touchcancel",this.Z)};
m.unregister=function(){Z(this,"mouseover",this.Y);Z(this,"mouseout",this.N);Z(this,"focus",this.ma);Z(this,"blur",this.ha);Z(this,"click",this.N);Z(this,"touchstart",this.Ia);Z(this,"touchend",this.Z);Z(this,"touchcancel",this.Z);this.dispose();hi.A.unregister.call(this)};
m.dispose=function(){for(var a in this.g)this.N(this.g[a]);this.g={}};
m.Y=function(a){if(!(this.f&&1E3>Ka()-this.f)){var b=parseInt(this.j(a,"tooltip-hide-timer"),10);b&&(Og(a,"tooltip-hide-timer"),Cg(b));b=w(function(){ii(this,a);Og(a,"tooltip-show-timer")},this);
var c=parseInt(this.j(a,"tooltip-show-delay"),10)||0;b=P(b,c);Lg(a,"tooltip-show-timer",b.toString());a.title&&(yh(a,ji(this,a)),a.title="");b=Ea(a).toString();this.g[b]=a}};
m.N=function(a){var b=parseInt(this.j(a,"tooltip-show-timer"),10);b&&(Cg(b),Og(a,"tooltip-show-timer"));b=w(function(){if(a){var c=E(ki(this,a));c&&(li(c),Rc(c),Og(a,"content-id"));c=E(ki(this,a,"arialabel"));Rc(c)}Og(a,"tooltip-hide-timer")},this);
b=P(b,50);Lg(a,"tooltip-hide-timer",b.toString());if(b=this.j(a,"tooltip-text"))a.title=b;b=Ea(a).toString();delete this.g[b]};
m.ma=function(a,b){this.f=0;this.Y(a,b)};
m.ha=function(a){this.f=0;this.N(a)};
m.Ia=function(a,b,c){c.changedTouches&&(this.f=0,(a=th(b,X(this),c.changedTouches[0].target))&&this.Y(a,b))};
m.Z=function(a,b,c){c.changedTouches&&(this.f=Ka(),(a=th(b,X(this),c.changedTouches[0].target))&&this.N(a))};
function mi(a,b,c){yh(b,c);a=a.j(b,"content-id");(a=E(a))&&Vc(a,c)}
function ji(a,b){return a.j(b,"tooltip-text")||b.title}
function ii(a,b){if(b){var c=ji(a,b);if(c){var d=E(ki(a,b));if(!d){d=document.createElement("div");d.id=ki(a,b);jf(d,X(a,"tip"));var e=document.createElement("div");jf(e,X(a,"tip-body"));var f=document.createElement("div");jf(f,X(a,"tip-arrow"));var h=document.createElement("div");h.setAttribute("aria-hidden","true");jf(h,X(a,"tip-content"));var g=ni(a,b),k=ki(a,b,"content");h.id=k;Lg(b,"content-id",k);e.appendChild(h);g&&d.appendChild(g);d.appendChild(e);d.appendChild(f);var l=dd(b);k=ki(a,b,"arialabel");
f=document.createElement("div");L(f,X(a,"arialabel"));f.id=k;l=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+l:l+" "+c;Vc(f,l);b.setAttribute("aria-labelledby",k);k=ci()||document.body;k.appendChild(f);k.appendChild(d);mi(a,b,c);(c=parseInt(a.j(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",L(h,X(a,"normal-wrap")));h=K(b,X(a,"reverse"));oi(a,b,d,e,g,h)||oi(a,b,d,e,g,!h);var p=X(a,"tip-visible");P(function(){L(d,p)},0)}}}}
function oi(a,b,c,d,e,f){mf(c,X(a,"tip-reverse"),f);var h=0;f&&(h=1);var g=Id(b);f=new D((g.width-10)/2,f?g.height:0);var k=Fd(b);Lf(new D(k.x+f.x,k.y+f.y),c,h);f=Lc(window);if(1==c.nodeType)var l=Gd(c);else c=c.changedTouches?c.changedTouches[0]:c,l=new D(c.clientX,c.clientY);c=Id(d);var p=Math.floor(c.width/2);h=!!(f.height<l.y+g.height);g=!!(l.y<g.height);k=!!(l.x<p);f=!!(f.width<l.x+p);l=(c.width+3)/-2- -5;a=a.j(b,"force-tooltip-direction");if("left"==a||k)l=-5;else if("right"==a||f)l=20-c.width-
3;a=Math.floor(l)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(h||g)}
function ki(a,b,c){a=X(a)+ch(b);c&&(a+="-"+c);return a}
function ni(a,b){var c=null;$b&&K(b,X(a,"masked"))&&((c=E("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),fi(c)):(c=Qc(document,"IFRAME"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",jf(c,X(a,"tip-mask"))));return c}
function li(a){var b=E("yt-uix-tooltip-shared-mask"),c=b&&gd(b,function(d){return d==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),gi(b),document.body.appendChild(b))}
;function pi(a){var b=qi();if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=Hg("LOGGED_IN",function(d){Jg(O("LOGGED_IN_PUBSUB_KEY",void 0));vg("LOGGED_IN",!0);a(d)});
vg("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
function qi(){var a=document.location.protocol+"//"+document.domain+"/post_login";a=od(a,"mode","subscribe");a=od("/signin?context=popup","next",a);return a=od(a,"feature","sub_button")}
x("yt.pubsub.publish",R);function ri(a){a=si(a);return"string"===typeof a&&"false"===a?!1:!!a}
function ti(a,b){var c=si(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function si(a){var b=O("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:O("EXPERIMENT_FLAGS",{})[a]}
;var ui=window,vi=ui.ytcsi&&ui.ytcsi.now?ui.ytcsi.now:ui.performance&&ui.performance.timing&&ui.performance.now?function(){return ui.performance.timing.navigationStart+ui.performance.now()}:function(){return(new Date).getTime()};var wi=ti("initial_gel_batch_timeout",1E3),xi=Math.pow(2,16)-1,yi=null,zi=0,Ai={log_event:"events",log_interaction:"interactions"},Bi=Object.create(null);Bi.log_event="GENERIC_EVENT_LOGGING";Bi.log_interaction="INTERACTION_LOGGING";var Ci=new Set(["log_event"]),Di={},Ei=0,Fi=0,Gi=0,Hi=!0,Ii=v("ytLoggingTransportLogPayloadsQueue_")||{};x("ytLoggingTransportLogPayloadsQueue_",Ii);var Ji=v("ytLoggingTransportTokensToCttTargetIds_")||{};x("ytLoggingTransportTokensToCttTargetIds_",Ji);
var Ki=v("ytLoggingTransportDispatchedStats_")||{};x("ytLoggingTransportDispatchedStats_",Ki);x("ytytLoggingTransportCapturedTime_",v("ytLoggingTransportCapturedTime_")||{});function Li(){Cg(Ei);Cg(Fi);Fi=0;if(!lb(Ii)){for(var a in Ii){var b=Di[a];b&&b.isReady()&&(Mi(a,b),delete Ii[a],Hi=!1)}lb(Ii)||Ni()}}
function Ni(){ri("web_gel_timeout_cap")&&!Fi&&(Fi=P(Li,6E4));Cg(Ei);var a=O("LOGGING_BATCH_TIMEOUT",ti("web_gel_debounce_ms",1E4));ri("shorten_initial_gel_batch_timeout")&&Hi&&(a=wi);Ei=P(Li,a)}
function Oi(a,b){b=void 0===b?"":b;Ii[a]=Ii[a]||{};Ii[a][b]=Ii[a][b]||[];return Ii[a][b]}
function Mi(a,b){var c=Ai[a],d=Ki[a]||{};Ki[a]=d;var e=Math.round(vi());for(q in Ii[a]){var f=nb,h=b.f||Pi();h={client:{hl:h.hb,gl:h.gb,clientName:h.fb,clientVersion:h.innertubeContextClientVersion,configInfo:h.eb}};var g=window.devicePixelRatio;g&&1!=g&&(h.client.screenDensityFloat=String(g));g=O("EXPERIMENTS_TOKEN","");""!==g&&(h.client.experimentsToken=g);var k=g=void 0,l=[],p=O("EXPERIMENTS_FORCED_FLAGS",{});for(k in p)l.push({key:k,value:String(p[k])});k=O("EXPERIMENT_FLAGS",{});for(g in k)g.startsWith("force_")&&
void 0===p[g]&&l.push({key:g,value:String(k[g])});g=l;0<g.length&&(h.request={internalExperimentFlags:g});O("DELEGATED_SESSION_ID")&&!ri("pageid_as_header_web")&&(h.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});f=f({context:h});f[c]=Oi(a,q);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(h=Ji[q])a:{l=q;if(h.videoId)g="VIDEO";else if(h.playlistId)g="PLAYLIST";else break a;f.credentialTransferTokenTargetId=h;f.context=f.context||{};f.context.user=f.context.user||
{};f.context.user.credentialTransferTokens=[{token:l,scope:g}]}delete Ji[q];f.requestTimeMs=e;ri("unsplit_gel_payloads_in_logs")&&(f.unsplitGelPayloadsInLogs=!0);if(h=wg("EVENT_ID"))g=O("BATCH_CLIENT_COUNTER",void 0)||0,!g&&ri("web_client_counter_random_seed")&&(g=Math.floor(Math.random()*xi/2)),g++,g>xi&&(g=1),vg("BATCH_CLIENT_COUNTER",g),h={serializedEventId:h,clientCounter:g},f.serializedClientEventId=h,yi&&zi&&ri("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:yi,roundtripMs:zi}),
yi=h,zi=0;Qi(b,a,f,{retry:Ci.has(a),onSuccess:w(Ri,this,vi())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var q=d.diffCount||0;d.averageTimeBetweenDispatchesMs=q?(d.averageTimeBetweenDispatchesMs*q+c)/(q+1):c;d.diffCount=q+1}d.previousDispatchMs=e}
function Ri(a){zi=Math.round(vi()-a)}
;var Si=v("ytLoggingGelSequenceIdObj_")||{};x("ytLoggingGelSequenceIdObj_",Si);function Ti(a){var b=Ui;a=void 0===a?v("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(Vi(b),Wi(b));b.ca_type="image";a&&(b.bid=a);return b}
function Vi(a){var b={};b.dt=Qd;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?C:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!C.navigator&&"unknown"!==typeof C.navigator.javaEnabled&&!!C.navigator.javaEnabled&&C.navigator.javaEnabled();C.screen&&(b.u_h=C.screen.height,b.u_w=C.screen.width,b.u_ah=C.screen.availHeight,b.u_aw=C.screen.availWidth,b.u_cd=C.screen.colorDepth);
C.navigator&&C.navigator.plugins&&(b.u_nplug=C.navigator.plugins.length);C.navigator&&C.navigator.mimeTypes&&(b.u_nmime=C.navigator.mimeTypes.length);return b}
function Wi(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(l){}try{var e=b.outerWidth;var f=b.outerHeight}catch(l){}try{var h=b.innerWidth;var g=b.innerHeight}catch(l){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,h,g];c=a.f.top;try{var k=Lc(c||window).round()}catch(l){k=new Dc(-12245933,-12245933)}c=k;k={};d=new Me;n.SVGElement&&n.document.createElementNS&&d.set(0);e=ud();e["allow-top-navigation-by-user-activation"]&&d.set(1);e["allow-popups-to-escape-sandbox"]&&
d.set(2);n.crypto&&n.crypto.subtle&&d.set(3);n.TextDecoder&&n.TextEncoder&&d.set(4);d=Ne(d);k.bc=d;k.bih=c.height;k.biw=c.width;k.brdim=b.join();a=a.g;return k.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,k.wgl=!!C.WebGLRenderingContext,k}
var Ui=new function(){var a=window.document;this.f=window;this.g=a};
x("yt.ads_.signals_.getAdSignalsString",function(a){return Ah(Ti(a))});Ka();var Xi=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Yi(){if(!Xi)return null;var a=Xi();return"open"in a?a:null}
;var Zi={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},$i="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
aj=!1;
function bj(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=id(a)[1]||null,e=jd(id(a)[3]||null);d&&e?(d=c,c=id(a),d=id(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?jd(id(c)[3]||null)==e&&(Number(id(c)[4]||null)||null)==(Number(id(a)[4]||null)||null):!0;d=ri("web_ajax_ignore_global_headers_if_set");for(var f in Zi)e=O(Zi[f]),!e||!c&&!cj(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||cj(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||cj(a,"X-YouTube-Time-Zone"))&&
(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||cj(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=Ah(Ti(void 0));return b}
function dj(a){var b=window.location.search,c=jd(id(a)[3]||null),d=jd(id(a)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Bh(b),f={};z($i,function(h){e[h]&&(f[h]=e[h])});
return Dh(a,f||{},!1)}
function cj(a,b){var c=O("CORS_HEADER_WHITELIST")||{},d=jd(id(a)[3]||null);return d?(c=c[d])?Ta(c,b):!1:!0}
function ej(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=fj(a,b);var d=gj(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(h){if(!e){e=!0;f&&Cg(f);var g=h.ok,k=function(l){l=l||{};var p=b.context||n;g?b.onSuccess&&b.onSuccess.call(p,l,h):b.onError&&b.onError.call(p,l,h);b.U&&b.U.call(p,l,h)};
"JSON"==(b.format||"JSON")&&(g||400<=h.status&&500>h.status)?h.json().then(k,function(){k(null)}):k(null)}});
b.tb&&0<b.timeout&&(f=P(function(){e||(e=!0,Cg(f))},b.timeout))}else hj(a,b)}
function hj(a,b){var c=b.format||"JSON";a=fj(a,b);var d=gj(a,b),e=!1,f,h=ij(a,function(g){if(!e){e=!0;f&&Cg(f);a:switch(g&&"status"in g?g.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var k=!0;break a;default:k=!1}var l=null,p=400<=g.status&&500>g.status,q=500<=g.status&&600>g.status;if(k||p||q)l=jj(c,g,b.Pb);if(k)a:if(g&&204==g.status)k=!0;else{switch(c){case "XML":k=0==parseInt(l&&l.return_code,10);break a;case "RAW":k=!0;break a}k=!!l}l=l||{};p=b.context||n;
k?b.onSuccess&&b.onSuccess.call(p,g,l):b.onError&&b.onError.call(p,g,l);b.U&&b.U.call(p,g,l)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Ca&&0<b.timeout&&(f=P(function(){e||(e=!0,h.abort(),Cg(f))},b.timeout))}
function fj(a,b){b.Tb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=wg("XSRF_FIELD_NAME"),d=b.Ja;d&&(d[c]&&delete d[c],a=Ch(a,d));return a}
function gj(a,b){var c=wg("XSRF_FIELD_NAME"),d=wg("XSRF_TOKEN"),e=b.postBody||"",f=b.H,h=wg("XSRF_FIELD_NAME"),g;b.headers&&(g=b.headers["Content-Type"]);b.Sb||jd(id(a)[3]||null)&&!b.withCredentials&&jd(id(a)[3]||null)!=document.location.hostname||"POST"!=b.method||g&&"application/x-www-form-urlencoded"!=g||b.H&&b.H[h]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Bh(e),pb(e,f),e=b.Da&&"JSON"==b.Da?JSON.stringify(e):nd(e));f=e||f&&!lb(f);!aj&&f&&"POST"!=b.method&&(aj=!0,Ag(Error("AJAX request with postData should use POST")));
return e}
function jj(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?kj(b):null)d={},z(b.getElementsByTagName("*"),function(e){d[e.tagName]=lj(e)})}c&&mj(d);
return d}
function mj(a){if(Da(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Ib(a[b]);a[c]=d}else mj(a[b])}}
function kj(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function lj(a){var b="";z(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ij(a,b,c,d,e,f,h){function g(){4==(k&&"readyState"in k?k.readyState:0)&&b&&zg(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Yi();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",g,!1):k.onreadystatechange=g;ri("debug_forward_web_query_parameters")&&(a=dj(a));k.open(c,a,!0);f&&(k.responseType=f);h&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=bj(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function nj(){return"INNERTUBE_API_KEY"in ug&&"INNERTUBE_API_VERSION"in ug}
function Pi(){return{innertubeApiKey:wg("INNERTUBE_API_KEY"),innertubeApiVersion:wg("INNERTUBE_API_VERSION"),eb:O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),fb:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:wg("INNERTUBE_CONTEXT_CLIENT_VERSION"),hb:wg("INNERTUBE_CONTEXT_HL"),gb:wg("INNERTUBE_CONTEXT_GL"),ib:wg("INNERTUBE_HOST_OVERRIDE")||"",jb:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function oj(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||O("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Ob||O("AUTHORIZATION"))||(a?b="Bearer "+v("gapi.auth.getToken")().Nb:b=fe([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=O("SESSION_INDEX",0),ri("pageid_as_header_web")&&(d["X-Goog-PageId"]=O("DELEGATED_SESSION_ID")));return d}
function pj(a){a=Object.assign({},a);delete a.Authorization;var b=fe();if(b){var c=new cf;c.update(wg("INNERTUBE_API_KEY"));c.update(b);b=c.digest();c=3;void 0===c&&(c=0);if(!xc){xc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var h=d.concat(e[f].split(""));wc[f]=h;for(var g=0;g<h.length;g++){var k=h[g];void 0===xc[k]&&(xc[k]=g)}}}c=wc[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],p=(f=e+1<b.length)?b[e+1]:0;k=(h=
e+2<b.length)?b[e+2]:0;g=l>>2;l=(l&3)<<4|p>>4;p=(p&15)<<2|k>>6;k&=63;h||(k=64,f||(p=64));d.push(c[g],c[l],c[p]||"",c[k]||"")}a.hash=d.join("")}return a}
;function qj(){var a=new ng;(a=a.isAvailable()?new tg(a,"yt.innertube"):null)||(a=new og("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new jg(a):null;this.g=document.domain||window.location.hostname}
qj.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,Ka()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Af(b))}catch(f){return}else e=escape(b);b=this.g;zc.set(""+a,e,{sa:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
qj.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=zc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
qj.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;zc.remove(""+a,"/",void 0===b?"youtube.com":b)};var rj=new qj;function sj(a,b,c,d){if(d)return null;d=rj.get("nextId",!0)||1;var e=rj.get("requests",!0)||{};e[d]={method:a,request:b,authState:pj(c),requestTime:Math.round(vi())};rj.set("nextId",d+1,86400,!0);rj.set("requests",e,86400,!0);return d}
function tj(a){var b=rj.get("requests",!0)||{};delete b[a];rj.set("requests",b,86400,!0)}
function uj(a){var b=rj.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(vi())-d.requestTime)){var e=d.authState,f=pj(oj(!1));mb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(vi())),Qi(a,d.method,e,{}));delete b[c]}}rj.set("requests",b,86400,!0)}}
;function vj(a){var b=this;this.f=null;a?this.f=a:ri("delay_gel_until_config_ready")?nj()&&(this.f=Pi()):this.f=Pi();Ug(function(){uj(b)},0,5E3)}
vj.prototype.isReady=function(){!this.f&&nj()&&(this.f=Pi());return!!this.f};
function Qi(a,b,c,d){!O("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Bg(Error("Missing VISITOR_DATA when sending innertube request."));var e={headers:{"Content-Type":"application/json"},method:"POST",H:c,Da:"JSON",Ca:function(){},
tb:d.Ca,onSuccess:function(t,r){if(d.onSuccess)d.onSuccess(r)},
za:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,r){if(d.onError)d.onError(r)},
Ub:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0},f="",h=a.f.ib;h&&(f=h);h=a.f.jb||!1;var g=oj(h,f,d);Object.assign(e.headers,g);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=Ch(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),l;if(d.retry&&ri("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=sj(b,c,g,h))){var p=e.onSuccess,q=e.za;e.onSuccess=function(t,r){tj(l);p(t,r)};
c.za=function(t,r){tj(l);q(t,r)}}try{ri("use_fetch_for_op_xhr")?ej(k,e):(e.method="POST",e.H||(e.H={}),hj(k,e))}catch(t){if("InvalidAccessError"==t)l&&(tj(l),l=0),Bg(Error("An extension is blocking network request."));
else throw t;}l&&Ug(function(){uj(a)},0,5E3)}
;var wj=Ka().toString();var xj;
if(!(xj=v("ytLoggingTimeDocumentNonce_"))){var yj;a:{if(window.crypto&&window.crypto.getRandomValues)try{var zj=Array(16),Aj=new Uint8Array(16);window.crypto.getRandomValues(Aj);for(var Bj=0;Bj<zj.length;Bj++)zj[Bj]=Aj[Bj];yj=zj;break a}catch(a){}for(var Cj=Array(16),Dj=0;16>Dj;Dj++){for(var Ej=Ka(),Fj=0;Fj<Ej%23;Fj++)Cj[Dj]=Math.random();Cj[Dj]=Math.floor(256*Math.random())}if(wj)for(var Gj=1,Hj=0;Hj<wj.length;Hj++)Cj[Gj%16]=Cj[Gj%16]^Cj[(Gj-1)%16]/4^wj.charCodeAt(Hj),Gj++;yj=Cj}for(var Ij=yj,Jj=
[],Kj=0;Kj<Ij.length;Kj++)Jj.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Ij[Kj]&63));xj=Jj.join("")}var Lj=xj;x("ytLoggingTimeDocumentNonce_",Lj);function Mj(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Nj(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
x("yt_logging_screen.getRootVeType",function(a){return O(Nj(void 0===a?0:a),void 0)});
function Oj(){var a=O("csn-to-ctt-auth-info");a||(a={},vg("csn-to-ctt-auth-info",a));return a}
function Pj(a){a=void 0===a?0:a;var b=O(Mj(a));if(!b&&!O("USE_CSN_FALLBACK",!0))return null;b||0!=a||(ri("kevlar_client_side_screens")||ri("c3_client_side_screens")?b="UNDEFINED_CSN":b=O("EVENT_ID"));return b?b:null}
x("yt_logging_screen.getCurrentCsn",Pj);function Qj(a,b,c){var d=Oj();(c=Pj(c))&&delete d[c];b&&(d[a]=b)}
x("yt_logging_screen.getCttAuthInfo",function(a){return Oj()[a]});
x("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==O(Mj(c))||b!==O(Nj(c)))Qj(a,d,c),vg(Mj(c),a),vg(Nj(c),b),0==c&&(b=function(){setTimeout(function(){if(a){var e={clientDocumentNonce:Lj,clientScreenNonce:a};var f=void 0===f?{}:f;var h={};h.eventTimeMs=Math.round(f.timestamp||vi());h.foregroundHeartbeatScreenAssociated=e;e=String;if(f.timestamp)var g=-1;else g=v("_lact",window),g=null==g?-1:Math.max(Ka()-g,0);h.context={lastActivityMs:e(g)};ri("log_sequence_info_on_gel_web")&&
f.Fa&&(e=h.context,g=f.Fa,Si[g]=g in Si?Si[g]+1:0,e.sequence={index:Si[g],groupKey:g},f.Rb&&delete Si[f.Fa]);(f=f.Qb)?(e={},f.videoId?e.videoId=f.videoId:f.playlistId&&(e.playlistId=f.playlistId),Ji[f.token]=e,f=Oi("log_event",f.token)):f=Oi("log_event");f.push(h);vj&&(Di.log_event=new vj);h=ti("web_logging_max_batch")||100;e=vi();f.length>=h?Li():10<=e-Gi&&(Ni(),Gi=e)}},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())});function Rj(){vh.call(this,"button");this.f=null;this.i=[];this.g={}}
y(Rj,vh);za(Rj);m=Rj.prototype;m.register=function(){Y(this,"click",this.Ka);Y(this,"keydown",this.qa);Y(this,"keypress",this.ra);wh(this,"page-scroll",this.ab)};
m.unregister=function(){Z(this,"click",this.Ka);Z(this,"keydown",this.qa);Z(this,"keypress",this.ra);Sj(this);this.g={};Rj.A.unregister.call(this)};
m.Ka=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
m.qa=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=Tj(this,a))){var d=function(h){var g="";h.tagName&&(g=h.tagName.toLowerCase());return"ul"==g||"table"==g},e;
d(b)?e=b:e=Wc(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.ob;else"table"==e&&(f=this.nb);f&&Uj(this,a,b,c,w(f,this))}}};
m.ab=function(){var a=this.g,b=0;for(d in a)b++;if(0!=b)for(var c in a){b=a[c];var d=H(b.activeButtonNode||b.parentNode,X(this));if(void 0==d||void 0==b)break;Vj(this,d,b,!0)}};
function Uj(a,b,c,d,e){var f=ei(c),h=9==d.keyCode;if(h||32==d.keyCode||13==d.keyCode)if(d=Wj(a,c)){if(void 0!==d.firstElementChild)b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;if("a"==b.tagName.toLowerCase()){var g=void 0===g?{}:g;var k=void 0===k?"":k;var l=void 0===l?window:l;l=l.location;g=pd(b.href,g)+k;g instanceof Bb||g instanceof Bb||(g="object"==typeof g&&g.T?g.S():String(g),Eb.test(g)||(g="about:invalid#zClosurez"),g=new Bb(Cb,g));l.href=g instanceof Bb&&
g.constructor===Bb&&g.g===Db?g.f:"type_error:SafeUrl"}else qh(b)}else h&&Xj(a,b);else f?27==d.keyCode?(Wj(a,c),Xj(a,b)):e(b,c,d):(g=K(b,X(a,"reverse"))?38:40,d.keyCode==g&&(qh(b),d.preventDefault()))}
m.ra=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=Tj(this,a),ei(a)&&c.preventDefault())};
function Wj(a,b){var c=X(a,"menu-item-highlight"),d=G(c,b);d&&M(d,c);return d}
function Yj(a,b,c){L(c,X(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=X(a,"item-id-"+Ea(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
m.nb=function(a,b,c){var d=Wj(this,b),e=fh("table",b);b=Ic(document,"td",null,e);d=Zj(d,b,Ic(document,"td",null,fh("tr",e)).length,c);-1!=d&&(Yj(this,a,b[d]),c.preventDefault())};
m.ob=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=Wj(this,b);b=Oa(Ic(document,"li",null,b),ei);Yj(this,a,b[Zj(d,b,1,c)]);c.preventDefault()}};
function Zj(a,b,c,d){var e=b.length;a=Na(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function ak(a,b){var c=b.iframeMask;c||(c=Qc(document,"IFRAME"),c.src='javascript:""',jf(c,X(a,"menu-mask")),gi(c),b.iframeMask=c);return c}
function Vj(a,b,c,d){var e=H(b,X(a,"group")),f=!!a.j(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var h=8,g=Kd(b);if(K(b,X(a,"reverse"))){f=8;h=9;g=g.top+"px";try{c.style.maxHeight=g}catch(p){}}K(b,"flip")&&(K(b,X(a,"reverse"))?(f=12,h=13):(f=13,h=12));var k;a.j(b,"button-has-sibling-menu")?k=Dd(e):a.j(b,"button-menu-root-container")&&(k=bk(a,b));B&&!mc("8")&&(k=null);if(k){var l=Kd(k);l=new vd(-l.top,l.left,l.top,-l.left)}k=new D(0,1);K(b,X(a,"center-menu"))&&(k.x-=Math.round((Id(c).width-Id(b).width)/
2));d&&(k.y+=Nc(document).y);if(a=ak(a,b))b=Id(c),a.style.width=b.width+"px",a.style.height=b.height+"px",Jf(e,f,a,h,k,l,197),d&&xd(a,"position","fixed");Jf(e,f,c,h,k,l,197)}
function bk(a,b){if(a.j(b,"button-menu-root-container")){var c=a.j(b,"button-menu-root-container");return H(b,c)}return document.body}
m.Ma=function(a){if(a){var b=Tj(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.j(a,"button-has-sibling-menu")?c=a.parentNode:c=bk(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=ak(this,a);d&&c.appendChild(d);(c=!!this.j(a,"button-menu-fixed"))&&(this.g[ch(a).toString()]=b);Vj(this,a,b,c);Kg("yt-uix-button-menu-before-show",a,b);fi(b);d&&fi(d);
this.P(a,"button-menu-action",!0);L(a,X(this,"active"));b=w(this.La,this,a,!1);d=w(this.La,this,a,!0);c=w(this.yb,this,a,void 0);this.f&&Tj(this,this.f)==Tj(this,a)||Sj(this);R("yt-uix-button-menu-show",a);W(this.i);this.i=[V(document,"click",d),V(document,"contextmenu",b),V(window,"resize",c)];this.f=a}}};
function Xj(a,b){if(b){var c=Tj(a,b);if(c){a.f=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");gi(c);a.P(b,"button-menu-action",!1);var d=ak(a,b),e=ch(c).toString();delete a.g[e];P(function(){d&&d.parentNode&&(gi(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=H(b,X(a,"group"));
var f=[X(a,"active")];e&&f.push(X(a,"group-active"));lf(b,f);R("yt-uix-button-menu-hide",b);W(a.i);a.i.length=0}}
m.yb=function(a,b){var c=Tj(this,a);if(c){b&&(b instanceof Fb?Lb(c,b):Vc(c,b));var d=!!this.j(a,"button-menu-fixed");Vj(this,a,c,d)}};
m.La=function(a,b,c){c=oh(c);var d=H(c,X(this));if(d){d=Tj(this,d);var e=Tj(this,a);if(d==e)return}d=H(c,X(this,"menu"));e=d==Tj(this,a);var f=K(c,X(this,"menu-item")),h=K(c,X(this,"menu-close"));if(!d||e&&(f||h))Xj(this,a),d&&b&&this.j(a,"button-menu-indicate-selected")&&((a=G(X(this,"content"),a))&&Vc(a,dd(c)),ck(this,d,c))};
function ck(a,b,c){var d=X(a,"menu-item-selected");z(Hc(d,b),function(e){M(e,d)});
L(c.parentNode,d)}
function Tj(a,b){if(!b.widgetMenu){var c=a.j(b,"button-menu-id");c=c&&E(c);var d=X(a,"menu");c?kf(c,[d,X(a,"menu-external")]):c=G(d,b);b.widgetMenu=c}return b.widgetMenu}
m.isToggled=function(a){return K(a,X(this,"toggled"))};
m.toggle=function(a){if(this.j(a,"button-toggle")){var b=H(a,X(this,"group")),c=X(this,"toggled"),d=K(a,c);if(b&&this.j(b,"button-toggle-group")){var e=this.j(b,"button-toggle-group");z(Hc(X(this),b),function(f){f!=a||"optional"==e&&d?(M(f,c),f.removeAttribute("aria-pressed")):(L(a,c),f.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),of(a,c)}};
m.click=function(a){if(Tj(this,a)){var b=Tj(this,a);if(b){var c=H(b.activeButtonNode||b.parentNode,X(this));c&&c!=a?(Xj(this,c),P(w(this.Ma,this,a),1)):ei(b)?Xj(this,a):this.Ma(a)}a.focus()}this.P(a,"button-action")};
function Sj(a){a.f&&Xj(a,a.f)}
;function dk(a){vh.call(this,a);this.i=null}
y(dk,vh);m=dk.prototype;m.D=function(a){var b=vh.prototype.D.call(this,a);return b?b:a};
m.register=function(){wh(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
m.dispose=function(){ek(this);dk.A.dispose.call(this)};
m.j=function(a,b){var c=dk.A.j.call(this,a,b);return c?c:(c=dk.A.j.call(this,a,"card-config"))&&(c=v(c))&&c[b]?c[b]:null};
m.show=function(a){var b=this.D(a);if(b){L(b,X(this,"active"));var c=fk(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;gk(this,a,c);var d=X(this,"card-visible"),e=this.j(a,"card-delegate-show")&&this.j(b,"card-action");this.P(b,"card-action",a);this.i=a;gi(c);P(w(function(){e||(fi(c),R("yt-uix-card-show",b,a,c));hk(c);L(c,d);R("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function fk(a,b,c){var d=c||b,e=X(a,"card");c=ik(a,d);var f=E(X(a,"card")+ch(d));if(f)return a=G(X(a,"card-body"),f),Uc(a,c)||(Rc(c),a.appendChild(c)),f;f=document.createElement("div");f.id=X(a,"card")+ch(d);jf(f,e);(d=a.j(d,"card-class"))&&kf(f,d.split(/\s+/));d=document.createElement("div");d.className=X(a,"card-border");b=a.j(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var h=document.createElement("div");h.className=
X(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;Rc(c);h.appendChild(c);d.appendChild(a);d.appendChild(h);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function gk(a,b,c){var d=a.j(b,"orientation")||"horizontal",e=G(X(a,"anchor"),b)||b,f=a.j(b,"position"),h=!!a.j(b,"force-position"),g=a.j(b,"position-fixed");d="horizontal"==d;var k="bottomright"==f||"bottomleft"==f,l="topright"==f||"bottomright"==f;if(l&&k){var p=13;var q=8}else l&&!k?(p=12,q=9):!l&&k?(p=9,q=12):(p=8,q=13);var t=Ld(document.body);f=Ld(b);t!=f&&(p^=4);if(d){f=b.offsetHeight/2-12;var r=new D(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,r=new D(b.offsetWidth+6,-12);var u=Id(c);f=
Math.min(f,(d?u.height:u.width)-24-6);6>f&&(f=6,d?r.y+=12-b.offsetHeight/2:r.x+=12-b.offsetWidth/2);u=null;h||(u=10);b=X(a,"card-flip");a=X(a,"card-reverse");mf(c,b,l);mf(c,a,k);u=Jf(e,p,c,q,r,null,u);!h&&u&&(u&48&&(l=!l,p^=4,q^=4),u&192&&(k=!k,p^=1,q^=1),mf(c,b,l),mf(c,a,k),Jf(e,p,c,q,r));g&&(e=parseInt(c.style.top,10),h=Nc(document).y,xd(c,"position","fixed"),xd(c,"top",e-h+"px"));t&&(c.style.right="",e=Kd(c),e.left=e.left||parseInt(c.style.left,10),h=Lc(window),c.style.left="",c.style.right=h.width-
e.left-e.width+"px");e=G("yt-uix-card-body-arrow",c);h=G("yt-uix-card-border-arrow",c);d=d?k?"top":"bottom":!t&&l||t&&!l?"left":"right";e.setAttribute("style","");h.setAttribute("style","");e.style[d]=f+"px";h.style[d]=f+"px";k=G("yt-uix-card-arrow",c);l=G("yt-uix-card-arrow-background",c);k&&l&&(c="right"==d?Id(c).width-f-13:f+11,f=c/Math.sqrt(2),k.style.left=c+"px",k.style.marginLeft="1px",l.style.marginLeft=-f+"px",l.style.marginTop=f+"px")}
m.hide=function(a){if(a=this.D(a)){var b=E(X(this,"card")+ch(a));b&&(M(a,X(this,"active")),M(b,X(this,"card-visible")),gi(b),this.i=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(Rc(b.cardMask),b.cardMask=null))}};
function ek(a){a.i&&a.hide(a.i)}
m.xb=function(a,b){var c=this.D(a);if(c){if(b){var d=ik(this,c);if(!d)return;b instanceof Fb?Lb(d,b):Vc(d,b)}K(c,X(this,"active"))&&(c=fk(this,a,c),gk(this,a,c),fi(c),hk(c))}};
m.isActive=function(a){return(a=this.D(a))?K(a,X(this,"active")):!1};
function ik(a,b){var c=b.cardContentNode;if(!c){var d=X(a,"content"),e=X(a,"card-content");(c=(c=a.j(b,"card-id"))?E(c):G(d,b))||(c=document.createElement("div"));var f=c;M(f,d);L(f,e);b.cardContentNode=c}return c}
function hk(a){var b=a.cardMask;b||(b=Qc(document,"IFRAME"),b.src='javascript:""',kf(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function jk(){vh.call(this,"kbd-nav")}
var kk;y(jk,vh);za(jk);m=jk.prototype;m.register=function(){Y(this,"keydown",this.oa);wh(this,"yt-uix-kbd-nav-move-in",this.xa);wh(this,"yt-uix-kbd-nav-move-in-to",this.pb);wh(this,"yt-uix-kbd-move-next",this.ya);wh(this,"yt-uix-kbd-nav-move-to",this.W)};
m.unregister=function(){Z(this,"keydown",this.oa);W(kk)};
m.oa=function(a,b,c){var d=c.keyCode;if(a=H(a,X(this)))switch(d){case 13:case 32:this.xa(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=qf(a,"kbdNavMoveOut");!c;){c=H(a.parentElement,X(this));if(!c)break a;c=qf(c,"kbdNavMoveOut")}c=E(c);this.W(c);R("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&K(a,X(this,"list")))switch(d){case 40:this.ya(b,a);break;case 38:d=document.activeElement==a,a=lk(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+b-
1)%a.length,a[b].focus(),mk(this,a[b]))}c.preventDefault()}};
m.xa=function(a){var b=qf(a,"kbdNavMoveIn");b=E(b);nk(this,a,b);this.W(b)};
m.pb=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}nk(this,d,a);this.W(a)};
m.W=function(a){if(a)if(ad(a))a.focus();else{var b=Wc(a,function(c){return Tc(c)?ad(c):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function nk(a,b,c){if(b&&c)if(L(c,X(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,pf&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
m.ya=function(a,b){var c=document.activeElement==b,d=lk(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),mk(this,d[c]))};
function mk(a,b){if(b){var c=fd(b,"LI");c&&(L(c,X(a,"highlight")),kk=V(b,"blur",w(function(d){M(d,X(this,"highlight"));W(kk)},a,c)))}}
function lk(a){if("UL"!=a.tagName.toUpperCase())return[];a=Oa(Sc(a),function(b){return"LI"==b.tagName.toUpperCase()});
return Oa(Pa(a,function(b){return ei(b)?Wc(b,function(c){return Tc(c)?ad(c):!1}):!1}),function(b){return!!b})}
;function ok(){vh.call(this,"menu");this.g=this.f=null;this.i={};this.v={};this.l=null}
y(ok,vh);za(ok);function pk(a){var b=ok.w();if(K(a,X(b)))return a;var c=b.D(a);return c?c:H(a,X(b,"content"))==b.f?b.g:null}
m=ok.prototype;m.register=function(){Y(this,"click",this.na);Y(this,"mouseenter",this.Ya);wh(this,"page-scroll",this.bb);wh(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.D(a);qk(this,a)});
this.l=new N};
m.unregister=function(){Z(this,"click",this.na);this.g=this.f=null;W($a(ib(this.i)));this.i={};hb(this.v,function(a){Rc(a)},this);
this.v={};ff(this.l);this.l=null;ok.A.unregister.call(this)};
m.na=function(a,b,c){a&&(b=rk(this,a),!b.disabled&&eh(c.target,b)&&sk(this,a))};
m.Ya=function(a,b,c){a&&K(a,X(this,"hover"))&&eh(c.target,rk(this,a))&&sk(this,a,!0)};
m.bb=function(){this.f&&this.g&&tk(this,this.g,this.f)};
function tk(a,b,c){var d=uk(a,b);if(d){var e=Id(c);if(e instanceof Dc){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=Hd(e,!0);d.style.height=Hd(f,!0)}c==a.f&&(e=9,f=8,K(b,X(a,"reversed"))&&(e^=1,f^=1),K(b,X(a,"flipped"))&&(e^=4,f^=4),a=new D(0,1),d&&Jf(b,e,d,f,a,null,197),Jf(b,e,c,f,a,null,197))}
function sk(a,b,c){vk(a,b)&&!c?qk(a,b):(wk(a,b),!a.f||eh(b,a.f)?a.Na(b):bg(a.l,w(a.Na,a,b)))}
m.Na=function(a){if(a){var b=xk(this,a);if(b){Kg("yt-uix-menu-before-show",a,b);this.f?eh(a,this.f)||qk(this,this.g):(this.g=a,this.f=b,K(a,X(this,"sibling-content"))||(Rc(b),document.body.appendChild(b)),b.style.minWidth=rk(this,a).offsetWidth-2+"px");var c=uk(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);M(b,X(this,"content-hidden"));tk(this,a,b);kf(rk(this,a),[X(this,"trigger-selected"),"yt-uix-button-toggled"]);R("yt-uix-menu-show",a);yk(b);zk(this,a);R("yt-uix-kbd-nav-move-in-to",
b);var d=w(this.zb,this,a),e=w(this.lb,this,a);c=Ea(a).toString();this.i[c]=[V(b,"click",e),V(document,"click",d)];K(a,X(this,"indicate-selected"))&&(d=w(this.mb,this,a),this.i[c].push(V(b,"click",d)));K(a,X(this,"hover"))&&(a=w(this.Za,this,a),this.i[c].push(V(document,"mousemove",a)))}}};
m.Za=function(a,b){var c=oh(b);c&&(eh(c,rk(this,a))||Ak(this,c)||Bk(this,a))};
m.zb=function(a,b){var c=oh(b);if(c){if(Ak(this,c)){var d=H(c,X(this,"content")),e=fd(c,"LI");e&&d&&Uc(d,e)&&Kg("yt-uix-menu-item-clicked",c);c=H(c,X(this,"close-on-select"));if(!c)return;d=pk(c)}qk(this,d||a)}};
function wk(a,b){if(b){var c=H(b,X(a,"content"));c&&z(Hc(X(a),c),function(d){!eh(d,b)&&vk(this,d)&&Bk(this,d)},a)}}
function qk(a,b){if(b){var c=[];c.push(b);var d=xk(a,b);d&&(d=Hc(X(a),d),d=Va(d),c=c.concat(d),z(c,function(e){vk(this,e)&&Bk(this,e)},a))}}
function Bk(a,b){if(b){var c=xk(a,b);lf(rk(a,b),[X(a,"trigger-selected"),"yt-uix-button-toggled"]);L(c,X(a,"content-hidden"));var d=xk(a,b);d&&Jc(d,{"aria-expanded":"false"});(d=uk(a,b))&&d.parentNode&&Rc(d);c&&c==a.f&&(a.g.appendChild(c),a.f=null,a.g=null,a.l&&a.l.J("ROOT_MENU_REMOVED"));R("yt-uix-menu-hide",b);c=Ea(b).toString();W(a.i[c]);delete a.i[c]}}
m.lb=function(a,b){var c=oh(b);c&&Ck(this,a,c)};
m.mb=function(a,b){var c=oh(b);if(c){var d=rk(this,a);if(d&&(c=fd(c,"LI")))if(c=dd(c).trim(),d.hasChildNodes()){var e=Rj.w();(d=G(X(e,"content"),d))&&Vc(d,c)}else Vc(d,c)}};
function zk(a,b){var c=xk(a,b);if(c){z(c.children,function(e){"LI"==e.tagName&&Jc(e,{role:"menuitem"})});
Jc(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Ea(c),c.id=d);(c=rk(a,b))&&Jc(c,{"aria-controls":d})}}
function Ck(a,b,c){var d=xk(a,b);d&&K(b,X(a,"checked"))&&(a=fd(c,"LI"))&&(a=G("yt-ui-menu-item-checked-hid",a))&&(z(Hc("yt-ui-menu-item-checked",d),function(e){nf(e,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),nf(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function vk(a,b){var c=xk(a,b);return c?!K(c,X(a,"content-hidden")):!1}
function yk(a){z(Ic(document,"UL",null,a),function(b){b.tabIndex=0;var c=jk.w();kf(b,[X(c),X(c,"list")])})}
function xk(a,b){var c=Ng(b,"menu-content-id");return c&&(c=E(c))?(kf(c,[X(a,"content"),X(a,"content-external")]),c):b==a.g?a.f:G(X(a,"content"),b)}
function uk(a,b){var c=Ea(b).toString(),d=a.v[c];if(!d){d=Qc(document,"IFRAME");d.src='javascript:""';var e=[X(a,"mask")];z(hf(b),function(f){e.push(f+"-mask")});
kf(d,e);a.v[c]=d}return d||null}
function rk(a,b){return G(X(a,"trigger"),b)}
function Ak(a,b){return eh(b,a.f)||eh(b,a.g)}
;function Dk(){dk.call(this,"clickcard");this.f={};this.g={}}
y(Dk,dk);za(Dk);m=Dk.prototype;m.register=function(){Dk.A.register.call(this);Y(this,"click",this.ka,"target");Y(this,"click",this.ja,"close")};
m.unregister=function(){Dk.A.unregister.call(this);Z(this,"click",this.ka,"target");Z(this,"click",this.ja,"close");for(var a in this.f)W(this.f[a]);this.f={};for(a in this.g)W(this.g[a]);this.g={}};
m.ka=function(a,b,c){c.preventDefault();b=fd(c.target,"button");if(!b||!b.disabled){if(b=this.j(a,"card-target"))a=document,a="string"===typeof b?a.getElementById(b):b;b=this.D(a);this.j(b,"disabled")||(K(b,X(this,"active"))?(this.hide(a),M(b,X(this,"active"))):(this.show(a),L(b,X(this,"active"))))}};
m.show=function(a){Dk.A.show.call(this,a);var b=this.D(a),c=Ea(a).toString();if(!Ng(b,"click-outside-persists")){if(this.f[c])return;b=V(document,"click",w(this.la,this,a));var d=V(window,"blur",w(this.la,this,a));this.f[c]=[b,d]}a=V(window,"resize",w(this.xb,this,a,void 0));this.g[c]=a};
m.hide=function(a){Dk.A.hide.call(this,a);a=Ea(a).toString();var b=this.f[a];b&&(W(b),this.f[a]=null);if(b=this.g[a])W(b),delete this.g[a]};
m.la=function(a,b){var c="yt-uix"+(this.o?"-"+this.o:"")+"-card",d=null;b.target&&(d=H(b.target,c)||H(pk(b.target),c));(d=d||H(document.activeElement,c)||(document.activeElement?H(pk(document.activeElement),c):null))||this.hide(a)};
m.ja=function(a){(a=H(a,X(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function Ek(){dk.call(this,"hovercard")}
y(Ek,dk);za(Ek);m=Ek.prototype;m.register=function(){Y(this,"mouseenter",this.ta,"target");Y(this,"mouseleave",this.va,"target");Y(this,"mouseenter",this.ua,"card");Y(this,"mouseleave",this.wa,"card")};
m.unregister=function(){Z(this,"mouseenter",this.ta,"target");Z(this,"mouseleave",this.va,"target");Z(this,"mouseenter",this.ua,"card");Z(this,"mouseleave",this.wa,"card")};
m.ta=function(a){if(Fk!=a){Fk&&(this.hide(Fk),Fk=null);var b=w(this.show,this,a),c=parseInt(this.j(a,"delay-show"),10);b=P(b,-1<c?c:200);Lg(a,"card-timer",b.toString());Fk=a;a.alt&&(Lg(a,"card-alt",a.alt),a.alt="");a.title&&(Lg(a,"card-title",a.title),a.title="")}};
m.va=function(a){var b=parseInt(this.j(a,"card-timer"),10);Cg(b);this.D(a).isCardHidable=!0;b=parseInt(this.j(a,"delay-hide"),10);b=-1<b?b:200;P(w(this.cb,this,a),b);if(b=this.j(a,"card-alt"))a.alt=b;if(b=this.j(a,"card-title"))a.title=b};
m.cb=function(a){this.D(a).isCardHidable&&(this.hide(a),Fk=null)};
m.ua=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
m.wa=function(a){a&&this.hide(a.cardTargetNode)};
var Fk=null;function Gk(a,b,c,d,e,f){this.f=a;this.B=null;this.i=G("yt-dialog-fg",this.f)||this.f;if(a=G("yt-dialog-title",this.i)){var h="yt-dialog-title-"+Ea(this.i);a.setAttribute("id",h);this.i.setAttribute("aria-labelledby",h)}this.i.setAttribute("tabindex","-1");this.V=G("yt-dialog-focus-trap",this.f);this.fa=!1;this.l=new N;this.F=[];this.F.push(ph(this.f,w(this.qb,this),"yt-dialog-dismiss"));this.F.push(V(this.V,"focus",w(this.Xa,this),!0));Hk(this);this.Pa=b;this.Ra=c;this.Qa=d;this.K=e;this.Sa=f;this.v=
this.o=null}
var Ik={LOADING:"loading",Lb:"content",Mb:"working"};function Jk(a,b){a.X()||a.l.subscribe("post-all",b)}
function Hk(a){a=G("yt-dialog-fg-content",a.f);var b=[];hb(Ik,function(c){b.push("yt-dialog-show-"+c)});
lf(a,b);L(a,"yt-dialog-show-content")}
m=Gk.prototype;
m.show=function(){if(!this.X()){this.B=document.activeElement;if(!this.Qa){this.g||(this.g=E("yt-dialog-bg"),this.g||(this.g=Qc(document,"div"),this.g.id="yt-dialog-bg",jf(this.g,"yt-dialog-bg"),document.body.appendChild(this.g)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=Lc(a).height,Mc(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=c.offsetHeight);c=
b>a?b>e?b:e:b<e?b:e}else c=0}this.g.style.height=c+"px";fi(this.g)}this.pa();c=Kk(this);Lk(c);this.o=V(document,"keydown",w(this.kb,this));c=this.f;d=Hg("player-added",this.pa,this);Lg(c,"player-ready-pubsub-key",d);this.Ra&&(this.v=V(document,"click",w(this.wb,this)));fi(this.f);this.i.setAttribute("tabindex","0");Mk(this);this.K||L(document.body,"yt-dialog-active");Sj(Rj.w());ek(Dk.w());ek(Ek.w());R("yt-ui-dialog-show-complete",this)}};
function Nk(){return Ra(Hc("yt-dialog"),function(a){return ei(a)})}
m.pa=function(){if(!this.Sa){var a=this.f;mf(document.body,"hide-players",!0);a&&mf(a,"preserve-players",!0)}};
function Kk(a){var b=Ic(document,"iframe",null,a.f);z(b,function(c){var d=Ng(c,"onload");d&&(d=v(d))&&V(c,"load",d);if(d=Ng(c,"src"))c.src=d},a);
return Va(b)}
function Lk(a){z(document.getElementsByTagName("iframe"),function(b){-1==Na(a,b)&&L(b,"iframe-hid")})}
function Ok(){z(Hc("iframe-hid"),function(a){M(a,"iframe-hid")})}
m.qb=function(a){a=a.currentTarget;a.disabled||(a=Ng(a,"action")||"",this.dismiss(a))};
m.dismiss=function(a){if(!this.X()){this.l.J("pre-all");this.l.J("pre-"+a);gi(this.f);ek(Dk.w());ek(Ek.w());this.i.setAttribute("tabindex","-1");Nk()||(gi(this.g),this.K||M(document.body,"yt-dialog-active"),hh(),Ok());this.o&&(W(this.o),this.o=null);this.v&&(W(this.v),this.v=null);var b=this.f;if(b){var c=Ng(b,"player-ready-pubsub-key");c&&(Jg(c),Og(b,"player-ready-pubsub-key"))}this.l.J("post-all");R("yt-ui-dialog-hide-complete",this);"cancel"==a&&R("yt-ui-dialog-cancelled",this);this.l&&this.l.J("post-"+
a);this.B&&this.B.focus()}};
m.setTitle=function(a){Vc(G("yt-dialog-title",this.f),a)};
m.kb=function(a){P(w(function(){this.Pa||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&K(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
m.wb=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
m.X=function(){return this.fa};
m.dispose=function(){ei(this.f)&&this.dismiss("dispose");W(this.F);this.F.length=0;P(w(function(){this.B=null},this),0);
this.V=this.i=null;this.l.dispose();this.l=null;this.fa=!0};
m.Xa=function(a){a.stopPropagation();Mk(this)};
function Mk(a){P(w(function(){this.i&&this.i.focus()},a),0)}
x("yt.ui.Dialog",Gk);function Pk(){vh.call(this,"overlay");this.l=this.g=this.i=this.f=null}
y(Pk,vh);za(Pk);m=Pk.prototype;m.register=function(){Y(this,"click",this.da,"target");Y(this,"click",this.hide,"close");Qk(this)};
m.unregister=function(){Pk.A.unregister.call(this);Z(this,"click",this.da,"target");Z(this,"click",this.hide,"close");this.l&&(Jg(this.l),this.l=null);this.g&&(W(this.g),this.g=null)};
m.da=function(a){if(!this.f||!ei(this.f.f)){var b=this.D(a);a=Rk(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.j(b,"disable-shortcuts")||!1,d=!!this.j(b,"disable-outside-click-dismiss")||!1;this.f=new Gk(a,c);this.i=b;var e=G("yt-dialog-fg",a);if(e){var f=this.j(b,"overlay-class")||"",h=this.j(b,"overlay-style")||"default",g=this.j(b,"overlay-shape")||"default";f=f?f.split(" "):[];f.push(X(this,h));f.push(X(this,g));kf(e,f)}this.f.show();R("yt-uix-kbd-nav-move-to",e||a);Qk(this);c||
d||(c=w(function(k){K(k.target,"yt-dialog-base")&&Sk(this)},this),this.g=V(G("yt-dialog-base",a),"click",c));
this.P(b,"overlay-shown");R("yt-uix-overlay-shown",b)}}};
function Qk(a){a.l||(a.l=Hg("yt-uix-overlay-hide",Tk));a.f&&Jk(a.f,function(){var b=Pk.w();b.i=null;b.f.dispose();b.f=null})}
function Sk(a){if(a.f){var b=a.i;a.f.dismiss("overlayhide");b&&a.P(b,"overlay-hidden");a.i=null;a.g&&(W(a.g),a.g=null);a.f=null}}
function Rk(a,b){var c;if(a)if(c=G("yt-dialog",a)){var d=E("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=H(b,"yt-dialog"));return c}
function Uk(){var a=Pk.w();if(a.i)a=G("yt-dialog-fg-content",a.i.overlayContentNode);else a:{if(a=Hc("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=H(a[b],"yt-dialog");if(ei(c)){a=a[b];break a}}a=null}return a}
m.hide=function(a){a&&a.disabled||R("yt-uix-overlay-hide")};
function Tk(){Sk(Pk.w())}
m.show=function(a){this.da(a)};var Vk={},Wk=[];function Xk(a){a=H(a,"yt-uix-button-subscription-container");return G("yt-dialog",G("unsubscribe-confirmation-overlay-container",a))}
function Yk(a,b){W(Wk);Wk.length=0;Vk[b]||(Vk[b]=Xk(a));Pk.w().show(Vk[b]);var c=Uk();return new Mf(function(d){Wk.push(ph(c,function(){d()},"overlay-confirmation-unsubscribe-button"))})}
;function Zk(){var a=O("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!O("SESSION_INDEX")&&!O("LOGGED_IN"))}
;function $k(){vh.call(this,"subscription-button")}
y($k,vh);za($k);m=$k.prototype;m.register=function(){Y(this,"click",this.ea);xh(this,Ph,this.Ba);xh(this,Qh,this.Aa);xh(this,Rh,this.ub);xh(this,Uh,this.Ba);xh(this,Vh,this.Aa);xh(this,Wh,this.vb);xh(this,Yh,this.sb);xh(this,Zh,this.rb)};
m.unregister=function(){Z(this,"click",this.ea);$k.A.unregister.call(this)};
m.isSubscribed=function(a){return!!this.j(a,"is-subscribed")};
m.ea=function(a){var b=this.j(a,"href"),c=this.j(a,"insecure");if(b)a=this.j(a,"target")||"_self",window.open(b,a);else if(!c)if(Zk()){b=this.j(a,"channel-external-id");c=this.j(a,"clicktracking");var d=al(this,a),e=this.j(a,"parent-url");if(this.j(a,"is-subscribed")){var f=this.j(a,"subscription-id"),h=new Lh(b,f,d,a,c,e);this.j(a,"show-unsub-confirm-dialog")?Yk(a,b).then(function(){U(Th,h)}):U(Th,h)}else a=this.j(a,"params"),U(Oh,new Jh(b,d,c,e,void 0,a))}else bl(this,a)};
m.Ba=function(a){this.O(a.f,this.Ga,!0)};
m.Aa=function(a){this.O(a.f,this.Ga,!1)};
m.ub=function(a){this.O(a.f,this.Ha,!0,a.g)};
m.vb=function(a){this.O(a.f,this.Ha,!1)};
m.sb=function(a){this.O(a.f,this.Wa)};
m.rb=function(a){this.O(a.f,this.Va)};
m.Ha=function(a,b,c){b?(Lg(a,"is-subscribed","true"),c&&Lg(a,"subscription-id",c)):(Og(a,"is-subscribed"),Og(a,"subscription-id"));cl(this,a)};
function al(a,b){if(!a.j(b,"ypc-enabled"))return null;var c=a.j(b,"ypc-item-type"),d=a.j(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
m.Ga=function(a,b){var c=H(a,"yt-uix-button-subscription-container");mf(c,"yt-subscription-button-disabled-mask-container",b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function cl(a,b){var c=a.j(b,"style-type"),d=!!a.j(b,"is-subscribed");c="-"+c;var e="yt-uix-button-subscribed"+c;mf(b,"yt-uix-button-subscribe"+c,!d);mf(b,e,d);a.j(b,"subscriber-count-tooltip")&&!a.j(b,"subscriber-count-show-when-subscribed")&&(c=X(hi.w()),mf(b,c,!d),b.title=d?"":a.j(b,"subscriber-count-title"));d?P(function(){L(b,"hover-enabled")},1E3):M(b,"hover-enabled")}
m.Wa=function(a){var b=!!this.j(a,"ypc-item-type"),c=!!this.j(a,"ypc-item-id");!this.j(a,"ypc-enabled")&&b&&c&&(L(a,"ypc-enabled"),Lg(a,"ypc-enabled","true"))};
m.Va=function(a){this.j(a,"ypc-enabled")&&(M(a,"ypc-enabled"),Og(a,"ypc-enabled"))};
function dl(a,b){return Oa(Hc(X(a)),function(c){return b==this.j(c,"channel-external-id")},a)}
m.Ta=function(a,b,c){var d=Za(arguments,2);z(a,function(e){b.apply(this,Ua(e,d))},this)};
m.O=function(a,b,c){var d=dl(this,a);this.Ta.apply(this,Ua([d],Za(arguments,1)))};
function bl(a,b){var c=w(function(d){d.discoverable_subscriptions&&vg("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",d.discoverable_subscriptions);this.ea(b)},a);
pi(c)}
;function el(a){this.f=a;this.G=null;O("SUBSCRIBE_EMBED_HOVERCARD_URL")&&(fl(this),V(this.f,"mouseover",w(this.l,this)),V(this.f,"mouseout",w(this.aa,this)),V(this.f,"click",w(this.aa,this)),$g(Rh,Ja(this.g,!0),this),$g(Wh,Ja(this.g,!1),this),gl(this))}
function fl(a){var b={url:O("SUBSCRIBE_EMBED_HOVERCARD_URL"),style:"bubble",hideClickDetection:!0,show:!1,anchor:a.f,relayOpen:"-1"};a=w(a.i,a);Fh().open(b,a)}
function gl(a){Zk()||Hg("LOGGED_IN",function(){this.G&&(this.aa(),this.G.close(),this.G=null,fl(this))},a)}
el.prototype.i=function(a){this.G=a;a=$k.w().isSubscribed(this.f);this.g(a)};
el.prototype.l=function(){this.G&&this.G.restyle({show:!0})};
el.prototype.aa=function(){this.G&&this.G.restyle({show:!1})};
el.prototype.g=function(a){if(this.G){a={isSubscribed:a};try{this.G.send("msg-hovercard-subscription",a,void 0,v("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER"))}catch(b){}}};function hl(){Eh(function(){var a=Id(E("yt-subscribe"));a={width:a.width,height:a.height};var b=il;Fh().ready(a,null,b)})}
function il(a){if(a.length&&a[a.length-1]){a=a[a.length-1].eurl;var b=E("yt-subscribe"),c=$k.w();if(b=G(X(c),b))a&&($k.w(),Lg(b,"parent-url",a)),new el(b)}}
;function jl(a){S.call(this,1,arguments);this.f=a}
y(jl,S);function kl(a,b){S.call(this,2,arguments);this.g=a;this.f=b}
y(kl,S);function ll(a,b,c,d){S.call(this,1,arguments);this.f=b;this.itemType=c||null;this.itemId=d||null}
y(ll,S);function ml(a,b){S.call(this,1,arguments);this.g=a;this.f=b||null}
y(ml,S);function nl(a){S.call(this,1,arguments)}
y(nl,S);var ol=new T("ypc-core-load",jl),pl=new T("ypc-guide-sync-success",kl),ql=new T("ypc-purchase-success",ll),rl=new T("ypc-subscription-cancel",nl),sl=new T("ypc-subscription-cancel-success",ml),tl=new T("ypc-init-subscription",nl);var ul=!1,vl=[];function wl(a){a.f?ul?U(Sh,a):U(ol,new jl(function(){U(tl,new nl(a.f))})):xl(a.g,a.l,a.i,a.source,a.params)}
function yl(a){a.f?ul?U(Xh,a):U(ol,new jl(function(){U(rl,new nl(a.f))})):zl(a.g,a.o,a.l,a.i,a.source)}
function Al(a){Bl(Va(a.f))}
function Cl(a){Dl(Va(a.f))}
function El(a){Fl(a.i,a.g,a.f)}
function Gl(a){var b=a.itemId,c=a.f.subscriptionId;b&&c&&U(Rh,new Kh(b,c,a.f.channelInfo))}
function Hl(a){var b=a.f;hb(a.g,function(c,d){U(Rh,new Kh(d,c,b[d]))})}
function Il(a){U(Wh,new Hh(a.g.itemId));a.f&&a.f.length&&(Jl(a.f,Wh),Jl(a.f,Yh))}
function xl(a,b,c,d,e){var f=new Hh(a);U(Ph,f);var h={};h.c=a;c&&(h.eurl=c);d&&(h.source=d);c={};(d=O("PLAYBACK_ID"))&&(c.plid=d);(d=O("EVENT_ID"))&&(c.ei=d);e&&(c.params=e);b&&Kl(b,c);hj("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Ja:h,H:c,onSuccess:function(g,k){var l=k.response;U(Rh,new Kh(a,l.id,l.channel_info));l.show_feed_privacy_dialog&&R("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a)},
U:function(){U(Qh,f)}})}
function zl(a,b,c,d,e){var f=new Hh(a);U(Uh,f);var h={};h.c=a;d&&(h.eurl=d);e&&(h.source=e);d={};d.c=a;d.s=b;(a=O("PLAYBACK_ID"))&&(d.plid=a);(a=O("EVENT_ID"))&&(d.ei=a);c&&Kl(c,d);hj("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Ja:h,H:d,onSuccess:function(){U(Wh,f)},
U:function(){U(Vh,f)}})}
function Fl(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new Ih(a,b,c);hj("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",H:d,onError:function(){U(bi,e)},
onSuccess:function(){U(ai,e)}})}}
function Bl(a){if(a.length){var b=Ya(a,0,40);U("subscription-batch-subscribe-loading");Jl(b,Ph);var c={};c.a=b.join(",");var d=function(){U("subscription-batch-subscribe-loaded");Jl(b,Qh)};
hj("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",H:c,onSuccess:function(e,f){d();var h=f.response,g=h.id;if("array"==Aa(g)&&g.length==b.length){var k=h.channel_info_map;z(g,function(l,p){var q=b[p];U(Rh,new Kh(q,l,k[q]))});
a.length?Bl(a):U("subscription-batch-subscribe-finished")}},
onError:function(){d();U("subscription-batch-subscribe-failure")}})}}
function Dl(a){if(a.length){var b=Ya(a,0,40);U("subscription-batch-unsubscribe-loading");Jl(b,Uh);var c={};c.c=b.join(",");var d=function(){U("subscription-batch-unsubscribe-loaded");Jl(b,Vh)};
hj("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",H:c,onSuccess:function(){d();Jl(b,Wh);a.length&&Dl(a)},
onError:function(){d()}})}}
function Jl(a,b){z(a,function(c){U(b,new Hh(c))})}
function Kl(a,b){var c=Bh(a),d;for(d in c)b[d]=c[d]}
;x("yt.setConfig",vg);x("yt.config.set",vg);x("ytbin.www.subscribeembed.init",function(){ul=!0;vl.push($g(Oh,wl),$g(Th,yl));ul||vl.push($g(Sh,wl),$g(Xh,yl),$g(Mh,Al),$g(Nh,Cl),$g($h,El),$g(ql,Gl),$g(sl,Il),$g(pl,Hl));var a=$k.w(),b=X(a);b in zh||(a.register(),wh(a,"yt-uix-init-"+b,a.init),wh(a,"yt-uix-dispose-"+b,a.dispose),zh[b]=a);hl()});}).call(this);
