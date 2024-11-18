<template>
    <div class="demo-login">
        <Login @on-submit="handleSubmit">
            <Mobile name="mobile" maxlength="11" clearable/>
            <Captcha name="captcha" :field="['mobile']" @on-get-captcha="handleGetCaptcha" maxlength="4" />
            <div class="demo-auto-login">
                <Checkbox v-model="autoLogin" size="large">7天内免登录</Checkbox>
                <a>忘记密码</a>
            </div>
            <Submit />
        </Login>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                autoLogin: false
            }
        },
        methods: {
            handleSubmit (valid, { mobile, captcha }) {
                if (valid) {
                    this.$Modal.info({
                        title: '输入的内容如下：',
                        content: 'mobile: ' + mobile + ' | captcha: ' + captcha
                    });
                }
            },
            handleGetCaptcha () {
                this.$Message.info('验证');
            }
        }
    }
</script>
<style>
    .demo-login{
        max-width: 400px !important;
        margin: 0 auto;
    }
    .ivu-col-span-8 .ivu-btn-large{
        font-size: 11px !important;
        padding: 0 12px;
    }
</style>
