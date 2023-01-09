<script setup>
import { useLayout } from '@/layout/composables/layout';
const { layoutConfig } = useLayout();

</script>

<template>
    <div class="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static mb-3">
        <a class="flex align-items-center" href="/"> <img src="/layout/images/logo.png" alt="AppLogo" height="50" class="mr-2" /><span class="text-900 font-medium text-2xl line-height-3 mr-8">AutoSalon</span> </a>
        <a class="cursor-pointer block lg:hidden text-700"  v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
            <i class="pi pi-bars text-4xl"></i>
        </a>
        <div class="align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2" style="top: 100px">
            <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer">
                <li>
                    <router-link to="/" v-slot="{ navigate }">
                        <a @click="navigate()" class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                            <span>Home</span>
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/pages/shop" v-slot="{ navigate }">
                        <a @click="navigate()" class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                            <span>Shop</span>
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/pages/contact" v-slot="{ navigate }">
                        <a @click="navigate()" class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3" >
                            <span>Contact Us</span>
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/pages/projectinfo" v-slot="{ navigate }">
                        <a @click="navigate()" class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                            <span>Project Info</span>
                        </a>
                    </router-link>
                </li>
            </ul>
            <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
                <router-link to="/pages/login" v-slot="{ navigate }">
                    <Button role="link" label="Login" class="p-button-text p-button-rounded border-none font-light line-height-2 text-primary" @click="navigate()"></Button>
                </router-link>
                <router-link to="/pages/register" v-slot="{ navigate }">
                    <Button role="link" label="Register" class="p-button-text bg-primary p-button-rounded border-none font-light line-height-2 text-white" @click="navigate()"></Button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
