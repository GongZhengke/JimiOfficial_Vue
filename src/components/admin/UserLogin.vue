<template>
    <div class="demo-login">
        <Login @on-submit="handleSubmit">
            <UserName name="username" placeholder="请输入用户名" clearable />
            <Password name="password" />
            <Submit :loading="loading"/>

            <Button type="success" size="large" long @click="handleWeChat()" style="margin-top: 10px;">企业微信登录</Button>
        </Login>
    </div>
</template>
<script>
import axios from 'axios';
import qs from 'qs';
export default {
    data() {
        return {
            captcha: '',
            autoLogin: false,
            csrftoken: '',
            loading: false,
            redirectCode:'',
            redirectURL:''
        }
    },
    created() {
        let time = parseInt(new Date().getTime() / 1000) + '';
        this.captcha = time
        axios.get('/api/csrf/token')
            .then(res => {
                this.csrftoken = res.data.token
            }).catch(err => {
                console.log(err)
            })
        this.redirectCode = this.$route.query.redirect;
        if (this.redirectCode!=''&&this.redirectCode!=undefined){
            this.redirectURL = window.atob(this.redirectCode)
        }else{
            this.redirectURL = '/admin/index'
        }
        
    },
    methods: {
        handleSubmit(valid, { username, password }) {
            if (valid) {
                this.loading = true
                setTimeout(() => {
                    this.postData(username,password)
                }, 500);
            }
        },
        handleWeChat() {
            this.$Modal.info({
                title: '提示',
                content: '暂未接入企业微信登录'
            });
        },
        postData(username,password) {
            var url = '/api/admin/login'
            axios.post(url, qs.stringify({ stuid: username, stupwd: password }),
                {
                    headers: { "X-CSRFToken": this.csrftoken }
                })
                .then(res => {
                    if (res.data.errcode == 200) {
                        this.$Modal.success({
                            title: '提示',
                            content: res.data.errmsg,
                            onOk: () => {
                                this.$router.push(this.redirectURL)
                            }
                        });
                    } else {
                        this.$Modal.info({
                            title: '提示',
                            content: res.data.errmsg
                        });
                        this.loading = false
                    }
                }).catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>
<style>
.demo-login {
    max-width: 400px !important;
    margin: 0 auto;
}

.demo-login-captcha .ivu-btn {
    padding: 0;
}

.demo-login-captcha .ivu-btn img {
    height: 26px;
    position: relative;
    top: 4px;
}

.ivu-col-span-8 .ivu-btn-large {
    font-size: 11px !important;
    padding: 0 0px !important;
}

.demo-auto-login {
    margin-bottom: 24px;
    text-align: left;
}

.demo-auto-login a {
    float: right;
}

.ivu-checkbox-label-text {
    font-size: 15px !important;
}
</style>
