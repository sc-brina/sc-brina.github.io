if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

$(function () {
  $(document).on("click", ".open_hongdae", function () {
    $(".pop_hongdae").fadeIn(300);
  });

  $(document).on("click", ".pop_close", function () {
    $(".pop_hongdae").fadeOut(300);
  });
});
