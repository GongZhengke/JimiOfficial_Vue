<template>
    <CarouselProduct></CarouselProduct>
    <div style="width: 100%; margin: 60px 0px 50px 0px">
        <div class="main-content-title">
            <span style="font-size: 30px; font-weight: 600">产品<span
                    style="font-size: 16px; margin: 0 12px">Products</span></span>
        </div>
        <div class="main-content-box">
            <n-list hoverable clickable :show-divider="false">
                <n-list-item style="margin-bottom: 20px; background-color: #f5f5f5">
                    <template #suffix>
                        <n-button strong secondary @click="showQRCode('叽咪 TeamS HRS 人事系统')">了解更多</n-button>
                    </template>
                    <n-thing title="叽咪 TeamS HRS 人事系统" content-style="margin-top: 10px;">
                        <template #description>
                            <n-space size="small" style="margin-top: 8px">
                                <n-tag :bordered="false" type="info" size="small">
                                    岗位招新
                                </n-tag>
                                <n-tag :bordered="false" type="info" size="small">
                                    人事管理
                                </n-tag>
                                <n-tag :bordered="false" type="info" size="small">
                                    信息发布
                                </n-tag>
                            </n-space>
                        </template>
                        政企校园部门数字化招新与人事管理<br />
                    </n-thing>
                </n-list-item>
                <n-list-item style="margin-bottom: 20px; background-color: #f5f5f5">
                    <template #suffix>
                        <n-button strong secondary @click="showQRCode('叽咪 TeamS ACS 活动系统')">了解更多</n-button>
                    </template>
                    <n-thing title="叽咪 TeamS ACS 活动系统" content-style="margin-top: 10px;">
                        <template #description>
                            <n-space size="small" style="margin-top: 8px">
                                <n-tag :bordered="false" type="warning" size="small">
                                    活动报名
                                </n-tag>
                                <n-tag :bordered="false" type="warning" size="small">
                                    电子票务
                                </n-tag>
                                <n-tag :bordered="false" type="warning" size="small">
                                    在线抽奖
                                </n-tag>
                            </n-space>
                        </template>
                        小型电子票务系统与活动管理
                    </n-thing>
                </n-list-item>
            </n-list>
        </div>

        <div class="main-content-title">
            <span style="font-size: 30px; font-weight: 600">解决方案<span
                    style="font-size: 16px; margin: 0 12px">Solutions</span></span>
        </div>

        <div class="main-content-box">
            <n-list hoverable clickable :show-divider="false">
                <n-list-item style="margin-bottom: 20px; background-color: #f5f5f5">
                    <template #suffix>
                        <n-button strong secondary @click="showQRCode('叽咪 TeamS HRS 人事系统')">了解更多</n-button>
                    </template>
                    <n-thing title="叽咪 TeamS 校园部门工作台" content-style="margin-top: 10px;">
                        <template #description>
                            <n-space size="small" style="margin-top: 8px">
                                <n-tag :bordered="false" type="success" size="small">
                                    招新
                                </n-tag>
                                <n-tag :bordered="false" type="success" size="small">
                                    人事
                                </n-tag>
                                <n-tag :bordered="false" type="success" size="small">
                                    活动
                                </n-tag>
                                <n-tag :bordered="false" type="success" size="small">
                                    数据
                                </n-tag>
                                <n-tag :bordered="false" type="success" size="small">
                                    流程
                                </n-tag>
                            </n-space>
                        </template>
                        政企校园部门数字化招新与人事管理<br />
                    </n-thing>
                </n-list-item>
                <n-list-item style="margin-bottom: 20px; background-color: #f5f5f5">
                    <template #suffix>
                        <n-button strong secondary @click="showQRCode('HelloH2O')">了解更多</n-button>
                    </template>
                    <n-thing title="叽咪 HelloH2O 水分子服务平台" content-style="margin-top: 10px;">
                        <template #description>
                            <n-space size="small" style="margin-top: 8px">
                                <n-tag :bordered="false" type="error" size="small">
                                    社群
                                </n-tag>
                                <n-tag :bordered="false" type="error" size="small">
                                    公告
                                </n-tag>
                                <n-tag :bordered="false" type="error" size="small">
                                    服务
                                </n-tag>
                                <n-tag :bordered="false" type="error" size="small">
                                    推广
                                </n-tag>
                            </n-space>
                        </template>
                        政企校园部门数字化招新与人事管理<br />
                    </n-thing>
                </n-list-item>
            </n-list>
        </div>

        <div class="main-content-title">
            <span style="font-size: 30px; font-weight: 600">客户案例<span
                    style="font-size: 16px; margin: 0 12px">Customer cases</span></span>
        </div>

        <div class="main-content-box">
            <n-flex justify="center">
                <img src="/zjweu.png" alt="浙江水利水电学院" style="height:55px;" />
                <img src="https://zhaoxin.zjweu.com.cn/newsjc.png" alt="校学生记者中心" style="height:55px;" />
                <div
                    style="height:55px; width: 200px;align-items: center;justify-content: center;display: flex;background: #f5f5f5;font-size: 18px">
                    虚位以待</div>
            </n-flex>
        </div>

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
import { ref } from "vue";
import CarouselProduct from "@/components/Home/CarouselProduct.vue";

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
</script>

<style scoped>
/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
    font-family: "aliprod";
    src: url("//at.alicdn.com/wf/webfont/UhwPVWEnuYCX/NdoMHnfTDRU6.woff2") format("woff2"),
        url("//at.alicdn.com/wf/webfont/UhwPVWEnuYCX/gVeVM5k8J35b.woff") format("woff");
    font-display: swap;
}

.main-content-box {
    /* font-family: "aliprod" !important; */
    max-width: 1000px;
    margin: 10px auto;
    position: relative;
}

.main-content-title {
    font-family: "aliprod" !important;
    max-width: 1050px;
    margin: 40px auto;
    position: relative;
}
</style>
