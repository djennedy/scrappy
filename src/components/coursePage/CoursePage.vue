<script>
import "iconify-icon";
import CourseHeader from "./components/CourseHeader.vue";
import PrevSemesterSection from "./components/PrevSemesterSection.vue";
import CourseDetails from "./components/CourseDetails.vue";
import InstructorsSection from "./components/InstructorsSection.vue";
import { getCourseInfo } from "@/components/functions/courseInfoFunctions";

export default {
  name: "CoursePage",
  components: {
    CourseHeader,
    InstructorsSection,
    PrevSemesterSection,
    CourseDetails,
  },
  beforeMount() {
    this.initData();
  },
  data() {
    return {
      defaultTerm: "Spring 2023",
      defaultCourseNumber: "CMPT 276",
      defaultWQB: "B-Sci/Q",
      defaultCredits: 3,
      defaultCourseName: "Introduction to Computing Science and Programming I",
      currentCourse: {},
      numCourses: 0,
      numSemesters: 0,
      section: null,
      loading: true,
    };
  },
  methods: {
    initData() {
      getCourseInfo(this.defaultCourseNumber)
        .then((data) => {
          this.currentCourse = data;
        })
        .catch((err) => console.log(err))
      .finally(() => (this.loading = false));
    },
  },
};
</script>

<template>
  <div class="mb-[150px] max-w-[1280px] p-10 mx-auto mt-12">
    <CourseHeader :currentCourse="currentCourse" :loading="loading" />

    <div class="flex flex-row mt-[35px]">
      <InstructorsSection
        :instructorList="currentCourse.instructorsCards"
        :loading="loading"
      />

      <PrevSemesterSection
        :prevSemesterList="currentCourse.previousSemestersCards"
        :loading="loading"
      />
    </div>

    <CourseDetails :currentCourse="currentCourse" :loading="loading" />
  </div>
</template>
