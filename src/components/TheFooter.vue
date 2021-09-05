<template>
    <footer>
        <div>&copy;{{ new Date().getFullYear() }} Justin Shilling</div>
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
    margin-top: 3.3rem;
    height: 20rem;
    color: #fff;
    border-top: 4px solid $primary-color;
    transform: skewY(2deg);
    div {
        transform: skewY(-2deg);
    }
}
</style>
