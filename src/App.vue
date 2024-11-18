<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <router-view />
  </n-config-provider>
</template>
<script setup>
import { NConfigProvider } from 'naive-ui'
const themeOverrides = {
  common: {
    primaryColor: '#2d8cf0',
    primaryColorHover: '#2d8cf0'
  },
  Button: {
    textColor: '#2d8cf0',
  },
}

</script>



<style>

/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "钉钉进步体 Regular";
  font-weight: 400;
  src: url("assets/DingTalk-JinBuTi.woff2") format("woff2");
  font-display: swap;
}

/* * {
  font-family: "钉钉进步体 Regular";
} */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
  --td-tab-bar-active-color: #39aaa4 !important;
  --td-tab-bar-active-bg: #49a39e25 !important;
  --td-button-primary-border-color: #39aaa4 !important;
  --td-button-primary-active-bg-color: #39aaa4 !important;
  --td-button-primary-active-border-color: #39aaa4 !important;
  --td-link-primary-color: #39aaa4 !important;
  --td-avatar-bg-color: #39aaa425 !important;
  --td-avatar-content-color: #39aaa4 !important;
  --van-tabs-bottom-bar-color: #39aaa4 !important;
  --van-primary-color: #39aaa4 !important;
  --van-index-bar-index-active-color: #39aaa4 !important;
  --van-nav-bar-icon-color: #39aaa4 !important;
  --van-nav-bar-text-color: #39aaa4 !important;
  --td-grid-item-image-bg-color: #00000000 !important;
  --td-brand-color: #39aaa4 !important;
  --td-tag-primary-light-color: #49a39e25 !important;
  --td-button-light-bg-color: #49a39e25 !important;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.sjc-container {
  margin: 30px;
}
.ant-message{
  z-index: 9999;
}
</style>
