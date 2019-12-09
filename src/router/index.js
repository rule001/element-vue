import Vue from 'vue';
import Router from 'vue-router';
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
export default new Router({
    routes: [
      {
        path:'/login',
        name:'login',
        component:()=>import('../views/login'),
        meta:{title:'登录页'}
      }
    ]
  })
  