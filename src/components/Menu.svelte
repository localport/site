<script>
  export let segment;
  export let isOpen = false;

  import { stores } from "@sapper/app";
  const { session } = stores();

  import {
    Button,
    Link,
    Select,
    SelectOption,
    Spacer,
    IconTag,
    IconCloud,
    IconDownload,
    IconBookOpen,
    IconDisplay,
    IconSun,
    IconMoon,
  } from "geist-ui";

  $: if (process.browser) {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }
  $: segment, (isOpen = false);
</script>

<aside class="menu" class:isOpen>
  <Spacer y={1.2} />

  <div class="buttons">
    <a href="/login">
      <Button style="width: 100%;" type="secondary">Login</Button>
    </a>

    <Spacer y={0.75} />

    <a href="/contact">
      <Button style="width: 100%;">Contact</Button>
    </a>
  </div>

  <Spacer y={1.2} />

  <h3>Resources</h3>

  <Link block href="/pricing"><IconTag />Pricing</Link>
  <Link block href="/iot"><IconCloud />Connect</Link>
  <Link block href="/download"><IconDownload />Download</Link>
  <Link block href="/docs"><IconBookOpen />Docs</Link>

  <Spacer y={1} />

  <Select bind:value={$session.theme.stored}>
    <SelectOption prefix={IconDisplay} value="">System</SelectOption>
    <SelectOption prefix={IconSun} value="light">Light</SelectOption>
    <SelectOption prefix={IconMoon} value="dark">Dark</SelectOption>
  </Select>
</aside>

<style lang="scss">
  .menu {
    box-sizing: border-box;
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    padding: 0 6vw;

    overflow: hidden auto;

    background-color: var(--background);

    display: none;
    &.isOpen {
      display: block;
    }

    :global(a) {
      width: 100% !important;
      height: 60px !important;
      align-items: center !important;
      font-weight: 600 !important;
    }
    :global(a svg) {
      margin-right: 20px;
    }
  }
</style>
