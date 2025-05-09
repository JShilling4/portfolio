<template>
  <header class="header">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="logo"
    >
      <!-- Text using the #pattern in defs as the fill -->
      <text
        x="49%"
        text-anchor="middle"
        y="48%"
        dy="0.4em"
        fill="url(#pattern)"
        font-family="arial"
        font-size="6rem"
      >
        JS
      </text>

      <defs>
        <!-- Da gradient -->
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0">
          <stop offset="0%" style="stop-color: #0fe4d9" />
          <stop offset="25%" style="stop-color: #2485e6" />
          <stop offset="50%" style="stop-color: #2485e6" />
          <stop offset="75%" style="stop-color: #2485e6" />
          <stop offset="100%" style="stop-color: #0fe4d9" />
        </linearGradient>

        <!-- Stitch 2 gradients together for seamless animation  -->
        <pattern
          id="pattern"
          x="0"
          y="0"
          width="300%"
          height="100%"
          patternUnits="userSpaceOnUse"
        >
          <rect x="0" y="0" width="150%" height="100%" fill="url(#gradient)">
            <animate
              attributeType="XML"
              attributeName="x"
              from="0"
              to="150%"
              dur="7s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            x="-149%"
            y="0"
            width="150%"
            height="100%"
            fill="url(#gradient)"
          >
            <animate
              attributeType="XML"
              attributeName="x"
              from="-149%"
              to="0"
              dur="7s"
              repeatCount="indefinite"
            />
          </rect>
        </pattern>
      </defs>
    </svg>

    <transition name="menu-grow">
      <nav v-if="props.showMobileMenu" class="nav">
        <div class="nav-left">
          <a href="#aboutSection" class="nav-item" @click="closeMenu">
            About
          </a>

          <a href="#recentWorkSection" class="nav-item" @click="closeMenu">
            Recent Work
          </a>

          <a href="#contactSection" class="nav-item" @click="closeMenu">
            Contact
          </a>
          <a
            href="https://github.com/JShilling4"
            target="_blank"
            class="social-link"
            @click="closeMenu"
            aria-label="Github"
          >
            <FontAwesomeIcon :icon="['fab', 'github']" class="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/justin-shilling/"
            class="social-link"
            target="blank"
            @click="closeMenu"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon :icon="['fab', 'linkedin']" class="social-icon" />
          </a>
        </div>
      </nav>
    </transition>

    <img
      v-if="props.showMobileMenu"
      src="@/assets/images/icon-close.svg"
      alt="close mobile menu icon"
      class="mobileClose"
      @click="emit('close')"
    />
    <img
      v-else
      src="@/assets/images/icon-hamburger.svg"
      alt="mobile menu icon"
      class="hamburger"
      @click="emit('open')"
    />
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{
  showMobileMenu: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "open"): void;
}>();

function closeMenu() {
  emit("close");
}
</script>

<style lang="scss" scoped>

.header {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  min-height: 5rem;
  width: 100%;
  @include breakpoint(tablet-land) {
    min-height: 10rem;
  }
  @include breakpoint(mobile) {
    padding: 2rem 2rem;
  }

  .logo {
    width: 105px;
    height: 105px;
    background-color: #000;
    border-radius: 50%;
    box-shadow: 1px 1px 0.75rem var(--secondary-color);
    @include breakpoint(mobile) {
      width: 80px;
      height: 80px;
    }
    text {
      @include breakpoint(mobile) {
        font-size: 4.4rem;
      }
    }
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include breakpoint(tablet-land) {
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: var(--secondary-color);
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 998;
      padding: 4rem 2rem;
      border-radius: 5px;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
      text-align: center;
    }
    .nav-item {
      display: inline-block;
      position: relative;
      margin: 0 1.85rem;
      padding-bottom: 1rem;
      text-align: center;
      font-size: 1.8rem;
      font-weight: 300;
      letter-spacing: 1px;
      color: var(--body-font-color);
      transition: color 0.3s;
      @include breakpoint(tablet-land) {
        margin: 0;
        padding: 4rem 0;
        font-weight: 200;
        color: #fff;
        font-size: 3rem;
        display: block;
      }
      @include breakpoint(mobile) {
        font-size: 2.5rem;
        padding: 2rem 0;
      }

      &:hover {
        &:after {
          width: 100%;
          background-color: var(--tertiary-color);
        }
      }

      &:after {
        position: absolute;
        bottom: 5px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        content: "";
        height: 2px;
        background-color: transparent;
        transition: width 0.3s, background-color 0.3s;
      }
    }

    .social-link {
      color: var(--secondary-color);
      transition: color 0.3s;
      margin: 0 1rem;
      display: inline-flex;
      align-items: center;

      svg {
        width: 1.8rem !important;
        height: 1.8rem !important;
      }

      @include breakpoint(tablet-land) {
        color: rgba(255, 255, 255, 0.7);
        margin: 2rem 1rem;

        svg {
          width: 2.2rem !important;
          height: 2.2rem !important;
        }
      }

      @include breakpoint(mobile) {
        svg {
          width: 2.4rem !important;
          height: 2.4rem !important;
        }
      }

      &:hover {
        color: var(--tertiary-color);
        @include breakpoint(tablet-land) {
          color: #fff;
        }
      }
    }
  }

  .hamburger {
    display: none;
    margin-left: auto;
    @include breakpoint(ipadPro) {
      display: block;
    }
  }

  .mobileClose {
    position: relative;
    margin-left: auto;
    z-index: 999;
    @media screen and (min-width: 769px) {
      display: none;
    }
  }
}

.menu-grow-enter-active,
.menu-grow-leave-active {
  transition: opacity 0.3s ease, transform 0.5s ease;
  transform-origin: top right;
}

.menu-grow-enter-from,
.menu-grow-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>
