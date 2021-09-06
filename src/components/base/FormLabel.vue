<template>
    <label
        id="id"
        class="formLabel"
        :style="{
            display: isInline ? 'inline' : 'block'
        }"
    >
        <slot></slot>
    </label>
</template>

<script>
export default {
    name: "FormLabel",
    props: {
        id: {
            type: String,
        },
        isInline: {
            type: Boolean,
            default: false
        }
    },
};
</script>

<style lang="scss" scoped>
label {
    color: rgba(255, 255, 255, 0.781);
    margin-left: 3px;
    margin-bottom: 4px;
}
</style>