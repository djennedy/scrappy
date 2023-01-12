<script>
import InstructorCampus from "./InstructorCampus.vue";

export default {
  props: {
    prevSemester: Object,
  },
  components: {
    InstructorCampus,
  },
};
</script>

<template>
  <div
    class="box-border max-w-[189px] max-h-[142px] flex flex-col border-[1px] border-[#000000] border-solid rounded-[10px] font-normal"
  >
    <div
      class="max-w-[189px] max-h-[35px] bg-[#616161] flex flex-col rounded-t-[10px]"
    >
      <p
        class="font-semibold text-[22px] leading-[27px] text-white w-[169px] max-h-[25px] ml-[11px] my-[5px]"
      >
        {{ prevSemester.term.toUpperCase() }}
      </p>
    </div>
    <div class="ml-[11px] text-[16px] leading-[115%] my-[5px] space-y-4">
      <InstructorCampus
        v-for="instructorCampus in prevSemester.instructorCampus"
        :key="instructorCampus.id"
        :instructorCampus="instructorCampus"
      />
    </div>
  </div>
</template>
