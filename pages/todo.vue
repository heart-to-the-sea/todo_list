<template>
  <div class="page-box">
    <div class="left">
      <div style="height: 100%; width: 200px; flex: 1 0 auto">
        <div class="title" @click="show = !show">任务日历</div>
        <TodoDateList />
      </div>
    </div>
    <!-- <Transition name="rl">
      <div class="left" v-if="store.showProject" style="">
        <div style="height: 100%; width: 250px; flex: 1">
          <div class="title">每日任务</div>
          <TodoList style="width: 250px" />
        </div>
      </div>
    </Transition> -->
    <div class="right">
      <NuxtPage :page-key="(route: any) => route.fullPath" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import TodoDateList from "~/components/pages/todo/TodoDateList.vue";
import TodoList from "~/components/pages/todo/TodoList.vue";
import { useIndexStore } from "~/store/index";

definePageMeta({
  pageTransition: {
    name: "todo",
  },
});

const show = ref(false);
const store = useIndexStore();
</script>

<style lang="less">
.page-box {
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  padding: 15px;
  // border-radius: 10px;
  background-size: 200% auto;
  background-position: 0 220%;
  background-image: linear-gradient(45deg, #d8e9f7, #f1f1f4),
    linear-gradient(-45deg, #f7ece8, #e6eff4);
  .left {
    margin: 0;
    margin: 0;
    width: 250px;
    height: 100%;
    display: flex;
    display: flex;
    flex: 1 0 auto;
    overflow: hidden;
    margin-right: 6px;
    border-radius: 10px;
    justify-content: center;
  }
  .title {
    color: #333;
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    padding: 10px 10px 10px;
  }
  .right {
    flex: auto;
    width: 100%;
    height: 100%;
    flex-shrink: 1;
    overflow: hidden;
    margin-left: 6px;
  }
}
.rl-enter-active,
.rl-leave-active {
  transition: all 0.6s ease;
  width: 250px !important;
}

.rl-enter-from,
.rl-leave-to {
  width: 0px !important;
}
.rl-leave-from,
.rl-enter-to {
  width: 250px !important;
}
</style>

<style lang="less">
.todo-enter-active,
.todo-leave-active {
  transition: all 0.6s;
}
// .todo-enter-from,
// .todo-leave-to {
//   opacity: 0;
//   transform: scale(0);
//   // filter: blur(1rem);
// }
</style>
