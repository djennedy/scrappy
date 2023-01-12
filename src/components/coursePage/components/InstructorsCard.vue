<script>
import "iconify-icon";
import TimeLocation from "./TimeLocation.vue";

export default {
  props: {
    instructor: Object,
  },
  components: {
    TimeLocation,
  },
};
</script>

<template>
  <div
    class="box-border max-w-[190px] max-h-[214px] flex flex-col border-[1px] border-[#000000] border-solid rounded-[10px] pl-2.5 pt-3 pb-5 font-normal"
  >
    <div class="flex items-center space-x-2.5 text-[20px] leading-[24px] mb-2">
      <p>{{ instructor.section }}</p>
      <iconify-icon icon="bi:question-circle" />
    </div>
    <p class="font-medium text-[18px] leading-[22px] mt-0 mb-4">
      {{ instructor.instructor }}
    </p>
    <div class="space-y-4">
      <TimeLocation
        v-for="timeLocation in instructor.timeLocations"
        :key="timeLocation.id"
        :timeLocation="timeLocation"
      />
    </div>
  </div>
</template>
