<template>
  <div
    class="work-hero"
    :style="{
      backgroundImage:
        'url(' +
        require(`@/assets/images/works/${item.url}__top-image.png`) +
        ')',
    }"
  >
    <div class="work-hero__content">
      <h3 class="work-hero__description">{{ item.description }}</h3>
      <h1 class="work-hero__title all__accent-font">{{ item.title }}</h1>
      <WorkTypeLabels :types="item.types" />
    </div>
  </div>
</template>

<script>
import WorkTypeLabels from "@/components/WorkTypeLabels.vue";

export default {
  name: "WorkHero",
  components: {
    WorkTypeLabels,
  },
  props: {
    item: Object,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.work-hero {
  height: 50vh;
  position: relative;

  background-size: cover;
  background-position: center;
  background-color: var(--dark-grey);
  background-blend-mode: multiply;
  @media (prefers-color-scheme: light) {
    background-blend-mode: overlay;
  }

  @include sp {
    height: 100%;
  }

  &__content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: left;

    color: var(--white);

    @include sp {
      position: relative;
      transform: translate(0, 0);
      top: 0;
      left: 0;
      padding: $gutter-s;
    }
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