<template>

  <div style="background: #fff; min-height:300px;margin-top:16px;padding: 16px 24px;">
      <div class="ant-page-header-heading"><div class="ant-page-header-heading-left"><span class="ant-page-header-heading-title" title="{{pageName}}">{{pageName}}</span></div></div>
      <div style="margin-top: 20px;">
        <a-tabs v-model:activeKey="activeKey" :tab-position="tabPosition" animated>
          <a-tab-pane key="1" tab="Tab 1">Content of Tab 1</a-tab-pane>
          <a-tab-pane key="2" tab="Tab 2">Content of Tab 2</a-tab-pane>
          <a-tab-pane key="3" tab="Tab 3">Content of Tab 3</a-tab-pane>
        </a-tabs>
      </div>
  </div>
  
  
  </template>
  <script>
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    setup() {
      const tabPosition = ref('left');
      const activeKey = ref('1');
      return {
        tabPosition,
        activeKey,
      };
    },
    data() {
        return {
          pageName:''
        };
    },
    created(){
        this.pageName = this.$route.meta.title
    },
  });
  </script>
  <style>
  
  </style>