import{j as s}from"./jsx-runtime-DR9Q75dM.js";import{C as i}from"./HoveredEmptyWorkspace-CTDpKANu.js";import{c as a}from"./cssCategoryList-CfnxYM_i.js";import"./blockly_compressed-Csa91utS.js";import"./index-DRjF_FHU.js";import"./index-D1AAVYfs.js";import"./useWorkspaceStore-B_R62rvF.js";import"./QueryClientProvider-BdRu95_o.js";import"./GuideVideo-MGmf4GR2.js";import"./CircleButton-CZ-LhlOb.js";import"./SquareButton-hj7tViqk.js";import"./Logo-Ca0csvGK.js";import"./index-x70cJmE6.js";import"./index-BXCeiWJk.js";import"./ToasterWithMax-D4jPvwZi.js";import"./Loading-CVQUyNmW.js";import"./Spinner-CHPW_G4Q.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./Select-BczipgGO.js";import"./plus-DWHtmhlY.js";import"./WorkspaceLoadError-FmbY_INt.js";import"./NotHoveredEmptyWorkspace-CddEnm-X.js";import"./RedoButton-Cb0DZdXt.js";import"./UndoButton-Bt5naQtv.js";import"./question-CX5dqjCQ.js";import"./CssCategoryButton-BgdQUONP.js";import"./client-Dbo3a7kb.js";const U={title:"entities/workspace/CssOptionItem",component:i,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{cssItem:a[0].items[0],index:0}},t={render:()=>s.jsx("div",{style:{width:"400px",resize:"horizontal",overflow:"auto"},children:s.jsx(i,{cssItem:a[0].items[0],index:0})})},r={render:()=>{const C="레이아웃";return s.jsx("div",{style:{width:"400px",resize:"horizontal",overflow:"auto"},children:a.filter(o=>o.category===C).map(o=>o.items.map((m,I)=>s.jsx(i,{cssItem:m,index:I},m.label)))})}};var n,p,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    cssItem: cssCategoryList[0].items[0],
    index: 0
  }
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,l,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      width: '400px',
      resize: 'horizontal',
      overflow: 'auto'
    }}>
        <CssOptionItem cssItem={cssCategoryList[0].items[0]} index={0} />
      </div>;
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,x,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const selectedCssCategory = '레이아웃';
    return <div style={{
      width: '400px',
      resize: 'horizontal',
      overflow: 'auto'
    }}>
        {cssCategoryList.filter(cssCategory => cssCategory.category === selectedCssCategory).map(cssCategory => cssCategory.items.map((cssItem, index) => <CssOptionItem cssItem={cssItem} index={index} key={cssItem.label} />))}
      </div>;
  }
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const V=["Default","Resize","ResizeMultipleItems"];export{e as Default,t as Resize,r as ResizeMultipleItems,V as __namedExportsOrder,U as default};
