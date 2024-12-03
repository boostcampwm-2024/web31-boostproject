import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{C as c}from"./ImageTagModal-ByYYw5dL.js";import{b as g}from"./useImageModalStore-jpOIQYA6.js";import"./index-DRjF_FHU.js";import"./GuidesBox-DLTeEQIO.js";import"./GuideVideo-MGmf4GR2.js";import"./HoveredEmptyWorkspace-DTDk2zGm.js";import"./QueryClientProvider-BdRu95_o.js";import"./index-D1AAVYfs.js";import"./plus-qIVVYTMO.js";import"./SquareButton-hj7tViqk.js";import"./Logo-DlHd6_yt.js";import"./index-x70cJmE6.js";import"./index-BXCeiWJk.js";import"./ToasterWithMax-D4jPvwZi.js";import"./Loading-CVQUyNmW.js";import"./Spinner-XIXl0-gb.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./WorkspaceLoadError-BuktD2D2.js";import"./NotHoveredEmptyWorkspace-loFxOJJf.js";import"./question-BUxmZXrP.js";import"./CssCategoryButton-Bdyt7_D4.js";import"./client-Dbo3a7kb.js";import"./HomeHeader-DlPZqUqk.js";import"./WorkspaceList-C3U4CKEc.js";import"./WorkspaceHeader-D6gGbePf.js";import"./EmptyWorkspace-D633SD7C.js";import"./WorkspaceGrid-vyyREuel.js";import"./WorkspaceModal-CvU9GROv.js";import"./ModalConfirm-BDuYJlbG.js";import"./PreviewBox-OTdHhW5-.js";import"./WorkspacePageHeader-nuoxCE2n.js";import"./CssCategoryBar-rjFAbhkJ.js";import"./cssCategoryList-CHFX1k4S.js";import"./CssOptionItemList-zkqEQSjk.js";import"./CssPropsSelectBoxHeader-8rTfHMke.js";import"./infiniteQueryBehavior-DdhmIwcw.js";const ee={title:"widgets/workspace/css/CssPropsSelectBox",component:c,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{}},r={render:()=>{const{addClassBlock:m,classBlockList:u}=g(),d=e=>{e.target.value===""||u.includes(e.target.value)||m(e.target.value)},f=e=>{e.key==="Enter"&&(e.currentTarget.blur(),e.preventDefault())};return o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx("input",{className:"w-full border p-2 focus:outline-none",type:"text",onBlur:d,onKeyDown:f,placeholder:"추가하고자 하는 CSS 클래스를 입력하세요"}),o.jsx(c,{})]})}};var s,a,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
