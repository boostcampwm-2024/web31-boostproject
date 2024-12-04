import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{I as s}from"./ImageTagModalListItem-D30WR0c8.js";import{r as u}from"./index-DRjF_FHU.js";const j={title:"entities/workspace/ImageTagModalListItem",component:s,parameters:{layout:"centered",docs:{description:{component:"img 태그 src 속성 적용을 위한 모달창에 사용되는 이미지 리스트 아이템 컴포넌트"}}},tags:["autodocs"]},t={args:{isSelected:!1,onDeleteImage:()=>{},onSelectImage:()=>{},filename:"logo.png"},render:e=>o.jsx(s,{isSelected:e.isSelected,onDeleteImage:e.onDeleteImage,onSelectImage:e.onSelectImage,filename:e.filename})},a={args:{isSelected:!0,onDeleteImage:()=>{},onSelectImage:()=>{},filename:"logo.png"},render:e=>o.jsx(s,{isSelected:e.isSelected,onDeleteImage:e.onDeleteImage,onSelectImage:e.onSelectImage,filename:e.filename})},n={args:{isSelected:!1,onDeleteImage:()=>{},onSelectImage:()=>{},filename:"logo.png"},render:e=>{const[l,f]=u.useState(e.isSelected);return o.jsx("div",{style:{width:"400px",resize:"horizontal",overflow:"auto"},children:o.jsx(s,{isSelected:l,onDeleteImage:e.onDeleteImage,onSelectImage:()=>f(!l),filename:e.filename})})}};var r,m,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    isSelected: false,
    onDeleteImage: () => {},
    onSelectImage: () => {},
    filename: 'logo.png'
  },
  render: args => {
    return <ImageTagModalListItem isSelected={args.isSelected} onDeleteImage={args.onDeleteImage} onSelectImage={args.onSelectImage} filename={args.filename} />;
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var i,g,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    isSelected: true,
    onDeleteImage: () => {},
    onSelectImage: () => {},
    filename: 'logo.png'
  },
  render: args => {
    return <ImageTagModalListItem isSelected={args.isSelected} onDeleteImage={args.onDeleteImage} onSelectImage={args.onSelectImage} filename={args.filename} />;
  }
}`,...(d=(g=a.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var I,S,p;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    isSelected: false,
    onDeleteImage: () => {},
    onSelectImage: () => {},
    filename: 'logo.png'
  },
  render: args => {
    const [isSelected, setIsSelected] = useState<boolean>(args.isSelected);
    return <div style={{
      width: '400px',
      resize: 'horizontal',
      overflow: 'auto'
    }}>
        <ImageTagModalListItem isSelected={isSelected} onDeleteImage={args.onDeleteImage} onSelectImage={() => setIsSelected(!isSelected)} filename={args.filename} />
      </div>;
  }
}`,...(p=(S=n.parameters)==null?void 0:S.docs)==null?void 0:p.source}}};const z=["Default","Selected","ActiveAndResize"];export{n as ActiveAndResize,t as Default,a as Selected,z as __namedExportsOrder,j as default};
