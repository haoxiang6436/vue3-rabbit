import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useCartStore } from './useCartStore.js'
import { mergeCartAPI } from '@/apis/cart.js'

export const useUserStore = defineStore('User', () => {
  const CartStore = useCartStore()
  const userInfo = ref({})
  const setUserInfo = async (value) => {
    userInfo.value = value
    console.log(CartStore.cartList.length !== 0 ? '需要合并购物车' : '无需合并');
    await mergeCartAPI(CartStore.cartList.map(item => {
      return {
        skuId: item.skuId,
        selected: item.selected,
        count: item.count
      }
    }))
    CartStore.updateNewList()
  }
  const removeUserInfo = () => {
    userInfo.value = null
    CartStore.removeCartList()
  }
  return {
    userInfo,
    setUserInfo,
    removeUserInfo
  }
}, {
  persist: {
    key: 'vue3-rabbit-userinfo'
  }
})