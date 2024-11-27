<template>
  <el-config-provider :locale="zhCn">
    <NuxtLayout>
      <!--  -->
      <NuxtPage :page-key="(route: any) => route.fullPath" />
    </NuxtLayout>
  </el-config-provider>
</template>
<script setup lang="ts">
import * as ElementPlusIconVue from "@element-plus/icons-vue";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import ElementPlus from "element-plus";
import { createPinia } from "pinia";

import "dayjs/locale/zh-cn";

const nuxtApp = useNuxtApp();
const pinia = createPinia();

for (const [key, component] of Object.entries(ElementPlusIconVue)) {
  nuxtApp.vueApp.component(key, component);
}
nuxtApp.vueApp.use(ElementPlus);
nuxtApp.vueApp.use(pinia);
</script>
