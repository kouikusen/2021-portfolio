<template>
  <div class="home">
    <TopHero />
    <MainSection title="Works" id="works">
      <WorkCard
        v-for="item in Projects"
        :key="item.title"
        :item="item"
      ></WorkCard>
    </MainSection>
    <MainSection title="Creations" ifSpecial="true"
      ><ImageGalleryRow :items="Creations" />
    </MainSection>
  </div>
</template>

<script>
// @ is an alias to /src
import TopHero from "@/components/TopHero.vue";
import MainSection from "@/components/MainSection.vue";
import WorkCard from "@/components/WorkCard.vue";
import ImageGalleryRow from "@/components/ImageGalleryRow.vue";

import Projects from "@/assets/data/projects.json";
import Creations from "@/assets/data/creations.json";

export default {
  name: "Home",
  components: {
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
