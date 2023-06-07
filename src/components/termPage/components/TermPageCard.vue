<template>
  <!--  Term Page Course Card-->
  <div
    class="text-lg w-full grid grid-rows-1 grid-cols-9 gap-6 justify-between border-[1px] border-[#E4E4E4] rounded-[8px] px-4 py-6"
  >
    <div
      class="col-span-5 flex flex-row justify-start gap-4 items-center flex-1"
    >
      <p class="font-bold text-2xl">
        {{
          courseDept.toUpperCase() +
          " " +
          (courseNumber ? courseNumber.toUpperCase() : "")
        }}
      </p>
      <p class="">{{ courseName ? courseName : "" }}</p>
    </div>
    <div
      class="col-span-3 grid grid-cols-4 grid-rows-1 justify-center items-center content-center flex-1 [&>p]:text-center"
    >
      <p>{{ instructor }}</p>
      <p>{{ campus }}</p>
      <p>{{ wqb }}</p>
      <p>{{ credits }}</p>
    </div>
    <div class="col-span-1 flex flex-row justify-end items-center">
      <a :href="`../coursepage/${courseDept + courseNumber}`">
        <button
          class="p-1.5 border-solid border-2 border-sfu-red rounded-[4px] w-fit bg-transparent text-white font-bold"
        >
          <div class="text-sfu-red flex flex-row items-center gap-2 px-4">
            <p class="text-xl">Details</p>
            <Icon
              class="text-2xl"
              icon="material-symbols:arrow-right-alt-rounded"
              color="#d3001f"
            />
          </div>
        </button>
      </a>
    </div>
  </div>
</template>

<script>
import "../../../assets/main.css";
import { Icon } from "@iconify/vue";
export default {
  name: "termPageCard",
  components: { Icon },
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
