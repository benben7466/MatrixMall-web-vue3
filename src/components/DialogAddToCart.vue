<script setup lang="ts">
import {useRouter} from "vue-router";

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
})

const router = useRouter()
const jumpTo = (path: string) => {
  router.push(path)
}

</script>

<template>
  <div class="modal fade" id="add-to-cart" tabindex="-1" aria-labelledby="add-to-cart">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-warning border-bottom-0 justify-content-center">
          <span class="ion-android-done me-5"></span>
          <h4 class="modal-title text-center">商品成功加入购物车</h4>
          <button type="button" class="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close">×</button>
        </div>
        <div class="modal-body p-5">
          <div class="row">
            <div class="col-lg-5">
              <div class="row">
                <div class="col-md-6">
                  <img class="product-image" src="@/assets/picture/product4.jpg" alt="img"></div>
                <div class="col-md-6">
                  <h6 class="product-name">电饭锅</h6>
                  <ul class="quntity-list">
                    <li>编号：{{modelValue}}</li>
                    <li>价格：￥9.90元</li>
                    <li>库存：2</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="cart-content">
                <p class="title">您的购物车有 3 件商品.</p>
                <p><span>商品总价：</span>￥218.70元</p>
                <p><span>优惠金额：</span>￥2.00元</p>
                <p><span>运费金额：</span>￥0.00元</p>
                <p><span>支付总价：</span>￥218.70元</p>
                <div class="cart-content-btn">
                  <button class="btn btn-dark btn-hover-warning text-uppercase me-1" data-bs-dismiss="modal" aria-label="Close">继续购物</button>
                  <button @click="jumpTo('/checkout')" data-bs-dismiss="modal" class="btn btn-primary btn-hover-warning text-uppercase mt-3 mt-sm-0">去&nbsp;&nbsp;结&nbsp;&nbsp;算</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>