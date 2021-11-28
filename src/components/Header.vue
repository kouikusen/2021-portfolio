<template>
  <div class="header">
    <div class="header__container">
      <div class="header__list">
        <router-link class="header__items" to="/">Work</router-link>
        <router-link class="header__items" to="/about">About</router-link>
        <a class="header__items" href="#">Contact</a>
      </div>

      <div class="header__list">
        <a class="header__items" href="#">
          <img src="@/assets/icons/twitter.svg" alt="" />
        </a>
        <a class="header__items" href="#">
          <img src="@/assets/icons/instagram.svg" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
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

  a {
    color: var(--white);
    text-decoration: none;
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