<template>
  <WorkPage :name="name">
    <img
      src="@/assets/images/works/Mag2-Summer-Awards-2021__top-cover.png"
      alt="cover image"
    />
    <p>
      サイトの流入で、サービスのCVの上昇に繋がるため、キャンペーンサイトのデザイン、コーディングを担当しました。
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
      このプロジェクトでは、新しい技術に挑戦しました。<br />
      初めてノーコードツール、Webflow の導入と、Cinema4D、Realflow と Premiere
      Pro で 3Dアニメーションの宣伝動画を作成しました。
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
      name: "Mag2-Summer-Awards-2021-jp",
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