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
  <MainSection title="Creations" ifSpecial="true"
    ><ImageGalleryRow />
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
import ImageGalleryRow from "./components/ImageGalleryRow.vue";

import Projects from "./assets/data/projects.json";
import Creations from "./assets/data/creations.json";

export default {
  name: "App",
  components: {
    HelloWorld,
    Header,
    TopHero,
    MainSection,
    WorkCard,
    ImageGalleryRow,
  },
  data() {
    return {
      Projects,
      Creations,
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
