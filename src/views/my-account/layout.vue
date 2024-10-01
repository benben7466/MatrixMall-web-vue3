<script setup lang="ts">
import Nav from '@/views/my-account/nav.vue'
import Header from "@/views/common/header.vue";
import Footer from "@/views/common/footer.vue";
import ProjectList from "@/views/common/project-list.vue";
</script>

<template>
  <Header/>

  <!--导航区-->
  <nav class="breadcrumb-section section-py bg-light2">
    <div class="container">
      <div class="row">
        <div class="col-12"><h3 class="bread-crumb-title">我的账户</h3>
          <ol class="breadcrumb bg-transparent justify-content-center m-0 p-0 align-items-center">
            <li class="breadcrumb-item"><a href="/">首页</a></li>
            <li class="breadcrumb-item active" aria-current="page">我的</li>
          </ol>
        </div>
      </div>
    </div>
  </nav>

  <!--主内容-->
  <div class="my-account section-py">
    <div class="container">
      <div class="row">
        <div class="col-12"><h3 class="title text-capitalize mb-5 pb-4">我的账户</h3></div>
        <div class="col-lg-3 col-12 mb-5">
          <div class="tab-content" id="myaccountContent">
            <Nav/>
          </div>
        </div>
        <div class="col-lg-9 col-12 mb-5">
          <router-view/>
        </div>
      </div>
    </div>
  </div>

  <ProjectList/>
  <Footer/>
</template>

<style scoped>

</style>