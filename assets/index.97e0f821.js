import{r as b,o as a,c as f,d as S,a as c,b as l,F as h,e as p,n as x,u as d,t as _,f as $,g,w as L,v as C,h as F,i as I,T as O,j as E,k as N,l as P,m as T}from"./vendor.5ce99ed1.js";const B=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};B();var y=(t,e)=>{const n=t.__vccOpts||t;for(const[i,o]of e)n[i]=o;return n};const D={};function A(t,e){const n=b("router-view");return a(),f(n)}var K=y(D,[["render",A]]);const V="modulepreload",v={},j="/vite-todo/",R=function(e,n){return!n||n.length===0?e():Promise.all(n.map(i=>{if(i=`${j}${i}`,i in v)return;v[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const r=document.createElement("link");if(r.rel=o?"stylesheet":V,o||(r.as="script",r.crossOrigin=""),r.href=i,document.head.appendChild(r),o)return new Promise((k,w)=>{r.addEventListener("load",k),r.addEventListener("error",w)})})).then(()=>e())},q={all:t=>t.map(e=>e),done:t=>t.filter(e=>e.checked),undo:t=>t.filter(e=>!e.checked)},u={load(t){return JSON.parse(localStorage.getItem(t)||"[]")},save(t,e){localStorage.setItem(t,JSON.stringify(e))},remove(t){localStorage.removeItem(t)}},m=S("todo",{state:()=>({filter:"all",list:[]}),actions:{modifyFilter(t){this.filter=t},init(){this.list=u.load("list")},addList(t){this.list.push({checked:!1,content:t,id:new Date().getTime().toString()}),u.save("list",this.list)},modifyState(t){const e=this.list.findIndex(n=>n.id===t);this.list[e].checked=!this.list[e].checked,u.save("list",this.list)},deleteItem(t){const e=this.list.findIndex(n=>n.id===t);this.list.splice(e,1),u.save("list",this.list)}},getters:{filterState(){return q[this.filter](this.list)}}}),H={class:"bg-gradient-to-r from-indigo-400 to-indigo-500 text-center"},J=l("h1",{class:"text-white text-4xl py-4 font-bold max-w-screen-sm mx-auto"},"\u5F85\u8FA6\u6E05\u55AE",-1),M={class:"text-base py-2 max-w-screen-sm mx-auto"},W=["onClick"],z={setup(t){const e=m(),n=[{key:"all",name:"\u5168\u90E8"},{key:"done",name:"\u5DF2\u5B8C\u6210"},{key:"undo",name:"\u672A\u5B8C\u6210"}];return(i,o)=>(a(),c("header",H,[J,l("ul",M,[(a(),c(h,null,p(n,s=>l("li",{class:"inline-block px-2",key:s.key},[l("button",{class:x(["text-gray-100 hover:text-white transition",[{"font-bold":d(e).filter===s.key},{"text-white":d(e).filter===s.key}]]),onClick:r=>d(e).modifyFilter(s.key)},_(s.name),11,W)])),64))])]))}},G={props:{content:{type:String},checked:{type:Boolean},id:{type:String}},setup(){return{store:m()}}},U={class:"mx-auto w-4/5 bg-white rounded-2xl p-4 mb-4 transition hover:shadow-lg shadow-slate-400 flex items-center"},Q={key:0,class:"bx bx-check-circle text-indigo-700 leading-7 align-middle"},X={key:1,class:"bx bx-circle text-indigo-300 leading-7 align-middle"},Y=l("i",{class:"bx bx-x-circle"},null,-1),Z=[Y];function ee(t,e,n,i,o,s){return a(),c("li",U,[l("div",{class:"text-xl w-1/12 text-center cursor-pointer align-middle flex-shrink-0",onClick:e[0]||(e[0]=r=>i.store.modifyState(n.id))},[n.checked?(a(),c("i",Q)):(a(),c("i",X))]),l("p",{class:x([{"line-through":n.checked},"overflow-hidden w-10/12 text-gray-700 text-ellipsis text-2xl decoration-indigo-700"])},_(n.content),3),l("p",{onClick:e[1]||(e[1]=r=>i.store.deleteItem(n.id)),class:"text-xl ml-auto w-1/12 text-center text-indigo-300 hover:text-indigo-700 leading-7 align-middle flex-shrink-0"},Z)])}var te=y(G,[["render",ee]]);const ne={class:"py-4 max-w-screen-sm mx-auto"},oe=["onKeyup"],se={setup(t){const e=m();e.init();const n=$(""),i=()=>{n.value!==""&&(e.addList(n.value),n.value="")};return(o,s)=>(a(),c(h,null,[g(z),l("main",ne,[L(l("input",{type:"text",onKeyup:F(i,["enter"]),"onUpdate:modelValue":s[0]||(s[0]=r=>n.value=r),placeholder:"\u8F38\u5165\u6E05\u55AE",class:"transition text-gray-900 block mx-auto p-3 text-2xl rounded-lg shadow-lg w-5/6 border border-transparent focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:border-transparent"},null,40,oe),[[C,n.value,void 0,{trim:!0}]])]),g(O,{appear:"true",name:"list",class:"max-w-screen-sm mx-auto",tag:"ul"},{default:I(()=>[(a(!0),c(h,null,p(d(e).filterState,r=>(a(),f(te,{key:r.id,content:r.content,checked:r.checked,id:r.id},null,8,["content","checked","id"]))),128))]),_:1})],64))}},re=E({history:N("/vite-todo/"),routes:[{path:"/",name:"home",component:se},{path:"/notFound",name:"notFound",component:()=>R(()=>import("./notFound.55f44710.js"),["assets/notFound.55f44710.js","assets/vendor.5ce99ed1.js"])},{path:"/:pathMatch(.*)*",redirect:{path:"/notFound"}}]});P(K).use(T()).use(re).mount("#app");export{y as _};