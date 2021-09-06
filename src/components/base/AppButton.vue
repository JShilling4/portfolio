<template>
    <button
        :type="type"
        :class="[
            'appButton',
            {
                primary: color == 'primary',
                secondary: color == 'secondary'
            }
        ]"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "AppButton",
    props: {
        color: {
            type: String,
            default: "primary",
        },
        type: {
            type: String,
            default: "button",
        },
    },
};
</script>

<style lang="scss" scoped>
button {
    font-family: var(--main-font);
    padding: 1rem;
    background-color: transparent;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    outline: none;
    min-width: 15rem;
    border-radius: var(--input-border-radius);
    letter-spacing: 1px;
    font-size: 1.6rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, letter-spacing 0.3s;

    &:hover {
        letter-spacing: 1.4px;
        background-color: var(--primary-color);
        color: #fff;
    }

    &.secondary {
        border: 2px solid var(--secondary-color);
        color: var(--secondary-color);
        &:hover {
            background-color: var(--secondary-color);
            color: #fff;
        }
    }

    &.white {
        background-color: #fff;
        color: var(--secondary-color);
        border: 2px solid var(--secondary-color);
        &:hover {
            background-color: var(--primary-color);
            color: #fff;
        }
    }
}
</style>
