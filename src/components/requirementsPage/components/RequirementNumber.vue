<script>
export default {
    name: 'RequirementNumber',
    props: {
        number: {
            type: String,
        }
    },
    data() {
        return {
            selected: '',
            items: [

            ]
        }
    }
}
</script>

<template>
    <div class="flex-container">
        <div class="flex-items">
            <div class="circle">
                {{ number }}
            </div>
        </div>
        <div class="flex-items">
            <select class="custom-select">
                <option disable selected value="">Program</option>
                <option v-for="item in items" :key="item.id" :value="item.name">{{ item.name }}</option>
            </select>
        </div>
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

.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
}

.flex-items:nth-child(1) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}

.flex-items:nth-child(2) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}

.custom-select {
  appearance: none;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  width: 200px;
  height: 40px;
  position: relative;
  color: black;
  
}

</style>