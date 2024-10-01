<script setup lang="ts">
import $ from 'jquery';
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

//Swiper
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Pagination, Navigation, Autoplay} from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const pagination = {clickable: true, el: ".hero-slider .swiper-pagination"};
const navigation = {prevEl: ".hero-slider .swiper-button-prev", nextEl: ".hero-slider .swiper-button-next"};
const autoplay = {delay: 3000, pauseOnMouseEnter: true};
const modules = [Pagination, Navigation, Autoplay];

onMounted(() => {

  // 浏览分类
  const $menuBtn = $('.menu-btn');
  const $vmenuContent = $('.vmenu-content');
  $menuBtn.on('click', function (e) {
    $vmenuContent.slideToggle(500);
  });
  $vmenuContent.each(function () {
    const $this = $(this);
    const $menuItemsMoreThanSeven = $this.find('.menu-item:gt(7)');
    const isExpanded = $this.hasClass('expanded');
    $menuItemsMoreThanSeven[isExpanded ? 'show' : 'hide']();
    if ($menuItemsMoreThanSeven.length > 0) {
      $this.append('<li class="expand">' + (isExpanded ? '<a href="javascript:void(0);"><span><i class="ion-android-remove"></i>收起分类</span></a>' : '<a href="javascript:void(0);"><span><i class="ion-android-add"></i>更多分类</span></a>') + '</li>');
      $this.find('.expand').on('click', function (e) {
        e.preventDefault();
        const newHtml = $this.hasClass('expanded') ? '<a href="javascript:void(0);"><span><i class="ion-android-add"></i>更多分类</span></a>' : '<a href="javascript:void(0);"><span><i class="ion-android-remove"></i>收起分类</span></a>';
        $(this).html(newHtml);
        $this.toggleClass('expanded');
        $menuItemsMoreThanSeven.toggle(300);
      });
    }
  });

});

</script>

<template>
  <section class="hero-section position-relative">
    <div class="container">
      <div class="row mb-n7">
        <!--分类导航-->
        <div class="col-xl-3 col-lg-4">
          <div class="vertical-menu d-none d-lg-block">
            <button class="menu-btn d-flex">
              <span class="lnr lnr-text-align-left"></span> 浏览分类
            </button>
            <ul class="vmenu-content">
              <li class="menu-item"><router-link to="/category" class="footer-link">新鲜水果<i class="ion-ios-arrow-right"></i></router-link>
                <ul class="verticale-mega-menu flex-wrap">
                  <li><router-link to="/category"><strong>应季水果</strong></router-link>
                    <ul class="submenu-item">
                      <li><router-link to="/category">车厘子</router-link></li>
                      <li><router-link to="/category">蓝莓</router-link></li>
                      <li><router-link to="/category">柑橘</router-link></li>
                      <li><router-link to="/category">牛油果</router-link></li>
                    </ul>
                  </li>
                  <li><a href="javascript:;"><span><strong>热带水果</strong></span></a>
                    <ul class="submenu-item">
                      <li><a href="javascript:;">香蕉</a></li>
                      <li><a href="javascript:;">荔枝</a></li>
                      <li><a href="javascript:;">龙眼</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="menu-item"><a href="#">安心蔬菜<i class="ion-ios-arrow-right"></i></a>
                <ul class="verticale-sub-menu">
                  <li>
                    <ul class="submenu-item">
                      <li><a href="#">叶菜</a></li>
                      <li><a href="#">特色叶菜</a></li>
                      <li><a href="#">苗菜</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="menu-item"><router-link to="/category">肉禽蛋品</router-link></li>
              <li class="menu-item"><router-link to="/category">冷冻水产</router-link></li>
              <li class="menu-item"><router-link to="/category">安心乳品</router-link></li>
              <li class="menu-item"><router-link to="/category">粮油副食</router-link></li>
              <li class="menu-item"><router-link to="/category">亲环境</router-link></li>
              <li class="menu-item"><router-link to="/category">宠物户外</router-link></li>
              <li class="menu-item"><router-link to="/category">酒水冲饮</router-link></li>
            </ul>
          </div>
        </div>

        <!--轮播图-->
        <div class="col-xl-6 col-lg-8">
          <div class="hero-slider position-relative">

            <swiper
                :loop=true
                :autoplay="autoplay"
                :slides-per-view="1"
                :space-between="50"
                :navigation="navigation"
                :pagination="pagination"
                :modules="modules"
            >
              <swiper-slide>
                <div class="hero-slide-item swiper-slide slide-bg" style="background-image: url('/src/assets/image/slide2.jpg')">
                  <div class="hero-slide-content">
                    <h2 class="title delay1 animated">健康水</h2>
                    <h2 class="title delay2 animated">来自健康壶</h2>
                    <p class="text animated">健康的唯一选择，就是它</p>
                    <p class="price animated">仅售 ￥19.9元</p>
                    <router-link to="/product" class="btn animated btn-primary btn-hover-warning mb-1 mb-sm-0 text-uppercase">立即抢购</router-link>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="hero-slide-item swiper-slide slide-bg" style="background-image: url('/src/assets/image/slide3.jpg')">
                  <div class="hero-slide-content">
                    <h2 class="title delay1 animated">烹饪套装</h2>
                    <h2 class="title delay2 animated">全家值得拥有</h2>
                    <p class="text animated">煎炸，水煮，爆炒等一应俱全</p>
                    <p class="price animated">仅售 ￥99元</p>
                    <router-link to="/product" class="btn animated btn-primary btn-hover-warning mb-3 mb-sm-0 text-uppercase">立即抢购</router-link>
                  </div>
                </div>
              </swiper-slide>
              <div class="swiper-pagination"/>
            </swiper>
            <div class="swiper-button-prev"><i class="fa fa-angle-left"></i></div>
            <div class="swiper-button-next"><i class="fa fa-angle-right"></i></div>
          </div>
        </div>

        <!--右侧广告位-->
        <div class="col-xl-3 offset-lg-4 col-lg-8 offset-xl-0 custom-padding">
          <div class="d-flex custom-flex-column">
            <a class="zoom-in d-block mb-4" href="#">
              <img src="@/assets/picture/19.jpg" alt="img" style="height: 180px"/>
            </a>
          </div>
          <div class="d-flex custom-flex-column">
            <a class="zoom-in d-block mb-4" href="#">
              <img src="@/assets/picture/19.jpg" alt="img" style="height: 180px"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>