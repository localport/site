<script>
  import Select from "../geist-ui/Select.svelte";

  import { stores } from "@sapper/app";
  const { session } = stores();
</script>

<div>
  {JSON.stringify($session)}

  <Select><option value="1">1</option></Select>
</div>
