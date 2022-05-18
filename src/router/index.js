import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  // 使用history模式，并且兼容独立运行
  // 当使用微应用运行的时候，使用`/base`为baseUrl，因为我们在主应用配置的activeRule是`/base`
  history: createWebHistory(window && window.__POWERED_BY_QIANKUN__ ? '/app-vue3/' : '/'),
  routes,
});

export default router;
