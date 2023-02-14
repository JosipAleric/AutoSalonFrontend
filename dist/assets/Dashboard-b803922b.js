import{_ as G,c as V,d as c,e as u,f as m,h as t,t as b,g as a,w as i,i as _,n as ae,b as Q,a as se,r as $,q as W,o as X,s as Z,j as v,v as P,l as ee,F as le,m as F}from"./index-0e1e4b45.js";const oe={data(){return{users:[]}},methods:{getAllUsers(){V.get("/api/auth/users",{headers:{"Content-Type":"application/json"}}).then(f=>{this.users=f.data}).catch(f=>{console.log(f),f.response.status==403?this.$router.push("/"):f.response.status==401&&this.$router.push("/pages/auth/login")})}},mounted(){this.getAllUsers()}},ie={class:"surface-ground"},re=t("div",{class:"flex flex-row mb-5 justify-content-center"},[t("span",{class:"font-medium text-4xl"},"Dashboard")],-1),de={class:"grid"},ne={class:"col-12 md:col-6 xl:col-3 p-3"},ue={class:"p-3 text-center bg-blue-400 border-round"},ce=t("span",{class:"inline-flex justify-content-center align-items-center bg-blue-500 border-circle mb-3 p-3"},[t("i",{class:"pi pi-user text-xl text-white"})],-1),me={class:"text-2xl font-medium text-white mb-2"},pe=t("span",{class:"text-blue-100 font-medium"},"Users",-1),ve=ae('<div class="col-12 md:col-6 xl:col-3 p-3"><div class="p-3 text-center bg-purple-500 border-round"><span class="inline-flex justify-content-center align-items-center bg-purple-600 border-circle mb-3 p-3"><i class="pi pi-car text-xl text-white"></i></span><div class="text-2xl font-medium text-white mb-2">12</div><span class="text-blue-100 font-medium">Cars</span></div></div><div class="col-12 md:col-6 xl:col-3 p-3"><div class="p-3 text-center bg-indigo-500 border-round"><span class="inline-flex justify-content-center align-items-center bg-indigo-600 border-circle mb-3 p-3"><i class="pi pi-wallet text-xl text-white"></i></span><div class="text-2xl font-medium text-white mb-2">5</div><span class="text-blue-100 font-medium">Orders</span></div></div><div class="col-12 md:col-6 xl:col-3 p-3"><div class="p-3 text-center bg-cyan-500 border-round"><span class="inline-flex justify-content-center align-items-center bg-cyan-600 border-circle mb-3 p-3"><i class="pi pi-inbox text-xl text-white"></i></span><div class="text-2xl font-medium text-white mb-2">123</div><span class="text-blue-100 font-medium">Messages</span></div></div>',3),_e={class:"card border-blue-100 mt-7"},fe=t("div",{class:"flex flex-row mb-5 justify-content-center"},[t("span",{class:"font-medium text-3xl"},"Customers")],-1);function he(f,d,U,g,y,e){const h=c("Column"),k=c("Button"),r=c("DataTable");return u(),m("div",ie,[re,t("div",de,[t("div",ne,[t("div",ue,[ce,t("div",me,b(this.users.length),1),pe])]),ve]),t("div",_e,[fe,a(r,{value:y.users,paginator:!0,rows:5,rowHover:!0,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25,50],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} entries",responsiveLayout:"stack"},{empty:i(()=>[_(" No Data found. Please try again later! ")]),loading:i(()=>[_(" Loading records, please wait... ")]),default:i(()=>[a(h,{field:"id",header:"Id",sortable:!0}),a(h,{field:"first_name",header:"First Name",sortable:!0}),a(h,{field:"last_name",header:"Last Name",sortable:!0}),a(h,{field:"username",header:"Username",sortable:!0}),a(h,{field:"email",header:"Email",sortable:!0}),a(h,{field:"is_admin",header:"Is Admin",sortable:!0}),a(h,{field:"birthday",header:"Date Of Birth",sortable:!0}),a(h,{header:"Options"},{body:i(()=>[a(k,{type:"button",icon:"pi pi-cog",class:"p-button-primary"})]),_:1})]),_:1},8,["value"])])])}const be=G(oe,[["render",he]]),ye={class:"grid"},ge={class:"col-12"},we={class:"my-2 flex"},xe={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},$e=t("h5",{class:"m-0"},"All Cars",-1),ke={class:"block mt-2 md:mt-0 p-input-icon-left"},Pe=t("i",{class:"pi pi-search"},null,-1),Ve=t("span",{class:"p-column-title"},"Id",-1),Ce=t("span",{class:"p-column-title"},"Brand",-1),Ue=t("span",{class:"p-column-title"},"Model",-1),Se=t("template",null,[t("span",{class:"p-column-title"},"Image"),t("img",{src:ee,class:"shadow-2",width:"100"})],-1),De=t("span",{class:"p-column-title"},"Price",-1),Me=t("span",{class:"p-column-title"},"Engine",-1),Te=t("span",{class:"p-column-title"},"Power",-1),Le=t("span",{class:"p-column-title"},"Year",-1),Oe={key:0,src:ee,width:"150",class:"mt-0 mx-auto mb-5 block shadow-2"},Ne={class:"field"},Ie=t("label",{for:"brand"},"Brand",-1),qe={key:0,class:"p-invalid"},Be={class:"field"},Fe=t("label",{for:"model"},"Model",-1),Ee={key:0,class:"p-invalid"},Ae={class:"field"},Re=t("label",{for:"year"},"Year",-1),je={key:0,class:"p-invalid"},Ye={class:"field"},ze=t("label",{for:"drivetrain"},"Drivetrain",-1),He={key:0,class:"p-invalid"},Ke={class:"field"},Ge=t("label",{class:"mb-3"},"Fuel Type",-1),Je={class:"formgrid grid"},Qe={class:"field-radiobutton col-6"},We=t("label",{for:"petrol"},"Petrol",-1),Xe={class:"field-radiobutton col-6"},Ze=t("label",{for:"diesel"},"Diesel",-1),et={class:"field-radiobutton col-6"},tt=t("label",{for:"hybrid"},"Hybrid",-1),at={class:"field-radiobutton col-6"},st=t("label",{for:"electric"},"Electric",-1),lt={class:"field"},ot=t("label",{class:"mb-3"},"Inventory Status",-1),it={class:"formgrid grid"},rt={class:"field-radiobutton col-6"},dt=t("label",{for:"1"},"In Stock",-1),nt={class:"field-radiobutton col-6"},ut=t("label",{for:"0"},"Out Of Stock",-1),ct={class:"formgrid grid"},mt={class:"field col"},pt=t("label",{for:"price"},"Price",-1),vt={key:0,class:"p-invalid"},_t={class:"field col"},ft=t("label",{for:"mileage"},"Mileage",-1),ht={class:"formgrid grid"},bt={class:"field col"},yt=t("label",{for:"engine"},"Engine",-1),gt={key:0,class:"p-invalid"},wt={class:"field col"},xt=t("label",{for:"power"},"Power",-1),$t={key:0,class:"p-invalid"},kt={class:"flex align-items-center justify-content-center"},Pt=t("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),Vt={key:0},Ct={__name:"Cars",setup(f){const d=Q();se();const U=$([]),g=$(!1),y=$(!1),e=$({}),h=$(null),k=$({}),r=$(!1),T=$(),D=$();W(()=>{z()}),X(async()=>{O()});const E=p=>p.toLocaleString("en-US",{style:"currency",currency:"USD"}),A=()=>{e.value={},r.value=!1,g.value=!0},R=()=>{g.value=!1,r.value=!1},j=()=>{r.value=!0,e.value.brand&&e.value.brand.trim()&&e.value.price&&(e.value.id?n():x(),g.value=!1,e.value={})},L=p=>{e.value={...p},console.log(e),g.value=!0},Y=p=>{e.value=p,y.value=!0},z=()=>{k.value={global:{value:null,matchMode:Z.CONTAINS}}},O=async()=>{const p=await V.get("/api/cars");U.value=p.data},x=async()=>{try{await V.post("/api/cars",{brand:e.value.brand,model:e.value.model,price:e.value.price,year:e.value.year,mileage:e.value.mileage,drivetrain:e.value.drivetrain,fuel_type:e.value.fuel_type,power:e.value.power,engine:e.value.engine,inventory_status:e.value.inventory_status,image_path:D.value}).then(p=>{console.log(p.data)}),d.add({severity:"success",summary:"Successful",detail:"Product added sucessfully",life:3e3}),O()}catch(p){p.response.status==422||p.response.status==500?d.add({severity:"error",summary:"Error Message",detail:"Provided credidentials are incorret!",life:3e3}):d.add({severity:"error",summary:"Error Message",detail:"Something went wrong. Please try again later!",life:3e3})}},n=async()=>{console.log("Product: "+e.value.inventory_status);try{await V.put("/api/cars/"+e.value.id,{brand:e.value.brand,model:e.value.model,price:e.value.price,year:e.value.year,mileage:e.value.mileage,drivetrain:e.value.drivetrain,fuel_type:e.value.fuel_type,power:e.value.power,inventory_status:e.value.inventory_status,engine:e.value.engine}).then(p=>{console.log(p.data)}),d.add({severity:"success",summary:"Successful",detail:"Product updated sucessfully",life:3e3}),O()}catch(p){p.response.status==422||p.response.status==500?d.add({severity:"error",summary:"Error Message",detail:"Provided credidentials are incorret!",life:3e3}):d.add({severity:"error",summary:"Error Message",detail:"Something went wrong. Please try again later!",life:3e3})}},H=async()=>{try{await V.delete("/api/cars/"+e.value.id),y.value=!1,e.value={},d.add({severity:"success",summary:"Success Message",detail:"Car deleted sucesfully!",life:3e3}),O()}catch{d.add({severity:"error",summary:"Error Message",detail:"Something went wrong. Please try again later!",life:3e3})}},S=p=>{T.value=p.target.__vueParentComponent.data.files[0];const o=new FormData;o.set("image",T.value),V.post("/api/picture",o).then(C=>{D.value=C.data})};return(p,o)=>{const C=c("Toast"),w=c("Button"),I=c("FileUpload"),q=c("Toolbar"),M=c("InputText"),s=c("Column"),K=c("DataTable"),B=c("InputNumber"),N=c("RadioButton"),J=c("Dialog");return u(),m("div",ye,[t("div",ge,[a(C),a(q,{class:"mb-4"},{start:i(()=>[t("div",we,[a(w,{label:"New",icon:"pi pi-plus",class:"p-button-primary mr-2",onClick:A}),a(I,{mode:"basic",accept:"image/*",maxFileSize:1e6,label:"Upload",chooseLabel:"Upload",class:"ml-2 p-button-help",onChange:S})])]),_:1}),a(K,{ref_key:"dt",ref:h,value:U.value,dataKey:"id",paginator:!0,rows:10,filters:k.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:i(()=>[t("div",xe,[$e,t("span",ke,[Pe,a(M,{modelValue:k.value.global.value,"onUpdate:modelValue":o[0]||(o[0]=l=>k.value.global.value=l),placeholder:"Search..."},null,8,["modelValue"])])])]),default:i(()=>[a(s,{selectionMode:"multiple",headerStyle:"width: 3rem"}),a(s,{field:"id",header:"Id",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:i(l=>[Ve,_(" "+b(l.data.id),1)]),_:1}),a(s,{field:"brand",header:"Brand",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:i(l=>[Ce,_(" "+b(l.data.brand),1)]),_:1}),a(s,{field:"model",header:"Model",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:i(l=>[Ue,_(" "+b(l.data.model),1)]),_:1}),a(s,{header:"Image",headerStyle:"width:14%; min-width:10rem;"},{default:i(()=>[Se]),_:1}),a(s,{field:"price",header:"Price",sortable:!0,headerStyle:"width:14%; min-width:8rem;"},{body:i(l=>[De,_(" "+b(E(l.data.price)),1)]),_:1}),a(s,{field:"engine",header:"Engine",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:i(l=>[Me,_(" "+b(l.data.engine),1)]),_:1}),a(s,{field:"power",header:"Power",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:i(l=>[Te,_(" "+b(l.data.power)+" HP ",1)]),_:1}),a(s,{field:"year",header:"Year",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:i(l=>[Le,_(" "+b(l.data.year),1)]),_:1}),a(s,{headerStyle:"min-width:10rem;"},{body:i(l=>[a(w,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:te=>L(l.data)},null,8,["onClick"]),a(w,{icon:"pi pi-trash",class:"p-button-rounded p-button-danger mt-2",onClick:te=>Y(l.data)},null,8,["onClick"])]),_:1})]),_:1},8,["value","filters"]),a(J,{visible:g.value,"onUpdate:visible":o[15]||(o[15]=l=>g.value=l),style:{width:"450px"},header:"Car Details",modal:!0,class:"p-fluid"},{footer:i(()=>[a(w,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:R}),a(w,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:j})]),default:i(()=>[e.value.image_path?(u(),m("img",Oe)):v("",!0),t("div",Ne,[Ie,a(M,{id:"brand",modelValue:e.value.brand,"onUpdate:modelValue":o[1]||(o[1]=l=>e.value.brand=l),modelModifiers:{trim:!0},required:"true",autofocus:"",class:P({"p-invalid":r.value&&!e.value.brand})},null,8,["modelValue","class"]),r.value&&!e.value.brand?(u(),m("small",qe,"Name is required.")):v("",!0)]),t("div",Be,[Fe,a(M,{id:"model",modelValue:e.value.model,"onUpdate:modelValue":o[2]||(o[2]=l=>e.value.model=l),modelModifiers:{trim:!0},required:"true",autofocus:"",class:P({"p-invalid":r.value&&!e.value.model})},null,8,["modelValue","class"]),r.value&&!e.value.model?(u(),m("small",Ee,"Model is required.")):v("",!0)]),t("div",Ae,[Re,a(B,{id:"year",modelValue:e.value.year,"onUpdate:modelValue":o[3]||(o[3]=l=>e.value.year=l),class:P({"p-invalid":r.value&&!e.value.year}),required:!0,mode:"decimal",useGrouping:!1},null,8,["modelValue","class"]),r.value&&!e.value.year?(u(),m("small",je,"Year is required.")):v("",!0)]),t("div",Ye,[ze,a(M,{id:"drivetrain",modelValue:e.value.drivetrain,"onUpdate:modelValue":o[4]||(o[4]=l=>e.value.drivetrain=l),class:P({"p-invalid":r.value&&!e.value.drivetrain}),required:!0},null,8,["modelValue","class"]),r.value&&!e.value.drivetrain?(u(),m("small",He,"Drivetrain is required.")):v("",!0)]),t("div",Ke,[Ge,t("div",Je,[t("div",Qe,[a(N,{id:"petrol",value:"Petrol",modelValue:e.value.fuel_type,"onUpdate:modelValue":o[5]||(o[5]=l=>e.value.fuel_type=l)},null,8,["modelValue"]),We]),t("div",Xe,[a(N,{id:"diesel",value:"Diesel",modelValue:e.value.fuel_type,"onUpdate:modelValue":o[6]||(o[6]=l=>e.value.fuel_type=l)},null,8,["modelValue"]),Ze]),t("div",et,[a(N,{id:"hybrid",value:"Hybrid",modelValue:e.value.fuel_type,"onUpdate:modelValue":o[7]||(o[7]=l=>e.value.fuel_type=l)},null,8,["modelValue"]),tt]),t("div",at,[a(N,{id:"electric",value:"Electric",modelValue:e.value.fuel_type,"onUpdate:modelValue":o[8]||(o[8]=l=>e.value.fuel_type=l)},null,8,["modelValue"]),st])])]),t("div",lt,[ot,t("div",it,[t("div",rt,[a(N,{id:"1",value:1,modelValue:e.value.inventory_status,"onUpdate:modelValue":o[9]||(o[9]=l=>e.value.inventory_status=l)},null,8,["modelValue"]),dt]),t("div",nt,[a(N,{id:"0",value:0,modelValue:e.value.inventory_status,"onUpdate:modelValue":o[10]||(o[10]=l=>e.value.inventory_status=l)},null,8,["modelValue"]),ut])])]),t("div",ct,[t("div",mt,[pt,a(B,{id:"price",modelValue:e.value.price,"onUpdate:modelValue":o[11]||(o[11]=l=>e.value.price=l),prefix:"$",class:P({"p-invalid":r.value&&!e.value.price}),required:!0,mode:"decimal",useGrouping:!1},null,8,["modelValue","class"]),r.value&&!e.value.price?(u(),m("small",vt,"Price is required.")):v("",!0)]),t("div",_t,[ft,a(B,{id:"mileage",modelValue:e.value.mileage,"onUpdate:modelValue":o[12]||(o[12]=l=>e.value.mileage=l),integeronly:"",suffix:" KM",mode:"decimal",useGrouping:!1},null,8,["modelValue"])])]),t("div",ht,[t("div",bt,[yt,a(M,{id:"engine",modelValue:e.value.engine,"onUpdate:modelValue":o[13]||(o[13]=l=>e.value.engine=l),class:P({"p-invalid":r.value&&!e.value.engine}),required:!0},null,8,["modelValue","class"]),r.value&&!e.value.engine?(u(),m("small",gt,"Engine is required.")):v("",!0)]),t("div",wt,[xt,a(B,{id:"power",modelValue:e.value.power,"onUpdate:modelValue":o[14]||(o[14]=l=>e.value.power=l),class:P({"p-invalid":r.value&&!e.value.power}),required:!0,suffix:" HP"},null,8,["modelValue","class"]),r.value&&!e.value.power?(u(),m("small",$t,"Power is required.")):v("",!0)])]),a(I,{mode:"basic",accept:"image/*",maxFileSize:1e6,label:"Upload",chooseLabel:"Upload Image",class:"mt-2 p-button-primary",onChange:S})]),_:1},8,["visible"]),a(J,{visible:y.value,"onUpdate:visible":o[17]||(o[17]=l=>y.value=l),style:{width:"450px"},header:"Confirm",modal:!0},{footer:i(()=>[a(w,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:o[16]||(o[16]=l=>y.value=!1)}),a(w,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:H})]),default:i(()=>[t("div",kt,[Pt,e.value?(u(),m("span",Vt,[_("Are you sure you want to delete "),t("b",null,b(e.value.brand)+" "+b(e.value.model)+" with ID of "+b(e.value.id),1),_("?")])):v("",!0)])]),_:1},8,["visible"])])])}}},Ut={class:"grid"},St={class:"col-12"},Dt={class:"my-2 flex"},Mt={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},Tt=t("h5",{class:"m-0"},"All Users",-1),Lt={class:"block mt-2 md:mt-0 p-input-icon-left"},Ot=t("i",{class:"pi pi-search"},null,-1),Nt=t("span",{class:"p-column-title"},"Id",-1),It=t("span",{class:"p-column-title"},"First Name",-1),qt=t("span",{class:"p-column-title"},"Last Name",-1),Bt=t("span",{class:"p-column-title"},"Username",-1),Ft=t("span",{class:"p-column-title"},"Email",-1),Et=t("span",{class:"p-column-title"},"Is Admin",-1),At=t("span",{class:"p-column-title"},"Birthday",-1),Rt={class:"field"},jt={class:"first_name"},Yt=t("label",{for:"first_name"},"First Name",-1),zt={key:0,class:"p-invalid"},Ht={class:"field"},Kt={class:"last_name"},Gt=t("label",{for:"last_name"},"Last Name",-1),Jt={key:0,class:"p-invalid"},Qt={class:"field"},Wt={class:"email"},Xt=t("label",{for:"email"},"Email",-1),Zt={key:0,class:"p-invalid"},ea={class:"field"},ta={class:"username"},aa=t("label",{for:"username"},"Username",-1),sa={key:0,class:"p-invalid"},la={key:0,class:"field"},oa={class:"password"},ia=t("label",{for:"password"},"Password",-1),ra={key:0,class:"p-invalid"},da={key:1,class:"field"},na={class:"password_confirmation"},ua=t("label",{for:"password_confirmation"},"Password Confirmation",-1),ca={key:0,class:"p-invalid"},ma={class:"field"},pa=t("label",{class:"mb-3"},"Is Admin",-1),va={class:"formgrid grid"},_a={class:"field-radiobutton col-6"},fa=t("label",{for:"1"},"True",-1),ha={class:"field-radiobutton col-6"},ba=t("label",{for:"0"},"False",-1),ya={class:"field"},ga={class:"birthday"},wa=t("label",{for:"birthday"},"Birthday",-1),xa={key:0,class:"p-invalid"},$a={class:"flex align-items-center justify-content-center"},ka=t("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),Pa={key:0},Va={__name:"Users",setup(f){const d=Q(),U=$([]),g=$(!1),y=$(!1),e=$({}),h=$(null),k=$({}),r=$(!1);W(()=>{j()}),X(async()=>{L()});const T=()=>{e.value={},r.value=!1,g.value=!0},D=()=>{g.value=!1,r.value=!1},E=()=>{r.value=!0,e.value.first_name&&e.value.first_name.trim()&&e.value.last_name&&(e.value.id?z():Y(),g.value=!1,e.value={})},A=x=>{e.value={...x},console.log(e),g.value=!0},R=x=>{e.value=x,y.value=!0},j=()=>{k.value={global:{value:null,matchMode:Z.CONTAINS}}},L=async()=>{const x=await V.get("/api/auth/users");U.value=x.data,console.log(U.value)},Y=async()=>{try{await V.post("/api/auth/register",{email:e.value.email,password:e.value.password,first_name:e.value.first_name,last_name:e.value.last_name,username:e.value.username,birthday:e.value.birthday,password_confirmation:e.value.password_confirmation,is_admin:e.value.is_admin}),d.add({severity:"success",summary:"Successful",detail:"User added sucessfully",life:3e3}),L()}catch(x){x.response.status==422||x.response.status==500?d.add({severity:"error",summary:"Error Message",detail:"Provided credidentials are incorret!",life:3e3}):d.add({severity:"error",summary:"Error Message",detail:"Something went wrong. Please try again later!",life:3e3})}},z=async()=>{try{await V.put("/api/auth/users/"+e.value.id,{email:e.value.email,first_name:e.value.first_name,last_name:e.value.last_name,username:e.value.username,birthday:e.value.birthday,is_admin:e.value.is_admin}),d.add({severity:"success",summary:"Successful",detail:"User updated sucessfully",life:3e3}),L()}catch(x){x.response.status==422||x.response.status==500?d.add({severity:"error",summary:"Error Message",detail:"Provided credidentials are incorret!",life:3e3}):d.add({severity:"error",summary:"Error Message",detail:"Something went wrong. Please try again later!",life:3e3})}},O=async()=>{try{await V.delete("/api/auth/users/"+e.value.id,{withCredentials:!1}),y.value=!1,e.value={},d.add({severity:"success",summary:"Success Message",detail:"User deleted sucesfully!",life:3e3}),L()}catch{d.add({severity:"error",summary:"Error Message",detail:"Something went wrong. Please try again later!",life:3e3})}};return(x,n)=>{const H=c("Toast"),S=c("Button"),p=c("FileUpload"),o=c("Toolbar"),C=c("InputText"),w=c("Column"),I=c("DataTable"),q=c("RadioButton"),M=c("Dialog");return u(),m("div",Ut,[t("div",St,[a(H),a(o,{class:"mb-4"},{start:i(()=>[t("div",Dt,[a(S,{label:"New",icon:"pi pi-plus",class:"p-button-primary mr-2",onClick:T}),a(p,{mode:"basic",accept:"image/*",maxFileSize:1e6,label:"Upload",chooseLabel:"Upload",class:"ml-2 p-button-help",onChange:x.handleUpload},null,8,["onChange"])])]),_:1}),a(I,{ref_key:"dt",ref:h,value:U.value,dataKey:"id",paginator:!0,rows:10,filters:k.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} users",responsiveLayout:"scroll"},{header:i(()=>[t("div",Mt,[Tt,t("span",Lt,[Ot,a(C,{modelValue:k.value.global.value,"onUpdate:modelValue":n[0]||(n[0]=s=>k.value.global.value=s),placeholder:"Search..."},null,8,["modelValue"])])])]),default:i(()=>[a(w,{selectionMode:"multiple",headerStyle:"width: 3rem"}),a(w,{field:"id",header:"Id",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:i(s=>[Nt,_(" "+b(s.data.id),1)]),_:1}),a(w,{field:"first_name",header:"First Name",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:i(s=>[It,_(" "+b(s.data.first_name),1)]),_:1}),a(w,{field:"last_name",header:"Last Name",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:i(s=>[qt,_(" "+b(s.data.last_name),1)]),_:1}),a(w,{field:"username",header:"Username",sortable:!0,headerStyle:"width:14%; min-width:8rem;"},{body:i(s=>[Bt,_(" "+b(s.data.username),1)]),_:1}),a(w,{field:"email",header:"Email",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:i(s=>[Ft,_(" "+b(s.data.email),1)]),_:1}),a(w,{field:"is_admin",header:"Is Admin",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:i(s=>[Et,_(" "+b(s.data.is_admin),1)]),_:1}),a(w,{field:"birthday",header:"Birthday",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:i(s=>[At,_(" "+b(s.data.birthday),1)]),_:1}),a(w,{headerStyle:"min-width:10rem;"},{body:i(s=>[a(S,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:K=>A(s.data)},null,8,["onClick"]),a(S,{icon:"pi pi-trash",class:"p-button-rounded p-button-danger mt-2",onClick:K=>R(s.data)},null,8,["onClick"])]),_:1})]),_:1},8,["value","filters"]),a(M,{visible:g.value,"onUpdate:visible":n[10]||(n[10]=s=>g.value=s),style:{width:"450px"},header:"User Details",modal:!0,class:"p-fluid"},{footer:i(()=>[a(S,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:D}),a(S,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:E})]),default:i(()=>[t("div",Rt,[t("div",jt,[Yt,a(C,{id:"first_name",modelValue:e.value.first_name,"onUpdate:modelValue":n[1]||(n[1]=s=>e.value.first_name=s),modelModifiers:{trim:!0},required:"true",autofocus:"",class:P({"p-invalid":r.value&&!e.value.first_name})},null,8,["modelValue","class"]),r.value&&!e.value.first_name?(u(),m("small",zt,"First Name is required.")):v("",!0)])]),t("div",Ht,[t("div",Kt,[Gt,a(C,{id:"last_name",modelValue:e.value.last_name,"onUpdate:modelValue":n[2]||(n[2]=s=>e.value.last_name=s),modelModifiers:{trim:!0},required:"true",autofocus:"",class:P({"p-invalid":r.value&&!e.value.last_name})},null,8,["modelValue","class"]),r.value&&!e.value.last_name?(u(),m("small",Jt,"Last Name is required.")):v("",!0)])]),t("div",Qt,[t("div",Wt,[Xt,a(C,{id:"email",modelValue:e.value.email,"onUpdate:modelValue":n[3]||(n[3]=s=>e.value.email=s),modelModifiers:{trim:!0},required:"true",autofocus:"",class:P({"p-invalid":r.value&&!e.value.email})},null,8,["modelValue","class"]),r.value&&!e.value.email?(u(),m("small",Zt,"Email is required.")):v("",!0)])]),t("div",ea,[t("div",ta,[aa,a(C,{id:"username",modelValue:e.value.username,"onUpdate:modelValue":n[4]||(n[4]=s=>e.value.username=s),modelModifiers:{trim:!0},required:"true",autofocus:"",class:P({"p-invalid":r.value&&!e.value.username})},null,8,["modelValue","class"]),r.value&&!e.value.username?(u(),m("small",sa,"Username is required.")):v("",!0)])]),e.value.id?v("",!0):(u(),m("div",la,[t("div",oa,[ia,a(C,{id:"password",modelValue:e.value.password,"onUpdate:modelValue":n[5]||(n[5]=s=>e.value.password=s),modelModifiers:{trim:!0},required:"true",autofocus:"",class:P({"p-invalid":r.value&&!e.value.password})},null,8,["modelValue","class"]),r.value&&!e.value.password?(u(),m("small",ra,"Password is required.")):v("",!0)])])),e.value.id?v("",!0):(u(),m("div",da,[t("div",na,[ua,a(C,{id:"password_confirmation",modelValue:e.value.password_confirmation,"onUpdate:modelValue":n[6]||(n[6]=s=>e.value.password_confirmation=s),modelModifiers:{trim:!0},required:"true",autofocus:"",class:P({"p-invalid":r.value&&!e.value.password_confirmation})},null,8,["modelValue","class"]),r.value&&!e.value.password_confirmation?(u(),m("small",ca,"Password Confirmation is required.")):v("",!0)])])),t("div",ma,[pa,t("div",va,[t("div",_a,[a(q,{id:"1",value:1,modelValue:e.value.is_admin,"onUpdate:modelValue":n[7]||(n[7]=s=>e.value.is_admin=s)},null,8,["modelValue"]),fa]),t("div",ha,[a(q,{id:"0",value:0,modelValue:e.value.is_admin,"onUpdate:modelValue":n[8]||(n[8]=s=>e.value.is_admin=s)},null,8,["modelValue"]),ba])])]),t("div",ya,[t("div",ga,[wa,a(C,{id:"birthday",modelValue:e.value.birthday,"onUpdate:modelValue":n[9]||(n[9]=s=>e.value.birthday=s),modelModifiers:{trim:!0},required:"true",autofocus:"",class:P({"p-invalid":r.value&&!e.value.birthday}),placeholder:"YYYY-MM-DD"},null,8,["modelValue","class"]),r.value&&!e.value.birthday?(u(),m("small",xa,"Birthday is required.")):v("",!0)])])]),_:1},8,["visible"]),a(M,{visible:y.value,"onUpdate:visible":n[12]||(n[12]=s=>y.value=s),style:{width:"450px"},header:"Confirm",modal:!0},{footer:i(()=>[a(S,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:n[11]||(n[11]=s=>y.value=!1)}),a(S,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:O})]),default:i(()=>[t("div",$a,[ka,e.value?(u(),m("span",Pa,[_("Are you sure you want to delete "),t("b",null,b(e.value.first_name)+" "+b(e.value.last_name),1),_("?")])):v("",!0)])]),_:1},8,["visible"])])])}}},Ca={data(){return{orders:[],selectedOrder:null}},methods:{getAllOrders(){V.get("/api/orders",{headers:{"Content-Type":"application/json"}}).then(f=>{this.orders=f.data,console.log(this.orders)}).catch(f=>{console.log(f)})},acceptOrder(){V.put("/api/orders/"+this.selectedOrder.id,{order_status:"Accepted"}).catch(f=>{console.log(f)}),this.$toast.add({severity:"success",summary:"Success Message",detail:"Order Accepted",life:3e3})},declineOrder(){V.put("/api/orders/"+this.selectedOrder.id,{order_status:"Declined"}).catch(f=>{console.log(f)}),this.$toast.add({severity:"error",summary:"Message",detail:"Order Declined!",life:3e3})},deleteOrder(){V.delete("/api/orders/"+this.selectedOrder.id,{}).catch(f=>{console.log(f)}),this.$toast.add({severity:"error",summary:"Message",detail:"Order Deleted!",life:3e3}),this.getAllOrders()}},mounted(){this.getAllOrders()}},Ua={class:"surface-ground"},Sa={class:"card border-blue-100 mt-7"},Da=t("div",{class:"flex flex-row mb-5 justify-content-center"},[t("span",{class:"font-medium text-3xl"},"Orders")],-1);function Ma(f,d,U,g,y,e){const h=c("Column"),k=c("Button"),r=c("DataTable"),T=c("Toast");return u(),m(le,null,[t("div",Ua,[t("div",Sa,[Da,a(r,{value:y.orders,paginator:!0,rows:5,rowHover:!0,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25,50],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} entries",responsiveLayout:"stack",dataKey:"id",selection:y.selectedOrder,"onUpdate:selection":d[2]||(d[2]=D=>y.selectedOrder=D)},{empty:i(()=>[_(" No Data found. Please try again later! ")]),loading:i(()=>[_(" Loading records, please wait... ")]),default:i(()=>[a(h,{field:"id",header:"Order ID",sortable:!0}),a(h,{field:"user_id",header:"User ID",sortable:!0}),a(h,{field:"car_id",header:"Car ID",sortable:!0}),a(h,{field:"order_status",header:"Order Status",sortable:!0}),a(h,{selectionMode:"single",header:"Choose This Order"}),a(h,{header:"Options"},{body:i(()=>[a(k,{icon:"pi pi-check",class:"p-button-rounded p-button-success mr-2",onClick:d[0]||(d[0]=D=>e.acceptOrder())}),a(k,{icon:"pi pi-times",class:"p-button-rounded p-button-danger",onClick:d[1]||(d[1]=D=>e.declineOrder())})]),_:1}),a(h,{header:"Delete"},{body:i(()=>[a(k,{icon:"pi pi-trash",class:"p-button-rounded p-button-warning p-button-outlined",onClick:e.deleteOrder},null,8,["onClick"])]),_:1})]),_:1},8,["value","selection"])])]),a(T,{position:"top-right"})],64)}const Ta=G(Ca,[["render",Ma]]);const La={class:"m-2 md:m-5"},Oa={class:"card border-blue-100"},Na={class:"mt-5 mx-0 md:mx-3 lg:mx-5"},Ia={data(){return{active:0,items:[{label:"Dashboard",icon:"pi pi-fw pi-home"},{label:"Cars",icon:"pi pi-fw pi-car"},{label:"Users",icon:"pi pi-fw pi-user"},{label:"Orders",icon:"pi pi-fw pi-wallet"}]}},methods:{}},qa=Object.assign(Ia,{__name:"Dashboard",setup(f){return(d,U)=>{const g=c("TabMenu");return u(),m("div",La,[t("div",Oa,[a(g,{model:d.items,activeIndex:d.active,"onUpdate:activeIndex":U[0]||(U[0]=y=>d.active=y),class:"dark-panel"},null,8,["model","activeIndex"]),t("div",Na,[this.active==0?(u(),F(be,{key:0})):v("",!0),this.active==1?(u(),F(Ct,{key:1})):v("",!0),this.active==2?(u(),F(Va,{key:2})):v("",!0),this.active==3?(u(),F(Ta,{key:3})):v("",!0)])])])}}}),Fa=G(qa,[["__scopeId","data-v-da795d7b"]]);export{Fa as default};