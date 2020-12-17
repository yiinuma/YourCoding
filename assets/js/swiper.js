document.addEventListener('DOMContentLoaded', function () {
  const card = new CardSlider();
});

class CardSlider {
  constructor() {
    this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
      spaceBetween: 56,
      autoHeight: true,
      // centeredSlides: true,
      slidesPerView: 1,
      speed: 500,
      grabCursor: true,
      breakpoints: {
        640: {
          slidesPerView: 2
        },
        960: {
          slidesPerView: 4
        },
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      }
    });
  }
}