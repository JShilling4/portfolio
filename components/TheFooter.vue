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
        <FontAwesomeIcon :icon="['fab', 'github']" class="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/justin-shilling/"
        class="social-link"
        target="blank"
      >
        <FontAwesomeIcon :icon="['fab', 'linkedin']" class="linkedIn" />
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  padding: 18rem 0 4rem;
  color: #fff;

  .text {
    margin-bottom: 2rem;
    font-weight: 200;
  }

  .social-link {
    color: var(--tertiary-color);
    font-size: 3rem;
    margin: 0 2rem;
    transition: color 0.3s;
    &:hover {
      color: var(--secondary-color);
    }
  }
}
</style>
