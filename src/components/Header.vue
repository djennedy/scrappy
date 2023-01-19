<script>
import SearchBar from "./SearchBar.vue";
import { Icon } from '@iconify/vue';

export default {
  components: {
    SearchBar,
    Icon
  },
  data() {
    return {
      showSearchBar: true,
      username: "Username",
    };
  },
  methods: {
    goHome() {
      this.$router.push({ name: "home" });
    },
  }
};
</script>

<template>
  <header>
    <div class="header">
      <div class="header-container ">
        <div class="scrappy text-black text-4xl font-bold cursor-pointer" @click="goHome">Scrappy</div>
      </div>
      <div class="header-container middle">
        <SearchBar v-if="showSearchBar" />
      </div>
      <div class="header-container">
        <div class="dropdown-btn">
          <Icon icon="material-symbols:account-circle"  color="rgba(28, 27, 31, 1)" width="20"></Icon>
          <Icon icon="material-symbols:arrow-drop-down" color="rgba(28, 27, 31, 1)" width="20"></Icon>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.middle {
  max-width: 675px;
  width: 100%;
}
.header-container {
  display: flex;

  
  justify-content: center;
}
.header-container:first-child {
  margin-right: auto;
  justify-content: flex-start;
  flex: 1;
}
.header-container:last-child {
  flex: 1;
  margin-left: auto;
  justify-content: flex-end;
}

header {
  background-color: white;
  height: 88px;
  display: flex;
  justify-content: center;
  top: 0;
  z-index: 1;
  position: fixed;
  width: 100%;
  color: black
  /* border-bottom: 1px solid blue; */
}

.dropdown-btn {
  display: flex;
  justify-content: center;
  padding: 0 5px;
  border-radius: 5px;
  height: 30px;
  max-width: 60px;
  font-size: 11px;
  cursor: pointer;
  align-items: center;
}

.header {
  height: 100%;
  width: 100%;
  max-width: var(--page-width);
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
}

 
.header-container:first-child {
  margin-right: auto;
  justify-content: flex-start;
  flex: 1;
}
.header-container:last-child {
  flex: 1;
  margin-left: auto;
  justify-content: flex-end;
}

header {
  background-color: white;
  height: 75px;
  display: flex;
  justify-content: center;
  top: 0;
  z-index: 1;
  position: fixed;
  width: 100%;
}

.dropdown-btn {
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  border-radius: 5px;
  height: 30px;
  width: 100%;
  max-width: 60px;
  font-size: 11px;
  cursor: pointer;
  align-items: center;
}
.dropdown-btn > img {
  height: 20px;
  width: auto;
}
.header {
  height: 100%;
  width: 100%;
  max-width: var(--page-width);
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
}

.username {
  /* border: 1px solid red; */
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-shrink: 1;
  align-items: center;
  justify-content: space-between;
}
.username p {
  flex-shrink: 1;
  font-size: 11px;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
