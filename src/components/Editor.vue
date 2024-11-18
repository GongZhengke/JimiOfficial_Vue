<template>
    <div>
      <QuillEditor ref="myQuillEditor"
        theme="snow"
        v-model:content="content"
        :options="data.editorOption"
        contentType="html"
        @update:content="setValue()"
        style="height:200px;"
      />
      <!-- 使用自定义图片上传 -->
      <input type="file" hidden accept=".jpg,.png,.jpeg,.heif" ref="fileBtn" @change="handleUpload" />
    </div>
  </template>
  
  <script setup>
  import { QuillEditor } from '@vueup/vue-quill'
  import '@vueup/vue-quill/dist/vue-quill.snow.css'
  import { reactive, onMounted, ref, toRaw, watch } from 'vue'
  // import { backsite } from '@/api'
  import axios from "axios";

  const props = defineProps(['value'])
  const emit = defineEmits(['updateValue'])
  const content = ref('')
  const myQuillEditor = ref()
  const fileBtn = ref()
  const data = reactive({
    content: '',
    editorOption: {
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'size': ['small', false, 'large', 'huge'] }],
          [{ 'font': [] }],
          [{ 'align': [] }],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'indent': '-1' }, { 'indent': '+1' }],
          [{ 'header': 1 }, { 'header': 2 }],
          ['image'],
          [{ 'direction': 'rtl' }],
          [{ 'color': [] }, { 'background': [] }]
        ]
      },
      placeholder: '请输入内容...'
    }
  })
  const imgHandler = (state) => {
    if (state) {
      fileBtn.value.click()
    }
  }
  const setValue = () => {
    const text = toRaw(myQuillEditor.value).getHTML()
    emit('updateValue', text)
  }
  const handleUpload = async(e) => {
    const files = Array.prototype.slice.call(e.target.files);
    if (!files) {
        return;
    }
    const formData = new FormData();
    formData.append('file', files[0]);

    try {
        const response = await axios.post('/api/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
        });

        if (response.data && response.data.data.file_path) {
        const quill = toRaw(myQuillEditor.value).getQuill();
        const range = quill.getSelection();
        quill.insertEmbed(range.index, 'image', response.data.data.file_path);
        }
    } catch (error) {
        console.error('上传图片失败', error);
    }


  }
  onMounted(() => {
    const quill = toRaw(myQuillEditor.value).getQuill()
    if (myQuillEditor.value) {
      quill.getModule('toolbar').addHandler('image', imgHandler)
    }
    toRaw(myQuillEditor.value).setHTML(props.value)
    data.content = props.value
    console.log(props);
  })
  </script>