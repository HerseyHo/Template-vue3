import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

// 定义路由路径
const routes = [
  {
    path: "/",
    component: () => import("../pages/HelloWorld.vue"),
  },
  {
    path: "/map",
    component: () => import("../pages/Map/index.vue"),
  }
];

const router = createRouter({
  // 1. 使用传统url模式
  history: createWebHistory(),

  // 2. 使用带#号的哈希模式
  // history: createWebHashHistory(),

  routes,
});

export default router;
