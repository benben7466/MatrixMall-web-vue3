<script setup lang="ts">
import zhCn from "element-plus/es/locale/lang/zh-cn";//导入 Element Plus 中英文语言包
</script>

<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>

<style scoped>
</style>
