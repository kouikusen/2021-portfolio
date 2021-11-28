<template>
  <WorkPage :name="name">
    <!-- <img
      src="@/assets/images/works/AR-New-Year-Card-2019__top-cover.png"
      alt="cover image"
    /> -->
    <img
      src="@/assets/images/works/AR-New-Year-Card-2019__gif.gif"
      alt="AR gif"
      style="max-width: 300px"
    />

    <p>
      It is a tradition for Japanese people to send out 年賀状（New Year
      Card）to families and friends when it's New Year.<br /><br />
      2019 was the second year I designed the New Year's Card for Mag2 Inc..<br />
      The concept was to add a little bit of creativity with the help of
      technology. I managed to make the experience expanded from 2D to 3D as
      long as the user has a device with camera and internet browser installed.
      No apps and complecated installation needed.<br /><br />
      By scanning the QR Code on the New Year's Card and access the webpage,then
      point the camera to the Card, the 3D animation will appear on the Card.
    </p>
    <div class="video-wrap">
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/giHhmVr4vVk?controls=1&loop=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </WorkPage>
</template>

<script>
import WorkPage from "@/components/WorkPage.vue";

export default {
  name: "AR New Year's Card",
  components: {
    WorkPage,
  },
  props: {},
  data() {
    return {
      name: "AR-New-Year-Card-2019",
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