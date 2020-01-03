import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user.js'
import permission from './modules/permission.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    user,
    permission
  },
  getters
})
export default store
