<template>
  <header class="ehall-header">
    <div class="ehall-header-top">
      <div class="top-left-text">
        <span class="title">弄潮青春 汇聚山海 我们期待你的加入</span>
        <div>
          <a class="top-right-a" target="_blank" href="https://sjc.zjweu.com.cn"
            >校记主页</a
          >
          <a class="top-right-d">|</a
          ><a
            class="top-right-a"
            target="_blank"
            href="https://www.zjweu.edu.cn"
            >学校官网</a
          >
          <a class="top-right-d">|</a>
          <a
            class="top-right-a"
            target="_blank"
            href="https://xcb.zjweu.edu.cn/"
            >宣传部</a
          >

          <!-- <a class="top-right-d">|</a><a class="top-right-a"
                        target="_blank" @click="changePage('/suggest')">建议与反馈</a> -->
        </div>
      </div>
    </div>
    <div
      class="ehall-header-home"
      :class="{ 'transparent-bg': pageNow === 'resHome' }"
    >
      <div class="header__title">
        <div
          class="logo"
          @click="changePage('/')"
          style="display: flex; align-items: center"
        >
          <img src="/logo.png" alt="" height="50" />
          <span style="font-size: 22px; font-weight: 600">校记招新</span>
        </div>
      </div>
      <!-- <div class="searchInputRoot" style="margin-left: 25px;">
                <div><input placeholder="请输入关键词" type="text" class="search">
                   
                </div>
            </div> -->
      <div class="ehall_home__menu">
        <a
          @click="changePage('/home')"
          class="link portal-primary-color-hover-lv1 portal-primary-border-color-lv1 active portal-primary-color-lv1"
          v-if="pageNow == 'resHome'"
        >
          首页
        </a>
        <a
          @click="changePage('/home')"
          class="link portal-primary-color-hover-lv1 portal-primary-border-color-lv1 portal-font-color-lv1"
          v-else
        >
          首页
        </a>
        <!-- <a
          @click="changePage('/qun')"
          class="link portal-primary-color-hover-lv1 portal-primary-border-color-lv1 active portal-primary-color-lv1"
          v-if="pageNow == 'resQun'"
        >
          招新群
        </a>
        <a
          @click="changePage('/qun')"
          class="link portal-primary-color-hover-lv1 portal-primary-border-color-lv1 portal-font-color-lv1"
          v-else
        >
          招新群
        </a> -->
        <a
          @click="changePage('/list')"
          class="link portal-primary-color-hover-lv1 portal-primary-border-color-lv1 active portal-primary-color-lv1"
          v-if="pageNow == 'resList'"
        >
          我的投递
        </a>
        <a
          @click="changePage('/list')"
          class="link portal-primary-color-hover-lv1 portal-primary-border-color-lv1 portal-font-color-lv1"
          v-else
        >
          我的投递
        </a>
        <a
          @click="changePage('/admin')"
          v-if="formState?.is_staff"
          class="link portal-primary-color-hover-lv1 portal-primary-border-color-lv1 portal-font-color-lv1"
        >
          校记工作台
        </a>
        <!-- <a href="/vip"
                    class="link portal-primary-color-hover-lv1 portal-primary-border-color-lv1 active portal-primary-color-lv1"
                    v-if="pageNow == 'vip'">
                简历 </a>
                <a href="/vip"
                    class="link portal-primary-color-hover-lv1 portal-primary-border-color-lv1 portal-font-color-lv1"
                    v-else>
                简历 </a> -->
      </div>
      <div>
        <div class="authbtn">
          <div class="split"></div>
          <n-avatar v-if="formState?.name && !formState?.avatar">{{
            formState?.name?.[0]
          }}</n-avatar>
          <n-avatar
            v-if="formState?.avatar"
            :src="formState?.avatar"
            object-fit="cover"
          ></n-avatar>
          <span v-if="formState?.name" style="margin-left: 10px">
            <n-button
              color="#000"
              quaternary
              text
              style="font-size: 15px; font-weight: 500"
              @click="changePage('/user')"
            >
              {{ formState?.name }}
            </n-button>
          </span>
          <n-button type="primary" v-else @click="casLogin()">
            登录/注册
          </n-button>
        </div>
      </div>
    </div>
  </header>

  <br />
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
      this.$router.push(url);
      // window.location.href = url
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

.ehall_home__menu {
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
}

.ehall_home__menu .link {
  margin: 0 12px -5px;
  height: 28px;
  font-size: 16px;
  font-weight: 600;
  color: #212a39;
  line-height: 21px;
  cursor: pointer;
}

.ehall_home__menu .link:hover {
  font-weight: 600;
  color: #55b2b0;
}

.ehall_home__menu .active {
  /* border-bottom: 3px solid; */
  font-weight: 600;
}

.portal-primary-border-color-lv1 {
  border-color: #55b2b0 !important;
}

.portal-primary-color-lv1 {
  color: #55b2b0 !important;
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
