import{j as t}from"./DefaultPropsProvider-BtHbA0VU.js";import{u as n}from"./useTheme-D3IlMF1k.js";import{P as r}from"./Popover-5L_d726T.js";const i=e=>{const o=n();return t(r,{elevation:3,slotProps:{paper:{sx:{backgroundColor:o.palette.mode==="dark"?"#2A2A2A":"#eee",backgroundImage:"none",width:e.width,padding:2}}},...e})};i.__docgenInfo={description:`A PopOver can be used to display some content on top of another.

Things to know when using the PopOver component:
- The component is built on top of the Modal component.`,methods:[],displayName:"PopOver",props:{anchorEl:{required:!1,tsType:{name:'MUIPopOverProps["anchorEl"]',raw:'MUIPopOverProps["anchorEl"]'},description:"Used to set the position of the pop over"},anchorOrigin:{required:!1,tsType:{name:"PopoverOrigin"},description:`Anchor element anchor. This is the point on the anchor where the pop over's
\`anchorEl\` will attach to. Should not e used when anchorReference is
'anchorPosition'.

Options:
vertical: [top, center, bottom];
horizontal: [left, center, right].
@default {
  vertical: 'top',
  horizontal: 'left',
}`},anchorPosition:{required:!1,tsType:{name:"PopoverPosition"},description:`This is the position that may be used to set the position of the pop over.
The coordinates are relative to the application's client area.`},anchorReference:{required:!1,tsType:{name:"PopoverReference"},description:`This determines which anchor prop to refer to when setting
the position of the pop over.
@default 'anchorEl'`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component."},open:{required:!0,tsType:{name:"boolean"},description:"If `true`, the component is shown."},transformOrigin:{required:!1,tsType:{name:"PopoverOrigin"},description:`This is the point on the pop over which
will attach to the anchor's origin.

Options:
vertical: [top, center, bottom, x(px)];
horizontal: [left, center, right, x(px)].
@default {
  vertical: 'top',
  horizontal: 'left',
}`},width:{required:!1,tsType:{name:"number"},description:""}},composes:["Omit"]};export{i as P};
