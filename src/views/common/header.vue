<script setup lang="ts">
import {useRouter} from 'vue-router'

const router = useRouter()
const jumpTo = (path: string) => {
  router.push(path)
}

const activeSticky = ref();
const handleScroll = () => {
  const scrollTop = window.scrollY;
  if (scrollTop < 1) {
    activeSticky.value?.classList.remove('is-sticky');
  } else {
    activeSticky.value?.classList.add('is-sticky');
  }
};

onMounted(() => {
  //顶部悬浮通栏
  activeSticky.value = document.querySelector('#active-sticky');
  window.addEventListener('scroll', handleScroll);

});

</script>

<template>
  <header>
    <!--顶部导航条-->
    <div class="header-top bg-primary d-none d-lg-block">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6">
            <p>邮箱：<a class="header-top-link" href="mailto:benben74466@qq.com">benben7466@qq.com</a></p>
            <p>微信：benben7466</p>
            <p>联系：13426286424</p>
          </div>
          <div class="col-12 col-sm-6">
            <div class="header-top-nav">
              <ul class="d-flex flex-wrap justify-content-center align-items-center justify-content-sm-end">
                <!--关于我们-->
                <li class="dropdown top-nav-item">
                  <a class="top-nav-link" href="#" id="about_us" data-bs-toggle="dropdown">关于我们 <i class="ion-ios-arrow-down"></i></a>
                  <ul class="dropdown-menu" aria-labelledby="about_us">
                    <li><a class="dropdown-item" href="http://benzhiqiang.w1.luyouxia.net/AboutUs/index" target="_blank">贲氏工作室</a></li>
                  </ul>
                </li>
                <!--注册/登录-->
                <li class="top-nav-item">
                  <router-link to="/login" class="top-nav-link">注册/登录</router-link>
                </li>
                <!--我的账号-->
                <li class="dropdown top-nav-item">
                  <a class="top-nav-link" href="#" id="account" data-bs-toggle="dropdown">我的账户 <i class="ion-ios-arrow-down"></i></a>
                  <ul class="dropdown-menu" aria-labelledby="account">
                    <li><router-link to="/my-account" class="dropdown-item">我的账户</router-link></li>
                    <li><router-link to="/my-account/orders" class="dropdown-item">我的订单</router-link></li>
                    <li><router-link to="/my-account/wishlist" class="dropdown-item">心愿单</router-link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Logo,搜索区-->
    <div id="active-sticky" class="header-section">
      <div class="container position-relative">
        <div class="row align-items-center">

          <!--Logo-->
          <div class="col-6 col-md-3 col-md-3 col-lg-3">
            <div class="header-logo"><a href="/"><img src="@/assets/image/logo.png" alt="贲氏科技"></a></div>
          </div>

          <!--搜索框-->
          <div class="col-md-6 col-lg-5 d-none d-lg-block">
            <form action="javascript:;">
              <div class="input-group border">
                <div class="input-group-text">
                  <select class="form-select d-none d-xl-block" aria-label="Default select example">
                    <option value="0">浏览所有食品</option>
                    <option value="10">新鲜水果</option>
                    <option value="19">- - 应季水果</option>
                    <option value="21">- - - - 车厘子</option>
                    <option value="22">- - - - 蓝莓</option>
                    <option value="20">- - 热带水果</option>
                    <option value="26">- - - - 香蕉</option>
                    <option value="11">安心蔬菜</option>
                    <option value="31">- - 番茄黄瓜</option>
                    <option value="33">- - - - 番茄</option>
                    <option value="34">- - - - 黄瓜</option>
                  </select>
                </div>
                <input type="text" class="form-control border-0" placeholder="搜索">
                <div class="input-group-text">
                  <button class="btn-search btn btn-hover-primary" type="button" @click="jumpTo('/category')">Search</button>
                </div>
              </div>
            </form>
          </div>

          <!--导航栏与购物车-->
          <div class="col-6 col-md-9 col-lg-5">
            <div class="d-flex align-items-center justify-content-end">
              <!--导航栏-->
              <nav class="main-menu d-none d-lg-inline-block">
                <ul class="d-flex">
                  <li class="main-menu-item">
                    <a class="main-menu-link" href="/">首页</a>
                  </li>
                  <li class="position-static main-menu-item"><a class="main-menu-link" href="#">导购</a>
                    <ul class="mega-menu row">
                      <li class="col-3">
                        <ul>
                          <li class="mega-menu-title"><a href="#">新鲜水果</a></li>
                          <li><a href="#">应季水果</a></li>
                          <li><a href="#">热带水果</a></li>
                        </ul>
                      </li>
                      <li class="col-3">
                        <ul>
                          <li class="mega-menu-title"><a href="#">安心蔬菜</a></li>
                          <li><a href="#">有机蔬菜</a></li>
                        </ul>
                      </li>
                      <li class="col-3">
                        <ul>
                          <li class="mega-menu-title"><a href="#">肉禽蛋品</a></li>
                          <li><a href="#">全程无抗</a></li>
                          <li><a href="#">牛肉类</a></li>
                        </ul>
                      </li>
                      <li class="col-3">
                        <ul>
                          <li class="mega-menu-title"><a href="#">冷冻水产</a></li>
                          <li><a href="#">鱼类</a></li>
                          <li><a href="#">虾蟹类</a></li>
                        </ul>
                      </li>
                      <li class="col-4 mt-4"><a href="#" class="zoom-in"><img
                          src="@/assets/picture/17.jpg" alt="img"></a></li>
                      <li class="col-4 mt-4"><a href="#" class="zoom-in"><img
                          src="@/assets/picture/21.jpg" alt="img"></a></li>
                      <li class="col-4 mt-4"><a href="#" class="zoom-in"><img
                          src="@/assets/picture/3.jpg" alt="img"></a></li>
                    </ul>
                  </li>
                  <li class="main-menu-item"><a class="main-menu-link" href="#">我的账户</a>
                    <ul class="sub-menu">
                      <li><router-link to="/my-account" class="sub-menu-link">我的账户</router-link></li>
                      <li><router-link to="/my-account/orders" class="sub-menu-link">我的订单</router-link></li>
                      <li><router-link to="/my-account/wishlist" class="sub-menu-link">心愿单</router-link></li>
                    </ul>
                  </li>
                  <li class="main-menu-item">
                    <router-link to="/contact-us" class="main-menu-link">联系我们</router-link>
                  </li>
                </ul>
              </nav>

              <!--购物车-->
              <div class="d-flex align-items-center justify-content-end">
                <div class="block-cart-btn-wrapp">
                  <button class="cart-action" @click="jumpTo('/cart')">
                    <span class="lnr lnr-cart"></span>
                    <span class="badge bg-dark">3</span>
                  </button>

                  <div class="checkout-cart">
                    <ul class="checkout-scroll">
                      <li class="checkout-cart-list">
                        <div class="checkout-img">
                          <img class="product-image" src="@/assets/picture/18.jpg" alt="img" style="width: 70px;height: 70px;">
                          <span class="product-quantity">1x</span>
                        </div>
                        <div class="checkout-block">
                          <a class="product-name" href="#">怀山堂·铁棍·怀山粉</a>
                          <span class="product-price">价格:￥70.90</span>
                          <a class="remove-cart" href="#"><i class="fa fa-remove pull-xs-left"></i></a>
                          <div class="product-size"><span>规格:480g</span></div>
                        </div>
                      </li>
                      <li class="checkout-cart-list">
                        <div class="checkout-img">
                          <img class="product-image" src="@/assets/picture/22.jpg" alt="img" style="width: 70px;height: 70px;">
                          <span class="product-quantity">1x</span>
                        </div>
                        <div class="checkout-block">
                          <a href="#" class="product-name">安心直采本地韭菜</a>
                          <span class="product-price">价格:￥70.90</span>
                          <a class="remove-cart" href="#"><i class="fa fa-remove pull-xs-left"></i></a>
                          <div class="product-size"><span>规格:900g</span></div>
                        </div>
                      </li>
                    </ul>
                    <ul class="list-group checkout-sub-total">
                      <li class="list-group-item"><span>商品价格</span><span>￥146.00</span></li>
                      <li class="list-group-item"><span>优惠</span><span>￥7.00</span></li>
                      <li class="list-group-item"><span>运费</span><span>￥0.00</span></li>
                      <li class="list-group-item"><span>总价</span><span>￥153.00</span></li>
                    </ul>
                    <div class="checkout-action">
                      <router-link to="/checkout" class="btn btn-lg btn-primary d-block">结算</router-link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

  </header>
</template>

<style scoped lang="scss">
</style>