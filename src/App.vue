<template>
  <Header />
  <TopHero />
  <MainSection title="Works">
    <WorkCard
      v-for="item in Projects"
      :key="item.title"
      :item="item"
    ></WorkCard>
  </MainSection>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import TopHero from "./components/TopHero.vue";
import MainSection from "./components/MainSection.vue";
import WorkCard from "./components/WorkCard.vue";

import Projects from "./assets/data/projects.json";

export default {
  name: "App",
  components: {
    HelloWorld,
    Header,
    TopHero,
    MainSection,
    WorkCard,
  },
  data() {
    return {
      Projects,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
