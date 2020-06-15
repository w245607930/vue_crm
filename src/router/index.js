import Vue from 'vue'
import VueRouter from 'vue-router'

import ConstantRouterMap from "./routers";
Vue.use(VueRouter)

/**
 * 重写路由的push方法--->这个是vue-cli4.x以上的坑，不然的话，你是跳转不了的
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

export default new VueRouter({
  mode: 'history',  // require service support
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: ConstantRouterMap
});
