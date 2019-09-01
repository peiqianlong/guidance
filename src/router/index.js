import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/view/index/index'], resolve),
      children: [{
        path: "/",
        name: "首页",
        component: resolve => require(['@/components/newindexecer'], resolve),
      }, {
        path: "/make",
        name: "制作",
        component: resolve => require(['@/components/ecermake'], resolve),
      }, {
        path: "/class",
        name: "类型",
        component: resolve => require(['@/components/ecerclass'], resolve),
      }]
    }
  ]
})
