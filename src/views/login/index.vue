<script setup lang="ts">

</script>

<template>
  <nav class="breadcrumb-section section-py bg-light2">
    <div class="container">
      <div class="row">
        <div class="col-12"><h3 class="bread-crumb-title">登录 & 注册</h3>
          <ol class="breadcrumb bg-transparent justify-content-center m-0 p-0 align-items-center">
            <li class="breadcrumb-item"><a href="/">首页</a></li>
            <li class="breadcrumb-item active" aria-current="page">欢迎登录/注册本系统</li>
          </ol>
        </div>
      </div>
    </div>
  </nav>

  <div class="login-register-area section-py">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-12 mx-auto">
          <div class="login-register-wrapper">
            <div class="login-register-tab-list nav nav-tabs" id="nav-tab" role="tablist">
              <a class="active" data-bs-toggle="tab" href="#lg1">
                <h4>登录</h4>
              </a>
              <a data-bs-toggle="tab" href="#lg2">
                <h4>注册</h4>
              </a>
            </div>
            <div class="tab-content">
              <div id="lg1" class="tab-pane show active">
                <div class="login-form-container">
                  <div class="login-register-form">
                    <form action="javascript:;" method="post">
                      <input type="text" name="user-name" placeholder="用户名">
                      <input type="password" name="user-password" placeholder="密码">
                      <div class="button-box">
                        <div class="login-toggle-btn">
                          <input id="remember" type="checkbox">
                          <label for="remember">记住我</label>
                          <a href="#">忘记密码?</a>
                        </div>
                        <a href="#" class="btn btn-warning btn-hover-primary"><span>登录</span></a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div id="lg2" class="tab-pane">
                <div class="login-form-container">
                  <div class="login-register-form">
                    <form action="javascript:;" method="post">
                      <input type="text" name="user-name" placeholder="用户名">
                      <input type="password" name="user-password" placeholder="密码">
                      <input name="user-email" placeholder="邮箱" type="email">
                      <div class="button-box">
                        <a href="#" class="btn btn-warning btn-hover-primary">
                          <span>注册</span>
                        </a>
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
</template>

<style scoped>

</style>