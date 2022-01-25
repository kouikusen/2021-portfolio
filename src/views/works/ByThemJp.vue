<template>
  <WorkPage :name="name">
    <img src="@/assets/images/works/by-them__top-cover.png" alt="cover image" />

    <p>
      「by
      them」は2019年に始まった恋愛系WEBメディアです。私はロゴデザイン、サイト全体のデザインを制作した。
    </p>

    <h1>LOGO DESIGN</h1>

    <div class="flex reverse">
      <div>
        <h2>ロゴコンセプト</h2>
        <p>
          「恋をはじめとする人間関係に悩んでいるとき。そっと肩を支えて想いを聞いてくれ、一緒に一歩前へ進んでく
          れるような存在に。誰かに話したいけど話せなかった心の中のモヤモヤがかたちになって、読めば少し、気持ち
          が軽くなる。「by them(バイゼム)」はそんなWebマガジンです。」<br /><br />
          上記のコンセプトを前提に、ロゴは親近感のあるカリグラフィーで作り、人間の多様性と不完成さを表現したい
          ので、視覚バランスが崩れない限り、手書きにしかない欠陥と非對稱性を保留してる。そして、人間多様性の無
          限性を表現したいため、メイン配色は淡い黄色から緑のグラデーション(スペクトラム)とした。
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
      WEBサイトのデザインに関しては、サイト全体は出来る限り、マージンと余白を広くして、記事を読む時や、サ
      イトブラウジング際にストレスを感じないようにしている。記事タイトルなどには感性とかわいさを同時に持っ
      てるフォント「貂明朝体」を使用し、アクセントを加えている。
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