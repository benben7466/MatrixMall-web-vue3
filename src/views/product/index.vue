<script setup lang="ts">
import {ref} from "vue";
import Breadcrumb from "@/views/common/breadcrumb.vue";

import {Navigation, Thumbs} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/vue";
import type {SwiperOptions} from "swiper/types";
import DialogAddToWishList from "@/components/DialogAddToWishList.vue";
import DialogAddToCart from "@/components/DialogAddToCart.vue";
import DialogQuickView from "@/components/DialogQuickView.vue";

const selectProductId = ref(0);//选择的商品Id

//Swiper-商品主图
const navigation = {
  prevEl: ".swiper-navination-vertical2 .swiper-button-prev",
  nextEl: ".swiper-navination-vertical2 .swiper-button-next"
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

//Swiper-相关推荐
const navigationRelated = {
  prevEl: ".product-carousel6 .swiper-button-prev",
  nextEl: ".product-carousel6 .swiper-button-next"
};
const modulesRelated = [Navigation];
const swiperOptionsRelated: SwiperOptions = {
  breakpoints: {
    0: {slidesPerView: 1,},
    480: {slidesPerView: 2,},
    657: {slidesPerView: 3},
    992: {slidesPerView: 4},
    1200: {slidesPerView: 5},
  }
};

</script>

<template>

  <Breadcrumb/>

  <!--基本信息-->
  <div class="single-product-wrap">
    <div class="container wrapper">
      <div class="row mb-n10">

        <!--轮播图-->
        <div class="col-lg-5 mb-10">
          <div class="product-detail_img vertical-slider_wrap2">

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
                class="pd-vertical_slider2 lightgallery"
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
            <div class="vertical-slider_nav2">
              <div class="swiper-navination-vertical2 d-none d-md-inline-block">
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

        <!--商品基本信息-->
        <div class="col-lg-7 mb-10">
          <div class="content"><h3 class="title">豆浆机</h3>
            <p class="reference">品牌:贲氏科技</p>
            <a href="#" class="open-comment-form">写评论</a>
            <div class="mb-4">
              <span class="old-price text-decoration-line-through">￥59.90</span>
              <span class="price-lg regular-price d-inline-block mx-1">￥49.90</span>
              <span class="badge bg-success">优惠10%</span></div>
            <p class="border-bottom pb-4">网站建设网站建设 网站建设网站建设 网站建设网站建设 网站建设网站建设 网站建设网站建设
              网站建设网站建设 网站建设网站建设
              .. </p>
            <div class="d-flex flex-wrap my-5">
              <div class="me-4">
                <h4 class="modal-quantity">尺寸</h4>
                <div class="product-option d-flex align-items-center">
                  <span class="chevron-arrow-down ion-android-arrow-dropdown"></span>
                  <select class="form-select" aria-label="Default select example">
                    <option selected value="1">小</option>
                    <option value="2">中</option>
                    <option value="3">大</option>
                    <option value="4">超大</option>
                  </select>
                </div>
              </div>
              <div><h4 class="modal-quantity">颜色</h4>
                <div class="widget-inner d-flex flex-wrap">
                  <div class="widget-check-box color-white"><input type="checkbox" id="20827"><label
                      for="20827"></label></div>
                  <div class="widget-check-box color-black"><input type="checkbox" id="20828"><label
                      for="20828"></label></div>
                </div>
              </div>
            </div>
            <button data-bs-toggle="modal" data-bs-target="#add-to-cart"
                    class="btn btn-warning btn-hover-primary text-uppercase">加入购物车
            </button>
            <div class="mt-5">
              <a href="#">加入心愿单</a>
              <router-link to="/my-account/wishlist" class="mx-2">我的心愿单</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--描述，商品详情，评论-->
  <div class="section-py">
    <div class="container wrapper">
      <div class="row">
        <div class="col-12">
          <ul class="nav nav-tabs single-product-tab justify-content-center" id="myTab" role="tablist">
            <li class="nav-item" role="presentation"><a class="nav-link active" data-bs-toggle="tab" href="#description"
                                                        role="tab">描述</a></li>
            <li class="nav-item" role="presentation"><a class="nav-link" data-bs-toggle="tab" href="#productdetails"
                                                        role="tab">商品详情</a></li>
            <li class="nav-item" role="presentation"><a class="nav-link" data-bs-toggle="tab" href="#reviews"
                                                        role="tab">评论</a></li>
          </ul>
        </div>
      </div>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="description" role="tabpanel">
          <div class="row">
            <div class="col-12">
              <div class="single-product-desc">
                <p>网站建设网站建设网站建设 网站建设网站建设网站建设 网站建设网站建设网站建设 网站建设网站建设网站建设
                  网站建设网站建设网站建设 网站建设网站建设网站建设
                  网站建设网站建设网站建设 网站建设网站建设网站建设 网站建设网站建设网站建设 网站建设网站建设网站建设
                  网站建设网站建设网站建设 网站建设网站建设网站建设</p>
                <p>网站建设网站建设网站建设 网站建设网站建设网站建设 网站建设网站建设网站建设 网站建设网站建设网站建设
                  网站建设网站建设网站建设 网站建设网站建设网站建设
                  网站建设网站建设网站建设 网站建设网站建设网站建设 网站建设网站建设网站建设 网站建设网站建设网站建设
                  网站建设网站建设网站建设 网站建设网站建设网站建设</p>
                <p>网站建设网站建设网站建设 网站建设网站建设网站建设 网站建设网站建设网站建设 网站建设网站建设网站建设
                  网站建设网站建设网站建设 网站建设网站建设网站建设
                  网站建设网站建设网站建设 网站建设网站建设网站建设 网站建设网站建设网站建设 网站建设网站建设网站建设
                  网站建设网站建设网站建设 网站建设网站建设网站建设</p>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="productdetails" role="tabpanel">
          <div class="row">
            <div class="col-12">
              <div class="single-product-desc">
                <div class="product-anotherinfo-wrapper">
                  <ul>
                    <li><span>重量</span>400 g</li>
                    <li><span>规格</span>10 x 10 x 15 cm</li>
                    <li><span>产地</span>贲氏科技</li>
                    <li><span>其他</span>无</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="reviews" role="tabpanel">
          <div class="single-product-desc">
            <div class="row">
              <div class="col-lg-7">
                <div class="review-wrapper">
                  <div class="single-review">
                    <div class="review-img"><img src="@/assets/picture/11.png" alt=""></div>
                    <div class="review-content">
                      <div class="review-top-wrap">
                        <div class="review-left">
                          <div class="review-name"><h4>张先生</h4></div>
                          <div class="rating-product">
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                          </div>
                        </div>
                        <div class="review-left">
                          <button class="btn btn-sm btn-secondary btn-hover-primary">回复</button>
                        </div>
                      </div>
                      <div class="review-bottom"><p>
                        网站建设网站建设网站建设网站建设,网站建设网站建设网站建设,网站建设网站建设网站建设</p></div>
                    </div>
                  </div>
                  <div class="single-review child-review">
                    <div class="review-img"><img src="@/assets/picture/21.png" alt=""></div>
                    <div class="review-content">
                      <div class="review-top-wrap">
                        <div class="review-left">
                          <div class="review-name"><h4>李女士</h4></div>
                          <div class="rating-product">
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                            <i class="ion-android-star"></i>
                          </div>
                        </div>
                        <div class="review-left">
                          <button class="btn btn-sm btn-secondary btn-hover-primary">回复</button>
                        </div>
                      </div>
                      <div class="review-bottom"><p>
                        网站建设网站建设网站建设网站建设,网站建设网站建设网站建设,网站建设网站建设网站建设</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 ratting-container">
                <div class="ratting-form-wrapper">
                  <h3>新增回复</h3>
                  <div class="ratting-form">
                    <form action="javascript:;">
                      <div class="star-box"><span>评分:</span>
                        <div class="rating-product">
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                          <i class="ion-android-star"></i>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="rating-form-style mb-10"><input placeholder="用户名" type="text"></div>
                        </div>
                        <div class="col-md-6">
                          <div class="rating-form-style mb-10"><input placeholder="邮箱" type="email"></div>
                        </div>
                        <div class="col-md-12">
                          <div class="rating-form-style form-submit">
                            <textarea name="Your Review" placeholder="内容"></textarea>
                            <button type="submit" class="btn btn-warning btn-hover-primary">提交</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--相关商品-->
  <section class="section section-pb">
    <div class="container wrapper">
      <div class="row">
        <div class="col-12">
          <div class="title-section"><h3 class="title">商品推荐</h3></div>
        </div>
        <div class="col-12">
          <div class="product-carousel6">
            <div class="d-none d-sm-block swiper-navination-arrows">
              <div class="swiper-button-prev"><span class="ion-android-arrow-back"></span></div>
              <div class="swiper-button-next"><span class="ion-android-arrow-forward"></span></div>
            </div>
            <swiper
                :space-between="30"
                :navigation="navigationRelated"
                :modules="modulesRelated"
                :breakpoints="swiperOptionsRelated.breakpoints"
            >
              <template v-for="index in 7" :key="index">
                <swiper-slide>
                  <div class="product-card">
                    <a class="thumb" href="#">
                      <img src="@/assets/picture/product1.jpg" alt="img">
                      <div class="onsales-badges"><span class="badge bg-dark">new</span></div>
                    </a>
                    <div class="product-content"><a class="product-category" href="#?">贲氏科技</a>
                      <h3 class="product-title"><a href="#">网站建设</a>
                      </h3><span class="price regular-price">￥59.90</span>
                      <button class="product-btn btn btn-warning btn-hover-primary" data-bs-toggle="modal" data-bs-target="#add-to-cart" @click="selectProductId = item.id">加入购物车</button>
                    </div>
                    <ul class="actions">
                      <li class="action-item">
                        <button class="action quick-view" data-bs-toggle="modal" data-bs-target="#quickview" @click="selectProductId = item.id"><span class="lnr lnr-magnifier"></span></button>
                      </li>
                      <li class="action-item">
                        <button class="action wishlist" data-bs-toggle="modal" data-bs-target="#addtowishlist"><span class="lnr lnr-heart"></span></button>
                      </li>
                    </ul>
                  </div>
                </swiper-slide>
              </template>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </section>

  <DialogQuickView v-model="selectProductId"/>
  <DialogAddToWishList v-model="selectProductId"/>
  <DialogAddToCart v-model="selectProductId"/>
</template>

<style scoped>

</style>