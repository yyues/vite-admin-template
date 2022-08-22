<template>
  <slot :name="prop" v-if="slot" v-bind="tableItem"></slot>
  <template v-else>
    <el-table-column v-if="!hidden" :key="prop" :width="width" :align="align" :label="label" :prop="prop" :show-overflow-tooltip="showTooltip">
      <template v-if="children && children.length !== 0">
        <div v-if="(item,index) in (children as ITableItem[])" :key="item">
          <tableItem :tableItem="item" />
        </div>
      </template>
    </el-table-column>
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
  },
  setup(props) {
    return {
      ...toRefs(props.tableItem)
    }
  }
})
</script>
