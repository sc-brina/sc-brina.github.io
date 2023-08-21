if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
};

AOS.init();
// aos

const toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll', _.throttle(function () {
  //_.throttle(함수, 시간)
  //gsap.to(요소, 지속시간, 옵션)
  if (window.scrollY > 400) {
    gsap.to('#to-top', 0.2, {
      x: 0
    });
  } else {
    gsap.to('#to-top', 0.2, {
      x: 100
    });
  }
}, 300));
toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.5, {
    scrollTo: 0
  });
});
// to-top

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
// footer

$(function() {
  $(document).on("click", ".mobMenu", function() {
    $("nav").fadeIn(200);
    $("nav ul").addClass("on");
  });

  $(document).on("click", ".menuClose", function() {
    $("nav").fadeOut(200);
    $("nav ul").removeClass("on");
  });
})
// mobile