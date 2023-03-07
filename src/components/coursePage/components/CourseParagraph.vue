<script>
export default {
  props: {
    header: String,
    rawHtml: String,
  },
};
</script>

<template>
  <div>
    <h3
      class="font-semibold text-[26px] leading-[32px] text-[#6F6F6F] mb-[10px]"
    >
      {{ header }}
    </h3>
    <p
      class="font-normal text-[18px] leading-[115%] text-black"
      v-html="rawHtml"
    ></p>
  </div>
</template>
