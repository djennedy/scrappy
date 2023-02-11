<script>
import InstructorsCard from "./InstructorsCard.vue";
export default {
  props: {
    currentCourse: Object,
  },
  components: {
    InstructorsCard,
  },
  data() {
    return {
      numCourses: 0,
    };
  },
};
</script>
<template>
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
</template>
