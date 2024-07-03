<template>
  <label
    class="formLabel"
    :style="{
      display: props.isInline ? 'inline' : 'block',
    }"
  >
    <slot></slot>
  </label>
</template>

<script setup lang="ts">
export type PropTypes = {
  isInline?: boolean;
};

const props = withDefaults(defineProps<PropTypes>(), {
  isInline: false,
});
</script>

<style lang="scss" scoped>
label {
  color: rgba(255, 255, 255, 0.781);
  margin-left: 3px;
  margin-bottom: 4px;
}
</style>
