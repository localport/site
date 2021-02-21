<script>
  import { Snippet, Window, Select } from "geist-ui";
</script>

<svelte:head>
  <title>Localport - secure tunnels to localhost</title>
</svelte:head>

<div class="title">
  <h1>A free reverse tunnel tool</h1>

  <p>Easily access local ports from remote</p>
</div>

<div class="features">
  <div class="feature">
    <p>
      Localport is the optimal secure port forwarding solution. All-in-one:
      NodeJS (which is 0 dependency ;) ), SSH, and Binary clients, with both TCP
      and HTTP support.
    </p>

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
</div>

<style lang="scss">
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
    flex-wrap: wrap;

    > .showdown {
      flex-basis: 100%;
    }
  }
</style>
