<template>
  <div
    class="spacer"
    :style="{
      height: props.height,
    }"
  ></div>
</template>

<script setup lang="ts">
export type PropTypes = {
  height: string;
};

const props = withDefaults(defineProps<PropTypes>(), {
  height: "2rem",
});
</script>

<style lang="scss" scoped></style>
