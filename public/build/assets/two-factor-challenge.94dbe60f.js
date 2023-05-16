import{i as c,r as l,a as d,b as m,d as o,e,j as _,u as a,w as p,F as u,h}from"./main.bac42695.js";import{_ as f}from"./FormButton.0cc94290.js";import{_ as b}from"./FormGroup.1462db17.js";import{_ as g}from"./ButtonLoader.0bb0d3b3.js";import"./error.34acba4a.js";import"./FormInput.c5b264e0.js";const x={class:"text-center"},v=e("div",{class:"avatar-lg mx-auto"},[e("div",{class:"avatar-title rounded-circle bg-light"},[e("i",{class:"bx bxs-user h2 mb-0 text-primary"})])],-1),w={class:"p-2 mt-4"},y=e("h4",null,"Verify it's you",-1),V=e("p",{class:"mb-5"}," Please enter the 6 digit token from the google authenticator app. ",-1),F=["onSubmit"],k=e("div",{class:"mt-5 text-center"},[e("p",{class:"text-muted mb-0"},[h(" Don't have a two factor auth device? "),e("br"),e("a",{href:"#",class:"text-primary fw-semibold"}," Enter recovery code ")])],-1),P={name:"two-factor-challenge",setup(T){const t=c({code:""}),r=()=>{t.post(route("two-factor.login"),{replace:!0})};return(B,s)=>{const n=l("Head");return d(),m(u,null,[o(n,{title:"Two Factor Athentication Challenge"}),e("div",x,[v,e("div",w,[y,V,e("form",{onSubmit:_(r,["prevent"])},[o(b,{name:"code",placeholder:"TOTP token",modelValue:a(t).code,"onUpdate:modelValue":s[0]||(s[0]=i=>a(t).code=i)},null,8,["modelValue"]),o(f,{class:"btn btn-primary w-100",type:"submit",disabled:a(t).processing},{default:p(()=>[o(g,{text:"Authenticate",loading:a(t).processing},null,8,["loading"])]),_:1},8,["disabled"])],40,F)])]),k],64)}}};export{P as default};
