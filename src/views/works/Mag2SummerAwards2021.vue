<template>
  <WorkPage :name="name">
    <img
      src="@/assets/images/works/Mag2-Summer-Awards-2021__top-cover.png"
      alt="cover image"
    />
    <p>
      In 2021 I designed and built an event website for an event called "Mag2
      Summer Awards 2021" for Magmag, Inc.<br />
      <br />
      Due to a tight schedule, I tried a no-code web-based tool, Webflow, to
      accelerate my work. I finished the basic HTML and CSS structure and
      components in Webflow and use the Export Code function to export the HTML
      and CSS. Then created a Vue project to use the code from Webflow as
      components’ template code to make it a dynamic website.<br />
      <br />
    </p>
    <div class="video-wrap">
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/cb1XEWruvOw?controls=1&autoplay=1&loop=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <p>
      This is the first time I tried to implement 3D modeling and animation
      using Cinema 4D and Realflow to create a 3D fluid simulation animation to
      build the key visual for the site. The design is combined by a 3D model of
      a trophy with the company’s official character and a fluid simulation. It
      symbolize the summer element which most of us living in Tokyo can’t get to
      enjoy during the pandemic. Then I used Adobe After Effects to compose them
      into a video clip as a opening video for the website.
    </p>
  </WorkPage>
</template>

<script>
import WorkPage from "@/components/WorkPage.vue";

export default {
  name: "Mag2 Summer Awards 2021",
  components: {
    WorkPage,
  },
  props: {},
  data() {
    return {
      name: "Mag2-Summer-Awards-2021",
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