<template>
  <div class="box">
    <div
      v-for="(item, index) in 10"
      class="item"
      @click="handleClick(index)"
      :class="{ active: index === selIdx }"
    >
      <div class="cnt">
        <div class="before" :style="{ opacity: 1.2 - (10 - index) / 10 }"></div>
        <div class="node" :style="{ opacity: (10 - index) / 10 }"></div>
        <div class="after" :style="{ opacity: 1.2 - (10 - index) / 10 }"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { disable } = defineProps(["disable"]);
const selIdx = ref(1);
function handleClick(index: number) {
  if (disable) {
    return;
  }
  selIdx.value = index;
}
</script>
<style lang="less" scoped>
.box {
  display: flex;
  .item {
    width: 28px;
    height: 28px;
    margin: 0 6px;
    border-radius: 15px;
    background-color: rgb(255, 0, 0);
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    border: 2px solid rgba(255, 255, 255, 0.658);

    .cnt {
      width: 24px;
      height: 24px;
      border-radius: 12px;
      position: relative;
      .node {
        width: 100%;
        height: 100%;
        border-radius: 12px;
        background-color: #ffffff;
      }
    }
    &.active .cnt {
      .before,
      .after {
        content: "";
        position: absolute;
        width: 0px;
        height: 0px;
        border: 6px solid #ff0000;
        border-color: transparent transparent #ff0000 #ff0000;
        left: 0;
        right: 0;
        z-index: 99;
        transform-origin: center;
      }
      .before {
        top: -14px;
        transform: rotate(-45deg) translateX(6px);
      }
      .after {
        bottom: -24px;
        transform: rotate(-225deg) translatex(-6px);
      }
    }
  }
}
</style>
