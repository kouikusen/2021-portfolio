<template>
  <WorkPage :name="name">
    <img
      src="@/assets/images/works/Voting-Guide-2020__top-cover.png"
      alt="cover image"
    />

    <p>
      「選前大補帖」は台湾で2020/1/11に行われる選挙における、民衆がより簡単に出馬候補の主張と過去実績をチェックできるように制作された、フルオープンソース・ボランティアのWEBサイトプロジェクトです。<br /><br />
      私は、UI/UXデザインの担当として参加しました。他にも、SNS拡散用のイラスト、フロントエンドの部分開発などのタスクを行いました。
    </p>

    <h1>WEB DESIGN</h1>
    <p>
      デザインに関しては、政府の公開情報、Facebook広告の金額と内容、出馬候補過去立法院の出席率、提出した法案などをクロールして、膨大な資料を分かりやすく表現するために力を入れました。使いやすさを上昇させるため、興味のある候補の資料を並べて比較できる機能なども開発しました。<br /><br />「選前大補帖」はリリースから50日間で、ページビュー数4,500,000回、ユニークユーザー300,000人、最高1日ユーザー数90,000人を獲得することが出来ました。<br /><br />制作の期間で、チーム全員の居住地、生活リズムなどが一人一人異なるため、全てのやりとりはオンラインで行い、コミュニケーションはHackMD・Facebook、ジョブ管理はTrello、バージョン管理はGitHub、デザインは同時編集機能が有名なFigma等、様々なツールの活用で、開発がスムーズに進むことを果たしました。<br /><br />このプロジェクトを通して、チームワークとコミュニケーションの重要性を深く感じました。
    </p>
    <img
      src="@/assets/images/works/Voting-Guide-2020__web-design.png"
      alt="Web Design"
    />

    <div class="flex">
      <div>
        <h2>課題１：簡潔に出馬候補と政党の情報を伝える</h2>
        <p>
          候補の情報は大きく４つに分けられてます：政治理念、立法院の過去のパフォーマンス、提出/賛成した法案、キャンペーン金額と内容。<br />
          個人のユーザーでは全て取得するには時間かかる情報をわかりやすく形に表現するため、デザインに工夫しました。
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
          出馬候補がFacebookで行った宣伝の内容と予算を気にしなければなりません。民衆が一目で候補過去の宣伝がわかるように、FacebookのAPIを用いて機能を開発しました。
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
          誰かに投票するときは必ず心の中で比較したりします。それを簡単にできるようにするため、一つのページでいくつか気になる候補を比較する機能もあります。
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
          SNSで拡散用のイラストを制作しました。また、拡散だけではなく、政治に関心を持つことは重要であることを伝えるために、わかりやすいストーリーを考案し、漫画の形にしました。<br />
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