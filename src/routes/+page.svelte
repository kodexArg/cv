<script>
  import Avatar from "../components/Avatar.svelte";
  import Contact from "../components/Contact.svelte";
  import Skills from "../components/Skills.svelte";
  import Title from "../components/Title.svelte";
  import Line from "../components/Line.svelte";
  import AboutMe from "../components/AboutMe.svelte";
  import ShortWorkEsperience from "../components/ShortWorkEsperience.svelte";
  import ShortEducation from "../components/ShortEducation.svelte";
  import ShortProjects from "../components/ShortProjects.svelte";
  import Footer from "../components/Footer.svelte";
  import { isMaximized } from '../lib/stores';
  import MaximizeButton from "../components/MaximizeButton.svelte";
  import ExpandButton from "../components/ExpandButton.svelte";
</script>

<MaximizeButton />
<ExpandButton />
<main class="background flex flex-col space-y-6">
  <section class="a4">
    <div class="flex w-full h-full content-wrapper">
      <div class="left-col bg-mate-100 rounded-l-md flex flex-col p-4 space-y-4">
        <Avatar />
        <Skills />
      </div>
      <div class="right-col flex flex-col p-4 space-y-1">
        <Title />
        <Contact />
        <Line />
        <AboutMe />
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
    @apply bg-white rounded-lg shadow-lg shadow-gray-700 flex flex-col p-0.5;
    @apply w-[63rem] mx-auto mt-12;
    transition: all 0.3s ease;
    transform-origin: center;
  }
  
  :global(.maximized) .a4 {
    @apply w-full h-screen rounded-none shadow-none mt-0 mx-0;
  }
  
  .left-col {
    @apply w-fib-5 min-w-[11.2rem];
    transition: all 0.3s ease;
  }
  
  .right-col {
    @apply w-fib-8;
    transition: all 0.3s ease;
  }
  
  :global(.maximized) .left-col {
    @apply w-1/6 min-w-[14.4rem] bg-transparent;
  }
  
  :global(.maximized) .right-col {
    @apply w-5/6 ml-4 mr-10;
  }
  
  .background {
    @apply font-lato min-h-screen w-full;
    @apply flex justify-center;
    @apply py-8 px-4 md:px-8 lg:px-12;
    @apply bg-fixed bg-gradient-to-b from-[#B8BAB7] to-mate-300;
    transition: all 0.3s ease;
  }
  
  :global(.maximized) .background {
    @apply p-0 bg-none bg-white;
  }
</style>
