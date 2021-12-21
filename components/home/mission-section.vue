<template>
  <section class="todoist-mission">
    <div class="todoist-mission-text">
      <h2>A task manager you can trust for life</h2>
      <p class="p-content">
        In the 13 years and 358 days that we’ve been building Todoist, we’ve
        never considered selling out or becoming acquired.
      </p>

      <p class="p-content">
        Our team is committed to staying independent and earning your trust for
        as long as you need our apps.
      </p>

      <router-link to="/" class="link">
        <arrow-right-icon size="1.5x"></arrow-right-icon>
        <span>Learn about our long term mission</span>
      </router-link>
    </div>

    <div class="todoist-mission-image">
      <img src="/mission.webp" alt="" />
    </div>
  </section>
</template>

<script>
  import { ArrowRightIcon } from "vue-feather-icons";

  export default {
    name: "MissionSection",
    components: {
      ArrowRightIcon
    }
  };
</script>

<style lang="scss">
  // Todoist Mission
  .todoist-mission {
    padding: 0 1rem 3rem;
    display: flex;
    justify-content: space-between;
    max-width: 1088px;
    margin: 0 auto;

    a {
      justify-content: center;

      @media (min-width: 1024px) {
        justify-content: flex-start;
      }
    }

    p {
      margin: 1rem 0;
    }

    &-image {
      width: 45%;
      position: relative;
      top: -8rem;
      display: none;

      img {
        width: 100%;
        height: auto;
        max-width: 495px;
        max-height: 470px;
        margin: 0;
      }

      @media (min-width: 1024px) {
        display: block;
      }
    }

    &-text {
      width: 100%;
      text-align: center;

      @media (min-width: 768px) {
        max-width: 500px;
        margin: 0 auto;
        padding-bottom: 8rem;
      }

      @media (min-width: 1024px) {
        text-align: left;
        max-width: 50%;
        margin: 0;
        padding: 0 1rem;
      }
    }

    @media (min-width: 768px) {
      padding: 4rem 0 0;
    }

    @media (min-width: 1024px) {
      padding: 12rem 0 0;
    }
  }
</style>
