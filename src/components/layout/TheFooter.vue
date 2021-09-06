<template>
    <footer>
        <div class="text">
            Designed & built by Justin Shilling &copy;{{ new Date().getFullYear() }}
        </div>
        <div>
            <a
                href="https://github.com/JShilling4"
                target="_blank"
                class="social-link"
            >
                <FontAwesomeIcon
                    :icon="['fab', 'github']"
                    class="github"
                />
            </a>
            <a
                href="https://www.linkedin.com/in/justin-shilling/"
                class="social-link"
                target="blank"
            >
                <FontAwesomeIcon
                    :icon="['fab', 'linkedin']"
                    class="linkedIn"
                />
            </a>
        </div>
    </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    margin-top: 3.3rem;
    height: 20rem;
    color: #fff;

    .text {
        margin-bottom: 2rem;
        font-weight: 200;
    }

    .social-link {
        /* color: var(--secondary-color); */
        color: rgba(255,255,255, .6);
        font-size: 3rem;
        margin: 0 2rem;
        transition: color .3s;
        &:hover {
            color: var(--secondary-color);
        }
    }
}
</style>
