<template>
  <section class="todoist-demo">
    <h2>Free up your mental space</h2>
    <p class="p-content">
      Regain clarity and calmness by getting all those tasks out of your head
      and onto your to-do list (no matter where you are or what device you use).
    </p>
    <div class="todoist-demo-links">
      <router-link to="/" class="link">
        <span>
          <play-circle-icon />
        </span>
        <span>
          See Todoist in action
        </span>
      </router-link>

      <router-link to="/" class="link">
        <span>
          <arrow-right-icon />
        </span>
        <span>
          Browse Todoist's Features
        </span>
      </router-link>
    </div>
  </section>
</template>

<script>
  import { ArrowRightIcon, PlayCircleIcon } from "vue-feather-icons";

  export default {
    name: "DemoSection",
    components: {
      ArrowRightIcon,
      PlayCircleIcon
    }
  };
</script>

<style lang="scss">
  // Todoist Demo Section
  .todoist-demo {
    position: relative;
    text-align: left;
    padding: 0rem 1rem 8vw;
    background: #fff;

    @media (min-width: 481px) {
      padding: 4rem 1rem 8vw;
    }

    h2 {
      max-width: 80%;

      @media (min-width: 1024px) {
        max-width: 100%;
      }
    }

    p {
      max-width: 47rem;
      margin: 1rem 0;

      @media (min-width: 1024px) {
        display: inline-block;
      }
    }

    @media (min-width: 1024px) {
      position: relative;
      background-color: #fff;
      z-index: 17;
      margin-top: -1rem;
      text-align: center;
      padding-bottom: 0.3rem;
    }
  }

  .todoist-demo-links {
    a {
      @media (min-width: 768px) {
        justify-content: center;
      }

      @media (min-width: 1024px) {
        font-size: 1.1rem;
        letter-spacing: 0.02em;
        margin-left: 3.5em;
      }
    }

    span {
      display: block;
    }

    span:nth-child(2) {
      margin-left: 0.4rem;
    }

    @media (min-width: 1024px) {
      display: flex;
      justify-content: center;
      flex-direction: row-reverse;
    }
  }
</style>
