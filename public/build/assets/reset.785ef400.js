import{z as h,T as b,a as i,b as d,e as a,d as r,u as o,w as m,i as y,D as l,h as c,g as x,C as V}from"./main.2dcdc8d3.js";import{_ as p}from"./FormGroup.23053268.js";import{_ as g}from"./FormButton.a5406ea8.js";import"./FormLabel.3e6cbdef.js";import"./FormInput.c55253b9.js";import"./error.71f8f6d4.js";const k={class:"auth-content my-auto"},v=a("div",{class:"text-center"},[a("h5",{class:"mb-0"},"Reset Password")],-1),C=a("p",{class:"text-center"}," Now you can reset your password by filling the form below. ",-1),N=["onSubmit"],B={key:0,class:"spinner-border spinner-border-sm"},P={key:1},R={class:"mt-5 text-center"},E={class:"text-muted mb-0"},I=c(" Remembered It ? "),S=c(" Log In "),M={name:"reset",props:["errors"],setup(_){const w=_;h(()=>w.errors,e=>{console.log(e),"email"in e&&V(e.email)});const f=()=>{const e=l().params;s.transform(t=>({...t,email:e.email,token:e.token})).post(l("password.update"))},s=b({password:"",password_confirmation:""});return(e,t)=>{const u=x("inertia-link");return i(),d("div",k,[v,C,a("form",{class:"mt-4",onSubmit:y(f,["prevent"])},[r(p,{label:"New password",placeholder:"Enter new password",name:"password",type:"password",modelValue:o(s).password,"onUpdate:modelValue":t[0]||(t[0]=n=>o(s).password=n)},null,8,["modelValue"]),r(p,{label:"Confirm new password",placeholder:"Confirm new password",name:"password",type:"password",modelValue:o(s).password_confirmation,"onUpdate:modelValue":t[1]||(t[1]=n=>o(s).password_confirmation=n)},null,8,["modelValue"]),r(g,{class:"btn btn-primary w-100 waves-effect waves-light",type:"submit",disabled:o(s).processing},{default:m(()=>[o(s).processing?(i(),d("span",B)):(i(),d("span",P,"Reset"))]),_:1},8,["disabled"])],40,N),a("div",R,[a("p",E,[I,r(u,{href:o(l)("login"),class:"text-primary fw-semibold"},{default:m(()=>[S]),_:1},8,["href"])])])])}}};export{M as default};