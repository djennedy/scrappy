<script>
import "iconify-icon";
import CourseHeader from "./components/CourseHeader.vue";
import InstructorsCard from "./components/InstructorsCard.vue";
import PrevSemesterCard from "./components/PrevSemesterCard.vue";
import CourseDetails from "./components/CourseDetails.vue";
import { getCourseInfo } from "@/components/functions/courseInfoFunctions";

export default {
  name: "CoursePage",
  components: {
    CourseHeader,
    InstructorsCard,
    PrevSemesterCard,
    CourseDetails,
  },
  beforeMount() {
    this.initData();
  },
  data() {
    return {
      defaultTerm: "Spring 2023",
      defaultCourseNumber: "CMPT 120",
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

    <!-- <div class="flex flex-row mt-[35px]">
      <div class="w-[614px]">
        <div class="flex flex-row items-center justify-between h-[46px] mb-2">
          <p class="font-semibold text-[26px] leading-[32px] text-[#302A40]">
            Course Offerings
          </p>
          <div class="flex flex-row items-center">
            <v-btn
              variant="plain"
              @click="model = Math.max(numCourses - 1, 0)"
              size="x-small"
            >
              <iconify-icon
                icon="fluent:triangle-left-48-filled"
                color="#d9d9d9"
                width="21"
                height="21"
              />
            </v-btn>
            {{ numCourses }}
            <v-btn
              variant="plain"
              @click="
                model = Math.min(
                  numCourses + 1,
                  currentCourse.instructorsCards.length / 6 - 1
                )
              "
              size="x-small"
            >
              <iconify-icon
                icon="fluent:triangle-right-48-filled"
                color="#d9d9d9"
                width="21"
                height="21"
              />
            </v-btn>
          </div>
        </div>
        <v-carousel hide-delimiters :show-arrows="false" v-model="numCourses">
          <div class="flex flex-wrap flext-start gap-x-[18px] gap-y-[25px]">
            <InstructorsCard
              v-for="instructor in currentCourse.instructorsCards"
              :key="instructor.courseSection"
              :instructor="instructor"
            />
          </div>
        </v-carousel>
      </div>

      <div class="w-[450px] justify-end ml-[140px] box-border">
        <div
          class="flex flex-auto flex-row items-center justify-between h-[46px] mb-2"
        >
          <p class="font-semibold text-[26px] leading-[32px] text-[#302A40]">
            Previous Semesters
          </p>
          <div class="flex flex-row items-center">
            <v-btn
              variant="plain"
              @click="model = Math.max(numCourses - 1, 0)"
              size="x-small"
            >
              <iconify-icon
                icon="fluent:triangle-left-48-filled"
                color="#d9d9d9"
                width="21"
                height="21"
              />
            </v-btn>
            {{ numSemesters }}
            <v-btn
              variant="plain"
              @click="
                model = Math.min(
                  numCourses + 1,
                  currentCourse.previousSemestersCards.length / 6 - 1
                )
              "
              size="x-small"
            >
              <iconify-icon
                icon="fluent:triangle-right-48-filled"
                color="#d9d9d9"
                width="21"
                height="21"
              />
            </v-btn>
          </div>
        </div>
        <v-carousel hide-delimiters :show-arrows="false" v-model="numSemesters">
          <div class="flex flex-wrap gap-x-[30px] gap-y-[18px]">
            <PrevSemesterCard
              v-for="prevSemester in currentCourse.previousSemestersCards.slice(
                0,
                6
              )"
              :key="prevSemester.courseSection"
              :prevSemester="prevSemester"
            />
          </div>
        </v-carousel>
      </div>
    </div> -->

    <CourseDetails :currentCourse="currentCourse" :loading="loading" />
  </div>
</template>
