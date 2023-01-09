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
          path: "/pages/contact",
          name: "contact",
          component: () => import("@/views/pages/Contact.vue"),
        },

        {
          path: "/pages/userprofile",
          name: "userprofile",
          component: () => import("@/views/pages/UserProfile.vue"),
        },

        {
          path: "/pages/projectinfo",
          name: "projectinfo",
          component: () => import("@/views/pages/ProjectInfo.vue"),
        },


      ],
    },
    {
      path: "/pages/login",
      name: "login",
      component: () => import("@/views/pages/Login.vue"),
    },
    {
      path: "/pages/register",
      name: "register",
      component: () => import("@/views/pages/Register.vue"),
    },
  ],
});

export default router;
