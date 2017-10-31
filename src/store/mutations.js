import {CHANGELOGIN} from './mutationTypes';

const changeLogin = (state, payload) => {
    state.isLogin = payload.isLogin;
}
const changeUserInfo = (state,payload) => {
    state.userInfo = Object.assign({},payload.userInfo);
}















export default {
    changeLogin,
    changeUserInfo
}