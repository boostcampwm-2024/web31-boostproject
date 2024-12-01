import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{W as d}from"./WorkspaceGrid-vyyREuel.js";import"./GuideVideo-MGmf4GR2.js";import{a as l,v as I}from"./HoveredEmptyWorkspace-Bqx1oKr3.js";import"./WorkspaceLoadError-FmbY_INt.js";import"./NotHoveredEmptyWorkspace-CddEnm-X.js";import"./index-BXCeiWJk.js";import"./CssCategoryButton-kLrWYMB7.js";import"./client-Dbo3a7kb.js";import{a as k}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./index-DRjF_FHU.js";import"./index-D1AAVYfs.js";import"./useWorkspaceStore-CrNgioXB.js";import"./QueryClientProvider-BdRu95_o.js";import"./Spinner-QuWSqHI9.js";import"./plus-qIVVYTMO.js";import"./SquareButton-hj7tViqk.js";import"./Logo-Ca0csvGK.js";import"./index-x70cJmE6.js";import"./ToasterWithMax-D4jPvwZi.js";import"./Loading-CVQUyNmW.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./question-CX5dqjCQ.js";import"./v4-CQkTLCs1.js";const A={title:"widgets/home/WorkspaceGrid",component:d,parameters:{layout:"fullscreen"},decorators:[a=>t.jsx("div",{className:"p-4",children:t.jsx(a,{})})],tags:["autodocs"]},e={args:{children:t.jsx(l,{workspaceId:I(),title:"예시 1",thumbnail:"",lastEdited:new Date().toISOString(),onClick:()=>{k("workspaceItem clicked")()}})}},r={render:()=>{const a=[{workspaceId:"1234",title:"예시 1",thumbnail:"",lastEdited:"2024-11-28T09:34:45.106+00:00"},{workspaceId:"1234",title:"예시 2",thumbnail:"",lastEdited:"2024-11-28T09:34:45.106+00:00"},{workspaceId:"1234",title:"예시 3",thumbnail:"",lastEdited:"2024-11-28T09:34:45.106+00:00"},{workspaceId:"1234",title:"예시 4",thumbnail:"",lastEdited:"2024-11-28T09:34:45.106+00:00"},{workspaceId:"1234",title:"예시 5",thumbnail:"",lastEdited:"2024-11-28T09:34:45.106+00:00"}];return t.jsx(d,{children:a.map(o=>t.jsx(l,{...o,onClick:()=>{k("workspaceItem clicked")()}},o.workspaceId))})}};var i,s,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: <WorkspaceItem workspaceId={v4()} title="예시 1" thumbnail="" lastEdited={new Date().toISOString()} onClick={() => {
      action('workspaceItem clicked')();
    }} />
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,c,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const workspaceItemList = [{
      workspaceId: '1234',
      title: '예시 1',
      thumbnail: '',
      lastEdited: '2024-11-28T09:34:45.106+00:00'
    }, {
      workspaceId: '1234',
      title: '예시 2',
      thumbnail: '',
      lastEdited: '2024-11-28T09:34:45.106+00:00'
    }, {
      workspaceId: '1234',
      title: '예시 3',
      thumbnail: '',
      lastEdited: '2024-11-28T09:34:45.106+00:00'
    }, {
      workspaceId: '1234',
      title: '예시 4',
      thumbnail: '',
      lastEdited: '2024-11-28T09:34:45.106+00:00'
    }, {
      workspaceId: '1234',
      title: '예시 5',
      thumbnail: '',
      lastEdited: '2024-11-28T09:34:45.106+00:00'
    }];
    return <WorkspaceGrid>
        {workspaceItemList.map(workspaceItem => <WorkspaceItem key={workspaceItem.workspaceId} {...workspaceItem} onClick={() => {
        action('workspaceItem clicked')();
      }} />)}
      </WorkspaceGrid>;
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const B=["Default","MultipleItems"];export{e as Default,r as MultipleItems,B as __namedExportsOrder,A as default};
