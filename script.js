document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});

document.querySelectorAll('.mobile-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    const menu = link.closest('.mobile-menu');
    if (menu) menu.removeAttribute('open');
  });
});
