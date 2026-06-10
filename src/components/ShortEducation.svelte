<script>
  let isPlatziOpen = $state(false);
</script>

<section>
  <h2><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i>Educación</h2>

  <article>
    <h4>Educación Técnica:</h4>
    <span>Escuela técnica ENET N°1 «Ing. Pablo Nogués», Mendoza</span>
  </article>

  <article>
    <h4>Educación Superior:</h4>
    <span>• Ingeniería Electromecánica (inconclusa) — UNSL, San Luis</span>
    <span>• Diseño Gráfico (inconcluso) — Villa Mercedes, San Luis</span>
  </article>

  <article>
    <div class="certification-item">
      <button class="certification-title" onclick={() => (isPlatziOpen = !isPlatziOpen)}>
        Certificación continua — Platzi
        <i class="fa fa-chevron-right ml-2 text-xs text-mate-400 transition-transform {isPlatziOpen ? 'rotate-90' : ''}" aria-hidden="true"></i>
      </button>

      {#if isPlatziOpen}
        <span><strong>IA y Ciencia de Datos:</strong> complejidad algorítmica, estadística computacional, álgebra lineal y pensamiento probabilístico con Python</span>
        <span><strong>Backend:</strong> Django, Python, SQL, Scrapy</span>
        <span><strong>DevOps y Cloud:</strong> AWS (Cloud Computing, EC2), Docker, Git y GitHub</span>
        <span><strong>Frontend:</strong> Svelte, Clean Code con JavaScript</span>
        <span>
          Perfil completo en
          <a href="https://platzi.com/p/gcavedal/" target="_blank" rel="noopener noreferrer">platzi.com/p/gcavedal</a>
        </span>
      {/if}
    </div>
  </article>
</section>

<style lang="postcss">
  @reference '../styles/global.css';

  article {
    @apply border-b-0 -mt-2;
  }

  span {
    @apply text-sm italic text-mate-500 ml-5 my-1 leading-snug block;
  }

  span strong {
    @apply not-italic text-mate-600 font-medium;
  }

  span a {
    @apply underline;
  }

  section {
    @apply border-b-2 border-pullover-50;
  }

  .certification-title {
    @apply cursor-pointer flex items-center bg-transparent border-none p-0 text-left w-full;
    @apply font-oswald text-lg text-mate-500 mt-3 mb-1 tracking-wide;
  }

  .certification-title:hover {
    @apply text-pullover-400;
  }
</style>
