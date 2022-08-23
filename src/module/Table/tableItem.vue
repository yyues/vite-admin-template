<template>
  <template v-if="tableItem.children && tableItem.children.length !== 0">
    <el-table-column :label="tableItem.label" :prop="tableItem.prop">
      <slot v-for="item in (tableItem.children as ITableItem[])" :key="item.prop" :name="item.slot && item.prop">
        <table-item :tableItem="item"></table-item>
      </slot>
    </el-table-column>
  </template>
  <template v-else>
    <el-table-column
      v-if="!tableItem.hidden"
      :key="tableItem.prop"
      :width="tableItem.width"
      :align="tableItem.align"
      :label="tableItem.label"
      :prop="tableItem.prop"
      :show-overflow-tooltip="tableItem.showTooltip"
    ></el-table-column>
  </template>
</template>
<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue'
import { ITableItem } from './index.vue'
export default defineComponent({
  name: 'tableItem',
  props: {
    tableItem: {
      type: Object as PropType<ITableItem>,
      required: true
    }
  }
})
</script>
