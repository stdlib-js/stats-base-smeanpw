"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=i(function(b,n){
var c=require('@stdlib/number-float64-base-to-float32/dist'),l=require('@stdlib/blas-ext-base-ssumpw/dist');function w(r,e,a){return r<=0?NaN:r===1||a===0?e[0]:c(l(r,e,a)/r)}n.exports=w
});var v=i(function(g,o){
var y=require('@stdlib/number-float64-base-to-float32/dist'),d=require('@stdlib/blas-ext-base-ssumpw/dist').ndarray;function j(r,e,a,t){return r<=0?NaN:r===1||a===0?e[t]:y(d(r,e,a,t)/r)}o.exports=j
});var m=i(function(h,p){
var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=s(),F=v();x(q,"ndarray",F);p.exports=q
});var R=require("path").join,T=require('@stdlib/utils-try-require/dist'),_=require('@stdlib/assert-is-error/dist'),E=m(),u,f=T(R(__dirname,"./native.js"));_(f)?u=E:u=f;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
