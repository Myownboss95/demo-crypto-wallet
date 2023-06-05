import{b as V}from"./breadcrumb.a2072d09.js";import{_ as $,T as S,bD as d,c as f,x as D,a as i,b as _,d as o,e as s,u as e,F as b,r as I,g as p,G as U,t as n,w as v,n as A,D as C,E as L,h as g}from"./main.44d3edf1.js";import{_ as N}from"./FormInput.c8d17617.js";import{_ as j}from"./FormSelect.5ce07f83.js";import{_ as B}from"./paginator.28e6f7d5.js";import"./FormLabel.6d5eca29.js";import"./error.8a473308.js";const l=c=>(C("data-v-4ac79aa6"),c=c(),L(),c),E={class:"col-lg-11 mx-auto"},F={class:"w-100 mb-3 d-flex justify-content-between"},H={class:"col-sm-6 col-md-3"},T={class:"col-sm-6 col-md-2"},W={key:0},G={class:"card-body"},M={class:"row align-items-center"},P={class:"col-xl-3 col-lg-6 col-sm-12 d-flex mb-sm-2"},q={class:"user-img-wrapper me-sm-4 me-3"},J=["src"],K={class:"media-body"},O={class:"d-blockn font-size-12"},Q={class:"col-xl-3 col-lg-3 col-sm-4 col-6 mb-3"},R=l(()=>s("small",{class:"mb-2 d-block font-size-12 fw-bold"},"Address",-1)),X={class:"font-size-12"},Y={class:"col-xl-2 col-lg-3 col-sm-4 col-6 mb-3 text-lg-center"},Z=l(()=>s("small",{class:"mb-2 d-block font-size-12 fw-bold"},"Wallet ",-1)),ss={class:"font-size-12"},ts=l(()=>s("i",{class:"fa fa-eye"},null,-1)),es=g(" View Wallet "),os={class:"col-xl-2 col-lg-6 col-sm-4 mb-sm-3 mb-3"},as=l(()=>s("small",{class:"mb-2 d-block font-size-12 fw-bold"},"Contact",-1)),ns={class:"font-size-12"},ls={class:"font-size-12"},cs={class:"col-xl-2 col-md-12 col-lg-6 col-sm-12 mb-sm-4 mb-0"},ds=l(()=>s("hr",{class:"d-md-none mt-0"},null,-1)),is={class:"d-flex justify-content-between items-center my-auto"},_s={class:"dropdown ms-4"},rs=l(()=>s("div",{class:"btn-link","data-bs-toggle":"dropdown"},[s("i",{class:"fa fa-cog font-size-20"})],-1)),ms={class:"dropdown-menu dropdown-menu-right"},ps=g("Login As"),hs={class:"w-100 pb-3 d-flex justify-content-center"},us={key:1,class:"text-center pt-5 pb-5 border rounded text-muted"},fs={name:"index",props:["users"],setup(c){const h=c,a=S({status:d().params.status||"all",search:d().params.search||""}),u=f(()=>h.users.data),x=f(()=>h.users.links);return D(()=>a.data(),()=>{a.transform(r=>(r.search==""&&delete r.search,r)).get(d("admin.users.index"),{preserveState:!0})}),(r,m)=>{const w=p("Head"),k=p("InertiaLink"),y=p("inertia-link");return i(),_(b,null,[o(w,{title:"Users"}),o(V,{title:"Users",crumbs:["Dashboard","Users"]}),s("div",E,[s("div",F,[s("div",H,[o(N,{placeholder:"Search...",modelValue:e(a).search,"onUpdate:modelValue":m[0]||(m[0]=t=>e(a).search=t),modelModifiers:{lazy:!0}},null,8,["modelValue"])]),s("div",T,[o(j,{name:"search",modelValue:e(a).status,"onUpdate:modelValue":m[1]||(m[1]=t=>e(a).status=t),options:{all:"All",active:"Active",pending:"Pending",suspended:"Suspended"}},null,8,["modelValue"])])]),e(u).length?(i(),_("div",W,[(i(!0),_(b,null,I(e(u),(t,z)=>(i(),_("div",{class:"card shadow rounded-lg",key:z},[s("div",G,[s("div",M,[s("div",P,[s("span",q,[s("img",{class:"h-100 w-100",src:e(U)(t.image),width:"95"},null,8,J)]),s("div",K,[s("h6",null,n(`${t.first_name} ${t.last_name}`),1),s("span",O,n(new Date(t.created_at).toDateString()),1)])]),s("div",Q,[R,s("span",X,n(`${t.address}. ${t.city}, ${t.state}, ${t.zip_code}, ${t.country}.`),1)]),s("div",Y,[Z,s("span",ss,[o(k,{href:e(d)("admin.users.wallet",t.id),class:"btn btn-outline-primary btn-sm"},{default:v(()=>[ts,es]),_:2},1032,["href"])])]),s("div",os,[as,s("span",ns,n(t.email),1),s("span",ls,n(t.phone),1)]),s("div",cs,[ds,s("div",is,[s("h4",{class:A(["badge rounded-pill my-auto font-size-18",{"text-danger":t.status=="suspended","text-success":t.status=="active","text-info":t.status=="pending"}])},n(t.status),3),s("div",_s,[rs,s("div",ms,[o(y,{class:"dropdown-item",as:"button",method:"post",href:e(d)("login-as",t.id)},{default:v(()=>[ps]),_:2},1032,["href"])])])])])])])]))),128)),s("div",hs,[o(B,{links:e(x)},null,8,["links"])])])):(i(),_("div",us," No users found "))])],64)}}};var zs=$(fs,[["__scopeId","data-v-4ac79aa6"]]);export{zs as default};
