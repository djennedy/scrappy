<template>
  <!--  Term Page Course Card-->
  <div class="
  flex flex-row justify-between border-[1px] border-[#E4E4E4]
   rounded-[8px] px-4 py-6 min-w-[736px] max-w-[850px] w-full">
    <div class="flex flex-row justify-start gap-4 items-center flex-1">
      <p class="font-bold text-xl">{{ courseNumber }}</p>
      <p class="font-semibold">{{ courseName }}</p>
    </div>
    <div class="flex flex-row justify-center items-center gap-6 flex-1">
      <p>{{ instructor }}</p>
      <p>{{ campusLocation }}</p>
      <p>{{ wqbDesignation }}</p>
      <p>{{ creditsNum }}</p>
    </div>
    <button class="
    p-1.5 border-2 border-blue-500 rounded-[4px] bg-blue-500 text-white font-bold">
      Details
    </button>
  </div>
</template>

<script>
import "../../../assets/main.css";
export default {
  name: "termPageCard",
  props: {
    courseNumber: String,
    courseName: String,
    instructor: String,
    campusLocation: String,
    wqbDesignation: String,
    creditsNum: Number,
  },
};
</script>

<style scoped></style>