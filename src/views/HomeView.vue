<script setup>
import SearchBar from "../components/SearchBar.vue";
</script>

<template>
  <main>
    <h1 class="text-5xl mb-16 font-bold">Search for a <span class="text-sfu-red font-bold">SFU course</span></h1>
    <SearchBar />
    <a class="mt-6 text-black underline">Search courses by term</a>
    <v-container class="info rounded-lg mt-20">
      <v-row>
        <v-col sm="6" cols="12" class="sep">
          <h2 class="text-lg font-bold">About Scrappy</h2>
          <p>Scrappy is an information hub for SFU courses to help you make the most of your university courses.</p>
        </v-col>
        <v-col sm="6" cols="12">
          <h2 class="text-lg font-bold">Don't know your degree requirements?</h2>
          <v-btn variant="outlined" color="red" class="mt-7 degree-button" block>
            <span class="font-bold">
              Find your degree requirements
            </span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <img class="mountains" src="../assets/svg/mountains.svg"/>
    
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
}
degree-button {
  border-width: 20px!important;
} 
.sep {
  border-right: 1px solid rgba(172, 181, 191, 1);
}
.search {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}
h1,h2,h3,h4,h5,h6 {
  /* text-align: center; */
}
.info {
  z-index: 1;
  background-color: white;
  max-width: 800px;
  height: 200px;
  display: flex;
  position: absolute;
  top:500px;
  box-shadow: 0 5px 5px #00000037;
}
.info > div {
  /* background-color: red; */
  margin: 5px 0;
 
}
.info > div > div:first-child {
  /* background-color: red; */
  padding-right: 50px;
}
.info > div > div:last-child {
  /* background-color: red; */
  padding-left: 50px;
}
.mountains {
  position: absolute;
  top: 267px;
  /* background-color: red; */
}

</style>
