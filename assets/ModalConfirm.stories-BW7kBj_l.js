import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{M as a}from"./ModalConfirm-D4PzhGiJ.js";import{r as l}from"./index-DRjF_FHU.js";import"./index-BXCeiWJk.js";const f={title:"shared/ui/modal/ModalConfirm",component:a,parameters:{layout:"centered",docs:{description:{component:"모달 재사용 컴포넌트"}}},tags:["autodocs"]},s={args:{isOpen:!1},render:n=>{const[c,t]=l.useState(n.isOpen);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>t(!0),children:"모달 열기"}),e.jsx(a,{...n,isOpen:c,children:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("p",{children:"모달창입니다."}),e.jsx("img",{src:"/images/booduck_modal.png",alt:"부덕이",width:100,height:100}),e.jsx("button",{onClick:()=>t(!1),children:"닫기"})]})})]})}};var r,o,i;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
            <img src="/images/booduck_modal.png" alt="부덕이" width={100} height={100} />
            <button onClick={() => setIsOpen(false)}>닫기</button>
          </div>
        </ModalConfirm>
      </div>;
  }
}`,...(i=(o=s.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const x=["Default"];export{s as Default,x as __namedExportsOrder,f as default};
