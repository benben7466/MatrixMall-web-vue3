<script setup lang="ts">
import {onMounted, onUnmounted, ref} from "vue";

//Swiper
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, Navigation, Pagination} from "swiper/modules";

const slidesPerView = ref(1);
const autoplay = {delay: 3000, pauseOnMouseEnter: true};
const modules = [Pagination, Navigation, Autoplay];

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
    slidesPerView.value = 5;
  } else if (width >= 1200 && width < 1600) {
    slidesPerView.value = 6;
  } else if (width >= 1600) {
    slidesPerView.value = 7;
  }

}

</script>

<template>
  <div class="brand-section section-py">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="brand-carousel">
            <swiper
                :loop=true
                :slides-per-view="slidesPerView"
                :autoplay="autoplay"
                :modules="modules"
            >
              <template v-for="index in 8" :key="index">
                <swiper-slide>
                  <div class="single-brand"><a class="thumb" href="#">
                    <img src="@/assets/picture/111.jpg" alt="brand logo"></a>
                  </div>
                </swiper-slide>
              </template>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>