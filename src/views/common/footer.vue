<script setup lang="ts">
import {getCurrentYear} from "@/utils/helper";
import VueScrollTo from 'vue-scrollto';

const currentYear = getCurrentYear();
const showTopButton = ref(false);

const scrollToTop = () => {
  VueScrollTo.scrollTo({
    y: 0,
    duration: 300,
    easing: 'linear',
    onStart: () => {
      showTopButton.value = false;
    },
    onDone: () => {
      showTopButton.value = false;
    },
  });
};

onMounted(() => {
  window.addEventListener('scroll', () => {
    showTopButton.value = window.scrollY > 400;
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', () => {
  });
});

</script>

<template>
  <footer class="footer-section">
    <div class="footer-top position-relative">
      <div class="container">
        <div class="row g-0">
          <div class="col-12">
            <div class="border-bottom section-py">
              <div class="row mb-n7">
                <div class="col-lg-4 col-sm-6 mb-7">
                  <div class="footer-widget">
                    <a class="footer-logo mb-4" href="">
                      <img src="@/assets/image/logo.png" alt="footer-logo">
                    </a>
                    <ul class="adress">
                      <li>
                        <span class="text-dark fw-500">微信:</span>benben7466
                      </li>
                      <li>
                        <span class="text-dark fw-500">邮箱:</span>
                        <a href="mailto:benben74466@qq.com">benben74466@qq.com</a>
                      </li>
                      <li>
                        <span class="text-dark fw-500">联系:</span>
                        <a href="#"><span class="phone-call">134-2628-6424</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb-7">
                  <div class="footer-widget">
                    <h4 class="title">关于我们</h4>
                    <ul class="footer-menu">
                      <li><a class="footer-link" href="http://benzhiqiang.w1.luyouxia.net/" target="_blank">官网</a></li>
                      <li>
                        <router-link to="/about-us" class="footer-link" target="_blank">关于我们</router-link>
                      </li>
                      <li><a class="footer-link" href="http://benzhiqiang.w1.luyouxia.net/Contact/index" target="_blank">联系方式</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb-7">
                  <div class="footer-widget">
                    <h4 class="title">协议与隐私</h4>
                    <ul class="footer-menu">
                      <li><a class="footer-link" href="#">版权政策</a></li>
                      <li><a class="footer-link" href="#">用户协议</a></li>
                      <li><a class="footer-link" href="#">隐私政策</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-2 col-sm-6 mb-7">
                  <div class="footer-widget">
                    <h4 class="title">赞助</h4>
                    <div>
                      <img src="@/assets/image/payment.png" class="payment" alt="赞助">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copy-right-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 order-last order-md-first">
            <div class="copyright-info text-center text-md-start">
              <p>Copyright &copy;
                <span>{{ currentYear }}</span>
                <a href="http://benzhiqiang.w1.luyouxia.net/" target="_blank">贲氏工作室</a>,All Rights Reserved
              </p>
            </div>
          </div>
          <div class="col-md-6 text-center text-md-end mb-3 mb-md-0">
            我们提供网站开发，小程序开发，IT相关的一系列的，一站式的技术支持
          </div>
        </div>
      </div>
    </div>
  </footer>

  <!--回到顶部-->
  <a id="scrollUp" v-if="showTopButton" href="javascript:;" @click="scrollToTop"><i class="fa fa-angle-double-up"></i></a>
</template>

<style scoped lang="scss">
</style>