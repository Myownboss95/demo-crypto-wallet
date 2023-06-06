import{_ as L,c as h,T as N,p as H,z as E,a as r,b as _,d as i,e as s,u as t,L as Z,t as d,i as G,A,w as M,F as f,r as B,H as q,I as J,D as F,g as K,G as Q}from"./main.2dcdc8d3.js";import{_ as u}from"./FormGroup.23053268.js";import{_ as I}from"./FormSelect.faab2834.js";import{_ as W}from"./FormButton.a5406ea8.js";import{_ as X}from"./ButtonLoader.1c2761ed.js";import"./FormLabel.3e6cbdef.js";import"./FormInput.c55253b9.js";import"./error.71f8f6d4.js";const n=p=>(q("data-v-1e970242"),p=p(),J(),p),Y={class:"row"},ss={class:"col-xl-9 col-lg-8 mx-auto"},ts={class:"card"},es={class:"card-body"},os={class:"row"},ls={class:"col-sm order-2 order-sm-1"},as={class:"d-flex align-items-start mt-3 mt-sm-0"},ds={class:"flex-shrink-0"},ns={class:"avatar-xl me-3 mr-3"},is=["src"],cs={class:"flex-grow-1"},rs={class:"ml-3"},_s={class:"font-size-16 mb-1"},ms={class:"text-muted font-size-13"},us=n(()=>s("ul",{class:"nav nav-tabs-custom card-header-tabs border-top mt-4",id:"pills-tab",role:"tablist"},[s("li",{class:"nav-item"},[s("a",{class:"nav-link px-3 active","data-bs-toggle":"tab",href:"#overview",role:"tab"},"Bio")]),s("li",{class:"nav-item"},[s("a",{class:"nav-link px-3","data-bs-toggle":"tab",href:"#about",role:"tab"},"Transactions")]),s("li",{class:"nav-item"},[s("a",{class:"nav-link px-3","data-bs-toggle":"tab",href:"#kyc",role:"tab"},"Referrals")])],-1)),ps={class:"tab-content"},hs={class:"tab-pane active",id:"overview",role:"tabpanel"},vs={class:"card"},bs=n(()=>s("div",{class:"card-header"},[s("h5",{class:"card-title mb-0"},"Bio")],-1)),fs={class:"card-body"},ys={class:"pb-3"},gs={class:"row"},xs={class:"col-xl"},Vs={class:"text-muted"},ws=["onSubmit"],ks={class:"row"},Cs={class:"row mt-4"},zs={class:"row mt-4"},Ss={class:"row mt-4"},Ts={class:"row mt-4"},Us=n(()=>s("h6",null,"Referral Code",-1)),js={class:"col-md-6"},Rs={class:"row"},$s={class:"col-7 border p-1"},As={class:"font-size-16 my-1"},Bs={class:"col-5 border p-1 ref"},Fs=n(()=>s("i",{class:"fa fa-copy"},null,-1)),Is=n(()=>s("strong",null," Click to Copy",-1)),Os=[Fs,Is],Ps={class:"d-flex justify-content-center mt-3"},Ds={class:"tab-pane",id:"about",role:"tabpanel"},Ls={class:"card"},Ns=n(()=>s("div",{class:"card-header"},[s("h5",{class:"card-title mb-0"},"Transactions")],-1)),Hs={class:"card-body"},Es={class:"pb-3"},Zs={key:0},Gs={class:"table-responsive"},Ms={class:"table mb-0"},qs=n(()=>s("thead",{class:"table-light"},[s("tr",null,[s("th",null,"Reference"),s("th",null,"Amount"),s("th",null,"Type"),s("th",null,"Status")])],-1)),Js={key:1},Ks=n(()=>s("span",{class:"ms-1 text-muted font-size-13"},"No Transactions to Display",-1)),Qs=[Ks],Ws={class:"tab-pane",id:"kyc",role:"tabpanel"},Xs={class:"card"},Ys=n(()=>s("div",{class:"card-header"},[s("h5",{class:"card-title mb-0"},"Referrals")],-1)),st={class:"card-body"},tt={class:"row justify-content-center"},et={class:"row"},ot={class:"col-md-5 col-sm-12 border p-1"},lt={class:"font-size-16 my-1"},at={class:"col-md-3 col-sm-12 border p-1 ref"},dt=n(()=>s("i",{class:"fa fa-copy"},null,-1)),nt=n(()=>s("strong",null," Click to Copy",-1)),it=[dt,nt],ct={class:"pb-3"},rt={key:0},_t={class:"table-responsive"},mt={class:"table mb-0"},ut=n(()=>s("thead",{class:"table-light"},[s("tr",null,[s("th",null,"Reference"),s("th",null,"Amount")])],-1)),pt={key:1},ht=n(()=>s("span",{class:"ms-1 text-muted font-size-13"},"No Transactions to Display",-1)),vt=[ht],bt={name:"index",props:{user:Object,countries:Object,transactions:Object,hostname:Object,referrals:Object},setup(p){var V,w,k,C,z,S,T,U,j;const a=p,m=h(()=>a.user),O=h(()=>a.countries),y=h(()=>a.transactions),g=h(()=>a.referrals),v=h(()=>a.hostname),l=N({first_name:((V=a.user)==null?void 0:V.first_name)||"",last_name:((w=a.user)==null?void 0:w.last_name)||"",phone:((k=a.user)==null?void 0:k.phone)||"",country:((C=a.user)==null?void 0:C.country)||"",state:((z=a.user)==null?void 0:z.state)||"",city:((S=a.user)==null?void 0:S.city)||"",address:((T=a.user)==null?void 0:T.address)||"",zip_code:((U=a.user)==null?void 0:U.zip_code)||"",referral_code:((j=a.user)==null?void 0:j.referral_code)||""});let x=H({});E(()=>l.country,b=>{b!=""&&Q.get(F("location.states",{country:a.countries[b]})).then(o=>{if(o.status==200)x.value=o.data.states;else throw Error()}).catch(o=>{o("Failed to load states, please refresh this page")})});const P=()=>{l.post(F("user.profile.update"))};return(b,o)=>{var R,$;const D=K("Head");return r(),_(f,null,[i(D,{title:"Profile"}),s("div",Y,[s("div",ss,[s("div",ts,[s("div",es,[s("div",os,[s("div",ls,[s("div",as,[s("div",ds,[s("div",ns,[s("img",{src:t(Z)(t(m).image),alt:"",class:"rounded-circle header-profile-user mr-1",style:{width:"80px",height:"80px"}},null,8,is)])]),s("div",cs,[s("div",rs,[s("h5",_s,d(t(m).first_name)+" "+d(t(m).last_name),1),s("p",ms,d(t(m).email),1)])])])])]),us])]),s("div",ps,[s("div",hs,[s("div",vs,[bs,s("div",fs,[s("div",null,[s("div",ys,[s("div",gs,[s("div",xs,[s("div",Vs,[s("form",{class:"py-3 px-2",onSubmit:G(P,["prevent"])},[s("div",ks,[i(u,{class:"col-md-6",placeholder:"First name",label:"First name",modelValue:t(l).first_name,"onUpdate:modelValue":o[0]||(o[0]=e=>t(l).first_name=e),name:"first_name"},null,8,["modelValue"]),i(u,{class:"col-md-6",placeholder:"Last name",label:"Last name",modelValue:t(l).last_name,"onUpdate:modelValue":o[1]||(o[1]=e=>t(l).last_name=e),name:"last_name"},null,8,["modelValue"])]),s("div",Cs,[i(u,{class:"col-md-6",placeholder:"Phone",label:"Phone number",modelValue:t(l).phone,"onUpdate:modelValue":o[2]||(o[2]=e=>t(l).phone=e),name:"phone"},null,8,["modelValue"]),i(I,{class:"col-md-6",placeholder:"Country",label:"Country",modelValue:t(l).country,"onUpdate:modelValue":o[3]||(o[3]=e=>t(l).country=e),name:"country",options:t(O)},null,8,["modelValue","options"])]),s("div",zs,[i(I,{class:"col-md-6",placeholder:"State/Region",label:"State/Region",modelValue:t(l).state,"onUpdate:modelValue":o[4]||(o[4]=e=>t(l).state=e),name:"state",options:t(x)},null,8,["modelValue","options"]),i(u,{class:"col-md-6",placeholder:"City/Town",label:"City/Town",modelValue:t(l).city,"onUpdate:modelValue":o[5]||(o[5]=e=>t(l).city=e),name:"city"},null,8,["modelValue"])]),s("div",Ss,[i(u,{class:"col-md-8",placeholder:"Address",label:"Address",modelValue:t(l).address,"onUpdate:modelValue":o[6]||(o[6]=e=>t(l).address=e),name:"address"},null,8,["modelValue"]),i(u,{class:"col-md-4",placeholder:"Postal/Zip code",label:"Postal/Zip code",modelValue:t(l).zip_code,"onUpdate:modelValue":o[7]||(o[7]=e=>t(l).zip_code=e),name:"zip_code"},null,8,["modelValue"])]),s("div",Ts,[Us,s("div",js,[s("div",Rs,[s("div",$s,[s("strong",As,d(t(v))+"ref/"+d((R=t(m))==null?void 0:R.refcode),1)]),s("div",Bs,[s("span",{class:"ml-2",onClick:o[8]||(o[8]=e=>{var c;return t(A)("https://"+t(v)+"ref/"+((c=t(m))==null?void 0:c.refcode))})},Os)])])])]),s("div",Ps,[i(W,{class:"btn btn-primary px-5",type:"submit",disable:t(l).processing},{default:M(()=>[i(X,{text:"Submit",loading:t(l).processing},null,8,["loading"])]),_:1},8,["disable"])])],40,ws)])])])])])])])]),s("div",Ds,[s("div",Ls,[Ns,s("div",Hs,[s("div",null,[s("div",Es,[t(y).length?(r(),_("div",Zs,[s("div",Gs,[s("table",Ms,[qs,s("tbody",null,[(r(!0),_(f,null,B(t(y),(e,c)=>(r(),_("tr",{key:c},[s("td",null,d(e.reference),1),s("td",null,d(e.amount),1),s("td",null,d(e.type),1),s("td",null,d(e.status),1)]))),128))])])])])):(r(),_("div",Js,Qs))])])])])]),s("div",Ws,[s("div",Xs,[Ys,s("div",st,[s("div",null,[s("div",tt,[s("div",et,[s("div",ot,[s("strong",lt,d(t(v))+"ref/"+d(($=t(m))==null?void 0:$.refcode),1)]),s("div",at,[s("span",{class:"ml-2",onClick:o[9]||(o[9]=e=>{var c;return t(A)("https://"+t(v)+"ref/"+((c=t(m))==null?void 0:c.refcode))})},it)])]),s("div",ct,[t(g).length?(r(),_("div",rt,[s("div",_t,[s("table",mt,[ut,s("tbody",null,[(r(!0),_(f,null,B(t(g),(e,c)=>(r(),_("tr",{key:c},[s("td",null,d(e.last_name?e.last_name:"-")+" "+d(e.first_name?e.first_name:"-"),1),s("td",null,d(e.email),1)]))),128))])])])])):(r(),_("div",pt,vt))])])])])])])])])])],64)}}};var zt=L(bt,[["__scopeId","data-v-1e970242"]]);export{zt as default};