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
            path: '/serviceCharge',
            name: 'serviceCharge',
            component: resolve => require(['@/components/serviceCharge/serviceCharge'], resolve)
        },
        {
            path: '/serviceItem',
            name: 'serviceItem',
            component: resolve => require(['@/components/serviceItem/serviceItem'], resolve)
        },
        {
            path: '/aboutUs',
            name: 'aboutUs',
            component: resolve => require(['@/components/aboutUs/aboutUs'], resolve)
        },
        {
            path: '/serviceSecurity',
            name: 'serviceSecurity',
            component: resolve => require(['@/components/serviceSecurity/serviceSecurity'], resolve)
        },
        {
            path: '/baojie',
            name: 'baojie',
            component: resolve => require(['@/components/baojie/baojie'], resolve)
        }
    ]
});
router.beforeEach(function (to, from, next) {
    next();
});
router.afterEach(function (to, from, next) {
    // debugger
});
