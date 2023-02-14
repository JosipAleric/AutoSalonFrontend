<script setup>
import AdminPanel from "./DashboardMenu/AdminPanel.vue";
import Cars from "./DashboardMenu/Cars.vue";
import Users from "./DashboardMenu/Users.vue";
import AllOrders from "./DashboardMenu/AllOrders.vue";
</script>

<template>
  <div class="m-2 md:m-5">
    <div class="card border-blue-100">
      <TabMenu :model="items" v-model:activeIndex="active" class="dark-panel"/>
      <div class="mt-5 mx-0 md:mx-3 lg:mx-5">
        <admin-panel v-if="this.active == 0"></admin-panel>
        <cars v-if="this.active == 1"></cars>
        <users v-if="this.active == 2"></users>
        <all-orders v-if="this.active == 3"></all-orders>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      items: [
        { label: "Dashboard", icon: "pi pi-fw pi-home" },
        { label: "Cars", icon: "pi pi-fw pi-car" },
        { label: "Users", icon: "pi pi-fw pi-user" },
        { label: "Orders", icon: "pi pi-fw pi-wallet" },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">

// ::v-deep(.dark-panel.p-tabmenu) {
//   .p-menuitem-link{
//         margin: 0 0 0 0 !important
//     }

// }
</style>
