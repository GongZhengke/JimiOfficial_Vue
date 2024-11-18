<template>
  <n-spin :show="loading">
    <a-layout style="min-height: 100vh">
      <a-layout-header
        :style="{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          background: 'rgba(255, 255, 255, 0.75)'
        }"
      >
        <div class="logo">
          <img src="/jmlgh.png" style="height: 100%" />
        </div>

        <Row>
          <Col span="18">
            <div class="ant-pro-global-header-content" style="display: flex;align-items: center;z-index: 99999;">
              <Nav style="display: flex;"></Nav>
              <div>
                <!-- <a-menu
                  v-model:selectedKeys="current"
                  mode="horizontal"
                  :items="items"
                /> -->
              </div>
            </div>
          </Col>
          <Col span="6">
            <div class="i-layout-header-right" v-if="socialOption">
              <Dropdown
                placement="bottom-end"
                style="margin-right: 15px"
                v-if="userInfo"
              >
                <a href="javascript:void(0)" style="margin-right: 10px">
                  <Avatar style="color: #f56a00; background-color: #fde3cf">
                    {{ userInfo?.name[0] }}
                  </Avatar>
                  <span style="margin-left: 10px; margin-right: 5px">{{
                    userInfo?.name
                  }}</span>
                  <Icon type="ios-arrow-down"></Icon>
                </a>
                <template #list>
                  <DropdownMenu>
                    <DropdownItem>个人信息</DropdownItem>
                    <DropdownItem @click="lgout = true">退出</DropdownItem>
                  </DropdownMenu>
                </template>
              </Dropdown>
              <a-space wrap v-else>
                <a-button type="text" @click="redirectToLogin">登录</a-button>
                <a-button type="primary" @click="redirectToRegister">注册</a-button>
              </a-space>
            </div>
            <div class="i-layout-header-right" v-else>
              <a-space wrap>
                <a-button type="primary" @click="">商务合作 400-023-1013</a-button>
              </a-space>
            </div>
          </Col>
        </Row>
      </a-layout-header>
      <a-layout-content :style="{ padding: '0 0px', marginTop: '0',backgroundColor: '#ffffff' }">
        <router-view :userInfo="userInfo"/>
      </a-layout-content>
      <!-- <a-layout-footer :style="{ textAlign: 'center' }">
        <Footer style=""></Footer>
      </a-layout-footer> -->
      <Footer2></Footer2>
    </a-layout>
    <Modal v-model="lgout" title="提示" :loading="loading" @on-ok="logOut">
      <p>确定要退出登录吗？</p>
    </Modal>
  </n-spin>
</template>
<script setup>
import Footer from "@/components/authserver/Footer.vue";
import Footer2 from "@/components/Footer.vue";
import Nav from "@/components/Nav.vue";
import { h, ref, onMounted } from "vue";
import {
  HomeOutlined,
  BulbOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import { get, post } from "@/JS/ajax";
import { useRouter, useRoute } from "vue-router";
import { message } from "ant-design-vue";

const socialOption = ref(false)
const lgout = ref(false);
const loading = ref(false);
const current = ref(["home"]);
const items = ref([
  {
    key: "home",
    icon: () => h(HomeOutlined),
    label: "首页",
    title: "首页",
  },
  {
    key: "brands",
    icon: () => h(BulbOutlined),
    label: "内容",
    title: "内容",
  },
]);

const userInfo = ref(null); // Store userInfo data

const getUserInfo = async () => {
    const cachedUserInfo = localStorage.getItem("userInfo");
    const cachedToken = localStorage.getItem("authToken");

  // Check userInfo existence
  if (cachedUserInfo) {
    userInfo.value = JSON.parse(cachedUserInfo);
  }
  if (cachedToken) {
    try {
      // Get userInfo
      const response = await get("system/userinfo", {});

      if (response.username) {
        userInfo.value = response;
        // Update userInfo localStorage
        localStorage.setItem("userInfo", JSON.stringify(response));
      } else {
        message.error(response.detail || "用户信息获取失败");
      }
    } catch (error) {
      
    }
  }
};

const logOut = () => {
  loading.value = true;
  localStorage.clear();
  setTimeout(() => {
    loading.value = false;
    lgout.value = false;
    message.success("退出成功");
    userInfo.value = null;
  }, 1000);
};

// Fetch user info when component is mounted
onMounted(() => {
  getUserInfo();
});
</script>

<script>
export default {
  methods: {
    redirectToLogin() {
      const currentUrl = window.location.href;
      const loginUrl = `/cas/login?service=${encodeURIComponent(currentUrl)}`;
      window.location.href = loginUrl;
    },
    redirectToRegister() {
      // Redirect logic for the 注册 button (if needed)
      // Example: window.location.href = '/register';
      this.$message.info("暂未开放注册");
    },
  },
  created() {
    if (window.innerWidth <= 768) { 
      window.location.replace('/m')
    }
  },
};
</script>
<style scoped>
.logo {
  /* width: 120px; */
  height: 45px;
  /* background: rgba(255, 255, 255, 0.2); */
  margin: 0px 10px 16px 0;
  float: left;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
.i-layout-header-right {
  height: 48px;
  float: right;
}

.ivu-select-dropdown ul {
  margin-bottom: 0em !important;
}

.ant-pro-global-header-content {
  height: 64px;
  line-height: 64px;
  vertical-align: top;
  display: inline-block;
  padding: 0 22px;
}

.ant-tabs-nav {
  min-width: 300px;
}

.ivu-select-dropdown {
  padding: 0px 0;
}
.ant-list-item {
  padding-right: 24px;
  padding-left: 24px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;
}
.ant-tabs-top > .ant-tabs-nav {
  margin: 0 0 0px 0;
}
.ant-list-item:hover {
  background: #f6fcff;
}

.ivu-global-footer-links a {
  font-size: 12px;
  color: #000;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.ivu-global-footer-links a:hover {
  font-size: 12px;
  color: #6aa1ed;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.ivu-global-footer-copyright {
  color: #000;
  font-size: 12px;
}
</style>
