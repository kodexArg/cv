<script>
  import { isMaximized } from '../lib/stores';
  import { onMount } from 'svelte';

  let showButton = true;

  function checkViewport() {
    if (window.innerWidth < 1100) {
      $isMaximized = true;  // Forzar pantalla completa en pantallas pequeñas
      showButton = false;   // Ocultar botón
    } else {
      $isMaximized = false; // Forzar modo A4 en pantallas grandes
      showButton = true;    // Mostrar botón en pantallas grandes
    }
  }

  function toggleMaximize() {
    $isMaximized = !$isMaximized;
  }

  onMount(() => {
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  });
</script>

{#if showButton}
<button
  on:click={toggleMaximize}
  class="fixed top-4 right-20 bg-mate-100 hover:bg-mate-200 p-2 rounded-full shadow-md z-50 print:hidden"
>
  {#if $isMaximized}
    <!-- Cuando está maximizado (pantalla completa), mostrar ícono de minimizar/restaurar -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
    </svg>
  {:else}
    <!-- Cuando está en modo A4, mostrar ícono de maximizar/expandir -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
    </svg>
  {/if}
</button>
{/if}
