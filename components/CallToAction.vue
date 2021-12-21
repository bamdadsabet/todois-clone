<template>
  <div class="call-to-action">
    <router-link to="/">
      <span class="call-to-action-sm">
        Get the app
      </span>
      <span class="call-to-action-bg">
        Get started
      </span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "CallToAction"
  };
</script>

<style lang="scss">
  .call-to-action {
    a {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: #fff;
      background-color: #ee5244;
      border: 1px solid #ee5244;
      border-radius: 0.5rem;
      margin: 2rem 0 0;
      padding: 0.5em 2em;
      font-weight: bold;
      font-size: 0.9375rem;
      letter-spacing: 0;

      @media (min-width: 768px) {
        font-size: 1rem;
      }

      @media (min-width: 1024px) {
        font-size: 1.2rem;
      }
    }
  }

  .call-to-action-bg {
    display: none;

    @media (min-width: 1024px) {
      display: inline;
    }
  }

  .call-to-action-sm {
    @media (min-width: 1024px) {
      display: none;
    }
  }
</style>
