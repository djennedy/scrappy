<script>
export default {
  props: {
    numCredits: String,
  },
};
</script>

<template>
  <button
    class="bg-black rounded-[4px] w-[105px] h-[39px] gap-[12px] py-[6px] px-[12px]"
  >
    <p class="text-white text-[16px] leading-[115%] font-bold">
      {{ numCredits }} Credits
    </p>
  </button>
</template>
