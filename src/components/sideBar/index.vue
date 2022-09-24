<template>
  <el-menu
    :collapse="isCollapse"
    @select="handleClick"
    :collapse-transition="false"
    :default-active="$route.path"
  >
    <sideBarItem :router="routers" />
  </el-menu>
</template>
<script lang="ts">
import { reactive, ref } from "@vue/reactivity";
import { computed, watch } from "@vue/runtime-core";
import sideBarItem from "./sideBarItem.vue";
import { useStore } from "../../store";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "LeftMenu",
  components: { sideBarItem },
  props: {
    custom: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const isCollapse = computed(() => store.state.app.isCollapse);
    const CollapseMenuWidth = computed(
      () => `${store.state.app.CollapseMenuWidth}px`
    );
    const paddingLeft = computed(
      () => `${(store.state.app.CollapseMenuWidth - 24) / 2}px`
    );

    const routers = computed(() => store.state.user.userMenu);

    const handleClick = (path: any) => {
      console.log(path);
      // router.push({ path });
    };
    return {
      isCollapse,
      route,
      router,
      routers,
      handleClick,
      paddingLeft,
      CollapseMenuWidth,
    };
  },
};
</script>
<style lang="scss" scoped>
:deep(.el-menu) {
  // background-color: transparent;
}
</style>
