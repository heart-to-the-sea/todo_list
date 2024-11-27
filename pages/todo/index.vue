<template>
  <div style="width: 100%; height: 100%">
    <div class="title">每日任务列表</div>
    <TodoList @dataClick="handleClick" />
  </div>
</template>
<script setup lang="ts">
import TodoList from "~/components/pages/todo/TodoList.vue";
import { useIndexStore } from "~/store";
const emit = defineEmits(["changeList"]);
const store = useIndexStore();
function handleClick() {
  store.showProject = true;
  console.log("dataClick");
  navigateTo({
    path: "/todo/edit/123123",
  });
}
</script>
