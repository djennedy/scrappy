<script>
export default {
    name: 'RequirementNumber',
    props: {
        number: {
            type: String,
        }
    },
}
</script>

<template>
    <div class="circle">
        {{ number }}
    </div>
</template>

<style scoped>
.circle {
    width: 30px;
    height: 30px;
    line-height: 30px;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: solid 1px #D3001F;
    background-color: #D3001F;
    color: white;
    text-align: center;
    display: block;
}
</style>