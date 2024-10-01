<script setup lang="ts">
import router from "@/router";

const tabPaneClass = ref();

onMounted(() => {
  if (router.currentRoute.value.path === '/my-account/orders') {
    tabPaneClass.value.classList.add('active');
    tabPaneClass.value.classList.add('show')
  }else{
    tabPaneClass.value.classList.remove('active');
    tabPaneClass.value.classList.remove('show')
  }

});
</script>

<template>
  <div ref="tabPaneClass" class="tab-pane fade" id="orders" role="tabpanel">
    <div class="myaccount-content"><h3>订单列表</h3>
      <div class="myaccount-table table-responsive text-center">
        <table class="table table-bordered">
          <thead class="thead-light">
          <tr>
            <th>订单号</th>
            <th>商品名称</th>
            <th>日期</th>
            <th>状态</th>
            <th>总价</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>橄榄油</td>
            <td>2022年9月1日</td>
            <td>配货中</td>
            <td>￥20.99</td>
            <td><a href="javascript:;" class="ht-btn black-btn">查看详情</a></td>
          </tr>
          <tr>
            <td>2</td>
            <td>海尔洗衣机</td>
            <td>2023年3月1日</td>
            <td>配货中</td>
            <td>￥59.90</td>
            <td><a href="javascript:;" class="ht-btn black-btn">查看详情</a></td>
          </tr>
          <tr>
            <td>3</td>
            <td>PS5游戏机</td>
            <td>2024年1月1日</td>
            <td>已完成</td>
            <td>￥2990.00</td>
            <td><a href="javascript:;" class="ht-btn black-btn">查看详情</a></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>