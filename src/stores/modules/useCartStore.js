import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'
import { useUserStore } from './useUserStore.js'
import { insertCartAPI, getCartAPI, delCartAPI } from '@/apis/cart.js'
export const useCartStore = defineStore('Cart', () => {
  const UserStore = useUserStore()
  // const isLogin = ref(UserStore.userInfo?.token)
  const cartList = ref([])
  const addCart = async (goods) => {
    // login
    if (UserStore.userInfo?.token) {
      console.log('以登录')
      await insertCartAPI({ skuId: goods.skuId, count: goods.count })
      updateNewList()
    }
    else {
      const item = cartList.value.find((item) => goods.skuId === item.skuId)
      if (item) {
        item.count += goods.count
      } else {
        cartList.value.push(goods)
      }
    }
    ElMessage.success('加入购物车成功')
  }
  const delCart = async (skuId) => {
    if (UserStore.userInfo?.token) {
      await delCartAPI([skuId])
      updateNewList()
    } else {
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
      console.log(idx)
      cartList.value.splice(idx, 1)
    }
  }
  const updateNewList = async () => {
    const res = await getCartAPI()
    cartList.value = res.result

  }
  const singleCheck = (skuId, selected) => {
    const item = cartList.value.find(item => item.skuId === skuId)
    item.selected = selected
  }
  const allCheck = (selected) => {
    console.log(selected);
    cartList.value.forEach(item => item.selected = selected);
  }
  const removeCartList = () => {
    cartList.value = []
  }
  const total = computed(() => {
    return cartList.value.reduce((num, item) => num + item.count, 0)
  })
  const isCheckTotal = computed(() => {
    return cartList.value.filter(item => item.selected).reduce((num, item) => num + item.count, 0)
  })
  const totalPrice = computed(() => {
    return cartList.value.filter(item => item.selected).reduce((num, item) => num + item.count * item.price, 0)
  })
  const isAll = computed(() => {
    return cartList.value.every(i => i.selected)
  })
  return {
    cartList,
    addCart,
    delCart,
    allCheck,
    singleCheck,
    removeCartList,
    updateNewList,
    total,
    totalPrice,
    isAll,
    isCheckTotal
  }
}, {
  persist: {
    key: 'vue3-rabbit-cart'
  }
})