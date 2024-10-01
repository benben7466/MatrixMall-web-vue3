<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <div class="modal fade" id="addtowishlist" tabindex="-1" aria-labelledby="addtowishlist">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header border-bottom-0">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="wishlist-modal">
            <p>您必须登录才能管理您的愿望列表</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>