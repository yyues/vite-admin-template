<template>
  <el-table
    v-bind="$attrs"
    ref="leaseTable"
    highlight-current-row
    :data="data"
    v-if="tableHeader.length !== 0"
    @selection-change="handleSelectionChange"
    @select-all="handleAllChange"
    @select="handleRowChange"
  >
    <el-table-column
      v-if="hasSelection"
      type="selection"
      :selectable="selectable"
      align="center"
      width="55"
    ></el-table-column>
    <el-table-column
      v-if="hasIndex"
      label="序列"
      type="index"
      align="center"
      width="55"
    ></el-table-column>
    <slot name="left" v-if="$slots.left"></slot>
    <table-item v-for="col in tableHeader" :key="col.prop" :col="col">
      <template v-for="slot in Object.keys($slots)" #[slot]="scope">
        <slot :name="slot" v-bind="scope"></slot>
      </template>
    </table-item>
    <slot name="right" v-if="$slots.right" />
    <slot name="action" v-if="$slots.action" />
  </el-table>
</template>
<script lang="ts">
import { defineComponent, PropType, toRefs, reactive, ref } from "vue";
import { TableItem } from "/@/module/type";
import tableItem from "./tableItem.vue";
export type ITableItem = TableItem;
export default defineComponent({
  name: "Table",
  inheritAttrs: false,
  components: { tableItem },
  props: {
    header: {
      type: Array as PropType<ITableItem[]>,
      required: true,
    },
    data: Object as PropType<any[]>,
    hasSelection: {
      type: Boolean,
      default: false,
    },
    hasIndex: {
      type: Boolean,
      default: false,
    },
    selectable: Function as PropType<(row: any, index: number) => boolean>,
  },
  emits: ["selection-change", "row-change", "select-all"],
  setup(props, content) {
    // Table Ref
    const leaseTable = ref(null);
    const { header } = toRefs(props);
    const tableHeader = reactive<ITableItem[]>(header.value as ITableItem[]);
    /**
     * @param {Object} val 选中的列
     */
    const handleSelectionChange = (val) => {
      content.emit("selection-change", val);
    };
    /**
     * @param {Array} row 选中列
     * @param {Boolean} selected 是否被选中
     * @description: 复现框单个选项勾选及取消事件
     */
    const handleAllChange = (row, selected: boolean) => {
      content.emit("select-all", row, selected);
    };
    /**
     * @param {Object} row 选中列
     * @param {Boolean} selected 是否被选中
     * @description: 复选框全选按钮勾选及取消事件
     */
    const handleRowChange = (row, selected: boolean) => {
      content.emit("row-change", row, selected);
    };
    /**
     * @description: 重新布局 Table
     */
    const doLayout = () => {
      // leaseTable.value?.doLayout();
    };
    return {
      tableHeader,
      handleRowChange,
      handleAllChange,
      handleSelectionChange,
    };
  },
});
</script>
