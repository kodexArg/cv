<script>
  import "../app.css";
</script>

<main id="background">
  <section id="a4">
    <slot />
  </section>
</main>

<style>
  #background {
    @apply h-screen flex justify-center items-center;
    @apply bg-fixed bg-gradient-to-b from-gray-300 to-gray-600;
  }
  #a4 {
    @apply bg-gray-50 rounded-lg;
    @apply w-[33.81rem] h-[47.817rem];
    /* 1.414 -> aspect relation A4 */
  }
</style>
