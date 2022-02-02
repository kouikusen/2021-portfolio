<template>
  <WorkPage :name="name">
    <img src="@/assets/images/works/by-them__top-cover.png" alt="cover image" />

    <p>
      「by
      them」は2019年に始まった恋愛系WEBメディアです。私はロゴデザイン、サイト全体のデザインを制作しました。
    </p>

    <h1>LOGO DESIGN</h1>

    <div class="flex reverse">
      <div>
        <h2>ロゴコンセプト</h2>
        <p>
          「恋をはじめとする人間関係に悩んでいるとき。そっと肩を支えて想いを聞いてくれ、一緒に一歩前へ進んでくれるような存在に。誰かに話したいけど話せなかった心の中のモヤモヤがかたちになって、読めば少し、気持ちが軽くなる。<br />
          「by them(バイゼム)」はそんなWebマガジンです。」<br />
          <br /><br />
          上記のコンセプトを前提に、ロゴは親近感のあるカリグラフィーで作り、人間の多様性と不完成さを表現するため、視覚バランスが崩れないように手書き風にしています。そして、人間の多様性・無限性を表現するため、メイン配色は淡い黄色から緑のグラデーション(スペクトラム)としました。
        </p>
      </div>
      <div>
        <img
          src="@/assets/images/works/by-them__logo.svg"
          alt="Logo"
          style="max-width: 350px"
        />
      </div>
    </div>
    <img
      src="@/assets/images/works/by-them__logo-draft.png"
      alt="Design Draft"
    />
    <h2 style="margin-top: 80px">Final Design</h2>
    <div class="flex">
      <img
        src="@/assets/images/works/by-them__logo-final-1.png"
        alt="Logo"
        style="max-width: 200px"
      />
      <img
        src="@/assets/images/works/by-them__logo-final-2.png"
        alt="Logo"
        style="max-width: 800px"
      />
    </div>

    <h1>WEB DESIGN</h1>
    <p>
      WEBサイトのデザインに関しては、サイト全体は出来る限り、マージンと余白を広くして、記事を読む時や、サイトブラウジング際にストレスを感じないようにしています。記事タイトルなどには感性とかわいさを同時に持ってるフォント「貂明朝体」を使用し、アクセントを加えています。
    </p>
    <img src="@/assets/images/works/by-them__web-design.png" alt="Web Design" />
  </WorkPage>
</template>

<script>
import WorkPage from "@/components/WorkPage.vue";

export default {
  name: "Voting Guide 2020",
  components: {
    WorkPage,
  },
  props: {},
  data() {
    return {
      name: "by-them-jp",
    };
  },
};
</script>

<style scoped lang="scss">
.flex {
  display: flex;
  align-items: center;
  margin-bottom: $gutter;
  column-gap: 20px;

  @include sp {
    display: block;
  }
}

.reverse {
  flex-direction: row-reverse;
}
</style>