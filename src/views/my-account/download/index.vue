<script setup lang="ts">
import router from "@/router";

const tabPaneClass = ref();

onMounted(() => {
  if (router.currentRoute.value.path === '/my-account/download') {
    tabPaneClass.value.classList.add('active');
    tabPaneClass.value.classList.add('show')
  }else{
    tabPaneClass.value.classList.remove('active');
    tabPaneClass.value.classList.remove('show')
  }

});
</script>

<template>
  <div ref="tabPaneClass" class="tab-pane fade" id="download" role="tabpanel">
    <div class="myaccount-content"><h3>下载</h3>
      <div class="myaccount-table table-responsive text-center">
        <table class="table table-bordered">
          <thead class="thead-light">
          <tr>
            <th>商品名称</th>
            <th>日期</th>
            <th>是否过期</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>橄榄油</td>
            <td>2022年1月1日</td>
            <td>是</td>
            <td><a href="#" class="ht-btn black-btn">下载</a></td>
          </tr>
          <tr>
            <td>电视机</td>
            <td>2023年9月1日</td>
            <td>永不</td>
            <td><a href="#" class="ht-btn black-btn">下载</a></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>