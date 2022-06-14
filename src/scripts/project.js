const project = document.getElementById('project');

if (project) {
  const breakpoint = window.matchMedia('(max-width: 1640px)');

  const solution = project.querySelector('#solution');
  const visualization = project.querySelector('#visualization');
  const usage = project.querySelector('#usage');
  const involvement = project.querySelector('#involvement');
  const historyBlock = project.querySelector('#history');

  if (solution) {
    let slider = null;

    const Slider = () => {
      if (breakpoint.matches) {
        if (!slider)
          slider = new Swiper('.solution__slider', {
            slidesPerView: 'auto',
            speed: 500,
            grabCursor: true,
            slideToClickedSlide: true,
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

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },


      navigation: {
        nextEl: '.visualization__slider .swiper-button-next',
        prevEl: '.visualization__slider .swiper-button-prev',
      },
    });
  }

  if (usage) {
    const hidden = usage.querySelectorAll('.usage__hidden');
    const switcher = usage.querySelector('.switch');

    switcher.addEventListener('click', () => {
      switcher.classList.toggle('switch--left');
      switcher.classList.toggle('switch--right');

      _.forEach(hidden, (item) => {
        item.classList.toggle('usage__hidden--show');
      });
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
              slideToClickedSlide: true,
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

  if (historyBlock) {
    console.log(historyBlock);
    const container = historyBlock.querySelectorAll('.history__container');

    function Drag() {
      _.forEach(container, (block) => {
        let pos = { top: 0, left: 0, x: 0, y: 0 };

        const mouseDownHandler = function (e) {
          pos = {
            left: block.scrollLeft,
            top: block.scrollTop,

            x: e.clientX,
            y: e.clientY,
          };

          block.style.cursor = 'grabbing';
          block.style.userSelect = 'none';

          block.addEventListener('mousemove', mouseMoveHandler);
          block.addEventListener('mouseup', mouseUpHandler);
        };

        const mouseMoveHandler = function (e) {
          const dx = e.clientX - pos.x;
          const dy = e.clientY - pos.y;

          block.scrollTop = pos.top - dy;
          block.scrollLeft = pos.left - dx;
        };

        const mouseUpHandler = function () {
          block.removeEventListener('mousemove', mouseMoveHandler);
          block.removeEventListener('mouseup', mouseUpHandler);

          block.style.cursor = 'grab';
          block.style.removeProperty('user-select');
        };

        if (breakpoint.matches) block.addEventListener('mousedown', mouseDownHandler);
      })
    }

    window.addEventListener('resize', () => Drag());
    Drag();
  }
}