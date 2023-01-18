<script setup>
import SearchBar from "../components/SearchBar.vue";
</script>

<template>
  <main>
    <h1 class="text-5xl mb-16">Search for a SFU course</h1>
    <SearchBar />
    <a class="mt-6 text-black underline">Search courses by term</a>
    <v-container class="info rounded-lg mt-20">
      <v-row >
        <v-col sm="6" cols="12">
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
    
  </main>
</template>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
  
}
degree-button {
  border-width: 20px!important;
}
.search {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}
h1,h2,h3,h4,h5,h6 {
  text-align: center;
}
.info {
  background-color: white;
  max-width: 800px;
}

</style>
