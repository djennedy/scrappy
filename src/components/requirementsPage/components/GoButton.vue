<script>
import RequirementsButton from './RequirementsButton.vue'
export default {
  components: { RequirementsButton },
    name: 'GoButton',
}
</script>

<template>
  <div class="flex-container">
    <RequirementsButton text="Go to requirements" class="flex-items"/>
    <img src="../../../assets/svg/mountains.svg" class="flex-items">
  </div>
</template>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: normal;
  align-items: stretch;
  align-content: stretch;
}

.flex-items:nth-child(1) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: center;
  order: 0;
}

.flex-items:nth-child(2) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}
</style>