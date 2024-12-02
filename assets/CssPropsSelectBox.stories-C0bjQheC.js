import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{C as m}from"./ImageTagModal-C3s0jnPV.js";import{b as g}from"./useImageModalStore-BhpnCE_Z.js";import"./index-DRjF_FHU.js";import"./GuidesBox-1tD-nXdR.js";import"./GuideVideo-MGmf4GR2.js";import"./HoveredEmptyWorkspace-DZD9W-0R.js";import"./index-D1AAVYfs.js";import"./QueryClientProvider-BdRu95_o.js";import"./blockly_compressed-Csa91utS.js";import"./plus-qIVVYTMO.js";import"./SquareButton-hj7tViqk.js";import"./Logo-Ca0csvGK.js";import"./index-x70cJmE6.js";import"./index-BXCeiWJk.js";import"./ToasterWithMax-D4jPvwZi.js";import"./Loading-CVQUyNmW.js";import"./Spinner-CHPW_G4Q.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./WorkspaceLoadError-FmbY_INt.js";import"./NotHoveredEmptyWorkspace-CddEnm-X.js";import"./question-BUxmZXrP.js";import"./CssCategoryButton-BxNJ2PEt.js";import"./client-Dbo3a7kb.js";import"./HomeHeader-Du71dk__.js";import"./WorkspaceList-DzmWZvpJ.js";import"./WorkspaceHeader-B9IZE-z_.js";import"./EmptyWorkspace-EWB2Mb17.js";import"./WorkspaceGrid-vyyREuel.js";import"./WorkspaceModal-rLbgEVV0.js";import"./ModalConfirm-BDuYJlbG.js";import"./PreviewBox-CcUNtyp3.js";import"./WorkspacePageHeader-DWisuter.js";import"./CssCategoryBar-CTKTXZoF.js";import"./cssCategoryList-CHFX1k4S.js";import"./CssOptionItemList-Cxd6Zt5D.js";import"./CssPropsSelectBoxHeader-CbRpNsOh.js";import"./infiniteQueryBehavior-DdhmIwcw.js";const te={title:"widgets/workspace/css/CssPropsSelectBox",component:m,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{}},r={render:()=>{const{addClassBlock:c,classBlockList:u}=g(),d=e=>{e.target.value===""||u.includes(e.target.value)||c(e.target.value)},f=e=>{e.key==="Enter"&&(e.currentTarget.blur(),e.preventDefault())};return o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx("input",{className:"w-full border p-2 focus:outline-none",type:"text",onBlur:d,onKeyDown:f,placeholder:"추가하고자 하는 CSS 클래스를 입력하세요"}),o.jsx(m,{})]})}};var s,a,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
