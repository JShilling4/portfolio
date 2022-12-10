<template>
  <input
    class="textInput"
    :style="{
      width: props.width,
    }"
  />
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
input {
  font-family: "Nunito Sans", sans-serif;
  height: 4rem;
  border: none;
  border-radius: var(--input-border-radius);
  outline: none;
  background-color: var(--input-bg-color);
  color: var(--input-font-color);
  font-weight: 700;
  font-size: 1.6rem;
  padding-left: 1rem;
  border: 2px solid var(--input-border-color);

  &:focus {
    box-shadow: var(--input-focus-shadow);
  }
}
</style>
