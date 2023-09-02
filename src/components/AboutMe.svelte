<script>
  let expanded = false;

  function toggleExpanded() {
    expanded = !expanded;
  }
</script>

<section>
  <h2>Acerca de mí</h2>
  <article id="AboutMe" class={!expanded ? "h-32 overflow-hidden relative" : ""}>
    <p>
      Actualmente me desempeño como Líder Técnico y Administrador de Sistemas para un grupo variado de empresas, con unidades de negocio de diferentes dimensiones, visiones y
      presupuestos. Esto me da una ventaja para entender cómo se desarrollan los negocios desde "adentro", identificar sus áreas críticas, comprender los procesos de toma de
      decisión y discernir qué necesitan para funcionar mejor.
    </p>

    <p>
      Por estos días, mis pasiones no están en sintonía con la empresa en la que trabajo, a la que realmente aprecio mucho. Busco un cambio radical que me permita explorar este
      nuevo mundo que se abre con la inteligencia artificial y tecnologías emergentes. Quiero que todo lo que he aprendido y utilizado durante años como herramientas que agregan
      valor se convierta en el Core Business, en mi día a día, en el centro de mi atención y mi trabajo.
    </p>
    <p>
      En estos 45 años he aprendido muchas cosas, pero por encima de todas valoro una: <strong>He aprendido a aprender</strong>. Me moviliza entender, descubrir y sorprenderme;
      siempre con la mirada alzada y mirando hacia adelante.
    </p>
    <p>Acá estoy listado la mayoría de mis habilidades, ordenando y ponderando entre las que más me apasionan, en las que quiero crecer y más conocimientos tengo para aportar.</p>
    <p>Estaré feliz de ser contactado por el medio que desees.</p>
    {#if !expanded}
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent-" />
    {/if}
  </article>
  <button on:click={toggleExpanded}>
    {#if !expanded}
      <i class="fa fa-caret-down" /> me interesa...
    {:else}
      <i class="fa fa-caret-up" /> gracias.
    {/if}
  </button>
</section>
