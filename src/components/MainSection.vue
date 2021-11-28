<template>
  <div class="main-section" :class="{ special: ifSpecial }">
    <h1 class="main-section__title all__05-outline all__accent-font">
      {{ title }}
    </h1>
    <div class="main-section__content"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "MainSection",
  props: {
    title: String,
    ifSpecial: Boolean,
  },
};
</script>

<style scoped lang="scss">
.main-section {
  background-color: var(--black);
  padding: $gutter 0;

  color: var(--white);

  &__title {
    font-size: 5vw;
  }

  &__content {
    max-width: $middleMaxWidth;
    padding: 2rem 1rem;
    margin: 0 auto;
  }
}

.special {
  background-color: var(--white);

  background-image: url("../assets/images/canvas-texture.jpg");
  background-blend-mode: multiply;
  background-size: cover;

  .main-section__title {
    // color: var(--black);
    -webkit-text-stroke: var(--black) 0.5px;
  }
}
</style>