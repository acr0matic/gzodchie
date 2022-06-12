const project = document.getElementById('project');

if (project) {
  const breakpoint = window.matchMedia('(max-width: 1640px)');

  const solution = project.querySelector('#solution');
  const visualization = project.querySelector('#visualization');
  const usage = project.querySelector('#usage');
  const involvement = project.querySelector('#involvement');

  if (solution) {
    let slider = null;

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

  if (usage) {
    const hidden = usage.querySelector('.usage__hidden');
    const switcher = usage.querySelector('.switch');

    switcher.addEventListener('click', () => {
      switcher.classList.toggle('switch--left');
      switcher.classList.toggle('switch--right');

      hidden.classList.toggle('usage__hidden--show');
    });
  }

  if (involvement) {
    const sliders = involvement.querySelectorAll('.involvement__slider');
    _.forEach(sliders, (swiper) => {
      let slider = null;


      const Slider = () => {
        if (breakpoint.matches) {
          if (!slider)
            slider = new Swiper(swiper, {
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
    });
  }
}