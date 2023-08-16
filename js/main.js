if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

var swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  loop: true,
  loopAdditionalSlides : 1,
  threshold:100,
  effect: "fade",
  speed: 300,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});