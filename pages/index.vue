<template>
  <div>
    <!-- Hero -->
    <PageSection class="heroSection">
      <div class="container">
        <h1 class="heading hero">
          Hello, I'm <span class="accent">Justin Shilling</span>.
        </h1>
        <p class="heroCopy">
          Creative web developer specializing in
          <span class="accent">UI/UX</span>.
        </p>
        <a href="#aboutSection">
          <AppButton class="secondary">Tell Me More</AppButton>
        </a>
      </div>
    </PageSection>
    <!-- About Me -->
    <PageSection
      id="aboutSection"
      ref="aboutSection"
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
            <SectionHeading align="left" mb="2rem"> About Me </SectionHeading>
            <p class="copy">
              In the first 5 years of my career as a
              <span class="accent">Frontend Engineer</span>, I have had the
              great pleasure of significantly contributing to the front-end of
              over 15 B2C websites and several applications including marketing
              & e-commerce platforms. <br />
              <span class="accent">Frontend development</span> satisfies the tug
              of war between the left & right sides of my brain. It has truly
              become a <span class="accent">passion</span> of mine to solve
              problems with <span class="accent">code</span> and create a work
              of <span class="accent">art</span> at the same time!
            </p>

            <SectionHeading align="left" mb="2rem"> Skills </SectionHeading>
            <p class="copy">
              Here are some of the <span class="accent">technologies</span> I
              have used working on projects for Ruoff Mortgage, Juniper by IMC
              and freelance:
            </p>

            <div class="icon-container">
              <div class="icon-wrapper">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902"
                  alt="JavaScript"
                  title="JavaScript"
                />
              </div>
              <div class="icon-wrapper">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
                  alt="Vue icon"
                  title="Vue.js"
                />
              </div>
              <div class="icon-wrapper">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  alt="React icon"
                  class="react"
                  title="React.js"
                />
              </div>
              <div class="icon-wrapper">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                  alt="Typescript icon"
                  title="Typescript"
                />
              </div>
              <div class="icon-wrapper">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
                  alt="Sass icon"
                  title="Sass"
                />
              </div>
              <div class="icon-wrapper">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                  alt="Node icon"
                  class="node"
                  title="Node.js"
                />
              </div>
              <div class="icon-wrapper">
                <img
                  src="@/assets/images/jest_icon.svg"
                  alt="Jest icon"
                  class="jest"
                  title="Jest Testing Framework"
                />
              </div>
              <div class="icon-wrapper">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg"
                  alt="GraphQL icon"
                  title="GraphQL"
                />
              </div>
              <div class="icon-wrapper">
                <img
                  src="@/assets/images/tailwind_icon.svg"
                  alt="Tailwind CSS icon"
                  title="TailwindCSS"
                />
              </div>
            </div>

            <a href="#recentWorkSection" class="projectsLink">
              <AppButton class="secondary">See Projects</AppButton>
            </a>
          </div>
        </div>
      </div>
    </PageSection>

    <!-- Recent Work -->
    <PageSection
      id="recentWorkSection"
      ref="recentWorkSection"
      class="recentWorkSection"
    >
      <div class="container">
        <div class="heading-container">
          <SectionHeading mb="8rem">Some Recent Work</SectionHeading>
          <SectionCopy mb="8rem">
            While most of my signifcant work has been done for employers and is
            not displayed here (let's discuss these projects!), here are some
            projects that live in my Github.
          </SectionCopy>
        </div>

        <ProjectContainer />
      </div>
    </PageSection>

    <!-- Contact -->
    <PageSection
      id="contactSection"
      ref="contactSection"
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
            <input type="hidden" name="form-name" value="contact-form" />
            <InputGroup>
              <FormLabel for="name">Name/Company</FormLabel>
              <TextInput v-model="contactForm.name" id="name" name="name" required />
            </InputGroup>
            <InputGroup>
              <FormLabel for="email">Email</FormLabel>
              <TextInput v-model="contactForm.email" id="email" name="email" required />
            </InputGroup>
            <InputGroup>
              <FormLabel for="message">Message</FormLabel>
              <TextBox v-model="contactForm.message" id="message" name="message" required />
            </InputGroup>
            <AppButton type="submit" class="secondary">Submit</AppButton>
          </form>
          <img src="@/assets/images/contact_vector.svg" alt="" />
        </div>
      </div>
    </PageSection>
  </div>
</template>

<script setup lang="ts">
import type { IContactForm } from "../types/IContactForm";

const contactForm = ref<IContactForm>({
  name: null,
  email: null,
  message: null,
});

useHead({
  title: "Justin Shilling - Frontend Developer",
  meta: [
    {
      name: "description",
      content:
        "Senior Frontend Developer with extensive experience building production websites & interactive web applications. I can consistently turn designs into front ends that are responsive, elegant, performant, and pixel perfect. ",
    },
  ],
});
</script>

<style lang="scss" scoped>

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
    @include breakpoint(tablet-land) {
      text-align: left;
    }
    @include breakpoint(mobile) {
      font-size: 1.6rem;
    }

    &:first-of-type {
      margin-bottom: 5rem;
    }

    .accent {
      color: var(--tertiary-color);
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
    .icon-wrapper {
      text-align: center;
      min-width: 90px;
    }
    img {
      margin: 0 2rem 3rem 0;
      width: 50px;
      &.jest {
        width: 40px;
      }
      &.react {
        width: 60px;
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
