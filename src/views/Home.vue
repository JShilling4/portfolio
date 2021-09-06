<template>
    <div>
        <PageSection class="heroSection">
            <div class="container">
                <h1 class="heading hero">
                    Hello, I'm Justin Shilling.
                </h1>
                <p class="heroCopy">
                    Senior web developer specializing in UI/UX.
                </p>
            </div>
        </PageSection>

        <PageSection
            ref="aboutSection"
            id="aboutSection"
            class="aboutSection slanted"
        >
            <div class="container">
                <PageSectionHeading>
                    About Me
                </PageSectionHeading>
                <img
                    src="@/assets/images/brain3_cropped.png"
                    class="brainIllustration"
                    alt="Right and left brain illustration"
                >
            </div>
        </PageSection>

        <PageSection
            ref="recentWorkSection"
            id="recentWorkSection"
            class="recentWorkSection"
        >
            <div class="container">
                <PageSectionHeading>
                    Some Recent Work
                </PageSectionHeading>

                <ProjectContainer />
            </div>
        </PageSection>

        <PageSection
            ref="contactSection"
            id="contactSection"
            class="contactSection slanted"
        >
            <div class="container">
                <PageSectionHeading>
                    Get In Touch
                </PageSectionHeading>

                <div class="content">
                    <form
                        class="contactForm"
                        data-netlify="true"
                    >
                        <InputGroup>
                            <FormLabel id="name">Name/Company</FormLabel>
                            <TextInput v-model="contactForm.name" />
                        </InputGroup>
                        <InputGroup>
                            <FormLabel id="email">Email</FormLabel>
                            <TextInput v-model="contactForm.email" />
                        </InputGroup>
                        <InputGroup>
                            <FormLabel id="phone">Phone</FormLabel>
                            <TextInput v-model="contactForm.phone" />
                        </InputGroup>
                        <InputGroup>
                            <FormLabel id="phone">Message</FormLabel>
                            <TextBox v-model="contactForm.message" />
                        </InputGroup>

                        <AppButton class="white">Send</AppButton>
                    </form>

                    <img
                        src="@/assets/images/contact_vector.svg"
                        alt=""
                    />
                </div>
            </div>
        </PageSection>
    </div>
</template>

<script>
import ProjectContainer from "@/components/ProjectContainer";
import PageSection from "@/components/layout/section/PageSection";
import PageSectionHeading from "@/components/layout/section/PageSectionHeading";

export default {
    components: {
        ProjectContainer,
        PageSection,
        PageSectionHeading,
    },
    data() {
        return {
            activeSection: "",
            observer: null,
            observerOptions: {
                threshold: 0,
            },
            contactForm: {
                name: null,
                email: null,
                phone: null,
                message: null,
            },
        };
    },
    mounted() {},
};
</script>

<style lang="scss">
.container {
    max-width: var(--main-container-width);
    margin: 0 auto;
}

section.heroSection {
    display: flex;
    align-items: center;
    min-height: 100vh;
    text-align: center;
    @include breakpoint(mobile) {
        min-height: 85vh;
    }

    .heading {
        margin-bottom: 1rem;
        color: var(--body-font-color);
        font-size: 4rem;
        @include breakpoint(mobile) {
            font-size: 3rem;
        }
    }

    .heroCopy {
        color: rgba(255,255,255, .7);
        font-weight: 200;
        font-size: 2.5rem;
        @include breakpoint(mobile) {
            font-size: 2rem;
        }
    }
}

section.aboutSection {
    position: relative;
    margin-top: -2rem;
    background-color: var(--secondary-color);

    .brainIllustration {
        display: block;
        height: 60rem;
        @include breakpoint(tablet-land) {
            height: auto;
            width: 300px;
            margin: 0 auto;
        }
    }
}

section.recentWorkSection {

}

section.contactSection {
    background-color: var(--secondary-color);

    .content {
        display: flex;
        @include breakpoint(laptop) {
            flex-wrap: wrap;
            justify-content: center;
        }
        .contactForm {
            width: 50%;
            padding: 2rem 8rem;
            @include breakpoint(laptop) {
                width: 70%;
                order: 2;
                padding: 0;
            }
            @include breakpoint(tablet-port) {
                width: 100%;

            }
        }

        img {
            height: 400px;
            @include breakpoint(laptop) {
                height: auto;
                width: 70%;
                margin-bottom: 4rem;
            }
        }
    }
}
</style>

