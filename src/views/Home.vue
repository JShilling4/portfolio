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
            class="about slanted"
        >
            <div class="container">
                <h2 class="heading">
                    About Me
                </h2>
            </div>
        </section>

        <section
            ref="workSection"
            class="recentWork"
        >
            <div class="container">
                <h2 class="heading">
                    Some Recent Work
                </h2>

                <ProjectContainer />
            </div>
        </section>

        <section
            ref="contactSection"
            class="contact slanted"
        >
            <div class="container">
                <h2 class="heading heading--light">
                    Get In Touch
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
}

section.about {
    position: relative;
    margin-top: -2rem;
    background-color: $secondary-color;
    .heading {
        color: #fff;
    }
}

section.recentWork {
    text-align: center;
    padding-top: 20rem;
    .heading {
        margin-bottom: 4rem;
        color: #fff;
    }
}

section.contact {
    background-color: $secondary-color;
    .heading {
        color: #fff;
    }
}

.slanted {
    position: relative;
    /* padding: 200px 0; */
    background: #181818;
    overflow: visible;
    z-index: 1;
}

/* where the magic happens */
.slanted:before,
.slanted:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background: inherit;
    z-index: -1;
    top: 0;
    transform-origin: left top;
    transform: skewY(-2deg);
}

.slanted:after {
    bottom: 0;
    transform-origin: left bottom;
    transform: skewY(2deg);
}

/* displays the content inside, as these settings in the parent breaks the effect */
.slanted div {
    text-align: center;
    line-height: 1.5;
}
</style>

