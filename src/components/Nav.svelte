<script>
  import { stores } from "@sapper/app";
  const { session } = stores();

  import { onMount } from "svelte";
  onMount(async () => {
    $session = { who: "nav" };
  });

  export let segment;
</script>

<nav>
  <div class="left" />
  <div class="center">{JSON.stringify($session)}</div>
  <div class="right">
    <a class="signup" rel="prefetch" href="/signup">Sign Up</a>
  </div>
</nav>

<style lang="scss">
  @import "../style/sizes.scss";

  nav {
    position: sticky;
    top: 0;
    height: 64px;
    margin: 0 auto;
    padding: 0 4vw;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: space-between;

    box-shadow: 0 -2px 6px rgba(var(--foreground-rgb), 0.03);

    .left,
    .center,
    .right {
      display: flex;
      align-items: center;
      height: 32px;
    }

    .left,
    .right {
      width: calc(250px - 32px);
    }

    .left {
      justify-content: flex-start;
    }
    .center {
      justify-content: center;
      min-width: 84px;
    }
    .right {
      justify-content: flex-end;
    }
  }

  @media only screen and (min-width: $breakpoint-tablet) {
    nav {
      padding: 0 calc((100vw - #{$breakpoint-tablet}) / 2 + 20px);
    }
  }
</style>
