const headerMobile = header.querySelector('.header__mobile .hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenu) {
  headerMobile.parentNode.addEventListener('click', () => Menu('mobile'));
}


/*
--------------------------------------------------------
              ОБРАБОТЧИК МЕНЮ
--------------------------------------------------------
*/

function Menu(menu) {
  header.classList.toggle('header-mobile');

  document.body.classList.toggle('body-overflow');
  if (menu === 'mobile') {
    headerMobile.classList.toggle('is-active');
    mobileMenu.classList.toggle('mobile-menu--open');
  }
}