const header = document.getElementById('header');

if (header) {
  const heroBlock = document.querySelector('main#home #hero')

  if (heroBlock) {
    const getHeight = (block) => block ? block.clientHeight : null;

    const heroBlock = document.querySelector('main#home #hero')
    let heroHeight = 0;

    heroHeight = getHeight(heroBlock);

    header.classList.add(StyleClass.header.fixed);
    header.classList.add(StyleClass.header.inverted);

    window.addEventListener('scroll', () => CheckHeader());

    // Обновление значений высот при изменении окна
    window.addEventListener('resize', () => {
      heroHeight = getHeight(heroBlock);
    });

    // Смена цветовой гаммы хедера
    function CheckHeader() {
      isReach = window.scrollY >= heroHeight - getHeight(header);

      if (isReach) header.classList.remove(StyleClass.header.inverted);
      else header.classList.add(StyleClass.header.inverted);
    }
  }
}
