<template>
  <div class="home">
    <AboutHero />
    <MainSection title="a brief history">
      <div class="history">
        <div
          v-for="item in history"
          :key="item.name"
          class="history__item"
          :class="[item.col, item.wave]"
        >
          <div class="content">
            <h3 class="name all__accent-font">{{ item.name }}</h3>
            <h4 class="role">{{ item.role }}</h4>
          </div>
          <h6 class="year all__accent-font">{{ item.year }}</h6>
        </div>
      </div>
    </MainSection>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutHero from "@/components/AboutHero.vue";
import MainSection from "@/components/MainSection.vue";

export default {
  name: "Home",
  components: {
    AboutHero,
    MainSection,
  },
  data() {
    return {
      history: [
        {
          name: "Kyoto University of Art and Design",
          role: "MFA Student",
          year: "20-",
          col: "col-10-13",
          wave: "wave",
        },
        // {
        //   name: "Freelance",
        //   role: "Designer / Developer",
        //   year: "20-",
        //   col: "col-10-13",
        // },
        {
          name: "Mag2 Inc.",
          role: "Designer / Developer",
          year: "18-",
          col: "col-7-13",
          wave: "wave",
        },
        {
          name: "Evermore Trade Corp.",
          role: "IT Specialist",
          year: "16-17",
          col: "col-4-7",
        },
        {
          name: "National Central University",
          role: "Computer Science and Information Engineering Major",
          year: "12-16",
          col: "col-1-4",
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.history {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  row-gap: 20px;

  @include sp {
    grid-template-columns: repeat(1, 1fr);
  }

  .col-10-13 {
    grid-column: 10/13;
  }

  .col-7-13 {
    grid-column: 7/13;
  }

  .col-4-7 {
    grid-column: 4/7;
  }

  .col-1-4 {
    grid-column: 1/4;
  }

  &__item {
    background-color: var(--white);
    position: relative;
    color: var(--black);
    border-radius: 20px;
    padding: 20px;

    @include sp {
      grid-column: 1/1 !important;
    }

    .content {
      text-align: left;

      .name {
        font-size: 1rem;
        margin-bottom: 5px;
      }

      .role {
        font-weight: 400;
        margin-bottom: 5px;
        margin-top: 0;
      }
    }

    .year {
      text-align: right;
      color: var(--light-grey);
      font-size: 1rem;
      margin: 0;

      @media (prefers-color-scheme: light) {
        color: var(--middle-grey);
      }
    }

    &:first-child {
      grid-row: 1/1;
    }

    &:nth-child(2) {
      grid-row: 2/2;
    }

    &:nth-child(3) {
      grid-row: 3/3;
    }

    &:nth-child(4) {
      grid-row: 4/4;
    }

    &:nth-child(5) {
      grid-row: 5/5;
    }
  }

  .wave::before {
    content: "";
    position: absolute;
    // left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-repeat: repeat;
    width: 10px;
    background-size: 20px 20px;
    background-image: radial-gradient(
      circle at -5px 10px,
      var(--black) 13px,
      transparent 12px
    );
  }
  .wave::after {
    content: "";
    position: absolute;
    // left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    background-repeat: repeat;
    width: 15px;
    background-size: 40px 20px;
    background-image: radial-gradient(
      circle at 15px 10px,
      var(--black) 13px,
      transparent 13px
    );
  }
}
</style>