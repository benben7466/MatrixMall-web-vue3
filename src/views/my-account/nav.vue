<script setup lang="ts">

import router from "@/router";
</script>

<template>
  <div class="myaccount-tab-menu nav" role="tablist">
    <router-link to="/my-account/dashboard" :class="{ active: router.currentRoute.value.path === '/my-account/dashboard' }">
      <i class="fa fa-tachometer"></i>主页
    </router-link>
    <router-link to="/my-account/orders" :class="{ active: router.currentRoute.value.path === '/my-account/orders' }">
      <i class="fa fa-cart-arrow-down"></i>我的订单
    </router-link>
    <router-link to="/my-account/download" :class="{ active: router.currentRoute.value.path === '/my-account/download' }">
      <i class="fa fa-download"></i>下载
    </router-link>
    <router-link to="/my-account/payment" :class="{ active: router.currentRoute.value.path === '/my-account/payment' }">
      <i class="fa fa-credit-card"></i>支付方式
    </router-link>
    <router-link to="/my-account/address" :class="{ active: router.currentRoute.value.path === '/my-account/address' }">
      <i class="fa fa-map-marker"></i>地址
    </router-link>
    <router-link to="/my-account/userinfo" :class="{ active: router.currentRoute.value.path === '/my-account/userinfo' }">
      <i class="fa fa-user"></i>账户详情
    </router-link>
    <router-link to="/my-account/wishlist" :class="{ active: router.currentRoute.value.path === '/my-account/wishlist' }">
      <i class="fa fa-star-o"></i>我的心愿单
    </router-link>
    <router-link to="/">
      <i class="fa fa-sign-out"></i>登出
    </router-link>
  </div>
</template>

<style scoped>

</style>