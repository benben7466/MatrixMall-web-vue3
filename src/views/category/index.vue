<script setup lang="ts">
import {onMounted, ref} from "vue";

import Breadcrumb from '@/views/common/breadcrumb.vue'

import DialogQuickView from "@/components/DialogQuickView.vue";
import DialogAddToCart from "@/components/DialogAddToCart.vue";
import DialogAddToWishList from "@/components/DialogAddToWishList.vue";
import $ from "jquery";

const selectProductId = ref(0);//选择的商品Id

onMounted(() => {

  // 右侧分类
  const $menuBtn = $('#offcanvas-menu2 li a');
  $menuBtn.on('click', function (e) {
    const $this = $(this);
    $this.closest("li").toggleClass("active");
    $this.closest("li").siblings().removeClass("active")
    $this.closest("li").siblings().children(".category-sub-menu").slideUp()
    $this.closest("li").siblings().children(".category-sub-menu").children("li").toggleClass("active")
    $this.closest("li").siblings().children(".category-sub-menu").children("li").removeClass("active")
    $this.parent().children(".category-sub-menu").slideToggle()
  });

});


</script>

<template>

  <Breadcrumb/>

  <div class="shop-product-tab section-pb">
    <div class="container">
      <div class="row mb-n7">
        <!--左侧-->
        <div class="col-lg-8 col-xl-9">

          <!--广告图-->
          <img class="mb-4" src="@/assets/picture/shop-banner.jpg" alt="banner">

          <!--显示样式，排序-->
          <div class="grid-nav-wraper bg-lighten2 mb-30">
            <div class="row align-items-center">
              <!--展示效果切换-->
              <div class="col-12 col-md-6 mb-3 mb-md-0">
                <nav class="shop-grid-nav">
                  <ul class="nav nav-tabs align-items-center" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <a class="nav-link" id="home-tab" data-bs-toggle="tab" href="#home" role="tab">
                        <i class="ion-grid"></i>
                      </a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a class="nav-link active" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab">
                        <i class="ion-android-menu"></i>
                      </a>
                    </li>
                    <li><span class="total-products text-capitalize">总共 16 件商品</span></li>
                  </ul>
                </nav>
              </div>
              <div class="col-12 col-md-6 position-relative">
                <div class="shop-grid-button d-flex align-items-center"><span
                    class="sort-by">排序:</span><span
                    class="chevron-arrow-down ion-android-arrow-dropdown"></span><select
                    class="form-select" aria-label="Default select example">
                  <option selected value="1">综合排序</option>
                  <option value="2">价格升序</option>
                  <option value="3">价格降序</option>
                  <option value="4">销量降序</option>
                  <option value="5">新品</option>
                </select></div>
              </div>
            </div>
          </div>

          <!--商品列表-->
          <div class="tab-content" id="myTabContent">
            <!--显示方式1-->
            <div class="tab-pane fade" id="home" role="tabpanel">
              <div class="row grid-view g-0 shop-grid-5">

                <template v-for="index in 8" :key="index">
                  <div class="col-xl-3 col-sm-6">
                    <div class="product-card">
                      <a class="thumb" href="#">
                        <img src="@/assets/picture/product1.jpg" alt="img">
                        <div class="onsales-badges"><span class="badge bg-dark">new</span></div>
                      </a>
                      <div class="product-content">
                        <a class="product-category" href="#">贲氏科技</a>
                        <h3 class="product-title">
                          <a href="#">网站建设开发与维护</a>
                        </h3>
                        <span class="price regular-price">￥99.9</span>
                        <button class="product-btn btn btn-warning btn-hover-primary" data-bs-toggle="modal"
                                data-bs-target="#add-to-cart">加入购物车
                        </button>
                      </div>
                      <ul class="actions">
                        <li class="action-item">
                          <button class="action quick-view" data-bs-toggle="modal" data-bs-target="#quickview">
                            <span class="lnr lnr-magnifier"></span>
                          </button>
                        </li>
                        <li class="action-item">
                          <button class="action wishlist" data-bs-toggle="modal" data-bs-target="#addtowishlist">
                            <span class="lnr lnr-heart"></span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </template>

              </div>
            </div>
            <!--显示方式2-->
            <div class="tab-pane fade show active" id="profile" role="tabpanel">
              <div class="row g-0 grid-view-list overflow-hidden">

                <template v-for="index in 8" :key="index">
                  <div class="col-12 mb-7">
                    <div class="border-bottom pb-7 pb-xl-0">
                      <div class="row mb-n7 align-items-center">
                        <div class="col-xl-3 mb-7">
                          <div class="product-card-list">
                            <a class="thumb" href="#">
                              <img src="@/assets/picture/product1.jpg" alt="img">
                              <div class="onsales-badges"><span class="badge bg-dark">new</span></div>
                            </a>
                          </div>
                        </div>
                        <div class="col-xl-6 mb-7">
                          <div class="product-content-list"><a class="product-category" href="#">贲氏科技</a>
                            <h3 class="product-title"><a href="#">网站建设开发与维护</a></h3>
                            <p>网站建设开发与维护 网站建设开发与维护网站建设开发与维护 网站建设开发与维护
                              网站建设开发与维护网站建设开发与维护 .. </p>
                          </div>
                        </div>
                        <div class="col-xl-3 mb-7">
                          <div class="product-content-list"><span class="price-list regular-price">￥99.90</span>
                            <button class="product-btn-list btn btn-warning btn-hover-primary" data-bs-toggle="modal" data-bs-target="#add-to-cart">加入购物车</button>
                          </div>
                          <ul class="actions-list">
                            <li class="action-item-list">
                              <button class="action quick-view" data-bs-toggle="modal" data-bs-target="#quickview">
                                <span class="lnr lnr-magnifier"></span>
                              </button>
                            </li>
                            <li class="action-item-list">
                              <button class="action wishlist" data-bs-toggle="modal" data-bs-target="#addtowishlist">
                                <span class="lnr lnr-heart"></span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>

              </div>
            </div>
          </div>

          <!--分页相关-->
          <div class="row g-0 align-items-center mt-md-5">
            <div class="col-12 col-sm-6 mb-8"><p class="Showing">总共 16 件商品</p></div>
            <div class="col-12 col-sm-6 mb-8">
              <nav aria-label="Page navigation">
                <ul class="pagination justify-content-sm-end">
                  <li class="page-item active"><a class="page-link" href="#"><span
                      class="ion-ios-arrow-left"></span></a></li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#"><span
                      class="ion-ios-arrow-right"></span></a></li>
                </ul>
              </nav>
            </div>
          </div>

        </div>

        <!--右侧-->
        <div class="col-lg-4 col-xl-3 mb-7">
          <div class="widgets">
            <div class="widget-card">
              <h3 class="title">
                <span>特色分类</span>
              </h3>
              <ul id="offcanvas-menu2" class="blog-ctry-menu">
                <li><a href="javascript:void(0)">新鲜水果</a>
                  <ul class="category-sub-menu">
                    <li><a href="#">应季水果</a></li>
                    <li><a href="#">热带水果</a></li>
                  </ul>
                </li>
                <li><a href="javascript:void(0)">安心蔬菜</a>
                  <ul class="category-sub-menu">
                    <li><a href="#">叶菜</a></li>
                    <li><a href="#">苗菜</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="widget-card">
              <h3 class="title">
                <span>商品分类</span>
              </h3>
              <div class="search-filter">
                <form action="javascript:;">
                  <div class="widget-inner">
                    <div class="widget-check-box">
                      <input type="checkbox" id="200"><label for="200">水果(12)</label>
                    </div>
                    <div class="widget-check-box">
                      <input type="checkbox" id="300"><label for="300">蔬菜(11)</label>
                    </div>
                  </div>
                  <h3 class="title"><span>规格</span></h3>
                  <div class="widget-inner">
                    <div class="widget-check-box">
                      <input type="checkbox" id="test9">
                      <label for="test9">600g<span>(2)</span></label>
                    </div>
                    <div class="widget-check-box">
                      <input type="checkbox" id="test10">
                      <label for="test10">800g<span>(2)</span></label>
                    </div>
                    <div class="widget-check-box">
                      <input type="checkbox" id="test11">
                      <label for="test11">1200g<span>(2)</span></label>
                    </div>
                    <div class="widget-check-box">
                      <input type="checkbox" id="test12">
                      <label for="test12">2000g<span>(2)</span></label>
                    </div>
                  </div>
                  <h3 class="title"><span>颜色</span></h3>
                  <div class="widget-inner">
                    <div class="widget-check-box color-white">
                      <input type="checkbox" id="20827">
                      <label for="20827">白色<span>(3)</span></label>
                    </div>
                    <div class="widget-check-box color-black">
                      <input type="checkbox" id="20828"><label
                        for="20828">黑色<span>(6)</span></label>
                    </div>
                  </div>
                  <h3 class="title"><span>品牌</span></h3>
                  <div class="widget-inner">
                    <div class="widget-check-box">
                      <input type="checkbox" id="300"><label for="300">蒙牛(11)</label>
                    </div>
                    <div class="widget-check-box">
                      <input type="checkbox" id="301"><label for="301">三元(5)</label>
                    </div>
                  </div>
                  <h3 class="title"><span>规格</span></h3>
                  <div class="widget-inner mb-0">
                    <div class="widget-check-box"><input type="checkbox" id="41"><label for="41">40x60cm(5)</label>
                    </div>
                    <div class="widget-check-box"><input type="checkbox" id="42"><label for="42">60x90cm(5)</label>
                    </div>
                    <div class="widget-check-box"><input type="checkbox" id="43"><label for="43">80x120cm(5) </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="banner hover-animation position-relative overflow-hidden mt-7">
            <a href="#" class="d-block"><img src="@/assets/picture/advertising.jpg" alt=""></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <DialogQuickView v-model="selectProductId"/>
  <DialogAddToWishList v-model="selectProductId"/>
  <DialogAddToCart v-model="selectProductId"/>
</template>

<style scoped>
</style>