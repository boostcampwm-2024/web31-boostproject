import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{C as c}from"./CssOptionItemList-BIQBJ29P.js";import{u}from"./html2canvas.esm-BTtajP0W.js";import"./index-DRjF_FHU.js";import"./HoveredEmptyWorkspace-B1GBnKX9.js";import"./QueryClientProvider-BdRu95_o.js";import"./index-D1AAVYfs.js";import"./ImageTagModalListItem-D30WR0c8.js";import"./plus-C7enkl2d.js";import"./SquareButton-eIFPi1Hz.js";import"./Logo-DlHd6_yt.js";import"./index-x70cJmE6.js";import"./index-BXCeiWJk.js";import"./ToasterWithMax-D4jPvwZi.js";import"./Loading-CVQUyNmW.js";import"./Spinner-DNSVRT5F.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./WorkspaceLoadError-BuktD2D2.js";import"./NotHoveredEmptyWorkspace-loFxOJJf.js";import"./question-BUxmZXrP.js";import"./CssCategoryButton-C0Kelp6b.js";import"./client-Dbo3a7kb.js";import"./ImageTagModalHeader-Kpuzz1BJ.js";import"./ImageTagModalImg-BJAMLe19.js";import"./ImageTagModalButton-DJiJ58eG.js";import"./cssCategoryList-CHFX1k4S.js";const J={title:"widgets/workspace/css/CssOptionItemList",component:c,parameters:{layout:"centered"},tags:["autodocs"]},r={},o={render:()=>{const{setSelectedCssCategory:l}=u(),d=["레이아웃","박스모델","타이포그래피","배경","테두리","간격","flex 속성","grid 속성"];return e.jsxs(e.Fragment,{children:[e.jsx("select",{onChange:t=>l(t.target.value),children:d.map(t=>e.jsx("option",{value:t,children:t},t))}),e.jsx(c,{})]})}};var s,a,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var p,m,n;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const K=["Default","ClassSelected"];export{o as ClassSelected,r as Default,K as __namedExportsOrder,J as default};
