<script setup lang="ts">
import FormData from "~/components/form/FormData.vue";
import { formItems } from "~/formConfig/loginFormItem";
const formData = ref({});
const loginFUn = ref("account");
function handleCheckLogin() {
  if ("account" === loginFUn.value) {
    loginFUn.value = "wx";
  } else {
    loginFUn.value = "account";
  }
}
</script>

<template>
  <div class="bkg"></div>
  <div class="login-box">
    <div class="title">
      <h1>项目集管理</h1>
    </div>
    <div v-if="'account'.includes(loginFUn)">
      <FormData
        :label-width="80"
        :form-items="formItems"
        :default-form-value="formData"
      />
      <div class="login-btn">登录</div>
    </div>

    <div v-else="'wx'.includes(loginFUn)" style="background-color: #000000;padding: 4px;">
      <div style="width: 150px; height: 150px; margin: auto;
      background-color: #ffffff;margin-bottom: 6px;"></div>
    </div>
    <div class="footer">
      <div style="display: inline-block" @click="handleCheckLogin">
        <span>微信登录</span>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.bkg {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: #233385cc;
}
.login-box {
  width: 400px;
  height: 270px;
  padding: 20px 16px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 4px;
  background-color: #ffffff;
  .title {
    text-align: center;
    margin-bottom: 10px;
    margin-top: 6px;
  }
  .login-btn {
    margin-top: 20px;
    margin: auto;
    width: 85%;
    text-align: center;
    padding: 6px;
    margin-top: 20px;
    color: #ffffff;
    background-color: #2548f1;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s;
    &:active {
      background-color: #2548f1cc;
    }
  }
  .footer {
    text-align: right;
    font-size: 12px;
    padding: 4px 24px;
    color: #2548f1;
    user-select: none;
    cursor: pointer;
  }
}
</style>
