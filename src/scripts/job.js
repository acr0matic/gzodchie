const job = document.getElementById('jobs');

if (job) {
  const breakpoint = window.matchMedia('(max-width: 768px)');

  const modal = document.getElementById('modal-job');
  const modalTitle = modal.querySelector('.modal__title');
  const modalContent = modal.querySelector('.modal__content--dynamic');
  const modalClose = modal.querySelector('.modal__close');
  const modalForm = modal.querySelector('.form');

  const cards = job.querySelectorAll('.jobs-item');

  modalClose.addEventListener('click', () => {
    if (breakpoint.matches) document.body.classList.remove('body-overflow');
  });

  _.forEach(cards, (card) => {
    const title = card.querySelector('.jobs-item__title').innerHTML;
    const button = card.querySelector('.button');
    const content = card.querySelector('.jobs-item__content').innerHTML;

    button.addEventListener('click', () => {
      modalTitle.innerHTML = title;
      modalContent.innerHTML = content;
      modalForm.dataset.additional = title;

      if (breakpoint.matches) document.body.classList.add('body-overflow');
    });
  })
}