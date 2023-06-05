import{p as f,T as k,a as l,b as m,d as a,e,i as B,u as t,w as h,F as C,h as d,g as w}from"./main.44d3edf1.js";import{_ as T}from"./FormGroup.a8d6311c.js";import{_ as y}from"./InputGroup.053cf175.js";import{_ as U}from"./FormButton.b5bafa51.js";import"./FormLabel.6d5eca29.js";import"./FormInput.c8d17617.js";import"./error.8a473308.js";const E={class:"auth-content my-auto"},N=e("div",{class:"text-center"},[e("h5",{class:"mb-0"},"Register Account"),e("p",{class:"text-muted mt-2"},"Get a trading account with us.")],-1),R=["onSubmit"],$=e("div",{class:"mb-4"},[e("p",{class:"text-muted"},[d(" By registering you agree to our "),e("a",{href:"#",class:"text-primary"},"Terms of Use")])],-1),A={key:0,class:"spinner-border spinner-border-sm"},F={key:1},H={class:"mt-5 text-center"},S={class:"text-muted mb-0"},G=d(" Already have an account ? "),L=d(" Login "),J={name:"register",props:["flash","data"],setup(b){var u,_;const c=b,i=f("password"),r=f("mdi mdi-eye-outline"),p=()=>{console.log("here"),i.value=i.value=="password"?"text":"password",r.value=r.value=="mdi mdi-eye-outline"?"mdi mdi-mdi-eye-off-outline":"mdi mdi-mdi-eye-outline"},o=k({email:((u=c.flash)==null?void 0:u.email)||"",referral_code:((_=c.data)==null?void 0:_.regToken)||"",password:"",password_confirmation:""}),g=()=>{o.post(route("register"))};return(v,s)=>{const x=w("Head"),V=w("inertia-link");return l(),m(C,null,[a(x,{title:"Register"}),e("div",E,[N,e("form",{class:"mt-4 pt-2",onSubmit:B(g,["prevent"])},[a(T,{label:"Email",placeholder:"you@example.com",modelValue:t(o).email,"onUpdate:modelValue":s[0]||(s[0]=n=>t(o).email=n),name:"email"},null,8,["modelValue"]),a(y,{type:i.value,class:"mb-3",label:"Password",placeholder:"Enter password",modelValue:t(o).password,"onUpdate:modelValue":s[1]||(s[1]=n=>t(o).password=n),icon:r.value,onButtonClicked:p,name:"password"},null,8,["type","modelValue","icon"]),a(y,{type:i.value,class:"mb-3",label:"Confirm password",placeholder:"Confirm password",modelValue:t(o).password_confirmation,"onUpdate:modelValue":s[2]||(s[2]=n=>t(o).password_confirmation=n),icon:r.value,onButtonClicked:p,name:"password_confirmation"},null,8,["type","modelValue","icon"]),$,a(U,{type:"submit",class:"btn btn-primary w-100 waves-effect waves-light"},{default:h(()=>[t(o).processing?(l(),m("span",A)):(l(),m("span",F,"Register"))]),_:1})],40,R),e("div",H,[e("p",S,[G,a(V,{href:v.route("login"),class:"text-primary fw-semibold"},{default:h(()=>[L]),_:1},8,["href"])])])])],64)}}};export{J as default};
