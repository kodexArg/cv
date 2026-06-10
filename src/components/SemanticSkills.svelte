<script>
  // Same eight groups (and order) as the one-page CV's "Core Skills" so both pages read
  // as one document; each group expands into the verbose detail the one-pager can't hold.
  const groups = [
    {
      icon: 'fa-brands fa-python',
      title: 'Backend',
      summary: 'Python · Django / DRF · FastAPI · PostgreSQL',
      details: [
        'Aplicaciones completas con Django 5: helpdesk, workflows de pago, portales B2B',
        'Django REST Framework para SaaS y telemetría IoT',
        'Colas y tareas asíncronas con Redis/Celery',
        'FastAPI y Flask para automatizaciones y webhooks',
        'PostgreSQL: modelado, tuning y backup/recovery',
      ],
    },
    {
      icon: 'fa-brands fa-aws',
      title: 'Cloud & DevOps',
      summary: 'AWS · Cloudflare · Docker · IaC · CI/CD',
      details: [
        'AWS: ECS Fargate, Amplify, App Runner, Lambda, RDS, S3/CloudFront, Cognito',
        'Infraestructura como código con CloudFormation',
        'CI/CD con GitHub Actions y OIDC (sin credenciales estáticas)',
        'Cloudflare: Pages, Workers, D1, R2',
        'Gestión de costos: Cost Explorer, budgets, optimización',
      ],
    },
    {
      icon: 'fa-solid fa-network-wired',
      title: 'Infraestructura & IoT',
      summary: 'Redes · VPN / IPsec · MikroTik · RPi & ESP32',
      details: [
        'MikroTik RouterOS, FortiGate, UniFi',
        'VPN site-to-site IPsec y acceso remoto L2TP',
        'VLANs, DHCP/DNS, monitoreo SNMP',
        'Flotas de Raspberry Pi y ESP32 con telemetría en producción',
        'Videovigilancia con detección por IA · Telefonía SIP/PBX',
      ],
    },
    {
      icon: 'fa-brands fa-linux',
      title: 'Linux SysAdmin',
      summary: 'Debian · RHEL · clustering y alta disponibilidad',
      details: [
        'Clusters RHEL en producción durante una década (zero downtime)',
        'Nginx, SSL/TLS, reverse proxy',
        'Monitoreo: Grafana, Zabbix, PRTG',
        'Virtualización: Docker, Oracle VM, VMware',
        'Sistemas agénticos self-hosted',
      ],
    },
    {
      icon: 'fa-solid fa-code',
      title: 'Full Stack',
      summary: 'Angular · Astro · Svelte · HTMX',
      details: [
        'Angular 21 con signals y PrimeNG',
        'Astro SSR con islas Svelte 5 · Tailwind v4',
        'HTMX sobre templates Django',
        'Diseño de APIs REST contract-first',
        'Despliegue: AWS Amplify, Fargate, Cloudflare Pages',
      ],
    },
    {
      icon: 'fa-solid fa-wand-magic-sparkles',
      title: 'IA & Agentes',
      summary: 'Orquestación multi-agente · MCP · RAG',
      details: [
        'Servidores y clientes MCP (varios públicos en GitHub)',
        'Claude Code, Antigravity SDK, Pydantic AI',
        'Agentes autónomos de triage y corrección de issues',
        'Jerarquías de subagentes por nivel de esfuerzo (Opus/Sonnet/Haiku)',
        'n8n, RAG, prompt engineering',
        'Generación de imágenes: ComfyUI, Stable Diffusion, Flux',
      ],
    },
    {
      icon: 'fa-solid fa-clipboard-check',
      title: 'QA & Método',
      summary: 'Spec-driven · BDD/TDD · revisión de proyectos',
      details: [
        'Desarrollo spec-driven: specs y ADRs como fuente de verdad',
        'APIs contract-first con cobertura verificada por tests',
        'Pipelines multi-agente de auditoría de código y especificaciones',
        'Code review y auditoría de arquitectura de proyectos de terceros',
        'Docs-as-code (mkdocs Material como documentación viva)',
      ],
    },
    {
      icon: 'fa-solid fa-people-group',
      title: 'Liderazgo & Negocio',
      summary: 'Equipos · arquitectura de soluciones · procesos',
      details: [
        'Dirección de equipos IT multidisciplinarios y multi-empresa',
        'Trabajo con expertos de dominio no técnicos (médicos, gerencias, operaciones)',
        'Automatización de procesos de negocio',
        'Gestión de proveedores y presupuesto',
        'BI y analítica para toma de decisiones (Power BI, dashboards)',
      ],
    },
  ];

  let open = $state({});

  function toggle(title) {
    open[title] = !open[title];
  }
</script>

<section>
  <h2 class="skills-title">
    <i class="fa-solid fa-layer-group" aria-hidden="true"></i>Habilidades
  </h2>

  <ul>
    {#each groups as g (g.title)}
      <li class="group">
        <button
          class="group-head"
          onclick={() => toggle(g.title)}
          aria-expanded={!!open[g.title]}
        >
          <i class="group-icon {g.icon}" aria-hidden="true"></i>
          <span class="group-title">{g.title}</span>
          <i
            class="chevron fa fa-chevron-right {open[g.title] ? 'rotate-90' : ''}"
            aria-hidden="true"
          ></i>
        </button>
        <p class="summary">{g.summary}</p>
        {#if open[g.title]}
          <ul class="details">
            {#each g.details as d}
              <li>{d}</li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}
  </ul>

  <h2 class="skills-title langs">
    <i class="fa-solid fa-language" aria-hidden="true"></i>Idiomas
  </h2>
  <p class="summary lang-line">Español — nativo</p>
  <p class="summary lang-line">Inglés — profesional (lectura excelente, conversación B2)</p>
</section>

<style lang="postcss">
  @reference '../styles/global.css';

  .skills-title {
    @apply text-xl mt-4 mb-2;
  }

  .skills-title.langs {
    @apply mt-8;
  }

  .group {
    @apply mt-4;
  }

  .group-head {
    @apply flex w-full items-center gap-2 cursor-pointer bg-transparent border-none p-0 text-left;
  }

  .group-icon {
    @apply text-pullover-500 text-base;
    width: 1.5rem;
    text-align: center;
    margin-right: 0;
  }

  .group-title {
    @apply font-oswald text-lg font-medium text-mate-700;
  }

  .chevron {
    @apply ml-auto text-[0.6rem] text-pullover-300 transition-transform;
  }

  .group-head:hover .group-title,
  .group-head:hover .chevron {
    @apply text-pullover-400;
  }

  .summary {
    @apply text-sm leading-snug text-mate-600 mt-0.5 text-left;
    padding-left: 2rem;
  }

  .details {
    @apply mt-1.5 mb-1 space-y-1;
    padding-left: 2rem;
  }

  .details li {
    @apply text-sm leading-snug text-mate-500 text-left;
    font-family: 'Source Sans Pro', sans-serif;
  }

  .details li::before {
    content: '·';
    @apply text-pullover-400 font-bold;
    margin-right: 0.4rem;
  }

  .lang-line {
    padding-left: 0.25rem;
  }
</style>
