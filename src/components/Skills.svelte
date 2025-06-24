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
      <DropdownItem title="Excelente" icon="fa-brands fa-readme" level={2} />
      <DropdownItem title="Avanzado (B2)" icon="fa-solid fa-microphone-lines" level={2} />
    </DropdownItem>

    <DropdownItem title="Python" icon="fab fa-python" hasChildren={true} level={1}>
      <DropdownItem title="Django (Avanzado)" hasChildren={true} level={2}>
        <DropdownItem title="django-rest-framework" level={3} />
        <DropdownItem title="django-allauth" level={3} />
        <DropdownItem title="Internationalization" level={3} />
        <DropdownItem title="Vite Templates" level={3} />
        <DropdownItem title="HTMX Integration" level={3} />
        <DropdownItem title="Design Patterns" level={3} />
      </DropdownItem>
      
      <DropdownItem title="API Development" hasChildren={true} level={2}>
        <DropdownItem title="FastAPI" level={3} />
        <DropdownItem title="Flask" level={3} />
        <DropdownItem title="RESTful Services" level={3} />
        <DropdownItem title="Webhook Integration" level={3} />
        <DropdownItem title="Web Scraping" level={3} />
      </DropdownItem>
      
      <DropdownItem title="IoT & Hardware Integration" hasChildren={true} level={2}>
        <DropdownItem title="Raspberry Pi" level={3} />
        <DropdownItem title="ESP32" level={3} />
        <DropdownItem title="Sensores/Sondas" level={3} />
      </DropdownItem>
    </DropdownItem>

    <DropdownItem title="Linux SysAdmin" icon="fab fa-linux" hasChildren={true} level={1}>
      <DropdownItem title="System Administration" hasChildren={true} level={2}>
        <DropdownItem title="Ubuntu Server" level={3} />
        <DropdownItem title="Debian" level={3} />
        <DropdownItem title="CentOS" level={3} />
        <DropdownItem title="RHEL" level={3} />
        <DropdownItem title="User Management" level={3} />
        <DropdownItem title="Permission Management" level={3} />
        <DropdownItem title="Process Management" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Web Server Management" hasChildren={true} level={2}>
        <DropdownItem title="SSL/TLS" level={3} />
        <DropdownItem title="Reverse Proxy (Nginx)" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Database Administration" hasChildren={true} level={2}>
        <DropdownItem title="MySQL" level={3} />
        <DropdownItem title="PostgreSQL" level={3} />
        <DropdownItem title="Backup & Recovery" level={3} />
        <DropdownItem title="Performance Tuning" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Monitoreo" hasChildren={true} level={2}>
        <DropdownItem title="Grafana" level={3} />
        <DropdownItem title="Zabbix" level={3} />
        <DropdownItem title="PRTG" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Virtualización On-Premise" hasChildren={true} level={2}>
        <DropdownItem title="Docker" level={3} />
        <DropdownItem title="VirtualBox" level={3} />
        <DropdownItem title="VMware" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Network & Security" hasChildren={true} level={2}>
        <DropdownItem title="Firewall (iptables)" level={3} />
        <DropdownItem title="SSH" level={3} />
        <DropdownItem title="FTP" level={3} />
        <DropdownItem title="Cron Jobs" level={3} />
        <DropdownItem title="Network Troubleshooting" level={3} />
      </DropdownItem>
    </DropdownItem>

    <DropdownItem title="AWS Cloud Computing" icon="fa-brands fa-aws" hasChildren={true} level={1}>
      <DropdownItem title="Identity & Access Management" hasChildren={true} level={2}>
        <DropdownItem title="User Management" level={3} />
        <DropdownItem title="Policies" level={3} />
        <DropdownItem title="Roles" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Compute Services" hasChildren={true} level={2}>
        <DropdownItem title="EC2 Instance Management" level={3} />
        <DropdownItem title="Elastic Beanstalk" level={3} />
        <DropdownItem title="App Runner" level={3} />
        <DropdownItem title="Lambda Serverless" level={3} />
        <DropdownItem title="Boto3" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Storage Services" hasChildren={true} level={2}>
        <DropdownItem title="S3 Bucket Management" level={3} />
        <DropdownItem title="S3 Lifecycle Management" level={3} />
        <DropdownItem title="S3 Static Hosting" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Database Services" hasChildren={true} level={2}>
        <DropdownItem title="RDS" level={3} />
        <DropdownItem title="DynamoDB" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Networking" hasChildren={true} level={2}>
        <DropdownItem title="VPC" level={3} />
        <DropdownItem title="Security Groups" level={3} />
        <DropdownItem title="Route 53" level={3} />
        <DropdownItem title="CloudFront" level={3} />
        <DropdownItem title="API Gateway" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Monitoring" hasChildren={true} level={2}>
        <DropdownItem title="CloudWatch Monitoring" level={3} />
        <DropdownItem title="CloudWatch Alarms" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Cost Management" hasChildren={true} level={2}>
        <DropdownItem title="Cost Explorer" level={3} />
        <DropdownItem title="Budgets" level={3} />
        <DropdownItem title="Cost Optimization" level={3} />
      </DropdownItem>
    </DropdownItem>

    <DropdownItem title="Ciencia de Datos & AI" icon="fa-solid fa-brain" hasChildren={true} level={1}>
      <DropdownItem title="Large Language Models" hasChildren={true} level={2}>
        <DropdownItem title="GPT-4 Codex" level={3} />
        <DropdownItem title="Claude Code" level={3} />
        <DropdownItem title="Gemini AI Studio" level={3} />
        <DropdownItem title="Prompt Engineering" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Generación de Imágenes" hasChildren={true} level={2}>
        <DropdownItem title="Stable Diffusion" level={3} />
        <DropdownItem title="Flux" level={3} />
        <DropdownItem title="ComfyUI" level={3} />
        <DropdownItem title="Automatic1111" level={3} />
        <DropdownItem title="Midjourney" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Automatización AI" hasChildren={true} level={2}>
        <DropdownItem title="N8N" level={3} />
        <DropdownItem title="MCP (Model Context Protocol)" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Data Science" hasChildren={true} level={2}>
        <DropdownItem title="Pandas" level={3} />
        <DropdownItem title="NumPy" level={3} />
        <DropdownItem title="Matplotlib" level={3} />
        <DropdownItem title="Pyplot" level={3} />
        <DropdownItem title="Algoritmos de Clasificación" level={3} />
        <DropdownItem title="Modelado Predictivo" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Business Intelligence" hasChildren={true} level={2}>
        <DropdownItem title="Power BI" level={3} />
        <DropdownItem title="Power Query" level={3} />
        <DropdownItem title="Tableau" level={3} />
        <DropdownItem title="Análisis Estadístico" level={3} />
        <DropdownItem title="Dashboard Development" level={3} />
      </DropdownItem>
    </DropdownItem>

    <DropdownItem title="Desarrollo Web" icon="fa-brands fa-html5" hasChildren={true} level={1}>
      <DropdownItem title="Frontend" hasChildren={true} level={2}>
        <DropdownItem title="Astro" level={3} />
        <DropdownItem title="Svelte/SvelteKit" level={3} />
        <DropdownItem title="Tailwind CSS" level={3} />
        <DropdownItem title="Bootstrap" level={3} />
        <DropdownItem title="Flowbite" level={3} />
        <DropdownItem title="Vite Templates" level={3} />
        <DropdownItem title="Diseño Responsive" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Integraciones Backend" hasChildren={true} level={2}>
        <DropdownItem title="HTMX" level={3} />
        <DropdownItem title="Django Templates" level={3} />
        <DropdownItem title="RESTful APIs" level={3} />
        <DropdownItem title="WebSockets" level={3} />
      </DropdownItem>
    </DropdownItem>

    <DropdownItem title="Databases" icon="fas fa-database" hasChildren={true} level={1}>
      <DropdownItem title="PostgreSQL" level={2} />
      <DropdownItem title="MySQL/MariaDB" level={2} />
      <DropdownItem title="RDS Aurora" level={2} />
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
      <DropdownItem title="Office 365 Enterprise" hasChildren={true} level={2}>
        <DropdownItem title="Tenant Administration" level={3} />
        <DropdownItem title="User & License Management" level={3} />
        <DropdownItem title="Security & Compliance" level={3} />
        <DropdownItem title="SharePoint Administration" level={3} />
        <DropdownItem title="Exchange Online" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Teams & Integraciones" hasChildren={true} level={2}>
        <DropdownItem title="Teams Administration" level={3} />
        <DropdownItem title="Teams Phone System" level={3} />
        <DropdownItem title="Power Platform Integration" level={3} />
        <DropdownItem title="Third-party Connectors" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Active Directory" hasChildren={true} level={2}>
        <DropdownItem title="User Management" level={3} />
        <DropdownItem title="Group Policies" level={3} />
        <DropdownItem title="Azure AD Connect" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Office Applications" hasChildren={true} level={2}>
        <DropdownItem title="Excel Avanzado (Macros VBA)" level={3} />
        <DropdownItem title="Power Query" level={3} />
        <DropdownItem title="Visio" level={3} />
        <DropdownItem title="Project" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Tango Gestión" level={2} />
    </DropdownItem>

    <DropdownItem title="Redes" icon="fa-solid fa-network-wired" hasChildren={true} level={1}>
      <DropdownItem title="Equipos Empresariales" hasChildren={true} level={2}>
        <DropdownItem title="Mikrotik RouterOS" level={3} />
        <DropdownItem title="Unifi Management" level={3} />
        <DropdownItem title="FortiGate Firewall" level={3} />
      </DropdownItem>
      
      <DropdownItem title="VPN Technologies" hasChildren={true} level={2}>
        <DropdownItem title="Site-to-Site VPN" level={3} />
        <DropdownItem title="IPsec Configuration" level={3} />
        <DropdownItem title="L2TP Setup" level={3} />
        <DropdownItem title="Remote Access VPN" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Network Protocols" hasChildren={true} level={2}>
        <DropdownItem title="VLAN Configuration" level={3} />
        <DropdownItem title="SNMP Monitoring" level={3} />
        <DropdownItem title="DHCP/DNS Management" level={3} />
      </DropdownItem>
      
      <DropdownItem title="Telefonía IP" hasChildren={true} level={2}>
        <DropdownItem title="SIP Configuration" level={3} />
        <DropdownItem title="PBX Management" level={3} />
      </DropdownItem>
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
  </ul>
</section>

<style lang="postcss">
  i {
    @apply text-pullover-400;
  }

  ul {
    @apply -ml-1;
    @apply text-pullover-500 font-bold text-base mb-5;
  }
</style>
