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
  <a
    class="box-border w-[207px] min-h-[142px] flex flex-col border-[1px] border-black border-solid rounded-[10px] font-normal"
    :href="prevSemester.outlineLink"
    target="_blank"
  >
    <div class="w-[207px] h-[35px] bg-[#616161] flex flex-col rounded-t-[10px]">
      <p
        class="font-semibold text-[22px] leading-[27px] text-white w-[169px] max-h-[25px] ml-[11px] my-[5px]"
      >
        {{ prevSemester.termString.toUpperCase() }}
      </p>
    </div>
    <div class="mx-[11px] text-[16px] leading-[115%] my-[5px] space-y-4">
      <InstructorCampus
        v-for="(
          instructorCampus, index
        ) in prevSemester.instructorCampusList.slice(0, 2)"
        :key="index"
        :instructorCampus="instructorCampus"
      />
    </div>
  </a>
</template>
