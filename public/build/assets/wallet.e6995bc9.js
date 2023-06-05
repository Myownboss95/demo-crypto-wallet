import{b}from"./breadcrumb.a2072d09.js";import{_ as f,c as i,B as g,o as x,C as k,a as o,b as a,d as p,e as s,F as h,r as D,u,g as C,t as e,h as y,y as S,D as I,E as W}from"./main.44d3edf1.js";import{_ as B}from"./error.8a473308.js";const r=l=>(I("data-v-254cce69"),l=l(),W(),l),M={class:"row"},N={class:"col-xl-11 col-lg-11 mx-auto"},$={class:"col card-body"},q={key:0,class:"row"},E={class:"col-md-8 col-lg-8 col-sm-12 p-3 text-muted"},F={class:"row"},H={class:"h4"},V={class:"text-muted mb-3 lh-1 d-block h6",style:{"text-transform":"capitalize","text-align":"left"}},j=r(()=>s("hr",null,null,-1)),L={class:"col-md-8 col-sm-12 border"},O={class:"fw-bold"},U={class:"col-md-4 col-sm-12 border ref"},Y=["onClick"],z=r(()=>s("i",{class:"fa fa-copy"},null,-1)),A=r(()=>s("strong",null," Click to Copy",-1)),T=[z,A],G={class:"col-md-4 col-sm-12 p-3"},J={key:0,class:""},K=["src"],P={key:1},Q=r(()=>s("p",{class:"fw-bold"},"No Image Yet",-1)),R=[Q],X={key:1,class:"row"},Z={class:"col-md-8 col-lg-8 col-sm-12 p-3 text-muted"},ss={class:"row"},ts={class:"h5"},es={name:"wallet",props:{user:Object,payment_methods:Object},setup(l){const d=l;i(()=>d.user);const v=i(()=>d.user.accounts);i(()=>d.payment_methods);const n=g([]);return x(async()=>{d.payment_methods.forEach(async m=>{const{type:_}=m;try{const c=await k.get(`https://api.coingecko.com/api/v3/simple/price?ids=${_}&vs_currencies=usd`);if(c.status===200)n[_]=c.data[_.toLowerCase()].usd;else throw new B}catch(c){console.log(c)}})}),(m,_)=>{const c=C("Head");return o(),a(h,null,[p(c,{title:"My Wallet Details"}),p(b,{title:"My Wallet Details",crumbs:["Dashboard","My Wallet Details"]}),s("div",M,[s("div",N,[(o(!0),a(h,null,D(u(v),(t,w)=>(o(),a("div",{class:"row card shadow-lg radius-20",key:w},[s("div",$,[t.wallet_address!=""&&t.qr_code!=""?(o(),a("div",q,[s("div",E,[s("div",F,[s("p",H,e(t.symbol)+" Wallet Details",1),s("span",V,[y(" You have "+e(t.account==="0.0000"?"0":t.account)+e(t.symbol)+" = "+e((n[t.type]*t.account).toFixed(2))+"USD ",1),j,y(" 1"+e(t.symbol)+" - "+e(n[t.type])+"USD ",1)]),s("div",L,[s("p",O,e(t.wallet_address),1)]),s("div",U,[s("span",{class:"ml-4",onClick:os=>u(S)(t.wallet_address)},T,8,Y)])])]),s("div",G,[t.qr_code!=null?(o(),a("div",J,[s("img",{src:`/storage/user_wallets/${t.qr_code}`,alt:"",class:"w-100 img-fluid"},null,8,K)])):(o(),a("div",P,R))])])):(o(),a("div",X,[s("div",Z,[s("div",ss,[s("p",ts,e(t.symbol)+" Wallet Has not been activated. Contact Admin",1)])])]))])]))),128))])])],64)}}};var ds=f(es,[["__scopeId","data-v-254cce69"]]);export{ds as default};