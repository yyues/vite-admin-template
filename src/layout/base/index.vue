<template>
  <section
    v-if="list.length !== 0"
    class="h-screen"
    :style="`background-image: url('${baseUrl + list[index].url}')`"
  >
    <header class="w-full h-16 shadow-white"></header>
    <section class="p-4">
      <el-button plain>Primary</el-button>
      <el-button @click="showError">Error</el-button>
      <el-button @click="showSuccess">Success</el-button>
      <el-button @click="showWarning">Warning</el-button>
      <el-button @click="change">change</el-button>
    </section>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { get } from "/@/utils/request/index";
export interface Api {
  images: {
    url: string;
  }[];
}
export interface Img {
  url: string;
  [x: string]: any;
}
export default defineComponent({
  name: "AppPage",
  setup() {
    const baseUrl = ref("https://cn.bing.com");
    const url = ref("/picture/HPImageArchive.aspx?n=8&mkt=zh-CN&format=js");
    const list = ref<Img[]>([]);
    const index = ref(0);
    onMounted(() => {
      get(url.value).then((res: Api) => {
        console.log(res);
        list.value = res.images;
      });
    });
    const change = () => {
      if (index.value < list.value.length) {
        index.value++;
      }
    };
    return {
      baseUrl,
      list,
      index,
      change,
    };
  },
  methods: {
    showSuccess() {
      ElMessage.success("success");
    },
    showError() {
      ElMessage.error("error");
    },
    showWarning() {
      ElMessage.warning("warning");
    },
  },
});
</script>
