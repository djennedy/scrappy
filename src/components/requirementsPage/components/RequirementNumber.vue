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
    <div>
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
.flex-container {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: normal;
  align-items: normal;
  align-content: normal;
}

.flex-items:nth-child(1) {
  display: inline-block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  margin-right: 10px;
}

.flex-items:nth-child(2) {
  display: inline-block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}
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
}

.custom-select {
  appearance: none;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  width: 200px;
  height: 40px;
  color: black;
}

</style>