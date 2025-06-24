import"../chunks/CYU6waRM.js";import{a2 as S,a4 as e,X as i,Y as o}from"../chunks/CIbDuVN7.js";import{f as t,a as r}from"../chunks/Cj25N8Tq.js";import{M as j,E as w,A as x,S as P,T as M,C as k,L as E,a as T,b as D}from"../chunks/Df5djvwU.js";var C=t(`<section><h2>Proyectos Realizados</h2> <p class="m-3 italic svelte-18za2o0">A continuación, un listado de los proyectos que de alguna manera se
    relacionan con el nuevo rumbo que busco para mi carrera profesional.</p> <article><h3 class="svelte-18za2o0">Indoor Monitor IoT <i class="fa-regular fa-star text-xs ml-2"></i></h3> <p class="svelte-18za2o0"><i class="fa-brands fa-github"></i> kodexArg/dj-indoor-monitor</p> <p class="svelte-18za2o0">API REST y aplicación web en producción desarrollada con <b>Django 5</b> + <b>DRF</b> que 
      centraliza datos de múltiples <b>Raspberry Pi</b> distribuidos. El sistema permite 
      monitorear en tiempo real variables ambientales (temperatura, humedad, etc.) 
      en distintas locaciones.</p> <p class="svelte-18za2o0">La plataforma está en constante evolución, incorporando nuevas funcionalidades 
      como reportes históricos, filtros avanzados y visualización de datos mediante <b>Power BI</b>. Actualmente se utiliza para monitorear ambientes críticos 
      que requieren control constante de variables ambientales.</p> <p class="svelte-18za2o0"><strong>keywords:</strong> <span class="svelte-18za2o0">django 5, drf, htmx, iot, raspberry pi, plotly, power bi, pandas</span></p></article> <article><h3 class="svelte-18za2o0">Portal Web B2B - Estación de Servicio<i class="fa-regular fa-star text-xs ml-2"></i></h3> <p class="svelte-18za2o0"><i class="fa-brands fa-github"></i>kodexArg/django-kmportal</p> <p class="svelte-18za2o0">Desarrollé un sistema B2B que abarca todo el flujo de trabajo de carga de
      combustible. Comprende dos aplicaciones clave: una para los clientes B2B y
      otra, llamada 'staff', para el equipo interno. La aplicación cliente
      permite la gestión de órdenes de carga complejas y seguimiento en tiempo
      real. La aplicación 'staff' se usa principalmente en dispositivos móviles
      y facilita la toma de fotos y la subida de documentos durante el proceso
      de carga.</p> <p class="svelte-18za2o0">Este sistema resuelve eficazmente el manejo de órdenes de carga de
      combustible para vehículos pesados, coordinando todas las fases del
      workflow, desde la solicitud inicial hasta la carga efectiva en la
      estación de servicio.</p> <p class="svelte-18za2o0">La aplicación opera en un entorno de producción en AWS, alojada en una
      máquina EC2. Utilizamos bases de datos MySQL en RDS y almacenamos archivos
      en un bucket S3 de AWS. Las actualizaciones de la aplicación se manejan
      mediante Github Actions.</p> <p class="svelte-18za2o0">La aplicación está realizada íntegramente en Django 4, utilizando su
      sistema de plantillas y django-allauth para la autenticación. El frontend
      está construido con Tailwind y Flowbite, complementados con JavaScript
      vanilla. Además, empleé middlewares como Whitenoise para la gestión de
      archivos estáticos y django-compressor para la minificación de recursos.</p> <p class="svelte-18za2o0"><strong>keywords:</strong><span class="svelte-18za2o0">django 4, django-allauth, compressor, ssl, tailwind, flowbite, aws,
        responsive</span></p></article> <article><h3 class="svelte-18za2o0">Seguimiento para Cultivos via Telegram<i class="fa-regular fa-star text-xs ml-2"></i></h3> <p class="svelte-18za2o0"><i class="fa-brands fa-github"></i>kodexArg/raspberry-pi-temperature-to-telegram</p> <p class="svelte-18za2o0">Implementé un sistema de monitoreo de cultivos alojado en una Raspberry
      Pi, equipado con sensores de temperatura y humedad dht11 y dht22. El
      servidor y la base de datos residen en el mismo dispositivo, corriendo en
      Raspbian.</p> <p class="svelte-18za2o0">Utilizando un bot de Telegram, los usuarios pueden solicitar datos
      actuales, un gráfico histórico generado con Matplotlib, o una foto en
      tiempo real si el dispositivo cuenta con una cámara.</p> <p class="svelte-18za2o0">Todo el monitoreo y las solicitudes se manejan directamente desde un chat
      de Telegram, convirtiendo esta solución en un sistema muy práctico.</p> <p class="svelte-18za2o0"><strong>keywords:</strong><span class="svelte-18za2o0">raspberry pi, python, opencv, pandas, matplotlib, telegram-bot, mysql,
        sqlalchemy</span></p></article> <article><h3 class="svelte-18za2o0">Cuádruple enlace VPN</h3> <p class="svelte-18za2o0">Arquitecté e implementé con mi equipo tres enlaces en sitios on-premise,
      todos con routers Mikrotik, y una VPM en la nube (primero de Azure, luego
      AWS)</p> <p class="svelte-18za2o0">Esto se hizo en tiempo record a inicios del 2020, anticipándonos a lo que
      pronto fue el cierre total de la provincia por la Pandemia. Gracias a
      esto, la administración del grupo de trabajo y de muchas unidades de
      negocio se mantuvieron activas e interconectadas sin problema.</p> <p class="svelte-18za2o0">El proyecto pronto escaló para incluir conexiones L2TP para los usuarios.</p> <p class="svelte-18za2o0"><strong>keywords:</strong><span class="svelte-18za2o0">mikrotik, ipsec, l2tp, aws, azure, s3</span></p></article> <article><h3 class="svelte-18za2o0">Bot de Trading Algorítmico</h3> <p class="svelte-18za2o0"><i class="fa-brands fa-github"></i>kodexArg/PyTradingView.</p> <p class="svelte-18za2o0">Desarrollado en <b>Python</b> utilizando FastAPI, la API de Binance,
      Pandas y Pandas-TA. Integrado con <b>TradingView</b> a través de webhooks para
      ejecutar órdenes de entrada y salida.</p> <p class="svelte-18za2o0">Incorpora indicadores customizados creados en Pine Script, permitiendo
      estrategias como entrar en posiciones al tocar los mínimos de las
      Bollinger Bands, Koncorde y otras en mercados alcistas, o utilizar
      trailing stop-loss para capitalizar en tendencias.</p> <p class="svelte-18za2o0">Actualizaciones posteriores en TradingView permitieron la integración con
      otras plataformas como BingX, lo que hizo que este bot perdiera relevancia
      en mi estrategia de trading.</p> <p class="svelte-18za2o0">Este bot lo realicé mientras terminaba un curso de Análisis Técnico.</p> <p class="svelte-18za2o0"><strong>keywords:</strong> <span class="svelte-18za2o0">flask, python-binance, pandas, tradingview, pine script, webhooks,
        telegram-bot</span></p></article> <article><h3 class="svelte-18za2o0">Implementación Telefonía IP en Negocios</h3> <p class="svelte-18za2o0">Sin mucho más para agregar, este proyecto incluyó la revisión de
      contratos, contratación de servicios y arquitectura de VLans preparadas
      para VoIP.</p> <p class="svelte-18za2o0"><strong>keywords:</strong><span class="svelte-18za2o0">networking, vlan, grandstream</span></p></article> <article><h3 class="svelte-18za2o0">Sistema de Cartelería Digital<i class="fa-regular fa-star text-xs ml-2"></i></h3> <p class="svelte-18za2o0"><i class="fa-brands fa-github"></i>kodexArg/multimedia-handler-for-rpi *</p> <p class="svelte-18za2o0">Desarrollé un sistema de cartelería digital para Casino de Mendoza, que
      consistía en dispositivos Raspberry Pi conectados a 16 televisores
      distribuidos en toda la sala. Los dispositivos iniciaban reproduciendo una
      serie de videos almacenados en una carpeta caché en su memoria SD.</p> <p class="svelte-18za2o0">Utilicé Arch Linux ARM inicialmente, con un código que mezclaba Bash,
      omxplayer y Python. Versiones posteriores se ejecutan en Raspbian, sin X,
      sólo consola, y migré a utilizar systemd en lugar de cron.</p> <p class="svelte-18za2o0">Los dispositivos se sincronizaban con un servidor Samba en el casino,
      permitiendo la actualización y personalización del contenido en cada
      dispositivo de manera automática y en cualquier momento.</p> <p class="svelte-18za2o0"><strong>Este sistema funcionó sin interrupciones hasta el cierre del Casino.</strong></p> <p class="svelte-18za2o0">Actualmente, sigo utilizando este tipo de cartelería, ahora con Raspberry
      Pi 3, en algunas unidades de negocio, aunque con código reducido y sin
      repositorios externos.</p> <p class="svelte-18za2o0">Durante un tiempo utilicé un servidor montado en AWS que, mediante s3 y
      servidor en Flask, permitía a usuarios no entrenados gestionar los videos
      en esos equipos.</p> <p class="svelte-18za2o0"><strong>keywords:</strong>raspberry pi, arch linux, bash, omxplayer,
      python, dht11, dht22, ffmpeg, cvlc, rhel, samba</p> <p class="font-light italic svelte-18za2o0">* incluye otros repositorios privados</p></article> <article><h3 class="svelte-18za2o0">Seguimiento Online Clima en Salas</h3> <p class="svelte-18za2o0"><i class="fa-brands fa-raspberry-pi"></i> Basado en Raspberry Pi, sensores DHT11
      y DHT22, y Django</p> <p class="svelte-18za2o0">Adapté varios de los Raspberry Pi ya instalados en la sala del Casino para
      incluir sensores DHT11 y DHT22. Estos dispositivos capturaban datos de
      temperatura y humedad, que se inyectaban en tiempo real a un servidor
      Django con base de datos MariaDB.</p> <p class="svelte-18za2o0">El hardware fue relativamente sencillo en términos de IoT, ya que los
      dispositivos estaban previamente instalados. Solo tuve que soldar los
      sensores DHT11 y DHT22 a los Raspberry Pi. El script de captura de datos
      funcionaba mediante inyección SQL en un entorno seguro, ya que todo
      operaba dentro de una LAN.</p> <p class="svelte-18za2o0">La interfaz de Django mostraba gráficos en tiempo real con las diferentes
      temperaturas y niveles de humedad de la sala, permitiendo un monitoreo
      constante y eficiente del ambiente.</p> <p class="svelte-18za2o0">Gracias a este proyecto aprendí a trabajar con diferentes librerías
      gráficas en JavaScript y a crear visualizaciones en tiempo real.</p> <p class="svelte-18za2o0"><strong>keywords:</strong>raspberry pi, sensores dht11 y dht22, django,
      chartjs</p></article> <article><h3 class="svelte-18za2o0">Infraestructura IT Casino de Mendoza<i class="fa-regular fa-star text-xs ml-2"></i></h3> <p class="svelte-18za2o0">Liderar la implementación del nuevo sistema de Casino de Mendoza, en
      coordinación con los profesionales de Forward-System (sistema privativo) y
      el equipo técnico de Mendoza Central Entretenimientos S.A.</p> <p class="svelte-18za2o0">Me tocó diseñar la topología de red, cumpliendo los requerimientos del
      proveedor del sistema sin ningún inconveniente, con equipos Cisco Catalyst
      3750 de core, en el rack central, y 10 switches Cisco 2960 ubicados de a
      pares, ofreciendo redundancia, para distribuir la red en los más de 700
      tragamonedas.</p> <p class="svelte-18za2o0">El Casino salía por un router de borde Fortigate, y estaba muy
      securitizado, ofreciendo una conexión VPN constante con España.</p> <p class="svelte-18za2o0">También arquitecté la infraestructura virtual basada en RHEL (OEL) que
      alojaba tanto a los servidores principales como las terminales
      virtualizadas, a las que los usuarios accedían por thin client.</p> <p class="svelte-18za2o0">A lo largo de los años la infraestructura fue perfeccionándose y escalando
      según los requerimientos del negocio. El éxito de este modelo fue tal que
      sólo requería mantenimientos preventivos.</p> <p class="svelte-18za2o0">En todos los años en que este sistema funcionó, jamás hubo pérdida de
      datos ni intrusiones externas.</p> <p class="svelte-18za2o0">La infraestructura funcionó sin interrupciones desde 2005 hasta el cierre
      del casino durante la pandemia.</p> <p class="svelte-18za2o0"><strong>keywords:</strong><span class="svelte-18za2o0">rhel, oracle vm, virtualización, ncomputing thin clients, active
        directory, oracle storage, cisco, fortigate, prtg, snmp</span></p></article> <article><h3 class="svelte-18za2o0">Otros Proyectos Obsoletos</h3> <h4 class="svelte-18za2o0">Analítica Online de Tragamonedas</h4> <p class="svelte-18za2o0">Desarrollé un sistema que recolectaba alarmas generadas por tragamonedas y
      las almacenaba como logs en una carpeta específica. Un script leía estos
      archivos de manera recursiva y los agregaba a una base de datos. Esto
      permitía realizar análisis en tiempo real de la ocupación de la sala,
      midiendo qué máquinas estaban en uso durante diferentes franjas horarias,
      basándose en la cantidad de dinero jugado por partida.</p> <p class="svelte-18za2o0"><strong>keywords:</strong>forward-system, sas, windows scripting, python,
      postgresql</p> <h4 class="svelte-18za2o0">Seguimiento de Personal en Django</h4> <p class="svelte-18za2o0">Implementé un sistema CRUD en las primeras versiones de Django que
      permitía hacer seguimiento del personal. Los supervisores podían subir
      novedades del empleado en formato PDF. El sistema contaba con un sistema
      de log-in diferenciado para gerentes y supervisores, permitiendo distintos
      niveles de acceso.</p> <p class="svelte-18za2o0"><strong>keywords:</strong>django crud, pdf</p> <h4 class="svelte-18za2o0">Heatmap de Tragamonedas en Visio con VBA</h4> <p class="svelte-18za2o0">Utilicé VBA para crear un sistema que generaba heatmaps en Microsoft
      Visio, representando diferentes métricas para las tragamonedas en la sala
      del Casino de Mendoza. Las métricas incluían ocupación, coin-in y ganancia
      por máquina, entre otras. Aunque el código que generaba el heatmap estaba
      en VBA, el sistema se integraba con otras métricas y era una herramienta
      valiosa para la gestión del casino.</p> <p class="svelte-18za2o0"><strong>keywords:</strong>python, vba, microsoft visio, bi, data
      analytic, postgresql</p> <h4 class="svelte-18za2o0">Machine Learning aplicado a DDBB Tragamonedas</h4> <p class="svelte-18za2o0">Siendo una de mis tareas el análisis de estadísticos generados por el
      sistema online de los tragamonedas, experimenté con TensorFlow siguiendo
      los lineamientos de "Python Machine Learning", libro de Sebastian Raschka.</p> <p class="svelte-18za2o0">Esta herramienta nos ayudó (ya oficiaba como parte del staff de apoyo de
      la gerencia) a identificar y agrupar mejor los targets de cada slot, y a
      partir de esta información optimizar el layout de la sala.</p> <p class="svelte-18za2o0"><strong>keywords:</strong>algoritmos de clasificación, python, pandas,
      tensorflow, machine learning, matplotlib</p></article> <article><h3 class="svelte-18za2o0">Estudios y prácticas recientes <span class="text-sm font-light italic text-pullover-400 svelte-18za2o0">(Experimentales)</span></h3> <h4 class="svelte-18za2o0">Stable Diffusion</h4> <p class="svelte-18za2o0">En el ámbito de la inteligencia artificial, he realizado una investigación
      exhaustiva centrada en Stable Diffusion. Este estudio implicó la
      implementación del sistema en múltiples plataformas, incluyendo
      infraestructuras de cloud computing en AWS. Mi enfoque se dirigió hacia el
      perfeccionamiento del sistema de prompting, utilizando herramientas
      complementarias como Automatic1111 y ComfyUI para afinar los resultados
      generados. Específicamente, dediqué tiempo al estudio de técnicas
      avanzadas de prompting. Además, me adentré en los aspectos técnicos de la
      instalación de PyTorch, enfocándome en la configuración y puesta a punto
      (más que en su utilización).</p> <p class="svelte-18za2o0">Asimismo, amplié mis conocimientos de prompting de Midjourney; el cual
      utilicé en producción para distintas unidades de negocio.</p> <p class="svelte-18za2o0"><strong>keywords:</strong>python, aws, ec2, ai, pytorch, automatic111,
      comfyui, midjourney</p> <h4 class="svelte-18za2o0">Automatización con N8N & MCP</h4> <p class="svelte-18za2o0">He trabajado con todos los grandes modelos, tengo fuertes conocimientos en N8N y MCP, 
      ambos los he montado con éxito. Hago énfasis en los flujos de automatizaciones.</p> <p class="svelte-18za2o0"><strong>keywords:</strong>n8n, mcp, automation workflows, llm, ai orchestration</p></article></section>`);function L(s){var a=C();r(s,a)}var I=t(`<section class="svelte-1unbqhc"><h2>Experiencia Laboral</h2> <article class="svelte-1unbqhc"><h3>Grupo AVS: "Líder de Soporte Técnico"</h3> <span class="svelte-1unbqhc">Diciembre 2016 - Presente</span> <p>Grupo AVS es un conglomerado de empresas, entre las que destacan <b>Casino de Mendoza</b> y una de las estaciones de servicio orientada a tránsito pesado más grande
      del país: <b>KM1151</b>, en Uspallata, Mendoza.</p> <p>El grupo incluye otras pequeñas y medianas unidades de negocios, con
      infraestructuras tecnológicas propias, interconectadas con la oficina
      central.</p> <div><h4>Mis funciones</h4> <ul class="svelte-1unbqhc"><li>Liderar a trabajadores IT interno.</li> <li>Diseñar diferentes infreastructuras de red.</li> <li>Arquitectar conexión de sitios muy diversos con la administración
          central y las nubes AWS y Azure.</li> <li>Mantenimiento, seguridad y supervisión de sistemas en la nube.</li> <li>Contratación de proveedores (ISP, telefonía, activos).</li> <li>Capacitaciones a otros trabajadores del grupo.</li> <li>Visibilizar y diseñar soluciones informáticas para otras áreas.</li></ul> <h4>Mi aprendizaje</h4> <ul class="svelte-1unbqhc"><li>Gestión integral de la nube AWS (luego de pasar por Huawei y Azure).</li> <li>Automatización de tareas en la nube: Lambda.</li> <li>Interconexión con sitios on-premise</li> <li>De Fortigate a Mikrotik</li></ul></div> <p>En esta etapa descubrí y me enamoré de la *Nube* y aprendí muchísimo sobre
      la interconexión y seguridad entre diferentes sitios</p></article> <article class="svelte-1unbqhc"><h3>Mendoza Central Entretenimiento S.A.:<br/>"Jefe de Organización y
      Sistemas"</h3> <span class="svelte-1unbqhc">2005 - Diciembre 2016</span> <p>La empresa prestaba servicio de Tragamonedas, incluyendo la
      infraestructura técnica, a <b>Casino de Mendoza</b> hasta el fin de la licitación
      en 2019.</p> <p>Inicié como único técnico de sistemas. A mediados de 2010 era el líder de
      un grupo (aún reducido), con el que mantuvimos un casino que se mantuvo
      operativo sin ninguna interrupción por problemas de sistema (ni por
      intrusiones externas, ni por problemas de conectividad; con excepción del
      "Gran Apagón" del 2019 que afectó a todo el país) durante toda la vida de
      la empresa.</p> <p>Desde 2012 comencé a formar parte del staff de apoyo de la gerencia, y
      junto a ellos sumé a mis habilidades técnicas conocimientos en áreas de
      gestión de personal, couching, inteligencia de negocios y analítica de
      datos. Finalmente me desempeñé como responsable de adquisición de nuevos
      tragamonedas, decidiendo con la gerencia los equipos apropiados, su
      parametrización y ubicación en la sala.</p> <div><h4>Mis funciones</h4> <ul class="svelte-1unbqhc"><li>Analítica de Datos <ul class="svelte-1unbqhc"><li>Extracción de datos desde Forward System para análisis en tiempo
              real (Python, PostgreSQL, Oracle).</li> <li>Modelado de datos y uso de algoritmos para predicciones y
              optimizaciones (Python, Excel).</li> <li>Generación de heatmaps y visualizaciones interactivas para
              métricas de layout (VBA, Visio).</li> <li>Creación de dashboards y reports complejos con visualizaciones
              avanzadas (Excel, VBA).</li> <li>Presentación de insights mediante informes diarios automatizados
              (Excel).</li> <li>Desarrollo de KPIs para monitoreo de rendimiento y toma de
              decisiones.</li></ul></li> <li>Parametrización de Slots <ul class="svelte-1unbqhc"><li>Participación activa en la parametrización de slots, incluyendo
              ajustes de RTP y volatilidad.</li> <li>Coaching y asesoramiento en qué y cómo parametrizar slots para
              maximizar ingresos.</li> <li>Manejo del protocolo SAS para comunicación entre slots y sistemas
              central (Forward System).</li> <li>Selección estratégica de modelos y fabricantes de slots basada en
              análisis de rendimiento.</li> <li>Contacto directo con fabricantes.</li></ul></li> <li>Sistemas e Infraestructura <ul class="svelte-1unbqhc"><li>Diseño de red para 700 slots con alta disponibilidad (Switches
              Cisco, conexiones redundantes).</li> <li>Arquitectura de Virtual Machines para cajas y otros servicios
              críticos (Oracle VM).</li> <li>Coordinación de tareas de soporte técnico con Forward System.</li> <li>Gestión de seguridad y mantenimiento de servidores Linux.</li> <li>Aseguramiento de la integridad de datos mediante estrategias de
              backup y recuperación.</li></ul></li></ul> <h4>Mi aprendizaje</h4> <ul class="svelte-1unbqhc"><li>Manejo de big data y analytics para toma de decisiones estratégicas.</li> <li>Integración de múltiples data sources para análisis 360° del negocio.</li> <li>Automatización y scripting para optimizar procesos de data analytics
          (Python).</li> <li>Desarrollo de habilidades en Business Intelligence, logística y
          gestión de proyectos.</li></ul></div> <p>En esta etapa descubrí y me enamoré de <b>Python</b></p></article> <article class="svelte-1unbqhc"><h3>Casino Buenos Aires:<br/>"Técnico de Tragamonedas / Área Sistemas"</h3> <span class="svelte-1unbqhc">2003 - 2005</span> <p>Fui la segunda persona a cargo de la sala (casino) de Rivadavia, donde
      aprendí y capacité a otros en la configuración de tragamonedas y en
      brindar soluciones de sistemas.</p> <div><h4>Mis funciones</h4> <ul class="svelte-1unbqhc"><li>Soporte de Sistemas.</li> <li>Soporte a otras salas del grupo (varios kilómetros de distancia): en
          San Martín, Alvear y Malargüe.</li> <li>Reparación y mantenimiento de edificios.</li> <li>Parametrización de slots.</li> <li>Tareas de recaudación de dinero.</li></ul> <h4>Mi aprendizaje</h4> <ul class="svelte-1unbqhc"><li>Desarrollo de habilidades de liderazgo como segundo a cargo en la
          sala.</li> <li>Profundización en la configuración de slots.</li> <li>Inicio en la gestión de sistemas y soporte técnico.</li></ul></div></article> <article class="svelte-1unbqhc"><h3>Casino Buenos Aires: "Asistente de Tragamonedas"</h3> <span class="svelte-1unbqhc">Octubre de 2002 - 2003</span> <p>Trabajé en San Martín de Mendoza en un casino recién formado, integrando
      un equipo reducido junto a compañeros y gerentes que se convirtieron en
      compañeros de vida por muchos años.</p> <h4>Mi aprendizaje</h4> <ul class="svelte-1unbqhc"><li>Conocimientos sobre el funcionamiento interno e integral de un casino y
        sus sistemas.</li></ul></article> <article class="svelte-1unbqhc"><h3>Duek 2000: "Técnico de sistemas"</h3> <span class="svelte-1unbqhc">Octubre de 2099 - 2002</span> <p>Trabajé armando computadoras, y en la última etapa desarrollando sitios web, utilizando IIS + ASP.</p> <h4>Mi aprendizaje</h4> <ul class="svelte-1unbqhc"><li>Conocimientos sobre hardware.</li> <li>Inicio en desarrollo web.</li> <li>Mis primeras nociones en redes e internet.</li></ul></article></section>`);function B(s){var a=I();r(s,a)}var V=t('<!> <!> <main class="background flex flex-col space-y-6 svelte-1yzrgel"><section class="a4 svelte-1yzrgel"><div class="flex w-full h-full content-wrapper"><div class="left-col bg-mate-100 rounded-l-md flex flex-col p-4 space-y-4 svelte-1yzrgel"><!> <!></div> <div class="right-col flex flex-col p-4 space-y-1 svelte-1yzrgel"><!> <!> <!> <!> <!> <!> <!></div></div></section></main>',1);function O(s){var a=V(),l=S(a);j(l);var c=e(l,2);w(c);var d=e(c,2),p=i(d),u=i(p),n=i(u),m=i(n);x(m);var q=e(m,2);P(q),o(n);var v=e(n,2),g=i(v);M(g);var b=e(g,2);k(b);var h=e(b,2);E(h);var y=e(h,2);T(y);var z=e(y,2);B(z);var f=e(z,2);D(f);var A=e(f,2);L(A),o(v),o(u),o(p),o(d),r(s,a)}export{O as component};
