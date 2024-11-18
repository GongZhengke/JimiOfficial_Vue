<template>
  <n-carousel autoplay dot-type="line" style="background: #000">
    <img class="carousel-img" :src="img_url ? img_url : '/bg.jpg'" />
  </n-carousel>
  <div style="position: absolute; top: 42vh; width: 100%; text-align: center">
    <n-h1 class="title_font">Dreaming the world.</n-h1>
    <n-h3 class="desc_font">我们希望用影像与科技 记录每一个平凡的奇迹</n-h3>
    <!-- <n-h3 style="margin-top: 10px">
      <Space>
        <n-button strong secondary style="color: aliceblue; height: 50px; width: 160px;" size="large"> 不知名旅行记 </n-button>
        <n-button strong secondary style="color: aliceblue; height: 50px; width: 160px;" size="large"> 叽咪 TeamSys </n-button>
        <n-button strong secondary style="color: aliceblue; height: 50px; width: 160px;" size="large"> 联系我们 </n-button>
      </Space>
      
    </n-h3> -->
  </div>
</template>
<script>
export default {
  name: "Carousel",
  props: ["img_url"],
};
</script>
<style scoped>
/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "阿里妈妈方圆体 VF Regular";
  src: url("//at.alicdn.com/wf/webfont/UhwPVWEnuYCX/ALtz9GoVDT3E.woff2")
      format("woff2"),
    url("//at.alicdn.com/wf/webfont/UhwPVWEnuYCX/OOE64nFKSw2r.woff")
      format("woff");
  font-display: swap;
}
/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "阿里妈妈方圆体 VF Regular2";
  src: url("//at.alicdn.com/wf/webfont/UhwPVWEnuYCX/fk72voq83ekg.woff2")
      format("woff2"),
    url("//at.alicdn.com/wf/webfont/UhwPVWEnuYCX/j6wGZyislSek.woff")
      format("woff");
  font-display: swap;
}

.carousel-img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  opacity: 0.7;
}

.title_font {
  color: aliceblue;
  font-size: 55px;
  font-weight: 800;
  font-family: "阿里妈妈方圆体 VF Regular";
}

.desc_font {
  color: aliceblue;
  font-family: "阿里妈妈方圆体 VF Regular2";
  margin-top: -10px;
  font-size: 24px;
  font-weight: 600;
}
</style>
