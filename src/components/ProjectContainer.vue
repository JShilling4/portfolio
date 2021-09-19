<template>
    <div class="project-container">
        <!-- Web & Mobile Applications -->
        <div class="projectInfo">
            <SectionSubHeading>Web & Mobile Applications</SectionSubHeading>
            <!-- <SectionCopy mb="4rem">
                A handful of websites/landing pages I have completed for employers or as side projects to build
                up my own design systems and component library.
            </SectionCopy> -->
        </div>
        <div class="project-cards">
            <ProjectFeature
                v-for="project in applications"
                :key="project.id"
                :data="project"
            />
            <div class="fillerCard"></div>
            <div class="fillerCard"></div>
        </div>

        <!-- Websites & Landing Pages -->
        <div class="projectInfo">
            <SectionSubHeading>Websites & Landing Pages</SectionSubHeading>
            <SectionCopy mb="4rem">
                A handful of websites/landing pages I have completed for employers or as side projects to build
                up my own design systems and component library.
            </SectionCopy>
        </div>
        <div class="project-cards">
            <ProjectCard
                v-for="project in websites"
                :key="project.id"
                :data="project"
            />
            <div class="fillerCard"></div>
            <div class="fillerCard"></div>
        </div>
    </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard";
import ProjectFeature from "@/components/ProjectFeature";
import SectionSubHeading from "@/components/layout/section/SectionSubHeading";
import SectionCopy from "@/components/layout/section/SectionCopy";

export default {
    name: "ProjectContainer",
    components: {
        ProjectCard,
        ProjectFeature,
        SectionSubHeading,
        SectionCopy,
    },

    data() {
        return {};
    },
    computed: {
        projects() {
            return this.$store.state.projects;
        },
        websites() {
            return this.$store.state.projects.filter(
                (p) => p.type === "website"
            );
        },
        applications() {
            return this.$store.state.projects.filter(
                (p) => p.type === "webapp"
            );
        },
    },
};
</script>

<style lang="scss" scoped>
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
