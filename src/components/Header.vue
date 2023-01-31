<script>
import SearchBar from "./SearchBar.vue";
import { Icon } from "@iconify/vue";

export default {
  components: {
    SearchBar,
    Icon,
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
  },
};
</script>

<template>
  <header>
    <v-container class="header-container fill-height">
      <v-row class="row-wrapper" align="center">
        <v-col md="2" cols="6" order-md="1" order="1">
          <div
            class="scrappy text-black text-4xl font-bold cursor-pointer"
            @click="goHome"
          >
            Scrappy
          </div>
        </v-col>
        <v-col md="8" cols="12" order-md="2" order="3" class="center">
          <SearchBar v-if="showSearchBar" />
        </v-col>
        <v-col md="2" cols="6" order-md="3" order="2" class="right">
          <div class="dropdown-btn">
            <Icon
              icon="material-symbols:account-circle"
              color="rgba(28, 27, 31, 1)"
              width="20"
            ></Icon>
            <Icon
              icon="material-symbols:arrow-drop-down"
              color="rgba(28, 27, 31, 1)"
              width="20"
            ></Icon></div
        ></v-col>
      </v-row>
    </v-container>
    <!-- <div class="header-container">
        <div
          class="scrappy text-black text-4xl font-bold cursor-pointer mr-10"
          @click="goHome"
        >
          Scrappy
        </div>
      </div>
      <div class="header-container middle">
        <SearchBar v-if="showSearchBar" />
      </div>
      <div class="header-container">
        <div class="dropdown-btn ml-10">
          <Icon
            icon="material-symbols:account-circle"
            color="rgba(28, 27, 31, 1)"
            width="20"
          ></Icon>
          <Icon
            icon="material-symbols:arrow-drop-down"
            color="rgba(28, 27, 31, 1)"
            width="20"
          ></Icon>
        </div>
      </div> -->
  </header>
</template>

<style scoped>
header {
  /* height: 88px; */
  display: flex;
  justify-content: center;
  background-color: white;
  position: fixed;
  width: 100%;
  color: black;
  z-index: 5;
  border-bottom: 1px solid rgba(149, 149, 149, 0.4);
}

.header-container {
  max-width: var(--page-width);
}
.center {
  align-items: center;
  justify-content: center;
  display: flex;
}
.right {
  display: flex;
  justify-content: end;
}

.dropdown-btn {
  display: flex;
  justify-content: center;
  border-radius: 5px;
  height: 30px;
  width: 80px;
  cursor: pointer;
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
