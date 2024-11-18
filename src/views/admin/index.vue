<template>
  <a-layout style="min-height: 100vh">
    <SideBar></SideBar>
    <a-layout>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </a-layout>
  </a-layout>
</template>
<script>

import axios from 'axios';
import { defineComponent, ref } from 'vue';
import SideBar from '@/components/admin/layout/SideBar.vue'
import Header from '@/components/admin/layout/Header.vue'
import Footer from '@/components/admin/layout/Footer.vue'
import Main from '@/components/admin/layout/Main.vue'
export default defineComponent({
  components: {
    SideBar,
    Header,
    Footer,
    Main
  },

  data() {
    return {
      collapsed: ref(false),
      selectedKeys: ref(['1']),
      
    };
  },
  created(){
    var nowURL = this.$route.path
    var decodeURL = window.btoa(nowURL)
    axios.get('/api/admin/info')
            .then(res => {
                this.errcode = res.data.errcode
                if(this.errcode==200){
                  //获取成功
                }else{
                  var url = 'login?redirect=' + decodeURL
                  this.$router.push(url);
                  this.$Message.warning(res.data.errmsg);
                }
            }).catch(err => {
                console.log(err)
            })
  },

});
</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}

.logo {
  margin: 15px 5px 15px 5px;
}

.i-layout-header-right {
  height: 48px;
  float: right;
}
.ivu-select-dropdown ul{
  margin-bottom: 0em !important
}
</style>