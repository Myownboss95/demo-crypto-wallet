import{T as _,a as b,b as h,d as i,e as t,i as g,u as s,m as d,bx as v,bB as k,w as x,F as N,g as w}from"./main.2dcdc8d3.js";import{b as V}from"./breadcrumb.9f201b96.js";import{_ as M}from"./FormGroup.23053268.js";import{_ as y}from"./FormButton.a5406ea8.js";import{_ as B}from"./ButtonLoader.1c2761ed.js";import"./FormLabel.3e6cbdef.js";import"./FormInput.c55253b9.js";import"./error.71f8f6d4.js";const E={class:"col-lg-4 m-auto"},U={class:"card shadow-lg radius-20"},C={class:"card-body"},$=["onSubmit"],D={class:"col"},F={class:"form-check"},H=t("label",{class:"form-check-label",for:"remember-check"}," Message Enabled ",-1),S={class:"mt-3 mb-3"},T=t("label",null,"Message",-1),K={name:"edit",props:{notification:Object},setup(r){var c,l,m;const n=r,e=_({name:((c=n.notification)==null?void 0:c.name)||"",message:((l=n.notification)==null?void 0:l.message)||"",status:((m=n.notification)==null?void 0:m.status)||!0}),u=f=>{var o;e.put(route("admin.notification.update",(o=n.notification)==null?void 0:o.id))};return(f,o)=>{const p=w("Head");return b(),h(N,null,[i(p,{title:"Edit Notifications"}),i(V,{title:"Edit Notifications",crumbs:["Dashboard","Messages","Notification"]}),t("div",E,[t("div",U,[t("div",C,[t("form",{onSubmit:g(u,["prevent"])},[i(M,{name:"name",placeholder:"Notification name",label:"Notification name",modelValue:s(e).name,"onUpdate:modelValue":o[0]||(o[0]=a=>s(e).name=a)},null,8,["modelValue"]),t("div",D,[t("div",F,[d(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":o[1]||(o[1]=a=>s(e).status=a),id:"remember-check"},null,512),[[v,s(e).status]]),H])]),t("div",S,[T,d(t("textarea",{name:"message",id:"",cols:"30",rows:"10",class:"form-control","onUpdate:modelValue":o[2]||(o[2]=a=>s(e).message=a)},`
            `,512),[[k,s(e).message]])]),i(y,{type:"submit",class:"w-100 btn btn-outline-primary",disabled:s(e).processing},{default:x(()=>[i(B,{text:"Update Notification",loading:s(e).processing},null,8,["loading"])]),_:1},8,["disabled"])],40,$)])])])],64)}}};export{K as default};