import{a as z,j as e}from"./DefaultPropsProvider-BtHbA0VU.js";import{r as l}from"./index-uubelm5h.js";import{f as m,w as I,u as h}from"./index-R3fZrLBo.js";import{M as B}from"./MiniSearchBox-DAl6x447.js";import{P as T}from"./Popover-CfS_i-dx.js";import{I as A}from"./TelicentMark-BBOKqb96.js";import{D}from"./UserProfile-DH3NPQUP.js";import"./extends-EO7Nsyo1.js";import"./DataSetIcon-DsGT7IFR.js";import"./SvgIcon-S8kFURX4.js";import"./styled-Buz43Nzf.js";import"./generateUtilityClasses-TKejRb6k.js";import"./UserIcon-C1aAmYHQ.js";import"./styled-BcC_VGTi.js";import"./useThemeProps-2Kac9Ors.js";import"./useTheme-Ckz7wL11.js";import"./UserStatus-Bg7_-Idp.js";import"./Menu-BIob4-3N.js";import"./ButtonBase-D7y6zplg.js";import"./TransitionGroupContext-CLVPPxcC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-CB99OiCM.js";import"./Popover-5L_d726T.js";import"./utils-C0stDFpQ.js";import"./index-CfOt2XX2.js";import"./resolveComponentProps-D7nVAgbQ.js";import"./useTheme-D3IlMF1k.js";import"./Paper-Dc6_5F_g.js";import"./Text-DbVIG1jU.js";import"./UserProfileContent-oGgpE1lR.js";import"./createSvgIcon-DDKUBMCt.js";import"./Chip-ACVHw5As.js";import"./TreeView-jAlqStSJ.js";import"./index-Bres9Iq4.js";import"./colorManipulator-CLgUjkf2.js";import"./Container-CFYF8oBU.js";import"./OutlinedInput-eeCWHHcy.js";import"./InputBase-GoKfmZlB.js";import"./GlobalStyles-BjGl2I2w.js";import"./index-DXqQCM1T.js";const fo={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:m(),onTogglePopOver:m()}},t={args:{placeholder:"Search"},play:async({canvasElement:a})=>{const r=I(a);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:a=>{const[r,x]=l.useState(null),[i,p]=l.useState(!1),c=s=>{x(s.currentTarget),p(!0)},b=()=>{p(s=>!s)};return z("div",{children:[e(B,{...a,onTogglePopOver:c,endIcon:e(A,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(D,{rotation:i?180:void 0,fontSize:"inherit"})})}),e(T,{id:"search-popover",open:i,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: "Search"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole("searchbox"), "River Nile");
    await userEvent.click(canvas.getByRole("button", {
      name: "search"
    }));
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var v,w,P;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    placeholder: "Search"
  },
  render: args => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [showPopOver, setShowPopOver] = useState(false);
    const openPopUp = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setShowPopOver(true);
    };
    const togglePopUp = () => {
      setShowPopOver(show => !show);
    };
    return <div>
        <MiniSearchBox {...args} onTogglePopOver={openPopUp} endIcon={<IconButton size="small" aria-label="toggle pop over" onClick={openPopUp}>
              <DownArrowIcon rotation={showPopOver ? 180 : undefined} fontSize="inherit" />
            </IconButton>} />
        <PopOver id="search-popover" open={showPopOver} anchorEl={anchorEl} anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }} transformOrigin={{
        vertical: -10,
        horizontal: 214
      }} width={254} onClose={togglePopUp}>
          Pop over content goes here
        </PopOver>
      </div>;
  }
}`,...(P=(w=n.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var S,f,O,E,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: "Loading",
    loading: true
  }
}`,...(O=(f=o.parameters)==null?void 0:f.docs)==null?void 0:O.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:y.description}}};const Oo=["Demo","WithDownArrow","Loading"];export{t as Demo,o as Loading,n as WithDownArrow,Oo as __namedExportsOrder,fo as default};
