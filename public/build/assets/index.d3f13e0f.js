import{b as k}from"./breadcrumb.9f201b96.js";import{_ as g}from"./paginator.0d9df870.js";import{c as _,a as e,b as s,d as n,e as t,w as i,u as o,F as h,r as v,k as x,g as m,t as c,h as N}from"./main.2dcdc8d3.js";/* empty css                                                  */const D={class:"card shadow col-lg-8 mx-auto"},w={class:"card-body"},V={class:"text-end"},A=t("i",{class:"fa fa-plus"},null,-1),B=N(" Add Asset "),C={class:"table-responsive"},L={class:"table"},P=t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Type"),t("th",null,"Date"),t("th",null,"Actions")])],-1),S={key:0},j=t("i",{class:"fa fa-edit"},null,-1),F=t("i",{class:"fa fa-trash"},null,-1),H={key:1},I=t("tr",null,[t("td",{colspan:"9",class:"text-muted text-center"},"No assets found")],-1),T=[I],E={key:0,class:"d-flex justify-content-center"},J={name:"index",props:{tradeables:Object},setup(b){const u=b,l=_(()=>u.tradeables.data),f=_(()=>u.tradeables.links);return(d,O)=>{const p=m("Head"),r=m("InertiaLink");return e(),s(h,null,[n(p,{title:"Plans"}),n(k,{title:"Plans",crumbs:["Dashboard","Settings","Plans"]}),t("div",D,[t("div",w,[t("div",V,[n(r,{href:d.route("admin.tradeables.create"),class:"btn btn-outline-primary"},{default:i(()=>[A,B]),_:1},8,["href"])]),t("div",C,[t("table",L,[P,o(l).length?(e(),s("tbody",S,[(e(!0),s(h,null,v(o(l),(a,y)=>(e(),s("tr",{key:y},[t("td",null,c(a.name),1),t("td",null,c(a.type),1),t("td",null,c(new Date(a.created_at).toDateString()),1),t("td",null,[n(r,{href:d.route("admin.tradeables.edit",a.id),class:"btn btn-outline-primary btn-sm"},{default:i(()=>[j]),_:2},1032,["href"]),n(r,{method:"delete",href:d.route("admin.tradeables.destroy",a.id),class:"btn btn-outline-danger btn-sm",as:"button"},{default:i(()=>[F]),_:2},1032,["href"])])]))),128))])):(e(),s("tbody",H,T))])]),o(l).length?(e(),s("div",E,[n(g,{links:o(f)},null,8,["links"])])):x("",!0)])])],64)}}};export{J as default};