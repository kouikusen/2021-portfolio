<template>
  <ul class="work-type-labels">
    <li class="work-type-labels__item" v-if="ifUIUXDesign">
      <img src="@/assets/icons/paint.svg" alt="" />
      UI/UX Design
    </li>

    <li class="work-type-labels__item" v-if="ifFrontendDev">
      <img src="@/assets/icons/code.svg" alt="" />
      Frontend Development
    </li>

    <li class="work-type-labels__item" v-if="if3DArt">
      <img src="@/assets/icons/3d.svg" alt="" />
      3D Art
    </li>

    <li class="work-type-labels__item" v-if="ifGraphicDesign">
      <img src="@/assets/icons/paint.svg" alt="" />
      Graphic Design
    </li>
  </ul>
</template>

<script>
export default {
  name: "WorkTypeLabels",
  props: {
    types: String,
  },
  computed: {
    ifUIUXDesign: function () {
      return this.types.indexOf("a") !== -1;
    },
    ifGraphicDesign: function () {
      return this.types.indexOf("b") !== -1;
    },
    if3DArt: function () {
      return this.types.indexOf("c") !== -1;
    },
    ifFrontendDev: function () {
      return this.types.indexOf("d") !== -1;
    },
  },
};
</script>

<style scoped lang="scss">
.work-type-labels {
  padding: 0;

  &__item {
    background-color: var(--middle-grey);
    list-style: none;
    margin-right: 0.9rem;
    display: inline-block;
    padding: 8px 10px;
    margin-top: 0.9rem;
    color: var(--white);
    font-size: 0.8rem;

    img {
      margin-right: 5px;
      vertical-align: middle;
      height: 100%;

      @media (prefers-color-scheme: light) {
        filter: invert(0.5);
      }
    }
  }
}
</style>