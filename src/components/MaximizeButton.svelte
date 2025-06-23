<script>
  import { isMaximized } from '../lib/stores';

  function toggleMaximize() {
    $isMaximized = !$isMaximized;
  }
</script>

<button
  on:click={toggleMaximize}
  class="fixed top-4 right-4 bg-mate-100 hover:bg-mate-200 p-2 rounded-full shadow-md z-50"
>
  {#if !$isMaximized}
    <!-- Usar el contenido de maximize.svg cuando está minimizado -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-maximize">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
      <path d="M4 16v2a2 2 0 0 0 2 2h2" />
      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
      <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
    </svg>
  {:else}
    <!-- Usar el contenido de minimize.svg cuando está maximizado -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-minimize">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M15 19v-2a2 2 0 0 1 2 -2h2" />
      <path d="M15 5v2a2 2 0 0 0 2 2h2" />
      <path d="M5 15h2a2 2 0 0 1 2 2v2" />
      <path d="M5 9h2a2 2 0 0 0 2 -2v-2" />
    </svg>
  {/if}
</button>
