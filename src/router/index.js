//引入vue
import Vue from 'vue';
// 引入vue-router
import Router from 'vue-router';
import Layout from '@/layout'
import store from '@/store'
import { Message } from 'element-ui'
// 第三方的库需要use一下才可以使用
Vue.use(Router)
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
export const currencyRoutes=[
      {
        path:'/login',
        name:'login',
        component:()=>import('../views/login'),
        meta:{title:'登录页'}
      },
      {
        path:'/404',
        component:()=>import('../views/login'),
      },
      {
        path:'/',
        name:'Home',
        component:Layout,
        redirect:'/index',
        children:[
          {
            path:'index',
            name:'index',
            component:()=>import('@/views/index'),
            meta:{title:'指南',icon:'el-icon-s-data'}
          }
        ]
      },
      {
        path:'/page1',
        name:'page1',
        component:()=>import('@/views/page/page1.vue'),
        meta:{title:'页面1'}
      },
      {
        path:'/page2',
        name:'page2',
        component:()=>import('@/views/page/page2.vue'),
        meta:{title:'页面2'}
      },
      {
        path: '/page3',
        name: 'page3',
        component: Layout,
        // redirect: '/driver/index',
        children: [
          {
            path: 'index',
            name: 'Driver-index',
            component: () => import('@/views/page/page3'),
            meta: { title: '问问', icon: 'el-icon-s-flag' }
          }
        ]
      }
];
export const asyncRoutes = [
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/login'),
    meta:{title:'登录页'}
  },
  {
    path:'/',
    name:'Home',
    component:Layout,
    redirect:'/index',
    children:[
      {
        path:'index',
        name:'index',
        component:()=>import('@/views/index'),
        meta:{title:'指南',icon:'el-icon-s-data'}
      }
    ]
  },
  {
    path:'/page1',
    name:'page1',
    component:()=>import('@/views/page/page1.vue'),
    meta:{title:'页面1'}
  },
  {
    path:'/page2',
    name:'page2',
    component:()=>import('@/views/page/page2.vue'),
    meta:{title:'页面2'}
  },
  {
    path: '/page3',
    name: 'page3',
    component: Layout,
    // redirect: '/driver/index',
    children: [
      {
        path: 'index',
        name: 'Driver-index',
        component: () => import('@/views/page/page3'),
        meta: { title: '问问', icon: 'el-icon-s-flag' }
      }
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
          const addRoutes = await store.dispatch('user/getAsyncRoutes',roles)
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