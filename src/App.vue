<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
</script>

<template>
  <Header/>
  <div class="container bg-white">
    <RouterView/>
  </div>

</template>

<style scoped>
.container {
  max-width: var(--page-width);
  margin: 0 auto;
  height: 100vh;
  color: black
}

</style>