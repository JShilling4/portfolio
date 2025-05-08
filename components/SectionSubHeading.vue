<template>
  <h3>
    <slot></slot>
  </h3>
</template>

<style lang="scss">

h3 {
  color: #fff;
  font-weight: 400;
  margin-bottom: 4rem;
  font-size: 2.2rem;
  letter-spacing: 1px;
  @include breakpoint(tablet-land) {
    text-align: center;
  }
}
</style>
