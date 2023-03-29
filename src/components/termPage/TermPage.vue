<template>
  <div class="pt-4 flex flex-col items-center">
    <header class="w-full h-[80px]"></header>
    <div class="flex font-bold text-4xl flex-row items-center gap-20">
      <button @click="getPrevTerm()">Previous</button>
      <h3>{{ term.toUpperCase() }}</h3>
      <button @click="getNextTerm()">Next</button>
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
      <p v-else-if="loading.get()" class="font-bold text-3xl">Loading Term Information...</p>
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
import { toRaw } from "vue";
import { Terms } from "@/components/functions/termEnum";
import { getRegistrationTermString } from "../functions/commonFunctions";

export default {
  name: "TermPage",
  components: { FilterButton, TermPageCard, TermPageOptions },
  beforeMount() {
    this.setRegistrationTerm().then(() => {
      this.initData();
    });
  },
  data() {
    return {
      updates: 0,
      deptName: [Department],
      loading: {
        value: false,
        get() {
          console.log(`In get: loading is set to ${this.value}`);
          return this.value;
        },
        set(newVal) {
          this.value = newVal;
          console.log("Loading is now " + this.value);
        },
      },
      unfilteredCourses: [TermInfo],
      term: "Loading...",
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
      },
    };
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
          console.log(`Begin loop`, courses);
          if (!filter.params || filter.title.toLowerCase() === "department") {
            return;
          }
          courses = this.getFilter(
            courses,
            filter.title.toLowerCase(),
            filter.params
          );
          console.log(`After filtering through ${filter.title}`, courses);
        });
        console.log(`After finishing the whole loop`, courses);
        // hack to re-trigger getFilteredCourses refreshing
        return true ? courses : courses;
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
      this.filter[type].params = params;
      if (type.toLowerCase() === "department") {
        this.initData();
        this.clearFilter();
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
      console.log("inGetFilter:", list, params);
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

      let nextTerm = Terms.getNextTerm(Terms.stringToTerm(term));
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
      console.log("in init data");
      getTermInfo(this.term, this.getDepartmentsAbbr())
        .then((data) => {
          this.unfilteredCourses = data;
        })
        .catch((err) => console.log(err))
        .then(() => {
          this.getDepartment();
          this.getInstructorName();
          this.getLevels();
          this.getWQB();
          this.getCampus();
        })
        .then(() => {
          console.log("exiting init data");
          this.loading.set(false)});
    },
    async setRegistrationTerm() {
      this.term = await getRegistrationTermString();
    },
  },
};
</script>

<style scoped></style>
