import{j as e}from"./jsx-runtime-DR9Q75dM.js";import"./plus-qIVVYTMO.js";import"./SquareButton-hj7tViqk.js";import"./Logo-Ca0csvGK.js";import"./index-BXCeiWJk.js";import"./ToasterWithMax-D4jPvwZi.js";import"./Loading-CVQUyNmW.js";import"./Spinner-CUCGrwDX.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import{d as p}from"./HoveredEmptyWorkspace-CF5_1ALv.js";import{u as c,b as n,r as C,c as d}from"./useWorkspaceStore-BD1duu30.js";import{r}from"./index-DRjF_FHU.js";const x=()=>{const{currentCssClassName:o,setCurrentCssClassName:a}=c(),{classBlockList:t}=n(),[l,i]=r.useState([]);r.useEffect(()=>{i(t)},[t]);const m=[{value:"",label:"클래스를 선택해주세요"},...l.map(s=>({value:s,label:s}))];return e.jsxs("header",{className:"py-border flex h-12 items-center justify-between border-b-yellow-500 bg-yellow-200 px-4",children:[e.jsx("p",{className:"text-semibold-md text-gray-black truncate",children:"CSS 클래스 속성 편집"}),e.jsx(p,{options:m,value:C(o),onChange:s=>a(d(s)),placeholder:"클래스를 선택해주세요"})]})};x.__docgenInfo={description:`@description
CSS 클래스를 선택할 수 있는 헤더 컴포넌트`,methods:[],displayName:"CssPropsSelectBoxHeader"};export{x as C};
