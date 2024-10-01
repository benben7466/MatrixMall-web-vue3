<script setup lang="ts">
import router from "@/router";

const tabPaneClass = ref();

onMounted(() => {
  if (router.currentRoute.value.path === '/my-account/address') {
    tabPaneClass.value.classList.add('active');
    tabPaneClass.value.classList.add('show')
  }else{
    tabPaneClass.value.classList.remove('active');
    tabPaneClass.value.classList.remove('show')
  }

});
</script>

<template>
  <div ref="tabPaneClass" class="tab-pane fade" id="address-edit" role="tabpanel">
    <div class="myaccount-content">
      <h3>地址信息</h3>
      <address>
        <p><strong>贲氏科技</strong></p>
        <p>北京北京北京 <br>北京北京北京 </p>
        <p>电话:(+86) 134-2628-6424</p>
      </address>
      <a href="#" class="ht-btn black-btn d-inline-block edit-address-btn">
        <i class="fa fa-edit"></i>Edit Address
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>