"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=i(function(b,s){
var f=require('@stdlib/number-float64-base-to-float32/dist'),y=require('@stdlib/blas-ext-base-ssumpw/dist').ndarray;function d(r,e,a,n){return r<=0?NaN:r===1||a===0?e[n]:f(y(r,e,a,n)/r)}s.exports=d
});var o=i(function(g,v){
var w=require('@stdlib/strided-base-stride2offset/dist'),l=t();function j(r,e,a){return l(r,e,a,w(r,a))}v.exports=j
});var m=i(function(h,p){
var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=o(),R=t();x(q,"ndarray",R);p.exports=q
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),O=m(),u,c=E(_(__dirname,"./native.js"));F(c)?u=O:u=c;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
