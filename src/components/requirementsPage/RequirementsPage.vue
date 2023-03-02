<script>
import DegreeRequirements from './components/DegreeRequirements.vue'
import GoButton from './components/GoButton.vue'

export default {
name: "RequirementsPage",
components: {
    DegreeRequirements, 
    GoButton,
},

}
</script>

<template>
    <div class="flex-container">
        <DegreeRequirements />
        <GoButton />
    </div>
</template>

<style scoped>
.flex-container {
    padding-top: 100px;
    flex-direction: column;
}
</style>
