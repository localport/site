<script>
  export let segment;
  let isMenuOpen = false;

  import { onMount, onDestroy } from "svelte";
  import { stores } from "@sapper/app";
  const { session } = stores();
  $session.theme = {};

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
  });

  // Deconstructing, why?
  // if used like $session.theme.store, hook runs every time store changes, like $session.user.
  // https://svelte.dev/repl/7154107d89584fe29ee10c93969112c2?version=3.17.1
  $: ({ theme } = $session);
  $: ({ stored: themeStored, system: themeSystem } = theme);
  $: process.browser &&
    themeStored &&
    window.localStorage.setItem("theme", themeStored) &&
    document.documentElement.setAttribute(
      "data-theme",
      !!themeStored ? themeStored : themeSystem
    );
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
