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
});
