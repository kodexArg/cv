<script>
  import { isExpanded } from '../lib/stores';

  function toggleExpand() {
    $isExpanded = !$isExpanded;
  }
</script>

<button
  on:click={toggleExpand}
  class="fixed top-4 right-20 bg-mate-100 hover:bg-mate-200 p-2 rounded-full shadow-md z-50 print:hidden"
>
  {#if !$isExpanded}
    <!-- Font Awesome caret-square-down outline -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" fill="none" stroke="currentColor" stroke-width="32">
      <rect x="32" y="32" width="384" height="448" rx="48" ry="48" fill="none" stroke="currentColor" stroke-width="32"/>
      <polygon points="144,245 304,245 224,325" fill="currentColor"/>
    </svg>
  {:else}
    <!-- Font Awesome caret-square-up outline -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" fill="none" stroke="currentColor" stroke-width="32">
      <rect x="32" y="32" width="384" height="448" rx="48" ry="48" fill="none" stroke="currentColor" stroke-width="32"/>
      <polygon points="144,325 304,325 224,245" fill="currentColor"/>
    </svg>
  {/if}
</button> 