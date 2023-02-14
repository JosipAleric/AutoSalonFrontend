import{_ as J,c as V,d as c,e as u,f as m,h as t,t as y,g as a,w as i,i as f,n as se,b as W,a as le,r as $,q as X,o as Z,s as ee,j as _,v as P,l as te,F as oe,x as I,y as ie,m as E}from"./index-393decc4.js";const re={data(){return{users:[]}},methods:{getAllUsers(){V.get("/api/auth/users",{headers:{"Content-Type":"application/json"}}).then(h=>{this.users=h.data}).catch(h=>{console.log(h),h.response.status==403?this.$router.push("/"):h.response.status==401&&this.$router.push("/pages/auth/login")})}},mounted(){this.getAllUsers()}},de={class:"surface-ground"},ne=t("div",{class:"flex flex-row mb-5 justify-content-center"},[t("span",{class:"font-medium text-4xl"},"Dashboard")],-1),ue={class:"grid"},ce={class:"col-12 md:col-6 xl:col-3 p-3"},me={class:"p-3 text-center bg-blue-400 border-round"},pe=t("span",{class:"inline-flex justify-content-center align-items-center bg-blue-500 border-circle mb-3 p-3"},[t("i",{class:"pi pi-user text-xl text-white"})],-1),ve={class:"text-2xl font-medium text-white mb-2"},_e=t("span",{class:"text-blue-100 font-medium"},"Users",-1),fe=se('<div class="col-12 md:col-6 xl:col-3 p-3"><div class="p-3 text-center bg-purple-500 border-round"><span class="inline-flex justify-content-center align-items-center bg-purple-600 border-circle mb-3 p-3"><i class="pi pi-car text-xl text-white"></i></span><div class="text-2xl font-medium text-white mb-2">12</div><span class="text-blue-100 font-medium">Cars</span></div></div><div class="col-12 md:col-6 xl:col-3 p-3"><div class="p-3 text-center bg-indigo-500 border-round"><span class="inline-flex justify-content-center align-items-center bg-indigo-600 border-circle mb-3 p-3"><i class="pi pi-wallet text-xl text-white"></i></span><div class="text-2xl font-medium text-white mb-2">5</div><span class="text-blue-100 font-medium">Orders</span></div></div><div class="col-12 md:col-6 xl:col-3 p-3"><div class="p-3 text-center bg-cyan-500 border-round"><span class="inline-flex justify-content-center align-items-center bg-cyan-600 border-circle mb-3 p-3"><i class="pi pi-inbox text-xl text-white"></i></span><div class="text-2xl font-medium text-white mb-2">123</div><span class="text-blue-100 font-medium">Messages</span></div></div>',3),he={class:"card border-blue-100 mt-7"},be=t("div",{class:"flex flex-row mb-5 justify-content-center"},[t("span",{class:"font-medium text-3xl"},"Customers")],-1);function ye(h,d,U,w,b,e){const p=c("Column"),k=c("Button"),r=c("DataTable");return u(),m("div",de,[ne,t("div",ue,[t("div",ce,[t("div",me,[pe,t("div",ve,y(this.users.length),1),_e])]),fe]),t("div",he,[be,a(r,{value:b.users,paginator:!0,rows:5,rowHover:!0,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25,50],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} entries",responsiveLayout:"stack"},{empty:i(()=>[f(" No Data found. Please try again later! ")]),loading:i(()=>[f(" Loading records, please wait... ")]),default:i(()=>[a(p,{field:"id",header:"Id",sortable:!0}),a(p,{field:"first_name",header:"First Name",sortable:!0}),a(p,{field:"last_name",header:"Last Name",sortable:!0}),a(p,{field:"username",header:"Username",sortable:!0}),a(p,{field:"email",header:"Email",sortable:!0}),a(p,{field:"is_admin",header:"Is Admin",sortable:!0}),a(p,{field:"birthday",header:"Date Of Birth",sortable:!0}),a(p,{header:"Options"},{body:i(()=>[a(k,{type:"button",icon:"pi pi-cog",class:"p-button-primary"})]),_:1})]),_:1},8,["value"])])])}const ge=J(re,[["render",ye]]),we={class:"grid"},xe={class:"col-12"},$e={class:"my-2 flex"},ke={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},Pe=t("h5",{class:"m-0"},"All Cars",-1),Ve={class:"block mt-2 md:mt-0 p-input-icon-left"},Ce=t("i",{class:"pi pi-search"},null,-1),Ue=t("span",{class:"p-column-title"},"Id",-1),Se=t("span",{class:"p-column-title"},"Brand",-1),De=t("span",{class:"p-column-title"},"Model",-1),Me=t("template",null,[t("span",{class:"p-column-title"},"Image"),t("img",{src:te,class:"shadow-2",width:"100"})],-1),Te=t("span",{class:"p-column-title"},"Price",-1),Le=t("span",{class:"p-column-title"},"Engine",-1),Oe=t("span",{class:"p-column-title"},"Power",-1),Ne=t("span",{class:"p-column-title"},"Year",-1),Ie={key:0,src:te,width:"150",class:"mt-0 mx-auto mb-5 block shadow-2"},qe={class:"field"},Be=t("label",{for:"brand"},"Brand",-1),Fe={key:0,class:"p-invalid"},Ee={class:"field"},Ae=t("label",{for:"model"},"Model",-1),Re={key:0,class:"p-invalid"},je={class:"field"},Ye=t("label",{for:"year"},"Year",-1),ze={key:0,class:"p-invalid"},He={class:"field"},Ke=t("label",{for:"drivetrain"},"Drivetrain",-1),Ge={key:0,class:"p-invalid"},Je={class:"field"},Qe=t("label",{class:"mb-3"},"Fuel Type",-1),We={class:"formgrid grid"},Xe={class:"field-radiobutton col-6"},Ze=t("label",{for:"petrol"},"Petrol",-1),et={class:"field-radiobutton col-6"},tt=t("label",{for:"diesel"},"Diesel",-1),at={class:"field-radiobutton col-6"},st=t("label",{for:"hybrid"},"Hybrid",-1),lt={class:"field-radiobutton col-6"},ot=t("label",{for:"electric"},"Electric",-1),it={class:"field"},rt=t("label",{class:"mb-3"},"Inventory Status",-1),dt={class:"formgrid grid"},nt={class:"field-radiobutton col-6"},ut=t("label",{for:"1"},"In Stock",-1),ct={class:"field-radiobutton col-6"},mt=t("label",{for:"0"},"Out Of Stock",-1),pt={class:"formgrid grid"},vt={class:"field col"},_t=t("label",{for:"price"},"Price",-1),ft={key:0,class:"p-invalid"},ht={class:"field col"},bt=t("label",{for:"mileage"},"Mileage",-1),yt={class:"formgrid grid"},gt={class:"field col"},wt=t("label",{for:"engine"},"Engine",-1),xt={key:0,class:"p-invalid"},$t={class:"field col"},kt=t("label",{for:"power"},"Power",-1),Pt={key:0,class:"p-invalid"},Vt={class:"flex align-items-center justify-content-center"},Ct=t("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),Ut={key:0},St={__name:"Cars",setup(h){const d=W();le();const U=$([]),w=$(!1),b=$(!1),e=$({}),p=$(null),k=$({}),r=$(!1),T=$(),D=$();X(()=>{H()}),Z(async()=>{O()});const A=v=>v.toLocaleString("en-US",{style:"currency",currency:"USD"}),R=()=>{e.value={},r.value=!1,w.value=!0},j=()=>{w.value=!1,r.value=!1},Y=()=>{r.value=!0,e.value.brand&&e.value.brand.trim()&&e.value.price&&(e.value.id?n():x(),w.value=!1,e.value={})},L=v=>{e.value={...v},console.log(e),w.value=!0},z=v=>{e.value=v,b.value=!0},H=()=>{k.value={global:{value:null,matchMode:ee.CONTAINS}}},O=async()=>{const v=await V.get("/api/cars");U.value=v.data},x=async()=>{try{await V.post("/api/cars",{brand:e.value.brand,model:e.value.model,price:e.value.price,year:e.value.year,mileage:e.value.mileage,drivetrain:e.value.drivetrain,fuel_type:e.value.fuel_type,power:e.value.power,engine:e.value.engine,inventory_status:e.value.inventory_status,image_path:D.value}).then(v=>{console.log(v.data)}),d.add({severity:"success",summary:"Successful",detail:"Product added sucessfully",life:3e3}),O()}catch(v){v.response.status==422||v.response.status==500?d.add({severity:"error",summary:"Error Message",detail:"Provided credidentials are incorret!",life:3e3}):d.add({severity:"error",summary:"Error Message",detail:"Something went wrong. Please try again later!",life:3e3})}},n=async()=>{console.log("Product: "+e.value.inventory_status);try{await V.put("/api/cars/"+e.value.id,{brand:e.value.brand,model:e.value.model,price:e.value.price,year:e.value.year,mileage:e.value.mileage,drivetrain:e.value.drivetrain,fuel_type:e.value.fuel_type,power:e.value.power,inventory_status:e.value.inventory_status,engine:e.value.engine}).then(v=>{console.log(v.data)}),d.add({severity:"success",summary:"Successful",detail:"Product updated sucessfully",life:3e3}),O()}catch(v){v.response.status==422||v.response.status==500?d.add({severity:"error",summary:"Error Message",detail:"Provided credidentials are incorret!",life:3e3}):d.add({severity:"error",summary:"Error Message",detail:"Something went wrong. Please try again later!",life:3e3})}},K=async()=>{try{await V.delete("/api/cars/"+e.value.id),b.value=!1,e.value={},d.add({severity:"success",summary:"Success Message",detail:"Car deleted sucesfully!",life:3e3}),O()}catch{d.add({severity:"error",summary:"Error Message",detail:"Something went wrong. Please try again later!",life:3e3})}},S=v=>{T.value=v.target.__vueParentComponent.data.files[0];const o=new FormData;o.set("image",T.value),V.post("/api/picture",o).then(C=>{D.value=C.data})};return(v,o)=>{const C=c("Toast"),g=c("Button"),q=c("FileUpload"),B=c("Toolbar"),M=c("InputText"),s=c("Column"),G=c("DataTable"),F=c("InputNumber"),N=c("RadioButton"),Q=c("Dialog");return u(),m("div",we,[t("div",xe,[a(C),a(B,{class:"mb-4"},{start:i(()=>[t("div",$e,[a(g,{label:"New",icon:"pi pi-plus",class:"p-button-primary mr-2",onClick:R}),a(q,{mode:"basic",accept:"image/*",maxFileSize:1e6,label:"Upload",chooseLabel:"Upload",class:"ml-2 p-button-help",onChange:S})])]),_:1}),a(G,{ref_key:"dt",ref:p,value:U.value,dataKey:"id",paginator:!0,rows:10,filters:k.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:i(()=>[t("div",ke,[Pe,t("span",Ve,[Ce,a(M,{modelValue:k.value.global.value,"onUpdate:modelValue":o[0]||(o[0]=l=>k.value.global.value=l),placeholder:"Search..."},null,8,["modelValue"])])])]),default:i(()=>[a(s,{selectionMode:"multiple",headerStyle:"width: 3rem"}),a(s,{field:"id",header:"Id",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:i(l=>[Ue,f(" "+y(l.data.id),1)]),_:1}),a(s,{field:"brand",header:"Brand",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:i(l=>[Se,f(" "+y(l.data.brand),1)]),_:1}),a(s,{field:"model",header:"Model",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:i(l=>[De,f(" "+y(l.data.model),1)]),_:1}),a(s,{header:"Image",headerStyle:"width:14%; min-width:10rem;"},{default:i(()=>[Me]),_:1}),a(s,{field:"price",header:"Price",sortable:!0,headerStyle:"width:14%; min-width:8rem;"},{body:i(l=>[Te,f(" "+y(A(l.data.price)),1)]),_:1}),a(s,{field:"engine",header:"Engine",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:i(l=>[Le,f(" "+y(l.data.engine),1)]),_:1}),a(s,{field:"power",header:"Power",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:i(l=>[Oe,f(" "+y(l.data.power)+" HP ",1)]),_:1}),a(s,{field:"year",header:"Year",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:i(l=>[Ne,f(" "+y(l.data.year),1)]),_:1}),a(s,{headerStyle:"min-width:10rem;"},{body:i(l=>[a(g,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:ae=>L(l.data)},null,8,["onClick"]),a(g,{icon:"pi pi-trash",class:"p-button-rounded p-button-danger mt-2",onClick:ae=>z(l.data)},null,8,["onClick"])]),_:1})]),_:1},8,["value","filters"]),a(Q,{visible:w.value,"onUpdate:visible":o[15]||(o[15]=l=>w.value=l),style:{width:"450px"},header:"Car Details",modal:!0,class:"p-fluid"},{footer:i(()=>[a(g,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:j}),a(g,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:Y})]),default:i(()=>[e.value.image_path?(u(),m("img",Ie)):_("",!0),t("div",qe,[Be,a(M,{id:"brand",modelValue:e.value.brand,"onUpdate:modelValue":o[1]||(o[1]=l=>e.value.brand=l),modelModifiers:{trim:!0},required:"true",autofocus:"",class:P({"p-invalid":r.value&&!e.value.brand})},null,8,["modelValue","class"]),r.value&&!e.value.brand?(u(),m("small",Fe,"Name is required.")):_("",!0)]),t("div",Ee,[Ae,a(M,{id:"model",modelValue:e.value.model,"onUpdate:modelValue":o[2]||(o[2]=l=>e.value.model=l),modelModifiers:{trim:!0},required:"true",autofocus:"",class:P({"p-invalid":r.value&&!e.value.model})},null,8,["modelValue","class"]),r.value&&!e.value.model?(u(),m("small",Re,"Model is required.")):_("",!0)]),t("div",je,[Ye,a(F,{id:"year",modelValue:e.value.year,"onUpdate:modelValue":o[3]||(o[3]=l=>e.value.year=l),class:P({"p-invalid":r.value&&!e.value.year}),required:!0,mode:"decimal",useGrouping:!1},null,8,["modelValue","class"]),r.value&&!e.value.year?(u(),m("small",ze,"Year is required.")):_("",!0)]),t("div",He,[Ke,a(M,{id:"drivetrain",modelValue:e.value.drivetrain,"onUpdate:modelValue":o[4]||(o[4]=l=>e.value.drivetrain=l),class:P({"p-invalid":r.value&&!e.value.drivetrain}),required:!0},null,8,["modelValue","class"]),r.value&&!e.value.drivetrain?(u(),m("small",Ge,"Drivetrain is required.")):_("",!0)]),t("div",Je,[Qe,t("div",We,[t("div",Xe,[a(N,{id:"petrol",value:"Petrol",modelValue:e.value.fuel_type,"onUpdate:modelValue":o[5]||(o[5]=l=>e.value.fuel_type=l)},null,8,["modelValue"]),Ze]),t("div",et,[a(N,{id:"diesel",value:"Diesel",modelValue:e.value.fuel_type,"onUpdate:modelValue":o[6]||(o[6]=l=>e.value.fuel_type=l)},null,8,["modelValue"]),tt]),t("div",at,[a(N,{id:"hybrid",value:"Hybrid",modelValue:e.value.fuel_type,"onUpdate:modelValue":o[7]||(o[7]=l=>e.value.fuel_type=l)},null,8,["modelValue"]),st]),t("div",lt,[a(N,{id:"electric",value:"Electric",modelValue:e.value.fuel_type,"onUpdate:modelValue":o[8]||(o[8]=l=>e.value.fuel_type=l)},null,8,["modelValue"]),ot])])]),t("div",it,[rt,t("div",dt,[t("div",nt,[a(N,{id:"1",value:1,modelValue:e.value.inventory_status,"onUpdate:modelValue":o[9]||(o[9]=l=>e.value.inventory_status=l)},null,8,["modelValue"]),ut]),t("div",ct,[a(N,{id:"0",value:0,modelValue:e.value.inventory_status,"onUpdate:modelValue":o[10]||(o[10]=l=>e.value.inventory_status=l)},null,8,["modelValue"]),mt])])]),t("div",pt,[t("div",vt,[_t,a(F,{id:"price",modelValue:e.value.price,"onUpdate:modelValue":o[11]||(o[11]=l=>e.value.price=l),prefix:"$",class:P({"p-invalid":r.value&&!e.value.price}),required:!0,mode:"decimal",useGrouping:!1},null,8,["modelValue","class"]),r.value&&!e.value.price?(u(),m("small",ft,"Price is required.")):_("",!0)]),t("div",ht,[bt,a(F,{id:"mileage",modelValue:e.value.mileage,"onUpdate:modelValue":o[12]||(o[12]=l=>e.value.mileage=l),integeronly:"",suffix:" KM",mode:"decimal",useGrouping:!1},null,8,["modelValue"])])]),t("div",yt,[t("div",gt,[wt,a(M,{id:"engine",modelValue:e.value.engine,"onUpdate:modelValue":o[13]||(o[13]=l=>e.value.engine=l),class:P({"p-invalid":r.value&&!e.value.engine}),required:!0},null,8,["modelValue","class"]),r.value&&!e.value.engine?(u(),m("small",xt,"Engine is required.")):_("",!0)]),t("div",$t,[kt,a(F,{id:"power",modelValue:e.value.power,"onUpdate:modelValue":o[14]||(o[14]=l=>e.value.power=l),class:P({"p-invalid":r.value&&!e.value.power}),required:!0,suffix:" HP"},null,8,["modelValue","class"]),r.value&&!e.value.power?(u(),m("small",Pt,"Power is required.")):_("",!0)])]),a(q,{mode:"basic",accept:"image/*",maxFileSize:1e6,label:"Upload",chooseLabel:"Upload Image",class:"mt-2 p-button-primary",onChange:S})]),_:1},8,["visible"]),a(Q,{visible:b.value,"onUpdate:visible":o[17]||(o[17]=l=>b.value=l),style:{width:"450px"},header:"Confirm",modal:!0},{footer:i(()=>[a(g,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:o[16]||(o[16]=l=>b.value=!1)}),a(g,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:K})]),default:i(()=>[t("div",Vt,[Ct,e.value?(u(),m("span",Ut,[f("Are you sure you want to delete "),t("b",null,y(e.value.brand)+" "+y(e.value.model)+" with ID of "+y(e.value.id),1),f("?")])):_("",!0)])]),_:1},8,["visible"])])])}}},Dt={class:"grid"},Mt={class:"col-12"},Tt={class:"my-2 flex"},Lt={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},Ot=t("h5",{class:"m-0"},"All Users",-1),Nt={class:"block mt-2 md:mt-0 p-input-icon-left"},It=t("i",{class:"pi pi-search"},null,-1),qt=t("span",{class:"p-column-title"},"Id",-1),Bt=t("span",{class:"p-column-title"},"First Name",-1),Ft=t("span",{class:"p-column-title"},"Last Name",-1),Et=t("span",{class:"p-column-title"},"Username",-1),At=t("span",{class:"p-column-title"},"Email",-1),Rt=t("span",{class:"p-column-title"},"Is Admin",-1),jt=t("span",{class:"p-column-title"},"Birthday",-1),Yt={class:"field"},zt={class:"first_name"},Ht=t("label",{for:"first_name"},"First Name",-1),Kt={key:0,class:"p-invalid"},Gt={class:"field"},Jt={class:"last_name"},Qt=t("label",{for:"last_name"},"Last Name",-1),Wt={key:0,class:"p-invalid"},Xt={class:"field"},Zt={class:"email"},ea=t("label",{for:"email"},"Email",-1),ta={key:0,class:"p-invalid"},aa={class:"field"},sa={class:"username"},la=t("label",{for:"username"},"Username",-1),oa={key:0,class:"p-invalid"},ia={key:0,class:"field"},ra={class:"password"},da=t("label",{for:"password"},"Password",-1),na={key:0,class:"p-invalid"},ua={key:1,class:"field"},ca={class:"password_confirmation"},ma=t("label",{for:"password_confirmation"},"Password Confirmation",-1),pa={key:0,class:"p-invalid"},va={class:"field"},_a=t("label",{class:"mb-3"},"Is Admin",-1),fa={class:"formgrid grid"},ha={class:"field-radiobutton col-6"},ba=t("label",{for:"1"},"True",-1),ya={class:"field-radiobutton col-6"},ga=t("label",{for:"0"},"False",-1),wa={class:"field"},xa={class:"birthday"},$a=t("label",{for:"birthday"},"Birthday",-1),ka={key:0,class:"p-invalid"},Pa={class:"flex align-items-center justify-content-center"},Va=t("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),Ca={key:0},Ua={__name:"Users",setup(h){const d=W(),U=$([]),w=$(!1),b=$(!1),e=$({}),p=$(null),k=$({}),r=$(!1);X(()=>{Y()}),Z(async()=>{L()});const T=()=>{e.value={},r.value=!1,w.value=!0},D=()=>{w.value=!1,r.value=!1},A=()=>{r.value=!0,e.value.first_name&&e.value.first_name.trim()&&e.value.last_name&&(e.value.id?H():z(),w.value=!1,e.value={})},R=x=>{e.value={...x},console.log(e),w.value=!0},j=x=>{e.value=x,b.value=!0},Y=()=>{k.value={global:{value:null,matchMode:ee.CONTAINS}}},L=async()=>{const x=await V.get("/api/auth/users");U.value=x.data,console.log(U.value)},z=async()=>{try{await V.post("/api/auth/register",{email:e.value.email,password:e.value.password,first_name:e.value.first_name,last_name:e.value.last_name,username:e.value.username,birthday:e.value.birthday,password_confirmation:e.value.password_confirmation,is_admin:e.value.is_admin}),d.add({severity:"success",summary:"Successful",detail:"User added sucessfully",life:3e3}),L()}catch(x){x.response.status==422||x.response.status==500?d.add({severity:"error",summary:"Error Message",detail:"Provided credidentials are incorret!",life:3e3}):d.add({severity:"error",summary:"Error Message",detail:"Something went wrong. Please try again later!",life:3e3})}},H=async()=>{try{await V.put("/api/auth/users/"+e.value.id,{email:e.value.email,first_name:e.value.first_name,last_name:e.value.last_name,username:e.value.username,birthday:e.value.birthday,is_admin:e.value.is_admin}),d.add({severity:"success",summary:"Successful",detail:"User updated sucessfully",life:3e3}),L()}catch(x){x.response.status==422||x.response.status==500?d.add({severity:"error",summary:"Error Message",detail:"Provided credidentials are incorret!",life:3e3}):d.add({severity:"error",summary:"Error Message",detail:"Something went wrong. Please try again later!",life:3e3})}},O=async()=>{try{await V.delete("/api/auth/users/"+e.value.id,{withCredentials:!1}),b.value=!1,e.value={},d.add({severity:"success",summary:"Success Message",detail:"User deleted sucesfully!",life:3e3}),L()}catch{d.add({severity:"error",summary:"Error Message",detail:"Something went wrong. Please try again later!",life:3e3})}};return(x,n)=>{const K=c("Toast"),S=c("Button"),v=c("FileUpload"),o=c("Toolbar"),C=c("InputText"),g=c("Column"),q=c("DataTable"),B=c("RadioButton"),M=c("Dialog");return u(),m("div",Dt,[t("div",Mt,[a(K),a(o,{class:"mb-4"},{start:i(()=>[t("div",Tt,[a(S,{label:"New",icon:"pi pi-plus",class:"p-button-primary mr-2",onClick:T}),a(v,{mode:"basic",accept:"image/*",maxFileSize:1e6,label:"Upload",chooseLabel:"Upload",class:"ml-2 p-button-help",onChange:x.handleUpload},null,8,["onChange"])])]),_:1}),a(q,{ref_key:"dt",ref:p,value:U.value,dataKey:"id",paginator:!0,rows:10,filters:k.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} users",responsiveLayout:"scroll"},{header:i(()=>[t("div",Lt,[Ot,t("span",Nt,[It,a(C,{modelValue:k.value.global.value,"onUpdate:modelValue":n[0]||(n[0]=s=>k.value.global.value=s),placeholder:"Search..."},null,8,["modelValue"])])])]),default:i(()=>[a(g,{selectionMode:"multiple",headerStyle:"width: 3rem"}),a(g,{field:"id",header:"Id",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:i(s=>[qt,f(" "+y(s.data.id),1)]),_:1}),a(g,{field:"first_name",header:"First Name",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:i(s=>[Bt,f(" "+y(s.data.first_name),1)]),_:1}),a(g,{field:"last_name",header:"Last Name",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:i(s=>[Ft,f(" "+y(s.data.last_name),1)]),_:1}),a(g,{field:"username",header:"Username",sortable:!0,headerStyle:"width:14%; min-width:8rem;"},{body:i(s=>[Et,f(" "+y(s.data.username),1)]),_:1}),a(g,{field:"email",header:"Email",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:i(s=>[At,f(" "+y(s.data.email),1)]),_:1}),a(g,{field:"is_admin",header:"Is Admin",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:i(s=>[Rt,f(" "+y(s.data.is_admin),1)]),_:1}),a(g,{field:"birthday",header:"Birthday",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:i(s=>[jt,f(" "+y(s.data.birthday),1)]),_:1}),a(g,{headerStyle:"min-width:10rem;"},{body:i(s=>[a(S,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:G=>R(s.data)},null,8,["onClick"]),a(S,{icon:"pi pi-trash",class:"p-button-rounded p-button-danger mt-2",onClick:G=>j(s.data)},null,8,["onClick"])]),_:1})]),_:1},8,["value","filters"]),a(M,{visible:w.value,"onUpdate:visible":n[10]||(n[10]=s=>w.value=s),style:{width:"450px"},header:"User Details",modal:!0,class:"p-fluid"},{footer:i(()=>[a(S,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:D}),a(S,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:A})]),default:i(()=>[t("div",Yt,[t("div",zt,[Ht,a(C,{id:"first_name",modelValue:e.value.first_name,"onUpdate:modelValue":n[1]||(n[1]=s=>e.value.first_name=s),modelModifiers:{trim:!0},required:"true",autofocus:"",class:P({"p-invalid":r.value&&!e.value.first_name})},null,8,["modelValue","class"]),r.value&&!e.value.first_name?(u(),m("small",Kt,"First Name is required.")):_("",!0)])]),t("div",Gt,[t("div",Jt,[Qt,a(C,{id:"last_name",modelValue:e.value.last_name,"onUpdate:modelValue":n[2]||(n[2]=s=>e.value.last_name=s),modelModifiers:{trim:!0},required:"true",autofocus:"",class:P({"p-invalid":r.value&&!e.value.last_name})},null,8,["modelValue","class"]),r.value&&!e.value.last_name?(u(),m("small",Wt,"Last Name is required.")):_("",!0)])]),t("div",Xt,[t("div",Zt,[ea,a(C,{id:"email",modelValue:e.value.email,"onUpdate:modelValue":n[3]||(n[3]=s=>e.value.email=s),modelModifiers:{trim:!0},required:"true",autofocus:"",class:P({"p-invalid":r.value&&!e.value.email})},null,8,["modelValue","class"]),r.value&&!e.value.email?(u(),m("small",ta,"Email is required.")):_("",!0)])]),t("div",aa,[t("div",sa,[la,a(C,{id:"username",modelValue:e.value.username,"onUpdate:modelValue":n[4]||(n[4]=s=>e.value.username=s),modelModifiers:{trim:!0},required:"true",autofocus:"",class:P({"p-invalid":r.value&&!e.value.username})},null,8,["modelValue","class"]),r.value&&!e.value.username?(u(),m("small",oa,"Username is required.")):_("",!0)])]),e.value.id?_("",!0):(u(),m("div",ia,[t("div",ra,[da,a(C,{id:"password",modelValue:e.value.password,"onUpdate:modelValue":n[5]||(n[5]=s=>e.value.password=s),modelModifiers:{trim:!0},required:"true",autofocus:"",class:P({"p-invalid":r.value&&!e.value.password})},null,8,["modelValue","class"]),r.value&&!e.value.password?(u(),m("small",na,"Password is required.")):_("",!0)])])),e.value.id?_("",!0):(u(),m("div",ua,[t("div",ca,[ma,a(C,{id:"password_confirmation",modelValue:e.value.password_confirmation,"onUpdate:modelValue":n[6]||(n[6]=s=>e.value.password_confirmation=s),modelModifiers:{trim:!0},required:"true",autofocus:"",class:P({"p-invalid":r.value&&!e.value.password_confirmation})},null,8,["modelValue","class"]),r.value&&!e.value.password_confirmation?(u(),m("small",pa,"Password Confirmation is required.")):_("",!0)])])),t("div",va,[_a,t("div",fa,[t("div",ha,[a(B,{id:"1",value:1,modelValue:e.value.is_admin,"onUpdate:modelValue":n[7]||(n[7]=s=>e.value.is_admin=s)},null,8,["modelValue"]),ba]),t("div",ya,[a(B,{id:"0",value:0,modelValue:e.value.is_admin,"onUpdate:modelValue":n[8]||(n[8]=s=>e.value.is_admin=s)},null,8,["modelValue"]),ga])])]),t("div",wa,[t("div",xa,[$a,a(C,{id:"birthday",modelValue:e.value.birthday,"onUpdate:modelValue":n[9]||(n[9]=s=>e.value.birthday=s),modelModifiers:{trim:!0},required:"true",autofocus:"",class:P({"p-invalid":r.value&&!e.value.birthday}),placeholder:"YYYY-MM-DD"},null,8,["modelValue","class"]),r.value&&!e.value.birthday?(u(),m("small",ka,"Birthday is required.")):_("",!0)])])]),_:1},8,["visible"]),a(M,{visible:b.value,"onUpdate:visible":n[12]||(n[12]=s=>b.value=s),style:{width:"450px"},header:"Confirm",modal:!0},{footer:i(()=>[a(S,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:n[11]||(n[11]=s=>b.value=!1)}),a(S,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:O})]),default:i(()=>[t("div",Pa,[Va,e.value?(u(),m("span",Ca,[f("Are you sure you want to delete "),t("b",null,y(e.value.first_name)+" "+y(e.value.last_name),1),f("?")])):_("",!0)])]),_:1},8,["visible"])])])}}},Sa={data(){return{orders:[],selectedOrder:null}},methods:{getAllOrders(){V.get("/api/orders",{headers:{"Content-Type":"application/json"}}).then(h=>{this.orders=h.data,console.log(this.orders)}).catch(h=>{console.log(h)})},acceptOrder(){V.put("/api/orders/"+this.selectedOrder.id,{order_status:"Accepted"}).catch(h=>{console.log(h)}),this.$toast.add({severity:"success",summary:"Success Message",detail:"Order Accepted",life:3e3})},declineOrder(){V.put("/api/orders/"+this.selectedOrder.id,{order_status:"Declined"}).catch(h=>{console.log(h)}),this.$toast.add({severity:"error",summary:"Message",detail:"Order Declined!",life:3e3})},deleteOrder(){V.delete("/api/orders/"+this.selectedOrder.id,{}).catch(h=>{console.log(h)}),this.$toast.add({severity:"error",summary:"Message",detail:"Order Deleted!",life:3e3}),this.getAllOrders()}},mounted(){this.getAllOrders()}},Da={class:"surface-ground"},Ma={class:"card border-blue-100 mt-7"},Ta=t("div",{class:"flex flex-row mb-5 justify-content-center"},[t("span",{class:"font-medium text-3xl"},"Orders")],-1);function La(h,d,U,w,b,e){const p=c("Column"),k=c("Button"),r=c("DataTable"),T=c("Toast");return u(),m(oe,null,[t("div",Da,[t("div",Ma,[Ta,a(r,{value:b.orders,paginator:!0,rows:5,rowHover:!0,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25,50],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} entries",responsiveLayout:"stack",dataKey:"id",selection:b.selectedOrder,"onUpdate:selection":d[2]||(d[2]=D=>b.selectedOrder=D)},{empty:i(()=>[f(" No Data found. Please try again later! ")]),loading:i(()=>[f(" Loading records, please wait... ")]),default:i(()=>[a(p,{field:"id",header:"Order ID",sortable:!0}),a(p,{field:"user_id",header:"User ID",sortable:!0}),a(p,{field:"car_id",header:"Car ID",sortable:!0}),a(p,{field:"order_status",header:"Order Status",sortable:!0}),a(p,{selectionMode:"single",header:"Choose This Order"}),a(p,{header:"Options"},{body:i(()=>[a(k,{icon:"pi pi-check",class:"p-button-rounded p-button-success mr-2",onClick:d[0]||(d[0]=D=>e.acceptOrder())}),a(k,{icon:"pi pi-times",class:"p-button-rounded p-button-danger",onClick:d[1]||(d[1]=D=>e.declineOrder())})]),_:1}),a(p,{header:"Delete"},{body:i(()=>[a(k,{icon:"pi pi-trash",class:"p-button-rounded p-button-warning p-button-outlined",onClick:e.deleteOrder},null,8,["onClick"])]),_:1})]),_:1},8,["value","selection"])])]),a(T,{position:"top-right"})],64)}const Oa=J(Sa,[["render",La]]);const Na={class:"m-2 md:m-5"},Ia={class:"card border-blue-100"},qa={class:"mt-5 mx-0 md:mx-3 lg:mx-5"},Ba={__name:"Dashboard",setup(h){let d=0;const U=[{label:"Dashboard",icon:"pi pi-fw pi-home"},{label:"Cars",icon:"pi pi-fw pi-car"},{label:"Users",icon:"pi pi-fw pi-user"},{label:"Orders",icon:"pi pi-fw pi-wallet"}];return(w,b)=>{const e=c("TabMenu");return u(),m("div",Na,[t("div",Ia,[a(e,{model:U,activeIndex:I(d),"onUpdate:activeIndex":b[0]||(b[0]=p=>ie(d)?d.value=p:d=p),class:"dark-panel"},null,8,["activeIndex"]),t("div",qa,[I(d)==0?(u(),E(ge,{key:0})):_("",!0),I(d)==1?(u(),E(St,{key:1})):_("",!0),I(d)==2?(u(),E(Ua,{key:2})):_("",!0),I(d)==3?(u(),E(Oa,{key:3})):_("",!0)])])])}}},Ea=J(Ba,[["__scopeId","data-v-da41b82a"]]);export{Ea as default};
