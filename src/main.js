// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router/index'
import Vant from './vant/index';
import VueWechatTitle from 'vue-wechat-title'
import 'vant/lib/index.css';
import '~/css/main.css'
import '~/js/rem.js'
import store from './store/index.js'
import echarts from 'echarts'
import '~/js/all-province.js'
import myFilters from './public/filters'
import * as all from './public/fun'

Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(VueWechatTitle)
Vue.use(VueRouter)
Vue.use(all)
Vue.prototype.$echarts = echarts

Object.keys(myFilters).forEach(key => {
  Vue.filter(key, myFilters[key]);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
