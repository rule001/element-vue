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
    console.log(val)
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
    console.log(payload)
    state.roles = payload
  },
  SET_NAME(state, payload) {
    console.log(payload)
    state.userName = payload
  },
  SET_INTRODUCE(state, payload) {
    state.introduce = payload
  },
  SET_ROUTES(state,payload){
    state.routes=[...currencyRoutes,...payload]
    console.log(payload)
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
              console.log(res)
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
      console.log('get')
      getInfo()
        .then(res => {
          console.log(res.data)
          if (res.code === 0) {
            const { name, roles, introduce } = res.data;
            console.log(roles)
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
    console.log('33333333333333333333333333')
    return new Promise(resolve=>{
        let routes=[]
        console.log('11111')
        console.log(rootGetters.userName)
        console.log('11111')
        if(rootGetters.userName === 'admin'){
            console.log('555555')
            routes =asyncRoutes || ''
            console.log(asyncRoutes)
            console.log(routes)
        }else{
            routes = forSearchArr(asyncRoutes,roles)
        }
        console.log(routes)
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
