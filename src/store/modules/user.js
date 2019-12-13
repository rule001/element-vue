import { login, getInfo } from '@/api/login'
import { Message } from 'element-ui'
import router, { resetRouter,asyncRoutes, currencyRoutes} from '@/router'

const state = {
  token: localStorage.getItem('token') ? localStorage.getItem('token') : '', // 认证凭证'
  userName: '',
  roles: [],
  introduce: '',
  routes:[],
  addRoutes:[]
}
const mutations = {
  SET_TOKEN(state, val) {
    state.token = val
    localStorage.setItem('token', val)
  },
  DEL_TOKEN(state) {
    state.token = ''
    state.userName = ''
    state.roles = ''
    state.introduce = ''
    localStorage.removeItem('token')
  },
  SET_ROLES(state, payload) {
    state.roles = payload
  },
  SET_NAME(state, payload) {
    state.userName = payload
  },
  SET_INTRODUCE(state, payload) {
    state.introduce = payload
  },
  SET_ROUTES(state,payload){
    state.routes=[...currencyRoutes,...payload]
    state.addRoutes=payload
  }
}
function forSearchArr(route, roles) {
  let arrNew = []
  for (let item of route) {
    let itemNew = { ...item } //解决浅拷贝共享同一内存地址
    if (roles.includes(itemNew.name)) {
      if (itemNew.children) {
        itemNew.children = forSearchArr(itemNew.children, roles)
      }
      arrNew.push(itemNew)
    }
  }
  return arrNew
}
const actions = {
  // user login
  _login({ commit }, formdatas) {
    return new Promise((resolve, reject) => {
      login(formdatas)
        .then(res => {
          if (res.code === 0) {
            if (res.data.success) {
              Message.success(res.data.msg)
              commit('SET_TOKEN', res.data.token)
            } else {
              Message.error(res.data.msg)
            }
            resolve(res)
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  loginOut({ commit }) {
    commit('DEL_TOKEN')
    resetRouter()
    router.push({
      path: '/login',
      query: {
        redirect: '/'
      }
    })
  },
  _getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getInfo()
        .then(res => {
          if (res.code === 0) {
            const { name, roles, introduce } = res.data;
            commit('SET_ROLES', roles)
            commit('SET_NAME', name)
            commit('SET_INTRODUCE', introduce)
          } else {
            Message.error(res.msg)
          }
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  getAsyncRoutes({commit,rootGetters},roles){
    return new Promise(resolve=>{
        let routes=[]
        if(rootGetters.userName === 'admin'){
            routes =asyncRoutes || ''
        }else{
            routes = forSearchArr(asyncRoutes,roles)
        }
        commit('SET_ROUTES',routes)
        resolve(routes)
    })
}
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
