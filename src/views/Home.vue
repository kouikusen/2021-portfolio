<template>
  <div class="home">
    <TopHero />
    <MainSection title="Works" id="works">
      <WorkCard
        v-for="item in Projects"
        :key="item.title"
        :item="item"
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-delay="300"
        data-aos-duration="800"
      >
        ></WorkCard
      >
    </MainSection>
    <MainSection title="Creations" :ifSpecial="true"
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

import ProjectsEng from "@/assets/data/projects.json";
import ProjectsJp from "@//assets/data/projects-jp.json";
import Creations from "@/assets/data/creations.json";

import AOS from "aos";
import "aos/dist/aos.css";

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
      ProjectsEng,
      ProjectsJp,
      Projects: [],
      Creations,
    };
  },
  watch: {
    $route() {
      this.reloadProjects();

      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    this.reloadProjects();
    AOS.init();
  },
  methods: {
    reloadProjects() {
      const lang = this.$route.query.lang;
      if (lang === "jp") {
        this.Projects = this.ProjectsJp;
      } else {
        this.Projects = this.ProjectsEng;
      }
    },
  },
};
</script>
