<script>
import RequirementsButton from './RequirementsButton.vue'
export default {
  components: { RequirementsButton },
  name: 'GoButton',
  props: {
    program: String,
    year: String,
    semester: String,
  }
}
</script>

<template>
  <div class="flex-container">
    <RequirementsButton text="Go to your requirements" class="flex-items" />
    <div class="flex-items">
      <img src="../../../assets/svg/mountains.svg" alt="mountain" id="image" class="mountain">
    </div>
  </div>
</template>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  /* flex-wrap: nowrap; */
  justify-content: space-around;
  align-items: center;
  align-content: center;
}

.flex-items:nth-child(1) {
  display: block;
  margin: auto;
  margin-top: 10%;
}

.flex-items:nth-child(2) {
  width: 1400px;
  margin-top: -2%;
}

/* .mountain {
  object-fit: cover;
} */
</style>