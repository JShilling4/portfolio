<template>
    <input
        class="textInput"
        :style="{
            width: width,
        }"
    />
</template>

<script>
export default {
    name: "TextInput",
    props: {
        width: {
            type: String,
            default: "100%"
        }
    }
};
</script>

<style lang="scss" scoped>
input {
    height: 4rem;
    border: none;
    border-radius: var(--input-border-radius);
    outline: none;
    background-color: var(--input-bg-color);
    color: var(--input-font-color);
    font-weight: 900;
    padding-left: 1rem;
    border: 1px solid var(--primary-color);

    &:focus {
        box-shadow: var(--input-focus-shadow);
    }
}
</style>