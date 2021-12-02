import{o as h,c as d,a as t,t as y,p as $,b as M,d as e,r as f,e as c,w as r,F as z,f as v,g as V,h as k,i as H,j as x,k as C}from"./vendor.64f86ceb.js";const j=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const _ of i.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&a(_)}).observe(document,{childList:!0,subtree:!0});function l(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=l(o);fetch(o.href,i)}};j();var L="/vite-todo/assets/logo.da9b9095.svg";var u=(s,n)=>{const l=s.__vccOpts||s;for(const[a,o]of n)l[a]=o;return l};const I=s=>($("data-v-e782c9bc"),s=s(),M(),s),A={class:"greetings"},S={class:"green"},E=I(()=>t("h3",null,[e(" You\u2019ve successfully created a project with "),t("a",{target:"_blank",href:"https://vitejs.dev/"},"Vite"),e(" + "),t("a",{target:"_blank",href:"https://v3.vuejs.org/"},"Vue 3"),e(". ")],-1)),T={props:{msg:{type:String,required:!0}},setup(s){return(n,l)=>(h(),d("div",A,[t("h1",S,y(s.msg),1),E]))}};var D=u(T,[["__scopeId","data-v-e782c9bc"]]);const O=t("img",{alt:"Vue logo",class:"logo",src:L,width:"125",height:"125"},null,-1),P={class:"wrapper"},N=e("Home"),R=e("About"),W={setup(s){return(n,l)=>{const a=f("router-link"),o=f("router-view");return h(),d(z,null,[t("header",null,[O,t("div",P,[c(D,{msg:"You did it!"}),t("nav",null,[c(a,{to:"/"},{default:r(()=>[N]),_:1}),c(a,{to:"/about"},{default:r(()=>[R]),_:1})])])]),c(o)],64)}}},q="modulepreload",g={},Y="/vite-todo/",B=function(n,l){return!l||l.length===0?n():Promise.all(l.map(a=>{if(a=`${Y}${a}`,a in g)return;g[a]=!0;const o=a.endsWith(".css"),i=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${i}`))return;const _=document.createElement("link");if(_.rel=o?"stylesheet":q,o||(_.as="script",_.crossOrigin=""),_.href=a,document.head.appendChild(_),o)return new Promise((w,b)=>{_.addEventListener("load",w),_.addEventListener("error",b)})})).then(()=>n())};const F={},G={class:"item"},K={class:"details"};function U(s,n){return h(),d("div",G,[t("i",null,[v(s.$slots,"icon",{},void 0,!0)]),t("div",K,[t("h3",null,[v(s.$slots,"heading",{},void 0,!0)]),v(s.$slots,"default",{},void 0,!0)])])}var m=u(F,[["render",U],["__scopeId","data-v-977bb0b6"]]);const J={},Q={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},X=t("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),Z=[X];function t1(s,n){return h(),d("svg",Q,Z)}var e1=u(J,[["render",t1]]);const o1={},s1={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},n1=t("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),r1=[n1];function a1(s,n){return h(),d("svg",s1,r1)}var c1=u(o1,[["render",a1]]);const i1={},l1={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},_1=t("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),h1=[_1];function d1(s,n){return h(),d("svg",l1,h1)}var u1=u(i1,[["render",d1]]);const m1={},v1={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},p1=t("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),f1=[p1];function z1(s,n){return h(),d("svg",v1,f1)}var g1=u(m1,[["render",z1]]);const w1={},b1={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},y1=t("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),$1=[y1];function M1(s,n){return h(),d("svg",b1,$1)}var V1=u(w1,[["render",M1]]);const k1=e("Documentation"),H1=e(" Vue\u2019s "),x1=t("a",{target:"_blank",href:"https://v3.vuejs.org/"},"official documentation",-1),C1=e(" provides you with all information you need to get started. "),j1=e("Tooling"),L1=e(" This project is served and bundled with "),I1=t("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"},"Vite",-1),A1=e(". The recommended IDE setup is "),S1=t("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode",-1),E1=e(" + "),T1=t("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar",-1),D1=e(". If you need to test your components and web pages, check out "),O1=t("a",{href:"https://www.cypress.io/",target:"_blank"},"Cypress",-1),P1=e(" and "),N1=t("a",{href:"https://docs.cypress.io/guides/component-testing/introduction",target:"_blank"},"Cypress Component Testing",-1),R1=e(". "),W1=t("br",null,null,-1),q1=e(" More instructions are available in "),Y1=t("code",null,"README.md",-1),B1=e(". "),F1=e("Ecosystem"),G1=e(" Get official tools and libraries for your project: "),K1=t("a",{target:"_blank",href:"https://next.vuex.vuejs.org/"},"Vuex",-1),U1=e(", "),J1=t("a",{target:"_blank",href:"https://next.router.vuejs.org/"},"Vue Router",-1),Q1=e(", "),X1=t("a",{target:"_blank",href:"https://next.vue-test-utils.vuejs.org/"},"Vue Test Utils",-1),Z1=e(", and "),tt=t("a",{target:"_blank",href:"https://github.com/vuejs/devtools"},"Vue Dev Tools",-1),et=e(". If you need more resources, we suggest paying "),ot=t("a",{target:"_blank",href:"https://github.com/vuejs/awesome-vue"},"Awesome Vue",-1),st=e(" a visit. "),nt=e("Community"),rt=e(" Got stuck? Ask your question on "),at=t("a",{target:"_blank",href:"https://chat.vuejs.org"},"Vue Land",-1),ct=e(", our official Discord server, or "),it=t("a",{target:"_blank",href:"https://stackoverflow.com/questions/tagged/vue.js"},"StackOverflow",-1),lt=e(". You should also subscribe to "),_t=t("a",{target:"_blank",href:"https://news.vuejs.org"},"our mailing list",-1),ht=e(" and follow the official "),dt=t("a",{target:"_blank",href:"https://twitter.com/vuejs"},"@vuejs",-1),ut=e(" twitter account for latest news in the Vue world. "),mt=e("Support Vue"),vt=e(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),pt=t("a",{target:"_blank",href:"https://vuejs.org/support-vuejs/"},"becoming a sponsor",-1),ft=e(". "),zt={setup(s){return(n,l)=>(h(),d(z,null,[c(m,null,{icon:r(()=>[c(e1)]),heading:r(()=>[k1]),default:r(()=>[H1,x1,C1]),_:1}),c(m,null,{icon:r(()=>[c(c1)]),heading:r(()=>[j1]),default:r(()=>[L1,I1,A1,S1,E1,T1,D1,O1,P1,N1,R1,W1,q1,Y1,B1]),_:1}),c(m,null,{icon:r(()=>[c(u1)]),heading:r(()=>[F1]),default:r(()=>[G1,K1,U1,J1,Q1,X1,Z1,tt,et,ot,st]),_:1}),c(m,null,{icon:r(()=>[c(g1)]),heading:r(()=>[nt]),default:r(()=>[rt,at,ct,it,lt,_t,ht,dt,ut]),_:1}),c(m,null,{icon:r(()=>[c(V1)]),heading:r(()=>[mt]),default:r(()=>[vt,pt,ft]),_:1})],64))}},gt=V({setup(s){return(n,l)=>(h(),d("main",null,[c(zt)]))}}),wt=k({history:H("/vite-todo/"),routes:[{path:"/",name:"home",component:gt},{path:"/about",name:"about",component:()=>B(()=>import("./AboutView.db13e623.js"),["assets/AboutView.db13e623.js","assets/AboutView.ab071ea6.css","assets/vendor.64f86ceb.js"])}]}),p=x(W);p.use(C());p.use(wt);p.mount("#app");export{u as _};