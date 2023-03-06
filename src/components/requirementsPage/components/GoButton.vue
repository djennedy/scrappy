<script>
import RequirementsButton from './RequirementsButton.vue'
export default {
  components: { RequirementsButton },
    name: 'GoButton',
}
</script>

<template>
  <div class="flex-container">
    <RequirementsButton text="Go to your requirements" class="flex-items" />
    <img src="../../../assets/svg/mountains.svg" class="flex-items">
  </div>
</template>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
}

.flex-items:nth-child(1) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: center;
  order: 0;
  margin: auto;
}

.flex-items:nth-child(2) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: stretch;
  order: 0;
}
</style>