import{b as y}from"./breadcrumb.a2072d09.js";import{T as f,p as v,x as g,c as w,a as r,b as i,d as a,e,F as m,r as x,u as t,w as C,g as k,n as V,t as S,A as B}from"./main.44d3edf1.js";import{_ as u}from"./FormGroup.a8d6311c.js";import{_ as A}from"./FormButton.b5bafa51.js";import{_ as E}from"./ButtonLoader.046f5f16.js";import"./FormLabel.6d5eca29.js";import"./FormInput.c8d17617.js";import"./error.8a473308.js";const $={class:"card shadow-lg radius-20 col-lg-7 mx-auto"},j={class:"card-body"},D={class:"row align-items-center py-3"},F=e("div",{class:"col-md-6"},[e("div",{class:"px-3"},[e("div",{class:""},[e("h4",null,"Instructions:"),e("ul",null,[e("li",null,"Select a Coin."),e("li",null,"Enter amount you want."),e("li",null," Enter Recipient's wallet address. Make sure your address type is the same as the deposit method. "),e("li",null,"Click on Send.")])])])],-1),H={class:"col-md-6 border-start"},M={class:"row"},N=["onClick"],O={class:"border p-4 w-100"},U={class:"col-12"},z=e("hr",null,null,-1),Q={name:"send",props:{payment_methods:Array,flash:{type:Object,default:{}},validated:{type:Boolean,default:!1},data:{type:Object,default:{}}},setup(_){const c=_,s=f({method_id:"",amount:"",address:""});v({});const p=o=>s.method_id=o;g(()=>c.flash,o=>{"error"in o&&o.error!=""&&B(o.error),console.log(o.error)});const n=w(()=>s.method_id==""),h=()=>{s.post(route("user.send.store"))};return(o,d)=>{const b=k("Head");return r(),i(m,null,[a(b,{title:"Send"}),a(y,{title:"Send",crumbs:["Dashboard","Send Crypto"]}),e("div",$,[e("div",j,[e("div",D,[F,e("div",H,[e("div",M,[(r(!0),i(m,null,x(c.payment_methods,(l,I)=>(r(),i("div",{class:V(["col-6 text-center my-2",{selected:t(s).method_id==l.symbol}]),onClick:L=>p(l.symbol)},[e("div",O,[e("h6",null,S(l.name),1)])],10,N))),256)),e("div",U,[z,a(u,{disabled:t(n),name:"amount",placeholder:"Amount",modelValue:t(s).amount,"onUpdate:modelValue":d[0]||(d[0]=l=>t(s).amount=l),class:"mt-2"},null,8,["disabled","modelValue"]),a(u,{disabled:t(n),name:"address",placeholder:"Wallet Address",modelValue:t(s).address,"onUpdate:modelValue":d[1]||(d[1]=l=>t(s).address=l)},null,8,["disabled","modelValue"]),a(A,{disabled:t(n),class:"btn btn-outline-primary w-100",onButtonClicked:h},{default:C(()=>[a(E,{text:"Send",loading:t(s).processing},null,8,["loading"])]),_:1},8,["disabled"])])])])])])])],64)}}};export{Q as default};
