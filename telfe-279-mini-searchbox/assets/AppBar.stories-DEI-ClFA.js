import{j as r,a as S}from"./DefaultPropsProvider-BtHbA0VU.js";import{w as x,u as h}from"./index-R3fZrLBo.js";import{A as T}from"./TelicentMark-BBOKqb96.js";import"./DataSetIcon-DsGT7IFR.js";import"./UserIcon-C1aAmYHQ.js";import{U}from"./UserProfile-DH3NPQUP.js";import{U as v}from"./UserStatus-Bg7_-Idp.js";import{T as t}from"./Text-DbVIG1jU.js";import"./Chip-ACVHw5As.js";import"./TreeView-jAlqStSJ.js";import"./UserProfileContent-oGgpE1lR.js";import"./extends-EO7Nsyo1.js";import"./index-uubelm5h.js";import"./styled-Buz43Nzf.js";import"./SvgIcon-S8kFURX4.js";import"./generateUtilityClasses-TKejRb6k.js";import"./useTheme-D3IlMF1k.js";import"./useTheme-Ckz7wL11.js";import"./Container-CFYF8oBU.js";import"./styled-BcC_VGTi.js";import"./useThemeProps-2Kac9Ors.js";import"./index-DXqQCM1T.js";import"./Menu-BIob4-3N.js";import"./ButtonBase-D7y6zplg.js";import"./TransitionGroupContext-CLVPPxcC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-CB99OiCM.js";import"./Popover-5L_d726T.js";import"./utils-C0stDFpQ.js";import"./index-CfOt2XX2.js";import"./resolveComponentProps-D7nVAgbQ.js";import"./Paper-Dc6_5F_g.js";import"./index-Bres9Iq4.js";import"./createSvgIcon-DDKUBMCt.js";import"./colorManipulator-CLgUjkf2.js";const ar={title:"Surfaces/AppBar",component:T,tags:["autodocs"],parameters:{layout:"fullscreen"}},o={},e={args:{appName:"Design System"}},a={args:{...e.args,userProfile:r(U,{fullName:"Han Solo",children:S(v,{fullName:"Han Solo",children:[r(t,{variant:"subtitle1",children:"Roles"}),r(t,{children:"Smuggler"}),r(t,{children:"Scoundrel"}),r(t,{children:"Hero"})]})})},play:async({canvasElement:d})=>{const g=x(d);await h.click(g.getByRole("button",{name:"user-profile"}))}};var s,i,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,n,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    appName: "Design System"
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,u,f;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...WithAppName.args,
    userProfile: <UserProfile fullName="Han Solo">
        <UserStatus fullName="Han Solo">
          <Text variant="subtitle1">Roles</Text>
          <Text>Smuggler</Text>
          <Text>Scoundrel</Text>
          <Text>Hero</Text>
        </UserStatus>
      </UserProfile>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "user-profile"
    }));
  }
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const sr=["Example","WithAppName","WithUserProfile"];export{o as Example,e as WithAppName,a as WithUserProfile,sr as __namedExportsOrder,ar as default};
