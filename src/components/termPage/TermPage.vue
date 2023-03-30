<template>
  <div class="min-w-[80%]  pt-4 flex flex-col items-center font-['Proxima_Nova']">
    <header class="w-full h-[80px]"></header>
    <div class="flex font-bold text-4xl flex-row items-center gap-20">
      <button @click="getPrevTerm()">
        <Icon icon="material-symbols:arrow-left" />
      </button>
      <h3 class="font-['Proxima_Nova'] font-bold">{{ term.toUpperCase() }}</h3>
      <button @click="getNextTerm()">
        <Icon icon="material-symbols:arrow-right" />
      </button>
    </div>
    <div class="flex flex-col items-center pt-8 gap-2 w-[90%] max-w-[1400px]">
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
          class="w-[160px]"
          @filter-event="updateFilter"
        />
      </div>
      <p v-else-if="loading.get()">Loading Term Information...</p>
      <TermPageCard
        v-else-if="!loading.get() && !isDepartmentEmpty"
        class=""
        v-for="course in getFilteredCourses"
        v-bind="course"
        :key="course"
      />
    </div>
  </div>
</template>

<script>
import TermPageCard from "./components/TermPageCard.vue";
import TermPageOptions from "./components/filter-components/TermPageOptions.vue";
import { Icon } from "@iconify/vue";
import {
  Department,
  getDepartmentName,
  getTermInfo,
  TermInfo,
} from "@/components/functions/termInfoFunctions";
import {
  filterByCampuses,
  filterByCredits,
  filterByInstructors,
  filterByLevels,
  filterByWqbs,
} from "@/components/functions/termPageFilters";
import FilterButton from "@/components/termPage/components/filter-components/FilterButton.vue";
import { toRaw } from "vue";
import { Terms } from "@/components/functions/termEnum";

export default {
  name: "TermPage",
  components: { Icon, FilterButton, TermPageCard, TermPageOptions },
  beforeMount() {
    this.initData();
  },
  data() {
    return {
      defaultTerm: "Spring 2023",
      updates: 0,
      deptName: [Department],
      loading: {
        value: false,
        get() {
          return this.value;
        },
        set(newVal) {
          console.log(`Loading is set to ${newVal}`);
          this.value = newVal;
        },
      },
      unfilteredCourses: [TermInfo],
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
          options: [],
          params: [],
        },
        wqb: {
          title: "WQB",
          options: [],
          params: [],
        },
        credits: {
          title: "Credits",
          options: [],
          params: [],
        },
      },
    };
  },
  created() {
    this.term = "Spring 2023";
  },
  computed: {
    isDepartmentEmpty() {
      return this.filter.department.params.length === 0;
    },
    /**
     * @returns {[TermInfo]}
     */
    getFilteredCourses: {
      get() {
        let courses = this.unfilteredCourses;
        Object.values(this.filter).forEach((filter) => {
          console.log(`Begin loop at`, filter.title);
          if (!filter.params || filter.title.toLowerCase() === "department") {
            return;
          }
          console.log(` loop not empty:`, filter.title);

          courses = this.getFilter(
            courses,
            filter.title.toLowerCase(),
            filter.params
          );
          console.log(`After filtering through ${filter.title}`, courses);
        });
        console.log(`After finishing the whole loop`, courses);
        this.loading.set(false);
        // hack to re-trigger getFilteredCourses refreshing
        return this.loading ? courses : courses;
      },
    },
  },
  methods: {
    /**
     * @returns {string[]}
     */
    getDepartmentsAbbr() {
      return this.filter.department.params.map((dept) => dept["abbr"]);
    },
    updateFilter(type, params) {
      if (this.filter[type].params === params) {
        return;
      }
      this.loading.set(true);
      this.filter[type].params = params;
      if (type.toLowerCase() === "department") {
        let filteredCourses = this.unfilteredCourses.filter((course) =>
          params.includes(course["courseDept"])
        );
        if(!filteredCourses || filteredCourses.length === 0){
          console.log("no course found. Reloading");
          this.initData();
          this.clearFilter();
        }else {
          console.log("found. Reloading");
          this.unfilteredCourses = filteredCourses;
        }
      }
      console.log("updated");
      this.getFilteredCourses.$forceUpdate;
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
    getFilter(list, type, params) {
      list = toRaw(list);
      switch (type) {
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
        case "credits": {
          console.log("Credits:", list, params);
          return filterByCredits(list, params);
        }
      }
    },
    getPrevTerm() {
      let term = "".concat(
        this.term.match(new RegExp("[a-z]", "gmi")).join("")
      );
      let year = Number.parseInt(
        "".concat(this.term.match(new RegExp("[0-9]", "gmi")).join(""))
      );
      console.log(term);
      let prevTerm = Terms.getPrevTerm(Terms.stringToTerm(term));
      console.log(Terms.getPrevTerm(Terms.stringToTerm(term)));
      if (prevTerm === Terms.Fall) {
        year -= 1;
      }
      this.term = prevTerm.toString() + " " + year;
      this.initData();
      this.clearFilter();
    },
    getNextTerm() {
      let term = "".concat(
        this.term.match(new RegExp("[a-z]", "gmi")).join("")
      );
      let year = Number.parseInt(
        "".concat(this.term.match(new RegExp("[0-9]", "gmi")).join(""))
      );

      let nextTerm = Terms.getPrevTerm(Terms.stringToTerm(term));
      if (nextTerm === Terms.Spring) {
        year += 1;
      }
      this.term = nextTerm.toString() + " " + year;
      this.initData();
      this.clearFilter();
    },
    getDepartment() {
      getDepartmentName(this.term)
        .then((data) => (this.filter.department.options = data))
        .catch((err) => console.log(err));
    },
    getInstructorName: function () {
      let courses = this.getFilteredCourses;
      this.filter.instructor.options = courses.reduce((accumulator, curr) => {
        if (accumulator.includes(curr["instructor"]) || !curr["instructor"]) {
          return accumulator;
        }
        accumulator.push(curr["instructor"]);
        return accumulator;
      }, []);
    },
    getCampus: function () {
      this.filter.campus.options = this.getFilteredCourses.reduce(
        (accum, curr) => {
          const campus = curr.campus;
          if (accum.includes(campus) || !campus) {
            return accum;
          }
          accum.push(campus);
          return accum;
        },
        []
      );
    },
    getLevels: function () {
      this.filter.level.options = this.getFilteredCourses.reduce(
        (accumulator, curr) => {
          let level = Math.floor(parseInt(curr["courseNumber"]) / 100) * 100;
          if (accumulator.includes(level) || !level) {
            return accumulator;
          }
          accumulator.push(level);
          return accumulator;
        },
        []
      );
    },
    getCredits: function () {
      this.filter.credits.options = this.getFilteredCourses.reduce(
        (accumulator, curr) => {
          let level = Number.parseInt(curr["credits"]);
          if (accumulator.includes(level) || !level || isNaN(level)) {
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
          if (accum.includes(wqb) || !wqb) {
            return accum;
          }
          accum.push(wqb);
          return accum;
        },
        []
      );
    },
    initData() {
      this.loading.set(true);
      getTermInfo(this.term, this.getDepartmentsAbbr())
        .then((data) => {
          this.unfilteredCourses = data;
        })
        .catch((err) => console.log(err))
        .then(() => {
          this.getCredits();
          this.getDepartment();
          this.getInstructorName();
          this.getLevels();
          this.getWQB();
          this.getCampus();
        });
      this.loading.set(false);
    },
  },
};
</script>

<style scoped></style>
