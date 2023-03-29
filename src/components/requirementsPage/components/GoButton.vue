<script>
import { getAreaOfStudyPage } from "../../functions/requirementsFunctions";

export default {
  data() {
    return {
      
    }
  },
  name: "GoButton",
  props: {
    program: String,
    year: String,
    semester: String,
  },
  methods: {
    goToPage() {
      if (this.program !== "" && this.year !== "" && this.semester !== "") {
        const pageURL = getAreaOfStudyPage(
          this.year,
          this.semester,
          this.program
        );
        window.open(pageURL, "_blank");
      }
    },
  },
  computed: {
    buttonColor() {
      if (this.program !== "" && this.year !== "" && this.semester !== "") {
        return "bg-[#D3001F] text-white"
      } else {
        return "bg-gray-100 text-gray-400"
      }
    }
  }
};
</script>

<template>
  <div class="flex-container">
    <button
      @click="goToPage"
      class="flex-items px-4 py-2 rounded w-64 h-12 text-left relative text-xs"
      :class="buttonColor"
    >
      Go to your requirements
      <span class="absolute right-0 top-1/2 transform -translate-y-1/2">
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M6.293 14.293a1 1 0 0 1-1.414-1.414L8.586 10l-3.707-3.879a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4z"
          />
        </svg>
      </span>
    </button>
    <div class="flex-items">
      <img
        src="../../../assets/svg/mountains.svg"
        alt="mountain"
        id="image"
        class="mountain"
      />
    </div>
  </div>
</template>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  /* flex-wrap: nowrap; */
  justify-content: space-around;
  align-items: center;
  align-content: center;
}

.flex-items:nth-child(1) {
  display: block;
  margin: auto;
  margin-top: 10%;
}

.flex-items:nth-child(2) {
  width: 1400px;
  margin-top: -2%;
}

/* .mountain {
  object-fit: cover;
} */
</style>
