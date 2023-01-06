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
    <p>Hazra Imran</p>
    <p>Burnaby</p>
    <p>Harinder Khangura</p>
    <p>Surrey</p>
  </div>
</template>
