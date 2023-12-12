import { createApp } from 'vue'
import pinia from '@/stores'
import App from './App.vue'
import router from './router'
import '@/styles/transition.scss'
import '@/styles/common.scss'
import 'element-plus/theme-chalk/el-message.css'
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')

// 指令
import { directivePlugin } from '@/directives'
app.use(directivePlugin)
// 组件
import { componentPlugin } from '@/components'
app.use(componentPlugin)
