<template>
  <h2
    class="heading"
    :style="{
      textAlign: props.align,
      marginBottom: props.mb,
    }"
  >
    <slot></slot>
  </h2>
</template>

<script setup lang="ts">
export type PropTypes = {
  align?: "center" | "left" | "right";
  mb?: string;
};

const props = withDefaults(defineProps<PropTypes>(), {
  align: "center",
  mb: "6rem",
});
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins";

.heading {
  position: relative;
  display: inline-block;
  font-size: 3.6rem;
  font-weight: 500;
  color: #fff;
  text-align: center;
  &:after {
    position: absolute;
    left: 0;
    bottom: -1rem;
    content: "";
    height: 2px;
    width: 100%;
    background-color: var(--secondary-color);
  }

  @include breakpoint(mobile) {
    font-size: 2.8rem;
  }
}
</style>
