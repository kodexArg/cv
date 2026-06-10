<script>
  let showHistory = $state(false);
</script>

<section>
  <h2><i class="fa-solid fa-diagram-project" aria-hidden="true"></i>Proyectos</h2>

  <p class="text-sm italic mb-2">
    Los proyectos recientes (2024–2026) reflejan mi trabajo actual: arquitecturas spec-driven,
    plataformas cloud y agentes de IA. Los marcados con <i class="fa-regular fa-star text-xs" aria-hidden="true"></i>
    son los más representativos.
  </p>

  <article>
    <h3>
      Coveris — SaaS de Capacidad Hospitalaria <i class="fa-regular fa-star text-xs ml-2" aria-hidden="true"></i>
    </h3>
    <p class="links">
      <a href="https://github.com/kodexArg/kdx-ng-coveris" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-github" aria-hidden="true"></i> kodexArg/kdx-ng-coveris
      </a>
    </p>
    <p>
      SaaS de planificación de capacidad hospitalaria. Diseño arquitectónico propio sobre lógica
      de negocio provista por médicos: más de 25 ADRs, API contract-first con cobertura
      verificada por tests y un pipeline multi-agente de IA (Opus/Sonnet/Haiku) auditando las
      especificaciones. El MVP corre en AWS (Amplify + ECS Fargate + RDS).
    </p>
    <p class="text-sm">
      <strong>keywords:</strong>
      <span>angular 21, primeng, django 5.2, drf, postgresql, ecs fargate, amplify, cognito, spec-driven, tdd</span>
    </p>
  </article>

  <article>
    <h3>
      Plataforma Cloud Grupo ALVS <i class="fa-regular fa-star text-xs ml-2" aria-hidden="true"></i>
    </h3>
    <p>
      Diseño y operación de la infraestructura AWS unificada del grupo: VPCs DEV/PROD, ECS
      Fargate, RDS PostgreSQL, ALB, Cognito y Secrets Manager, definida con CloudFormation y
      CI/CD con GitHub OIDC. La documentación viva (mkdocs Material) es la fuente única de verdad
      de la plataforma (repositorios privados).
    </p>
    <p class="text-sm">
      <strong>keywords:</strong>
      <span>aws, cloudformation, iac, ecs fargate, rds, alb, cognito, secrets manager, oidc, mkdocs</span>
    </p>
  </article>

  <article>
    <h3>
      Herramientas MCP y Agentes Autónomos <i class="fa-regular fa-star text-xs ml-2" aria-hidden="true"></i>
    </h3>
    <p class="links">
      <a href="https://github.com/kodexArg/syv-mcp-tools" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-github" aria-hidden="true"></i> kodexArg/syv-mcp-tools
      </a>
      ·
      <a href="https://github.com/kodexArg/python-telegram-bot-mcp" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-github" aria-hidden="true"></i> kodexArg/python-telegram-bot-mcp
      </a>
      ·
      <a href="https://github.com/kodexArg/mcp-singleton-terminal-py" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-github" aria-hidden="true"></i> kodexArg/mcp-singleton-terminal-py
      </a>
    </p>
    <p>
      Servidores MCP públicos (terminal persistente, Telegram Bot API, pipeline de validación de
      contenido), agentes autónomos de triage y corrección de issues, y un plano de control
      privado de orquestación multi-agente con jerarquía de subagentes por nivel de esfuerzo.
    </p>
    <p class="text-sm">
      <strong>keywords:</strong>
      <span>mcp, python, pydantic ai, anthropic sdk, antigravity sdk, claude code, multi-agente, n8n</span>
    </p>
  </article>

  <article>
    <h3>
      SROA — Sitio Institucional y Blog <i class="fa-regular fa-star text-xs ml-2" aria-hidden="true"></i>
    </h3>
    <p>
      Sitio institucional y blog de la Sociedad Rural del Oeste Argentino: build full-stack
      spec-driven con Astro SSR, islas Svelte 5 y backend Django asíncrono, desplegado en ECS
      Fargate sobre la plataforma AWS del grupo (repositorio privado).
    </p>
    <p class="text-sm">
      <strong>keywords:</strong>
      <span>astro ssr, svelte 5, django, ecs fargate, rds, cognito, seo, github actions oidc</span>
    </p>
    <p class="font-light italic text-sm">
      En producción en
      <a href="https://sroa.grupoalvs.com/" target="_blank" rel="noopener noreferrer" class="text-gray-800 underline">
        sroa.grupoalvs.com
      </a>
    </p>
  </article>

  <article>
    <h3>Welp — Helpdesk y Pagos</h3>
    <p class="links">
      <a href="https://github.com/kodexArg/welpdesk" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-github" aria-hidden="true"></i> kodexArg/welpdesk
      </a>
    </p>
    <p>
      Sistema de tickets y workflows de compra-a-pago en producción en Grupo ALVS: Django 5 con
      HTMX y despliegue en App Runner.
    </p>
    <p class="text-sm">
      <strong>keywords:</strong>
      <span>django 5, htmx, app runner, postgresql, workflows</span>
    </p>
    <p class="font-light italic text-sm">
      En producción en
      <a href="https://helpdesk.grupoalvs.com/" target="_blank" rel="noopener noreferrer" class="text-gray-800 underline">
        helpdesk.grupoalvs.com
      </a>
    </p>
  </article>

  <article>
    <h3>KCBD — Laboratorio e IoT</h3>
    <p class="links">
      <a href="https://github.com/kodexArg/dj-indoor-monitor" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-github" aria-hidden="true"></i> kodexArg/dj-indoor-monitor
      </a>
    </p>
    <p>
      Co-construcción de la red de sensores del laboratorio de cultivo; su telemetría corre en
      producción sobre AWS con Raspberry Pi en planta y backend Django/DRF.
    </p>
    <p class="text-sm">
      <strong>keywords:</strong>
      <span>raspberry pi, django, drf, angular, iot, telemetría, aws</span>
    </p>
    <p class="font-light italic text-sm">
      En producción en
      <a href="https://kcbd.grupoalvs.com/" target="_blank" rel="noopener noreferrer" class="text-gray-800 underline">
        kcbd.grupoalvs.com
      </a>
    </p>
  </article>

  <article>
    <h3>Eurotrip 2026 — App de Viaje en Cloudflare</h3>
    <p class="links">
      <a href="https://github.com/kodexArg/cf-ng-eurotrip2026" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-github" aria-hidden="true"></i> kodexArg/cf-ng-eurotrip2026
      </a>
    </p>
    <p>
      Compañero de viaje personal corriendo íntegramente sobre el stack edge de Cloudflare:
      Pages, D1 (SQLite distribuido) y R2 para medios.
    </p>
    <p class="text-sm">
      <strong>keywords:</strong>
      <span>angular 21, cloudflare pages, d1, r2, wrangler, vitest</span>
    </p>
    <p class="font-light italic text-sm">
      En producción en
      <a href="https://eurotrip2026.kodexarg.com/" target="_blank" rel="noopener noreferrer" class="text-gray-800 underline">
        eurotrip2026.kodexarg.com
      </a>
    </p>
  </article>

  <article>
    <h3>
      Infraestructura IT Casino de Mendoza <i class="fa-regular fa-star text-xs ml-2" aria-hidden="true"></i>
    </h3>
    <p>
      Arquitectura, dirección y soporte de la infraestructura del Casino de Mendoza durante una
      década: interconexión de 700 tragamonedas, clusters RHEL autoconstruidos y la
      infraestructura virtual completa, sin downtime.
    </p>
    <p class="text-sm">
      <strong>keywords:</strong>
      <span>rhel, oracle vm, virtualización, thin clients, active directory, cisco, fortigate, prtg, snmp</span>
    </p>
  </article>

  <article class="history">
    <button
      class="history-toggle"
      onclick={() => (showHistory = !showHistory)}
      aria-expanded={showHistory}
    >
      <h3>
        Proyectos anteriores (2015 — 2022)
        <i
          class="fa fa-chevron-right ml-2 text-xs text-mate-400 transition-transform {showHistory ? 'rotate-90' : ''}"
          aria-hidden="true"
        ></i>
      </h3>
    </button>

    {#if showHistory}
      <h4>Sistema de Cartelería Digital</h4>
      <p class="links">
        <a href="https://github.com/kodexArg/multimedia-handler-for-rpi" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-github" aria-hidden="true"></i> kodexArg/multimedia-handler-for-rpi
        </a>
      </p>
      <p class="text-sm">
        Sistema IoT de publicidades en TV sobre flota de Raspberry Pi, con repositorio central de
        contenido. Reaprovechado luego para un mapa térmico en tiempo real de las salas del
        casino (sensores DHT11/DHT22 + Django + ChartJS), operativo durante años.
      </p>

      <h4>Cuádruple Enlace VPN</h4>
      <p class="text-sm">
        Arquitectura del enlace entre tres sitios on-premise y la nube (Azure, luego AWS), con
        acceso L2TP para usuarios. <span>mikrotik, ipsec, l2tp, aws, azure</span>
      </p>

      <h4>Automatización AWS Route53 + EC2</h4>
      <p class="links">
        <a href="https://github.com/kodexArg/lambda-update-route53" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-github" aria-hidden="true"></i> kodexArg/lambda-update-route53
        </a>
      </p>
      <p class="text-sm">
        Lambda que convierte instancias EC2 en registros Route53 ante cada cambio de estado:
        acceso por nombre de dominio a cada servidor.
      </p>

      <h4>Bot de Trading Algorítmico</h4>
      <p class="links">
        <a href="https://github.com/kodexArg/PyTradingView" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-github" aria-hidden="true"></i> kodexArg/PyTradingView
        </a>
      </p>
      <p class="text-sm">
        Puente entre indicadores de TradingView y órdenes long/short en Binance.
        <span>flask, python-binance, pandas, pine script, webhooks</span>
      </p>

      <h4>Machine Learning sobre Datos de Tragamonedas</h4>
      <p class="text-sm">
        Modelos de clasificación y analítica predictiva sobre la base de datos de juego.
        <span>python, pandas, tensorflow, matplotlib, postgresql</span>
      </p>
    {/if}
  </article>
</section>

<style lang="postcss">
  @reference '../styles/global.css';

  h3 {
    @apply flex items-center;
  }

  p {
    @apply pl-5 text-left leading-tight;
  }

  h4 {
    @apply -mb-1;
  }

  span {
    @apply italic font-light tracking-wider;
  }

  .links a {
    @apply text-mate-700;
  }

  .links a:hover {
    @apply text-pullover-400;
  }

  .history-toggle {
    @apply cursor-pointer bg-transparent border-none p-0 text-left w-full;
  }

  .history-toggle:hover h3 {
    @apply text-pullover-400;
  }
</style>
