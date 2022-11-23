<template>
  <Menu>
    <MenuButton>{{this.menuTitle}}</MenuButton>
    <MenuItems v-for="option in this.options" :key="option.href">
      <MenuItem v-on:click="optionClicked(option)">
        <a href={{option.href}}>{{ option.label }}</a>
      </MenuItem>
    </MenuItems>
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