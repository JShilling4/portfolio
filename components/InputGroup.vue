<template>
  <div
    class="input-group"
    :style="{
      marginBottom: props.bottomMargin,
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
export type PropTypes = {
  bottomMargin?: string;
};

const props = withDefaults(defineProps<PropTypes>(), {
  bottomMargin: "2rem",
});
</script>

<style lang="scss" scoped></style>
