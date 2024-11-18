<template>
    <div class="bg"
      style="background: url('/static/images/bg.jpg') no-repeat;background-size:cover;background-position: center center;">
      <Row class="code-row-bg login-top-row" align="middle">
        <div class="login-top-shadow"></div>
        <Col :xs="{ span: 15, offset: 1 }" :sm="{ span: 11, offset: 1 }" :md="{ span: 9, offset: 1 }"
          :lg="{ span: 8, offset: 2 }" :xl="{ span: 6, offset: 3 }" :xxl="{ span: 5, offset: 3 }">
        <a @click=""><Image src="/static/images/logo-w.png" fit="contain" /></a>
        </Col>
  
      </Row>
  
      <div class="login-footer-space">
        <div class="login-footer-shadow"></div>
        <Footer style="position: absolute;width: 100%;bottom:0px;">
        </Footer>
  
      </div>
  
      <Row class="login-main">
  
        <Col style="margin-top: 100px;" :xs="24" :sm="{ span: 20, offset: 2 }" :md="{ span: 13, offset: 5 }"
          :lg="{ span: 9, offset: 7 }" :xl="{ span: 8, offset: 8 }" :xxl="{ span: 6, offset: 9 }">
        <Login></Login>
  
        </Col>
      </Row>
  
  
    </div>
  </template>
  
  <script>
  import Login from '@/components/admin/Login.vue'
  import Footer from '@/components/Footer.vue'
  
  export default {
    components: {
      Login,
      Footer
    },

    data() {
        return {
            
        };
    },
    created(){

    },
    methods:{
      toHome(){
        this.$router.push('/')
      }
      
    }
  
  }
  </script>
  <style>
  * {
    margin: 0;
    padding: 0;
  }
  
  html,
  body {
    width: 100%;
    height: 100%;
  }
  
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  
  .ivu-global-footer-links a {
    font-size: 10px;
    color: #fff;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
  
  .ivu-global-footer-links a:hover {
    font-size: 10px;
    color: #6aa1ed;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
  
  .ivu-global-footer-copyright {
    color: #fff;
    font-size: 10px;
  }
  
  .login-top-row {
    height: 15%;
    position: absolute;
    width: 100%;
  }
  
  .login-top-shadow {
    width: 100%;
    height: 100%;
    position: absolute;
    -webkit-mask-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0) 1%, rgba(0, 0, 0, 0.5) 100%);
    background: #000;
  }
  
  .login-footer-space {
    position: absolute;
    width: 100%;
    bottom: 0px;
    min-height: 200px;
  }
  
  .login-footer-shadow {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0px;
    -webkit-mask-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 1%, rgba(0, 0, 0, 0.3) 100%);
    background: #000;
  }
  
  .login-main {
    padding: 20px;
    position: absolute;
    width: 100%;
    margin-top: 5%;
  }
  </style>