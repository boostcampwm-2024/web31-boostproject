import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{C as i}from"./HoveredEmptyWorkspace-LjAOFdHR.js";import{c as a}from"./cssCategoryList-BM9pfLyE.js";import"./Spinner-QuWSqHI9.js";import"./index-DRjF_FHU.js";import"./index-D1AAVYfs.js";import"./useWorkspaceStore-CrNgioXB.js";import"./QueryClientProvider-BdRu95_o.js";import"./GuideVideo-MGmf4GR2.js";import"./CircleButton-CZ-LhlOb.js";import"./SquareButton-hj7tViqk.js";import"./Logo-BptDqOCu.js";import"./index-x70cJmE6.js";import"./index-BXCeiWJk.js";import"./ToasterWithMax-D4jPvwZi.js";import"./Loading-CVQUyNmW.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./Select-BczipgGO.js";import"./plus-DWHtmhlY.js";import"./WorkspaceLoadError-Cdw2mO9Z.js";import"./NotHoveredEmptyWorkspace-B7Wda7nZ.js";import"./RedoButton-C_Lrkfv2.js";import"./UndoButton-CG9EXSv1.js";import"./question-CX5dqjCQ.js";import"./CssCategoryButton-kLrWYMB7.js";import"./client-Dbo3a7kb.js";const T={title:"entities/workspace/CssOptionItem",component:i,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{cssItem:a[0].items[0],index:0}},t={render:()=>r.jsx("div",{style:{width:"400px",resize:"horizontal",overflow:"auto"},children:r.jsx(i,{cssItem:a[0].items[0],index:0})})},s={render:()=>{const C="레이아웃";return r.jsx("div",{style:{width:"400px",resize:"horizontal",overflow:"auto"},children:a.filter(o=>o.category===C).map(o=>o.items.map((m,I)=>r.jsx(i,{cssItem:m,index:I},m.label)))})}};var n,p,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,x,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const U=["Default","Resize","ResizeMultipleItems"];export{e as Default,t as Resize,s as ResizeMultipleItems,U as __namedExportsOrder,T as default};
