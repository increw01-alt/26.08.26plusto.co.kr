const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenu instanceof HTMLDetailsElement) {
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.open = false;
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      mobileMenu.open = false;
      mobileMenu.querySelector('summary')?.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (mobileMenu.open && event.target instanceof Node && !mobileMenu.contains(event.target)) {
      mobileMenu.open = false;
    }
  });
}
