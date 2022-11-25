<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
</script>

<template>
  <Header/>
  <div class="container bg-slate-300"> 
    <RouterView/>
  </div>
 
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  height: 100vh;
  color: black
}

</style>
