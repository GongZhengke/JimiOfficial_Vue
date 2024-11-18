<template>
  <n-carousel autoplay dot-type="line" style="background: #000">
    <img class="carousel-img" :src="img_url ? img_url : '/content.jpeg'" />
  </n-carousel>
  <div style="position: absolute; top: 12vh; width: 100%; text-align: left;padding-left: 10vh;">
    <n-h2 class="title_font">Exploring the story.</n-h2>
    <n-h4 class="desc_font">传递人世间的温暖 探索自然界的神秘</n-h4>
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
  font-family: "阿里妈妈方圆体 VF RegularEng";src: url("//at.alicdn.com/wf/webfont/UhwPVWEnuYCX/UmNtbb3TuVOs.woff2") format("woff2"),
  url("//at.alicdn.com/wf/webfont/UhwPVWEnuYCX/rVTDyJ9wRf0J.woff") format("woff");
  font-display: swap;
}
/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "阿里妈妈方圆体 VF RegularContnet";src: url("//at.alicdn.com/wf/webfont/UhwPVWEnuYCX/wd42sq0Oh6EJ.woff2") format("woff2"),
  url("//at.alicdn.com/wf/webfont/UhwPVWEnuYCX/mft0nm8h33Bu.woff") format("woff");
  font-display: swap;
}

.carousel-img {
  width: 100%;
  height: 30vh;
  object-fit: cover;
  opacity: 0.7;
}

.title_font {
  color: aliceblue;
  font-size: 45px;
  font-weight: 800;
  font-family: "阿里妈妈方圆体 VF RegularEng";
}

.desc_font {
  color: aliceblue;
  font-family: "阿里妈妈方圆体 VF RegularContnet";
  margin-top: -10px;
  font-size: 20px;
  font-weight: 600;
}
</style>
