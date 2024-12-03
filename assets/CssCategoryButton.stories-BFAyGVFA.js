import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{C as a}from"./CssCategoryButton-cnkcY8L4.js";import{u as p}from"./useWorkspaceStore-DrKMScWF.js";import"./index-DRjF_FHU.js";import"./blockly_compressed-Csa91utS.js";const u={title:"entities/workspace/CssCateGoryButton",component:a,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{cssCategory:"레이아웃"},render:c=>{const{selectedCssCategory:n}=p();return e.jsxs("div",{className:"flex items-center gap-5",children:[e.jsxs("p",{children:["현재 선택된 카테고리 : ",n]}),e.jsx(a,{cssCategory:c.cssCategory})]})}};var r,t,o;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    cssCategory: '레이아웃'
  },
  render: args => {
    const {
      selectedCssCategory
    } = useCssPropsStore();
    return <div className="flex items-center gap-5">
        <p>현재 선택된 카테고리 : {selectedCssCategory}</p>
        <CssCategoryButton cssCategory={args.cssCategory} />
      </div>;
  }
}`,...(o=(t=s.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const l=["Default"];export{s as Default,l as __namedExportsOrder,u as default};
