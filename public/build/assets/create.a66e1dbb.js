import{T as u,x as d,a as p,b,d as s,e as t,i as c,u as a,m as f,bv as _,w as V,F as w,g as h}from"./main.44d3edf1.js";import{b as y}from"./breadcrumb.a2072d09.js";import{_ as n}from"./FormGroup.a8d6311c.js";import{_ as C}from"./FormSelect.5ce07f83.js";import{_ as g}from"./FormButton.b5bafa51.js";import{_ as v}from"./ButtonLoader.046f5f16.js";import"./FormLabel.6d5eca29.js";import"./FormInput.c8d17617.js";import"./error.8a473308.js";const U={class:"col-lg-4 m-auto"},k={class:"card"},M={class:"card-body"},x=["onSubmit"],S={class:"col"},P={class:"form-check"},B=t("label",{class:"form-check-label",for:"remember-check"}," Featured Coin ",-1),I={class:"mt-3 mb-3"},A=t("label",null,"Coin Logo",-1),D={class:"mt-3 mb-3"},N=t("label",null,"QR Code Upload",-1),j={name:"create",setup(W){const e=u({name:"",status:1,indices:"",image:"",svg:"",wallet:"",price:"",symbol:"",roi:"",start_bonus:"",featured:"",min_withdrawal:""});d(()=>e.symbol,m=>{m!=""&&(e.symbol=m.toUpperCase())}),d(()=>e.indices,m=>{m!=""&&(e.indices=m.toUpperCase())});const i=()=>{e.post(route("admin.payment-method.store"))};return(m,l)=>{const r=h("Head");return p(),b(w,null,[s(r,{title:"Create Payment Method"}),s(y,{title:"Create Payment Method",crumbs:["Dashboard","Settings","Create Payment Method","Create"]}),t("div",U,[t("div",k,[t("div",M,[t("form",{onSubmit:c(i,["prevent"])},[s(n,{name:"name",placeholder:"Add Coin Name",label:"Add Coin Name",modelValue:a(e).name,"onUpdate:modelValue":l[0]||(l[0]=o=>a(e).name=o)},null,8,["modelValue"]),s(n,{name:"symbol",placeholder:"Coin Symbol",label:"Coin Symbol",modelValue:a(e).symbol,"onUpdate:modelValue":l[1]||(l[1]=o=>a(e).symbol=o),class:"mt-3"},null,8,["modelValue"]),s(n,{name:"indices",placeholder:"Indices",label:"Indices",modelValue:a(e).indices,"onUpdate:modelValue":l[2]||(l[2]=o=>a(e).indices=o),class:"mt-3"},null,8,["modelValue"]),s(C,{id:"demo",name:"type",label:"Enable/Disable",options:{1:"Enable",0:"Disable"},modelValue:a(e).status,"onUpdate:modelValue":l[3]||(l[3]=o=>a(e).status=o)},null,8,["modelValue"]),s(n,{name:"wallet",placeholder:"Wallet Address",label:"Wallet Address",modelValue:a(e).wallet,"onUpdate:modelValue":l[4]||(l[4]=o=>a(e).wallet=o),class:"mt-3"},null,8,["modelValue"]),s(n,{name:"start_bonus",placeholder:"Start Bonus(Optional)",label:"Start Bonus(Optional)",modelValue:a(e).start_bonus,"onUpdate:modelValue":l[5]||(l[5]=o=>a(e).start_bonus=o),class:"mt-3"},null,8,["modelValue"]),s(n,{name:"roi",placeholder:"ROI",label:"Rewards",modelValue:a(e).roi,"onUpdate:modelValue":l[6]||(l[6]=o=>a(e).roi=o),class:"mt-3"},null,8,["modelValue"]),s(n,{name:"min_withdrawal",placeholder:"Min Withdrawal",label:"Minimum Withdrawal",modelValue:a(e).min_withdrawal,"onUpdate:modelValue":l[7]||(l[7]=o=>a(e).min_withdrawal=o),class:"mt-3"},null,8,["modelValue"]),t("div",S,[t("div",P,[f(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":l[8]||(l[8]=o=>a(e).featured=o),id:"remember-check"},null,512),[[_,a(e).featured]]),B])]),t("div",I,[A,t("input",{class:"form-control",type:"file",onInput:l[9]||(l[9]=o=>a(e).svg=o.target.files[0])},null,32)]),t("div",D,[N,t("input",{class:"form-control",type:"file",onInput:l[10]||(l[10]=o=>a(e).image=o.target.files[0])},null,32)]),s(g,{type:"submit",class:"w-100 btn btn-outline-primary mt-3",disabled:a(e).processing},{default:V(()=>[s(v,{text:"Create Payment Method",loading:a(e).processing},null,8,["loading"])]),_:1},8,["disabled"])],40,x)])])])],64)}}};export{j as default};
