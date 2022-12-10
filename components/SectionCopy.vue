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
<style lang="scss">
@import "../assets/scss/mixins";

p {
  color: #fff;
  font-weight: 200;
  font-size: 1.8rem;
  @include breakpoint(tablet-land) {
    text-align: center;
  }
}
</style>
