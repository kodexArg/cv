<script>
  export let toggleExpanded;
  export let expanded;
</script>

<button on:click={toggleExpanded}>
  {#if !expanded}
    <i class="fa fa-caret-down" /> me interesa...
  {:else}
    <i class="fa fa-caret-up" /> gracias.
  {/if}
</button>

