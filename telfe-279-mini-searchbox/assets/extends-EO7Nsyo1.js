import{r as p}from"./index-uubelm5h.js";var _={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=p,c=Symbol.for("react.element"),m=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function f(t,e,n){var r,o={},a=null,l=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(l=e.ref);for(r in e)y.call(e,r)&&!v.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:c,type:t,key:a,ref:l,props:o,_owner:d.current}}s.Fragment=m;s.jsx=f;s.jsxs=f;_.exports=s;var O=_.exports;function u(){return u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u.apply(null,arguments)}const b=Object.freeze(Object.defineProperty({__proto__:null,get default(){return u}},Symbol.toStringTag,{value:"Module"}));export{u as _,b as a,O as j};
