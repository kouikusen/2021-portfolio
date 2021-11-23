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
        <div class="work__info__row__item" v-if="item.www">
          <h4>WWW</h4>
          <ul>
            <li>{{ item.www }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- previous/next -->
    <div class="work__navigation">
      <div class="work__navigation__item previous" v-if="previousItem">
        <h5>PREVIOUS</h5>
        <router-link
          :to="`/works/${previousItem.url}`"
          class="work__navigation__card"
        >
          <div class="black-cover"></div>
          <h6 class="all__05-outline all__accent-font">
            {{ previousItem.title }}
          </h6>
          <img
            :src="
              require(`@/assets/images/works/${
                Projects[item.no - 1].url
              }__top-image.png`)
            "
            alt=""
          />
        </router-link>
      </div>
      <div class="work__navigation__item next" v-if="nextItem">
        <h5>NEXT</h5>
        <router-link
          :to="`/works/${nextItem.url}`"
          class="work__navigation__card"
        >
          <div class="black-cover"></div>
          <h6 class="all__05-outline all__accent-font">{{ nextItem.title }}</h6>
          <img
            :src="
              require(`@/assets/images/works/${
                Projects[item.no + 1].url
              }__top-image.png`)
            "
            alt=""
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import WorkHero from "@/components/WorkHero.vue";

import Projects from "@/assets/data/projects.json";

export default {
  name: "Mag2 Summer Awards 2021",
  components: {
    WorkHero,
  },
  props: {
    name: String,
  },
  data() {
    return {
      Projects,
      item: {},
      nextItem: {},
      previousItem: {},
    };
  },
  created: function () {
    const index = this.Projects.map(function (e) {
      return e.url;
    }).indexOf(this.name);

    // set item
    this.item = this.Projects[index];

    // set next item
    if (index + 1 < this.Projects.length) {
      this.nextItem = this.Projects[index + 1];
    } else {
      this.nextItem = null;
    }

    // set previous item
    if (index > 0) {
      this.previousItem = this.Projects[index - 1];
    } else {
      this.previousItem = null;
    }
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

  &__content:deep {
    max-width: $middleMaxWidth;
    margin: $gutter auto;
    padding: 1rem;

    * {
      margin-left: auto;
      margin-right: auto;
    }

    img {
      width: 100%;
    }

    p {
      max-width: $paragraphMaxWidth;
      text-align: left;
    }
  }

  // project info
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

  // previous / next
  &__navigation {
    display: flex;
    max-width: $paragraphMaxWidth;
    padding: $gutter 10px;
    gap: 2rem;
    margin-bottom: 0;

    &__item {
      width: 100%;
      h5 {
        position: relative;
        font-weight: 700;
        color: $middleGrey;
        border-bottom: 1px solid $middleGrey;
        margin-bottom: 1rem;
      }
    }

    .previous {
      text-align: right;

      h5::before {
        content: "";
        border-left: 1px solid $middleGrey;
        width: 1px;
        height: 100%;
        left: 5px;
        bottom: -3px;
        position: absolute;
        transform: rotate(45deg);
        // transform: translateX(5px);
      }
    }

    .next {
      text-align: left;

      h5::before {
        content: "";
        border-left: 1px solid $middleGrey;
        width: 1px;
        height: 100%;
        right: 5px;
        bottom: -3px;
        position: absolute;
        transform: rotate(-45deg);
        // transform: translateX(5px);
      }
    }

    &__card {
      position: relative;
      height: 150px;
      display: block;
      img {
        width: 100%;
        height: 150px;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        object-fit: cover;
        z-index: 0;
      }

      h6 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        font-size: 1.5rem;
      }

      .black-cover {
        background-color: $darkGrey;
        opacity: 0.8;
        z-index: 1;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
      }
    }
  }
}
</style>