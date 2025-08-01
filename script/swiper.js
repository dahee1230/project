document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.main-visual', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 800,
  });
});

