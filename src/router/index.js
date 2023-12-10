import { createRouter, createWebHistory } from 'vue-router'

import login from '@/views/Login/index.vue'
import layout from '@/views/Layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', component: layout,
      // redirect: '/home',
      children: [
        { path: '/', component: () => import('@/views/Home/index.vue') },
        { path: '/category/:id', component: () => import('@/views/Category/index.vue') }
      ]
    },
    { path: '/login', component: login },
  ]
})

export default router
