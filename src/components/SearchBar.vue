<script>
import { Icon } from '@iconify/vue';
import { coursesList } from './functions/courses.js';
export default {
  width: 100,
  components:{
    Icon
  },
  data() {
    return {
      search: '',
      suggestions: coursesList,
    };
  },
  computed: {
    filteredSuggestions() {
      return this.suggestions.filter(suggestion => suggestion.toLowerCase().includes(this.search.toLowerCase()));
    }
  },
  methods: {
    searchText() {
      console.log(this.search);
      this.$router.push({ name: 'coursepage', params: {coursenum: this.search.split("-")[0]} });
    },
    selectSuggestion(suggestion) {
      this.search = suggestion;
    }
  },
};
</script>

<template>
  <div class="search-bar">
    <button @click="searchText" class="search-btn mr-2">
      <Icon icon="material-symbols:search" width="18" color='#ACB5BF'/>
    </button>

    <input
      type="text"
      placeholder="Search"
      class="search-input"
      v-model="search"
      @input="$emit('input', search)"
      @keyup.enter="searchText"
    />
    <ul class="suggestions" v-if="search.length && filteredSuggestions.length">
        <li v-for="(suggestion, index) in filteredSuggestions" :key="index" @click="selectSuggestion(suggestion)">
          {{ suggestion }}
        </li>
    </ul>
  </div>
</template>

<style scoped>

div.search-bar {
  border: 1px solid rgba(149, 149, 149, 1);
  background-color: white;
  display: flex;
  align-items: center;
  padding: 8px 10px;
  border-radius: 30px;
  height: 31px;
  max-width: 675px;
  width: 100%;
  z-index: 1;
}

input {
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0 10px;
  color: black;
  width: 100%;
}

input:focus {
  border: none;
  outline: none;
}

.suggestions {
  position: absolute;
  top: calc(100% + 5px);
  left: 47px;
  right: 0;
  background-color: white;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>