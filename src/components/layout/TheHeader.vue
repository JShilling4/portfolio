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
                <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0"
                >
                    <stop
                        offset="0%"
                        style="stop-color:#0fe4d9;"
                    />
                    <stop
                        offset="25%"
                        style="stop-color:#2485e6;"
                    />
                    <stop
                        offset="50%"
                        style="stop-color:#2485e6;"
                    />
                    <stop
                        offset="75%"
                        style="stop-color:#2485e6;"
                    />
                    <stop
                        offset="100%"
                        style="stop-color:#0fe4d9;"
                    />
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
                    <rect
                        x="0"
                        y="0"
                        width="150%"
                        height="100%"
                        fill="url(#gradient)"
                    >
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

        <nav v-if="showMobileMenu" class="nav">
            <div class="nav-left">
                <a
                    href="#"
                    class="nav-item"
                >
                    About
                </a>

                <a
                    href="#"
                    class="nav-item"
                >
                    Recent Work
                </a>

                <a
                    href="#"
                    class="nav-item"
                >
                    Contact
                </a>
                <a
                    href="https://github.com/JShilling4"
                    target="_blank"
                    class="social-link"
                >
                    <FontAwesomeIcon
                        :icon="['fab', 'github']"
                        class="github"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/justin-shilling/"
                    class="social-link"
                    target="blank"
                >
                    <FontAwesomeIcon
                        :icon="['fab', 'linkedin']"
                        class="linkedIn"
                    />
                </a>
            </div>
        </nav>

        <img
            v-if="showMobileMenu"
            src="@/assets/images/icon-close.svg"
            alt="close mobile menu icon"
            class="mobileClose"
            @click="$emit('close')"
        />
        <img
            v-else
            src="@/assets/images/icon-hamburger.svg"
            alt="mobile menu icon"
            class="hamburger"
            @click="$emit('open')"
        />
    </header>
</template>

<script>
export default {
    name: "TheHeader",
    props: {
        showMobileMenu: {
            type: Boolean,
        },
    },
};
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

    .logo {
        width: 105px;
        height: 105px;
        background-color: #000;
        border-radius: 50%;
        box-shadow: 1px 4px .7rem rgba(32, 99, 245, 1);
    }

    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        @include breakpoint(tablet-land) {
            position: absolute;
            display: flex;
            flex-direction: column;
            background-color: #fff;
            width: 85%;
            top: 12rem;
            padding: 4rem 2rem;
            left: 50%;
            border-radius: 5px;
            transform: translateX(-50%);
            box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
            text-align: center;
        }
        @include breakpoint(mobile) {
            top: 10rem;
        }

        .nav-item {
            display: inline-block;
            position: relative;
            margin: 0 1.85rem;
            padding-bottom: 1rem;
            text-align: center;
            font-size: 1.8rem;
            font-weight: 600;
            letter-spacing: 1px;
            color: var(--body-font-color);
            transition: color 0.3s;
            @include breakpoint(tablet-land) {
                margin: 0;
                padding: 1.5rem 0;
                font-weight: 600;
                font-size: 2.3rem;
                display: block;
                color: var(--body-font-color);
            }
            @include breakpoint(mobile) {
                font-size: 1.8rem;
            }

            &:hover {
                &:after {
                    width: 100%;
                    background-color: var(--secondary-color);
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
            font-size: 4rem;
            margin-left: 2rem;
            transition: color 0.3s;
            &:hover {
                color: var(--primary-color);
            }
            &:not(:last-child) {
                margin-left: 4rem;
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
        margin-left: auto;
        @media screen and (min-width: 769px) {
            display: none;
        }
    }
}
</style>
