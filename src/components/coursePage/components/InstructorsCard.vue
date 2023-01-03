<script>
import "iconify-icon";
export default {
  props: {
    instructor: Object,
  },
};
</script>

<template>
  <div
    class="box-border max-w-[190px] max-h-[214px] flex flex-col border-[1px] border-[#000000] border-solid rounded-[10px] pl-2.5 pt-3 pb-5 font-normal"
  >
    <div class="flex items-center space-x-2.5 text-base mb-2">
      <p>D200</p>
      <iconify-icon icon="bi:question-circle" />
    </div>
    <p class="font-medium text-sm mt-0 mb-4">Hazra Imran</p>
    <p class="text-xs mb-4">Mo 12:30PM - 1:20PM WMC 3520, Burnaby</p>
    <p class="text-xs">Th 12:30PM - 2:20PM RCB IMAGTH, Burnaby</p>
  </div>
</template>
