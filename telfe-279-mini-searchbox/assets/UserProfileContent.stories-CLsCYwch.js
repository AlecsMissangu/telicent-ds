import{j as e,a as r,F as x}from"./DefaultPropsProvider-BtHbA0VU.js";import{U as g}from"./UserProfileContent-oGgpE1lR.js";import{F as a}from"./UserIcon-C1aAmYHQ.js";import{T as o}from"./Text-DbVIG1jU.js";import{B as s}from"./Button-BczTwcI3.js";import"./extends-EO7Nsyo1.js";import"./index-uubelm5h.js";import"./styled-Buz43Nzf.js";import"./createSvgIcon-DDKUBMCt.js";import"./SvgIcon-S8kFURX4.js";import"./generateUtilityClasses-TKejRb6k.js";import"./resolveComponentProps-D7nVAgbQ.js";import"./TransitionGroupContext-CLVPPxcC.js";import"./styled-BcC_VGTi.js";import"./useThemeProps-2Kac9Ors.js";import"./useTheme-Ckz7wL11.js";import"./PrimaryButton-Bc_R5nCK.js";import"./Button-DIuBcF8t.js";import"./ButtonBase-D7y6zplg.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./useTheme-D3IlMF1k.js";const I={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:t=>e("div",{style:{width:300},children:e(t,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],n={args:{children:u.slice(0,3).map(t=>r(a,{children:[e(o,{children:e("b",{children:t.heading})}),e(o,{children:t.value})]},t.heading))}},i={args:{children:r(x,{children:[u.map(t=>r(a,{children:[e(o,{children:e("b",{children:t.heading})}),e(o,{children:t.value})]},t.heading)),r(a,{direction:"row",columnGap:2,justifyContent:"end",children:[e(s,{variant:"secondary",disableElevation:!0,children:"Action"}),e(s,{disableElevation:!0,children:"Action"})]})]})}};var d,l,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: items.slice(0, 3).map(item => <FlexBox key={item.heading}>
        <Text>
          <b>{item.heading}</b>
        </Text>
        <Text>{item.value}</Text>
      </FlexBox>)
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <>
        {items.map(item => <FlexBox key={item.heading}>
            <Text>
              <b>{item.heading}</b>
            </Text>
            <Text>{item.value}</Text>
          </FlexBox>)}
        <FlexBox direction="row" columnGap={2} justifyContent="end">
          <Button variant="secondary" disableElevation>
            Action
          </Button>
          <Button disableElevation>Action</Button>
        </FlexBox>
      </>
  }
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const P=["Basic","WithActions"];export{n as Basic,i as WithActions,P as __namedExportsOrder,I as default};
