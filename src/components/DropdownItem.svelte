<script>
  import { isExpanded } from '../lib/stores';
  
  export let title = '';
  export let icon = '';
  export let hasChildren = false;
  export let isOpen = false;
  export let level = 0;

  // Solo nivel 2 puede ser colapsable, el resto siempre abierto
  $: isCollapsible = level === 2 && hasChildren;
  $: shouldShowChildren = level < 2 || !hasChildren || isOpen || $isExpanded;

  function toggle() {
    if (isCollapsible && !$isExpanded) {
      isOpen = !isOpen;
    }
  }
</script>

<li class="skill-item level-{level}">
  <span class="flex flex-wrap items-center {isCollapsible ? 'cursor-pointer' : ''}" on:click={toggle} role="button" tabindex="0" on:keydown={(e) => e.key === 'Enter' && toggle()}>
    {#if icon}
      <i class="{icon} mr-2 text-pullover-400" />
    {/if}
    {#if level === 3}
      <span class="plus-sign">+&nbsp;</span>
    {/if}
    <span class="flex-1 min-w-0">{title}</span>
    {#if isCollapsible}
      <i class="fa fa-chevron-right ml-2 text-[0.5rem] text-pullover-400 transition-transform {(isOpen || $isExpanded) ? 'rotate-90' : ''} flex-shrink-0" />
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
    @apply ml-1 mb-4;
  }
  
  .level-2 {
    @apply mb-2 ml-10 font-normal leading-none text-pullover-500;
  }
  
  .level-2:first-child {
    @apply mt-2;
  }
  
  .level-3 {
    @apply mb-1 ml-4 text-xs font-light text-pullover-600;
  }
  
  .level-3:first-child {
    @apply mt-1;
  }
  
  .plus-sign {
    @apply text-pullover-600 font-light;
  }
  
  ul {
    @apply -ml-1;
  }
</style> 