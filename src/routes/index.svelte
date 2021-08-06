<script>
  import { Divider, Snippet, Window, Spacer } from "geist-ui";
</script>

<svelte:head>
  <title>Localport - secure tunnels to localhost</title>
</svelte:head>

<Spacer y={2.5} />

<div class="title">
  <h1>A free reverse tunnel tool</h1>

  <p>Easily access local ports from remote</p>
</div>

<Spacer y={3} />

<div class="features">
  <div class="feature">
    <div>
      <p>
        Localport is the optimal secure port forwarding solution. All-in-one:
        NodeJS (which is 0 dependency ;) ), SSH, and Binary clients, with both
        TCP and HTTP support.
      </p>
    </div>

    <div class="showdown">
      <Window style="width: 75%; margin: 0;" url="https://wow.lort.me/">
        <div style="padding: 8pt; white-space: nowrap;">
          <h4>wow it works</h4>
          <span>... TODO: develop something better</span>
        </div>
      </Window>
      <Window
        style="width: 75%; margin: 0 0 -32px auto; position: relative; bottom: 32px;"
      >
        <Snippet
          style="border: none; border-radius: 0;"
          text={["localport http 8080"]}
        />
      </Window>
    </div>
  </div>

  <Spacer y={1} />
  <Divider style="border-bottom: 1px solid var(--border)" />

  <div class="feature">
    <div>
      <h2>Localport is <span style="color: rgb(42, 219, 68);">easy</span></h2>
      <p>
        Localport combines the best developer experience with an obsessive focus
        on ease of use. Our platform enables developers to share their best
        work.
      </p>
    </div>

    <div class="showdown" />
  </div>
</div>

<style lang="scss">
  @import "../style/sizes.scss";

  .title {
    text-align: center;

    h1 {
      line-height: 1;
    }
    p {
      color: var(--secondary);
      font-size: 1.15rem;
      margin: 0;
    }
  }

  .features > .feature {
    display: flex;
    flex-direction: column;

    > div {
      flex-basis: 45%;
    }
  }

  @media screen and (min-width: $breakpoint-tablet) {
    .features > .feature {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
