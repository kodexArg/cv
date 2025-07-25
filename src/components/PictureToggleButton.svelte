<script>
  import { isLeftPanelVisible } from '../lib/stores';
  import { onMount } from 'svelte';

  let showButton = true;

  function toggleLeftPanel() {
    $isLeftPanelVisible = !$isLeftPanelVisible;
  }

  function updateVisibility() {
    if (window.innerWidth < 768) { // Smaller than 'md' (768px)
      $isLeftPanelVisible = false;
      showButton = true;
    } else if (window.innerWidth >= 768) { // 'md' or larger
      $isLeftPanelVisible = true;
      showButton = true;
    }
  }

  onMount(() => {
    if (typeof window !== 'undefined') {
      updateVisibility();
      window.addEventListener('resize', updateVisibility);
      
      return () => {
        window.removeEventListener('resize', updateVisibility);
      };
    }
  });
</script>

{#if showButton}
  <button
    on:click={toggleLeftPanel}
    class="bg-mate-100 hover:bg-mate-200 p-2 rounded-full shadow-md border-3 border-amber-800"
  >
    {#if $isLeftPanelVisible}
       <!-- Icono de sidebar visible (panel abierto) -->
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
         <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
         <line x1="9" y1="3" x2="9" y2="21"/>
       </svg>
     {:else}
       <!-- Icono de sidebar oculto (panel cerrado) -->
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
         <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
         <line x1="15" y1="3" x2="15" y2="21"/>
       </svg>
     {/if}
  </button>
{/if}