<template>
    <t-navbar :fixed="false">
      <template #left>
        <t-image @click="gort('/m/index')" src="/jmlgh.png" class="logo" />
      </template>
      <template #right>
        <span style="font-size: 16px;font-weight: 600">400-023-1013</span>
      </template>
    </t-navbar>
    <Carouselm :img_url="'/prod.jpg'"></Carouselm>
    <div style="width: 92%; margin: 10px 15px 30px 15px">
        <div class="main-content-title">
            <span style="font-size: 20px; font-weight: 600">服务<span
                    style="font-size: 14px; margin: 0 12px">Service</span></span>
        </div>
        <div class="main-content-box">
            <n-list hoverable clickable :show-divider="false">
                <n-list-item style="margin-bottom: 20px; background-color: #f5f5f5">
                    <template #suffix>
                        <n-button strong secondary @click="showQRCode('叽咪 TeamS HRS 人事系统')">了解更多</n-button>
                    </template>
                    <n-thing title="图片与视频宣传" content-style="margin-top: 10px;">
                        <template #description>
                            <n-space size="small" style="margin-top: 8px">
                                <n-tag :bordered="false" size="small">
                                    活动宣传
                                </n-tag>
                                <n-tag :bordered="false" size="small">
                                    商业快剪
                                </n-tag>
                                <n-tag :bordered="false" size="small">
                                    纪录片摄制
                                </n-tag>
                            </n-space>
                        </template>
                    </n-thing>
                </n-list-item>
                <n-list-item style="margin-bottom: 20px; background-color: #f5f5f5">
                    <template #suffix>
                        <n-button strong secondary @click="showQRCode('叽咪 TeamS HRS 人事系统')">了解更多</n-button>
                    </template>
                    <n-thing title="数字化方案建设" content-style="margin-top: 10px;">
                        <template #description>
                            <n-space size="small" style="margin-top: 8px">
                                <n-tag :bordered="false" size="small">
                                    系统定制
                                </n-tag>
                                <n-tag :bordered="false" size="small">
                                    私域转化
                                </n-tag>
                                <n-tag :bordered="false" size="small">
                                    数字平台
                                </n-tag>
                            </n-space>
                        </template>
                    </n-thing>
                </n-list-item>
                
                <n-list-item style="margin-bottom: 20px; background-color: #f5f5f5">
                    <template #suffix>
                        <n-button strong secondary @click="showQRCode('叽咪 TeamS HRS 人事系统')">了解更多</n-button>
                    </template>
                    <n-thing title="定制化旅行拍摄" content-style="margin-top: 10px;">
                        <template #description>
                            <n-space size="small" style="margin-top: 8px">
                                <n-tag :bordered="false" size="small">
                                    新疆
                                </n-tag>
                                <n-tag :bordered="false" size="small">
                                    青甘
                                </n-tag>
                                <n-tag :bordered="false" size="small">
                                    川藏
                                </n-tag>
                                <n-tag :bordered="false" size="small">
                                    内蒙古
                                </n-tag>
                                <n-tag :bordered="false" size="small">
                                    东北
                                </n-tag>
                            </n-space>
                        </template>
                    </n-thing>
                </n-list-item>
            </n-list>
        </div>

        <div class="main-content-title">
            <span style="font-size: 20px; font-weight: 600">联系方式<span
                    style="font-size: 14px; margin: 0 12px">Contact us</span></span>
        </div>

        <div class="main-content-box">
            <n-list hoverable clickable :show-divider="false">
                <n-list-item style="margin-bottom: 20px; background-color: #f5f5f5">
                    <template #suffix>
                        <!-- <n-button strong secondary @click="showQRCode('叽咪 TeamS HRS 人事系统')">了解更多</n-button> -->
                    </template>
                    <n-thing title="商务联系与合作" content-style="margin-top: 10px;">
                        <template #description>
                            <n-space size="small" style="margin-top: 8px">
                                <n-tag :bordered="false" type="success" size="small">
                                    全天候接收
                                </n-tag>
                                <n-tag :bordered="false" type="warning" size="small">
                                    工作日响应
                                </n-tag>
                            </n-space>
                        </template>
                        Tel：+86 400-023-1013<br />
                        WeChat：KealGrayson<br />
                        E-Mail：gongzhengke@jimimedia.cn<br />
                    </n-thing>
                </n-list-item>
            </n-list>
        </div>


    </div>
    
    <div style="height: 65px;">
        <t-footer :text="text" :links="links[1]" />
    </div>

    <n-modal v-model:show="showModal" title="二维码" @close="resetModal">
        <template #default>
            <div style="text-align: center">
                <img :src="qrCodeUrl" alt="二维码" style="max-width: 350px; height: auto" />
            </div>
        </template>
    </n-modal>
  
  </template>
  <script setup>
  import Carouselm from "@/components/Home/Carouselm.vue"
  import { message } from "ant-design-vue";
  import HeaderCarousel from "@/components/Home/Carousel.vue";
  import { reactive, computed, onMounted, ref } from "vue";
  import { get, post } from "@/JS/ajax";
  import { showSuccessToast, showFailToast } from "vant";
  import { useRouter } from "vue-router"; // 引入 useRouter 钩子
  const activeKey = ref("1");
  const qycode = ref("");
  const formState = ref({});
  const showModal = ref(false);
const qrCodeUrl = ref("");

function showQRCode(system) {
    // 根据系统选择二维码地址，这里可以替换为实际的二维码生成逻辑
    if (system === "叽咪 TeamS HRS 人事系统") {
        qrCodeUrl.value = "/qywx.jpg";
    } else if (system === "叽咪 TeamS ACS 活动系统") {
        qrCodeUrl.value = "/qywx.jpg";
    } else {
        qrCodeUrl.value = "https://zhaoxin.zjweu.com.cn/h2oqr.png";
    }
    showModal.value = true;
}

function resetModal() {
    qrCodeUrl.value = "";
}
  const router = useRouter(); // 获取 router 实例
  const text = ref("© 2023-2024 杭州叽咪文化传媒有限公司");
  const links = [
  [
    {
      name: '底部链接',
      url: '',
    },
  ],
  [
    {
      name: '浙ICP备2022005958号-3',
      url: 'https://www.beian.miit.gov.cn/',
    },
    {
      name: '浙公网安备33019202002426',
      url: 'https://beian.mps.gov.cn/#/query/webSearch?code=33019202002426',
    },
  ],
];
  onMounted(async () => {

  });

  const goURL = (url) => {
    window.location.replace(url);
  };
  const goLogin = (id) => {
    router.push(`/login`); // 使用 router 实例进行跳转
  };
  const gort = (url) => {
    router.push(url); // 使用 router 实例进行跳转
  };
  </script>
  <style>
  .t-navbar__left{
      margin-left: 5px;
  }
  </style>
  <style scoped>
  /* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "阿里妈妈方圆体service";src: url("//at.alicdn.com/wf/webfont/UhwPVWEnuYCX/VuYSLTNhMVyK.woff2") format("woff2"),
  url("//at.alicdn.com/wf/webfont/UhwPVWEnuYCX/AaQfHhEdV9ps.woff") format("woff");
  font-display: swap;
}
  .logo {
    width: 202px;
    height: 42px;
  }
  
  .t-icon-home {
    margin-right: 8px;
  }

  .main-content-box {
      /* font-family: "aliprod" !important; */
      max-width: 1000px;
      margin: 10px auto;
      position: relative;
  }
  
  .main-content-title {
      font-family: "阿里妈妈方圆体service" !important;
      max-width: 1050px;
      margin: 20px auto;
      position: relative;
  }
  </style>
 