<template>
    <div
        class="input-group"
        :style="{
            marginBottom: bottomMargin,
        }"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "InputGroup",
    props: {
        bottomMargin: {
            type: String,
            default: "2rem",
        },
    },
};
</script>

<style lang="scss" scoped>
</style>