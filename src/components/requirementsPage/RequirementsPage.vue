<script>
import DegreeRequirements from './components/DegreeRequirements.vue'
import GoButton from './components/GoButton.vue'

export default {
name: "RequirementsPage",
components: {
    DegreeRequirements, 
    GoButton,
},
data() {
  return {
    programResult: '',
    yearResult: '',
    semesterResult: '',
  }
},
methods: {
  handleProgramResult(searchResult) {
      this.programResult = searchResult;
  },

  handleYearResult(searchResult) {
      this.yearResult = searchResult;
  },

  handleSemesterResult(searchResult) {
      this.semesterResult = searchResult;
  },
}
}
</script>

<template>
    <div class="flex-container">
        <DegreeRequirements class="flex-items" v-on:program-result="handleProgramResult" v-on:year-result="handleYearResult" v-on:semester-result="handleSemesterResult"/>
        <GoButton class="flex-items" v-bind:program="programResult" v-bind:year="yearResult" v-bind:semester="semesterResult"/>
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
  height: 100vh;
}

.flex-items:nth-child(1) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  flex: 1 1 50%;
}

.flex-items:nth-child(2) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  flex: 1 1 55%;
  overflow: hidden;
}
</style>
