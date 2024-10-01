<script setup lang="ts">

</script>

<template>
  <nav class="breadcrumb-section section-py bg-light2">
    <div class="container">
      <div class="row">
        <div class="col-12"><h3 class="bread-crumb-title">结算页</h3>
        </div>
      </div>
    </div>
  </nav>

  <div class="check-out-section section-py">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="billing-info-wrap"><h3 class="title">账单详细信息</h3>
            <form class="personal-information" action="javascript:;">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="billing-info mb-5"><label>姓氏</label><input type="text"></div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="billing-info mb-5"><label>名字</label><input type="text"></div>
                </div>
                <div class="col-lg-12">
                  <div class="billing-info mb-5"><label>公司名称</label><input type="text"></div>
                </div>
                <div class="col-lg-12">
                  <div class="billing-select mb-5">
                    <label for="inputState" class="form-label">城市</label>
                    <select id="inputState" class="form-select mb-3">
                    <option>选择一个城市</option>
                    <option>北京</option>
                    <option>上海</option>
                  </select>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="billing-info mb-5">
                    <label>详细地址</label>
                    <input class="billing-address mb-3" placeholder="" type="text">
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="billing-info mb-5"><label>电话</label><input type="text"></div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="billing-info mb-5"><label>邮件</label><input type="text"></div>
                </div>
              </div>
            </form>
            <div class="additional-info-wrap"><h4 class="title">附加信息</h4>
              <div class="additional-info">
                <label class="mb-2">订单备注</label>
                <textarea placeholder="" name="message"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 mt-4 mt-lg-0">
          <div class="your-order-area"><h3 class="title">订单信息</h3>
            <div class="your-order-wrap gray-bg-4">
              <div class="your-order-product-info">
                <div class="your-order-top">
                  <ul>
                    <li>商品信息</li>
                    <li></li>
                  </ul>
                </div>
                <div class="your-order-middle">
                  <ul>
                    <li><span class="order-middle-left">商品商品商品  X 1</span><span class="order-price">￥199</span></li>
                    <li><span class="order-middle-left">商品商品商品  X 2</span><span class="order-price">￥229</span></li>
                  </ul>
                </div>
                <div class="your-order-bottom">
                  <ul>
                    <li class="your-order-shipping">配送</li>
                    <li>免费</li>
                  </ul>
                </div>
                <div class="your-order-total">
                  <ul>
                    <li class="order-total">支付金额</li>
                    <li>￥329</li>
                  </ul>
                </div>
              </div>
              <div class="payment-method">
                <div class="payment-accordion element-mrg">
                  <div class="panel-group" id="accordion">
                    <div class="panel payment-accordion">
                      <div class="panel-heading" id="method-one"><h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#method1">温馨提示</a></h4>
                      </div>
                      <div id="method1" class="panel-collapse collapse show">
                        <div class="panel-body">
                          <p>请随时保持电话畅通</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="Place-order mt-25"><a class="btn btn-warning btn-lg w-100 btn-hover-primary" href="#">提交订单</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>