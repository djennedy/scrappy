<script>
import InstructorsCard from "./components/InstructorsCard.vue";
import PrevSemesterCard from "./components/PrevSemesterCard.vue";
import GoBack from "./components/GoBack.vue";
import CourseInfo from "./components/CourseInfo.vue";
import SaveCourse from "./components/SaveCourse.vue";
import NumCredits from "./components/NumCredits.vue";
import WQB from "./components/WQB.vue";

export default {
  components: {
    InstructorsCard,
    PrevSemesterCard,
    GoBack,
    CourseInfo,
    SaveCourse,
    NumCredits,
    WQB,
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
    <div class="flex flex-row mt-[35px]">
      <div class="w-[60%]">
        <p
          class="font-semibold text-[26px] leading-[32px] text-[#302A40] h-[46px]"
        >
          Course Offerings
        </p>
        <div class="flex flex-wrap flext-start gap-x-[18px] gap-y-[25px]">
          <InstructorsCard
            v-for="instructor in instructors"
            :key="instructor.id"
            :instructor="instructor"
          />
        </div>
      </div>
      <div class="w-[40%] justify-end ml-[101px] box-border">
        <p
          class="font-semibold text-[26px] leading-[32px] text-[#302A40] h-[46px]"
        >
          Previous Semesters
        </p>
        <div class="flex flex-wrap gap-x-[30px] gap-y-[18px]">
          <PrevSemesterCard
            v-for="prevSemester in prevSemesters"
            :key="prevSemester.id"
            :prevSemester="prevSemester"
          />
        </div>
      </div>
    </div>
    <div class="mt-[24px] space-y-[35.57px]">
      <div>
        <h3
          class="font-semibold text-[26px] leading-[32px] text-[#6F6F6F] mb-[10px]"
        >
          Calender Description
        </h3>
        <p
          class="font-normal text-[18px] leading-[115%] text-black"
          v-html="courseDescription.description"
        ></p>
      </div>
      <div>
        <h3
          class="font-semibold text-[26px] leading-[32px] text-[#6F6F6F] mb-[10px]"
        >
          Pre-requisites
        </h3>
        <p
          class="font-normal text-[18px] leading-[115%] text-black"
          v-html="courseDescription.description"
        ></p>
      </div>
      <div>
        <h3
          class="font-semibold text-[26px] leading-[32px] text-[#6F6F6F] mb-[10px]"
        >
          Course Detail
        </h3>
        <p
          class="font-normal text-[18px] leading-[115%] text-black"
          v-html="courseDescription.description"
        ></p>
      </div>
      <div>
        <h3
          class="font-semibold text-[26px] leading-[32px] text-[#6F6F6F] mb-[10px]"
        >
          Educational Goals
        </h3>
        <p
          class="font-normal text-[18px] leading-[115%] text-black"
          v-html="courseDescription.description"
        ></p>
      </div>
      <div>
        <h3
          class="font-semibold text-[26px] leading-[32px] text-[#6F6F6F] mb-[10px]"
        >
          Materials + Supplies
        </h3>
        <p
          class="font-normal text-[18px] leading-[115%] text-black"
          v-html="courseDescription.description"
        ></p>
      </div>
      <div>
        <h3
          class="font-semibold text-[26px] leading-[32px] text-[#6F6F6F] mb-[10px]"
        >
          Grading
        </h3>
        <p
          class="font-normal text-[18px] leading-[115%] text-black"
          v-html="courseDescription.description"
        ></p>
      </div>
    </div>
  </div>
</template>
