import{T as L,p as M,x as u,a as i,b as r,d,e as a,i as B,u as l,m as O,bv as S,w as A,F as D,g as N}from"./main.44d3edf1.js";import{b as W}from"./breadcrumb.a2072d09.js";import{_ as m}from"./FormGroup.a8d6311c.js";import{_ as $}from"./FormSelect.5ce07f83.js";import{_ as F}from"./FormButton.b5bafa51.js";import{_ as P}from"./ButtonLoader.046f5f16.js";import"./FormLabel.6d5eca29.js";import"./FormInput.c8d17617.js";import"./error.8a473308.js";const j={class:"col-lg-4 m-auto"},H={class:"card"},Y={class:"card-body"},Q=["onSubmit"],T={class:"col"},q={class:"form-check"},z=a("label",{class:"form-check-label",for:"remember-check"}," Featured Coin ",-1),G={key:0,class:"form-group"},J=["src"],K={key:1,class:"form-group"},X=a("h4",null,"No Image Uploaded Yet",-1),Z=[X],ee={key:2,class:"form-group"},le=["src"],te={key:3,class:"form-group"},oe=a("h4",null,"No Logo Uploaded Yet",-1),ae=[oe],se={class:"mt-3 mb-3"},ne=a("label",null,"Coin Logo",-1),de={class:"mt-3 mb-3"},me=a("label",null,"QR Code Upload",-1),ge={name:"edit",props:["payment"],setup(R){var c,b,_,f,y,g,h,V,v,w,U,k,C;const n=R,e=L({id:(c=n.payment)==null?void 0:c.id,name:(b=n.payment)==null?void 0:b.name,status:(_=n.payment)==null?void 0:_.status,indices:(f=n.payment)==null?void 0:f.indices,symbol:(y=n.payment)==null?void 0:y.symbol,wallet:(g=n.payment)==null?void 0:g.wallet,image:(h=n.payment)==null?void 0:h.image,logo:(V=n.payment)==null?void 0:V.logo,svg:(v=n.payment)==null?void 0:v.svg,roi:(w=n.payment)==null?void 0:w.roi,start_bonus:(U=n.payment)==null?void 0:U.start_bonus,featured:(k=n.payment)==null?void 0:k.featured,min_withdrawal:(C=n.payment)==null?void 0:C.min_withdrawal});let p=M(null),x=M(null);u(()=>e.symbol,s=>{s!=""&&(e.symbol=s.toUpperCase())}),u(()=>e.indices,s=>{s!=""&&(e.indices=s.toUpperCase())}),u(()=>e.image,s=>{(s!=null||s!="")&&(p.value=URL.createObjectURL(s))}),u(()=>e.svg,s=>{(s!=null||s!="")&&(x.value=URL.createObjectURL(s))});const E=()=>{console.log(e.data()),e.put(route("admin.payment-method.update",n.payment.id))};return(s,t)=>{const I=N("Head");return i(),r(D,null,[d(I,{title:"Edit Payment Method"}),d(W,{title:"Edit Payment Method",crumbs:["Dashboard","Settings","Payment Method","Edit"]}),a("div",j,[a("div",H,[a("div",Y,[a("form",{onSubmit:B(E,["prevent"])},[d(m,{name:"name",placeholder:"Asset name",label:"Asset name",modelValue:l(e).name,"onUpdate:modelValue":t[0]||(t[0]=o=>l(e).name=o)},null,8,["modelValue"]),d(m,{name:"indices",placeholder:"Indices",label:"Indices",modelValue:l(e).indices,"onUpdate:modelValue":t[1]||(t[1]=o=>l(e).indices=o),class:"mt-3"},null,8,["modelValue"]),d(m,{name:"symbol",placeholder:"Coin Symbol",label:"Coin Symbol",modelValue:l(e).symbol,"onUpdate:modelValue":t[2]||(t[2]=o=>l(e).symbol=o),class:"mt-3"},null,8,["modelValue"]),d(m,{name:"start_bonus",placeholder:"Start Bonus(Optional)",label:"Start Bonus(Optional)",modelValue:l(e).start_bonus,"onUpdate:modelValue":t[3]||(t[3]=o=>l(e).start_bonus=o),class:"mt-3"},null,8,["modelValue"]),d(m,{name:"roi",placeholder:"ROI",label:"Rewards",modelValue:l(e).roi,"onUpdate:modelValue":t[4]||(t[4]=o=>l(e).roi=o),class:"mt-3"},null,8,["modelValue"]),d(m,{name:"min_withdrawal",placeholder:"Min Withdrawal",label:"Minimum Withdrawal",modelValue:l(e).min_withdrawal,"onUpdate:modelValue":t[5]||(t[5]=o=>l(e).min_withdrawal=o),class:"mt-3"},null,8,["modelValue"]),a("div",T,[a("div",q,[O(a("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[6]||(t[6]=o=>l(e).featured=o),id:"remember-check"},null,512),[[S,l(e).featured]]),z])]),d($,{id:"demo",name:"status",label:"Enable/Disable",options:{1:"Enable",0:"Disable"},modelValue:l(e).status,"onUpdate:modelValue":t[7]||(t[7]=o=>l(e).status=o)},null,8,["modelValue"]),d(m,{name:"wallet",placeholder:"Wallet Address",label:"Wallet Address",modelValue:l(e).wallet,"onUpdate:modelValue":t[8]||(t[8]=o=>l(e).wallet=o),class:"mt-3"},null,8,["modelValue"]),l(e).image?(i(),r("div",G,[a("img",{src:l(p),class:"img-fluid p-5"},null,8,J)])):(i(),r("div",K,Z)),l(e).svg?(i(),r("div",ee,[a("img",{src:s.logo,class:"img-fluid p-5"},null,8,le)])):(i(),r("div",te,ae)),a("div",se,[ne,a("input",{class:"form-control",type:"file",onInput:t[9]||(t[9]=o=>l(e).svg=o.target.files[0])},null,32)]),a("div",de,[me,a("input",{class:"form-control",type:"file",onInput:t[10]||(t[10]=o=>l(e).image=o.target.files[0])},null,32)]),d(F,{type:"submit",class:"w-100 btn btn-outline-primary mt-3",disabled:l(e).processing},{default:A(()=>[d(P,{text:"Update Payment Method",loading:l(e).processing},null,8,["loading"])]),_:1},8,["disabled"])],40,Q)])])])],64)}}};export{ge as default};
