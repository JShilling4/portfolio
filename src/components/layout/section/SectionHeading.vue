<template>
    <h2
        class="heading"
        :style="{
            textAlign: align,
            marginBottom: mb
        }"
    >
        <slot></slot>
    </h2>
</template>

<script>
export default {
    name: "PageSectionHeading",
    props: {
        align: {
            type: String,
            default: "center",
        },
        mb: {
            type: String,
            default: "6rem",
        }
    },
};
</script>

<style lang="scss" scoped>
.heading {
    position: relative;
    display: inline-block;
    font-size: 3.6rem;
    font-weight: 500;
    color: #fff;
    text-align: center;
    &:after {
        position: absolute;
        left: 0;
        bottom: -1rem;
        content: "";
        height: 2px;
        width: 100%;
        background-color: var(--secondary-color);
    }

    @include breakpoint(mobile) {
        font-size: 2.8rem;
    }
}
</style>