<script>
import { getAreaOfStudyPage, generateYearArray, semesters, programs } from '../../functions/requirementsFunctions';

export default {
    name: 'RequirementYear',
    props: {
        number: {
            type: String,
        },
        text: {
            type: String,
        },
    },

    data() {
        return {
            search: '',
            suggestions: generateYearArray().sort(),
        }
    },
    computed: {
        filteredSuggestions() {
            return this.suggestions.filter(suggestion => suggestion.toLowerCase().includes(this.search.toLowerCase())).splice(0, 10);
        }
    },
    methods: {
        selectSuggestion(suggestion) {
            this.search = suggestion;
            this.$emit('search-result', suggestion);
        }
    },
    watch: {
        search(newValue) {
            if (this.suggestions.some((e) => e === newValue)){
                // Remove the suggestions
                console.log("remove the suggestion")
            }
        }
    }
};
</script>

<template>
    <div class="everything">
        <div class="flex-items">
            <div class="circle">
                {{ number }}
            </div>
        </div>
        <div class="flex-items">
            <!-- <select class="custom-select">
                <option disable selected value="">{{ text }}</option>
                <option v-for="item in items" :key="item.id" :value="item.name">{{ item.name }}</option>
            </select> -->
            <input class="custom-select" v-bind:placeholder="text" @input="$emit('input', search)" @keyup.enter="searchText" v-model="search">
            <ul class="suggestions" v-if="search.length && filteredSuggestions.length">
                <li v-for="(suggestion, index) in filteredSuggestions" :key="index" @click="selectSuggestion(suggestion)">
                    {{ suggestion }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.suggestions {
  position: absolute;
  top: calc(100% + 5px);
  left: 20px;
  right: 20px;
  background-color: white;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.suggestions li {
    height:20px;
    padding-left: 10px;
    display: flex;
    align-items:center;
    border-radius: 5px;
    font-size: 75%;
    font-weight: 500;
    font-style: bold;
}

.suggestions li:hover {
  background-color: #D3001F;
  color:white;
}

.everything {
    margin-left: 30px;
}
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
  border: 1px solid black;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  font-size: 75%;
  font-weight: 500;
  font-style: bold;
  width: 350px;
  height: 33px;
  color: black;
  margin-left: 15px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23333333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 15px auto;
}

</style>