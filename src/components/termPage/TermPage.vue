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
      <p v-if="current.loading"> Loading courses...</p>
      <TermPageCard v-else class=""
          v-for="course in current.courses"
          v-bind="course"
      />
    </div>
  </div>
</template>

<script>
import TermPageCard from "./components/TermPageCard.vue";
import TermPageOptions from "./components/filter-components/TermPageOptions.vue";
import {Department, getDepartmentName, getTermInfo, TermInfo} from "@/components/functions/termInfoFunctions";
export default {
  name: "TermPage",
  components: {TermPageCard,TermPageOptions},
  beforeMount() {
    this.initData();
  },
  data(){
    return{
      defaultTerm: "Spring 2023",
      deptName:[Department],
      current: {
        loading: true,
        courses:[TermInfo],
        term: "Spring 2023"
      },
      filter:{
        department:{
          title: "Department",
          options:[
            this.deptName,
          ]},

        level:{
          title: "Level",
          options:[
            {href:".",label:"100"},
            {href:".",label:"200"},
            {href:".",label:"300"},
            {href:".",label:"400"},
            {href:".",label:"500"},
            {href:".",label:"600"},
            {href:".",label:"700"},
            {href:".",label:"800"},
            {href:".",label:"900"},
          ]
        },
        instructor:{
          title:"Instructor",
          options:[]
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
  },
  methods: {
    getInstructorName: function () {
      this.filter.instructor.options = this.current.courses.reduce((accumulator, curr) => {
        if (accumulator.includes(curr["instructor"])) {
          return accumulator;
        }
        console.log(curr["instructor"]);
        accumulator.push(curr["instructor"]);
        return accumulator;
      }, []).reduce((accumulator, curr) => {
        accumulator.push(Object.create({href: ".", label: curr}));
        return accumulator;
      }, []);
    },
    initData(){
      getDepartmentName("Spring 2023").then(data => this.deptName = data)
          .then(()=> {
            this.filter.department.options = this.deptName;
          })
          .catch(err => console.log(err));


      getTermInfo(this.defaultTerm, ["CMPT"])
          .then(data => {
            this.current.courses = data;
            this.getInstructorName();
          }).catch(err => console.log(err))
          .finally(() => this.current.loading = false);
    }
  },
}
</script>

<style scoped>

</style>