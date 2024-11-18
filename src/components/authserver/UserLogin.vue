<template>
  <n-spin :show="loading">
    <div class="demo-login">
      <Login @on-submit="handleSubmit">
        <UserName name="username" placeholder="请输入用户名" clearable :disabled="loading"/>
        <Password name="password" :disabled="loading"/>

        <div class="demo-auto-login"></div>
        <Submit />
      </Login>
    </div>
  </n-spin>
</template>
<script setup>
import { reactive, computed, ref } from "vue";
import { Modal } from "ant-design-vue";
import { get, post } from "@/JS/ajax";
import { useRouter, useRoute } from "vue-router";
import { message } from "ant-design-vue";

// 定义响应式数据
const captcha = ref("");
const autoLogin = ref(false);
const router = useRouter();
const route = useRoute();
const loading = ref(false);

// 创建时设置 captcha
const handleGetCaptcha = () => {
  const time = parseInt(new Date().getTime() / 1000) + "";
  captcha.value = time;
};

// 调用创建时的逻辑
handleGetCaptcha();

// 表单提交处理逻辑
const handleSubmit = (valid, { username, password, captcha }) => {
  if (valid) {
    SigninFunc(username, password);
  }
};

const SigninFunc = async (username, password) => {
  const params = new URLSearchParams(window.location.search);
  const url = btoa(decodeURIComponent(params.get("service") || "/"));
  loading.value = true;

  try {
    const response = await post("system/login", { username, password });
    
    if (response.token) {
      localStorage.setItem("authToken", response.token);
      localStorage.setItem("tokenTime", response.expireTime);
      localStorage.setItem("expireTime", response.expireTime);
      localStorage.setItem("loginInfo", JSON.stringify(response));

      // 在登录成功后获取用户信息
      getUserInfo(url);
    } else {
      message.error(response.detail);
      loading.value = false;
    }
  } catch (error) {
    setTimeout(() => {
      message.warning("用户名或密码错误");
      loading.value = false;
    }, 1000);
  }
};

const getUserInfo = async (url) => {
  loading.value = true; 

  try {
    const response = await get("system/userinfo");

    if (response.username) {
      message.success("登录成功");
      localStorage.setItem("userInfo", JSON.stringify(response));

      setTimeout(() => {
        loading.value = false; 
        window.location.replace(atob(url));
      }, 1000); 
    } else {
      message.error(response.detail);
      loading.value = false;
    }
  } catch (error) {
    message.warning("登录失败，服务不可用");
    loading.value = false;
  }
};
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

<!-- <Captcha class="demo-login-captcha" name="captcha" :count-down="0" @on-get-captcha="handleGetCaptcha" maxlength="4">
                <template #text>
                  <img :src="'https://authserver6.zjweu.edu.cn/authserver/captcha.html?ts=' + captcha">
                </template>
            </Captcha> -->

<!-- <Checkbox v-model="autoLogin" size="large">7天内免登录</Checkbox> -->
<!-- <a>忘记密码</a> -->
