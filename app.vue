<template>
  <TheHeader
    v-if="$route.path !== '/surprise'"
    class="outer-container"
    :show-mobile-menu="showMobileMenu || windowWidth > 768"
    @open="showMobileMenu = true"
    @close="showMobileMenu = false"
  />
  <NuxtPage />
  <TheFooter v-if="$route.path !== '/surprise'" />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const $route = useRoute();
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
console.log($route.path);
</script>

<style lang="scss"></style>
