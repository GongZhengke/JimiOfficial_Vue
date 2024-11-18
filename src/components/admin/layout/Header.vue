<template>
  <a-layout-header style="background: #fff; padding: 0">

    <Row>
      <Col span="3">

      <div class="ant-pro-global-header-content">
        <div>
          <i aria-label="图标: reload" tabindex="-1" class="anticon anticon-reload"
            style="font-size: 18px; cursor: pointer;" @click="backHome()">
            <home-outlined />
          </i>
        </div>
      </div>
      </Col>
      <Col span="21">
      <div class="i-layout-header-right">

        <Dropdown placement="bottom-end" style="margin-right: 15px;">
          <a href="javascript:void(0)" style="margin-right: 10px;">
            <Avatar style="color: #f56a00;background-color: #fde3cf">{{headName}}</Avatar>
          </a>
          <template #list>
            <DropdownMenu>
              <DropdownItem>个人信息</DropdownItem>
              <DropdownItem @click="lgout = true">退出</DropdownItem>
            </DropdownMenu>
          </template>
        </Dropdown>

      </div>
      </Col>
    </Row>





  </a-layout-header>

  <Modal v-model="lgout" title="提示" :loading="loading" @on-ok="logOut">
    <p>确定要退出登录吗？</p>
  </Modal>

        <!-- <Dropdown placement="bottom-end" trigger="click"  style="margin-right: 15px;">
          <a href="javascript:void(0)" style="margin-right: 10px;">
            <a-badge :count="1">
              <a-avatar style="background-color: #fff">
                <template #icon>
                  <bell-outlined style="color: black;" />
                </template>
              </a-avatar>
            </a-badge>

          </a>
          <template #list>
            <a-tabs v-model:activeKey="activeKey" centered>
              <a-tab-pane key="1" tab="通知">

                <a-list item-layout="horizontal" :data-source="data" >
                  <template #renderItem="{ item }">
                    <a href="https://www.antdv.com/">
                    <a-list-item>
                      <a-list-item-meta
                        description="5天前">
                        <template #title>
                          {{ item.title }}
                        </template>
                        <template #avatar>
                          <a-avatar src="https://joeschmoe.io/api/v1/random" />
                        </template>
                      </a-list-item-meta>
                    </a-list-item>
                  </a>
                  </template>
                </a-list>

              </a-tab-pane>
              <a-tab-pane key="2" tab="消息" force-render>



                <a-list item-layout="horizontal" :data-source="data" >
                  <template #renderItem="{ item }">
                    <a href="https://www.antdv.com/">
                    <a-list-item>
                      <a-list-item-meta
                        description="5天前">
                        <template #title>
                          {{ item.title }}
                        </template>
                        <template #avatar>
                          <a-avatar src="https://joeschmoe.io/api/v1/random" />
                        </template>
                      </a-list-item-meta>
                    </a-list-item>
                  </a>
                  </template>
                </a-list>


              </a-tab-pane>
              <a-tab-pane key="3" tab="任务">


                <a-list item-layout="horizontal" :data-source="data" >
                  <template #renderItem="{ item }">
                    <a href="https://www.antdv.com/">
                    <a-list-item>
                      <a-list-item-meta
                        description="5天前">
                        <template #title>
                          {{ item.title }}
                        </template>
                        <template #avatar>
                          <a-avatar src="https://joeschmoe.io/api/v1/random" />
                        </template>
                      </a-list-item-meta>
                    </a-list-item>
                  </a>
                  </template>
                </a-list>

              </a-tab-pane>
            </a-tabs>
          </template>
        </Dropdown> -->


</template>
<script>
import axios from 'axios';
import { HomeOutlined, BellOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
const data = [{
  title: 'Ant Design Title 1',
}, {
  title: 'Ant Design Title 2',
}, {
  title: 'Ant Design Title 3',
}, {
  title: 'Ant Design Title 4',
}];
export default defineComponent({
  components: {
    HomeOutlined,
    BellOutlined
  },
  data() {
    return {
      lgout: false,
      loading: true,
      headName:''
    };
  },
  created() {
    axios.get('/api/admin/info')
            .then(res => {
                this.errcode = res.data.errcode
                if(this.errcode==200){
                  //获取成功
                  this.headName = res.data.username[0]
                }
            }).catch(err => {
                console.log(err)
            })
  },
  setup() {
    return {
      activeKey: ref('1'),
      data
    }
  },
  methods: {
    logOut() {
      var nowURL = this.$route.path
      var decodeURL = window.btoa(nowURL)
      setTimeout(() => {
        this.lgout = false;
        axios.get('/api/admin/logout')
            .then(res => {
                this.errcode = res.data.errcode
                if(this.errcode==200){
                  var url = 'login?redirect=' + decodeURL
                  this.$router.push(url);
                  this.$Message.warning(res.data.errmsg);
                }
            }).catch(err => {
                console.log(err)
            })
      }, 1000);


    },
    backHome() {
      window.open('/', '_blank');
    }
  }

});
</script>
<style>
.i-layout-header-right {
  height: 48px;
  float: right;
}

.ivu-select-dropdown ul {
  margin-bottom: 0em !important
}

.ant-pro-global-header-content {
  height: 64px;
  line-height: 64px;
  vertical-align: top;
  display: inline-block;
  padding: 0 22px;
}

.ant-tabs-nav {
  min-width: 300px;
}

.ivu-select-dropdown {
  padding: 0px 0;
}
.ant-list-item {
    padding-right: 24px;
    padding-left: 24px;
    overflow: hidden;
    cursor: pointer;
    transition: all .3s;
}
.ant-tabs-top > .ant-tabs-nav{
    margin: 0 0 0px 0;
}
.ant-list-item:hover{
  background: #f6fcff;
}
</style>