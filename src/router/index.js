import Vue from 'vue';
import Router from 'vue-router';

let route = Vue.use(Router);

export let router = new Router({
    routes: [
        {
            path: '/',
            name: 'mian',
            component: resolve => require(['@/components/main'], resolve),
            children: [
                {
                    path: '',
                    name: 'home',
                    component: resolve => require(['@/components/home/home'], resolve)
                },
                {
                    path: '/order',
                    name: 'order',
                    component: resolve => require(['@/components/order/order'], resolve)
                },
                {
                    path: '/personal',
                    name: 'personal',
                    component: resolve => require(['@/components/personal/personal'], resolve)
                }
            ]
        },
        {
            path: '/baojie',
            name: 'baojie',
            component: resolve => require(['@/components/baojie/baojie'], resolve)
        },
        {
            path: '/test1',
            name: 'test1',
            component: resolve => require(['@/components/test1'], resolve)
        }
    ]
});
router.beforeEach(function (to, from, next) {
    next();
});
router.afterEach(function (to, from, next) {
    // debugger
});
