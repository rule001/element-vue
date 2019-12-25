import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

import Layout from '@/layout'
// import NavTest from './modules/nav-test'
import { Message } from 'element-ui'
import getTitle from '@/utils/getTitle'

/**
 * 路由相关属性说明
 * hidden: 当设置hidden为true时，意思不在sideBars侧边栏中显示
 * mete{
 * title: xxx,  设置sideBars侧边栏名称
 * icon: xxx,  设置ideBars侧边栏图标
 * noCache: true  当设置为true时不缓存该路由页面
 * }
 */

/*通用routers*/
export const currencyRoutes = [
  {
    path: '/',
    name: 'Login',
    redirect: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录页' },
    hidden: true,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  },
]
/*动态添加routers*/
export const asyncRoutes = [
  {
    path: '/index',
    name: 'Index',
    component: Layout,
    redirect: '/index/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/index/index.vue'),
        meta: { title: '首页', icon: 'el-icon-s-flag' }
      }
    ]
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Layout,
    redirect: '/demo',
    children: [
      {
        path: 'demo',
        name: 'demo',
        component: () => import('@/views/demo/index.vue'),
        meta: { title: 'demo', icon: 'el-icon-s-flag' }
      }
    ]
  },
  {
    path: '/test',
    name: 'Test',
    component: Layout,
    redirect: '/test',
    children: [
      {
        path: 'test',
        name: 'test',
        component: () => import('@/views/test/index.vue'),
        meta: { title: '测试页面', icon: 'el-icon-s-flag' }
      }
    ]
  },
  {
    path: '/page',
    name: 'page',
    component: Layout,
    meta: {
      title: '页面',
      icon: 'el-icon-lock'
    },
    children: [
      {
        path: 'page-page1',
        name: 'Page1',
        component: () => import('@/views/page/page1'),
        meta: { 
          title: '页面1', 
          icon: 'el-icon-user' 
        }
      },
      {
        path: 'page-page2',
        name: 'Page2',
        component: () => import('@/views/page/page2'),
        meta: {
          title: '页面2',
          icon: 'el-icon-user-solid'
        }
      },
    ]
  }
]
const creatRouter = () => {
  return new Router({
    routes: currencyRoutes,
    scrollBehavior() {
      return { x: 0, y: 0 }
    }
  })
}

const router = creatRouter()

// 解决addRoute不能删除动态路由问题
export function resetRouter() {
  const reset = creatRouter()
  router.matcher = reset.matcher
}

// 导航守卫
router.beforeEach(async (to, from, next) => {
  document.title = getTitle(to.meta.title)
  if (to.path === '/login') {
    next()
  } else {
    if (store.getters.token) {
      const hasRoles = store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          const { roles } = await store.dispatch('user/_getInfo')
          const addRoutes = await store.dispatch(
            'permission/getAsyncRoutes',
            roles
          )
          console.log(store.getters.addRoutes)
          router.addRoutes(addRoutes)

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (error) {
          Message.error(error)
        }
      }
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }
})
export default router
