<template>
  <WorkPage :name="name">
    <img
      src="@/assets/images/works/Mag2-Live__top-cover1.png"
      alt="cover image"
      style="max-width: 450px"
    />

    <p>
      まぐまぐ!Live
      は、まぐまぐ!で有料メルマガを発行しているクリエイター専用のライブ配信機能です。<br /><br />
      クリエイターも視聴者も、まぐまぐ!Liveではコンテンツに集中してほしいという思いから、ライブ配信を初めて体験する方にとってわかりやすく、操作しやすいシンプルな設計をコンセプトとしています。<br /><br />
      ライブ配信では、コメントやいいねの送信でリアルタイムかつ双方向のコミュニケーションを楽しむことができます。メルマガ+ライブ配信で、クリエイターとメルマガ会員に新たな交流手段が生まれます。<br />2020/10
      にリリースされた iOS/Andriod
      アプリのデザインリニューアルを担当させていただきました。
    </p>

    <h1>APP UI/UX DESIGN</h1>

    <div class="flex">
      <img
        src="@/assets/images/works/Mag2-Live__app-design.png"
        alt="App UI/UX Design"
        style="max-width: 200px"
      />
      <p>
        ターゲットユーザーだけでなく、幅広い年齢層の人が利用するため、シンプルで使いやすいデザインにこだわりました。<br />
        そして、外注の開発会社とのコミュニケーションを取りながらデザインを制作し、一ヶ月ほどの短時間でアプリのデザインを作成しました。
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
      name: "Mag2-Live-jp",
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