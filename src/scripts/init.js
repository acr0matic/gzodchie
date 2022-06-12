const lazyLoadInstance = new LazyLoad({
  elements_selector: '.lazy__item',

  callback_loaded: (trigger) => {
    const container = trigger.closest('.lazy');
    const loader = container.querySelector('.preloader');

    if (loader) loader.classList.add('preloader--hide');
  },
});

const digit = document.querySelectorAll('.digit .digit__number');
_.forEach(digit, (item) => {
  const value = item.dataset.value;
  const suffix = item.dataset.suffix || '';
  const prefix = item.dataset.prefix || '';
  const decimal = item.dataset.decimal || 0;

  const options = {
    decimalPlaces: decimal,
    separator: ' ',
    suffix: suffix,
    prefix: prefix,
  };

  new countUp.CountUp(item, value, options).start();
})

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