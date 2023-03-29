<script>
import InstructorsCard from "./InstructorsCard.vue";
export default {
  props: {
    instructorList: Array,
    loading: Boolean,
  },
  components: {
    InstructorsCard,
  },
  data() {
    return {
      model: 0,
      screenWidth: window.innerWidth,
    };
  },
  computed: {
    slides() {
      let slides = [];
      let numSlides;
      try {
        numSlides = this.instructorList.length;
      } catch (e) {
        numSlides = 0;
      }
      let slidesPerRow;

      if (this.screenWidth < 510) {
        slidesPerRow = 1;
      } else if (this.screenWidth < 900 && this.screenWidth >= 510) {
        slidesPerRow = 2;
      } else if (this.screenWidth < 1024 && this.screenWidth >= 900) {
        slidesPerRow = 4;
      } else {
        slidesPerRow = 6;
      }

      for (let i = 0; i < numSlides; i += slidesPerRow) {
        slides.push(this.instructorList.slice(i, i + slidesPerRow));
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
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
  },
};
</script>
<template>
  <div class="sm:w-[614px]">
    <div class="flex flex-row items-center justify-between mb-2">
      <p class="font-semibold text-[26px] leading-[32px] text-[#302A40]">
        Course Offerings
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
        {{ model + 1 }}
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
      v-if="loading || instructorList === undefined"
      class="bg-[#E9E9E9] p-12 flex flex-row justify-center text-[18px] leading-[115%] text-[#616161] font-normal"
    >
      Unavailable This Semester
    </p>
    <v-carousel
      v-else
      hide-delimiters
      :show-arrows="false"
      v-model="model"
      height="auto"
      class="mb-4 sm:mb-0"
    >
      <v-carousel-item v-for="slide in slides" :key="slide.id">
        <div
          class="flex flex-row sm:flex-wrap flex-start gap-x-[18px] gap-y-[25px]"
        >
          <InstructorsCard
            v-for="instructor in slide"
            :key="instructor.courseSection"
            :instructor="instructor"
          />
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
