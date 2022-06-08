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
  const decimal = item.dataset.decimal || 0;

  const options = {
    decimalPlaces: decimal,
    separator: ' ',
    suffix: suffix,
  };

  new countUp.CountUp(item, value, options).start();
})

const forms = document.querySelectorAll('form');
_.forEach(forms, (form) => new Form(form));