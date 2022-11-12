<template>
  <header class="w-full h-[100px]"></header>
    <div class="flex flex-col items-center pt-8 gap-2">
      <TermPageCard
          v-for="course in exampleData"
          v-bind="course"
      />
    </div>
</template>

<script>
import TermPageCard from "./components/TermPageCard.vue";
export default {
  name: "TermPage",
  components: {TermPageCard},
  data(){
    return{
      exampleData: [
          {courseNumber: "CMPT 272", courseName: "Web I - Client-side Development", instructor: "Bobby Chan", campusLocation:"Burnaby",wqbDesignation:"Breadth", creditsNum:"3"},
          {courseNumber: "CMPT 272", courseName: "Web I - Client-side Development", instructor: "Bobby Chan", campusLocation:"Burnaby",wqbDesignation:"Breadth", creditsNum:"3"},
          {courseNumber: "CMPT 272", courseName: "Web I - Client-side Development", instructor: "Bobby Chan", campusLocation:"Burnaby",wqbDesignation:"Breadth", creditsNum:"3"},
          {courseNumber: "CMPT 272", courseName: "Web I - Client-side Development", instructor: "Bobby Chan", campusLocation:"Burnaby",wqbDesignation:"Breadth", creditsNum:"3"},
          {courseNumber: "CMPT 272", courseName: "Web I - Client-side Development", instructor: "Bobby Chan", campusLocation:"Burnaby",wqbDesignation:"Breadth", creditsNum:"3"},
      ],
    }
  }
}
</script>

<style scoped>

</style>