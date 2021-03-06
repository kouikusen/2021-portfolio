<template>
  <WorkPage :name="name">
    <img
      src="@/assets/images/works/Voting-Guide-2020__top-cover.png"
      alt="cover image"
    />

    <p>
      「選前大補帖」は台湾で2020/1/11に行われた選挙における、有権者がより簡単に出馬候補の主張と過去実績をチェックできるように制作された、フルオープンソース・ボランティアのWEBサイトプロジェクトです。<br />
      <br />
      私は、UI/UXデザインの担当として参加しました。他にも、SNS拡散用のイラスト、フロントエンドの部分開発などのタスクを行いました。
    </p>

    <h1>WEB DESIGN</h1>
    <p>
      デザインに関しては、政府の公開情報、Facebook広告の金額と内容、出馬候補過去立法院の出席率、提出した法案などをクロールして、膨大な資料を分かりやすく表現するために力を入れました。使いやすさを上昇させるため、興味のある候補の資料を並べて比較できる機能なども開発しました。<br /><br />「選前大補帖」はリリースから50日間で、ページビュー数4,500,000回、ユニークユーザー300,000人、最高1日ユーザー数90,000人を獲得することが出来ました。<br /><br />制作中、チームメンバーの居住地、生活リズムなどが一人一人異なるため、全てのやりとりはオンラインで行い、コミュニケーションはHackMD・Facebook、ジョブ管理はTrello、バージョン管理はGitHub、デザインは同時編集機能が有名なFigma等、様々なツールを活用し、開発がスムーズに進むよう体制を整えました。
    </p>
    <img
      src="@/assets/images/works/Voting-Guide-2020__web-design.png"
      alt="Web Design"
    />

    <div class="flex">
      <div>
        <h2>課題１：簡潔に出馬候補と政党の情報を伝える</h2>
        <p>
          必要な情報をわかりやすく表現するため、出馬候補の情報を大きく４つに分け（「政治理念」「立法院の過去のパフォーマンス」「提出/賛成した法案」「キャンペーン金額と内容」）、デザインを工夫しました。
        </p>
      </div>
      <div>
        <img
          src="@/assets/images/works/Voting-Guide-2020__candidate-page.png"
          alt="Candidate Page"
          style="max-width: 350px"
        />
      </div>
    </div>

    <div class="flex reverse">
      <div>
        <h2>課題２：出馬候補はFacebookでいくら予算を使ったのか？</h2>
        <p>
          Facebookは台湾では常に政治に関する情報が飛び交っているプラットフォームです。そんな中、誤情報と偽情報、攻撃的な政治キャンペーンなども少なくないと考えられます。<br />
          出馬候補がFacebookで行った宣伝の内容と予算を気にしなければなりません。有権者が一目で候補過去の宣伝がわかるように、FacebookのAPIを用いて機能を開発しました。
        </p>
      </div>

      <div>
        <img
          src="@/assets/images/works/Voting-Guide-2020__facebook-campaign.png"
          alt="Candidate Page"
          style="max-width: 350px"
        />
      </div>
    </div>

    <div class="flex">
      <div>
        <h2>課題３：候補の比較</h2>
        <p>
          出馬候補を簡単に比較できるようにするため、一つのページで比較する機能もあります。
        </p>
      </div>
      <div>
        <img
          src="@/assets/images/works/Voting-Guide-2020__candidate-comparison.png"
          alt="Candidate Comparison"
          style="max-width: 500px"
        />
      </div>
    </div>

    <!-- ILLUSTRATIONS -->
    <h1>ILLUSTRATIONS</h1>

    <div class="flex">
      <div>
        <p>
          SNS拡散用のイラストを制作しました。また、拡散だけではなく、政治に関心を持つことが重要であるという事を伝えるために、わかりやすいストーリーを考案し、漫画形式にしました。<br />
        </p>
      </div>
      <div>
        <img
          src="@/assets/images/works/Voting-Guide-2020__illustration-sketch.png"
          alt="Candidate Comparison"
          style="max-width: 350px"
        />
      </div>
    </div>

    <img
      src="@/assets/images/works/Voting-Guide-2020__illustrations.png"
      alt=""
    />
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
      name: "Voting-Guide-2020-jp",
    };
  },
};
</script>

<style scoped lang="scss">
.flex {
  display: flex;
  align-items: center;
  margin-bottom: $gutter;

  @include sp {
    display: block;
  }
}

.reverse {
  flex-direction: row-reverse;
}
</style>