import{s as b,Y as x,r as l,h as d,P as j,j as o,bW as v,ae as H,co as I,a9 as k,aJ as B,af as E,aZ as y}from"./sanity-67340f08.js";import{useDeskTool as C}from"./index-6c71f0c1-c6c44e7b.js";import"./index-77f76fd6.js";var u;function O(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function g(t){const{actionHandlers:e,index:s,menuItems:n,menuItemGroups:r,title:i}=t,{features:a}=C();return!(n!=null&&n.length)&&!i?null:o(H,{actions:o(I,{menuItems:n,menuItemGroups:r,actionHandlers:e}),backButton:a.backButton&&s>0&&o(k,{as:B,"data-as":"a",icon:E,mode:"bleed"}),title:i})}const L=b(x)(u||(u=O([`
  position: relative;
`])));function T(t){const{children:e}=t,{collapsed:s}=y();return o(L,{hidden:s,height:"fill",overflow:"auto",children:e})}function G(t){const{index:e,pane:s,paneKey:n,...r}=t,{child:i,component:a,menuItems:m,menuItemGroups:p,title:f="",type:U,...P}=s,[c,h]=l.useState(null);return d(j,{id:n,minWidth:320,selected:r.isSelected,children:[o(g,{actionHandlers:c==null?void 0:c.actionHandlers,index:e,menuItems:m,menuItemGroups:p,title:f}),d(T,{children:[v.isValidElementType(a)&&l.createElement(a,{...r,...P,ref:h,child:i,paneKey:n}),l.isValidElement(a)&&a]})]})}export{G as default};
