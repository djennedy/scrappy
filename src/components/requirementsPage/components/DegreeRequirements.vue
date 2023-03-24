<script>
import RequirementNumber from './RequirementNumber.vue'
import GoBack from '../../coursePage/components/GoBack.vue'

export default {
    name: "DegreeRequirements",
    components: {
        RequirementNumber,
        GoBack
    }
}
</script>

<template>
    <div>
        <GoBack class="back" />
        <h1 class="text-2xl font-bold">Find your degree requirements</h1>
        <h2 class="text-sm">Please respond to all boxes</h2>
        <br>
        <p>Choose your program</p>
        <RequirementNumber number="1." text="Program" class="question" />
        <!-- <p>Choose your Major/Minor/Joint Major</p>
        <RequirementNumber number="2." text="Major/Minor/Joint Major" class="question" /> -->
        <p>Select the year you first enrolled in selected program</p>
        <RequirementNumber number="2." text="Enrollment Year" class="question" />
        <p>Select the term you first enrolled in selected program</p>
        <RequirementNumber number="3." text="Enrollment Term" class="question" />
    </div>
</template>

<style scoped>
/* div {
    background-color: teal;
} */

h1 {
    margin-bottom: 1.3%;
    margin-left: 85px;
}

h2 {
    margin-left: 85px;
    font-size: 12px;
}

p {
    margin-bottom: 1.5%;
    margin-left: 85px;
    font-size: 10px;
    font-weight: bold;
}

.question {
    margin-bottom: 6%;
}

.back {
    margin-left: 80px;
    margin-bottom: 2%;
}
</style>