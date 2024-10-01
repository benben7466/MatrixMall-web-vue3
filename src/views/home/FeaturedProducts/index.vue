<script setup lang="ts">
import {onMounted, onUnmounted, reactive, ref} from "vue";

//Swiper
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation} from "swiper/modules";

const navigation = {prevEl: ".product-carousel1 .swiper-button-prev", nextEl: ".product-carousel1 .swiper-button-next"};
const modules = [Navigation];
const slidesPerView = ref(1);

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(["update:modelValue"]);

const items = reactive([
  {id: 1, name: 'baking', title: '水果系列', class: 'tab-pane fade show active', product_name: 'product1.jpg'},
  {id: 2, name: 'chocolate', title: '蔬菜系列', class: 'tab-pane fade', product_name: 'product2.jpg'},
  {id: 3, name: 'chopping', title: '生鲜系列', class: 'tab-pane fade', product_name: 'product3.jpg'}
]);

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
    slidesPerView.value = 4;
  } else if (width >= 1200 && width < 1600) {
    slidesPerView.value = 5;
  } else if (width >= 1600) {
    slidesPerView.value = 7;
  }

}

</script>

<template>
  <section class="section">
    <div class="container">
      <div class="row g-0">
        <div class="col-12">
          <div class="title-section text-center text-lg-start">
            <div class="row">
              <div class="col-12 col-lg-4">
                <h3 class="title">特色商品</h3>
              </div>
              <div class="col-12 col-lg-8">
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
        <div class="col-12">
          <div class="tab-content">
            <template v-for="item in items" :key="item.id">
              <div :class="item.class" :id="item.name">
                <div class="product-carousel1">
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
                    <template v-for="index in 10" :key="index">
                      <swiper-slide>
                          <div class="product-card">
                            <a class="thumb" href="#">
                              <img :src="'/src/assets/picture/'+item.product_name" alt="img">
                              <div class="onsales-badges"><span class="badge bg-dark">新品</span></div>
                            </a>
                            <div class="product-content">
                              <a class="product-category" href="#?">贲氏科技</a>
                              <h3 class="product-title">
                                <a href="single-product.html">网站建设与维护</a>
                              </h3>
                              <span class="price regular-price">￥99.99</span>
                              <button class="product-btn btn btn-warning btn-hover-primary"
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
                      </swiper-slide>
                    </template>
                  </swiper>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>