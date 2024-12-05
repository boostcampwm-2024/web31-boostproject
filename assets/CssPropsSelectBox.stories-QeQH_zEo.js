import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{C as m}from"./CssPropsSelectBox-C4R-4nDE.js";import{c as g}from"./html2canvas.esm-BTtajP0W.js";import"./index-DRjF_FHU.js";import"./Banner-Cmxe5cZT.js";import"./HomeHeader-DYXMEvCV.js";import"./plus-C7enkl2d.js";import"./SquareButton-eIFPi1Hz.js";import"./Logo-DlHd6_yt.js";import"./index-x70cJmE6.js";import"./index-BXCeiWJk.js";import"./ToasterWithMax-D4jPvwZi.js";import"./index-D1AAVYfs.js";import"./Loading-CVQUyNmW.js";import"./Spinner-DNSVRT5F.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./HoveredEmptyWorkspace-B1GBnKX9.js";import"./QueryClientProvider-BdRu95_o.js";import"./ImageTagModalListItem-D30WR0c8.js";import"./WorkspaceLoadError-BuktD2D2.js";import"./NotHoveredEmptyWorkspace-loFxOJJf.js";import"./question-BUxmZXrP.js";import"./CssCategoryButton-C0Kelp6b.js";import"./client-Dbo3a7kb.js";import"./ImageTagModalHeader-Kpuzz1BJ.js";import"./ImageTagModalImg-BJAMLe19.js";import"./ImageTagModalButton-DJiJ58eG.js";import"./WorkspaceList-E8ahMSIZ.js";import"./WorkspaceHeader-BigAUUkC.js";import"./EmptyWorkspace-C-zl3eeh.js";import"./WorkspaceGrid-C2jJPMUx.js";import"./WorkspaceModal-DaqQAmWl.js";import"./ModalConfirm-BDuYJlbG.js";import"./PreviewBox-L0Yy0i69.js";import"./useCoachMarkStore-B_Mp-SD7.js";import"./CoachMark-DESJ10-F.js";import"./WorkspaceHeaderButtons-DtKBgv7W.js";import"./WorkspacePageHeader-wp4p4uQQ.js";import"./CssCategoryBar-D1UKcKt2.js";import"./cssCategoryList-CHFX1k4S.js";import"./CssOptionItemList-BIQBJ29P.js";import"./CssPropsSelectBoxHeader-BZsI6_U6.js";import"./ImageTagModal-DbH7oCNi.js";import"./infiniteQueryBehavior-DdhmIwcw.js";const le={title:"widgets/workspace/css/CssPropsSelectBox",component:m,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{}},r={render:()=>{const{addClassBlock:c,classBlockList:u}=g(),d=e=>{e.target.value===""||u.includes(e.target.value)||c(e.target.value)},f=e=>{e.key==="Enter"&&(e.currentTarget.blur(),e.preventDefault())};return o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx("input",{className:"w-full border p-2 focus:outline-none",type:"text",onBlur:d,onKeyDown:f,placeholder:"추가하고자 하는 CSS 클래스를 입력하세요"}),o.jsx(m,{})]})}};var s,a,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    // propsname: value,
  }
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var l,n,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const ne=["Default","CanSelectClass"];export{r as CanSelectClass,t as Default,ne as __namedExportsOrder,le as default};
