<section>
  <h2>Proyectos realizados</h2>
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
      Utilicé Arch Linux ARM inicialmente, con un código que mezclaba Bash, omxplayer y Python. Versiones posteriores se ejecutaban en Raspbian, sin X, sólo consola, y migré a
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
      El proyecto fue relativamente sencillo en términos de IoT, ya que los dispositivos estaban previamente instalados. Solo tuve que soldar los sensores DHT11 y DHT22 a los
      Raspberry Pi. El script de captura de datos funcionaba mediante inyección SQL en un entorno seguro, ya que todo operaba dentro de una LAN.
    </p>
    <p>
      La interfaz de Django mostraba gráficos en tiempo real con las diferentes temperaturas y niveles de humedad de la sala, permitiendo un monitoreo constante y eficiente del
      ambiente.
    </p>
    <p>Gracias a este proyecto aprendí a trabajar con diferentes librerías gráficas en JavaScript y a crear visualizaciones en tiempo real.</p>
  </article>
</section>

<style>
  span {
    @apply text-xs italic font-thin text-right;
  }
</style>
