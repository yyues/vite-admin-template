<template>
  <el-table-column
    v-bind="$attrs"
    :prop="tableItem?.prop"
    :label="tableItem?.label"
    :width="tableItem?.width"
    :min-width="tableItem?.minWidth"
    :show-overflow-tooltip="tableItem.showTooltip"
    :align="tableItem.align"
  >
    <template #default="scope">
      <template v-if="tableItem?.children && tableItem.children.length > 0">
        <table-item v-for="childCol in tableItem.children" :key="childCol.prop" :tableItem="childCol">
          <template v-for="slot in Object.keys($slots)" #[slot]="scope" :key="slot">
            <slot :name="slot" v-bind="scope"></slot>
          </template>
        </table-item>
      </template>
      <template v-else>
        <!-- 这里通过插槽实现自定义列 -->
        <slot v-if="tableItem?.slot" :name="scope.column.property" :row="scope.row" :$index="scope.$index"></slot>
        <!-- 这里的property自己想办法打印出来看看就明白了 -->
        <span v-else>{{ scope.row[scope.column.property] }}</span>
      </template>
    </template>
  </el-table-column>
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
