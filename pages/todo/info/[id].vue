<template>
  <div class="title">
    小步家园任务清单
    <el-tag type="warning" class="tag">编辑</el-tag>
    {{ route.params.id }}
  </div>
  <div class="box">
    <div
      style="
        padding: 14px 6px 14px;
        display: flex;
        justify-content: right;
        cursor: pointer;
      "
    >
      <el-icon style="font-size: 20px; font-weight: 800; color: #7990ff"
        ><UploadFilled @click="handleSubmit" />
      </el-icon>
      <el-icon style="font-size: 20px; color: #7990ff" @click="handleGoBack"
        ><ArrowRightBold />
      </el-icon>
    </div>
    <FormData
      :form-items="formItems"
      :default-form-value="formData"
      :view="true"
    />
  </div>
</template>
<script setup lang="ts">
import { formItems } from "~/formConfig/formItems";
import { useIndexStore } from "~/store";
import dayjs from "dayjs";
const route = useRoute();
const format = "YYYY-MM-DD HH:mm:ss";
const store = useIndexStore();
definePageMeta({
  pageTransition: {
    name: "todo",
  },
});

const formData = ref({
  name: "小布家园详情开发",
  startDateTime: "",
  sortMessageFlag: "0",
  sendPhone: "18362968813",
  degreeUrgency: "",
  preStartDate: dayjs().set("hour", 9).set("m", 0).set("s", 0).format(format),
  preEndDate: dayjs().set("hour", 18).set("m", 0).set("s", 0).format(format),
  actualStartDate: dayjs()
    .set("hour", 9)
    .set("m", 0)
    .set("s", 0)
    .format(format),
  actualEndDate: dayjs().set("hour", 18).set("m", 0).set("s", 0).format(format),
  description: "任务非常紧急\n 1.  \n 2.",
});

const router = useRouter();
function handleGoBack() {
  store.showProject = false;
  router.go(-1);
}
function handleSubmit() {
  console.log("submit");
  router.go(-1);
}
</script>

<style lang="less" scoped>
.tag {
  margin-left: 10px;
  background-color: #ffffff;
  color: #2548f1;
}
.box {
  flex: 1;
  padding: 0 10px;
  height: calc(100% - 60px);
  padding: 0 20px;
  overflow-y: scroll;
  background-color: #ffffffaa;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
}
</style>
