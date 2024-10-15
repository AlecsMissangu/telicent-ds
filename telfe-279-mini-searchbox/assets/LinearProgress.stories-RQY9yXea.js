import{l as C,e as t,b as y,u as A,_ as O,m as U,n as T,j as E}from"./DefaultPropsProvider-BtHbA0VU.js";import{_ as s,j as m}from"./extends-EO7Nsyo1.js";import{r as K}from"./index-uubelm5h.js";import{g as X,s as p,c as F,a as W}from"./styled-Buz43Nzf.js";import{u as G}from"./index-CB99OiCM.js";import{g as H}from"./generateUtilityClasses-TKejRb6k.js";function J(r){return X("MuiLinearProgress",r)}H("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const Q=["className","color","value","valueBuffer","variant"];let l=r=>r,L,_,k,B,I,R;const h=4,V=C(L||(L=l`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),Y=C(_||(_=l`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),Z=C(k||(k=l`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),w=r=>{const{classes:a,variant:e,color:o}=r,g={root:["root",`color${t(o)}`,e],dashed:["dashed",`dashedColor${t(o)}`],bar1:["bar",`barColor${t(o)}`,(e==="indeterminate"||e==="query")&&"bar1Indeterminate",e==="determinate"&&"bar1Determinate",e==="buffer"&&"bar1Buffer"],bar2:["bar",e!=="buffer"&&`barColor${t(o)}`,e==="buffer"&&`color${t(o)}`,(e==="indeterminate"||e==="query")&&"bar2Indeterminate",e==="buffer"&&"bar2Buffer"]};return W(g,J,a)},x=(r,a)=>a==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${a}Bg`]:r.palette.mode==="light"?U(r.palette[a].main,.62):T(r.palette[a].main,.5),S=p("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.root,a[`color${t(e.color)}`],a[e.variant]]}})(({ownerState:r,theme:a})=>s({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:x(a,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),rr=p("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.dashed,a[`dashedColor${t(e.color)}`]]}})(({ownerState:r,theme:a})=>{const e=x(a,r.color);return s({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${e} 0%, ${e} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},y(B||(B=l`
    animation: ${0} 3s infinite linear;
  `),Z)),ar=p("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.bar,a[`barColor${t(e.color)}`],(e.variant==="indeterminate"||e.variant==="query")&&a.bar1Indeterminate,e.variant==="determinate"&&a.bar1Determinate,e.variant==="buffer"&&a.bar1Buffer]}})(({ownerState:r,theme:a})=>s({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(a.vars||a).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${h}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${h}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&y(I||(I=l`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),V)),er=p("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.bar,a[`barColor${t(e.color)}`],(e.variant==="indeterminate"||e.variant==="query")&&a.bar2Indeterminate,e.variant==="buffer"&&a.bar2Buffer]}})(({ownerState:r,theme:a})=>s({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(a.vars||a).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:x(a,r.color),transition:`transform .${h}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&y(R||(R=l`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),Y)),or=K.forwardRef(function(a,e){const o=A({props:a,name:"MuiLinearProgress"}),{className:g,color:D="primary",value:v,valueBuffer:P,variant:i="indeterminate"}=o,z=O(o,Q),c=s({},o,{color:D,variant:i}),d=w(c),$=G(),u={},f={bar1:{},bar2:{}};if((i==="determinate"||i==="buffer")&&v!==void 0){u["aria-valuenow"]=Math.round(v),u["aria-valuemin"]=0,u["aria-valuemax"]=100;let n=v-100;$&&(n=-n),f.bar1.transform=`translateX(${n}%)`}if(i==="buffer"&&P!==void 0){let n=(P||0)-100;$&&(n=-n),f.bar2.transform=`translateX(${n}%)`}return m.jsxs(S,s({className:F(d.root,g),ownerState:c,role:"progressbar"},u,{ref:e},z,{children:[i==="buffer"?m.jsx(rr,{className:d.dashed,ownerState:c}):null,m.jsx(ar,{className:d.bar1,ownerState:c,style:f.bar1}),i==="determinate"?null:m.jsx(er,{className:d.bar2,ownerState:c,style:f.bar2})]}))}),M=({...r})=>E(or,{...r});M.__docgenInfo={description:"",methods:[],displayName:"LinearProgress"};const dr={title:"Feedback/Linear progress",component:M},b={parameters:{docs:{description:{story:"A line"}}}};var j,N,q;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`A line\`
      }
    }
  }
}`,...(q=(N=b.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};const ur=["Basic"];export{b as Basic,ur as __namedExportsOrder,dr as default};
