<template>
  <div class="main-section">
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
  },
};
</script>

<style scoped lang="scss">
.main-section {
  background-color: $black;
  padding: $gutter 0;

  color: $white;

  &__title {
    font-size: 5vw;
  }

  &__content {
    max-width: 1500px;
    padding: 2rem 1rem;
  }
}
</style>