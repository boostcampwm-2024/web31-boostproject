import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{C as c}from"./CssPropsSelectBox-C8kRnEAB.js";import{b as g}from"./useWorkspaceStore-CrNgioXB.js";import"./index-DRjF_FHU.js";import"./GuidesBox-CUy0vqJu.js";import"./GuideVideo-MGmf4GR2.js";import"./HoveredEmptyWorkspace-Bqx1oKr3.js";import"./index-D1AAVYfs.js";import"./QueryClientProvider-BdRu95_o.js";import"./Spinner-QuWSqHI9.js";import"./plus-qIVVYTMO.js";import"./SquareButton-hj7tViqk.js";import"./Logo-Ca0csvGK.js";import"./index-x70cJmE6.js";import"./index-BXCeiWJk.js";import"./ToasterWithMax-D4jPvwZi.js";import"./Loading-CVQUyNmW.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./WorkspaceLoadError-FmbY_INt.js";import"./NotHoveredEmptyWorkspace-CddEnm-X.js";import"./question-CX5dqjCQ.js";import"./CssCategoryButton-kLrWYMB7.js";import"./client-Dbo3a7kb.js";import"./HomeHeader-BiI33lVO.js";import"./WorkspaceList-6GUCm64X.js";import"./WorkspaceHeader-DDPMy5lU.js";import"./EmptyWorkspace-BrCgWfOL.js";import"./WorkspaceGrid-vyyREuel.js";import"./WorkspaceModal-Ck1qnBR-.js";import"./ModalConfirm-D4PzhGiJ.js";import"./PreviewBox-DG1vgLsh.js";import"./WorkspacePageHeader-CcRTZwdT.js";import"./CssCategoryBar-BDlQIlhG.js";import"./cssCategoryList-CfnxYM_i.js";import"./CssOptionItemList-CKMF-tO8.js";import"./CssPropsSelectBoxHeader-Bb7uY4yH.js";import"./infiniteQueryBehavior-DdhmIwcw.js";const ee={title:"widgets/workspace/css/CssPropsSelectBox",component:c,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{}},r={render:()=>{const{addClassBlock:m,classBlockList:u}=g(),d=e=>{e.target.value===""||u.includes(e.target.value)||m(e.target.value)},f=e=>{e.key==="Enter"&&(e.currentTarget.blur(),e.preventDefault())};return o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx("input",{className:"w-full border p-2 focus:outline-none",type:"text",onBlur:d,onKeyDown:f,placeholder:"추가하고자 하는 CSS 클래스를 입력하세요"}),o.jsx(c,{})]})}};var s,a,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
