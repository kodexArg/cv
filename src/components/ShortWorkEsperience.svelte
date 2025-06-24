<section>
  <h2>Experiencia Laboral</h2>
  <article>
    <div class="job-item">
      <h4>Grupo AVS: "Líder de Soporte Técnico"</h4>
      <span>Diciembre 2016 - Presente</span>
    </div>
  </article>

  <article>
    <div class="job-item">
      <h4>
        Mendoza Central Entretenimiento S.A.:<br />"Jefe de Organización y
        Sistemas"
      </h4>
      <span>2005 - Diciembre 2016</span>
    </div>
  </article>

  <article>
    <div class="job-item">
      <h4>
        Casino Buenos Aires:<br />"Técnico de Tragamonedas / Área Sistemas"
      </h4>
      <span>2003 - 2005</span>
    </div>
  </article>

  <article>
    <div class="job-item">
      <h4>Casino Buenos Aires: "Asistente de Tragamonedas"</h4>
      <span>Octubre de 2002 - 2003</span>
    </div>
  </article>
</section>

<style lang="postcss">
  article {
    @apply border-b-0 mb-1 pb-2;
    border-bottom: 1px dashed #f0f2f0;
  }

  article:last-child {
    border-bottom: none;
  }

  .job-item {
    @apply flex flex-wrap justify-between items-baseline;
  }

  .job-item h4 {
    @apply flex-1 min-w-0 mr-4;
  }

  .job-item span {
    @apply text-sm italic text-mate-600 flex-shrink-0 mt-0;
  }

  /* Cambiar layout cuando está maximizado en viewports grandes */
  @media (min-width: 1100px) {
    :global(.maximized) .job-item {
      @apply flex-col items-start;
    }
    
    :global(.maximized) .job-item span {
      @apply text-sm italic text-mate-300 ml-5 my-1 leading-tight block;
    }
  }

  section {
    @apply border-b-2;
  }

  .grid-layout.maximized {
    @apply lg:grid-cols-1 lg:gap-0;
  }
</style>
