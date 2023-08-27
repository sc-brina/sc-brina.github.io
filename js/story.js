if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

var swiper = new Swiper("#storyRolling .swiper", {
  slidesPerView: 3.5,
  spaceBetween: 10,
  loop: true,
  loopAdditionalSlides: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    641: {
      slidesPerView: 3.5,
    },
    0: {
      slidesPerView: 2.5,
    },
  },
});
// map