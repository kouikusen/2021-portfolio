<template>
  <WorkPage :name="name">
    <img
      src="@/assets/images/works/Voting-Guide-2020__top-cover.png"
      alt="cover image"
    />

    <h1>WEB DESIGN</h1>
    <p>
      選前大補帖 (Voting Guide) is a non-profit, open source, and voluntary
      project organized by Bangui Weng from Taiwan g0v organization. This
      website’s main goal is to let voters easily gain thorough, accurate, and
      reliable information of the candidates in 2020 Taiwan General Election.<br /><br />
      I attended this project with Chloe Hung and Chia-yu Ho as UI/UX Designers.
      I also contributed to some part of front-end engineering, debugging, and
      illustration. The website ended up gaining 4.5 million page views, 3
      million unique users, and up to 90 thousand users per day since the
      release day to the election.
    </p>
    <img
      src="@/assets/images/works/Voting-Guide-2020__web-design.png"
      alt="Web Design"
    />

    <div class="flex">
      <div>
        <h2>Clean and Thorough Information of Candidates and Parties</h2>
        <p>
          The candidate’s information is divided into 4 parts: Social Issues and
          Bills, Election Campaigns, Congress Performance, and Policies.<br />
          Of course, you can also browse from parties’ pages and check their
          candidates.<br />
          <br />
          The website is designed to be easy-to-use and minimalist, allowing
          voters to focus on what really matters.
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
        <h2>List of Facebook Ad Campaigns Sponsored by Candidates</h2>
        <p>
          Since Facebook revised its advertising policy to increase political ad
          transparency, our team got to access these political ads’ information
          through web crawling.<br />
          <br />
          Voters can quickly grasp the candidate’s point of view and investments
          in online marketing through his/hers Facebook Ad Campaigns.
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
        <h2>Candidates Comparison Function</h2>
        <p>
          This function allow users to read through the information about the
          candidates that they’re interested in inside one page.
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

    <div class="flex reverse">
      <div>
        <h2>Categorize Candidates by Social Issues</h2>
        <p>
          Check out the candidates who care about the same issues as you.<br />
          We also provide some templates that helps you select social issues
          more quickly.
        </p>
      </div>

      <div>
        <img
          src="@/assets/images/works/Voting-Guide-2020__categorize-candidates.png"
          alt="Categorize Candidates"
          style="max-width: 350px"
        />
      </div>
    </div>

    <!-- ILLUSTRATIONS -->
    <h1>ILLUSTRATIONS</h1>

    <div class="flex">
      <div>
        <p>
          I drew this illustration to promote our website, and more importantly,
          to tell people the importance of democracy and politics through a
          simple story. <br />
          It starts by imaging we all live alongside a river and we all live on
          agriculture. Since we are all farmers, where the river goes become
          important because people getting more water are going to have more
          agricultural produces.<br />
          This is where politics comes in. Politics can change the flow and
          direction of the river and thus change out lives. So if people vote
          for the wrong person, it might lead to a consequence that money will
          flow into the hands of wrong people.
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
      name: "Voting-Guide-2020",
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