<template>
  <div class="header">
    <div class="header__container">
      <div class="header__list">
        <router-link class="header__items" to="/">Work(Eng)</router-link>
        <router-link class="header__items" to="/?lang=jp"
          >Work(日本語)</router-link
        >
        <router-link class="header__items" to="/about">About</router-link>
        <a class="header__items" @click="scrollMeTo('contact')">Contact</a>
      </div>

      <div class="header__list">
        <a
          class="header__items"
          href="https://twitter.com/kiks19k"
          target="_blank"
        >
          <img src="@/assets/icons/twitter.svg" alt="" />
        </a>
        <a
          class="header__items"
          href="https://www.instagram.com/kou.ikusen/"
          target="_blank"
        >
          <img src="@/assets/icons/instagram.svg" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    scrollMeTo(refName) {
      var element = document.getElementById(refName);
      var top = element.offsetTop;

      window.scrollTo({ top: top, behavior: "smooth" });
    },
  },
  computed: {
    getWorkUrl() {
      if (this.$route.path.indexOf("jp") !== -1) {
        return "/?lang=jp";
      } else {
        return "/";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 40px 20px;
  backdrop-filter: blur(10px);

  @media (prefers-color-scheme: dark) {
    background-color: rgba(0, 0, 0, 0.8);
  }

  @include sp {
    padding: 20px;
  }

  a {
    color: var(--white);
    text-decoration: none;
    box-sizing: border-box;
    border-bottom: 5px solid rgba(0, 0, 0, 0);
    cursor: pointer;

    &:hover {
      border-bottom: 5px solid $yellow;
      transition: all 0.1s ease-in-out;
    }
  }

  &__list {
    display: flex;
    column-gap: 20px;
  }

  &__container {
    max-width: $bigMaxWidth;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  &__items {
    display: inline-block;
    // padding: 0 20px;
    font-weight: 500;

    img {
      @media (prefers-color-scheme: light) {
        filter: invert(1);
      }
    }
  }
}
</style>