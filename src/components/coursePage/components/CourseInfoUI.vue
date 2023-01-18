<script>
export default {
  props: {
    term: String,
    courseNumber: String,
    courseName: String,
  },
  computed: {
    courseNameUpper: function () {
      return this.courseName.toUpperCase();
    },
  },
};
</script>

<template>
  <div class="max-w-[676px] max-height-[128px]">
    <h2 class="font-normal text-[#B0001A] text-[18px] leading-[115%] mb-0">
      {{ term }} - {{ courseNumber }}
    </h2>
    <h1 class="font-semibold text-[32px] leading-[39px] mt-[9.34px] mb-[12px]">
      {{ courseNameUpper }}
    </h1>
  </div>
</template>
