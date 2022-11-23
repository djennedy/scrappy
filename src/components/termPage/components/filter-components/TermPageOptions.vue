<template>
  <!--  Term Page Course Card-->
<!--  https://headlessui.com/vue/menu headlessUI Menu documentation-->
  <div class="
  flex flex-row justify-between border-[1px] border-[#E4E4E4]
   rounded-[8px] px-4 py-6 min-w-[736px] max-w-[850px] w-full">
    <div class="flex flex-row justify-start gap-4 items-center flex-1">
      <FilterButton v-bind="filters.department"></FilterButton>
      <FilterButton v-bind="filters.level"></FilterButton>
    </div>
    <div class="flex flex-row justify-center items-center gap-6 flex-1">
      <p>Instructor</p>
      <FilterButton v-bind="filters.campus"></FilterButton>
      <FilterButton v-bind=filters.wqbDesignation></FilterButton>

    </div>
    <p>Details</p>
  </div>
</template>

<script>
import "../../../../assets/main.css";
import FilterButton from "./FilterButton.vue";
export default {
  name: "TermPageOption",
  components: {FilterButton},

  props: {
    filters: Object
  },
};
</script>

<style scoped></style>