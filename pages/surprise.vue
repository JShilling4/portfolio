<template>
  <div class="surprise-wrapper">
    <img src="@/assets/images/surprise.jpg" alt="" />
    <h1>Happy Valentine's Day!!</h1>
    <p class="surprise-text">
      Well, I couldn't let you go a Valentine's day without hearing how much I
      love & appreciate you in a special way, so.....surprise
      <FontAwesomeIcon :icon="['fas', 'heart']" class="heart-icon" />! I love
      that I get to spend every day with you and I can't imagine living life
      without you. You bring the better version of myself to the surface and
      make me a happier person. I will love you for the rest of my life!
    </p>

    <h2>
      <span class="red"
        ><FontAwesomeIcon
          :icon="['fas', 'heart']"
          class="heart-icon" />Love<FontAwesomeIcon
          :icon="['fas', 'heart']"
          class="heart-icon" /></span
      >, <br />
      Justin
    </h2>
  </div>
</template>

<script setup lang="ts"></script>

<style>
body {
  background-color: white;
}
</style>
<style lang="scss" scoped>
.surprise-wrapper {
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 2rem 4rem;
}

img {
  max-width: 100%;
  max-height: 400px;
}

.red {
  color: red;
}

h1 {
  color: rgb(253, 109, 133);
  font-size: 38px;
}

p {
  margin-top: 1rem;
  font-size: 20px;
  padding: 2rem;
  line-height: 2;
  text-align: left;
}

.heart-icon {
  color: red;
}
</style>
