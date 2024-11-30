import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{W as d}from"./WorkspaceGrid-vyyREuel.js";import"./GuideVideo-MGmf4GR2.js";import{a as l,v as I}from"./HoveredEmptyWorkspace-LjAOFdHR.js";import"./WorkspaceLoadError-Cdw2mO9Z.js";import"./NotHoveredEmptyWorkspace-B7Wda7nZ.js";import"./RedoButton-C_Lrkfv2.js";import"./UndoButton-CG9EXSv1.js";import"./index-BXCeiWJk.js";import"./CssCategoryButton-kLrWYMB7.js";import"./client-Dbo3a7kb.js";import{a as k}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./index-DRjF_FHU.js";import"./index-D1AAVYfs.js";import"./useWorkspaceStore-CrNgioXB.js";import"./QueryClientProvider-BdRu95_o.js";import"./Spinner-QuWSqHI9.js";import"./CircleButton-CZ-LhlOb.js";import"./SquareButton-hj7tViqk.js";import"./Logo-BptDqOCu.js";import"./index-x70cJmE6.js";import"./ToasterWithMax-D4jPvwZi.js";import"./Loading-CVQUyNmW.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./Select-BczipgGO.js";import"./plus-DWHtmhlY.js";import"./question-CX5dqjCQ.js";import"./v4-CQkTLCs1.js";const J={title:"widgets/home/WorkspaceGrid",component:d,parameters:{layout:"fullscreen"},decorators:[o=>t.jsx("div",{className:"p-4",children:t.jsx(o,{})})],tags:["autodocs"]},e={args:{children:t.jsx(l,{workspaceId:I(),title:"예시 1",thumbnail:"",lastEdited:new Date().toISOString(),onClick:()=>{k("workspaceItem clicked")()}})}},r={render:()=>{const o=[{workspaceId:"1234",title:"예시 1",thumbnail:"",lastEdited:"2024-11-28T09:34:45.106+00:00"},{workspaceId:"1234",title:"예시 2",thumbnail:"",lastEdited:"2024-11-28T09:34:45.106+00:00"},{workspaceId:"1234",title:"예시 3",thumbnail:"",lastEdited:"2024-11-28T09:34:45.106+00:00"},{workspaceId:"1234",title:"예시 4",thumbnail:"",lastEdited:"2024-11-28T09:34:45.106+00:00"},{workspaceId:"1234",title:"예시 5",thumbnail:"",lastEdited:"2024-11-28T09:34:45.106+00:00"}];return t.jsx(d,{children:o.map(a=>t.jsx(l,{...a,onClick:()=>{k("workspaceItem clicked")()}},a.workspaceId))})}};var i,s,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: <WorkspaceItem workspaceId={v4()} title="예시 1" thumbnail="" lastEdited={new Date().toISOString()} onClick={() => {
      action('workspaceItem clicked')();
    }} />
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,m,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const K=["Default","MultipleItems"];export{e as Default,r as MultipleItems,K as __namedExportsOrder,J as default};
