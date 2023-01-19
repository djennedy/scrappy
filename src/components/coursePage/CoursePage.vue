<script>
import "iconify-icon";
import InstructorsCard from "./components/InstructorsCard.vue";
import PrevSemesterCard from "./components/PrevSemesterCard.vue";
import GoBack from "./components/GoBack.vue";
import CourseInfoUI from "./components/CourseInfoUI.vue";
import SaveCourse from "./components/SaveCourse.vue";
import NumCredits from "./components/NumCredits.vue";
import WQB from "./components/WQB.vue";
import CourseParagraph from "./components/CourseParagraph.vue";
import {
  CourseInfo,
  GradingScheme,
  SectionSpecificInfo,
  InstructorCampus,
  InstructorCardInfo,
  PreviousSemestersCardInfo,
  getCourseInfo,
} from "@/components/functions/courseInfoFunctions";

export default {
  name: "CoursePage",
  components: {
    InstructorsCard,
    PrevSemesterCard,
    GoBack,
    CourseInfoUI,
    SaveCourse,
    NumCredits,
    WQB,
    CourseParagraph,
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
      dividedPrevSemesters: [],
    };
  },
  methods: {
    // getDividedPrevSemesters() {
    //   let numPrevSemestersPerTab = 6;
    //   let dividedPrevSemesters = [];
    //   let prevSemesters = this.currentCourse.previousSemesters;
    //   let numPrevSemesters = prevSemesters.length;
    //   for (let i = 0; i < numPrevSemesters; i += numPrevSemestersPerTab) {
    //     dividedPrevSemesters.push(
    //       prevSemesters.slice(i, i + numPrevSemestersPerTab)
    //     );
    //   }
    //   return dividedPrevSemesters;
    // },
    initData() {
      getCourseInfo(this.defaultCourseNumber)
        .then((data) => {
          this.currentCourse = data;
          // this.dividedPrevSemesters = this.getDividedPrevSemesters();
          console.log(this.dividedPrevSemesters);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<template>
  <div class="mb-[150px] max-w-[1280px] p-10 mx-auto mt-12">
    <GoBack />
    <div class="flex flex-row items-center justify-between pt-[19px] pb-[12px]">
      <CourseInfoUI
        :courseNumber="currentCourse.courseNumber"
        :term="currentCourse.term"
        :courseName="currentCourse.courseName"
      />
      <SaveCourse />
    </div>
    <div class="flex flex-row gap-x-[10px]">
      <NumCredits :numCredits="currentCourse.credits" />
      <WQB :wqb="currentCourse.wqb" />
    </div>

    <div class="flex flex-row mt-[35px]">
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
        <div class="flex flex-row items-center justify-between h-[46px] mb-2">
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
              v-for="prevSemester in currentCourse.previousSemestersCards.slice(0,6)"
              :key="prevSemester.courseSection"
              :prevSemester="prevSemester"
            />
          </div>
        </v-carousel>
      </div>
    </div>

    <div class="mt-[24px] space-y-[35.57px]">
      <CourseParagraph
        header="Calendar Description"
        :rawHtml="currentCourse.calendarDescription"
      />
      <CourseParagraph
        header="Pre-requisites"
        :rawHtml="currentCourse.prerequisites"
      />

      <v-tabs v-model="section" color="#D3001F" class="rounded-lg">
        <v-tab
          class="ma-0 pa-0 w-[38px]"
          v-for="section in currentCourse.sectionSpecificInfo"
          :key="section.courseSection"
        >
          <div class="text-[16px] leading-[115%]">
            {{ section.courseSection }}
          </div>
        </v-tab>
      </v-tabs>

      <v-window v-model="section">
        <v-window-item
          v-for="section in currentCourse.sectionSpecificInfo"
          :key="section.courseSection"
        >
          <div class="space-y-[35.57px]">
            <CourseParagraph
              header="Course Details"
              :rawHtml="section.courseDetail"
            />
            <CourseParagraph
              header="Educational Goals"
              :rawHtml="section.educationalGoals"
            />
            <CourseParagraph
              header="Materials + Supplies"
              :rawHtml="section.materialSupplies"
            />
            <CourseParagraph header="Grading" :rawHtml="section.gradingNotes" />
          </div>
        </v-window-item>
      </v-window>
    </div>
  </div>
</template>
