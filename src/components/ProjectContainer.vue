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
                    isFeatured: false,
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
                        'Vue',
                        'Sass'
                    ]
                },
                {
                    id: 3,
                    isFeatured: false,
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
                        'Vue',
                        'Sass'
                    ]
                },
                {
                    id: 4,
                    isFeatured: false,
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
                        'Vue',
                        'Sass'
                    ]
                },
                {
                    id: 5,
                    isFeatured: false,
                    title: 'Mortgage Calculator',
                    desktopImage: {
                        filename: 'mortgage-calculator-desktop.png',
                        altText: 'Desktop Screenshot of Mortgage Calculator'
                    },
                    mobileImage: {
                        filename: '',
                        altText: 'Mobile Screenshot of Mortgage Calculator'
                    },
                    sourceCodeUrl: 'https://github.com/JShilling4/mortgage-calculator',
                    demoUrl: 'https://reactive-mortgage-calculator.netlify.app/',
                    technology: [
                        'Vue',
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
.project-container {
    padding: 0 7rem;
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
