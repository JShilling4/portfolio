<template>
    <div>
        <!-- Hero -->
        <PageSection class="heroSection">
            <div class="container">
                <h1 class="heading hero">
                    Hello, I'm Justin Shilling.
                </h1>
                <p class="heroCopy">
                    Creative web developer specializing in UI/UX.
                </p>

                <a href="#aboutSection">
                    <AppButton class="secondary">See More</AppButton>
                </a>
            </div>
        </PageSection>

        <!-- About Me -->
        <PageSection
            ref="aboutSection"
            id="aboutSection"
            class="aboutSection slanted"
        >
            <div class="container">
                <PageSectionHeading>
                    About Me
                </PageSectionHeading>
                <div class="content">
                    <img
                        src="@/assets/images/brain3_cropped.png"
                        class="brainIllustration"
                        alt="Right and left brain illustration"
                    />
                    <div>
                        <p class="copy">
                            Living my best life working in a profession where I can satisfy the tug of war between the left & right
                            sides of my brain. There is nothing more fulfulling than being able to solve problems with code and create
                            a work of art at the same time!
                        </p>

                        <p class="copy">
                            Here are some of the technologies I am currently using to achieve this:
                        </p>

                        <div class="icon-container">
                            <img src="@/assets/images/sass_icon.png" width="50" alt="Sass icon"/>
                            <img src="@/assets/images/vue_icon.png" width="50" alt="Vue icon"/>
                            <img src="@/assets/images/svelte_icon.png" width="50" alt="Svelte icon"/>
                            <img src="@/assets/images/react_icon.png" width="50" alt="React icon"/>
                            <img src="@/assets/images/node_icon.png" width="50" alt="Node icon"/>
                            <img src="@/assets/images/graphql_icon.png" width="100" alt="GraphQL icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </PageSection>

        <!-- Recent Work -->
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

        <!-- Contact -->
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
                        name="contact-form"
                        class="contactForm"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                    >
                        <input
                            type="hidden"
                            name="form-name"
                            value="contact-form"
                        />
                        <InputGroup>
                            <FormLabel>Name/Company</FormLabel>
                            <TextInput
                                v-model="contactForm.name"
                                name="name"
                            />
                        </InputGroup>
                        <InputGroup>
                            <FormLabel>Email</FormLabel>
                            <TextInput
                                v-model="contactForm.email"
                                name="email"
                            />
                        </InputGroup>
                        <InputGroup>
                            <FormLabel>Phone</FormLabel>
                            <TextInput
                                v-model="contactForm.phone"
                                name="phone"
                            />
                        </InputGroup>
                        <InputGroup>
                            <FormLabel>Message</FormLabel>
                            <TextBox
                                v-model="contactForm.message"
                                name="message"
                            />
                        </InputGroup>

                        <AppButton
                            type="submit"
                            class="white"
                        >Send</AppButton>
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
        margin-bottom: 3rem;
        color: rgba(255, 255, 255, 0.7);
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

    .content {
        display: flex;
        align-items: center;
        margin-top: 5rem;
        @include breakpoint(ipadPro) {
            flex-wrap: wrap;
            justify-content: center;
        }
    }

    .brainIllustration {
        display: block;
        margin-right: 4rem;
        width: 40%;
        @include breakpoint(laptop) {
            width: 40%;
            min-width: 375px;
        }
        @include breakpoint(ipadPro) {
            margin-bottom: 2rem;
        }
        @include breakpoint(tablet-land) {
            height: auto;
            width: 300px;
            margin: 0 auto;
        }
    }

    .copy {
        margin-bottom: 3rem;
        color: #fff;
        font-weight: 200;
        font-size: 2.4rem;
        line-height: 1.5;
        @include breakpoint(ipadPro) {
            font-size: 2rem;
            text-align: center;
        }
    }

    .icon-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        @include breakpoint(ipadPro) {
            justify-content: center;
        }
        img {
            margin: 2rem 2rem 1rem 0;
        }
    }
}

/* section.recentWorkSection {

} */

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
                border-radius: 10px;
            }
            @include breakpoint(mobile) {
                width: 100%;
            }
        }
    }
}
</style>

