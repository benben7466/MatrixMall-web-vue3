<script setup lang="ts">

</script>

<template>
  <nav class="breadcrumb-section section-py bg-light2">
    <div class="container">
      <div class="row">
        <div class="col-12"><h3 class="bread-crumb-title">联系我们</h3>
          <ol class="breadcrumb bg-transparent justify-content-center m-0 p-0 align-items-center">
            <li class="breadcrumb-item"><a href="/">首页</a></li>
            <li class="breadcrumb-item active" aria-current="page">联系</li>
          </ol>
        </div>
      </div>
    </div>
  </nav>

  <section class="contact-section section-py">
    <div class="container">
      <div class="row mb-n7">
        <div class="col-lg-6 mb-7">
          <div class="contact-title-section"><h3 class="title">订阅咨询</h3>
            <p>希望了解我们的最新动态吗？ <br class="d-none d-xl-block">请填写您的联系方式</p></div>
          <form id="contactForm" class="row" action="javascript:;" method="POST">
            <div class="col-12 col-sm-6 mb-7"><input type="text" class="form-control" id="name" name="name" placeholder="姓名"></div>
            <div class="col-12 col-sm-6 mb-7"><input type="text" class="form-control" id="email" name="email" placeholder="邮箱地址"></div>
            <div class="col-12 mb-9"><textarea class="form-control massage-control" name="massage" id="massage" cols="30" rows="10" placeholder="您的留言"></textarea></div>
            <div class="col-12">
              <button id="contactSubmit" type="submit" class="btn btn-warning btn-hover-primary">发送信息</button>
              <p class="form-message mt-3"></p></div>
          </form>
        </div>
        <div class="col-lg-6 mb-7">
          <div class="contact-address text-center">
            <div class="address-list mb-4 mb-xl-10 pb-2"><h4 class="title">微信</h4>
              <p>benben7466</p>
            </div>
            <div class="address-list mb-4 mb-xl-10 pb-2"><h4 class="title">联系方式</h4>
              <ul>
                <li><a class="phone-number" href="">+134 2628 6424</a></li>
              </ul>
            </div>
            <div class="address-list"><h4 class="title">邮箱</h4>
              <ul>
                <li><a class="mailto" href="mailto:benben7466@qq.com">benben7466@qq.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>