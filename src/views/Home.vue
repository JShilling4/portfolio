<template>
    <div>
        <section class="hero">
            <div class="container">
                <h1 class="heading heading--hero">
                    Hello, I'm Justin Shilling.
                </h1>
            </div>
        </section>

        <section
            ref="aboutSection"
            class="about"
        >
            <div class="container">
                <h2 class="heading heading--light">
                </h2>
            </div>
        </section>

        <section
            ref="workSection"
            class="recentWork"
        >
            <div class="container">
                <h2 class="heading heading--dark heading--decorated">
                    Some Recent Work
                </h2>

                <ProjectContainer />
            </div>
        </section>

        <section
            ref="contactSection"
            class="contact"
        >
            <div class="container">
                <h2 class="heading heading--light">
                </h2>
            </div>
        </section>
    </div>
</template>

<script>
import ProjectContainer from "@/components/ProjectContainer";

export default {
    components: {
        ProjectContainer,
    },
    data() {
        return {
            activeSection: "",
            observer: null,
            observerOptions: {
                threshold: 0,
            },
        };
    },
    mounted() {},
};
</script>

<style lang="scss">

section {
    padding: 12rem 4rem;
    .heading:not(.hero) {
        font-size: 3.6rem;
        font-weight: 600;
    }
}
.container {
    max-width: $main-container-width;
    margin: 0 auto;
}

.heading {
    display: inline-block;
    position: relative;
}

section.hero {
    display: flex;
    align-items: center;
    min-height: 100vh;
    text-align: center;

    .heading {
        color: $body-font-color;
        font-size: 4rem;
    }

    .hidden-div {
        width: 100%;
        height: 110px;
        position: absolute;
        bottom: 0;
        left: 0;
        // transform: translateX(-50%);
    }
    .triangle {
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 0 1300px 0 1300px;
        border-color: transparent transparent $secondary-color transparent;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        transition: border-width 1s;
        &.rise {
            border-bottom-width: 300px;
        }
    }
}

section.about {
    margin-top: -2rem;
    background-color: $secondary-color;
}

section.recentWork {
    .heading {
        margin-bottom: 4rem;
    }
}

section.contact {
    background-color: $secondary-color;
}
</style>

