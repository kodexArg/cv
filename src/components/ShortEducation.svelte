<script>
  import { isExpanded } from '../lib/stores';
  
  let isPlatziOpen = false;
  
  function togglePlatzi() {
    if (!$isExpanded) {
      isPlatziOpen = !isPlatziOpen;
    }
  }
</script>

<section>
  <h2>Educación Formal</h2>
  
  <article>
    <h4>Educación Superior:</h4>
    <span>• Ingeniería Electromecánica (inconcluso) - UNSL, San Luis</span>
    <span>• Diseño Gráfico (inconcluso) - Facultad Villa Mercedes, San Luis</span>
    <span>• Contador Público Nacional (inconcluso) - Universidad Siglo XXI</span>
  </article>

  <article>
    <h4>Educación Técnica:</h4>
    <span>Ing. Pablo Nogués ENET I, Mendoza</span>
  </article>

  <article>
    <div class="certification-item">
      <h4 class="certification-title" on:click={togglePlatzi} role="button" tabindex="0" on:keydown={(e) => e.key === 'Enter' && togglePlatzi()}>
        Certificaciones Técnicas - Platzi:
        <i class="fa fa-chevron-right ml-2 text-xs text-mate-400 transition-transform {(isPlatziOpen || $isExpanded) ? 'rotate-90' : ''}" />
      </h4>
      
      {#if isPlatziOpen || $isExpanded}
        <span><strong>Inteligencia Artificial y Ciencia de Datos:</strong></span>
        <span>• Complejidad Algorítmica con Python</span>
        <span>• Estadística Computacional con Python</span>
        <span>• Fundamentos de Álgebra Lineal con Python</span>
        <span>• Introducción al Pensamiento Probabilístico</span>
        
        <span><strong>Desarrollo Backend:</strong></span>
        <span>• Django Básico e Intermedio</span>
        <span>• Python Básico</span>
        <span>• Bases de Datos con SQL</span>
        <span>• Scrapy</span>
        
        <span><strong>DevOps y Cloud:</strong></span>
        <span>• AWS Cloud Computing y EC2</span>
        <span>• Docker</span>
        <span>• Git y GitHub</span>
        
        <span><strong>Frontend:</strong></span>
        <span>• Svelte</span>
        <span>• Clean Code con JavaScript</span>
        
        <span>
          <a href="https://platzi.com/p/gcavedal/">Platzi</a>
        </span>
      {/if}
    </div>
  </article>
</section>

<style lang="postcss">
  article {
    @apply border-b-0 -mt-2;
  }

  span {
    @apply text-sm italic text-mate-300 ml-5 my-1 leading-tight block;
  }

  span strong {
    @apply not-italic text-mate-600 font-medium;
  }

  section {
    @apply border-b-2;
  }

  .certification-title {
    @apply cursor-pointer flex items-center justify-between;
  }

  .certification-title:hover {
    @apply text-mate-400;
  }
</style>
