function openMenu() {
  const toggleButton = document.getElementById('menu-icon');
  const menu = document.querySelector('.header-nav-links');

  toggleButton.addEventListener('click', () => {
    if (menu.classList.contains('open-menu')) {
      menu.classList.remove('open-menu');
      setTimeout(() => {
        menu.classList.add('hidden');
      }, 300);
    } else {
      menu.classList.remove('hidden');
      setTimeout(() => {
        menu.classList.add('open-menu');
      }, 0);
    }
  });
}
function hideMenu() {
  const closeButton = document.getElementById('x-icon');
  const menu = document.querySelector('.header-nav-links');

  closeButton.addEventListener('click', () => {
    if (menu.classList.contains('open-menu')) {
      menu.classList.remove('open-menu');
    }
  });
}

hideMenu();


openMenu();
