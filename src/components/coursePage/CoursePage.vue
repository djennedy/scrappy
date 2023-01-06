<script>
import InstructorsCard from "./components/InstructorsCard.vue";
import PrevSemesterCard from "./components/PrevSemesterCard.vue";

export default {
  components: {
    InstructorsCard,
    PrevSemesterCard,
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
    };
  },
};
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <!-- <InstructorsCard
      v-for="instructor in instructors"
      :key="instructor.id"
      :instructor="instructor"
    /> -->
    <PrevSemesterCard />
  </div>
</template>
