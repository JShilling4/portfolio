<template>
    <h2
        class="heading"
        :style="{
            textAlign: align,
            marginBottom: bMargin
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
        bMargin: {
            type: String,
            default: "6rem",
        }
    },
};
</script>

<style lang="scss" scoped>
.heading {
    font-size: 3.6rem;
    font-weight: 500;
    color: #fff;
    text-align: center;
    @include breakpoint(mobile) {
        font-size: 2.8rem;
    }
}
</style>