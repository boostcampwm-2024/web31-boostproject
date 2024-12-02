import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{C as c}from"./CssOptionItemList-BQ08gvXE.js";import{u}from"./useWorkspaceStore-B_R62rvF.js";import"./index-DRjF_FHU.js";import"./GuideVideo-MGmf4GR2.js";import"./HoveredEmptyWorkspace-BfPH-0ML.js";import"./index-D1AAVYfs.js";import"./QueryClientProvider-BdRu95_o.js";import"./blockly_compressed-Csa91utS.js";import"./plus-qIVVYTMO.js";import"./SquareButton-hj7tViqk.js";import"./Logo-Ca0csvGK.js";import"./index-x70cJmE6.js";import"./index-BXCeiWJk.js";import"./ToasterWithMax-D4jPvwZi.js";import"./Loading-CVQUyNmW.js";import"./Spinner-CHPW_G4Q.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./WorkspaceLoadError-FmbY_INt.js";import"./NotHoveredEmptyWorkspace-CddEnm-X.js";import"./question-CX5dqjCQ.js";import"./CssCategoryButton-BgdQUONP.js";import"./client-Dbo3a7kb.js";import"./cssCategoryList-CfnxYM_i.js";const G={title:"widgets/workspace/css/CssOptionItemList",component:c,parameters:{layout:"centered"},tags:["autodocs"]},r={},o={render:()=>{const{setSelectedCssCategory:l}=u(),d=["레이아웃","박스모델","타이포그래피","배경","테두리","간격","flex 속성","grid 속성"];return t.jsxs(t.Fragment,{children:[t.jsx("select",{onChange:e=>l(e.target.value),children:d.map(e=>t.jsx("option",{value:e,children:e},e))}),t.jsx(c,{})]})}};var s,a,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var p,n,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const {
      setSelectedCssCategory
    } = useCssPropsStore();
    const categoryList = ['레이아웃', '박스모델', '타이포그래피', '배경', '테두리', '간격', 'flex 속성', 'grid 속성'];
    return <>
        <select onChange={e => setSelectedCssCategory(e.target.value)}>
          {categoryList.map(category => <option key={category} value={category}>
              {category}
            </option>)}
        </select>
        <CssOptionItemList />
      </>;
  }
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const H=["Default","ClassSelected"];export{o as ClassSelected,r as Default,H as __namedExportsOrder,G as default};
