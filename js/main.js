if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

const header = document.querySelector("header");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY == 0) {
      header.classList.remove("move-down");
    } else {
      header.classList.add("move-down");
    }
  })
);
// header

var swiper = new Swiper(".mainSwiper", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  loopAdditionalSlides : 1,
  threshold:100,
  effect: "fade",
  speed: 300,
  pagination: {
    el: ".swiper-pagination",
  },
});
// 