<template>
  <div class="flex flex-col items-center">
  <header class="w-full h-[80px]"></header>
    <div class="flex font-bold text-4xl flex-row items-center gap-20">
      <button>Previous</button>
      <h3>{{ current.term }}</h3>
      <button>Next</button>
    </div>
    <div class="flex flex-col items-center pt-8 gap-2 w-[80%] max-w-[1200px]">
      <TermPageOptions class="" :filters="filter"></TermPageOptions>
      <TermPageCard class=""
          v-for="course in current.courses"
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
      current: {
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