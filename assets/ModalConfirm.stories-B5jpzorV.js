import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{M as i}from"./ModalConfirm-BDuYJlbG.js";import{r as l}from"./index-DRjF_FHU.js";import"./index-BXCeiWJk.js";const f={title:"shared/ui/modal/ModalConfirm",component:i,parameters:{layout:"centered",docs:{description:{component:"모달 재사용 컴포넌트"}}},tags:["autodocs"]},t={args:{isOpen:!1},render:s=>{const[c,n]=l.useState(s.isOpen);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>n(!0),children:"모달 열기"}),e.jsx(i,{...s,isOpen:c,children:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("p",{children:"모달창입니다."}),e.jsx("img",{src:"https://kr.object.ncloudstorage.com/boolock-storage/static/booduck_modal.png",alt:"부덕이",width:100,height:100}),e.jsx("button",{onClick:()=>n(!1),children:"닫기"})]})})]})}};var o,r,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    isOpen: false
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return <div>
        <button onClick={() => setIsOpen(true)}>모달 열기</button>
        <ModalConfirm {...args} isOpen={isOpen}>
          <div className="flex flex-col items-center justify-center">
            <p>모달창입니다.</p>
            <img src={\`\${import.meta.env.VITE_STATIC_STORAGE_URL}booduck_modal.png\`} alt="부덕이" width={100} height={100} />
            <button onClick={() => setIsOpen(false)}>닫기</button>
          </div>
        </ModalConfirm>
      </div>;
  }
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,f as default};
