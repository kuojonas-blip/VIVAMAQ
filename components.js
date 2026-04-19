/**
 * ============================================================
 * VIVAMAQ — components.js
 * Nav e Footer compartilhados + WhatsApp flutuante
 * ============================================================
 * COMO USAR:
 * 1. Atualizar links do dropdown com suas categorias/páginas
 * 2. Incluir nas páginas: <script src="../components.js"></script>
 *    (ajustar caminho relativo: ../ ou ../../)
 *
 * Nas páginas HTML, colocar:
 *   <div data-nav></div>     ← onde quer o nav
 *   <div data-footer></div>  ← onde quer o footer
 * ============================================================
 */

// ── CONFIGURAÇÃO ──
const CONFIG = {
  empresa:    'VIVA',
  destaque:   'MAQ',
  slogan:     'Máquinas que crescem com você.',
  whatsapp:   '5554993210110',
  email:      'comercial@vivamaq.com',
  telefone:   '(54) 99321-0110',
  endereco:   'São Paulo — SP',
  horario:    'Seg–Sex, 8h às 18h',
  instagram:  'https://instagram.com/vivamaq',
};

// ── NAV ──
const VIVAMAQ_NAV = `
<nav>
  <a href="/index.html" class="nav-logo">
    <img src="/logo.jpeg" alt="VIVAMAQ" style="height:38px; width:auto; display:block; filter:brightness(0) invert(1);">
  </a>
  <ul class="nav-center">
    <li>
      <a href="#">Produtos <span class="chevron">▾</span></a>
      <div class="dropdown">
        <a href="/produtos/amassadeiras.html">Amassadeiras</a>
        <a href="/produtos/fornos.html">Fornos</a>
        <a href="/produtos/batedeiras.html">Batedeiras</a>
        <a href="/produtos/divisoras.html">Divisoras</a>
        <a href="/produtos/ultracongeladores.html">Ultracongeladores</a>
        <a href="/produtos/laminadores.html">Laminadores</a>
        <a href="/produtos/blenders.html">Blenders</a>
      </div>
    </li>
    <li><a href="/sobre.html">Sobre</a></li>
    <li><a href="/assistencia.html">Assistência Técnica</a></li>
    <li><a href="/contato.html">Contato</a></li>
  </ul>
  <div class="nav-right">
    <a href="/contato.html" class="nav-quero">Solicitar orçamento</a>
  </div>
</nav>`;

// ── FOOTER ──
const VIVAMAQ_FOOTER = `
<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <a href="/index.html" class="nav-logo">
        <img src="/logo.jpeg" alt="VIVAMAQ" style="height:42px; width:auto; display:block; filter:brightness(0) invert(1);">
      </a>
      <p style="margin-top:0.75rem">${CONFIG.slogan}</p>
      <div class="footer-social">
        <a href="${CONFIG.instagram}" target="_blank">In</a>
        <a href="#" target="_blank">Fb</a>
        <a href="#" target="_blank">Li</a>
        <a href="#" target="_blank">Yt</a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Produtos</h4>
      <ul>
        <li><a href="/produtos/amassadeiras.html">Amassadeiras</a></li>
        <li><a href="/produtos/fornos.html">Fornos</a></li>
        <li><a href="/produtos/batedeiras.html">Batedeiras</a></li>
        <li><a href="/produtos/divisoras.html">Divisoras</a></li>
        <li><a href="/produtos/ultracongeladores.html">Ultracongeladores</a></li>
        <li><a href="/produtos/laminadores.html">Laminadores</a></li>
        <li><a href="/produtos/blenders.html">Blenders</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Empresa</h4>
      <ul>
        <li><a href="/sobre.html">Sobre nós</a></li>
        <li><a href="/assistencia.html">Assistência Técnica</a></li>
        <li><a href="/contato.html">Contato</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contato</h4>
      <ul>
        <li><a href="mailto:${CONFIG.email}">${CONFIG.email}</a></li>
        <li><a href="https://wa.me/${CONFIG.whatsapp}">${CONFIG.telefone}</a></li>
        <li><a href="#">${CONFIG.endereco}</a></li>
        <li><a href="#">${CONFIG.horario}</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© ${new Date().getFullYear()} VIVAMAQ. Todos os direitos reservados.</p>
    <div class="footer-bottom-links">
      <a href="#">Política de privacidade</a>
      <a href="#">LGPD</a>
    </div>
  </div>
</footer>

<!-- WhatsApp flutuante -->
<a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" class="wa-float" title="WhatsApp">
  <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>`;

// ── INJECT + SCROLL REVEAL ──
document.addEventListener('DOMContentLoaded', () => {
  const navEl    = document.querySelector('[data-nav]');
  const footerEl = document.querySelector('[data-footer]');
  if (navEl)    navEl.outerHTML    = VIVAMAQ_NAV;
  if (footerEl) footerEl.outerHTML = VIVAMAQ_FOOTER;

  // Scroll reveal para elementos com classe .reveal
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
});
