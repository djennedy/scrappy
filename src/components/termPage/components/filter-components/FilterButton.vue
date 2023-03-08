<template >
  <div class="z-50">
    <Combobox  v-model="chosenParams" default-value="hello" multiple>
      <div class="relative mt-1">
        <div
            class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
        >
          <ComboboxInput
              class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              :displayValue="(option) => isDepartment ? option.abbr : option"
              @change="query = $event.target.value"
          />
          <ComboboxButton
              class="absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <Icon icon="carbon:chevron-sort"
                class="h-5 w-5 text-gray-400"
                aria-hidden="true"
            />
          </ComboboxButton>
        </div>
        <TransitionRoot
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            @after-leave="query = ''"
        >
          <ComboboxOptions
              class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <div
                v-if="filteredOption.length === 0 && query !== ''"
                class="relative cursor-default select-none py-2 px-4 text-gray-700"
            >
              Nothing found.
            </div>

            <ComboboxOption
                v-for="option in filteredOption"
                as="template"
                :value=" isDepartment ? option.abbr : option "
                v-slot="{ selected, active }"
            >
              <li
                  class="relative cursor-default select-none py-2 pl-10 pr-4"
                  :class="{
                  'bg-teal-600 text-white': active,
                  'text-gray-900': !active,
                }"
              >
                <span
                    class="block truncate"
                    :class="{ 'font-medium': selected, 'font-normal': !selected }"
                >
                  {{ isDepartment ? option.fullName : option }}
                </span>
                <span
                    v-if="selected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3"
                    :class="{ 'text-white': active, 'text-teal-600': !active }"
                >
                  <Icon icon="material-symbols:check-box-rounded" class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
  </div>
</template>

<script>
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxButton,
  ComboboxOption, TransitionRoot
} from '@headlessui/vue';
import { vOnClickOutside } from '@vueuse/components'
import { Icon } from '@iconify/vue';
  export default {
    name:"FilterButton",
    components:{
      TransitionRoot,
      ComboboxOption, ComboboxOptions, ComboboxInput,ComboboxButton, Combobox, Menu, MenuButton, MenuItems, MenuItem, Icon},
    props: {
      title: String,
      options: Array,
      isDepartment: false
    },
    created() {
      this.menuTitle = this.title;
    },
    data(){
      return{
        menuTitle: String,
        chosenParams: [],
        query: ''
      }
    },

    computed:{
      filteredOption(){
        if(this.query === '') return this.options;
        return this.options.filter(option => {
          if(this.isDepartment){
            return (option.abbr.includes(this.query) || option.fullName.includes(this.query));
          }
          if(option.toString().includes(this.query)) return true;
        })
      }
    },
    methods:{
      optionClicked(option){
        this.menuTitle = option.label;
      },
      emitFilterParam(){
        console.log("clicked outside");
        // this.$emit('filter-event',this.title.toLowerCase(), this.chosenParams);
      },

    }
  };

</script>

<style scoped>

</style>