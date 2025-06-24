<script>
  import { onMount } from 'svelte';

  let isMobile = false;

  onMount(() => {
    const checkMobile = () => {
      isMobile = window.innerWidth < 640;
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  });
</script>

{#if isMobile}
  <!-- Versión mobile: solo texto, ultra compacto -->
  <h1 class="mobile-title">
    HABILIDADES
  </h1>
{:else}
  <!-- Versión desktop: completa con chevrons -->
  <h1 class="w-full flex justify-center items-end text-pullover-300 text-base sm:text-2xl pb-1 sm:pb-2 whitespace-nowrap font-semibold">
    <i class="fa fa-chevron-left !text-pullover-300 !text-base sm:!text-xl" />
    <span class="mx-1">HABILIDADES /</span>
    <i class="fa fa-chevron-right !text-pullover-300 !text-base sm:!text-xl" />
  </h1>
{/if}

<style lang="postcss">
  .desktop-title {
    @apply w-full flex justify-center items-end text-pullover-300 text-2xl pb-2 whitespace-nowrap;
  }
  
  .mobile-title {
    @apply w-full text-center text-pullover-300 pb-1;
    font-size: 0.6rem;
    line-height: 1.1;
    font-weight: 500;
    letter-spacing: 0.5px;
  }
</style> 