import { createRouter, createWebHistory } from 'vue-router'

import login from '@/views/Login/index.vue'
import layout from '@/views/Layout/index.vue'
import home from '@/views/Home/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', component: layout,
      children: [
        { path: '/', component: home },
        // 分类页
        { path: '/category/:id', component: () => import('@/views/Category/index.vue') },
        // 详情分类页
        { path: '/category/sub/:id', component: () => import('@/views/SubCategory/index.vue') },
        // 商品详情页
        { path: '/detail/:id', component: () => import('@/views/Detail/index.vue') },
        // 购物车列表页
        { path: '/cart', component: () => import('@/views/Cart/index.vue') },
        // 结算页
        { path: '/checkout', component: () => import('@/views/Checkout/index.vue') },
        // 支付页
        { path: '/pay/:id', component: () => import('@/views/pay/index.vue') },
        // 订单支付结果
        { path: '/paycallback/', component: () => import('@/views/PayCallback/index.vue') },
        // 会员中心
        {
          path: '/member/', component: () => import('@/views/Member/index.vue'),
          children: [
            { path: '', component: () => import('@/views/Member/components/UserInfo.vue') },
            { path: 'order/', component: () => import('@/views/Member/components/UserOrder.vue') }
          ]
        },
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
