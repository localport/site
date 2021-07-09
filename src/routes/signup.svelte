<script>
  import { session } from "$app/stores";
  
  import { Select } from "geist-ui";
</script>

<div>
  {JSON.stringify($session)}

  <Select><option value="1">1</option></Select>
</div>
