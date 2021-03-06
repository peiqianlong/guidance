import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
export default new Router({
    routes: [{
        path: '/',
        component: resolve => require(['@/view/index/index'], resolve),
        children: [{
                path: "/temp",
                name: "模板",
                component: resolve => require(['@/components/temp'], resolve),
            },
            {
                path: "/index",
                name: "我的模板",
                component: resolve => require(['@/components/mytemp'], resolve),
            },
            {
                path: "/recycle",
                name: "回收站",
                component: resolve => require(['@/components/recycle'], resolve),
            },
            {
                path: "/alltemp",
                name: "全部网站",
                component: resolve => require(['@/components/alltemp'], resolve),
            },
            {
                path: "/occupation",
                name: "职业选择",
                component: resolve => require(['@/components/occupation'], resolve),
            },
            {
                path: "/website",
                name: "网站选择",
                component: resolve => require(['@/components/website'], resolve),
            }
        ]
    }]
})