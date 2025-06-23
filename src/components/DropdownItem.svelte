<script>
  export let title = '';
  export let icon = '';
  export let hasChildren = false;
  export let isOpen = false;
  export let level = 0;

  // Solo nivel 2 puede ser colapsable, el resto siempre abierto
  $: isCollapsible = level === 2 && hasChildren;
  $: shouldShowChildren = level < 2 || !hasChildren || isOpen;

  function toggle() {
    if (isCollapsible) {
      isOpen = !isOpen;
    }
  }
</script>

<li class="skill-item level-{level}">
  <span class="flex items-center {isCollapsible ? 'cursor-pointer' : ''}" on:click={toggle} role="button" tabindex="0" on:keydown={(e) => e.key === 'Enter' && toggle()}>
    {#if icon}
      <i class="{icon} mr-2 text-pullover-400" />
    {/if}
    {#if level === 3}
      <span class="plus-sign">+ </span>
    {/if}
    {title}
    {#if isCollapsible}
      <i class="fa fa-chevron-right ml-1 text-xs text-pullover-400 transition-transform {isOpen ? 'rotate-90' : ''}" />
    {/if}
  </span>
  
  {#if shouldShowChildren}
    <ul class="{isCollapsible ? 'transition-all duration-300 ease-in-out' : ''}">
      <slot />
    </ul>
  {/if}
</li>

<style lang="postcss">
  .cursor-pointer:hover {
    @apply text-pullover-300;
  }
  
  /* Estructura de 3 niveles */
  .skill-item {
    @apply text-pullover-500 font-bold text-base;
  }
  
  .level-1 {
    @apply ml-1 mb-3;
  }
  
  .level-2 {
    @apply mb-1 ml-6 font-normal leading-none text-pullover-500;
  }
  
  .level-3 {
    @apply mb-0.5 ml-8 text-xs font-light text-pullover-600;
  }
  
  .plus-sign {
    @apply text-pullover-600 font-light;
  }
  
  ul {
    @apply -ml-1;
  }
</style> 