import{b as x}from"./breadcrumb.a2072d09.js";import{_ as k}from"./paginator.28e6f7d5.js";import{_ as S,c as _,a as n,b as a,d as r,e as t,u as d,F as h,r as w,k as I,D,E as N,g as V,t as o,h as B,n as i}from"./main.44d3edf1.js";const m=l=>(D("data-v-32925168"),l=l(),N(),l),C={class:"card shadow-lg col-lg-9 mx-auto radius-20"},j={class:"card-body"},E={class:"table-responsive"},F={class:"table"},H=m(()=>t("thead",null,[t("tr",null,[t("th",null,"Reference"),t("th",null,"Amount"),t("th",null,"Status"),t("th",null,"Date")])],-1)),R={key:0},z={class:"body"},A={class:"traffic-light"},G={key:1},L=m(()=>t("tr",null,[t("td",{colspan:"10",class:"text-muted text-center"}," No withdrawals found ")],-1)),O=[L],T={key:0,class:"d-flex justify-content-center"},Y={name:"sendIndex",props:{deposits:Object},setup(l){const u=l,c=_(()=>u.deposits.data),p=_(()=>u.deposits.links),f=s=>{if(s=="pending")return"yellow"},v=s=>{if(s=="successful")return"green"},b=s=>{if(s=="failed")return"red"};return(s,$)=>{const g=V("Head");return n(),a(h,null,[r(g,{title:"Sent"}),r(x,{title:"Send",crumbs:["Dashboard","Sent"]}),t("div",C,[t("div",j,[t("div",E,[t("table",F,[H,d(c).length?(n(),a("tbody",R,[(n(!0),a(h,null,w(d(c),(e,y)=>(n(),a("tr",{key:y},[t("td",null,o(e.reference),1),t("td",null,o(e.amount)+" "+o(e.symbol),1),t("td",null,[B(o(e.status)+" ",1),t("div",z,[t("div",A,[t("div",{id:"light",class:i(b(e.status))},null,2),t("div",{id:"light",class:i(f(e.status))},null,2),t("div",{id:"light",class:i(v(e.status))},null,2)])])]),t("td",null,o(new Date(e.created_at).toDateString()),1)]))),128))])):(n(),a("tbody",G,O))])]),d(c).length?(n(),a("div",T,[r(k,{links:d(p)},null,8,["links"])])):I("",!0)])])],64)}}};var M=S(Y,[["__scopeId","data-v-32925168"]]);export{M as default};