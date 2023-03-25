<template>
  <v-combobox
    v-model="chosenParams"
    :label="this.title"
    :items="options"
    @blur="
      emitFilterParam();
      sortByChosen();
    "
    multiple
    class="w-fit"
  >
    <template v-slot:selection></template>
    <template v-slot:item="{ item, props }">
      <v-list-item v-bind="props" class="">
        <template v-if="isDepartment" v-slot:title>
          <v-list-item-title v-if="isDepartment" class="font-black text-xl">{{
            item.value.abbr
          }}</v-list-item-title>
          <v-list-item-title v-else class="font-bold text-xl">{{
            item.value
          }}</v-list-item-title>
        </template>
        <template v-slot:subtitle>
          <v-list-item-subtitle
            v-if="isDepartment"
            class="font-medium text-xl"
            >{{ item.value.fullName }}</v-list-item-subtitle
          >
        </template>
        <template v-slot:prepend>
          <v-list-item-action>
            <v-checkbox :value="props.value" />
          </v-list-item-action>
        </template>
      </v-list-item>
    </template>
  </v-combobox>
</template>

<script>
import { VCombobox } from "vuetify/components";
import { Icon } from "@iconify/vue";
export default {
  name: "FilterButton",
  components: {
    VCombobox,
  },
  props: {
    title: String,
    options: Array,
    isDepartment: Boolean,
  },
  created() {
    this.menuTitle = this.title;
  },
  data() {
    return {
      menuTitle: String,
      chosenParams: [],
      params: this.options,
      query: "",
    };
  },
  methods: {
    sortByChosen(){
      this.params.sort((a, b) => {
        if (this.chosenParams.includes(a)) return -1;
        if (this.chosenParams.includes(b)) return 1;
        if(!this.isDepartment){
          if (a < b) return -1;
          if (a > b) return 1;
        }
        if(this.isDepartment){
          if (a.abbr < b.abbr) return -1;
          if (a.abbr > b.abbr) return 1;
        }
        return 0;
      });
    },
    optionClicked(option) {
      this.menuTitle = option.label;
    },
    emitFilterParam() {
      this.$emit("filter-event", this.title.toLowerCase(), this.chosenParams);
    },
  },
};
</script>

<style scoped></style>
