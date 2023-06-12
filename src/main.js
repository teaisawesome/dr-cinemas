import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

const app = createApp(App)

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_AXIOS_BASE_URL
})

app.config.globalProperties.$axios = axiosInstance

// eslint-disable-next-line
app.use(store).use(router).mount('#app')
