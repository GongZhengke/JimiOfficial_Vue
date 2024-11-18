<template>
  <Card :bordered="false" style="padding: 10px 15px 15px 15px">
    <Title :level="4">统一身份认证</Title>
    <!-- <Title :level="6" v-if="serviceData?.data?.name">登录到 {{ serviceData?.data?.name }}</Title> -->
    <a-alert v-if="serviceURL&&serviceData?.data?.name" style="margin: 10px 0 0 0;" :message="'您正在登录到 '+ (serviceData?.data?.name?serviceData?.data?.name:'加载中')" type="info" show-icon />
    <Login style="margin-top: 20px;"></Login>
    <!-- <Tabs value="name1">
      <TabPane label="账号登录" name="name1" class="ivu-pt-8 ivu-pl-8 ivu-pr-8">
        <Login></Login>
      </TabPane>
      <TabPane label="手机验证码" name="name2" class="ivu-pt-8 ivu-pl-8 ivu-pr-8">
                    <Phone></Phone>
                  </TabPane>
      <TabPane label="企业微信扫码" name="name3" class="ivu-pt-16 ivu-pl-8 ivu-pr-8">
                    <Code></Code>
                  </TabPane>
    </Tabs> -->
    <div class="ivu-pt-16 ivu-pl-8">
      <Link @click="info(false)"> 忘记密码 </Link>
    </div>
  </Card>
</template>

<script setup>
import { reactive, computed, ref, onMounted } from "vue";
import { Modal } from "ant-design-vue";
import { get, post } from "@/JS/ajax";
import { useRouter, useRoute } from "vue-router";
import { message } from "ant-design-vue";

const router = useRouter();
const route = useRoute();
const loading = ref(false);
const serviceData = ref({})
const serviceURL = ref("")

onMounted(async () => {
  getServiceURL();
});
const getServiceURL = async () => {
  const params = new URLSearchParams(window.location.search);
  const url = params.get("service") || "";
  serviceURL.value = url;
  try {
    const response = await get("system/cas/checkssourl", { service: url });
    if (response.items[0]) {
      // message.success("获取成功");
      serviceData.value = response.items[0]
    } else {
      Modal.error({
        title: '错误',
        content: `服务不可用或URL非法`,
        footer:''
      });
    }
  } catch (error) {
    message.warning(error?.response?.data?.detail || error?.message || "登录失败");
    loading.value = false;
  }
};
</script>

<script>
import Login from "@/components/authserver/UserLogin.vue";
import Phone from "@/components/authserver/PhoneLogin.vue";
import Code from "@/components/authserver/CodeLogin.vue";
export default {
  components: {
    Login,
    Phone,
    Code,
  },
  data() {
    return {};
  },
  methods: {
    info(nodesc) {
      this.$Notice.info({
        title: "忘记密码",
        desc: nodesc ? "" : "请联系系统管理员重置",
      });
    },
  },
};
</script>
