<template>
    <div class="projectBasic">
        <div
            class="card"
            :style="{ backgroundImage: `url(${projectImage})`}"
        >
            <div class="cardTop">
                <h3 class="title">
                    {{ data.title }}
                </h3>

                <div class="technology-list">
                    <span
                        v-for="(tech, index) in data.technology"
                        :key="tech"
                    >
                        {{ tech }} <span v-if="index !== data.technology.length-1">/</span>
                    </span>
                </div>
            </div>

            <div class="controls">
                <AppButton color="secondary">
                    <a
                        :href="data.sourceCodeUrl"
                        target="_blank"
                    >View Code</a>
                </AppButton>
                <AppButton color="primary">
                    <a
                        :href="data.demoUrl"
                        target="_blank"
                    >Demo</a>
                </AppButton>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        data: {
            type: Object,
            required: true,
            default () {
                return {}
            }
        }
    },
    computed: {
        projectImage () {
            return require(`@/assets/images/${this.data.desktopImage.filename}`)
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    background-size: cover;
    background-position: center;
    width: 450px;
    height: 300px;
    border-radius: 10px;
    margin-bottom: 2rem;
    @include breakpoint(tablet-port) {
        width: 350px;
    }
    @include breakpoint(mobile) {
        width: 250px;
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
        background-color: #fff;
        transition: opacity 0.5s;
    }
    &:hover:after {
        opacity: 0.95;
    }
    &:hover .cardTop {
        transform: translateY(3rem);
        opacity: 1;
    }
    &:hover .controls {
        transform: translateY(-5rem);
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
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--main-bg-color);
        }
        .technology-list {
            color: var(--secondary-color);
            span {
                font-size: 1.6rem;
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
        button {
            margin: 0 1rem;
        }
    }
}
</style>
