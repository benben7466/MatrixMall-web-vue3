<script setup lang="ts">
import {ref} from "vue";

const items = ref([
  {productName: "水壶水壶水壶水壶", quantity: 1, statusLabel: "正常"},
  {productName: "水壶水壶水壶水壶", quantity: 1, statusLabel: "正常"},
]);

const incrementQuantity = (index: number) => {
  if (items.value[index].quantity < 100) {
    items.value[index].quantity++;
  }
};

const decrementQuantity = (index: number) => {
  if (items.value[index].quantity > 1) {
    items.value[index].quantity--;
  }
};

const showDeleteConfirmation = (index: number) => {
  ElMessageBox.confirm('确定要删除吗？', '确认删除', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
      .then(() => {
        // 用户点击确定后的操作
        console.log('用户点击了确定，执行删除操作');
      })
      .catch(() => {
        // 用户点击取消后的操作
        console.log('用户点击了取消');
      });
};
</script>

<template>
  <!--导航区-->
  <nav class="breadcrumb-section section-py bg-light2">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3 class="bread-crumb-title">购物车</h3>
        </div>
      </div>
    </div>
  </nav>

  <!--商品列表-->
  <section class="whish-list-section section-py">
    <div class="container">
      <div class="row">
        <div class="col-12"><h3 class="title mb-5 pb-3 text-capitalize">购物车清单</h3>
          <div class="table-responsive">
            <table class="table">
              <thead class="thead-light">
              <tr>
                <th class="text-center" scope="col">商品图片</th>
                <th class="text-center" scope="col">商品名称</th>
                <th class="text-center" scope="col">库存状态</th>
                <th class="text-center" scope="col">购买数量</th>
                <th class="text-center" scope="col">价格</th>
                <th class="text-center" scope="col">操作</th>
                <th class="text-center" scope="col"></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) in items" :key="index">
                <th class="text-center" scope="row"><img src="@/assets/picture/product2.jpg" alt="img"></th>
                <td class="text-center"><span class="whish-title">{{ item.productName }}</span></td>
                <td class="text-center"><span class="badge bg-success">{{ item.statusLabel }}</span></td>
                <td class="text-center">
                  <div class="product-count style">
                    <div class="count d-flex justify-content-center">
                      <input type="number" min="1" max="100" step="1" value="1" v-model="item.quantity">
                      <div class="button-group">
                        <button class="count-btn increment" @click="incrementQuantity(index)"><i class="lnr lnr-chevron-up"></i></button>
                        <button class="count-btn decrement" @click="decrementQuantity(index)"><i class="lnr lnr-chevron-down"></i></button>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="text-center"><span class="whish-list-price">￥9.99 </span></td>
                <td class="text-center"><a href="javascript:;" @click="showDeleteConfirmation(index)"><span class="trash"><i
                    class="ion-android-delete"></i></span></a></td>
                <td class="text-center"><a href="#" class="btn btn-warning btn-hover-primary text-capitalize">加入心愿单</a></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--结算金额-->
  <div class="check-out-section section-pb">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 mt-4 mt-lg-0">
          <div class="your-order-area">
            <div class="your-order-wrap gray-bg-4">
              <div class="your-order-product-info">
                <div class="your-order-top">
                  <ul>
                    <li>商品总价</li>
                    <li>￥199</li>
                  </ul>
                </div>
                <div class="your-order-bottom">
                  <ul>
                    <li class="your-order-shipping">配送</li>
                    <li>免费</li>
                  </ul>
                </div>
                <div class="your-order-total mb-0">
                  <ul>
                    <li class="order-total">支付金额</li>
                    <li>￥199</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="Place-order mt-5" style="float: right;margin-right: 25px;">
              <router-link to="/checkout" class="btn btn-success btn-hover-primary text-capitalize my-2 my-sm-0">去结算</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>