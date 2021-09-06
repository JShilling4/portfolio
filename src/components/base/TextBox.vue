<template>
    <textarea :style="{
            width: width,
        }">

    </textarea>
</template>

<script>
export default {
    name: "TextBox",
    props: {
        width: {
            type: String,
            default: "100%",
        },
    },
};
</script>

<style lang="scss" scoped>
textarea {
    font-family: "Nunito Sans", sans-serif;
    background-color: var(--input-bg-color);
    border: none;
    border-radius: var(--input-border-radius);
    height: 8rem;
    padding: 1rem;
    font-weight: 700;
    color: var(--input-font-color);
    border: 2px solid var(--input-border-color);
    outline: none;
    font-size: 1.6rem;
    &:focus {
        box-shadow: var(--input-focus-shadow);
    }
}
</style>