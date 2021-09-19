<template>
    <p :style="{
        marginBottom: mb,
        width: width
    }">
        <slot></slot>
    </p>
</template>
<script>
export default {
    props: {
        mb: {
            type: String,
            default: "",
        },
        width: {
            type: String,
            default: "100%",
        },
    },
};
</script>
<style lang="scss">
p {
    color: #fff;
    font-weight: 200;
    font-size: 1.8rem;
    @include breakpoint(tablet-land) {
        text-align: center;
    }
}
</style>