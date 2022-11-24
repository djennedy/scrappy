<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton class="border-2 rounded-md p-2 font-medium">
      {{this.menuTitle}}
    </MenuButton>
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems as="div" class="
      absolute left-0 z-10 mt-2 w-56 origin-top-right
      rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="flex flex-col">
            <MenuItem v-for="option in this.options" :key="option.href" v-on:click="optionClicked(option)"
                      @mouseover="e => e.target.classList.toggle('bg-gray-300')"
                      @mouseleave="e => e.target.classList.toggle('bg-gray-300')"
                      class="p-4 transition-colors">
              <a href="#">{{ option.label }}</a>
            </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
  export default {
    name:"FilterButton",
    components:{Menu, MenuButton, MenuItems, MenuItem},
    props: {
      title: String,
      options: Array
    },
    created() {
      this.menuTitle = this.title;
    },
    data(){
      return{
        menuTitle: String,
      }
    },
    methods:{
      optionClicked(option){
        this.menuTitle = option.label;
      }
    }
  };

</script>

<style scoped>

</style>