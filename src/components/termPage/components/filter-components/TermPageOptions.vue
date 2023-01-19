<template>
  <!--  Term Page Course Card-->
<!--  https://headlessui.com/vue/menu headlessUI Menu documentation-->
  <div class=" w-full
  grid grid-rows-1 grid-cols-9 justify-between border-[1px] border-[#E4E4E4]
   rounded-[8px] px-4 py-6">
    <div class=" col-span-5 flex flex-row justify-start gap-4 items-center flex-1">
      <FilterButton v-bind="filters.department" v-bind:is-department="true"></FilterButton>
      <FilterButton v-bind="filters.level"></FilterButton>
    </div>
    <div class=" col-span-3 flex flex-row justify-center items-center gap-4 flex-1">
      <FilterButton v-bind="filters.instructor"></FilterButton>
      <FilterButton v-bind="filters.campus"></FilterButton>
      <FilterButton v-bind=filters.wqbDesignation></FilterButton>
      <p>Credits</p>

    </div>
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