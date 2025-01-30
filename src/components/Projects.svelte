<section>
  <h2>Proyectos Realizados</h2>
  <p class="m-3 italic">
    A continuación, un listado de los proyectos que de alguna manera se
    relacionan con el nuevo rumbo que busco para mi carrera profesional.
  </p>

  <article>
    <h3>
      Indoor Monitor IoT <i class="fa-regular fa-star text-xs ml-2"></i>
    </h3>
    <p>
      <i class="fa-brands fa-github"></i> kodexArg/dj-indoor-monitor
    </p>
    <p>
      API REST y aplicación web en producción desarrollada con <b>Django 5</b> + <b>DRF</b> que 
      centraliza datos de múltiples <b>Raspberry Pi</b> distribuidos. El sistema permite 
      monitorear en tiempo real variables ambientales (temperatura, humedad, etc.) 
      en distintas locaciones.
    </p>
    <p>
      La plataforma está en constante evolución, incorporando nuevas funcionalidades 
      como reportes históricos, filtros avanzados y visualización de datos mediante 
      <b>Power BI</b>. Actualmente se utiliza para monitorear ambientes críticos 
      que requieren control constante de variables ambientales.
    </p>
    <p>
      <strong>keywords:</strong>
      <span>django 5, drf, htmx, iot, raspberry pi, plotly, power bi, pandas</span>
    </p>
  </article>

  <article>
    <h3>
      Portal Web B2B - Estación de Servicio<i
        class="fa-regular fa-star text-xs ml-2"
      />
    </h3>
    <p>
      <i class="fa-brands fa-github" />kodexArg/django-kmportal
    </p>
    <p>
      Desarrollé un sistema B2B que abarca todo el flujo de trabajo de carga de
      combustible. Comprende dos aplicaciones clave: una para los clientes B2B y
      otra, llamada 'staff', para el equipo interno. La aplicación cliente
      permite la gestión de órdenes de carga complejas y seguimiento en tiempo
      real. La aplicación 'staff' se usa principalmente en dispositivos móviles
      y facilita la toma de fotos y la subida de documentos durante el proceso
      de carga.
    </p>
    <p>
      Este sistema resuelve eficazmente el manejo de órdenes de carga de
      combustible para vehículos pesados, coordinando todas las fases del
      workflow, desde la solicitud inicial hasta la carga efectiva en la
      estación de servicio.
    </p>
    <p>
      La aplicación opera en un entorno de producción en AWS, alojada en una
      máquina EC2. Utilizamos bases de datos MySQL en RDS y almacenamos archivos
      en un bucket S3 de AWS. Las actualizaciones de la aplicación se manejan
      mediante Github Actions.
    </p>
    <p>
      La aplicación está realizada íntegramente en Django 4, utilizando su
      sistema de plantillas y django-allauth para la autenticación. El frontend
      está construido con Tailwind y Flowbite, complementados con JavaScript
      vanilla. Además, empleé middlewares como Whitenoise para la gestión de
      archivos estáticos y django-compressor para la minificación de recursos.
    </p>

    <p>
      <strong>keywords: </strong><span
        >django 4, django-allauth, compressor, ssl, tailwind, flowbite, aws,
        responsive</span
      >
    </p>
  </article>

  <article>
    <h3>
      Seguimiento para Cultivos via Telegram<i
        class="fa-regular fa-star text-xs ml-2"
      />
    </h3>
    <p>
      <i
        class="fa-brands fa-github"
      />kodexArg/raspberry-pi-temperature-to-telegram
    </p>
    <p>
      Implementé un sistema de monitoreo de cultivos alojado en una Raspberry
      Pi, equipado con sensores de temperatura y humedad dht11 y dht22. El
      servidor y la base de datos residen en el mismo dispositivo, corriendo en
      Raspbian.
    </p>
    <p>
      Utilizando un bot de Telegram, los usuarios pueden solicitar datos
      actuales, un gráfico histórico generado con Matplotlib, o una foto en
      tiempo real si el dispositivo cuenta con una cámara.
    </p>
    <p>
      Todo el monitoreo y las solicitudes se manejan directamente desde un chat
      de Telegram, convirtiendo esta solución en un sistema muy práctico.
    </p>
    <p>
      <strong>keywords: </strong><span
        >raspberry pi, python, opencv, pandas, matplotlib, telegram-bot, mysql,
        sqlalchemy</span
      >
    </p>
  </article>

  <article>
    <h3>Cuádruple enlace VPN</h3>
    <p>
      Arquitecté e implementé con mi equipo tres enlaces en sitios on-premise,
      todos con routers Mikrotik, y una VPM en la nube (primero de Azure, luego
      AWS)
    </p>
    <p>
      Esto se hizo en tiempo record a inicios del 2020, anticipándonos a lo que
      pronto fue el cierre total de la provincia por la Pandemia. Gracias a
      esto, la administración del grupo de trabajo y de muchas unidades de
      negocio se mantuvieron activas e interconectadas sin problema.
    </p>
    <p>
      El proyecto pronto escaló para incluir conexiones L2TP para los usuarios.
    </p>
    <p>
      <strong>keywords: </strong><span
        >mikrotik, ipsec, l2tp, aws, azure, s3</span
      >
    </p>
  </article>

  <article>
    <h3>Bot de Trading Algorítmico</h3>
    <p>
      <i class="fa-brands fa-github" />kodexArg/PyTradingView.
    </p>
    <p>
      Desarrollado en <b>Python</b> utilizando FastAPI, la API de Binance,
      Pandas y Pandas-TA. Integrado con <b>TradingView</b> a través de webhooks para
      ejecutar órdenes de entrada y salida.
    </p>
    <p>
      Incorpora indicadores customizados creados en Pine Script, permitiendo
      estrategias como entrar en posiciones al tocar los mínimos de las
      Bollinger Bands, Koncorde y otras en mercados alcistas, o utilizar
      trailing stop-loss para capitalizar en tendencias.
    </p>
    <p>
      Actualizaciones posteriores en TradingView permitieron la integración con
      otras plataformas como BingX, lo que hizo que este bot perdiera relevancia
      en mi estrategia de trading.
    </p>
    <p>Este bot lo realicé mientras terminaba un curso de Análisis Técnico.</p>
    <p>
      <strong>keywords: </strong>
      <span
        >flask, python-binance, pandas, tradingview, pine script, webhooks,
        telegram-bot</span
      >
    </p>
  </article>

  <article>
    <h3>Implementación Telefonía IP en Negocios</h3>
    <p>
      Sin mucho más para agregar, este proyecto incluyó la revisión de
      contratos, contratación de servicios y arquitectura de VLans preparadas
      para VoIP.
    </p>
    <p>
      <strong>keywords: </strong><span>networking, vlan, grandstream</span>
    </p>
  </article>

  <article>
    <h3>
      Sistema de Cartelería Digital<i class="fa-regular fa-star text-xs ml-2" />
    </h3>
    <p>
      <i class="fa-brands fa-github" />kodexArg/multimedia-handler-for-rpi *
    </p>
    <p>
      Desarrollé un sistema de cartelería digital para Casino de Mendoza, que
      consistía en dispositivos Raspberry Pi conectados a 16 televisores
      distribuidos en toda la sala. Los dispositivos iniciaban reproduciendo una
      serie de videos almacenados en una carpeta caché en su memoria SD.
    </p>
    <p>
      Utilicé Arch Linux ARM inicialmente, con un código que mezclaba Bash,
      omxplayer y Python. Versiones posteriores se ejecutan en Raspbian, sin X,
      sólo consola, y migré a utilizar systemd en lugar de cron.
    </p>
    <p>
      Los dispositivos se sincronizaban con un servidor Samba en el casino,
      permitiendo la actualización y personalización del contenido en cada
      dispositivo de manera automática y en cualquier momento.
    </p>
    <p>
      <strong
        >Este sistema funcionó sin interrupciones hasta el cierre del Casino.</strong
      >
    </p>
    <p>
      Actualmente, sigo utilizando este tipo de cartelería, ahora con Raspberry
      Pi 3, en algunas unidades de negocio, aunque con código reducido y sin
      repositorios externos.
    </p>
    <p>
      Durante un tiempo utilicé un servidor montado en AWS que, mediante s3 y
      servidor en Flask, permitía a usuarios no entrenados gestionar los videos
      en esos equipos.
    </p>
    <p>
      <strong>keywords: </strong>raspberry pi, arch linux, bash, omxplayer,
      python, dht11, dht22, ffmpeg, cvlc, rhel, samba
    </p>
    <p class="font-light italic">* incluye otros repositorios privados</p>
  </article>

  <article>
    <h3>Seguimiento Online Clima en Salas</h3>
    <p>
      <i class="fa-brands fa-raspberry-pi" /> Basado en Raspberry Pi, sensores DHT11
      y DHT22, y Django
    </p>
    <p>
      Adapté varios de los Raspberry Pi ya instalados en la sala del Casino para
      incluir sensores DHT11 y DHT22. Estos dispositivos capturaban datos de
      temperatura y humedad, que se inyectaban en tiempo real a un servidor
      Django con base de datos MariaDB.
    </p>
    <p>
      El hardware fue relativamente sencillo en términos de IoT, ya que los
      dispositivos estaban previamente instalados. Solo tuve que soldar los
      sensores DHT11 y DHT22 a los Raspberry Pi. El script de captura de datos
      funcionaba mediante inyección SQL en un entorno seguro, ya que todo
      operaba dentro de una LAN.
    </p>
    <p>
      La interfaz de Django mostraba gráficos en tiempo real con las diferentes
      temperaturas y niveles de humedad de la sala, permitiendo un monitoreo
      constante y eficiente del ambiente.
    </p>
    <p>
      Gracias a este proyecto aprendí a trabajar con diferentes librerías
      gráficas en JavaScript y a crear visualizaciones en tiempo real.
    </p>
    <p>
      <strong>keywords: </strong>raspberry pi, sensores dht11 y dht22, django,
      chartjs
    </p>
  </article>

  <article>
    <h3>
      Infraestructura IT Casino de Mendoza<i
        class="fa-regular fa-star text-xs ml-2"
      />
    </h3>
    <p>
      Liderar la implementación del nuevo sistema de Casino de Mendoza, en
      coordinación con los profesionales de Forward-System (sistema privativo) y
      el equipo técnico de Mendoza Central Entretenimientos S.A.
    </p>
    <p>
      Me tocó diseñar la topología de red, cumpliendo los requerimientos del
      proveedor del sistema sin ningún inconveniente, con equipos Cisco Catalyst
      3750 de core, en el rack central, y 10 switches Cisco 2960 ubicados de a
      pares, ofreciendo redundancia, para distribuir la red en los más de 700
      tragamonedas.
    </p>
    <p>
      El Casino salía por un router de borde Fortigate, y estaba muy
      securitizado, ofreciendo una conexión VPN constante con España.
    </p>
    <p>
      También arquitecté la infraestructura virtual basada en RHEL (OEL) que
      alojaba tanto a los servidores principales como las terminales
      virtualizadas, a las que los usuarios accedían por thin client.
    </p>
    <p>
      A lo largo de los años la infraestructura fue perfeccionándose y escalando
      según los requerimientos del negocio. El éxito de este modelo fue tal que
      sólo requería mantenimientos preventivos.
    </p>
    <p>
      En todos los años en que este sistema funcionó, jamás hubo pérdida de
      datos ni intrusiones externas.
    </p>
    <p>
      La infraestructura funcionó sin interrupciones desde 2005 hasta el cierre
      del casino durante la pandemia.
    </p>
    <p>
      <strong>keywords: </strong><span
        >rhel, oracle vm, virtualización, ncomputing thin clients, active
        directory, oracle storage, cisco, fortigate, prtg, snmp</span
      >
    </p>
  </article>

  <article>
    <h3>Otros Proyectos Obsoletos</h3>

    <h4>Analítica Online de Tragamonedas</h4>
    <p>
      Desarrollé un sistema que recolectaba alarmas generadas por tragamonedas y
      las almacenaba como logs en una carpeta específica. Un script leía estos
      archivos de manera recursiva y los agregaba a una base de datos. Esto
      permitía realizar análisis en tiempo real de la ocupación de la sala,
      midiendo qué máquinas estaban en uso durante diferentes franjas horarias,
      basándose en la cantidad de dinero jugado por partida.
    </p>
    <p>
      <strong>keywords: </strong>forward-system, sas, windows scripting, python,
      postgresql
    </p>

    <h4>Seguimiento de Personal en Django</h4>
    <p>
      Implementé un sistema CRUD en las primeras versiones de Django que
      permitía hacer seguimiento del personal. Los supervisores podían subir
      novedades del empleado en formato PDF. El sistema contaba con un sistema
      de log-in diferenciado para gerentes y supervisores, permitiendo distintos
      niveles de acceso.
    </p>
    <p><strong>keywords: </strong>django crud, pdf</p>

    <h4>Heatmap de Tragamonedas en Visio con VBA</h4>
    <p>
      Utilicé VBA para crear un sistema que generaba heatmaps en Microsoft
      Visio, representando diferentes métricas para las tragamonedas en la sala
      del Casino de Mendoza. Las métricas incluían ocupación, coin-in y ganancia
      por máquina, entre otras. Aunque el código que generaba el heatmap estaba
      en VBA, el sistema se integraba con otras métricas y era una herramienta
      valiosa para la gestión del casino.
    </p>
    <p>
      <strong>keywords: </strong>python, vba, microsoft visio, bi, data
      analytic, postgresql
    </p>

    <h4>Machine Learning aplicado a DDBB Tragamonedas</h4>
    <p>
      Siendo una de mis tareas el análisis de estadísticos generados por el
      sistema online de los tragamonedas, experimenté con TensorFlow siguiendo
      los lineamientos de "Python Machine Learning", libro de Sebastian Raschka.
    </p>
    <p>
      Esta herramienta nos ayudó (ya oficiaba como parte del staff de apoyo de
      la gerencia) a identificar y agrupar mejor los targets de cada slot, y a
      partir de esta información optimizar el layout de la sala.
    </p>
    <p>
      <strong>keywords: </strong>algoritmos de clasificación, python, pandas,
      tensorflow, machine learning, matplotlib
    </p>
  </article>
  <article>
    <h3>Estudios y prácticas recientes</h3>
    <h4>Stable Diffusion</h4>
    <p>
      En el ámbito de la inteligencia artificial, he realizado una investigación
      exhaustiva centrada en Stable Diffusion. Este estudio implicó la
      implementación del sistema en múltiples plataformas, incluyendo
      infraestructuras de cloud computing en AWS. Mi enfoque se dirigió hacia el
      perfeccionamiento del sistema de prompting, utilizando herramientas
      complementarias como Automatic1111 y ComfyUI para afinar los resultados
      generados. Específicamente, dediqué tiempo al estudio de técnicas
      avanzadas de prompting. Además, me adentré en los aspectos técnicos de la
      instalación de PyTorch, enfocándome en la configuración y puesta a punto
      (más que en su utilización).
    </p>
    <p>
      Asimismo, amplié mis conocimientos de prompting de Midjourney; el cual
      utilicé en producción para distintas unidades de negocio.
    </p>
    <p>
      <strong>keywords: </strong>python, aws, ec2, ai, pytorch, automatic111,
      comfyui, Midjurney
    </p>
  </article>
</section>

<style lang="postcss">
  h3 {
    @apply flex items-center;
  }
  p {
    @apply leading-tight;
  }

  h4 {
    @apply -mb-1;
  }

  span {
    @apply italic font-light tracking-wider;
  }
</style>
