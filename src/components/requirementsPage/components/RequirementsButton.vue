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
    <button @click="onClick" class="bg-gray-100 text-gray-400 px-4 py-2 rounded w-64 h-12 text-left relative text-xs">
        {{ text }}
        <span class="absolute right-0 top-1/2 transform -translate-y-1/2">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M6.293 14.293a1 1 0 0 1-1.414-1.414L8.586 10l-3.707-3.879a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4z"/>
            </svg>
        </span>
    </button>
</template>

<style scoped>

</style>