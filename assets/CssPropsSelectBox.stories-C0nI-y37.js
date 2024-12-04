import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{C as m}from"./ImageTagModal-CHifQAt6.js";import{b as g}from"./html2canvas.esm-T2p3Seyt.js";import"./index-DRjF_FHU.js";import"./GuidesBox-COKlK73I.js";import"./GuideVideo-MGmf4GR2.js";import"./HoveredEmptyWorkspace-B7d4ySV4.js";import"./QueryClientProvider-BdRu95_o.js";import"./index-D1AAVYfs.js";import"./plus-C7enkl2d.js";import"./SquareButton-eIFPi1Hz.js";import"./Logo-DlHd6_yt.js";import"./index-x70cJmE6.js";import"./index-BXCeiWJk.js";import"./ToasterWithMax-D4jPvwZi.js";import"./Loading-CVQUyNmW.js";import"./Spinner-BB_XZPSl.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./WorkspaceLoadError-BuktD2D2.js";import"./NotHoveredEmptyWorkspace-loFxOJJf.js";import"./question-BUxmZXrP.js";import"./CssCategoryButton-BCvsdXHF.js";import"./client-Dbo3a7kb.js";import"./HomeHeader-BJV8Ongq.js";import"./WorkspaceList-y4XtPs0b.js";import"./WorkspaceHeader-CaoReEbN.js";import"./EmptyWorkspace-CRQbKPZ6.js";import"./WorkspaceGrid-Bln0cw_9.js";import"./WorkspaceModal-C_kpaMyv.js";import"./ModalConfirm-BDuYJlbG.js";import"./PreviewBox-jC1PalzY.js";import"./useCoachMarkStore-CAqI6O7S.js";import"./WorkspacePageHeader-D_yLXG5o.js";import"./CssCategoryBar-gzW1JSgx.js";import"./cssCategoryList-CHFX1k4S.js";import"./CssOptionItemList-D8APRX-H.js";import"./CssPropsSelectBoxHeader-DU7PaR99.js";import"./infiniteQueryBehavior-DdhmIwcw.js";const te={title:"widgets/workspace/css/CssPropsSelectBox",component:m,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{}},r={render:()=>{const{addClassBlock:c,classBlockList:u}=g(),d=e=>{e.target.value===""||u.includes(e.target.value)||c(e.target.value)},f=e=>{e.key==="Enter"&&(e.currentTarget.blur(),e.preventDefault())};return o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx("input",{className:"w-full border p-2 focus:outline-none",type:"text",onBlur:d,onKeyDown:f,placeholder:"추가하고자 하는 CSS 클래스를 입력하세요"}),o.jsx(m,{})]})}};var s,a,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const re=["Default","CanSelectClass"];export{r as CanSelectClass,t as Default,re as __namedExportsOrder,te as default};
