<script>
  import { isExpanded } from '../lib/stores';

  function toggleExpand() {
    $isExpanded = !$isExpanded;
  }
</script>

<button
  onclick={toggleExpand}
  class="bg-mate-100 hover:bg-mate-200 p-2 rounded-full shadow-md border-3 border-amber-800"
  aria-label={$isExpanded ? 'Contraer habilidades' : 'Expandir habilidades'}
>
  {#if !$isExpanded}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polyline points="6,9 12,15 18,9"/>
    </svg>
  {:else}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polyline points="18,15 12,9 6,15"/>
    </svg>
  {/if}
</button>
