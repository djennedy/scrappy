<script>
export default {
  props: {
    instructorCampus: Object,
  },
};
</script>

<template>
  <div class="mb-[5px]">
    <p>{{ instructorCampus.instructor }}</p>
    <p>{{ instructorCampus.campus }}</p>
  </div>
</template>
