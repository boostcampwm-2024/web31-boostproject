import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{C as f,S as X}from"./question-BUxmZXrP.js";import{r as t}from"./index-DRjF_FHU.js";import"./index-BXCeiWJk.js";const h={title:"entities/workspace/CssTooltip",component:f,parameters:{layout:"centered",docs:{description:{component:"CSS 속성에 관한 정보를 알려주는 컴포넌트"}}},tags:["autodocs"]},r={args:{description:"css 툴팁입니다.",isOpen:!1,leftX:0,topY:0},render:n=>{const[i,s]=t.useState(n.isOpen),[c,p]=t.useState(0),[u,d]=t.useState(0),l=o=>{s(!0),p(o.currentTarget.getBoundingClientRect().x+8),d(o.currentTarget.getBoundingClientRect().y+8)},g=()=>{s(!1)};return e.jsxs("div",{children:[e.jsx(X,{onMouseEnter:l,onMouseLeave:g}),e.jsx(f,{description:n.description,leftX:c,topY:u,isOpen:i})]})}},a={args:{description:"css 툴팁입니다.",isOpen:!1,leftX:0,topY:0},render:n=>{const[i,s]=t.useState(n.isOpen),[c,p]=t.useState(0),[u,d]=t.useState(0),l=o=>{s(!0),p(o.currentTarget.getBoundingClientRect().x+8),d(-o.currentTarget.getBoundingClientRect().y+40)},g=()=>{s(!1)};return e.jsxs("div",{children:[e.jsx(X,{onMouseEnter:l,onMouseLeave:g}),e.jsx(f,{description:n.description,leftX:c,topY:u,isOpen:i})]})}};var O,M,m;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    description: 'css 툴팁입니다.',
    isOpen: false,
    leftX: 0,
    topY: 0
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const [leftX, setLeftX] = useState(0);
    const [topY, setTopY] = useState(0);
    const handleMouseEnter = (e: React.MouseEvent) => {
      setIsOpen(true);
      setLeftX(e.currentTarget.getBoundingClientRect().x + 8);
      setTopY(e.currentTarget.getBoundingClientRect().y + 8);
    };
    const handleMouseLeave = () => {
      setIsOpen(false);
    };
    return <div>
        <QuestionIcon onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <CssTooltip description={args.description} leftX={leftX} topY={topY} isOpen={isOpen} />
      </div>;
  }
}`,...(m=(M=r.parameters)==null?void 0:M.docs)==null?void 0:m.source}}};var v,S,T;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    description: 'css 툴팁입니다.',
    isOpen: false,
    leftX: 0,
    topY: 0
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const [leftX, setLeftX] = useState(0);
    const [topY, setTopY] = useState(0);
    const handleMouseEnter = (e: React.MouseEvent) => {
      setIsOpen(true);
      setLeftX(e.currentTarget.getBoundingClientRect().x + 8);
      setTopY(-e.currentTarget.getBoundingClientRect().y + 40);
    };
    const handleMouseLeave = () => {
      setIsOpen(false);
    };
    return <div>
        <QuestionIcon onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <CssTooltip description={args.description} leftX={leftX} topY={topY} isOpen={isOpen} />
      </div>;
  }
}`,...(T=(S=a.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const C=["Default","ScreenOverflow"];export{r as Default,a as ScreenOverflow,C as __namedExportsOrder,h as default};
