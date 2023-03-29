<script setup>
import SearchBar from "../components/SearchBar.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    <div class="search-wrapper">
      <h1 class="text-5xl mb-16 font-bold">
        Search for a <span class="text-sfu-red font-bold">SFU course</span>
      </h1>
      <SearchBar />
      <a class="mt-6 text-black underline cursor-pointer"
        >Search courses by term</a
      >
    </div>
    <v-container class="info rounded-lg">
      <v-row>
        <v-col sm="6" cols="12" class="sep">
          <h2 class="text-lg font-bold">About Scrappy</h2>
          <p>
            Scrappy is an information hub for SFU courses to help you make the
            most of your university courses.
          </p>
        </v-col>
        <v-col sm="6" cols="12">
          <h2 class="text-lg font-bold">
            Don't know your degree requirements?
          </h2>
          <RouterLink to="/requirements">
            <v-btn
              variant="outlined"
              color="red"
              class="mt-7 degree-button"
              block
            >
              <span class="font-bold text-sm"
                >Find your degree requirements
              </span>
            </v-btn>
          </RouterLink>
        </v-col>
      </v-row>
    </v-container>
    <img class="mountains" src="../assets/svg/mountains.svg" />
  </main>
</template>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 188px;
  position: relative;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
}
.degree-button {
  overflow: hidden;
  text-overflow: ellipsis;
}
.sep {
  border-right: 1px solid rgba(172, 181, 191, 1);
}

.search-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
  z-index: 1;
  width: 100%;
  padding: 0 20px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  z-index: 1;
}
.info {
  z-index: 1;
  background-color: white;
  max-width: 800px;
  display: flex;
  margin-top: 200px;
  box-shadow: 0 5px 5px #00000037;
}
.info > div > div {
  margin: 5px 0;
}

@media (min-width: 576px) {
  .info > div {
    padding: 10px;
  }
}
.info > div > div:first-child {
  padding-right: 50px;
}
.info > div > div:last-child {
  padding-left: 50px;
}
.mountains {
  position: absolute;
  top: 300px;
  width: 100%;
  /* min-width: 1440px;
  width: 100vw;
  max-width: 100vw; */
  height: 450px;
  object-fit: cover;
}
@media (min-width: 576px) {
  .mountains {
    min-width: 1440px;
    width: 100vw;
    
    max-width: 100vw;
  }
}

@media (max-width: 576px) {
  .sep {
    border-right: none;
  }
  /* .mountains {
    height: 500px;
    width: 100%;
    
    
  } */
  .info > div > div:first-child {
    padding-right: 10px;
  }
  .info > div > div:last-child {
    padding-left: 10px;
  }
}
</style>
