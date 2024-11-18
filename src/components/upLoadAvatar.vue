<template>
  <a-upload
    v-model:file-list="fileList"
    name="file"
    list-type="picture-card"
    class="avatar-uploader"
    :show-upload-list="false"
    :custom-request="customRequest"
    :before-upload="beforeUpload"
    @change="handleChange"
  >
    <img
      v-if="imageUrl"
      :src="imageUrl"
      style="height: 100%; width: 100%; object-fit: cover"
      alt="avatar"
    />
    <div v-else>
      <loading-outlined v-if="loading"></loading-outlined>
      <plus-outlined v-else></plus-outlined>
      <div class="ant-upload-text">Upload</div>
    </div>
  </a-upload>
</template>

<script setup>
import { ref, watch, defineEmits, defineProps } from "vue";
import { message } from "ant-design-vue";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons-vue";

const props = defineProps({
  initialUrl: String,
});

const emit = defineEmits(["updateUrl"]);

const fileList = ref([]);
const loading = ref(false);
const imageUrl = ref("");

const handleChange = (info) => {
  if (info.file.status === "uploading") {
    loading.value = true;
    return;
  }
  if (info.file.status === "done") {
    const responseUrl = info.file.response.data.file_path;
    imageUrl.value = responseUrl;
    loading.value = false;
    emit("updateUrl", responseUrl);
  }
  if (info.file.status === "error") {
    loading.value = false;
    message.error("Upload error");
  }
};

const beforeUpload = (file) => {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/svg+xml",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "application/zip",
    "application/x-rar-compressed",
  ];
  if (!allowedTypes.includes(file.type)) {
    message.error("不支持该文件类型！");
    return false;
  }
  const sizeLimit = {
    "image/jpeg": 20,
    "image/png": 20,
    "image/webp": 20,
    "image/svg+xml": 20,
    "application/msword": 100,
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": 100,
    "application/vnd.ms-excel": 100,
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": 100,
    "application/vnd.ms-powerpoint": 100,
    "application/vnd.openxmlformats-officedocument.presentationml.presentation": 100,
    "application/zip": 200,
    "application/x-rar-compressed": 200,
  };
  if (file.size / 1024 / 1024 > sizeLimit[file.type]) {
    message.error("文件大小超过限制！");
    return false;
  }
  return true;
};

const customRequest = ({ file, onSuccess, onError }) => {
  const authToken = localStorage.getItem("authToken");
  const formData = new FormData();
  formData.append("file", file);

  fetch("/api/upload", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => {
      onError(error);
    });
};

watch(
  () => props.initialUrl,
  (newVal) => {
    if (newVal) {
      imageUrl.value = newVal;
    }
  }
);
</script>

<style scoped>
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}
.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
