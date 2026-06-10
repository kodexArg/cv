<nav class="contact-grid" aria-label="Información de contacto">
  <a href="mailto:gcavedal@gmail.com">
    <i class="fa-solid fa-envelope" aria-hidden="true"></i>
    <span>gcavedal@gmail.com</span>
  </a>

  <a href="https://www.linkedin.com/in/gabriel-cavedal/" target="_blank" rel="noopener noreferrer">
    <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
    <span>in/gabriel-cavedal</span>
  </a>

  <a href="https://github.com/kodexArg" target="_blank" rel="noopener noreferrer">
    <i class="fa-brands fa-github" aria-hidden="true"></i>
    <span>kodexArg</span>
  </a>

  <a href="https://t.me/KodexArg" target="_blank" rel="noopener noreferrer">
    <i class="fa-brands fa-telegram" aria-hidden="true"></i>
    <span>@KodexArg</span>
  </a>

  <span class="static">
    <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
    <span>Mendoza, Argentina</span>
  </span>
</nav>

<style lang="postcss">
  @reference '../styles/global.css';

  /* Same compact two-row contact grid as the one-page CV masthead. */
  .contact-grid {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(3, auto);
    justify-content: start;
    gap: 0.35rem 1.8rem;
    @apply mt-3 text-base;
  }

  .contact-grid a,
  .contact-grid .static {
    @apply flex items-center text-mate-700 whitespace-nowrap;
    text-decoration: none;
    transition: color 0.15s ease;
  }

  .contact-grid a:hover {
    @apply text-pullover-400;
  }

  .contact-grid i {
    @apply text-pullover-400 mr-2;
    width: 1.1rem;
    text-align: center;
  }
</style>
