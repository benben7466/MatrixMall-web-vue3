<script setup lang="ts">
import {onMounted, ref} from "vue";

import CategoryAndBanner from '@/views/home/CategoryAndBanner/index.vue'
import FeaturedProducts from '@/views/home/FeaturedProducts/index.vue'
import NewBestHot from '@/views/home/NewBestHot/index.vue'

import FloorA from '@/views/home/FloorA/index.vue'
import FloorB from '@/views/home/FloorB/index.vue'
import Brand from '@/views/home/Brand/index.vue'
import Blogs from '@/views/home/Blogs/index.vue'

import DialogQuickView from "@/components/DialogQuickView.vue";
import DialogAddToCart from "@/components/DialogAddToCart.vue";
import DialogAddToWishList from "@/components/DialogAddToWishList.vue";

const selectProductId = ref(0);//选择的商品Id

</script>

<template>
  <CategoryAndBanner/>
  <FeaturedProducts v-model="selectProductId"/>

  <!--广告位-->
  <div class="banner-section section-pt">
    <div class="container">
      <div class="row mb-n7">
        <div class="col-md-4 mb-7">
          <a class="zoom-in text-center" href="#">
            <img src="@/assets/picture/17.jpg" alt="img">
          </a>
        </div>
        <div class="col-md-4 mb-7">
          <a class="zoom-in text-center" href="#">
            <img src="@/assets/picture/21.jpg" alt="img">
          </a>
        </div>
        <div class="col-md-4 mb-7">
          <a class="zoom-in text-center" href="#">
            <img src="@/assets/picture/3.jpg" alt="img"></a>
        </div>
      </div>
    </div>
  </div>

  <NewBestHot v-model="selectProductId"/>

  <!--广告位-->
  <div class="banner-section section-pt">
    <div class="container">
      <div class="row mb-n7">
        <div class="col-md-4 mb-7">
          <a class="zoom-in text-center" href="#">
            <img src="@/assets/picture/6.jpg" alt="img">
          </a>
        </div>
        <div class="col-md-4 mb-7">
          <a class="zoom-in text-center" href="#">
            <img src="@/assets/picture/7.jpg" alt="img">
          </a>
        </div>
        <div class="col-md-4 mb-7">
          <a class="zoom-in text-center" href="#">
            <img src="@/assets/picture/8.jpg" alt="img">
          </a>
        </div>
      </div>
    </div>
  </div>

  <FloorA v-model="selectProductId"/>
  <FloorB v-model="selectProductId"/>

  <!--品牌-->
  <Brand/>

  <!--最新咨询-->
  <Blogs/>

  <DialogQuickView v-model="selectProductId"/>
  <DialogAddToWishList v-model="selectProductId"/>
  <DialogAddToCart v-model="selectProductId"/>
</template>

<style scoped>
</style>