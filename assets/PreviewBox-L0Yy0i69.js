import{j as n}from"./jsx-runtime-DR9Q75dM.js";import{r as h}from"./index-DRjF_FHU.js";import{i as j,j as L}from"./html2canvas.esm-BTtajP0W.js";import{u as N}from"./useCoachMarkStore-B_Mp-SD7.js";import{_ as x}from"./index-D1AAVYfs.js";const S="_viewer_5mpew_1",q="_scrollContainer_5mpew_7",H="_dark_5mpew_13",E="_lineNumbers_5mpew_18",M="_lineNumber_5mpew_18",F="_lineHighlight_5mpew_28",I="_codeContent_5mpew_32",A="_tag_5mpew_37",R="_attribute_5mpew_41",D="_value_5mpew_45",V="_selector_5mpew_49",P="_property_5mpew_53",O="_newLine_5mpew_70",z="_fadeIn_5mpew_1",B="_blockHighlight_5mpew_74",m={viewer:S,scrollContainer:q,dark:H,lineNumbers:E,lineNumber:M,lineHighlight:F,codeContent:I,tag:A,attribute:R,value:D,selector:V,property:P,"property-value":"_property-value_5mpew_57",newLine:O,fadeIn:z,blockHighlight:B},k=({code:o,codeLineList:s,selectedBlockStartLine:i,selectedBlockLength:g,selectedBlockType:l})=>{const[t,r]=h.useState([]),[u,c]=h.useState([]);return h.useEffect(()=>{const e=[];s.forEach((d,p)=>{(!t[p]||t[p]!==d)&&e.push(p)}),c(e);const a=setTimeout(()=>c([]),1e3);return r(s),()=>clearTimeout(a)},[o]),n.jsx("div",{className:m.codeContent,children:n.jsx("pre",{children:n.jsx("code",{children:s.map((e,a)=>{const d=i&&g&&a+1>=i&&a+1<i+g,p=l&&e.includes(l);return n.jsx("div",{className:`${u.includes(a)?m.newLine:""} ${d?m.blockHighlight:""} ${p?m.highlightBg:""}`,dangerouslySetInnerHTML:{__html:e}},a)})})})})};k.__docgenInfo={description:"",methods:[],displayName:"CodeContent",props:{code:{required:!0,tsType:{name:"string"},description:""},codeLineList:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},selectedBlockStartLine:{required:!1,tsType:{name:"number"},description:""},selectedBlockLength:{required:!1,tsType:{name:"number"},description:""},selectedBlockType:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const T=({codeLineList:o})=>{const[s,i]=h.useState(null),g=t=>{i(t)},l=()=>{i(null)};return n.jsx("div",{className:m.lineNumbers,children:o.map((t,r)=>n.jsx("div",{onMouseEnter:()=>g(r+1),onMouseLeave:l,className:`${m.lineNumber} ${s===r+1?m.lineHighlight:""}`,children:r+1},r))})};T.__docgenInfo={description:"",methods:[],displayName:"LineNumbers",props:{codeLineList:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const G=(o,s,i)=>{const g=o.split(`
`);let l=!1;return g.map(r=>i&&r.includes(`.${i}`)?(l=!0,`<span style="background-color: #FFF3AD;">${r}</span>`):l&&!r.includes("}")?`<span style="background-color: #FFF3AD;">${r}</span>`:l&&r.includes("}")?(l=!1,`<span style="background-color: #FFF3AD;">${r}</span>`):r.replace(/([^\s{}]+)\s*{/g,(u,c)=>{const e=i&&c.includes(`.${i}`)?`<span>${c}</span>`:c;return`<span class="${s.selector}">${e}</span> {`}).replace(/([\w-]+):/g,(u,c)=>`&nbsp;&nbsp;<span class="${s.property}">${c}</span>:`).replace(/:\s*([^;]+);/g,(u,c)=>`: <span class="${s["property-value"]}">${c}</span>;`)).join(`
`).split(`
`).map(r=>`  ${r}`).join(`
`)},K=(o,s,i)=>{const l=new DOMParser().parseFromString(o,"text/html"),t=(e,a)=>{const d="  ".repeat(a),p=`<span class="${s.tag}">${e.tagName.toLowerCase()}</span>`,b=Array.from(e.attributes).map(f=>{const y=f.name==="class"&&i&&f.value.includes(i)?f.value.replace(i,`<span style="background-color: #FFF3AD; color: green">${i}</span>`):f.value;return`<span class="${s.attribute}">${f.name}</span>=<span class="${s.value}">"${y}"</span>`}).join(" "),w=`${d}&lt;${p}${b?" "+b:""}&gt;`,C=`${d}&lt;/${p}&gt;`,_=Array.from(e.childNodes).map(f=>u(f,a+1)).join("");return["br","hr","img"].includes(e.tagName.toLowerCase())?`
${d}&lt;${p}${b?" "+b:""} /&gt;`:e.tagName.toLowerCase()==="head"?`${d}&lt;${p}${b?" "+b:""}&gt;${_.trim()}&lt;/${p}&gt;`:_.trim()?`
${w}
${_}
${C}`:`
${w}
${C}`},r=(e,a)=>{var b;const d=(b=e.textContent)==null?void 0:b.trim(),p="  ".repeat(a);return d?`
${p}<span class="${s.text}">${d}</span>`:""},u=(e,a=0)=>e.nodeType===Node.ELEMENT_NODE?t(e,a):e.nodeType===Node.TEXT_NODE?r(e,a):"";return u(l.documentElement,0).trim().split(`
`).map(e=>`  ${e}`).join(`
`)},v=({code:o,type:s,theme:i,selectedBlockStartLine:g,selectedBlockLength:l,selectedBlockType:t})=>{const u=(s==="html"?K(o,m,t):G(o,m,t)).split(`
`).filter(e=>e.trim()!==""),{currentStep:c}=N();return n.jsx("div",{className:`${m.viewer} ${i==="dark"?m.dark:m.light} ${c===3?"z-[200] bg-white":""}`,children:n.jsxs("div",{className:m.scrollContainer,children:[n.jsx(T,{codeLineList:u}),n.jsx(k,{code:o,codeLineList:u,selectedBlockLength:l,selectedBlockStartLine:g,selectedBlockType:t})]})})};v.__docgenInfo={description:"",methods:[],displayName:"CodeViewer",props:{code:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:"'html' | 'css'",elements:[{name:"literal",value:"'html'"},{name:"literal",value:"'css'"}]},description:""},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:""},selectedBlockStartLine:{required:!1,tsType:{name:"number"},description:""},selectedBlockLength:{required:!1,tsType:{name:"number"},description:""},selectedBlockType:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const U=o=>h.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},h.createElement("mask",{id:"mask0_503_1523",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:0,y:0,width:24,height:24},h.createElement("rect",{width:24,height:24,fill:"currentColor"})),h.createElement("g",{mask:"url(#mask0_503_1523)"},h.createElement("path",{d:"M9 18C8.45 18 7.97917 17.8042 7.5875 17.4125C7.19583 17.0208 7 16.55 7 16V4C7 3.45 7.19583 2.97917 7.5875 2.5875C7.97917 2.19583 8.45 2 9 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V16C20 16.55 19.8042 17.0208 19.4125 17.4125C19.0208 17.8042 18.55 18 18 18H9ZM9 16H18V4H9V16ZM5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6C4.28333 6 4.52083 6.09583 4.7125 6.2875C4.90417 6.47917 5 6.71667 5 7V20H15C15.2833 20 15.5208 20.0958 15.7125 20.2875C15.9042 20.4792 16 20.7167 16 21C16 21.2833 15.9042 21.5208 15.7125 21.7125C15.5208 21.9042 15.2833 22 15 22H5Z",fill:"currentColor"}))),Z=`
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
`,W=({htmlCode:o,cssCode:s,selectedBlockStartLine:i,selectedBlockLength:g,selectedBlockType:l})=>{const[t,r]=h.useState("preview"),{isResetCssChecked:u}=j(),{currentStep:c}=N(),{setIframeRef:e}=L(),a=h.useRef(null),d=`
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Gaegu:wght@300;400;700&family=Gothic+A1:wght@300;400;700&family=IBM+Plex+Sans+KR:wght@300;400;700&family=Nanum+Gothic:wght@400;700&family=Noto+Sans+KR:wght@100..900&family=Noto+Serif+KR:wght@200..900&display=swap" rel="stylesheet" />
  `,b=`<style> * { box-sizing : border-box; margin : 0; padding : 0; ::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-thumb { background: #cdd9e4; border-radius: 4px; } } html, head, body { width : 100%; height : 100%;  } ${u?`${Z}
${s}`:s}</style>`,w=o.indexOf("</head>"),C=`${o.slice(0,w)}${d}${b}${o.slice(w)}`;h.useEffect(()=>{a.current&&e(a)},[a]);const _=async(y,$)=>{try{await navigator.clipboard.writeText(y),x.success(`${$} 코드가 복사되었습니다.`)}catch{x.error(`${$} 코드 복사에 실패했습니다.`)}},f=()=>{const y=t==="html"?o:s,$=t.toUpperCase();_(y,$)};return n.jsxs("section",{className:`flex h-[calc(100vh-475px)] flex-1 flex-col border-b border-gray-100 ${c===3?"z-[200]":""}`,children:[n.jsxs("nav",{className:"flex h-10 border-b border-gray-100",children:[n.jsx("button",{onClick:()=>r("preview"),className:`${t==="preview"?"bg-green-500 text-white":"bg-white text-gray-200"} h-full flex-1 border-r border-gray-100 bg-green-500`,"aria-label":"미리보기 탭 버튼",children:"미리보기"}),n.jsx("button",{onClick:()=>r("html"),className:`${t==="html"?"bg-green-500 text-white":"bg-white text-gray-200"} h-full flex-1 border-r border-gray-100 bg-green-500`,"aria-label":"HTML 탭 버튼",children:"HTML"}),n.jsx("button",{onClick:()=>r("css"),className:`${t==="css"?"bg-green-500 text-white":"bg-white text-gray-200"} h-full flex-1 bg-green-500`,"aria-label":"CSS 탭 버튼",children:"CSS"})]}),n.jsxs("div",{className:"relative flex-1 overflow-hidden",children:[(t==="html"||t==="css")&&n.jsx("div",{className:"absolute right-4 top-5 z-50",children:n.jsx(U,{className:"h-6 w-6 cursor-pointer text-gray-300 hover:text-green-500",onClick:f,"aria-label":"코드 복사 버튼"})}),t==="preview"&&n.jsx("iframe",{ref:a,srcDoc:C,className:"h-full w-full",title:"Preview",sandbox:"allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation"}),t==="html"&&n.jsx(v,{code:t==="html"?o:s,type:t,theme:"light",selectedBlockStartLine:i,selectedBlockLength:g,selectedBlockType:l}),t==="css"&&n.jsx(v,{code:s,type:"css",theme:"light",selectedBlockType:l})]})]})};W.__docgenInfo={description:`@description
웹사이트, HTML, CSS 코드 미리보기 박스 컴포넌트`,methods:[],displayName:"PreviewBox",props:{htmlCode:{required:!0,tsType:{name:"string"},description:""},cssCode:{required:!0,tsType:{name:"string"},description:""},selectedBlockStartLine:{required:!1,tsType:{name:"number"},description:""},selectedBlockLength:{required:!1,tsType:{name:"number"},description:""},selectedBlockType:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};export{W as P};
