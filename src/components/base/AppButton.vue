<template>
    <button :class="['appButton', { primary: color == 'primary', secondary: color == 'secondary'}]">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'AppButton',
    props: {
        color: {
            type: String,
            default: 'primary'
        }
    }
}
</script>

<style lang="scss" scoped>
button {
    font-family: $main-font;
    padding: 1rem;
    background-color: transparent;
    border: 2px solid $primary-color;
    color: $primary-color;
    outline: none;
    min-width: 15rem;
    border-radius: 3px;
    letter-spacing: 1px;
    font-size: 1.6rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, letter-spacing 0.3s;
    &:hover {
        letter-spacing: 1.4px;
        background-color: $primary-color;
        color: #fff;
    }
    &.secondary {
        border: 2px solid $secondary-color;
        color: $secondary-color;
        &:hover {
            background-color: $secondary-color;
            color: #fff;
        }
    }
}
</style>
