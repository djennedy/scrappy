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
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        this.initData(toParams.coursenum);
      }
    )
    this.initData(this.$route.params.coursenum);
  },
  data() {
    return {
      courseNumber: this.$route.params.coursenum,
      currentCourse: {},
      section: null,
      loading: true,
    };
  },
  methods: {
    initData(courseNum) {
      getCourseInfo(courseNum)
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
  <div
    class="sm:mb-[150px] max-w-[1280px] p-10 mx-auto lg:pt-[100px] pt-[150px]"
  >
    <CourseHeader :currentCourse="currentCourse" :loading="loading" />

    <div class="flex flex-col sm:flex-row mt-[35px]">
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
