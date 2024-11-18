<template>
    
  <div class="home">
    
    <n-layout>
      <n-layout-header >
        <t-navbar :fixed="false">
          <template #left>
            <t-image @click="gort('/')"  src="/logo.png" class="logo" />
          </template>
          <template #right>
            <span style="margin-top: 7px;font-size: 16px;font-weight: 600;">SJCID 身份认证</span>
          </template>
        </t-navbar>
      </n-layout-header>

      <n-layout
        style="
          max-width: 450px;
          margin: 0 auto;
          margin-top: 0px;
          margin-bottom: 10vh;
          padding: 25px;
        "
      >
        <n-tabs
          class="card-tabs"
          v-model:value="nowtab"
          size="large"
          animated
          pane-wrapper-style="margin: 0 -4px"
          pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
        >
          <n-tab-pane name="signin" tab="登录">
            <n-form ref="formRef" :model="formState" :rules="rules">
              <n-form-item label="用户名" path="username">
                <n-input
                  v-model:value="formState.username"
                  placeholder="请输入用户名"
                />
              </n-form-item>
              <n-form-item label="密码" path="password">
                <n-input
                  v-model:value="formState.password"
                  type="password"
                  show-password-on="mousedown"
                  placeholder="请输入密码"
                />
              </n-form-item>
              <n-button
                type="primary"
                attr-type="button"
                size="large"
                block
                secondary
                strong
                @click="onFinish"
                :disabled="!isSigninFormValid || loading"
                :loading="loading"
              >
                登录
              </n-button>
            <n-divider dashed>
              <span style="font-size: 12px; color: #bbb">校记身份认证</span>
            </n-divider>
                  <n-button
                    type="warning"
                    attr-type="button"
                    size="large"
                    block
                    secondary
                    strong
                    @click="routerRp('/resetpwd.html')"
                    style="margin-top: 0px"
                  >
                    重置密码
                  </n-button>
            </n-form>
          </n-tab-pane>
          <n-tab-pane name="signup" tab="注册">
            <n-alert title="提示" type="info" style="margin-bottom: 15px">
              校记内部人员仅支持“你好水分子”企业微信扫码登录。
            </n-alert>
            <n-alert title="提示" type="warning" style="margin-bottom: 15px">
              填写班级时请写完整班级名称或简称，如“水工24-1”，请勿只填写“24-1”“1”等名称！
            </n-alert>
            <n-form ref="regFormRef" :model="regForm" :rules="regRules">
              <n-form-item label="学工号" path="username">
                <n-input
                  v-model:value="regForm.username"
                  placeholder="请输入学工号"
                />
              </n-form-item>
              <n-form-item label="密码" path="password">
                <n-input
                  v-model:value="regForm.password"
                  type="password"
                  show-password-on="mousedown"
                  placeholder="请输入密码"
                />
              </n-form-item>
              <n-form-item label="姓名" path="name">
                <n-input
                  v-model:value="regForm.name"
                  placeholder="请输入姓名"
                />
              </n-form-item>
              <n-form-item label="性别" path="gender">
                <n-radio-group v-model:value="regForm.gender" name="gender">
                  <n-space>
                    <n-radio :value="1">男 </n-radio>
                    <n-radio :value="0">女 </n-radio>
                  </n-space>
                </n-radio-group>
              </n-form-item>
              <n-form-item label="手机号" path="mobile">
                <n-input
                  v-model:value="regForm.mobile"
                  placeholder="请输入手机号"
                />
                <n-button
                  @click="getVerificationCode"
                  :disabled="regForm.mobile === '' || loading || countdown > 0"
                >
                  {{
                    countdown > 0 ? `${countdown}秒后重新获取` : "获取验证码"
                  }}
                </n-button>
              </n-form-item>
              <n-form-item label="验证码" path="verificationCode">
                <n-input
                  v-model:value="regForm.verificationCode"
                  placeholder="请输入验证码"
                />
              </n-form-item>
              <n-form-item label="学院" path="college">
                <n-select
                  v-model:value="regForm.college"
                  placeholder="请选择学院"
                  :options="collegeOptions"
                />
              </n-form-item>
              <n-form-item label="班级" path="class_name">
                <n-input
                  v-model:value="regForm.class_name"
                  placeholder="请输入班级"
                />
              </n-form-item>
              <n-form-item label="所在校区" path="campus">
                <n-select
                  v-model:value="regForm.campus"
                  placeholder="请选择所在校区"
                  :options="campusOptions"
                />
              </n-form-item>

              <n-button
                type="primary"
                size="large"
                block
                secondary
                strong
                @click="reg"
                :disabled="!isSignupFormValid"
              >
                注册
              </n-button>
            </n-form>
          </n-tab-pane>
        </n-tabs>
        <n-divider dashed>
          <span style="font-size: 12px; color: #bbb">内部用户互联登录</span>
        </n-divider>
        <n-button
          style="margin-top: 0px"
          type="info"
          block
          secondary
          strong
          @click="weworkQR"
        >
          <template #icon>
            <n-icon>
              <AtCircle />
            </n-icon>
          </template>
          企业微信扫码
        </n-button>
        <n-button
          style="margin-top: 10px"
          type="info"
          block
          secondary
          strong
          @click="weworkLogin"
        >
          <template #icon>
            <n-icon>
              <LogoWechat />
            </n-icon>
          </template>
          企业微信授权登录
        </n-button>
      </n-layout>
    </n-layout>
  </div>
</template>

<script setup>
import { message } from "ant-design-vue";
import { reactive, computed, ref } from "vue";
import { get, post } from "@/JS/ajax";
import { showSuccessToast, showFailToast } from "vant";
import { NIcon } from "naive-ui";
import { AtCircle, LogoWechat } from "@vicons/ionicons5";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const routerGo = (url) => {
  router.push(url);
};

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const nowtab = ref("signin");
const formRef = ref(null);
const regFormRef = ref(null);
const loading = ref(false);

const formState = ref({
  username: "",
  password: "",
  remember: true,
});
const routerRp = (url) => {
    window.location.replace(url)
  };
const regForm = ref({
  username: "",
  password: "",
  name: "",
  mobile: "",
  verificationCode: "",
  gender: null,
  class_name: "",
  college: null,
  campus: null,
});

const countdown = ref(0);
let timer = null;

const rules = {
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
};

const regRules = {
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  mobile: [
    { required: true, message: "请输入手机号", trigger: "blur" },
    {
      min: 11,
      max: 11,
      pattern:
        /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[012356789]))\d{8}$/,
      message: "请输入正确的手机号",
      trigger: "blur",
    },
  ],
  verificationCode: [
    { required: true, message: "请输入验证码", trigger: "blur" },
  ],
  college: [
    { required: true, message: "请选择所在学院", trigger: ["blur", "change"] },
  ],
  class_name: [{ required: true, message: "请输入班级", trigger: "blur" }],
  campus: [
    { required: true, message: "请选择所在校区", trigger: ["blur", "change"] },
  ],
  gender: [
    {
      type: "number",
      required: true,
      message: "请选择性别",
      trigger: "change",
    },
  ],
};

const collegeOptions = [
  "水利工程学院",
  "环境科学与工程学院",
  "建筑工程学院",
  "测绘科学与技术学院",
  "机械工程学院",
  "电气工程学院",
  "经济与管理学院",
  "计算机科学与技术学院",
  "人文与外国语学院",
].map((v) => ({
  label: v,
  value: v,
}));

const campusOptions = ["南浔校区", "钱塘校区"].map((v) => ({
  label: v,
  value: v,
}));

const isSigninFormValid = computed(() => {
  return formState.value.username && formState.value.password;
});

const isSignupFormValid = computed(() => {
  return (
    regForm.value.username &&
    regForm.value.password &&
    regForm.value.name &&
    regForm.value.mobile &&
    regForm.value.verificationCode &&
    regForm.value.class_name &&
    regForm.value.campus &&
    regForm.value.college &&
    regForm.value.gender != null
  );
});

const onFinish = async () => {
  const params = new URLSearchParams(window.location.search);
  const url = btoa(decodeURIComponent(params.get("state") || "/"));
  loading.value = true;
  try {
    const response = await post("login", formState.value);
    if (response.code === 200) {
      message.success(response.message);
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("tokenTime", response.time);
      localStorage.setItem("userInfo", JSON.stringify(response.data.userInfo));
      setTimeout(() => {
        window.location.replace(atob(url));
      }, 1000);
    } else {
      message.error(response.message);
      loading.value = false;
    }
  } catch (error) {
    message.warning(error.message || "登录失败");
    loading.value = false;
  }
};

const reg = async () => {
  const params = new URLSearchParams(window.location.search);
  const url = btoa(decodeURIComponent(params.get("state") || "/"));
  loading.value = true;
  try {
    const response = await post("register", regForm.value);
    if (response.code === 200) {
      message.success(response.message);
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("tokenTime", response.time);
      localStorage.setItem("userInfo", JSON.stringify(response.data.userInfo));
      setTimeout(() => {
        window.location.replace(atob(url));
      }, 1000);
    } else {
      message.error(response.message);
      loading.value = false;
    }
  } catch (error) {
    message.warning(error.message || "注册失败");
    loading.value = false;
  }
};

const getVerificationCode = async () => {
  if (!regForm.value.mobile || regForm.value.mobile.length != 11) {
    message.warning("请输入正确的手机号");
    return;
  }
  if (
    !/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/.test(
      regForm.value.mobile
    )
  ) {
    message.warning("请输入有效的手机号");
    return;
  }
  if (!regForm.value.mobile || regForm.value.mobile.length != 11) {
    message.warning("请输入手机号");
    return;
  }
  loading.value = true;
  try {
    const response = await post("login/sendcode", {
      phone_number: regForm.value.mobile,
    });
    if (response.code === 2000) {
      message.success(response.msg);
      startCountdown();
    } else {
      message.error(response.msg);
    }
    loading.value = false;
  } catch (error) {
    message.warning(error.message || "验证码发送失败");
    loading.value = false;
  }
};

const startCountdown = () => {
  countdown.value = 60;
  if (timer) clearInterval(timer);
  timer = setInterval(() => {
    countdown.value -= 1;
    if (countdown.value <= 0) {
      clearInterval(timer);
      timer = null;
    }
  }, 1000);
};

const weworkLogin = async () => {
  const params = new URLSearchParams(window.location.search);
  const url = btoa(decodeURIComponent(params.get("state") || "/"));
  try {
    const response = await get("ac_wework/oauth", { url: url });
    window.location.replace(response.data);
  } catch (error) {
    message.warning(error.message || "企业微信登录失败");
  }
};

const weworkQR = async () => {
  const params = new URLSearchParams(window.location.search);
  const url = btoa(decodeURIComponent(params.get("state") || "/"));
  try {
    const response = await get("ac_wework/qrcode", { url: url });
    window.location.replace(response.data);
  } catch (error) {
    message.warning(error.message || "企业微信扫码失败");
  }
};
const gort = (url) => {
  router.push(url); // 使用 router 实例进行跳转
};
</script>
<style>
.t-navbar__left{
    margin-left: 10px;
    margin-top: 10px;
}
</style>
<style scoped>
.logo {
  width: 202px;
  height: 39px;
}

.t-icon-home {
  margin-right: 8px;
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}

#components-form-demo-normal-login .login-form-forgot {
  float: right;
}

#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
