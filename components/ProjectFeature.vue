<template>
  <div v-if="props.project" class="project">
    <h3 class="title">
      {{ props.project.title }}
    </h3>

    <div class="content">
      <div class="info-container">
        <p class="description">
          {{ props.project.description }}
        </p>
        <div class="controls">
          <AppButton color="secondary">
            <a :href="props.project.sourceCodeUrl" target="_blank">View Code</a>
          </AppButton>
          <AppButton v-if="props.project.isActive" color="primary">
            <a :href="props.project.demoUrl" target="_blank">See Live</a>
          </AppButton>
        </div>
      </div>

      <div class="display-container">
        <div v-if="desktopImage" class="desktopImage">
          <img :src="desktopImage" :alt="props.project.desktopImage.altText" />
        </div>
        <img
          v-if="mobileImage"
          :src="mobileImage"
          :alt="props.project.mobileImage.altText"
          class="mobileImage"
        />
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

const desktopImage = computed(() => {
  if (!props?.project?.desktopImage.filename) return null;
  return new URL(
    `/assets/images/${props.project.desktopImage.filename}`,
    import.meta.url
  ).href;
});

const mobileImage = computed(() => {
  if (!props?.project?.mobileImage.filename) return null;
  return new URL(
    `/assets/images/${props.project.mobileImage.filename}`,
    import.meta.url
  ).href;
});
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins";

.project {
  min-height: 34rem;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 4rem;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 8rem;

  @include breakpoint(mobile) {
    padding: 4rem 1rem;
    margin-bottom: 4rem;
  }

  h3.title {
    font-size: 2rem;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 0;
    @include breakpoint(tablet-land) {
      width: 100%;
      text-align: center;
    }
  }
  .content {
    display: flex;
    height: 100%;
    @include breakpoint(tablet-land) {
      flex-wrap: wrap;
    }
  }

  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45%;
    margin-right: 4rem;
    padding-right: 6rem;
    @include breakpoint(ipadPro) {
      width: 50%;
    }
    @include breakpoint(tablet-land) {
      width: 100%;
      text-align: center;
      margin-right: 0;
      padding-right: 0;
    }
    .description {
      color: rgba(255, 255, 255, 0.842);
      line-height: 1.75;
      font-weight: 300;
      font-size: 1.6rem;
      @include breakpoint(tablet-land) {
        margin-top: 2rem;
      }
    }
    .controls {
      margin-top: 4rem;
      button {
        margin-right: 2rem;
        @include breakpoint(mobile) {
          font-size: 1.2rem;
          min-width: 10rem;
        }
      }
    }
  }

  .display-container {
    position: relative;
    display: flex;
    height: 80%;
    width: 38%;
    @include breakpoint(ipadPro) {
      width: 35%;
    }
    @include breakpoint(tablet-land) {
      width: 80%;
      margin: 8rem auto 4rem;
    }
  }
  .desktopImage {
    position: relative;
    z-index: 4;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    img {
      object-fit: contain;
      /* height: 90%; */
      width: 355px;
      border-radius: 10px;
    }
  }
  .mobileImage {
    position: absolute;
    z-index: 5;
    /* border-radius: 30px; */
    right: -9rem;
    top: -6rem;
    box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.3);
    width: 160px;
    @include breakpoint(ipadPro) {
      width: 100px;
      top: -3rem;
    }
    @include breakpoint(tablet-land) {
      right: 4rem;
      width: 120px;
    }
  }
}
</style>
