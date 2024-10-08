import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import pinia from '@/stores'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import 'swiper/css';
import '@/assets/css/bootstrap-custom.css'
import '@/styles/style.css'

import '@/assets/js/vendor.min.js' //第三方js库合集-这里主要是jquery相关

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(ElementPlus)

app.mount('#app')

