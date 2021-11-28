<template>
  <div class="hero">
    <div class="hero__text-container all__accent-font all__05-outline">
      <h1 class="hero__main-title">
        <span class="hero__accent-text"
          >Hi<span class="all__accent-color">!</span></span
        >
        I am <span class="all__accent-color">Kou</span>.
      </h1>
      <h2 class="hero__sub-title">A Designer-Developer.</h2>
    </div>
    <div class="hero__photo-container">
      <!-- <img src="@/assets/images/top__kiks-photo.png" alt="" /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "TopHero",
};
</script>

<style scoped lang="scss">
.hero {
  height: 100vh;
  background-color: var(--black);

  // text
  &__text-container {
    text-align: left;

    position: absolute;
    bottom: 20%;
    left: 5%;

    z-index: 1;

    letter-spacing: -5px;

    @media (prefers-color-scheme: light) {
      color: var(--black) !important;
    }

    @include sp {
      bottom: 5%;
      left: 10%;
    }
  }

  &__main-title {
    font-size: 8vw;
    margin: 0;

    @include sp {
      font-size: 3rem;
    }
  }

  &__sub-title {
    font-size: 5vw;
    margin: 0;

    @include sp {
      font-size: 2rem;
    }
  }

  &__accent-text {
    font-size: 12vw;
  }

  // photo
  &__photo-container {
    position: absolute;
    top: 20%;
    right: 5%;
    z-index: 0;
    width: 50vw;
    height: 60vh;

    background-image: url("~@/assets/images/top__kiks-photo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;

    @media (prefers-color-scheme: light) {
      background-image: url("~@/assets/images/top__kiks-photo__light.png");
    }

    @include sp {
      width: 90vw;
      top: 5%;
    }
  }
}
</style>