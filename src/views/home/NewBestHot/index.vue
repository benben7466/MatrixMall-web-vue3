<script setup lang="ts">
import {onMounted, onUnmounted, reactive, ref} from "vue";

//Swiper
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation} from "swiper/modules";

const navigation = {prevEl: ".product-carousel2 .swiper-button-prev", nextEl: ".product-carousel2 .swiper-button-next"};
const modules = [Navigation];
const slidesPerView = ref(1);

const items = reactive([
  {id: 1, name: 'newproduct', title: '新品', class: 'tab-pane fade show active', product_name_lg: 'product-lg1.jpg', product_name: 'product1.jpg'},
  {id: 2, name: 'bestseller', title: '最佳', class: 'tab-pane fade', product_name_lg: 'product-lg2.jpg', product_name: 'product2.jpg'},
  {id: 3, name: 'hotproduct', title: '热卖', class: 'tab-pane fade', product_name_lg: 'product-lg1.jpg', product_name: 'product1.jpg'}
]);

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
})

function setSelectProductId(productId: number) {
  emit("update:modelValue", productId);
}

onMounted(() => {
  window.addEventListener('resize', handleResize);//调整浏览器事件
  handleResize();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);//调整浏览器事件

});

function handleResize() {
  const width = window.innerWidth;

  if (width >= 480 && width < 657) {
    slidesPerView.value = 2;
  } else if (width >= 657 && width < 992) {
    slidesPerView.value = 3;
  } else if (width >= 992 && width < 1200) {
    slidesPerView.value = 3;
  } else if (width >= 1200 && width < 1600) {
    slidesPerView.value = 4;
  } else if (width >= 1600) {
    slidesPerView.value = 5;
  }

}

</script>

<template>
  <section class="section-pt">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title-section">
            <ul class="nav nav-pills product-tab-links2">
              <template v-for="item in items" :key="item.id">
                <li class="nav-item">
                  <template v-if="item.id == 1">
                    <a class="nav-link active" data-bs-toggle="pill" :href="'#'+item.name">{{ item.title }}</a>
                  </template>
                  <template v-else>
                    <a class="nav-link" data-bs-toggle="pill" :href="'#'+item.name">{{ item.title }}</a>
                  </template>
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
      <div class="tab-content">
        <template v-for="item in items" :key="item.id">
          <div :class="item.class" :id="item.name">
            <div class="row mb-n7">

              <!--主品-->
              <div class="col-lg-5 col-xl-4 mb-7">
                <div class="product-card-large">
                  <a class="thumb" href="#">
                    <img class="d-block mx-auto" :src="'/src/assets/picture/'+item.product_name_lg" alt="img">
                  </a>
                  <div class="product-content">
                    <a class="product-category" href="#">贲氏科技</a>
                    <h3 class="product-title">
                      <a href="#">网站建设与维护</a>
                    </h3>
                    <span class="price-lg onsale-price d-block mb-7">$99.99</span>
                    <button class="product-btn-lg btn btn-warning btn-hover-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#add-to-cart"
                            @click="setSelectProductId(item.id)"
                    >加入购物车
                    </button>
                  </div>
                  <ul class="actions">
                    <li class="action-item">
                      <button class="action quick-view"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview"
                              @click="setSelectProductId(item.id)"
                      >
                        <span class="lnr lnr-magnifier"></span>
                      </button>
                    </li>
                    <li class="action-item">
                      <button class="action wishlist"
                              data-bs-toggle="modal"
                              data-bs-target="#addtowishlist"
                      >
                        <span class="lnr lnr-heart"></span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <!--商品列表-->
              <div class="col-lg-7 col-xl-8 mb-7 order-first order-lg-last">
                <div class="product-carousel2">
                  <div class="d-none d-sm-block swiper-navination-arrows">
                    <div class="swiper-button-prev"><span class="ion-android-arrow-back"></span></div>
                    <div class="swiper-button-next"><span class="ion-android-arrow-forward"></span>
                    </div>
                  </div>

                  <swiper
                      :slides-per-view="slidesPerView"
                      :navigation="navigation"
                      :modules="modules"
                  >
                      <template v-for="index in 6" :key="index">
                        <swiper-slide>
                          <div class="product-list">

                            <template v-for="index in 2" :key="index">
                              <div class="product-card">
                                <a class="thumb" href="#">
                                  <img :src="'/src/assets/picture/'+item.product_name" alt="img">
                                  <div class="onsales-badges"><span class="badge bg-dark">new</span></div>
                                </a>
                                <div class="product-content">
                                  <a class="product-category" href="#">贲氏科技</a>
                                  <h3 class="product-title">
                                    <a href="#">网站建设</a>
                                  </h3>
                                  <span class="price regular-price">￥9.99</span>
                                  <button
                                      class="product-btn btn btn-warning btn-hover-primary"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add-to-cart"
                                      @click="setSelectProductId(item.id)"
                                  >加入购物车
                                  </button>
                                </div>
                                <ul class="actions">
                                  <li class="action-item">
                                    <button class="action quick-view"
                                            data-bs-toggle="modal"
                                            data-bs-target="#quickview"
                                            @click="setSelectProductId(item.id)"
                                    >
                                      <span class="lnr lnr-magnifier"></span>
                                    </button>
                                  </li>
                                  <li class="action-item">
                                    <button class="action wishlist"
                                            data-bs-toggle="modal"
                                            data-bs-target="#addtowishlist"
                                    >
                                      <span class="lnr lnr-heart"></span></button>
                                  </li>
                                </ul>
                              </div>
                            </template>

                          </div>
                        </swiper-slide>
                      </template>
                  </swiper>
                </div>
              </div>

            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>