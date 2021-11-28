<template>
  <div class="gallery">
    <div class="gallery__row-container">
      <div class="gallery__row">
        <div
          class="gallery__item-container"
          v-for="item in getRowArray('0')"
          :key="item.noInRow"
        >
          <img
            class="gallery__item-img"
            :src="require(`@/assets/images/creations/${item.imageUrl}`)"
            :alt="item.title"
          />
          <a
            class="gallery__item-link"
            target="_blank"
            v-if="item.url"
            :href="item.url"
          >
            <img src="@/assets/icons/open-in-new.svg" alt="open in new tab" />
          </a>
        </div>
      </div>
      <div class="gallery__row">
        <div
          class="gallery__item-container"
          v-for="item in getRowArray('1')"
          :key="item.noInRow"
        >
          <img
            class="gallery__item-img"
            :src="require(`@/assets/images/creations/${item.imageUrl}`)"
            :alt="item.title"
          />
          <a
            class="gallery__item-link"
            target="_blank"
            v-if="item.url"
            :href="item.url"
          >
            <img src="@/assets/icons/open-in-new.svg" alt="open in new tab" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageGalleryRow",
  props: {
    items: Array,
  },
  methods: {
    getRowArray: function (rowNo) {
      const newArray = this.items.filter(function (item) {
        return item.row == rowNo;
      });
      return newArray;
    },
  },
  computed: {
    getImageUrl: function (url) {
      return require("@/assets/images/creations/" + url);
    },
  },
};
</script>

<style scoped lang="scss">
.gallery {
  width: 100%;
  height: auto;
  overflow-x: scroll;
  padding: 10px 0;

  // &__row-container {
  //   animation: slide infinite 20s alternate;
  //   animation-timing-function: linear, ease-in;
  //   &:hover {
  //     animation-play-state: paused;
  //   }
  // }

  &__row {
    display: flex;
    margin-bottom: 10px;
  }

  &__item-container {
    position: relative;
    margin-right: 10px;
    height: 40vh;
  }

  &__item-img {
    height: 100%;
    width: auto;
  }

  &__item-link {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;

    img {
      width: 20px;
      height: 20px;

      position: absolute;
      top: 5px;
      right: 5px;
    }
  }
}
/* width */
::-webkit-scrollbar {
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--dark-grey);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--black);
}
@keyframes slide {
  0% {
    transform: translateX(0vh);
  }
  100% {
    // padding-left: 120vh;
    transform: translateX(-120vh);
  }
}
</style>