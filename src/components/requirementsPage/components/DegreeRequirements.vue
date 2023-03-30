<script>
import RequirementProgram from './RequirementProgram.vue';
import RequirementYear from './RequirementYear.vue';
import RequirementSemester from './RequirementSemester.vue';
import GoBack from '../../coursePage/components/GoBack.vue';

export default {
    name: "DegreeRequirements",
    components: {
        RequirementProgram,
        RequirementYear,
        RequirementSemester,
        GoBack
    },
    data() {
        return {
            programResult: '',
            yearResult: '',
            semesterResult: '',
        }
    },
    methods: {
        handleProgramResult(searchResult) {
            this.programResult = searchResult;
            this.$emit('program-result', this.programResult);
        },

        handleYearResult(searchResult) {
            this.yearResult = searchResult;
            this.$emit('year-result', this.yearResult);
        },

        handleSemesterResult(searchResult) {
            this.semesterResult = searchResult;
            this.$emit('semester-result', this.semesterResult);
        },
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
        <RequirementProgram number="1." text="Program" class="question" id="number" v-on:search-result="handleProgramResult" />
        <p>Select the year you first enrolled in selected program</p>
        <RequirementYear number="2." text="Enrollment Year" class="question" id="year" v-on:search-result="handleYearResult" />
        <p>Select the term you first enrolled in selected program</p>
        <RequirementSemester number="3." text="Enrollment Term" class="question" id="semester" v-on:search-result="handleSemesterResult" />
    </div>
</template>

<style scoped>

p {
    z-index:1;
}

#number {
    z-index:4;
}

#year {
    z-index:3;
}

#semester {
    z-index:2;
}

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