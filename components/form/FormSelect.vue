<template>
  <el-select v-bind="props">
    <el-option
      v-if="props.list"
      v-for="item in props.list"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>
<script lang="ts" setup>
const props = defineProps(["list", "style", "placeholder"]);
</script>
