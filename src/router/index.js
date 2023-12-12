import { createRouter, createWebHistory } from 'vue-router'

import login from '@/views/Login/index.vue'
import layout from '@/views/Layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', component: layout,
      children: [
        { path: '/', component: () => import('@/views/Home/index.vue') },
        { path: '/category/:id', component: () => import('@/views/Category/index.vue') },
        { path: '/category/sub/:id', component: () => import('@/views/SubCategory/index.vue') },
        { path: '/detail/:id', component: () => import('@/views/Detail/index.vue') },
        { path: '/cart', component: () => import('@/views/cart/index.vue') },
      ]
    },
    { path: '/login', component: login },
  ],
  // 路由滚动行为
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
