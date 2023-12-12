import axios from "axios"
import { ElMessage } from "element-plus"
import { useUserStore } from "@/stores"
import router from '@/router';

const instance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios请求拦截器
instance.interceptors.request.use(config => {
  const userStore = useUserStore()
  config.headers.Authorization = userStore.userInfo?.token?`Bearer ${userStore.userInfo.token}`:''
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
instance.interceptors.response.use(res => {
  return res.data
}, e => {
  const userStore = useUserStore()
  if (e.response.status === 401) {
    userStore.removeUserInfo()
    router.push('/login')
    ElMessage.error('登录状态失效，重新登录')
  }else{
    ElMessage.error(e.response.data.message)
  }
  return Promise.reject(e)
})


export default instance