// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("path")):"function"==typeof define&&define.amd?define(["path"],t):(r="undefined"!=typeof globalThis?globalThis:r||self).smeanpw=t(r.require$$0)}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,e){var n,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(r,t)||c.call(r,t)?(n=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),y="get"in e,p="set"in e,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,e.get),p&&a&&a.call(r,t,e.set),r};var l=e;function y(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p="function"==typeof Math.fround?Math.fround:null;var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var j,m="function"==typeof Symbol?Symbol.toStringTag:"";j=b()?function(r){var t,e,n,o,u;if(null==r)return v.call(r);e=r[m],u=m,t=null!=(o=r)&&d.call(o,u);try{r[m]=void 0}catch(t){return v.call(r)}return n=v.call(r),t?r[m]=e:delete r[m],n}:function(r){return v.call(r)};var _=j,g="function"==typeof Float32Array;var w=Number.POSITIVE_INFINITY,h="function"==typeof Float32Array?Float32Array:null;var O,A="function"==typeof Float32Array?Float32Array:void 0;O=function(){var r,t,e;if("function"!=typeof h)return!1;try{t=new h([1,3.14,-3.14,5e40]),e=t,r=(g&&e instanceof Float32Array||"[object Float32Array]"===_(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===w}catch(t){r=!1}return r}()?A:function(){throw new Error("not implemented")};var E=new O(1);var S="function"==typeof p?p:function(r){return E[0]=r,E[0]};var F=/./;function P(r){return"boolean"==typeof r}var T=Boolean.prototype.toString;var N=b();function B(r){return"object"==typeof r&&(r instanceof Boolean||(N?function(r){try{return T.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===_(r)))}function q(r){return P(r)||B(r)}function I(){return new Function("return this;")()}y(q,"isPrimitive",P),y(q,"isObject",B);var x="object"==typeof self?self:null,M="object"==typeof window?window:null,V="object"==typeof global?global:null;var k=function(r){if(arguments.length){if(!P(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return I()}if(x)return x;if(M)return M;if(V)return V;throw new Error("unexpected error. Unable to resolve global object.")}(),C=k.document&&k.document.childNodes,G=Int8Array;function L(){return/^\s*function\s*([^(]*)/i}var R,$=/^\s*function\s*([^(]*)/i;y(L,"REGEXP",$),R=Array.isArray?Array.isArray:function(r){return"[object Array]"===_(r)};var D=R;function J(r){return null!==r&&"object"==typeof r}var U=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!D(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(J);function X(r){var t,e,n,o;if(("Object"===(e=_(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=$.exec(n.toString()))return t[1]}return J(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}y(J,"isObjectLikeArray",U);var Y="function"==typeof F||"object"==typeof G||"function"==typeof C?function(r){return X(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?X(r).toLowerCase():t};var z,H,K=Object.getPrototypeOf;H=Object.getPrototypeOf,z="function"===Y(H)?K:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===_(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Q=z;function W(r){return null==r?null:(r=Object(r),Q(r))}function Z(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===_(r))return!0;r=W(r)}return!1}var rr=Math.floor;function tr(r,t,e,n){var o,u,i,a,f,c,l,y,p,s,b,v,d;if(r<=0)return 0;if(1===r||0===e)return t[n];if(o=n,r<8){for(b=0,d=0;d<r;d++)b=S(b+t[o]),o+=e;return b}if(r<=128){for(u=t[o],i=t[o+e],a=t[o+2*e],f=t[o+3*e],c=t[o+4*e],l=t[o+5*e],y=t[o+6*e],p=t[o+7*e],o+=8*e,s=r%8,d=8;d<r-s;d+=8)u=S(u+t[o]),i=S(i+t[o+e]),a=S(a+t[o+2*e]),f=S(f+t[o+3*e]),c=S(c+t[o+4*e]),l=S(l+t[o+5*e]),y=S(y+t[o+6*e]),p=S(p+t[o+7*e]),o+=8*e;for(b=S(S(S(u+i)+S(a+f))+S(S(c+l)+S(y+p)));d<r;d++)b=S(b+t[o]),o+=e;return b}return v=rr(r/2),S(tr(v-=v%8,t,e,o)+tr(r-v,t,e,o+v*e))}function er(r,t,e){var n,o,u;if(r<=0)return 0;if(1===r||0===e)return t[0];if(n=e<0?(1-r)*e:0,r<8){for(o=0,u=0;u<r;u++)o=S(o+t[n]),n+=e;return o}return tr(r,t,e,n)}y(er,"ndarray",tr);var nr,or=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return Z(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,r.join)(__dirname,"./native.js")),ur=nr=Z(or)?er:or;const{ndarray:ir}=nr;function ar(r,t,e){return r<=0?NaN:1===r||0===e?t[0]:S(ur(r,t,e)/r)}return y(ar,"ndarray",(function(r,t,e,n){return r<=0?NaN:1===r||0===e?t[n]:S(ir(r,t,e,n)/r)})),ar}));
//# sourceMappingURL=index.js.map
