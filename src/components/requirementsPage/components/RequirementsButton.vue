<script>
export default {
    name: 'RequirementsButton',
    props: {
        text: {
            type: String,
        },
    },
    methods: {
        onClick() {
            console.log("clicked go to requirements button");
        }
    }
}
</script>

<template>
    <button @click="onClick" class="bg-gray-300 text-gray-700 px-4 py-2 rounded">
        {{ text }}
    </button>
</template>

<style scoped>

</style>