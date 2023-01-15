<script>
export default {
  width: 100,
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchText() {
      console.log(this.search);
      this.$router.push({ name: this.search });
    },
  },
};
</script>

<template>
  <div class="search-bar">
    <button class="search-btn mr-2">
      <img src="https://via.placeholder.com/15" alt="search icon" />
    </button>

    <input
      type="text"
      placeholder="Search"
      class="search-input"
      v-model="search"
      @input="$emit('input', search)"
      @keyup.enter="searchText"
    />
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
</style>
