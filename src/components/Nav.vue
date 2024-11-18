<template>
    <div class="ehall_home__menu">
        <a @click="changePage('/index')" class="link portal-primary-color-hover-lv1 portal-primary-border-color-lv1 active portal-primary-color-lv1" v-if="pageNow == 'home'">
          首页
        </a>
        <a @click="changePage('/index')" class="link portal-primary-color-hover-lv1 portal-primary-border-color-lv1 portal-font-color-lv1" v-else>
          首页
        </a>
        <a @click="changePage('/product')" class="link portal-primary-color-hover-lv1 portal-primary-border-color-lv1 active portal-primary-color-lv1" v-if="pageNow == 'product'">
          产品
        </a>
        <a @click="changePage('/product')" class="link portal-primary-color-hover-lv1 portal-primary-border-color-lv1 portal-font-color-lv1" v-else>
          产品
        </a>
        <a @click="changePage('/content')" class="link portal-primary-color-hover-lv1 portal-primary-border-color-lv1 active portal-primary-color-lv1" v-if="pageNow == 'content'">
          内容
        </a>
        <a @click="changePage('/content')" class="link portal-primary-color-hover-lv1 portal-primary-border-color-lv1 portal-font-color-lv1" v-else>
          内容
        </a>
        <a @click="changePage('/service')" class="link portal-primary-color-hover-lv1 portal-primary-border-color-lv1 active portal-primary-color-lv1" v-if="pageNow == 'service'">
          服务
        </a>
        <a @click="changePage('/service')" class="link portal-primary-color-hover-lv1 portal-primary-border-color-lv1 portal-font-color-lv1" v-else>
            服务
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pageNow: "",
        };
    },
    methods: {
        casLogin() {
            this.$router.push("/login");
        },
        routerNow() {
            this.pageNow = this.$route.name;
            // console.log(this.pageNow);
        },
        changePage(url) {
            // this.$router.push(url);
            window.location.href = url
        },
    },
    props: ["formState"],
    created() {
        this.routerNow();
    },
    watch: {
        // 监听路由
        $route() {
            this.routerNow();
        },
    },
};
</script>

<style scoped>
.ehall-header {
    width: 100%;
    /* background: #f4f6f900; */
    position: fixed;
    z-index: 999;
}

.transparent-bg {
    background: rgba(255, 255, 255, 0.8) !important;
}

.ehall-header-top {
    background-color: #2b2b2b;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 34px;
}

.ehall-header-home {
    height: 80px;
    background: #fff;
    box-shadow: 0 2px 12px 0 rgb(36 71 131 / 9%);
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 calc(50% - 37.5rem);
    min-width: 75rem;
    box-sizing: border-box;
}

.header__title {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
}

.searchInputRoot {
    width: 248px;
    height: 40px;
}

.searchInputRoot .search {
    -webkit-appearance: none;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 248px;
    height: 40px;
    position: relative;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    background: #f4f6f9;
    border: 1px solid #eee;
    border-radius: 6px;
}

/* .ehall_home__menu {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -ms-flex-positive: 2;
  flex-grow: 2;
  padding-top: 3px;
  color: hsla(0, 0%, 100%, 0.6);
} */
/* .ehall_home__menu{
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
} */
.ehall_home__menu .link {
    margin: 0 12px -5px;
    height: 28px;
    font-size: 16px;
    min-width: 50px;
    font-weight: 600;
    color: #212a39;
    line-height: 21px;
    cursor: pointer;
}

.ehall_home__menu .link:hover {
    font-weight: 600;
    color: #2d8cf0;
}

.ehall_home__menu .active {
    /* border-bottom: 3px solid; */
    font-weight: 600;
}

.portal-primary-border-color-lv1 {
    border-color: #2d8cf0 !important;
}

.portal-primary-color-lv1 {
    color: #2d8cf0 !important;
}

.authbtn {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.authbtn .split {
    width: 1px;
    height: 24px;
    background: #ddd;
    margin: 0 20px 0 7px;
}

.authbtn .login {
    width: 80px;
    height: 36px;
    border-radius: 4px;
    font-size: 16px;
    color: #fff;
    line-height: 21px;
    border: none;
    cursor: pointer;
}

.portal-primary-backgroundcolor-lv1 {
    background: #307afb !important;
}

.top-left-text {
    width: 1200px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.title {
    font-size: 13px;
    color: #fff;
    line-height: 34px;
}

.top-right-a {
    font-size: 13px;
    color: #fff;
    cursor: pointer;
    line-height: 34px;
}

.top-right-d {
    font-size: 13px;
    color: #fff;
    line-height: 34px;
    margin: 0px 8px;
}

.header__title .logo img {
    vertical-align: middle;
    max-width: 240px;
    min-width: 160px;
    height: auto;
    max-height: 50px;
    margin-right: 20px;
}
</style>
