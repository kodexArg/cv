<script>
  import "../app.css";
</script>

<main class="background flex flex-col space-y-6">
  <slot />
</main>

<style>
  .background {
    @apply font-lato;
    @apply h-full flex justify-center items-center py-4;
    @apply bg-fixed bg-gradient-to-b from-[#B8BAB7] to-mate-300;
  }
</style>
