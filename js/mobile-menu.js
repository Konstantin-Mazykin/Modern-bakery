const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.mobile-open');
const menuBtnClose = document.querySelector('.mobile-close');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu__menu');

const toggleMenu = () => {
  setTimeout(100);
  mobileMenu.classList.toggle('is-open');
};

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);
mobileMenuLinks.forEach(element => (element.onclick = toggleMenu));
