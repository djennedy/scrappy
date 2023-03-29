<script>
import GoBack from "./GoBack.vue";
import CourseInfoUI from "./CourseInfoUI.vue";
// import SaveCourse from "./SaveCourse.vue";
import NumCredits from "./NumCredits.vue";
import WQB from "./WQB.vue";

export default {
  props: {
    currentCourse: Object,
    loading: Boolean,
  },
  components: {
    GoBack,
    CourseInfoUI,
    // SaveCourse,
    NumCredits,
    WQB,
  },
};
</script>

<template>
  <div>
    <GoBack />
    <div class="flex flex-row items-center justify-between pt-[19px] pb-[12px]">
      <CourseInfoUI
        v-if="loading || currentCourse.courseNumber === undefined"
        courseNumber="CMPT 120"
        term="Spring 2023"
        courseName="Introduction to Computing Science and Programming I"
      />
      <CourseInfoUI
        v-else
        :courseNumber="currentCourse.courseNumber"
        :term="currentCourse.term"
        :courseName="currentCourse.courseName"
      />
      <!-- <SaveCourse /> -->
    </div>
    <div class="flex flex-row gap-x-[10px]">
      <NumCredits
        v-if="loading || currentCourse.numCredits === undefined"
        numCredits="3"
      />
      <NumCredits v-else :numCredits="currentCourse.credits" />
      <WQB v-if="loading || currentCourse.wqb === undefined" wqb="Q,B-Sci" />
      <WQB v-else :wqb="currentCourse.wqb" />
    </div>
  </div>
</template>
