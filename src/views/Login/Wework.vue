<template>
  <div class="login-wework">
    <a-spin :spinning="loading">
      <template #tip>
        <div style="margin-top: 5px">{{ loginTip }}</div>
      </template>
    </a-spin>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { get } from "@/JS/ajax";
import { message } from "ant-design-vue";
import { Modal } from "ant-design-vue";

const route = useRoute();
const router = useRouter();

const loginTip = ref("正在登录，请稍后");

onMounted(() => {
  const code = route.query.code;
  if (code) {
    weworkLogin(code);
  } else {
    loading.value = false;
  }
});
const weworkLogin = async (code) => {
  const params = new URLSearchParams(window.location.search);
  const url = params.get('state')||null;
  var redirect = '/'
  if (url){
    redirect = atob(url)
  }
  try {
    const response = await get("ac_wework/callback", { code: code }, false);
    if (response.code == 200) {
      localStorage.setItem('authToken', response.data.token)
      localStorage.setItem('tokenTime', response.time)
      localStorage.setItem('userInfo', JSON.stringify(response.data.userInfo))
      loginTip.value = "登录成功，正在跳转";
      setTimeout(() => {
          window.location.replace(redirect);
      }, 1000)
    } else {
      loginTip.value = "登录失败";
      Modal.error({
        title: "登录失败",
        content: response.message,
      });
    }
  } catch (error) {
    message.warning(error);
  }
};
</script>
<style scoped>
.login-wework {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.login-content {
  text-align: center;
  padding: 10px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>
