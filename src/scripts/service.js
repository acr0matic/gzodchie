const service = document.getElementById('service');

if (service) {
  const cards = service.querySelectorAll('.service-card');
  _.forEach(cards, (card) => {
    const action = card.querySelector('.service-card__action');
    const textHeight = card.querySelector('.service-card__text').scrollHeight;

    card.style.setProperty('--max-height', textHeight + 'px');

    action.addEventListener('click', () => {
      card.classList.toggle('service-card--open');
    });
  });
}