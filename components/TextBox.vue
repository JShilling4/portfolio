<template>
  <textarea
    :style="{
      width: props.width,
    }"
  >
  </textarea>
</template>

<script setup lang="ts">
export type PropTypes = {
  width?: string;
};

const props = withDefaults(defineProps<PropTypes>(), {
  width: "100%",
});
</script>

<style lang="scss" scoped>
textarea {
  font-family: "Nunito Sans", sans-serif;
  background-color: var(--input-bg-color);
  border: none;
  border-radius: var(--input-border-radius);
  height: 8rem;
  padding: 1rem;
  font-weight: 700;
  color: var(--input-font-color);
  border: 2px solid var(--input-border-color);
  outline: none;
  font-size: 1.6rem;
  &:focus {
    box-shadow: var(--input-focus-shadow);
  }
}
</style>
