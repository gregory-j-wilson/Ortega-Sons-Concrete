// ─── Mobile Navigation ───────────────────────────────────────
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);

    // Swap hamburger/close icon
    const bars   = menuToggle.querySelector('.icon-bars');
    const close  = menuToggle.querySelector('.icon-close');
    if (bars && close) {
      bars.classList.toggle('hidden', isOpen);
      close.classList.toggle('hidden', !isOpen);
    }
  });

  // Close menu on nav link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.querySelector('.icon-bars')?.classList.remove('hidden');
      menuToggle.querySelector('.icon-close')?.classList.add('hidden');
    });
  });
}

// ─── Project Filter ──────────────────────────────────────────
const filterBtns = document.querySelectorAll('[data-filter]');
const projectCards = document.querySelectorAll('[data-category]');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    // Active state
    filterBtns.forEach(b => b.classList.remove('btn-primary', 'text-cream'));
    filterBtns.forEach(b => b.classList.add('btn-outline-navy'));
    btn.classList.remove('btn-outline-navy');
    btn.classList.add('btn-primary', 'text-cream');

    // Show/hide cards
    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ─── Smooth scroll for anchor links ─────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
