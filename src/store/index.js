import Vue from 'vue';
import Vuex from 'vuex';
import actions from './action';
import mutations from './mutations';
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        isLogin:false,
        userInfo:{}
    },
    actions,
    mutations
})