<script>
  export let page;

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import LocalportLogo from "./LocalportLogo.svelte";
  import { Link, IconSliders } from "geist-ui";
</script>

<nav>
  <div class="left" on:click={(event) => dispatch("toggleMenu", event)}>
    <IconSliders size={20} />
  </div>
  <Link rel="prefetch" href="/">
    <div class="icon">
      <LocalportLogo size={22} />
    </div>
  </Link>
  <div class="right">
    <Link rel="prefetch" href="/signup" block>Sign Up</Link>
  </div>
</nav>

<style lang="scss">
  @import "../style/sizes.scss";

  nav {
    position: sticky;
    top: 0;
    height: 64px;
    margin: 0 auto;
    padding: 0 6vw;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--accents-1);
    box-shadow: 0 -2px 6px rgba(var(--foreground-rgb), 0.2);

    .left,
    .icon,
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
    .icon {
      justify-content: center;
      min-width: 84px;
    }
    .right {
      justify-content: flex-end;
    }
  }

  @media only screen and (min-width: $breakpoint-tablet) {
    nav {
      // calc((100vw - #{$breakpoint-tablet}) / 2 + 20px)
      padding: 0 calc(-280px + 33.3333vw);
    }
  }
</style>
