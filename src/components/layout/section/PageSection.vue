<template>
    <section>
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: "PageSection",
    props: {},
};
</script>

<style lang="scss" scoped>
section {
    padding: 12rem 4rem;
    @include breakpoint(tablet-port) {
        padding: 16rem 3rem;
    }
    @include breakpoint(mobile) {
        padding: 8rem 2rem;
    }
    &.slanted {
        position: relative;
        overflow: visible;
        z-index: 1;

        &:before,
        &:after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            /* border-top: 36px solid var(--secondary-color); */
            left: 0;
            background: inherit;
            z-index: -1;
            top: 0;
            transform-origin: left top;
            transform: skewY(-2deg);
        }

        &:after {
            bottom: 0;
            transform-origin: left bottom;
            transform: skewY(2deg);
        }

        div {
            line-height: 1.5;
        }
    }
}
</style>