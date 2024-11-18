<template>
    <CarouselContent></CarouselContent>
    <div style="width: 100%; margin: 60px 0px 80px 0px">
        <div class="main-content-title">
            <span style="font-size: 30px;font-weight: 600;">纪录片<span style="font-size: 16px;margin: 0 12px">Documentary</span></span>
        </div>
        <div class="main-content-box">
            <div v-if="isLoading" class="spinner" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                <div class="loading-spinner"></div>
            </div>
            <iframe 
                src="https://player.xinpianchang.com/?aid=13204509&amp;mid=rVo9wynpmEX4l5PG" 
                allowfullscreen="true" 
                allow="fullscreen" 
                frameborder="0" 
                style="border: none; width: 100%; min-height: 50vh;background-color: #bbbbbb;" 
                @load="handleLoad"
                @error="handleError">
            </iframe>
            <div v-if="loadError" class="error-message" style="text-align: center; color: red;">
                加载失败，请重试。
            </div>
        </div>
        <div class="main-content-title">
            <span style="font-size: 30px;font-weight: 600;">旅行记<span style="font-size: 16px;margin: 0 12px">Travel Notes</span></span>
        </div>
        <div class="main-content-box">
            <div v-if="isLoading2" class="spinner" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                <div class="loading-spinner"></div>
            </div>
            <iframe 
                src="https://player.xinpianchang.com/?aid=13172694&amp;mid=9WxJ7ljbAaz481kM" 
                allowfullscreen="true" 
                allow="fullscreen" 
                frameborder="0" 
                style="border: none; width: 100%; min-height: 50vh;background-color: #bbbbbb;" 
                @load="handleLoad2"
                @error="handleError2">
            </iframe>
            <div v-if="loadError2" class="error-message" style="text-align: center; color: red;">
                加载失败，请重试。
            </div>
        </div>

    </div>
</template>
<script setup>
import CarouselContent from "@/components/Home/CarouselContent.vue"
</script>
<script>
export default {
    data() {
        return {
            isLoading: true,
            isLoading2: true,
            loadError: false,
            loadError2: false,
        };
    },
    methods: {
        handleLoad() {
            console.log('iframe loaded');
            this.isLoading = false;
        },
        handleError() {
            this.isLoading = false;
            this.loadError = true;
        },
        handleLoad2() {
            console.log('iframe loaded');
            this.isLoading2 = false;
        },
        handleError2() {
            this.isLoading2 = false;
            this.loadError2 = true;
        }
    }
}
</script>

<style>
/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "AliContent";src: url("//at.alicdn.com/wf/webfont/UhwPVWEnuYCX/vJXuS8lMMtcd.woff2") format("woff2"),
  url("//at.alicdn.com/wf/webfont/UhwPVWEnuYCX/VnPg4sTUcQKp.woff") format("woff");
  font-display: swap;
}
.loading-spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #2d8cf0; /* Spinner color */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.main-content-box{
    font-family: "AliContent"!important;
    max-width: 1000px; margin: 10px auto; position: relative;
}
.main-content-title{
    font-family: "AliContent"!important;
    max-width: 1050px; margin: 40px auto; position: relative;
}
</style>
