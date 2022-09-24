<template>
  <div class="layout-page h-full flex flex-col">
    <div class="flex h-12 shadow w-screen"></div>
    <section class="flex flex-1 pt-[3px]">
      <div class="w-48">
        <Menu />
      </div>
      <div class="p-2.5"></div>
    </section>
  </div>
</template>
<script lang="ts" setup>
import Menu from "/@/components/sideBar/index.vue";
</script>
