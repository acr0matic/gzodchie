const job = document.getElementById('jobs');

if (job) {
  const modal = document.getElementById('modal-job');
  const modalContent = modal.querySelector('.modal__content--dynamic');
  const cards = job.querySelectorAll('.jobs-item');

  _.forEach(cards, (card) => {
    const button = card.querySelector('.button');
    const content = card.querySelector('.jobs-item__content').innerHTML;

    button.addEventListener('click', () => {
      modalContent.innerHTML = content;
    });
  })
}