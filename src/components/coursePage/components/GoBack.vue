<script>
import "iconify-icon";
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<template>
  <div class="flex flex-row content-center gap-[10px] items-center">
    <button @click="goBack">
    <iconify-icon icon="material-symbols:arrow-back" width="24" height="24"/>
    </button>
    <button class="text-[18px] leading-[22px] underline font-semibold" @click="goBack">
      Go Back
    </button>
  </div>
</template>
