<script setup>

</script>

<template>
  <header>
    <div class="header">
        <div class="text-black text-lg font-bold">
            Scrappy
        </div>
        <div class="dropdown-btn bg-slate-200">
            <img class="mr-5 rounded-full" src="https://via.placeholder.com/30" alt="user image"/>
            <p class="text-black font-semibold">
                Alexis Lazcano
            </p>
        </div>
    </div>

  </header>
 
</template>

<style scoped>
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
    .header {
        height: 100%;
        width: 100%;
        max-width: 1000px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
        align-items: center;
        
    }
    .dropdown-btn {
        display: flex;
        align-items: center;
        padding: 8px 10px;
        border-radius: 5px;
        
    }

</style>
