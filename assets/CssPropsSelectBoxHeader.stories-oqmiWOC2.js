import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{C as a}from"./CssPropsSelectBoxHeader-FDzpEImP.js";import{b as C}from"./useWorkspaceStore-CrNgioXB.js";import{r as f}from"./index-DRjF_FHU.js";import"./CircleButton-CZ-LhlOb.js";import"./SquareButton-hj7tViqk.js";import"./Logo-Ca0csvGK.js";import"./index-x70cJmE6.js";import"./index-BXCeiWJk.js";import"./ToasterWithMax-D4jPvwZi.js";import"./index-D1AAVYfs.js";import"./Loading-CVQUyNmW.js";import"./Spinner-QuWSqHI9.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./Select-BczipgGO.js";const A={title:"widgets/workspace/css/CssPropsSelectBoxHeader",component:a,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{}},s={render:()=>o.jsx("div",{style:{width:"400px",resize:"horizontal",overflow:"auto",border:"1px solid #ccc"},className:"p-4",children:o.jsx(a,{})})},r={render:()=>{const{addClassBlock:t}=C();return f.useEffect(()=>{t("test1"),t("test2"),t("test3")},[]),o.jsx("div",{style:{width:"400px",resize:"horizontal",overflow:"auto",border:"1px solid #ccc"},className:"p-4",children:o.jsx(a,{})})}};var c,d,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    // 필요한 args를 여기에 추가하세요
  }
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var l,p,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px',
    resize: 'horizontal',
    overflow: 'auto',
    border: '1px solid #ccc'
  }} className="p-4">
      <CssPropsSelectBoxHeader />
    </div>
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var n,u,x;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const {
      addClassBlock
    } = useClassBlockStore();
    useEffect(() => {
      addClassBlock('test1');
      addClassBlock('test2');
      addClassBlock('test3');
    }, []);
    return <div style={{
      width: '400px',
      resize: 'horizontal',
      overflow: 'auto',
      border: '1px solid #ccc'
    }} className="p-4">
        <CssPropsSelectBoxHeader />
      </div>;
  }
}`,...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const D=["Default","Resize","ResizeAndCanSelectClass"];export{e as Default,s as Resize,r as ResizeAndCanSelectClass,D as __namedExportsOrder,A as default};
