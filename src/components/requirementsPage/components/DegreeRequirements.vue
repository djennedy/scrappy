<script>
import RequirementNumber from './RequirementNumber.vue'

export default {
    name: "DegreeRequirements",
    components: {
        RequirementNumber 
    }
}
</script>

<template>
    <div>
        <h1>Find your degree requirements</h1>
        <h2>Please respond to all boxes</h2>
        Choose your program
        <RequirementNumber number="1." />
        Choose your Major/Minor/Joint Major
        <RequirementNumber number="2." />
        Select the year you first enrolled in selected program
        <RequirementNumber number="3." />
        Select the term you first enrolled in selected program
        <RequirementNumber number="4." />
    </div>
</template>

<style scoped>

</style>