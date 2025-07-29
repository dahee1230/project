// Swiper JS initialization for .main-visual
// You must include Swiper's CSS and JS in your HTML for this to work

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
