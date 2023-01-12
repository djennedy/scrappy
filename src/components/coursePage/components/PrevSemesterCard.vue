<script>
import "iconify-icon";

export default {
  props: {
    prevSemester: Object,
  },
};
</script>

<template>
  <div
    class="box-border max-w-[189px] max-h-[142px] flex flex-col border-[1px] border-[#000000] border-solid rounded-[10px] font-normal"
  >
    <div
      class="max-w-[189px] max-h-[35px] bg-[#616161] flex flex-col rounded-t-[10px]"
    >
      <p
        class="font-semibold text-[22px] leading-[27px] text-white w-[169px] max-h-[25px] ml-[11px] my-[5px]"
      >
        SEM
      </p>
    </div>
    <div class="ml-[11px] text-[16px] leading-[115%] my-[5px] space-y-4">
      <div class="mb-[5px]">
        <p>Hazra Imran</p>
        <p>Burnaby</p>
      </div>
      <div class="mb-[5px]">
        <p>Harinder Khangura</p>
        <p>Surrey</p>
      </div>
    </div>
  </div>
</template>
