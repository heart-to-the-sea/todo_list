<template>
  <div class="pageBody">
    <!-- <LeftMenu /> -->
    <slot />
  </div>
</template>
<style lang="less" scoped>
.pageBody {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
}
</style>
