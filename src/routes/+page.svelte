<script>
  import AboutMe from "../components/AboutMe.svelte";
  import Avatar from "../components/Avatar.svelte";
  import Contact from "../components/Contact.svelte";
  import Line from "../components/Line.svelte";
  import Skills from "../components/Skills.svelte";
  import Title from "../components/Title.svelte";
  import WorkExperience from "../components/WorkExperience.svelte";
</script>

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
      <AboutMe />
    </div>
  </div>
</section>

<section class="a4">
  <div class="flex w-full h-full">
    <div class="w-fib-5 bg-mate-100 rounded-l-md flex flex-col p-4 space-y-4" />
    <div class="w-fib-8 flex flex-col p-4 space-y-1">
      <WorkExperience />
    </div>
  </div>
</section>

<style>
  .a4 {
    @apply bg-mate-50 rounded-lg shadow-lg shadow-gray-700 flex flex-col p-0.5;
    @apply w-[33.81rem] h-[47.817rem];
    /* 1.414 -> aspect relation A4 */
  }
</style>
