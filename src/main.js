import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

const app = createApp(App)

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_AXIOS_BASE_URL,
    withCredentials: true
})

app.config.globalProperties.$axios = axiosInstance

library.add(fas)

// eslint-disable-next-line
//app.component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(store).use(router).mount('#app')