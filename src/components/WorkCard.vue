<template>
  <div class="card">
    <div class="card__content">
      <h3 class="card__description">{{ item.description }}</h3>
      <h2 class="card__title all__05-outline all__accent-font">
        {{ item.title }}
      </h2>
      <WorkTypeLabels :types="item.types" />
      <img class="card__cover-image" :src="getCoverImage" alt="" />
    </div>
  </div>
</template>

<script>
import WorkTypeLabels from "@/components/WorkTypeLabels.vue";

export default {
  name: "WorkCard",
  components: {
    WorkTypeLabels,
  },
  props: {
    item: Object,
  },
  computed: {
    getCoverImage: function () {
      return require("@/assets/images/works/" +
        this.item.no +
        "__top-cover.png");
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  background-color: $darkGrey;
  padding: 4rem 2rem;
  border-radius: 2rem;
  text-align: left;

  transition: all 0.3s ease-in-out;

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
    transition: all 0.3s ease-in-out;
  }

  &__cover-image {
    width: 100%;
    margin: 4rem auto;
    transition: all 0.3s ease-in-out;
  }

  :hover > &__content > &__title {
    color: $white;
  }

  :hover > &__content > &__cover-image {
    transform: translate(0, -25px);
  }

  :hover > & {
    transform: translate(0, -20px);
  }
}
</style>