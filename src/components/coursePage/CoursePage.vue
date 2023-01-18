<script>
import "iconify-icon";
import InstructorsCard from "./components/InstructorsCard.vue";
import PrevSemesterCard from "./components/PrevSemesterCard.vue";
import GoBack from "./components/GoBack.vue";
import CourseInfo from "./components/CourseInfo.vue";
import SaveCourse from "./components/SaveCourse.vue";
import NumCredits from "./components/NumCredits.vue";
import WQB from "./components/WQB.vue";
import CourseParagraph from "./components/CourseParagraph.vue";

export default {
  components: {
    InstructorsCard,
    PrevSemesterCard,
    GoBack,
    CourseInfo,
    SaveCourse,
    NumCredits,
    WQB,
    CourseParagraph,
  },
  data() {
    return {
      instructors: [
        {
          id: 1,
          section: "D200",
          instructor: "Hazra Imran",
          timeLocations: [
            "Mo 12:30PM - 1:20PM WMC 3520, Burnaby",
            "Th 12:30PM - 2:20PM RCB IMAGTH, Burnaby",
          ],
        },
        {
          id: 2,
          section: "D100",
          instructor: "Harinder Khangura",
          timeLocations: [
            "We 9:30AM – 10:20AM SRYE 3016, Surrey",
            "Fr 8:30AM – 10:20AM SRYE 3016, Surrey",
          ],
        },
        {
          id: 3,
          section: "D200",
          instructor: "Hazra Imran",
          timeLocations: [
            "Mo 12:30PM - 1:20PM WMC 3520, Burnaby",
            "Th 12:30PM - 2:20PM RCB IMAGTH, Burnaby",
          ],
        },
        {
          id: 4,
          section: "D100",
          instructor: "Harinder Khangura",
          timeLocations: [
            "We 9:30AM – 10:20AM SRYE 3016, Surrey",
            "Fr 8:30AM – 10:20AM SRYE 3016, Surrey",
          ],
        },
        {
          id: 5,
          section: "D100",
          instructor: "Harinder Khangura",
          timeLocations: [
            "We 9:30AM – 10:20AM SRYE 3016, Surrey",
            "Fr 8:30AM – 10:20AM SRYE 3016, Surrey",
          ],
        },
      ],
      prevSemesters: [
        {
          id: 1,
          term: "Fall 2022",
          instructorCampus: [
            {
              instructor: "Hazra Imran",
              campus: "Burnaby",
            },
            {
              instructor: "Harinder Khangura",
              campus: "Surrey",
            },
          ],
          outlineLink:
            "https://www.sfu.ca/students/calendar/2022/fall/courses/cmpt/300.html",
        },
        {
          id: 2,
          term: "Fall 2022",
          instructorCampus: [
            {
              instructor: "Hazra Imran",
              campus: "Burnaby",
            },
            {
              instructor: "Harinder Khangura",
              campus: "Surrey",
            },
          ],
          outlineLink:
            "https://www.sfu.ca/students/calendar/2022/fall/courses/cmpt/300.html",
        },
        {
          id: 3,
          term: "Fall 2022",
          instructorCampus: [
            {
              instructor: "Hazra Imran",
              campus: "Burnaby",
            },
            {
              instructor: "Harinder Khangura",
              campus: "Surrey",
            },
          ],
          outlineLink:
            "https://www.sfu.ca/students/calendar/2022/fall/courses/cmpt/300.html",
        },
        {
          id: 4,
          term: "Fall 2022",
          instructorCampus: [
            {
              instructor: "Hazra Imran",
              campus: "Burnaby",
            },
            {
              instructor: "Harinder Khangura",
              campus: "Surrey",
            },
          ],
          outlineLink:
            "https://www.sfu.ca/students/calendar/2022/fall/courses/cmpt/300.html",
        },
        {
          id: 5,
          term: "Fall 2022",
          instructorCampus: [
            {
              instructor: "Hazra Imran",
              campus: "Burnaby",
            },
            {
              instructor: "Harinder Khangura",
              campus: "Surrey",
            },
          ],
          outlineLink:
            "https://www.sfu.ca/students/calendar/2022/fall/courses/cmpt/300.html",
        },
        {
          id: 6,
          term: "Fall 2022",
          instructorCampus: [
            {
              instructor: "Hazra Imran",
              campus: "Burnaby",
            },
            {
              instructor: "Harinder Khangura",
              campus: "Surrey",
            },
          ],
          outlineLink:
            "https://www.sfu.ca/students/calendar/2022/fall/courses/cmpt/300.html",
        },
      ],
      courseDescription: {
        id: 1,
        description:
          "faucibus orci id gravida dui vehicula, lobortis, ipsum felis, ex. non non. placerat elementum sollicitudin. dui vel risus odio Nunc non, gravida eget laoreet quam Ut nec eget in dui. ipsum commodo Vestibulum elit odio Ut Donec sit vitae nisi odio vitae laoreet maximus odio faucibus faucibus malesuada nec ex adipiscing commodo elit dui facilisis elit at, quis vitae dui viverra non faucibus amet, Sed nisi quis fringilla ullamcorper vitae amet, vel placerat varius nec at at orci vitae Cras amet, nec placerat non elit Lorem placerat scelerisque nulla, laoreet Sed hendrerit quis elit. luctus consectetur in vitae Nunc placerat. eget faucibus non, malesuada leo. quis volutpat commodo Ut non. urna. dui. porta sit amet, vehicula, elementum elementum quis non, Morbi laoreet vehicula, eget venenatis ",
        prereq:
          "faucibus orci id gravida dui vehicula, lobortis, ipsum felis, ex. non non. placerat elementum sollicitudin. dui vel risus odio Nunc non, gravida eget laoreet quam Ut nec eget in dui. ipsum commodo Vestibulum elit odio Ut Donec sit vitae nisi odio vitae laoreet maximus odio faucibus faucibus malesuada nec ex adipiscing commodo elit dui facilisis elit at, quis vitae dui viverra non faucibus amet, Sed nisi quis fringilla ullamcorper vitae amet, vel placerat varius nec at at orci vitae Cras amet, nec placerat non elit Lorem placerat scelerisque nulla, laoreet Sed hendrerit quis elit. luctus consectetur in vitae Nunc placerat. eget faucibus non, malesuada leo. quis volutpat commodo Ut non. urna. dui. porta sit amet, vehicula, elementum elementum quis non, Morbi laoreet vehicula, eget venenatis ",
        detail:
          "faucibus orci id gravida dui vehicula, lobortis, ipsum felis, ex. non non. placerat elementum sollicitudin. dui vel risus odio Nunc non, gravida eget laoreet quam Ut nec eget in dui. ipsum commodo Vestibulum elit odio Ut Donec sit vitae nisi odio vitae laoreet maximus odio faucibus faucibus malesuada nec ex adipiscing commodo elit dui facilisis elit at, quis vitae dui viverra non faucibus amet, Sed nisi quis fringilla ullamcorper vitae amet, vel placerat varius nec at at orci vitae Cras amet, nec placerat non elit Lorem placerat scelerisque nulla, laoreet Sed hendrerit quis elit. luctus consectetur in vitae Nunc placerat. eget faucibus non, malesuada leo. quis volutpat commodo Ut non. urna. dui. porta sit amet, vehicula, elementum elementum quis non, Morbi laoreet vehicula, eget venenatis ",
        goals:
          "faucibus orci id gravida dui vehicula, lobortis, ipsum felis, ex. non non. placerat elementum sollicitudin. dui vel risus odio Nunc non, gravida eget laoreet quam Ut nec eget in dui. ipsum commodo Vestibulum elit odio Ut Donec sit vitae nisi odio vitae laoreet maximus odio faucibus faucibus malesuada nec ex adipiscing commodo elit dui facilisis elit at, quis vitae dui viverra non faucibus amet, Sed nisi quis fringilla ullamcorper vitae amet, vel placerat varius nec at at orci vitae Cras amet, nec placerat non elit Lorem placerat scelerisque nulla, laoreet Sed hendrerit quis elit. luctus consectetur in vitae Nunc placerat. eget faucibus non, malesuada leo. quis volutpat commodo Ut non. urna. dui. porta sit amet, vehicula, elementum elementum quis non, Morbi laoreet vehicula, eget venenatis ",
        materials:
          "faucibus orci id gravida dui vehicula, lobortis, ipsum felis, ex. non non. placerat elementum sollicitudin. dui vel risus odio Nunc non, gravida eget laoreet quam Ut nec eget in dui. ipsum commodo Vestibulum elit odio Ut Donec sit vitae nisi odio vitae laoreet maximus odio faucibus faucibus malesuada nec ex adipiscing commodo elit dui facilisis elit at, quis vitae dui viverra non faucibus amet, Sed nisi quis fringilla ullamcorper vitae amet, vel placerat varius nec at at orci vitae Cras amet, nec placerat non elit Lorem placerat scelerisque nulla, laoreet Sed hendrerit quis elit. luctus consectetur in vitae Nunc placerat. eget faucibus non, malesuada leo. quis volutpat commodo Ut non. urna. dui. porta sit amet, vehicula, elementum elementum quis non, Morbi laoreet vehicula, eget venenatis ",
        grading:
          "faucibus orci id gravida dui vehicula, lobortis, ipsum felis, ex. non non. placerat elementum sollicitudin. dui vel risus odio Nunc non, gravida eget laoreet quam Ut nec eget in dui. ipsum commodo Vestibulum elit odio Ut Donec sit vitae nisi odio vitae laoreet maximus odio faucibus faucibus malesuada nec ex adipiscing commodo elit dui facilisis elit at, quis vitae dui viverra non faucibus amet, Sed nisi quis fringilla ullamcorper vitae amet, vel placerat varius nec at at orci vitae Cras amet, nec placerat non elit Lorem placerat scelerisque nulla, laoreet Sed hendrerit quis elit. luctus consectetur in vitae Nunc placerat. eget faucibus non, malesuada leo. quis volutpat commodo Ut non. urna. dui. porta sit amet, vehicula, elementum elementum quis non, Morbi laoreet vehicula, eget venenatis ",
      },
      numCourses: 0,
      numSemesters: 0,
    };
  },
};
</script>

<template>
  <div class="mb-[150px]">
    <GoBack />
    <div class="flex flex-row items-center justify-between pt-[19px] pb-[12px]">
      <CourseInfo />
      <SaveCourse />
    </div>
    <div class="flex flex-row gap-x-[10px]">
      <NumCredits />
      <WQB />
    </div>

    <!--  Course Offerings Component -->
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
                model = Math.min(numCourses + 1, instructors.length / 6 - 1)
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
              v-for="instructor in instructors"
              :key="instructor.id"
              :instructor="instructor"
            />
          </div>
        </v-carousel>
      </div>

      <!-- Previous Semester Component -->
      <div class="w-[450px] justify-end ml-[150px] box-border">
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
            {{ numCourses }}
            <v-btn
              variant="plain"
              @click="
                model = Math.min(numCourses + 1, prevSemesters.length / 6 - 1)
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
              v-for="prevSemester in prevSemesters"
              :key="prevSemester.id"
              :prevSemester="prevSemester"
            />
          </div>
        </v-carousel>
      </div>
    </div>

    <!-- Course Details  -->
    <div class="mt-[24px] space-y-[35.57px]">
      <CourseParagraph
        header="Calendar Description"
        :rawHtml="courseDescription.description"
      />
      <CourseParagraph
        header="Pre-requisites"
        :rawHtml="courseDescription.description"
      />

      <v-tabs v-model="section" color="#D3001F" class="rounded-lg">
        <v-tab value="D100" class="ma-0 pa-0 w-[38px]">
          <div class="text-[16px] leading-[115%]">D100</div>
        </v-tab>
        <v-tab value="D200" class="ma-0 pa-0 w-[38px]">
          <div class="text-[16px] leading-[115%]">D200</div>
        </v-tab>
        <v-tab value="D300" class="ma-0 pa-0 w-[38px]">
          <div class="text-[16px] leading-[115%]">D300</div>
        </v-tab>
      </v-tabs>

      <v-window v-model="section">
        <div class="space-y-[35.57px]">
          <CourseParagraph
            header="Course Details"
            :rawHtml="courseDescription.description"
          />
          <CourseParagraph
            header="Educational Goals"
            :rawHtml="courseDescription.description"
          />
          <CourseParagraph
            header="Materials + Supplies"
            :rawHtml="courseDescription.description"
          />
          <CourseParagraph
            header="Grading"
            :rawHtml="courseDescription.description"
          />
        </div>
      </v-window>
    </div>
  </div>
</template>
