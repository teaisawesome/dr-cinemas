import { createStore } from 'vuex'
import movies from './movies'
import staffs from './staffs'

export default createStore({
  modules: {
    movies,
    staffs
  }
})
