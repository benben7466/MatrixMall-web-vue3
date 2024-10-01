<script setup lang="ts">
import router from "@/router";

const tabPaneClass = ref();

onMounted(() => {
  if (router.currentRoute.value.path === '/my-account/userinfo') {
    tabPaneClass.value.classList.add('active');
    tabPaneClass.value.classList.add('show')
  }else{
    tabPaneClass.value.classList.remove('active');
    tabPaneClass.value.classList.remove('show')
  }

});
</script>

<template>
  <div ref="tabPaneClass" class="tab-pane fade" id="account-info" role="tabpanel">
    <div class="myaccount-content"><h3>账户详情</h3>
      <div class="account-details-form">
        <form action="javascript:;">
          <div class="row">
            <div class="col-lg-6 col-12 mb-5">
              <input id="name" placeholder="姓名" type="text">
            </div>
            <div class="col-lg-6 col-12 mb-5">
              <input id="mobilephone" placeholder="电话" type="text">
            </div>
            <div class="col-12 mb-5">
              <input id="email" placeholder="邮箱地址" type="email">
            </div>
            <div class="col-12 mb-5">
              <h4>修改密码</h4>
            </div>
            <div class="col-12 mb-5">
              <input id="current-pwd" placeholder="当前密码" type="password">
            </div>
            <div class="col-lg-6 col-12 mb-5">
              <input id="new-pwd" placeholder="新密码" type="password">
            </div>
            <div class="col-lg-6 col-12 mb-5">
              <input id="confirm-pwd" placeholder="确认密码" type="password">
            </div>
            <div class="col-12">
              <button class="btn btn-warning btn-hover-primary">保存</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>