<template>

    <div class="ehall-footer-div" style="background: #05101c ; position:relative; bottom: 0;">
        <div class="ehall-footer-bottom">
            <a class="ehall-footer-bottom-a"
                href="https://www.jimimedia.cn/">&copy; 2023-2024 杭州叽咪文化传媒有限公司</a>
            <a class="ehall-footer-bottom-a" target="_blank"
                href="https://www.beian.miit.gov.cn/">浙ICP备2022005958号-3</a>
            <a href="https://beian.mps.gov.cn/#/query/webSearch?code=33019202002426" rel="noreferrer" class="ehall-footer-bottom-a"
                target="_blank"><img src="/wangan.png" width="15px"> 浙公网安备33019202002426</a>
        </div>
    </div>





</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
<style>
.ehall-footer-div {
    width: 100%;
    height: 60px;
    background-repeat: no-repeat;
    position: relative;
    background-size: cover;
    background-position: 50%;
    font-size: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

.ehall-footer-bannar {
    width: 100%;
    height: 290px;
    background: rgba(3, 16, 29, .5);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

.ehall-footer-bannar-div {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

.ehall-footer-left {
    padding-top: 70px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    color: #fff;
    position: relative;
    margin-right: 70px;
}

.ehall-footer-left-a {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-right: 20px;
}

.ehall-footer-left-title {
    font-size: 24px;
    line-height: 24px;
    color: #fff;
    font-weight: 700;
    padding-bottom: 42px;
}

.ehall-footer-left-info {
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 250px;
}

.ehall-footer-left-p {
    line-height: 26px;
    font-size: 14px;
}

.ehall-footer-right {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-size: 12px;
    color: #333;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-top: 35px;
    position: relative;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.ehall-footer-right-a {
    display: inline-block;
    position: absolute;
    top: 60px;
    left: -100px;
    width: 2px;
    height: 180px;
    background: hsla(0, 0%, 100%, .2);
}


.ehall-footer-weixin {
    width: 73px;
    text-align: center;
    cursor: pointer;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.ehall-footer-weixin-icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin: 0 0 7px;
}

.ehall-footer-icon-text {
    color: #fff;
    height: 14px;
    font-size: 14px;
    line-height: 18px;
}

.ehall-footer-weixin .hoverPng {
    display: none;
}

.ehall-footer-app {
    width: 73px;
    text-align: center;
    cursor: pointer;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.ehall-footer-app-icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin: 0 0 7px;
}

.ehall-footer-app .hoverPng {
    display: none;
}

.ehall-footer-work {
    width: 73px;
    text-align: center;
    cursor: pointer;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.ehall-footer-work-icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin: 0 0 7px;
}

.ehall-footer-work .hoverPng {
    display: none;
}

.ehall-footer-bottom {
    width: 100%;
    height: 60px;
    line-height: 59px;
    text-align: center;
    color: #fff;
    position: absolute;
    bottom: 0;
    background: #03101d;
    font-size: 12px;
    -webkit-letter-spacing: 1px;
    -moz-letter-spacing: 1px;
    -ms-letter-spacing: 1px;
    letter-spacing: 1px;
}

.ehall-footer-bottom-a {
    margin: 0 8px;
    color: #fff;
}

.vertical-center-modal {
    display: flex;
    align-items: center;
    justify-content: center;
}

.vertical-center-modal .ivu-modal {
    top: 0;
}
</style>