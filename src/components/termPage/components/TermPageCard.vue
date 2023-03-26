<template>
  <!--  Term Page Course Card-->
  <div class=" w-full
  grid grid-rows-1 grid-cols-9 gap-6 justify-between border-[1px] border-[#E4E4E4]
   rounded-[8px] px-4 py-6">
    <div class=" col-span-5 flex flex-row justify-start gap-4 items-center flex-1">
      <p class="font-bold text-xl">{{ courseDept + " " + courseNumber ? courseNumber : '' }}</p>
      <p class="font-semibold">{{ courseName ? courseName : "" }}</p>
    </div>
    <div class=" col-span-3 grid grid-cols-4 grid-rows-1 justify-center items-center content-center flex-1 [&>p]:text-center">
      <p>{{ instructor }}</p>
      <p>{{ campus }}</p>
      <p>{{ wqb }}</p>
      <p>{{ credits }}</p>
    </div>
    <div class="col-span-1 flex flex-row justify-end items-center">
      <button class="
     p-1.5 border-2 border-blue-500 rounded-[4px] bg-blue-500 text-white font-bold">
        Details
      </button>
    </div>
  </div>
</template>

<script>
import "../../../assets/main.css";
import {TermInfo} from "@/components/functions/termInfoFunctions";
export default {
  name: "termPageCard",
  props: {
    courseDept: String,
    courseNumber: String,
    courseName: String,
    instructor: String,
    campus: String,
    wqb: String,
    credits: String,
  },
};
</script>

<style scoped></style>