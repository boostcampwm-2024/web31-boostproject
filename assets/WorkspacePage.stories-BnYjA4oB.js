import{j as t}from"./jsx-runtime-DR9Q75dM.js";import"./GuidesBox-B7BMqmCz.js";import"./HomeHeader-BYEnvyVV.js";import"./WorkspaceList-C45ioYuA.js";import"./WorkspaceHeader-CbCwt-Qr.js";import"./EmptyWorkspace-BsKHQIBN.js";import"./WorkspaceGrid-vyyREuel.js";import{u as y,Q as P,a as L}from"./CssPropsSelectBox-Dur0h2ks.js";import"./WorkspaceModal-BDNHoifv.js";import"./PreviewBox-CZruGxvx.js";import{W as S}from"./WorkspacePageHeader-CiiE_s2V.js";import"./CssCategoryBar-BCf-WoOi.js";import"./CssOptionItemList-LckKtLaW.js";import"./CssPropsSelectBoxHeader-Dd3dZGic.js";import{r as v,u as b,b as D,e as B,f as w,g as E}from"./useWorkspaceStore-BD1duu30.js";import{B as k,f as W,g as O,e as I,h as N,w as _,i as F}from"./HoveredEmptyWorkspace-CF5_1ALv.js";import{_ as H}from"./index-D1AAVYfs.js";import{r as p}from"./index-DRjF_FHU.js";import{a as Q,b as R}from"./index-x70cJmE6.js";import{H as q}from"./index.esm-zFJIz-4f.js";import"./plus-qIVVYTMO.js";import"./SquareButton-hj7tViqk.js";import"./Logo-Ca0csvGK.js";import"./index-BXCeiWJk.js";import"./ToasterWithMax-D4jPvwZi.js";import{L as A}from"./Loading-CVQUyNmW.js";import"./Spinner-CUCGrwDX.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import{N as U}from"./NotFound-CvoSIyxa.js";import"./GuideVideo-MGmf4GR2.js";import"./WorkspaceLoadError-FmbY_INt.js";import"./NotHoveredEmptyWorkspace-CddEnm-X.js";import"./CssCategoryButton-BHr79OL3.js";import"./client-Dbo3a7kb.js";import"./QueryClientProvider-BdRu95_o.js";import"./infiniteQueryBehavior-DdhmIwcw.js";import"./ModalConfirm-D4PzhGiJ.js";import"./cssCategoryList-CHFX1k4S.js";import"./question-CX5dqjCQ.js";function K(e,r){return y(e,P)}const T=e=>{k[e]||(k[e]={init:function(){this.appendDummyInput().appendField(new W(v(e)),"CLASS"),this.setOutput(!0),this.setStyle("defaultBlockCss")}})},z=e=>{const r=F(),o=O()||I(),{initCssPropertyObj:m}=b(),{initClassBlockList:n}=D(),{setCanvasInfo:l,setName:i}=B(),{resetChangedStatusState:a}=w(),{setIsResetCssChecked:u}=E(),{data:s,isPending:j,isError:f}=K({queryKey:_.detail(e),queryFn:()=>r.getWorkspace(o,e)});return p.useEffect(()=>{a()},[]),p.useEffect(()=>{if(f){H.error("워크스페이스 정보 불러오기 실패");return}s&&s.workspaceDto&&(i(s.workspaceDto.name),Object.keys(s.workspaceDto.totalCssPropertyObj).forEach(d=>{T(d)}),m(s.workspaceDto.totalCssPropertyObj),n(Object.keys(s.workspaceDto.totalCssPropertyObj).map(d=>v(d))),l(s.workspaceDto.canvas),N.contents=s.workspaceDto.classBlockList?JSON.parse(s.workspaceDto.classBlockList):[],u(s.workspaceDto.isCssReset))},[f,s]),{data:s,isPending:j,isError:f}},G=()=>{const{isBlockChanged:e,isCssChanged:r}=w();let o=Q(({currentLocation:a,nextLocation:u})=>a.pathname!==u.pathname&&(e||r));const m="저장하지 않은 변경사항이 있습니다. 정말로 떠나시겠습니까?";p.useEffect(()=>{o.state==="blocked"&&(window.confirm(m)?o.proceed():o.reset())},[o.state,e,r]);const n=a=>{a.preventDefault()},l=()=>{window.addEventListener("beforeunload",n)},i=()=>{window.removeEventListener("beforeunload",n)};p.useEffect(()=>(e||r?l():i(),()=>{i()}),[e,r])},x=()=>{const{workspaceId:e}=R(),{isPending:r,isError:o}=z(e);return G(),o?t.jsx(U,{}):t.jsxs(t.Fragment,{children:[t.jsxs(q,{children:[t.jsx("title",{children:"BooLock - 작업 공간"}),t.jsx("meta",{name:"description",content:`작업 공간 ID: ${e}에서 HTML과 CSS를 연습해보세요.`})]}),t.jsxs("div",{className:"flex h-screen flex-col",children:[r&&t.jsx(A,{}),t.jsx(S,{}),t.jsx(L,{})]})]})};x.__docgenInfo={description:`@description
워크스페이스 페이지 컴포넌트`,methods:[],displayName:"WorkspacePage"};const Ie={title:"pages/WorkspacePage",component:x,parameters:{layout:"fullscreen"},decorators:[e=>t.jsx("div",{className:"h-screen w-screen",children:t.jsx(e,{})})],tags:["autodocs"]},c={args:{}};var C,g,h;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    // propsname: value,
  }
}`,...(h=(g=c.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const Ne=["Default"];export{c as Default,Ne as __namedExportsOrder,Ie as default};
