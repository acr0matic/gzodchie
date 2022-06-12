const project = document.getElementById('project');
let slider = null;

if (project) {
  const solution = project.querySelector('#solution');
  const visualization = project.querySelector('#visualization');

  if (solution) {
    const breakpoint = window.matchMedia('(max-width: 1640px)');

    const Slider = () => {
      if (breakpoint.matches) {
        if (!slider)
          slider = new Swiper('.solution__slider', {
            slidesPerView: 'auto',
            speed: 500,
            grabCursor: true,
          });

        slider.el.classList.add('swiper--overflow');
      }

      else {
        if (slider) {
          slider.el.classList.remove('swiper--overflow');
          slider.destroy(true, true);
          slider = null;
        }
      }
    }

    Slider();
    window.addEventListener('resize', () => Slider());
  }

  if (visualization) {
    const slider = new Swiper('.visualization__slider .swiper', {
      slidesPerView: 1,
      speed: 500,
      simulateTouch: false,

      pagination: {
        el: '.visualization__slider .swiper-pagination',
        clickable: true,
      },

      navigation: {
        nextEl: '.visualization__slider .swiper-button-next',
        prevEl: '.visualization__slider .swiper-button-prev',
      },
    });
  }
}