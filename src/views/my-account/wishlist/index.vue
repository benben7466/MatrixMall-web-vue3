<script setup lang="ts">
import router from "@/router";
import DialogAddToCart from "@/components/DialogAddToCart.vue";
import {reactive, ref} from "vue";

const tabPaneClass = ref();
const selectProductId = ref(0);//选择的商品Id

const items = reactive([
  {id: 1, name: '洗衣机', title: '新品',quantity: 1},
  {id: 2, name: '电冰箱', title: '最佳',quantity: 1},
]);

onMounted(() => {
  if (router.currentRoute.value.path === '/my-account/wishlist') {
    tabPaneClass.value.classList.add('active');
    tabPaneClass.value.classList.add('show')
  } else {
    tabPaneClass.value.classList.remove('active');
    tabPaneClass.value.classList.remove('show')
  }

});

function setSelectProductId(productId: number) {
  selectProductId.value = productId;
}

const incrementQuantity = (index: number) => {
  if (items[index].quantity < 100) {
    items[index].quantity++;
  }
};

const decrementQuantity = (index: number) => {
  if (items[index].quantity > 1) {
    items[index].quantity--;
  }
};

const showDeleteConfirmation = (index: number) => {
  ElMessageBox.confirm('确定要删除吗？', '确认删除', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
      .then(() => {
        // 用户点击确定后的操作
        console.log('用户点击了确定，执行删除操作');
      })
      .catch(() => {
        // 用户点击取消后的操作
        console.log('用户点击了取消');
      });
};

</script>

<template>
  <div ref="tabPaneClass" class="tab-pane fade" id="wishlist" role="tabpanel">
    <section class="whish-list-section section-py">
      <div class="container">
        <div class="row">
          <div class="col-12"><h3 class="title mb-5 pb-4 text-capitalize">心愿单</h3>
            <div class="table-responsive">
              <table class="table">
                <thead class="thead-light">
                <tr>
                  <th class="text-center" scope="col">商品图片</th>
                  <th class="text-center" scope="col">商品名称</th>
                  <th class="text-center" scope="col">库存状态</th>
                  <th class="text-center" scope="col">数量</th>
                  <th class="text-center" scope="col">价格</th>
                  <th class="text-center" scope="col">删除</th>
                  <th class="text-center" scope="col">操作</th>
                </tr>
                </thead>
                <tbody>
                <template v-for="(item, index) in items" :key="index">
                  <tr>
                    <th class="text-center" scope="row"><img src="@/assets/picture/product2.jpg" alt="img"></th>
                    <td class="text-center"><span class="whish-title">{{ item.name }}</span></td>
                    <td class="text-center"><span class="badge bg-success">In Stock</span></td>
                    <td class="text-center">
                      <div class="product-count style">
                        <div class="count d-flex justify-content-center"><input type="number" min="1" max="100" step="1" value="1" v-model="item.quantity">
                          <div class="button-group">
                            <button class="count-btn increment" @click="incrementQuantity(index)"><i class="ion-chevron-up"></i></button>
                            <button class="count-btn decrement" @click="decrementQuantity(index)"><i class="ion-chevron-down"></i></button>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="text-center"><span class="whish-list-price">￥99.99</span></td>
                    <td class="text-center">
                      <a href="javascript:;" @click="showDeleteConfirmation(index)"><span class="trash"><i class="ion-ios-trash"></i></span></a>
                    </td>
                    <td class="text-center">
                      <button  data-bs-toggle="modal"
                               data-bs-target="#add-to-cart"
                               @click="setSelectProductId(item.id)"
                               class="btn btn-warning btn-hover-primary text-capitalize"
                      >
                        加入购物车
                      </button>
                    </td>
                  </tr>
                </template>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <DialogAddToCart v-model="selectProductId"/>
</template>

<style scoped>

</style>