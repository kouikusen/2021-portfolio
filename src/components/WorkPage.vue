<template>
  <div class="work">
    <WorkHero :item="item" />
    <div class="work__content">
      <slot></slot>
    </div>
    <div class="work__info">
      <div class="work__info__row">
        <div class="work__info__row__item">1</div>
        <div class="work__info__row__item">2</div>
      </div>
    </div>
  </div>
</template>

<script>
import WorkHero from "@/components/WorkHero.vue";

export default {
  name: "Mag2 Summer Awards 2021",
  components: {
    WorkHero,
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
.work {
  background-color: $black;
  color: $white;
  * {
    margin: 0 auto $gutter;
  }

  &__content {
    max-width: $middleMaxWidth;
    margin: $gutter auto;

    img {
      // margin: $gutter 0;
    }

    p {
      max-width: $paragraphMaxWidth;
      text-align: left;
    }
  }

  &__info {
    border-top: 5px solid $middleGrey;
    max-width: $paragraphMaxWidth;
    padding: $gutter 10px;

    &__row {
      display: flex;
    }
  }
}
</style>