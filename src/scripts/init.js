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
  const container = document.querySelectorAll('.digits');

  const Scroll = (wrapper, number, handler) => {
    const isReach = (window.innerHeight + window.scrollY) >= wrapper.offsetTop;

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

      window.removeEventListener('scroll', handler);
    }
  }

  _.forEach(container, (wrapper) => {
    const number = wrapper.querySelectorAll('.digit__number');

    const ScrollHandle = () => Scroll(wrapper, number, ScrollHandle);
    window.addEventListener('scroll', ScrollHandle);
  });
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