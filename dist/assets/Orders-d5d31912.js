import{_ as i,c as m,d as _,e as n,f as r,F as x,z as u,h as e,t as o,g as f,l as h}from"./index-393decc4.js";const p={data(){return{status:"",length:null,orders:[],cars:[]}},methods:{getOrders(){m.get("/api/order",{}).then(s=>{console.log(s.data),this.orders=s.data}).catch(s=>{console.log(s)})},formatDate(s){return s=new Date(s),s.toISOString().split("T")[0]}},mounted(){this.getOrders()}},g={class:"card border-blue-100 mx-2 md:mx-3 lg:mx-6 xl:mx-8"},b={class:"flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center"},v=e("span",{class:"text-2xl font-medium text-900"},"Thanks for your order!",-1),w={class:"flex mt-3 sm:mt-0"},D={class:"flex flex-column align-items-center"},O=e("span",{class:"text-900 font-medium mb-2"},"Order ID",-1),y={class:"text-700"},k={class:"flex flex-column align-items-center ml-6 md:ml-8"},B=e("span",{class:"text-900 font-medium mb-2"},"Order Date",-1),P={class:"text-700"},S={class:"flex flex-column md:flex-row md:align-items-center border-bottom-1 surface-border py-5"},V=e("img",{src:h,class:"w-15rem flex-shrink-0 md:mr-6"},null,-1),j={class:"flex-auto mt-3 md:mt-0"},F={class:"text-xl text-900"},I={class:"font-medium text-2xl text-900 mt-3 mb-5"},N={class:"border-round overflow-hidden surface-300 mb-3",style:{height:"7px"}},T={class:"flex w-full justify-content-between"},$=e("span",{class:"text-900 font-medium text-xs sm:text-base"},"Ordered",-1),z=e("span",{class:"text-900 font-medium text-xs sm:text-base"},"Pending",-1),A={class:"text-900 font-medium text-xs sm:text-base"};function C(s,E,L,q,d,c){const l=_("ProgressBar");return n(),r("div",g,[(n(!0),r(x,null,u(d.orders.orders,(t,a)=>(n(),r("div",{class:"card border-blue-100 mx-0 lg:mx-4",key:t},[e("div",b,[v,e("div",w,[e("div",D,[O,e("span",y,o(t.id),1)]),e("div",k,[B,e("span",P,o(c.formatDate(t.created_at)),1)])])]),e("div",S,[V,e("div",j,[e("span",F,o(this.orders.cars[a].brand)+" "+o(this.orders.cars[a].model),1),e("div",I,"Order "+o(t.order_status),1),e("div",N,[f(l,{value:t.order_status=="Pending"?50:100,showValue:!1},null,8,["value"])]),e("div",T,[$,z,e("span",A,o(t.order_status=="Declined"?"Declined":"Accepted"),1)])])])]))),128))])}const H=i(p,[["render",C]]);export{H as default};