<template>
  <Header />
  <div class="background-black">
    <router-view v-slot="{ Component }">
      <transition name="scale-custom" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>

  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.background-black {
  background-color: var(--black);
}

.scale-custom-enter-active,
.scale-custom-leave-active {
  transition: all 0.5s ease;
}

.scale-custom-enter-from,
.scale-custom-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
