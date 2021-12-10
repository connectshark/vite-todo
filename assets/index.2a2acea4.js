import{r as f,o as a,c as l,a as c,b as d,w as _,d as u,F as h,e as k,t as v,f as b,g as w,v as $,h as L,i as S,u as C,j as E,k as F,l as O,m as P,n as N}from"./vendor.b4f316e3.js";const V=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}};V();var p=(i,o)=>{const e=i.__vccOpts||i;for(const[s,t]of o)e[s]=t;return e};const B={},D={class:"bg-gradient-to-r from-indigo-400 to-indigo-500 text-center"},T=c("h1",{class:"text-white text-4xl py-4 font-bold max-w-screen-sm mx-auto"},"\u5F85\u8FA6\u6E05\u55AE",-1),j={class:"text-base py-2 max-w-screen-sm mx-auto"},A={class:"inline-block px-2"},I=u("\u5168\u90E8"),K={class:"inline-block px-2"},R=u("\u5DF2\u5B8C\u6210"),W={class:"inline-block px-2"},q=u("\u672A\u5B8C\u6210");function H(i,o){const e=f("router-link");return a(),l("header",D,[T,c("ul",j,[c("li",A,[d(e,{class:"text-white",to:"/"},{default:_(()=>[I]),_:1})]),c("li",K,[d(e,{class:"text-white",to:"/done"},{default:_(()=>[R]),_:1})]),c("li",W,[d(e,{class:"text-white",to:"/undo"},{default:_(()=>[q]),_:1})])])])}var M=p(B,[["render",H]]);const U={setup(i){return(o,e)=>{const s=f("router-view");return a(),l(h,null,[d(M),d(s)],64)}}},z="modulepreload",m={},G="/vite-todo/",J=function(o,e){return!e||e.length===0?o():Promise.all(e.map(s=>{if(s=`${G}${s}`,s in m)return;m[s]=!0;const t=s.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const n=document.createElement("link");if(n.rel=t?"stylesheet":z,t||(n.as="script",n.crossOrigin=""),n.href=s,document.head.appendChild(n),t)return new Promise((y,g)=>{n.addEventListener("load",y),n.addEventListener("error",g)})})).then(()=>o())},x=k("todo",{state:()=>({list:[{id:"1639128867000",checked:!0,content:"000"},{id:"1639128867123",checked:!1,content:"name"},{id:"1639128867568",checked:!1,content:"iejdkc"}]}),actions:{addList(i){this.list.push({checked:!1,content:i,id:new Date().getTime().toString()})},modifyState(i){const o=this.list.findIndex(e=>e.id===i);this.list[o].checked=!this.list[o].checked}}}),Q={props:{content:{type:String},checked:{type:Boolean},id:{type:String}},setup(i){const o=x();return{modify:()=>{o.modifyState(i.id)}}}},X={class:"mx-auto w-4/5 bg-white rounded-2xl p-4 mb-4 transition hover:shadow-lg shadow-slate-400"},Y={class:"text-gray-700 text-2xl inline-block"},Z={key:0,class:"bx bx-check-circle text-indigo-700"},ee={key:1,class:"bx bx-circle text-indigo-300"};function te(i,o,e,s,t,r){return a(),l("li",X,[c("p",Y,[c("span",{class:"text-xl cursor-pointer",onClick:o[0]||(o[0]=(...n)=>s.modify&&s.modify(...n))},[e.checked?(a(),l("i",Z)):(a(),l("i",ee))]),u(v(e.content),1)])])}var oe=p(Q,[["render",te]]);const ne={class:"py-4 max-w-screen-sm mx-auto"},se=["onKeyup"],re={class:"max-w-screen-sm mx-auto"},ie={setup(i){const o=x(),e=b(""),s=()=>{o.addList(e.value),e.value=""};return(t,r)=>(a(),l(h,null,[c("main",ne,[w(c("input",{type:"text",onKeyup:L(s,["enter"]),"onUpdate:modelValue":r[0]||(r[0]=n=>e.value=n),placeholder:"\u8F38\u5165\u6E05\u55AE",class:"transition text-gray-900 block mx-auto p-3 text-2xl rounded-lg shadow-lg w-5/6 border border-transparent focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:border-transparent"},null,40,se),[[$,e.value,void 0,{trim:!0}]])]),c("ul",re,[(a(!0),l(h,null,S(C(o).list,n=>(a(),E(oe,{key:n.id,content:n.content,checked:n.checked,id:n.id},null,8,["content","checked","id"]))),128))])],64))}},ce=F({history:O("/vite-todo/"),routes:[{path:"/",name:"home",component:ie},{path:"/notFound",name:"notFound",component:()=>J(()=>import("./notFound.f036f1ca.js"),["assets/notFound.f036f1ca.js","assets/notFound.48ce3b7f.css","assets/vendor.b4f316e3.js"])},{path:"/:pathMatch(.*)*",redirect:{path:"/notFound"}}]});P(U).use(N()).use(ce).mount("#app");export{p as _};