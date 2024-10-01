<script setup lang="ts">
import router from "@/router";

const tabPaneClass = ref();

onMounted(() => {
  if (router.currentRoute.value.path === '/my-account/dashboard') {
    tabPaneClass.value.classList.add('active');
    tabPaneClass.value.classList.add('show')
  }else{
    tabPaneClass.value.classList.remove('active');
    tabPaneClass.value.classList.remove('show')
  }

});
</script>

<template>
  <div ref="tabPaneClass" class="tab-pane fade " id="dashboad" role="tabpanel">
    <div class="myaccount-content"><h3>欢迎</h3>
      <div class="welcome mb-20">
        <p>上午好,<strong>顾客A</strong></p>
      </div>
      <p class="mb-0">欢迎访问本系统，<a href="https://gitee.com/benben7466" target="_blank">了解更多》</a></p>
    </div>
  </div>
</template>

<style scoped>

</style>