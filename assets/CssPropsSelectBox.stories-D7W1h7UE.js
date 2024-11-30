import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{C as m}from"./CssPropsSelectBox-DHpmhhA3.js";import{b as g}from"./useWorkspaceStore-CrNgioXB.js";import"./index-DRjF_FHU.js";import"./GuidesBox-Dt5Ds402.js";import"./GuideVideo-MGmf4GR2.js";import"./HoveredEmptyWorkspace-C8XxPmjQ.js";import"./index-D1AAVYfs.js";import"./QueryClientProvider-BdRu95_o.js";import"./Spinner-QuWSqHI9.js";import"./CircleButton-CZ-LhlOb.js";import"./SquareButton-hj7tViqk.js";import"./Logo-Ca0csvGK.js";import"./index-x70cJmE6.js";import"./index-BXCeiWJk.js";import"./ToasterWithMax-D4jPvwZi.js";import"./Loading-CVQUyNmW.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./Select-BczipgGO.js";import"./plus-DWHtmhlY.js";import"./WorkspaceLoadError-FmbY_INt.js";import"./NotHoveredEmptyWorkspace-CddEnm-X.js";import"./RedoButton-a0Wu9pAj.js";import"./UndoButton-BPk5eWmJ.js";import"./question-CX5dqjCQ.js";import"./CssCategoryButton-kLrWYMB7.js";import"./client-Dbo3a7kb.js";import"./HomeHeader-CRDqFJWJ.js";import"./WorkspaceList-6bFMfMN3.js";import"./WorkspaceHeader-DSJj-zKR.js";import"./EmptyWorkspace-do1iUowU.js";import"./WorkspaceGrid-vyyREuel.js";import"./WorkspaceModal-BuMWCAzH.js";import"./ModalConfirm-D4PzhGiJ.js";import"./PreviewBox-xISWxcuo.js";import"./WorkspacePageHeader-OwSls6Cd.js";import"./CssCategoryBar-BN5-yAiB.js";import"./cssCategoryList-BM9pfLyE.js";import"./CssOptionItemList-scRqyLCu.js";import"./CssPropsSelectBoxHeader-FDzpEImP.js";import"./infiniteQueryBehavior-DdhmIwcw.js";const se={title:"widgets/workspace/css/CssPropsSelectBox",component:m,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{}},r={render:()=>{const{addClassBlock:c,classBlockList:u}=g(),d=e=>{e.target.value===""||u.includes(e.target.value)||c(e.target.value)},f=e=>{e.key==="Enter"&&(e.currentTarget.blur(),e.preventDefault())};return o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx("input",{className:"w-full border p-2 focus:outline-none",type:"text",onBlur:d,onKeyDown:f,placeholder:"추가하고자 하는 CSS 클래스를 입력하세요"}),o.jsx(m,{})]})}};var s,a,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    // propsname: value,
  }
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var p,n,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const ae=["Default","CanSelectClass"];export{r as CanSelectClass,t as Default,ae as __namedExportsOrder,se as default};
