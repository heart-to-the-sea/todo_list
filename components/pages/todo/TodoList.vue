<template>
  <div class="box">
    <Transition name="tools">
      <div class="box-head-tools" v-if="selectIdx.length">
        <div class="btn" @click="handleSuccess">完成</div>
        <div class="btn">滞后</div>
        <div class="btn error">删除</div>
      </div>
    </Transition>
    <div class="list-box">
      <div
        class="item"
        v-for="(item, index) in 20"
        :key="index"
        :class="{ active: selectIdx.includes(index) }"
        @click="handleSelectItem(index)"
      >
        <div class="pre" :class="{ error: selectIdx.includes(index) }"></div>
        <!-- <el-checkbox></el-checkbox> -->
        <div class="content" @dblclick.stop.prevent="handleEdit(index)">
          <span v-if="editIndex !== index">小步家园任务审核</span>
          <el-input v-else value="小步家园任务审核">
            <template #suffix>
              <el-icon style="font-size: 18px; cursor: pointer">
                <SuccessFilled @click.stop.prevent="handleSubmit" />
              </el-icon>
            </template>
          </el-input>
        </div>
        <!-- <div class="tags"> -->
        <!-- <div class="tag error">超期</div> -->
        <!-- <div class="tag warning">滞后</div>
          <div class="tag await">延迟</div> -->
        <!-- </div> -->
        <el-icon>
          <ArrowRightBold @click.stop.prevent="handleClick(item)" />
        </el-icon>
      </div>
    </div>
    <div class="addBtn">
      <el-icon><Plus @click.stop.prevent="handleClick" /></el-icon>
    </div>
  </div>
</template>
<script lang="ts" setup>
const emit = defineEmits(["dataClick"]);
const editIndex = ref(-1);
const selectIdx = ref<number[]>([]);
function handleEdit(idx: number) {
  editIndex.value = idx;
}
function handleClick(item: number) {
  emit("dataClick", item);
  return () => {
    console.log("dataClick");
  };
}
function handleSuccess() {
  selectIdx.value = [];
}
function handleSubmit() {
  editIndex.value = -1;
}
function handleSelectItem(idx: number) {
  const index = selectIdx.value.findIndex((item) => item === idx);
  if (index !== -1) {
    selectIdx.value.splice(index, 1);
  } else {
    selectIdx.value.push(idx);
  }
}
</script>
<style lang="less" scoped>
.box {
  flex: 1;
  padding: 0 10px;
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
}
.box-head-tools {
  width: 100%;
  height: 32px;
  display: flex;
  background-color: #f6f9fc;
  align-items: center;
  padding: 0 12px;
  flex: 0 0 auto;
  overflow: hidden;
  .btn {
    font-size: 16px;
    color: #ffffff;
    margin: 0 8px;
    padding: 6px;
    line-height: 16px;
    background-color: #1957f5;
    &.error {
      background-color: #ff0000;
    }
  }
}
.list-box {
  height: calc(100%);
  overflow: auto;
  overflow-y: scroll;
  position: relative;
  &::-webkit-scrollbar {
    width: 4px;
  }
  .item {
    flex: 1;
    width: 100%;
    font-size: 16px;
    color: #666666;
    background-color: #ffffffaa;
    height: 46px;
    padding: 0 20px;
    margin-bottom: 12px;
    cursor: pointer;
    transition: all 0.6s ease;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .pre {
      height: 100%;
      width: 5px;
      left: 0;
      background-color: #1957f5;
      position: absolute;
      &.error {
        background-color: #f54f4f;
      }
    }
    &:hover,
    &.active {
      color: #ffffff;
      background-color: #1957f5;
    }
    .content {
      margin: 0 12px;
      flex: 1;
      max-width: 100%;
      min-width: 1px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .tags {
      display: flex;
      justify-content: center;
      .tag {
        line-height: 14px;
        margin: 0 4px;
        font-size: 12px;
        padding: 4px 6px;
        font-weight: 600;
        border: 1px dashed;
        &.success {
          color: #ff000099;
        }
        &.error {
          color: #ff000099;
          background-color: #ff000022;
          color: #ffffff;
          background-color: #ff0000;
        }
        &.warning {
          color: #bbb80d99;
          background-color: #bbb80d22;
        }
        &.await {
          color: #5f5f5f99;
          background-color: #5f5f5f22;
        }
      }
    }
    &.active {
      .tag {
        &.success {
          color: #ff000099;
        }
        &.error {
          color: #ffffff;
          background-color: #ff0000;
        }
        &.warning {
          color: #ffffff;
          background-color: #bbb80d;
        }
        &.await {
          color: #ffffff;
          background-color: #5f5f5f;
        }
      }
    }
  }
}
.addBtn {
  margin-top: 12px;
  border: 2px dashed #2548f166;
  display: flex;
  padding: 6px;
  display: flex;
  justify-content: center;
  background-color: #ffffffcc;
  transition: all 0.6s;
  cursor: pointer;
  color: #2548f1;
  &:hover {
    background-color: #2548f1;
    border: 2px dashed #ffffff;
    color: #ffffff;
  }
}
</style>
<style lang="less">
.tools-enter-active,
.tools-leave-active {
  transition: all 0.6s;
  height: 32px !important;
}
.tools-enter-from,
.tools-leave-to {
  height: 0 !important;
  filter: blur(1rem);
}
.tools-enter-to,
.tools-leave-from {
  height: 32px !important;
}
</style>
