<template>
    <footer>
        &copy;{{ new Date().getFullYear() }} Justin Shilling
    </footer>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
footer {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    background-color: $main-bg-color;
    height: 10rem;
    color: #fff;
    border-top: 4px solid $primary-color;
}
</style>
