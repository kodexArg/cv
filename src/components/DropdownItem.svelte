<script>
  import { isExpanded } from '../lib/stores';
  
  export let title = '';
  export let icon = '';
  export let hasChildren = false;
  export let level = 1;
  
  let isOpen = false;
  
  function toggle() {
    if (hasChildren && !$isExpanded) {
      isOpen = !isOpen;
    }
  }
</script>

{#if level === 1}
  <li class="level-1" class:has-children={hasChildren}>
    <div class="title">
      {#if icon}
        <i class="{icon}"></i>
      {/if}
      <span>{title}</span>
    </div>
    
    {#if hasChildren}
      <ul class="level-2">
        <slot />
      </ul>
    {/if}
  </li>
{:else if level === 2}
  <li class="level-2" class:has-children={hasChildren}>
    <div class="title" role="button" tabindex="0" on:click={toggle} on:keydown={(e) => e.key === 'Enter' && toggle()}>
      <div class="title-content">
        {#if hasChildren}
          <i class="fa fa-chevron-right transition-transform text-[0.6rem] {(isOpen || $isExpanded) ? 'rotate-90' : ''}"></i>
        {/if}
        {#if icon}
          <i class="{icon}"></i>
        {/if}
        <span>{title}</span>
      </div>
    </div>
    
    {#if hasChildren && (isOpen || $isExpanded)}
      <ul class="level-3">
        <slot />
      </ul>
    {/if}
  </li>
{:else}
  <li class="level-{level}">
    <span>{title}</span>
  </li>
{/if}

<style lang="postcss">
  .level-1 {
    @apply mb-6;
  }

  .level-1 .title {
    @apply flex items-center gap-2 text-pullover-500 font-bold text-lg;
  }

  .level-2 {
    @apply ml-4 mb-2 font-normal leading-none;
  }

  .level-2 .title {
    @apply flex items-center cursor-pointer mb-4 text-base;
  }

  .level-2 .title-content {
    @apply flex items-center gap-1.5;
  }

  .level-2 .title:hover {
    @apply text-pullover-400;
  }

  .level-3 {
    @apply mb-2 text-sm;
  }



  i {
    @apply text-pullover-400;
  }
</style>