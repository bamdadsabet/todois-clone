<template>
  <footer>
    <hr />

    <div class="todoist-footer-content">
      <router-link to="/">
        <img src="/footer-logo.svg" width="32" height="32" alt="" />
      </router-link>
      <div class="todoist-footer-content-links">
        <div class="todoist-footer-content-links-external">
          <router-link to="/">
            <img src="/footer-logo.svg" width="32" height="32" alt="" />
          </router-link>
          <p>
            Join millions of people who organize their lives with Todoist
          </p>
          <div>
            <router-link to="/">
              <img src="/facebook.svg" alt="" />
            </router-link>

            <router-link to="/">
              <img src="/twitter.svg" alt="" />
            </router-link>

            <router-link to="/">
              <img src="/youtube.svg" alt="" />
            </router-link>

            <router-link to="/">
              <img src="/instagram.svg" alt="" />
            </router-link>
          </div>
        </div>

        <div class="todoist-footer-content-links-internal">
          <div>
            <div class="todoist-footer-content-links-internal-heading">
              Features
            </div>
            <router-link to="/">How it works </router-link>

            <router-link to="/">Premium </router-link>

            <router-link to="/">For Teams </router-link>

            <router-link to="/">Pricing</router-link>

            <router-link to="/">Templates</router-link>
          </div>

          <div>
            <div class="todoist-footer-content-links-internal-heading">
              Resources
            </div>
            <router-link to="/">Download Apps</router-link>

            <router-link to="/"> Help Center</router-link>

            <router-link to="/"> Productivity Methods</router-link>

            <router-link to="/"> Refer a friend</router-link>

            <router-link to="/"> Integrations</router-link>
            <router-link to="/"> Channel Partners</router-link>

            <router-link to="/">Developer API </router-link>
          </div>

          <div>
            <div class="todoist-footer-content-links-internal-heading">
              Company
            </div>
            <router-link to="/"> About Us</router-link>

            <router-link to="/"> We are hiring!</router-link>

            <router-link to="/">Blog </router-link>

            <router-link to="/">Press </router-link>

            <router-link to="/">Twist </router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "FooterSection"
  };
</script>

<style lang="scss">
  // Footer Styles
  footer {
    background: #fff9f3;
    color: rgb(31, 31, 31);
    padding: 4rem 1rem 3rem;
    position: relative;

    hr {
      color: rgba(0, 0, 0, 0.14);

      @media (min-width: 768px) {
        max-width: 500px;
        margin: 0 auto;
      }

      @media (min-width: 1024px) {
        max-width: 1020px;
      }
    }

    img {
      margin: 0;
    }

    .todoist-footer-content {
      width: 100%;
      height: 100%;
      display: flex;
      position: relative;
      padding: 4rem 1rem 1rem;

      > a {
        > img {
          width: 32px;
          height: 32px;
        }
        @media (min-width: 768px) {
          display: none;
        }
      }

      &-links {
        display: flex;
        flex-direction: column;
        margin-left: 3rem;
        width: 100%;

        @media (min-width: 768px) {
          margin-left: 0;
        }

        @media (min-width: 1024px) {
          flex-direction: row;
          justify-content: space-between;
        }
      }

      &-links-external {
        p {
          margin-bottom: 2rem;
          font-size: 1rem;
          letter-spacing: 0.02em;
          line-height: 1.1;

          @media (min-width: 768px) {
            margin-top: 1rem;
          }

          @media (min-width: 768px) {
            font-size: 1.05rem;
            line-height: 1.5;
          }
        }

        div {
          display: flex;
          align-items: center;
        }

        > a {
          display: none;

          > img {
            width: 32px;
            height: 32px;
          }

          @media (min-width: 768px) {
            display: block;
          }

          @media (min-width: 1024px) {
            display: none;
          }
        }

        div > a {
          opacity: 0.45;
          width: 1.5rem;
          height: 1.5rem;
        }

        a:not(:first-child) {
          margin-left: 1rem;
        }

        @media (min-width: 1024px) {
          padding-top: 5.5rem;
          max-width: 300px;
        }
      }

      &-links-internal {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 3rem;

        &-heading {
          font-size: 1rem;
          line-height: 1.2;
          letter-spacing: 0.02em;
          color: #575757;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        > div:not(:first-child) {
          margin-top: 2rem;

          @media (min-width: 768px) {
            margin-top: 0;
          }
        }

        > div {
          @media (min-width: 1024px) {
            margin-right: 4rem;
          }
        }

        a {
          font-size: 0.93rem;
          line-height: 1.5;
          color: inherit;
          letter-spacing: 0.02em;
          margin: 0.8em 0;

          &:hover {
            text-decoration: underline;
          }

          @media (min-width: 1024px) {
            font-size: 1.05rem;
          }
        }

        @media (min-width: 768px) {
          flex-direction: row;
        }

        @media (min-width: 1024px) {
          flex: 1;
          align-items: flex-start;
          justify-content: flex-end;
        }
      }

      @media (min-width: 768px) {
        max-width: 500px;
        margin: 0 auto;
        padding-bottom: 3rem;
      }

      @media (min-width: 1024px) {
        max-width: 1088px;
        margin: 0 auto;
        padding: 1rem 1rem 1rem;
      }
    }
  }
</style>
