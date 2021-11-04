<template>
  <div class="header">
    <div class="header__container">
      <div class="header__list">
        <a class="header__items" href="#">Work</a>
        <a class="header__items" href="#">About</a>
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
  background-color: $black;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 40px 20px;

  a {
    color: $white;
    text-decoration: none;
  }

  &__container {
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  &__items {
    display: inline-block;
    padding: 0 20px;
    font-weight: 500;
  }
}
</style>