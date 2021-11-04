<template>
  <div class="card">
    <div class="card__content">
      <h3 class="card__description">{{ description }}</h3>
      <h2 class="card__title all__05-outline all__accent-font">{{ title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkCard",
  props: {
    title: String,
    description: String,
    types: String,
  },
};
</script>

<style scoped lang="scss">
.card {
  background-color: $darkGrey;
  padding: 4rem 2rem;
  border-radius: 2rem;
  text-align: left;

  &__content {
    max-width: 1200px;
    margin: 0 auto;
  }

  &__description {
    font-weight: 200;
  }

  &__title {
    font-size: 3rem;
    margin-top: 0;
  }
}
</style>