<template>
    <div>
        <!-- Hero -->
        <PageSection class="heroSection">
            <div class="container">
                <h1 class="heading hero">
                    Hello, I'm <span class="accent">Justin Shilling</span>.
                </h1>
                <p class="heroCopy">
                    Creative web developer specializing in <span class="accent">UI/UX</span>.
                </p>

                <!-- <a
                    href="./Justin_Shilling_Resume.pdf"
                    target="_blank"
                >
                    <AppButton class="secondary">Resumé</AppButton>
                </a> -->
                <a href="#aboutSection">
                    <AppButton class="secondary">Tell Me More</AppButton>
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

                <div class="content">
                    <img
                        src="@/assets/images/brain3_cropped2.png"
                        class="brainIllustration"
                        alt="Right and left brain illustration"
                    />
                    <div>
                        <SectionHeading
                            align="left"
                            mb="2rem"
                        >
                            About Me
                        </SectionHeading>

                        <p class="copy">
                            I <span class="accent">love</span> working in a profession where I can <span class="accent">satisfy</span> the tug of war between the left & right
                            sides of my brain. There is nothing more <span class="accent">fulfulling</span> to me than being able to solve problems through <span class="accent">code</span> and create
                            a work of <span class="accent">art</span> at the same time!
                        </p>

                        <SectionHeading
                            align="left"
                            mb="2rem"
                        >
                            Skills
                        </SectionHeading>
                        <p class="copy">
                            Here are some of the <span class="accent">technologies</span> I am currently using as a Senior Front End Developer for
                            <a
                                href="https://www.ruoff.com"
                                class="accent"
                            >Ruoff Mortgage</a> and on side projects:
                        </p>

                        <div class="icon-container">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
                                alt="Sass icon"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
                                alt="Vue icon"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
                                alt="Svelte icon"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                                alt="React icon"
                                class="react"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                                alt="Node icon"
                                class="node"
                            />
                            <img
                                src="@/assets/images/jest_icon.svg"
                                alt="Jest icon"
                                class="jest"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg"
                                alt="GraphQL icon"
                            />
                        </div>

                        <a href="#recentWorkSection" class="projectsLink">
                            <AppButton class="secondary">See Projects</AppButton>
                        </a>
                        <!-- <p class="copy">Here are some of the supporting libraries & tools I am using to glue it all together:</p> -->
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
                <div class="heading-container">
                    <SectionHeading mb="8rem">Some Recent Work</SectionHeading>
                </div>

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
                <div class="heading-container">
                    <SectionHeading>Get In Touch</SectionHeading>
                </div>

                <div class="content">
                    <form
                        name="contact-form"
                        class="contactForm"
                        method="post"
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
                                required
                            />
                        </InputGroup>
                        <InputGroup>
                            <FormLabel>Email</FormLabel>
                            <TextInput
                                v-model="contactForm.email"
                                name="email"
                                required
                            />
                        </InputGroup>
                        <InputGroup>
                            <FormLabel>Message</FormLabel>
                            <TextBox
                                v-model="contactForm.message"
                                name="message"
                                required
                            />
                        </InputGroup>

                        <AppButton
                            type="submit"
                            class="secondary"
                        >Submit</AppButton>
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
import SectionHeading from "@/components/layout/section/SectionHeading";

export default {
    components: {
        ProjectContainer,
        PageSection,
        SectionHeading,
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
                message: null,
            },
        };
    },

    methods: {
        onFormSubmit() {
            alert("submitted");
        },
    },

    mounted() {},
};
</script>

<style lang="scss">
.container {
    max-width: var(--main-container-width);
    margin: 0 auto;
}

.heading-container {
    text-align: center;
}

section.heroSection {
    display: flex;
    align-items: center;
    min-height: 100vh;
    text-align: center;

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
    span.accent {
        color: var(--tertiary-color);
    }
}

section.aboutSection {
    position: relative;
    padding-bottom: 16rem;
    @include breakpoint(mobile) {
        padding-bottom: 4rem;
    }
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
        margin-right: 10%;
        width: 40%;
        @include breakpoint(laptop) {
            width: 40%;
            min-width: 375px;
        }
        @include breakpoint(ipadPro) {
            margin-bottom: 2rem;
            margin-right: 0;
        }
        @include breakpoint(tablet-land) {
            height: auto;
            width: 300px;
            margin: 0 auto 4rem;
        }
    }

    .copy {
        margin-bottom: 3rem;
        color: rgba(255, 255, 255, 0.85);
        font-weight: 200;
        font-size: 2rem;
        line-height: 1.75;
        max-width: 57rem;
        @include breakpoint(ipadPro) {
            max-width: 70rem;
        }
        @include breakpoint(mobile) {
            font-size: 1.8rem;
            text-align: left;
        }

        &:first-of-type {
            margin-bottom: 5rem;
        }

        .accent {
            color: var(--primary-color);
            font-weight: 400;
        }
    }

    .icon-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 2rem;
        @include breakpoint(ipadPro) {
            justify-content: center;
        }
        img {
            margin: 0 2rem 3rem 0;
            width: 50px;
            &.jest {
                width: 40px;
            }
            &.react {
                width: 70px;
                margin: 0 1rem 3rem -1rem;
            }
            &.node {
                width: 70px;
            }
        }
    }

    button {
        display: block;
        width: 20rem;
        @include breakpoint(tablet-land) {
            display: none;
        }
    }
}

section.recentWorkSection {
    padding-top: 16rem;
    padding-bottom: 16rem;
    @include breakpoint(mobile) {
        padding-top: 8rem;
        padding-bottom: 8rem;
    }
}

section.contactSection {
    /* background-color: var(--secondary-color); */
    @include breakpoint(mobile) {
        padding-bottom: 4rem;
    }
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

        button {
            margin-top: 2rem;
            width: 15rem;
        }
    }
}
</style>

