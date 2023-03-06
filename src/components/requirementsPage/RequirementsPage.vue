<script>
import DegreeRequirements from './components/DegreeRequirements.vue'
import GoButton from './components/GoButton.vue'

export default {
name: "RequirementsPage",
components: {
    DegreeRequirements, 
    GoButton,
},

}
</script>

<template>
    <div class="flex-container">
        <DegreeRequirements class="flex-items" />
        <GoButton class="flex-items" />
    </div>
</template>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: normal;
  align-content: normal;
  padding-top: 100px;
}

.flex-items:nth-child(1) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
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
