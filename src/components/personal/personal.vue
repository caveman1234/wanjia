<template>
    <div class="personal">
        <div v-if="isLogin">
            <div>
                <group title="用户信息：">
                    <x-input title="用户名：" disabled v-model="userInfo.userName"></x-input>
                    <x-input title="用户ID：" disabled v-model="userInfo.userId"></x-input>
                </group>
            </div>
            <x-button @click.native="unLogin" type="primary">退出登陆</x-button>

        </div>
        <div v-else class="loginContent">
            <div v-if="isLoginContent">
                <group>
                    <x-input v-model="userName" title="用户名：" name="username" placeholder="请输入用户名" type="text"></x-input>
                </group>
                <group>
                    <x-input v-model="userPwd" title="密码：" name="password" placeholder="请输密码" type="text"></x-input>
                </group>
            </div>
            <div v-else>
                <group>
                    <x-input v-model="registUserName" title="用户名：" name="username" placeholder="请输入用户名" type="text"></x-input>
                </group>
                <group>
                    <x-input v-model="registUserPwd" title="密码：" name="password" placeholder="请输密码" type="text"></x-input>
                </group>
            </div>
            <div class="loginButton">
                <x-button @click.native="login" type="primary">登陆</x-button>
            </div>

            <div class="registButton">
                <x-button @click.native="regist">注册</x-button>
            </div>
        </div>

    </div>
</template>

<script>
import { XButton, Group, XInput } from 'vux';
import { mapMutations, mapState } from 'vuex';
export default {
    components: {
        XButton, Group, XInput
    },
    data() {
        return {
            showScrollBox: true,
            userName: '',
            userPwd: '',
            registUserName: '',
            registUserPwd: '',
            isLoginContent: true
        }
    },
    methods: {
        ...mapMutations({
            changeLogin: "changeLogin",
            changeUserInfo: "changeUserInfo"
        }),
        login() {
            var params = {
                userName: this.userName,
                userPwd: this.userPwd
            }
            this.$http.post("http://www.69212222.com:8080/housekeep/vip/login", params)
                .then(res => {
                    console.log(res);
                    this.userName = '';
                    this.userPwd = '';
                    if (res.data.success) {
                        this.changeUserInfo({ userInfo: res.data.data });
                        this.$vux.toast.show({
                            text: res.data.msg
                        })
                        this.changeLogin({ isLogin: true });
                    } else {
                        this.$vux.toast.show({
                            text: res.data.msg,
                            type: "warn"
                        })
                    }
                })
                .catch(res => {
                    console.log(res);
                })
            // this.changeLogin({ isLogin: true });
        },
        regist() {
            var params = {
                userName: this.userName,
                userPwd: this.userPwd
            }
            this.$http.post("http://www.69212222.com:8080/housekeep/vip/register", params)
                .then(res => {
                    this.userName = '';
                    this.userPwd = '';
                    console.log(res);
                    if (res.data.success) {
                        this.changeUserInfo({ userInfo: res.data.data });
                        this.$vux.toast.show({
                            text: res.data.msg
                        })
                        this.changeLogin({ isLogin: true });
                    } else {
                        this.$vux.toast.show({
                            text: res.data.msg,
                            type: "warn"
                        })
                    }
                })
                .catch(res => {
                    console.log(res);
                })
        },
        unLogin() {
            this.changeLogin({ isLogin: false });
        }
    },
    computed: {
        ...mapState({
            isLogin: state => state.isLogin,
            userInfo: state => state.userInfo
        })
    }
}

</script>

<style lang="scss" scoped>
@import "personal.scss";
</style>