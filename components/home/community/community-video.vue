<template>
  <div>
    <div class="todoist-community-video">
      <div class="todoist-community-video-images">
        <img
          src="/community-video-background.webp"
          alt=""
          class="thumbnail-background"
        />

        <div class="thumbnail" role="button" @click="playVideo">
          <img src="/community-vid.webp" alt="" />
          <svg viewBox="0 0 60 61" class="_2o_bh">
            <g fill="none" fill-rule="evenodd" transform="translate(0 .2)">
              <circle cx="30" cy="30" fill="#000" r="30"></circle>
              <path d="M45 30.5L22 42V19z" fill="#fff"></path>
            </g>
          </svg>
        </div>
      </div>

      <router-link to="/" class="link">
        <arrow-right-icon size="1.5x"></arrow-right-icon>
        <span>Learn more about the Todoist Community</span>
      </router-link>
    </div>
    <div :class="[showOverlay ? 'show' : 'hide', 'overlay']"></div>
    <div
      :class="[showOverlay ? 'show' : 'hide', 'hide-overlay']"
      role="button"
      @click="stopVideo"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M5.646 5.646a.5.5 0 01.708 0L12 11.293l5.646-5.647a.5.5 0 01.708.708L12.707 12l5.647 5.646a.5.5 0 01-.708.708L12 12.707l-5.646 5.647a.5.5 0 01-.708-.708L11.293 12 5.646 6.354a.5.5 0 010-.708z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
<!--    <youtube-video ref="video" :show-overlay="showOverlay" />-->
  </div>
</template>

<script>
  import { ArrowRightIcon } from "vue-feather-icons";
  // import YoutubeVideo from "./youtube-video ";

  export default {
    name: "CommunityVideo",
    components: {
      ArrowRightIcon,
      // YoutubeVideo
    },
    data() {
      return {
        showOverlay: false
      };
    },
    methods: {
      stopVideo() {
        this.showOverlay = false;
        document.body.style.overflow = "auto";
        this.player.stopVideo();
      },
      playVideo() {
        this.showOverlay = true;
        document.body.style.overflow = "hidden";
        this.player.playVideo();
      }
    },
    computed: {
      player() {
        return this.$refs.video.$refs.youtube.player;
      }
    }
  };
</script>

<style lang="scss">
  //Overlay Styles
  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0.8;
    z-index: 98;
    top: 0;
    left: 0;
    overflow: hidden;
    display: none;
  }

  .hide-overlay {
    position: fixed;
    width: 48px;
    height: 48px;
    top: 10%;
    right: 10%;
    background: #fff;
    z-index: 100;
    padding: 0.03em;
    border-radius: 50%;
    cursor: pointer;

    @media (min-width: 768px) {
      top: 0;
    }

    @media (min-width: 1024px) {
      top: 10%;
    }
  }

  //Community Video Styles
  .todoist-community-video {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

    &-images {
      margin-right: auto;
      margin-left: auto;
      width: 100%;

      @media (min-width: 768px) {
        width: 350px;
        position: relative;
      }

      @media (min-width: 1024px) {
        width: 478px;
        margin-right: -1rem;
      }
    }

    .thumbnail {
      width: 100%;
      position: relative;
      cursor: pointer;

      img {
        width: 100%;
        max-width: 478px;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.24);
      }

      > svg {
        position: absolute;
        width: 60px;
        opacity: 0.3;
        top: 32%;
        right: 40%;

        @media (min-width: 1024px) {
          top: 37%;
          right: 44%;
        }
      }

      @media (min-width: 768px) {
        position: relative;
      }

      @media (min-width: 1024px) {
        left: 0;
      }
    }

    .thumbnail-background {
      display: none;
      position: absolute;
      width: 110%;
      max-width: 528px;
      max-height: 363px;
      left: 5%;
      top: -23%;

      @media (min-width: 768px) {
        display: block;
      }
    }

    a {
      margin-right: auto;
      margin-left: auto;

      @media (min-width: 768px) {
        padding-left: 2em;
      }

      @media (min-width: 1024px) {
        margin-left: 2rem;
      }
    }

    @media (min-width: 768px) {
      margin-top: 4rem;
    }
  }
</style>
