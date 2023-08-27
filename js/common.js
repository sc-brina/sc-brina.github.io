if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
};

AOS.init();
// aos

$(function() {
  $(document).on("mouseover", ".nav > li", function() {
    $(this).find(".sub").show();
  });

  $(document).on("mouseout", ".nav > li", function() {
    $(this).find(".sub").hide();
  });

  $(document).on("click", ".mobMenu", function() {
    $(".mobNavBg").fadeIn(100);
    $(".navMenu").addClass("on");
  });

  $(document).on("click", ".mobNavBg", function() {
    $(".mobNavBg").fadeOut(100);
    $(".navMenu").removeClass("on");
  });
});
// header

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
// footer

(function () {
  emailjs.init("k99m-qBosrHHTUaBS");
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      $("#loading").show();
      this.contact_number.value = (Math.random() * 100000) | 0;
      emailjs.sendForm("service_gz4h42j", "contact_basic", this).then(
        function () {
          alert("협력사 상담이 접수 되었습니다.");
          $("#loading").hide();
        },
        function (error) {
          alert("협력사 상담 요청이 실패했습니다. 다시 시도해주세요.");
          $("#loading").hide();
        }
      );
    });
};
// mail