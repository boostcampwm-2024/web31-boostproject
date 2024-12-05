import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{r}from"./index-DRjF_FHU.js";import{g as k,h as S}from"./html2canvas.esm-D1fnD2iC.js";import{C as d}from"./CodeViewer-D_DSBhbX.js";import{_ as m}from"./index-D1AAVYfs.js";import{u as j}from"./useCoachMarkStore-Bn0-Ay5q.js";const T=s=>r.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},r.createElement("mask",{id:"mask0_503_1523",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:0,y:0,width:24,height:24},r.createElement("rect",{width:24,height:24,fill:"currentColor"})),r.createElement("g",{mask:"url(#mask0_503_1523)"},r.createElement("path",{d:"M9 18C8.45 18 7.97917 17.8042 7.5875 17.4125C7.19583 17.0208 7 16.55 7 16V4C7 3.45 7.19583 2.97917 7.5875 2.5875C7.97917 2.19583 8.45 2 9 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V16C20 16.55 19.8042 17.0208 19.4125 17.4125C19.0208 17.8042 18.55 18 18 18H9ZM9 16H18V4H9V16ZM5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6C4.28333 6 4.52083 6.09583 4.7125 6.2875C4.90417 6.47917 5 6.71667 5 7V20H15C15.2833 20 15.5208 20.0958 15.7125 20.2875C15.9042 20.4792 16 20.7167 16 21C16 21.2833 15.9042 21.5208 15.7125 21.7125C15.5208 21.9042 15.2833 22 15 22H5Z",fill:"currentColor"}))),q=`
html, body, div, span, header, section, nav, main, article, footer, p, strong,
h1, h2, h3, h4, h5, h6, small, br, em, i, blockquote, hr, input, button,
form, option, textarea, select, fieldset, legend, label, td, tr, th,
caption, table, ul, ol, li, a {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article, header, section, nav, main, footer {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
`,N=({htmlCode:s,cssCode:o,selectedBlockStartLine:p,selectedBlockLength:g,selectedBlockType:c})=>{const[e,l]=r.useState("preview"),{isResetCssChecked:b}=k(),{currentStep:f}=j(),{setIframeRef:u}=S(),i=r.useRef(null),x=`
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Gaegu:wght@300;400;700&family=Gothic+A1:wght@300;400;700&family=IBM+Plex+Sans+KR:wght@300;400;700&family=Nanum+Gothic:wght@400;700&family=Noto+Sans+KR:wght@100..900&family=Noto+Serif+KR:wght@200..900&display=swap" rel="stylesheet" />
  `,y=`<style> * { box-sizing : border-box; margin : 0; padding : 0; ::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-thumb { background: #cdd9e4; border-radius: 4px; } } html, head, body { width : 100%; height : 100%;  } ${b?`${q}
${o}`:o}</style>`,h=s.indexOf("</head>"),w=`${s.slice(0,h)}${x}${y}${s.slice(h)}`;r.useEffect(()=>{i.current&&u(i)},[i]);const C=async(n,a)=>{try{await navigator.clipboard.writeText(n),m.success(`${a} 코드가 복사되었습니다.`)}catch{m.error(`${a} 코드 복사에 실패했습니다.`)}},v=()=>{const n=e==="html"?s:o,a=e.toUpperCase();C(n,a)};return t.jsxs("section",{className:`flex h-[calc(100vh-475px)] flex-1 flex-col border-b border-gray-100 ${f===3?"z-[200]":""}`,children:[t.jsxs("nav",{className:"flex h-10 border-b border-gray-100",children:[t.jsx("button",{onClick:()=>l("preview"),className:`${e==="preview"?"bg-green-500 text-white":"bg-white text-gray-200"} h-full flex-1 border-r border-gray-100 bg-green-500`,"aria-label":"미리보기 탭 버튼",children:"미리보기"}),t.jsx("button",{onClick:()=>l("html"),className:`${e==="html"?"bg-green-500 text-white":"bg-white text-gray-200"} h-full flex-1 border-r border-gray-100 bg-green-500`,"aria-label":"HTML 탭 버튼",children:"HTML"}),t.jsx("button",{onClick:()=>l("css"),className:`${e==="css"?"bg-green-500 text-white":"bg-white text-gray-200"} h-full flex-1 bg-green-500`,"aria-label":"CSS 탭 버튼",children:"CSS"})]}),t.jsxs("div",{className:"relative flex-1 overflow-hidden",children:[(e==="html"||e==="css")&&t.jsx("div",{className:"absolute right-4 top-5 z-50",children:t.jsx(T,{className:"h-6 w-6 cursor-pointer text-gray-300 hover:text-green-500",onClick:v,"aria-label":"코드 복사 버튼"})}),e==="preview"&&t.jsx("iframe",{ref:i,srcDoc:w,className:"h-full w-full",title:"Preview",sandbox:"allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation"}),e==="html"&&t.jsx(d,{code:e==="html"?s:o,type:e,theme:"light",selectedBlockStartLine:p,selectedBlockLength:g,selectedBlockType:c}),e==="css"&&t.jsx(d,{code:o,type:"css",theme:"light",selectedBlockType:c})]})]})};N.__docgenInfo={description:`@description
웹사이트, HTML, CSS 코드 미리보기 박스 컴포넌트`,methods:[],displayName:"PreviewBox",props:{htmlCode:{required:!0,tsType:{name:"string"},description:""},cssCode:{required:!0,tsType:{name:"string"},description:""},selectedBlockStartLine:{required:!1,tsType:{name:"number"},description:""},selectedBlockLength:{required:!1,tsType:{name:"number"},description:""},selectedBlockType:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};export{N as P};
