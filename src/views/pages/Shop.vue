<script setup>
import { ref, onMounted } from "vue";
import ProductService from "@/service/ProductService";
import { useLayout } from "@/layout/composables/layout";

const { contextPath } = useLayout();

const dataviewValue = ref(null);
const layout = ref("grid");
const sortKey = ref(null);
const sortOrder = ref(null);
const sortField = ref(null);
const sortOptions = ref([
  { label: "Price High to Low", value: "!price" },
  { label: "Price Low to High", value: "price" },
]);

const productService = new ProductService();

onMounted(() => {
  productService
    .getProductsSmall()
    .then((data) => (dataviewValue.value = data));
});

const onSortChange = (event) => {
  const value = event.value.value;
  const sortValue = event.value;

  if (value.indexOf("!") === 0) {
    sortOrder.value = -1;
    sortField.value = value.substring(1, value.length);
    sortKey.value = sortValue;
  } else {
    sortOrder.value = 1;
    sortField.value = value;
    sortKey.value = sortValue;
  }
};
</script>

<template>
  <div
    id="hero"
    class="flex flex-column pt-4 px-4 lg:px-8 overflow-hidden"
    style="
      background-image: url('/demo/images/landing/bugatti.jpg');
      background-repeat: no-repeat;
      background-position: center;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    "
  >
    <div
      class="
        md:mt-8
        flex
        justify-content-center
        mx-6
        mt-auto
        pb-5
        fadeindown
        animation-duration-1000
      "
    >
      <div class="p-inputgroup" style="max-width: 600px">
        <InputText
          class="opacity-70 p-inputtext-lg shadow-8"
          placeholder="Search"
        />
        <span class="p-input-icon-right cursor-pointer">
          <i class="pi pi-search"></i>
        </span>
      </div>
    </div>
  </div>

  <div class="grid mx-1 md:mx-4 lg:mx-8 mt-5">
    <div class="col-12">
      <div class="card">
        <h4 class="flex justify-content-center">Shop</h4>
        <DataView
          :value="dataviewValue"
          :layout="layout"
          :paginator="true"
          :rows="9"
          :sortOrder="sortOrder"
          :sortField="sortField"
        >
          <template #header>
            <div class="grid grid-nogutter">
              <div class="col-12 text-left">
                <Dropdown
                  v-model="sortKey"
                  :options="sortOptions"
                  optionLabel="label"
                  placeholder="Sort By Price"
                  @change="onSortChange($event)"
                />
              </div>
            </div>
          </template>
          <template #grid="slotProps">
            <div class="col-12 md:col-6 xl:col-4">
              <Card class="card border-1 surface-border">
                <template #header>
                  <div class="flex justify-content-center">
                    <img
                      :src="
                        contextPath +
                        'demo/images/landing/' +
                        slotProps.data.image
                      "
                      class="border-round w-9 shadow-2 mt-3 mx-0"
                    />
                  </div>
                </template>

                <template #title>
                  <div class="text-center">{{ slotProps.data.name }}</div>
                </template>

                <template #subtitle>
                  <div class="text-center font-semibold text-xl">
                    ${{ slotProps.data.price }}
                  </div>
                </template>

                <template #content>
                  <div class="flex align-items-center justify-content-center">
                    <Chip
                      label="189 980km"
                      icon="pi pi-wrench"
                      class="shadow-5"
                    />
                    <Chip
                      label="2020"
                      icon="pi pi-calendar"
                      class="ml-4 shadow-5"
                    />
                  </div>
                </template>

                <template #footer>
                  <div class="flex justify-content-center -mt-3">
                    <Button
                      class="
                        bg-primary
                        transition-duration-500
                        shadow-6
                        hover:shadow-8
                      "
                      icon="pi pi-info-circle"
                      label="See More Details"
                      @click="display = !display"
                    />
                  </div>
                </template>
              </Card>
            </div>
          </template>
        </DataView>
      </div>
    </div>
  </div>

  <Dialog
    v-model:visible="display"
    :breakpoints="{ '1600px': '65vw', '880px': '95vw'}"
    :style="{ width: '50vw' }"
    modal
    :showHeader="false"
  >
    <div class="grid">
      <div class="col-12 flex align-items-center mt-5 px-5 md:px-8">
        <img
          src="/demo/images/landing/herocar.jpg"
          alt=""
          class="shadow-8 w-full border-round-3xl"
        />
      </div>

      <div class="col-12 ">
        <div class="text-center">
          <span class="text-2xl text-900 font-medium">Bentley Flying Spur</span>
        </div>

        <div class="flex justify-content-around mt-7 mx-3 lg:mx-7">
          <div class="flex-column">
            <i
              class="pi pi-calendar flex justify-content-center"
              style="font-size: 2.2rem"
            ></i>
            <h5 class="font-semibold flex justify-content-center">2022</h5>
            <span class="text-800 text-xl">Year</span>
          </div>

          <div class="flex-column">
            <i
              class="pi pi-cog flex justify-content-center"
              style="font-size: 2.2rem"
            ></i>
            <h5 class="font-semibold flex justify-content-center">AWD</h5>
            <span class="text-800 text-xl flex justify-content-center"
              >Drivetrain</span
            >
          </div>

          <div class="flex-column">
            <i
              class="pi pi-wrench flex justify-content-center"
              style="font-size: 2.2rem"
            ></i>
            <h5 class="font-semibold flex justify-content-center">45 890KM</h5>
            <span class="text-800 text-xl flex justify-content-center"
              >Mileage</span
            >
          </div>
        </div>

        <div class="mx-3 md:mx-7 mt-5">
          <Divider></Divider>
          <ul class="list-none p-0 m-0 flex-column px-2">
            <li class="flex align-items-center justify-content-between mb-4">
              <div class="block text-900 text-xl font-medium mb-1">
                Brand
              </div>

              <div class="mt-2 md:mt-0 flex flex-nowrap">
                <div class="block text-700 text-xl font-medium mb-1">
                  Bentley
                </div>
              </div>
            </li>

            <li class="flex align-items-center justify-content-between mb-4">
              <div class="block text-900 text-xl font-medium mb-1">
                Model
              </div>

              <div class="mt-2 md:mt-0 flex flex-nowrap">
                <div class="block text-700 text-xl font-medium mb-1">
                  Flying Spur
                </div>
              </div>
            </li>

            <li class="flex align-items-center justify-content-between mb-4">
              <div class="block text-900 text-xl font-medium mb-1">
                Price
              </div>

              <div class="mt-2 md:mt-0 flex flex-nowrap">
                <div class="block text-700 text-xl font-medium mb-1">
                  $189,999
                </div>
              </div>
            </li>

            <li class="flex align-items-center justify-content-between mb-4">
              <div class="block text-900 text-xl font-medium mb-1">
                Drivetrain
              </div>

              <div class="mt-2 md:mt-0 flex flex-nowrap">
                <div class="block text-700 text-xl font-medium mb-1">
                  All-wheel Drive
                </div>
              </div>
            </li>

            <li class="flex align-items-center justify-content-between mb-4">
              <div class="block text-900 text-xl font-medium mb-1">
                Fuel type
              </div>

              <div class="mt-2 md:mt-0 flex flex-nowrap">
                <div class="block text-700 text-xl font-medium mb-1">
                  Petrol
                </div>
              </div>
            </li>

            <li class="flex align-items-center justify-content-between mb-4">
              <div class="block text-900 text-xl font-medium mb-1">
                Transmission
              </div>

              <div class="mt-2 md:mt-0 flex flex-nowrap">
                <div class="block text-700 text-xl font-medium mb-1">
                  Automatic
                </div>
              </div>
            </li>

            <li class="flex align-items-center justify-content-between mb-4">
              <div class="block text-900 text-xl font-medium mb-1">
                Power
              </div>

              <div class="mt-2 md:mt-0 flex flex-nowrap">
                <div class="block text-700 text-xl font-medium mb-1">
                  540 HP
                </div>
              </div>
            </li>

            <li class="flex align-items-center justify-content-between mb-4">
              <div class="block text-900 text-xl font-medium mb-1">
                Engine
              </div>

              <div class="mt-2 md:mt-0 flex flex-nowrap">
                <div class="block text-700 text-xl font-medium mb-1">
                  4.0L V8
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="-mb-2 mt-2">
        <Button
          label="Book now!"
          icon="pi pi-cart-plus"
          class="p-button-rounded"
        />
        <Button
          label="Close Dialog"
          icon="pi pi-times"
          class="p-button-outlined p-button-rounded"
          @click="display = !display"
        />
      </div>
    </template>
  </Dialog>
</template>


<script>
export default {
  data() {
    return {
      display: false,
    };
  },

  methods: {},
};
</script>


<style scoped>
@media screen and (min-width: 768px) {
  #hero {
    height: 580px;
  }
}

@media screen and (max-width: 1300px) {
  #hero {
    height: 430px;
  }
}

@media screen and (min-width: 1960px) {
  #hero {
    height: 700px;
  }
}
</style>
