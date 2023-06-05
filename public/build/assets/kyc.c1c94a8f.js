import{b as T}from"./breadcrumb.a2072d09.js";import{_ as j}from"./paginator.28e6f7d5.js";import{c as g,p as k,T as w,a as c,b as i,d as l,e as t,u as n,F as h,r as x,k as C,w as f,g as U,G as $,t as d,bE as Y,h as S}from"./main.44d3edf1.js";import{_ as z}from"./modal.9ee02198.js";import{_ as r}from"./FormGroup.a8d6311c.js";import{_ as D}from"./FormButton.b5bafa51.js";import{_ as B}from"./ButtonLoader.046f5f16.js";import"./FormLabel.6d5eca29.js";import"./FormInput.c8d17617.js";import"./error.8a473308.js";const H={class:"card shadow-lg radius-20 col-lg-10 mx-auto"},P={class:"card-body"},q={class:"table-responsive"},G={class:"table"},L=t("thead",null,[t("tr",null,[t("th"),t("th",null,"User"),t("th",null,"Email"),t("th",null,"Phone number"),t("th",null,"Country"),t("th",null,"State"),t("th",null,"City"),t("th",null,"Date"),t("th",null,"Actions")])],-1),O={key:0},R=["src"],Z=["onClick"],I=t("i",{class:"fa fa-eye"},null,-1),J=[I],Q={key:1},W=t("tr",null,[t("td",{colspan:"10",class:"text-muted text-center"}," No verifiable user found ")],-1),X=[W],tt={key:0,class:"d-flex justify-content-center"},et={class:"modal-body"},lt={class:"text-center"},ot=["src"],st={class:"row mt-3"},at={class:"row"},nt={class:"row"},ct={class:"row"},it={class:"d-block w-100 py-1"},dt={class:"d-block w-100 py-1"},rt=["href"],mt=t("i",{class:"fa fa-eye"},null,-1),ut=S(" view"),_t=[mt,ut],pt={class:"d-flex justify-content-between mt-3"},Dt={name:"kyc",props:{users:Object},setup(A){const b=A,m=g(()=>b.users.data),N=g(()=>b.users.links),o=k({}),u=k(!1),_=w({}),p=w({}),E=a=>{o.value=m.value.filter(s=>s.id==a)[0],u.value=!0},F=a=>{_.post(route("admin.kyc.approve",a),{onBefore:()=>confirm("Are you sure you want to approve this user?"),onSuccess:()=>y()})},V=a=>{p.post(route("admin.kyc.decline",a),{onBefore:()=>confirm("Are you sure you want to decline this user?"),onSuccess:()=>y()})},y=()=>{document.querySelectorAll(".btn-close").forEach(a=>{a.click()})},K=a=>{let s="Document";return a.type=="passport"?s+=" (Data page)":a.front?s+=" (Front)":s+=" (Back)",s};return(a,s)=>{const M=U("Head");return c(),i(h,null,[l(M,{title:"KYC"}),l(T,{title:"KYC",crumbs:["Dashboard","Users","KYC"]}),t("div",H,[t("div",P,[t("div",q,[t("table",G,[L,n(m).length?(c(),i("tbody",O,[(c(!0),i(h,null,x(n(m),(e,v)=>(c(),i("tr",{key:v},[t("td",null,[t("img",{src:n($)(e.image),style:{width:"30px",height:"30px","border-radius":"50%"}},null,8,R)]),t("td",null,d(`${e==null?void 0:e.first_name} ${e==null?void 0:e.last_name}`),1),t("td",null,d(e==null?void 0:e.phone),1),t("td",null,d(e==null?void 0:e.email),1),t("td",null,d(e==null?void 0:e.country),1),t("td",null,d(e==null?void 0:e.state),1),t("td",null,d(e==null?void 0:e.city),1),t("td",null,d(new Date(e==null?void 0:e.created_at).toDateString()),1),t("td",null,[t("span",{onClick:vt=>E(e==null?void 0:e.id),class:"btn btn-outline-primary btn-sm"},J,8,Z)])]))),128))])):(c(),i("tbody",Q,X))])]),n(m).length?(c(),i("div",tt,[l(j,{links:n(N)},null,8,["links"])])):C("",!0)])]),l(z,{title:"Kyc Verification",open:u.value,onModalClosed:s[2]||(s[2]=e=>u.value=!1)},{default:f(()=>[t("div",et,[t("div",null,[t("div",lt,[o.value.image?(c(),i("img",{key:0,src:n($)(o.value.image),style:{width:"80px",height:"80px","border-radius":"50%"}},null,8,ot)):C("",!0)]),t("div",st,[l(r,{class:"col-md-6",label:"Name","model-value":`${o.value.first_name} ${o.value.last_name}`},null,8,["model-value"]),l(r,{class:"col-md-6",label:"Email","model-value":o.value.email},null,8,["model-value"])]),t("div",at,[l(r,{class:"col-md-6",label:"Phone","model-value":o.value.phone},null,8,["model-value"]),l(r,{class:"col-md-6",label:"Country","model-value":o.value.country},null,8,["model-value"])]),t("div",nt,[l(r,{class:"col-md-6",label:"State/Region","model-value":o.value.state},null,8,["model-value"]),l(r,{class:"col-md-6",label:"City/Town","model-value":o.value.state},null,8,["model-value"])]),t("div",ct,[l(r,{class:"col-md-9",label:"Address","model-value":o.value.address},null,8,["model-value"]),l(r,{class:"col-md-3",label:"Zip code","model-value":o.value.zip_code},null,8,["model-value"])]),(c(!0),i(h,null,x(o.value.documents,(e,v)=>(c(),i("div",{key:v},[t("strong",it,"Document type: "+d(n(Y)(e.type)),1),t("strong",dt,[S(d(K(e))+": ",1),t("a",{target:"blank",class:"btn btn-outline-primary btn-sm mx-3",href:`/storage/documents/${e.document}`},_t,8,rt)])]))),128)),t("div",pt,[l(D,{class:"btn btn-outline-danger",disabled:n(p).processing,onButtonClicked:s[0]||(s[0]=e=>V(o.value.id))},{default:f(()=>[l(B,{text:"<i class='fa fa-times'></i> Decline",loading:n(p).processing},null,8,["loading"])]),_:1},8,["disabled"]),l(D,{class:"btn btn-outline-success",disabled:n(_).processing,onButtonClicked:s[1]||(s[1]=e=>F(o.value.id))},{default:f(()=>[l(B,{text:"Approve <i class='fa fa-check'></i>",loading:n(_).processing},null,8,["loading"])]),_:1},8,["disabled"])])])])]),_:1},8,["open"])],64)}}};export{Dt as default};
