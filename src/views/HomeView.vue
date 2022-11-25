<script setup>
</script>

<template>
  <main>
    <h1 class="text-5xl mb-16">Welcome to Scrappy</h1>
    <h3 class="text-xl mb-10">A SFU planner where you can plan your courses <br/> for future semesters</h3>
    <h2>Search for a Specific Course</h2>
    <div class="search">
      <input type="text" placeholder="Search for a course" v-model="search" />
      <button @click="searchCourse">Search</button>
    </div>  
    <p>
      or
    </p>
    <a class="underline text-black">Search courses per term</a>
  </main>
</template>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
  
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
</style>
