import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{_ as o}from"./index-D1AAVYfs.js";import{T as r}from"./ToasterWithMax-D4jPvwZi.js";import"./index-DRjF_FHU.js";const b={title:"shared/ui/toast/ToasterWithMax",component:r,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsx("div",{className:"mt-20 flex flex-col items-center gap-4",children:e.jsx("button",{onClick:()=>o("This is a default message!"),className:"rounded bg-blue-500 px-4 py-2 text-white",children:"Default Toast"})})]})},t={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsx("div",{className:"mt-20 flex flex-col items-center gap-4",children:e.jsx("button",{onClick:()=>o.success("This is a success message!"),className:"rounded bg-green-500 px-4 py-2 text-white",children:"Success Toast"})})]})},a={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsx("div",{className:"mt-20 flex flex-col items-center gap-4",children:e.jsx("button",{onClick:()=>o.error("This is an fail message!"),className:"rounded bg-red-500 px-4 py-2 text-white",children:"Fail Toast"})})]})};var c,i,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <>
      <ToasterWithMax />
      <div className="mt-20 flex flex-col items-center gap-4">
        <button onClick={() => toast('This is a default message!')} className="rounded bg-blue-500 px-4 py-2 text-white">
          Default Toast
        </button>
      </div>
    </>
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var n,m,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <>
      <ToasterWithMax />
      <div className="mt-20 flex flex-col items-center gap-4">
        <button onClick={() => toast.success('This is a success message!')} className="rounded bg-green-500 px-4 py-2 text-white">
          Success Toast
        </button>
      </div>
    </>
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,x,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <>
      <ToasterWithMax />
      <div className="mt-20 flex flex-col items-center gap-4">
        <button onClick={() => toast.error('This is an fail message!')} className="rounded bg-red-500 px-4 py-2 text-white">
          Fail Toast
        </button>
      </div>
    </>
}`,...(p=(x=a.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};const j=["Default","Success","Fail"];export{s as Default,a as Fail,t as Success,j as __namedExportsOrder,b as default};
