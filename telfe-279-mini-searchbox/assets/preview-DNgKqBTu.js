import{h as M,D as A,_ as P,T as S,u as _,y as p,x as C,a as R,j as x}from"./DefaultPropsProvider-BtHbA0VU.js";import{j as d,_ as c}from"./extends-EO7Nsyo1.js";import{r as g}from"./index-uubelm5h.js";import{a as G}from"./useTheme-Ckz7wL11.js";import{R as $}from"./index-CB99OiCM.js";import{z as j}from"./index-DXqQCM1T.js";import{a as n}from"./colorManipulator-CLgUjkf2.js";import{G as I}from"./GlobalStyles-BjGl2I2w.js";const O=g.createContext(null);function D(){return g.useContext(O)}const B=typeof Symbol=="function"&&Symbol.for,U=B?Symbol.for("mui.nested"):"__THEME_NESTED__";function W(e,t){return typeof t=="function"?t(e):c({},e,t)}function z(e){const{children:t,theme:o}=e,r=D(),a=g.useMemo(()=>{const i=r===null?o:W(r,o);return i!=null&&(i[U]=r!==null),i},[o,r]);return d.jsx(O.Provider,{value:a,children:t})}const F={};function w(e,t,o,r=!1){return g.useMemo(()=>{const a=e&&t[e]||t;if(typeof o=="function"){const i=o(a),l=e?c({},t,{[e]:i}):i;return r?()=>l:l}return e?c({},t,{[e]:o}):c({},t,o)},[e,t,o,r])}function L(e){const{children:t,theme:o,themeId:r}=e,a=G(F),i=D()||F,l=w(r,a,o),k=w(r,i,o,!0),h=l.direction==="rtl";return d.jsx(z,{theme:k,children:d.jsx(M.Provider,{value:l,children:d.jsx($,{value:h,children:d.jsx(A,{value:l==null?void 0:l.components,children:t})})})})}const N=["theme"];function H(e){let{theme:t}=e,o=P(e,N);const r=t[S];return d.jsx(L,c({},o,{themeId:r?S:void 0,theme:r||t}))}const Y=(e,t)=>c({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),V=e=>c({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),q=(e,t=!1)=>{var o;const r={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([l,k])=>{var h;r[e.getColorSchemeSelector(l).replace(/\s*&/,"")]={colorScheme:(h=k.palette)==null?void 0:h.mode}});let a=c({html:Y(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:c({margin:0},V(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},r);const i=(o=e.components)==null||(o=o.MuiCssBaseline)==null?void 0:o.styleOverrides;return i&&(a=[a,i]),a};function K(e){const t=_({props:e,name:"MuiCssBaseline"}),{children:o,enableColorScheme:r=!1}=t;return d.jsxs(g.Fragment,{children:[d.jsx(I,{styles:a=>q(a,r)}),o]})}const J={MuiAvatar:{variants:[{props:{variant:"circular-outlined"},style:({theme:e})=>{const t=e.palette.primary.main===p.white?e.palette.primary.contrastText:e.palette.primary.main;return{backgroundColor:"transparent",border:`2px solid ${t}`,color:t}}}]}},y={50:"#F8F8F8",100:"#EBEDFA",200:"#8D99E2",400:"#5969D5",500:"#2F44CA",600:"#2636A2"},m="#F56AAA",v={50:n(m,.1),100:n(m,.2),200:n(m,.3),400:n(m,.5),500:m,600:n(m,.7)},u="#F2A64B",b={50:n(u,.1),100:n(u,.2),200:n(u,.3),400:n(u,.5),500:u,600:n(u,.7)},Q=j.enum(["light","DataNavy","DocumentPink","GraphOrange"]),T=p.white,s={DataNavy:{...y,main:y[500],light:y[400],dark:y[600],contrastText:p.white},light:{main:T,light:n(T,.5),dark:n(T,.9),contrastText:p.black},DocumentPink:{...v,main:v[500],light:v[400],dark:v[600],contrastText:p.black},GraphOrange:{...b,main:b[500],light:b[400],dark:b[600],contrastText:p.black}},X=e=>({MuiButton:{styleOverrides:{root:({theme:t})=>({paddingInline:t.spacing(2)}),outlinedInherit:({theme:t})=>({border:"1px solid #CFD8DC",boxShadow:t.shadows[2]}),outlinedPrimary:({theme:t})=>({border:`1px solid ${t.palette.primary.main}`,backgroundColor:t.palette.secondary.main,":hover":{backgroundColor:e==="light"||e==="dark"?"inherit":`${s[e][100]}`}}),startIcon:{">*:nth-last-of-type(1)":{fontSize:"inherit"}},endIcon:{">*:nth-last-of-type(1)":{fontSize:"inherit"}}}},MuiIconButton:{styleOverrides:{root:{borderRadius:4}}}}),Z=e=>({MuiCard:{variants:[{props:{variant:"outlined"},style:{borderWidth:1,borderStyle:"solid",borderColor:e==="light"?"inherit":n(s[e][200],.4)}}],styleOverrides:{root:({theme:t})=>({borderRadius:t.spacing(1)})}},MuiCardContent:{styleOverrides:{root:({theme:t})=>({padding:t.spacing(3),":last-child":{padding:t.spacing(3)}})}},MuiCardActions:{styleOverrides:{root:{padding:0,flexDirection:"row-reverse",width:"100%"}}}}),ee=""+new URL("space-grotesk-regular-CrKuzqyc.woff2",import.meta.url).href,te=""+new URL("space-grotesk-medium-DtUIId4r.woff2",import.meta.url).href,oe=""+new URL("figtree-regular-DJehXiwO.woff2",import.meta.url).href,re=""+new URL("figtree-medium-DTnpyN7E.woff2",import.meta.url).href,ne=""+new URL("figtree-bold-BoIU7eQ0.woff2",import.meta.url).href,f={heading:"Space Grotesk, Helvetica, Arial, sans-serif",body:"Figtree, Helvetica, Arial, sans-serif"},ae={fontFamily:f.body,h1:{fontFamily:f.heading},h2:{fontFamily:f.heading},h3:{fontFamily:f.heading},h4:{fontFamily:f.heading,fontWeight:500,fontSize:"2rem"},h5:{fontFamily:f.heading},h6:{fontFamily:f.heading},button:{textTransform:"none"},body1:{fontWeight:500},subtitle1:{fontWeight:700}},ie={MuiCssBaseline:{styleOverrides:`
    @font-face {
      font-family: 'Space Grotesk';
      font-style: normal;
      font-variant: normal;
      font-weight: 400;
      src: local('Space Grotesk'), url(${ee}) format('woff2');
    }

    @font-face {
      font-family: 'Space Grotesk';
      font-style: normal;
      font-variant: normal;
      font-weight: 500;
      src: local('Space Grotesk'), url(${te}) format('woff2');
    }

    @font-face {
      font-family: 'Figtree';
      font-style: normal;
      font-variant: normal;
      font-weight: 400;
      src: local('Figtree'), url(${oe}) format('woff2');
    }

    @font-face {
      font-family: 'Figtree';
      font-style: normal;
      font-variant: normal;
      font-weight: 500;
      src: local('Figtree'), url(${re}) format('woff2');
    }

    @font-face {
      font-family: 'Figtree';
      font-style: normal;
      font-variant: normal;
      font-weight: 700;
      src: local('Figtree'), url(${ne}) format('woff2');
    }
    `}},se=e=>({...J,...X(e),...Z(e),MuiAppBar:{styleOverrides:{root:{height:70}}},MuiCssBaseline:{...ie.MuiCssBaseline}}),le=e=>({mode:"light",primary:{main:s[e].main,light:s[e].light,dark:s[e].dark,contrastText:s[e].contrastText},secondary:{main:"#F9F9F9"},warning:void 0,info:void 0,success:void 0,background:{default:"#F8F9F9"}}),ce=e=>({mode:"dark",primary:{main:s[e].main,light:s[e].light,dark:s[e].dark,contrastText:s[e].contrastText},secondary:{main:"#222222"},warning:void 0,info:void 0,success:void 0,background:{default:"#1D1D1D"}}),de=(e,t)=>C({components:se(e),palette:t?ce(e):le(e),typography:ae}),E=({dark:e=!1,theme:t,children:o})=>R(H,{theme:de(t,e),children:[x(K,{}),o]});E.__docgenInfo={description:"",methods:[],displayName:"UIThemeProvider",props:{theme:{required:!0,tsType:{name:"zod.infer",elements:[{name:"UIThemeSchema"}],raw:"zod.infer<typeof UIThemeSchema>"},description:""},dark:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const be={decorators:[(e,t)=>{const o=t.globals.mode||"light",r=t.globals.theme||"GraphOrange";return x(E,{dark:o==="dark",theme:r,children:x(e,{})})}],globalTypes:{mode:{description:"Global mode for components",toolbar:{title:"Mode",items:[{value:"light",title:"Light"},{value:"dark",title:"Dark"}],dynamicTitle:!0}},theme:{description:"Global UI theme for components",toolbar:{title:"Theme",items:Q.options,dynamicTitle:!0}}},initialGlobals:{mode:"light",theme:"GraphOrange"},parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}}};export{be as default};
