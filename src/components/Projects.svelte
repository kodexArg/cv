<section>
  <h2>Proyectos Realizados</h2>
  <p class="m-3 italic">A continuación, un listado de los proyectos que de alguna manera se relacionan con el nuevo rumbo que busco para mi carrera profesional.</p>
  <article>
    <h3>Portal B2B para Estación de Servicio</h3>
    <span>En curso!</span>
    <p>
      Es un sistema pensado para interactuar con clientes B2B, construido en Django 4, y que facilita la gestión de órdenes de carga de combustible para tránsito pesado en la
      estación de servicio más grande de Grupo AVS.
    </p>
    <p>
      Funciona en producción desde una máquina Ec2 y se integra con bases de datos MySQL también alojada en AWS (RDS). Utiliza además un bucket S3 para el almacenamiento. Las
      nuevas versiones se actualizan utilizando Github Actions
    </p>
    <p>
      La aplicación cliente, que utiliza django-allauth para autenticación con Google, permite a los usuarios gestionar órdenes de carga complejas y hacer seguimiento en tiempo
      real. La aplicación 'staff', optimizada para dispositivos móviles, utiliza códigos QR para agilizar el proceso de carga y permite la anexación de documentos y fotos.
    </p>
    <p>
      El frontend está construido con Tailwind y Flowbite (y vanilla JavaScript), herramientas que se integran muy bien con el sistema de templates de django. El backend aprovecha
      múltiples middlewares de seguridad y optimización, incluido Whitenoise para la gestión de archivos estáticos y django-compressor para la minificación de recursos.
    </p>
    <p>
      El proyecto está alojado en GitHub <i class="fa-brands fa-github mr-0" /><b>kodexArg/django-kmportal</b> y sigue las mejores prácticas de seguridad, incluida la gestión segura
      de variables de entorno y el uso de HTTPS.
    </p>
  </article>
  <article>
    <h3>Seguimiento para Cultivos via Telegram</h3>
    <span>año 2020</span>
    <p><i class="fa-brands fa-raspberry-pi" /> Basado en Raspberry Pi, sensores de temperatura y humedad, y Telegram Bot API</p>
    <p>
      Implementé un sistema de monitoreo de cultivos alojado en una Raspberry Pi, equipada con sensores de temperatura y humedad. El servidor y la base de datos residen en el mismo
      dispositivo, corriendo Raspbian ARM.
    </p>
    <p>
      Utilizando un bot de Telegram, los usuarios pueden solicitar datos de temperatura y humedad actuales, un gráfico histórico generado con Matplotlib, o una foto en tiempo real
      si el dispositivo cuenta con una cámara.
    </p>
    <p>Todo el monitoreo y las solicitudes se manejan directamente desde un chat de Telegram, convirtiendo esta solución en un sistema tanto práctico como potente.</p>
  </article>

  <article>
    <h3>Bot de Trading Algorítmico</h3>
    <span>Desplegado Durante la Volatilidad del Mercado en la Pandemia</span>
    <p>
      Desarrollado en <b>Python</b> utilizando FastAPI, la API de Binance, Pandas y Pandas-TA. Integrado con <b>TradingView</b> a través de webhooks para ejecutar órdenes de entrada
      y salida.
    </p>
    <p>
      Incorpora indicadores customizados creados en Pine Script, permitiendo estrategias como entrar en posiciones al tocar los mínimos de las Bollinger Bands en mercados alcistas
      o utilizar trailing stop-loss para capitalizar en tendencias.
    </p>
    <p>
      Actualizaciones posteriores en TradingView permitieron la integración con otras plataformas como BingX, lo que hizo que este bot perdiera relevancia en mi estrategia de
      trading.
    </p>
    <p>El código fuente está disponible públicamente en mi repositorio de <i class="fa-brands fa-github mr-0" /> GitHub bajo el nombre PyTradingView.</p>
    <p>Este bot no lo realicé mientras terminaba un curso de Análisis Técnico.</p>
  </article>
  <article>
    <h3>Sistema de Cartelería Digital</h3>
    <span>año 2016</span>
    <p><i class="fa-brands fa-raspberry-pi" /> Basado en Raspberry Pi, Python, Bash y omxplayer</p>
    <p>
      Desarrollé un sistema de cartelería digital para Casino de Mendoza, que consistía en dispositivos Raspberry Pi conectados a 16 televisores distribuidos en toda la sala. Los
      dispositivos iniciaban reproduciendo una serie de videos almacenados en una carpeta caché en su memoria SD.
    </p>
    <p>
      Utilicé Arch Linux ARM inicialmente, con un código que mezclaba Bash, omxplayer y Python. Versiones posteriores se ejecutan en Raspbian, sin X, sólo consola, y migré a
      utilizar systemd en lugar de cron.
    </p>
    <p>
      Los dispositivos se sincronizaban con un servidor Samba en el casino, permitiendo la actualización y personalización del contenido en cada dispositivo de manera automática y
      en cualquier momento.
    </p>
    <p><strong>Este sistema funcionó sin interrupciones hasta el cierre del Casino.</strong></p>
    <p>Actualmente, sigo utilizando este tipo de cartelería, ahora con Raspberry Pi 3, en algunas unidades de negocio, aunque con código reducido y sin repositorios externos.</p>
    <p>Durante un tiempo utilicé un servidor montado en AWS que, mediante s3 y servidor en Flask, permitía a usuarios no entrenados gestionar los videos en esos equipos.</p>
    <p>Este es (en parte) el código en mi GitHub <i class="fa-brands fa-github mr-0" /> multimedia-handler-for-rpi</p>
  </article>
  <article>
    <h3>Alertas por Temperatura y Humedad</h3>
    <span>año 2018</span>
    <p><i class="fa-brands fa-raspberry-pi" /> Basado en Raspberry Pi, sensores DHT11 y DHT22, y Django</p>
    <p>
      Adapté varios de los Raspberry Pi ya instalados en la sala del Casino para incluir sensores DHT11 y DHT22. Estos dispositivos capturaban datos de temperatura y humedad, que
      se inyectaban en tiempo real a un servidor Django con base de datos MariaDB.
    </p>
    <p>
      El hardware fue relativamente sencillo en términos de IoT, ya que los dispositivos estaban previamente instalados. Solo tuve que soldar los sensores DHT11 y DHT22 a los
      Raspberry Pi. El script de captura de datos funcionaba mediante inyección SQL en un entorno seguro, ya que todo operaba dentro de una LAN.
    </p>
    <p>
      La interfaz de Django mostraba gráficos en tiempo real con las diferentes temperaturas y niveles de humedad de la sala, permitiendo un monitoreo constante y eficiente del
      ambiente.
    </p>
    <p>Gracias a este proyecto aprendí a trabajar con diferentes librerías gráficas en JavaScript y a crear visualizaciones en tiempo real.</p>
  </article>
  <article>
    <h3>Otros Proyectos Obsoletos</h3>

    <h4>Sistema de Recolecta de Alarmas para Tragamonedas</h4>
    <p>
      Desarrollé un sistema que recolectaba alarmas generadas por tragamonedas y las almacenaba como logs en una carpeta específica. Un script leía estos archivos de manera
      recursiva y los agregaba a una base de datos. Esto permitía realizar análisis en tiempo real de la ocupación de la sala, midiendo qué máquinas estaban en uso durante
      diferentes franjas horarias, basándose en la cantidad de dinero jugado por partida.
    </p>

    <h4>Seguimiento de Personal en Django</h4>
    <p>
      Implementé un sistema CRUD en las primeras versiones de Django que permitía hacer seguimiento del personal. Los supervisores podían subir novedades del empleado en formato
      PDF. El sistema contaba con un sistema de log-in diferenciado para gerentes y supervisores, permitiendo distintos niveles de acceso.
    </p>

    <h4>Heatmap de Tragamonedas en Visio con VBA</h4>
    <p>
      Utilicé VBA para crear un sistema que generaba heatmaps en Microsoft Visio, representando diferentes métricas para las tragamonedas en la sala del Casino de Mendoza. Las
      métricas incluían ocupación, coin-in y ganancia por máquina, entre otras. Aunque el código que generaba el heatmap estaba en VBA, el sistema se integraba con otras métricas y
      era una herramienta valiosa para la gestión del casino.
    </p>
  </article>
</section>

<style>
  span {
    @apply text-xs italic font-thin text-right;
  }
</style>
