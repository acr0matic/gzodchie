const header = document.getElementById('header');
if (header) {

  if (hero) {
    const getHeight = (block) => block ? block.clientHeight : null;

    const heroBlock = document.querySelector('main#home #hero')
    let heroHeight = 0;

    heroHeight = getHeight(heroBlock);

    header.classList.add('header-fixed');
    header.classList.add('header-inverted');

    window.addEventListener('scroll', () => CheckHeader());

    // Обновление значений высот при изменении окна
    window.addEventListener('resize', () => {
      heroHeight = getHeight(heroBlock);
    });

    // Смена цветовой гаммы хедера
    function CheckHeader() {
      isReach = window.scrollY >= heroHeight - getHeight(header);

      if (isReach) header.classList.remove('header-inverted');
      else header.classList.add('header-inverted');
    }
  }
}
