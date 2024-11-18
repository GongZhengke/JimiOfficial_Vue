<template>
  <Carousel :img_url="img_url"></Carousel>
</template>
<script setup>
import { h, ref, onMounted } from "vue";
import { get, post } from "@/JS/ajax";
import Carousel from "@/components/Home/Carousel.vue";
import { message } from "ant-design-vue";

const img_url = ref(localStorage.getItem("img_url") || "");

onMounted(() => {
  if (!img_url.value) {
    // getCarousel();
    img_url.value = '/lmd2.jpg'
  }
});

const getCarousel = async () => {
  try {
    const response = await get("system/dict_item?dict_id=502c8616-cab5-4dc6-a28b-ed4602b33eb6", {});
    if (response.total > 0) {
      img_url.value = response.items[0].value;
      localStorage.setItem("img_url", img_url.value); // 缓存值
    } else {
      message.error("系统错误");
    }
  } catch (error) {
    message.error("请求失败");
  }
};

</script>
