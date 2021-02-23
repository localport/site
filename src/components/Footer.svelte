<script>
  import { stores } from "@sapper/app";
  const { session } = stores();

  import {
    Collapse,
    CollapseGroup,
    Link,
    Select,
    SelectOption,
    IconDisplay,
    IconSun,
    IconMoon,
  } from "geist-ui";

  import { FOOTER_LINKS } from "../routes/_constants.js";
</script>

<footer>
  <nav>
    <CollapseGroup>
      {#each FOOTER_LINKS as LINKS}
        <Collapse size="small">
          <span slot="title" style="font-size: 0.875rem; font-weight: 600;">
            {LINKS[0]}
          </span>
          <ul class="links">
            {#each LINKS.slice(1) as LINK}
              <li>
                <Link href={LINK[1]} style="color: var(--accents-5);">
                  {LINK[0]}
                </Link>
              </li>
            {/each}
          </ul>
        </Collapse>
      {/each}
    </CollapseGroup>
    <div>
      {#each FOOTER_LINKS as LINKS}
        <div>
          <span style="font-size: 0.875rem; font-weight: 600;">
            {LINKS[0]}
          </span>
          <ul class="links" style="margin-left: 0;">
            {#each LINKS.slice(1) as LINK}
              <li>
                <Link href={LINK[1]} style="color: var(--accents-5);">
                  {LINK[0]}
                </Link>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </nav>
  <section>
    <p>© 2020 Localport. All rights reserved.</p>
    <div class="select-theme">
      <Select bind:value={$session.theme.stored}>
        <SelectOption prefix={IconDisplay} value="">System</SelectOption>
        <SelectOption prefix={IconSun} value="light">Light</SelectOption>
        <SelectOption prefix={IconMoon} value="dark">Dark</SelectOption>
      </Select>
    </div>
  </section>
</footer>

<style lang="scss">
  @import "../style/sizes.scss";

  footer {
    background-color: var(--accents-1);
    border-top: 1px solid var(--accents-2);
    margin: auto;
    padding: 0 calc((100vw - #{$breakpoint-tablet}) / 2 + 20px);
  }

  footer > nav > :global(div:nth-child(1) > div:nth-child(1)) {
    border-top: none !important;
  }
  footer > nav > :global(div:nth-of-type(2)) {
    display: none;
  }

  footer > nav .links {
    list-style-type: none;
    margin: 0 0 0 10px;
    padding: var(--gap-half) 0 0 0;
    li {
      font-size: 0.85em;
      margin-bottom: 5px;
      font-weight: 500;
      &:last-child {
        margin-bottom: 0;
      }
      &::before {
        content: "";
      }
    }
  }

  footer > section {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  footer > section > p {
    margin: 0px;
    padding: 32px;
    color: var(--secondary);
  }

  footer > section > .select-theme {
    display: none;
  }
  @media only screen and (min-width: $breakpoint-tablet) {
    footer > nav > :global(div:nth-child(1)) {
      display: none;
    }
    footer > nav > :global(div:nth-child(2)) {
      display: flex;
      padding-top: var(--gap);
      justify-content: space-around;
    }

    footer > section > .select-theme {
      display: block;
    }
  }
</style>
