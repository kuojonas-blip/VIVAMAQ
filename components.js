/**
 * ============================================================
 * VIVAMAQ — components.js (FINAL)
 * ============================================================
 */

const CONFIG = {
  slogan:     'Máquinas que crescem com você.',
  whatsapp:   '5554993210110',
  email:      'comercial@vivamaq.com',
  telefone:   '(54) 99321-0110',
  endereco:   'São Paulo — SP',
  horario:    'Seg–Sex, 8h às 18h',
  instagram:  'https://instagram.com/vivamaq',
  logo:       '/logo_vivamaq.svg'
};

// ─────────────────────────────────────────
// NAV
// ─────────────────────────────────────────
const NAV = `
<nav>
  <a href="/" class="nav-logo">
    <img src="${CONFIG.logo}" alt="VIVAMAQ">
  </a>

  <ul class="nav-center">
    <li>
      <a href="#">Produtos ▾</a>
      <div class="dropdown">
        <a href="/produtos/amassadeiras">Amassadeiras</a>
        <a href="/produtos/fornos">Fornos</a>
        <a href="/produtos/batedeiras">Batedeiras</a>
        <a href="/produtos/divisoras">Divisoras</a>
        <a href="/produtos/ultracongeladores">Ultracongeladores</a>
        <a href="/produtos/laminadores">Laminadores</a>
        <a href="/produtos/blenders">Blenders</a>
      </div>
    </li>

    <li><a href="/sobre">Sobre</a></li>
    <li><a href="/assistencia">Assistência</a></li>
    <li><a href="/contato">Contato</a></li>
  </ul>

  <div class="nav-right">
    <a href="/contato" class="nav-quero">Solicitar orçamento</a>
    <button id="openMenu" class="mobile-toggle">☰</button>
  </div>
</nav>
`;

// ─────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────
const FOOTER = `
<footer>
  <div class="footer-top">

    <div class="footer-brand">
      <img src="${CONFIG.logo}" style="height:36px;">
      <p>${CONFIG.slogan}</p>

      <div class="footer-social">
        <a href="${CONFIG.instagram}" target="_blank">Ig</a>
        <a href="https://wa.me/${CONFIG.whatsapp}" target="_blank">Wa</a>
      </div>
    </div>

    <div class="footer-col">
      <h4>Produtos</h4>
    <li><a href="/produtos/amassadeiras">Amassadeiras</a></li>
    <li><a href="/produtos/fornos">Fornos</a></li>
    <li><a href="/produtos/batedeiras">Batedeiras</a></li>
    <li><a href="/produtos/divisoras">Divisoras</a></li>
    <li><a href="/produtos/ultracongeladores">Ultracongeladores</a></li>
    <li><a href="/produtos/laminadores">Laminadores</a></li>
    <li><a href="/produtos/blenders">Blenders</a></li>
    </div>

    <div class="footer-col">
      <h4>Empresa</h4>
      <a href="/sobre">Sobre</a>
      <a href="/assistencia">Assistência</a>
      <a href="/contato">Contato</a>
    </div>

    <div class="footer-col">
      <h4>Contato</h4>
      <a href="mailto:${CONFIG.email}">${CONFIG.email}</a>
      <a href="https://wa.me/${CONFIG.whatsapp}" target="_blank">${CONFIG.telefone}</a>
      <span>${CONFIG.endereco}</span>
      <span>${CONFIG.horario}</span>
    </div>

  </div>

  <div class="footer-bottom">
    © ${new Date().getFullYear()} VIVAMAQ
  </div>
</footer>

<a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" class="wa-float">
  💬
</a>
`;

// ─────────────────────────────────────────
// MOBILE MENU
// ─────────────────────────────────────────
const MOBILE = `
<div class="mobile-overlay" id="overlay"></div>

<div class="mobile-menu" id="menu">
  <div class="mobile-header">
    <img src="${CONFIG.logo}" style="height:30px;">
    <button id="closeMenu">✕</button>
  </div>

  <div class="mobile-links">
    <a href="/produtos/amassadeiras">Amassadeiras</a>
    <a href="/produtos/fornos">Fornos</a>
    <a href="/produtos/batedeiras">Batedeiras</a>
    <a href="/produtos/laminadores">Laminadores</a>

    <a href="/sobre">Sobre</a>
    <a href="/assistencia">Assistência</a>
    <a href="/contato" class="mobile-cta">Solicitar orçamento</a>

    <a href="${CONFIG.instagram}" target="_blank">Instagram</a>
    <a href="https://wa.me/${CONFIG.whatsapp}" target="_blank">WhatsApp</a>
  </div>
</div>
`;

// ─────────────────────────────────────────
// INIT — injeta imediatamente (sem DOMContentLoaded)
// ─────────────────────────────────────────
(function init() {
  const navEl    = document.querySelector("[data-nav]");
  const footerEl = document.querySelector("[data-footer]");
  if (navEl)    navEl.outerHTML    = NAV;
  if (footerEl) footerEl.outerHTML = FOOTER;
  document.body.insertAdjacentHTML("beforeend", MOBILE);

  const menu    = document.getElementById("menu");
  const overlay = document.getElementById("overlay");

  document.getElementById("openMenu").onclick = () => {
    menu.classList.add("active");
    overlay.classList.add("active");
  };

  document.getElementById("closeMenu").onclick = closeMenu;
  overlay.onclick = closeMenu;

  function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("active");
  }

  // Scroll reveal
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();