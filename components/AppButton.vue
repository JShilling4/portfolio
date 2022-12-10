<template>
  <button
    :type="type"
    :class="[
      'appButton',
      {
        primary: props.color == 'primary',
        secondary: props.color == 'secondary',
      },
    ]"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
export type PropTypes = {
  color?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

const props = withDefaults(defineProps<PropTypes>(), {
  color: "primary",
  type: "button",
});
</script>

<style lang="scss" scoped>
button {
  font-family: var(--main-font);
  padding: 1rem;
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  outline: none;
  min-width: 15rem;
  border-radius: var(--input-border-radius);
  letter-spacing: 1px;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, letter-spacing 0.3s;

  &:hover {
    letter-spacing: 1.4px;
    background-color: var(--primary-color);
    color: #fff;
    box-shadow: var(--input-focus-shadow);
  }

  &.secondary {
    border: 2px solid var(--secondary-color);
    color: var(--tertiary-color);
    &:hover {
      background-color: var(--secondary-color);
      color: #fff;
    }
  }

  &.white {
    background-color: #fff;
    color: var(--secondary-color);
    border: 2px solid var(--secondary-color);
    &:hover {
      background-color: var(--tertiary-color);
      color: #fff;
    }
  }
}
</style>
