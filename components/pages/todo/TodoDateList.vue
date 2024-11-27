<template>
  <div class="box">
    <div
      class="item"
      v-for="item in 100"
      :class="{ active: item === 2 }"
      :key="item"
    >
      <!-- <span class="flash"></span> -->
      <span>2024-11-05</span>
      <span>0个</span>
    </div>
  </div>
</template>
<style lang="less" scoped>
.box {
  width: 100%;
  padding: 0 10px;
  height: calc(100% - 60px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 2px;
  }
  .item {
    color: #666666;
    background-color: #ffffff;
    height: 46px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    margin-bottom: 6px;
    cursor: pointer;
    position: relative;
    transition: all 0.6s ease;
    &:hover,
    &.active {
      background-color: #1957f5;
      color: #ffffff;
      font-size: 16px;
    }
  }
}
</style>
