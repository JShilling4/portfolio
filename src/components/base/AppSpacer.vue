<template>
    <div
        class="spacer"
        :style="{
            height: height,
        }"
    >
    </div>
</template>

<script>
export default {
    name: "AppSpacer",
    props: {
        height: {
            type: String,
            default: "2rem",
        }
    }
};
</script>

<style lang="scss" scoped>
</style>