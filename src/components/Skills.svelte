<script>
  import DropdownItem from './DropdownItem.svelte';
</script>

<section>
  <h1
    class="w-full flex justify-center items-end text-pullover-300 text-2xl pb-2 whitespace-nowrap"
  >
    <i class="fa fa-chevron-left !text-pullover-300 !text-xl" />
    HABILIDADES /
    <i class="fa fa-chevron-right !text-pullover-300 !text-xl" />
  </h1>
  <ul>
    <DropdownItem title="Inglés" icon="fa-solid fa-flag-usa" hasChildren={true} level={1}>
      <DropdownItem title="Excelente" icon="fa-brands fa-readme" level={3} />
      <DropdownItem title="Avanzado (B2)" icon="fa-solid fa-microphone-lines" level={3} />
    </DropdownItem>

    <DropdownItem title="Python" icon="fab fa-python" hasChildren={true} level={1}>
      <DropdownItem title="Django" hasChildren={true} level={2}>
        <DropdownItem title="django-allauth" level={3} />
        <DropdownItem title="django-rest-framework" level={3} />
        <DropdownItem title="Internationalization" level={3} />
        <DropdownItem title="Templates & Forms" level={3} />
      </DropdownItem>
      
      <DropdownItem title="API Frameworks" hasChildren={true} level={2}>
        <DropdownItem title="Flask" level={3} />
        <DropdownItem title="FastAPI" level={3} />
        <DropdownItem title="Pydantic" level={3} />
        <DropdownItem title="OpenAPI" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Ciencia de Datos" hasChildren={true} level={2}>
        <DropdownItem title="Pandas & Numpy" level={3} />
        <DropdownItem title="Jupyter Notebooks" level={3} />
        <DropdownItem title="Pyplot & Matplotlib" level={3} />
        <DropdownItem title="PyTorch" level={3} />
        <DropdownItem title="Stable Diffusion" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Automation & Bots" hasChildren={true} level={2}>
        <DropdownItem title="Scrapy" level={3} />
        <DropdownItem title="python-telegram-bot" level={3} />
        <DropdownItem title="Web Scraping" level={3} />
      </DropdownItem>
    </DropdownItem>

    <DropdownItem title="Linux SysAdmin" icon="fab fa-linux" hasChildren={true} level={1}>
      <DropdownItem title="Distribuciones" hasChildren={true} level={2}>
        <DropdownItem title="Debian" level={3} />
        <DropdownItem title="Kubuntu" level={3} />
        <DropdownItem title="Red Hat / Fedora / OEL" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Containerización" hasChildren={true} level={2}>
        <DropdownItem title="Docker" level={3} />
        <DropdownItem title="Docker Compose" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Web Server" hasChildren={true} level={2}>
        <DropdownItem title="Nginx" level={3} />
        <DropdownItem title="Reverse Proxy" level={3} />
        <DropdownItem title="Load Balancing" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Network Tools" hasChildren={true} level={2}>
        <DropdownItem title="ssh" level={3} />
        <DropdownItem title="nmap" level={3} />
        <DropdownItem title="tcpdump" level={3} />
        <DropdownItem title="iptables" level={3} />
        <DropdownItem title="dnsmasq" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Herramientas Varias" hasChildren={true} level={2}>
        <DropdownItem title="vim" level={3} />
        <DropdownItem title="tmux" level={3} />
        <DropdownItem title="ffmpeg" level={3} />
        <DropdownItem title="Samba" level={3} />
      </DropdownItem>
    </DropdownItem>

    <DropdownItem title="Cloud Computing" icon="fa-solid fa-cloud" hasChildren={true} level={1}>
      <DropdownItem title="AWS IAM" hasChildren={true} level={2}>
        <DropdownItem title="User Management" level={3} />
        <DropdownItem title="Policies & Roles" level={3} />
      </DropdownItem>
      <DropdownItem title="AWS EC2" hasChildren={true} level={2}>
        <DropdownItem title="Instance Management" level={3} />
        <DropdownItem title="Security Groups" level={3} />
      </DropdownItem>
      <DropdownItem title="AWS Lambda" hasChildren={true} level={2}>
        <DropdownItem title="Boto3" level={3} />
        <DropdownItem title="Serverless Functions" level={3} />
        <DropdownItem title="Python Integration" level={3} />
      </DropdownItem>
      <DropdownItem title="AWS S3" hasChildren={true} level={2}>
        <DropdownItem title="Bucket Policies" level={3} />
        <DropdownItem title="Lifecycle Management" level={3} />
      </DropdownItem>
      <DropdownItem title="Route 53" level={2} />
      <DropdownItem title="API Gateway" level={2} />
      <DropdownItem title="CloudWatch" hasChildren={true} level={2}>
        <DropdownItem title="Monitoring" level={3} />
        <DropdownItem title="Alarms" level={3} />
      </DropdownItem>
      <DropdownItem title="Cost Management" level={2} />
      <DropdownItem title="Azure Backups" level={2} />
    </DropdownItem>

    <DropdownItem title="Databases & Analytics" icon="fas fa-database" hasChildren={true} level={1}>
      <DropdownItem title="MySQL / MariaDB" level={2} />
      <DropdownItem title="PostgreSQL" level={2} />
      <DropdownItem title="Power BI" hasChildren={true} level={2}>
        <DropdownItem title="DAX" level={3} />
        <DropdownItem title="Power Query" level={3} />
      </DropdownItem>
      <DropdownItem title="Tableau" level={2} />
      <DropdownItem title="SQL" hasChildren={true} level={2}>
        <DropdownItem title="Complex Queries" level={3} />
        <DropdownItem title="Stored Procedures" level={3} />
      </DropdownItem>
      <DropdownItem title="Django ORM" level={2} />
      <DropdownItem title="SQLAlchemy" level={2} />
    </DropdownItem>

    <DropdownItem title="Desarrollo Web" icon="fa-brands fa-html5" hasChildren={true} level={1}>
      <DropdownItem title="Svelte" hasChildren={true} level={2}>
        <DropdownItem title="SvelteKit" level={3} />
        <DropdownItem title="Reactive Programming" level={3} />
      </DropdownItem>
      <DropdownItem title="Tailwind CSS" hasChildren={true} level={2}>
        <DropdownItem title="Utility-first CSS" level={3} />
        <DropdownItem title="Responsive Design" level={3} />
      </DropdownItem>
      <DropdownItem title="Flowbite" level={2} />
      <DropdownItem title="Bootstrap" level={2} />
      <DropdownItem title="JavaScript" hasChildren={true} level={2}>
        <DropdownItem title="ES6+" level={3} />
        <DropdownItem title="DOM Manipulation" level={3} />
      </DropdownItem>
    </DropdownItem>

    <DropdownItem title="Version Control" icon="fa-brands fa-github" hasChildren={true} level={1}>
      <DropdownItem title="Git" hasChildren={true} level={2}>
        <DropdownItem title="Branching Strategies" level={3} />
        <DropdownItem title="Merge Conflicts" level={3} />
      </DropdownItem>
      <DropdownItem title="GitHub Actions" hasChildren={true} level={2}>
        <DropdownItem title="CI/CD Pipelines" level={3} />
        <DropdownItem title="Automated Testing" level={3} />
      </DropdownItem>
      <DropdownItem title="GitHub Pages" level={2} />
    </DropdownItem>

    <DropdownItem title="Windows" icon="fab fa-windows" hasChildren={true} level={1}>
      <DropdownItem title="Active Directory" hasChildren={true} level={2}>
        <DropdownItem title="User Management" level={3} />
        <DropdownItem title="Group Policies" level={3} />
      </DropdownItem>
      <DropdownItem title="Office 365" hasChildren={true} level={2}>
        <DropdownItem title="SharePoint" level={3} />
        <DropdownItem title="Teams Administration" level={3} />
        <DropdownItem title="Exchange Online" level={3} />
      </DropdownItem>
      <DropdownItem title="Excel Avanzado" hasChildren={true} level={2}>
        <DropdownItem title="Macros VBA" level={3} />
        <DropdownItem title="Power Query" level={3} />
      </DropdownItem>
      <DropdownItem title="Visio" level={2} />
      <DropdownItem title="Project" level={2} />
      <DropdownItem title="Tango Gestión" level={2} />
    </DropdownItem>

    <DropdownItem title="Otros Lenguajes" icon="fa fa-code" hasChildren={true} level={1}>
      <DropdownItem title="SQL" hasChildren={true} level={2}>
        <DropdownItem title="Nivel avanzado" level={3} />
      </DropdownItem>
      <DropdownItem title="Bash" hasChildren={true} level={2}>
        <DropdownItem title="Nivel avanzado" level={3} />
        <DropdownItem title="Scripting automation" level={3} />
      </DropdownItem>
      <DropdownItem title="JavaScript" hasChildren={true} level={2}>
        <DropdownItem title="Nivel intermedio" level={3} />
      </DropdownItem>
      <DropdownItem title="CSS" hasChildren={true} level={2}>
        <DropdownItem title="Nivel intermedio" level={3} />
      </DropdownItem>
      <DropdownItem title="Pine Script" hasChildren={true} level={2}>
        <DropdownItem title="Nivel avanzado" level={3} />
        <DropdownItem title="Trading Indicators" level={3} />
      </DropdownItem>
    </DropdownItem>

    <DropdownItem title="Diseño Gráfico" icon="fa fa-palette" hasChildren={true} level={1}>
      <DropdownItem title="Figma" hasChildren={true} level={2}>
        <DropdownItem title="UI/UX Design" level={3} />
        <DropdownItem title="Prototyping" level={3} />
      </DropdownItem>
      <DropdownItem title="Illustrator" level={2} />
      <DropdownItem title="After Effects" hasChildren={true} level={2}>
        <DropdownItem title="Motion Graphics" level={3} />
      </DropdownItem>
      <DropdownItem title="Inkscape" level={2} />
      <DropdownItem title="SketchUp" level={2} />
      <DropdownItem title="Presentaciones Empresariales" hasChildren={true} level={2}>
        <DropdownItem title="PowerPoint Avanzado" level={3} />
        <DropdownItem title="Storytelling Visual" level={3} />
      </DropdownItem>
    </DropdownItem>

    <DropdownItem title="Redes" icon="fa-solid fa-network-wired" hasChildren={true} level={1}>
      <DropdownItem title="Mikrotik" hasChildren={true} level={2}>
        <DropdownItem title="RouterOS" level={3} />
        <DropdownItem title="Scripting" level={3} />
      </DropdownItem>
      <DropdownItem title="Unifi" level={2} />
      <DropdownItem title="FortiGate" hasChildren={true} level={2}>
        <DropdownItem title="Firewall Rules" level={3} />
        <DropdownItem title="VPN Setup" level={3} />
      </DropdownItem>
      <DropdownItem title="VPN Technologies" hasChildren={true} level={2}>
        <DropdownItem title="IPsec" level={3} />
        <DropdownItem title="L2TP" level={3} />
        <DropdownItem title="Site-to-Site" level={3} />
      </DropdownItem>
      <DropdownItem title="SNMP" level={2} />
      <DropdownItem title="Zabbix" level={2} />
      <DropdownItem title="PRTG" level={2} />
      <DropdownItem title="Telefonía IP" level={2} />
    </DropdownItem>

    <DropdownItem title="IoT" icon="fa-brands fa-raspberry-pi" hasChildren={true} level={1}>
      <DropdownItem title="Raspberry Pi" hasChildren={true} level={2}>
        <DropdownItem title="GPIO Programming" level={3} />
        <DropdownItem title="Sensors Integration" level={3} />
      </DropdownItem>
    </DropdownItem>
  </ul>
</section>

<!-- TODO: GRAPHIC DESIGN!!!!-->

<style lang="postcss">
  i {
    @apply text-pullover-400;
  }

  ul {
    @apply -ml-1;
    @apply text-pullover-500 font-bold text-base;
  }

  ul ul {
    @apply mb-5 ml-6;
    @apply font-normal leading-none;
  }

  ul ul ul {
    @apply mb-3 ml-2;
    @apply text-sm;
  }

  ul ul ul ul {
    @apply mb-0.5;
    @apply italic list-["+"] text-pullover-600 font-light;
  }
</style>
