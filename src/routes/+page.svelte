<script>
  import Avatar from "../components/Avatar.svelte";
  import Contact from "../components/Contact.svelte";
  import Skills from "../components/Skills.svelte";
  import Title from "../components/Title.svelte";
  import Line from "../components/Line.svelte";
  import ShortWorkEsperience from "../components/ShortWorkEsperience.svelte";
  import ShortEducation from "../components/ShortEducation.svelte";
  import ShortProjects from "../components/ShortProjects.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<main class="background flex flex-col space-y-6">
  <section class="a4">
    <div class="flex w-full h-full">
      <div class="w-fib-5 bg-mate-100 rounded-l-md flex flex-col p-4 space-y-4">
        <Avatar />
        <Skills />
      </div>
      <div class="w-fib-8 flex flex-col p-4 space-y-1">
        <Title />
        <Contact />
        <Line />
        <ShortWorkEsperience />
        <ShortEducation />
        <ShortProjects />
        <Footer />
      </div>
    </div>
  </section>
</main>

<style lang="postcss">
  .a4 {
    /* @apply bg-white rounded-lg shadow-lg shadow-gray-700 flex flex-col p-0.5; */
    /* @apply w-[33.81rem]; */
    @apply w-full h-full;
    /* @apply h-[47.817rem]; */
    /* 1.414 -> aspect relation A4 */
  }
  .background {
    @apply font-lato;
    @apply h-full flex justify-center items-center ;
    @apply bg-white;
  }
</style>
