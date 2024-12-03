import{j as n}from"./jsx-runtime-DR9Q75dM.js";import{r as b}from"./index-DRjF_FHU.js";import{g as k}from"./useImageModalStore-jpOIQYA6.js";import{_ as $}from"./index-D1AAVYfs.js";const T=`
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
`,j=o=>b.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},b.createElement("mask",{id:"mask0_503_1523",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:0,y:0,width:24,height:24},b.createElement("rect",{width:24,height:24,fill:"currentColor"})),b.createElement("g",{mask:"url(#mask0_503_1523)"},b.createElement("path",{d:"M9 18C8.45 18 7.97917 17.8042 7.5875 17.4125C7.19583 17.0208 7 16.55 7 16V4C7 3.45 7.19583 2.97917 7.5875 2.5875C7.97917 2.19583 8.45 2 9 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V16C20 16.55 19.8042 17.0208 19.4125 17.4125C19.0208 17.8042 18.55 18 18 18H9ZM9 16H18V4H9V16ZM5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6C4.28333 6 4.52083 6.09583 4.7125 6.2875C4.90417 6.47917 5 6.71667 5 7V20H15C15.2833 20 15.5208 20.0958 15.7125 20.2875C15.9042 20.4792 16 20.7167 16 21C16 21.2833 15.9042 21.5208 15.7125 21.7125C15.5208 21.9042 15.2833 22 15 22H5Z",fill:"currentColor"}))),L="_viewer_5mpew_1",q="_scrollContainer_5mpew_7",H="_dark_5mpew_13",S="_lineNumbers_5mpew_18",E="_lineNumber_5mpew_18",F="_lineHighlight_5mpew_28",M="_codeContent_5mpew_32",A="_tag_5mpew_37",I="_attribute_5mpew_41",D="_value_5mpew_45",V="_selector_5mpew_49",P="_property_5mpew_53",O="_newLine_5mpew_70",R="_fadeIn_5mpew_1",z="_blockHighlight_5mpew_74",m={viewer:L,scrollContainer:q,dark:H,lineNumbers:S,lineNumber:E,lineHighlight:F,codeContent:M,tag:A,attribute:I,value:D,selector:V,property:P,"property-value":"_property-value_5mpew_57",newLine:O,fadeIn:R,blockHighlight:z},v=({code:o,codeLineList:r,selectedBlockStartLine:i,selectedBlockLength:h,selectedBlockType:a})=>{const[e,t]=b.useState([]),[u,c]=b.useState([]);return b.useEffect(()=>{const s=[];r.forEach((d,p)=>{(!e[p]||e[p]!==d)&&s.push(p)}),c(s);const l=setTimeout(()=>c([]),1e3);return t(r),()=>clearTimeout(l)},[o]),n.jsx("div",{className:m.codeContent,children:n.jsx("pre",{children:n.jsx("code",{children:r.map((s,l)=>{const d=i&&h&&l+1>=i&&l+1<i+h,p=a&&s.includes(a);return n.jsx("div",{className:`${u.includes(l)?m.newLine:""} ${d?m.blockHighlight:""} ${p?m.highlightBg:""}`,dangerouslySetInnerHTML:{__html:s}},l)})})})})};v.__docgenInfo={description:"",methods:[],displayName:"CodeContent",props:{code:{required:!0,tsType:{name:"string"},description:""},codeLineList:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},selectedBlockStartLine:{required:!1,tsType:{name:"number"},description:""},selectedBlockLength:{required:!1,tsType:{name:"number"},description:""},selectedBlockType:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const x=({codeLineList:o})=>{const[r,i]=b.useState(null),h=e=>{i(e)},a=()=>{i(null)};return n.jsx("div",{className:m.lineNumbers,children:o.map((e,t)=>n.jsx("div",{onMouseEnter:()=>h(t+1),onMouseLeave:a,className:`${m.lineNumber} ${r===t+1?m.lineHighlight:""}`,children:t+1},t))})};x.__docgenInfo={description:"",methods:[],displayName:"LineNumbers",props:{codeLineList:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const B=(o,r,i)=>{const h=o.split(`
`);let a=!1;return h.map(t=>i&&t.includes(`.${i}`)?(a=!0,`<span style="background-color: #FFF3AD;">${t}</span>`):a&&!t.includes("}")?`<span style="background-color: #FFF3AD;">${t}</span>`:a&&t.includes("}")?(a=!1,`<span style="background-color: #FFF3AD;">${t}</span>`):t.replace(/([^\s{}]+)\s*{/g,(u,c)=>{const s=i&&c.includes(`.${i}`)?`<span>${c}</span>`:c;return`<span class="${r.selector}">${s}</span> {`}).replace(/([\w-]+):/g,(u,c)=>`&nbsp;&nbsp;<span class="${r.property}">${c}</span>:`).replace(/:\s*([^;]+);/g,(u,c)=>`: <span class="${r["property-value"]}">${c}</span>;`)).join(`
`).split(`
`).map(t=>`  ${t}`).join(`
`)},G=(o,r,i)=>{const a=new DOMParser().parseFromString(o,"text/html"),e=(s,l)=>{const d="  ".repeat(l),p=`<span class="${r.tag}">${s.tagName.toLowerCase()}</span>`,g=Array.from(s.attributes).map(w=>{const N=w.name==="class"&&i&&w.value.includes(i)?w.value.replace(i,`<span style="background-color: #FFF3AD; color: green">${i}</span>`):w.value;return`<span class="${r.attribute}">${w.name}</span>=<span class="${r.value}">"${N}"</span>`}).join(" "),y=`${d}&lt;${p}${g?" "+g:""}&gt;`,_=`${d}&lt;/${p}&gt;`,f=Array.from(s.childNodes).map(w=>u(w,l+1)).join("");return["br","hr","img"].includes(s.tagName.toLowerCase())?`
${d}&lt;${p}${g?" "+g:""} /&gt;`:s.tagName.toLowerCase()==="head"?`${d}&lt;${p}${g?" "+g:""}&gt;${f.trim()}&lt;/${p}&gt;`:f.trim()?`
${y}
${f}
${_}`:`
${y}
${_}`},t=(s,l)=>{var g;const d=(g=s.textContent)==null?void 0:g.trim(),p="  ".repeat(l);return d?`
${p}<span class="${r.text}">${d}</span>`:""},u=(s,l=0)=>s.nodeType===Node.ELEMENT_NODE?e(s,l):s.nodeType===Node.TEXT_NODE?t(s,l):"";return u(a.documentElement,0).trim().split(`
`).map(s=>`  ${s}`).join(`
`)},C=({code:o,type:r,theme:i,selectedBlockStartLine:h,selectedBlockLength:a,selectedBlockType:e})=>{const u=(r==="html"?G(o,m,e):B(o,m,e)).split(`
`).filter(c=>c.trim()!=="");return n.jsx("div",{className:`${m.viewer} ${i==="dark"?m.dark:m.light}`,children:n.jsxs("div",{className:m.scrollContainer,children:[n.jsx(x,{codeLineList:u}),n.jsx(v,{code:o,codeLineList:u,selectedBlockLength:a,selectedBlockStartLine:h,selectedBlockType:e})]})})};C.__docgenInfo={description:"",methods:[],displayName:"CodeViewer",props:{code:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:"'html' | 'css'",elements:[{name:"literal",value:"'html'"},{name:"literal",value:"'css'"}]},description:""},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:""},selectedBlockStartLine:{required:!1,tsType:{name:"number"},description:""},selectedBlockLength:{required:!1,tsType:{name:"number"},description:""},selectedBlockType:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const K=({htmlCode:o,cssCode:r,selectedBlockStartLine:i,selectedBlockLength:h,selectedBlockType:a})=>{const[e,t]=b.useState("preview"),{isResetCssChecked:u}=k(),c=`
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Gaegu:wght@300;400;700&family=Gothic+A1:wght@300;400;700&family=IBM+Plex+Sans+KR:wght@300;400;700&family=Nanum+Gothic:wght@400;700&family=Noto+Sans+KR:wght@100..900&family=Noto+Serif+KR:wght@200..900&display=swap" rel="stylesheet" />
  `,l=`<style> * { box-sizing : border-box; margin : 0; padding : 0; ::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-thumb { background: #cdd9e4; border-radius: 4px; } } html, head, body { width : 100%; height : 100%;  } ${u?`${T}
${r}`:r}</style>`,d=o.indexOf("</head>"),p=`${o.slice(0,d)}${c}${l}${o.slice(d)}`,g=async(_,f)=>{try{await navigator.clipboard.writeText(_),$.success(`${f} 코드가 복사되었습니다.`)}catch{$.error(`${f} 코드 복사에 실패했습니다.`)}},y=()=>{const _=e==="html"?o:r,f=e.toUpperCase();g(_,f)};return n.jsxs("section",{className:"flex h-[calc(100vh-475px)] flex-1 flex-col border-b border-gray-100",children:[n.jsxs("nav",{className:"flex h-10 border-b border-gray-100",children:[n.jsx("button",{onClick:()=>t("preview"),className:`${e==="preview"?"bg-green-500 text-white":"bg-white text-gray-200"} h-full flex-1 border-r border-gray-100 bg-green-500`,children:"미리보기"}),n.jsx("button",{onClick:()=>t("html"),className:`${e==="html"?"bg-green-500 text-white":"bg-white text-gray-200"} h-full flex-1 border-r border-gray-100 bg-green-500`,children:"HTML"}),n.jsx("button",{onClick:()=>t("css"),className:`${e==="css"?"bg-green-500 text-white":"bg-white text-gray-200"} h-full flex-1 bg-green-500`,children:"CSS"})]}),n.jsxs("div",{className:"relative flex-1 overflow-hidden",children:[(e==="html"||e==="css")&&n.jsx("div",{className:"absolute right-4 top-5 z-50",children:n.jsx(j,{className:"h-6 w-6 cursor-pointer text-gray-300 hover:text-green-500",onClick:y})}),e==="preview"&&n.jsx("iframe",{srcDoc:p,className:"h-full w-full",title:"Preview",sandbox:"allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation"}),e==="html"&&n.jsx(C,{code:e==="html"?o:r,type:e,theme:"light",selectedBlockStartLine:i,selectedBlockLength:h,selectedBlockType:a}),e==="css"&&n.jsx(C,{code:r,type:"css",theme:"light",selectedBlockType:a})]})]})};K.__docgenInfo={description:`@description
웹사이트, HTML, CSS 코드 미리보기 박스 컴포넌트`,methods:[],displayName:"PreviewBox",props:{htmlCode:{required:!0,tsType:{name:"string"},description:""},cssCode:{required:!0,tsType:{name:"string"},description:""},selectedBlockStartLine:{required:!1,tsType:{name:"number"},description:""},selectedBlockLength:{required:!1,tsType:{name:"number"},description:""},selectedBlockType:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};export{K as P};
