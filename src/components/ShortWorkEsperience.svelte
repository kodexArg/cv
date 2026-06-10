<section>
  <h2><i class="fa-solid fa-briefcase" aria-hidden="true"></i>Experiencia Laboral</h2>

  <article>
    <div class="job-head">
      <h3>Technical Lead — IT & Infraestructura</h3>
      <span class="dates">2016 — presente</span>
    </div>
    <p class="company">Grupo ALVS · Mendoza, AR</p>
    <p>
      Lidero el equipo de IT del grupo en todas sus unidades de negocio. Diseñé y opero su
      plataforma cloud en AWS —VPCs DEV/PROD, ECS Fargate, RDS PostgreSQL, Cognito, todo definido
      con CloudFormation y desplegado vía GitHub Actions con OIDC— que corre el helpdesk en
      producción, workflows de pagos, sitios institucionales y telemetría IoT sobre un backbone
      VPN multi-sitio. Impulso la adopción de IA en todo el grupo: orquestación multi-agente con
      servidores MCP, workflows automatizados y capacitación hands-on al personal.
    </p>
  </article>

  <article>
    <div class="job-head">
      <h3>Jefe de Organización y Sistemas</h3>
      <span class="dates">2005 — 2016</span>
    </div>
    <p class="company">Mendoza Central Entretenimiento (Casino de Mendoza)</p>
    <p>
      Diseñé de punta a punta las redes y el floorplan del casino y construí los clusters de
      servidores RHEL que corrieron toda la operación: sistemas de juego con 700 tragamonedas en
      red, dashboards de BI y analítica con machine learning. Una década de operación continua
      sin downtime.
    </p>
  </article>

  <article>
    <div class="job-head">
      <h3>Técnico de Sistemas de Tragamonedas</h3>
      <span class="dates">2002 — 2005</span>
    </div>
    <p class="company">Casino Buenos Aires</p>
    <p>Hardware de juego, redes y soporte de sistemas.</p>
  </article>
</section>

<style lang="postcss">
  @reference '../styles/global.css';

  article {
    @apply border-b-0 pb-2 mb-1;
  }

  .job-head {
    @apply flex flex-wrap items-baseline justify-between gap-x-4;
  }

  .job-head h3 {
    @apply mt-1;
  }

  .dates {
    @apply text-sm font-semibold text-pullover-400 whitespace-nowrap;
  }

  .company {
    @apply text-base text-mate-500 mt-0 text-left;
  }
</style>
