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
        v-for="course in getFilteredCourses()"
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
import { isProxy, toRaw } from "vue";

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
      unfilteredCourses: [TermInfo],
      term: "Spring 2023",
      timesFilterTriggered:0,
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
      },
    };
  },
  computed: {
    isDepartmentEmpty() {
      return this.filter.department.params.length === 0;
    },
  },
  methods: {
    /**
     * @returns {[TermInfo]}
     */
     getFilteredCourses(){
       this.timesFilterTriggered;
      let courses = this.unfilteredCourses;
      Object.entries(this.filter).forEach(([key, value]) => {
        if (isProxy(value)) {
          value = toRaw(value);
        }
        if (value.params == null || value.params.length === 0) {
          return;
        }

        this.getFilter(courses, key.toLowerCase(), value.params).then(
          (data) => {
            courses = data;
        });
      });
      return courses;
    },
    /**
     * @oaram {boolean} loading
     */
    setLoading(loading) {
      this.loading = loading;
    },
    /**
     * @returns {string[]}
     */
    getDepartmentsAbbr() {
      return this.filter.department.params.map((dept) => dept["abbr"]);
    },
    updateFilter(type, params) {
      console.log(type, params);
      this.filter[type].params = params;
      if (type.toLowerCase() === "department") {
        this.initData();
        this.clearFilter();
      }
      this.$forceUpdate();
    },
    clearFilter() {
      for (const [key, value] of Object.entries(this.filter)) {
        if (key.toLowerCase() === "department") {
          continue;
        }
        value.options = [];
      }
    },

    /**
     *
     * @param list
     * @param type
     * @param params
     */
    async getFilter(list, type, params) {
      params = toRaw(params).map((param) => {
        if (isProxy(param)) {
          return toRaw(param);
        }
      });
      console.log(list);
      switch (type) {
        case "department": {
          break;
        }
        case "level": {
          return filterByLevels(list, params);
        }
        case "instructor": {
          console.log(filterByInstructors(list, params));
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
      getDepartmentName(this.defaultTerm)
        .then((data) => (this.filter.department.options = data))
        .catch((err) => console.log(err));
    },
    getInstructorName: function () {
      let courses = this.getFilteredCourses();
      this.filter.instructor.options = courses.reduce((accumulator, curr) => {
        if (accumulator.includes(curr["instructor"])) {
          return accumulator;
        }
        accumulator.push(curr["instructor"]);
        return accumulator;
      }, []);
    },
    getLevels: function () {
      this.filter.level.options = this.getFilteredCourses().reduce(
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
      this.filter.wqb.options = this.getFilteredCourses().reduce(
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
      this.setLoading(true);
      getTermInfo(this.defaultTerm, this.getDepartmentsAbbr())
        .then((data) => {
          this.unfilteredCourses = data;
        })
        .catch((err) => console.log(err))
        .then(() => {
          this.getDepartment();
          this.getInstructorName();
          this.getLevels();
          this.getWQB();
          console.log(`Current filter: ${this.filter}`);
        });
      this.setLoading(false);
    },
  },
};
</script>

<style scoped></style>
