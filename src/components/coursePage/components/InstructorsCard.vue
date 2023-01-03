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
    <div class="flex items-center space-x-2.5 text-base mb-2">
      <p>{{ instructor.section }}</p>
      <iconify-icon icon="bi:question-circle" />
    </div>
    <p class="font-medium text-sm mt-0 mb-4">{{ instructor.instructor }}</p>
    <div class="space-y-4">
      <!-- <p class="text-xs">Mo 12:30PM - 1:20PM WMC 3520, Burnaby</p>
      <p class="text-xs">Th 12:30PM - 2:20PM RCB IMAGTH, Burnaby</p> -->
      <TimeLocation
        v-for="timeLocation in instructor.timeLocations"
        :key="timeLocation.id"
        :timeLocation="timeLocation"
      />
    </div>
  </div>
</template>
