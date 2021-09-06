<template>
    <h2 class="heading">
        <slot></slot>
    </h2>
</template>

<script>
export default {
    name: "PageSectionHeading",
};
</script>

<style lang="scss" scoped>
.heading {
    margin-bottom: 6rem;
    font-size: 3.6rem;
    font-weight: 600;
    color: #fff;
    text-align: center;
}
</style>