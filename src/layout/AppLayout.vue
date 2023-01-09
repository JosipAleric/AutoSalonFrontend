<script setup>
import AppTopbar from './AppTopbar.vue';
import AppFooter from './AppFooter.vue';
import { useLayout } from '@/layout/composables/layout';
const { layoutConfig, layoutState } = useLayout();

</script>

<template>
    <div class="layout-wrapper" :class="containerClass">
        <app-topbar></app-topbar>
            <div class="layout-main">
                <router-view></router-view>
            </div>
            <app-footer></app-footer>
        <div class="layout-mask"></div>
    </div>
</template>

<style lang="scss" scoped>

</style>
