import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{C as c}from"./CssPropsSelectBox-BFvPtY-Y.js";import{b as g}from"./useWorkspaceStore-BD1duu30.js";import"./index-DRjF_FHU.js";import"./GuidesBox-CT4NeZy-.js";import"./GuideVideo-MGmf4GR2.js";import"./HoveredEmptyWorkspace-oKFfLAgH.js";import"./QueryClientProvider-BdRu95_o.js";import"./index-D1AAVYfs.js";import"./plus-qIVVYTMO.js";import"./SquareButton-hj7tViqk.js";import"./Logo-Ca0csvGK.js";import"./index-x70cJmE6.js";import"./index-BXCeiWJk.js";import"./ToasterWithMax-D4jPvwZi.js";import"./Loading-CVQUyNmW.js";import"./Spinner-CUCGrwDX.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./WorkspaceLoadError-FmbY_INt.js";import"./NotHoveredEmptyWorkspace-CddEnm-X.js";import"./question-CX5dqjCQ.js";import"./CssCategoryButton-BHr79OL3.js";import"./client-Dbo3a7kb.js";import"./HomeHeader-CDxBXwPX.js";import"./WorkspaceList-CL_E1z7e.js";import"./WorkspaceHeader-CYc49c30.js";import"./EmptyWorkspace-w42cXWCm.js";import"./WorkspaceGrid-vyyREuel.js";import"./WorkspaceModal-DJB7nplA.js";import"./ModalConfirm-D4PzhGiJ.js";import"./PreviewBox-CZruGxvx.js";import"./WorkspacePageHeader-DyAZesmQ.js";import"./CssCategoryBar-AvLWTJaZ.js";import"./cssCategoryList-CHFX1k4S.js";import"./CssOptionItemList-DJo_JHXo.js";import"./CssPropsSelectBoxHeader-6cOut7Fo.js";import"./infiniteQueryBehavior-DdhmIwcw.js";const ee={title:"widgets/workspace/css/CssPropsSelectBox",component:c,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{}},r={render:()=>{const{addClassBlock:m,classBlockList:u}=g(),d=e=>{e.target.value===""||u.includes(e.target.value)||m(e.target.value)},f=e=>{e.key==="Enter"&&(e.currentTarget.blur(),e.preventDefault())};return o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx("input",{className:"w-full border p-2 focus:outline-none",type:"text",onBlur:d,onKeyDown:f,placeholder:"추가하고자 하는 CSS 클래스를 입력하세요"}),o.jsx(c,{})]})}};var s,a,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    // propsname: value,
  }
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var n,p,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const {
      addClassBlock,
      classBlockList
    } = useClassBlockStore();
    const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (e.target.value === '' || classBlockList.includes(e.target.value)) return;
      addClassBlock(e.target.value);
    };
    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.currentTarget.blur();
        e.preventDefault();
      }
    };
    return <div className="flex flex-col gap-3">
        <input className="w-full border p-2 focus:outline-none" type="text" onBlur={handleOnBlur} onKeyDown={handleOnKeyDown} placeholder="추가하고자 하는 CSS 클래스를 입력하세요" />
        <CssPropsSelectBox />
      </div>;
  }
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const te=["Default","CanSelectClass"];export{r as CanSelectClass,t as Default,te as __namedExportsOrder,ee as default};
