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
      見るだけでなく、顧客との交流も得るために、2Dの紙の制限を破って、3D
      モデルと AR 技術を使用して年賀状を制作しました。
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
    <p>
      3D モデルとアニメーションを一つのファイルに収めるために、Adobe Dimension
      から Blender
      に移行しました。3Dファイルサイズが大きすぎて、ロード時間を短くするために、Google
      の圧縮アルゴリズム DRACO を導入しました。<br /><br />専用アプリをインストールせずに楽しめるよう、ブラウザでできる
      javascript ライブラリ AR.js を使用など、初めて AR
      技術に触れたため、様々な課題を克服していました。デザインから制作完成まで、一週間しかかけられなかったが、問題解決の過程は感動的でした。
    </p>
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
      name: "AR-New-Year-Card-2019-jp",
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