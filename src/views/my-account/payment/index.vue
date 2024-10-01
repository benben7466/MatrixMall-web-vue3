<script setup lang="ts">
import router from "@/router";

const tabPaneClass = ref();

onMounted(() => {
  if (router.currentRoute.value.path === '/my-account/payment') {
    tabPaneClass.value.classList.add('active');
    tabPaneClass.value.classList.add('show')
  }else{
    tabPaneClass.value.classList.remove('active');
    tabPaneClass.value.classList.remove('show')
  }

});
</script>

<template>
  <div ref="tabPaneClass" class="tab-pane fade" id="payment-method" role="tabpanel">
    <div class="myaccount-content"><h3>支付方式</h3>
      <p class="saved-message">你还不能保存你的付款方式</p></div>
  </div>
</template>

<style scoped>

</style>