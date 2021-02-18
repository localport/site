<script>
  export let segment;
  let isMenuOpen = false;

  import { onMount, onDestroy } from "svelte";
  import { stores } from "@sapper/app";
  const { session } = stores();

  import "geist-ui/dist/geist-ui.css";
  import Nav from "../components/Nav.svelte";
  import Menu from "../components/Menu.svelte";
  import Footer from "../components/Footer.svelte";

  // Session Initialization
  onMount(() => {
    // https://github.com/ConsoleTVs/sswr for data fetching
    // https://blog.marksauerutley.com/sapper-authenticated-sessions/

    // THEME
    // theme.stored == "", means "system" is selected
    $session.theme = {
      stored: window.localStorage.getItem("theme") || "", // returns null by default
      system: window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
    };
    session.subscribe((data) => {
      // save theme to localstorage so remember what user want
      window.localStorage.setItem("theme", data.theme.stored);
      document.documentElement.setAttribute(
        "data-theme",
        !!data.theme.stored ? data.theme.stored : data.theme.system
      );
    });
  });
</script>

<Nav {segment} on:toggleMenu={() => (isMenuOpen = !isMenuOpen)} />
<Menu
  {segment}
  isOpen={isMenuOpen}
  on:changeTheme={(theme) => $session.theme.stored === theme}
/>

<main>
  <slot />
</main>

<Footer />

<style lang="scss">
  @import "../style/sizes.scss";

  main {
    position: relative;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0 4vw;
  }

  @media only screen and (min-width: $breakpoint-tablet) {
    main {
      padding: 0 calc((100vw - #{$breakpoint-tablet}) / 2 + 20px);
    }
  }
</style>
