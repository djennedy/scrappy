<template>
  <div
    class="w-full grid grid-rows-1 grid-cols-9 gap-4 justify-between border-[1px] border-[#E4E4E4] rounded-[8px] px-4 py-6"
  >
    <div
      class="col-span-3 flex flex-row justify-start gap-4 items-center flex-1"
    >
      <FilterButton
        v-bind="filters.department"
        v-bind:is-department="true"
        @filter-event="setFilter"
      ></FilterButton>
      <FilterButton
        v-bind="filters.level">
        @filter-event="setFilter"
      </FilterButton>
    </div>
    <div
      class="col-span-5 flex flex-row justify-center items-center gap-4 flex-1"
    >
      <FilterButton
        v-bind="filters.instructor"
        @filter-event="setFilter"
      ></FilterButton>
      <FilterButton
        v-bind="filters.campus"
        @filter-event="setFilter"
      ></FilterButton>
      <FilterButton
        v-bind="filters.wqb"
        @filter-event="setFilter"
      ></FilterButton>
      <FilterButton
        v-bind="filters.credits"
        @filter-event="setFilter"
      ></FilterButton>
    </div>
  </div>
</template>

<script>
import "../../../../assets/main.css";
import FilterButton from "./FilterButton.vue";
export default {
  name: "TermPageOption",
  components: { FilterButton },
  emits: ["setFilter"],
  props: {
    filters: Object,
  },
  methods: {
    setFilter(type, params) {
      this.$emit("setFilter", type, params);
    },
  },
};
</script>

<style scoped></style>
