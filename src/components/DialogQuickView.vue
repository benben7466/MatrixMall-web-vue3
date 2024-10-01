<script setup lang="ts">
import {onMounted, ref} from "vue";

import {Navigation, Thumbs} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/vue";
import type {SwiperOptions} from "swiper/types";

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
})

const productNum = ref(1);

function increment() {
  if (productNum.value >= 99) {
    productNum.value = 99;
    return false;
  }

  productNum.value++;
}

function decrement() {
  if (productNum.value <= 1) {
    productNum.value = 1;
    return false;
  }

  productNum.value--;
}

//Swiper
const navigation = {
  prevEl: ".swiper-navination-vertical .swiper-button-prev",
  nextEl: ".swiper-navination-vertical .swiper-button-next"
};
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};
const swiperOptions: SwiperOptions = {
  // 其他常规配置项
  breakpoints: {
    0: {
      direction: "horizontal", spaceBetween: 0,
    },
    768: {
      direction: "vertical", spaceBetween: 0,
    },
  }
};

</script>

<template>
  <div class="modal fade" id="quickview" tabindex="-1" aria-labelledby="quickview">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header border-bottom-0">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body my-6">
          <div class="row mb-n10">
            <div class="col-xl-6 col-lg-6 mb-10">
              <div class="product-detail_img vertical-slider_wrap">

                <!--轮播大图-->
                <swiper
                    :autoplay="false"
                    :loop="false"
                    :allowTouchMove="true"
                    :slidesPerView=1
                    :watchSlidesProgress="true"
                    :watchSlidesVisibility="true"
                    :setWrapperSize="true"
                    :waitForTransition="true"
                    :draggable="false"
                    :modules="[Thumbs,Navigation]"
                    :navigation="navigation"
                    :thumbs="{ swiper: thumbsSwiper }"
                    class="pd-vertical_slider lightgallery"
                >
                  <template v-for="index in 3" :key="index">
                    <swiper-slide>
                      <div class="single-img">
                        <img src="@/assets/picture/product2.jpg" alt="Product Image">
                      </div>
                    </swiper-slide>
                  </template>
                </swiper>
                <!--轮播小图-->
                <div class="vertical-slider_nav">
                  <div class="swiper-navination-vertical d-none d-md-inline-block">
                    <div class="swiper-button-prev"><span class="lnr lnr-chevron-up"></span></div>
                    <div class="swiper-button-next"><span class="lnr lnr-chevron-down"></span></div>
                  </div>
                  <swiper
                      :loop="false"
                      :allowTouchMove="true"
                      :slidesPerView=3
                      :draggable="false"
                      :watchOverflow="true"
                      :watchSlidesVisibility="true"
                      :watchSlidesProgress="true"
                      :breakpoints="swiperOptions.breakpoints"
                      @swiper="setThumbsSwiper"
                      :modules="[Thumbs]"
                      class="swiper-wrapper"
                  >
                    <template v-for="index in 3" :key="index">
                      <swiper-slide>
                        <a href="javascript:;"><img src="@/assets/picture/23.jpg" alt=""/></a>
                      </swiper-slide>
                    </template>
                  </swiper>
                </div>

              </div>
            </div>
            <div class="col-lg-6 mb-10">
              <div class="content">
                <h3 class="title">电饭锅</h3>
                <h3 class="title-s">编号：{{ modelValue }}</h3>
                <span class="price-lg regular-price mb-4 d-block">售价：￥99.90</span>
                <p>构建先进，开源，稳定，人工智能为主导的软件服务平台。</p>
                <p>构建先进，开源，稳定，人工智能为主导的软件服务平台。</p>
                <p>构建先进，开源，稳定，人工智能为主导的软件服务平台。</p>
                <div class="product-count style d-flex my-5">
                  <div class="count d-flex">
                    <input type="number" min="1" max="99" step="1" value="1" v-model="productNum">
                    <div class="button-group">
                      <button class="count-btn increment" @click="increment">
                        <span class="lnr lnr-chevron-up"></span>
                      </button>
                      <button class="count-btn decrement" @click="decrement">
                        <span class="lnr lnr-chevron-down"></span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <button class="btn btn-warning btn-hover-primary text-uppercase">加入购物车</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary btn-hover-warning text-uppercase">加入心愿单</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>