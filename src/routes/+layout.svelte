<script>
  import "../app.css";
  import { isMaximized } from '../lib/stores';
</script>

<div class:maximized={$isMaximized}>
  <slot />
</div>
