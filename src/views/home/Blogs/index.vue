<script setup lang="ts">
import {onMounted, onUnmounted, ref} from "vue";

//Swiper
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation} from "swiper/modules";
import type {SwiperOptions} from "swiper/types";

const navigation = {prevEl: ".blog-carousel .swiper-button-prev", nextEl: ".blog-carousel .swiper-button-next"};
const modules = [Navigation];
const slidesPerView = ref(1);
const swiperOptions: SwiperOptions = {
  breakpoints: {
    0: {slidesPerView: 1,},
    480: {slidesPerView: 2,},
    657: {slidesPerView: 3},
    992: {slidesPerView: 3},
    1200: {slidesPerView: 4},
    1600: {slidesPerView: 6}
  }
};

</script>

<template>
  <section class="blog-section section-py bg-light">
    <div class="container">
      <div class="row g-0">
        <div class="col-12">
          <div class="title-section">
            <div class="row">
              <div class="col-12"><h3 class="title">最新咨询</h3></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="blog-carousel">
            <div class="d-none d-sm-block swiper-navination-arrows">
              <div class="swiper-button-prev"><span class="ion-android-arrow-back"></span></div>
              <div class="swiper-button-next"><span class="ion-android-arrow-forward"></span></div>
            </div>
            <swiper
                :slides-per-view="slidesPerView"
                :space-between="30"
                :navigation="navigation"
                :modules="modules"
                :breakpoints="swiperOptions.breakpoints"
            >
              <template v-for="index in 7" :key="index">
                <swiper-slide>
                  <div class="blog-card">
                    <div class="thumb">
                      <a href="#">
                        <img src="@/assets/picture/112.jpg" alt="img">
                      </a></div>
                    <div class="blog-content">
                      <h3 class="title">
                        <a href="#">安心餐具安心餐具安心餐具</a>
                      </h3>
                      <a href="#">
                        <span class="blog-meta">2024.01.01</span>
                      </a>
                    </div>
                  </div>
                </swiper-slide>
              </template>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>