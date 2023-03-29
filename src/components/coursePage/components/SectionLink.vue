<script>
export default {
  props: {
    outlineLink: String,
  },
};
</script>

<template>
  <div class="text-[18px] leading-[115%]">
    <span class="leading-[22px] text-[#B0001A] font-semibold">
      SFU Outline:
    </span>
    <a :href="outlineLink" target="_blank" class="underline font-semibold">{{
      outlineLink
    }}</a>
  </div>
</template>
