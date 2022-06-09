const hero = document.getElementById('hero');

if (hero) {
  const slider = new Swiper('.hero__slider', {
    simulateTouch: false,
    speed: 500,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.hero__slider .swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.hero__slider .swiper-button-next',
      prevEl: '.hero__slider .swiper-button-prev',
    },
  });
}