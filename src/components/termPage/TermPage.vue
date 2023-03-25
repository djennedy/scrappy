<template>
  <div class="flex flex-col items-center">
    <header class="w-full h-[80px]"></header>
    <div class="flex font-bold text-4xl flex-row items-center gap-20">
      <button>Previous</button>
      <h3>{{ term }}</h3>
      <button>Next</button>
    </div>
    <div class="flex flex-col items-center pt-8 gap-2 w-[80%] max-w-[1200px]">
      <TermPageOptions
        class=""
        :filters="filter"
        @setFilter="updateFilter"
      ></TermPageOptions>
      <div
        v-if="isDepartmentEmpty"
        class="flex flex-col gap-4 justify-center items-center"
      >
        <p class="text-xl">Please choose a department on the filter tab!</p>
        <p>Or...</p>
        <FilterButton
          v-bind="filter.department"
          v-bind:is-department="true"
          @filter-event="updateFilter"
        />
      </div>
      <p v-else-if="loading">Loading Term Information...</p>
      <TermPageCard
        v-else
        class=""
        v-for="course in getFilteredCourses"
        v-bind="course"
      />
    </div>
  </div>
</template>

<script>
import TermPageCard from "./components/TermPageCard.vue";
import TermPageOptions from "./components/filter-components/TermPageOptions.vue";
import {
  Department,
  getDepartmentName,
  getTermInfo,
  TermInfo,
} from "@/components/functions/termInfoFunctions";
import {
  filterByCampuses,
  filterByInstructors,
  filterByLevels,
  filterByWqbs,
} from "@/components/functions/termPageFilters";
import FilterButton from "@/components/termPage/components/filter-components/FilterButton.vue";

export default {
  name: "TermPage",
  components: { FilterButton, TermPageCard, TermPageOptions },
  beforeMount() {
    this.initData();
  },
  data() {
    return {
      defaultTerm: "Spring 2023",
      deptName: [Department],
      loading: false,
      filteredInfo: [TermInfo],
      initialInfo: [TermInfo],
      term: "Spring 2023",
      filter: {
        department: {
          title: "Department",
          options: [],
          params: [],
        },
        level: {
          title: "Level",
          options: [],
          params: [],
        },
        instructor: {
          title: "Instructor",
          options: [],
          params: [],
        },
        campus: {
          title: "Campus",
          options: ["Burnaby", "Surrey", "Other"],
          params: [],
        },
        wqb: {
          title: "WQB",
          options: [],
          params: [],
        },
        filtered: false,
      },
    };
  },
  computed: {
    getFilteredCourses() {
      if (this.filter.filtered === false) return this.initialInfo;

      let courses = this.initialInfo;
      for (const [key, value] of Object.entries(this.filter)) {
        if(value.params === null) continue;
        courses = this.getFilter(courses, key.toLowerCase(), value.params);
      }
      return courses;
    },
    isDepartmentEmpty() {
      return this.filter.department.params.length === 0;
    },

  },
  methods: {
    /**
     * @returns {string[]}
     */
    getDepartmentsAbbr() {
      console.log(this.filter.department.params.map((dept) => dept["abbr"]));
      return this.filter.department.params.map((dept) => dept["abbr"]);
    },
    updateFilter(type, params) {
      this.filter[type].params = params;
      if (type.toLowerCase() === "department") {
        this.initData();
        // this.clearFilter();
      }
      this.filter.filtered = true;
    },
    clearFilter() {
      for (const [key, value] of Object.entries(this.filter)) {
        if (key.toLowerCase() === "department") {
          continue;
        }
        value.options = [];
      }
    },

    getFilter(list, type, params) {
      switch (type) {
        case "department": {
          return getTermInfo(this.defaultTerm, params);
        }
        case "level": {
          return filterByLevels(list, params);
        }
        case "instructor": {
          return filterByInstructors(list, params);
        }
        case "campus": {
          return filterByCampuses(list, params);
        }
        case "wqb": {
          return filterByWqbs(list, params);
        }
      }
    },
    getDepartment() {
      getDepartmentName("Spring 2023")
        .then((data) => (this.filter.department.options = data))
        .catch((err) => console.log(err));
    },
    getInstructorName: function () {
      this.filter.instructor.options = this.getFilteredCourses.reduce(
        (accumulator, curr) => {
          if (accumulator.includes(curr["instructor"])) {
            return accumulator;
          }
          accumulator.push(curr["instructor"]);
          return accumulator;
        },
        []
      );
    },
    getLevels: function () {
      this.filter.level.options = this.getFilteredCourses.reduce(
        (accumulator, curr) => {
          let level = Math.floor(parseInt(curr["courseNumber"]) / 100) * 100;
          if (accumulator.includes(level)) {
            return accumulator;
          }
          accumulator.push(level);
          return accumulator;
        },
        []
      );
    },
    getWQB() {
      this.filter.wqb.options = this.getFilteredCourses.reduce(
        (accum, curr) => {
          let wqb = curr["wqb"];
          if (accum.includes(wqb)) {
            return accum;
          }
          accum.push(wqb);
          return accum;
        },
        []
      );
    },
    initData() {
      this.loading = true;
      getTermInfo(this.defaultTerm, ["CMPT"])
        .then((data) => {
          this.filteredInfo = data;
          this.initialInfo = data;
        })
        .catch((err) => console.log(err))
        .then(() => {
          this.getDepartment();
          this.getInstructorName();
          this.getLevels();
          this.getWQB();
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>

<style scoped></style>
