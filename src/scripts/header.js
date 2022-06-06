const header = document.getElementById('header');
if (header) {
  const wrapper = header.querySelector('.header');

  if (hero) wrapper.classList.add('header--inverted')
  else wrapper.classList.remove('header--inverted')
}