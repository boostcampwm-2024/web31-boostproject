import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{C as c}from"./CssOptionItemList-zkqEQSjk.js";import{u}from"./useImageModalStore-jpOIQYA6.js";import"./index-DRjF_FHU.js";import"./GuideVideo-MGmf4GR2.js";import"./HoveredEmptyWorkspace-DTDk2zGm.js";import"./QueryClientProvider-BdRu95_o.js";import"./index-D1AAVYfs.js";import"./plus-qIVVYTMO.js";import"./SquareButton-hj7tViqk.js";import"./Logo-DlHd6_yt.js";import"./index-x70cJmE6.js";import"./index-BXCeiWJk.js";import"./ToasterWithMax-D4jPvwZi.js";import"./Loading-CVQUyNmW.js";import"./Spinner-XIXl0-gb.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./WorkspaceLoadError-BuktD2D2.js";import"./NotHoveredEmptyWorkspace-loFxOJJf.js";import"./question-BUxmZXrP.js";import"./CssCategoryButton-Bdyt7_D4.js";import"./client-Dbo3a7kb.js";import"./cssCategoryList-CHFX1k4S.js";const B={title:"widgets/workspace/css/CssOptionItemList",component:c,parameters:{layout:"centered"},tags:["autodocs"]},r={},o={render:()=>{const{setSelectedCssCategory:l}=u(),d=["레이아웃","박스모델","타이포그래피","배경","테두리","간격","flex 속성","grid 속성"];return t.jsxs(t.Fragment,{children:[t.jsx("select",{onChange:e=>l(e.target.value),children:d.map(e=>t.jsx("option",{value:e,children:e},e))}),t.jsx(c,{})]})}};var s,a,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var n,p,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const G=["Default","ClassSelected"];export{o as ClassSelected,r as Default,G as __namedExportsOrder,B as default};
