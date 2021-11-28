<template>
  <div class="hero">
    <div class="hero__text-container">
      <img
        src="@/assets/images/portfolio-picture.png"
        alt="portfolio picture"
      />
      <p class="hero__main-content">
        Hi! I’m Kou, a Designer-Developer working remotely for Mag2 Inc. in
        Tokyo, Japan.
      </p>
      <p class="hero__sub-content">
        I am also a MFA student at Kyoto University of Art and Design. I speak
        Mandarin, Japanese, and English.<br />
        <br />
        These days my time is spent designing, prototyping, and coding. I am
        also learning how to make 3D arts.<br />
        <br />
        Out of the office you’ll find me going on camping trips, playing video
        games, and creating illustrations.
      </p>
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
    padding: 20px;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: var(--white);

    z-index: 1;
    max-width: $paragraphMaxWidth;

    img {
      margin: $gutter-s auto;
      display: block;
      max-width: 300px;
    }
  }

  &__main-content {
    font-size: 1.5rem;
    font-weight: 600;
  }

  &__sub-content {
    font-size: 1rem;
  }
}
</style>