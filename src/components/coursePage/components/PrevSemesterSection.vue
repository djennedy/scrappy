<script>
import PrevSemesterCard from "./PrevSemesterCard.vue";
export default {
  props: {
    prevSemesterList: Array,
    loading: Boolean,
  },
  components: {
    PrevSemesterCard,
  },
  data() {
    return {
      model: 0,
    };
  },
  computed: {
    slides() {
      let slides = [];
      let numSemesters;
      try {
        numSemesters = this.prevSemesterList.length;
      } catch (e) {
        numSemesters = 0;
      }
      for (let i = 0; i < numSemesters; i += 6) {
        slides.push(this.prevSemesterList.slice(i, i + 6));
      }
      return slides;
    },
    numSlides() {
      try {
        return this.slides.length;
      } catch (e) {
        return 0;
      }
    },
  },
};
</script>

<template>
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
          @click="model = Math.max(model - 1, 0)"
          size="x-small"
        >
          <iconify-icon
            icon="fluent:triangle-left-48-filled"
            color="#d9d9d9"
            width="21"
            height="21"
          />
        </v-btn>
        {{ model }}
        <v-btn
          variant="plain"
          @click="model = Math.min(model + 1, numSlides - 1)"
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
    <p
      v-if="loading || prevSemesterList === undefined"
      class="bg-[#E9E9E9] p-12 flex flex-row justify-center text-[18px] leading-[115%] text-[#616161] font-normal"
    >
      No Previous Offerings
    </p>
    <v-carousel v-else hide-delimiters :show-arrows="false" v-model="model">
      <v-carousel-item v-for="slide in slides" :key="slide.id">
        <div class="flex flex-wrap flext-start gap-x-[18px] gap-y-[25px]">
          <PrevSemesterCard
            v-for="semester in slide"
            :key="semester.termString"
            :prevSemester="semester"
          />
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
