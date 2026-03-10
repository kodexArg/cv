<script>
  import "../app.css";
  import { isMaximized } from '../lib/stores';
  let { children } = $props();
</script>

<div class:maximized={$isMaximized}>
  {@render children()}
</div>
