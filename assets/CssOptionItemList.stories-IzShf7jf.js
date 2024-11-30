import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{C as c}from"./CssOptionItemList-BLPrKibU.js";import{u}from"./useWorkspaceStore-CrNgioXB.js";import"./index-DRjF_FHU.js";import"./GuideVideo-MGmf4GR2.js";import"./HoveredEmptyWorkspace-BJw-tTdf.js";import"./index-D1AAVYfs.js";import"./QueryClientProvider-BdRu95_o.js";import"./Spinner-QuWSqHI9.js";import"./CircleButton-CZ-LhlOb.js";import"./SquareButton-hj7tViqk.js";import"./Logo-Ca0csvGK.js";import"./index-x70cJmE6.js";import"./index-BXCeiWJk.js";import"./ToasterWithMax-D4jPvwZi.js";import"./Loading-CVQUyNmW.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./Select-BczipgGO.js";import"./plus-DWHtmhlY.js";import"./WorkspaceLoadError-FmbY_INt.js";import"./NotHoveredEmptyWorkspace-CddEnm-X.js";import"./RedoButton-a0Wu9pAj.js";import"./UndoButton-BPk5eWmJ.js";import"./question-CX5dqjCQ.js";import"./CssCategoryButton-kLrWYMB7.js";import"./client-Dbo3a7kb.js";import"./cssCategoryList-BM9pfLyE.js";const K={title:"widgets/workspace/css/CssOptionItemList",component:c,parameters:{layout:"centered"},tags:["autodocs"]},r={},o={render:()=>{const{setSelectedCssCategory:l}=u(),d=["레이아웃","박스모델","타이포그래피","배경","테두리","간격","flex 속성","grid 속성"];return e.jsxs(e.Fragment,{children:[e.jsx("select",{onChange:t=>l(t.target.value),children:d.map(t=>e.jsx("option",{value:t,children:t},t))}),e.jsx(c,{})]})}};var s,a,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var p,m,n;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const M=["Default","ClassSelected"];export{o as ClassSelected,r as Default,M as __namedExportsOrder,K as default};
