<template>
  <TheHeader
    class="outer-container"
    :show-mobile-menu="showMobileMenu || windowWidth > 768"
    @open="showMobileMenu = true"
    @close="showMobileMenu = false"
  />
  <NuxtPage />
  <TheFooter />
</template>

<script setup lang="ts">
const showMobileMenu = ref<boolean>(false);
const windowWidth = ref<number>(document.documentElement.clientWidth);

function getWindowWidth() {
  windowWidth.value = document.documentElement.clientWidth;
}
onBeforeMount(() => {
  nextTick(() => {
    window.addEventListener("resize", getWindowWidth);
  });
});
</script>

<style lang="scss"></style>
