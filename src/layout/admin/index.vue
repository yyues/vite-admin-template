<template>
  <myContainer>
    <template #aside>
      <sideBar />
    </template>
    <template #default>
      <router-view v-slot="{ Component, route }">
        <keep-alive v-if="route.meta.keepAlive">
          <component :is="Component" />
        </keep-alive>
        <component v-else :is="Component" />
      </router-view>
    </template>
  </myContainer>
</template>
<script lang="ts">
import sideBar from '/@/components/sideBar/index.vue'
export default {
  components: { sideBar }
}
</script>
