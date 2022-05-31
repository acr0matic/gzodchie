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
      el: '.swiper-pagination',
      clickable: true,

    },
  });
}