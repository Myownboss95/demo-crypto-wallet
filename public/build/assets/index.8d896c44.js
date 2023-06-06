import{_ as j,a as F,b as O}from"./arrow-swap.7bbfef9e.js";import{_ as S}from"./shopping-cart.3ed6d2d2.js";import{o as v,f as E,c as a,T as R,p as m,E as f,G as x,z as k,a as r,b as d,d as h,u as _,Z as V,e as t,t as c,w as b,F as g,r as w,k as z,g as D,h as N}from"./main.2dcdc8d3.js";import{_ as T}from"./error.71f8f6d4.js";var M="/build/assets/nft-coming-soon.ba0bfc05.png";const I=t("span",{id:"copyResult"},null,-1),L={class:"section-lg-t-space"},A={class:"custom-container"},G={class:"wallet-profile"},W={style:{"font-size":"40px"}},Z=t("h5",{class:"mt-3",style:{"font-size":"15px",color:"#adb5bd"}},"Wallet Balance",-1),q={class:"section-t-space"},H={class:"custom-container"},J={class:"wallet-options d-flex align-items-center justify-content-center"},K={class:"category-slide"},P=t("li",null,[t("a",{style:{"background-color":"transparent"},"data-bs-toggle":"offcanvas","data-bs-target":"#choosecoin",class:"category-boxes"},[t("img",{style:{"background-color":"#0b65c6"},class:"img-fluid cat-img",src:j,alt:"send"}),t("h5",null,"Send")])],-1),Q=t("li",null,[t("a",{style:{"background-color":"transparent"},"data-bs-toggle":"offcanvas","data-bs-target":"#choosecoin",class:"category-boxes"},[t("img",{style:{"background-color":"#0b65c6"},class:"img-fluid cat-img",src:F,alt:"receive"}),t("h5",null,"Receive")])],-1),U=t("img",{style:{"background-color":"#0b65c6"},class:"img-fluid cat-img",src:S,alt:"buy"},null,-1),X=t("h5",null,"Buy",-1),Y=t("li",null,[t("a",{style:{"background-color":"transparent"},"data-bs-toggle":"modal","data-bs-target":"#swap",class:"category-boxes"},[t("img",{style:{"background-color":"#0b65c6"},class:"img-fluid cat-img",src:O,alt:"swap"}),t("h5",null,"Swap")])],-1),tt={class:"section-lg-t-space section-lg-b-space"},st={class:"custom-container"},et=t("div",{class:"category-detail-tab"},[t("ul",{class:"nav nav-tabs tab-style2",id:"myTab",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link active",id:"token-tab","data-bs-toggle":"tab","data-bs-target":"#token-tab-pane",type:"button",role:"tab"},"Tokens")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"nft-tab","data-bs-toggle":"tab","data-bs-target":"#nft-tab-pane",type:"button",role:"tab"},"NFTs")])])],-1),at={class:"tab-content",id:"myTabContent"},ot={class:"tab-pane fade show active",id:"token-tab-pane",role:"tabpanel",tabindex:"0"},nt={key:0,class:"token-box"},ct={class:"token-icon"},lt=["src"],it={style:{"margin-left":"20px"}},rt={class:"text-light"},dt={style:{color:"#adb5bd","margin-top":"5px"}},_t=t("span",{class:"text-success"},"+1.90%",-1),ht={class:"token-price"},pt={class:"text-light"},ut={style:{color:"#adb5bd","margin-top":"5px","text-align":"right"}},mt=t("div",{class:"tab-pane fade",id:"nft-tab-pane",role:"tabpanel",tabindex:"0"},[t("div",{style:{"margin-top":"-60px"},class:"empty-tab"},[t("img",{class:"img-fluid bell",style:{height:"150px",width:"150px"},src:M,alt:"coming soon"}),t("h3",null,"Coming Soon"),t("h4",null,"Store and exchange NFTs")])],-1),bt=t("section",{class:"panel-space"},null,-1),gt={class:"offcanvas theme-offcanvas share-offcanvas offcanvas-bottom px-4 pb-4 h-auto",tabindex:"-1",id:"choosecoin"},yt=t("div",{class:"offcanvas-header"},[t("div",{class:"header-panel"},[t("h3",{class:"text-white middle-title"},"Select Coin"),t("a",{class:"right-title","data-bs-dismiss":"offcanvas","aria-label":"Close"}," Done ")])],-1),vt={style:{"max-width":"700px",margin:"0 auto"},class:"offcanvas-body"},ft={class:"custom-container"},xt={class:"token-box"},kt={class:"token-icon"},wt=["src"],Nt={style:{"margin-left":"20px"}},Tt={class:"text-light"},Bt={style:{color:"#adb5bd","margin-top":"5px"}},Ct=t("span",{class:"text-success"},"+1.90%",-1),$t={class:"token-price"},jt={class:"text-light"},Ft={style:{color:"#adb5bd","margin-top":"5px","text-align":"right"}},Vt={name:"index",props:{userMainBalance:Number,userRefBalance:Number,userInvestedBalance:Number,withdrawals_count:Number,withdrawals:Object,deposits_count:Number,deposits:Object,num_buyTrades:Number,buyTrades:Object,num_sellTrades:Number,sellTrades:Object,trade_profits:Number,active_trades:Number,payment_methods:Object,featured:Object},setup(B){const e=B;v(()=>{E.replace()}),a(()=>e.userMainBalance),a(()=>e.userRefBalance),a(()=>e.userInvestedBalance),a(()=>e.withdrawals_count),a(()=>e.withdrawals),a(()=>e.deposits_count),a(()=>e.deposits),a(()=>e.featured),a(()=>e.num_buyTrades),a(()=>e.buyTrades),a(()=>e.num_sellTrades),a(()=>e.sellTrades),a(()=>e.trade_profits),a(()=>e.active_trades);const p=a(()=>e.payment_methods);a(()=>{let n={"":"Choose Coin"};return e.payment_methods.forEach(function(o){n[o.type]=o.type}),n});const y=R({name:"",amount:""});m(0),m(0),f({});const i=f([]);v(async()=>{e.payment_methods.forEach(async n=>{const{type:o}=n;try{const l=await x.get(`https://api.coingecko.com/api/v3/simple/price?ids=${o}&vs_currencies=usd`);if(l.status===200)i[o]=l.data[o.toLowerCase()].usd;else throw new T}catch{}})}),k(()=>y.amount,n=>{});let C=m(0);k(()=>y.name,n=>{x.get(route("user.get.roi",n)).then(o=>{if(o.status==200)C.value=o.data.data/100;else throw T()}).catch(o=>console.log(o))});const $=a(()=>{let n=0;return e.payment_methods.forEach(o=>{n+=i[o.type]*o.account}),n.toFixed(2)});return(n,o)=>{const l=D("inertia-link");return r(),d(g,null,[h(_(V),{title:"Dashboard"}),I,t("section",L,[t("div",A,[t("div",G,[t("h2",W,"$"+c(_($)),1),Z])])]),t("section",q,[t("div",H,[t("div",J,[t("ul",K,[P,Q,t("li",null,[h(l,{style:{"background-color":"transparent"},href:n.route("user.deposits.create"),class:"category-boxes"},{default:b(()=>[U,X]),_:1},8,["href"])]),Y])])])]),t("section",tt,[t("div",st,[et,t("div",at,[t("div",ot,[_(p).length?(r(),d("ul",nt,[(r(!0),d(g,null,w(_(p),(s,u)=>(r(),d("li",{key:u},[h(l,{href:n.route("user.wallet.show",s.payment_method_id),class:"token-details"},{default:b(()=>[t("div",ct,[t("img",{src:`/storage/payment_methods/${s.svg}`,alt:"",style:{height:"50px",width:"50px"}},null,8,lt)]),t("div",it,[t("h3",rt,c(s.type),1),t("h5",dt,[N("$"+c(i[s.type])+" ",1),_t])]),t("div",ht,[t("div",null,[t("h3",pt,c(s.account==="0.0000"?"0":s.account)+" "+c(s.symbol),1),t("h5",ut,"$"+c((i[s.type]*s.account).toFixed(2)),1)])])]),_:2},1032,["href"])]))),128))])):z("",!0)]),mt])])]),bt,t("div",gt,[yt,t("div",vt,[t("div",ft,[t("ul",xt,[(r(!0),d(g,null,w(_(p),(s,u)=>(r(),d("li",{key:u},[h(l,{href:n.route("user.wallet.show",s.payment_method_id),class:"token-details"},{default:b(()=>[t("div",kt,[t("img",{src:`/storage/payment_methods/${s.svg}`,alt:"",style:{height:"50px",width:"50px"}},null,8,wt)]),t("div",Nt,[t("h3",Tt,c(s.type),1),t("h5",Bt,[N("$"+c(i[s.type])+" ",1),Ct])]),t("div",$t,[t("div",null,[t("h3",jt,c(s.account==="0.0000"?"0":s.account)+" "+c(s.symbol),1),t("h5",Ft,"$"+c((i[s.type]*s.account).toFixed(2)),1)])])]),_:2},1032,["href"])]))),128))])])])])],64)}}};export{Vt as default};
