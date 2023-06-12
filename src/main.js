import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config();

const app = createApp(App)

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080'
})

app.config.globalProperties.$axios = axiosInstance

// eslint-disable-next-line
app.use(store).use(router).mount('#app')
