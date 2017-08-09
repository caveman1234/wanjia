// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import axios from 'axios';
Vue.config.productionTip = false;


import  {AlertPlugin, LoadingPlugin} from 'vux'
Vue.use(AlertPlugin);
Vue.use(LoadingPlugin);
//axios,begin+++++++++++
Vue.prototype.$http = axios;
axios.interceptors.request.use(function (config) {
    vuxLoading.show();
    return config;
}, function (error) {
    vuxLoading.hide();
    return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
    setTimeout(x => vuxLoading.hide(), 500);
    // vuxLoading.hide();
    return response;
}, function (error) {
    vuxLoading.hide();
    return Promise.reject(error);
});
//axios,end++++++++++++++

/* eslint-disable no-new */
let instance = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});
window.vuxLoading = instance.$vux.loading;
