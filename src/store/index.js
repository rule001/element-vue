import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import ss from './modules/ss';
import getters from './getters'
Vue.use(Vuex)
const store=new Vuex.Store({
    modules:{
        user,
        ss
    },
    getters
})
export default store