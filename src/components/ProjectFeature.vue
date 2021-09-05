<template>
    <div :class="['project', { feature: data.isFeatured }]">
        <h3 class="title">
            {{ data.title }}
        </h3>

        <div class="content">
            <div class="info-container">
                <p class="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ullam quidem nemo officiis laborum, ea earum molestias aliquam distinctio perferendis quam assumenda soluta quod tempore. Quaerat in dignissimos iusto cumque.
                </p>
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
                        >See Live</a>
                    </AppButton>
                </div>
            </div>

            <div class="display-container">
                <div class="desktopImage">
                    <img
                        :src="require(`@/assets/images/${data.desktopImage.filename}`)"
                        :alt="data.desktopImage.altText"
                    >
                </div>
                <img
                    v-if="data.mobileImage !== null"
                    :src="require(`@/assets/images/${data.mobileImage.filename}`)"
                    :alt="data.mobileImage.altText"
                    class="mobileImage"
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectKit',
    props: {
        data: {
            type: Object,
            required: true,
            default () {
                return {}
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.project {
    padding: 2rem;
    height: 40rem;
    width: 100%;
    margin-bottom: 20rem;

    h3.title {
        font-size: 3.25rem;
        font-weight: 600;
        color: $primary-color;
        margin-bottom: 2rem;
    }
    .content {
        display: flex;
        height: 100%;
    }

    .info-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 45%;
        margin-right: 4rem;
        padding-right: 6rem;
        .description {
            color: #fff;
            line-height: 1.75;
            font-weight: 600;
            font-size: 1.8rem;
        }
        .controls {
            margin-top: 4rem;
            button {
                margin-right: 2rem;
            }
        }
    }

    .display-container {
        position: relative;
        display: flex;
        height: 100%;
        width: 50%;
    }
    .desktopImage {
        border-radius: 10px;
        width: 100%;
        height: 100%;
        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
            border-radius: 10px;
        }
    }
    .mobileImage {
        position: absolute;
        border-radius: 30px;
        right: -13rem;
        top: -6rem;
        box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.3);
        width: 300px;
    }
}
</style>
