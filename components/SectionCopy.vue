<template>
  <p
    :style="{
      marginBottom: props.mb,
      width: props.width,
    }"
  >
    <slot></slot>
  </p>
</template>

<script setup lang="ts">
export type PropTypes = {
  mb?: string;
  width?: string;
};

const props = withDefaults(defineProps<PropTypes>(), {
  mb: "",
  width: "100%",
});
</script>

<style lang="scss" scoped>

p {
  color: #fff;
  font-weight: 200;
  line-height: 1.5;
  font-size: 1.8rem;
  @include breakpoint(tablet-land) {
    text-align: left;
    width: 80% !important;
    margin: 0 auto;
  }
  @include breakpoint(mobile) {
    width: 100% !important;
    font-size: 1.6rem;
  }
}
</style>
