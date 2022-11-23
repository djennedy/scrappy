<template>
  <div class="flex flex-col items-center">
  <header class="w-full h-[80px]"></header>
    <div class="text-4xl"></div>
    <div class="flex flex-col items-center pt-8 gap-2 w-[80%]">
      <TermPageOptions :filters="filter"></TermPageOptions>
      <TermPageCard
          v-for="course in fall2022.courses"
          v-bind="course"
      />
    </div>
  </div>
</template>

<script>
import TermPageCard from "./components/TermPageCard.vue";
import TermPageOptions from "./components/filter-components/TermPageOptions.vue";
export default {
  name: "TermPage",
  components: {TermPageCard,TermPageOptions},
  data(){
    return{
      fall2022: {
        courses:[
          {courseNumber: "CMPT 272", courseName: "Web I - Client-side Development", instructor: "Bobby Chan", campusLocation:"Burnaby",wqbDesignation:"Breadth", creditsNum:"3"},
          {courseNumber: "CMPT 272", courseName: "Web I - Client-side Development", instructor: "Bobby Chan", campusLocation:"Burnaby",wqbDesignation:"Breadth", creditsNum:"3"},
          {courseNumber: "CMPT 272", courseName: "Web I - Client-side Development", instructor: "Bobby Chan", campusLocation:"Burnaby",wqbDesignation:"Breadth", creditsNum:"3"},
          {courseNumber: "CMPT 272", courseName: "Web I - Client-side Development", instructor: "Bobby Chan", campusLocation:"Burnaby",wqbDesignation:"Breadth", creditsNum:"3"},
          {courseNumber: "CMPT 272", courseName: "Web I - Client-side Development", instructor: "Bobby Chan", campusLocation:"Burnaby",wqbDesignation:"Breadth", creditsNum:"3"},
      ],
        term: "Fall 2022"
      },
      filter:{
        department:{
          title: "Department",
          options:[
            {href:".",label:"Computing Science"},
            {href:".",label:"Computing Science"},
            {href:".",label:"Computing Science"},
            {href:".",label:"Computing Science"},
          ]},

        level:{
          title: "Level",
          options:[
            {href:".",label:"100"},
            {href:".",label:"200"},
            {href:".",label:"300"},
            {href:".",label:"400"},
          ]
        },
        campus:{
          title:"Campus",
          options:[
            {href:".", label:"Burnaby"},
            {href:".", label:"Surrey"},
            {href:".", label:"Vancouver"},
          ]
        },
        wqbDesignation:{
          title:"WQB",
          options:[
            {href:".", label:"Writing"},
            {href:".", label:"Quantitative"},
            {href:".", label:"Breadth"},
          ]
        }
      }
    }
  }
}
</script>

<style scoped>

</style>