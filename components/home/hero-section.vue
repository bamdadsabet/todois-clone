<template>
  <section class="todoist-hero">
    <div class="todoist-hero-text">
      <div>
        <h1>
          Organize it all <br />
          <span>with Todoist</span>
        </h1>
        <call-to-action />
      </div>
    </div>
    <div class="todoist-hero-images">
      <img
        src="/hero.webp"
        alt="people using todoist to get organized"
      />
      <img
        src="/hero-secondary.webp"
        class="interface-background"
        alt=""
      />
    </div>

    <div class="todoist-interface">
      <img src="/hero-phone.webp" alt="" class="mobile-interface" />

      <img
        src="/hero-interface.webp"
        alt=""
        class="desktop-interface"
      />
    </div>
  </section>
</template>

<script>
  import CallToAction from "../CallToAction";
  export default {
    name: "HeroSection",
    components: {
      CallToAction
    }
  };
</script>

<style lang="scss">
  .todoist-hero {
    &-text {
      position: relative;
      z-index: 12;
      display: flex;
      justify-content: center;
      padding: 8rem 1rem 0;
      margin-bottom: -2rem;

      h1 {
        font-size: 2.75rem;
        line-height: 1.05;
        font-weight: 900;

        span {
          display: inline-block;
          padding-left: 1.8rem;
        }

        @media (min-width: 768px) {
          font-size: 3.75rem;
        }

        @media (min-width: 1024px) {
          font-size: 5rem;
        }
      }

      > div > div {
        display: flex;
        justify-content: center;
      }

      @media (min-width: 768px) {
        margin-bottom: -5rem;
      }

      @media (min-width: 768px) {
        margin-bottom: -6rem;
      }
    }

    &-images {
      position: relative;
      margin-bottom: 2rem;

      img {
        width: 100%;
        height: auto;
      }

      img:first-child {
        max-width: 1034px;
        margin: 0 auto;
      }

      // The image below is the background image for the section that follows i.e. todoist-interfaces

      img:nth-child(2) {
        display: none;
        transform: translate(-50%);
        position: absolute;
        left: 50%;
        top: 28rem;

        @media (min-width: 768px) {
          display: block;
        }

        @media (min-width: 1024px) {
          top: 38rem;
        }
      }
    }
  }

  .todoist-interface {
    position: relative;
    margin: -20% 0 0;

    @media (min-width: 1024px) {
      margin: -6rem 0 -17.5rem;
    }
  }

  .desktop-interface {
    width: 100%;
    height: auto;
    max-width: 1398px;
  }

  .mobile-interface {
    position: absolute;
    top: 1rem;
    right: 14%;
    width: 42%;
    max-width: 581px;
    height: auto;

    @media (min-width: 768px) {
      top: 13%;
    }
  }
</style>
