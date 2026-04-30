"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var a=t(function(h,n){
var u=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-ceil/dist'),o=require('@stdlib/math-base-special-ln/dist'),N=require('@stdlib/constants-float64-pinf/dist');function y(r,e){return u(e)||u(r)||e<=0||r<0||r>1?NaN:r===1?N:f(-o(1-r)/e)-1}n.exports=y
});var s=t(function(j,c){
var l=require('@stdlib/utils-constant-function/dist'),q=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-special-ceil/dist'),F=require('@stdlib/math-base-special-ln/dist'),I=require('@stdlib/constants-float64-pinf/dist');function P(r){if(q(r)||r<=0)return l(NaN);return e;function e(i){return q(i)||i<0||i>1?NaN:i===1?I:x(-F(1-i)/r)-1}}c.exports=P
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=a(),R=s();O(v,"factory",R);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
