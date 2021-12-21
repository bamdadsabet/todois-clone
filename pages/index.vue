<template>
  <div>
    <theNavbar />
    <div id="home">
      <main>
        <hero-section />
        <demo-section />
        <reviews-section />
        <community-section />
        <testimonials-section />
        <mission-section />
        <section class="todoist-secondary-call">
          <div class="todoist-secondary-call-wrapper">
            <div class="todoist-secondary-call-text">
              <h2>Achieve piece of mind with Todoist</h2>

              <CallToAction />
            </div>

            <img src="/secondary-call.webp" alt="" />
          </div>
        </section>
      </main>
      <footer-section />
    </div>
  </div>
</template>

<script>
  import theNavbar from "../components/theNavbar";
  import CallToAction from "../components/CallToAction.vue";
  import HeroSection from "../components/home/hero-section.vue";
  import DemoSection from "../components/home/demo-section.vue";
  import ReviewsSection from "../components/home/reviews-section.vue";
  import CommunitySection from "../components/home/community/community-section.vue";
  import TestimonialsSection from "../components/home/testimonials-section.vue";
  import MissionSection from "../components/home/mission-section.vue";
  import FooterSection from "../components/footer-section";
export default {
  components: {
    theNavbar,
    CallToAction,
    HeroSection,
    DemoSection,
    ReviewsSection,
    CommunitySection,
    TestimonialsSection,
    MissionSection,
    FooterSection
  }
}
</script>

<style lang="scss">
  @import "asset/homepage";
  #home {
    // The rule below ensures that the overlay covers the whole view port
    position: relative;
    width: 100%;
  }

  // Todoist Secondary Call Section Styles
  .todoist-secondary-call {
    padding: 3rem 1rem;

    background: #fff9f3;

    &-text {
      text-align: center;

      @media (min-width: 1024px) {
        width: 52%;
        text-align: left;
      }
    }

    h2 {
      width: 100%;
      padding: 0 1rem;

      @media (min-width: 1024px) {
        font-size: 3.4rem;
        margin-top: 1em;
        line-height: 1.1;
        letter-spacing: -0.02em;
        padding: 0;
      }
    }

    img {
      width: 100%;
      height: auto;
      max-width: 404px;
      max-height: 468px;
      display: none;
      margin: -10rem 0 0 0;

      @media (min-width: 1024px) {
        display: block;
      }
    }

    &-wrapper {
      @media (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
        max-width: 1088px;
        margin: 0 auto;
      }
    }

    @media (min-width: 768px) {
      padding: 6rem 1rem;
    }
  }
</style>
