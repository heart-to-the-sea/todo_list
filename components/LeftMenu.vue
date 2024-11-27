<template>
  <div class="left-menu">
    <div class="node" v-for="item in 10">TODO</div>
  </div>
</template>
<style lang="less" scoped>
@import "../style/themes.less";
.left-menu {
  width: 50px;
  flex: 0 1 auto;
  background-color: @background;
  height: 100%;
  .node {
    font-size: 16px;
    color: @iconColor;
    width: 100%;
    overflow: hidden;
    user-select: none;
    cursor: pointer;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-bottom: 1px dashed;
    transition: all 0.3s ease;
    &:hover {
      color: @background;
      background-color: @iconColor;
    }
  }
}
</style>
