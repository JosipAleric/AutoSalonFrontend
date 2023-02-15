<script setup>
import { ref, onMounted } from "vue";
import { useLayout } from "@/layout/composables/layout";
import axios from "axios";

const { layoutConfig } = useLayout();
const cars = ref(null);
const getAllCars = async () => {
  const data = await axios.get("/api/cars");
  cars.value = data.data.slice(0, 3);
  console.log(cars.value);
};

onMounted(() => {
  getAllCars();
});

const formatCurrency = (value) => {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
};
</script>

<template>
  <div class="surface-0 flex justify-content-center">
    <div id="home" class="landing-wrapper">
      <div
        id="hero"
        class="flex flex-column pt-4 px-4 lg:px-8 overflow-hidden"
        style="background-image: url('demo/images/landing/herocar.jpg'); background-repeat: no-repeat; background-position: center; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover"
      >
        <div class="mx-4 mt-auto pb-3 md:pb-8 md:mx-8 md:my-auto scalein animation-duration-1000">
          <h1 class="font-bold text-white"><span class="font-light block">Let us help you find</span>your dream car!</h1>

          <router-link to="/pages/shop" v-slot="{ navigate }">
            <Button label="Get Started" class="p-button-rounded text-xl border-none bg-primary font-normal text-white line-height-3 px-3" @click="navigate()"></Button>
          </router-link>
        </div>
      </div>

      <!--features start-->
      <div id="features" class="py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8">
        <div class="grid justify-content-center">
          <div class="col-12 text-center mt-8 mb-4">
            <h2 class="text-900 font-normal mb-2">Featured Cars</h2>
            <span class="text-600 text-2xl">Take a look at our featured cars...</span>
          </div>

          <div class="grid flex-grow-1">
            <div class="col-12 lg:col-6 xl:col-4 flex justify-content-center" v-for="car in cars" :key="car">
              <Card class="transition-duration-500 shadow-6 hover:shadow-8 px-2 md:px-0">
                <template #header>
                  <img :src="'http://pzi072023.studenti.sum.ba/backend/storage/' + car.image_path" style="height: 17rem" class="border-round" />
                </template>
                <template #title>
                  <div class="text-LEFT">{{ car.brand }} {{ car.model }}</div>
                </template>
                <template #subtitle>
                  <div class="flex align-items-center justify-content-between mt-3">
                    <div class="flex align-items-center">
                      <i class="pi pi-info-circle mr-2"></i>
                      <span class="font-semibold">SPORTS CAR</span>
                    </div>
                  </div>
                  <div class="flex justify-content-between mt-3">
                    <Chip
                      ><span class="text-md font-medium text-700 py-1"><i class="pi pi-money-bill text-md mr-1"></i>{{ formatCurrency(car.price).slice(0, -3) }}</span></Chip
                    >
                    <Chip
                      ><span class="text-md font-medium text-700 py-1"><i class="pi pi-cog text-md mr-1"></i>AWD</span></Chip
                    >
                    <Chip
                      ><span class="text-md font-medium text-700 py-1"><i class="pi pi-car text-md mr-1"></i>{{ car.power }} HP</span></Chip
                    >
                  </div>
                  <div class="flex justify-content-between mt-3">
                    <Chip
                      ><span class="text-md font-medium text-700 py-1"><i class="pi pi-wrench text-md mr-1"></i>{{ car.engine }}</span></Chip
                    >
                    <Chip
                      ><span class="text-md font-medium text-700 py-1"><i class="pi pi-caret-right text-md "></i>{{ car.fuel_type }}</span></Chip
                    >
                    <Chip
                      ><span class="text-md font-medium text-700 py-1"><i class="pi pi-wrench text-md mr-1"></i>{{ car.mileage }} KM</span></Chip
                    >
                  </div>
                </template>

                <template #footer>
                  <div class="flex justify-content-center -mt-5">
                    <router-link to="/pages/shop" v-slot="{ navigate }">
                    <Button class="bg-primary" icon="pi pi-chevron-circle-right" label="See More Details" @click="navigate()" />
                  </router-link>
                  </div>
                </template>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <!--features end-->
      <div id="highlights" class="py-6 px-4 lg:px-8 mx-0 my-6 lg:mx-8" style="border-radius: 20px">
        <div class="text-center">
          <h2 class="text-900 font-normal mb-2">About Us</h2>
          <span class="text-600 text-2xl">Luxury car company</span>
        </div>

        <div class="grid mt-6 pb-2 md:pb-8">
          <div class="flex justify-content-center col-12 lg:col-6 p-0 flex-order-1 lg:flex-order-0" style="border-radius: 8px">
            <img src="/demo/images/landing/cars.jpg" class="w-full border-round-xl mt-3" alt="mockup mobile" />
          </div>

          <div class="col-12 lg:col-6 my-auto flex flex-column lg:align-items-end text-center lg:text-right">
            <div class="flex align-items-center justify-content-center bg-purple-200 align-self-center lg:align-self-end" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
              <i class="pi pi-fw pi-info-circle text-5xl text-purple-700"></i>
            </div>
            <h2 class="line-height-1 text-900 text-4xl font-normal">Unique Car Buying Experience</h2>
            <span class="text-s00 text-2xl line-height-3 ml-0 md:ml-2" style="max-width: 650px">
              We provide a unique car buying experience to the customers. We understand that vehicle purchasing is a necessary, but sometimes unpleasant experience. Our goal is to provide the customer with an enjoyable, honest service by satisfying
              individual customers practical transportation needs with a quality product.
            </span>
          </div>
        </div>

        <div class="grid my-8 pt-2 md:pt-8">
          <div class="col-12 lg:col-6 my-auto flex flex-column text-center lg:text-left lg:align-items-start">
            <div class="flex align-items-center justify-content-center bg-yellow-200 align-self-center lg:align-self-start" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
              <i class="pi pi-fw pi-question-circle text-5xl text-yellow-700"></i>
            </div>
            <h2 class="line-height-1 text-900 text-4xl font-normal">Why Us?</h2>
            <span class="text-700 text-2xl line-height-3 mr-0 md:mr-2" style="max-width: 650px">
              We also believe it is important to have quality vehicles at a low cost, and will back each vehicle with a 30 day limited warranty. Our company will provide job satisfaction and fair compensation to its employees, and a fair return to
              its owners.
            </span>
          </div>

          <div class="flex justify-content-end flex-order-1 sm:flex-order-2 col-12 lg:col-6 p-0">
            <img src="/demo/images/landing/about.jpg" class="w-full border-round-xl mt-3" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 768px) {
  #hero {
    -webkit-clip-path: ellipse(150% 87% at 93% 13%);
    clip-path: ellipse(150% 87% at 93% 13%);
    height: 580px;
  }
}

@media screen and (min-width: 1300px) {
  #hero > div > p {
    max-width: 450px;
  }
}

@media screen and (max-width: 1300px) {
  #hero {
    height: 430px;
  }

  #hero > div > p {
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (min-width: 1960px) {
  .landing-wrapper {
    width: 100%;
  }

  #hero {
    height: 700px;
  }
}

@media screen and (min-width: 992px) {
  #features {
    margin-left: 0px !important;
    margin-right: 0px !important;
  }
}
</style>
