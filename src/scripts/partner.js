const partner = document.getElementById('partner');
if (partner) {
  const items = partner.querySelectorAll('.partner__picture');

  if (items.length > 4) {
    const slider = new Swiper('.partner__slider', {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      slidesPerView: 2,
      loop: true,
      speed: 500,
      grabCursor: true,
      slideToClickedSlide: true,

      breakpoints: {
        768: {
          slidesPerView: 3,
        },

        996: {
          slidesPerView: 4,
        }
      }
    });

    slider.el.classList.add('swiper--overflow');
    slider.wrapperEl.classList.remove('justify-content-center');
  }
}