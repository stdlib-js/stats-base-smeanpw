// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,s,y;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),s="get"in n,y="set"in n,l&&(s||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,t,n.get),y&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var s="function"==typeof Math.fround?Math.fround:null;var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var d,j="function"==typeof Symbol?Symbol.toStringTag:"";d=p()?function(r){var t,n,e,o,u;if(null==r)return b.call(r);n=r[j],u=j,t=null!=(o=r)&&v.call(o,u);try{r[j]=void 0}catch(t){return b.call(r)}return e=b.call(r),t?r[j]=n:delete r[j],e}:function(r){return b.call(r)};var w=d,_="function"==typeof Float32Array;var g=Number.POSITIVE_INFINITY,m="function"==typeof Float32Array?Float32Array:null;var h,A="function"==typeof Float32Array?Float32Array:void 0;h=function(){var r,t,n;if("function"!=typeof m)return!1;try{t=new m([1,3.14,-3.14,5e40]),n=t,r=(_&&n instanceof Float32Array||"[object Float32Array]"===w(n))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===g}catch(t){r=!1}return r}()?A:function(){throw new Error("not implemented")};var O=new h(1);var E="function"==typeof s?s:function(r){return O[0]=r,O[0]};function S(r){var t=function(r){return"/"===r.charAt(0)}(r),n="/"===P(r,-1);return(r=function(r,t){for(var n=0,e=r.length-1;e>=0;e--){var o=r[e];"."===o?r.splice(e,1):".."===o?(r.splice(e,1),n++):n&&(r.splice(e,1),n--)}if(t)for(;n--;n)r.unshift("..");return r}(F(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&n&&(r+="/"),(t?"/":"")+r}function F(r,t){if(r.filter)return r.filter(t);for(var n=[],e=0;e<r.length;e++)t(r[e],e,r)&&n.push(r[e]);return n}var P="b"==="ab".substr(-1)?function(r,t,n){return r.substr(t,n)}:function(r,t,n){return t<0&&(t=r.length+t),r.substr(t,n)},N=/./;function T(r){return"boolean"==typeof r}var B=Boolean.prototype.toString;var I=p();function x(r){return"object"==typeof r&&(r instanceof Boolean||(I?function(r){try{return B.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===w(r)))}function M(r){return T(r)||x(r)}function V(){return new Function("return this;")()}l(M,"isPrimitive",T),l(M,"isObject",x);var k="object"==typeof self?self:null,C="object"==typeof window?window:null,G="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},L="object"==typeof G?G:null;var q=function(r){if(arguments.length){if(!T(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return V()}if(k)return k;if(C)return C;if(L)return L;throw new Error("unexpected error. Unable to resolve global object.")}(),J=q.document&&q.document.childNodes,R=Int8Array;function U(){return/^\s*function\s*([^(]*)/i}var X,Y=/^\s*function\s*([^(]*)/i;l(U,"REGEXP",Y),X=Array.isArray?Array.isArray:function(r){return"[object Array]"===w(r)};var z=X;function D(r){return null!==r&&"object"==typeof r}var H=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!z(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(D);function K(r){var t,n,e,o;if(("Object"===(n=w(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=Y.exec(e.toString()))return t[1]}return D(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(D,"isObjectLikeArray",H);var Q="function"==typeof N||"object"==typeof R||"function"==typeof J?function(r){return K(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?K(r).toLowerCase():t};var W,Z,$=Object.getPrototypeOf;Z=Object.getPrototypeOf,W="function"===Q(Z)?$:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===w(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var rr=W;function tr(r){return null==r?null:(r=Object(r),rr(r))}function nr(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===w(r))return!0;r=tr(r)}return!1}var er,or=Math.floor;function ur(r,t,n,e){var o,u,i,f,a,c,l,s,y,p,b,v,d;if(r<=0)return 0;if(1===r||0===n)return t[e];if(o=e,r<8){for(b=0,d=0;d<r;d++)b=E(b+t[o]),o+=n;return b}if(r<=128){for(u=t[o],i=t[o+n],f=t[o+2*n],a=t[o+3*n],c=t[o+4*n],l=t[o+5*n],s=t[o+6*n],y=t[o+7*n],o+=8*n,p=r%8,d=8;d<r-p;d+=8)u=E(u+t[o]),i=E(i+t[o+n]),f=E(f+t[o+2*n]),a=E(a+t[o+3*n]),c=E(c+t[o+4*n]),l=E(l+t[o+5*n]),s=E(s+t[o+6*n]),y=E(y+t[o+7*n]),o+=8*n;for(b=E(E(E(u+i)+E(f+a))+E(E(c+l)+E(s+y)));d<r;d++)b=E(b+t[o]),o+=n;return b}return v=or(r/2),E(ur(v-=v%8,t,n,o)+ur(r-v,t,n,o+v*n))}function ir(r,t,n){var e,o,u;if(r<=0)return 0;if(1===r||0===n)return t[0];if(e=n<0?(1-r)*n:0,r<8){for(o=0,u=0;u<r;u++)o=E(o+t[e]),e+=n;return o}return ur(r,t,n,e)}l(ir,"ndarray",ur);var fr=function(r){try{return require(r)}catch(r){return nr(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}(function(){var r=Array.prototype.slice.call(arguments,0);return S(F(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}("/home/runner/work/stats-base-smeanpw/stats-base-smeanpw/node_modules/@stdlib/blas-ext-base-ssumpw/lib","./native.js")),ar=er=nr(fr)?ir:fr;const{ndarray:cr}=er;function lr(r,t,n){return r<=0?NaN:1===r||0===n?t[0]:E(ar(r,t,n)/r)}function sr(r,t,n,e){return r<=0?NaN:1===r||0===n?t[e]:E(cr(r,t,n,e)/r)}l(lr,"ndarray",sr);export{lr as default,sr as ndarray};
//# sourceMappingURL=mod.js.map
