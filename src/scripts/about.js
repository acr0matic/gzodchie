const about = document.querySelector('main#about');
if (about) {
  const team = about.querySelector('#team');

  if (team) {
    const Viewport = (viewport) => (viewport.scrollHeight - 30) + 'px';
    const cards = team.querySelectorAll('.team-item');

    _.forEach(cards, (card) => {
      const viewport = card.querySelector('.team-item__picture');

      const content = card.querySelector('.team-item__content');
      const text = card.querySelector('.team-item__text');
      content.style.maxHeight = Viewport(viewport);

      window.addEventListener('resize', () => {
        content.style.maxHeight = Viewport(viewport);
      });

      const action = card.querySelector('.team-item__action');
      action.addEventListener('click', () => {
        text.classList.add('team-item__text--show');
        action.style.display = 'none';
      });
    });
  }
}