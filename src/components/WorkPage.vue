<template>
  <div class="work">
    <WorkHero :item="item" />
    <div class="work__content">
      <slot></slot>
    </div>

    <!-- project information -->
    <div class="work__info">
      <div class="work__info__row">
        <div class="work__info__row__item">
          <h4>POSITION</h4>
          <ul>
            <li v-for="item in getPositionItems" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div class="work__info__row__item">
          <h4>WORK</h4>
          <ul>
            <li v-for="item in getWorkItems" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div class="work__info__row__item">
          <h4>ORG</h4>
          <ul>
            <li>{{ item.org }}</li>
          </ul>
        </div>
        <div class="work__info__row__item">
          <h4>YEAR</h4>
          <ul>
            <li>{{ item.year }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- previous/next -->
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
  computed: {
    getPositionItems: function () {
      return this.item.position.split("\n");
    },
    getWorkItems: function () {
      return this.item.work.split("\n");
    },
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
    padding: 1rem;

    img {
      width: 100%;
    }

    p {
      max-width: $paragraphMaxWidth;
      text-align: left;
    }
  }

  &__info {
    border-top: 5px solid $middleGrey;
    border-bottom: 5px solid $middleGrey;
    max-width: $paragraphMaxWidth;
    padding: $gutter 10px;
    * {
      margin: 0;
    }

    &__row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      //   grid-auto-rows: minmax(100px, auto);
      justify-content: center;
      gap: 1rem;
      margin-left: auto;
      margin-right: auto;

      &__item {
        text-align: left;
        h4 {
          font-size: 0.8rem;
          color: $middleGrey;
          margin-bottom: 0.5rem;
        }
        ul {
          padding: 0;
          li {
            list-style: none;
            margin-bottom: 0.3rem;
          }
        }
      }
    }
  }
}
</style>