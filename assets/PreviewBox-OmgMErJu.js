import{j as s}from"./jsx-runtime-DR9Q75dM.js";import{r as u}from"./index-DRjF_FHU.js";import{g as x}from"./useWorkspaceStore-B_R62rvF.js";import{_ as w}from"./index-D1AAVYfs.js";const N=`
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
`,k=n=>u.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},u.createElement("mask",{id:"mask0_503_1523",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:0,y:0,width:24,height:24},u.createElement("rect",{width:24,height:24,fill:"currentColor"})),u.createElement("g",{mask:"url(#mask0_503_1523)"},u.createElement("path",{d:"M9 18C8.45 18 7.97917 17.8042 7.5875 17.4125C7.19583 17.0208 7 16.55 7 16V4C7 3.45 7.19583 2.97917 7.5875 2.5875C7.97917 2.19583 8.45 2 9 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V16C20 16.55 19.8042 17.0208 19.4125 17.4125C19.0208 17.8042 18.55 18 18 18H9ZM9 16H18V4H9V16ZM5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6C4.28333 6 4.52083 6.09583 4.7125 6.2875C4.90417 6.47917 5 6.71667 5 7V20H15C15.2833 20 15.5208 20.0958 15.7125 20.2875C15.9042 20.4792 16 20.7167 16 21C16 21.2833 15.9042 21.5208 15.7125 21.7125C15.5208 21.9042 15.2833 22 15 22H5Z",fill:"currentColor"}))),T="_viewer_12nch_1",L="_dark_12nch_7",j="_lineNumbers_12nch_12",H="_lineNumber_12nch_12",q="_lineHighlight_12nch_24",E="_codeContent_12nch_28",S="_tag_12nch_34",M="_attribute_12nch_38",I="_value_12nch_42",B="_selector_12nch_46",V="_property_12nch_50",P="_newLine_12nch_67",A="_fadeIn_12nch_1",O="_blockHighlight_12nch_71",m={viewer:T,dark:L,lineNumbers:j,lineNumber:H,lineHighlight:q,codeContent:E,tag:S,attribute:M,value:I,selector:B,property:V,"property-value":"_property-value_12nch_54",newLine:P,fadeIn:A,blockHighlight:O},R=(n,t)=>n.replace(/([^\s{}]+)\s*{/g,(i,e)=>`<span class="${t.selector}">${e}</span> {`).replace(/([\w-]+):/g,(i,e)=>`<span class="${t.property}">${e}</span>:`).replace(/:\s*([^;]+);/g,(i,e)=>`: <span class="${t["property-value"]}">${e}</span>;`).trim().split(`
`).map(i=>`  ${i}`).join(`
`),D=(n,t)=>{const i=new DOMParser().parseFromString(n,"text/html"),e=(r,o)=>{const l="  ".repeat(o),c=`<span class="${t.tag}">${r.tagName.toLowerCase()}</span>`,p=Array.from(r.attributes).map(_=>`<span class="${t.attribute}">${_.name}</span>=<span class="${t.value}">"${_.value}"</span>`).join(" "),y=`${l}&lt;${c}${p?" "+p:""}&gt;`,f=`${l}&lt;/${c}&gt;`,g=Array.from(r.childNodes).map(_=>a(_,o+1)).join("");return["br","hr"].includes(r.tagName.toLowerCase())?`
${l}&lt;${c}${p?" "+p:""} /&gt;`:r.tagName.toLowerCase()==="head"?`${l}&lt;${c}${p?" "+p:""}&gt;${g.trim()}&lt;/${c}&gt;`:g.trim()?`
${y}
${g}
${f}`:`
${y}
${f}`},h=(r,o)=>{var p;const l=(p=r.textContent)==null?void 0:p.trim(),c="  ".repeat(o);return l?`
${c}<span class="${t.text}">${l}</span>`:""},a=(r,o=0)=>r.nodeType===Node.ELEMENT_NODE?e(r,o):r.nodeType===Node.TEXT_NODE?h(r,o):"";return a(i.documentElement,0).trim().split(`
`).map(r=>`  ${r}`).join(`
`)},$=({code:n,codeLineList:t,selectedBlockStartLine:d,selectedBlockLength:i})=>{const[e,h]=u.useState([]),[a,b]=u.useState([]);return u.useEffect(()=>{const r=[];t.forEach((l,c)=>{(!e[c]||e[c]!==l)&&r.push(c)}),b(r);const o=setTimeout(()=>b([]),1e3);return h(t),()=>clearTimeout(o)},[n]),s.jsx("div",{className:m.codeContent,children:s.jsx("pre",{children:s.jsx("code",{children:t.map((r,o)=>{const l=d&&i&&o+1>=d&&o+1<d+i;return s.jsx("div",{className:`${a.includes(o)?m.newLine:""} ${l?m.blockHighlight:""}`,dangerouslySetInnerHTML:{__html:r}},o)})})})})};$.__docgenInfo={description:"",methods:[],displayName:"CodeContent",props:{code:{required:!0,tsType:{name:"string"},description:""},codeLineList:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},selectedBlockStartLine:{required:!1,tsType:{name:"number"},description:""},selectedBlockLength:{required:!1,tsType:{name:"number"},description:""}}};const v=({codeLineList:n})=>{const[t,d]=u.useState(null),i=h=>{d(h)},e=()=>{d(null)};return s.jsx("div",{className:m.lineNumbers,children:n.map((h,a)=>s.jsx("div",{onMouseEnter:()=>i(a+1),onMouseLeave:e,className:`${m.lineNumber} ${t===a+1?m.lineHighlight:""}`,children:a+1},a))})};v.__docgenInfo={description:"",methods:[],displayName:"LineNumbers",props:{codeLineList:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const C=({code:n,type:t,theme:d,selectedBlockStartLine:i,selectedBlockLength:e})=>{const a=(t==="html"?D(n,m):R(n,m)).split(`
`).filter(b=>b.trim()!=="");return s.jsxs("div",{className:`${m.viewer} ${d==="dark"?m.dark:m.light}`,children:[s.jsx(v,{codeLineList:a}),s.jsx($,{code:n,codeLineList:a,selectedBlockLength:e,selectedBlockStartLine:i})]})};C.__docgenInfo={description:"",methods:[],displayName:"CodeViewer",props:{code:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:"'html' | 'css'",elements:[{name:"literal",value:"'html'"},{name:"literal",value:"'css'"}]},description:""},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:""},selectedBlockStartLine:{required:!1,tsType:{name:"number"},description:""},selectedBlockLength:{required:!1,tsType:{name:"number"},description:""}}};const z=({htmlCode:n,cssCode:t,selectedBlockStartLine:d,selectedBlockLength:i})=>{const[e,h]=u.useState("preview"),{isResetCssChecked:a}=x(),b=`
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Gaegu:wght@300;400;700&family=Gothic+A1:wght@300;400;700&family=IBM+Plex+Sans+KR:wght@300;400;700&family=Nanum+Gothic:wght@400;700&family=Noto+Sans+KR:wght@100..900&family=Noto+Serif+KR:wght@200..900&display=swap" rel="stylesheet" />
  `,o=`<style> * { box-sizing : border-box; margin : 0; padding : 0; } html, head, body { width : 100%; height : 100%; } ${a?`${N}
${t}`:t}</style>`,l=n.indexOf("</head>"),c=`${n.slice(0,l)}${b}${o}${n.slice(l)}`,p=async(f,g)=>{try{await navigator.clipboard.writeText(f),w.success(`${g} 코드가 복사되었습니다.`)}catch{w.error(`${g} 코드 복사에 실패했습니다.`)}},y=()=>{const f=e==="html"?n:t,g=e.toUpperCase();p(f,g)};return s.jsxs("section",{className:"flex-1 border-b border-gray-100",children:[s.jsxs("nav",{className:"flex h-10 border-b border-gray-100",children:[s.jsx("button",{onClick:()=>h("preview"),className:`${e==="preview"?"bg-green-500 text-white":"bg-white text-gray-200"} h-full flex-1 border-r border-gray-100 bg-green-500`,children:"미리보기"}),s.jsx("button",{onClick:()=>h("html"),className:`${e==="html"?"bg-green-500 text-white":"bg-white text-gray-200"} h-full flex-1 border-r border-gray-100 bg-green-500`,children:"HTML"}),s.jsx("button",{onClick:()=>h("css"),className:`${e==="css"?"bg-green-500 text-white":"bg-white text-gray-200"} h-full flex-1 bg-green-500`,children:"CSS"})]}),s.jsxs("div",{className:"relative h-full max-h-[calc(100%-26rem)] min-h-[20rem] w-full",children:[(e==="html"||e==="css")&&s.jsx("div",{className:"absolute right-4 top-5 z-50",children:s.jsx(k,{className:"h-6 w-6 cursor-pointer text-gray-300 hover:text-green-500",onClick:y})}),e==="preview"&&s.jsx("iframe",{srcDoc:c,className:"h-full w-full",title:"Preview",sandbox:"allow-same-origin"}),e==="html"&&s.jsx(C,{code:n,type:"html",theme:"light",selectedBlockStartLine:d,selectedBlockLength:i}),e==="css"&&s.jsx(C,{code:t,type:"css",theme:"light"})]})]})};z.__docgenInfo={description:`@description
웹사이트, HTML, CSS 코드 미리보기 박스 컴포넌트`,methods:[],displayName:"PreviewBox",props:{htmlCode:{required:!0,tsType:{name:"string"},description:""},cssCode:{required:!0,tsType:{name:"string"},description:""},selectedBlockStartLine:{required:!1,tsType:{name:"number"},description:""},selectedBlockLength:{required:!1,tsType:{name:"number"},description:""}}};export{z as P};
