import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{c as i}from"./HoveredEmptyWorkspace-DWkGw7A1.js";import{c as a}from"./cssCategoryList-CHFX1k4S.js";import"./html2canvas.esm-D1fnD2iC.js";import"./index-DRjF_FHU.js";import"./QueryClientProvider-BdRu95_o.js";import"./index-D1AAVYfs.js";import"./ImageTagModalListItem-D30WR0c8.js";import"./plus-C7enkl2d.js";import"./SquareButton-eIFPi1Hz.js";import"./Logo-DlHd6_yt.js";import"./index-x70cJmE6.js";import"./index-BXCeiWJk.js";import"./ToasterWithMax-D4jPvwZi.js";import"./Loading-CVQUyNmW.js";import"./Spinner-CHbqakIa.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./WorkspaceLoadError-BuktD2D2.js";import"./NotHoveredEmptyWorkspace-loFxOJJf.js";import"./question-BUxmZXrP.js";import"./CssCategoryButton-D2idemFI.js";import"./client-Dbo3a7kb.js";import"./ImageTagModalHeader-DRiIRUzt.js";import"./ImageTagModalImg-BJAMLe19.js";import"./ImageTagModalButton-DJiJ58eG.js";import"./react-72mb-naO.js";const T={title:"entities/workspace/CssOptionItem",component:i,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{cssItem:a[0].items[0],index:0}},t={render:()=>r.jsx("div",{style:{width:"400px",resize:"horizontal",overflow:"auto"},children:r.jsx(i,{cssItem:a[0].items[0],index:0})})},s={render:()=>{const C="레이아웃";return r.jsx("div",{style:{width:"400px",resize:"horizontal",overflow:"auto"},children:a.filter(o=>o.category===C).map(o=>o.items.map((m,I)=>r.jsx(i,{cssItem:m,index:I},m.label)))})}};var n,p,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
