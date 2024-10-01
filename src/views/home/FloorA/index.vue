<script setup lang="ts">
import {onMounted, onUnmounted, reactive, ref} from "vue";

//Swiper
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation} from "swiper/modules";
import type {SwiperOptions} from "swiper/types";

const navigation = {prevEl: ".product-list-carousel .swiper-button-prev", nextEl: ".product-list-carousel .swiper-button-next"};
const modules = [Navigation];
const slidesPerView = ref(1);
const swiperOptions: SwiperOptions = {
  breakpoints: {
    0: {slidesPerView: 1,},
    480: {slidesPerView: 2,},
    657: {slidesPerView: 2},
    992: {slidesPerView: 2},
    1200: {slidesPerView: 3},
    1600: {slidesPerView: 4}
  }
};

const items = reactive([
  {id: 1, name: 'pots', title: '容器', class: 'tab-pane fade show active', product_name_lg: '9.jpg', product_name: '61.jpg'},
  {id: 2, name: 'pans', title: '平底锅', class: 'tab-pane fade', product_name_lg: '9.jpg', product_name: '81.jpg'},
  {id: 3, name: 'living', title: '生活', class: 'tab-pane fade', product_name_lg: '9.jpg', product_name: '23.jpg'}
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
</script>

<template>
  <section class="section-pt">
    <div class="container">
      <div class="row g-0">
        <div class="col-12">
          <div class="title-section text-center text-lg-start">
            <div class="row">
              <div class="col-12 col-lg-4">
                <h3 class="title">楼层A</h3>
              </div>
              <div class="col-12 col-lg-6 custom-col1">
                <ul class="nav nav-pills product-tab-links mt-8 mt-lg-0 justify-content-md-center">

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
        </div>
      </div>
      <div class="tab-content">
        <template v-for="item in items" :key="item.id">
          <div :class="item.class" :id="item.name">

            <div class="row mb-n7">

              <!--主图-->
              <div class="order-last order-lg-first col-lg-4 col-xl-3 custom-col-20 mb-7">
                <a class="zoom-in text-center" href="#">
                  <img :src="'/src/assets/picture/'+item.product_name_lg" alt="img">
                </a>
              </div>

              <!--商品列表-->
              <div class="col-lg-8 col-xl-9 custom-col-80 mb-7">
                <div class="product-list-carousel">
                  <div class="d-none d-sm-block swiper-navination-arrows">
                    <div class="swiper-button-prev"><span class="ion-android-arrow-back"></span></div>
                    <div class="swiper-button-next"><span class="ion-android-arrow-forward"></span>
                    </div>
                  </div>
                  <swiper
                      :slides-per-view="slidesPerView"
                      :navigation="navigation"
                      :modules="modules"
                      :breakpoints="swiperOptions.breakpoints"
                  >
                    <template v-for="index in 5" :key="index">
                      <swiper-slide>
                        <template v-for="index in 2" :key="index">
                          <div class="media-list mb-4">
                            <div class="media">
                              <a class="thumb" href="#"><img :src="'/src/assets/picture/'+item.product_name" alt="img"></a>
                              <div class="media-body">
                                <a class="product-category" href="#">贲氏科技</a>
                                <h3 class="product-title">
                                  <a href="#">网站建设</a>
                                </h3>
                                <span class="price-lg regular-price">￥66.66</span>
                              </div>
                            </div>
                          </div>
                        </template>
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