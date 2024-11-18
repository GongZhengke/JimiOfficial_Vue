<template>
  <PC v-if="!checkMobile"></PC>
  <Mobile v-else></Mobile>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router"; // 引入 useRouter 钩子
import PC from "@/views/Login/PC.vue";
import Mobile from "@/views/Login/Mobile.vue";
const checkMobile = ref(false);

onMounted(() => {
  if (window.innerWidth <= 768) {
    checkMobile.value = true
  }
  localStorage.clear()
});
</script>
