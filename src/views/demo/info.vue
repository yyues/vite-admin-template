<template>
  <Table :data="data" :header="header"></Table>
  <br />
  <Table :data="data" :header="headerTwo">
    <template #username>
      <el-table-column label="姓名">
        <template #default="{ row }">
          <span>{{ 1111 }}-{{ row.username }}</span>
        </template>
      </el-table-column>
    </template>
  </Table>
</template>
<script lang="ts" setup>
import Table from "/@/module/Table/index.vue";
const data = [
  { username: "yaoyue", age: 23, sex: "男" },
  { username: "songbowen", age: 19, sex: "女" },
];
const header = [
  { label: "姓名", prop: "username" },
  { label: "年龄", prop: "age" },
  { label: "性别", prop: "sex" },
];
const headerTwo = [
  { label: "姓名", prop: "username", slot: true },
  { label: "年龄", prop: "age" },
  { label: "性别", prop: "sex" },
];
</script>
