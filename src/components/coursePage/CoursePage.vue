<script>
import InstructorsCard from "./components/InstructorsCard.vue";
import PrevSemesterCard from "./components/PrevSemesterCard.vue";
import GoBack from "./components/GoBack.vue";
import CourseInfo from  "./components/CourseInfo.vue";
import SaveCourse from "./components/SaveCourse.vue";

export default {
  components: {
    InstructorsCard,
    PrevSemesterCard,
    GoBack,
    CourseInfo,
    SaveCourse,
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
          section: "D200",
          instructor: "Hazra Imran",
          timeLocations: [
            "Mo 12:30PM - 1:20PM WMC 3520, Burnaby",
            "Th 12:30PM - 2:20PM RCB IMAGTH, Burnaby",
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
      ],
    };
  },
};
</script>

<template>
  <!-- <div class="flex flex-wrap items-center gap-4"> -->
  <div>
    <GoBack />
    <div class="flex flex-row items-center justify-between pt-[19px]">
      <CourseInfo />
      <SaveCourse />
    </div>
    <!-- <InstructorsCard
      v-for="instructor in instructors"
      :key="instructor.id"
      :instructor="instructor"
    />
    <PrevSemesterCard
      v-for="prevSemester in prevSemesters"
      :key="prevSemester.id"
      :prevSemester="prevSemester"
    /> -->
  </div>
</template>
