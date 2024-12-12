const swiper = new Swiper(".slide-video", {
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 800,
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
  pagination: {
    el: ".s-videos .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 16,
    },
    550: {
      slidesPerView: 1.5,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2.1,
    },
    1024: {
      slidesPerView: 3.1,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});
