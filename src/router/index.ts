import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/categories",
    name: "categories",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/donate",
    name: "donate",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/account",
    name: "account",
    component: () => import("@/views/HomeView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
