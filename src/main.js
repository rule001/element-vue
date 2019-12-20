import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/style/index.scss' // glob scss
import {installCardDragger} from 'carddragger'
Vue.config.productionTip=false
Vue.use(ElementUI);
Vue.use(installCardDragger)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
