<template>
  <v-combobox
    v-model="chosenParams"
    :label="this.title"
    :items="options"
    :item-title="isDepartment ? `abbr` : `title`"
    chips
    clearable
    @blur="
      emitFilterParam();
      sortByChosen();
    "
    multiple
    class="w-fit"
  >

    <template v-slot:item="{ item, props }">

      <v-list-item
        v-bind="props"
        :subtitle="isDepartment ? item.value.fullName : false"
        class="items-center"
      >
        <template v-slot:prepend="{ isActive }">
          <v-list-item-action>
            <v-checkbox :model-value="isActive" />
          </v-list-item-action>
        </template>
      </v-list-item>
    </template>
  </v-combobox>
</template>

<script>
import { VCombobox } from "vuetify/components";
import { toRaw } from "vue";
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
    randomColor(id) {
      const r = () => Math.floor(256 * Math.random());

      return this.colorCache[id] || (this.colorCache[id] = `rgb(${r()}, ${r()}, ${r()})`);
    },
    sortByChosen() {
      this.params.sort((a, b) => {
        if (this.chosenParams.includes(a)) return -1;
        if (this.chosenParams.includes(b)) return 1;
        if (!this.isDepartment) {
          if (a < b) return -1;
          if (a > b) return 1;
        }
        if (this.isDepartment) {
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
      let param = this.isDepartment
        ? this.chosenParams.map((param) => toRaw(param))
        : this.chosenParams;
      console.log(`Filter emitted:${this.title.toLowerCase()}`, param);
      this.$emit("filter-event", this.title.toLowerCase(), param);
    },
  },
};
</script>

<style scoped></style>
