<template>
    <div class="project-container">
        <!-- <div class="featured-projects">
            <ProjectFeature
                v-for="project in featuredProjects"
                :key="project.id"
                :data="project"
            />
        </div> -->
        <div class="project-cards">
            <ProjectCard
                v-for="project in projects"
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

export default {
    name: 'ProjectContainer',
    components: {
        ProjectCard,
    },

    data () {
        return {
            projects: [
                {
                    id: 1,
                    isFeatured: true,
                    title: 'IP Geolocator',
                    desktopImage: {
                        filename: 'ip-geolocator-desktop.png',
                        altText: 'Desktop Screenshot of IP Geolocator Project'
                    },
                    mobileImage: {
                        filename: 'ip-geolocator-mobile.png',
                        altText: 'Mobile Screenshot of IP Geolocator Project'
                    },
                    sourceCodeUrl: 'https://github.com/JShilling4/ip-tracker',
                    demoUrl: 'https://ip-tracker-js.netlify.app/',
                    technology: [
                        'Svelte',
                        'Axios',
                        'Sass'
                    ]
                },
                {
                    id: 2,
                    isFeatured: false,
                    title: 'Blogr Landing Page',
                    desktopImage: {
                        filename: 'blogr-desktop.png',
                        altText: 'Desktop Screenshot of Blogr Landing Page'
                    },
                    mobileImage: {
                        filename: 'blogr-mobile.png',
                        altText: 'Mobile Screenshot of Blogr Landing Page'
                    },
                    sourceCodeUrl: 'https://github.com/JShilling4/blogr-landing-page',
                    demoUrl: 'https://blogr-landing-page-js.netlify.app/',
                    technology: [
                        'Vue 2',
                        'Sass'
                    ]
                },
                {
                    id: 3,
                    isFeatured: true,
                    title: 'Easybank Landing Page',
                    desktopImage: {
                        filename: 'easybank-desktop.png',
                        altText: 'Desktop Screenshot of Easybank Landing Page'
                    },
                    mobileImage: {
                        filename: 'easybank-mobile.png',
                        altText: 'Mobile Screenshot of Easybank Landing Page'
                    },
                    sourceCodeUrl: 'https://github.com/JShilling4/easybank-landing-page',
                    demoUrl: 'https://easybank-landing-page-js.netlify.app/',
                    technology: [
                        'Vue 2',
                        'Sass'
                    ]
                },
                {
                    id: 4,
                    isFeatured: true,
                    title: 'Manage Landing Page',
                    desktopImage: {
                        filename: 'manage-desktop.png',
                        altText: 'Desktop Screenshot of Manage Landing Page'
                    },
                    mobileImage: {
                        filename: 'manage-mobile.png',
                        altText: 'Mobile Screenshot of Manage Landing Page'
                    },
                    sourceCodeUrl: 'https://github.com/JShilling4/manage-landing-page',
                    demoUrl: 'https://manage-landing-page-js.netlify.app/',
                    technology: [
                        'Vue 2',
                        'Sass'
                    ]
                }
            ]
        }
    },
    computed: {
        featuredProjects () {
            return this.projects.filter(project => project.isFeatured === true)
        },
        projectCards () {
            return this.projects.filter(project => project.isFeatured === false)
        }
    }

}
</script>

<style lang="scss" scoped>
.featured-projects {
    padding: 12rem 0 12rem;
}
.project-cards {
    display: flex;
    justify-content: space-around;
    padding: 6rem 0;
    flex-wrap: wrap;
}
.fillerCard {
    height: 0;
    width: 450px;
}
</style>
