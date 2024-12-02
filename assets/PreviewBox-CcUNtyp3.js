import{j as i}from"./jsx-runtime-DR9Q75dM.js";import{r as b}from"./index-DRjF_FHU.js";import{g as k}from"./useImageModalStore-BhpnCE_Z.js";import{_ as C}from"./index-D1AAVYfs.js";const T=`
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
`,L=o=>b.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},b.createElement("mask",{id:"mask0_503_1523",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:0,y:0,width:24,height:24},b.createElement("rect",{width:24,height:24,fill:"currentColor"})),b.createElement("g",{mask:"url(#mask0_503_1523)"},b.createElement("path",{d:"M9 18C8.45 18 7.97917 17.8042 7.5875 17.4125C7.19583 17.0208 7 16.55 7 16V4C7 3.45 7.19583 2.97917 7.5875 2.5875C7.97917 2.19583 8.45 2 9 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V16C20 16.55 19.8042 17.0208 19.4125 17.4125C19.0208 17.8042 18.55 18 18 18H9ZM9 16H18V4H9V16ZM5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6C4.28333 6 4.52083 6.09583 4.7125 6.2875C4.90417 6.47917 5 6.71667 5 7V20H15C15.2833 20 15.5208 20.0958 15.7125 20.2875C15.9042 20.4792 16 20.7167 16 21C16 21.2833 15.9042 21.5208 15.7125 21.7125C15.5208 21.9042 15.2833 22 15 22H5Z",fill:"currentColor"}))),j="_viewer_12nch_1",q="_dark_12nch_7",H="_lineNumbers_12nch_12",S="_lineNumber_12nch_12",E="_lineHighlight_12nch_24",F="_codeContent_12nch_28",M="_tag_12nch_34",A="_attribute_12nch_38",I="_value_12nch_42",D="_selector_12nch_46",V="_property_12nch_50",P="_newLine_12nch_67",O="_fadeIn_12nch_1",R="_blockHighlight_12nch_71",h={viewer:j,dark:q,lineNumbers:H,lineNumber:S,lineHighlight:E,codeContent:F,tag:M,attribute:A,value:I,selector:D,property:V,"property-value":"_property-value_12nch_54",newLine:P,fadeIn:O,blockHighlight:R},z=(o,s,r)=>{const m=o.split(`
`);let a=!1;return m.map(t=>r&&t.includes(`.${r}`)?(a=!0,`<span style="background-color: #FFF3AD;">${t}</span>`):a&&!t.includes("}")?`<span style="background-color: #FFF3AD;">${t}</span>`:a&&t.includes("}")?(a=!1,`<span style="background-color: #FFF3AD;">${t}</span>`):t.replace(/([^\s{}]+)\s*{/g,(u,c)=>{const n=r&&c.includes(`.${r}`)?`<span>${c}</span>`:c;return`<span class="${s.selector}">${n}</span> {`}).replace(/([\w-]+):/g,(u,c)=>`&nbsp;&nbsp;<span class="${s.property}">${c}</span>:`).replace(/:\s*([^;]+);/g,(u,c)=>`: <span class="${s["property-value"]}">${c}</span>;`)).join(`
`).split(`
`).map(t=>`  ${t}`).join(`
`)},B=(o,s,r)=>{const a=new DOMParser().parseFromString(o,"text/html"),e=(n,l)=>{const p="  ".repeat(l),d=`<span class="${s.tag}">${n.tagName.toLowerCase()}</span>`,g=Array.from(n.attributes).map(y=>{const N=y.name==="class"&&r&&y.value.includes(r)?y.value.replace(r,`<span style="background-color: #FFF3AD; color: green">${r}</span>`):y.value;return`<span class="${s.attribute}">${y.name}</span>=<span class="${s.value}">"${N}"</span>`}).join(" "),w=`${p}&lt;${d}${g?" "+g:""}&gt;`,_=`${p}&lt;/${d}&gt;`,f=Array.from(n.childNodes).map(y=>u(y,l+1)).join("");return["br","hr","img"].includes(n.tagName.toLowerCase())?`
${p}&lt;${d}${g?" "+g:""} /&gt;`:n.tagName.toLowerCase()==="head"?`${p}&lt;${d}${g?" "+g:""}&gt;${f.trim()}&lt;/${d}&gt;`:f.trim()?`
${w}
${f}
${_}`:`
${w}
${_}`},t=(n,l)=>{var g;const p=(g=n.textContent)==null?void 0:g.trim(),d="  ".repeat(l);return p?`
${d}<span class="${s.text}">${p}</span>`:""},u=(n,l=0)=>n.nodeType===Node.ELEMENT_NODE?e(n,l):n.nodeType===Node.TEXT_NODE?t(n,l):"";return u(a.documentElement,0).trim().split(`
`).map(n=>`  ${n}`).join(`
`)},v=({code:o,codeLineList:s,selectedBlockStartLine:r,selectedBlockLength:m,selectedBlockType:a})=>{const[e,t]=b.useState([]),[u,c]=b.useState([]);return b.useEffect(()=>{const n=[];s.forEach((p,d)=>{(!e[d]||e[d]!==p)&&n.push(d)}),c(n);const l=setTimeout(()=>c([]),1e3);return t(s),()=>clearTimeout(l)},[o]),i.jsx("div",{className:h.codeContent,children:i.jsx("pre",{children:i.jsx("code",{children:s.map((n,l)=>{const p=r&&m&&l+1>=r&&l+1<r+m,d=a&&n.includes(a);return i.jsx("div",{className:`${u.includes(l)?h.newLine:""} ${p?h.blockHighlight:""} ${d?h.highlightBg:""}`,dangerouslySetInnerHTML:{__html:n}},l)})})})})};v.__docgenInfo={description:"",methods:[],displayName:"CodeContent",props:{code:{required:!0,tsType:{name:"string"},description:""},codeLineList:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},selectedBlockStartLine:{required:!1,tsType:{name:"number"},description:""},selectedBlockLength:{required:!1,tsType:{name:"number"},description:""},selectedBlockType:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const x=({codeLineList:o})=>{const[s,r]=b.useState(null),m=e=>{r(e)},a=()=>{r(null)};return i.jsx("div",{className:h.lineNumbers,children:o.map((e,t)=>i.jsx("div",{onMouseEnter:()=>m(t+1),onMouseLeave:a,className:`${h.lineNumber} ${s===t+1?h.lineHighlight:""}`,children:t+1},t))})};x.__docgenInfo={description:"",methods:[],displayName:"LineNumbers",props:{codeLineList:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const $=({code:o,type:s,theme:r,selectedBlockStartLine:m,selectedBlockLength:a,selectedBlockType:e})=>{const u=(s==="html"?B(o,h,e):z(o,h,e)).split(`
`).filter(c=>c.trim()!=="");return i.jsxs("div",{className:`${h.viewer} ${r==="dark"?h.dark:h.light}`,children:[i.jsx(x,{codeLineList:u}),i.jsx(v,{code:o,codeLineList:u,selectedBlockLength:a,selectedBlockStartLine:m,selectedBlockType:e})]})};$.__docgenInfo={description:"",methods:[],displayName:"CodeViewer",props:{code:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:"'html' | 'css'",elements:[{name:"literal",value:"'html'"},{name:"literal",value:"'css'"}]},description:""},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:""},selectedBlockStartLine:{required:!1,tsType:{name:"number"},description:""},selectedBlockLength:{required:!1,tsType:{name:"number"},description:""},selectedBlockType:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const G=({htmlCode:o,cssCode:s,selectedBlockStartLine:r,selectedBlockLength:m,selectedBlockType:a})=>{const[e,t]=b.useState("preview"),{isResetCssChecked:u}=k(),c=`
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Gaegu:wght@300;400;700&family=Gothic+A1:wght@300;400;700&family=IBM+Plex+Sans+KR:wght@300;400;700&family=Nanum+Gothic:wght@400;700&family=Noto+Sans+KR:wght@100..900&family=Noto+Serif+KR:wght@200..900&display=swap" rel="stylesheet" />
  `,l=`<style> * { box-sizing : border-box; margin : 0; padding : 0; ::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-thumb { background: #cdd9e4; border-radius: 4px; } } html, head, body { width : 100%; height : 100%;  } ${u?`${T}
${s}`:s}</style>`,p=o.indexOf("</head>"),d=`${o.slice(0,p)}${c}${l}${o.slice(p)}`,g=async(_,f)=>{try{await navigator.clipboard.writeText(_),C.success(`${f} 코드가 복사되었습니다.`)}catch{C.error(`${f} 코드 복사에 실패했습니다.`)}},w=()=>{const _=e==="html"?o:s,f=e.toUpperCase();g(_,f)};return i.jsxs("section",{className:"flex-1 border-b border-gray-100",children:[i.jsxs("nav",{className:"flex h-10 border-b border-gray-100",children:[i.jsx("button",{onClick:()=>t("preview"),className:`${e==="preview"?"bg-green-500 text-white":"bg-white text-gray-200"} h-full flex-1 border-r border-gray-100 bg-green-500`,children:"미리보기"}),i.jsx("button",{onClick:()=>t("html"),className:`${e==="html"?"bg-green-500 text-white":"bg-white text-gray-200"} h-full flex-1 border-r border-gray-100 bg-green-500`,children:"HTML"}),i.jsx("button",{onClick:()=>t("css"),className:`${e==="css"?"bg-green-500 text-white":"bg-white text-gray-200"} h-full flex-1 bg-green-500`,children:"CSS"})]}),i.jsxs("div",{className:"relative h-full max-h-[calc(100%-26rem)] min-h-[20rem] w-full",children:[(e==="html"||e==="css")&&i.jsx("div",{className:"absolute right-4 top-5 z-50",children:i.jsx(L,{className:"h-6 w-6 cursor-pointer text-gray-300 hover:text-green-500",onClick:w})}),e==="preview"&&i.jsx("iframe",{srcDoc:d,className:"h-full w-full",title:"Preview",sandbox:"allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation"}),e==="html"&&i.jsx($,{code:o,type:"html",theme:"light",selectedBlockStartLine:r,selectedBlockLength:m,selectedBlockType:a}),e==="css"&&i.jsx($,{code:s,type:"css",theme:"light",selectedBlockType:a})]})]})};G.__docgenInfo={description:`@description
웹사이트, HTML, CSS 코드 미리보기 박스 컴포넌트`,methods:[],displayName:"PreviewBox",props:{htmlCode:{required:!0,tsType:{name:"string"},description:""},cssCode:{required:!0,tsType:{name:"string"},description:""},selectedBlockStartLine:{required:!1,tsType:{name:"number"},description:""},selectedBlockLength:{required:!1,tsType:{name:"number"},description:""},selectedBlockType:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};export{G as P};
