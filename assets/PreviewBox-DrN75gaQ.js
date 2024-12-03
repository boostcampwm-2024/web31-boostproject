import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{r as b}from"./index-DRjF_FHU.js";import{g as k}from"./useWorkspaceStore-DrKMScWF.js";import{_ as C}from"./index-D1AAVYfs.js";const L=`
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
`,T=i=>b.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},b.createElement("mask",{id:"mask0_503_1523",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:0,y:0,width:24,height:24},b.createElement("rect",{width:24,height:24,fill:"currentColor"})),b.createElement("g",{mask:"url(#mask0_503_1523)"},b.createElement("path",{d:"M9 18C8.45 18 7.97917 17.8042 7.5875 17.4125C7.19583 17.0208 7 16.55 7 16V4C7 3.45 7.19583 2.97917 7.5875 2.5875C7.97917 2.19583 8.45 2 9 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V16C20 16.55 19.8042 17.0208 19.4125 17.4125C19.0208 17.8042 18.55 18 18 18H9ZM9 16H18V4H9V16ZM5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6C4.28333 6 4.52083 6.09583 4.7125 6.2875C4.90417 6.47917 5 6.71667 5 7V20H15C15.2833 20 15.5208 20.0958 15.7125 20.2875C15.9042 20.4792 16 20.7167 16 21C16 21.2833 15.9042 21.5208 15.7125 21.7125C15.5208 21.9042 15.2833 22 15 22H5Z",fill:"currentColor"}))),j="_viewer_12nch_1",q="_dark_12nch_7",H="_lineNumbers_12nch_12",S="_lineNumber_12nch_12",E="_lineHighlight_12nch_24",F="_codeContent_12nch_28",M="_tag_12nch_34",A="_attribute_12nch_38",I="_value_12nch_42",D="_selector_12nch_46",V="_property_12nch_50",P="_newLine_12nch_67",O="_fadeIn_12nch_1",R="_blockHighlight_12nch_71",h={viewer:j,dark:q,lineNumbers:H,lineNumber:S,lineHighlight:E,codeContent:F,tag:M,attribute:A,value:I,selector:D,property:V,"property-value":"_property-value_12nch_54",newLine:P,fadeIn:O,blockHighlight:R},z=(i,s,r)=>{const m=i.split(`
`);let a=!1;return m.map(e=>r&&e.includes(`.${r}`)?(a=!0,`<span style="background-color: #FFF3AD;">${e}</span>`):a&&!e.includes("}")?`<span style="background-color: #FFF3AD;">${e}</span>`:a&&e.includes("}")?(a=!1,`<span style="background-color: #FFF3AD;">${e}</span>`):e.replace(/([^\s{}]+)\s*{/g,(u,c)=>{const n=r&&c.includes(`.${r}`)?`<span>${c}</span>`:c;return`<span class="${s.selector}">${n}</span> {`}).replace(/([\w-]+):/g,(u,c)=>`&nbsp;&nbsp;<span class="${s.property}">${c}</span>:`).replace(/:\s*([^;]+);/g,(u,c)=>`: <span class="${s["property-value"]}">${c}</span>;`)).join(`
`).split(`
`).map(e=>`  ${e}`).join(`
`)},B=(i,s,r)=>{const a=new DOMParser().parseFromString(i,"text/html"),t=(n,l)=>{const p="  ".repeat(l),d=`<span class="${s.tag}">${n.tagName.toLowerCase()}</span>`,g=Array.from(n.attributes).map(y=>{const N=y.name==="class"&&r&&y.value.includes(r)?y.value.replace(r,`<span style="background-color: #FFF3AD; color: green">${r}</span>`):y.value;return`<span class="${s.attribute}">${y.name}</span>=<span class="${s.value}">"${N}"</span>`}).join(" "),w=`${p}&lt;${d}${g?" "+g:""}&gt;`,_=`${p}&lt;/${d}&gt;`,f=Array.from(n.childNodes).map(y=>u(y,l+1)).join("");return["br","hr"].includes(n.tagName.toLowerCase())?`
${p}&lt;${d}${g?" "+g:""} /&gt;`:n.tagName.toLowerCase()==="head"?`${p}&lt;${d}${g?" "+g:""}&gt;${f.trim()}&lt;/${d}&gt;`:f.trim()?`
${w}
${f}
${_}`:`
${w}
${_}`},e=(n,l)=>{var g;const p=(g=n.textContent)==null?void 0:g.trim(),d="  ".repeat(l);return p?`
${d}<span class="${s.text}">${p}</span>`:""},u=(n,l=0)=>n.nodeType===Node.ELEMENT_NODE?t(n,l):n.nodeType===Node.TEXT_NODE?e(n,l):"";return u(a.documentElement,0).trim().split(`
`).map(n=>`  ${n}`).join(`
`)},v=({code:i,codeLineList:s,selectedBlockStartLine:r,selectedBlockLength:m,selectedBlockType:a})=>{const[t,e]=b.useState([]),[u,c]=b.useState([]);return b.useEffect(()=>{const n=[];s.forEach((p,d)=>{(!t[d]||t[d]!==p)&&n.push(d)}),c(n);const l=setTimeout(()=>c([]),1e3);return e(s),()=>clearTimeout(l)},[i]),o.jsx("div",{className:h.codeContent,children:o.jsx("pre",{children:o.jsx("code",{children:s.map((n,l)=>{const p=r&&m&&l+1>=r&&l+1<r+m,d=a&&n.includes(a);return o.jsx("div",{className:`${u.includes(l)?h.newLine:""} ${p?h.blockHighlight:""} ${d?h.highlightBg:""}`,dangerouslySetInnerHTML:{__html:n}},l)})})})})};v.__docgenInfo={description:"",methods:[],displayName:"CodeContent",props:{code:{required:!0,tsType:{name:"string"},description:""},codeLineList:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},selectedBlockStartLine:{required:!1,tsType:{name:"number"},description:""},selectedBlockLength:{required:!1,tsType:{name:"number"},description:""},selectedBlockType:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const x=({codeLineList:i})=>{const[s,r]=b.useState(null),m=t=>{r(t)},a=()=>{r(null)};return o.jsx("div",{className:h.lineNumbers,children:i.map((t,e)=>o.jsx("div",{onMouseEnter:()=>m(e+1),onMouseLeave:a,className:`${h.lineNumber} ${s===e+1?h.lineHighlight:""}`,children:e+1},e))})};x.__docgenInfo={description:"",methods:[],displayName:"LineNumbers",props:{codeLineList:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const $=({code:i,type:s,theme:r,selectedBlockStartLine:m,selectedBlockLength:a,selectedBlockType:t})=>{console.log("type",s);const e=s==="html"?B(i,h,t):z(i,h,t),u=e.split(`
`).filter(c=>c.trim()!=="");return console.log("parsedCode",e),console.log("codeLineList",u),o.jsxs("div",{className:`${h.viewer} ${r==="dark"?h.dark:h.light}`,children:[o.jsx(x,{codeLineList:u}),o.jsx(v,{code:i,codeLineList:u,selectedBlockLength:a,selectedBlockStartLine:m,selectedBlockType:t})]})};$.__docgenInfo={description:"",methods:[],displayName:"CodeViewer",props:{code:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:"'html' | 'css'",elements:[{name:"literal",value:"'html'"},{name:"literal",value:"'css'"}]},description:""},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:""},selectedBlockStartLine:{required:!1,tsType:{name:"number"},description:""},selectedBlockLength:{required:!1,tsType:{name:"number"},description:""},selectedBlockType:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const G=({htmlCode:i,cssCode:s,selectedBlockStartLine:r,selectedBlockLength:m,selectedBlockType:a})=>{const[t,e]=b.useState("preview"),{isResetCssChecked:u}=k(),c=`
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Gaegu:wght@300;400;700&family=Gothic+A1:wght@300;400;700&family=IBM+Plex+Sans+KR:wght@300;400;700&family=Nanum+Gothic:wght@400;700&family=Noto+Sans+KR:wght@100..900&family=Noto+Serif+KR:wght@200..900&display=swap" rel="stylesheet" />
  `,l=`<style> * { box-sizing : border-box; margin : 0; padding : 0; ::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-thumb { background: #cdd9e4; border-radius: 4px; } } html, head, body { width : 100%; height : 100%;  } ${u?`${L}
${s}`:s}</style>`,p=i.indexOf("</head>"),d=`${i.slice(0,p)}${c}${l}${i.slice(p)}`,g=async(_,f)=>{try{await navigator.clipboard.writeText(_),C.success(`${f} 코드가 복사되었습니다.`)}catch{C.error(`${f} 코드 복사에 실패했습니다.`)}},w=()=>{const _=t==="html"?i:s,f=t.toUpperCase();g(_,f)};return o.jsxs("section",{className:"flex-1 border-b border-gray-100",children:[o.jsxs("nav",{className:"flex h-10 border-b border-gray-100",children:[o.jsx("button",{onClick:()=>e("preview"),className:`${t==="preview"?"bg-green-500 text-white":"bg-white text-gray-200"} h-full flex-1 border-r border-gray-100 bg-green-500`,children:"미리보기"}),o.jsx("button",{onClick:()=>e("html"),className:`${t==="html"?"bg-green-500 text-white":"bg-white text-gray-200"} h-full flex-1 border-r border-gray-100 bg-green-500`,children:"HTML"}),o.jsx("button",{onClick:()=>e("css"),className:`${t==="css"?"bg-green-500 text-white":"bg-white text-gray-200"} h-full flex-1 bg-green-500`,children:"CSS"})]}),o.jsxs("div",{className:"relative h-full max-h-[calc(100%-26rem)] min-h-[20rem] w-full",children:[(t==="html"||t==="css")&&o.jsx("div",{className:"absolute right-4 top-5 z-50",children:o.jsx(T,{className:"h-6 w-6 cursor-pointer text-gray-300 hover:text-green-500",onClick:w})}),t==="preview"&&o.jsx("iframe",{srcDoc:d,className:"h-full w-full",title:"Preview",sandbox:"allow-same-origin"}),t==="html"&&o.jsx($,{code:i,type:"html",theme:"light",selectedBlockStartLine:r,selectedBlockLength:m,selectedBlockType:a}),t==="css"&&o.jsx($,{code:s,type:"css",theme:"light",selectedBlockType:a})]})]})};G.__docgenInfo={description:`@description
웹사이트, HTML, CSS 코드 미리보기 박스 컴포넌트`,methods:[],displayName:"PreviewBox",props:{htmlCode:{required:!0,tsType:{name:"string"},description:""},cssCode:{required:!0,tsType:{name:"string"},description:""},selectedBlockStartLine:{required:!1,tsType:{name:"number"},description:""},selectedBlockLength:{required:!1,tsType:{name:"number"},description:""},selectedBlockType:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};export{G as P};
