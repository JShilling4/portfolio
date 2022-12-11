<template>
  <div class="project-container">
    <!-- Web & Mobile Applications -->
    <div class="projectInfo">
      <SectionSubHeading>Web & Mobile Applications</SectionSubHeading>
    </div>
    <div v-if="applications.length" class="project-cards">
      <ProjectFeature
        v-for="project in applications"
        :key="project.title"
        :project="project"
      />
      <div class="fillerCard"></div>
      <div class="fillerCard"></div>
    </div>

    <!-- Websites & Landing Pages -->
    <div class="projectInfo">
      <SectionSubHeading>Websites & Landing Pages</SectionSubHeading>
      <SectionCopy mb="4rem">
        A handful of websites/landing pages I have completed for employers or as
        side projects to build up my own design systems and component library.
      </SectionCopy>
    </div>
    <div v-if="websites.length" class="project-cards">
      <ProjectCard
        v-for="project in websites"
        :key="project.title"
        :project="project"
      />
      <div class="fillerCard"></div>
      <div class="fillerCard"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProjectsStore } from "../store/projects";

const projectsStore = useProjectsStore();

const websites = projectsStore.websites;
const applications = projectsStore.applications;
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins";

.project-container {
  padding: 0 7rem;

  @include breakpoint(ipadPro) {
    padding: 0;
  }

  .projectInfo {
    margin-left: 2rem;
    @include breakpoint(tablet-land) {
      margin: 0;
    }
  }
}

.featured-projects {
  padding: 12rem 0 12rem;
}
.project-cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.fillerCard {
  height: 0;
  width: 375px;
}
</style>
