const lazyLoadInstance = new LazyLoad({
  elements_selector: '.lazy__item',

  callback_loaded: (trigger) => {
    const container = trigger.closest('.lazy');
    const loader = container.querySelector('.preloader');

    if (loader) loader.classList.add('preloader--hide');
  },
});

const digit = document.querySelector('.digit');

if (digit) {
  const Scroll = () => {
    const isReach = window.scrollY >= container.clientHeight;

    if (isReach) {
      _.forEach(number, (item) => {
        const value = item.dataset.value;
        const suffix = item.dataset.suffix || '';
        const prefix = item.dataset.prefix || '';
        const decimal = item.dataset.decimal || 0;

        const options = {
          duration: 3,
          decimalPlaces: decimal,
          separator: ' ',
          suffix: suffix,
          prefix: prefix,
          enableScrollSpy: true,
        };

        const count = new countUp.CountUp(item, value, options);
        count.start();
      });

      window.removeEventListener('scroll', Scroll);
    }
  }

  window.addEventListener('scroll', Scroll);

  const container = digit.closest('section');
  const number = container.querySelectorAll('.digit__number');
}

const forms = document.querySelectorAll('form');
_.forEach(forms, (form) => new Form(form));

MicroModal.init(modalParams);
const modalTrigger = document.querySelectorAll('[data-micromodal-trigger]');
_.forEach(modalTrigger, modal => {
  modal.addEventListener('click', () => {
    currentModal = modal.dataset.micromodalTrigger;

    const triggered = document.getElementById(currentModal);
    const overflowContainer = triggered.querySelector(".overflow__container");
    if (overflowContainer) overflowContainer.scroll({ top: 0 });
  })
});

const lightbox = GLightbox({
  draggable: false,
});