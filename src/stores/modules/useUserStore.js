import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('User', () => {
  const userInfo = ref({})
  const setUserInfo = (value) => {
    userInfo.value = value
  }
  const removeUserInfo = () => {
    userInfo.value = null
  }
  return {
    userInfo,
    setUserInfo,
    removeUserInfo
  }
}, {
  persist: {
    key:'vue3-rabbit-userinfo'
  }
})