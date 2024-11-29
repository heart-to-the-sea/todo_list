<template>
  <el-form :label-width="labelWidth || 130">
    <el-row>
      <template v-for="form in formItems" :key="form.key">
        <el-col :span="form.col">
          <el-form-item :label="form.label">
            <component
              v-if="!view"
              :is="form.componentName"
              v-model="formData[form.key]"
              v-bind="toOpt(form)"
            />
            <template v-else>
              <component
                v-if="form.viewComponentName"
                :is="form.viewComponentName"
                v-model="formData[form.key]"
                v-bind="{ ...toOpt(form), disable: true }"
              />
              <template v-else>
                <span v-if="form.componentOptions.list">{{
                  toLabel(form.key, form.componentOptions.list)
                }}</span>
                <pre v-else>{{ formData[form.key] }}</pre>
              </template>
            </template>
          </el-form-item>
        </el-col>
        <el-col :span="form.offset" v-if="form.offset"></el-col>
      </template>
    </el-row>
  </el-form>
</template>

<script lang="ts">
import DegreeOfUrgency from "~/components/pages/todo/DegreeOfUrgency.vue";
import FormSelect from "~/components/form/FormSelect.vue";

import "element-plus/dist/index.css";
export default {
  components: { DegreeOfUrgency, FormSelect },
};
</script>

<script setup lang="ts">
import { watch } from "vue";
const formData = ref<any>({});
interface PropI {
  formItems: Array<any>;
  defaultFormValue: Object;
}
const { formItems, defaultFormValue, view } = defineProps([
  "defaultFormValue",
  "formItems",
  "view",
  "labelWidth",
]);
function toOpt(opt: any) {
  if (opt.componentOptions) {
    if (!opt.componentOptions.placeholder) {
      opt.componentOptions.placeholder = opt.label;
    }
  }
  return opt.componentOptions;
}
watch(
  () => defaultFormValue,
  (nV) => {
    if (nV) formData.value = nV;
  },
  { immediate: true }
);

function toLabel(key: string, list: any[]) {
  let label = "-";
  const data = formData.value as any;
  const value = data[key] as string;
  const obj = list.find((item) => item.value === value);
  console.log(list, obj, key, data, data[key]);
  if (obj) {
    label = obj.label;
  }

  return label;
}
</script>
