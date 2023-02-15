<script setup>
import { FilterMatchMode } from "primevue/api";
import { ref, onMounted, onBeforeMount } from "vue";
import { useToast } from "primevue/usetoast";
import { useLayout } from "@/layout/composables/layout";
import axios from "axios";

const toast = useToast();
const { contextPath } = useLayout();

const products = ref([]);
const productDialog = ref(false);
const deleteProductDialog = ref(false);
const product = ref({});
const dt = ref(null);
const filters = ref({});
const submitted = ref(false);
const image = ref();
const image_path = ref();

onBeforeMount(() => {
  initFilters();
});

onMounted(async () => {
  getAllCars();
});
const formatCurrency = (value) => {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
};

const openNew = () => {
  product.value = {};
  submitted.value = false;
  productDialog.value = true;
};

const hideDialog = () => {
  productDialog.value = false;
  submitted.value = false;
};

const saveProduct = () => {
  submitted.value = true;
  if (product.value.brand && product.value.brand.trim() && product.value.price) {
    if (product.value.id) {
      updateCar();
    } else {
      addCar();
    }
    productDialog.value = false;
    product.value = {};
  }
};

const editProduct = (editProduct) => {
  product.value = { ...editProduct };
  console.log(product);
  productDialog.value = true;
};

const confirmDeleteProduct = (editProduct) => {
  product.value = editProduct;
  deleteProductDialog.value = true;
};

const initFilters = () => {
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  };
};

const getAllCars = async () => {
  const data = await axios.get("/api/cars");
  products.value = data.data;
};

const addCar = async () => {
  try {
    await axios.post("/api/cars", {
      brand: product.value.brand,
      model: product.value.model,
      price: product.value.price,
      year: product.value.year,
      mileage: product.value.mileage,
      drivetrain: product.value.drivetrain,
      fuel_type: product.value.fuel_type,
      power: product.value.power,
      engine: product.value.engine,
      inventory_status: product.value.inventory_status,
      image_path: image_path.value,
    }).then(response => {
      console.log(response.data)
    });;
    toast.add({ severity: "success", summary: "Successful", detail: "Product added sucessfully", life: 3000 });
    getAllCars();
  } catch (error) {
    if (error.response.status == 422 || error.response.status == 500) {
      toast.add({ severity: "error", summary: "Error Message", detail: "Provided credidentials are incorret!", life: 3000 });
    } else {
      toast.add({ severity: "error", summary: "Error Message", detail: "Something went wrong. Please try again later!", life: 3000 });
    }
  }
};

const updateCar = async () => {
  console.log("Product: " + product.value.inventory_status)
  try {
    await axios.put("/api/cars/" + product.value.id, {
      brand: product.value.brand,
      model: product.value.model,
      price: product.value.price,
      year: product.value.year,
      mileage: product.value.mileage,
      drivetrain: product.value.drivetrain,
      fuel_type: product.value.fuel_type,
      power: product.value.power,
      inventory_status: product.value.inventory_status,
      engine: product.value.engine
    }).then(response => {
      console.log(response.data)
    });
    toast.add({ severity: "success", summary: "Successful", detail: "Product updated sucessfully", life: 3000 });
    getAllCars();
  } catch (error) {
    if (error.response.status == 422 || error.response.status == 500) {
      toast.add({ severity: "error", summary: "Error Message", detail: "Provided credidentials are incorret!", life: 3000 });
    } else {
      toast.add({ severity: "error", summary: "Error Message", detail: "Something went wrong. Please try again later!", life: 3000 });
    }
  }
};

const deleteCar = async () => {
  try {
    await axios.delete("/api/cars/" + product.value.id);
    deleteProductDialog.value = false;
    product.value = {};
    toast.add({ severity: "success", summary: "Success Message", detail: "Car deleted sucesfully!", life: 3000 });
    getAllCars();
  } catch (error) {
    toast.add({ severity: "error", summary: "Error Message", detail: "Something went wrong. Please try again later!", life: 3000 });
  }
};

const handleUpload = (e) => {
  image.value = e.target.__vueParentComponent.data.files[0];
  const formData = new FormData();
  formData.set("image", image.value);
  axios.post("/api/picture", formData).then((response) => {
    image_path.value = response.data;
  });
};

const upload = (e) => {
  const formData = new FormData();
  formData.set("image", image.value);
  axios.post("/api/picture", formData).then((response) => {
    image_path.value = response.data;
  });
};
</script>

<template>
  <div class="grid">
    <div class="col-12">
      <Toast />
      <Toolbar class="mb-4">
        <template v-slot:start>
          <div class="my-2 flex">
            <Button label="New" icon="pi pi-plus" class="p-button-primary mr-2" @click="openNew" />
            <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Upload" chooseLabel="Upload" class="ml-2 p-button-help" @change="handleUpload" />
          </div>
        </template>
      </Toolbar>

      <DataTable
        ref="dt"
        :value="products"
        dataKey="id"
        :paginator="true"
        :rows="10"
        :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
        responsiveLayout="scroll"
      >
        <template #header>
          <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
            <h5 class="m-0">All Cars</h5>
            <span class="block mt-2 md:mt-0 p-input-icon-left">
              <i class="pi pi-search" />
              <InputText v-model="filters['global'].value" placeholder="Search..." />
            </span>
          </div>
        </template>

        <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
        <Column field="id" header="Id" :sortable="true" headerStyle="width:14%; min-width:10rem;">
          <template #body="slotProps">
            <span class="p-column-title">Id</span>
            {{ slotProps.data.id }}
          </template>
        </Column>
        <Column field="brand" header="Brand" :sortable="true" headerStyle="width:14%; min-width:10rem;">
          <template #body="slotProps">
            <span class="p-column-title">Brand</span>
            {{ slotProps.data.brand }}
          </template>
        </Column>
        <Column field="model" header="Model" :sortable="true" headerStyle="width:14%; min-width:10rem;">
          <template #body="slotProps">
            <span class="p-column-title">Model</span>
            {{ slotProps.data.model }}
          </template>
        </Column>
        <Column header="Image" headerStyle="width:14%; min-width:10rem;">
          <template #body="slotProps">
            <span class="p-column-title">Image</span>
            <img :src="'http://pzi072023.studenti.sum.ba/backend/storage/' + slotProps.data.image_path" class="shadow-2" width="100" />
          </template>
        </Column>
        <Column field="price" header="Price" :sortable="true" headerStyle="width:14%; min-width:8rem;">
          <template #body="slotProps">
            <span class="p-column-title">Price</span>
            {{ formatCurrency(slotProps.data.price) }}
          </template>
        </Column>
        <Column field="engine" header="Engine" :sortable="true" headerStyle="width:14%; min-width:10rem;">
          <template #body="slotProps">
            <span class="p-column-title">Engine</span>
            {{ slotProps.data.engine }}
          </template>
        </Column>
        <Column field="power" header="Power" :sortable="true" headerStyle="width:14%; min-width:10rem;">
          <template #body="slotProps">
            <span class="p-column-title">Power</span>
            {{ slotProps.data.power }} HP
          </template>
        </Column>
        <Column field="year" header="Year" :sortable="true" headerStyle="width:14%; min-width:10rem;">
          <template #body="slotProps">
            <span class="p-column-title">Year</span>
            {{ slotProps.data.year }}
          </template>
        </Column>
        <Column headerStyle="min-width:10rem;">
          <template #body="slotProps">
            <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editProduct(slotProps.data)" />
            <Button icon="pi pi-trash" class="p-button-rounded p-button-danger mt-2" @click="confirmDeleteProduct(slotProps.data)" />
          </template>
        </Column>
      </DataTable>

      <Dialog v-model:visible="productDialog" :style="{ width: '450px' }" header="Car Details" :modal="true" class="p-fluid">
        <img :src="'http://pzi072023.studenti.sum.ba/backend/storage/' + product.image_path"  v-if="product.image_path" width="150" class="mt-0 mx-auto mb-5 block shadow-2" />
        <div class="field">
          <label for="brand">Brand</label>
          <InputText id="brand" v-model.trim="product.brand" required="true" autofocus :class="{ 'p-invalid': submitted && !product.brand }" />
          <small class="p-invalid" v-if="submitted && !product.brand">Name is required.</small>
        </div>
        <div class="field">
          <label for="model">Model</label>
          <InputText id="model" v-model.trim="product.model" required="true" autofocus :class="{ 'p-invalid': submitted && !product.model }" />
          <small class="p-invalid" v-if="submitted && !product.model">Model is required.</small>
        </div>
        <div class="field">
          <label for="year">Year</label>
          <InputNumber id="year" v-model="product.year" :class="{ 'p-invalid': submitted && !product.year }" :required="true" mode="decimal" :useGrouping="false" />
          <small class="p-invalid" v-if="submitted && !product.year">Year is required.</small>
        </div>
        <div class="field">
          <label for="drivetrain">Drivetrain</label>
          <InputText id="drivetrain" v-model="product.drivetrain" :class="{ 'p-invalid': submitted && !product.drivetrain }" :required="true" />
          <small class="p-invalid" v-if="submitted && !product.drivetrain">Drivetrain is required.</small>
        </div>
        <div class="field">
          <label class="mb-3">Fuel Type</label>
          <div class="formgrid grid">
            <div class="field-radiobutton col-6">
              <RadioButton id="petrol" value="Petrol" v-model="product.fuel_type" />
              <label for="petrol">Petrol</label>
            </div>
            <div class="field-radiobutton col-6">
              <RadioButton id="diesel" value="Diesel" v-model="product.fuel_type" />
              <label for="diesel">Diesel</label>
            </div>
            <div class="field-radiobutton col-6">
              <RadioButton id="hybrid" value="Hybrid" v-model="product.fuel_type" />
              <label for="hybrid">Hybrid</label>
            </div>
            <div class="field-radiobutton col-6">
              <RadioButton id="electric" value="Electric" v-model="product.fuel_type" />
              <label for="electric">Electric</label>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="mb-3">Inventory Status</label>
          <div class="formgrid grid">
            <div class="field-radiobutton col-6">
              <RadioButton id="1" :value="1"  v-model="product.inventory_status"/>
              <label for="1">In Stock</label>
            </div>
            <div class="field-radiobutton col-6">
              <RadioButton id="0" :value=0  v-model="product.inventory_status"/>
              <label for="0">Out Of Stock</label>
            </div>
          </div>
        </div>
        <div class="formgrid grid">
          <div class="field col">
            <label for="price">Price</label>
            <InputNumber id="price" v-model="product.price" prefix="$" :class="{ 'p-invalid': submitted && !product.price }" :required="true" mode="decimal" :useGrouping="false" />
            <small class="p-invalid" v-if="submitted && !product.price">Price is required.</small>
          </div>
          <div class="field col">
            <label for="mileage">Mileage</label>
            <InputNumber id="mileage" v-model="product.mileage" integeronly suffix=" KM" mode="decimal" :useGrouping="false" />
          </div>
        </div>
        <div class="formgrid grid">
          <div class="field col">
            <label for="engine">Engine</label>
            <InputText id="engine" v-model="product.engine" :class="{ 'p-invalid': submitted && !product.engine }" :required="true" />
            <small class="p-invalid" v-if="submitted && !product.engine">Engine is required.</small>
          </div>
          <div class="field col">
            <label for="power">Power</label>
            <InputNumber id="power" v-model="product.power" :class="{ 'p-invalid': submitted && !product.power }" :required="true" suffix=" HP" />
            <small class="p-invalid" v-if="submitted && !product.power">Power is required.</small>
          </div>
        </div>
        <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Upload" chooseLabel="Upload Image" class="mt-2 p-button-primary" @change="handleUpload()" />
        <template #footer>
          <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog" />
          <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveProduct" />
        </template>
      </Dialog>

      <Dialog v-model:visible="deleteProductDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
        <div class="flex align-items-center justify-content-center">
          <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
          <span v-if="product"
            >Are you sure you want to delete <b> {{ product.brand }} {{ product.model }} with ID of {{ product.id }}</b
            >?</span
          >
        </div>
        <template #footer>
          <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductDialog = false" />
          <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteCar" />
        </template>
      </Dialog>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
