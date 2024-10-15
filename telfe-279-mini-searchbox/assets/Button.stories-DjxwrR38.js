import{j as e,a as D,F as j}from"./DefaultPropsProvider-BtHbA0VU.js";import{f as k}from"./index-R3fZrLBo.js";import{B as t}from"./Button-BczTwcI3.js";import{D as m}from"./DataSetIcon-DsGT7IFR.js";import{B as A}from"./ButtonBase-D7y6zplg.js";import"./extends-EO7Nsyo1.js";import"./index-uubelm5h.js";import"./PrimaryButton-Bc_R5nCK.js";import"./Button-DIuBcF8t.js";import"./styled-Buz43Nzf.js";import"./generateUtilityClasses-TKejRb6k.js";import"./useTheme-D3IlMF1k.js";import"./useTheme-Ckz7wL11.js";import"./SvgIcon-S8kFURX4.js";import"./TransitionGroupContext-CLVPPxcC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";const R={title:"Inputs/Button",component:t,parameters:{docs:{description:{component:"Buttons allow users to take actions, and make choices, with a single tap."}}},tags:["autodocs"],args:{children:"Button",onClick:k()},decorators:r=>e(A,{sx:{button:{marginInline:2}},children:r()})},o={args:{variant:"primary"}},a={args:{variant:"secondary"}},n={args:{variant:"tertiary"}},s={render:r=>D(j,{children:[e(t,{size:"large",children:r.children}),e(t,{size:"medium",children:r.children}),e(t,{size:"small",children:r.children})]}),parameters:{docs:{description:{story:"For larger or smaller buttons, use the `size` prop."}}}},i={render:r=>D(j,{children:[e(t,{startIcon:e(m,{}),children:r.children}),e(t,{endIcon:e(m,{}),children:r.children})]}),parameters:{docs:{description:{story:`Sometimes you might want to have icons for certain buttons to 
        enhance the UX of the application as we recognize logos more easily than 
        plain text.`}}}},c={args:{fullWidth:!0}};var d,p,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,h,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,B,S;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "tertiary"
  }
}`,...(S=(B=n.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var f,z,I;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <>
      <Button size="large">{args.children}</Button>
      <Button size="medium">{args.children}</Button>
      <Button size="small">{args.children}</Button>
    </>,
  parameters: {
    docs: {
      description: {
        story: "For larger or smaller buttons, use the \`size\` prop."
      }
    }
  }
}`,...(I=(z=s.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var v,x,b;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <>
      <Button startIcon={<DataSetIcon />}>{args.children}</Button>
      <Button endIcon={<DataSetIcon />}>{args.children}</Button>
    </>,
  parameters: {
    docs: {
      description: {
        story: \`Sometimes you might want to have icons for certain buttons to 
        enhance the UX of the application as we recognize logos more easily than 
        plain text.\`
      }
    }
  }
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var w,F,W;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  }
}`,...(W=(F=c.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};const V=["Primary","Secondary","Tertiary","Sizing","WithIconsAndLabel","FullWidth"];export{c as FullWidth,o as Primary,a as Secondary,s as Sizing,n as Tertiary,i as WithIconsAndLabel,V as __namedExportsOrder,R as default};
