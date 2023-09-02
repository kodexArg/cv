import{s as I,n as l}from"../chunks/scheduler.63274e7e.js";import{S as B,i as V,g as y,h as b,y as Q,a as R,f as h,r as d,s as v,j as E,u as c,c as f,k as D,x as r,v as p,d as u,t as m,w as g}from"../chunks/index.49796d5f.js";import{A as K,S as X,T as Y,C as Z,L as ee,a as ae}from"../chunks/AboutMe.6e1112c9.js";function se(q){let e,n=`<h2>Educación Formal</h2> <article><p>Egresé el últilmo año del secundario en San Luis, rindiendo libre; aunque
      cursé toda mi secundaria en Pablo Nogués, la mejor escuela técnica de mi
      provincia.</p> <p>Inicié Ingeniería Electro-mecánica en el \`97 en Villa Mercedes, San Luis;
      y en el segundo año me inscribí en la recién inaugurada facultad de Diseño
      Gráfico. Continué diseño por 2 años y luego seguí por mi cuenta, fuera de
      la facultad.</p> <p>De vuelta en Mendoza, mi ciudad natal, intenté formalizar mi educación
      universitaria varias veces. Terminé el tercer año de la carrera Contador
      Público Nacional, pero una vez más no encontré la motivación para
      continuar.</p> <p>Mis curos realizados en Platzi pueden ser consultados aquí: <b><a href="https://platzi.com/p/gcavedal/">https://platzi.com/p/gcavedal/</a></b></p> <p>Lo cierto es que soy un apasionado por el conocimiento, devorador de
      libros y un autodidacta en el sentido más profundo de la palabra. Tengo la
      mejor opinión sobre la educación formal, simplemente no es para mí.</p></article>`;return{c(){e=y("section"),e.innerHTML=n},l(a){e=b(a,"SECTION",{"data-svelte-h":!0}),Q(e)!=="svelte-fiz04x"&&(e.innerHTML=n)},m(a,t){R(a,e,t)},p:l,i:l,o:l,d(a){a&&h(e)}}}class ie extends B{constructor(e){super(),V(this,e,null,se,I,{})}}function ne(q){let e,n=`<h2>Proyectos Realizados</h2> <p class="m-3 italic">A continuación, un listado de los proyectos que de alguna manera se
    relacionan con el nuevo rumbo que busco para mi carrera profesional.</p> <article><h3>Portal B2B para Estación de Servicio</h3> <span class="svelte-xhy162">En curso!</span> <p>Es un sistema pensado para interactuar con clientes B2B, construido en
      Django 4, y que facilita la gestión de órdenes de carga de combustible
      para tránsito pesado en la estación de servicio más grande de Grupo AVS.</p> <p>Funciona en producción desde una máquina Ec2 y se integra con bases de
      datos MySQL también alojada en AWS (RDS). Utiliza además un bucket S3 para
      el almacenamiento. Las nuevas versiones se actualizan utilizando Github
      Actions</p> <p>La aplicación cliente, que utiliza django-allauth para autenticación con
      Google, permite a los usuarios gestionar órdenes de carga complejas y
      hacer seguimiento en tiempo real. La aplicación &#39;staff&#39;, optimizada para
      dispositivos móviles, utiliza códigos QR para agilizar el proceso de carga
      y permite la anexación de documentos y fotos.</p> <p>El frontend está construido con Tailwind y Flowbite (y vanilla
      JavaScript), herramientas que se integran muy bien con el sistema de
      templates de django. El backend aprovecha múltiples middlewares de
      seguridad y optimización, incluido Whitenoise para la gestión de archivos
      estáticos y django-compressor para la minificación de recursos.</p> <p>El proyecto está alojado en GitHub <i class="fa-brands fa-github mr-0"></i><b>kodexArg/django-kmportal</b> y sigue las mejores prácticas de seguridad,
      incluida la gestión segura de variables de entorno y el uso de HTTPS.</p></article> <article><h3>Seguimiento para Cultivos via Telegram</h3> <span class="svelte-xhy162">año 2020</span> <p><i class="fa-brands fa-raspberry-pi"></i> Basado en Raspberry Pi, sensores de
      temperatura y humedad, y Telegram Bot API</p> <p>Implementé un sistema de monitoreo de cultivos alojado en una Raspberry
      Pi, equipada con sensores de temperatura y humedad. El servidor y la base
      de datos residen en el mismo dispositivo, corriendo Raspbian ARM.</p> <p>Utilizando un bot de Telegram, los usuarios pueden solicitar datos de
      temperatura y humedad actuales, un gráfico histórico generado con
      Matplotlib, o una foto en tiempo real si el dispositivo cuenta con una
      cámara.</p> <p>Todo el monitoreo y las solicitudes se manejan directamente desde un chat
      de Telegram, convirtiendo esta solución en un sistema tanto práctico como
      potente.</p></article> <article><h3>Bot de Trading Algorítmico</h3> <span class="svelte-xhy162">Desplegado Durante la Volatilidad del Mercado en la Pandemia</span> <p>Desarrollado en <b>Python</b> utilizando FastAPI, la API de Binance,
      Pandas y Pandas-TA. Integrado con <b>TradingView</b> a través de webhooks para
      ejecutar órdenes de entrada y salida.</p> <p>Incorpora indicadores customizados creados en Pine Script, permitiendo
      estrategias como entrar en posiciones al tocar los mínimos de las
      Bollinger Bands en mercados alcistas o utilizar trailing stop-loss para
      capitalizar en tendencias.</p> <p>Actualizaciones posteriores en TradingView permitieron la integración con
      otras plataformas como BingX, lo que hizo que este bot perdiera relevancia
      en mi estrategia de trading.</p> <p>El código fuente está disponible públicamente en mi repositorio de <i class="fa-brands fa-github mr-0"></i> GitHub bajo el nombre PyTradingView.</p> <p>Este bot no lo realicé mientras terminaba un curso de Análisis Técnico.</p></article> <article><h3>Sistema de Cartelería Digital</h3> <span class="svelte-xhy162">año 2016</span> <p><i class="fa-brands fa-raspberry-pi"></i> Basado en Raspberry Pi, Python, Bash
      y omxplayer</p> <p>Desarrollé un sistema de cartelería digital para Casino de Mendoza, que
      consistía en dispositivos Raspberry Pi conectados a 16 televisores
      distribuidos en toda la sala. Los dispositivos iniciaban reproduciendo una
      serie de videos almacenados en una carpeta caché en su memoria SD.</p> <p>Utilicé Arch Linux ARM inicialmente, con un código que mezclaba Bash,
      omxplayer y Python. Versiones posteriores se ejecutan en Raspbian, sin X,
      sólo consola, y migré a utilizar systemd en lugar de cron.</p> <p>Los dispositivos se sincronizaban con un servidor Samba en el casino,
      permitiendo la actualización y personalización del contenido en cada
      dispositivo de manera automática y en cualquier momento.</p> <p><strong>Este sistema funcionó sin interrupciones hasta el cierre del Casino.</strong></p> <p>Actualmente, sigo utilizando este tipo de cartelería, ahora con Raspberry
      Pi 3, en algunas unidades de negocio, aunque con código reducido y sin
      repositorios externos.</p> <p>Durante un tiempo utilicé un servidor montado en AWS que, mediante s3 y
      servidor en Flask, permitía a usuarios no entrenados gestionar los videos
      en esos equipos.</p> <p>Este es (en parte) el código en mi GitHub <i class="fa-brands fa-github mr-0"></i> multimedia-handler-for-rpi</p></article> <article><h3>Alertas por Temperatura y Humedad</h3> <span class="svelte-xhy162">año 2018</span> <p><i class="fa-brands fa-raspberry-pi"></i> Basado en Raspberry Pi, sensores DHT11
      y DHT22, y Django</p> <p>Adapté varios de los Raspberry Pi ya instalados en la sala del Casino para
      incluir sensores DHT11 y DHT22. Estos dispositivos capturaban datos de
      temperatura y humedad, que se inyectaban en tiempo real a un servidor
      Django con base de datos MariaDB.</p> <p>El hardware fue relativamente sencillo en términos de IoT, ya que los
      dispositivos estaban previamente instalados. Solo tuve que soldar los
      sensores DHT11 y DHT22 a los Raspberry Pi. El script de captura de datos
      funcionaba mediante inyección SQL en un entorno seguro, ya que todo
      operaba dentro de una LAN.</p> <p>La interfaz de Django mostraba gráficos en tiempo real con las diferentes
      temperaturas y niveles de humedad de la sala, permitiendo un monitoreo
      constante y eficiente del ambiente.</p> <p>Gracias a este proyecto aprendí a trabajar con diferentes librerías
      gráficas en JavaScript y a crear visualizaciones en tiempo real.</p></article> <article><h3>Otros Proyectos Obsoletos</h3> <h4>Sistema de Recolecta de Alarmas para Tragamonedas</h4> <p>Desarrollé un sistema que recolectaba alarmas generadas por tragamonedas y
      las almacenaba como logs en una carpeta específica. Un script leía estos
      archivos de manera recursiva y los agregaba a una base de datos. Esto
      permitía realizar análisis en tiempo real de la ocupación de la sala,
      midiendo qué máquinas estaban en uso durante diferentes franjas horarias,
      basándose en la cantidad de dinero jugado por partida.</p> <h4>Seguimiento de Personal en Django</h4> <p>Implementé un sistema CRUD en las primeras versiones de Django que
      permitía hacer seguimiento del personal. Los supervisores podían subir
      novedades del empleado en formato PDF. El sistema contaba con un sistema
      de log-in diferenciado para gerentes y supervisores, permitiendo distintos
      niveles de acceso.</p> <h4>Heatmap de Tragamonedas en Visio con VBA</h4> <p>Utilicé VBA para crear un sistema que generaba heatmaps en Microsoft
      Visio, representando diferentes métricas para las tragamonedas en la sala
      del Casino de Mendoza. Las métricas incluían ocupación, coin-in y ganancia
      por máquina, entre otras. Aunque el código que generaba el heatmap estaba
      en VBA, el sistema se integraba con otras métricas y era una herramienta
      valiosa para la gestión del casino.</p></article>`;return{c(){e=y("section"),e.innerHTML=n},l(a){e=b(a,"SECTION",{"data-svelte-h":!0}),Q(e)!=="svelte-m4dcnc"&&(e.innerHTML=n)},m(a,t){R(a,e,t)},p:l,i:l,o:l,d(a){a&&h(e)}}}class te extends B{constructor(e){super(),V(this,e,null,ne,I,{})}}function oe(q){let e,n=`<h2>Experiencia</h2> <article class="svelte-5h0qd3"><h3>Grupo AVS: “Líder de Soporte Técnico”</h3> <span class="svelte-5h0qd3">Diciembre 2016 - Presente</span> <p>Grupo AVS es un conglomerado de empresas, entre las que destacan <b>Casino de Mendoza</b>
      y una de las estaciones de servicio orientada a tránsito pesado más grande
      del país:
      <b>KM1151</b>, en Uspallata, Mendoza.</p> <p>El grupo incluye otras pequeñas y medianas unidades de negocios, con
      infraestructuras tecnológicas propias, interconectadas con la oficina
      central.</p> <div><h4>Mis funciones</h4> <ul><li class="svelte-5h0qd3">Liderar a trabajadores IT interno.</li> <li class="svelte-5h0qd3">Diseñar diferentes infreastructuras de red.</li> <li class="svelte-5h0qd3">Arquitectar conexión de sitios muy diversos con la administración
          central y las nubes AWS y Azure.</li> <li class="svelte-5h0qd3">Mantenimiento, seguridad y supervisión de sistemas en la nube.</li> <li class="svelte-5h0qd3">Contratación de proveedores (ISP, telefonía, activos).</li> <li class="svelte-5h0qd3">Capacitaciones a otros trabajadores del grupo.</li> <li class="svelte-5h0qd3">Visibilizar y diseñar soluciones informáticas para otras áreas.</li></ul> <h4>Mi aprendizaje</h4> <ul><li class="svelte-5h0qd3">Gestión integral de la nube AWS (luego de pasar por Huawei y Azure).</li> <li class="svelte-5h0qd3">Automatización de tareas en la nube: Lambda.</li> <li class="svelte-5h0qd3">Interconexión con sitios on-premise</li> <li class="svelte-5h0qd3">De Fortigate a Mikrotik</li></ul></div> <p>En esta etapa descubrí y me enamoré de la *Nube* y aprendí muchísimo sobre
      la interconexión y seguridad entre diferentes sitios</p></article> <article class="svelte-5h0qd3"><h3>Mendoza Central Entretenimiento S.A.:<br/>“Jefe de Organización y
      Sistemas”</h3> <span class="svelte-5h0qd3">2005 - Diciembre 2016</span> <p>La empresa prestaba servicio de Tragamonedas, incluyendo toda la
      infraestructura técnica, a <b>Casino de Mendoza</b> hasta el fin de la licitación
      en 2019.</p> <p>Inicié como único técnico de sistemas. A mediados de 2010 era el líder de
      un grupo (aún reducido), con el que mantuvimos un casino que se mantuvo
      operativo sin ninguna interrupción por problemas de sistema (ni por
      intrusiones externas, ni por problemas de conectividad; con excepción del
      &quot;Gran Apagón&quot; del 2019 que afectó a todo el país) durante toda la vida de
      la empresa.</p> <p>Desde 2012 comencé a formar parte del staff de apoyo de la gerencia, y
      junto a ellos sumé a mis habilidades técnicas conocimientos en áreas de
      gestión de personal, couching, inteligencia de negocios y analítica de
      datos. Finalmente me desempeñé como responsable de adquisición de nuevos
      tragamonedas, decidiendo con la gerencia los equipos apropiados, su
      parametrización y ubicación en la sala.</p> <div><h4>Mis funciones</h4> <ul><li class="svelte-5h0qd3">Analítica de Datos <ul><li class="svelte-5h0qd3">Extracción de datos desde Forward System para análisis en tiempo
              real (Python, PostgreSQL, Oracle).</li> <li class="svelte-5h0qd3">Modelado de datos y uso de algoritmos para predicciones y
              optimizaciones (Python, Excel).</li> <li class="svelte-5h0qd3">Generación de heatmaps y visualizaciones interactivas para
              métricas de layout (VBA, Visio).</li> <li class="svelte-5h0qd3">Creación de dashboards y reports complejos con visualizaciones
              avanzadas (Excel, VBA).</li> <li class="svelte-5h0qd3">Presentación de insights mediante informes diarios automatizados
              (Excel).</li> <li class="svelte-5h0qd3">Desarrollo de KPIs para monitoreo de rendimiento y toma de
              decisiones.</li></ul></li> <li class="svelte-5h0qd3">Parametrización de Slots <ul><li class="svelte-5h0qd3">Participación activa en la parametrización de slots, incluyendo
              ajustes de RTP y volatilidad.</li> <li class="svelte-5h0qd3">Coaching y asesoramiento en qué y cómo parametrizar slots para
              maximizar ingresos.</li> <li class="svelte-5h0qd3">Manejo del protocolo SAS para comunicación entre slots y sistemas
              central (Forward System).</li> <li class="svelte-5h0qd3">Selección estratégica de modelos y fabricantes de slots basada en
              análisis de rendimiento.</li> <li class="svelte-5h0qd3">Contacto directo con fabricantes.</li></ul></li> <li class="svelte-5h0qd3">Sistemas e Infraestructura <ul><li class="svelte-5h0qd3">Diseño de red para 700 slots con alta disponibilidad (Switches
              Cisco, conexiones redundantes).</li> <li class="svelte-5h0qd3">Arquitectura de Virtual Machines para cajas y otros servicios
              críticos (Oracle VM).</li> <li class="svelte-5h0qd3">Coordinación de tareas de soporte técnico con Forward System.</li> <li class="svelte-5h0qd3">Gestión de seguridad y mantenimiento de servidores Linux.</li> <li class="svelte-5h0qd3">Aseguramiento de la integridad de datos mediante estrategias de
              backup y recuperación.</li></ul></li></ul> <h4>Mi aprendizaje</h4> <ul><li class="svelte-5h0qd3">Manejo de big data y analytics para toma de decisiones estratégicas.</li> <li class="svelte-5h0qd3">Integración de múltiples data sources para análisis 360° del negocio.</li> <li class="svelte-5h0qd3">Automatización y scripting para optimizar procesos de data analytics
          (Python).</li> <li class="svelte-5h0qd3">Desarrollo de habilidades en Business Intelligence, logística y
          gestión de proyectos.</li></ul></div> <p>En esta etapa descubrí y me enamoré de <b>Python</b></p></article> <article class="svelte-5h0qd3"><h3>Casino Buenos Aires:<br/>“Técnico de Tragamonedas / Técnico de Sistemas”</h3> <span class="svelte-5h0qd3">2003 - 2005</span> <p>Fui la segunda persona a cargo de la sala (casino) de Rivadavia, donde
      aprendí y capacité a otros en la configuración de tragamonedas y en
      brindar soluciones de sistemas.</p> <div><h4>Mis funciones</h4> <ul><li class="svelte-5h0qd3">Soporte de Sistemas.</li> <li class="svelte-5h0qd3">Soporte a otras salas del grupo (varios kilómetros de distancia): en
          San Martín, Alvear y Malargüe.</li> <li class="svelte-5h0qd3">Reparación y mantenimiento de edificios.</li> <li class="svelte-5h0qd3">Parametrización de slots.</li> <li class="svelte-5h0qd3">Tareas de recaudación de dinero.</li></ul> <h4>Mi aprendizaje</h4> <ul><li class="svelte-5h0qd3">Desarrollo de habilidades de liderazgo como segundo a cargo en la
          sala.</li> <li class="svelte-5h0qd3">Profundización en la configuración de slots.</li> <li class="svelte-5h0qd3">Inicio en la gestión de sistemas y soporte técnico.</li></ul></div></article> <article class="svelte-5h0qd3"><h3>Casino Buenos Aires: “Asistente de Tragamonedas”</h3> <span class="svelte-5h0qd3">Octubre de 2002 - 2003</span> <p>Trabajé en San Martín de Mendoza en un casino recién formado, integrando
      un equipo reducido junto a compañeros y gerentes que se convirtieron en
      compañeros de vida por muchos años.</p> <h4>Mi aprendizaje</h4> <ul><li class="svelte-5h0qd3">Conocimientos sobre el funcionamiento interno e integral de un casino y
        sus sistemas.</li></ul></article>`;return{c(){e=y("section"),e.innerHTML=n},l(a){e=b(a,"SECTION",{"data-svelte-h":!0}),Q(e)!=="svelte-1e2xcr"&&(e.innerHTML=n)},m(a,t){R(a,e,t)},p:l,i:l,o:l,d(a){a&&h(e)}}}class re extends B{constructor(e){super(),V(this,e,null,oe,I,{})}}function le(q){let e,n,a,t,$,k,z,H,i,S,G,A,F,x,O,T,N,P,U,M,W,j,_;return $=new K({}),z=new X({}),S=new Y({}),A=new Z({}),x=new ee({}),T=new ae({}),P=new re({}),M=new ie({}),j=new te({}),{c(){e=y("main"),n=y("section"),a=y("div"),t=y("div"),d($.$$.fragment),k=v(),d(z.$$.fragment),H=v(),i=y("div"),d(S.$$.fragment),G=v(),d(A.$$.fragment),F=v(),d(x.$$.fragment),O=v(),d(T.$$.fragment),N=v(),d(P.$$.fragment),U=v(),d(M.$$.fragment),W=v(),d(j.$$.fragment),this.h()},l(s){e=b(s,"MAIN",{class:!0});var C=E(e);n=b(C,"SECTION",{class:!0});var J=E(n);a=b(J,"DIV",{class:!0});var L=E(a);t=b(L,"DIV",{class:!0});var w=E(t);c($.$$.fragment,w),k=f(w),c(z.$$.fragment,w),w.forEach(h),H=f(L),i=b(L,"DIV",{class:!0});var o=E(i);c(S.$$.fragment,o),G=f(o),c(A.$$.fragment,o),F=f(o),c(x.$$.fragment,o),O=f(o),c(T.$$.fragment,o),N=f(o),c(P.$$.fragment,o),U=f(o),c(M.$$.fragment,o),W=f(o),c(j.$$.fragment,o),o.forEach(h),L.forEach(h),J.forEach(h),C.forEach(h),this.h()},h(){D(t,"class","w-fib-5 bg-mate-100 rounded-l-md flex flex-col p-4 space-y-4"),D(i,"class","w-fib-8 flex flex-col p-4 space-y-1"),D(a,"class","flex w-full h-full"),D(n,"class","a4 svelte-pncmkz"),D(e,"class","background flex flex-col space-y-6 svelte-pncmkz")},m(s,C){R(s,e,C),r(e,n),r(n,a),r(a,t),p($,t,null),r(t,k),p(z,t,null),r(a,H),r(a,i),p(S,i,null),r(i,G),p(A,i,null),r(i,F),p(x,i,null),r(i,O),p(T,i,null),r(i,N),p(P,i,null),r(i,U),p(M,i,null),r(i,W),p(j,i,null),_=!0},p:l,i(s){_||(u($.$$.fragment,s),u(z.$$.fragment,s),u(S.$$.fragment,s),u(A.$$.fragment,s),u(x.$$.fragment,s),u(T.$$.fragment,s),u(P.$$.fragment,s),u(M.$$.fragment,s),u(j.$$.fragment,s),_=!0)},o(s){m($.$$.fragment,s),m(z.$$.fragment,s),m(S.$$.fragment,s),m(A.$$.fragment,s),m(x.$$.fragment,s),m(T.$$.fragment,s),m(P.$$.fragment,s),m(M.$$.fragment,s),m(j.$$.fragment,s),_=!1},d(s){s&&h(e),g($),g(z),g(S),g(A),g(x),g(T),g(P),g(M),g(j)}}}class ue extends B{constructor(e){super(),V(this,e,null,le,I,{})}}export{ue as component};
