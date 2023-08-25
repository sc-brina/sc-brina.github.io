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
})
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
      this.contact_number.value = (Math.random() * 100000) | 0;
      emailjs.sendForm("service_gz4h42j", "template_onav8vh", this).then(
        function () {
          console.log("SUCCESS!");
          alert("메일 전송이 완료되었습니다. 😄");
        },
        function (error) {
          console.log("FAILED...", error);
          alert("메일 전송이 실패했습니다. 😞");
        }
      );
    });
};
// mail