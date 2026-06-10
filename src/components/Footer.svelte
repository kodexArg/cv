<script>
  let { base = '' } = $props();
</script>

<footer class="print:hidden">
  <a href={`${base}/`}>
    <i class="fa-solid fa-file-lines" aria-hidden="true"></i>
    versión one-page (inglés)
  </a>
  <a href={`${base}/es/`}>
    <i class="fa-solid fa-file-lines" aria-hidden="true"></i>
    versión one-page (español)
  </a>
</footer>

<style lang="postcss">
  @reference '../styles/global.css';

  footer {
    @apply flex flex-wrap gap-x-6 gap-y-1 mt-10 pt-3 border-t-2 border-pullover-50;
  }

  footer a {
    @apply text-sm text-mate-600 underline;
    text-decoration-color: var(--color-pullover-200);
    transition: color 0.15s ease;
  }

  footer a:hover {
    @apply text-pullover-400;
  }
</style>
