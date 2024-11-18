<template>
  <n-spin :show="showSpin">
    <n-tabs
      v-model:value="DeptTab"
      type="line"
      animated
      style="margin: 5px 5px 0px 5px"
    >
      <n-tab-pane name="all" tab="全部"></n-tab-pane>
      <n-tab-pane name="2" tab="影像部"></n-tab-pane>
      <n-tab-pane name="4" tab="微信部"></n-tab-pane>
      <n-tab-pane name="5" tab="微博部"></n-tab-pane>
      <n-tab-pane name="6" tab="综合部"></n-tab-pane>
      <n-tab-pane name="7" tab="美工部"></n-tab-pane>
      <n-tab-pane name="8" tab="校报部"></n-tab-pane>
      <n-tab-pane name="9" tab="溯园讲解团"></n-tab-pane>
    </n-tabs>
    <n-list hoverable clickable>
      <div v-for="(item, index) in postData" :key="index">
        <n-list-item
          v-if="item.status"
          class="reslist"
          @click="goPost(item.id)"
        >
          <n-thing content-style="margin-top: 10px;">
            <template #header>
              <div>
                {{ item.name }}
                <small style="font-weight: 400"> / {{ item.post_type }}</small>
              </div>
            </template>
            <template #description>
              <n-space size="small" style="margin-bottom: 3px">
                <n-tag :bordered="false" type="warning" size="small">
                  {{ item.planname }}
                </n-tag>
                <n-tag
                  :bordered="false"
                  :type="getStatusType(item.start_date, item.end_date)"
                  size="small"
                >
                  {{ getStatusText(item.start_date, item.end_date) }}
                </n-tag>
                <n-tag :bordered="false" type="info" size="small">
                  {{ item.post_campus }}
                </n-tag>
                <n-tag :bordered="false" size="small">
                  {{ item.renshu }}人
                </n-tag>
              </n-space>
            </template>
            <n-ellipsis
              :tooltip="false"
              :line-clamp="1"
              style="color: #00000045"
            >
              {{ stripHtml(item.description) }}
            </n-ellipsis>
          </n-thing>
          <template #suffix>
            <van-icon name="arrow" />
          </template>
        </n-list-item>
      </div>
      <div v-if="isEmpty || !(postData.length > 0)">
        <a-empty description="暂无数据" style="margin: 150px 0;"/>
      </div>
    </n-list>
    <n-pagination
      style="float: right; margin-top: 20px; padding-bottom: 20px"
      v-model:page="page"
      :page-count="pageNum"
    />
  </n-spin>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router"; // 引入 useRouter 钩子
import { get } from "@/JS/ajax";

const DeptTab = ref('all')

const showSpin = ref(true);
const postData = ref([]);
const planMap = ref({}); // 计划 ID 和名称的映射
const router = useRouter(); // 获取 router 实例
const page = ref(1);
const pageNum = ref(1);

const getPlanName = (planId) => {
  return planMap.value[planId] || "未知计划";
};

const getStatusText = (startDate, endDate) => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);
  if (now >= start && now <= end) {
    return "进行中";
  } else if (now < start) {
    return "未开始";
  } else {
    return "已截止";
  }
};

const getStatusType = (startDate, endDate) => {
  const status = getStatusText(startDate, endDate);
  if (status === "进行中") {
    return "success"; // 可以用绿色表示进行中
  } else if (status === "未开始") {
    return "warning"; // 可以用黄色表示未开始
  } else {
    return "error"; // 可以用红色表示已截止
  }
};

const isEmpty = ref(true);

const fetchData = async () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  // 获取职位数据
  var deptid = '';
  if(DeptTab.value != 'all'){deptid=DeptTab.value}
  const postResponse = await get("hr/front_post/", { page: page.value,department_id:deptid });
  if (postResponse.code === 2000) {
    postData.value = postResponse.data;
    pageNum.value = Math.ceil(postResponse.total / 20);
    if (postData.value.length > 0) {
      for (let i = 0; i < postData.value.length; i++) {
        if (postData.value[i].status == true) {
          isEmpty.value = false;
        }
      }
    }
  }

  // 获取计划数据
  const planResponse = await get("hr/plan/");
  if (planResponse.code === 2000) {
    planMap.value = planResponse.data.reduce((map, plan) => {
      map[plan.id] = plan.name;
      return map;
    }, {});

    showSpin.value = false;
  }
};

const goPost = (id) => {
  router.push(`/post/${id}`); // 使用 router 实例进行跳转
};

const stripHtml = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};



const changeTab = () => {
  page.value = 1
  fetchData();
}

watch(page, fetchData);
watch(DeptTab, changeTab);

onMounted(() => {
  fetchData();
});
</script>

<style>
.reslist .n-thing-header__title {
  font-size: 18px !important;
  font-weight: 600 !important;
}
</style>
