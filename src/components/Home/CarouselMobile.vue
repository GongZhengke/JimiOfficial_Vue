<template>
  <n-carousel autoplay dot-type="line" style="background: #000;">
    <img class="carousel-img" @click="routerGo('/item/3')" src="/gxy.jpg">
    <img class="carousel-img" @click="jumpout('https://zhaoxin.zjweu.com.cn/')" src="/zx.jpg">
    <!-- <img class="carousel-img" src="/banner.jpg"> -->
  </n-carousel>
  <!-- <div style="position:absolute;top:128px;width: 100%;text-align: center;">
    <n-h3 class="title_font">谱写新精彩 校记等你来</n-h3>
    <n-h5 class="desc_font">校学生记者中心2024秋招进行中</n-h5>
  </div> -->
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";
const router = useRouter(); // 获取 router 实例
const jumpout = (url) => {
  window.location.href = url;
};

const routerGo = (url) => {
  router.push(url);
};
</script>
<style scoped>
/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "阿里妈妈方圆体 VF Regular";
  src: url("//at.alicdn.com/wf/webfont/UhwPVWEnuYCX/Gk7GopwSTQKx.woff2") format("woff2"),
    url("//at.alicdn.com/wf/webfont/UhwPVWEnuYCX/qLWJHjnHQiun.woff") format("woff");
  font-display: swap;
}

/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "阿里妈妈方圆体 VF Regular2";
  src: url("//at.alicdn.com/wf/webfont/UhwPVWEnuYCX/OBQYG47v4Aom.woff2") format("woff2"),
    url("//at.alicdn.com/wf/webfont/UhwPVWEnuYCX/QwnyRgM9yYyb.woff") format("woff");
  font-display: swap;
}

.carousel-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  /* opacity: 0.7 */
}

.title_font {
  color: aliceblue;
  font-size: 28px;
  font-family: "阿里妈妈方圆体 VF Regular";
}

.desc_font {
  color: aliceblue;
  font-family: "阿里妈妈方圆体 VF Regular2";
  margin-top: -20px;
  font-size: 15px;
}
</style>