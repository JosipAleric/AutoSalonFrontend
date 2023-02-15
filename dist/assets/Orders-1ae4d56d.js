import{_ as i,c as m,d as _,e as r,f as n,j as x,F as h,v as u,h as e,t as o,g as f}from"./index-63959268.js";const p={data(){return{status:"",length:null,orders:[]}},methods:{getOrders(){m.get("/api/order",{}).then(s=>{console.log(s.data),this.orders=s.data}).catch(s=>{console.log(s)})},formatDate(s){return s=new Date(s),s.toISOString().split("T")[0]}},mounted(){this.getOrders(),console.log(this.orders)}},g={class:"card border-blue-100 mx-2 md:mx-3 lg:mx-6 xl:mx-8"},b={key:0,class:"flex flex-row mb-5 justify-content-center"},v=e("span",{class:"font-medium text-4xl"},"You don't have any orders",-1),w=[v],y={class:"flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center"},D=e("span",{class:"text-2xl font-medium text-900"},"Thanks for your order!",-1),O={class:"flex mt-3 sm:mt-0"},k={class:"flex flex-column align-items-center"},B=e("span",{class:"text-900 font-medium mb-2"},"Order ID",-1),j={class:"text-700"},P={class:"flex flex-column align-items-center ml-6 md:ml-8"},V=e("span",{class:"text-900 font-medium mb-2"},"Order Date",-1),N={class:"text-700"},S={class:"flex flex-column md:flex-row md:align-items-center border-bottom-1 surface-border py-5"},C=["src"],F={class:"flex-auto mt-3 md:mt-0"},I={class:"text-xl text-900"},T={class:"font-medium text-2xl text-900 mt-3 mb-5"},$={class:"border-round overflow-hidden surface-300 mb-3",style:{height:"7px"}},z={class:"flex w-full justify-content-between"},A=e("span",{class:"text-900 font-medium text-xs sm:text-base"},"Ordered",-1),E=e("span",{class:"text-900 font-medium text-xs sm:text-base"},"Pending",-1),L={class:"text-900 font-medium text-xs sm:text-base"};function Y(s,q,G,H,d,c){const l=_("ProgressBar");return r(),n("div",g,[this.orders.orders==0?(r(),n("div",b,w)):x("",!0),(r(!0),n(h,null,u(d.orders.orders,(t,a)=>(r(),n("div",{class:"card border-blue-100 mx-0 lg:mx-4",key:t},[e("div",y,[D,e("div",O,[e("div",k,[B,e("span",j,o(t.id),1)]),e("div",P,[V,e("span",N,o(c.formatDate(t.created_at)),1)])])]),e("div",S,[e("img",{src:"http://pzi072023.studenti.sum.ba/backend/storage/"+this.orders.cars[a].image_path,class:"w-15rem flex-shrink-0 md:mr-6"},null,8,C),e("div",F,[e("span",I,o(this.orders.cars[a].brand)+" "+o(this.orders.cars[a].model),1),e("div",T,"Order "+o(t.order_status),1),e("div",$,[f(l,{value:t.order_status=="Pending"?50:100,showValue:!1},null,8,["value"])]),e("div",z,[A,E,e("span",L,o(t.order_status=="Declined"?"Declined":"Accepted"),1)])])])]))),128))])}const K=i(p,[["render",Y]]);export{K as default};