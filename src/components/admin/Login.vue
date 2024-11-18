<template>
                <Card :bordered="false" style="padding:10px 15px 15px 15px;">
              <Title :level="4">后台管理登录</Title>
              <Login style="margin-top: 30px;"></Login>

            </Card>
  </template>
  
  <script>

    import Login from '@/components/admin/UserLogin.vue'
    import Phone from '@/components/authserver/PhoneLogin.vue'
    import Code from '@/components/authserver/CodeLogin.vue'
export default {
  components: {
    Login,
    Phone,
    Code
  },
  data () {
            return {
                
            }
        },
        methods:{
          info (nodesc) {
                this.$Notice.info({
                    title: '初始用户激活',
                    desc: nodesc ? '' : '初始用户的密码格式为 Zjweu 加上身份证号后6位，例如：Zjweu081010'
                });
            },
        }
}
  </script>
  