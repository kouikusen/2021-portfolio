<template>
  <router-link :to="`/works/${item.url}`" class="card">
    <div class="card__content">
      <h3 class="card__description">{{ item.description }}</h3>
      <h2 class="card__title all__05-outline all__accent-font">
        {{ item.title }}
      </h2>
      <WorkTypeLabels :types="item.types" />
      <img class="card__cover-image" :src="getCoverImage" alt="" />
    </div>
  </router-link>
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
        this.item.url +
        "__top-cover.png");
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  background-color: var(--dark-grey);
  padding: 4rem 2rem;
  border-radius: 2rem;
  text-align: left;
  margin-bottom: 2rem;
  text-decoration: none;
  color: var(--white);
  display: block;

  transition: all 0.3s ease-in-out;

  &__content {
    max-width: $smallMaxWidth;
    margin: 0 auto;
  }

  &__description {
    font-weight: 200;
  }

  &__title {
    font-size: 3rem;
    margin-top: 0;
    transition: all 0.3s ease-in-out;

    @include sp {
      margin-bottom: 10px;
      font-size: 2rem;
    }
  }

  &__cover-image {
    width: 100%;
    margin: 4rem auto;
    transition: all 0.3s ease-in-out;

    @include sp {
      margin: 20px auto;
    }
  }

  :hover > &__content > &__title {
    color: var(--white);
  }

  :hover > &__content > &__cover-image {
    transform: translate(0, -15px);
  }

  &:hover {
    transform: translate(0, -10px);
  }
}
</style>