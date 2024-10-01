<script setup lang="ts">
import Header from '@/views/common/header.vue'
import Footer from '@/views/common/footer.vue'
import ProjectList from '@/views/common/project-list.vue'
</script>

<template>
  <Header />
  <router-view />
  <ProjectList />
  <Footer />
</template>

<style scoped>

</style>