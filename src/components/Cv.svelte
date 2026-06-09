<script>
  import Avatar from './Avatar.svelte';
  import Contact from './Contact.svelte';
  import SemanticSkills from './SemanticSkills.svelte';
  import Title from './Title.svelte';
  import Line from './Line.svelte';
  import AboutMe from './AboutMe.svelte';
  import ShortWorkEsperience from './ShortWorkEsperience.svelte';
  import ShortEducation from './ShortEducation.svelte';
  import ShortProjects from './ShortProjects.svelte';
  import Footer from './Footer.svelte';
  import MaximizeButton from './MaximizeButton.svelte';
  import PictureToggleButton from './PictureToggleButton.svelte';
  import { isMaximized, isLeftPanelVisible } from '../lib/stores';

  let { base = '' } = $props();
</script>

<div class:maximized={$isMaximized}>
  <div class="fixed top-4 right-4 flex space-x-2 z-50 print:hidden" role="toolbar" aria-label="Controles de vista">
    <MaximizeButton />
    <PictureToggleButton />
  </div>

  <main class="background flex flex-col space-y-6">
    <section class="a4">
      <div class="flex w-full h-full content-wrapper">
        {#if $isLeftPanelVisible}
          <aside class="left-col bg-mate-100 rounded-l-md flex flex-col p-4 space-y-4">
            <Avatar {base} />
            <SemanticSkills />
          </aside>
        {/if}
        <div class="right-col flex flex-col p-4 space-y-1" class:full-width={!$isLeftPanelVisible}>
          <Title />
          <Contact />
          <Line />
          <AboutMe />
          <ShortWorkEsperience />
          <ShortEducation />
          <ShortProjects />
          <Footer />
          {#if !$isLeftPanelVisible}
            <SemanticSkills />
          {/if}
        </div>
      </div>
    </section>
  </main>
</div>

<style lang="postcss">
  @reference '../styles/global.css';

  .a4 {
    @apply bg-white rounded-lg shadow-lg shadow-gray-700 flex flex-col p-0.5;
    @apply w-[800px] mx-auto mt-12;
    transition: all 0.3s ease;
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

  .right-col.full-width {
    @apply w-full;
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
