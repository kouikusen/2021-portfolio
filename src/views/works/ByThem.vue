<template>
  <WorkPage :name="name">
    <img src="@/assets/images/works/by-them__top-cover.png" alt="cover image" />

    <h1>LOGO DESIGN</h1>

    <div class="flex reverse">
      <div>
        <h2>Logo Design Concept</h2>
        <p>
          “When a romantic relationship makes you feel gloomy, we are here to
          listen to your troubles and accompany you to move forward. “by them”
          is the web magazine here to help you feel lighter. ”<br />
          Following the concept above, I crafted the logo by hand-writing
          calligraphy. In order to convey the variety and imperfection of human
          beings, I reserved the asymmetry and some cute flaws without
          destroying the visual balance. <br />
          Also, the main color scheme is a color gradation from yellow to light
          green that symbolize the infinite possibility and variety of humanity.
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
      In order to create a browsing experience letting users feel stressless, I
      add margin and blank spaces as much as possible. The font used in article
      titles and decorations, “Ten Mincho”, carries cuteness and sensitivity at
      the same time, which I think is the perfect font that can cooperate
      perfectly with the brand’s concept.<br /><br />
      This is my first work to design a large-scale media site. The requirements
      of attention to details and the consistency of the design were quite a
      challenge to me, and eventually I think it’s an amazing experience.
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
      name: "by-them",
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