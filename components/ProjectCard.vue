<template>
  <div v-if="props.project" class="projectBasic">
    <div
      v-if="projectImage"
      class="card"
      :style="{ backgroundImage: `url(${projectImage})` }"
    >
      <div class="cardTop">
        <h3 class="title">
          {{ props.project.title }}
        </h3>

        <div class="technology-list">
          <span v-for="(tech, index) in props.project.technology" :key="tech">
            {{ tech }}
            <span v-if="index !== props.project.technology.length - 1">/ </span>
          </span>
        </div>
      </div>

      <div class="controls">
        <a :href="props.project.sourceCodeUrl" target="_blank"
          ><AppButton color="secondary">View Code</AppButton></a
        >
        <a
          v-if="props.project.isActive"
          :href="props.project.demoUrl"
          target="_blank"
        >
          <AppButton color="primary">Demo</AppButton>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProjectCard } from "../types/IProjectCard";

export type PropTypes = {
  project: IProjectCard | null;
};

const props = withDefaults(defineProps<PropTypes>(), {
  project: null,
});

const projectImage = computed(() => {
  if (!props?.project?.desktopImage.filename) return null;
  return new URL(
    `/assets/images/${props.project.desktopImage.filename}`,
    import.meta.url
  ).href;
});
</script>

<style lang="scss" scoped>

.card {
  position: relative;
  background-size: cover;
  background-position: center;
  width: 375px;
  height: 225px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 4rem;
  @include breakpoint(tablet-port) {
    width: 350px;
  }
  @include breakpoint(mobile) {
    width: 310px;
    height: 200px;
  }
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    opacity: 0;
    background-color: var(--main-bg-color);
    transition: opacity 0.5s;
  }
  &:hover:after {
    opacity: 0.95;
    border: 1px solid var(--secondary-color);
  }
  &:hover .cardTop {
    transform: translateY(3rem);
    opacity: 1;
  }
  &:hover .controls {
    transform: translateY(-3rem);
    opacity: 1;
  }

  .cardTop {
    position: absolute;
    width: 100%;
    opacity: 0;
    margin-bottom: 2rem;
    text-align: center;
    transition: transform 0.5s, opacity 0.5s;
    z-index: 10;

    h3.title {
      font-size: 2.7rem;
      font-weight: 600;
      color: var(--tertiary-color);
      margin-bottom: 0;
      @include breakpoint(mobile) {
        font-size: 2.4rem;
      }
    }
    .technology-list {
      color: var(--secondary-color);
      span {
        font-size: 1.8rem;
        font-weight: 600;
      }
    }
  }

  .controls {
    position: absolute;
    bottom: 0;
    opacity: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    transition: transform 0.5s, opacity 0.5s;
    z-index: 10;
    :deep(button) {
      margin: 0 1rem;
      @include breakpoint(mobile) {
        min-width: 12rem;
      }
    }
  }
}
</style>
