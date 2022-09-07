<template>
  <section>
    <div>
      <el-button plain>Primary</el-button>
    </div>
    <div>
      <el-button @click="showSuccess">Success</el-button>
    </div>
    <div>
      <el-button @click="showWarning">Warning</el-button>
    </div>
    <div>
      <el-button @click="showError">Error</el-button>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ElMessage } from "element-plus";
export default defineComponent({
  name: "AppPage",
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
