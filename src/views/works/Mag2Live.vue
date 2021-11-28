<template>
  <WorkPage :name="name">
    <img
      src="@/assets/images/works/Mag2-Live__top-cover1.png"
      alt="cover image"
      style="max-width: 450px"
    />

    <h1>APP UI/UX DESIGN</h1>

    <div class="flex">
      <img
        src="@/assets/images/works/Mag2-Live__app-design.png"
        alt="App UI/UX Design"
        style="max-width: 200px"
      />
      <p>
        2020 Mag2 Inc. released a live streaming smart device application and I
        helped with the UI/UX Design.<br /><br />
        This is my first project to design a application instead of web pages,
        so I did a lot of research to understand how an application should be
        designed. It was a lot diffrent from web design especially when it comes
        to interactions.<br /><br />
        Although things users have controll of was limited due to it was a new
        service with simple functions, I tried my best to make it look simple
        and minimal instead of shabby and uncompleted.
      </p>
    </div>

    <h1>LOGO DESIGN</h1>
    <img
      src="@/assets/images/works/Mag2-Live__logo.png"
      alt="Logo image"
      style="max-width: 300px"
    />
  </WorkPage>
</template>

<script>
import WorkPage from "@/components/WorkPage.vue";

export default {
  name: "Mag2! Live",
  components: {
    WorkPage,
  },
  props: {},
  data() {
    return {
      name: "Mag2-Live",
    };
  },
};
</script>

<style scoped lang="scss">
/* Set your aspect ratio */
.video-container {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 56.25%; /* creates a 16:9 aspect ratio */
}

.video-container iframe,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
}

/* And set the max-width of the parent element */
.video-wrap {
  width: 100%;
  max-width: 600px;
}
</style>