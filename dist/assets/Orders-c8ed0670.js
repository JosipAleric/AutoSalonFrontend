import{_ as i,c as m,d as _,e as n,f as r,j as x,F as f,v as u,h as e,t as o,g as h}from"./index-0fa9f700.js";import{_ as p}from"./mclaren765-aa6e67ee.js";const g={data(){return{status:"",length:null,orders:[]}},methods:{getOrders(){m.get("/api/order",{}).then(s=>{console.log(s.data),this.orders=s.data}).catch(s=>{console.log(s)})},formatDate(s){return s=new Date(s),s.toISOString().split("T")[0]}},mounted(){this.getOrders(),console.log(this.orders)}},b={class:"card border-blue-100 mx-2 md:mx-3 lg:mx-6 xl:mx-8"},v={key:0,class:"flex flex-row mb-5 justify-content-center"},w=e("span",{class:"font-medium text-4xl"},"You don't have any orders",-1),y=[w],D={class:"flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center"},O=e("span",{class:"text-2xl font-medium text-900"},"Thanks for your order!",-1),k={class:"flex mt-3 sm:mt-0"},B={class:"flex flex-column align-items-center"},j=e("span",{class:"text-900 font-medium mb-2"},"Order ID",-1),P={class:"text-700"},V={class:"flex flex-column align-items-center ml-6 md:ml-8"},N=e("span",{class:"text-900 font-medium mb-2"},"Order Date",-1),S={class:"text-700"},C={class:"flex flex-column md:flex-row md:align-items-center border-bottom-1 surface-border py-5"},F=e("img",{src:p,class:"w-15rem flex-shrink-0 md:mr-6"},null,-1),I={class:"flex-auto mt-3 md:mt-0"},T={class:"text-xl text-900"},$={class:"font-medium text-2xl text-900 mt-3 mb-5"},A={class:"border-round overflow-hidden surface-300 mb-3",style:{height:"7px"}},E={class:"flex w-full justify-content-between"},L=e("span",{class:"text-900 font-medium text-xs sm:text-base"},"Ordered",-1),Y=e("span",{class:"text-900 font-medium text-xs sm:text-base"},"Pending",-1),q={class:"text-900 font-medium text-xs sm:text-base"};function z(s,G,H,J,d,c){const l=_("ProgressBar");return n(),r("div",b,[this.orders.orders==0?(n(),r("div",v,y)):x("",!0),(n(!0),r(f,null,u(d.orders.orders,(t,a)=>(n(),r("div",{class:"card border-blue-100 mx-0 lg:mx-4",key:t},[e("div",D,[O,e("div",k,[e("div",B,[j,e("span",P,o(t.id),1)]),e("div",V,[N,e("span",S,o(c.formatDate(t.created_at)),1)])])]),e("div",C,[F,e("div",I,[e("span",T,o(this.orders.cars[a].brand)+" "+o(this.orders.cars[a].model),1),e("div",$,"Order "+o(t.order_status),1),e("div",A,[h(l,{value:t.order_status=="Pending"?50:100,showValue:!1},null,8,["value"])]),e("div",E,[L,Y,e("span",q,o(t.order_status=="Declined"?"Declined":"Accepted"),1)])])])]))),128))])}const Q=i(g,[["render",z]]);export{Q as default};
