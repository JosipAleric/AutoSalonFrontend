import { createRouter, createWebHistory } from "vue-router";
import Landing from "../views/Landing.vue";
import AppLayout from "@/layout/AppLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: AppLayout,
      children: [
        {
          path: "/",
          name: "landing",
          component: Landing,
        },
        {
          path: "/pages/shop",
          name: "shop",
          component: () => import("@/views/pages/Shop.vue"),
        },
        {
          path: "/pages/user/userprofile",
          name: "userprofile",
          component: () => import("@/views/pages/user/UserProfile.vue"),
        },
        {
          path: "/pages/projectinfo",
          name: "projectinfo",
          component: () => import("@/views/pages/ProjectInfo.vue"),
        },
        {
          path: "/pages/user/dashboard",
          name: "dashboard",
          component: () => import("@/views/pages/user/Dashboard.vue"),
        },
        {
          path: "/pages/user/orders",
          name: "orders",
          component: () => import("@/views/pages/user/Orders.vue"),
        },
      ],
    },
    {
      path: "/pages/auth/login",
      name: "login",
      component: () => import("@/views/pages/auth/Login.vue"),
    },
    {
      path: "/pages/auth/register",
      name: "register",
      component: () => import("@/views/pages/auth/Register.vue"),
    },
  ],
});

export default router;
