<template>

    <div class="ant-pro-page-container-warp">
        <div class="ant-page-header ant-page-header-ghost">

            <div class="ant-page-header-heading">
                <div class="ant-page-header-heading-left">

                    <span class="ant-page-header-heading-title" title="控制台">控制台</span>

                </div>

            </div>
            <div class="ant-page-header-content">
                <div class="ant-pro-page-container-detail">
                    <div class="ant-pro-page-container-main">
                        <div class="ant-pro-page-container-row">
                            <div class="ant-pro-page-container-content">
                                <div class="page-header-content">
                                    <div class="avatar"><span
                                            class="ant-avatar ant-avatar-lg ant-avatar-circle ant-avatar-image">
                                            <Avatar style="color: #f56a00;background-color: #fde3cf" size="72">{{headName}}</Avatar>
                                        </span>
                                    </div>
                                    <div class="content">
                                        <div class="content-title"> {{userName}}，晚上好<br><span
                                                class="welcome-text">时间不早，快回家陪陪家人吧</span></div>
                                        <div class="pb10"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="ant-pro-page-container-extraContent">
                                <div class="extra-content">
                                    <div class="stat-item">
                                        <div class="ant-statistic">
                                            <div class="ant-statistic-title">待处理</div>
                                            <div class="ant-statistic-content">
                                                <span class="ant-statistic-content-value"><span
                                                        class="ant-statistic-content-value-int">56</span></span>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="stat-item">
                                        <div class="ant-statistic">
                                            <div class="ant-statistic-title">今日发起</div>
                                            <div class="ant-statistic-content">
                                                <span class="ant-statistic-content-value"><span
                                                        class="ant-statistic-content-value-int">6</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="stat-item">
                                        <div class="ant-statistic">
                                            <div class="ant-statistic-title">站点总访问</div>
                                            <div class="ant-statistic-content">
                                                <span class="ant-statistic-content-value"><span
                                                        class="ant-statistic-content-value-int">2,223</span></span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <a-row type="flex">
        <a-col flex="1 1 200px">


            <a-card title="应用管理" style="margin: 16px 0">
                <template #extra><a href="#">more</a></template>
                <a-card-grid style="width: 25%;">
                    <a-card-meta title="Card title" description="This is the description">
                        <template #avatar>
                            <a-avatar src="https://joeschmoe.io/api/v1/random" />
                        </template>
                    </a-card-meta>
                </a-card-grid>
            </a-card>


        </a-col>
        <a-col flex="0 1 300px">



        </a-col>
    </a-row>



</template>
<script>

import axios from 'axios';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    
  },

  data() {
    return {
        userName:'',
        headName:''
      
    };
  },
  created(){
    axios.get('/api/admin/info')
            .then(res => {
                this.errcode = res.data.errcode
                if(this.errcode==200){
                  //获取成功
                  this.userName = res.data.username
                  this.headName = res.data.username[0]
                }
            }).catch(err => {
                console.log(err)
            })
  },

});
</script>
<style>
.ant-pro-page-container-warp {
    background-color: #fff;
    margin-top: 16px;
}

.ant-page-header-ghost {
    background-color: inherit;
}

.ant-page-header {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, .85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    padding: 16px 24px;
    background-color: #fff;
}

.ant-page-header-heading {
    display: flex;
    justify-content: space-between;
}

.ant-page-header-content {
    padding-top: 12px;
}

.ant-pro-page-container-main .ant-pro-page-container-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
}

.ant-pro-page-container-main .ant-pro-page-container-content,
body .ant-pro-page-container-main .ant-pro-page-container-title {
    flex: auto;
}

.page-header-content {
    display: flex;
}

.page-header-content {
    display: flex;
}

.page-header-content .avatar>span {
    display: block;
    width: 72px;
    height: 72px;
    border-radius: 72px;
}

.ant-avatar>img {
    display: block;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.page-header-content .content {
    position: relative;
    top: 4px;
    flex: 1 1 auto;
    margin-left: 24px;
    color: rgba(0, 0, 0, .45);
    line-height: 22px;
}

.page-header-content .content .content-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, .85);
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
}

.pb10 {
    padding-bottom: 10px;
}

body .ant-pro-page-container-main .ant-pro-page-container-extraContent {
    min-width: 242px;
    margin-left: 88px;
    text-align: right;
}

body .ant-pro-page-container-main .ant-pro-page-container-extraContent,
body .ant-pro-page-container-main .ant-pro-page-container-main {
    flex: 0 1 auto;
}

.extra-content {
    zoom: 1;
    float: right;
    white-space: nowrap;
}

.extra-content:after,
.extra-content:before {
    display: table;
    content: " ";
}

.extra-content .stat-item {
    position: relative;
    display: inline-block;
    padding: 0 32px;
}

.ant-statistic {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, .85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: "tnum";
}

.ant-statistic-title {
    margin-bottom: 4px;
    color: rgba(0, 0, 0, .45);
    font-size: 14px;
}

.ant-statistic-content {
    color: rgba(0, 0, 0, .85);
    font-size: 24px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}

.ant-statistic-content-value {
    display: inline-block;
    direction: ltr;
}

.extra-content .stat-item:after {
    position: absolute;
    top: 8px;
    right: 0;
    width: 1px;
    height: 40px;
    background-color: #f0f0f0;
    content: "";
}

.welcome-text {
    font-size: 16px;
}
</style>