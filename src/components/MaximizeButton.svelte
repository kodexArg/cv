<script>
  import { isMaximized } from '../lib/stores';

  let showButton = false;

  function updateVisibility() {
    if (window.innerWidth < 1024) {
      $isMaximized = true;
      showButton = false;
    } else {
      $isMaximized = false;
      showButton = true;
    }
  }

  if (typeof window !== 'undefined') {
    updateVisibility();
    window.addEventListener('resize', updateVisibility);
  }

  function toggleMaximize() {
    $isMaximized = !$isMaximized;
  }
</script>

{#if showButton}
  <button 
    on:click={toggleMaximize}
    class="bg-mate-100 hover:bg-mate-200 p-2 rounded-full shadow-md border-3 border-amber-800"
  >
    {#if $isMaximized}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 0 2-2h3M3 16h3a2 2 0 0 0 2 2v3"/>
      </svg>
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
      </svg>
    {/if}
  </button>
{/if}
